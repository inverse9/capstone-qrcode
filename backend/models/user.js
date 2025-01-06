const db = require('../db.js');
const md5 = require('md5');


const findUserByEmail = async (email) => {
  const [rows] = await db.query('SELECT * FROM user WHERE email = ?', [email]);
  return rows[0];
};

const findUserById = async (id) => {
  const [rows] = await db.query('SELECT * FROM user WHERE id = ?', [id]);
  return rows[0];
};


module.exports = {
  findUserByEmail,
  findUserById
};
