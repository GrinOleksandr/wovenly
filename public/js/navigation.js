let navMenuDropDown = document.getElementById('navMenuDropDown')
let navMenuDropDownBtn = document.getElementById('navMenuDropDownBtn')
navMenuDropDownBtn.addEventListener('click', navMenuDropDownExpander)
navMenuDropDownBtn.nextSibling.addEventListener('click',
                                                navMenuDropDownExpander)

function navMenuDropDownExpander(ev) {
  ev.preventDefault();
  navMenuDropDown.classList.toggle('dropdown__visible')
  if (searchFieldWrapper.classList.contains('dropdown__visible')) {
    searchFieldWrapper.classList.remove('dropdown__visible');
}
}

let navMenu = document.getElementById('navMenu')
let burgerBtn = document.getElementById('burger')
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

let searchFieldWrapper = document.getElementById('searchFieldWrapper')
let searchBtn = document.getElementById('searchButton')
searchBtn.addEventListener('click', function(ev) {
  ev.preventDefault();
  ev.stopPropagation()
  searchFieldWrapper.classList.toggle('dropdown__visible')
  if (navMenu.classList.contains('dropdown__visible')) {
    navMenu.classList.remove('dropdown__visible');
}

if (navMenuDropDown.classList.contains('dropdown__visible')) {
  navMenuDropDown.classList.remove('dropdown__visible');
}
})

let cartCount = document.getElementById('cartCount')
let cart = document.getElementById('cart')
cart.addEventListener('click', cartCounterIncrement)
cartCount.addEventListener('click', cartCounterIncrement)

function cartCounterIncrement(ev) {
  ev.preventDefault();
  if (!cartCount.classList.contains('visible')) {
    cartCount.classList.add('visible');
}

cartCount.innerText++;
}
