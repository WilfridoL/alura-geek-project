import { importarConexion } from "./apiConexion.js";
import { nameProduct, price, url, formProduct } from "../script.js";

async function subirProducto(e) {
    // console.log(formProduct);
    e.preventDefault();

    await importarConexion.publicarProductos(nameProduct, price, url)
}

formProduct.addEventListener('submit', e => subirProducto(e));
