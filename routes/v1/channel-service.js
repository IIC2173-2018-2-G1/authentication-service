const router = require('express').Router();
const auth = require('./auth');
const addTokenAndRedirect = require('./token-adder-redirect');

// Get all channels
router.get(
  '/',
  auth.required,
  (req, res, next) => addTokenAndRedirect(req, res, next, "http://channel-service:8084/")
);

// create channel
router.post(
  '/',
  auth.required,
  (req, res, next) => addTokenAndRedirect(req, res, next, "http://channel-service:8084/")
);

// Get Channel Info
router.get(
  '/:channelId',
  auth.required,
  (req, res, next) => addTokenAndRedirect(req, res, next, `http://channel-service:8084/${req.params.channelId}`)
);

// Edit channel info
router.put(
  '/:channelId',
  auth.required,
  (req, res, next) => addTokenAndRedirect(req, res, next, `http://channel-service:8084/${req.params.channelId}`)
);

module.exports = router;

