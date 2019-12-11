require('dotenv/config') // get env value
const express = require('express')
const JWT = require('jsonwebtoken')
const Route = express.Router()
// check
const auth = require('../helpers/authCheck.js')

Route.post('/login',(req,res)=>{
	// get email and password from req.body
	const {email, password} = req.body
	// check login if email and password are match from db
	// 1. ckeck email
	// 2. check password match 
	
	const userid = 11111111 // for example, do not copy, get from db instead

	// signing JWT token
	const token = JWT.sign(
		// payload/data
		{
			email,
			userid
		},
		process.env.SECRET_KEY,
		// options
		{
			expiresIn: '1h'
		}
	)
	res.status(201).json({
		status: 201,
		message:'sucess login!',
		token,
		user:{
			email,
			userid
		}
	})
	// res.send(`email: ${email} | password: ${password}`)
})

// ckeck auth at user and token
Route.get('/secret', auth.check, (req,res)=>{
	res.status(200).json({
		msg:'authhenticated!'
	})
})

module.exports = Route
