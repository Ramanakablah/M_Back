const express = require("express")
const router = express.Router()
const { UserModel } = require("../Schemas/Models")
const  ResponseHandle  = require("../Helpers/Response/ResponseHandler")
const { InstertInDb } = require("../Helpers/DBHelpers/Insertion")
const { Hasher, Comparer } = require("../Helpers/ApplicationHelpers/Bcrypt")
const { Validate } = require("../Helpers/ApplicationHelpers/Validators/Validation")
const { SearchBy,SearchOneBy } = require("../Helpers/DBHelpers/Search")
const { Signit } = require("../Helpers/ApplicationHelpers/JWT")
const { Fetchuser } = require("../MiddleWares/Fetchuser/Fetchuser")


router.post("/signup", Validate, async (req, res) => {
    const User = req.body
    const Checkit = await SearchBy(UserModel, { Email: User.Email })
    if (Checkit) {
        ResponseHandle.Failed(res,"User alreasy exist")
        return
    }
    else {
        User.Password = await Hasher(User.Password)
        if (InstertInDb(UserModel, User)) {
            ResponseHandle.Successfull(res, "User Created Successfully")
        }
        else {
            ResponseHandle.InternalServer(res,"Internal Server Error")
        }
    }
})

router.post("/login", Validate, async (req, res) => {
    const User_data = req.body
    const ExistUser = await SearchOneBy(UserModel, { Email: User_data.Email })
    console.log(ExistUser)
    if (ExistUser) {
        await Comparer(User_data.Password, ExistUser.Password, res)
        await Signit({ id: ExistUser._id }, res)
    }
    else {
        ResponseHandle.Failed(res,"Wrong Credentials Try Again")
    }
})

router.get("/auth", Fetchuser, async (req, res) => {
    console.log("Your Data is", req.user)
    const c = new Date(req.user.iat)
    console.log(c.getDate()+"-"+c.getMonth(2)+"-"+c.getFullYear())
    res.send("Token sent")
})

module.exports = router 