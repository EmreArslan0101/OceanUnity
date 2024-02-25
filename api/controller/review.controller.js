const Review = require('../models/review.model')
const asyncHandler = require('express-async-handler')
const Topic = require('../models/topic.model')

const addNewComment = asyncHandler(async (req, res) => {
  const { message, topicID } = req.body
  const findTopic = await Topic.findById(topicID)
  if (!findTopic) {
    res.status(404)
    throw new Error('Topic Not Found')
  }
  const newReview = new Review({
    topicID,
    message,
    userID: req.user._id,
  })

  const savedReview = await newReview.save()
  findTopic.reviews.push(savedReview._id)

  await findTopic.save()
  res.status(201).json({ message: 'Review added successfully' })
})

// Update an existing comment
const updateComment = asyncHandler(async (req, res) => {
  const { message } = req.body

  try {
    const existingReview = await Review.findById(req.params.id)

    if (!existingReview) {
      res.status(404)
      throw new Error('Comment Not Found')
    }

    // Check if the user updating the comment is the owner of the comment
    if (existingReview.userID.toString() !== req.user._id.toString()) {
      res.status(403)
      throw new Error('Unauthorized: You are not the owner of this comment')
    }

    existingReview.message = message
    const updatedReview = await existingReview.save()

    res
      .status(200)
      .json({ message: 'Comment updated successfully', updatedReview })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Delete an existing comment
const deleteComment = asyncHandler(async (req, res) => {
  try {
    const existingReview = await Review.findById(req.params.id)

    if (!existingReview) {
      res.status(404)
      throw new Error('Comment Not Found')
    }

    // Check if the user deleting the comment is the owner of the comment
    if (existingReview.userID.toString() !== req.user._id.toString()) {
      res.status(403)
      throw new Error('Unauthorized: You are not the owner of this comment')
    }

    // Remove the comment from the associated topic
    const topicID = existingReview.topicID
    const findTopic = await Topic.findById(topicID)

    if (findTopic) {
      findTopic.reviews = findTopic.reviews.filter(
        (review) => review.toString() !== req.params.id
      )
      await findTopic.save()
    }

    // Delete the comment
    await Review.deleteOne({ _id: req.params.id })

    res.status(200).json({ message: 'Comment deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = {
  addNewComment,
  updateComment,
  deleteComment,
}
