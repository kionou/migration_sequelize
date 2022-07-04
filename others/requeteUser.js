const data = require('../database/connecterData');
const bcrypt = require("bcrypt");
const { Sequelize } = require('../models');
const User = require('../models/users');
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
        console.log('innnto',into);
        // return   users.sync().then(()=>{
            let{nom,prenom,email,numero}=into;
            let password = bcrypt.hashSync(into.password, 10);
            return new Promise(async (next)=>{
               users.create({nom,prenom,email,numero,password})
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

}

module.exports= dataUser;