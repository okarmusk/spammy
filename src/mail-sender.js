const nodemailer = require('nodemailer');


const send = async (config, message) => {
  const transporter = nodemailer.createTransport(config);
  const options = {
    from: config.auth.user,
    to: "rsud@padangpariamankab.go.id",
    subject: message.subject,
    text: message.body,
  };

  let info = await transporter.sendMail(options);
  console.log("Message sent: %s", info.messageId);
}

exports.mailSender = {
  send
}
