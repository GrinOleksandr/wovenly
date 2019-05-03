import renderCatalog from './catalog_render.js';

fetch(`https://wovenly-server.herokuapp.com/getcatalogdata`, {
    method: 'GET'
  })
  .then(function(response) {
    return response.json()
  })
  .then(function(json) {
    setLocalStorageObjectItem('allProducts', json);
    console.log(Math.ceil(json.products.length/19))
      
      $("#pagination__current-page").html("1");
      document.querySelector(".pagination__wrapper").dataset.currentPage =  1;
      $("#pagination__pages-total").html(Math.ceil(json.products.length/19));
      document.querySelector(".pagination__wrapper").dataset.pagesTotal =  Math.ceil(json.products.length/19);
      $(".catalog__products--total-count").html(`${json.products.length} Rugs`);
  })
  .catch(error => error);


function setLocalStorageObjectItem(key, value) {
  if (value === undefined) {
    localStorage.removeItem(key);
  } else {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

renderCatalog();