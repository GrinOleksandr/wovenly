getCatalogData()
  .then(function(data) {
    let catalogItemTemplate = new EJS({
      url: './templates/product_card.ejs'
    });
    $(".catalog__content")
      .html(catalogItemTemplate.render({
        block: "catalog",
        products: data
      }));
  })
  .catch(error => error);

  function getCatalogData() {
    return new Promise(function(resolve, reject) {
      let data = getLocalStorageObjectItem('homepageData')
        .popular;
      resolve(data)
    })
  }

  function getLocalStorageObjectItem(key) {
      var json = localStorage.getItem(key);
      if (json === undefined) {
          return undefined;
      }
      return JSON.parse(json);
  }
