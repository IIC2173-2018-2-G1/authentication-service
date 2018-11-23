const jwt = require('express-jwt');

const getSession = (req) => {
  return req.cookies._session
};

const auth = {
  required: jwt({
    secret: 'secret', // this will change on production
    userProperty: 'payload',
    getToken: getSession,
  }),
  optional: jwt({
    secret: 'secret', // this will change on production
    userProperty: 'payload',
    getToken: getSession,
    credentialsRequired: false,
  }),
};

module.exports = auth;