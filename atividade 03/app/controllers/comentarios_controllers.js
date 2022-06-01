// ////////////////////////////////////////////////////
let Comentario = require("../models/comentarios.model.js");
let view_comentario = require("..//views/view.comentario.js");
let jwt = require("jsonwebtoken");

module.exports.listar_comentarios= function (req, res){

    let promise =  Comentario.find().populate("comentario").exec();
    promise.then(
        function(comentarios){
            res.status(200).json(view_comentario.renderMany(comentarios));
        }
    ).catch(
        function(error){
            res.status(501).json(error);
        }
    ) 
}

module.exports.obter_comentarios = function(req, res){
    let token = req.headers.token
    let payload = jwt.decode(token)
    let id_usuario = payload.id_usuario;

    let comentario = {
        texto: req.body.texto,
        id_post: req.body.id_post,
        id_usuario: id_usuario
    }

    let promise = Comentario.findById(id_usuario).populate("comentario").exec();
    promise.then(
        function(comentario){
            res.status(200).json(view_comentario.render(comentario));
        }
    ).catch(
        function(error){
            res.status(500).json(error); 
        }
    )
}

module.exports.inserir_comentarios = function(req, res){
    let comentario = {
        texto: req.body.texto,
        id_usuario: req.body.id_usuario,
        id_posts: req.body.id_posts
    }
    let promise = Comentario.create(comentario);
    promise.then(
        function(comentario){
            res.status(201).json(view_comentario.render(comentario));
        }
    ).catch(
        function(error){
            res.status(404).json(error);
        }
    )
}

module.exports.remover_comentarios = function(req, res){
    // let id = req.params.id;
    // let token = req.headers.token
    // let id_comentario = jwt.decode(token).id_comentario;

    let promise = Comentario.findByIdAndDelete(id).exec();
    promise.then(
        function(comentario){
            if(id == id_comentario){
                res.status(200).json(view_comentario.render(comentario));
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