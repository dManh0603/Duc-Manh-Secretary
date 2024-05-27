require('./config.js')();
require('./telegram.bot.js')

const handlebars = require('express-handlebars')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

// Set the "public" folder as the static directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON-encoded bodies
app.use(express.json());

// Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  // helpers: require('./helpers/HbsHelper'),
}));
// Set HBS as the view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  req.admin = "manh";
  res.render('index', { layout: 'main', admin: req.admin });
})

app.listen(PORT, () => {
  console.log('Server is running');
});

module.exports = app;