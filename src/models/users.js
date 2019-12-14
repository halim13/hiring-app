const conn = require('../configs/db')

module.exports = {
  getUsers: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM users', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getSingleUser: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM users WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  addUser: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO users SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateUser: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE users SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteUser: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM users WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
