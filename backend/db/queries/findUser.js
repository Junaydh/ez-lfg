const db = require('../connection');

const findUserByUsername = async (username) => {
  const query = {
    text: 'SELECT * FROM users WHERE LOWER(username) = LOWER($1)',
    values: [username],
  };
  const result = await db.query(query);
  return result.rows[0];
};

const findUserById = async (id) => {
  const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

module.exports = { findUserByUsername, findUserById };