const MailBird = require("nodemailer")
const { Mails_options } = require("../../Configs/Express")


const Transporter = MailBird.createTransport(Mails_options)

module.exports.SendMail = async(from,to,subject,mssg,html=null)=>{
    
    const info = await Transporter.sendMail({
        from: `"Fred Foo 👻" <${from}>`,
        to: to, 
        subject: subject, 
        text: mssg, 
        html: html, 
      });
   
      console.log("Message Sent",info)  
}