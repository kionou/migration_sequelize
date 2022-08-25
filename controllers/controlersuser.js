const { request,response } = require("express");
const dataUser = require("../others/requeteUser");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const dataCategorie = require("../others/requeteCategorie");
const dataLivre = require("../others/requeteLivre");
const dataEmprunt = require("../others/requeteEmprunt");


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
              nom:verifierUser.success[0].nom,
              image:verifierUser.success[0].image
          }
             let passwordUser = bcrypt.compareSync(password,hash);
             if (passwordUser) {
              req.session.user = dataUser;
              console.log('ma session est :',req.session);
                res.redirect('/Accueil')
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
           }
         } else {
            res.render('inscription',{alerte:'Email existe déjà '})
         }
       }
  }

  static AccueilGet =  async (req=request,res=response) =>{
        let Userd =  await  dataUser.InsertionUser(req.body);
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

  static LivreGet = async (req=request,res=response)=>{
        let categorie = await dataCategorie.AfficheCategorie()
        res.render('livre',{categorie:categorie.success})
  }

  static LivrePost = async (req=request,res=response)=>{
           dataLivre.InsertionLivre(req.body,req.file)
  }

  static ProfilGet = async (req=request,res=response)=>{
    if (req.session.user) {
        let emprunt = await dataEmprunt.AfficherEmprunteUser(req.session.user.id)
        let user = await dataUser.AfficherUserDetail(req.session.user.id)
        res.render('profil',{user:user.success,data:req.session.user,emprunt:emprunt.success})
    } else {
      res.redirect('/')
    }
        
  }

  static UpdateUser = async (req=request,res=response)=>{
      console.log('reqbodyc',req.body);
        console.log('eefile',req.file);
  let update = await  dataUser.UpdateUser(req.body,req.file)
 console.log('updateee',update.success);
 if (update.success) {
    req.session.reload(()=>{
      req.session.user
    res.redirect('/profil')

    })
  
 }
      
        
  }


  static EmpruntGet = async (req=request,res=response)=>{
    if (req.session.user) {
    let id = req.params.id
    let livre = await dataLivre.AfficheLivreDetail(id)
    res.render('emprunt',{livre:livre.success,data:req.session.user})
    } else {
      res.redirect('/')
    }
       
  }
  
  static EmpruntPost = async (req=request,res=response)=>{
    console.log("req",req.body);
    let datauser={...req.body}
    console.log("ddddd",datauser);
//  let emprunt =  await dataEmprunt.InsertionEmprunt(req.body)
    // if ( emprunt.success) {
    // res.redirect('/Accueil')
      
    // } else {
    //   res.json(emprunt.erreur)
    // }
  }

  static logout =  (req=request , res=response)=>{ 
    req.session.destroy() 
    res.redirect('/')
  }

}


module.exports=Usercontrolleur;