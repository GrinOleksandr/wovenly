!function(e){var n={};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="public/js/",o(o.s=0)}([function(e,n){var o=$("#navMenuDropDown"),t=$("#navMenuDropDownBtn"),r=$("#dropdown_triangle"),s=$("#navMenu"),i=$("#burger"),a=$("#searchFieldWrapper"),l=$("#searchButton"),c=$("#cartCount"),d=$("#cart"),u=$("#searchFieldDropdown"),_=$("#submitSearchBtn"),p=$("#clearSearchBtn");function v(e){e.preventDefault(),e.stopPropagation(),o.toggleClass("dropdown__visible"),"none"===i.css("display")&&r.toggleClass("dropdown__visible"),a.hasClass("dropdown__visible")&&a.removeClass("dropdown__visible")}function b(){s.hasClass("dropdown__visible")&&s.removeClass("dropdown__visible"),r.hasClass("dropdown__visible")&&r.removeClass("dropdown__visible"),o.hasClass("dropdown__visible")&&o.removeClass("dropdown__visible")}function f(e){e.preventDefault(),c.hasClass("cart-counter__visible")||c.addClass("cart-counter__visible");var n=parseInt($(c).text(),10)+1||1;c.text(n)}s.on("click",function(e){e.preventDefault(),e.stopPropagation(),o.hasClass("dropdown__visible")&&o.removeClass("dropdown__visible"),r.hasClass("dropdown__visible")&&r.removeClass("dropdown__visible"),a.hasClass("dropdown__visible")&&a.removeClass("dropdown__visible")}),t.on("click",v),document.getElementsByClassName("chevron")[0]&&document.getElementsByClassName("chevron")[0].addEventListener("click",v),i.on("click",function(e){e.preventDefault(),s.toggleClass("dropdown__visible"),o.hasClass("dropdown__visible")&&o.removeClass("dropdown__visible"),a.hasClass("dropdown__visible")&&a.removeClass("dropdown__visible")}),l.on("click",function(e){e.preventDefault(),e.stopPropagation(),a.toggleClass("dropdown__visible"),b()}),d.on("click",f),c.on("click",f),_.on("click",function(){alert("searching for: ".concat($(u).val()))}),p.on("click",function(){u.val("")}),$(document).on("DOMContentLoaded",function(){$(document.body).on("click",function(e){e.stopPropagation(),e.target.classList.contains("nav-menu__item--link")||e.target.classList.contains("nav-menu__level2--link")||e.target.classList.contains("navigation__burger--link")||b()})}),$(document.body).on("click",function(e){"searchFieldDropdown"!==e.target.id&&"submitSearchBtn"!==e.target.id&&"clearSearchBtn"!==e.target.id&&a.hasClass("dropdown__visible")&&a.removeClass("dropdown__visible")})}]);