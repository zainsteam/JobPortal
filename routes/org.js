const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const OrgUser = require('../model/org');

//register
router.post('/orgregister', ( req , res , next) => {
    let newUser = new OrgUser({
        Email: req.body.Email,
        UserName: req.body.UserName,
        Password: req.body.Password,
        OrgName: req.body.OrgName,
    });

    OrgUser.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg: ' failed to registered'});
        } else {
            res.json({success: true, msg: 'User registered'});
        }
    });
});

//authenticate
router.post('/orgauthenticate', ( req , res , next) => {
    const UserName = req.body.UserName;
    const Password = req.body.Password;

    OrgUser.getUserByUsername(UserName, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg:'User not Found'});
        }

        OrgUser.comparePassword(Password, user.Password, (err, isMatch) => {
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
                        Email: user.Email
                    }
                });
            } else {
                return res.json({success: false, msg:'Wrong Password'});
            }
        });
    });
});

//Profile
router.get('/orgprofile', passport.authenticate('jwt', {session:false}), (req , res , next) => {
    res.json({user: req.user});
    
});
module.exports = router;
