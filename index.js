const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const path = require('path')
const chalk = require('chalk')
const ip = require("ip")
const bodyParser = require('body-parser')
const app = express()

const TELEGRAM_BOT = require('./telegram.bot')

// Set the "public" folder as the static directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON-encoded bodies
app.use(express.json());

const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.json("hello world");
})

app.get('/hello world', (req, res) => {
  res.json("hello world you too");
})

app.listen(PORT, () => {
  console.log('Server is running');
  console.log('On local: ' + chalk.blue(`127.0.0.1:${PORT}`))
  console.log('On your network: ' + chalk.blue(`${ip.address()}:${PORT}`))
})

module.exports = app;