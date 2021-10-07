'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.associate = function (models) {
        Teacher.hasMany(models.Sections, {
          foreignKey: 'courseId',
          as: 'sections'
        });
      };
    }
  };
  Course.init({
    name: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};