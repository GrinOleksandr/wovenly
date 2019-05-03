getPopularBlockData()
  .then(function(data) {
    let popularProductTemplate = new EJS({
      url: './templates/product_card.ejs'
    });
    $(".popular__slider--wrapper")
      .html(popularProductTemplate.render({
        block: "popular",
        products: data
      }));
  })
  .then(function() {
    $('.popular__slider--wrapper')
      .slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        easing: 'swing',
        speed: 1200,
        swipe: false,
        prevArrow: $('.popular__prev'),
        nextArrow: $('.popular__next'),
        responsive: [{
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
        ]
      });

  })
  .catch(error => error);

function getPopularBlockData() {
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