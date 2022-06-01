let Usuario = require("../models/usuario.model.js");
let view_usuario = require("../views/view.usuarios.js");
let bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken")

// Funções que vão tratar as requisições (USUARIOS)
// ja estão criadas no MongoDB
module.exports.listar_usuarios = function (req, res){
    let promise =  Usuario.find().populate("usuario").exec();
    
    promise.then(
        function(usuarios){
            res.status(200).json(view_usuario.renderMany(usuarios));
        }
    ).catch(
        function(error){
            res.status(501).json(error);
        }
    )
}

module.exports.obter_usuarios = function(req, res){
    let id = req.params.id;
    let promise = Usuario.findById(id).exec();
    promise.then(
        function(usuario){
            res.status(200).json(view_usuario(usuario));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

module.exports.inserir_usuario = function(req, res){
    // let usuario = req.body;
    let usuario = {
        id: req.body._id,
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10)
    }
    let promise = Usuario.create(usuario);
    promise.then(
        function(usuario){
            res.status(201).json({nome:usuario.nome, email:usuario.email})
        }
    ).catch(
        function(error){
            res.status(404).json(error);
        }
    )
}

module.exports.remover_usuario = function(req, res){
    let id = req.params.id;
    let token = req.headers.token
    let id_usuario = jwt.decode(token).id_usuario;

    let promise = Usuario.findByIdAndDelete(id).exec();
    promise.then(
        function(usuario){
            if(id == id_usuario){
                promise.then(
                function(usuario){
                    res.status(200).json(view_usuario.render(usuario));
                }).catch(
                    function(error){
                        res.status(401).send("Não foi possivel remover");
                    }
                )
            }else{
                res.status(401).send("Não foi possivel remover");
            }
        }
    ).catch(
        function(error){
            res.status(400).json(error);
        }
    )
}
