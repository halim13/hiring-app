const conn = require('../configs/db')

module.exports = {
  checkDuplication: username => {
    return new Promise((resolve, reject) => {
      conn.query(
        'SELECT COUNT(*) as count FROM users WHERE username = ? ',
        username,
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  },
  getSingleData: username => {
    return new Promise((resolve, reject) => {
      conn.query(
        'SELECT * FROM users WHERE username = ? ',
        username,
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  },
  login: username => {
    return new Promise((resolve, reject) => {
      conn.query(
        'SELECT * FROM users WHERE username = ?',
        username,
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  },
  register: data => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO users SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
