const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const session = require('express-session');
const passport = require('passport');
const initializePassport = require('./auth/passport-config');
const db = require('./db');

initializePassport(passport);

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const testRouter = require('./routes/test');
const registrationRouter = require('./routes/registration');
const authRouter = require('./routes/auth');

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
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', testRouter);
// Registration route
app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const createUserQuery = `
      INSERT INTO users (username, password, email, profile_pic, discord_tag)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, username, email, profile_pic, discord_tag
    `;
    const createUserResult = await db.query(createUserQuery, [req.body.username, hashedPassword, req.body.email, req.body.profile_pic, req.body.discord_tag]);
    const user = createUserResult.rows[0];
    req.login(user, (error) => {
      if (error) {
        return next(error);
      }
      return res.redirect('/');
    });
  } catch (error) {
    return next(error);
  }
});

//login route
app.post('/login', passport.authenticate('local'), (req, res) => {
  res.json(req.user);
});

//logout route
app.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logged out successfully' });
  }
);


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
