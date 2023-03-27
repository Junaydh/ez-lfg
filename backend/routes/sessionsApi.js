const express = require('express');
const router = express.Router();
const sessionsSelector = require('../db/queries/sessionsSelector');
const usersSelector = require('../db/queries/usersSelector');
const sessionSelector = require('../db/queries/sessionSelector');


// show all sessions
router.get('/', (req, res) => {
  sessionsSelector.findAll()
  .then(rows => {
    res.json(rows);
  })
  .catch (err => {
    console.error(err.message);
  });
})


// find session creator
router.get('/user/:id', (req, res) => {
  usersSelector.findUser(req.params.id)
   .then(rows => {
     res.json(rows);
   })
   .catch (err => {
     console.error(err.message);
   });
})

//get users in session
router.get('/session/:id/users', (req, res) => {
  sessionSelector.findSession(req.params.id)
   .then(rows => {
     res.json(rows);
   })
   .catch (err => {
     console.error(err.message);
   });
})

// user joins session
router.post('/session/:sessionId/users/:userId', (req, res) => {
  const { sessionId, userId } = req.params;

  sessionSelector.addUserToSession(userId, sessionId)
   .then(rows => {
     res.json(rows);
   })
   .catch (err => {
     console.error(err.message);
   });
});

// delete a user from a session
router.delete('/session/:sessionId/users/:userId', async (req, res) => {
  const { sessionId, userId } = req.params;

  sessionSelector.deleteUserFromSession(userId, sessionId)
   .then(rows => {
     res.json(rows);
   })
   .catch (err => {
     console.error(err.message);
   });
});

// create session
router.post('/create/host/:userId', (req, res) => {
  const { userId } = req.params;
  const { game_id, region, title, description, max_players, mic_required, discord_link, platform } = req.body;
  const sessionDetails = { game_id, mic_required, max_players, title, description, discord_link, platform };
  console.log(sessionDetails);
  sessionSelector.createSession(userId, sessionDetails)
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err.message);
  });
});

// kick players from session
router.delete('/session/:sessionId/kick/:userId', (req, res) => {
  const { sessionId, userId } = req.params;
  sessionSelector.kickPlayer(sessionId, userId)
    .then(result => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch(err => {
      console.error(err.message);
      res.status(500).send(err.message);
    });
});




 

module.exports = router;
