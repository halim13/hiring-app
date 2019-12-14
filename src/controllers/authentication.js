const authenticationModels = require('../models/authentication')
const misc = require('./misc')

module.exports = {
  login: (req, res) => {

    const { username, password } = req.body
    if(!username || !password){
      misc.response(res, 400, true, 'Username and password cannot be null!')
    }

    authenticationModels.login(username, password)
      .then(result => {
        if(result.length===0){
          misc.response(res, 400, true, 'No data found!', req.body)
        }
        misc.response(res, 200, false, 'Success Login!',result)
      })
      .catch(err => {
        console.log(err)
        misc.response(res, 400, true, 'Something went wrong, check console for more info!', err)
      })
  },
  register: (req, res) => {
    const { username, password, role} = req.body
    let count = 0
    if(!username || !password || !role){
      misc.response(res, 400, true, 'username, password and role cannot be null!')
    }

    const data = {
      username,
      password,
      role,
      date_created:new Date(),
      date_updated:new Date()
    }
    authenticationModels.checkDuplication(username)
    .then(result =>{
      count = result[0].count
    })

    authenticationModels.register(data)
      .then(result => {
        misc.response(res, 201, false, 'Success Register!', data)
      })
      .catch(err => {
        if(count){
          misc.response(res, 400, true, 'Username exist!')
        }
        console.log(err)
        misc.response(res, 400, true, 'Something went wrong, check console for more info!')
      })
  }
}
