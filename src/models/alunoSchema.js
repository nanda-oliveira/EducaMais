const mongoose = require('mongoose')
const Schema = mongoose.Schema

const alunoSchema = new Schema({
    
_id: {
    type: mongoose.Schema.Types.ObjectId,
    auto : true,
    required: true
}, 

nome : {
    type : String,
    required : true
},

dataNascimento : {
    type: Date,
    required:true
},

fotoPerfil:{
    type: String,
    required: false
}, 

serieEscolar : {
    type : String,
    required: true
},

brinquedoFavorito : {
    type: String,
    required: true
}


})

const  alunoCollections = mongoose.model('aluno', alunoSchema)

module.exports = alunoCollections