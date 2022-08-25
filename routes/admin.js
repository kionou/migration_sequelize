var express = require('express');
const AdminControlleur = require('../controllers/controleurAdmin');
var router = express.Router()


router.get('/',AdminControlleur.AccueilGet)


module.exports=router