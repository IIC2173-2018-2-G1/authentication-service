const mongoose = require('mongoose');
const router = require('express').Router();
const auth = require('./auth');
const Users = mongoose.model('Users');
var requestProxy = require("express-request-proxy");

// Create new user
router.post(
  '/',
  auth.optional,
  requestProxy({
    url: "http://user-service:8087/users",
  })
);

// Log in
router.post(
  '/login',
  auth.optional,
  requestProxy({
    url: "http://user-service:8087/users/login",
  })
);

// GET current logged user
router.get(
  '/current',
  auth.required,
  (req, res, next) => {
    const { payload: { id } } = req;
    return Users.findById(id)
      .then((user) => {
        if (user) {
          let proxy = requestProxy({
            url: "http://user-service:8087/users/current",
            headers: {
              "current-user": JSON.stringify(user)
            }
          })
          proxy(req, res, next);
        }
      });
  }
);

// 

module.exports = router;

