import { createCharacterCard } from "./components/card/card.js";
import { changeButtonColor } from "./components/nav-button/nav-button.js";


const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector('[data-js="search-bar-container"]'
);
export const searchBar = document.querySelector('[data-js="search-bar"]');
export const navigation = document.querySelector('[data-js="navigation"]');
export const prevButton = document.querySelector('[data-js="button-prev"]');
export const nextButton = document.querySelector('[data-js="button-next"]');
export const pagination = document.querySelector('[data-js="pagination"]');

// States
export let maxPage = 42;
export let page = 1;
// const searchQuery = "";
let searchQuery = "";


async function fetchCharacters() {
  
  try {
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
    changeButtonColor()
    

    
  });
} catch (error) {
  console.error(error);
  console.log("yes__yes")
  cardContainer.innerHTML = `<br> <br> Character not found!`;
  // Expected output: ReferenceError: nonExistentFunction is not defined
  // (Note: the exact output may be browser-dependent)
}


  
  
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
  if (page <= 1){
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