'use strict'



    module.exports = {
        pruebas:function (req,res) {
            res.status(200).send({
                message:"Probando pruebas controller"
            });
        }
    }
