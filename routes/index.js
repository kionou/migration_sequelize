var express = require('express');
const Usercontrolleur = require('../controllers/controlersuser');
var router = express.Router();


/* GET home page. */
router.get('/',Usercontrolleur.userGet)
router.post('/',Usercontrolleur.AccueilGet );

module.exports = router;
