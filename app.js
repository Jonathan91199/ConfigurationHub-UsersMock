var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var mongoose = require('mongoose')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let AddNewUser = require('./mongoDB/mongoActions/AddNewUser')
let DoesUserExist = require('./mongoDB/mongoActions/DoesUserExist')
let DoesNewUserExist = require('./mongoDB/mongoActions/DoesNewUserExist')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.post('/users', function(req, res){
  AddNewUser(req, res)
})

app.post('/userExist', function(req, res){
  DoesUserExist(req, res)
})
app.post('/newUserExist', function(req, res){
  DoesNewUserExist(req, res)
})
app.listen(8000)

mongoose.connect('mongodb://localhost:27017/ConfigurationHub-UserMock', function(){
  console.log("\x1b[36m", "* * * Connected To Mongo DataBase * * *")
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
