const express = require("express");
const router = express.Router();


router.use("/api/v1", require("./api/v1"));
router.use(require("./frontend"));


module.exports = router;
