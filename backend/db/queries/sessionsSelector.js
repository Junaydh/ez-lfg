const db = require('../connection');

const findAll  = () => {

  const queryString = `SELECT * FROM sessions`;

  return db
  .query(queryString)
  .then(data => {
    return data.rows;
  })
  .catch(err => {
    console.error(err.message);
  });
}


module.exports = { findAll };