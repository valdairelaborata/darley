var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var tiposEvidenciaSchema = new Schema({
    codigo:{type:String,require:true,unique:true,select:true},
    descricao:{type:String,require:true},
    evidencias:[{
        type:Schema.Types.ObjectId,
        ref:"Evidencias"
    }],
    dataCriacao:{type:Date,default:Date.now()}
})
module.exports = mongoose.model('tiposEvidencia',tiposEvidenciaSchema)