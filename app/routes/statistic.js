const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
        res.render('statistic/index');
});

module.exports = router;