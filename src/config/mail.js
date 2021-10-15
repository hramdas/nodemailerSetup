const nodemailer = require('nodemailer')
require('dotenv').config()

module.exports = nodemailer.createTransport({
    host: process.env.CURRENT_ENVIRONMENT == "development" ? "smtp.mailtrap.io" : "",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.SMTP_USERNAME,  //from .env
      pass: process.env.SMTP_PASSWORD
    },
  });