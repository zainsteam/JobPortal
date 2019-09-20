const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../model/users');
const Candidate = require('../model/candidate');
const OrgUser = require('../model/org');

//register
router.post('/register', ( req , res , next) => {
    let newUser = new User({
        Email: req.body.Email,
        UserName: req.body.UserName,
        Password: req.body.Password,
        FirstName: req.body.FirstName,
        Role:req.body.Role,
    });

    if(newUser.Role == "candidate"){
        let newCand = new Candidate({
            Email: req.body.Email,
        });
        newCand.save();
    }

    if(newUser.Role == "organization"){
        let newOrg = new OrgUser({
            Email: req.body.Email,
        });
        newOrg.save();
    }

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg: ' failed to registered'});
        } else {
            res.json({success: true, msg: 'User registered'});
        }
    });
});

//authenticate
router.post('/authenticate', ( req , res , next) => {
    const UserName = req.body.UserName;
    const Password = req.body.Password;

    User.getUserByUsername(UserName, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg:'User not Found'});
        }

        User.comparePassword(Password, user.Password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign( { data : user} , config.secret, {
                    expiresIn: 604800                    
                });

                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user:{
                        id: user._id,
                        UserName: user.UserName,
                        Email: user.Email,
                        Role:user.Role,
                        FirstName:user.FirstName
                    }
                });
            } else {
                return res.json({success: false, msg:'Wrong Password'});
            }
        });
    });
});

//Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req , res , next) => {
    
    res.json({user: req.user});
    
});

// Upadate
router.put('/update',(req, res, next) => {
       User.findById(req.body._id, (err, user) => {
        if(err)
            res.status(500).json({ errmsg: err });
        user.Email = req.body.Email;
        user.UserName = req.body.UserName;
        user.FirstName = req.body.FirstName;

        Candidate.getCandEmail(req.body.Email, (err, candidate) => {
        if(err)
            res.status(500).json({ errmsg: err });
        candidate.FirstName = req.body.FirstName;
        candidate.MName = req.body.MName;
        candidate.Number= req.body.Number;
        candidate.Address = req.body.Address;
        candidate.Dob = req.body.Dob;
        candidate.Country = req.body.Country;
        candidate.City = req.body.City;
        candidate.Email = req.body.Email;
        
        user.save((err, user) => {
            candidate.save((err1, candidate) => {
            if(err1)
                res.status(500).json({ errmsg: err1});
            // res.status(200).json({ msg: candidate});
        });
    });
            if(err)
                res.status(500).json({ errmsg: err});
            res.status(200).json({ msg: user, msg2: candidate});
        });
    });

});
module.exports = router;
