var express = require('express');
const AccueilControlleur = require('../controllers/controleurAccueil');
var router = express.Router()


router.get('/',AccueilControlleur.AccueilGet)
router.get('/detail/:id',AccueilControlleur.Detail)
router.get('/recherche',AccueilControlleur.Recherche)
router.post('/recherche',AccueilControlleur.RecherchePost)
router.get('/Categorie/:id',AccueilControlleur.CategorieGet)









module.exports = router;