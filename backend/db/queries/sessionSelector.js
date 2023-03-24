const db = require('../connection');

const findSession  = (session) => {
  const queryParams = [session];
  const queryString = `SELECT users.*
  FROM users
  JOIN sessions_users ON users.id = sessions_users.user_id
  WHERE sessions_users.session_id = $1`;

  return db
  .query(queryString, queryParams)
  .then(data => {
    console.log(data.rows)
    return data.rows;
  })
  .catch(err => {
    console.error(err.message);
  });
}

const addUserToSession = (userId, sessionId) => {
  const queryParams = [userId, sessionId];
  const queryString = `INSERT INTO sessions_users (user_id, session_id)
  VALUES ($1, $2)`;

  return db
  .query(queryString, queryParams)
  .then(data => {
    console.log(data.rows)
    return data.rows;
  })
  .catch(err => {
    console.error(err.message);
  });
}


module.exports = { findSession, addUserToSession };