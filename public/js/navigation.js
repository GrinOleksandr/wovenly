let moreStylesMenu = document.getElementById('moreStylesMenu')
let moreStylesBtn = document.getElementById('moreStylesBtn')
moreStylesBtn.addEventListener('click', function () {
  moreStylesMenu.classList.toggle('visible');
})

let navMenu = document.getElementById('navMenu')
let burgerBtn = document.getElementById('burger')
burgerBtn.addEventListener('click', function () {
  navMenu.classList.toggle('visible');
})

let searchFieldWrapper = document.getElementById('searchFieldWrapper')
let searchBtn = document.getElementById('searchButton')
searchBtn.addEventListener('click', function (ev) {
  ev.stopPropagation()
  searchFieldWrapper.classList.toggle('visible');
})
