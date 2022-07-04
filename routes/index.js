var express = require('express');
const Usercontrolleur = require('../controllers/controlersuser');
const { ValiderRegistre,validerConnection } = require('../middleware/validator');
var router = express.Router();


/* GET home page. */
router.get('/',Usercontrolleur.ConnectionGet)
router.post('/',validerConnection,Usercontrolleur.ConnectionPost)
router.get('/inscription',Usercontrolleur.InscriptionGet)
router.post('/inscription',ValiderRegistre,Usercontrolleur.InscriptionPost)
router.post('/',Usercontrolleur.AccueilGet );

module.exports = router;
