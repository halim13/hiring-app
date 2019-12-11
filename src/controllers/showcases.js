const showcasesModels = require('../models/showcases')

module.exports = {
  getShowcases: (req, res) => {
    showcasesModels.getShowcases()
      .then(result => {
        const results=[{
          'status':200,
          'error':false,
          'message':'Success Get All Data',
          'data':result
        }]
        res.json(results)
      })
      .catch(err => {
        const results=[{
          'status':400,
          'error':true,
          'message':'Something Wrong. Check console for more info!'
        }]
        res.status(400).json(results)
        console.log(err)
      })
  },
  getSingleShowcase: (req, res) => {
    const id = req.params.id

    showcasesModels.getSingleShowcase(id)
      .then(result => {
        const results=[{
          'status':200,
          'error':false,
          'message':'Success Get Single Data',
          'data':result
        }]
        res.json(results)
      })
      .catch(err => {
        const results=[{
          'status':400,
          'error':true,
          'message':'Something Wrong. Check console for more info!'
        }]
        res.status(400).json(results)
        console.log(err)
      })
  },
  addShowcase: (req, res) => {
    const { name, link, engineer_id} = req.body
    const data = {
      name,
      link,
      engineer_id
    }
    showcasesModels.addShowcase(data)
      .then(result => {
        const results=[{
          'status':201,
          'error':false,
          'message':'Success Add Data',
          data
        }]
        res.json(results)
      })
      .catch(err => {
        const results=[{
          'status':400,
          'error':true,
          'message':'Something Wrong. Check console for more info!'
        }]
        res.status(400).json(results)
        console.log(err)
      })
  },
  updateShowcase: (req, res) => {
    const id = req.params.id
    const { name, link, engineer_id } = req.body
    const data = {
      name,
      link,
      engineer_id
    }

    showcasesModels.updateShowcase(data, id)
      .then(result => {
        const results=[{
          'status':201,
          'error':false,
          'message':'Success Update Data',
          data
        }]
        res.json(results)
      })
      .catch(err => {
        const results=[{
          'status':400,
          'error':true,
          'message':'Something Wrong. Check console for more info!'
        }]
        res.status(400).json(results)
        console.log(err)
      })
  },
  deleteShowcase: (req, res) => {
    const id = req.params.id

    showcasesModels.deleteShowcase(id)
      .then(result => {
        const results=[{
          'status':200,
          'error':false,
          'message':'Success Delete Data'
        }]
        res.json(results)
      })
      .catch(err => {
        const results=[{
          'status':400,
          'error':true,
          'message':'Something Wrong. Check console for more info!'
        }]
        res.status(400).json(results)
        console.log(err)
      })
  }
}
