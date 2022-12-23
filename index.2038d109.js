!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var n={};function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e};var i=function(){"use strict";function r(n){var i=n.selector,s=n.hidden,a=void 0!==s&&s;e(t)(this,r),this.refs=this.getRefs(i),a&&this.hide()}return e(n)(r,[{key:"getRefs",value:function(e){var t={};return t.button=document.querySelector(e),t.spText=t.button.querySelector(".span-text"),t.spinner=t.button.querySelector(".spin"),t}},{key:"enable",value:function(){this.refs.button.disabled=!1,this.refs.spText.textContent="Ще",this.refs.spinner.classList.add("is-hidden")}},{key:"disabled",value:function(){this.refs.button.disabled=!0,this.refs.spText.textContent="Завантажую",this.refs.spinner.classList.remove("is-hidden")}},{key:"show",value:function(){this.refs.button.classList.remove("is-hidden")}},{key:"hide",value:function(){this.refs.button.classList.add("is-hidden")}}]),r}(),s=function(){"use strict";function r(){e(t)(this,r),this.searchQuery="",this.page=1}return e(n)(r,[{key:"fetchDataItem",value:function(){var e=this,t={headers:{Authorization:"002081a311064500ac33bdf8092d1261"}},n="".concat("https://newsapi.org/v2/","everything?q=").concat(this.searchQuery,"&pageSize=5&page=").concat(this.page);return fetch(n,t).then((function(e){return e.json()})).then((function(t){return e.incrementPage(),t.articles}))}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}},{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}}]),r}(),a={formSearchEl:document.querySelector(".js-search"),inputEl:document.querySelector(".form-control"),btnFormEl:document.querySelector(".btn-form"),galleryListEl:document.querySelector(".js-articles-container")},u=new i({selector:'[data-action="load-more"]',hidden:!0});a.formSearchEl.addEventListener("submit",(function(e){if(e.preventDefault(),o.query=e.currentTarget.elements.query.value,""===o.query)return alert("пошук не коректний");u.show(),o.resetPage(),a.galleryListEl.innerHTML="",c()})),u.refs.button.addEventListener("click",c);var o=new s;function c(){u.disabled(),o.fetchDataItem().then((function(e){a.galleryListEl.insertAdjacentHTML("beforeend",e.map((function(e){return'<li class="gallery__item item">\n<div class="thumb-img"><img src="'.concat(e.urlToImage,'" alt=""></div>\n<h3 class="img-title">').concat(e.author,'</h3>\n<p class="img-text">').concat(e.description,"</p>")})).join("")),u.enable()}))}}();
//# sourceMappingURL=index.2038d109.js.map
