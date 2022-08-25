const { request,response } = require("express");


const AdminControlleur = class {
     static AccueilGet = (req=request,res=response)=>{
        res.render('admin')
  }

}

module.exports=AdminControlleur;