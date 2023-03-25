const express = require('express');
const router = express.Router();
const sessionsSelector = require('../db/queries/sessionsSelector');
const usersSelector = require('../db/queries/usersSelector');
const sessionSelector = require('../db/queries/sessionSelector');

router.get('/', (req, res) => {
  sessionsSelector.findAll()
  .then(rows => {
    res.json(rows);
  })
  .catch (err => {
    console.error(err.message);
  });
})


//
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

// Delete a user from a session
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




 

module.exports = router;
