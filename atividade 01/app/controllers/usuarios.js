
// let Usuario = require("./models/usuarios.model.js");

// Funções que vão tratar as requisições (USUARIOS)
let usuarios = [
    {
        id:1,
        nome:"Victor",
        email:"victor.aefarias@gmail.com",
        senha:"123"
    },
    {
        id:2,
        nome:"Marcos",
        email:"marcos@gmail.com",
        senha:"456"
    },
    {
        id:3,
        nome:"João",
        email:"joao@gmail.com",
        senha:"789",
    }
]

module.exports.listar_usuarios = function (req, res){
    //retorno em json como corpo da resposta
    //alunos é a rota!
    res.json(usuarios); 
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
   let usuario = req.body;
   usuarios.push(usuario);
   res.status(201).json(usuario);

}

module.exports.remover_usuario = function(req, res){
    let id = req.params.id;
    usuarios = usuarios.filter(function(usuario){return usuario.id!=id;});
    
    res.json({mensagem:"Usuario removido com sucesso!"});
}


////////////////////////////////////////////////////
// Funções que vão tratar as requisições (Posts)

let posts = [
    {
        id:1,
        texto:"oi, tudo bem?",
        likes:6,
    },
    {
        id:2,
        texto:"Tudo bom! e vc?",
        likes:6
    }
]

module.exports.listar_posts= function (req, res){
    //retorno em json como corpo da resposta
    //alunos é a rota!
    res.json(posts); 
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
    posts.push(post);
    res.status(201).json(post);
}

module.exports.remover_posts = function(req, res){
    let id = req.params.id;
    posts = posts.filter(function(post){return post.id!=id;});
    
    res.json({mensagem:"Post removido com sucesso!"});
}