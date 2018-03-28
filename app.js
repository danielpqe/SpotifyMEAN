'use strict'
var express= require('express')
var bodyParser= require('body-parser')

var app = express();

//cargar rutas
var user_routes= require('./routes/user');

app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());

//Configurar cabeceras http



//Carga de rutas base
app.use('/api',user_routes);

//rutas prueba, yo no se usa
// app.get('/pruebas',function (req,res) {
//     res.status(200).send({message:'Hello World!'});
// });

module.exports=app;