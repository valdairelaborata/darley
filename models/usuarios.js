var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var usuarioSchema = new Schema({
    codigo:{type:String,require:true,unique:true},
    nome:{type:String,require:true},
    login:{type:String,require:true},
    senha:{type:String},
    dataCriacao:{type:Date,default:Date.now()},
})

module.exports = mongoose.model('Usuarios',usuarioSchema)