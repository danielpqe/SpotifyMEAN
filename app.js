'use strict'
var express= require('express')
var bodyParser= require('body-parser')

var app = express();

//cargar rutas

app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());

//Configurar cabeceras http



//Carga de rutas base

app.get('/pruebas',function (req,res) {
    res.status(200).send({message:'Hello World!'});
});

module.exports=app;