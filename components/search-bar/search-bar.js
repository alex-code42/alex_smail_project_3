import { fetchCharacters } from "../../index.js";
import { createPagination } from "../nav-pagination/nav-pagination.js";

import { variables } from "../../index.js";

export function createSearchBar() {
  const searchBar = document.querySelector('[data-js="search-bar"]');

  searchBar.addEventListener("submit", (event) => {
    event.preventDefault();
    variables.searchQuery = event.target.firstElementChild.value;

    fetchCharacters(variables.page, variables.searchQuery);
    createPagination(variables.page, variables.maxPage);
  });
}