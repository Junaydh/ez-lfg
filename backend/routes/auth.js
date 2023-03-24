const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db');
const { authenticateToken } = require('../authMiddleware');

// Signup route
router.post('/signup', async function(req, res, next) {
  try {

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