const db = require('../connection');

const findUser  = (user) => {
  const queryParams = [user];
  const queryString = `SELECT * FROM users
  WHERE id = $1`;

  return db
  .query(queryString, queryParams)
  .then(data => {
    return data.rows;
  })
  .catch(err => {
    console.error(err.message);
  });
}


module.exports = { findUser };