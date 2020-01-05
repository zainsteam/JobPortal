var express = require('express');
var router = express.Router();
var Apply = require('../model/apply');

router.post('/create',(req, res, next) => {
	var newApply = new Apply ({
        JobId:req.body.JobId,
        CanEmail:req.body.CanEmail,
    });
    Apply.findOne({ CanEmail: req.body.CanEmail,JobId:req.body.JobId }, function(err, emailexists) {
    	if(emailexists ){
    		res.json({success: false, msg: 'Already Applied'});
    	}
        else if (err){
            res.json({success: false, msg: ' failed to apply'});
        }
    	else {
			newApply.save((err, apply) => {
			    if(err)
			    	res.json({success: false, msg: ' failed to apply'});
			    res.json({success: true, msg: ' successfully apply'});
			});
    	}
    });

});

module.exports = router;