var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var operacaoSchema = new Schema({
    codigo:{type:String,require:true,unique:true},
    nome:{type:String,require:true},
    descricao:{type:String},
    dataCriacao:{type:Date,default:Date.now()},
})

module.exports = mongoose.model('Operacoes',operacaoSchema)