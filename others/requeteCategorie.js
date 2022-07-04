const data = require('../database/connecterData');
const { Sequelize } = require('../models');
const cat = require('../models/categories');
const categorie = cat(data,Sequelize);

const dataCategorie = class{
      static InsertionUser=  (into)=>{
        console.log('innnto',into);
        // return   users.sync().then(()=>{
           let nom = into.nom
            return new Promise(async (next)=>{
               categorie.create({nom})
                .then(resultat=>{
                console.log('ss',resultat);
                next({
                success:resultat
                })
            }).catch(err=>{
                console.log("eee",err);
                next ({
                    erreur:err
                })
            })
        })
        // }).catch(err=>{
        //     console.log('rrroorr',err);
        // })
      
    }


     static AfficheCategorie = ()=>{
        return new Promise(async (next)=>{
            categorie.findAll().then(resultat => {
                console.log('resultat',resultat);
                next({success:resultat})
            }).catch(error  =>{
                console.log('error',error);
                  next({erreur:error})
            }) 
        })
    }
}


module.exports = dataCategorie 