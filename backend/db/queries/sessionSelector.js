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
  const checkUserQuery = 'SELECT * FROM sessions_users WHERE user_id = $1 AND session_id = $2';
  const insertUserQuery = 'INSERT INTO sessions_users (user_id, session_id) VALUES ($1, $2)';

  return db.query(checkUserQuery, queryParams)
    .then(checkResult => {
      if (checkResult.rows.length > 0) {
        // user is already in the session
        return null;
      } else {
        return db.query(insertUserQuery, queryParams)
          .then(insertResult => insertResult.rows)
          .catch(err => {
            console.error(err.message);
            throw err;
          });
      }
    })
    .catch(err => {
      console.error(err.message);
      throw err;
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

const deleteUserFromSession = (userId, sessionId) => {
  const queryParams = [userId, sessionId];
  const queryString = `DELETE FROM sessions_users
                        WHERE user_id = $1 AND session_id = $2
                        RETURNING *`;

  return db
    .query(queryString, queryParams)
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.error(err.message);
      throw err;
    });
}

const createSession = (userId, sessionDetails) => {
  const { game_id, mic_required, max_players, title, description, discord_link, platform } = sessionDetails;
  const queryParams = [userId, game_id, mic_required, max_players, title, description, discord_link, platform];
  const queryString = `INSERT INTO sessions (creator_id, game_id, mic_required, max_players, title, description, discord_link, platform)
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                        RETURNING *`;

  return db
    .query(queryString, queryParams)
    .then(data => {
      return data.rows[0];
    })
    .catch(err => {
      console.error(err.message);
      throw err;
    });
};


const kickPlayer = (sessionId, userId) => {
  const queryString = `DELETE FROM sessions_users WHERE session_id = $1 AND user_id = $2`;
  const queryParams = [sessionId, userId];

  return db
    .query(queryString, queryParams)
    .then(data => {
      return data.rowCount;
    })
    .catch(err => {
      console.error(err.message);
      throw err;
    });
};





module.exports = { findSession, findSessionsByGame, addUserToSession, deleteUserFromSession, createSession, kickPlayer };
