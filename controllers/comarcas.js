const Comarcas = require('../models/comarcas')

exports.incluir = async (req,res)=>{
  // #swagger.tags = ['Comarcas']
  // #swagger.description = "Inserir uma comarca" 
      
  await Comarcas.create(req.body,(err,data)=>{
    if(err){
      res.status(501).send("erro ao Gravar Comarca")
    }else{
      res.status(201).send("Comarca Criada")
    }
  })
}

exports.listar = async (req,res)=>{
    // #swagger.tags = ['Comarcas']
    // #swagger.description = "lista d
    let comarcas = await Comarcas.find({})
    res.status(200).send(comarcas)
    console.log((comarcas))
}
exports.buscar = async (req,res)=>{
  // #swagger.tags = ['Comarcas']
  // #swagger.description = "Pesquisar uma comarca" 
  let comarcas = await Comarcas.find({codigo:req.params.codigo})
  res.status(200).send(comarcas)
  console.log((comarcas))
}

// ###########  ATUALIZAR #################


exports.atualizar = (req,res)=>{
  Comarcas.findOneAndUpdate(
    { codigo: req.params.codigo },
    {
      $set: {
        nome: req.body.nome,
        descricao: req.body.descri
      }
    }).then(docs=>{
      if (docs===null){
        console.log("codigo não exite");
        res.status(201).send("codigo não exite")
      }else{
          console.log(" Atualizado : ", docs);
          res.status(200).send("Atualizado")
      }  ole.log("Comarca atualizada")
    }
  )
  
}

exports.apagar = async (req,res)=>{
  // #swagger.tags = ['Comarcas']
  // #swagger.description = "Apagar uma comarca" 
  
  await Comarcas.findOneAndDelete({ codigo: req.params.codigo })
  .then(docs=>{
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
