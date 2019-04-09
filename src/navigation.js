document.addEventListener('DOMContentLoaded', function(){
  document.body.addEventListener('click', function(ev){
      if(!ev.target.classList.contains("nav-menu__item--link") && !ev.target.classList.contains("nav-menu__level2--link") &&
  !ev.target.classList.contains("navigation__burger--link")){
      closeDropDown();
    }
  })
})

document.addEventListener('DOMContentLoaded', function(){
  document.body.addEventListener('click', function(ev){
    console.log(ev.target);
    if(ev.target.id!=="searchFieldDropdown" && ev.target.id!=="submitSearchBtn" &&  ev.target.id!=="clearSearchBtn"){
      console.log('closeSearch!')
      if (searchFieldWrapper.classList.contains('dropdown__visible')) {
        searchFieldWrapper.classList.remove('dropdown__visible');
      }
    }
  })
})













let navMenuDropDown = document.getElementById('navMenuDropDown')
let navMenuDropDownBtn = document.getElementById('navMenuDropDownBtn')
let triangle = document.getElementById('dropdown_triangle')
navMenuDropDownBtn.addEventListener('click', navMenuDropDownExpander)
navMenuDropDownBtn.nextSibling.addEventListener('click',
                                                navMenuDropDownExpander)

function navMenuDropDownExpander(ev) {
  ev.preventDefault();
  navMenuDropDown.classList.toggle('dropdown__visible')
  triangle.classList.toggle('dropdown__visible')
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
  closeDropDown();
})

function closeDropDown(){
  if (navMenu.classList.contains('dropdown__visible')) {
    navMenu.classList.remove('dropdown__visible');
  }

  if (navMenuDropDown.classList.contains('dropdown__visible')) {
    navMenuDropDown.classList.remove('dropdown__visible');
  }
}

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

let searchFieldDropdown = document.getElementById('searchFieldDropdown');
let submitSearchBtn = document.getElementById('submitSearchBtn');
submitSearchBtn.addEventListener(
    'click',
    function() {
      console.log(document.getElementById('searchFieldDropdown'))
      alert(`searching for: ${searchFieldDropdown.value}`) })

let clearSearchBtn = document.getElementById('clearSearchBtn');
clearSearchBtn.addEventListener('click',
                                function() { searchFieldDropdown.value = ""; })
