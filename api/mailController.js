import nodemailer from "nodemailer";
import { config } from "dotenv";
config();

export const handleSendMail = (req, res) => {
  const {
    gameTitle,
    about,
    isGameLive,
    isGameTested,
    noOfTeams,
    gameExperience,
    gameExperties,
    newsletterSubscription,
    email,
    phone,
    address,
    url,
    comment,
  } = req.body;

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
    to: "reciever-email", //enter reciever email here
    subject: "Game Changer Record",
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
<p>${gameTitle}</p>
</div>

<div class="field">
<h4>About:</h4>
<p>${about}</p>
</div>

<div class="field">
<h4>Game live on play store:</h4>
<p>${isGameLive}</p>
</div>

<div class="field">
<h4>Game is tested:</h4>
<p>${isGameTested}</p>
</div>

<div class="field">
<h4>No of Teams:</h4>
<p>${noOfTeams}</p>
</div>

<div class="field">
<h4>Game Experience:</h4>
<p>${gameExperience} years</p>
</div>

<div class="field">
<h4>Game Experties:</h4>
<p>${gameExperties}</p>
</div>

<div class="field">
<h4>Newsletter Subscription:</h4>
<p>${newsletterSubscription}</p>
</div>

<div class="field">
<h4>Email:</h4>
<p>${email}</p>
</div>

<div class="field">
<h4>Phone:</h4>
<p>${phone}</p>
</div>

<div class="field">
<h4>Address:</h4>
<p>${address}</p>
</div>

<div class="field">
<h4>URL:</h4>
<p>${url}</p>
</div>

<div class="field">
<h4>Comment:</h4>
<p>${comment}</p>
</div>

</div>

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
