let carte = document.querySelectorAll(".flip-card")
console.log(carte)
carte.forEach(element => {
    element.addEventListener("click",() =>{
       element.classList.toggle("flipped");
    })
}); 

let menuBtn = document.querySelector(".button-menu");
let menuClose = document.querySelector(".button-close");
let menuNav = document.querySelector(".menu-2");

menuBtn.addEventListener("click", () => {
    menuNav.classList.toggle("active");
})

menuClose.addEventListener("click", () => {
    menuNav.classList.toggle("active");
})