module.exports.UpdateArray=async (Model,param,updation)=>{
    let result = await Model.findOneAndUpdate(param,updation,{new:true})
    if(result){
        return result
    }
    else{
        return false
    }
}