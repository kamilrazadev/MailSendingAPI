import nodemailer from "nodemailer";
import { config } from "dotenv";
config();

export const handleSendMail = (req, res) => {
  // Send Email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: { name: "Game Changer", address: process.env.EMAIL },
    to: "example@gmail.com", //enter reciever email here
    subject: "Your mail subject",
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Verification</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
            }
            .container h2, .container p {
              text-align: center;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>This is a dummy mail</h2>
            <p>Thank you!</p>
        </div>
    </body>
    </html>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error.message);
      return res.status(200).json({
        status: false,
        message: "otpError",
        details: "Error in sending OTP. Please try again or check you email!",
      });
    } else {
      return res.status(200).json({
        status: true,
        message: "success",
        details: "An OTP sent to your email!",
      });
    }
  });
};
