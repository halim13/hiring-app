const express = require('express')
const Route = express.Router()
const image = require('../controllers/photoEngineer')

const engineersController = require('../controllers/engineers')

Route
  .get('/engineers/', engineersController.getEngineers)
  .get('/engineer/:id', engineersController.getSingleEngineer)
  .post('/engineer/', image.upload.single('photo'), engineersController.addEngineer)
  .patch('/engineer/:id', image.upload.single('photo'), engineersController.updateEngineer)
  .put('/engineer/:id', image.upload.single('photo'), engineersController.updateEngineer)
  .delete('/engineer/:id', engineersController.deleteEngineer)
  .post('/company/:id/message', engineersController.sendMessage)
  .get('/engineer/:id/messages', engineersController.getMessages)
  .get('/engineer/:id/message/:idCompany', engineersController.getMessage)

module.exports = Route
