////////////////////////////////////////////////////
// Funções que vão tratar as requisições (Posts)
let bcrypt = require("bcrypt");
let Post = require("../models/posts.model.js");
let view_post = require("../views/view.post.js");
let jwt = require("jsonwebtoken")

module.exports.listar_posts= function (req, res){
    let promise =  Post.find().populate("post").exec();
    
    promise.then(
        function(posts){
            res.status(200).json(view_post.renderMany(posts));
        }
    ).catch(
        function(error){
            res.status(501).json(error);
        }
    )
}

module.exports.obter_posts = function(req, res){
    let id = req.params.id;
    let promise = Post.findById(id).exec();
    promise.then(
        function(post){
            res.status(200).json(view_post.renderMany(post));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

module.exports.inserir_posts = function(req, res){
    let token = req.headers.token;
    let payload = jwt.decode(token)
    let id_usuario = payload.id_usuario;
    
    let post = {
        texto: req.body.texto,
        likes: req.body.likes,
        id_usuario: req.body.id_usuario
    }

    let promise = Post.create(post);
    promise.then(
        function(posts){
            res.status(201).json(view_post.render(post));
        }
    ).catch(
        function(error){
            res.status(404).json(error);
        }
    )
}

module.exports.remover_pots = function(req, res){
    let id = req.params.id;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario = jwt.decode(token).id_usuario;

    let promise = Post.findByIdAndDelete(id).exec();
    promise.then(
        function(post){
            if(id == id_usuario){
                res.status(200).json(view_posts.render(post));
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