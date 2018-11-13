const router = require('express').Router();
const addTokenAndRedirect = require('./token-adder-redirect');
const auth = require('./auth');
const queryString = require('query-string');

// Messages stuff!
// create message
router.post(
  '/',
  auth.required,
  (req, res, next) => addTokenAndRedirect(req, res, next, `http://message-service:8083/messages`),
);

// get message
router.get(
  '/',
  auth.required,
  (req, res, next) => {
    addTokenAndRedirect(
      req,
      res,
      next,
      `http://message-service:8083/messages?channel_id=${req.query.channel_id}&hashtag=req.query.hashtag&count=req.query.count&start=req.query.start`
    )
  },
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

