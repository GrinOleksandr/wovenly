fetch(`https://wovenly-server.herokuapp.com/getnew`, {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': "*"
    }
  })
  .then(function(response) {
    return response.json()
  })
  .then(function(json) {
    let newProductTemplate = new EJS({
      url: './templates/newBlock.ejs'
    });
    $(".new__slider--nesting-place")
      .html(newProductTemplate.render({
        newProducts: json
      }));
  })
  .then(function() {
    $('.newblock__slider--wrapper')
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
