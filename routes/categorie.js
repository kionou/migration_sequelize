var express = require('express');
const CategorieControlleur = require('../controllers/controllerCategorie');
var router = express.Router();


router.get('/',CategorieControlleur.AccueilGet)
router.post('/',CategorieControlleur.AccueilPost)





module.exports = router;