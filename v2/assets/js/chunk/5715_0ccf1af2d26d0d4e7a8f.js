/*! For license information please see 5715_0ccf1af2d26d0d4e7a8f.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[5715],{"7430":function(t,r,o){o.d(r,{"pf":function(){return a},"G7":function(){return u},"Ho":function(){return l},"xv":function(){return h},"zx":function(){return d},"l0":function(){return p},"gx":function(){return v},"C3":function(){return y},"Ee":function(){return x},"nk":function(){return m},"Xz":function(){return g},"gO":function(){return b}});var i=o(2784),c=o(4123),a=((0,c.Z)("taro-cover-image-core"),(0,c.Z)("taro-cover-view-core"),(0,c.Z)("taro-match-media-core"),(0,c.Z)("taro-movable-area-core"),(0,c.Z)("taro-movable-view-core"),(0,c.Z)("taro-page-container-core"),(0,c.Z)("taro-root-portal-core"),(0,c.Z)("taro-scroll-view-core")),u=((0,c.Z)("taro-share-element-core"),(0,c.Z)("taro-swiper-core"),(0,c.Z)("taro-swiper-item-core"),(0,c.Z)("taro-view-core")),l=((0,c.Z)("taro-icon-core"),(0,c.Z)("taro-progress-core"),(0,c.Z)("taro-rich-text-core")),h=(0,c.Z)("taro-text-core"),d=(0,c.Z)("taro-button-core"),p=((0,c.Z)("taro-checkbox-core"),(0,c.Z)("taro-checkbox-group-core"),(0,c.Z)("taro-editor-core"),(0,c.Z)("taro-form-core")),v=((0,c.Z)("taro-keyboard-accessory-core"),(0,c.Z)("taro-label-core"),(0,c.Z)("taro-picker-core"),(0,c.Z)("taro-picker-view-core"),(0,c.Z)("taro-picker-view-column-core"),(0,c.Z)("taro-radio-core"),(0,c.Z)("taro-radio-group-core"),(0,c.Z)("taro-slider-core"),(0,c.Z)("taro-switch-core"),(0,c.Z)("taro-textarea-core")),y=((0,c.Z)("taro-functional-page-navigator-core"),(0,c.Z)("taro-navigator-core")),x=((0,c.Z)("taro-navigation-bar-core"),(0,c.Z)("taro-audio-core"),(0,c.Z)("taro-camera-core"),(0,c.Z)("taro-image-core")),m=((0,c.Z)("taro-live-player-core"),(0,c.Z)("taro-live-pusher-core"),(0,c.Z)("taro-video-core")),g=((0,c.Z)("taro-voip-room-core"),(0,c.Z)("taro-map-core"),(0,c.Z)("taro-canvas-core")),b=((0,c.Z)("taro-ad-core"),(0,c.Z)("taro-ad-custom-core"),(0,c.Z)("taro-official-account-core"),(0,c.Z)("taro-open-data-core"),(0,c.Z)("taro-web-view-core"),(0,c.Z)("taro-page-meta-core"),i.Fragment);(0,c.Z)("taro-custom-wrapper-core")},"4123":function(t,r,o){var i=o(6666),c=o(6234),a=o(6522),u=o(9249),l=o(7371),h=o(5754),d=o(1987),p=o(5058),v=o(8079),y=o(2784);function ownKeys(t,r){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),o.push.apply(o,i)}return o}function _objectSpread(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(o),!0).forEach((function(r){(0,i.Z)(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))}))}return t}function _createSuper(t){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function _createSuperInternal(){var o,i=(0,p.Z)(t);if(r){var c=(0,p.Z)(this).constructor;o=Reflect.construct(i,arguments,c)}else o=i.apply(this,arguments);return(0,d.Z)(this,o)}}y.createElement;var x="taro-scroll-view-core",m=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(t,r,o){/^--/.test(r)?t.style.setProperty(r,o):"number"!=typeof o||m.test(r)?t.style[r]=o:t.style[r]=o+"px"}function updateProp(t,r,o,i,c){var a=t.ref.current,u=c[o],l=i?i[o]:void 0;if("children"!==o)if("classname"!==o.toLowerCase()){if("style"!==o){if(/^data-.+/.test(o)&&a.setAttribute(o,u),r===x){if("scrollTop"===o)return void(a.mpScrollTop=u);if("scrollLeft"===o)return void(a.mpScrollLeft=u);if("scrollIntoView"===o)return void(a.mpScrollIntoView=u)}if("function"==typeof u&&o.match(/^on[A-Z]/)){var h=o.substr(2).toLowerCase(),d=u;return r===x&&"scroll"===h&&(d=function fn(t){t instanceof CustomEvent&&u.apply(null,Array.from(arguments))}),t.eventHandlers.push([h,d]),a.addEventListener(h,d)}return"string"==typeof u||"number"==typeof u?(a.setAttribute(o,u),void(a[o]=u)):"boolean"==typeof u?u?(a[o]=!0,a.setAttribute(o,u)):(a[o]=!1,a.removeAttribute(o)):void(a[o]=u)}if("string"==typeof u)return void a.setAttribute(o,u);if(!u)return void a.removeAttribute(o);if(i)if("string"==typeof l)a.style.cssText="";else for(var p in l)updateStyle(a,p,"");for(var y in u)updateStyle(a,y,u[y])}else a.className=i?function getClassName(t,r,o){var i=Array.from(t.classList),c=(r.className||r.class||"").split(" "),a=(o.className||o.class||"").split(" "),u=[];return i.forEach((function(t){a.indexOf(t)>-1?(u.push(t),a=a.filter((function(r){return r!==t}))):-1===c.indexOf(t)&&u.push(t)})),(u=[].concat((0,v.Z)(u),(0,v.Z)(a))).join(" ")}(a,i,c):u}r.Z=function reactifyWebComponent(t){var r=function(r){(0,h.Z)(Index,r);var o=_createSuper(Index);function Index(t){var r;return(0,u.Z)(this,Index),(r=o.call(this,t)).eventHandlers=[],r.ref=(0,y.createRef)(),r}return(0,l.Z)(Index,[{"key":"update","value":function update(r){var o=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(r||{}).forEach((function(i){"children"===i||"key"===i||i in o.props||updateProp(o,t,i,r,o.props)})),Object.keys(this.props).forEach((function(i){updateProp(o,t,i,r,o.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(t){this.update(t)}},{"key":"componentDidMount","value":function componentDidMount(){var t=this.props.forwardRef;"function"==typeof t?t(this.ref.current):t&&"object"===(0,a.Z)(t)&&t.hasOwnProperty("current")?t.current=this.ref.current:"string"==typeof t&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var t=this;this.eventHandlers.forEach((function(r){var o=(0,c.Z)(r,2),i=o[0],a=o[1];t.ref.current&&t.ref.current.removeEventListener(i,a)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var r=this.props,o=r.children,i=r.dangerouslySetInnerHTML,c={"ref":this.ref};return i&&(c.dangerouslySetInnerHTML=i),(0,y.createElement)(t,c,o)}}]),Index}(y.Component);return y.forwardRef((function(t,o){return y.createElement(r,_objectSpread(_objectSpread({},t),{},{"forwardRef":o}))}))}},"7559":function(t,r,o){o.d(r,{"F":function(){return h}});var i=o(2723),c=o(9147);function _createForOfIteratorHelper(t,r){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=(0,c.Z)(t))||r&&t&&"number"==typeof t.length){o&&(t=o);var i=0,a=function F(){};return{"s":a,"n":function n(){return i>=t.length?{"done":!0}:{"done":!1,"value":t[i++]}},"e":function e(t){throw t},"f":a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,l=!0,h=!1;return{"s":function s(){o=o.call(t)},"n":function n(){var t=o.next();return l=t.done,t},"e":function e(t){h=!0,u=t},"f":function f(){try{l||null==o.return||o.return()}finally{if(h)throw u}}}}var a=o(9249),u=o(7371),__awaiter=function(t,r,o,i){return new(o||(o=Promise))((function(c,a){function fulfilled(t){try{step(i.next(t))}catch(t){a(t)}}function rejected(t){try{step(i.throw(t))}catch(t){a(t)}}function step(t){t.done?c(t.value):function adopt(t){return t instanceof o?t:new o((function(r){r(t)}))}(t.value).then(fulfilled,rejected)}step((i=i.apply(t,r||[])).next())}))},l={"top":"top","bottom":"bottom","middle":"middle","normal":"alphabetic"},h=function(){function CanvasContext(t,r){(0,a.Z)(this,CanvasContext),this.actions=[],this.canvas=t,this.ctx=r}return(0,u.Z)(CanvasContext,[{"key":"ctx","get":function get(){return this.__raw__||{}},"set":function set(t){this.__raw__=t}},{"key":"emptyActions","value":function emptyActions(){this.actions.length=0}},{"key":"enqueueActions","value":function enqueueActions(t){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];this.actions.push({"func":t,"args":o})}},{"key":"fillStyle","get":function get(){return this.ctx.fillStyle},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.fillStyle=t}))}},{"key":"font","get":function get(){return this.ctx.font},"set":function set(t){this.ctx.font=t}},{"key":"globalAlpha","get":function get(){return this.ctx.globalAlpha},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.globalAlpha=t}))}},{"key":"globalCompositeOperation","get":function get(){return this.ctx.globalCompositeOperation},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.globalCompositeOperation=t}))}},{"key":"lineCap","get":function get(){return this.ctx.lineCap},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.lineCap=t}))}},{"key":"lineDashOffset","get":function get(){return this.ctx.lineDashOffset},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.lineDashOffset=t}))}},{"key":"lineJoin","get":function get(){return this.ctx.lineJoin},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.lineJoin=t}))}},{"key":"lineWidth","get":function get(){return this.ctx.lineWidth},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.lineWidth=t}))}},{"key":"miterLimit","get":function get(){return this.ctx.miterLimit},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.miterLimit=t}))}},{"key":"shadowBlur","get":function get(){return this.ctx.shadowBlur},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.shadowBlur=t}))}},{"key":"shadowColor","get":function get(){return this.ctx.shadowColor},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.shadowColor=t}))}},{"key":"shadowOffsetX","get":function get(){return this.ctx.shadowOffsetX},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.shadowOffsetX=t}))}},{"key":"shadowOffsetY","get":function get(){return this.ctx.shadowOffsetY},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.shadowOffsetY=t}))}},{"key":"strokeStyle","get":function get(){return this.ctx.strokeStyle},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.strokeStyle=t}))}},{"key":"textAlign","get":function get(){return this.ctx.textAlign},"set":function set(t){this.ctx.textAlign=t}},{"key":"textBaseline","get":function get(){return this.ctx.textBaseline},"set":function set(t){this.ctx.textBaseline=t}},{"key":"direction","get":function get(){return this.ctx.direction},"set":function set(t){this.ctx.direction=t}},{"key":"imageSmoothingEnabled","get":function get(){return this.ctx.imageSmoothingEnabled},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.imageSmoothingEnabled=t}))}},{"key":"imageSmoothingQuality","get":function get(){return this.ctx.imageSmoothingQuality},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.imageSmoothingQuality=t}))}},{"key":"filter","get":function get(){return this.ctx.filter},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.filter=t}))}},{"key":"arc","value":function arc(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.enqueueActions.apply(this,[this.ctx.arc].concat(r))}},{"key":"arcTo","value":function arcTo(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.enqueueActions.apply(this,[this.ctx.arcTo].concat(r))}},{"key":"beginPath","value":function beginPath(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.enqueueActions.apply(this,[this.ctx.beginPath].concat(r))}},{"key":"bezierCurveTo","value":function bezierCurveTo(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.enqueueActions.apply(this,[this.ctx.bezierCurveTo].concat(r))}},{"key":"clearRect","value":function clearRect(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.enqueueActions.apply(this,[this.ctx.clearRect].concat(r))}},{"key":"clip","value":function clip(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.enqueueActions.apply(this,[this.ctx.clip].concat(r))}},{"key":"closePath","value":function closePath(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.enqueueActions.apply(this,[this.ctx.closePath].concat(r))}},{"key":"createPattern","value":function createPattern(t,r){return this.createPattern(t,r)}},{"key":"draw","value":function draw(t,r){return __awaiter(this,void 0,void 0,(0,i.Z)().mark((function _callee(){var o,c,a,u,l;return(0,i.Z)().wrap((function _callee$(i){for(;;)switch(i.prev=i.next){case 0:i.prev=0,t||this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),o=_createForOfIteratorHelper(this.actions),i.prev=3,o.s();case 5:if((c=o.n()).done){i.next=11;break}return a=c.value,u=a.func,l=a.args,i.next=9,u.apply(this.ctx,l);case 9:i.next=5;break;case 11:i.next=16;break;case 13:i.prev=13,i.t0=i.catch(3),o.e(i.t0);case 16:return i.prev=16,o.f(),i.finish(16);case 19:this.emptyActions(),r&&r(),i.next=26;break;case 23:throw i.prev=23,i.t1=i.catch(0),{"errMsg":i.t1.message};case 26:case"end":return i.stop()}}),_callee,this,[[0,23],[3,13,16,19]])})))}},{"key":"drawImage","value":function drawImage(t){for(var r=this,o=arguments.length,i=new Array(o>1?o-1:0),c=1;c<o;c++)i[c-1]=arguments[c];this.enqueueActions((function(){var o;if("string"==typeof t){var c=new Image;return c.src=t,new Promise((function(t,o){c.onload=function(){var o;(o=r.ctx).drawImage.apply(o,[c].concat(i)),t()},c.onerror=o}))}(o=r.ctx).drawImage.apply(o,[t].concat(i))}))}},{"key":"fill","value":function fill(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.enqueueActions.apply(this,[this.ctx.fill].concat(r))}},{"key":"fillRect","value":function fillRect(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.enqueueActions.apply(this,[this.ctx.fillRect].concat(r))}},{"key":"fillText","value":function fillText(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.enqueueActions.apply(this,[this.ctx.fillText].concat(r))}},{"key":"lineTo","value":function lineTo(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.enqueueActions.apply(this,[this.ctx.lineTo].concat(r))}},{"key":"moveTo","value":function moveTo(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.enqueueActions.apply(this,[this.ctx.moveTo].concat(r))}},{"key":"quadraticCurveTo","value":function quadraticCurveTo(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.enqueueActions.apply(this,[this.ctx.quadraticCurveTo].concat(r))}},{"key":"rect","value":function rect(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.enqueueActions.apply(this,[this.ctx.rect].concat(r))}},{"key":"restore","value":function restore(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.enqueueActions.apply(this,[this.ctx.restore].concat(r))}},{"key":"rotate","value":function rotate(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.enqueueActions.apply(this,[this.ctx.rotate].concat(r))}},{"key":"save","value":function save(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.enqueueActions.apply(this,[this.ctx.save].concat(r))}},{"key":"scale","value":function scale(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.enqueueActions.apply(this,[this.ctx.scale].concat(r))}},{"key":"setFillStyle","value":function setFillStyle(t){var r=this;this.enqueueActions((function(){r.ctx.fillStyle=t}))}},{"key":"setFontSize","value":function setFontSize(t){this.font="".concat(t,"px")}},{"key":"setGlobalAlpha","value":function setGlobalAlpha(t){this.globalAlpha=t}},{"key":"setLineCap","value":function setLineCap(t){this.lineCap=t}},{"key":"setLineDash","value":function setLineDash(t,r){var o=this;this.enqueueActions((function(){o.ctx.setLineDash(t),o.ctx.lineDashOffset=r}))}},{"key":"setLineJoin","value":function setLineJoin(t){this.lineJoin=t}},{"key":"setLineWidth","value":function setLineWidth(t){this.lineWidth=t}},{"key":"setMiterLimit","value":function setMiterLimit(t){this.miterLimit=t}},{"key":"setShadow","value":function setShadow(t,r,o,i){var c=this;this.enqueueActions((function(){c.ctx.shadowOffsetX=t,c.ctx.shadowOffsetY=r,c.ctx.shadowColor=i,c.ctx.shadowBlur=o}))}},{"key":"setStrokeStyle","value":function setStrokeStyle(t){var r=this;this.enqueueActions((function(){r.ctx.strokeStyle=t}))}},{"key":"setTextAlign","value":function setTextAlign(t){this.textAlign=t}},{"key":"setTextBaseline","value":function setTextBaseline(t){this.textBaseline=l[t]||"alphabetic"}},{"key":"setTransform","value":function setTransform(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.enqueueActions.apply(this,[this.ctx.setTransform].concat(r))}},{"key":"stroke","value":function stroke(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.enqueueActions.apply(this,[this.ctx.stroke].concat(r))}},{"key":"strokeRect","value":function strokeRect(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.enqueueActions.apply(this,[this.ctx.strokeRect].concat(r))}},{"key":"strokeText","value":function strokeText(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.enqueueActions.apply(this,[this.ctx.strokeText].concat(r))}},{"key":"transform","value":function transform(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.enqueueActions.apply(this,[this.ctx.transform].concat(r))}},{"key":"translate","value":function translate(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.enqueueActions.apply(this,[this.ctx.translate].concat(r))}},{"key":"measureText","value":function measureText(t){return this.ctx.measureText(t)}},{"key":"createCircularGradient","value":function createCircularGradient(t,r,o){return this.ctx.createRadialGradient(t,r,0,t,r,o)}},{"key":"createLinearGradient","value":function createLinearGradient(t,r,o,i){return this.ctx.createLinearGradient(t,r,o,i)}}]),CanvasContext}()},"4679":function(t,r,o){o.d(r,{"Z":function(){return p}});var i=o(9249),c=o(7371),a=o(5754),u=o(6906),l=o(7430),h=o(2784),d=o(2322),p=function(t){(0,a.Z)(Index,t);var r=(0,u.Z)(Index);function Index(){return(0,i.Z)(this,Index),r.call(this)}return(0,c.Z)(Index,[{"key":"render","value":function render(){var t=this.props,r=t.padding,o=t.title,i=t.card;return(0,d.jsxs)(l.G7,{"className":"custom-class demo-block van-clearfix "+(r?"demo-block--padding":""),"children":[o&&(0,d.jsx)(l.G7,{"className":"demo-block__title","children":o}),i?(0,d.jsx)(l.G7,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(h.Component)},"4376":function(t,r,o){o.d(r,{"Z":function(){return Page}});var i=o(5273),c=o(7430),a=o(4801),u=o(5936),l=o(2784),h=o(2322);function Page(t){var r=t.title,o=t.className,d=void 0===o?"":o,p=t.children,v=a.ZPm.useRouter().path;return(0,l.useEffect)((function(){document.body.scrollTop=document.documentElement.scrollTop=0}),[v]),a.ZPm.useShareAppMessage((function(){return{"title":"AntM 组件库演示","path":v}})),(0,h.jsxs)(c.G7,{"className":"demo-page ".concat(d),"children":[(0,h.jsxs)(c.G7,{"className":"demo-nav","children":[(0,h.jsx)(i.Z,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return(0,u.n)()}}),(0,h.jsxs)(c.G7,{"className":"demo-nav__title","children":[r," "]})]}),p]})}},"5715":function(t,r,o){o.r(r),o.d(r,{"default":function(){return C}});var i=o(9249),c=o(7371),a=o(753),u=o(5754),l=o(6906),h=o(6666),d=o(2784),p=o(4376),v=o(4679),y=o(6234),x=o(5333),m=o(6692),g=o(3184),b=o(2322),k=o(2362),w=o(7559),_=o(7430),j=o(3668),A=o(5448);var Z=2*Math.PI,O=-Math.PI/2;var S=function Circle(t){var r=(0,d.useRef)("van-circle_uni_".concat(+new Date).concat(Math.ceil(1e4*Math.random()))),o=(0,d.useState)(!1),i=(0,y.Z)(o,2),c=i[0],a=i[1],u=(0,d.useRef)({"ctx":void 0,"inited":!1,"currentValue":void 0,"interval":void 0,"hoverColor":""}),l=t.text,h=t.lineCap,p=void 0===h?"round":h,v=t.value,S=void 0===v?0:v,P=t.speed,C=void 0===P?50:P,N=t.size,I=void 0===N?100:N,T=t.fill,E=t.layerColor,z=void 0===E?"#ffffff":E,L=t.color,G=void 0===L?"#1989fa":L,R=t.strokeWidth,D=void 0===R?4:R,B=t.clockwise,H=void 0===B||B,M=t.style,V=t.className,W=t.children,U=(0,g._)(t,["text","lineCap","value","speed","size","fill","layerColor","color","strokeWidth","clockwise","style","className","children"]);(0,d.useEffect)((function(){var t;j.GY.page=null!==(t=j.GY.page)&&void 0!==t?t:{"path":"page-".concat(r.current)},setTimeout((function(){var t=function createCanvasContext(t,r){var o=(0,k.f4)(r),i=null==o?void 0:o.querySelector('canvas[canvas-id="'.concat(t,'"]')),c=null==i?void 0:i.getContext("2d"),a=new w.F(i,c);return c?(a.canvas=i,a.ctx=c,a):a}(r.current);u.current.ctx=t,a(!0)}),100)}),[]);var J=(0,d.useCallback)((function(t,r,o,i,c){var a=I/2,u=a-D/2;t.strokeStyle=r,t.lineWidth=D,t.lineCap=p,t.beginPath(),t.arc(a,a,u,o,i,!H),t.stroke(),c&&(t.fillStyle=c,t.fill())}),[H,p,I,D]),X=(0,d.useCallback)((function(t){J(t,z,0,Z,T)}),[T,z,J]),Y=(0,d.useCallback)((function(t,r){var o=Z*(r/100),i=H?O+o:3*Math.PI-(O+o);J(t,u.current.hoverColor,O,i)}),[H,J]),$=(0,d.useCallback)((function(t){u.current.ctx.clearRect(0,0,I,I),X(u.current.ctx);var r=function format(t){return Math.min(Math.max(t,0),100)}(t);0!==r&&Y(u.current.ctx,r),u.current.ctx.draw()}),[Y,X,I]),K=function clearMockInterval(){u.current.interval&&(clearTimeout(u.current.interval),u.current.interval=null)},Q=(0,d.useCallback)((function(){if(C<=0||C>1e3)$(S);else{K(),u.current.currentValue=u.current.currentValue||0;!function run(){u.current.interval=setTimeout((function(){u.current.currentValue!==S?(Math.abs(u.current.currentValue-S)<1?u.current.currentValue=S:u.current.currentValue<S?u.current.currentValue+=1:u.current.currentValue-=1,$(u.current.currentValue),run()):K()}),1e3/C)}()}}),[$,C,S]);return(0,d.useEffect)((function(){c&&Q()}),[Q,S,c]),(0,d.useEffect)((function(){c&&$(u.current.currentValue)}),[I,c]),(0,d.useEffect)((function(){c&&function setHoverColor(){if((0,A.BP)(G)){var t=G;try{var r=u.current.ctx.createLinearGradient(I,0,0,0);Object.keys(G).sort((function(t,r){return parseFloat(t)-parseFloat(r)})).map((function(o){return r.addColorStop(parseFloat(o)/100,t[o])})),u.current.hoverColor=r}catch(t){console.error(t)}}else u.current.hoverColor=G;return Promise.resolve()}().then((function(){$(u.current.currentValue)})).catch((function(){}))}),[G,c]),(0,d.useEffect)((function(){return function(){K()}}),[]),(0,b.jsxs)(_.G7,(0,m._)((0,x._)({"id":"page-".concat(r.current),"className":"van-circle ".concat(V),"style":M},U),{"children":[(0,b.jsx)(_.Xz,{"width":I,"height":I,"nativeProps":{"width":I,"height":I},"className":"van-circle__canvas ".concat(r.current),"style":"width: "+"".concat(I,"px")+";height:"+"".concat(I,"px"),"id":r.current,"type":"2d","canvasId":r.current}),l?(0,b.jsx)(_.G7,{"className":"van-circle__text","children":l}):(0,b.jsx)(_.G7,{"className":"van-circle__text","children":W})]}))};function Demo(){return(0,b.jsx)(S,{"value":30,"text":"text"})}var P=o(7757);function demo2_Demo(){var t=d.useState(50),r=(0,y.Z)(t,2),o=r[0],i=r[1];return(0,b.jsxs)(_.G7,{"children":[(0,b.jsx)(S,{"value":o,"strokeWidth":6,"text":"宽度定制"}),(0,b.jsx)(S,{"value":o,"layerColor":"#eeeeee","color":"#ee0a24","text":"颜色定制"}),(0,b.jsx)(S,{"value":o,"wait":!0,"solve":!0,"color":{"0%":"#ffd01e","100%":"#ee0a24"},"text":"渐变色"}),(0,b.jsx)(S,{"value":o,"size":120,"text":"大小定制"}),(0,b.jsx)(P.Z,{"onClick":function onClick(){return i(o+10)},"children":"增加"})]})}function demo3_Demo(){var t=d.useState(50),r=(0,y.Z)(t,2),o=r[0],i=r[1];return(0,b.jsxs)(b.Fragment,{"children":[(0,b.jsx)(S,{"value":o,"color":"#07c160","clockwise":!1,"text":"逆时针"}),(0,b.jsx)(P.Z,{"onClick":function onClick(){return i(o+10)},"children":"增加"})]})}var C=function(t){(0,u.Z)(Index,t);var r=(0,l.Z)(Index);function Index(){var t;return(0,i.Z)(this,Index),t=r.call(this),(0,h.Z)((0,a.Z)(t),"state",{"active":0}),t}return(0,c.Z)(Index,[{"key":"render","value":function render(){return(0,b.jsxs)(p.Z,{"title":"Circle 环形进度条","className":"pages-circle-index","children":[(0,b.jsx)(v.Z,{"title":"基础用法","padding":!0,"children":(0,b.jsx)(Demo,{})}),(0,b.jsx)(v.Z,{"title":"样式定制","padding":!0,"children":(0,b.jsx)(demo2_Demo,{})}),(0,b.jsx)(v.Z,{"title":"逆时针方向","padding":!0,"children":(0,b.jsx)(demo3_Demo,{})})]})}}]),Index}(d.Component)},"7757":function(t,r,o){o.d(r,{"z":function(){return Button},"Z":function(){return y}});var i=o(5333),c=o(3184),a=o(2322),u=o(4801),l=o(7430),h=o(1152),d=o(5273),p=o(1746),v=o(1248);function rootStyle(t){if(!t.color)return"";var r={"color":t.plain?t.color:"#fff","background":t.plain?null:t.color};return-1!==t.color.indexOf("gradient")?r.border=0:r["border-color"]=t.color,(0,v.o)([r])}function Button(t){var r,o=t.type,v=void 0===o?"default":o,y=t.size,x=void 0===y?"normal":y,m=t.block,g=t.round,b=t.plain,k=t.square,w=t.loading,_=t.disabled,j=t.hairline,A=t.color,Z=t.loadingSize,O=void 0===Z?u.ZPm.pxTransform(40):Z,S=t.loadingType,P=void 0===S?"circular":S,C=t.loadingText,N=t.icon,I=t.classPrefix,T=void 0===I?"van-icon":I,E=t.onClick,z=t.children,L=t.style,G=t.className,R=(0,c._)(t,["type","size","block","round","plain","square","loading","disabled","hairline","color","loadingSize","loadingType","loadingText","icon","classPrefix","onClick","children","style","className"]);return(0,a.jsxs)(l.G7,{"className":" "+h.PH("button",[v,x,{"block":m,"round":g,"plain":b,"square":k,"loading":w,"disabled":_,"hairline":j,"unclickable":_||w}])+" "+(j?"van-hairline--surround":"")+" ".concat(G||""),"style":h.oB([rootStyle({"plain":b,"color":A}),L]),"children":[(0,a.jsx)(l.zx,(0,i._)({"className":"van-native-button","disabled":_,"onClick":_||w?void 0:E},R)),w?(0,a.jsxs)(l.G7,{"style":"display: flex","children":[(0,a.jsx)(p.g,{"className":"loading-class","size":O,"type":P,"color":(r={"type":v,"color":A,"plain":b},r.plain?r.color?r.color:"#c9c9c9":"default"===r.type?"#c9c9c9":"#fff")}),C&&(0,a.jsx)(l.G7,{"className":"van-button__loading-text","children":C})]}):(0,a.jsxs)(a.Fragment,{"children":[N&&(0,a.jsx)(d.J,{"size":"1.2em","name":N,"classPrefix":T,"className":"van-button__icon","style":"line-height: inherit;"}),(0,a.jsx)(l.G7,{"className":"van-button__text","children":z})]})]})}var y=Button},"5448":function(t,r,o){function isFunction(t){return"function"==typeof t}function isPlainObject(t){return null!==t&&"object"==typeof t&&!Array.isArray(t)}function isPromise(t){return isPlainObject(t)&&isFunction(t.then)&&isFunction(t.catch)}function isDef(t){return null!=t}function isObj(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)}function isBoolean(t){return"boolean"==typeof t}o.d(r,{"PO":function(){return isPlainObject},"tI":function(){return isPromise},"Xq":function(){return isDef},"BP":function(){return isObj},"jn":function(){return isBoolean},"hU":function(){return isImageUrl},"cb":function(){return isVideoUrl}});var i=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,c=/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i;function isImageUrl(t){return i.test(t)}function isVideoUrl(t){return c.test(t)}},"5273":function(t,r,o){o.d(r,{"J":function(){return Icon},"Z":function(){return y}});var i=o(5333),c=o(6692),a=o(3184),u=o(2322),l=o(7430),h=o(1152),d=o(3162),p=o(1248),v=o(7546);function isImage(t){return-1!==t.indexOf("/")}function rootClass(t){var r=[];if(t.classPrefix&&r.push(t.classPrefix),isImage(t.name))r.push("van-icon--image");else{var o=t.classPrefix?"".concat(t.classPrefix,"-").concat(t.name):t.name;r.push(o)}return r.join(" ")}function rootStyle(t){return(0,p.o)([{"color":t.color,"font-size":(0,v.N)(t.size)}])}function Icon(t){var r=t.classPrefix,o=void 0===r?"van-icon":r,p=t.name,v=t.color,y=t.size,x=t.dot,m=t.info,g=t.style,b=t.className,k=(0,a._)(t,["classPrefix","name","color","size","dot","info","style","className"]);return(0,u.jsxs)(l.G7,(0,c._)((0,i._)({"className":rootClass({"classPrefix":o,"name":p})+" ".concat(b||""),"style":h.oB([rootStyle({"color":v,"size":y}),g])},k),{"children":[(m||0===m||x)&&(0,u.jsx)(d.k,{"dot":x,"info":m,"className":"van-icon__info"}),isImage(p)&&(0,u.jsx)(l.Ee,{"src":p,"mode":"aspectFit","className":"van-icon__image"})]}))}var y=Icon},"3162":function(t,r,o){o.d(r,{"k":function(){return Info}});var i=o(5333),c=o(6692),a=o(3184),u=o(2322),l=o(7430),h=o(1152);function Info(t){var r=t.dot,o=t.info,d=void 0===o?null:o,p=t.style,v=t.className,y=(0,a._)(t,["dot","info","style","className"]);return(0,u.jsx)(u.Fragment,{"children":(d||0===d||r)&&(0,u.jsx)(l.G7,(0,c._)((0,i._)({"className":"van-info "+h.PH("info",{"dot":r})+"  "+v,"style":h.oB([p])},y),{"children":r?"":d}))})}r.Z=Info},"1746":function(t,r,o){o.d(r,{"g":function(){return Loading},"Z":function(){return y}});var i=o(6234),c=o(5333),a=o(6692),u=o(3184),l=o(2322),h=o(7430),d=o(2784),p=o(1152),v=o(7546);function textStyle(t){return(0,p.oB)({"font-size":(0,v.N)(t.textSize)})}function Loading(t){var r,o=t.vertical,y=t.type,x=void 0===y?"circular":y,m=t.color,g=t.size,b=t.textSize,k=t.className,w=t.children,_=t.style,j=(0,u._)(t,["vertical","type","color","size","textSize","className","children","style"]),A=(0,d.useState)(Array.from({"length":12})),Z=(0,i.Z)(A,1)[0];return(0,l.jsxs)(h.G7,(0,a._)((0,c._)({"className":" "+p.PH("loading",{"vertical":o})+" "+k,"style":p.oB([_])},j),{"children":[(0,l.jsx)(h.G7,{"className":"van-loading__spinner van-loading__spinner--"+x,"style":(r={"color":m,"size":g},(0,p.oB)({"color":r.color,"width":(0,v.N)(r.size),"height":(0,v.N)(r.size)})),"children":"spinner"===x&&(0,l.jsx)(l.Fragment,{"children":Z.map((function(t,r){return(0,l.jsx)(h.G7,{"className":"van-loading__dot"},"van-loading__dot_".concat(r))}))})}),(0,l.jsx)(h.G7,{"className":"van-loading__text","style":textStyle({"textSize":b}),"children":w})]}))}var y=Loading},"7546":function(t,r,o){o.d(r,{"N":function(){return addUnit}});var i=o(4801);function addUnit(t){if(null!=t)return/^-?\d+(\.\d+)?$/.test(""+t)?i.ZPm.pxTransform(t):t}},"8043":function(t,r,o){function isArray(t){return t&&"[object Array]"===toString.call(t)}o.d(r,{"k":function(){return isArray}})},"4560":function(t,r,o){o.d(r,{"X":function(){return keys}});var i=new RegExp('{|}|"',"g");function keys(t){return JSON.stringify(t).replace(i,"").split(",").map((function(t){return t.split(":")[0]}))}},"1248":function(t,r,o){o.d(r,{"o":function(){return style}});var i=o(8043),c=o(4560);function style(t){return i.k(t)?t.filter((function(t){return null!=t&&""!==t})).map((function(t){return style(t)})).join(";")||"":"[object Object]"===toString.call(t)?c.X(t).filter((function(r){return null!=t[r]&&""!==t[r]})).map((function(r){return[(o=r,null===(i=o.replace(new RegExp("[A-Z]","g"),(function(t){return"-"+t})))||void 0===i?void 0:i.toLowerCase()),[t[r]]].join(":");var o,i})).join(";")||"":t||""}},"1152":function(t,r,o){o.d(r,{"Nn":function(){return u.N},"PH":function(){return h},"oB":function(){return l.o}});var i=o(8043),c=o(4560),a="van-";function traversing(t,r){r&&("string"==typeof r||"number"==typeof r?t.push(r):i.k(r)?r.forEach((function(r){traversing(t,r)})):"object"==typeof r&&c.X(r).forEach((function(o){r[o]&&t.push(o)})))}var u=o(7546),l=o(1248),h=function memoize(t){var r={};return function(){var o=function serializer(t){if(1===t.length&&function isPrimitive(t){var r=typeof t;return"boolean"===r||"number"===r||"string"===r||"undefined"===r||null===t}(t[0]))return t[0];for(var r={},o=0;o<t.length;o++)r["key"+o]=t[o];return JSON.stringify(r)}(arguments);return void 0===r[o]&&(r[o]=function call(t,r){return 2===r.length?t(r[0],r[1]):1===r.length?t(r[0]):t()}(t,arguments)),r[o]}}((function _bem(t,r){var o=[];return traversing(o,r),function join(t,r){return t=a+t,(r=r.map((function(r){return t+"--"+r}))).unshift(t),r.join(" ")}(t,o)}))},"1837":function(t,r,o){var i=o(2784),c=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(t,r,o){var i,a={},d=null,p=null;for(i in void 0!==o&&(d=""+o),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(p=r.ref),r)u.call(r,i)&&!h.hasOwnProperty(i)&&(a[i]=r[i]);if(t&&t.defaultProps)for(i in r=t.defaultProps)void 0===a[i]&&(a[i]=r[i]);return{"$$typeof":c,"type":t,"key":d,"ref":p,"props":a,"_owner":l.current}}r.Fragment=a,r.jsx=q,r.jsxs=q},"2322":function(t,r,o){t.exports=o(1837)},"7612":function(t,r,o){function _define_property(t,r,o){return r in t?Object.defineProperty(t,r,{"value":o,"enumerable":!0,"configurable":!0,"writable":!0}):t[r]=o,t}o.d(r,{"j":function(){return _define_property},"_":function(){return _define_property}})},"5333":function(t,r,o){o.d(r,{"_":function(){return _object_spread}});var i=o(7612);function _object_spread(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{},c=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(c=c.concat(Object.getOwnPropertySymbols(o).filter((function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable})))),c.forEach((function(r){(0,i.j)(t,r,o[r])}))}return t}},"6692":function(t,r,o){function _object_spread_props(t,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):function ownKeys(t,r){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),o.push.apply(o,i)}return o}(Object(r)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})),t}o.d(r,{"_":function(){return _object_spread_props}})},"3184":function(t,r,o){function _object_without_properties(t,r){if(null==t)return{};var o,i,c=function _object_without_properties_loose(t,r){if(null==t)return{};var o,i,c={},a=Object.keys(t);for(i=0;i<a.length;i++)o=a[i],r.indexOf(o)>=0||(c[o]=t[o]);return c}(t,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)o=a[i],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(c[o]=t[o])}return c}o.d(r,{"_":function(){return _object_without_properties}})}}]);