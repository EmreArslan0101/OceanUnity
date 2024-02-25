const asyncHandler = require('express-async-handler')
const User = require('../models/user.model')

const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    const { _id, firstName, lastName, email, phone, role, isVerified } = user
    res.status(200).json({
      _id,
      firstName,
      lastName,
      email,
      phone,
      role,
      isVerified,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    const { firstName, lastName, phone } = user

    user.firstName = req.body.firstName || firstName
    user.lastName = req.body.lastName || lastName
    user.phone = req.body.phone || phone

    const updatedUser = await user.save()
    res.status(200).json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updateUser.lastName,
      email: updatedUser.email,
      phone: updatedUser.phone,
      role: updatedUser.role,
      isVerified: updatedUser.isVerified,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const deleteUser = asyncHandler(async (req, res) => {
  const user = User.findById(req.params.id)
  if (!user) {
    res.status(404)
    throw new Error('User not found , please sign in')
  }

  await user.deleteOne({ _id: req.params.id })
  res.status(200).json({ message: 'User deleted successfully' })
})

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find().sort('-createdAt').select('-password')
  if (!users) {
    res.status(500)
    throw new Error('Something went wrong')
  }
  res.status(200).json(users)
})

const upgradeUserRole = asyncHandler(async (req, res) => {
  const { role, id } = req.body

  const user = await User.findById(id)
  if (!user) {
    res.status(404)
    throw new Error('User not found.')
  }

  user.role = role
  await user.save()

  res.status(200).json({ message: `User role updated to ${role}` })
})

module.exports = {
  getUser,
  updateUser,
  deleteUser,
  upgradeUserRole,
  getUsers,
}
