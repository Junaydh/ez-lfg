const express = require('express');
const router = express.Router();
const gamesSelector = require('../db/queries/gamesSelector');


/* GET users listing. */
router.get('/', (req, res) => {
  gamesSelector.findAll()
    .then(rows => {
      res.json(rows);
    })
    .catch(err => {
      console.error(err.message);
    });
});



module.exports = router;
