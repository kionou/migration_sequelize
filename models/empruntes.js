'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class empruntes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  empruntes.init({
    date_emprunt: DataTypes.STRING,
    date_retour: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    id_livre: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'empruntes',
  });
  return empruntes;
};