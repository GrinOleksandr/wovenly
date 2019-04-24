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
  })
  .catch(error => error);

function getNewBlockData() {
  return new Promise(function(resolve, reject) {
    let data = getLocalStorageObjectItem('homepageData')
      .new;
    console.log('newData!!! ', data)
    resolve(data)
  })
}

function activateColor(element) {
  if (element.parentNode.querySelector('.newblock__color--active')) {
    element.parentNode.querySelector('.newblock__color--active')
      .classList.remove('newblock__color--active');
  }

  element.style.setProperty('--activeColor-color', element.style.backgroundColor);
  element.classList.add('newblock__color--active');
  element.parentNode.parentNode.dataset.activeColor = element.dataset.color;
}

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
    }
  }
}
window.addEventListener('resize', throttle(implementActivation, 1000))

function getLocalStorageObjectItem(key) {
  var json = localStorage.getItem(key);
  if (json === undefined) {
    return undefined;
  }
  return JSON.parse(json);
}
