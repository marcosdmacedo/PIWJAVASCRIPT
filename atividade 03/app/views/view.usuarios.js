function render (usuario){
    return {
        id: usuario._id,
        nome: usuario.nome,
        email: usuario.email,
        senha: usuario.senha
    }
}
module.exports.render = render;

module.exports.renderMany = function(usuarios){
    return usuarios.map(render)
}