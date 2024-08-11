const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Store OTPs in memory (for simplicity, use a database in production)
const otps = new Map();

// Email setup
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'nahidkhan9144@gmail.com',
    pass: 'N@hid914'
  }
});

// Endpoint to send OTP
app.post('/send-otp', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send({ message: 'Email is required' });
  }

  const otp = crypto.randomInt(100000, 999999).toString();
  otps.set(email, otp);

  const mailOptions = {
    from: req.emailAddress,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ message: 'Error sending OTP', error });
    }
    res.status(200).send({ message: 'OTP sent successfully' });
  });
});

// Endpoint to verify OTP
app.post('/verify-otp', (req, res) => {
  const { email, otp } = req.body;

  if (otps.get(email) === otp) {
    otps.delete(email);
    return res.status(200).send({ message: 'OTP verified successfully' });
  }

  res.status(400).send({ message: 'Invalid OTP' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
