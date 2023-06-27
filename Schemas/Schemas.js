const { default: mongoose } = require("mongoose")

const TimeTraySchema = new mongoose.Schema({
    StartTime: {
        type: Date,
        require: true
    },
    EndTime: {
        type: Date,
        require: true
    }
})

const ZenLearning = new mongoose.Schema({
    Time: {
        type: Date,
        require: true
    },
    Lesson:{
        type:String,
        require:true
    }
})

module.exports.User_Schema = {
    Username: {
        type: String,
        require: true
    },
    Mobile: {
        type: Number,
        require: true,
        unique: true
    },
    Email: {
        type: String,
        require: true,
        unique: true,
    },
    Password: {
        type: String,
        require: true
    }
}

module.exports.Marthon_Time_Schema = {
    U_id: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    Date: {
        type: String,
        require: true
    },
    TimeArray: {
        type: [TimeTraySchema],
        require: true
    }
}

module.exports.Zen_Schema = {
    U_id: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    Date: {
        type: Date,
        require: true
    },
    Learning: {
        type: [ZenLearning],
    }
}