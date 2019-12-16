const authenticationModels = require('../models/authentication')
const misc = require('./misc')
const JWT = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

module.exports = {
  login: async (req, res) => {
    let passwordUser = ''
    const { username, password } = req.body
    if (!username || !password) {
      return misc.response(
        res,
        400,
        true,
        'Username and password cannot be null!'
      )
    }
    authenticationModels
      .getSingleData(username)
      .then(async result => {
        passwordUser = result[0].password
        const validPass = await bcrypt.compareSync(password, result[0].password)
        if (!validPass) {
          return misc.response(res, 400, true, 'InvalidPassword!')
        }
      })
      .catch(err => {
        console.log(err)
        return misc.response(res, 400, true, 'Username not found!')
      })

    authenticationModels
      .login(username)
      .then(result => {
        if (result.length === 0) {
          return misc.response(res, 400, true, 'No data found!', req.body)
        }
        const role = result[0].role
        const id = result[0].id

        // signing JWT token
        const token = JWT.sign(
          // payload/data
          {
            username,
            role,
            id
          },
          process.env.SECRET_KEY,
          // options
          {
            expiresIn: '1h'
          }
        )
        return misc.response(res, 200, false, 'Success Login!', {
          token
        })
      })
      .catch(err => {
        console.log(err)
        return misc.response(
          res,
          400,
          true,
          'Something went wrong while login, check console for more info!',
          err
        )
      })
  },
  register: async (req, res) => {
    const { username, password, role } = req.body
    let count = 0
    if (!username || !password || !role) {
      return misc.response(
        res,
        400,
        true,
        'username, password and role cannot be null!'
      )
    }

    const data = {
      username,
      password,
      role,
      date_created: new Date(),
      date_updated: new Date()
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    console.log(hashedPassword)
    data.password = hashedPassword

    authenticationModels.checkDuplication(username).then(result => {
      count = result[0].count
    })

    authenticationModels
      .register(data)
      .then(result => {
        return misc.response(res, 201, false, 'Success Register!', {
          username: data.username,
          role: data.role,
          date_created: data.date_created,
          date_updated: data.date_updated
        })
      })
      .catch(err => {
        if (count) {
          return misc.response(res, 400, true, 'Username exist!')
        }
        console.log(err)
        return misc.response(
          res,
          400,
          true,
          'Something went wrong while register, check console for more info!'
        )
      })
  }
}
