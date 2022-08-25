let stock = document.querySelector('#stock')
let emprunt = document.querySelector('#emprunt')
  
console.log(emprunt.href);
    // emprunt.disabled= false
    // console.log(emprunt.disabled);

  if (stock.innerHTML == 0) {
           emprunt.setAttribute('href','#') 
           emprunt.style.backgroundColor='#87CEEB'
           
        }
