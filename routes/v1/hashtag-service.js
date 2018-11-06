const router = require('express').Router();
const auth = require('./auth');
const addTokenAndRedirect = require('./token-adder-redirect');

// Get all hashtags
router.get(
  '/',
  auth.required,
  (req, res, next) => addTokenAndRedirect(req, res, next, "http://hashtag-service:8085/")
);

// add hashtags
router.post(
  '/',
  auth.required,
  (req, res, next) => addTokenAndRedirect(req, res, next, "http://hashtag-service:8085/")
);

module.exports = router;

