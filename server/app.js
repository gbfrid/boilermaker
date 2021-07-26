const express = require('express');
const morgan = require('morgan');
// const bodyParser = require('body-parser');

const app = express();
const path = require('path');
const secret = process.env.JWT;

module.exports = app;

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, '..', 'public')));


app.use('/api', require('./api'));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '..', 'public/index.html')));


app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.')
});




