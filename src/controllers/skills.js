const skillsModels = require('../models/skills')

module.exports = {
  getSkills: (req, res) => {
    skillsModels.getSkills()
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
  getSingleSkill: (req, res) => {
    const id = req.params.id

    skillsModels.getSingleSkill(id)
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
  addSkill: (req, res) => {
    const { name } = req.body
    const data = {
      name
    }
    skillsModels.addSkill(data)
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
  updateSkill: (req, res) => {
    const id = req.params.id
    const { name } = req.body
    const data = {
      name
    }

    skillsModels.updateSkill(data, id)
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
  deleteSkill: (req, res) => {
    const id = req.params.id

    skillsModels.deleteSkill(id)
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
