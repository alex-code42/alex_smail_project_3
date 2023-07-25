export function createPagination(page, maxPage) {
  const pagination = document.querySelector('[data-js="pagination"]');
  pagination.textContent = `${page} / ${maxPage} `;
}