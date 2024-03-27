import nodemailer from "nodemailer";
import { config } from "dotenv";
config();

export const handleSendMail = (req, res) => {
  const data = {
    gameTitle: "My Game",
    about: "This is my game",
    isGameLiveOnStore: "Yes",
    isGameTested: "No",
    noOfTeams: 5,
    gameExperience: 2,
    gameExperties: "Yes",
    email: "example@gmail.com",
    phone: "0312-3456789",
    address: "Karachi, Pakistan",
    url: "not provided",
    comments: "this is a comment",
  };

  // Send Email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: { name: "SOL", address: process.env.EMAIL },
    to: "ammarali02062003@gmail.com",
    subject: "SOL Account OTP",
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

            .container {
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                width: 90%;
            }

            h2 {
                color: #005DFF;

            }
h4 {
                color: #000000;
margin: 0px;
}

            p {
                color: #000000;
margin: 0px;
            }
.fields-container {
}
.field > p {
color: #7c7c7c;
margin-bottom: 14px
}

        </style>
    </head>
    <body>
        <div class="container">
            <h2>Game Changer Form:</h2>
<div class="fields-container">
<div class="field">
<h4>Game Title:</h4>
<p>asd</p>
</div>

<div class="field">
<h4>About:</h4>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
</div>

<div class="field">
<h4>Game live on play store:</h4>
<p>Yes</p>
</div>

<div class="field">
<h4>Game is tested:</h4>
<p>No</p>
</div>

<div class="field">
<h4>No of Teams:</h4>
<p>5</p>
</div>

<div class="field">
<h4>Game Experience:</h4>
<p>3 years</p>
</div>

<div class="field">
<h4>Game Experties:</h4>
<p>Yes</p>
</div>

<div class="field">
<h4>Email:</h4>
<p>example@gmail.com</p>
</div>

<div class="field">
<h4>Phone:</h4>
<p>0312-3456789</p>
</div>

<div class="field">
<h4>Address:</h4>
<p>Karachi, Pakistan</p>
</div>

<div class="field">
<h4>URL:</h4>
<p>not provided</p>
</div>

<div class="field">
<h4>Comment:</h4>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>

</div>

        </div>
    </body>
    </html>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
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
