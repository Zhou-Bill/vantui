/*! For license information please see 5061_6801398903a4bb765ab0.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[5061,8840],{"8840":function(o,e,n){n.r(e),n.d(e,{"a":function(){return createCommonjsModule},"b":function(){return i},"c":function(){return s},"g":function(){return getDefaultExportFromCjs}});var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function createCommonjsModule(o,e,n){return o(n={"path":e,"exports":{},"require":function require(o,e){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}var s=createCommonjsModule((function(o){!function(){var e={}.hasOwnProperty;function r(){for(var o=[],n=0;n<arguments.length;n++){var i=arguments[n];if(i){var s=typeof i;if("string"===s||"number"===s)o.push(i);else if(Array.isArray(i)){if(i.length){var u=r.apply(null,i);u&&o.push(u)}}else if("object"===s)if(i.toString===Object.prototype.toString)for(var a in i)e.call(i,a)&&i[a]&&o.push(a);else o.push(i.toString())}}return o.join(" ")}o.exports?(r.default=r,o.exports=r):window.classNames=r}()}))},"5061":function(o,e,n){n.r(e),n.d(e,{"taro_cover_view_core":function(){return u}});var i=n(7724),s=n(8840),u=function(){function t(o){(0,i.r)(this,o),this.onLongPress=(0,i.c)(this,"longpress",7),this.startTime=0,this.animation=void 0,this.hoverClass=void 0,this.hoverStartTime=50,this.hoverStayTime=400,this.hover=!1,this.touch=!1}return t.prototype.onTouchStart=function(){var o=this;this.hoverClass&&(this.touch=!0,setTimeout((function(){o.touch&&(o.hover=!0)}),this.hoverStartTime)),this.timeoutEvent=setTimeout((function(){o.onLongPress.emit()}),350),this.startTime=Date.now()},t.prototype.onTouchMove=function(){clearTimeout(this.timeoutEvent)},t.prototype.onTouchEnd=function(){var o=this;Date.now()-this.startTime<350&&clearTimeout(this.timeoutEvent),this.hoverClass&&(this.touch=!1,setTimeout((function(){o.touch||(o.hover=!1)}),this.hoverStayTime))},t.prototype.render=function(){var o,e=(0,s.c)(((o={})["".concat(this.hoverClass)]=this.hover,o)),n={};return this.animation&&(n.animation=this.animation,n["data-animation"]=this.animation),(0,i.h)(i.H,Object.assign({"class":e},n),(0,i.h)("slot",null))},t}();u.style="taro-cover-view-core{display:block}"}}]);