const express = require('express')
const Route = express.Router()

const usersController = require('../controllers/users')

Route
  .get('/users/', usersController.getUsers)
  .get('/user/:id', usersController.getSingleUser)
  .post('/user/', usersController.addUser)
  .patch('/user/:id', usersController.updateUser)
  .put('/user/:id', usersController.updateUser)
  .delete('/User/:id', usersController.deleteUser)

module.exports = Route
