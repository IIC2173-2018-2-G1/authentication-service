const express = require('express');
const path = require('path');
const session = require('express-session');
const cors = require('cors');
const errorHandler = require('errorhandler');

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

//Initiate our app
const app = express();

//Configure our app
app.use(cors());
app.use(require('morgan')('dev'));
app.use(require('cookie-parser')());
app.use(express.static(path.join(__dirname, 'public')));

// secret will change on production
app.use(session({ secret: 'my-mega-secret', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

if(!isProduction) {
  app.use(errorHandler());
}

app.use(require('./routes'));
app.listen(8082, () => console.log('Server running on http://localhost:8082/'));