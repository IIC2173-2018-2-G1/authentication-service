const express = require('express');
const path = require('path');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');
var requestProxy = require("express-request-proxy");

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

//Initiate our app
const app = express();

//Configure our app
app.use(cors());
app.use(require('morgan')('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// secret will change on production
app.use(session({ secret: 'my-mega-secret', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

if(!isProduction) {
  app.use(errorHandler());
}

//Configure Mongoose
mongoose.connect('mongodb://mongodb:27017/users', { useNewUrlParser: true  });
mongoose.set('debug', true);

//Require Users
require('./models/users');
app.use(require('./routes'));
// app.get(
//   "/asd",
//   // We could use a redis cache, check requestProxy's github for more info
//   requestProxy({
//     url: "http://user-service:8087/users/current",
//     headers: {
//       // "X-Custom-Header": process.env.SOMEAPI_CUSTOM_HEADER
//       "Current-User": "asdasdasd"
//     }
//   })
// );
// app.post(
//   "/",
//   // We could use a redis cache, check requestProxy's github for more info
//   requestProxy({
//     url: "http://user-service:8087/users",
//     headers: {
//       // "X-Custom-Header": process.env.SOMEAPI_CUSTOM_HEADER
//       "Current-User": "asdasdasd"
//     }
//   })
// );

app.listen(8082, () => console.log('Server running on http://localhost:8082/'));