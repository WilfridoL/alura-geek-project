async function productos(){
    const API = await fetch("http://localhost:3000/productos");
    const ConxionConvertida = await API.json();
    return ConxionConvertida;
}

async function publicarProductos(name,price,url){
    console.log('pepe enviado');
    const API = await fetch("http://localhost:3000/productos",{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            name:name,
            price:price,
            url:url
        })
    });
    const ConxionConvertida = await API.json();
    return ConxionConvertida;
}

async function elimanarProducto (id){
    const API = await fetch(`http://localhost:3000/productos/${id}`,{
        method: "DELETE",
        headers:{"Content-Type":"application/json"}
    });
    const ConxionConvertida = await API.json();
    return ConxionConvertida;
}

elimanarProducto("e852")

export const importarConexion = {
    productos, publicarProductos
}