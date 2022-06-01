let Usuario = require('../models/usuario.model.js');
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
const { JsonWebTokenError } = require("jsonwebtoken");

// POST/usuarios/signin
module.exports.logar = function(req, res){
    let email = req.body.email;
    let promise = Usuario.findOne({email: req.body.email})
    .then(
        function(usuario){
            if(bcrypt.compareSync(req.body.senha, usuario.senha)){
                let token = jwt.sign({
                    id_usuario: usuario._id,
                    email: usuario.email
                },"PIW2022.1")
                res.status(200).json({token: token});
            }else {
                res.status(401).send("credenciais erradas!")
        }
    }).catch(
        function(error){
            res.status(401).send("não credenciadas!")
        }
    )
}

module.exports.checar = function(req, res, next){
    let token = req.headers.token;
    jwt.verify(token, "PIW2022.1", function(err, decoded){
        if(err){
            res.status(401).json("Token inválido!");
        }else{
        next();
        }
    })
};