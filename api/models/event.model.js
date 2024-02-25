const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  image: {
    type: String,
  },
  header: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event
