const express = require('express')
const Route = express.Router()

const authenticationController = require('../controllers/authentication')

Route.post('/login/', authenticationController.login).post(
  '/register/',
  authenticationController.register
)

module.exports = Route
