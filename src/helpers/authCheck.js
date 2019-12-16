require('dotenv/config') // get env value
const JWT = require('jsonwebtoken')

module.exports = {
  check: (req, res, next) => {
    // get header
    const { authorization, username, id, role } = req.headers
    // console.log(req.headers)
    // check
    if (!authorization || !username || !id || !role) {
      return res.status(404).json({
        message: 'unauthorized!'
      })
    }

    // split to get real token
    const token = authorization.split(' ')[1]

    // decode JWT and check for validity
    JWT.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err && err.name === 'JsonWebTokenError') {
        return res.status(403).json({
          message: 'invalid token!',
          err
        })
      }
      if (err && err.name === 'JTokenExpiredError') {
        return res.status(403).json({
          message: 'token expired!',
          err
        })
      }

      console.log(decoded)

      // ceck
      if (email != decoded.email || parseInt(userid) !== decoded.userid) {
        return res.status(403).json({
          message: 'token not valid for selected id/email',
          message2: 'mau maling ya'
        })
      }
    })

    next()
  },
  engineerCheck: (req, res, next) => {
    // get header
    const { authorization } = req.headers
    // console.log(req.headers)
    // check
    if (!authorization) {
      return res.status(404).json({
        message: 'unauthorized!'
      })
    }

    // split to get real token
    const token = authorization.split(' ')[1]

    // decode JWT and check for validity
    JWT.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err && err.name === 'JsonWebTokenError') {
        return res.status(403).json({
          message: 'invalid token!',
          err
        })
      }
      if (err && err.name === 'JTokenExpiredError') {
        return res.status(403).json({
          message: 'token expired!',
          err
        })
      }

      console.log(decoded)

      const username = decoded.username
      const id = decoded.id
      const role = decoded.role
      // ceck
      if (
        role != 'engineer' ||
        role != 'admin' ||
        username != decoded.username ||
        parseInt(id) !== decoded.id
      ) {
        return res.status(403).json({
          message: 'token not valid for selected username',
          message2: 'mau maling ya'
        })
      }
    })

    next()
  },
  companyCheck: (req, res, next) => {
    // get header
    const { authorization } = req.headers
    // console.log(req.headers)
    // check
    if (!authorization) {
      return res.status(404).json({
        message: 'unauthorized!'
      })
    }

    // split to get real token
    const token = authorization.split(' ')[1]

    // decode JWT and check for validity
    JWT.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err && err.name === 'JsonWebTokenError') {
        return res.status(403).json({
          message: 'invalid token!',
          err
        })
      }
      if (err && err.name === 'JTokenExpiredError') {
        return res.status(403).json({
          message: 'token expired!',
          err
        })
      }

      console.log(decoded)

      const username = decoded.username
      const id = decoded.id
      const role = decoded.role
      // ceck
      if (
        role != 'company' ||
        username != decoded.username ||
        parseInt(id) !== decoded.id
      ) {
        return res.status(403).json({
          message: 'token not valid for selected username',
          message2: 'mau maling ya'
        })
      }
    })

    next()
  },
  engineerCheck: (req, res, next) => {
    // get header
    const { authorization } = req.headers
    // console.log(req.headers)
    // check
    if (!authorization) {
      return res.status(404).json({
        message: 'unauthorized!'
      })
    }

    // split to get real token
    const token = authorization.split(' ')[1]

    // decode JWT and check for validity
    JWT.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err && err.name === 'JsonWebTokenError') {
        return res.status(403).json({
          message: 'invalid token!',
          err
        })
      }
      if (err && err.name === 'JTokenExpiredError') {
        return res.status(403).json({
          message: 'token expired!',
          err
        })
      }

      console.log(decoded)

      const username = decoded.username
      const id = decoded.id
      const role = decoded.role
      // ceck
      if (
        role !== 'engineer' ||
        username !== decoded.username ||
        parseInt(id) !== decoded.id
      ) {
        return res.status(403).json({
          message: 'token not valid for selected username',
          message2: 'mau maling ya'
        })
      }
    })

    next()
  },
  adminCheck: (req, res, next) => {
    // get header
    const { authorization } = req.headers
    // console.log(req.headers)
    // check
    if (!authorization) {
      return res.status(404).json({
        message: 'unauthorized!'
      })
    }

    // split to get real token
    const token = authorization.split(' ')[1]

    // decode JWT and check for validity
    JWT.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err && err.name === 'JsonWebTokenError') {
        return res.status(403).json({
          message: 'invalid token!',
          err
        })
      }
      if (err && err.name === 'JTokenExpiredError') {
        return res.status(403).json({
          message: 'token expired!',
          err
        })
      }

      console.log(decoded)

      const username = decoded.username
      const id = decoded.id
      const role = decoded.role
      // ceck
      if (
        role != 'admin' ||
        username != decoded.username ||
        parseInt(id) !== decoded.id
      ) {
        return res.status(403).json({
          message: 'token not valid for selected username',
          message2: 'mau maling ya'
        })
      }
    })

    next()
  }
}
