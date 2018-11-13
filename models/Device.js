/**
 * Create Device Table Model w/specified entry fields
 */
'use strict';
module.exports = (sequelize, Sequalize) => {
    const Device = sequelize.define('Device', {
        Name: Sequalize.STRING,
        Model: Sequalize.STRING,
      }, {});
  return Device;
};
