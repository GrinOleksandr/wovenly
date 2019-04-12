

let navMenuDropDown = document.getElementById('navMenuDropDown')
let navMenuDropDownBtn = document.getElementById('navMenuDropDownBtn')
let triangle = document.getElementById('dropdown_triangle')
let navMenu = document.getElementById('navMenu')
let burgerBtn = document.getElementById('burger')
let searchFieldWrapper = document.getElementById('searchFieldWrapper')
let searchBtn = document.getElementById('searchButton')
let cartCount = document.getElementById('cartCount')
let cart = document.getElementById('cart')
let searchFieldDropdown = document.getElementById('searchFieldDropdown');
let submitSearchBtn = document.getElementById('submitSearchBtn');
let clearSearchBtn = document.getElementById('clearSearchBtn');


navMenu.addEventListener('click', function(ev){
  ev.preventDefault();
  ev.stopPropagation();

  if(navMenuDropDown.classList.contains('dropdown__visible')){
    navMenuDropDown.classList.remove('dropdown__visible')
  }

  if(triangle.classList.contains('dropdown__visible')){
    triangle.classList.remove('dropdown__visible')
  }

    if (searchFieldWrapper.classList.contains('dropdown__visible')) {
    searchFieldWrapper.classList.remove('dropdown__visible');
  }
})

navMenuDropDownBtn.addEventListener('click', navMenuDropDownExpander)
if(document.getElementsByClassName('chevron')[0]){
  document.getElementsByClassName('chevron')[0].addEventListener(
      'click', navMenuDropDownExpander)
}

function navMenuDropDownExpander(ev) {

  ev.preventDefault();
  ev.stopPropagation();
  navMenuDropDown.classList.toggle('dropdown__visible')
  if(burgerBtn.style.display === "none"){
  triangle.classList.toggle('dropdown__visible')
  }

  if (searchFieldWrapper.classList.contains('dropdown__visible')) {
    searchFieldWrapper.classList.remove('dropdown__visible');
  }
}


burgerBtn.addEventListener('click', function(ev) {
  ev.preventDefault();
  navMenu.classList.toggle('dropdown__visible')
  if (navMenuDropDown.classList.contains('dropdown__visible')) {
    navMenuDropDown.classList.remove('dropdown__visible');
  }

  if (searchFieldWrapper.classList.contains('dropdown__visible')) {
    searchFieldWrapper.classList.remove('dropdown__visible');
  }
})


searchBtn.addEventListener('click', function(ev) {
  ev.preventDefault();
  ev.stopPropagation()
  searchFieldWrapper.classList.toggle('dropdown__visible')
  closeDropDown();
})

function closeDropDown() {
  if (navMenu.classList.contains('dropdown__visible')) {
    navMenu.classList.remove('dropdown__visible');
  }

  if (triangle.classList.contains('dropdown__visible')) {
    triangle.classList.remove('dropdown__visible');
  }

  if (navMenuDropDown.classList.contains('dropdown__visible')) {
    navMenuDropDown.classList.remove('dropdown__visible');
  }
}


cart.addEventListener('click', cartCounterIncrement)
cartCount.addEventListener('click', cartCounterIncrement)

function cartCounterIncrement(ev) {
  ev.preventDefault();
  if (!cartCount.classList.contains('visible')) {
    cartCount.classList.add('visible');
  }

  cartCount.innerText++;
}


submitSearchBtn.addEventListener(
    'click',
    function() { alert(`searching for: ${searchFieldDropdown.value}`) })


clearSearchBtn.addEventListener('click',
                                function() { searchFieldDropdown.value = ""; })

document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('click', function(ev) {
    ev.stopPropagation();
    if (!ev.target.classList.contains("nav-menu__item--link") &&
        !ev.target.classList.contains("nav-menu__level2--link") &&
        !ev.target.classList.contains("navigation__burger--link")) {
      closeDropDown();
    }
  })
})


  document.body.addEventListener('click', function(ev) {
    if (ev.target.id !== "searchFieldDropdown" &&
        ev.target.id !== "submitSearchBtn" &&
        ev.target.id !== "clearSearchBtn") {
      if (searchFieldWrapper.classList.contains('dropdown__visible')) {
        searchFieldWrapper.classList.remove('dropdown__visible');
      }
    }
  })
