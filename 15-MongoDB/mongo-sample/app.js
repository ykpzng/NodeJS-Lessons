var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//!MongoDb veritabanı bağlantısı
/* mongoose.connect('mongodb://localhost:27017/mongooseDb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Veritabanı bağlantısı başarıyla sağlandı."))
  .catch((error) => console.log("Veritabanı bağlantısı sağlanırken beklenmeyen bir hatayla karşılaşıldı.", error.message)); */
//!or
mongoose.connect('mongodb://localhost:27017/mongooseDb', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });


// mongoose.set('useCreateIndex', true);

mongoose.connection.on('open', () => { console.log("Veritabanı bağlantısı başarıyla sağlandı.") });
mongoose.connection.on('error', (err) => { console.log("Veritabanı bağlantısı sağlanırken beklenmeyen bir hatayla karşılaşıldı.", err) });



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts');  //posts'u burada içe aktardık
var authorRouter = require('./routes/author.route');  //author'u burada içe aktardık
var bookRouter = require('./routes/book.route');  //book'u burada içe aktardık



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);   // posts url ini burada kullanılabilir hale getiriyoruz
app.use('/authors', authorRouter); //author un url i burada kullanılabilir hale getiriyoruz
app.use('/books', bookRouter);    //book un url i burada kullanılabilir hale getiriyoruz


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
