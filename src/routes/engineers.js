const express = require('express')
const Route = express.Router()

const engineersController = require('../controllers/engineers')

Route
  .get('/engineers/', engineersController.getEngineers)
  .get('/engineer/:id', engineersController.getSingleEngineer)
  .get('/engineer/:id/messages', engineersController.getMessages)
  .post('/engineer/:id/message', engineersController.addMessage)
  .post('/engineer/', engineersController.addEngineer)
  .patch('/engineer/:id', engineersController.updateEngineer)
  .delete('/engineer/:id', engineersController.deleteEngineer)

module.exports = Route
