var createError = require('http-errors');
var express = require('express');
var path = require('path');
var db = require('./config/db');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let cors = require('cors');
var bookingRoutes = require('./custom_modules/booking/routes/booking-routes');

var app = express();

// view engine setup
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Credentials', true);
  
  if (req.method == 'OPTIONS' ) {
    res.send(200);
  } else {
    next();
  }
};
app.use(allowCrossDomain);

app.get('/', (req, res) => {
  res.send('App working');
})
app.use('/booking', bookingRoutes);

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
