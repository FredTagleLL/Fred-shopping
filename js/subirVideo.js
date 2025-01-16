import { conexionApi } from "./conexionApi.js";

const $formulario=document.querySelector("[data-formulario]");
const $name = document.getElementById("name");
const $description = document.getElementById("description");
const $precio = document.getElementById("precio");
const $url = document.getElementById("image");
const $button =document.getElementById("limpiar");
const $busqueda=document.querySelector("[data-busqueda]")
let valor = false
function limiteTexto(entrada,tamaño) {
    
    entrada.addEventListener("input" , e=>{
        if(e.target.value.length > tamaño){
            entrada.value=e.target.value.slice(0,-1)
        }
        
    } );
}

limiteTexto($name , 23);
limiteTexto($description , 200);
$button.addEventListener("click", ()=>{
    $description.value=""
    $url.value=""
    $name.value=""
    $precio.value=""
})
async function crearArticulo(evento) {
    evento.preventDefault();
    try {
        const titulo = ()=> $name.value ? $name.value[0].toUpperCase() + $name.value.slice(1) : "" ;
        await conexionApi.registrarArticulos(titulo(),$description.value,parseFloat($precio.value),$url.value);
        window.location.href="../concluido.html";
    } catch(e){
        alert(`Error: ${e.message}`)
    }
}


$formulario.addEventListener("submit", evento=> {
    evento.preventDefault();
    crearArticulo(evento)
})

