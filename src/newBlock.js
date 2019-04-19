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



function activateColor(element) {
  console.log('color activated', element.style.backgroundColor);
  if (element.parentNode.querySelector('.newblock__color--active')) {
    element.parentNode.querySelector('.newblock__color--active')
      .classList.remove('newblock__color--active');
  }

  // element.style.boxShadow = `0px 0px 0px 2px ${element.style.background}`;
  element.style.setProperty('--activeColor-color', element.style.backgroundColor);
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
  .then(function() {
    implementActivation();
  })
  .catch(error => error);


function colorActivationWrapper(ev) {
  activateColor(ev.target)
}

function implementActivation() {
  console.log(document.documentElement.clientWidth)
  if (document.documentElement.clientWidth > 750) {
    for (let i = 0; i < (document.querySelectorAll('.newblock__color--outer:first-child'))
      .length; i++) {
      activateColor((document.querySelectorAll('.newblock__color--outer:first-child'))[i]);
    }

    for (let i = 0; i < (document.getElementsByClassName('newblock__color--outer'))
      .length; i++) {
      (document.getElementsByClassName('newblock__color--outer'))[i].addEventListener('click', colorActivationWrapper);
    }
  } else {
    for (let i = 0; i < (document.getElementsByClassName('newblock__color--outer'))
      .length; i++) {
      (document.getElementsByClassName('newblock__color--outer'))[i].removeEventListener('click', colorActivationWrapper);
      (document.getElementsByClassName('newblock__color--outer'))[i].style.border = "none";
      console.log('action removed!')
    }

  }
}



window.addEventListener('resize', throttle(implementActivation, 1000))





// box-shadow: 0px 0px 0px 2px blue;
