// 1 Go to nodemailer.com
// 2. npm i nodemailer
// 3. find the email sending code
// 4. SMTP milaunu paryo with google (app password for gmail)
// 5. username and password
//6. run the code


const nodemailer = require("nodemailer");

// create a transporter
const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "bnagari154@gmail.com",
    pass: "znbxvspfbrhbwpeb",
  },
});

const sendMail = async ({ from, to, subject, html }) => {
  // setup message
  const message = {
    from, // sender address
    to, // list of receivers
    subject, // Subject line
    text: "Hello world?", // plain text body
    html, // html body
  };

  // send email using sendmail function
  const result = await transport.sendMail(message);
  return result.messageId;
};

module.exports = { sendMail };

// attachment
// env variable (dotenv package)
