const router = require('express').Router();
const auth = require('../../utils/auth');
const addTokenAndRedirect = require('../../utils/token-adder-redirect');

router.all(
  '/',
  auth.required,
  (req, res, next) => addTokenAndRedirect(req, res, next, "http://channel-service:8084/")
);

router.put("/:channelId", auth.required, (req, res, next) =>
  addTokenAndRedirect(
    req,
    res,
    next,
    `http://channel-service:8084/${req.params.channelId}`
  )
);

module.exports = router;

