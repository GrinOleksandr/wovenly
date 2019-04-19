function activateColor(element) {
  // if (document.documentElement.clientWidth > 767) {
  console.log('color activated')

  if (element.parentNode.querySelector('.newblock__color--active')) {
    element.parentNode.querySelector('.newblock__color--active')
      .style.boxShadow = "none";
    element.parentNode.querySelector('.newblock__color--active')
      .classList.remove('newblock__color--active');
  }
  if (element.style.background.length < 20) {
    element.style.boxShadow = `0px 0px 0px 2px ${ element.style.background}`;
  } else {
    element.style.boxShadow = `0px 0px 0px 2px magenta `
  }
  element.classList.add('newblock__color--active');
  element.parentNode.parentNode.dataset.activeColor = element.dataset.color;
}
// }

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
        slidesToShow: 3,
        slidesToScroll: 3,
        easing: 'swing',
        speed: 1200,
        swipe: false,
        prevArrow: $('.newblock__prev'),
        nextArrow: $('.newblock__next'),
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
  .then(function() {
    window.addEventListener('resize', function() {
      if (document.documentElement.clientWidth > 767) {
        Array.from(document.querySelectorAll('.newblock__product--color:first-child'))
          .forEach(function(elem) {
            activateColor(elem);
          })

        Array.from(document.getElementsByClassName('newblock__product--color'))
          .forEach(function(item) {
            item.addEventListener('click', (ev) => activateColor(ev.target))
          })
      }
    })

  })
  .catch(error => error);





// box-shadow: 0px 0px 0px 2px blue;
