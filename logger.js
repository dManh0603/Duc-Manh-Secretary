const winston = require('winston');

// Set up Winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(info => `${info.timestamp} - ${info.level}: ${info.message}`)
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: './combined.log' }) // Change the filename as needed
  ]
});

module.exports = logger;
