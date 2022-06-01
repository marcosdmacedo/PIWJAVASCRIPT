// importando modulo express
let express = require('express');
// rotas 
let routes_usuarios = require("../app/routes/usuarios_routes.js");
let routes_posts = require("../app/routes/posts_routs.js");
let routes_comentarios = require("../app/routes/comentarios_routs.js");
// bilbioteca para o POST
let bodyParser = require("Body-parser");

// exportando modulo
function setup(){
    let app = express();
    // definindo variavéis de aplicações
    app.set("port", 3000);
    // Para o post (segundo aulas antigas)
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    
    app.use(express.static("./public"))

    routes_usuarios(app);
    routes_posts(app);
    routes_comentarios(app);

    return app;
};
module.exports.setup = setup;
