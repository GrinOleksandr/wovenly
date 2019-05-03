import { getLocalStorageObjectItem } from './localStorageTools.js';

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

getNewBlockData()
  .then(function(data) {
    let newProductTemplate = new EJS({
      url: './templates/product_card.ejs'
    });
    $(".newblock__slider--wrapper")
      .html(newProductTemplate.render({
        block: "newBlock",
        products: data
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
    implementActivation();
    $('.newblock__color--outer:first-child')
      .each(function(index, element) {
        activateColor(element);
      })
  })
  .catch(error => error);

function getNewBlockData() {
  return new Promise(function(resolve, reject) {
    let data = getLocalStorageObjectItem('homepageData')
      .new;
    resolve(data)
  })
}

function activateColor(element) {
  if ($(element).parent().find('.newblock__color--active')) {
    $(element).parent().find('.newblock__color--active')
      .removeClass('newblock__color--active');
  }

  $(element).css('--activeColor-color', $(element).css('background-color'));
  $(element).addClass('newblock__color--active');
  element.parentNode.parentNode.dataset.activeColor = element.dataset.color;
}

function implementActivation() {
  $('.newblock__color--outer')
    .each(function(index, element) {
      $(element)
        .on('click', function(ev) {
          activateColor(ev.target)
        })
    })
}
window.addEventListener('resize', throttle(implementActivation, 1000))