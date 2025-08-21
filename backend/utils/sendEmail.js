// dedicated tool for sending emails
const nodeemailer = require("nodeemailer");
const transporter = nodeemailer.createTransport({
   service: "gmail",
   auth: {
    user: process.env.EMAIL_NAME,
    pass: process.env.EMAIL_PASS,
   } ,
});

const sendOTP = async (to, otp) => {
    await transporter.sendMail({
        from: process.env.EMAIL_NAME,
        to,
        subject: "Your Verification Code",
        html: '<p> Your verification code is <b>${otp}</b></p>',
    });
};