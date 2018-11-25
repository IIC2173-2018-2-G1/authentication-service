const router = require("express").Router();
const auth = require("../../utils/auth");
const addTokenAndRedirect = require("../../utils/token-adder-redirect");

// create and get users
router.all("/", auth.optional, (req, res, next) =>
  addTokenAndRedirect(req, res, next, "http://user-service:8087/users/")
);

// Log in
router.post("/login", auth.optional, (req, res, next) =>
  addTokenAndRedirect(req, res, next, "http://user-service:8087/users/login")
);

// Reset password
router.post("/reset-password", auth.optional, (req, res, next) =>
  addTokenAndRedirect(req, res, next, "http://user-service:8087/users/login")
);

// get and update current user
router.all("/current", auth.required, (req, res, next) =>
  addTokenAndRedirect(req, res, next, "http://user-service:8087/users/current")
);

// get current user subscriptions
router.get("/current/subscriptions", auth.required, (req, res, next) =>
  addTokenAndRedirect(
    req,
    res,
    next,
    "http://user-service:8087/users/current/subscriptions"
  )
);

module.exports = router;
