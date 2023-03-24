const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db');
const { check, validationResult } = require('express-validator');

// User registration route
router.post('/signup', [
  check('username').notEmpty().withMessage('Username is required'),
  check('password').notEmpty().withMessage('Password is required'),
  check('email').isEmail().withMessage('Invalid email')
], async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

  const { username, password, email } = req.body;

  try {
      // Check if username or email already exist
      const userExists = await db.query('SELECT * FROM users WHERE username=$1 OR email=$2', [username, email]);
      if (userExists.rows.length > 0) {
          return res.status(400).json({ error: 'Username or email already exists' });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Insert new user into database
      await db.query('INSERT INTO users (username, password, email) VALUES ($1, $2, $3)', [username, hashedPassword, email]);

      res.json({ message: 'User registered successfully' });
  } catch (err) {
      next(err);
  }
});