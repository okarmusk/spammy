const nodemailer = require('nodemailer');

const { gmailConfig } = require('./config/mail-config');
const { messageBuilder } = require('./message-builder');
const { mailSender } = require('./mail-sender');
const { logger } = require('./logger');

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
const delay = 60 * 1000;

const main = async () => {
  try {
    const message = await messageBuilder.fromFile('./resources/message-data.json');

    while (true) {
      mailSender.send(gmailConfig, message);
      await sleep(delay);
    }
  } catch (error) {
    logger.error(error.message);
  }
};

main();
