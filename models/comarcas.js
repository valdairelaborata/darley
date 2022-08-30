var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var comarcaSchema = new Schema({
    codigo:{type:String,require:true,unique:true},
    // codigo:{_id: 'entityId',type:String,require:true,unique:true,select:false},
    nome:{type:String,require:true},
    descricao:{type:String},
    dataCriacao:{type:Date,default:Date.now()},
})

module.exports = mongoose.model('Comarcas',comarcaSchema)