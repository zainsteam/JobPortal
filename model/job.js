var mongoose = require('mongoose');


var job =  mongoose.Schema({
    jcat:{ type: String },
    Email:{ type: String },
    jtit: { type: String },
    jtype: { type: String },
    minsal: { type: Number },
    maxsal: { type: Number },
    ldate: { type: String },
    city: { type: String },
    skill: { type: String },
    exp: { type: String },
    expt: { type: String },
    jdes: { type: String }
});

module.exports = mongoose.model('job', job);