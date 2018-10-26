const express = require('express');
const router = express.Router();


router.get('/', (rq, res, next) => {
    res.send('work');
})


module.exports = router;
