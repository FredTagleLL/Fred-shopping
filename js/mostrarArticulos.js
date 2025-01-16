import { conexionApi } from "./conexionApi.js";

const lista = document.querySelector("[data-articulo]");

export default function mostrarArticulos(name,description,precies,url,id) {
    const articulo = document.createElement("div");
    articulo.className="target";
    articulo.innerHTML=`<div class="target__product"><img src=${url} alt="${name} imagen"></div>
                <h3 class="target__name">${name}</h3>
                <p class="target__description">${description}</p>
                <p class="target__precies"><span>$ ${precies}</span><button id="${id}"  class="target__trash"><img src="../img/trash.svg"></button></p>`
                return articulo;
            }
            
async function subirArticulos() {
    try{
        const listaApi=await conexionApi.listaArticulos();
        listaApi.forEach(articulo =>lista.appendChild(mostrarArticulos(articulo.name, articulo.description,articulo.price,articulo.url,articulo.id)))
    }catch{
        lista.innerHTML="<p>Ha ocurrido un problema con la conexion ...</p>"
    }
}
subirArticulos()
