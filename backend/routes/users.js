var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db/connection');

// Login route
router.post('/login', async function(req, res, next) {
    console.log("Post for users/login")
    const { username, password } = req.body;
    try {
        const result = await db.query('SELECT * FROM users WHERE username = $1', [username]);
        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        const match = await bcrypt.compare(password, result.rows[0].password);
        if (match) {
            req.session.userId = result.rows[0].id;
            return res.status(200).json({ message: 'Login successful' });
        } else {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Signup route
router.post('/signup', async function(req, res, next) {
    const { username, password, email, discord_tag } = req.body;
    try {
        const existingUser = await db.query('SELECT * FROM users WHERE username = $1', [username]);
        if (existingUser.rows.length > 0) {
            return res.status(409).json({ error: 'Username already taken' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await db.query('INSERT INTO users (username, password, email, discord_tag) VALUES ($1, $2, $3, $4) RETURNING id', [username, hashedPassword, email, discord_tag]);
        req.session.userId = result.rows[0].id;
        return res.status(201).json({ message: 'Signup successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    } 
});

// Logout route
router.post('/logout', function(req, res, next) {
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.clearCookie('sid');
            res.status(200).json({ message: 'Logout successful' });
        }
    });
});

module.exports = router;