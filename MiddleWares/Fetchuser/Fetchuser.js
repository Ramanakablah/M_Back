const { Verifyit } = require("../../Helpers/ApplicationHelpers/JWT")
const Responsehandle = require("../../Helpers/Response/ResponseHandler")

module.exports.Fetchuser= async(req,res,next)=>{

    if(req.headers.authorization){
        const Token = req.headers.authorization.split(" ")[1];
        req.user = Verifyit(Token,res)
    }
    else{
       Responsehandle.CustomError(res,401,"Failed","No Authorization Provided",null,null)
       return ;
    }

    next()
}