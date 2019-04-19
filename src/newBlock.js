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
// function deactivateColor(element){
//   if (element.parentNode.querySelector('.newblock__color--active')) {
//     element.parentNode.querySelector('.newblock__color--active')
//       .style.boxShadow = "none";
//     element.parentNode.querySelector('.newblock__color--active')
//       .classList.remove('newblock__color--active');
//   }
// }


function activateColor(element) {
  console.log('color activated');
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
  .catch(error => error);


function colorActivationWrapper(ev){
  activateColor(ev.target)
}

  window.addEventListener('resize', throttle(function() {
    console.log(document.documentElement.clientWidth)
    if (document.documentElement.clientWidth > 750) {
      Array.from(document.querySelectorAll('.newblock__product--color:first-child'))
        .forEach(function(elem) {
          activateColor(elem);
        })

      Array.from(document.getElementsByClassName('newblock__product--color'))
        .forEach(function(item) {
          item.addEventListener('click', colorActivationWrapper );
        })
    }
    else {
      Array.from(document.getElementsByClassName('newblock__product--color'))
        .forEach(function(item) {
          item.removeEventListener('click', colorActivationWrapper );
          item.style.boxShadow ="none";
          console.log('action removed!')
        })

    }
  }, 1000)
)





// box-shadow: 0px 0px 0px 2px blue;
