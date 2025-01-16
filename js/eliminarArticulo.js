import { conexionApi } from "./conexionApi.js";


setTimeout(() => {
    const $borrar = document.querySelectorAll(".target__trash");
    for (let i = 0; i < $borrar.length; i++) {
        $borrar[i].onclick= ()=>{
            const $modal = document.querySelector(".modal")
            const $btnSi=document.querySelector(".btn__si")
            const $btnNo=document.querySelector(".btn__no")

            $modal.classList.add("activar__modal")

            $btnNo.addEventListener("click" , ()=>{
                $modal.classList.remove("activar__modal")
            })
            $btnSi.addEventListener("click" ,()=>{
                conexionApi.eliminarArticulo($borrar[i].id)
            })
            
            
        }
        
    }
    
},50); 
