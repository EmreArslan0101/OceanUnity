const express = require('express')

const {
  createTopic,
  getAllTopic,
  updateTopic,
  deleteTopic,
  getTopic,
} = require('../controller/topic.controller')

const router = express.Router()

router.post('/create-topic', createTopic)
router.get('/get-topics', getAllTopic)
router.get('/get-topic/:id', getTopic)
router.put('/update-topic/:id', updateTopic)
router.delete('/delete-topic/:id', deleteTopic)
module.exports = router
