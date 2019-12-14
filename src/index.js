const express = require('express')
const Route = express.Router()

const home = require('./routes/home')
const companies = require('./routes/companies')
const engineers = require('./routes/engineers')
const showcases = require('./routes/showcases')
const auth = require('./routes/auth')
const authentication = require('./routes/authentication')
const users = require('./routes/users')

Route
	.use('/', home)
	.use('/api/v1', companies)
	.use('/api/v1', engineers)
	.use('/api/v1', showcases)
	.use('/api/v1', users)
	.use('/api/v1', authentication)

module.exports = Route
