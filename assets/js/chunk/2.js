/*! For license information please see 2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"622":function(t,r,i){t.exports=i(677)},"677":function(t,r,i){t.exports=i(678)},"678":function(t,r,i){var o=i(679);t.exports=o},"679":function(t,r,i){var o=i(243);t.exports=o},"690":function(t,r,i){t.exports=i(805)},"706":function(t,r,i){"use strict";i.d(r,"a",(function(){return _regeneratorRuntime}));var o=i(46),a=i(45),c=i.n(a),u=i(67),l=i.n(u),h=i(180),y=i.n(h),v=i(150),p=i.n(v),d=i(622),g=i.n(d),x=i(123),w=i.n(x),m=i(690),k=i.n(m),A=i(746),b=i.n(A),q=i(179),L=i.n(q);function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return t};var t={},r=Object.prototype,i=r.hasOwnProperty,a="function"==typeof c.a?c.a:{},u=a.iterator||"@@iterator",h=a.asyncIterator||"@@asyncIterator",v=a.toStringTag||"@@toStringTag";function define(t,r,i){return l()(t,r,{"value":i,"enumerable":!0,"configurable":!0,"writable":!0}),t[r]}try{define({},"")}catch(t){define=function define(t,r,i){return t[r]=i}}function wrap(t,r,i,o){var a=r&&r.prototype instanceof Generator?r:Generator,c=y()(a.prototype),u=new Context(o||[]);return c._invoke=function(t,r,i){var o="suspendedStart";return function(a,c){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===a)throw c;return doneResult()}for(i.method=a,i.arg=c;;){var u=i.delegate;if(u){var l=maybeInvokeDelegate(u,i);if(l){if(l===d)continue;return l}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===o)throw o="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);o="executing";var h=tryCatch(t,r,i);if("normal"===h.type){if(o=i.done?"completed":"suspendedYield",h.arg===d)continue;return{"value":h.arg,"done":i.done}}"throw"===h.type&&(o="completed",i.method="throw",i.arg=h.arg)}}}(t,i,u),c}function tryCatch(t,r,i){try{return{"type":"normal","arg":t.call(r,i)}}catch(t){return{"type":"throw","arg":t}}}t.wrap=wrap;var d={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var x={};define(x,u,(function(){return this}));var m=p.a,A=m&&m(m(values([])));A&&A!==r&&i.call(A,u)&&(x=A);var q=GeneratorFunctionPrototype.prototype=Generator.prototype=y()(x);function defineIteratorMethods(t){var r;g()(r=["next","throw","return"]).call(r,(function(r){define(t,r,(function(t){return this._invoke(r,t)}))}))}function AsyncIterator(t,r){var a;this._invoke=function(c,u){function callInvokeWithMethodAndArg(){return new r((function(a,l){!function invoke(a,c,u,l){var h=tryCatch(t[a],t,c);if("throw"!==h.type){var y=h.arg,v=y.value;return v&&"object"==Object(o.a)(v)&&i.call(v,"__await")?r.resolve(v.__await).then((function(t){invoke("next",t,u,l)}),(function(t){invoke("throw",t,u,l)})):r.resolve(v).then((function(t){y.value=t,u(y)}),(function(t){return invoke("throw",t,u,l)}))}l(h.arg)}(c,u,a,l)}))}return a=a?a.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}}function maybeInvokeDelegate(t,r){var i=t.iterator[r.method];if(void 0===i){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,maybeInvokeDelegate(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=tryCatch(i,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function pushTryEntry(t){var r={"tryLoc":t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function resetTryEntry(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function Context(t){this.tryEntries=[{"tryLoc":"root"}],g()(t).call(t,pushTryEntry,this),this.reset(!0)}function values(t){if(t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function next(){for(;++o<t.length;)if(i.call(t,o))return next.value=t[o],next.done=!1,next;return next.value=void 0,next.done=!0,next};return a.next=a}}return{"next":doneResult}}function doneResult(){return{"value":void 0,"done":!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,define(q,"constructor",GeneratorFunctionPrototype),define(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,v,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===GeneratorFunction||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return w.a?w()(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,v,"GeneratorFunction")),t.prototype=y()(q),t},t.awrap=function(t){return{"__await":t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,h,(function(){return this})),t.AsyncIterator=AsyncIterator,t.async=function(r,i,o,a,c){void 0===c&&(c=k.a);var u=new AsyncIterator(wrap(r,i,o,a),c);return t.isGeneratorFunction(i)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},defineIteratorMethods(q),define(q,v,"Generator"),define(q,u,(function(){return this})),define(q,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var i in t)r.push(i);return b()(r).call(r),function next(){for(;r.length;){var i=r.pop();if(i in t)return next.value=i,next.done=!1,next}return next.done=!0,next}},t.values=values,Context.prototype={"constructor":Context,"reset":function reset(t){var r;if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,g()(r=this.tryEntries).call(r,resetTryEntry),!t)for(var o in this)"t"===o.charAt(0)&&i.call(this,o)&&!isNaN(+L()(o).call(o,1))&&(this[o]=void 0)},"stop":function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},"dispatchException":function dispatchException(t){if(this.done)throw t;var r=this;function handle(i,o){return c.type="throw",c.arg=t,r.next=i,o&&(r.method="next",r.arg=void 0),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return handle("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return handle(a.catchLoc,!0);if(this.prev<a.finallyLoc)return handle(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return handle(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return handle(a.finallyLoc)}}}},"abrupt":function abrupt(t,r){for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o];if(a.tryLoc<=this.prev&&i.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var c=a;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=r&&r<=c.finallyLoc&&(c=null);var u=c?c.completion:{};return u.type=t,u.arg=r,c?(this.method="next",this.next=c.finallyLoc,d):this.complete(u)},"complete":function complete(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},"finish":function finish(t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),resetTryEntry(i),d}},"catch":function _catch(t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc===t){var o=i.completion;if("throw"===o.type){var a=o.arg;resetTryEntry(i)}return a}}throw new Error("illegal catch attempt")},"delegateYield":function delegateYield(t,r,i){return this.delegate={"iterator":values(t),"resultName":r,"nextLoc":i},"next"===this.method&&(this.arg=void 0),d}},t}},"707":function(t,r,i){"use strict";i.d(r,"a",(function(){return _asyncToGenerator}));var o=i(690),a=i.n(o);function asyncGeneratorStep(t,r,i,o,c,u,l){try{var h=t[u](l),y=h.value}catch(t){return void i(t)}h.done?r(y):a.a.resolve(y).then(o,c)}function _asyncToGenerator(t){return function(){var r=this,i=arguments;return new a.a((function(o,a){var c=t.apply(r,i);function _next(t){asyncGeneratorStep(c,o,a,_next,_throw,"next",t)}function _throw(t){asyncGeneratorStep(c,o,a,_next,_throw,"throw",t)}_next(void 0)}))}}},"746":function(t,r,i){t.exports=i(812)},"762":function(t,r,i){t.exports=i(764)},"763":function(t,r,i){"use strict";i.d(r,"a",(function(){return _}));var o=i(706),a=i(45),c=i.n(a),u=i(122),l=i.n(u),h=i(121),y=i.n(h),v=i(143);function _createForOfIteratorHelper(t,r){var i=void 0!==c.a&&l()(t)||t["@@iterator"];if(!i){if(y()(t)||(i=Object(v.a)(t))||r&&t&&"number"==typeof t.length){i&&(t=i);var o=0,a=function F(){};return{"s":a,"n":function n(){return o>=t.length?{"done":!0}:{"done":!1,"value":t[o++]}},"e":function e(t){throw t},"f":a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,h=!0,p=!1;return{"s":function s(){i=i.call(t)},"n":function n(){var t=i.next();return h=t.done,t},"e":function e(t){p=!0,u=t},"f":function f(){try{h||null==i.return||i.return()}finally{if(p)throw u}}}}var p=i(707),d=i(39),g=i(40),x=i(32),w=i.n(x),m=i(6),k=i.n(m),A=i(5),b=i.n(A),q=i(762),L=i.n(q),T={"top":"top","bottom":"bottom","middle":"middle","normal":"alphabetic"},_=function(){function CanvasContext(t,r){Object(d.a)(this,CanvasContext),this.actions=[],this.canvas=t,this.ctx=r}var t;return Object(g.a)(CanvasContext,[{"key":"ctx","get":function get(){return this.__raw__||{}},"set":function set(t){this.__raw__=t}},{"key":"emptyActions","value":function emptyActions(){this.actions.length=0}},{"key":"enqueueActions","value":function enqueueActions(t){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];this.actions.push({"func":t,"args":i})}},{"key":"fillStyle","get":function get(){return this.ctx.fillStyle},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.fillStyle=t}))}},{"key":"font","get":function get(){return this.ctx.font},"set":function set(t){this.ctx.font=t}},{"key":"globalAlpha","get":function get(){return this.ctx.globalAlpha},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.globalAlpha=t}))}},{"key":"globalCompositeOperation","get":function get(){return this.ctx.globalCompositeOperation},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.globalCompositeOperation=t}))}},{"key":"lineCap","get":function get(){return this.ctx.lineCap},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.lineCap=t}))}},{"key":"lineDashOffset","get":function get(){return this.ctx.lineDashOffset},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.lineDashOffset=t}))}},{"key":"lineJoin","get":function get(){return this.ctx.lineJoin},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.lineJoin=t}))}},{"key":"lineWidth","get":function get(){return this.ctx.lineWidth},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.lineWidth=t}))}},{"key":"miterLimit","get":function get(){return this.ctx.miterLimit},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.miterLimit=t}))}},{"key":"shadowBlur","get":function get(){return this.ctx.shadowBlur},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.shadowBlur=t}))}},{"key":"shadowColor","get":function get(){return this.ctx.shadowColor},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.shadowColor=t}))}},{"key":"shadowOffsetX","get":function get(){return this.ctx.shadowOffsetX},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.shadowOffsetX=t}))}},{"key":"shadowOffsetY","get":function get(){return this.ctx.shadowOffsetY},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.shadowOffsetY=t}))}},{"key":"strokeStyle","get":function get(){return this.ctx.strokeStyle},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.strokeStyle=t}))}},{"key":"textAlign","get":function get(){return this.ctx.textAlign},"set":function set(t){this.ctx.textAlign=t}},{"key":"textBaseline","get":function get(){return this.ctx.textBaseline},"set":function set(t){this.ctx.textBaseline=t}},{"key":"direction","get":function get(){return this.ctx.direction},"set":function set(t){this.ctx.direction=t}},{"key":"imageSmoothingEnabled","get":function get(){return this.ctx.imageSmoothingEnabled},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.imageSmoothingEnabled=t}))}},{"key":"imageSmoothingQuality","get":function get(){return this.ctx.imageSmoothingQuality},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.imageSmoothingQuality=t}))}},{"key":"filter","get":function get(){return w()(this.ctx)},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.filter=t}))}},{"key":"arc","value":function arc(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enqueueActions.apply(this,k()(t=[this.ctx.arc]).call(t,i))}},{"key":"arcTo","value":function arcTo(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enqueueActions.apply(this,k()(t=[this.ctx.arcTo]).call(t,i))}},{"key":"beginPath","value":function beginPath(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enqueueActions.apply(this,k()(t=[this.ctx.beginPath]).call(t,i))}},{"key":"bezierCurveTo","value":function bezierCurveTo(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enqueueActions.apply(this,k()(t=[this.ctx.bezierCurveTo]).call(t,i))}},{"key":"clearRect","value":function clearRect(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enqueueActions.apply(this,k()(t=[this.ctx.clearRect]).call(t,i))}},{"key":"clip","value":function clip(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enqueueActions.apply(this,k()(t=[this.ctx.clip]).call(t,i))}},{"key":"closePath","value":function closePath(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enqueueActions.apply(this,k()(t=[this.ctx.closePath]).call(t,i))}},{"key":"createPattern","value":function createPattern(t,r){return this.createPattern(t,r)}},{"key":"draw","value":(t=Object(p.a)(Object(o.a)().mark((function _callee(t,r){var i,a,c,u,l;return Object(o.a)().wrap((function _callee$(o){for(;;)switch(o.prev=o.next){case 0:o.prev=0,t||this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),i=_createForOfIteratorHelper(this.actions),o.prev=3,i.s();case 5:if((a=i.n()).done){o.next=11;break}return c=a.value,u=c.func,l=c.args,o.next=9,u.apply(this.ctx,l);case 9:o.next=5;break;case 11:o.next=16;break;case 13:o.prev=13,o.t0=o.catch(3),i.e(o.t0);case 16:return o.prev=16,i.f(),o.finish(16);case 19:this.emptyActions(),r&&r(),o.next=26;break;case 23:throw o.prev=23,o.t1=o.catch(0),{"errMsg":o.t1.message};case 26:case"end":return o.stop()}}),_callee,this,[[0,23],[3,13,16,19]])}))),function draw(r,i){return t.apply(this,arguments)})},{"key":"drawImage","value":function drawImage(t){for(var r=this,i=arguments.length,o=new Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];this.enqueueActions((function(){var i,a;if("string"==typeof t){var c=new Image;return c.src=t,new b.a((function(t,i){c.onload=function(){var i,a;(i=r.ctx).drawImage.apply(i,k()(a=[c]).call(a,o)),t()},c.onerror=i}))}(i=r.ctx).drawImage.apply(i,k()(a=[t]).call(a,o))}))}},{"key":"fill","value":function fill(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enqueueActions.apply(this,k()(t=[L()(this.ctx)]).call(t,i))}},{"key":"fillRect","value":function fillRect(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enqueueActions.apply(this,k()(t=[this.ctx.fillRect]).call(t,i))}},{"key":"fillText","value":function fillText(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enqueueActions.apply(this,k()(t=[this.ctx.fillText]).call(t,i))}},{"key":"lineTo","value":function lineTo(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enqueueActions.apply(this,k()(t=[this.ctx.lineTo]).call(t,i))}},{"key":"moveTo","value":function moveTo(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enqueueActions.apply(this,k()(t=[this.ctx.moveTo]).call(t,i))}},{"key":"quadraticCurveTo","value":function quadraticCurveTo(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enqueueActions.apply(this,k()(t=[this.ctx.quadraticCurveTo]).call(t,i))}},{"key":"rect","value":function rect(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enqueueActions.apply(this,k()(t=[this.ctx.rect]).call(t,i))}},{"key":"restore","value":function restore(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enqueueActions.apply(this,k()(t=[this.ctx.restore]).call(t,i))}},{"key":"rotate","value":function rotate(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enqueueActions.apply(this,k()(t=[this.ctx.rotate]).call(t,i))}},{"key":"save","value":function save(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enqueueActions.apply(this,k()(t=[this.ctx.save]).call(t,i))}},{"key":"scale","value":function scale(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enqueueActions.apply(this,k()(t=[this.ctx.scale]).call(t,i))}},{"key":"setFillStyle","value":function setFillStyle(t){var r=this;this.enqueueActions((function(){r.ctx.fillStyle=t}))}},{"key":"setFontSize","value":function setFontSize(t){this.font="".concat(t,"px")}},{"key":"setGlobalAlpha","value":function setGlobalAlpha(t){this.globalAlpha=t}},{"key":"setLineCap","value":function setLineCap(t){this.lineCap=t}},{"key":"setLineDash","value":function setLineDash(t,r){var i=this;this.enqueueActions((function(){i.ctx.setLineDash(t),i.ctx.lineDashOffset=r}))}},{"key":"setLineJoin","value":function setLineJoin(t){this.lineJoin=t}},{"key":"setLineWidth","value":function setLineWidth(t){this.lineWidth=t}},{"key":"setMiterLimit","value":function setMiterLimit(t){this.miterLimit=t}},{"key":"setShadow","value":function setShadow(t,r,i,o){var a=this;this.enqueueActions((function(){a.ctx.shadowOffsetX=t,a.ctx.shadowOffsetY=r,a.ctx.shadowColor=o,a.ctx.shadowBlur=i}))}},{"key":"setStrokeStyle","value":function setStrokeStyle(t){var r=this;this.enqueueActions((function(){r.ctx.strokeStyle=t}))}},{"key":"setTextAlign","value":function setTextAlign(t){this.textAlign=t}},{"key":"setTextBaseline","value":function setTextBaseline(t){this.textBaseline=T[t]||"alphabetic"}},{"key":"setTransform","value":function setTransform(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enqueueActions.apply(this,k()(t=[this.ctx.setTransform]).call(t,i))}},{"key":"stroke","value":function stroke(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enqueueActions.apply(this,k()(t=[this.ctx.stroke]).call(t,i))}},{"key":"strokeRect","value":function strokeRect(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enqueueActions.apply(this,k()(t=[this.ctx.strokeRect]).call(t,i))}},{"key":"strokeText","value":function strokeText(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enqueueActions.apply(this,k()(t=[this.ctx.strokeText]).call(t,i))}},{"key":"transform","value":function transform(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enqueueActions.apply(this,k()(t=[this.ctx.transform]).call(t,i))}},{"key":"translate","value":function translate(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enqueueActions.apply(this,k()(t=[this.ctx.translate]).call(t,i))}},{"key":"measureText","value":function measureText(t){return this.ctx.measureText(t)}},{"key":"createCircularGradient","value":function createCircularGradient(t,r,i){return this.ctx.createRadialGradient(t,r,0,t,r,i)}},{"key":"createLinearGradient","value":function createLinearGradient(t,r,i,o){return this.createLinearGradient(t,r,i,o)}}]),CanvasContext}()},"764":function(t,r,i){var o=i(765);t.exports=o},"765":function(t,r,i){var o=i(13),a=i(766),c=Array.prototype;t.exports=function(t){var r=t.fill;return t===c||o(c,t)&&r===c.fill?a:r}},"766":function(t,r,i){i(767);var o=i(18);t.exports=o("Array").fill},"767":function(t,r,i){var o=i(3),a=i(768),c=i(126);o({"target":"Array","proto":!0},{"fill":a}),c("fill")},"768":function(t,r,i){"use strict";var o=i(36),a=i(125),c=i(42);t.exports=function fill(t){for(var r=o(this),i=c(r),u=arguments.length,l=a(u>1?arguments[1]:void 0,i),h=u>2?arguments[2]:void 0,y=void 0===h?i:a(h,i);y>l;)r[l++]=t;return r}},"805":function(t,r,i){t.exports=i(806)},"806":function(t,r,i){var o=i(807);i(808),i(809),i(810),i(811),t.exports=o},"807":function(t,r,i){var o=i(247);t.exports=o},"808":function(t,r,i){i(248)},"809":function(t,r,i){i(249)},"810":function(t,r,i){"use strict";var o=i(3),a=i(72),c=i(94);o({"target":"Promise","stat":!0,"forced":!0},{"try":function(t){var r=a.f(this),i=c(t);return(i.error?r.reject:r.resolve)(i.value),r.promise}})},"811":function(t,r,i){i(250)},"812":function(t,r,i){t.exports=i(813)},"813":function(t,r,i){var o=i(814);t.exports=o},"814":function(t,r,i){var o=i(246);t.exports=o}}]);