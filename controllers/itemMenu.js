const ItemMenu = require('../models/itemMenu')

exports.incluir = async (req,res)=>{
  // #swagger.tags = ['ItemMenu']
  // #swagger.description = "Inserir uma item de menu" 
  console.log(req.body)
  await ItemMenu.create(req.body,(err,data)=>{
    if(err){
      res.status(501).send("Erro ao gravar")
    }else{
      res.status(201).send("Item de menu Criado")
    }
  })
}

exports.listar = async (req,res)=>{
    // #swagger.tags = ['Comarcas']
    // #swagger.description = "lista d
    let itemMenu = await ItemMenu.find({})
    res.status(200).send(itemMenu)
    console.log((itemMenu))
}
exports.buscar = async (req,res)=>{
  // #swagger.tags = ['ItemMenu']
  // #swagger.description = "Pesquisar um item de menu" 
  let itemMenu = await ItemMenu.find({codigo:req.params.codigo})
  res.status(200).send(itemMenu)
  console.log((itemMenu))
}

// ###########  ATUALIZAR #################


exports.atualizar = (req,res)=>{
  ItemMenu.findOneAndUpdate(
    { codigo: req.params.codigo },
    {
      $set: {
        nome: req.body.nome,
        classe: req.body.classe,
        href:req.body.href,
        img:req.body.img,
        link:req.body.link
      }
    }).then(docs=>{
      if (docs===null){
        console.log("codigo não exite");
        res.status(201).send("codigo não exite")
      }else{
          console.log(" Atualizado : ", docs);
          res.status(200).send("Atualizado")
      }  ole.log("Item de menu atualizada")
    }
  )
  
}

exports.apagar = async (req,res)=>{
  // #swagger.tags = ['Item de Menu']
  // #swagger.description = "Apagar um item de menu" 
  
  await ItemMenu.findOneAndDelete({ codigo: req.params.codigo })
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
