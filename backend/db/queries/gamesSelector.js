const db = require('../connection');

const findGames = () => {

  const queryString = `SELECT * FROM games`;

  return db
    .query(queryString)
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.error(err.message);
    });
}

module.exports = { findGames }