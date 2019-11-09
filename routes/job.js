var express = require('express');
var router = express.Router();
var Job = require('../model/job');

router.post('/create',(req, res, next) => {
    var newJob = new Job ({
        category:req.body.category,
        Email:req.body.Email,
    title: req.body.title,
    type: req.body.type,
    minsalary: req.body.minsalary,
    maxsalary:req.body.maxsalary,
    lastdate: req.body.lastdate,
    city: req.body.city,
    experience: req.body.experience,
    experiencetime: req.body.experiencetime,
    description: req.body.description,
    responsiblity:req.body.responsiblity
    });
    newJob.save((err, job) => {
        if(err)
            res.status(500).json({ errmsg: err});
        res.status(200).json({ msg: job});
    });
});

router.get('/read',(req, res, next) => {
    Job.find({}, (err,job) => {
        if(err)
            res.status(500).json({ errmsg: err});
        res.status(200).json({ msg: job});
    });
});

router.put('/update',(req, res, next) => {
    Job.findById(req.body._id, (err, job) => {
        if(err)
            res.status(500).json({ errmsg: err });
            category=req.body.category,
        Email=req.body.Email,
    title= req.body.title,
    type= req.body.type,
    minsalary= req.body.minsalary,
    maxsalary=req.body.maxsalary,
    lastdat=req.body.lastdate,
    city=req.body.city,
    experience=req.body.experience,
    experiencetime=req.body.experiencetime,
    description= req.body.descriptionn,
    responsiblity=req.body.responsiblity
            job.save((err, job) => {
            if(err)
                res.status(500).json({ errmsg: err});
            res.status(200).json({ msg: job});
        });
    });
});

router.delete('/delete/:id',(req, res, next) => {
    Job.findOneAndRemove({_id: req.params.id},(err, job) => {
        if(err)
            res.status(500).json({ errmsg: err});
            
        res.status(200).json({ msg: job});
    });
});

module.exports = router;