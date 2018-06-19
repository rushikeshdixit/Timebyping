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
        res.status(200).redirect('/')
    });
});

router.get('/note', function (req, res, next) {
    Note.find()
        //.populate('title', 'content')
        .exec(function (err, messages) {
            if (err) {
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

router.delete('/note/:id', function(req, res, next){
    var id = req.params.id;
    console.log("BODY" + JSON.stringify(req.params) + " " + id);
    Note.findByIdAndRemove(id, function(err,message) {
        console.log("ERROR:" + err);
        if(err) {
            console.log("DID ERRORED")
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(200).redirect('/');
    })
});

module.exports = router;