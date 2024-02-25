const asyncHandler = require('express-async-handler')
const User = require('../models/user.model')
const {
  generateToken,
  correctUserPassword,
  verifyToken,
  hashToken,
} = require('../utils/securityUtils')
const parser = require('ua-parser-js')
const sendEmail = require('../utils/sendEmail')
const Token = require('../models/token.model')
const crypto = require('crypto')
const Cryptr = require('cryptr')
const cryptr = new Cryptr(process.env.CRYPTR_KEY)

//Register User verified
const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body

  /*Validation */
  if (!fullName || !email || !password) {
    res.status(400)
    throw new Error('Please fill in all the required fields.')
  }
  if (password.length < 6) {
    res.status(400)
    throw new Error('Password must be up to 6 characters.')
  }

  //Check if user exists

  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('This email already be registered.')
  }

  //Create new user

  const user = await User.create({
    fullName,
    email,
    password,
  })

  //Generate Token
  const token = generateToken(user._id)

  //Send HTTP-only cookie
  res.cookie('token', token, {
    path: '/',
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400) /*1 Day */,
    sameSite: 'none',
    secure: true,
  })

  if (user) {
    const {
      _id,
      firstName,
      lastName,
      email,
      phone,
      address,
      role,
      isVerified,
    } = user
    res.status(201).json({
      _id,
      firstName,
      lastName,
      email,
      phone,
      address,
      role,
      isVerified,
      token,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data.')
  }
})

//send login code
const sendLoginCode = asyncHandler(async (req, res) => {
  const { email } = req.params
  const user = await User.findOne({ email })

  if (!user) {
    res.status(404)
    throw new Error('User Not Found')
  }

  //Find Login Code in DB
  const token = await Token.findOne({
    userId: user._id,
    expiresAt: { $gt: Date.now() },
  })
  if (!token) {
    res.status(404)
    throw new Error('Invalid or expired token, please login again!')
  }
  const loginCode = cryptr.decrypt(token.lToken)

  //send login code
  const subject = 'Login Code your Account - AUTHZ'
  const send_to = email
  const sent_from = process.env.EMAIL_USER
  const reply_to = 'noreply@batik.com'
  const template = 'loginCode'
  const name = user.name
  const link = loginCode

  try {
    await sendEmail(subject, send_to, sent_from, reply_to, template, name, link)
    res.status(200).json({ message: `Access code  sent to ${email}` })
  } catch (error) {
    res.status(500)
    throw new Error('Email not sent, please try again!.')
  }
})

//Login With Code
const loginWithCode = asyncHandler(async (req, res) => {
  const { email } = req.params
  const { loginCode } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    res.status(404)
    throw new Error('User not found')
  }

  //Find User Login Token
  const userToken = await Token.findOne({
    userId: user._id,
    expiresAt: { $gt: Date.now() },
  })

  if (!userToken) {
    res.status(404)
    throw new Error('Invalid or Expired Code, please login again')
  }

  const decryptedLoginCode = cryptr.decrypt(userToken.lToken)

  if (loginCode !== decryptedLoginCode) {
    res.status(400)
    throw new Error('Incorrect login code, please try again')
  } else {
    // Register the userAgent
    const ua = parser(req.headers['user-agent'])
    const thisUserAgent = ua.ua
    user.userAgent.push(thisUserAgent)
    await user.save()
    //   Generate Token
    const token = generateToken(user._id)

    // Send HTTP-only cookie
    res.cookie('token', token, {
      path: '/',
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400), // 1 day
      sameSite: 'none',
      secure: true,
    })
    const { _id, name, email, phone, bio, isVerified, role } = user
    res.status(200).json({
      _id,
      name,
      email,

      phone,
      bio,
      isVerified,
      role,
      token,
    })
  }
})

