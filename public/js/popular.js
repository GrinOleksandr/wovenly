!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="public/js/",n(n.s=1)}([,function(e,t){fetch("http://wovenly-server.herokuapp.com/getpopular",{method:"GET",headers:{"Content-Type":"text/plain","Access-Control-Allow-Origin":"*"}}).then(function(e){return e.json()}).then(function(e){console.log(e);var t=new EJS({url:"./templates/popular.ejs"});$(".popular__slider__nesting-place").html(t.render({products:e}))}).then(function(){$(".popular__slider--wrapper").slick({slidesToShow:6,slidesToScroll:6,easing:"swing",speed:1200,swipe:!1,prevArrow:$(".popular__prev"),nextArrow:$(".popular__next"),responsive:[{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0}}]})}).catch(function(e){return e})}]);