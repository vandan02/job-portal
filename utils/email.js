const nodemailer=require('nodemailer');

require('dotenv').config();

const transport=nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }

});

const sendgmail=async(to,subject,body)=>{
    const mailOptions={
        from: process.env.EMAIL,
        to:to,
        subject: subject,
        text:body
    };
    try {
        let mail=await transport.sendMail(mailOptions);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports=sendgmail;