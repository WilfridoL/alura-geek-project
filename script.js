import { importarConexion } from "./js/apiConexion.js";
import { generarCard } from "./js/generarCard.js";

// variables exportadas

export const productContainer = document.querySelector('[data-producto]');
const formProduct = document.querySelector('[data-formulario]');

// llamadas de funciones
async function subirProducto(e) {
    // console.log(formProduct);
    e.preventDefault();
    const nameProduct = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;
    const url = document.querySelector('[data-url]').value;
    
    await importarConexion.publicarProductos(nameProduct, price, url)
    window.location.reload();
}

formProduct.addEventListener('submit', e => subirProducto(e));

// Detectar y eliminar card

productContainer.addEventListener('click', function(event) {
    if (event.target && event.target.matches('[data-eliminar]')) {
        const card = event.target.closest('.card'); 
        const cardId = card ? card.id : null;
        if (cardId) {
            // console.log(`Se hizo clic en el botón de eliminar de la tarjeta con id: ${cardId}`);
            importarConexion.elimanarProducto(cardId);
            // Reinicia la pagina al pasar 5 ms
            setTimeout(reload, 500);
        }
    }
});

function reload() {
    console.log('callback de 5ms');
    window.location.reload();
}
generarCard();
