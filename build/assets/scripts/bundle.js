!function(e){function t(n){if(o[n])return o[n].exports;var l=o[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){"use strict";o.r(t);console.log("in index.js"),(()=>{function e(){s++,l.innerHTML=(100/o*s<<0)+"%",s>=o&&setTimeout(function(){n.classList.contains("done")||(n.classList.add("done"),console.log("класс done добавлен"))},1e3)}const t=[...document.querySelectorAll("img")],o=t.length+1,n=document.getElementById("page-preloader"),l=document.getElementById("loader_perc");let s=0;const c=new Image;t.forEach(t=>t.addEventListener("load",e)),c.addEventListener("load",e),c.src="../assets/images/my-works/feedback_bg.png",console.log("preloader модуль загружен")})(),console.log("страница загружена"),(()=>{const e=document.getElementById("autorization"),t=document.querySelector(".flip"),o=(document.querySelector(".front"),document.querySelector(".back"),document.querySelector(".order__form-button_main"));null!==e&&(e.addEventListener("click",o=>{o.preventDefault(),e.style.display="none",t.classList.add("active")}),o.addEventListener("click",()=>{e.style.display="block",t.classList.remove("active")})),console.log("модуль загружен")})(),(()=>{const e=document.querySelector(".hamburger"),t=document.querySelector(".fullscreenmenu-left"),o=document.querySelector(".fullscreenmenu-right"),n=document.querySelector(".fullscreen__btn"),l=document.querySelector(".fullscreenmenu"),s=document.querySelector(".fullscreen__list"),c=document.querySelector(".fullscreen-header"),r=document.querySelector("body");e&&(e.addEventListener("click",n=>{"0s"!==l.style.transitionDelay&&(l.style.transitionDelay="0s"),n.preventDefault(),console.log("click сработал"),l.style.height="100%",t.style.width="50%",o.style.width="50%",s.classList.add("active"),c.classList.add("active"),e.style.display="none",r.style.overflow="hidden"}),n.addEventListener("click",n=>{n.preventDefault(),s.classList.remove("active"),c.classList.remove("active"),t.style.width="0",o.style.width="0",l.style.transitionDelay="0.6s",l.style.height="0",e.style.display="block",r.style.overflow="auto"})),console.log("fullscreenMenu модуль загружен")})(),(()=>{const e=document.querySelector(".skills-list"),t=document.querySelectorAll(".circles"),o=Array.from(t);if(e){const t=e.getBoundingClientRect();document.querySelector("body").addEventListener("wheel",function(e){console.log(t.top);const n=t.top-300;if(e.pageY>=n){for(let e=0;e<o.length;e++)o[e].classList.add("active");console.log("достигли блока активации")}console.log(e.pageY)}),console.log("skils модуль загружен")}})(),(()=>{const e=document.querySelector(".blog__swipe__btn"),t=document.querySelector(".blog-swipe__menu"),o=document.querySelector(".blog-swipe__list");t&&(e.addEventListener("click",e=>{t.classList.add("active"),o.classList.add("active"),console.log("Сработал Swipe")}),o.addEventListener("click",e=>{console.log(e.target.classList),console.log("Сработал un Swipe")}),console.log("swipe модуль загружен"))})(),(()=>{document.getElementById("parallax");const e=document.getElementsByClassName("parallax-image "),t=[...e];window.addEventListener("mousemove",o=>{const n=window.innerWidth/2-o.pageX,l=window.innerHeight/2-o.pageY;t.forEach((t,o)=>{const s=o/100,c=n*s,r=l*s,i=window.innerWidth/2*s;e.style,t.style.transform=`translate(${c}px, ${r}px)`,t.style.bottom=`-${i}px`})}),console.log("parallaxMouse модуль загружен")})(),window.onscroll=function(){const e=function(){const e=document.querySelector(".parallax-wrap"),t=document.querySelector(".hero__fon"),o=document.querySelector(".header__content");return{move:function(e,t,o){const n=`translate3d(0, ${t/-o+"%"} , 0)`,l=e.style;l.transform=n,l.webkitTransform=n},init:function(n){t?(this.move(e,n,45),this.move(t,n,35),this.move(o,n,25)):(this.move(e,n,45),this.move(o,n,25))}}}(),t=window.pageYOffset;e.init(t)},console.log("parallaxScroll модуль загружен"),console.log("Подключено")}]);