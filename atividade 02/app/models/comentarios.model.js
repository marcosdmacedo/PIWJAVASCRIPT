let mongoose = require("mongoose");

module.exports = function(){
   let schema = mongoose.Schema({
       texto: {
           type: String,
           required: true
       },
       id_usuario: {
            type: mongoose.Schema.ObjectId,
            ref: 'usuario'
        },
        id_post: {
            type: mongoose.Schema.ObjectId,
            ref: 'post'
        }
   });
   return mongoose.model('Comentario', schema);
}();
