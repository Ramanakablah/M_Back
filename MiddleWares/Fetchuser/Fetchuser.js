const { Verifyit } = require("../../Helpers/ApplicationHelpers/JWT")

module.exports.Fetchuser= async(req,res,next)=>{

    if(req.headers.authorization){
        const Token = req.headers.authorization.split(" ")[1];
        req.user = Verifyit(Token,res)
    }
    else{
        res.status(401).json({
            status:"Failed",
            mssg:null,
            errmssg:"No Authorization is provided"
        })
    }

    next()
}