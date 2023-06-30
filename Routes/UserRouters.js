const {TwilioPack} = require("../Configs/Express")
const verifySid = TwilioPack.VeifyId;
const client = require("twilio")(TwilioPack.Sid, TwilioPack.Auth);
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
const { SendMail } = require("../Helpers/MailBird/Nodemailer")


router.post("/signup", Validate, async (req, res) => {
    const User = req.body
    console.log(User)
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

router.post("/auth", async (req, res) => {
try {
    // await SendMail("someone@gmail.com","alexesramon0909@gmail.com","Hello","Hey there how are you ?")
// +919027394386
const mobile = req.body.Mobile
client.verify.v2
  .services(verifySid)
  .verifications.create({ to: `+91${mobile}`, channel: "sms" })
  .then((verification) => console.log(verification.status))
} catch (error) {
    console.log(error)
}

    // console.log(c.getDate()+"-"+c.getMonth(2)+"-"+c.getFullYear())
    res.json({"mssg":"Token sent"})
})

router.post("/verify",(req,res)=>{
    const User=req.body
    client.verify.v2
    .services(verifySid)
    .verificationChecks.create({ to: `+91${User.Mobile}`, code: User.otp })
    .then((verification_check) => res.json({status:verification_check.status}))
})

module.exports = router 