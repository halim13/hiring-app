const conn = require('../configs/db');

module.exports = {
  checkDuplication: user_id => {
    return new Promise((resolve, reject) => {
      conn.query(
        'SELECT COUNT(*) as count FROM companies WHERE user_id = ? ',
        user_id,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  checkUser: user_id => {
    return new Promise((resolve, reject) => {
      conn.query(
        'SELECT COUNT(*) as count FROM users WHERE id = ? ',
        user_id,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  sendMessage: data => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO messages SET ?', data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  getMessages: id => {
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT * FROM messages where company_id = ? AND sender ='engineer'`,
        id,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  getMessage: (company_id, engineer_id) => {
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT * FROM messages where company_id = ? and engineer_id = ? and sender = 'engineer'`,
        [company_id, engineer_id],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  getCountCompanies: search => {
    return new Promise((resolve, reject) => {
      const queryTotal = `SELECT COUNT(*) AS totalCompanies FROM companies
      where name like '%${search}%'`;

      conn.query(queryTotal, (err, result) => {
        if (!err) {
          totalData = result[0].totalCompanies;
          resolve(totalData);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  getCheckUser: id => {
    return new Promise((resolve, reject) => {
      const queryTotal = `SELECT COUNT(*) AS checkUser FROM companies
      where user_id = '${id}'`;

      conn.query(queryTotal, (err, result) => {
        if (!err) {
          totalData = result[0].checkUser;
          resolve(totalData);
        } else {
          reject('no User');
        }
      });
    });
  },
  getCompanies: data => {
    return new Promise((resolve, reject) => {
      const search = data.search;
      const order = data.order;
      const page = data.page;
      const limit = data.limit;
      const sort = data.sort;
      let currentPage = parseInt(page);
      const searchPage = currentPage * limit - limit;
      conn.query(
        `SELECT * FROM companies
      where 
        name like '%${search}%' 
      order by ${sort} ${order} limit ${searchPage}, ${limit}`,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  getSingleCompany: id => {
    return new Promise((resolve, reject) => {
      conn.query(
        'SELECT * FROM companies WHERE user_id = ?',
        id,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  addCompany: data => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO companies SET ?', data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  updateCompany: (data, user_id) => {
    return new Promise((resolve, reject) => {
      conn.query(
        'UPDATE companies SET ? WHERE user_id = ?',
        [data, user_id],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  deleteCompany: id => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM users WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
};
