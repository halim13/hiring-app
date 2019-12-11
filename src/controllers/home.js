const homeModels = require('../models/home')

module.exports = {
  getHome: (req, res) => {
    homeModels.getHome()
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
