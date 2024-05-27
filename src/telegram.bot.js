const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron')

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// List of commands
const commands = {
  '/echo': (msg, match) => {
    const chatId = msg.chat.id;
    const res = match[1]; // the captured "whatever"
    bot.sendMessage(chatId, res);
  },
  '/notify': (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Notification message');
  },
  // Add more commands here...
};

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const res = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, res);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log("get message from:" + chatId)
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
  console.log("sent message to:" + chatId)
  sendWeatherReport();
});

// Function to send message via Telegram bot
function sendWeatherReport() {
  // Your logic to send a message via Telegram bot
  bot.sendMessage(5377401924, 'Weather notification');
  console.log('Message sent at 6 am.');
}

// Schedule the task to send message at 6 am every day
cron.schedule('0 20 * * *', () => {
  sendWeatherReport();
});

module.exports = bot;