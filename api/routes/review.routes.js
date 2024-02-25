const express = require('express')

const {
  addNewComment,
  updateComment,
  deleteComment,
} = require('../controller/review.controller')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/addComment', protect, addNewComment)
// router.get('/get-allReviews', getAllReviews)
router.delete('/delete-review/:id', protect, deleteComment)
router.put('/update-review/:id', protect, updateComment)

module.exports = router
