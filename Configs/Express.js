module.exports.Port = process.env.PORT || 8000

module.exports.JWT_SIGN = process.env.SIGN_KEY

module.exports.Mails_options={
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    service:process.env.MAIL_SERVICE,
    secure:true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
}    

module.exports.TwilioPack={
    Auth:process.env.AUTH_TOKEN,
    Sid:process.env.ACCOUNT_SID,
    VeifyId:process.env.VERIFY_SID
}