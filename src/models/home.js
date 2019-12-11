const conn = require('../configs/db')

module.exports = {
  getHome: () => {
    return new Promise((resolve, reject) => {
      const result = {
        status: 200,
        error: false,
        message: 'selamat datang'
      }
      resolve(result)
    })
  }
}
