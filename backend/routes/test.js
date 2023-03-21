const express = require('express');
const router = express.Router();
const test = require('../db/queries/test')

router.get('/', (req, res) => {
 test.showAll()
  .then(rows => {
    console.log(rows);
    res.json(rows);
  })
  .catch (err => {
    console.error(err.message);
  });
})

module.exports = router;
