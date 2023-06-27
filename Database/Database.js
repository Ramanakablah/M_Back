const mongoose = require("mongoose")
const { Connection } = require("../Configs/Database")
Connection

 function Connector (){
    mongoose.connect(Connection).then(()=>{
        console.log("Connection established")
    })
}

module.exports.Connector = Connector