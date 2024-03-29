const header =  document.querySelector("#header");
const botonHeader = document.querySelector(".button-toggle"); 
const span1 = document.querySelector(".span-1");
const span2 = document.querySelector(".span-2");
const span3 = document.querySelector(".span-3");
const label = document.querySelectorAll(".label-header");

botonHeader.addEventListener ("click", (e)=>{
    header.classList.toggle("header-active");
    botonHeader.classList.toggle("span-active");
    span1.classList.toggle("span-1-active");
    span2.classList.toggle("span-2-active"); 
    span3.classList.toggle("span-3-active"); 
    header.classList.toggle("menu-open");

  
})
