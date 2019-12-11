const conn = require('../configs/db')

module.exports = {
  addMessage: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO messages_to_engineers SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}