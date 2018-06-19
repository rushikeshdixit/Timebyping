var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title:{type:String, required:true},
    content:{type:String, required:true},
    // user:{type: Schema.Types.ObjectId, ref:'User'}
});

module.exports = mongoose.model('Note', schema);
