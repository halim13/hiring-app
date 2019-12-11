const companiesModels = require('../models/companies')
const path = require('path')
const fs = require('fs')

module.exports = {
  getCompanies: (req, res) => {
    companiesModels.getCompanies()
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
  getSingleCompany: (req, res) => {
    const id = req.params.id

    companiesModels.getSingleCompany(id)
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
  addCompany: (req, res) => {
    const file = req.file
    if(!file){
      res.status(400).json({
        status: 400,
        error: true,
        message: 'select an image'
      })
    }
    const {name,logo,location,description,no_contact,email} = req.body
    const data={name,logo,location,description,no_contact,email}
    data['logo'] = file.filename
    companiesModels.addCompany(data)
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
  updateCompany: (req, res) => {
    const id = req.params.id
    const { name, logo, location, description, old_logo, no_contact, email } = req.body
    const data = {
      name,
      logo,
      location,
      description,
      no_contact,
      email
    }
    const file = req.file
    if(file){
      let filePath = './src/images/companies/'+old_logo; 
      fs.unlink(filePath, function(err) {
        if(err && err.code == 'ENOENT') {
            // file doens't exist
            console.info("File doesn't exist, won't remove it.");
        } else if (err) {
            // other errors, e.g. maybe we don't have enough permission
            console.error("Error occurred while trying to remove file");
        } else {
          // removed
          // fs.unlinkSync(filePath);
        }
      })
      data['logo'] = file.filename
    }else{
      data['logo'] = old_logo
    }

    companiesModels.updateCompany(data, id)
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
  deleteCompany: (req, res) => {
    const id = req.params.id
    const old_logo = req.body.old_logo

    companiesModels.deleteCompany(id)
      .then(result => {
        let filePath = './src/images/companies/'+old_logo; 
        fs.unlink(filePath, function(err) {
          if(err && err.code == 'ENOENT') {
              // file doens't exist
              console.info("File doesn't exist, won't remove it.");
          } else if (err) {
              // other errors, e.g. maybe we don't have enough permission
              console.error("Error occurred while trying to remove file");
          } else {
            // removed
            // fs.unlinkSync(filePath);
          }
        })
        
        const results=[{
          'status':200,
          'error':false,
          'message':'Success Delete Data',
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
  }
}
