!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="public/js/",r(r.s=1)}([,function(e,t){fetch("https://wovenly-server.herokuapp.com/getpopular",{method:"GET",headers:{"Content-Type":"text/plain","Access-Control-Allow-Origin":"*"}}).then(function(e){return e.json()}).then(function(e){var t=new EJS({url:"./templates/popular.ejs"});$(".popular__slider__nesting-place").html(t.render({products:e}))}).then(function(){$(".popular__slider--wrapper").slick({slidesToShow:6,slidesToScroll:6,easing:"swing",speed:1200,swipe:!1,prevArrow:$(".popular__prev"),nextArrow:$(".popular__next"),responsive:[{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0}}]})}).catch(function(e){return e})}]);