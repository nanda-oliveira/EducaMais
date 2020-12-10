const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postagemSchema = new Schema({
    usuarioId : {
        type : mongoose.Schema.Types.ObjectId,
        ref :"usuario",
        required: true
    },

    createdAt:{
        type: Date,
        default : Date.now
    },
     
    titulo : {
        type: String,
        required : true,
    },

    texto: {
        type : String,
        required : true
    }


}
)

 const postagemCollections = mongoose.model('postagem', postagemSchema)

 module.exports = postagemCollections