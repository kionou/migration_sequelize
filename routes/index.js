var express = require('express');
const Usercontrolleur = require('../controllers/controlersuser');
const upload = require('../middleware/multer');
const { ValiderRegistre,validerConnection } = require('../middleware/validator');
var router = express.Router();


/* GET home page. */
router.get('/',Usercontrolleur.ConnectionGet)
router.post('/',validerConnection,Usercontrolleur.ConnectionPost)
router.get('/inscription',Usercontrolleur.InscriptionGet)
router.post('/inscription',ValiderRegistre,Usercontrolleur.InscriptionPost)
router.post('/',Usercontrolleur.AccueilGet );
router.get('/livre',Usercontrolleur.LivreGet );
router.post('/livre',upload.single('image'),Usercontrolleur.LivrePost );

router.get('/logout',Usercontrolleur.logout)




module.exports = router;
