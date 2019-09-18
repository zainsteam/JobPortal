const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//candidate schema
const CandidateSchema = mongoose.Schema({
    FirstName:{type:String},
    MName:{type:String},
    Address:String,
    Number:String,
    Dob:String,
    Country:String,
    City:String,
    Education:[],
    Skill:[],
    Experience:[],   
    Email:{
        type:String,
        required:true
    }
});

const Candidate = module.exports = mongoose.model('Candidate', CandidateSchema);

module.exports.getCandEmail = function(Email, callback){
    const query = {Email:Email}
    Candidate.findOne(query, callback);
}

module.exports.addCand = function (newCand, callback){
            newCand.save(callback);
}
