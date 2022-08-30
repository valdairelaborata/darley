var jwt  =require("jsonwebtoken")
const Usuario = require("../models/usuarios")
exports.login = async (req,res)=>{
//  #swagger.tags = ['Login']
//  #swagger.description = "Página de Login" 
    
    var usuarioLogado = await Usuario.findOne({login:req.body.login})
    if(usuarioLogado!=null){
        if(req.body.senha==usuarioLogado.senha){
            var token = jwt.sign({id:req.body.login},"yhvh77",{expiresIn:'1m'})
            res.status(200).send(token)
        }else{
            res.status(403).send("Senha Inválida")
        }
    }else{
        res.status(403).send("Usuário nao existente")
    }
}