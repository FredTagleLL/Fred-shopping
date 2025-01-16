const $close = document.querySelector(".confirmation__close");
const $home =document.querySelector(".confirmation__home");

$close.addEventListener("click" , ()=>{
    window.location.href="../agregar-articulo.html"
})

$home.addEventListener("click" ,()=>{
    window.location.href="../index.html"
    
})