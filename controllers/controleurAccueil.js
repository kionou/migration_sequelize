const { request,response } = require("express");
const dataCategorie = require("../others/requeteCategorie");
const dataLivre = require("../others/requeteLivre");


const AccueilControlleur = class{

    static AccueilGet = async (req=request,res=response)=>{
      if (req.session.user) {
          let categorie = await dataCategorie.AfficheCategorie();
          let livre = await dataLivre.AfficheLivre()
          res.render('accueil',{categorie:categorie.success,livre:livre.success,data:req.session.user})
      } else {
        res.redirect('/')
      }
      
        
    }

    static Detail = async (req=request,res=response)=>{
      if (req.session.user) {
          let id = req.params.id
          let livre = await dataLivre.AfficheLivreDetail(id);
          let stock = await dataLivre.AfficheLivreNombre(id)
          res.render('detail',{livre:livre.success,stock:stock.success,data:req.session.user})
      } else {
        res.redirect('/')
      }
    
        
    }

    static Recherche = async (req=request,res=response)=>{
        if (req.session.user) {
           let search = await dataLivre.SearchBook(req.body.nom)
        let categorie= await dataCategorie.AfficheCategorie()
        res.render('recherche',{categorie:categorie.success,search:search.success,data:req.session.user})
        
        } else {
          res.redirect('/')
        }
       
    }

    static RecherchePost = async (req=request,res=response)=>{
          if (req.session.user) {
              let search = await dataLivre.SearchBook(req.body.nom.toLowerCase())
              let categorie= await dataCategorie.AfficheCategorie()
              res.render('recherche',{categorie:categorie.success,search:search.success,data:req.session.user})
          } else {
            res.redirect('/')
          }
        
    }

    
    static CategorieGet = async (req=request,res=response)=>{
        if (req.session.user) {

        let id = req.params.id
        let livre = await dataLivre.AfficheDetailCategorie(id);
        let nombre = await dataLivre.AfficheNombreLivre(id);
        let categorie = await dataCategorie.AfficheCategorieDetail(id)
        res.render('categorielivre',{livre:livre.success,nombre:nombre.success,categorie:categorie.success,data:req.session.user})
        
        } else {
          res.redirect('/')
        }
      
    }

}


module.exports = AccueilControlleur;