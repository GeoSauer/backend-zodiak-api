const express = require('express');

const app = express();

app.use('/', require('./controllers/zodiacs.js'));

module.exports = app;
