import { fetchCharacters } from "../../index.js";
import { createPagination } from "../nav-pagination/nav-pagination.js";
import { variables } from "../../index.js";

export function createButton() {
  const prevButton = document.querySelector('[data-js="button-prev"]');
  const nextButton = document.querySelector('[data-js="button-next"]');
  prevButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (variables.page > 1) {
      variables.page--;
      fetchCharacters(variables.page, variables.searchQuery);
      createPagination(variables.page, variables.maxPage);
    }
  });

  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (variables.page < variables.maxPage) {
      variables.page++;
      fetchCharacters(variables.page, variables.searchQuery);
      createPagination(variables.page, variables.maxPage);
    }
  });
}

