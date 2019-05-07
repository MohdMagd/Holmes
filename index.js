const appConfig = require('./configurations/app');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
// get information from request bodies
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));
app.use(bodyParser.text());

// device routes
app.use('/device', require('./routes/device'));

// Connect to database
const models = require('./models/index');
models.sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');

    // sync() will create all tables if they don't exist in the database
    models.sequelize.sync({logging: console.log}).then(() => {
      console.log("Table(s) added successfully.")

      // Start server on config port
      app.listen(appConfig.port,() => {
        console.log('server started on port: ' + appConfig.port);
      })
    })
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });
