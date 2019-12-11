const express = require('express')
const Route = express.Router()

const homeController = require('../controllers/home')

Route
  .get('/', homeController.getHome)

module.exports = Route
