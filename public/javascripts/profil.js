 let formulaire = document.querySelector('.main-formulaire');

 let boutton = document.querySelector('#boutton')
 console.log(boutton,formulaire);
boutton.addEventListener('click',()=>{
    formulaire.style.display='flex';
    console.log('frhh');
   
})


let categorie = document.querySelector('.emprunt')
// console.log(categorie);
categorie.scrollTop= categorie.scrollHeight;
categorie.scrollTo(0,document.body.scrollHeight)
let date_adheration = document.querySelector('#date')

    let res = new Date(date_adheration.innerHTML)
    date_adheration.textContent=res.toLocaleDateString()
   


const imgDiv = document.querySelector('.main-image');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');
console.log(file);


imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block";
});



imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none";
});



file.addEventListener('change', function(){
   
    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader();

        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);
    }
});



