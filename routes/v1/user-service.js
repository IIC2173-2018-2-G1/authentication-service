const router = require('express').Router();
const auth = require('./auth');
const addTokenAndRedirect = require('./token-adder-redirect');

// Create new user
router.post(
  '/',
  auth.optional,
  (req, res, next) => addTokenAndRedirect(req, res, next, "http://user-service:8087/users/")
);

// Log in
router.post(
  '/login',
  auth.optional,
  (req, res, next) => addTokenAndRedirect(req, res, next, "http://user-service:8087/users/login")
);

// GET current logged user
router.get(
  '/current',
  auth.required,
  (req, res, next) => addTokenAndRedirect(req, res, next, "http://user-service:8087/users/current")
);


module.exports = router;

