// more-styles dropDown apearance
let moreStylesMenu = document.getElementById('moreStylesMenu')
let moreStylesBtn = document.getElementById('moreStylesBtn')
moreStylesBtn.addEventListener('click', function (ev) {
  console.log(ev)
  console.log(moreStylesMenu.style.display)
  moreStylesMenu.classList.toggle('visible')
})
// TODO test pull before push 
let navMenu = document.getElementById('navMenu')
let burgerBtn = document.getElementById('burger')
burgerBtn.addEventListener('click', function () {
  navMenu.classList.toggle('visible')
})
