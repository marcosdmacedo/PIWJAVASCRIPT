////////////////////////////////////////////////////
// Funções que vão tratar as requisições (Posts)
let Post = require("../models/posts.model");
let view_post = require("../views/view.post");

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
    let post = null;
    for(let i=0; i<posts.length; i++){
        if(posts[i].id == id){
            post = posts[i];
        }
    }
    if(post != null){
        res.json(post);
    }
    else{
        res.status(404).send('Post não encontrado!');
    }
}

module.exports.inserir_posts = function(req, res){
    let post = req.body;
    let promise = Post.create(post);
    promise.then(
        function(post){
            res.status(201).json(post)
        }
    ).catch(
        function(error){
            res.status(404).json(error);
        }
    )
}

module.exports.remover_posts = function(req, res){
    let id = req.params.id;
    posts = posts.filter(function(post){return post.id!=id;});
    
    res.json({mensagem:"Post removido com sucesso!"});
}