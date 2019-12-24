const conn = require('../configs/db')

module.exports = {
  getShowcases: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM showcases', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getSingleShowcase: id => {
    return new Promise((resolve, reject) => {
      conn.query(
        'SELECT * FROM showcases WHERE user_id = ?',
        id,
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
  addShowcase: data => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO showcases SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateShowcase: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query(
        'UPDATE showcases SET ? WHERE id = ?',
        [data, id],
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
  deleteShowcase: id => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM showcases WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
