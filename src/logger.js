const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const logFormat = printf(({ level, message, label, timestamp }) => {
  return `{ "timestamp": "${timestamp}", "level": "${level}", "message": "${message}" }`;
});

const logger = createLogger({
  format: combine(
    label(),
    timestamp(),
    logFormat
  ),
  transports: [new transports.Console()]
});

exports.logger = logger;
