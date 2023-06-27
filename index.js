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

app.use("/user/v1", require("./Routes/UserRouters"))

app.listen(Port,()=>{
    console.log("Listening at ",Port)
})