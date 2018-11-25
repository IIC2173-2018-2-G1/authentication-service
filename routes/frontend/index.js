const router = require("express").Router();
const requestProxy = require("express-request-proxy");
const auth = require("../utils/auth");

router.all(
  "/login",
  requestProxy({
    url: "http://frontend:3000/login"
  })
);

router.all(
  "/sign-up",
  requestProxy({
    url: "http://frontend:3000/sign-up"
  })
);

router.all(
  "/_next/static/*",
  requestProxy({
    url: "http://frontend:3000/_next/static/*"
  })
);

// deal with routes that should have an active session
router.all("/*", auth.optional, (req, res, next) => {
  if (req.payload && req.payload.id) {
    requestProxy({
      url: "http://frontend:3000/*"
    })(req, res, next);
  } else {
    res.redirect(302, "/login")
  }

});

module.exports = router;
