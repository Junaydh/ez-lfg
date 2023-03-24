const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db/connection');
const router = express.Router();

router.post('/signup', async (req, res, next) => {
  try {
    const { username, password, email, discord_tag } = req.body;
    if (!username || !password || !email || !discord_tag) {
      res.status(400).json({ error: 'Invalid request body' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await db.query(
      'INSERT INTO users (username, password, email, discord_tag) VALUES ($1, $2, $3, $4) RETURNING id',
      [username, hashedPassword, email, discord_tag]
    );
    const userId = result.rows[0].id;

    const token = jwt.sign({ userId }, process.env.JWT_SECRET);
    res.cookie('token', token, { httpOnly: true });
    res.status(201).json({ id: userId, username, email, discord_tag });
  } catch (err) {
    next(err);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({ error: 'Invalid request body' });
      return;
    }

    const result = await db.query('SELECT * FROM users WHERE username = $1', [username]);
    if (result.rows.length === 0) {
      res.status(401).json({ error: 'Invalid username or password' });
      return;
    }

    const user = result.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ error: 'Invalid username or password' });
      return;
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    res.cookie('token', token, { httpOnly: true });
    res.json({ id: user.id, username: user.username, email: user.email, discord_tag: user.discord_tag });
  } catch (err) {
    next(err);
  }
});

router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.sendStatus(204);
});

module.exports = router;