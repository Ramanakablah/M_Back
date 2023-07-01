
module.exports.SearchBy= async (Model,Param,select)=>{
    let result = await Model.find(Param).select(select)
    console.log(result)
     if(result.length){
         return result
     }
     else{
        return false
     }
}

module.exports.SearchOneBy= async (Model,Param,select)=>{
    let result = await Model.find(Param).select(select)
    console.log(result)
     if(result.length){
         return result[0]
     }
     else{
        return false
     }
}

module.exports.SearchById = async (Model,id,select)=>{
   let result = await Model.findById(id).select(select)
   if(result){
    return result
   }
   else{
    return false
   }
}