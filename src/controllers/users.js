const usersModels = require('../models/users')

module.exports = {
  getUsers: (req, res) => {
    usersModels.getUsers()
      .then(result => {
        const results=[{
          'status':200,
          'error':false,
          'message':'Success Get All Data',
          'data':result
        }]
        res.json(results)
      })
      .catch(err => {
        const results=[{
          'status':400,
          'error':true,
          'message':'Something Wrong. Check console for more info!'
        }]
        res.status(400).json(results)
        console.log(err)
      })
  },
  getSingleUser: (req, res) => {
    const id = req.params.id

    usersModels.getSingleUsers(id)
      .then(result => {
        const results=[{
          'status':200,
          'error':false,
          'message':'Success Get Single Data',
          'data':result
        }]
        res.json(results)
      })
      .catch(err => {
        const results=[{
          'status':400,
          'error':true,
          'message':'Something Wrong. Check console for more info!'
        }]
        res.status(400).json(results)
        console.log(err)
      })
  },
  addUser: (req, res) => {
    const { username, password, role} = req.body
    const data = {
      username,
      password,
      role
    }
    usersModels.addUsers(data)
      .then(result => {
        const results=[{
          'status':201,
          'error':false,
          'message':'Success Add Data',
          data
        }]
        res.json(results)
      })
      .catch(err => {
        const results=[{
          'status':400,
          'error':true,
          'message':err
        }]
        res.status(400).json(results)
        console.log(err)
      })
  },
  updateUser: (req, res) => {
    const id = req.params.id
    const { username, password, role } = req.body
    const data = {
      name,
      password,
      role
    }

    usersModels.updateUsers(data, id)
      .then(result => {
        const results=[{
          'status':201,
          'error':false,
          'message':'Success Update Data',
          data
        }]
        res.json(results)
      })
      .catch(err => {
        const results=[{
          'status':400,
          'error':true,
          'message':err
        }]
        res.status(400).json(results)
        console.log(err)
      })
  },
  deleteUser: (req, res) => {
    const id = req.params.id

    usersModels.deleteUsers(id)
      .then(result => {
        const results=[{
          'status':200,
          'error':false,
          'message':'Success Delete Data'
        }]
        res.json(results)
      })
      .catch(err => {
        const results=[{
          'status':400,
          'error':true,
          'message':err
        }]
        res.status(400).json(results)
        console.log(err)
      })
  }
}
