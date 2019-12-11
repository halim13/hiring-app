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

module.exports = Route
