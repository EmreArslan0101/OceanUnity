const asyncHandler = require('express-async-handler')
const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const { verifyToken } = require('../utils/securityUtils')

const protect = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies.token
    if (!token) {
      res.status(401)
      throw new Error('Not authorized, please login')
    }

    //Verify Token
    const verified = verifyToken(token)

    //Get user id from token
    const user = await User.findById(verified.id).select('-password')

    if (!user) {
      res.status(404)
      throw new Error('User not found')
    }

    if (user.role === 'suspended') {
      res.status(400)
      throw new Error('user suspended please contact support')
    }

    req.user = user
    next()
  } catch (error) {
    res.status(401)
    throw new Error('Not authorized, please login')
  }
})

const adminOnly = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as an admin')
  }
})

const authorOnly = asyncHandler(async (req, res, next) => {
  if (req.user.role === 'admin' || req.user.role === 'author') {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as an author')
  }
})

const verifiedOnly = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.isVerified) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized , account not verified')
  }
})

module.exports = { protect, authorOnly, verifiedOnly, adminOnly }
