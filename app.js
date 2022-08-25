var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let categorieRouter = require('./routes/categorie')
let accueilRouter = require('./routes/accueil')
let empruntRouter = require('./routes/emprunt')
let adminRouter = require('./routes/admin')
const sequelize = require('./database/connecterData');
const  session = require('express-session');

// const data = require('./database/connecterData');
// const { Sequelize } = require('./models');
// const cat = require('./models/users');
// const categorie = cat(data,Sequelize).sync({force:true})
var app = express();

try {
  sequelize.authenticate()
  
    console.log('base de donnee connecté avec succes');
  

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
 app.use('/uploads',express.static('./uploads'))
app.use(session({ 
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: false}
}))

app.use('/', indexRouter);
app.use('/profil', usersRouter);
app.use('/categorie',categorieRouter);
app.use('/Accueil',accueilRouter);
app.use('/emprunt',empruntRouter)
app.use('/Admin',adminRouter)

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

} catch (error) {
  console.log('base de noconnecte',error);
  
}

module.exports = app;
