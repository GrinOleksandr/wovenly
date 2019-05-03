import renderCatalog from './catalog_render.js';

$("#sort_button").click(function() {
  console.log("sorting drops down!")
  $("#sort_dropDown").toggleClass("sort__dropdown--visible");
})


function sortAscending(rug1, rug2) {
  return rug1.priceFrom.substr(1) - rug2.priceFrom.substr(1);
}

function sortDescending(rug1, rug2) {
  return rug2.priceTo.substr(1) - rug1.priceTo.substr(1);
}

$("#sort_priceAscending").click(function() {
  let sortedProductsList = getLocalStorageObjectItem("allProducts").products.sort(sortAscending);
  $(".catalog__products--total-count").html(`${sortedProductsList.length} Rugs`);
  renderCatalog(sortedProductsList)
  $("#sort_dropDown").removeClass('sort__dropdown--visible')
})

$("#sort_priceDescending").click(function() {
  let sortedProductsList = getLocalStorageObjectItem("allProducts").products.sort(sortDescending);
  $(".catalog__products--total-count").html(`${sortedProductsList.length} Rugs`);
  renderCatalog(sortedProductsList)
  $("#sort_dropDown").removeClass('sort__dropdown--visible')
})

function getLocalStorageObjectItem(key) {
  var json = localStorage.getItem(key);
  if (json === undefined) {
    return undefined;
  }
  return JSON.parse(json);
}