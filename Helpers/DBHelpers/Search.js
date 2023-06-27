
module.exports.SearchBy= async (Model,Param)=>{
    let result = await Model.find(Param)
     if(result.length){
         return result[0]
     }
     else{
        return false
     }
}

module.exports.SearchById = async (Model,id,Params=null)=>{
   let result = await Model.findById(id,Params)
   if(result){
    return result
   }
   else{
    return false
   }
}