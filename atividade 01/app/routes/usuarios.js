
let controller_usuarios = require("../controllers/usuarios.js")

//função para adicionar as rotas
module.exports = function(app){
    // endpoint GET /usuarios
    app.get("/usuarios", controller_usuarios.listar_usuarios);

    // endpoint GET -- Retorna pelo ID
    app.get("/usuarios/:id", controller_usuarios.obter_usuarios);

    // endpoint POST 
    app.post("/usuarios", controller_usuarios.inserir_usuario);
    
    // endpoint DELETE -- Pelo ID
    app.delete("/usuarios/:id", controller_usuarios.remover_usuario);

    //////////////////////////////////////////////////

    // Listar os Posts
    app.get("/posts", controller_usuarios.listar_posts);

    // Encontrar posts po id
    app.get("/posts/:id",controller_usuarios.obter_posts);
     
    // endpoint POST para os posts
    app.post("/posts", controller_usuarios.inserir_posts);
    
    // endpoint DELETE posts-- Pelo ID
     app.delete("/posts/:id", controller_usuarios.remover_posts);
 


}

