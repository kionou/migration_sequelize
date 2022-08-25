var express = require('express');
const Usercontrolleur = require('../controllers/controlersuser');
const upload = require('../middleware/multer');
var router = express.Router();

/* GET users listing. */
router.get('/',Usercontrolleur.ProfilGet);
router.post('/updateUser',upload.single('image'),Usercontrolleur.UpdateUser)

module.exports = router;
