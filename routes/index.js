const express = require('express');
const router = express.Router();
const auth = require('./v1/auth');


// router.use('/api', require('./api'));
router.use('/v1', require('./v1'));

module.exports = router;