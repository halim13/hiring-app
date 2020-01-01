const conn = require('../configs/db')

module.exports = {
  sendMessage: data => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO messages SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getMessages: id => {
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT * FROM messages where engineer_id = ? AND sender ='company'`,
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
  getMessage: (engineer_id, company_id) => {
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT * FROM messages where engineer_id = ? and company_id = ? and sender = 'company'`,
        [engineer_id, company_id],
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
  getCountEngineers: search => {
    return new Promise((resolve, reject) => {
      const queryTotal = `SELECT COUNT(*) AS totalEngineers FROM engineers
      where name like '%${search}%' or skills like '%${search}%' or date_updated like '%${search}%'`

      conn.query(queryTotal, (err, result) => {
        if (!err) {
          totalData = result[0].totalEngineers
          resolve(totalData)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getEngineers: data => {
    return new Promise((resolve, reject) => {
      const search = data.search
      const order = data.order
      const page = data.page
      const limit = data.limit
      const sort = data.sort
      let currentPage = parseInt(page)
      const searchPage = currentPage * limit - limit
      const query = `SELECT * FROM engineers
      where 
        name like '%${search}%' or skills like '%${search}%' or date_updated like '%${search}%' 
      order by ${sort} ${order} limit ${searchPage}, ${limit}`

      conn.query(query, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getSingleEngineer: id => {
    return new Promise((resolve, reject) => {
      conn.query(
        'SELECT * FROM engineers WHERE user_id = ?',
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
  getMessagesss: id => {
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT companies.name, companies.description, companies.location, 
            companies.logo, companies.no_contact, companies.email, messages_to_engineers.message
          FROM companies JOIN messages_to_engineers 
            ON companies.id = messages_to_engineers.company_id
          WHERE messages_to_engineers.engineer_id = ?`,
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
  addEngineer: data => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO engineers SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateEngineer: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query(
        'UPDATE engineers SET ? WHERE user_id = ?',
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
  deleteEngineer: id => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM engineers WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
