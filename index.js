const express = require('express');
const app = express();
const appConfig = require('./configurations/app');

// Load Models in model
const models = require('./Models');

// Connect to database
models.sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    models.sequelize.sync({logging: console.log}).then(() => {
      console.log("Table(s) added successfully.")
    })
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Start server on config port
app.listen(appConfig.port,() => {
  console.log('server started on port: ' + appConfig.port);
})

// Instatitate api endpoints
require('./routes/api')(app);
