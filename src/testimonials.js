    $('.testimonials__slider--wrapper')
      .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        easing: 'swing',
        mobileFirst: true,
        speed: 1200,
        infinite: true,
        prevArrow: $('.testimonials__prev'),
        nextArrow: $('.testimonials__next'),
        responsive: [{
          breakpoint: 768,
          settings: "unslick"
        }, ]
      });