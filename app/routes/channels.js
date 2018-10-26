const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    let models = req.app.get('models');
    let Comment = models.Comment;

    Comment.findAndCountAll({
        offset: 0,
        limit: 10
    }).then(result => {
        res.render('comments/index', {
            rows: result.rows,
            count: result.count
        });
    }).catch(next);

});

router.get('/add', (req, res, next) => {
    let name = req.param('name') || '';

    res.render('comments/add', {
        name: name,
    });
});

router.post('/add', (req, res, next) => {
    let models = req.app.get('models');
    let Comment = models.Comment;
    let name = req.param('name') || '';

    if (name.length === 0) {
        req.flash('error', 'Name is empty');
        return res.redirect('/comments/add');
    }
    Comment.build({
        name: name
    }).save()
    .then(() => {
        req.flash('success', 'Comment has added successfully!');
        return res.redirect('/comments');
    }).catch(e => {
        req.flash(e);
        return res.redirect('/comments/add');
    })
});

router.get('/:id/edit/', (req, res, next) => {
    let models = req.app.get('models'),
    id = req.param('id');

models.Comment
    .findById(id)
    .then(comment => {
        if (comment === null) {
            req.status = 404;
            return next();
        }

        res.render('comments/edit', {
            comment: comment.dataValues,
        });
    })
    .catch(next);    
});

router.post('/:id/edit/', (req, res, next) => {
    let models = req.app.get('models');
    let Comment = models.Comment;
    let id = req.param('id');
    let name = req.param('name');

    Comment.findById(id).then(comment => {
        if (comment == null){
            res.status = 404;
            return next();
        }
        Comment.update({name: name}, {
            where: {
                id: comment.get('id')
            }
        }).then(()=>{
            req.flash('success', 'Comment has edited successfully!');
            return res.redirect('/comments');
        })
    }).catch(e => {
        req.flash(e);
        return res.redirect('/comments');
    });
});

router.get('/:id/del', (req, res, next) => {
    let models = req.app.get('models');
    let Comment = models.Comment;
    let id =req.param('id');
    Comment.destroy({
        where: {
            id: id
        }
    }).then(del => {
        del ? res.flash('success', '') : res.send('Error');
        return res.redirect('/comments');
    }).catch(e => {
        req.flash(e);
        return res.redirect('/comments');
    });
});

module.exports = router;