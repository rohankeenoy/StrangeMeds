const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 5000;
require('dotenv').config();


app.use(express.json());


app.use(cors());

// Create a transport for sending emails
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST route to handle form submissions
app.post('/send-inquiry', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.RECIPIENT_EMAIL,
    to: process.env.RECIPIENT_EMAIL,
    subject: 'Inquiry Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Email sent successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
