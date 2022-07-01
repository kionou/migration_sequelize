const { request,response } = require("express");
const dataUser = require("../others/requeteUser");
const Usercontrolleur = class {
    static AccueilGet =  async (req=request,res=response) =>{
        let Userd =  await  dataUser.InsertionUser(req.body);
        console.log('usderd');
        if (Userd.erreur) {
            //   const erreur = Userd.erreur.errors.reduce((accumulator, value) => {
            //     return {...accumulator, [value.path]: value.message};
            //   }, {});
              console.log('oblj',Userd.erreur);
           
            //  res.json({"erreur de validation":erreur})
             res.json({"erreur de validation":Userd.erreur})


        } else {
            res.json(Userd.success.toJSON())

        }
    }
}


module.exports=Usercontrolleur;