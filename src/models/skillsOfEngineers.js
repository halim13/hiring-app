const conn = require('../configs/db')

module.exports = {
  getSkillsOfEngineers: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM skills_of_engineers', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getSingleSkillOfEngineer: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM skills_of_engineers WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  addSkillOfEngineer: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO skills_of_engineers SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateSkillOfEngineer: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE skills_of_engineers SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteSkillOfEngineer: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM skills_of_engineers WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
