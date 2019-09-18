var mongoose = require('mongoose');


var qb =  mongoose.Schema({
    qnum:{ type: Number },
    qcat: { type: String },
    question: { type: String }
});

module.exports = mongoose.model('QuestionBank', qb);