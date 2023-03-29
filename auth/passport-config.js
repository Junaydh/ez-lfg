const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const db = require('../db');
require('dotenv').config();

function initialize(passport) {
  const authenticateUser = async (username, password, done) => {
    try {
      const userQuery = 'SELECT * FROM users WHERE username = $1';
      const userResult = await db.query(userQuery, [username]);
      const user = userResult.rows[0];

      if (!user) {
        return done(null, false, { message: 'No user found with that username' });
      }

      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Incorrect password' });
      }
    } catch (error) {
      return done(error);
    }
  };

  passport.use(new LocalStrategy({ usernameField: 'username' }, authenticateUser));

  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => {
    try {
      const userQuery = 'SELECT * FROM users WHERE id = $1';
      const userResult = await db.query(userQuery, [id]);
      return done(null, userResult.rows[0]);
    } catch (error) {
      return done(error);
    }
  });
}

module.exports = initialize;