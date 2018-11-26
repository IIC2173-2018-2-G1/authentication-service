const jwt = require('express-jwt');

const getSession = (req) => {
  const {_session} = req.cookies;
  if (typeof _session === "undefined"){
    const { headers: { authorization } } = req;
    return authorization || "";
  } 
  return _session || ""
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