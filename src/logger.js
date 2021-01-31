const winston = require('winston');

const configuration = {
  transports: [
    new winston.transports.Console()
  ]
};

const logger = winston.createLogger(configuration);

exports.logger = logger;
