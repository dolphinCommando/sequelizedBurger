module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define("burgers", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  });
  return burgers;
};
