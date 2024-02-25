const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })
}

const hashToken = (token) => {
  return crypto.createHash('sha256').update(token.toString()).digest('hex')
}

const correctUserPassword = (loginUserPassword, databaseUserPassword) => {
  return bcrypt.compare(loginUserPassword, databaseUserPassword)
}

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY)
}

module.exports = { generateToken, hashToken, correctUserPassword, verifyToken }
