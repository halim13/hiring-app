const express = require('express')
const Route = express.Router()
const image = require('../controllers/photoEngineer')

const engineersController = require('../controllers/engineers')
const auth = require('../helpers/authCheck.js')

Route.get('/engineers/', engineersController.getEngineers)
  .get('/engineer/:id', engineersController.getSingleEngineer)
  .post(
    '/engineer/',
    auth.engineerCheck,
    image.upload.single('photo'),
    engineersController.addEngineer
  )
  .patch(
    '/engineer/:id',
    auth.engineerCheck,
    image.upload.single('photo'),
    engineersController.updateEngineer
  )
  .put(
    '/engineer/:id',
    auth.engineerCheck,
    image.upload.single('photo'),
    engineersController.updateEngineer
  )
  .delete('/engineer/:id', auth.adminCheck, engineersController.deleteEngineer)
  .post(
    '/company/:id/message',
    auth.companyCheck,
    engineersController.sendMessage
  )
  .get(
    '/engineer/:id/messages',
    auth.engineerCheck,
    engineersController.getMessages
  )
  .get(
    '/engineer/:id/message/:idCompany',
    auth.engineerCheck,
    engineersController.getMessage
  )

module.exports = Route
