const mongoose = require('mongoose')

const topicSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
        default: 0,
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Topic = mongoose.model('Topic', topicSchema)

module.exports = Topic
