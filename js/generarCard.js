import { importarConexion } from "./apiConexion.js";
import { productContainer } from "../script.js";

function createCard(id, name, price, url) {
    let card = document.createElement('div');
    card.className = 'card';
    card.id = `${id}`;

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
    try {
        const cardAPI = await importarConexion.productos();
        productContainer.innerHTML = '';
    
        // coloca el ultimo elemento card como el primero 
    
        for(let i = cardAPI.length - 1; i >= 0; i--){
            const invertirOrden = cardAPI[i]
            productContainer.appendChild(createCard(invertirOrden.id ,invertirOrden.name, invertirOrden.price, invertirOrden.url));
        }    
    } catch (error) {
        console.log(`Ha ocurrido un error tipo: ${error}`);
    }
}