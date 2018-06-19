var express = require('express');
var router = express.Router();
var Note = require('../models/note')

router.get('/', function (req, res, next) {
    res.render('index');
});

router.post('/note', function (req, res, next) {
    var note = new Note({
        title:req.body.title,
        content:req.body.content,
    })
    note.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.redirect('/')
    });
});

router.get('/notes', function (req, res, next) {
    console.log('I am here')
    Note.find()
        //.populate('title', 'content')
        .exec(function (err, messages) {
            if (err) {
                console.log('I am here')
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: "Success",
                obj: messages
            });
        });
});

module.exports = router;