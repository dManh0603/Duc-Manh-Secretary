const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

const TELEGRAM_BOT = require('./telegram.bot')

// Set the "public" folder as the static directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON-encoded bodies
app.use(express.json());

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.json("Duc Manh's Secretary is waiting for you on Telegram").end();
})

app.listen(PORT, () => {
  console.log('Server is running');
})

module.exports = app;