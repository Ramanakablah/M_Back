const {body,validationResult} = require("express-validator")

module.exports.Validate = async (req,res,next)=>{
    body("Email").isEmail();
    
    const result = validationResult(req);
    if(result){
        console.log(true)
    }
    else{
        console.log(false)
    }
 next()
}