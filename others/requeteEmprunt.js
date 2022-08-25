const data = require('../database/connecterData');
const { Sequelize } = require('../models');
const emprunts = require('../models/empruntes');
const emprunt = emprunts(data,Sequelize);

const dataEmprunt = class{

      static InsertionEmprunt=  (into)=>{
        console.log('innnto',into);
        // return   emprunt.sync().then(()=>{
           let {date_emprunt,date_retour,id_user,id_livre,statuts}=into
            return new Promise(async (next)=>{
               emprunt.create({date_emprunt,date_retour,id_user,id_livre,statuts})
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
    static AfficherEmprunteUser = (into)=>{
        return new Promise(async (next)=>{
            emprunt.findAll({where:{id_user:into}})
            .then(resultat => {
                console.log('resultat',resultat);
                next({success:resultat})
            }).catch(error  =>{
                console.log('error',error);
                  next({erreur:error})
            }) 
        })
    }

}



module.exports=dataEmprunt;