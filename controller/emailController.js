const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (data, req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: data.to,
    subject: data.subject,
    text: data.text,
    html: data.htm,
  });
};

module.exports = { sendEmail };