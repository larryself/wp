!function(){var e={790:function(){var e=document.querySelector(".js-enter-modal"),t=document.querySelector(".page-body"),n=document.querySelector(".js-modal-form"),r=document.querySelector(".js-logguot"),a=document.querySelector(".js-current-user-name"),o=document.querySelector(".js-modal-window"),i=document.querySelector(".js-form-change-name"),c="autorized";if(localStorage.getItem(c)){var s=localStorage.getItem(c);l(JSON.parse(s).user)}function u(){o.matches(".modal_active")||(o.classList.add("modal_active"),t.classList.add("page-body_not-overflow"))}function l(t){a.textContent=t,a.classList.add("header-login__user-name_active"),e.classList.remove("header-login__btn_active"),r.classList.add("header-login__btn_active")}function d(e){var t={authorized:!0,user:e};JSON.stringify(t),localStorage.setItem(c,JSON.stringify(t))}function m(){o.classList.remove("modal_active"),t.classList.remove("page-body_not-overflow")}a.addEventListener("click",(function(e){var t=document.querySelector(".js-change-name-input");t.value=a.textContent,t.classList.add("header-login__input_active"),t.focus(),a.classList.remove("header-login__user-name_active")})),i.addEventListener("submit",(function(e){e.preventDefault();var t=document.querySelector(".js-change-name-input");d(t.value),a.textContent=t.value,t.classList.remove("header-login__input_active"),a.classList.add("header-login__user-name_active"),i.reset()})),document.querySelector(".js-change-name-input").addEventListener("blur",(function(){i.requestSubmit()})),o.addEventListener("click",(function(e){if(e.target.classList.contains("modal"))return m();u()})),e.addEventListener("click",(function(){u()})),n.addEventListener("submit",(function(e){var t;e.preventDefault(),t=document.querySelector(".js-form-login").value,document.querySelector(".js-form-checkbox").checked&&d(t),l(t),m(),n.reset()})),r.addEventListener("click",(function(){r.classList.remove("header-login__btn_active"),e.classList.add("header-login__btn_active"),localStorage.clear(),a.innerHTML=""}))},503:function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(t){var n=e(document.querySelectorAll("[data-trigger]")),r=e(document.querySelectorAll("[data-content]"));n.forEach((function(e,n){e.dataset.trigger!=t?e.classList.contains("main-nav__item_active")&&(e.classList.remove("main-nav__item_active"),r[n].classList.remove("main-nav__section_active")):(e.classList.add("main-nav__item_active"),r[n].classList.add("main-nav__section_active"),window.location.hash=t)}))}window.location.hash&&n(window.location.hash.slice(1)),document.querySelectorAll(".js-tabs").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),n(e.target.closest(".js-tabs").dataset.trigger)}))}))}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";n(790),n(503)}()}();