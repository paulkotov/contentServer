const express = require('express');
const router = express.Router();

router.use('/dashboard', require('./dashboard'));
router.use('/videos', require('./videos'));
router.use('/tags', require('./tags'));
router.use('/categories',require('./categories'));
router.use('/channels', require('./channels'));
router.use('/statistic', require('./statistic'));
router.use('/login', require('./login'));

module.exports = router;
