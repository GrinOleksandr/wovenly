console.log('slider initialized')
$(document)
  .ready(function() {
    $('.popular__slider--wrapper')
      .slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        easing: 'swing',
        speed: 1200,
        dots: false,
        prevArrow: $('.popular__prev'),
        nextArrow: $('.popular__next'),
        responsive: [{
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
        ]
      });
  });
