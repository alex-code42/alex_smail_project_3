import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector('[data-js="search-bar-container"]'
);
export const searchBar = document.querySelector('[data-js="search-bar"]');
export const navigation = document.querySelector('[data-js="navigation"]');
export const prevButton = document.querySelector('[data-js="button-prev"]');
export const nextButton = document.querySelector('[data-js="button-next"]');
export const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 42;
let page = 1;
// const searchQuery = "";
let searchQuery = "";


async function fetchCharacters() {
  console.log("Name in fetchChars: ", searchQuery)
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`);
  const character = await response.json();
  cardContainer.innerHTML = "";
  
  character.results.forEach((result) => {
    console.log("Fetch: Max_pages", maxPage)
    maxPage = character.info.pages;
    const name = result.name;
    const status = result.status;
    const type = result.species;
    const ocurrences = result.episode.length;
    const image = result.image;
    const cards = createCharacterCard(name, status, type, ocurrences, image);
    cardContainer.append(cards);
    pagination.innerHTML = `${page} / ${maxPage}`;
    
  });

  console.log('char',character);
  
}

fetchCharacters()

nextButton.addEventListener("click", function(event){ 
  page++
  
  if (page > maxPage){
    page = maxPage
  }
  console.log("Page: ",page)
  fetchCharacters()
  
  pagination.innerHTML = `${page} / ${maxPage}`
  
});

prevButton.addEventListener("click", function(event){ 
  page--
  if (page < 1){
    page = 1
  }
  console.log("Page: ",page)
  fetchCharacters()
  pagination.innerHTML = `${page} / ${maxPage}`

  console.log("prevButton")
});

searchBarContainer.addEventListener("input", (event) => {
  page = 1;
  console.log(event.target.value);
  const name = event.target.value
  console.log("nameInContainer: ",name);
  searchQuery = name
  fetchCharacters()
  console.log("Search Bar: Max Pages", maxPage)
});