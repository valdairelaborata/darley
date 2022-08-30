const Funcionarios = require('../models/funcionarios')

// ###########  INCLUIR #################

exports.incluir = (req,res)=>{
  // #swagger.tags = ['Funcionário']
  // #swagger.description = "Inserir um funcionário" 
    
// res.status(201).send('Inserindo funcionário')
console.log(req.body)

// let result = await Funcionarios.create(req.body)

Funcionarios.create(req.body,(err,data)=>{
  if(err){
    res.status(501).send("erro ao conectar")
  }else{
    res.status(201).send("Funcionário Criado")
  }
})
}

// ###########  LISTAR #################

exports.listar = async (req,res)=>{
    // #swagger.tags = ['Comarcas']
    // #swagger.description = "lista d
    let funcionarios = await Funcionarios.find({})
    res.status(200).send(funcionarios)
    console.log((funcionarios))
}

// ###########  BUSCAR #################


exports.buscar = async (req,res)=>{
  // #swagger.tags = ['Comarcas']
  // #swagger.description = "Pesquisar uma comarca" 
  let funcionarios = await Funcionarios.find({codigo:req.params.codigo})
  res.status(200).send(funcionarios)
  console.log((funcionarios))
}

// ###########  ATUALIZAR #################


exports.atualizar = (req,res)=>{
  // #swagger.tags = ['Comarcas']
  // #swagger.description = "Atualizar uma comarca" 
  // let funcionario ={
  //   codigo:req.body.codigo,
  //   nome:req.body.nome,
  //   descri:req.body.descri
  // }

  Funcionarios.findOneAndUpdate(
    { codigo: req.params.codigo },
    {
      $set: {
        nome: req.body.nome,
        descricao: req.body.descri
      }
    },
    (err,data)=>{
      if(err){
        res.status(501).send("erro ao atualizar")
      }else{
        res.status(201).send("Funcionário atualizado")
      }
    }
  )






  // Funcionarios.updateOne(req.body,(err,data)=>{
  //   if(err){
  //     res.status(501).send("erro ao conectar")
  //   }else{
  //     res.status(201).send("Funcionário atualizado")
  //   }
  // })
  // console.log(JSON.stringify(req.params.codigo))
  
}

// ###########  APAGAR #################


exports.apagar = (req,res)=>{
   // #swagger.tags = ['Comarcas']
  // #swagger.description = "Apagar uma comarca" 
  console.log(JSON.stringify(req.params.codigo))
  res.status(200).send('Dado de funcionário apagado')
}
