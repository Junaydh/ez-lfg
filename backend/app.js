require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const session = require('express-session');
const passport = require('passport');
const initializePassport = require('./auth/passport-config');
const db = require('./db/connection');
const bcrypt = require('bcrypt');


initializePassport(passport);

const { client } = require('./discordBot');

const usersRouter = require('./routes/users');
const sessionsRouter = require('./routes/sessionsApi');
const indexRouter = require('./routes/index');
const gamesRouter = require('./routes/gamesApi');

client.login(process.env.TOKEN);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.AUTH_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/games', gamesRouter);
app.use('/users', usersRouter);
app.use('/sessions', sessionsRouter);

// Registration route
app.post('/api/register', async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const checkUserQuery = `
      SELECT username FROM users WHERE LOWER(username) = LOWER($1)
      `;
    const checkUserResult = await db.query(checkUserQuery, [req.body.username]);
    if (checkUserResult.rows.length > 0) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    const createUserQuery = `
      INSERT INTO users (username, password, email, profile_pic, discord_tag)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, username, email, profile_pic, discord_tag
    `;
    const createUserResult = await db.query(createUserQuery, [req.body.username, hashedPassword, req.body.email, req.body.profilePic, req.body.discordTag]);
    const user = createUserResult.rows[0];
    req.login(user, (error) => {
      if (error) {
        return next(error);
      };
      return res.json(user);
    });
  } catch (error) {
    return next(error);
  }
});

//login route
app.post('/api/login', passport.authenticate('local'), (req, res) => {
  res.json(req.user);
});

//logout route
app.post('/api/logout', (req, res) => {
  req.logout(function(err) {
    if (err) {
      console.log(err);
    }
  });
  res.status(200).json({ message: 'Logged out successfully' });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
