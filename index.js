'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mean2',function(err,res){
    if(err){
        throw err;
    }else{
        console.log("DB corriendo...");
        app.listen(port,function () {
            console.log("Servidor API REST de musica escuchando en http://localhost:"+port);
        })
    }
});