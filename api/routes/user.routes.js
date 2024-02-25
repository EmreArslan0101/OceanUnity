const express = require('express')
const { adminOnly, protect } = require('../middleware/authMiddleware')
const {
  getUsers,
  deleteUser,
  upgradeUserRole,
  updateUser,
  getUser,
} = require('../controller/user.controller')
const router = express.Router()

router.get('/getUsers', protect, adminOnly, getUsers) //test ettim
router.get('/getUser', protect, getUser) //test ettim

router.delete('/:id', protect, adminOnly, deleteUser) //test ettim
router.patch('/updateUser', protect, updateUser)
router.patch('/upgrade', protect, adminOnly, upgradeUserRole)

module.exports = router
