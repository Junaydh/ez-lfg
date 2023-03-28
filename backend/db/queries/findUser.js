const db = require('../connection');

const findUserByUsername = async (username) => {
  const query = {
    text: 'SELECT * FROM users WHERE username ILIKE $1',
    values: [`%${username}%`],
  };
  const result = await db.query(query);
  return result.rows[0];
};

const findUserById = async (id) => {
  const result = await db.query('SELECT * FROM users WHERE id LIKE $1', [id]);
  return result.rows[0];
};

module.exports = { findUserByUsername, findUserById };