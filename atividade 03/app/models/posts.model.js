let mongoose = require("mongoose");

module.exports = function(){
   let schema = mongoose.Schema({
       texto: {
           type: String,
           required: true
       },
       likes: {
           type: String,
           required: true
       },
       id_usuario: {
            type: mongoose.Schema.ObjectId,
            ref: 'usuario'
        }
   });
   return mongoose.model('Post', schema);
}();
