// let livre = document.querySelector('.main-livre')
// console.log(livre);
// livre.scrollTop= livre.scrollHeight;
// livre.scrollTo(0,document.body.scrollHeight)

let categorie = document.querySelector('.categorie')
console.log(categorie);
categorie.scrollTop= categorie.scrollHeight;
categorie.scrollTo(0,document.body.scrollHeight)


let cathegories = document.querySelector('.livres').children;
console.log(cathegories);
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const page=document.querySelector(".page-num");
const maxItem=15;
let index=1;
 
 const pagination=Math.ceil(cathegories.length/maxItem);
 console.log(pagination)

 prev.addEventListener("click",function(){
   index--;
   check();
   showItems();
 })
 next.addEventListener("click",function(){
     index++;
     check();
   showItems();  
 })

 function check(){
      if(index==pagination){
          next.classList.add("disabled");
      }
      else{
        next.classList.remove("disabled");	
      }

      if(index==1){
          prev.classList.add("disabled");
      }
      else{
        prev.classList.remove("disabled");	
      }
 }

 function showItems() {
      for(let i=0;i<cathegories.length; i++){
         cathegories[i].classList.remove("show");
         cathegories[i].classList.add("hide");


         if(i>=(index*maxItem)-maxItem && i<index*maxItem){
            // if i greater than and equal to (index*maxItem)-maxItem;
           // means  (1*8)-8=0 if index=2 then (2*8)-8=8
           cathegories[i].classList.remove("hide");
           cathegories[i].classList.add("show");
         }
         page.innerHTML=index;
      }

          
 }

  window.onload=function(){
     showItems();
     check();
 }



