'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Section.belongsTo(models.Teacher);
      Section.belongsTo(models.Course);
      Section.belongsTo(models.Subject);
      Section.belongsToMany(models.Student, {
        through: "Registration",
        as: "students",
        foreignKey: "sectionId"
      });
    };
  };
  Section.init({
    teacherId: DataTypes.INTEGER,
    subjectId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Section',
  });
  return Section;
};