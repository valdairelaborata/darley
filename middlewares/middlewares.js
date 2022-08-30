var jwt  =require("jsonwebtoken")
var { body, validationResult } =require("express-validator")

exports.isAuth= (req,res,next)=>{
    let token = req.headers.auth
    let valido = jwt.verify(token,"yhvh77",(err,encoded)=>{
        if(!err){
            console.log(encoded)
            next()
        }else{
        console.log(err)
        return res.status(403).json({msg:'Acesso não permitido'})
        }
    })

}
exports.validacao =
(req,res,next) => {
[
body('login').isEmail(),
body('senha').isLength({ min: 5 })
]
const errors = validationResult(req);
console.log(errors)
    if (!errors.isEmpty()) {
        console.log(errors)
        return res.status(400).json({ errors: errors.array() });
    }else{
        console.log("sem errors")
    }
next()
}