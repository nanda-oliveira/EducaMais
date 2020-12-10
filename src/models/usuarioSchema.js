const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const usuarioSchema = new Schema({
 
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },

    nome : {
        type: String,
        required: true
    },

    celular : {
        type: String,
        required:true
    },

    dataNascimento: {
        type: Date,
        required: true
    },

    fotoPerfil:{
        type: String,
        required: false
    }, 

   usuario: {
        type: ['familia', 'professor'],
        required: true
    }


})


const usuarioCollections = mongoose.model('usario', usuarioSchema)

module.exports = usuarioCollections