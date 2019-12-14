const express = require('express')
const Route = express.Router()

const companiesController = require('../controllers/companies')
const image = require('../controllers/image')

Route
  .get('/companies/', companiesController.getCompanies)
  .get('/company/:id', companiesController.getSingleCompany)
  .post('/company/', image.upload.single('logo'), companiesController.addCompany)
  .patch('/company/:id', image.upload.single('logo'), companiesController.updateCompany)
  .put('/company/:id', image.upload.single('logo'), companiesController.updateCompany)
  .delete('/company/:id', companiesController.deleteCompany)
  .post('/engineer/:id/message', companiesController.sendMessage)
  .get('/company/:id/messages', companiesController.getMessages)
  .get('/company/:id/message/:idEngineer', companiesController.getMessage)

module.exports = Route
