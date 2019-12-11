const conn = require('../configs/db')

module.exports = {
  getEngineers: (data) => {
    return new Promise((resolve, reject) => {
      const by = data.by
      const search = data.search
      const order = data.order
      const page = data.page
      const limit = data.limit
      const sort = data.sort
      let currentPage = parseInt(page)
      let prevPage
      let totalData
      let totalPage
      let nextPage
      const searchPage = (currentPage * limit) - limit
      const query = `SELECT * FROM engineers
      where ${by} like '%${search}%' order by ${sort} ${order} limit ${searchPage}, ${limit}`

      const queryTotal = `SELECT COUNT(*) AS totalEngineers FROM engineers
      where ${by} like '%${search}%'`

      conn.query(queryTotal, (err, result) => {
        if (!err) {
          totalData = result[0].totalEngineers
        } else {
          reject(new Error(err))
        }
      })

      conn.query(query, (err, result) => {
        if (!err) {
          totalPage = Math.ceil(totalData / limit)
          if (page > totalPage) {
            prevPage = totalPage
          } else if (page > 1) {
            prevPage = page - 1
          } else {
            currentPage = 1
            prevPage = null
          }
          nextPage = page >= totalPage ? null : parseInt(page) + 1
          const dataPage = {
            prevPage,
            currentPage,
            nextPage,
            totalData,
            totalPage
          }
          const results = {
            result,
            dataPage
          }
          resolve(results)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getSingleEngineer: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM engineers WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getMessages: (id) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT companies.name, companies.description, companies.location, 
            companies.logo, companies.no_contact, companies.email, messages_to_engineers.message
          FROM companies JOIN messages_to_engineers 
            ON companies.id = messages_to_engineers.company_id
          WHERE messages_to_engineers.engineer_id = ?`, id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  addEngineer: (data) => {
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
      conn.query('UPDATE engineers SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteEngineer: (id) => {
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
