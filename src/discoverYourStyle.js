// fetch(`https://wovenly-server.herokuapp.com/getpopular`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'text/plain',
//       'Access-Control-Allow-Origin': "*"
//     }
//   })
//   .then(function(response) {
//     return response.json()
//   })
//   .then(function(json) {
//     console.log(json);
//     let popularProductTemplate = new EJS({
//       url: './templates/popular.ejs'
//     });
//     $(".popular__slider__nesting-place")
//       .html(popularProductTemplate.render({
//         products: json
//       }));
//   })
//   .then(function() {
//     $('.popular__slider--wrapper')
//       .slick({
//         slidesToShow: 6,
//         slidesToScroll: 6,
//         easing: 'swing',
//         speed: 1200,
//         swipe: false,
//         prevArrow: $('.popular__prev'),
//         nextArrow: $('.popular__next'),
//         responsive: [{
//             breakpoint: 1200,
//             settings: {
//               slidesToShow: 4,
//               slidesToScroll: 4,
//               infinite: true,
//             }
//           },
//           {
//             breakpoint: 768,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//               infinite: true,
//             }
//           },
//         ]
//       });
//
//   })
//   .catch(error => error);


$('.discover-your-style__wrapper')
  .slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    easing: 'swing',
    speed: 1200,
    swipe: false,
    prevArrow: $('.discover-your-style__prev'),
    nextArrow: $('.discover-your-style__next'),
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
