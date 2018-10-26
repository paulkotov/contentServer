const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    let models = req.app.get('models');
    let Video = models.Video;

    Video.findAndCountAll({
        offset: 0,
        limit: 10
    }).then(result => {
        let rows = result.rows;
        let latest = [];
        for (let i=0;i<5;i++){
            latest.push(rows[rows.legth-i]);
        }
        res.render('dashboard/index',{
            rows: rows,
            latest: latest
        });
    }).catch(next);
});

module.exports = router;