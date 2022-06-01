
let controller_usuarios = require("../controllers/usuarios_controllers.js")
let controller_auth = require("../controllers/auth.controller");
//função para adicionar as rotas
module.exports = function (app){
    // endpoint POST de logar >> signin >> bcrypt >> senha.
    app.post("/usuarios/signin", controller_auth.logar);
    // endpoint POST 
    app.post("/usuarios", controller_usuarios.inserir_usuario);
    // USE >> token
    app.use("/usuarios", controller_auth.checar);
    // endpoint GET /usuarios
    app.get("/usuarios", controller_usuarios.listar_usuarios);
    // endpoint GET -- Retorna pelo ID
    app.get("/usuarios/:id", controller_usuarios.obter_usuarios);
    // endpoint DELETE -- Pelo ID
    app.delete("/usuarios/:id", controller_usuarios.remover_usuario);

}

