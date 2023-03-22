const express = require('express');
const router = express.Router();
const gamesSelector = require('../db/queries/gamesSelector');


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

module.exports = router;
