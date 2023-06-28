const express = require("express")
const { Fetchuser } = require("../MiddleWares/Fetchuser/Fetchuser")
const router = express.Router()
const { MarathonModel, ZenModel } = require("../Schemas/Models")
const { SearchById, SearchBy } = require("../Helpers/DBHelpers/Search")
const ResponseHandle = require("../Helpers/Response/ResponseHandler")
const { UpdateArray } = require("../Helpers/DBHelpers/Update")
const { InstertInDb } = require("../Helpers/DBHelpers/Insertion")
const { DateValidator } = require("../Helpers/ApplicationHelpers/Validators/UserDataValidators")

router.get("/time", Fetchuser, async (req, res) => {
    const id = req.user.id
    const Time_Slot = await SearchBy(MarathonModel, { U_id: id },{_id:0})
    console.log(Time_Slot)
    res.send(Time_Slot)
})

router.post("/generate-slot", Fetchuser, async (req, res) => {
    const id = req.user.id;
    console.log(req.body)
    const Slot_Avail = await SearchBy(MarathonModel, { U_id: id, Date: req.body.Date},{_id:0})
    console.log(Slot_Avail)
    if (Slot_Avail) {
        try {
            let Report = await UpdateArray(MarathonModel, { U_id: id, Date: req.body.Date }, { $push: { "TimeArray": req.body.TimeArray } })
            console.log(Report)
            ResponseHandle.Successfull(res, "Successfully Added")
        } catch (error) {
            ResponseHandle.Failed(res, error)
        }
    }
    else {

        try {
            let NewSlot = await InstertInDb(MarathonModel, { U_id: id, ...req.body })
            console.log(NewSlot)
            ResponseHandle.Successfull(res, "Successfully Created")
        } catch (error) {
            ResponseHandle.Failed(res, error)
        }
    }
})

router.post("/zen-time", Fetchuser, async (req, res) => {
    const id = req.user.id;
    req.body.Date = await DateValidator(req.body?.Date)
    const Slot_Avail = await SearchBy(ZenModel, { U_id: id, Date: req.body.Date },{_id:0})
    console.log(req.body)
    try {
        if (!Slot_Avail) {
            const Report = await InstertInDb(ZenModel, { U_id: id, ...req.body })
            console.log(Report)
            ResponseHandle.Successfull(res, "Slot Created Successgully")
        }
        else {
            const Report = await UpdateArray(ZenModel, { U_id: id, Date: req.body.Date }, { $push: { "Learning": req.body.Learning[0] } })
            console.log(Report)
            ResponseHandle.Successfull(res, "Successfully Added")
        }
    } catch (error) {
        ResponseHandle.InternalServer(res, error)
    }
})

router.get("/zenlist",Fetchuser,async(req,res)=>{
    const id = req.user.id
    try {
        const Report = await SearchBy(ZenModel,{U_id:id},{_id:0})
        if(Report){
            ResponseHandle.Successfull(res,"Your Learnings of the day",Report)
        }
        else{
            ResponseHandle.Successfull(res,"Your Learning of the day",[])
        }
    } catch (error) {
        ResponseHandle.InternalServer(res,error)
    }
        
})

module.exports = router