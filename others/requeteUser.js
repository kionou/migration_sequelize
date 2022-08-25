const data = require('../database/connecterData');
const bcrypt = require("bcrypt");
const { Sequelize } = require('../models');
const User = require('../models/users');
const { id } = require('../middleware/IdUnique');
const users = User(data,Sequelize);





const dataUser = class{

    static VerifierUserUnique = (into)=>{
        return new Promise(async (next)=>{
            users.findAll({where:{
                email:into
            }}).then(resultat => {
                console.log('resultat',resultat);
                next({success:resultat})
            }).catch(error  =>{
                console.log('error',error);
                  next({erreur:error})
            }) 
        })
    }


    static InsertionUser=  (into)=>{
        console.log('hyiiy',id());
        console.log('innnto',into);
        let numero_carte = id()
        return   users.sync().then(()=>{
            let{nom,prenom,email,numero,profession,image,date_adheration}=into;
            let password = bcrypt.hashSync(into.password, 10);
            return new Promise(async (next)=>{
               users.create({nom,prenom,email,numero,password,profession,image,date_adheration,numero_carte})
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
        }).catch(err=>{
            console.log('rrroorr',err);
        })
      
    }

     static AfficherUserDetail = (into)=>{
        return new Promise(async (next)=>{
            users.findAll({where:{
                id:into
            }})
            .then(resultat => {
                console.log('resultat',resultat);
                next({success:resultat})
            }).catch(error  =>{
                console.log('error',error);
                  next({erreur:error})
            }) 
        })
    }

    static UpdateUser=  (into,images)=>{
        let{id,nom,prenom,email,numero,profession,image}=into;
        if (images === undefined) {
            console.log('oh');
            return new Promise(async (next)=>{
                users.update({nom,prenom,email,numero,profession,image},
                    {where :{id}})
                .then(resultat => {
                    console.log('resultat',resultat);
                    next({success:resultat})
                }).catch(error  =>{
                    console.log('errorsansimage',error);
                    next({erreur:error})
                })
            })
        } else {
            console.log('eee');
            let image = images.path
            return new Promise(async (next)=>{
                users.update({nom,prenom,email,numero,profession,image},
                    {where :{id}})
                .then(resultat => {
                    console.log('resultat',resultat);
                    next({success:resultat})
                }).catch(error  =>{
                    console.log('errorimage',error);
                    next({erreur:error})
                })
            })
        }
      
    }

}

module.exports= dataUser;