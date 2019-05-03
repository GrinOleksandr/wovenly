import renderCatalog from './catalog_render.js';

fetch(`https://wovenly-server.herokuapp.com/getcatalogdata`, {
    method: 'GET'
  })
  .then(function(response) {
    return response.json()
  })
  .then(function(json) {
    setLocalStorageObjectItem('allProducts', json)
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