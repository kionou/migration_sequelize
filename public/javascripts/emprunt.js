let date = document.querySelector('#form3Example4cg')
let dateRetour = document.querySelector('#retour')
// dateRetour.disabled=true
function getObject(object){
    console.log(object.value);
    let res = new Date(object.value)
    res.setDate(res.getDate() + 14)
    console.log(res.toLocaleDateString());
   dateRetour.value=res.toLocaleDateString()
}