import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
export const searchBar = document.querySelector('[data-js="search-bar"]');
export const navigation = document.querySelector('[data-js="navigation"]');
export const prevButton = document.querySelector('[data-js="button-prev"]');
export const nextButton = document.querySelector('[data-js="button-next"]');
export const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
let page = 1;
const searchQuery = "";


async function fetchCharacters() {

  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const character = await response.json();
  cardContainer.innerHTML = "";
  character.results.forEach((result) => {
    const name = result.name;
    const status = result.status;
    const type = result.species;
    const ocurrences = result.episode.length;
    const image = result.image;
    const cards = createCharacterCard(name, status, type, ocurrences, image);
    cardContainer.append(cards);
  });

  console.log('char',character);
  
}

fetchCharacters()

nextButton.addEventListener("click", function(event){ 
  page++
  
  if (page > 42){
    page = 42
  }
  console.log("Page: ",page)
  fetchCharacters()
  
  
});

prevButton.addEventListener("click", function(event){ 
  page--
  if (page < 0){
    page = 0
  }
  console.log("Page: ",page)
  fetchCharacters()

  console.log("prevButton")
});

