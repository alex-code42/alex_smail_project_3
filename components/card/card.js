import { maxPage } from "../../index.js";



export function createCharacterCard(name, status, type, ocurrences, image) {
  
    // create a new list Item with class Card
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "card")
    listItem.innerHTML = 
    `<div class="card__image-container">
      <img class="card__image" src="${image}" alt="">
      <div class="card__image-gradient"></div>
    </div>
    <div class="card__content">
      <h2 class="card__title">${name}</h2>
      <dl class="card__info">
        <dt class="card__info-title">Status</dt>
        <dd class="card__info-description">${status}</dd>
        <dt class="card__info-title">Type</dt>
        <dd class="card__info-description">${type}</dd>
        <dt class="card__info-title">Occurrences</dt>
        <dd class="card__info-description">${ocurrences}</dd>
      </dl>
    </div>
  </li>`
    return listItem

    
}
