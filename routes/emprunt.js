var express = require('express');
const Usercontrolleur = require('../controllers/controlersuser');
var router = express.Router()


router.get('/:id',Usercontrolleur.EmpruntGet);
router.post('/',Usercontrolleur.EmpruntPost)










module.exports = router;