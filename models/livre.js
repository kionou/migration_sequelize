'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class livre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      livre.belongsTo(models.categorie,{
        foreignKey:'categorieid'
      })
    }
  }
  livre.init({
    nom: DataTypes.STRING,
    dateCreer: DataTypes.STRING,
    categorieid:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'livre',
  });
  return livre;
};