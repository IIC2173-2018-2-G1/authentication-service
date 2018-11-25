const router = require('express').Router();
const auth = require('../../utils/auth');
const addTokenAndRedirect = require('../../utils/token-adder-redirect');

// Get all hashtags
router.get(
  '/',
  auth.required,
  (req, res, next) => addTokenAndRedirect(req, res, next, "http://reaction-service:8081/reactions")
);

module.exports = router;

