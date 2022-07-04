const { request,response } = require("express");
const dataUser = require("../others/requeteUser");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

const Usercontrolleur = class {

    static ConnectionGet = (req=request,res=response)=>{
        res.render('index')
    }


    static ConnectionPost = async (req=request,res=response)=>{

        const result = validationResult(req)
        if (!result.isEmpty() ) {
        const error = result.mapped()
        console.log('rrfrrkrk',error ); 
        res.render('index',{alert:error})
       }else{
        let verifierUser = await dataUser.VerifierUserUnique(req.body.email)
        if (verifierUser.success == "") {
          res.render('index',{alerte:'Email ou le mot de passe incorrect !'})
        } else {
          let password = req.body.password;
          let hash=verifierUser.success[0].password;
          let dataUser = {
              id:verifierUser.success[0].id,
              nom:verifierUser.success[0].nom
          }
             let passwordUser = bcrypt.compareSync(password,hash);
             if (passwordUser) {
              req.session.user = dataUser;
              console.log('ma session est :',req.session);
                res.json(req.session)
             } else {
              res.render('index',{alerte:'Mot de passe incorrect'})
             }
        }
       }
    }

    static InscriptionGet = (req=request,res=response)=>{
        res.render('inscription')
    }

     static InscriptionPost = async (req=request,res=response)=>{

        const result = validationResult(req)
        if (!result.isEmpty() ) {
        const error = result.mapped()
        console.log('rrfrrkrk',error ); 
        res.render('inscription',{alert:error})
       }else{
         let UserUnique =  await  dataUser.VerifierUserUnique(req.body.email)
         if (UserUnique.success == "") {
           let InserUser = await dataUser.InsertionUser(req.body)
           if (InserUser.success) {
                res.redirect('/')
           } else {
                console.log('InserUser',InserUser.erreur);
           }
         } else {
            res.render('inscription',{alerte:'Email existe déjà '})
         }
       }
    }

    static AccueilGet =  async (req=request,res=response) =>{
        let Userd =  await  dataUser.InsertionUser(req.body);
        console.log('usderd');
        if (Userd.erreur) {
            //   const erreur = Userd.erreur.errors.reduce((accumulator, value) => {
            //     return {...accumulator, [value.path]: value.message};
            //   }, {});
              console.log('oblj',Userd.erreur);
           
            //  res.json({"erreur de validation":erreur})
             res.json({"erreur de validation":Userd.erreur})


        } else {
            res.json(Userd.success.toJSON())

        }
    }
}


module.exports=Usercontrolleur;