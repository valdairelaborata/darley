const tiposEvidencia = require('../models/tiposEvidencia')

exports.incluir = async (req,res)=>{
  // #swagger.tags = ['Tipos de evidência']
  // #swagger.description = "Inserir um tipo de evidência" 
    
console.log(req.body)

// ##########  Insert ################

await tiposEvidencia.create(req.body,(err,data)=>{
  if(err){
    res.status(501).send("erro ao Gravar tipo de evidência")
  }else{
    res.status(201).send("Tipo de evidencia Criada")
  }
})
}

// ##########  Select ################

exports.listar = async (req,res)=>{
    // #swagger.tags = ['Tipos de evidência']
    // #swagger.description = "Lista de tipo de evidências"
    let tpEvidencia = await tiposEvidencia.find({})
    res.status(200).send(tpEvidencia)
    console.log(tpEvidencia)
}

// ##########  Select where ################

exports.buscar = async (req,res)=>{
  // #swagger.tags = ['Tipos de evidência']
  // #swagger.description = "Buscar tipos de Evidências"
  let tpEvidencia = await tiposEvidencia.find({codigo:req.params.codigo})
  res.status(200).send(tpEvidencia)
  console.log((tpEvidencia))
}

// ###########  UPADATE #################


exports.atualizar = async (req,res)=>{
// #swagger.tags = ['Tipos de evidência']
// #swagger.description = "Atualizar tipos de evidências"
let tpEvidencia = await tiposEvidencia.findOneAndUpdate(
    { codigo: req.params.codigo },
    {
      $set: {
        codigo: req.body.codigo,
        descricao: req.body.descricao
      }
    }).then(docs=>{
      if (docs===null){
        console.log("codigo não exite");
        res.status(201).send("codigo não exite")
      }else{
          console.log(" Atualizado : ", docs);
          res.status(200).send("Atualizado")
      }  
    }
  )

  
}

// ##########  DELETE ################

exports.apagar = async (req,res)=>{
  // #swagger.tags = ['Tipos de evidência']
  // #swagger.description = "Apagar um tipo de evidência" 
  let tpEvidencia = await tiposEvidencia.findOneAndDelete({ codigo: req.params.codigo })
.then((docs)=>{
    if (docs===null){
        console.log("codigo não exite");
        res.status(201).send("codigo não exite")
    }else{
        console.log(" Apagado : ", docs);
        res.status(200).send("Apagado")
    }  
})
.catch(error=>{
console.error(error)
})
}

// ##########  inner join tipoevidencia evidencia ################

exports.listarEvidenciasTipo = async (req,res)=>{
  // #swagger.tags = ['Tipos de evidência']
  // #swagger.description = "Lista de tipo de evidências"
  let tpEvidencia = await tiposEvidencia.find({codigo:req.params.codigo}).populate("evidencias");
  res.status(200).send(tpEvidencia)
  console.log(tpEvidencia)
}