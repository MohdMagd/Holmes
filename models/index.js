const dbConfig = require('./../configurations/db')
const Sequelize = require('sequelize');

// create sequelize object which connects to database
const sequelize = new Sequelize(
  dbConfig.name, dbConfig.user, dbConfig.password, {dialect: dbConfig.dialect}
  );

// import all models into the 'const' models
const models = {
    device: sequelize.import('./device')
};

// Loop through all models in models
// Check if model has an associate method, if so associates models together
Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
}); 

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;