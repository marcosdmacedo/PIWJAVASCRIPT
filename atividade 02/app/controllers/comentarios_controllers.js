// ////////////////////////////////////////////////////
let Comentario = require("../models/comentarios.model.js");
let view_comentario = require("..//views/view.comentario.js");

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
    let id = req.params.id;
    let comentario = null;
    for(let i=0; i<comentarios.length; i++){
        if(comentarios[i].id == id){
            comentario = comentarios[i];
        }
    }
    if(comentario != null){
        res.json(comentario);
    }
    else{
        res.status(404).send('Post não encontrado!');
    }
}

module.exports.inserir_comentarios = function(req, res){
    let comentario = req.body;
    let promise = Comentario.create(comentario);
    promise.then(
        function(comentario){
            res.status(201).json(comentario)
        }
    ).catch(
        function(error){
            res.status(404).json(error);
        }
    )
}

module.exports.remover_comentarios = function(req, res){
    let id = req.params.id;
    comentarios = comentarios.filter(function(comentario){return comentario.id!=id;});
    
    res.json({mensagem:"Comentario removido com sucesso!"});
}