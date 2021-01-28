const nodemailer = require('nodemailer');

const { gmailConfig } = require('./config/mail-config');
const { messageBuilder } = require('./message-builder');
const { mailSender } = require('./mail-sender');


const main = async () => {
  try {
    const message = await messageBuilder.fromFile('./resources/message-data.json');
    mailSender.send(gmailConfig, message);
  } catch(error) {
    console.log(error);
  }
};

main();
