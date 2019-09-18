const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//user schema
const OrgSchema = mongoose.Schema({
    Password:{
        type: String
    },
    Email:{
        type: String,
        required: true
    },
    UserName:{
        type: String
    },
    OrgName:{
        type: String
    }
   
});

const OrgUser = module.exports = mongoose.model('Organisation', OrgSchema);

module.exports.getUserById = function(id, callback){
    const query = id;
    OrgUser.findById(id, callback);
}

module.exports.getUserByUsername = function(UserName, callback){
    const query = {UserName: UserName}
    OrgUser.findOne(query, callback);
}

module.exports.addUser = function (newUser, callback){
    bcrypt.genSalt(10,(err, salt) =>{
        bcrypt.hash(newUser.Password, salt, (err, hash) => {
           if(err) throw err; 
            newUser.Password = hash;
            newUser.save(callback);
        });

   });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}