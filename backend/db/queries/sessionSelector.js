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
    return data.rows;
  })
  .catch(err => {
    console.error(err.message);
  });
}
const findSessionsByGame = (gameId) => {
  const queryParams = [gameId];
  const queryString = `SELECT sessions.*, users.username AS creator_username, users.discord_tag AS creator_discord_tag
  FROM sessions
  JOIN users ON sessions.creator_id = users.id
  WHERE game_id = $1`;

  return db
  .query(queryString, queryParams)
  .then(data => {
    return data.rows;
  })
  .catch(err => {
    console.error(err.message);
  });
};

module.exports = { findSession, findSessionsByGame, addUserToSession };
