const express = require("express")
const { Fetchuser } = require("../MiddleWares/Fetchuser/Fetchuser")
const router = express.Router()
const {Marthon_Time_Schema} = require("../Schemas/Models")
const { SearchById } = require("../Helpers/DBHelpers/Search")
const { ResponseHandle } = require("../Helpers/Response/ResponseHandler")

router.post("/time",Fetchuser,async(req,res)=>{
    const id = req.user.id
    const Time_Slot=await SearchById(Marthon_Time_Schema,id)
    console.log(Time_Slot)
    // ResponseHandle
})

module.exports = router