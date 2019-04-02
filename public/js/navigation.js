let moreStylesMenu = document.getElementById('moreStylesMenu')
let moreStylesBtn = document.getElementById('moreStylesBtn')
moreStylesBtn.addEventListener('click', moreStylesHandler)
moreStylesBtn.nextSibling.addEventListener('click', moreStylesHandler)

function moreStylesHandler() {
  moreStylesMenu.classList.toggle('dropdown__visible')
  if (searchFieldWrapper.classList.contains('dropdown__visible')) {
    searchFieldWrapper.classList.remove('dropdown__visible');
}
}

let navMenu = document.getElementById('navMenu')
let burgerBtn = document.getElementById('burger')
burgerBtn.addEventListener('click', function() {
  navMenu.classList.toggle('dropdown__visible')
  if (moreStylesMenu.classList.contains('dropdown__visible')) {
    moreStylesMenu.classList.remove('dropdown__visible');
}

if (searchFieldWrapper.classList.contains('dropdown__visible')) {
  searchFieldWrapper.classList.remove('dropdown__visible');
}
})

let searchFieldWrapper = document.getElementById('searchFieldWrapper')
let searchBtn = document.getElementById('searchButton')
searchBtn.addEventListener('click', function(ev) {
  ev.stopPropagation()
  searchFieldWrapper.classList.toggle('dropdown__visible')
  if (navMenu.classList.contains('dropdown__visible')) {
    navMenu.classList.remove('dropdown__visible');
}

if (moreStylesMenu.classList.contains('dropdown__visible')) {
  moreStylesMenu.classList.remove('dropdown__visible');
}
})

let cartCount = document.getElementById('cartCount')
let cart = document.getElementById('cart')
cart.addEventListener('click', cartCounterIncrement)
cartCount.addEventListener('click', cartCounterIncrement)

function cartCounterIncrement() {
  console.log(cartCount.style.display)
  if (!cartCount.classList.contains('visible')) {
    cartCount.classList.add('visible')
    console.log(cartCount.classList.add('visible'));
}

cartCount.innerText++;
}
