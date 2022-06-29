'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    nom: {
      type:DataTypes.STRING, 
      allowNull:false,
      validate: {
        len: {
               args:[2, 10],
               msg:'votre nom doit comporter au moins 2 lettre',
        },
          notEmpty: {msg:'Ce champs ne doit pas etre vide'},
  
        
        }, },
        prenom:{
          type:DataTypes.STRING,
          allowNull:false,
          validate: {
              checkLength(value) {
                if (value.length < 3) {
                  throw new Error("Length must be 3 or greater!");
                }
              },
            
              notEmpty: {msg:'Ce champs ne doit pas etre vide'},
            },
      },
      email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique: {
            args:true,
            msg:'email existe deja'
        },
        validate: {
            isEmail: {
              msg: "veillez entrer un mail correct",
            },
            
          },
    },
    numero:{
      type:DataTypes.STRING,
     allowNull:false,
     unique:true,
     validate: {
       len: {
              args:[14, 20],
              msg:'votre numero doit comporter au moins 10 chiffres',
       },
   
      notEmpty: {msg:'Ce champs ne doit pas etre vide'}  
       },    
  },
  password:{
  type:DataTypes.STRING,
   allowNull:false,
   validate: {
     len: {
            args:[6, 20],
            msg:'votre nom doit comporter au moins 6 lettre',
     }
     
     },
  
  }, 
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};