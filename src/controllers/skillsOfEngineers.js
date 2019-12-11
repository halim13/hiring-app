const skillsOfEngineersModels = require('../models/skillsOfEngineers')

module.exports = {
  getSkillsOfEngineers: (req, res) => {
    skillsOfEngineersModels.getSkillsOfEngineers()
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
  getSingleSkillOfEngineer: (req, res) => {
    const id = req.params.id

    skillsOfEngineersModels.getSingleSkillOfEngineer(id)
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
  addSkillOfEngineer: (req, res) => {
    const { engineer_id, skill_id } = req.body
    const data = {
      engineer_id,
      skill_id
    }
    skillsOfEngineersModels.addSkillOfEngineer(data)
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
  updateSkillOfEngineer: (req, res) => {
    const id = req.params.id
    const { engineer_id, skill_id } = req.body
    const data = {
      engineer_id,
      skill_id
    }

    skillsOfEngineersModels.updateSkillOfEngineer(data, id)
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
  deleteSkillOfEngineer: (req, res) => {
    const id = req.params.id

    skillsOfEngineersModels.deleteSkillOfEngineer(id)
      .then(result => {
        const results=[{
          'status':200,
          'error':false,
          'message':'Success Delete Data',
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
  }
}
