'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class livres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  livres.init({
    nom: DataTypes.STRING,
    dateApparution: DataTypes.STRING,
    categories_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'livres',
  });
  return livres;
};