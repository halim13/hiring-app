const express = require('express')
const Route = express.Router()

const skillsController = require('../controllers/skills')

Route
  .get('/skills/', skillsController.getSkills)
  .get('/skill/:id', skillsController.getSingleSkill)
  .post('/skill/', skillsController.addSkill)
  .patch('/skill/:id', skillsController.updateSkill)
  .delete('/skill/:id', skillsController.deleteSkill)

module.exports = Route
