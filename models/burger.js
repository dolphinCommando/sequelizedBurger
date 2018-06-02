const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');

module.exports = sequelize.define("burgers", {
    burger_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    devoured: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  });

