import { importarConexion } from "./js/apiConexion.js";
import { generarCard } from "./js/generarCard.js";
// import { subirProducto } from "./js/publicarProducto.js";

// console.log(importarConexion.productos());

// variables exportadas

export const productContainer = document.querySelector('[data-producto]');
const formProduct = document.querySelector('[data-formulario]');
// const btnBorrarProducto = document.querySelector('.bi-trash3-fill');

// console.log(importarConexion.sacarID());

// llamadas de funciones
async function subirProducto(e) {
    // console.log(formProduct);
    e.preventDefault();
    const nameProduct = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;
    const url = document.querySelector('[data-url]').value;

    await importarConexion.publicarProductos(nameProduct, price, url)
}

formProduct.addEventListener('submit', e => subirProducto(e));

generarCard();