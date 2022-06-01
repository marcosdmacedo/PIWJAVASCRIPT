function render (comentario){
    return {
        id: comentario._id,
        texto: comentario.texto,
        id_usuario: comentario.id_usuario,
        id_post: comentario.id_post,
        // id_usuario: post.render(id_usuario.usuarios)
    }
}
module.exports.render = render;

module.exports.renderMany = function(comentarios){
    return comentarios.map(render)
}