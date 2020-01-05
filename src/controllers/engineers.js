require('dotenv/config') // get env value
const engineersModels = require('../models/engineers')
const showcasesModels = require('../models/showcases')
const fs = require('fs');
const misc = require('./misc')
const redis = require('redis')
const client = redis.createClient()
const JWT = require('jsonwebtoken')
const port = process.env.PORT
const base_url = process.env.BASE_URL

module.exports = {
  getMessages: (req, res) => {
    engineersModels
      .getMessages(req.params.id)
      .then(result => {
        const key = 'messagesToEngineer'
        client.setex(key, 3600, JSON.stringify(result))
        client.get(key, (err, data) => {
          if (err) throw err

          if (data !== null) {
            return misc.response(
              res,
              200,
              false,
              'Success Get All Messages!',
              JSON.parse(data)
            )
          } else {
            client.setex(key, 3600, JSON.stringify(result))
          }
        })
      })
      .catch(err => {
        console.log(err)
        return misc.response(
          res,
          400,
          true,
          'Something Wrong. Check console for more info!'
        )
      })
  },
  getMessage: (req, res) => {
    engineersModels
      .getMessage(req.params.id, req.params.idCompany)
      .then(result => {
        const key = 'messageToEngineer' + req.params.id
        client.setex(key, 3600, JSON.stringify(result))
        client.get(key, (err, data) => {
          if (err) throw err

          if (data !== null) {
            return misc.response(
              res,
              200,
              false,
              'Success Get Message!',
              JSON.parse(data)
            )
          } else {
            client.setex(key, 3600, JSON.stringify(result))
          }
        })
      })
      .catch(err => {
        console.log(err)
        return misc.response(
          res,
          400,
          true,
          'Something Wrong. Check console for more info!'
        )
      })
  },
  sendMessage: (req, res) => {
    const data = {
      engineer_id: req.body.engineer_id,
      company_id: req.params.id,
      message: req.body.message,
      sender: 'engineer',
      date_created: new Date(),
      date_updated: new Date()
    }
    engineersModels
      .sendMessage(data)
      .then(result => {
        return misc.response(res, 200, false, 'Success Send Message!', data)
      })
      .catch(err => {
        console.log(err)
        return misc.response(
          res,
          400,
          true,
          'Something Wrong. Check console for more info!'
        )
      })
  },
  getEngineers: (req, res) => {
    // const {name, skill, page} = req.query
    const search = req.query.search ? req.query.search : ''
    const page = req.query.page ? req.query.page : 1
    const order = req.query.order ? req.query.order : 'asc'
    const limit = req.query.limit ? req.query.limit : 5
    const sort = req.query.sort ? req.query.sort : 'name'
    let totalData = 0
    let totalPage = 0
    let all = {}

    // set key for redis
    const key = `get-engineers-all-${search}-${page}-${limit}-${sort}-${order}`

    engineersModels
      .getCountEngineers(search)
      .then(result => {
        totalData = result
        totalPage = Math.ceil(totalData / limit)
      })
      .catch(err => {
        console.log(err)
        return misc.response(
          res,
          400,
          true,
          'Something Wrong. Check console for more info!'
        )
      })

    const data = {
      search,
      page,
      order,
      limit,
      sort
    }

    engineersModels
      .getEngineers(data)
      .then(result => {
        const dataPage = result['dataPage']
        const results = [
          {
            status: 200,
            error: false,
            message: 'Success Get All Data',
            dataPage: dataPage,
            data: result['result']
          }
        ]
        all.engineers = result
        // res.json(results)
      })
      .catch(err => {
        const results = [
          {
            status: 400,
            error: true,
            message: 'Something Wrong. Check console for more info!'
          }
        ]
        res.status(400).json(results)
        console.log(err)
      })

    showcasesModels.getShowcases().then(result => {
      all.showcases = result
      let engineers = all.engineers
      let showcases = all.showcases
      let pages = all.engineers.dataPage
      let engineersData = []

      for (let i = 0; i < engineers.length; i++) {
        let dataShowcases = []
        var dataEngineer = {
          id: engineers[i]['id'],
          user_id: engineers[i]['user_id'],
          photo:
            process.env.BASE_URL +
            ':' +
            process.env.PORT +
            '/engineers/' +
            engineers[i]['photo'],
          name: engineers[i]['name'],
          description: engineers[i]['description'],
          specialist: engineers[i]['specialist'],
          skills: engineers[i]['skills'],
          location: engineers[i]['location'],
          date_of_birth: engineers[i]['date_of_birth'],
          no_contact: engineers[i]['no_contact'],
          email: engineers[i]['email'],
          expected_salary: engineers[i]['expected_salary'],
          showcases: dataShowcases,
          date_created: engineers[i]['date_created'],
          date_updated: engineers[i]['date_updated']
        }
        for (let j = 0; j < showcases.length; j++) {
          if (engineers[i]['user_id'] == showcases[j]['engineer_id']) {
            var dataShowcase = {
              id: showcases[j]['id'],
              name: showcases[j]['name'],
              link: showcases[j]['link']
            }
            dataShowcases.push(dataShowcase)
          }
        }
        engineersData.push(dataEngineer)
      }

      const prevPage =
        page <= 1
          ? ''
          : `${base_url}:${port}${req.originalUrl.replace(
              'page=' + page,
              'page=' + (parseInt(page) - 1)
            )}`
      const nextPage =
        page >= totalPage
          ? ''
          : `${base_url}:${port}${req.originalUrl.replace(
              'page=' + page,
              'page=' + (parseInt(page) + 1)
            )}`

      const pageDetail = {
        search: search,
        totalData,
        totalPage,
        page,
        limit,
        order,
        sort,
        prevLink: prevPage,
        nextLink: nextPage
      }

      const getAll = {
        pageDetail,
        // pages,
        engineersData
      }

      // const key = 'getCompany' + id
      client.setex(key, 3600, JSON.stringify(getAll))
      client.get(key, (err, data) => {
        if (err) throw err

        if (data !== null) {
          res.json(JSON.parse(data))
        } else {
          client.setex(key, 3600, JSON.stringify(GetAll))
        }
      })

      //
      // res.json(all['engineers']['result'])
    })
  },
  getSingleEngineer: (req, res) => {
    const id = req.params.id

    let all = {}

    engineersModels
      .getSingleEngineer(id)
      .then(result => {
        all.engineer = result
        const results = [
          {
            status: 200,
            error: false,
            message: 'Success Get Single Data',
            data: result
          }
        ]
        // res.json(results)
      })
      .catch(err => {
        const results = [
          {
            status: 400,
            error: true,
            message: 'Something Wrong. Check console for more info!'
          }
        ]
        res.status(400).json(results)
        console.log(err)
      })

    showcasesModels.getShowcases().then(result => {
      all.showcases = result
      let engineers = all['engineer']
      let showcases = all['showcases']
      let engineersData = []

      for (let i = 0; i < engineers.length; i++) {
        let dataShowcases = []
        var dataEngineer = {
          id: engineers[i]['id'],
          user_id: engineers[i]['user_id'],
          photo:
            //process.env.BASE_URL +
            //':' +
            //process.env.PORT +
            //'/engineers/' +
            engineers[i]['photo'],
          name: engineers[i]['name'],
          description: engineers[i]['description'],
          specialist: engineers[i]['specialist'],
          skills: engineers[i]['skills'],
          location: engineers[i]['location'],
          date_of_birth: engineers[i]['date_of_birth'],
          showcases: dataShowcases,
          no_contact: engineers[i]['no_contact'],
          email: engineers[i]['email'],
          expected_salary: engineers[i]['expected_salary'],
          date_created: engineers[i]['date_created'],
          date_updated: engineers[i]['date_updated']
        }
        for (let j = 0; j < showcases.length; j++) {
          if (engineers[i]['user_id'] == showcases[j]['engineer_id']) {
            var dataShowcase = {
              id: showcases[j]['id'],
              name: showcases[j]['name'],
              link: showcases[j]['link']
            }
            dataShowcases.push(dataShowcase)
          }
        }
        engineersData.push(dataEngineer)
      }

      const getAll = {
        engineersData
      }

      const key = 'getEngineer' + id
      client.setex(key, 3600, JSON.stringify(getAll))
      client.get(key, (err, data) => {
        if (err) throw err

        if (data !== null) {
          res.json(JSON.parse(data))
        } else {
          client.setex(key, 3600, JSON.stringify(getAll))
        }
      })
    })
  },
  addEngineer: (req, res) => {
    const file = req.file
    if (!file) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: 'select an image'
      })
    }
    const {
      user_id,
      name,
      photo,
      description,
      skills,
      date_of_birth,
      location,
      no_contact,
      email,
      specialist,
      expected_salary
    } = req.body
    const data = {
      user_id,
      name,
      photo,
      description,
      skills,
      date_of_birth,
      location,
      no_contact,
      email,
      specialist,
      expected_salary,
      date_created: new Date(),
      date_updated: new Date()
    }
    // jwt
    const { authorization } = req.headers
    // split to get real token
    const token = authorization.split(' ')[1]

    // decode JWT and check for validity
    JWT.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err && err.name === 'JsonWebTokenError') {
        return res.status(403).json({
          message: 'invalid token!',
          err
        })
      }
      if (err && err.name === 'JTokenExpiredError') {
        return res.status(403).json({
          message: 'token expired!',
          err
        })
      }
      const id = decoded.id
      // data['user_id'] = id
    })

    data['photo'] = file.filename
    engineersModels
      .addEngineer(data)
      .then(result => {
        const results = [
          {
            status: 201,
            error: false,
            message: 'Success Add Data',
            data
          }
        ]
        res.json(results)
      })
      .catch(err => {
        const results = [
          {
            status: 400,
            error: true,
            message: 'Something Wrong. Check console for more info!'
          }
        ]
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
    messagesToEngineersModels
      .addMessage(data)
      .then(result => {
        const results = [
          {
            status: 201,
            error: false,
            message: 'Success Send Message',
            data
          }
        ]
        res.json(results)
      })
      .catch(err => {
        const results = [
          {
            status: 400,
            error: true,
            message: 'Something Wrong. Check console for more info!'
          }
        ]
        res.status(400).json(results)
        console.log(err)
      })
  },
  getMessages: (req, res) => {
    const id = req.params.id

    engineersModels
      .getMessages(id)
      .then(result => {
        const results = [
          {
            status: 200,
            error: false,
            message: 'Success Get Messages',
            data: result
          }
        ]

        const key = 'MessagesToEngineers'
        client.setex(key, 3600, JSON.stringify(results))
        client.get(key, (err, data) => {
          if (err) throw err

          if (data !== null) {
            res.json(JSON.parse(data))
          } else {
            client.setex(key, 3600, JSON.stringify(results))
          }
        })
      })
      .catch(err => {
        const results = [
          {
            status: 400,
            error: true,
            message: 'Something Wrong. Check console for more info!'
          }
        ]
        res.status(400).json(results)
        console.log(err)
      })
  },
  updateEngineer: (req, res) => {
    const id = req.params.id
    const {
      name,
      description,
      skills,
      date_of_birth,
      no_contact,
      email,
      expected_salary,
      location,
      specialist,
      old_photo,
      photo,
    } = req.body
    const data = {
      name,
      description,
      skills,
      date_of_birth,
      no_contact,
      email,
      expected_salary,
      specialist,
      photo,
      location,
      date_updated: new Date()
    }
    const file = req.file;
    if (file) {
      let filePath = './src/images/engineers/' + old_photo;
      fs.unlink(filePath, function(err) {
        if (err && err.code == 'ENOENT') {
          // file doesn't exist
          console.info(`File ${old_photo} doesn't exist, won't remove it.`);
        } else if (err) {
          // other errors, e.g. maybe we don't have enough permission
          console.error('Error occurred while trying to remove file');
        } else {
          // removed
          console.info("File removed.");
          // fs.unlinkSync(filePath);
        }
      });
      data['photo'] = file.filename;
    } else {
      data['photo'] = old_photo;
    }

    engineersModels
      .updateEngineer(data, id)
      .then(result => {
        const results = [
          {
            status: 201,
            error: false,
            message: 'Success Update Data',
            data
          }
        ]
        res.json(results)
      })
      .catch(err => {
        const results = [
          {
            status: 400,
            error: true,
            message: 'Something Wrong. Check console for more info!'
          }
        ]
        res.status(400).json(results)
        console.log(err)
      })
  },
  deleteEngineer: (req, res) => {
    const {id,old_photo} = req.params;
    // console.log(req.body);

    engineersModels
      .deleteEngineer(id)
      .then(result => {
        let filePath = './src/images/engineers/' + old_photo;
        fs.unlink(filePath, function(err) {
          if (err && err.code == 'ENOENT') {
            // file doesn't exist
            console.info("File "+ old_photo + " doesn't exist, won't remove it.");
          } else if (err) {
            // other errors, e.g. maybe we don't have enough permission
            console.error('Error occurred while trying to remove file');
            return misc.response(res, 400, true, 'Something went wrong!', err);
          } else {
            // removed
            console.info("File removed.");
            // fs.unlinkSync(filePath);
          }
        });
        const results = [
          {
            status: 200,
            error: false,
            message: 'Success Delete Data'
          }
        ]
        res.json(results)
      })
      .catch(err => {
        const results = [
          {
            status: 400,
            error: true,
            message: 'Something Wrong. Check console for more info!'
          }
        ]
        res.status(400).json(results)
        console.log(err)
      })
  }
}
