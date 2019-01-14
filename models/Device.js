/**
 * Create Device Table Model w/specified entry fields
 */

module.exports = (sequelize, Sequalize) => {
    const device = sequelize.define('device', {
        make: {type: Sequalize.STRING},
        modelName: {type: Sequalize.STRING},
      }, {});
  return device;
};
