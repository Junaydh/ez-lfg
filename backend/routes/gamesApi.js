
const express = require('express');
const router = express.Router();
const gamesSelector = require('../db/queries/gamesSelector');
const sessionSelector = require('../db/queries/sessionSelector')

/* GET gamess listing. */
router.get('/', (req, res) => {
  gamesSelector.findGames()
    .then(rows => {
      res.json(rows);
    })
    .catch(err => {
      console.error(err.message);
    });
});


router.get('/:id/sessions', (req, res) => {
  sessionSelector.findSessionsByGame(req.params.id)
  .then(rows => {
    res.json(Array.isArray(rows) ? rows : []);
  })
  .catch (err => {
    console.error(err.message);
  });
});

module.exports = router;