const Topic = require('../models/topic.model')
const asyncHandler = require('express-async-handler')

const createTopic = asyncHandler(async (req, res) => {
  const { userID, header, content } = req.body

  const newTopic = new Topic({ userID, header, content })
  await newTopic.save()
  res.status(200).json(newTopic)
})

const getAllTopic = asyncHandler(async (req, res) => {
  const topics = await Topic.find().sort('-createdAt')
  res.status(200).json(topics)
})

const getTopic = asyncHandler(async (req, res) => {
  const topic = await Topic.findById(req.params.id)
    .populate({
      path: 'reviews',
      populate: {
        path: 'userID',
        model: 'User',
        select: 'firstName lastName',
      },
    })
    .exec()
  if (!topic) {
    res.status(404)
    throw new Error('Topic Not Found!')
  }
  res.status(200).json(topic)
})

const updateTopic = asyncHandler(async (req, res) => {
  const topic = await Topic.findById(req.params.id)
  if (!topic) {
    res.status(404)
    throw new Error('Topic Not Found!')
  }
  const updatedTopic = await Topic.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(updatedTopic)
})

const deleteTopic = asyncHandler(async (req, res) => {
  const topic = await Topic.findById(req.params.id)
  if (!topic) {
    res.status(404)
    throw new Error('Topic Not Found!')
  }
  await Topic.deleteOne({ _id: req.params.id })
  res.status(200).json('Topic Deleted Successfully')
})

module.exports = {
  createTopic,
  getAllTopic,
  getTopic,
  deleteTopic,
  updateTopic,
}
