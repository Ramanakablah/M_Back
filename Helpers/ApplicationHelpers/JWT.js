const jwt = require("jsonwebtoken")
const {JWT_SIGN} = require("../../Configs/Express")
const  ResponseHandle  = require("../Response/ResponseHandler")

module.exports.Signit= async (Data,res)=>{
try {
    const Token = jwt.sign({...Data,iat :Date.now()}, JWT_SIGN)
    ResponseHandle.Successfull(res,"Welcome",{Token:Token})
} catch (error) {
    ResponseHandle.InternalServer(res,"Internal Server Error")
}finally{
    return;
}
}

module.exports.Verifyit=(Token,res)=>{
    if(!Token){
        ResponseHandle.Failed(res,"Login again Token Not found")
    }
    try {
        const Data = jwt.verify(Token,JWT_SIGN)
        return Data
    } catch (error) {
        console.log(error)
        ResponseHandle.Failed(res,"Login again Token Not found")
        return
    }
}