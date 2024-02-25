const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    topicID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Topic',
      required: true,
    },
    // image: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review
