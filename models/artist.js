'use strict'
var mongoose = require('mongoose');
var schema = mongoose.Schema;


var ArtistSchema = schema({
    name:String,
    description:String,
    image:String
})
module.exports=mongoose.model('Artist',ArtistSchema);
