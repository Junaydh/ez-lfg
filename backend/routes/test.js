const express = require('express');
const router = express.Router();
const sessionsSelector = require('../db/queries/sessionsSelector')
const usersSelector = require('../db/queries/usersSelector') 

router.get('/sessions', (req, res) => {
  sessionsSelector.findAll()
  .then(rows => {
    console.log(rows);
    res.json(rows);
  })
  .catch (err => {
    console.error(err.message);
  });
})

router.get('/user/:id', (req, res) => {
  usersSelector.findUser(req.params.id)
   .then(rows => {
     console.log(rows);
     res.json(rows);
   })
   .catch (err => {
     console.error(err.message);
   });
 })

module.exports = router;
