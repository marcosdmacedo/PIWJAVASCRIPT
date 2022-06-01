
let controller_usuarios = require("../controllers/usuarios_controllers.js")

//função para adicionar as rotas
module.exports = function (app){
    // endpoint GET /usuarios
    app.get("/usuarios", controller_usuarios.listar_usuarios);

    // endpoint GET -- Retorna pelo ID
    app.get("/usuarios/:id", controller_usuarios.obter_usuarios);

    // endpoint POST 
    app.post("/usuarios", controller_usuarios.inserir_usuario);
    
    // endpoint DELETE -- Pelo ID
    app.delete("/usuarios/:id", controller_usuarios.remover_usuario);

}

