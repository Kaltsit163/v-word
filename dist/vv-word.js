!function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"max",function(){return r}),n.d(t,"filterEmoji",function(){return u}),n.d(t,"getRealLen",function(){return o});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return e.length<t?e:e.slice(0,t)+"..."},u=function(e){var t=e,n=new RegExp("[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]","g");return t.match(n)&&(t=t.replace(n,"")),t},o=function(e){for(var t=0,n=str.length,r=-1,u=0;u<n;u++)r=str.charCodeAt(u),t+=r>=0&&r<=128?1:2;return t}}]);
//# sourceMappingURL=vv-word.js.map