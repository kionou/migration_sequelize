const data = require('../database/connecterData');
const { Sequelize } = require('../models');
const livres = require('../models/livres');
const stocks = require('../models/stocks');
const livre = livres(data,Sequelize);
const stock = stocks(data,Sequelize);


const dataLivre = class{
      static InsertionLivre=  (into,images)=>{
        console.log('innnto',into);
       let image= images.path
        // return   livre.sync().then(()=>{
           let {nom,nom_auteur, date_apparution,code_livre, categorie_id,description,quantite}=into
            return new Promise(async (next)=>{
               livre.create({nom,nom_auteur, date_apparution,code_livre, categorie_id,description,image})
                .then(resultat=>{
                // console.log('ss',resultat);
                let id_livre= resultat.id;
                    stock.create({quantite,id_livre})
            //           .then(resultat => {
            //      console.log('resultatcategorie',resultat);
            //     next({success:resultat})
            // }).catch(error  =>{
            //     console.log('error',error);
            //     next({erreur:error})
            // })

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


     static AfficheLivre = ()=>{
        return new Promise(async (next)=>{
            livre.findAll().then(resultat => {
                console.log('resultat',resultat);
                next({success:resultat})
            }).catch(error  =>{
                console.log('error',error);
                  next({erreur:error})
            }) 
        })
    }

      static AfficheLivreDetail = (into)=>{
        return new Promise(async (next)=>{
            livre.findAll({where:{id:into}}).then(resultat => {
                console.log('resultat',resultat);
                next({success:resultat})
            }).catch(error  =>{
                console.log('error',error);
                  next({erreur:error})
            }) 
        })
    }
    static AfficheDetailCategorie = (into)=>{
     
        return new Promise(async (next)=>{
            livre.findAll({ where:{ categorie_id:into},})
            .then(resultat => {
                // console.log('resultatcategorie',resultat);
                next({success:resultat})
            }).catch(error  =>{
                console.log('error',error);
                next({erreur:error})
            }) 
        })
    }

          static AfficheNombreLivre = (into)=>{
            return new Promise(async (next)=>{
              livre.count({ where:{ categorie_id:into},
                // attributes:[[Sequelize.fn('COUNT',0),'count']]
                    }).then(resultat => {
                         console.log('nbre',resultat);
                        next({success:resultat})
                    }).catch(error  =>{
                        console.log('error',error);
                        next({erreur:error})
                    }) 
           
        })
    }

         static SearchBook = (intos)=>{
        
        return new Promise(async (next)=>{
          
            const {Op}=require('sequelize');
            livre.findAll({
                where:{
                    [Op.or]:[
                        {nom:intos},
                        {nom_auteur:intos}
                    ]
                }
            }).then(resultat => {
                console.log('resultat',resultat);
                next({success:resultat})
            }).catch(error  =>{
                console.log('error',error);
                  next({erreur:error})
            }) 
        })
    }

    static UpdateCategorie = (into)=>{
        return new Promise(async (next)=>{
            let {nom,id}=into
            categorie.update({nom},{where :{id}}).then(resultat => {
                console.log('resultat',resultat);
                next({success:resultat})
            }).catch(error  =>{
                console.log('error',error);
                  next({erreur:error})
            }) 
        })
    }

      static AfficheLivreNombre = (into)=>{
        return new Promise(async (next)=>{
            stock.findAll({where:{id_livre:into}}).then(resultat => {
                console.log('resultat',resultat);
                next({success:resultat})
            }).catch(error  =>{
                console.log('error',error);
                  next({erreur:error})
            }) 
        })
    }
}


module.exports = dataLivre; 