const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const cors = require("cors")
const app = express()
const {Port} = require("./Configs/Express")
const { Connector } = require("./Database/Database")

Connector()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post("/beaconapi",(req,res)=>{
    console.log(req)
res.send("Hello world")
})
app.use("/v1/user", require("./Routes/UserRouters"))
app.use("/v1/time", require("./Routes/TimeRouters"))

app.listen(Port,()=>{
    console.log("Listening at ",Port)
})