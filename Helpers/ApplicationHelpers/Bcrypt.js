const bcrypt = require("bcryptjs")
const  ResponseHandle  = require("../Response/ResponseHandler")


module.exports.Hasher = async (Item)=>{
    const genSalt = await bcrypt.genSalt(10)
    const Hashitem = await bcrypt.hash(Item,genSalt)

    return Hashitem
}

module.exports.Comparer = async (String,HashString,res)=>{
    const result = await bcrypt.compare(String,HashString)
    if(!result){
        ResponseHandle.Failed(res,"Password Incorrect Try Again")
        return 
    }
    return ;
}