
async function listaArticulos() {
    const conexion = await fetch("http://localhost:3001/articulos");

    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

async function registrarArticulos(name, description,price,url) {
    const conexion = await fetch("http://localhost:3001/articulos",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            name:name,
            description:description,
            price:price,
            url:url,
        })
    })
    
    if(!conexion.ok){
        throw new Error("A ocurrido al subir el producto");
        
    }
    const conexionConvertida = await conexion.json();
    return conexionConvertida
    
}
async function buscarArticulo(clave) {
    const conexion = await fetch(`http://localhost:3001/articulos?q=${clave}`);
    const conexionConvertida = conexion.json();
    console.log(conexionConvertida)
    return conexionConvertida
}

async function eliminarArticulo(id) {
    const conexion = await fetch(`http://localhost:3001/articulos/${id}`,{
        method: "DELETE"}
    );
    if (!conexion.ok) {
        throw new Error(`Error al eliminar el artículo con ID ${id}: ${conexion.status}`);
    }
    return conexion;

}
export const conexionApi={
    listaArticulos , registrarArticulos , buscarArticulo , eliminarArticulo
}