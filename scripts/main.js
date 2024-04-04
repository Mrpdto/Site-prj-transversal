let carte = document.querySelectorAll(".flip-card")
console.log(carte)
carte.forEach(element => {
    element.addEventListener("click",() =>{
       element.classList.toggle("flipped");
    })
}); 