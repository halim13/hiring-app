const express = require('express')
const Route = express.Router()

const showcasesController = require('../controllers/showcases')

Route
  .get('/showcases/', showcasesController.getShowcases)
  .get('/showcase/:id', showcasesController.getSingleShowcase)
  .post('/showcase/', showcasesController.addShowcase)
  .patch('/showcase/:id', showcasesController.updateShowcase)
  .delete('/showcase/:id', showcasesController.deleteShowcase)

module.exports = Route
