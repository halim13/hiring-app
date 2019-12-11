const express = require('express')
const Route = express.Router()

const home = require('./routes/home')
const companies = require('./routes/companies')
const engineers = require('./routes/engineers')
const skills = require('./routes/skills')
const skillsOfEngineers = require('./routes/skillsOfEngineers')
const showcases = require('./routes/showcases')

Route
  .use('/', home)
  .use('/api/v1', companies)
  .use('/api/v1', engineers)
  .use('/api/v1', skills)
  .use('/api/v1', skillsOfEngineers)
  .use('/api/v1', showcases)

module.exports = Route
