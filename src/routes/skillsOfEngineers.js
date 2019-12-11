const express = require('express')
const Route = express.Router()

const skillsOfEngineersController = require('../controllers/skillsOfEngineers')

Route
  .get('/skillsOfEngineers/', skillsOfEngineersController.getSkillsOfEngineers)
  .get('/skillOfEngineer/:id', skillsOfEngineersController.getSingleSkillOfEngineer)
  .post('/skillOfEngineer/', skillsOfEngineersController.addSkillOfEngineer)
  .patch('/skillOfEngineer/:id', skillsOfEngineersController.updateSkillOfEngineer)
  .delete('/skillOfEngineer/:id', skillsOfEngineersController.deleteSkillOfEngineer)

module.exports = Route
