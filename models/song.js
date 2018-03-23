'use strict'
var mongoose = require('mongoose');
var schema = mongoose.Schema;


var SongSchema = schema({
    number:String,
    name:String,
    duration:String,
    file:String,
    album:{type:Schema.ObjectId,ref:'Album'}
})
module.exports=mongoose.model('Song',SongSchema);