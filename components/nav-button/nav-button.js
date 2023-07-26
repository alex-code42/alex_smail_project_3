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
      animateButtonClick(prevButton); // Call the animation function for previous button
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

// Animation function for previous button
function animateButtonClick(button) {
  button.classList.add("animate-click"); // Add the animate-click class to trigger the animation
  button.addEventListener("animationend", () => {
    button.classList.remove("animate-click"); // Remove the animate-click class after the animation completes
  });
}


