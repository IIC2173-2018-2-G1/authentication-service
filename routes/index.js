const express = require('express');
const proxy = require('express-http-proxy');
const router = express.Router();


router.use('/v1', require('./v1'));
router.use(/^\/(?!v1).*/, proxy("http://frontend:3000/"))

module.exports = router;