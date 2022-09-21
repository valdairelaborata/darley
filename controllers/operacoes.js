const Operacoes = require('../models/operacoes')

exports.incluir = async (req,res)=>{
  // #swagger.tags = ['Operacoes']
  // #swagger.description = "Inserir uma Operacao" 
      
  await Operacoes.create(req.body,(err,data)=>{
    if(err){
      res.status(501).send("erro ao Gravar Operacao")
    }else{
      res.status(201).send("Operação Criada")
    }
  })
}
exports.listar = async (req,res)=>{
    // #swagger.tags = ['Operações']
    // #swagger.description = "lista de operações"
    let operacoes = await Operacoes.find({})
    console.log((typeof operacoes))
    // console.log((operacoes))
}
exports.buscar = async (req,res)=>{
  // #swagger.tags = ['Operacoes']
  // #swagger.description = "Pesquisar uma operacao" 
  let operacoes = await Operacoes.find({codigo:req.params.codigo})
  res.status(200).send(operacoes)
  
}

// ###########  ATUALIZAR #################

exports.atualizar = (req,res)=>{
  Operacoes.findOneAndUpdate(
    { codigo: req.params.codigo },
    {
      $set: {
        nome: req.body.nome,
        descricao: req.body.descricao
      }
    }).then(docs=>{
      if (docs===null){
        console.log("codigo não exite");
        res.status(201).send("codigo não exite")
      }else{
          console.log(" Atualizado : ", docs);
          res.status(200).send("Atualizado")
      }  console.log("Operacao atualizada")
    }
  )
  
}
exports.apagar = async (req,res)=>{
  // #swagger.tags = ['Operacoes']
  // #swagger.description = "Apagar uma Operacao" 
  
  await Operacoes.findOneAndDelete({ codigo: req.params.codigo })
  .then(docs=>{
          if (docs===null){
              console.log("codigo não exite");
              res.status(403).send("codigo não exite")
          }else{
              console.log(" Apagado : ", docs);
              res.status(201).send("Apagado")
          }  
  })
  .catch(error=>{
    console.error(error)
  })
}
