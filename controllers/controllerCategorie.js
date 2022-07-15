const { request,response } = require("express");
const dataCategorie = require("../others/requeteCategorie");


const CategorieControlleur = class{

    static AccueilGet = async (req=request,res=response)=>{
        let Categorie = await dataCategorie.AfficheCategorie()
        console.log('dddddd',Categorie.success);
        if (Categorie.success) {
            res.render('categorie',{categorie:Categorie.success})
        } else {
            
        }
        
    }

     static AccueilPost = async (req=request,res=response)=>{
       console.log(req.body);
     let insertCategorie = await  dataCategorie.InsertionUser(req.body)
     if (insertCategorie.success) {
        res.redirect('/categorie')
     } else {
            const erreur = insertCategorie.erreur.errors.reduce((accumulator, value) => {
                return {...accumulator, [value.path]: value.message};
              }, {});
              let Categorie =  await dataCategorie.AfficheCategorie();
              res.render('categorie',{categorie:Categorie.success,alert:'Ce genre existe déjà'})
     }
    }


    static Update = async (req=request,res=response)=>{
        console.log('ffff',req.body);
        let Update = await dataCategorie.UpdateCategorie(req.body)
        if (Update.success) {
            res.redirect('/categorie')
        } else {
            console.log('erroro',Update.erreur);
        }
   
        
    }
}


module.exports = CategorieControlleur;