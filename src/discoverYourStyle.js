fetch(`https://wovenly-server.herokuapp.com/getstyles`, {
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
    console.log(json);
    let discoverYourStyleTemplate = new EJS({
      url: './templates/discoverYourStyle.ejs'
    });
    $(".discover-your-style__slider--nesting-place")
      .html(discoverYourStyleTemplate.render({
        incomingStyles: json
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






// ---------------

// $('.discover-your-style__wrapper')
//   .slick({
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     easing: 'swing',
//     speed: 1200,
//     swipe: false,
//     prevArrow: $('.discover-your-style__prev'),
//     nextArrow: $('.discover-your-style__next'),
//     responsive: [{
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//         }
//       },
//     ]
//   });
