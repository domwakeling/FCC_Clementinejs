'use strict';

var express = require('express'),
    routes = require('./app/routes/index.js'),
    mongoose = require('mongoose');

var app = express();

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

app.use('/public', express.static(process.cwd() + '/public'));
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

routes(app);

app.listen(process.env.PORT, function () {
    console.log('Listening on port ' + process.env.PORT + ' ...');
});