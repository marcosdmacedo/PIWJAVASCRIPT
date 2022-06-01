let controller_posts = require("../controllers/posts_controllers.js");
let controller_auth = require("../controllers/auth.controller.js");

module.exports = function (app){
    app.use("/posts", controller_auth.checar);
    // Listar os Posts > endpoint (GET)
    app.get("/posts", controller_posts.listar_posts);
    // Encontrar posts po id > endpoint(GET by ID)
    app.get("/posts/:id",controller_posts.obter_posts);
    // Adcionar post > endpoint (POST)
    app.post("/posts", controller_posts.inserir_posts);
    // Deletar post > endpoint (DELETE by ID)
     app.delete("/posts/:id", controller_posts.remover_pots);
 
}