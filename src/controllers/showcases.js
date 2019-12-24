const showcasesModels = require('../models/showcases')

module.exports = {
  getShowcases: (req, res) => {
    showcasesModels
      .getShowcases()
      .then(result => {
        const results = [
          {
            status: 200,
            error: false,
            message: 'Success Get All Data',
            data: result
          }
        ]
        return res.json(results)
      })
      .catch(err => {
        const results = [
          {
            status: 400,
            error: true,
            message: 'Something Wrong. Check console for more info!'
          }
        ]
        console.log(err)
        return res.status(400).json(results)
      })
  },
  getSingleShowcase: (req, res) => {
    const id = req.params.id

    showcasesModels
      .getSingleShowcase(id)
      .then(result => {
        const results = [
          {
            status: 200,
            error: false,
            message: 'Success Get Single Data',
            data: result
          }
        ]
        return res.json(results)
      })
      .catch(err => {
        const results = [
          {
            status: 400,
            error: true,
            message: 'Something Wrong. Check console for more info!'
          }
        ]
        console.log(err)
        return res.status(400).json(results)
        
      })
  },
  addShowcase: (req, res) => {
    const { name, link, engineer_id } = req.body
    const data = {
      name,
      link,
      engineer_id,
      date_created: new Date(),
      date_updated: new Date()
    }
    showcasesModels
      .addShowcase(data)
      .then(result => {
        const results = [
          {
            status: 201,
            error: false,
            message: 'Success Add Data',
            data
          }
        ]
        return res.json(results)
      })
      .catch(err => {
        const results = [
          {
            status: 400,
            error: true,
            message: 'Something Wrong. Check console for more info!'
          }
        ]
        console.log(err)
        return res.status(400).json(results)
        
      })
  },
  updateShowcase: (req, res) => {
    const id = req.params.id
    const { name, link, engineer_id } = req.body
    const data = {
      name,
      link,
      engineer_id,
      date_updated: new Date()
    }

    showcasesModels
      .updateShowcase(data, id)
      .then(result => {
        const results = [
          {
            status: 201,
            error: false,
            message: 'Success Update Data',
            data
          }
        ]
        return res.json(results)
      })
      .catch(err => {
        const results = [
          {
            status: 400,
            error: true,
            message: 'Something Wrong. Check console for more info!'
          }
        ]
        console.log(err)
        return res.status(400).json(results)
       
      })
  },
  deleteShowcase: (req, res) => {
    const id = req.params.id

    showcasesModels
      .deleteShowcase(id)
      .then(result => {
        const results = [
          {
            status: 200,
            error: false,
            message: 'Success Delete Data'
          }
        ]
        return res.json(results)
      })
      .catch(err => {
        const results = [
          {
            status: 400,
            error: true,
            message: 'Something Wrong. Check console for more info!'
          }
        ]
        console.log(err)
        return res.status(400).json(results)
        
      })
  }
}
