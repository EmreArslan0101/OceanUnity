const Event = require('../models/event.model')
const asyncHandler = require('express-async-handler')

const getEvent = asyncHandler(async (req, res) => {
  const eventID = req.params.id
  const event = await Event.findById(eventID)

  if (!event) {
    res.status(404).json({ error: 'Event not found' })
    return
  }

  res.json({ event })
})

const getAllEvents = asyncHandler(async (req, res) => {
  const events = await Event.find()
  res.json({ events })
})

module.exports = {
  getEvent,
  getAllEvents,
}

const createEvent = asyncHandler(async (req, res) => {
  const { image, header, content } = req.body
  const newEvent = new Event({
    userID: '65d9d57ec7f174deafb91650',
    image,
    header,
    content,
  })
  await newEvent.save()
  res.status(201).json({ message: 'Event added successfully', event: newEvent })
})

const deleteEvent = asyncHandler(async (req, res) => {
  const eventID = req.params.id
  const event = await Event.findById(eventID)
  await Event.findByIdAndDelete(eventID)
  res.json({ message: 'Event deleted successfully' })
})

// Event güncelleme
const updateEvent = asyncHandler(async (req, res) => {
  try {
    const eventID = req.params.id

    const event = await Event.findById(eventID)

    // userID kontrolü
    if (event.userID.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: 'Unauthorized' })
    }

    // Güncelleme işlemi
    await Event.findByIdAndUpdate(eventID, req.body, {
      new: true,
    })

    res.json({ message: 'Event updated successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

module.exports = {
  createEvent,
  deleteEvent,
  updateEvent,
  getEvent,
  getAllEvents,
}
