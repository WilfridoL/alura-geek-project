async function productos(){
    const API = await fetch("https://faker-api-rouge.vercel.app/alura-geek-api.json");
    const ConxionConvertida = await API.json();
    return ConxionConvertida;
}

async function publicarProductos(name,price,url){
    const API = await fetch("http://localhost:5501/productos",{
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

// async function sacarID(){
//     const API = await fetch("http://localhost:5501/productos");
//     const ConxionConvertida = await API.json();
//     return ConxionConvertida.id;
// }

export const importarConexion = {
    productos, publicarProductos
}