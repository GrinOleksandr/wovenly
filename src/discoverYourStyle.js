getDYSBlockData()
  .then(function(data) {
    let discoverYourStyleTemplate = new EJS({
      url: './templates/discoverYourStyle.ejs'
    });
    $(".discover-your-style__slider--nesting-place")
      .html(discoverYourStyleTemplate.render({
        styles: data
      }));
  })
  .then(function() {
    $('.discover-your-style__wrapper')
      .slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        easing: 'swing',
        speed: 1200,
        swipe: false,
        prevArrow: $('.discover-your-style__prev'),
        nextArrow: $('.discover-your-style__next'),
        responsive: [{
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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


function getDYSBlockData() {
  return new Promise(function(resolve, reject) {
    let data = getLocalStorageObjectItem('homepageData')
      .styles;
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