const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db');
const { authenticateToken } = require('../authMiddleware');

// Signup route
router.post('/signup', async function(req, res, next) {
  try {
    // Check if user with same username or email exists
    const { rows: existingUsers } = await db.query('SELECT * FROM users WHERE username = $1 OR email = $2', [req.body.username, req.body.email]);
    if (existingUsers.length > 0) {
      return res.status(400).json({ message: 'User with that username or email already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    // Add user to database
    const { rows } = await db.query('INSERT INTO users (username, password, email, discord_tag) VALUES ($1, $2, $3, $4) RETURNING *', [req.body.username, hash, req.body.email, req.body.discord_tag]);

    res.status(201).json({
      message: 'User created successfully',
      user: rows[0]
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});