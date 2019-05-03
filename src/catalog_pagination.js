import renderCatalog from './catalog_render.js';

$("#pagination__prev").click(function() {
  if ($("#pagination__current-page").html() > 1) {
    let newCurrentPage = +$("#pagination__current-page").html() - 1;
    $("#pagination__current-page").html(newCurrentPage);
    document.querySelector(".pagination__wrapper").dataset.currentPage = newCurrentPage;
    renderCatalog();
  }
})

$("#pagination__next").click(function() {
  if ($("#pagination__current-page").html() < document.querySelector(".pagination__wrapper").dataset.pagesTotal) {
    let newCurrentPage = +$("#pagination__current-page").html() + 1;
    $("#pagination__current-page").html(newCurrentPage);
    document.querySelector(".pagination__wrapper").dataset.currentPage = newCurrentPage;
    renderCatalog();
  }
})