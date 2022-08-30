const Evidencias = require('../models/evidencias')
const tiposEvidencia = require('../models/tiposEvidencia')

// ############## INCLUIR ###################

exports.incluir = async (req,res)=>{
      // #swagger.tags = ['Evidências']
      // #swagger.description = "Inserir uma evidência" 
      // Gravando evidencia
      Evidencias.create(req.body)
      .then(docEvidencia => {
              const filter = {codigo:req.body.tipoEvid_id}
              console.log("\n>> Categoria Criada:\n", docEvidencia);
              tiposEvidencia.findOneAndUpdate(
              filter,
                { evidencias: docEvidencia._id},
                { new: true, useFindAndModify: false }
              ).exec();
              res.status(201).send("Evidencia criada")
              return docEvidencia;
      }    );
};

// ############## LISTAR ################

exports.listar = async (req,res)=>{
    // #swagger.tags = ['Evidências']
    // #swagger.description = "lista de Evidências"
    let evidencia = await Evidencias.find({})
    res.status(200).send(evidencia)
    console.log((evidencia))
}
exports.buscar = async (req,res)=>{
  // #swagger.tags = ['Evidências']
  // #swagger.description = "Buscar de Evidências"
  let evidencia = await Evidencias.find({codigo:req.params.codigo})
  res.status(200).send(evidencia)
  console.log((evidencia))
}

// ###########  ATUALIZAR #################

exports.atualizar = async (req,res)=>{
// #swagger.tags = ['Evidências']
// #swagger.description = "Atualizar Evidências"
console.log()
let evidencia = await Evidencias.findOneAndUpdate({ codigo: req.params.codigo },
    {
      $set: {
        tipoEvid_id: req.body.tipoEvid_id,
        descricao: req.body.descricao,
        status: req.body.status,
        dtColeta:req.body.dtColeta
      }
    })
    .then(docs=>{
        if (docs===null){
          console.log("codigo não exite");
          res.status(201).send("codigo não exite")
        }else{
            console.log(" Atualizado : ", docs);
            res.status(200).send("Atualizado")
        }  
      }
    ).catch(error=>{
      console.error(error)
    })
}

exports.apagar = async (req,res)=>{
  // #swagger.tags = ['Evidências']
  // #swagger.description = "Apagar uma Evidência" 
  let evidencia = await Evidencias.findOneAndDelete({codigo: req.params.codigo })
  .then((err,docs)=>{
          if(docs===null){
              console.log("documento não exite");
              res.status(201).send("documento não existe")
          }else{
              console.log(" Apagado : ", docs);
              res.status(200).send("Apagado")
          }  
  })
  .catch(error=>{
    console.error(error)
  })
}