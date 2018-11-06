const router = require('express').Router();
const addTokenAndRedirect = require('./token-adder-redirect');
const auth = require('./auth');

// Messages stuff!
// create message
router.post(
  '/',
  auth.required,
  (req, res, next) => addTokenAndRedirect(req, res, next, `http://message-service:8083/messages`),
);

// get message
router.get(
  '/:content',
  auth.required,
  (req, res, next) => addTokenAndRedirect(req, res, next, `http://message-service:8083/messages/${req.params.content}`),
);



// Reactions stuff!
// Create new reaction
router.post(
  '/:messageId/reactions',
  auth.required,
  (req, res, next) => addTokenAndRedirect(req, res, next, `http://reaction-service:8081/messages/${req.params.messageId}/reactions`),
);

// delete reaction
router.delete(
  '/:messageId/reactions',
  auth.required,
  (req, res, next) => addTokenAndRedirect(req, res, next, `http://reaction-service:8081/messages/${req.params.messageId}/reactions`),
);

// get reactions of a message
router.get(
  '/:messageId/reactions',
  auth.required,
  (req, res, next) => addTokenAndRedirect(req, res, next, `http://reaction-service:8081/messages/${req.params.messageId}/reactions`),
);

module.exports = router;

