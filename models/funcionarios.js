var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var funcionarioSchema = new Schema({
    // codigo:{type:String,require:true,unique:true,select:false},
    codigo:{type:String,require:true,unique:true},
    nome:{type:String,require:true},
    cdescricaoodigo:{type:String},
    dataCriacao:{type:Date,default:Date.now()},
})

module.exports = mongoose.model('Funcionario',funcionarioSchema)