//Send Verificaion Email verified
const sendVerificationEmail = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  if (!user) {
    res.status(404)
    throw new Error('User Not Found')
  }

  if (user.isVerified) {
    res.status(500)
    throw new Error('User Already Verified')
  }

  let token = Token.findOne({ userId: user._id })
  if (token) {
    await token.deleteOne()
  }

  const verificationToken = crypto.randomBytes(32).toString('hex') + user._id

  const hashedToken = hashToken(verificationToken)

  console.log(verificationToken)

  await new Token({
    userId: user._id,
    vToken: hashedToken,
    createdAt: Date.now(),
    expiresAt: Date.now() + 60 * (60 * 1000) /*1 hour */,
  }).save()

  const verificationURL = `${process.env.FRONTEND_URL}/account/verify/${verificationToken}`

  //send Email
  const subject = 'verify your Account - AUTHZ'
  const send_to = user.email
  const sent_from = process.env.EMAIL_USER
  const reply_to = 'noreply@batik.com'
  const template = 'email'
  const name = `${user.firstName} ${user.lastName}`
  const link = verificationURL

  try {
    await sendEmail(subject, send_to, sent_from, reply_to, template, name, link)
    res.status(200).json({ message: 'Verification Email sent' })
  } catch (error) {
    res.status(500)
    throw new Error('Email not sent, please try again!.')
  }
})

//Verify User
const verifyUser = asyncHandler(async (req, res) => {
  const { verificationToken } = req.params

  const hashedToken = hashToken(verificationToken)

  const userToken = await Token.findOne({
    vToken: hashedToken,
    expiresAt: { $gt: Date.now() },
  })

  if (!userToken) {
    res.status(404)
    throw new Error('Invalid or Expired Token')
  }

  //Find User
  const user = await User.findById({ _id: userToken.userId })
  if (user.isVerified) {
    res.status(400)
    throw new Error('User Already verified.')
  }

  //Now verify User
  user.isVerified = true
  await user.save()
  res.status(200).json({
    message: `Account verified successfully welcome ${user.firstName} ${user.lastName}`,
  })
})

//Login User verified
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  //Validation
  if (!email || !password) {
    res.status(400)
    throw new Error('Please email and password.')
  }

  const user = await User.findOne({ email })
  if (!user) {
    res.status(404)
    throw new Error('User not found, please signup.')
  }

  const passwordIsCorret = await correctUserPassword(password, user.password)
  if (!passwordIsCorret) {
    res.status(400)
    throw new Error('Invalid email or password.')
  }

  //Generate Token
  const token = generateToken(user._id)
  if (user && passwordIsCorret) {
    //Send HTTP-only cookie
    res.cookie('token', token, {
      path: '/',
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400) /*1 Day */,
      sameSite: 'none',
      secure: true,
    })

    const { _id, fullName, email, role, isVerified } = user
    res.status(201).json({
      _id,
      fullName,
      email,
      role,
      isVerified,
      token,
    })
  } else {
    res.status(500)
    throw new Error('Somethings went wrong, please try again')
  }
})

//Logout User
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('token', '', {
    path: '/',
    httpOnly: true,
    expires: new Date(0),
    sameSite: 'none',
    secure: true,
  })
  return res.status(200).json({ message: 'Logout Successfully' })
})

//Login Status
const loginStatus = asyncHandler(async (req, res) => {
  const token = req.cookies.token
  if (!token) {
    return res.json(false)
  }

  const isVerifiedToken = verifyToken(token)
  if (isVerifiedToken) {
    return res.json(true)
  }
  return res.json(false)
})

const getUserRole = asyncHandler(async (req, res) => {
  const token = req.cookies.token
  const verified = verifyToken(token)

  const user = await User.findById(verified.id)
  const userRole = user.role

  res.status(200).json(userRole)
})

//Send Automated Email
const sendAutomatedEmail = asyncHandler(async (req, res) => {
  const { subject, send_to, reply_to, template, url } = req.body

  if (!subject || !send_to || !reply_to || !template) {
    res.status(500)
    throw new Error('Missing email parameter.')
  }

  //Get User
  const user = await User.findOne({ email: send_to })
  if (!user) {
    res.status(404)
    throw new Error('User not found.')
  }

  const sent_from = process.env.EMAIL_USER
  const name = user.name
  const link = `${process.env.FRONTEND_URL}${url}`

  try {
    await sendEmail(subject, send_to, sent_from, reply_to, template, name, link)
    res.status(200).json({ message: 'Email sent' })
  } catch (error) {
    res.status(500)
    throw new Error('Email not sent, please try again!.')
  }
})

