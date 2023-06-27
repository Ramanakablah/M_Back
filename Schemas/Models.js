const mongoose = require("mongoose")
const schema = mongoose.Schema
const {User_Schema,Zen_Schema,Marthon_Time_Schema} = require("./Schemas")

const UserSchema = new schema(User_Schema)

const UserModel = mongoose.model("Users",UserSchema)
const MarathonSchema = mongoose.model("Marathons",Marthon_Time_Schema)
const ZenSchema = mongoose.model("ZenLs",Zen_Schema)

module.exports ={UserModel,MarathonSchema,ZenSchema}
