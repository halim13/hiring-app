const express = require('express')
const Route = express.Router()

const companiesController = require('../controllers/companies')
const image = require('../controllers/image')
const auth = require('../helpers/authCheck.js')

Route.get('/companies/', companiesController.getCompanies)
  .get('/company/:id', companiesController.getSingleCompany)
  .post(
    '/company/',
    auth.companyCheck,
    image.upload.single('logo'),
    companiesController.addCompany
  )
  .patch(
    '/company/:id',
    auth.companyCheck,
    image.upload.single('logo'),
    companiesController.updateCompany
  )
  .put(
    '/company/:id',
    auth.companyCheck,
    image.upload.single('logo'),
    companiesController.updateCompany
  )
  .delete('/company/:id', auth.adminCheck, companiesController.deleteCompany)
  .post('/engineer/:id/message', companiesController.sendMessage)
  .get(
    '/company/:id/messages',
    auth.companyCheck,
    companiesController.getMessages
  )
  .get(
    '/company/:id/message/:idEngineer',
    auth.companyCheck,
    companiesController.getMessage
  )

module.exports = Route
