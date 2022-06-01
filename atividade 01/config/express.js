
// importando modulo express
let express = require('express');
let routes_usuarios = require("../app/routes/usuarios.js")
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
    return app;
};

module.exports.setup = setup;
