const senderConfig = {
  service: 'gmail',
  auth: {
    user: process.env.SENDER_MAIL_LOGIN,
    pass: process.env.SENDER_MAIL_PASSWORD
  }
};

exports.senderConfig = senderConfig;
