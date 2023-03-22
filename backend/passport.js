const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const db = require('./db');
require('dotenv').config();

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
    try {
      const user = await db.query('SELECT * FROM users WHERE id = $1', [jwtPayload.id]);
      if (user.rows[0]) {
        return done(null, user.rows[0]);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  })
);

module.exports = passport;