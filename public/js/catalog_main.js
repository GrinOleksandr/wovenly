!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="public/js/",o(o.s=7)}({0:function(t,e,o){"use strict";function n(t){new Promise(function(e,o){var n=t||function(t){var e=localStorage.getItem(t);if(void 0!==e)return JSON.parse(e)}("allProducts").products;$(".catalog__products--total-count").html("".concat(n.length," Rugs")),$("#pagination__pages-total").html(Math.ceil(n.length/19)),console.log("catalog data readed!"),e(n)}).then(function(t){var e=new EJS({url:"./templates/product_card.ejs"});console.log("catalog templates initialised in:  ",$(".catalog__content")),$(".catalog__content").html(e.render({block:"catalog",products:t}))}).then(function(){a(),$(".product__color--outer:first-child").each(function(t,e){c(e)})}).catch(function(t){return t});var e,o,n,r;function c(t){$(t).parent().find(".product__color--active")&&$(t).parent().find(".product__color--active").removeClass("product__color--active"),$(t).css("--activeColor-color",$(t).css("background-color")),$(t).addClass("product__color--active"),t.parentNode.parentNode.dataset.activeColor=t.dataset.color}function a(){$(".product__color--outer").each(function(t,e){$(e).on("click",function(t){c(t.target)})})}window.addEventListener("resize",(e=a,o=1e3,function(){var t=this,c=arguments;r?(clearTimeout(n),n=setTimeout(function(){Date.now()-r>=o&&(e.apply(t,c),r=Date.now())},o-(Date.now()-r))):(e.apply(t,c),r=Date.now())}))}o.d(e,"a",function(){return n})},7:function(t,e,o){"use strict";o.r(e);var n=o(0);fetch("https://wovenly-server.herokuapp.com/getcatalogdata",{method:"GET"}).then(function(t){return t.json()}).then(function(t){var e,o;e="allProducts",void 0===(o=t)?localStorage.removeItem(e):localStorage.setItem(e,JSON.stringify(o))}).catch(function(t){return t}),Object(n.a)()}});