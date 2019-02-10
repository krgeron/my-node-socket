const express = require('express');
const exphb = require('express-handlebars');
const path = require('path');
const app = express();
const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');

app.engine('handlebars', exphb({ defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'handlebars');

app.use('/', homeRoute);
app.use('/about', aboutRoute);

module.exports = app;