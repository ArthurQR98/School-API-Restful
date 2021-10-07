'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.belongsToMany(models.Section, {
        through: "Registration",
        as: "sections",
        foreignKey: "studentId"
      });
    };
  };
  Student.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      }
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};