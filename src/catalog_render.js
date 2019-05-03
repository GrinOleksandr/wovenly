export default function renderCatalog(incomingData) {

  getCatalogData()
    .then(function(data) {
      let catalogItemTemplate = new EJS({
        url: './templates/product_card.ejs'
      });
      console.log('catalog templates initialised in:  ', $(".catalog__content"));
      let currentPage = +document.querySelector(".pagination__wrapper").dataset.currentPage;
      let startNumber, finishNumber;

      if (currentPage === 1) {
        startNumber = 0;
        finishNumber = 18;
      } else {
        startNumber = 19 * (currentPage - 1);
        finishNumber = 19 + 19 * (currentPage - 1);
      }

      console.log(startNumber, finishNumber)

      $(".catalog__content").html(catalogItemTemplate.render({
        block: "catalog",
        products: data,
      }));
    })
    .then(function() {

      implementActivation();
      $('.product__color--outer:first-child')
        .each(function(index, element) {
          activateColor(element);
        })
    })
    .catch(error => error);

  function getCatalogData() {
    return new Promise(function(resolve, reject) {
      let data = incomingData || getLocalStorageObjectItem('allProducts').products;
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

  //color activator
  const throttle = (func, limit) => {
    let lastFunc
    let lastRan
    return function() {
      const context = this
      const args = arguments
      if (!lastRan) {
        func.apply(context, args)
        lastRan = Date.now()
      } else {
        clearTimeout(lastFunc)
        lastFunc = setTimeout(function() {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(context, args)
            lastRan = Date.now()
          }
        }, limit - (Date.now() - lastRan))
      }
    }
  }

  function activateColor(element) {
    if ($(element).parent().find('.product__color--active')) {
      $(element).parent().find('.product__color--active')
        .removeClass('product__color--active');
    }

    $(element).css('--activeColor-color', $(element).css('background-color'));
    $(element).addClass('product__color--active');
    element.parentNode.parentNode.dataset.activeColor = element.dataset.color;
  }

  function implementActivation() {
    $('.product__color--outer')
      .each(function(index, element) {
        $(element)
          .on('click', function(ev) {
            activateColor(ev.target)
          })
      })
  }
  window.addEventListener('resize', throttle(implementActivation, 1000))
}