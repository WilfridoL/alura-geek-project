// import { importarConexion } from "./js/apiConexion.js";
import { generarCard } from "./js/generarCard.js";

// console.log(importarConexion.productos());

// variables exportadas

export const productContainer = document.querySelector('[data-producto]');
export const formProduct = document.querySelector('[data-formulario]');
export const nameProduct = document.querySelector('[data-name]').value;
export const price = document.querySelector('[data-price]').value;
export const url = document.querySelector('[data-url]').value;
// const btnBorrarProducto = document.querySelector('.bi-trash3-fill');

// console.log(importarConexion.sacarID());

// llamadas de funciones

generarCard();