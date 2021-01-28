const gmailConfig = {
  service: 'gmail',
  auth: {
    user: process.env.MAIL_LOGIN,
    pass: process.env.MAIL_PASSWORD
  }
};

exports.gmailConfig = gmailConfig;
