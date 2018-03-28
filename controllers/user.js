'use strict'
var user=require('../models/user');
var bcrypt=require('bcrypt-nodejs');


    module.exports = {
        pruebas:function (req,res) {
            res.status(200).send({
                message:"Probando pruebas controller"
            });
        },
        saveUser:function (req,res) {
            var user= new User();
            var params=req.body;

            console.log(params);
            user.name=params.name;
            user.surname=params.surname;
            user.email=params.email;
            user.role='ROLE_ADMIN';
            user.image='null';

            if(params.password){
                bcrypt.hash(params.password,null,null,function (err,hash) {
                   user.password=hash;
                   if(user.name!=null && user.surname!=null && user.email!=null){
                        user.save((err,userStored)=>{
                            if(err){
                                res.status(500).send('Error al guardar el usuario!')
                            }else{
                                if(!userStored){
                                    res.status(404).send('No se ha registrado el usuario!')
                                }
                                else{
                                    res.status(200).send({user:userStored});
                                }
                            }
                        });
                   }else{
                        res.status(200).send({message:'Rellena todos los datos!'});
                   }
                });
            }else{
                res.status(500).send({message:'Introduce la contraseña!'});
            }
        },
        loginUser:function (req,res) {
            var params=req.body;
            var email=params.email;
            var password=params.password;

            User.findOne({email:email.toLocaleLowerCase()},(err,user)=>{
                if(err){
                    res.status(500).send({message:'Error en la petición'});
                }else{
                    if(!user){
                        res.status(404).send({message:'El usuario no existe'});
                    }else{
                        bcrypt.compare(password,user.password,function (err,check) {
                            if(check){
                            //devolver los datos delusuaro logueado
                                if(params.gethash){
                                    //devolver un token jwt
                                }else{
                                    res.status(200).send({user});
                                }
                            }else{
                                res.status(404).send({message:'El usuario no ha podido logearse '});

                            }
                        })
                    }
                }
            })
        }
    }
