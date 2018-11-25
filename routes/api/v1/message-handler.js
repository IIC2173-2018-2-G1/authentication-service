const router = require("express").Router();
const addTokenAndRedirect = require("../../utils/token-adder-redirect");
const auth = require("../../utils/auth");

// create and get messages
router.all("/", auth.required, (req, res, next) =>
  addTokenAndRedirect(req, res, next, `http://message-service:8083/messages`)
);

// Reactions stuff!
// Create new reaction
router.put("/:messageId/reactions", auth.required, (req, res, next) =>
  addTokenAndRedirect(
    req,
    res,
    next,
    `http://reaction-service:8081/messages/${req.params.messageId}/reactions`
  )
);

module.exports = router;
