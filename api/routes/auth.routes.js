const {
  registerUser,
  sendVerificationEmail,
  verifyUser,
  logoutUser,
  loginUser,
  sendAutomatedEmail,
  sendLoginCode,
  loginWithCode,
  loginStatus,
  changePassword,
  forgotPassword,
  resetPassword,
  resetToken,
  getUserRole,
} = require('../controller/auth.controller')
const { protect } = require('../middleware/authMiddleware')

const express = require('express')
const router = express.Router()

router.post('/register', registerUser) //test ettim
router.post('/sendVerificationEmail', protect, sendVerificationEmail) //test ettim
router.patch('/verifyUser/:verificationToken', verifyUser) //test ettim
router.post('/login', loginUser) //test ettim
router.get('/logout', logoutUser) //test ettim
router.get('/loginStatus', loginStatus)
router.get('/getUserRole', getUserRole)
router.post('/sendAutomatedEmail', protect, sendAutomatedEmail) //test ettim
router.post('/sendLoginCode/:email', sendLoginCode)
router.post('/loginWithCode/:email', loginWithCode)
router.patch('/changePassword', protect, changePassword) //test ettim
router.post('/forgotPassword', forgotPassword) //test ettim
router.patch('/resetPassword/:resetToken', resetToken) // test ettim

module.exports = router
