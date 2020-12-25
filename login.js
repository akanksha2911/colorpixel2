process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akankshaguptafzd2002@gmail.com',
    pass: 'Akanksha@123'
  }
});

var mailOptions = {
  from: 'akankshaguptafzd2002@gmail.com',
  to: '10as1913054@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});