async function productos(){
    try {
        const API = await fetch("https://faker-api-three.vercel.app/productos");
        const ConxionConvertida = await API.json();
        return ConxionConvertida;    
    } catch (error) {
        console.log(`Ha ocurrido un error de tipo: ${error}`);
    }
}

async function publicarProductos(name,price,url){
    try {
        const API = await fetch("https://faker-api-three.vercel.app/productos",{
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
    } catch (error) {
        console.log(`Ha ocurrido un error de tipo: ${error}`);
    }
}

async function elimanarProducto (id){
    try {
        const API = await fetch(`https://faker-api-three.vercel.app/productos/${id}`,{
            method: "DELETE",
            headers:{"Content-Type":"application/json"}
        });
        const ConxionConvertida = await API.json();
        return ConxionConvertida;
    } catch (error) {
        console.log(`Ha ocurrido un error de tipo: ${error}`);
    }
}

export const importarConexion = {
    productos, publicarProductos, elimanarProducto
}