const nodemailer = require('nodemailer');
const { logger } = require('./logger');


const send = async (config, message) => {
  const transporter = nodemailer.createTransport(config);
  const options = {
    from: config.auth.user,
    to: "rsud@padangpariamankab.go.id",
    subject: message.subject,
    text: message.body,
  };

  try {
    const info = await transporter.sendMail(options);
    logger.info(`Message sent: ${info.messageId}`);
  } catch (error) {
    logger.error(error.message);
  }
}

exports.mailSender = {
  send
}
