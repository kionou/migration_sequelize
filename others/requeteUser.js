const data = require('../database/connecterData');
const { Sequelize } = require('../models');
const User = require('../models/users');
const users = User(data,Sequelize);



const dataUser = class{
    static InsertionUser=  (into)=>{
        console.log('innnto',into);
        // return   users.sync({force:true}).then(()=>{
            let{nom,prenom,email,numero}=into;
            return new Promise(async (next)=>{
               users.create({nom,prenom,email,numero})
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