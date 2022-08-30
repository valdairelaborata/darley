var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var itemMenuSchema = new Schema({
    codigo:{type:String,require:true,unique:true},
    // codigo:{_id: 'entityId',type:String,require:true,unique:true,select:false},
    nome:{type:String,require:true},
    classe:{type:String,require:true},
    href:{type:String,require:true},
    img:{type:String,require:true},
    link:{type:String,require:true}
})

module.exports = mongoose.model('ItemMenu',itemMenuSchema)