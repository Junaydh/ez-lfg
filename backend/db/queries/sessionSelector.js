const db = require('../connection');
const { client, ChannelType, PermissionsBitField } = require('/home/labber/final/ez-lfg/backend/discordBot.js');



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

//create session, auto-join host to that session, create discord channel for that session
const createSession = (userId, sessionDetails) => {
  const { game_id, mic_required, max_players, title, description, discord_link, platform } = sessionDetails;
  const queryParams = [userId, game_id, mic_required, max_players, title, description, discord_link, platform];
  const queryString = `INSERT INTO sessions (creator_id, game_id, mic_required, max_players, title, description, discord_link, platform)
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                        RETURNING *`;

  let sessionId;

  return db.query(queryString, queryParams)
    .then(sessionResult => {
      sessionId = sessionResult.rows[0].id;
      const sessionUserId = sessionResult.rows[0].creator_id;
      const sessionUserParams = [sessionId, sessionUserId];

      const sessionUserQuery = `INSERT INTO sessions_users (session_id, user_id)
                                VALUES ($1, $2)`;

      return db.query(sessionUserQuery, sessionUserParams)
        .then(() => {
          const guild = client.guilds.cache.get(process.env.DISCORD_GUILD_ID);
          const channelName = `session-${sessionId}`;

          // Get the list of users that are part of this session
          const getUsersQuery = `SELECT discord_tag FROM sessions_users JOIN users ON sessions_users.user_id = users.id WHERE session_id = $1`;
          const getUsersParams = [sessionId];

          return db.query(getUsersQuery, getUsersParams)
            .then(usersResult => {
              // const userIds = usersResult.rows.map(row => row.discord_tag);
              const overwrites = [
                {
                  id: guild.roles.everyone.id,
                  allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ReadMessageHistory],
                },
              ];

              // // Add permissions for each user in the session
              // for (const userId of userIds) {
              //   const user = guild.members.cache.find(member => member.user.tag === userId);
              //   if (user) {
              //     overwrites.push({
              //       id: user.id,
              //       allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ReadMessageHistory],
              //     });
              //   }
              // }

              return guild.channels.create({
                type: ChannelType.GuildText,
                name: channelName,
                permissionOverwrites: overwrites,
              })
                .then(channel => {
                  return {
                    session: sessionResult.rows[0],
                    channel_link: channel.toString()
                  };
                })
            });
        })
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
