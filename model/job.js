var mongoose = require('mongoose');


var job =  mongoose.Schema({
    category:{ type: String },
    Email:{ type: String },
    title: { type: String },
    type: { type: String },
    minsalary: { type: Number },
    maxsalary: { type: Number },
    lastdate: { type: String },
    city: { type: String },
    experience: { type: String },
    experiencetime: { type: String },
    description: { type: String },
    responsiblity: { type: String }
});

module.exports = mongoose.model('job', job);