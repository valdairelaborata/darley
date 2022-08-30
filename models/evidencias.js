var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var evidenciaSchema = new Schema({
    codigo:{type:String,require:true,unique:true,select:false},
    descricao:{type:String,require:true},
    dtColeta:{type:Date},
    tipoEvid_id:{type:Number},
    status:{type:String},
    owner:{
        type:Schema.Types.ObjectId,
        ref:"tiposEvidencia"
    },
    dataCriacao:{type:Date,default:Date.now()},

})  
module.exports = mongoose.model('Evidencias',evidenciaSchema)