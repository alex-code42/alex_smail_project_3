import { createCharacterCard } from "./components/card/card.js";
import { createButton } from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const navigation = document.querySelector('[data-js="navigation"]');

// States

export const variables = {
  maxPage: 1,
  page: 1,
  searchQuery: "",
};

export async function fetchCharacters(page = 1, searchQuery) {

  cardContainer.textContent = "";
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
  );
  const data = await response.json();
  variables.maxPage = data.info.pages;
  // pagination.textContent = `${page} / ${maxPage} `;
  const characters = data.results;
  characters.forEach((character) => {
    createCharacterCard(character);
    createPagination(page, variables.maxPage);
  });
}
fetchCharacters(variables.page, variables.searchQuery);
createButton();
createSearchBar();

 prevButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (page > 1) {
    page--;
    fetchCharacters(page, searchQuery);
  }
});

nextButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (page <= maxPage) {
    page++;
    fetchCharacters(page, searchQuery);
  }
});

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = event.target.firstElementChild.value;
  page = 1;
  fetchCharacters(page, searchQuery);
  console.log(searchQuery);
});