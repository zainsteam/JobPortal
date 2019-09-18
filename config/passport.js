const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../model/users');
const OrgUser = require('../model/org');
const config =require('../config/database');
const Candidate = require('../model/candidate');


module.exports = function(passport){
    let opts ={};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.getUserById(jwt_payload.data._id, (err, user) => {
            if (err){
                return done(err, false);
            }
            if (user){

                return done(null, user);
            }
            else{
                return done(null, false);
            }
        });
        // OrgUser.getUserById(jwt_payload.data._id, (err, user) => {
        //     if (err){
        //         return done(err, false);
        //     }
        //     if (user){
        //         return done(null, user);
        //     }
        //     else{
        //         return done(null, false);
        //     }
        // });   
    }));
}


// module.exports = function(passport){
//     let opts ={};
//     opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
//     opts.secretOrKey = config.secret;
//     passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        // OrgUser.getUserById(jwt_payload.data._id, (err, user) => {
        //     if (err){
        //         return done(err, false);
        //     }
        //     if (user){
        //         return done(null, user);
        //     }
        //     else{
        //         return done(null, false);
        //     }
        // });
//     }));
// }