const express = require('express');
const bodyParser = require('body-parser');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/notify', notificationRoutes);

module.exports = app;
