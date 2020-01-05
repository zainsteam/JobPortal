const mongoose = require('mongoose');

//candidate schema
const apply = mongoose.Schema({
    JobId:{type:String},
    CanEmail:{type:String},
});

const Apply = module.exports = mongoose.model('apply', apply);
