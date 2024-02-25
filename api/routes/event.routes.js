const express = require('express')

const { getAllEvents } = require('../controller/event.controller')

const router = express.Router()

router.get('/get-blogs', getAllEvents)

module.exports = router
