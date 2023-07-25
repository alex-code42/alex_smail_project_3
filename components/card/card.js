export function createCharacterCard(characters) {
  // Create the li element with class "card"
  const ul = document.querySelector('[data-js="card-container"]');
  const newCard = document.createElement("li");
  newCard.classList.add("card-container");

  // Generate the HTML code for the card
  newCard.innerHTML = `

    <li class="card">
    <div class="card__image-container">
    <img class="card__image" src="${characters.image}" alt="${characters.name}" />
    <div class="card__image-gradient"></div>
    </div>
    <div class="card__content">
    <h2 class="card__title">${characters.name}</h2>
    <dl class="card__info">
    <dt class="card__info-title">Status</dt>
    <dd class="card__info-description">${characters.status}</dd>
    <dt class="card__info-title">Type</dt>
    <dd class="card__info-description">${characters.type}</dd>
    <dt class="card__info-title">Occurrences</dt>
    <dd class="card__info-description">${characters.episode.length}</dd>
    </dl>
    </div>
    </li>
    `;


  ul.append(newCard);
}
