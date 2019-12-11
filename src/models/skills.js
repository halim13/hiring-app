const conn = require('../configs/db')

module.exports = {
  getSkills: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM skills', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getSingleSkill: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM skills WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  addSkill: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO skills SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateSkill: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE skills SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteSkill: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM skills WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
