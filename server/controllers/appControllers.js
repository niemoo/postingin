const db = require('../configs/database');
const response = require('../configs/response');
const { v4 } = require('uuid');
const bcrypt = require('bcrypt');

const controllers = {
  getAllUsersData: async (req, res) => {
    const sql = 'select * from users';

    db.query(sql, (err, result) => {
      if (err) {
        response(500, err, err.message, res);
      }
      response(200, result, 'success get all data from users', res);
    });
  },
  addUsersData: async (req, res) => {
    const { email, name, password } = req.body;
    const salt = await bcrypt.genSaltSync(10);
    const encryptedPassword = await bcrypt.hashSync(password, salt);

    const sql = 'insert into users (users_id, email, name, password) values(?, ?, ?, ?)';

    db.query(sql, [v4(), email, name, encryptedPassword], (err, result) => {
      if (err) {
        response(500, err, err.message, res);
      }
      response(200, result, 'success add new user data', res);
    });
  },
};

module.exports = controllers;
