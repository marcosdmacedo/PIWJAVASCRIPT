let Usuario = require("../models/usuario.model.js");
let view_usuario = require("../views/view.usuarios.js");
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
    let usuario = null;
    for(let i=0; i<usuarios.length; i++){
        if(usuarios[i].id == id){
            usuario = usuarios[i];
        }
    }
    if(usuario != null){
        res.json(usuario);
    }
    else{
        res.status(404).send('Usuário não encontrado!');
    }
}

module.exports.inserir_usuario = function(req, res){
//    let usuario = req.body;
//    usuarios.push(usuario);
//    res.status(201).json(usuario);
    let usuario = req.body;
    let promise = Usuario.create(usuario);
    promise.then(
        function(usuario){
            res.status(201).json(usuario)
        }
    ).catch(
        function(error){
            res.status(404).json(error);
        }
    )

}

module.exports.remover_usuario = function(req, res){
    let id = req.params.id;
    usuarios = usuarios.filter(function(usuario){return usuario.id!=id;});
    
    res.json({mensagem:"Usuario removido com sucesso!"});
}


