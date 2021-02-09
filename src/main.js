const nodemailer = require('nodemailer');

const { senderConfig } = require('./config/sender-config');
const { receiverConfig } = require('./config/receiver-config');
const { messageBuilder } = require('./message-builder');
const { mailSender } = require('./mail-sender');
const { logger } = require('./logger');

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
const delay = 60 * 1000;
const config = { senderConfig, receiverConfig };

const main = async () => {
  try {
    const message = await messageBuilder.fromFile('./resources/message-data.json');

    while (true) {
      mailSender.send(config, message);
      await sleep(delay);
    }
  } catch (error) {
    logger.error(error.message);
  }
};

main();
