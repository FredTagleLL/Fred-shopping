import { conexionApi } from "./conexionApi.js";
import mostrarArticulos from "./mostrarArticulos.js";

const $busqueda= document.querySelector("[data-busqueda]");
const $barra =document.querySelector("[data-barra]")
const $agregar = document.querySelector("[data-agregar]")
const $lista =document.querySelector(".header__lista");
const $img = document.querySelector(".buscar__img")
let width = window.innerWidth;
$busqueda.addEventListener("click" ,()=>{
    if(width<700){
        
    }
    if($img.src.includes("close.png")){
        $barra.classList.add("desactivar")
        $agregar.classList.remove("desactivar")
        $lista.style.justifyContent="space-between"
        $img.src="../img/glass.png"
        
    }else{
        $barra.classList.remove("desactivar")
        $barra.focus()
        $agregar.classList.add("desactivar")
        $lista.style.justifyContent="center"
        $img.src="../img/close.png"
    }
})

$barra.addEventListener("keydown" , e =>{
    if( e.key ==="Escape"){
        $busqueda.classList.remove("desactivar")
        $barra.classList.add("desactivar")
        $agregar.classList.remove("desactivar")
        $lista.style.justifyContent="space-between"
        $img.src="../img/glass.png"
    }
})

async function filtrarArticulo(evento) {
    evento.preventDefault();
    const busqueda =await conexionApi.buscarArticulo($barra.value);
    const $articulos = document.querySelector("[data-articulo");
    while($articulos.firstChild){
        $articulos.removeChild($articulos.firstChild);
    }
    busqueda.forEach(articulo => $articulos.appendChild(mostrarArticulos(articulo.name , articulo.description, articulo.price , articulo.url )));
    
    if(busqueda.length==0){
        $articulos.innerHTML="<p>No se encontraron elementos</p>"
    }
}

$barra.addEventListener("keydown" , e =>{
    if(e.key==="Enter"){
        filtrarArticulo(e)
    }
})