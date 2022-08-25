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
      
  models.livres.belongsTo(models.categories,{
        foreignKey:'cathegories_id'
      })
    }
  }
  livres.init({
    nom: DataTypes.STRING,
    nom_auteur: DataTypes.STRING,
    date_apparution: DataTypes.STRING,
    code_livre: DataTypes.STRING,
    categorie_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'livres',
  });
  return livres;
};