const ResponseHandle = require("../../../Helpers/Response/ResponseHandler")

const doubleZero=(data)=>{
    const num = Number(data);
    if(num<10){
        return '0'+num
    }
    else{
        return data
    }
}

module.exports.TimeValidators=async(a)=>{
   const time = a.split(":")  
   if(time[0]>23 || time[0]<0 || time[1]>60 || time[1]<0 || time[2]>60 || time[2]<0){
    return false
   }
   return true
}

module.exports.DateValidator=async (a)=>{
     const x = a.split("-")
     let b=`${doubleZero(x[0])}-${doubleZero(x[1])}-${doubleZero(x[2])}`
     const date = new Date(x[2],x[1],x[0])
     let d = date.getDate(),m=date.getMonth(),y=date.getFullYear();
     const c_date = `${doubleZero(d)}-${doubleZero(m)}-${doubleZero(y)}`
    if(c_date===b){
        return c_date;
    }
    else{
        return c_date
    }
}