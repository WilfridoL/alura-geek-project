import { importarConexion } from "./apiConexion.js";
import { productContainer } from "../script.js";

function createCard(name, price, url) {
    let card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <div class="img-contenedor">
            <img src="${url}" alt="${name}">            
        </div>
        <p>${name}</p>
        <div class="precios">
            <h4>$${price}</h4>
            <i class="bi bi-trash3-fill" data-eliminar></i>
        </div>
    `

    return card;
}

export async function generarCard(){
    const cardAPI = await importarConexion.productos();

    // coloca el ultimo elemento como el primero 

    for(let i = cardAPI.length - 1; i >= 0; i--){
        productContainer.appendChild(createCard(cardAPI[i].name, cardAPI[i].price, cardAPI[i].url));
    }
}