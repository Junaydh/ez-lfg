const express = require('express');
const router = express.Router();
const test = require('../db/queries/test.sql')

router.get('/', (req, res) => {
 test.showAll
  .then(rows => {
    res.json(rows);
  })
  .catch (err => {
    console.error(err.message);
  });
})

module.exports = router;
