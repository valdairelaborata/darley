const Usuarios = require('../models/usuarios')

exports.incluir = async (req,res)=>{
  // #swagger.tags = ['Usuarios']
  // #swagger.description = "Inserir um usuario" 
      
  await Usuarios.create(req.body,(err,data)=>{
    if(err){
      res.status(501).send("erro ao Gravar Usuario")
    }else{
      res.status(201).send("Usuario Criado")
    }
  })
}
exports.listar = async (req,res)=>{
    // #swagger.tags = ['Usuario']
    // #swagger.description = "lista de Usuaŕios"
    let usuario = await Usuarios.find({})
    res.status(200).send(usuario)
    console.log((usuario))
}
exports.buscar = async (req,res)=>{
  // #swagger.tags = ['Usuario']
  // #swagger.description = "Pesquisar um usuario" 
  let usuario = await Usuarios.find({codigo:req.params.codigo})
  res.status(200).send(usuario)
  console.log((usuario))
}

// ###########  ATUALIZAR #################


exports.atualizar = (req,res)=>{
  // #swagger.tags = ['Usuario']
  // #swagger.description = "Atualiar um usuario" 
  Usuarios.findOneAndUpdate(
    { codigo: req.params.codigo },
    {
      $set: {
        nome: req.body.nome,
        usuario: req.body.usuario,
        senha: req.body.senha,
        login:req.body.login,
        img:req.body.img,
        funcao:req.body.funcao,
        setor:req.body.setor
      }
    }).then(docs=>{
      if (docs===null){
        console.log("codigo não exite");
        res.status(201).send("codigo não exite")
      }else{
          console.log(" Atualizado : ", docs);
          res.status(200).send("Atualizado")
      }  ole.log("Usuario atualizado")
    }
  )
  
}

exports.apagar = async (req,res)=>{
  // #swagger.tags = ['Usuario']
  // #swagger.description = "Apagar um Usuario" 
  
  await Usuarios.findOneAndDelete({ codigo: req.params.codigo })
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
