const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//user schema
const UserSchema = mongoose.Schema({
    Password:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    UserName:{
        type: String,
        required: true
    },
    FirstName:{
        type: String
    },
    Role:{
        type: String
    }
   
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
    const query = id;
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(UserName, callback){
    const query = {UserName: UserName}
    User.findOne(query, callback);
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