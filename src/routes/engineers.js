const express = require('express')
const Route = express.Router()

const engineersController = require('../controllers/engineers')

Route
  .get('/engineers/', engineersController.getEngineers)
  .get('/engineer/:id', engineersController.getSingleEngineer)
  .post('/engineer/', engineersController.addEngineer)
  .patch('/engineer/:id', engineersController.updateEngineer)
  .delete('/engineer/:id', engineersController.deleteEngineer)
  .post('/company/:id/message', engineersController.sendMessage)
  .get('/engineer/:id/messages', engineersController.getMessages)
  .get('/engineer/:id/message/:idCompany', engineersController.getMessage)

module.exports = Route
