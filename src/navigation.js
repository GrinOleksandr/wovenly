let navMenuDropDown = $('#navMenuDropDown'),
  navMenuDropDownBtn = $('#navMenuDropDownBtn'),
  triangle = $('#dropdown_triangle'),
  navMenu = $('#navMenu'),
  burgerBtn = $('#burger'),
  searchFieldWrapper = $('#searchFieldWrapper'),
  searchBtn = $('#searchButton'),
  cartCount = $('#cartCount'),
  cart = $('#cart'),
  searchFieldDropdown = $('#searchFieldDropdown'),
  submitSearchBtn = $('#submitSearchBtn'),
  clearSearchBtn = $('#clearSearchBtn');

navMenu.on('click', function(ev) {
  ev.preventDefault();
  ev.stopPropagation();

  if (navMenuDropDown.hasClass('dropdown__visible')) {
    navMenuDropDown.removeClass('dropdown__visible')
  }

  if (triangle.hasClass('dropdown__visible')) {
    triangle.removeClass('dropdown__visible')
  }

  if (searchFieldWrapper.hasClass('dropdown__visible')) {
    searchFieldWrapper.removeClass('dropdown__visible');
  }
})

navMenuDropDownBtn.on('click', navMenuDropDownExpander)
if (document.getElementsByClassName('chevron')[0]) {
  document.getElementsByClassName('chevron')[0].addEventListener(
    'click', navMenuDropDownExpander)
}

function navMenuDropDownExpander(ev) {

  ev.preventDefault();
  ev.stopPropagation();
  navMenuDropDown.toggleClass('dropdown__visible')
  if (burgerBtn.css('display') === 'none') {
    triangle.toggleClass('dropdown__visible')
  }

  if (searchFieldWrapper.hasClass('dropdown__visible')) {
    searchFieldWrapper.removeClass('dropdown__visible');
  }
}


burgerBtn.on('click', function(ev) {
  ev.preventDefault();
  navMenu.toggleClass('dropdown__visible')
  if (navMenuDropDown.hasClass('dropdown__visible')) {
    navMenuDropDown.removeClass('dropdown__visible');
  }

  if (searchFieldWrapper.hasClass('dropdown__visible')) {
    searchFieldWrapper.removeClass('dropdown__visible');
  }
})


searchBtn.on('click', function(ev) {
  ev.preventDefault();
  ev.stopPropagation()
  searchFieldWrapper.toggleClass('dropdown__visible')
  closeDropDown();
})

function closeDropDown() {
  if (navMenu.hasClass('dropdown__visible')) {
    navMenu.removeClass('dropdown__visible');
  }

  if (triangle.hasClass('dropdown__visible')) {
    triangle.removeClass('dropdown__visible');
  }

  if (navMenuDropDown.hasClass('dropdown__visible')) {
    navMenuDropDown.removeClass('dropdown__visible');
  }
}


cart.on('click', cartCounterIncrement)
cartCount.on('click', cartCounterIncrement)

function cartCounterIncrement(ev) {
  ev.preventDefault();
  if (!cartCount.hasClass('cart-counter__visible')) {
    cartCount.addClass('cart-counter__visible');
  }
  let newValue = parseInt($(cartCount)
    .text(), 10) + 1 || 1;
  cartCount.text(newValue);
}


submitSearchBtn.on(
  'click',
  function() {
    alert(`searching for: ${$(searchFieldDropdown).val()}`)
  })


clearSearchBtn.on('click',
  function() {
    searchFieldDropdown.val("");
  })

$(document)
  .on('DOMContentLoaded', function() {
    $(document.body)
      .on('click', function(ev) {
        ev.stopPropagation();
        if (!ev.target.classList.contains("nav-menu__item--link") &&
          !ev.target.classList.contains("nav-menu__level2--link") &&
          !ev.target.classList.contains("navigation__burger--link")) {
          closeDropDown();
        }
      })
  })

$(document.body)
  .on('click', function(ev) {

    if (ev.target.id !== "searchFieldDropdown" &&
      ev.target.id !== "submitSearchBtn" &&
      ev.target.id !== "clearSearchBtn") {
      if (searchFieldWrapper.hasClass('dropdown__visible')) {
        searchFieldWrapper.removeClass('dropdown__visible');
      }
    }
  })