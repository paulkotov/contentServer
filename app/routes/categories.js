const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    let models = req.app.get('models');
    let Category = models.Category;
    Category.findAndCountAll({
        offset: 0,
        limit: 10
    }).then(result => {
        res.render('categories/index', {
            rows: result.rows,
            count: result.count
        });
    }).catch(next);

});

module.exports = router;