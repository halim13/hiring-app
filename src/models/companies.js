const conn = require('../configs/db')

module.exports = {
  getCompanies: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM companies', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getSingleCompany: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM companies WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  addCompany: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO companies SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateCompany: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE companies SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteCompany: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM companies WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