//Forgot Password
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body
  const user = await User.findOne({ email })

  if (!user) {
    res.status(404)
    throw new Error('E posta adresine kayıtlı kullanıcı bulunamadı')
  }

  // Delete token if it exists in DB
  let token = await Token.findOne({ userId: user._id })
  if (token) {
    await token.deleteOne()
  }

  // Create Reste Token
  let resetToken = crypto.randomBytes(32).toString('hex') + user._id
  console.log(resetToken)

  // Hash token before saving to DB
  const hashedToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex')

  // Save Token to DB
  await new Token({
    userId: user._id,
    rToken: hashedToken,
    createdAt: Date.now(),
    expiresAt: Date.now() + 30 * (60 * 1000), // Thirty minutes
  }).save()

  // Construct Reset Url
  const resetUrl = `${process.env.FRONTEND_URL}/account/resetPassword/${resetToken}`

  // Reset Email
  const subject = 'Password Reset Request'
  const send_to = user.email
  const sent_from = process.env.EMAIL_USER
  const reply_to = 'noreply@batiko.com'
  const template = 'forgotPassword'
  const name = `${user.firstName} ${user.lastName}`
  const link = resetUrl

  try {
    await sendEmail(subject, send_to, sent_from, reply_to, template, name, link)
    res.status(200).json({
      success: true,
      message: 'Parola Sıfırlama E postası Gönderildi!',
    })
  } catch (error) {
    res.status(500)
    throw new Error('Email not sent, please try again')
  }
})

//Reset Token
const resetToken = asyncHandler(async (req, res) => {
  const { resetToken } = req.params
  const { password } = req.body

  const hashedToken = hashToken(resetToken)

  const userToken = await Token.findOne({
    rToken: hashedToken,
    expiresAt: { $gt: Date.now() },
  })

  if (!userToken) {
    res.status(404)
    throw new Error('Invalid or Expired Token')
  }

  //Find User
  const user = await User.findById({ _id: userToken.userId })

  user.password = password
  await user.save()
  res.status(200).json({
    message: `Password resset successfully please try login new password`,
  })
})

//Reset Password
const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body
  const { resetToken } = req.params

  // Hash token, then compare to Token in DB
  const hashedToken = hashToken(resetToken)

  // Find Token in DB
  const userToken = await Token.findOne({
    token: hashedToken,
    expiresAt: { $gt: Date.now() },
  })

  if (!userToken) {
    res.status(404)
    throw new Error('Invalid or Expired Token')
  }

  // Find user and reset password
  const user = await User.findOne({ _id: userToken.userId })
  user.password = password
  await user.save()

  res.status(200).json({
    message: 'Password Reset Successful, Please Login',
  })
})

//Change Password
const changePassword = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  const { oldPassword, newPassword } = req.body
  if (!user) {
    res.status(404)
    throw new Error('User not found ')
  }

  if (!oldPassword || !newPassword) {
    res.status(400)
    throw new Error('Please enter old and new password')
  }

  const passwordIsCorret = correctUserPassword(oldPassword, user.password)

  if (user && passwordIsCorret) {
    user.password = newPassword
    await user.save()
    res
      .status(200)
      .json({ message: 'Password changed Successfully , please re-login' })
  } else {
    res.status(400)
    throw new Error('Current Password not valid')
  }
})

module.exports = {
  registerUser,
  sendLoginCode,
  loginWithCode,
  sendVerificationEmail,
  verifyUser,
  loginUser,
  logoutUser,
  loginStatus,
  sendAutomatedEmail,
  forgotPassword,
  changePassword,
  resetToken,
  resetPassword,
  getUserRole,
}
