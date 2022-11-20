(()=>{var t={519:t=>{t.exports=class{constructor(t){let e=this;"object"==typeof t?e.initEventsOnElement(t):document.addEventListener("DOMContentLoaded",(function(){let i=document.querySelectorAll(t);for(let t of i)e.initEventsOnElement(t)}))}initEventsOnElement(t){t.addEventListener("keydown",(t=>this.onKeyDown(t))),t.addEventListener("input",(t=>this.onInput(t)),!1),t.addEventListener("paste",(t=>this.onPaste(t)),!1)}isRussianNumber(t){let e=this.inputNumberValue(t);return["7","8","9"].indexOf(e[0])>-1&&("7"===e[0]||"+"!==t.value[0])}inputNumberValue(t){return t.value.replace(/\D/g,"")}formatPhoneNumber(t){t.length>11&&(t=t.substring(0,11)),"9"===t[0]&&(t="7"+t);let e=("8"===t[0]?"8":"+7")+" ";return t.length>1&&(e+="("+t.substring(1,4)),t.length>=5&&(e+=") "+t.substring(4,7)),t.length>=8&&(e+="-"+t.substring(7,9)),t.length>=10&&(e+="-"+t.substring(9,11)),e}onPaste(t){let e=t.target,i=this.inputNumberValue(e),n=t.clipboardData||window.clipboardData;if(n){let t=n.getData("Text");/\D/g.test(t)&&(i||(i=t.replace(/\D/g,"")),e.value=this.formatPhoneNumber(i))}}onInput(t){if(!t.isTrusted)return;let e=t.target,i=this.inputNumberValue(e),n=e.selectionStart,s="";if(!i)return"+"===t.data?e.value="+":e.value="";if(e.value.length!==n){if("+"!==e.value[0]){let t=e.selectionStart;e.value="+"+e.value,e.selectionStart=e.selectionEnd=t+1}return t.data&&/\D/g.test(t.data)&&(e.value=this.formatPhoneNumber(i),e.selectionStart=e.selectionEnd=n-1),void(i.length>11&&(e.value=e.value.substring(0,n-1)+e.value.substring(n,19),e.selectionStart=e.selectionEnd=n-1))}return s=this.isRussianNumber(e)?this.formatPhoneNumber(i):"+"+i.substring(0,16),e.value=s,e.dispatchEvent(new Event("input")),!1}onKeyDown(t){let e=t.target.value.replace(/\D/g,"");if(8===t.keyCode&&e.length<=1)t.target.value="";else if([8,46].indexOf(t.keyCode)>-1&&e.length>1){let e="";switch(t.keyCode){case 8:e=t.target.value[t.target.selectionStart-1];break;case 46:e=t.target.value[t.target.selectionStart]}e&&/\D/.test(e)&&t.preventDefault()}}}},808:t=>{"use strict";var e=function(t){t&&t.parentNode&&t.parentNode.removeChild(t)},i=function(t,e){e=e||{},this.options=function(t,e){var i,n={};for(i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}({autoplay:!1,autoplayInterval:4e3,touchSwipe:!0,mouseSwipe:!0,keyEvents:!1,arrowButtons:!0,arrowButtonsContainer:null,previousArrowClass:"carousel-prev-button",nextArrowClass:"carousel-next-button",inactiveArrowClass:"hide",loadedClass:"loaded",activeSlideClass:"active",edgeFriction:.1},e),this.eventqueue={},this._element=t,this._slides=this._element.children,this.amountOfSlides=this._slides.length,this.activeSlideIndex=0,this.translateX=0,this.dragDistanceX=0,this.dragDistanceY=0,this.dragDuration=0,this.isBuilt=!1;var i=this;this.amountOfSlides>0&&function(t,e){var i=0,n=t.length;0===n&&e();for(var s=0;s<t.length;s++){var o=new Image;o.onload=function(){++i===n&&e()},o.src=t[s].getAttribute("src")}}(this._element.getElementsByTagName("img"),(function(){i.build()}))};i.prototype.on=function(t,e){void 0===this.eventqueue[t]&&(this.eventqueue[t]=[]),this.eventqueue[t].push(e)},i.prototype.trigger=function(t,e){void 0!==this.eventqueue[t]&&this.eventqueue[t].forEach((function(t){t(e)}))},i.prototype.build=function(){this.isBuilt||(this._wrap=document.createElement("div"),this._element.parentElement.insertBefore(this._wrap,this._element),this._wrap.appendChild(this._element),this._element.classList.add(this.options.loadedClass),this._firstSlide=this._slides[0],this.options.arrowButtons&&(this._prevButton=document.createElement("button"),this._prevButton.setAttribute("type","button"),this._prevButton.classList.add(this.options.previousArrowClass),this._nextButton=document.createElement("button"),this._nextButton.setAttribute("type","button"),this._nextButton.classList.add(this.options.nextArrowClass),this.options.arrowButtonsContainer?(this.options.arrowButtonsContainer.appendChild(this._prevButton),this.options.arrowButtonsContainer.appendChild(this._nextButton)):(this._wrap.appendChild(this._prevButton),this._wrap.appendChild(this._nextButton))),this.refresh(),this.bindEvents(),this.options.autoplay&&this.play(),this.isBuilt=!0)},i.prototype.destroy=function(){if(this.isBuilt){this.unbindEvents(),this.pause(),this._wrap.parentElement.appendChild(this._element),e(this._wrap),this._element.removeAttribute("style"),this._element.classList.remove(this.options.loadedClass),this.options.arrowButtons&&(e(this._prevButton),e(this._nextButton));for(var t=0;t<this._slides.length;t++)this._slides[t].removeAttribute("style"),this._slides[t].classList.remove(this.options.activeSlideClass);this.isBuilt=!1}},i.prototype.bindEvents=function(){var t,e,n,s,o,r,a=this;function l(t){a.pause(),a.goToNext(),t.preventDefault()}function u(t){a.pause(),a.goToPrevious(),t.preventDefault()}function d(t){37===t.keyCode?(a.pause(),a.goToPrevious()):39===t.keyCode&&(a.pause(),a.goToNext())}function h(i){r=!0;var o=i;i.changedTouches&&(o=i.changedTouches[0]),t=a.translateX,e=o.clientX,n=o.clientY,s=Date.now(),a.setTransition("none")}function c(i){if(r){var s=i;i.changedTouches&&(s=i.changedTouches[0]),a.dragDistanceX=s.clientX-e,a.dragDistanceY=s.clientY-n,a.setTranslateX(t+a.dragDistanceX),Math.abs(a.dragDistanceX)>0&&(o=Math.abs(a.dragDistanceY)/Math.abs(a.dragDistanceX)||0),(o>0&&o<1||"mousemove"===i.type)&&i.preventDefault()}}function v(t){r=!1,o=0,a.setTransition(""),a.setTransitionTimingFunction(""),a.dragDuration=Date.now()-s,a.adjustScrollPosition(),a.dragDistanceX=0,a.dragDistanceY=0,a.dragDuration=0}window.addEventListener("resize",(function(t){a.refresh()})),this.options.touchSwipe&&(this._wrap.addEventListener("touchstart",h),this._wrap.addEventListener("touchmove",c),this._wrap.addEventListener("touchend",v)),this.options.mouseSwipe&&(this._wrap.addEventListener("mousedown",h),this._wrap.addEventListener("mousemove",c),this._wrap.addEventListener("mouseup",v)),this.options.keyEvents&&document.addEventListener("keydown",d),this.options.arrowButtons&&(this._prevButton.addEventListener("click",u),this._nextButton.addEventListener("click",l)),i.prototype.unbindEvents=function(){window.removeEventListener("resize",reset),document.removeEventListener("keydown",d),a._wrap.removeEventListener("touchstart",h),a._wrap.removeEventListener("touchmove",c),a._wrap.removeEventListener("touchend",v),a._wrap.removeEventListener("mousedown",h),a._wrap.removeEventListener("mousemove",c),a._wrap.removeEventListener("mouseup",v),a.options.arrowButtons&&(a._prevButton.removeEventListener("click",u),a._nextButton.addEventListener("click",l))}},i.prototype.setTransition=function(t){this._element.style.transition=t,this._element.style.MozTransition=t,this._element.style.webkitTransition=t,this._element.style.msTransition=t,this._element.style.OTransition=t},i.prototype.setTransitionTimingFunction=function(t){this._element.style.transitionTimingFunction=t,this._element.style.MozTransitionTimingFunction=t,this._element.style.webkitTransitionTimingFunction=t,this._element.style.msTransitionTimingFunction=t,this._element.style.OTransitionTimingFunction=t},i.prototype.setTransitionDuration=function(t){this._element.style.transitionDuration=t+"ms",this._element.style.MozTransitionDuration=t+"ms",this._element.style.webkitTransitionDuration=t+"ms",this._element.style.msTransitionDuration=t+"ms",this._element.style.OTransitionDuration=t+"ms"},i.prototype.setTranslateX=function(t){this.translateX=t,this._element.style.transform="translate3d("+this.translateX+"px, 0, 0)",this._element.style.MozTransform="translateX("+this.translateX+"px)",this._element.style.webkitTransform="translate3d("+this.translateX+"px, 0, 0)",this._element.style.msTransform="translateX("+this.translateX+"px)",this._element.style.OTransform="translateX("+this.translateX+"px)"},i.prototype.adjustScrollPosition=function(){var t=Math.abs(this.dragDistanceX);if(t>this.slideWidth*this.options.edgeFriction){var e=this.dragDuration/t;this.setTransitionDuration(200*e);var i=Math.ceil(t/this.slideWidth);this.dragDistanceX<0&&(this.isOnRightEdge?this.goTo(this.amountOfSlides-1):this.goTo(this.activeSlideIndex+i)),this.dragDistanceX>0&&(this.isOnLeftEdge?this.goTo(0):this.goTo(this.activeSlideIndex-i))}else this.goTo(this.activeSlideIndex)},i.prototype.refresh=function(){for(var t=0;t<this._slides.length;t++)this._slides[t].removeAttribute("style");for(this._wrap.removeAttribute("style"),this._element.removeAttribute("style"),this.elementWidth=this._element.offsetWidth,this.slideWidth=this._firstSlide.offsetWidth,this.slideHeight=this._firstSlide.offsetHeight,this.amountVisible=Math.round(this.elementWidth/this.slideWidth),this.totalWidth=this.amountOfSlides*this.slideWidth,this._wrap.style.width=this.elementWidth+"px",this._wrap.style.position="relative",this._wrap.style.overflow="hidden",this._wrap.style.height=this.slideHeight+"px",this._element.style.width=this.totalWidth+"px",t=0;t<this._slides.length;t++)this._slides[t].style.float="left",this._slides[t].style.width=this.slideWidth+"px";this.refreshState()},i.prototype.refreshState=function(){var t=Math.max(-this.activeSlideIndex*this.slideWidth,-(this.totalWidth-this.elementWidth));t=Math.min(0,t),this.setTranslateX(t);for(var e=0;e<this._slides.length;e++)this._slides[e].classList.remove(this.options.activeSlideClass);this._slides[this.activeSlideIndex].classList.add(this.options.activeSlideClass),this.isOnLeftEdge=0===this.activeSlideIndex,this.isOnRightEdge=this.amountOfSlides-this.activeSlideIndex<=this.amountVisible,this.refreshButtons()},i.prototype.refreshButtons=function(){this.options.arrowButtons&&(this._prevButton.classList.remove("hide"),this._nextButton.classList.remove("hide"),this.isOnLeftEdge&&this._prevButton.classList.add("hide"),this.isOnRightEdge&&this._nextButton.classList.add("hide"))},i.prototype.goToNext=function(){this.goTo(this.activeSlideIndex+1)},i.prototype.goToPrevious=function(){this.goTo(this.activeSlideIndex-1)},i.prototype.goTo=function(t){t>=0&&t<this.amountOfSlides&&(this.activeSlideIndex=t,this.refreshState()),t<0?this.goTo(this.amountOfSlides-1):t>=this.amountOfSlides?this.goTo(0):this.trigger("goTo",{index:t})},i.prototype.play=function(){var t=this;this.playInterval=setInterval((function(){t.goToNext()}),this.options.autoplayInterval)},i.prototype.pause=function(){clearInterval(this.playInterval)},t.exports=i}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,i),o.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=i(808),e=i.n(t),n=i(519),s=i.n(n),o="+7 (___) ___-__-__";document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".phone-js").forEach((function(t){return function(t){var e=t.querySelector(".field-input__mask-end"),i=t.querySelector(".field-input__mask-start"),n=t.querySelector("input");new(s())(n),n.addEventListener("focus",(function(){n.value||(n.value="+7 (",n.dispatchEvent(new Event("input"))),requestAnimationFrame((function(){e.innerText=o.substring(n.value.length,o.length),i.innerText=n.value})),requestAnimationFrame((function(){n.setSelectionRange(n.value.length,n.value.length)}))})),n.addEventListener("blur",(function(){"+7 ("===n.value.trim()&&(n.value="",n.dispatchEvent(new Event("input")))})),n.addEventListener("keydown",(function(){requestAnimationFrame((function(){e.innerText=o.substring(n.value.length,o.length),i.innerText=n.value}))})),n.addEventListener("change",console.log)}(t)})),function(t){var e,i=null,n=null;function s(t,e,i){t.style.transform="translate(".concat(e,"px, ").concat(i,"px)")}document.querySelectorAll(t.elementsQuery).forEach((function(o){o.addEventListener("mousedown",(function(r){if(r.target.classList.contains(t.dragTargetClassName)){var a=o.children[0];e=o;var l=a.getBoundingClientRect();i=document.createElement("div"),n={offsetX:r.pageX-(window.scrollX+l.left),offsetY:r.pageY-(window.scrollY+l.top)},i.classList.add("draggable-pseudo-js"),i.appendChild(a.cloneNode(!0)),i.style.width=l.width+"px",i.style.height=l.height+"px",document.body.style.cursor="grabbing",s(i,r.pageX-n.offsetX,r.pageY-n.offsetY),document.body.appendChild(i)}})),o.addEventListener("mouseenter",(function(t){if(i&&e!==t.target){var n=t.target.children[0],s=e.children[0];t.target.innerHTML="",t.target.appendChild(s),e.innerHTML="",e.appendChild(n),e=t.target}}))})),document.addEventListener("mouseup",(function(t){i&&i.remove(),i=null,n=null,document.body.style.cursor=""})),document.addEventListener("mousemove",(function(t){requestAnimationFrame((function(){i&&n&&s(i,t.pageX-n.offsetX,t.pageY-n.offsetY)}))}))}({elementsQuery:".draggable-js",dragTargetClassName:"draggable-target-js"}),new(e())(document.querySelector(".carousel"),{autoplay:!1});var t=document.querySelector(".form-offer .field-input__input"),i=document.querySelector(".form-offer .btn"),n=document.querySelector('input[type="tel"]');function r(t){return t.closest(".field-input")}t.addEventListener("focus",(function(){t.classList.remove("valid","invalid"),r(t).querySelector(".error").textContent=""})),n.addEventListener("focus",(function(){n.classList.remove("valid","invalid"),r(n).querySelector(".error").textContent=""})),t.addEventListener("blur",(function(){t.value.trim()?t.classList.add("valid"):(t.classList.remove("valid"),t.classList.remove("invalid"),r(t).querySelector(".error").textContent="")})),n.addEventListener("blur",(function(){n.value.trim()?n.classList.add("valid"):(n.classList.remove("valid"),n.classList.remove("invalid"),r(n).querySelector(".error").textContent="")})),i.addEventListener("click",(function(){t.value.trim()&&/[^-А-ЯA-Z\x27а-яa-z]/.test(t.value)?(t.classList.remove("invalid"),t.classList.add("valid"),r(t).querySelector(".error").textContent=""):(t.classList.add("invalid"),t.classList.remove("valid"),r(t).querySelector(".error").textContent="Это поле должно быть заполнено"),n.value.trim()&&/(\+7|8)[\s(]*\d{3}[)\s]*\d{3}[\s-]?\d{2}[\s-]?\d{2}/.test(n.value)?(n.classList.remove("invalid"),n.classList.add("valid"),r(n).querySelector(".error").textContent=""):(n.classList.add("invalid"),n.classList.remove("valid"),r(n).querySelector(".error").textContent="Это поле должно быть заполнено")}))}))})()})();