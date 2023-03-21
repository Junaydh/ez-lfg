// routes/test.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const data = { message: 'This is a test message' };
  res.json(data);
});

module.exports = router;
