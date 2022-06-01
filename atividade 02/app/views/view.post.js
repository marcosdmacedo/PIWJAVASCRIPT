function render (post){
    return {
        id: post._id,
        texto: post.texto,
        id_usuario: post.id_usuario,
        // id_usuario: post.render(id_usuario.usuarios)
    }
}
module.exports.render = render;

module.exports.renderMany = function(posts){
    return posts.map(render)
}