!function t(e,n,o){function i(r,a){if(!n[r]){if(!e[r]){var c="function"==typeof require&&require;if(!a&&c)return c(r,!0);if(s)return s(r,!0);var u=new Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[r]={exports:{}};e[r][0].call(l.exports,function(t){var n=e[r][1][t];return i(n?n:t)},l,l.exports,t,e,n,o)}return n[r].exports}for(var s="function"==typeof require&&require,r=0;r<o.length;r++)i(o[r]);return i}({1:[function(t){var e=t("slideout");"tipbox.in"!=window.location.host||window.location.hash||(window.location.href="https://tipbox.is"),window.setCurrentView=function(t){var e,n=function(){return!(window&&window.crypto&&window.crypto.getRandomValues&&window.Uint8Array)},o=window.currentView||"homeView";t.match(/^#create/)?e="createView":t.match(/^#compose/)?(e="composeView",window.ComposeViewController&&window.ComposeViewController.init()):e="homeView","homeView"!=e&&n()&&(e="unsupportedBrowser"),document.querySelector("#"+o).classList.add("hidden"),document.querySelector("#"+e).classList.remove("hidden");var i=document.querySelector(".modal.active");return i&&s("#"+i.id),window.currentView=e,e},window.setCurrentView(window.location.hash),window.onhashchange=function(){window.setCurrentView(window.location.hash)};for(var n=document.querySelectorAll(".openModal"),o=0;o<n.length;o++){var i=n[o];i.addEventListener("click",function(t){return t.preventDefault(),s("#"+this.dataset.modal),!1})}var s=function(t){var e=document.querySelector(t);if(e.classList.contains("active"))return e.style.zIndex=0,e.classList.toggle("active");var n=document.querySelectorAll(".modal.active"),o=15;n.length>0&&(o=10*(n.length+1)),e.style.zIndex=o,e.classList.toggle("active")};window.slideout=new e({panel:document.getElementById("content"),menu:document.getElementById("menu"),side:"right"}),document.getElementById("open-menu").addEventListener("click",function(){slideout.toggle()})},{slideout:4}],2:[function(t,e){"use strict";function n(t,e,n){function i(t){a=t,s()}function s(){c||(o(r),c=!0)}function r(){n.call(t,a),c=!1}var a,c=!1;return t.addEventListener(e,i,!1),i}var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();e.exports=n},{}],3:[function(t,e,n){"use strict";var o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};n.__esModule=!0;var i=function(){function t(){o(this,t)}return t.prototype.on=function(t,e){return this._eventCollection=this._eventCollection||{},this._eventCollection[t]=this._eventCollection[t]||[],this._eventCollection[t].push(e),this},t.prototype.once=function(t,e){function n(){o.off(t,n),e.apply(this,arguments)}var o=this;return n.listener=e,this.on(t,n),this},t.prototype.off=function(t,e){var n=void 0;return this._eventCollection&&(n=this._eventCollection[t])?(n.forEach(function(t,o){(t===e||t.listener===e)&&n.splice(o,1)}),0===n.length&&delete this._eventCollection[t],this):this},t.prototype.emit=function(t){for(var e=this,n=arguments.length,o=Array(n>1?n-1:0),i=1;n>i;i++)o[i-1]=arguments[i];var s=void 0;return this._eventCollection&&(s=this._eventCollection[t])?(s=s.slice(0),s.forEach(function(t){return t.apply(e,o)}),this):this},t}();n["default"]=i,e.exports=n["default"]},{}],4:[function(t,e){"use strict";function n(t,e){for(var n in e)e[n]&&(t[n]=e[n]);return t}function o(t,e){t.prototype=n(t.prototype||{},e.prototype)}function i(t){t=t||{},this._startOffsetX=0,this._currentOffsetX=0,this._opening=!1,this._moved=!1,this._opened=!1,this._preventOpen=!1,this._touch=void 0===t.touch?!0:t.touch&&!0,this.panel=t.panel,this.menu=t.menu,-1===this.panel.className.search("slideout-panel")&&(this.panel.className+=" slideout-panel"),-1===this.menu.className.search("slideout-menu")&&(this.menu.className+=" slideout-menu"),this._fx=t.fx||"ease",this._duration=parseInt(t.duration,10)||300,this._tolerance=parseInt(t.tolerance,10)||70,this._padding=this._translateTo=parseInt(t.padding,10)||256,this._orientation="right"===t.side?-1:1,this._translateTo*=this._orientation,this._touch&&this._initTouchEvents()}var s,r=t("decouple"),a=t("emitter"),c=!1,u=window.document,l=u.documentElement,h=window.navigator.msPointerEnabled,p={start:h?"MSPointerDown":"touchstart",move:h?"MSPointerMove":"touchmove",end:h?"MSPointerUp":"touchend"},d=function(){var t=/^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/,e=u.getElementsByTagName("script")[0].style;for(var n in e)if(t.test(n))return"-"+n.match(t)[0].toLowerCase()+"-";return"WebkitOpacity"in e?"-webkit-":"KhtmlOpacity"in e?"-khtml-":""}();o(i,a),i.prototype.open=function(){var t=this;return this.emit("beforeopen"),-1===l.className.search("slideout-open")&&(l.className+=" slideout-open"),this._setTransition(),this._translateXTo(this._translateTo),this._opened=!0,setTimeout(function(){t.panel.style.transition=t.panel.style["-webkit-transition"]="",t.emit("open")},this._duration+50),this},i.prototype.close=function(){var t=this;return this.isOpen()||this._opening?(this.emit("beforeclose"),this._setTransition(),this._translateXTo(0),this._opened=!1,setTimeout(function(){l.className=l.className.replace(/ slideout-open/,""),t.panel.style.transition=t.panel.style["-webkit-transition"]=t.panel.style[d+"transform"]=t.panel.style.transform="",t.emit("close")},this._duration+50),this):this},i.prototype.toggle=function(){return this.isOpen()?this.close():this.open()},i.prototype.isOpen=function(){return this._opened},i.prototype._translateXTo=function(t){return this._currentOffsetX=t,this.panel.style[d+"transform"]=this.panel.style.transform="translateX("+t+"px)",this},i.prototype._setTransition=function(){return this.panel.style[d+"transition"]=this.panel.style.transition=d+"transform "+this._duration+"ms "+this._fx,this},i.prototype._initTouchEvents=function(){var t=this;return this._onScrollFn=r(u,"scroll",function(){t._moved||(clearTimeout(s),c=!0,s=setTimeout(function(){c=!1},250))}),this._preventMove=function(e){t._moved&&e.preventDefault()},u.addEventListener(p.move,this._preventMove),this._resetTouchFn=function(e){"undefined"!=typeof e.touches&&(t._moved=!1,t._opening=!1,t._startOffsetX=e.touches[0].pageX,t._preventOpen=!t._touch||!t.isOpen()&&0!==t.menu.clientWidth)},this.panel.addEventListener(p.start,this._resetTouchFn),this._onTouchCancelFn=function(){t._moved=!1,t._opening=!1},this.panel.addEventListener("touchcancel",this._onTouchCancelFn),this._onTouchEndFn=function(){t._moved&&(t.emit("translateend"),t._opening&&Math.abs(t._currentOffsetX)>t._tolerance?t.open():t.close()),t._moved=!1},this.panel.addEventListener(p.end,this._onTouchEndFn),this._onTouchMoveFn=function(e){if(!c&&!t._preventOpen&&"undefined"!=typeof e.touches){var n=e.touches[0].clientX-t._startOffsetX,o=t._currentOffsetX=n;if(!(Math.abs(o)>t._padding)&&Math.abs(n)>20){t._opening=!0;var i=n*t._orientation;if(t._opened&&i>0||!t._opened&&0>i)return;t._moved||t.emit("translatestart"),0>=i&&(o=n+t._padding*t._orientation,t._opening=!1),t._moved||-1!==l.className.search("slideout-open")||(l.className+=" slideout-open"),t.panel.style[d+"transform"]=t.panel.style.transform="translateX("+o+"px)",t.emit("translate",o),t._moved=!0}}},this.panel.addEventListener(p.move,this._onTouchMoveFn),this},i.prototype.enableTouch=function(){return this._touch=!0,this},i.prototype.disableTouch=function(){return this._touch=!1,this},i.prototype.destroy=function(){return this.close(),u.removeEventListener(p.move,this._preventMove),this.panel.removeEventListener(p.start,this._resetTouchFn),this.panel.removeEventListener("touchcancel",this._onTouchCancelFn),this.panel.removeEventListener(p.end,this._onTouchEndFn),this.panel.removeEventListener(p.move,this._onTouchMoveFn),u.removeEventListener("scroll",this._onScrollFn),this.open=this.close=function(){},this},e.exports=i},{decouple:2,emitter:3}]},{},[1]);
//# sourceMappingURL=navigation.compiled.js.map