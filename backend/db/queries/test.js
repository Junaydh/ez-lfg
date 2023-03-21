const db = require('../connection');

const showAll  = () => {

  const queryString = `SELECT * FROM users`;

  return db
  .query(queryString)
  .then(data => {
    return data.rows;
  })
  .catch(err => {
    console.error(err.message);
  });
}


module.exports = { showAll };