import renderCatalog from './catalog_render.js';

$("#sort_button").click(function(){
  console.log("sorting drops down!")
  $("#sort_dropDown").toggleClass("sort__dropdown--visible");
})

function getLocalStorageObjectItem(key) {
    var json = localStorage.getItem(key);
    if (json === undefined) {
        return undefined;
    }
    return JSON.parse(json);
}


