var express = require('express');
var router = express.Router();
var QBank = require('../model/qb');

router.post('/create',(req, res, next) => {
    var newQBank = new QBank ({
        qnum: req.body.qnum,
        qcat: req.body.qcat,
        question: req.body.question,
    });
    newQBank.save((err, qbank) => {
        if(err)
            res.status(500).json({ errmsg: err});
        res.status(200).json({ msg: qbank});
    });
});

router.get('/read',(req, res, next) => {
    QBank.find({}, (err,qbank) => {
        if(err)
            res.status(500).json({ errmsg: err});
        res.status(200).json({ msg: qbank});
    });
});

router.put('/update',(req, res, next) => {
    QBank.findById(req.body._id, (err, qbank) => {
        if(err)
            res.status(500).json({ errmsg: err });
        qbank.qnum = req.body.qnum;
        qbank.qcat = req.body.qcat;
        qbank.question = req.body.question;
        qbank.save((err, qbank) => {
            if(err)
                res.status(500).json({ errmsg: err});
            res.status(200).json({ msg: qbank});
        });
    });
});

router.delete('/delete/:id',(req, res, next) => {
    QBank.findOneAndRemove({_id: req.params.id},(err, qbank) => {
        if(err)
            res.status(500).json({ errmsg: err});
            
        res.status(200).json({ msg: qbank});
    });
});

module.exports = router;