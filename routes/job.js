var express = require('express');
var router = express.Router();
var Job = require('../model/job');

router.post('/create',(req, res, next) => {
    var newJob = new Job ({
        jcat:req.body.jcat,
        Email:req.body.Email,
    jtit: req.body.jtit,
    jtype: req.body.jtype,
    minsal: req.body.minsal,
    maxsal:req.body.maxsal,
    ldate: req.body.ldate,
    city: req.body.city,
    skill: req.body.skill,
    exp: req.body.exp,
    expt: req.body.expt,
    jdes: req.body.jdes,
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
            job.jcat=req.body.jcat;
            job.Email=req.body.Email;
    job.jtit= req.body.jtit;
    job.jtype= req.body.jtype;
    job.minsal= req.body.minsal;
    job.maxsal=req.body.maxsal;
    job.ldate= req.body.ldate;
    job.city= req.body.city;
    job.skill=req.body.skill;
    job.exp= req.body.exp;
    job.expt= req.body.expt;
    job.jdes= req.body.jdes;
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