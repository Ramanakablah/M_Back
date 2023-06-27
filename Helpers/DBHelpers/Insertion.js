module.exports.InstertInDb=async (Model,Data)=>{
    try {
        await  Model.create(Data)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}