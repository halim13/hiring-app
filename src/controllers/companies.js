require('dotenv/config'); // get env value
const companiesModels = require('../models/companies');
const path = require('path');
const fs = require('fs');
const misc = require('./misc');
const redis = require('redis');
const client = redis.createClient();
const port = process.env.PORT;
const base_url = process.env.BASE_URL;

module.exports = {
  getMessages: (req, res) => {
    companiesModels
      .getMessages(req.params.id)
      .then(result => {
        const key = 'messagesToCompany';
        client.setex(key, 3600, JSON.stringify(result));
        client.get(key, (err, data) => {
          if (err) throw err;

          if (data !== null) {
            return misc.response(
              res,
              200,
              false,
              'Success Get All Messages!',
              JSON.parse(data)
            );
          } else {
            client.setex(key, 3600, JSON.stringify(result));
          }
        });
      })
      .catch(err => {
        console.log(err);
        return misc.response(
          res,
          400,
          true,
          'Something Wrong. Check console for more info!'
        );
      });
  },
  getMessage: (req, res) => {
    companiesModels
      .getMessage(req.params.id, req.params.idEngineer)
      .then(result => {
        const key = 'messageToCompany' + req.params.id;
        client.setex(key, 3600, JSON.stringify(result));
        client.get(key, (err, data) => {
          if (err) throw err;

          if (data !== null) {
            return misc.response(
              res,
              200,
              false,
              'Success Get Message!',
              JSON.parse(data)
            );
          } else {
            client.setex(key, 3600, JSON.stringify(result));
          }
        });
      })
      .catch(err => {
        console.log(err);
        return misc.response(
          res,
          400,
          true,
          'Something Wrong. Check console for more info!'
        );
      });
  },
  sendMessage: (req, res) => {
    const data = {
      company_id: req.body.company_id,
      engineer_id: req.params.id,
      message: req.body.message,
      sender: 'company',
      date_created: new Date(),
      date_updated: new Date(),
    };
    companiesModels
      .sendMessage(data)
      .then(result => {
        return misc.response(res, 200, false, 'Success Send Message!', data);
      })
      .catch(err => {
        console.log(err);
        return misc.response(
          res,
          400,
          true,
          'Something Wrong. Check console for more info!'
        );
      });
  },
  getCompanies: (req, res) => {
    const search = req.query.search ? req.query.search : '';
    const page = req.query.page ? req.query.page : 1;
    const order = req.query.order ? req.query.order : 'asc';
    const limit = req.query.limit ? req.query.limit : 5;
    const sort = req.query.sort ? req.query.sort : 'name';
    let totalData = 0;
    let totalPage = 0;
    // set key for redis
    const key = `get-companies-all-${search}-${page}-${limit}-${sort}-${order}`;

    companiesModels
      .getCountCompanies(search)
      .then(result => {
        totalData = result;
        totalPage = Math.ceil(totalData / limit);
      })
      .catch(err => {
        console.log(err);
        return misc.response(
          res,
          400,
          true,
          'Something Wrong. Check console for more info!'
        );
      });

    const data = {
      search,
      page,
      order,
      limit,
      sort,
    };
    companiesModels
      .getCompanies(data)
      .then(result => {
        const prevPage =
          page <= 1
            ? ''
            : `${base_url}:${port}${req.originalUrl.replace(
                'page=' + page,
                'page=' + (parseInt(page) - 1)
              )}`;
        const nextPage =
          page >= totalPage
            ? ''
            : `${base_url}:${port}${req.originalUrl.replace(
                'page=' + page,
                'page=' + (parseInt(page) + 1)
              )}`;

        const pageDetail = {
          search: search,
          totalData,
          totalPage,
          page,
          limit,
          order,
          sort,
          prevLink: prevPage,
          nextLink: nextPage,
        };

        result.forEach((element, index) => {
          result[index].logo =
            process.env.BASE_URL +
            ':' +
            process.env.PORT +
            '/companies/' +
            element.logo;
        });
        const results = [
          {
            status: 200,
            error: false,
            message: 'Success Get All Data',
            dataPage: pageDetail,
            data: result,
          },
        ];
        // const key = 'companies'
        client.setex(key, 3600, JSON.stringify(results));
        client.get(key, (err, data) => {
          if (err) throw err;

          if (data !== null) {
            return misc.response(
              res,
              200,
              false,
              'Success Get All Data!',
              JSON.parse(data)
            );
          } else {
            client.setex(key, 3600, JSON.stringify(results));
          }
        });
      })
      .catch(err => {
        console.log(err);
        return misc.response(
          res,
          400,
          true,
          'Something Wrong. Check console for more info!'
        );
      });
  },
  getSingleCompany: (req, res) => {
    const id = req.params.id;

    companiesModels
      .getSingleCompany(id)
      .then(result => {
        if (!result.length) {
          return misc.response(res, 400, true, 'User Not Found!');
        }
        //result.forEach((element, index) => {
        //  result[index].logo =
            //process.env.BASE_URL +
            //':' +
            //process.env.PORT +
            //'/companies/' +
            //element.logo;
        //});

        const key = 'getCompany' + id;
        client.setex(key, 3600, JSON.stringify(result));
        client.get(key, (err, data) => {
          if (err) throw err;

          if (data !== null) {
            return misc.response(
              res,
              200,
              false,
              'Success Get Single Data!',
              JSON.parse(data)
            );
          } else {
            client.setex(key, 3600, JSON.stringify(result));
          }
        });
      })
      .catch(err => {
        console.log(err);
        return misc.response(
          res,
          400,
          true,
          'Something went wrong, check console for more info!'
        );
      });
  },
  checkuser: (req, res) => {
    const id = req.params.id;

    companiesModels
      .getCheckUser(id)
      .then(result => {
        if (!result.length) {
          return misc.response(res, 400, true, 'User Not Found!');
        }
      })
      .catch(err => {
        // console.log(err)
        return misc.response(
          res,
          400,
          true,
          'Something went wrong, check console for more info!'
        );
      });
  },
  addCompany: (req, res) => {
    const file = req.file;
    if (!file) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: 'select an image',
      });
    }
    const {
      name,
      logo,
      location,
      description,
      no_contact,
      email,
      user_id,
    } = req.body;

    if (
      !name ||
      !location ||
      !description ||
      !no_contact ||
      !email ||
      !user_id
    ) {
      return misc.response(res, 400, true, 'fill all fields!');
    }
    let count = 0;

    companiesModels.checkDuplication(user_id).then(result => {
      count = result[0].count;
    });

    companiesModels.checkUser(user_id).then(result => {
      if (!result[0].count) {
        return misc.response(res, 400, true, 'User not exist!');
      }
    });

    const data = {
      user_id,
      name,
      logo,
      location,
      description,
      no_contact,
      email,
      date_created: new Date(),
      date_updated: new Date(),
    };
    data['logo'] = file.filename;
    companiesModels
      .addCompany(data)
      .then(result => {
        return misc.response(res, 201, false, 'Success Add Data!', data);
      })
      .catch(err => {
        console.log(err);
        if (count) {
          return misc.response(res, 400, true, 'Company Exist!');
        }
        return misc.response(
          res,
          400,
          true,
          'Something went wrong, check console for more info!'
        );
      });
  },
  updateCompany: (req, res) => {
    const id = req.params.id;
    const {
      name,
      logo,
      location,
      description,
      old_logo,
      no_contact,
      email,
    } = req.body;

    if (!name || !location || !description || !no_contact || !email) {
      return misc.response(res, 400, true, 'fill all fields!');
    }

    let count = 0;

    companiesModels.checkDuplication(id).then(result => {
      count = result[0].count;
    });

    const data = {
      name,
      logo,
      location,
      description,
      no_contact,
      email,
      date_updated: new Date(),
    };

    const file = req.file;
    if (file) {
      let filePath = './src/images/companies/' + old_logo;
      fs.unlink(filePath, function(err) {
        if (err && err.code == 'ENOENT') {
          // file doens't exist
          console.info("File doesn't exist, won't remove it.");
        } else if (err) {
          // other errors, e.g. maybe we don't have enough permission
          console.error('Error occurred while trying to remove file');
        } else {
          // removed
          // fs.unlinkSync(filePath);
        }
      });
      data['logo'] = file.filename;
    } else {
      data['logo'] = old_logo;
    }

    companiesModels
      .updateCompany(data, id)
      .then(result => {
        if (!result.affectedRows) {
          return misc.response(
            res,
            400,
            true,
            'user not found or company exist!'
          );
        }
        return misc.response(res, 201, false, 'Success Update Data!', data);
      })
      .catch(err => {
        console.log(err);
        return misc.response(
          res,
          400,
          true,
          'Something went wrong, check console for more info!'
        );
      });
  },
  deleteCompany: (req, res) => {
    const id = req.params.id;
    const old_logo = req.body.old_logo;

    companiesModels
      .deleteCompany(id)
      .then(result => {
        let filePath = './src/images/companies/' + old_logo;
        fs.unlink(filePath, function(err) {
          if (err && err.code == 'ENOENT') {
            // file doens't exist
            console.info("File doesn't exist, won't remove it.");
          } else if (err) {
            // other errors, e.g. maybe we don't have enough permission
            console.error('Error occurred while trying to remove file');
            return misc.response(res, 400, true, 'Something went wrong!', err);
          } else {
            // removed
            // fs.unlinkSync(filePath);
          }
        });

        return misc.response(res, 200, false, 'Success Delete Data!');
      })
      .catch(err => {
        console.log(err);
        return misc.response(
          res,
          400,
          true,
          'Something went wrong, check console for more info!'
        );
      });
  },
};
