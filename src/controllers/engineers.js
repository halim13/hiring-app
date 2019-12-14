const engineersModels = require('../models/engineers')
const showcasesModels = require('../models/showcases')

module.exports = {
  getMessages: (req, res) => {
    engineersModels.getMessages(req.params.id)
      .then(result => {
        misc.response(res, 200, false, 'Success Get All Messages!',result)
      })
      .catch(err => {
        console.log(err)
        misc.response(res, 400, true, 'Something Wrong. Check console for more info!')
      })
  },
  getMessage: (req, res) => {
    engineersModels.getMessage(req.params.id,req.params.idCompany)
      .then(result => {
        misc.response(res, 200, false, 'Success Get Message!',result)
      })
      .catch(err => {
        console.log(err)
        misc.response(res, 400, true, 'Something Wrong. Check console for more info!')
      })
  },
  sendMessage: (req, res) => {
    const data = {
      engineer_id: req.body.company_id,
      company_id: req.params.id,
      message: req.body.message,
      sender: 'engineer',
      date_created: new Date(),
      date_updated: new Date()
    }
    engineersModels.sendMessage(data)
      .then(result => {
        misc.response(res, 200, false, 'Success Send Message!',data)
      })
      .catch(err => {
        console.log(err)
        misc.response(res, 400, true, 'Something Wrong. Check console for more info!')
      })
  },
  getEngineers: (req, res) => {
    // const {name, skill, page} = req.query
    const search = req.query.search ? req.query.search : ''
    const page = req.query.page ? req.query.page : 1
    const order = req.query.order ? req.query.order : 'desc'
    const limit = req.query.limit ? req.query.limit : 2
    const sort = req.query.sort ? req.query.sort : 'name'
    let all={}
    const data={
      search,
      page,
      order,
      limit,
      sort
    }

    engineersModels.getEngineers(data)
      .then(result => {
        const dataPage = result['dataPage']
        const results=[{
          'status':200,
          'error':false,
          'message':'Success Get All Data',
          'dataPage':dataPage,
          'data':result['result']
        }]
        all.engineers=result
        // res.json(results)
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

      showcasesModels.getShowcases()
      .then(result => {
        all.showcases = result
        let engineers = all.engineers.result
        let showcases = all.showcases
        let pages = all.engineers.dataPage
        let engineersData = []
        
        for(let i = 0; i < engineers.length; i++) {
          
          let dataShowcases=[]
          var dataEngineer = {
            id : engineers[i]['id'],
            name : engineers[i]['name'],
            description : engineers[i]['description'],
            skills : engineers[i]['skills'],
            location : engineers[i]['location'],
            date_of_birth : engineers[i]['date_of_birth'],
            no_contact : engineers[i]['no_contact'],
            email : engineers[i]['email'],
            showcases : dataShowcases,
            date_created : engineers[i]['date_created'],
            date_updated : engineers[i]['date_updated'],
          }
          for(let j = 0; j < showcases.length; j++) {
            if(engineers[i]['id']==showcases[j]['engineer_id']){
              var dataShowcase = {
                id:showcases[j]['id'],
                name:showcases[j]['name'],
                link:showcases[j]['link']
              }
              dataShowcases.push(dataShowcase)
            }
          }
          engineersData.push(dataEngineer)
        }

        const prevPage = parseInt(page)-1
        const nextPage = parseInt(page)+1
        const pageDetail = {
          search: search,
          page,
          limit,
          order,
          sort,
          prevLink: `http://localhost:3000${req.originalUrl.replace('page='+page,'page='+prevPage)}`,
          nextLink: `http://localhost:3000${req.originalUrl.replace('page='+page,'page='+nextPage)}`

        }

        const getAll={
          pageDetail,
          // pages,
          engineersData
        }

        res.json(getAll)
        // res.json(all['engineers']['result'])
      })
  },
  getSingleEngineer: (req, res) => {
    const id = req.params.id

    let all={}

    engineersModels.getSingleEngineer(id)
      .then(result => {
        all.engineer = result
        const results=[{
          'status':200,
          'error':false,
          'message':'Success Get Single Data',
          'data':result
        }]
        // res.json(results)
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

      showcasesModels.getShowcases()
      .then(result => {
        all.showcases = result
        let engineers = all['engineer']
        let showcases = all['showcases']
        let engineersData = []
        
        for(let i = 0; i < engineers.length; i++) {
          
          let dataShowcases=[]
          var dataEngineer = {
            id : engineers[i]['id'],
            name : engineers[i]['name'],
            description : engineers[i]['description'],
            skills : engineers[i]['skills'],
            location : engineers[i]['location'],
            date_of_birth : engineers[i]['date_of_birth'],
            showcases : dataShowcases,
            no_contact : engineers[i]['no_contact'],
            email : engineers[i]['email'],
            date_created : engineers[i]['date_created'],
            date_updated : engineers[i]['date_updated'],
          }
          for(let j = 0; j < showcases.length; j++) {
            if(engineers[i]['id']==showcases[j]['engineer_id']){
              var dataShowcase = {
                id:showcases[j]['id'],
                name:showcases[j]['name'],
                link:showcases[j]['link']
              }
              dataShowcases.push(dataShowcase)
            }
          }
          engineersData.push(dataEngineer)
        }

        const getAll={
          engineersData
        }

        res.json(getAll)
      })
  },
  addEngineer: (req, res) => {
    const { name, description, skills, date_of_birth, location, no_contact, email } = req.body
    const data = {
      name,
      description,
      skills,
      date_of_birth,
      location,
      no_contact,
      email,
      date_created:new Date(),
      date_updated:new Date()
    }
    engineersModels.addEngineer(data)
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
  addMessage: (req, res) => {
    const engineer_id = req.params.id
    const { company_id, message } = req.body
    const data = {
      company_id,
      engineer_id,
      message
    }
    messagesToEngineersModels.addMessage(data)
      .then(result => {
        const results=[{
          'status':201,
          'error':false,
          'message':'Success Send Message',
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
  getMessages: (req, res) => {
    const id = req.params.id

    engineersModels.getMessages(id)
      .then(result => {
        const results=[{
          'status':200,
          'error':false,
          'message':'Success Get Messages',
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
  updateEngineer: (req, res) => {
    const id = req.params.id
    const { name, description, skills, date_of_birth, no_contact, email } = req.body
    const data = {
      name,
      description,
      skills,
      date_of_birth,
      no_contact,
      email,
      date_updated:new Date()
    }

    engineersModels.updateEngineer(data, id)
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
  deleteEngineer: (req, res) => {
    const id = req.params.id

    engineersModels.deleteEngineer(id)
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
