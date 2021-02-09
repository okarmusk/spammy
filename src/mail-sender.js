const nodemailer = require('nodemailer');
const { logger } = require('./logger');

const send = async (config, message) => {
  const { senderConfig, receiverConfig } = config;
  const transporter = nodemailer.createTransport(senderConfig);
  const options = {
    from: senderConfig.auth.user,
    to: receiverConfig.mail,
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
};
