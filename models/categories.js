'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.categories.hasMany(models.livres,{
         foreignKey:'cathegories_id'
      })
    }
  }
  categories.init({
    nom: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categories',
  });
  return categories;
};