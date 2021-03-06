const express = require('express');
const router = express.Router();

router.use('/users', require('./user-service'));
router.use('/messages', require('./message-handler'));
router.use('/channels', require('./channel-service'));
router.use('/hashtags', require('./hashtag-service'));
router.use('/reactions', require('./reaction-service'));
module.exports = router;