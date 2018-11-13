/**
 * Create Tables retrieved from all Models and add them to database
 */
const dbConfig = require('./../configurations/db')
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  dbConfig.name, dbConfig.user, dbConfig.password, {dialect: dbConfig.dialect}
  );

const models = {
    Devices: sequelize.import('./Device')
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;