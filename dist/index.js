!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react"),require("classnames"),require("object-assign"),require("react-dom"),require("@feizheng/noop")):"function"==typeof define&&define.amd?define(["prop-types","react","classnames","object-assign","react-dom","@feizheng/noop"],t):"object"==typeof exports?exports.ReactAbsoluteRect=t(require("prop-types"),require("react"),require("classnames"),require("object-assign"),require("react-dom"),require("@feizheng/noop")):e.ReactAbsoluteRect=t(e["prop-types"],e.react,e.classnames,e["object-assign"],e["react-dom"],e["@feizheng/noop"])}(window,(function(e,t,r,o,n,u){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=n},function(e,t){e.exports=u},function(e,t,r){"use strict";r.r(t);var o=r(1),n=r.n(o),u=(r(4),r(0)),i=r.n(u),c=r(2),a=r.n(c),f=(r(5),r(3)),s=r.n(f);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},u=Object.keys(e);for(o=0;o<u.length;o++)r=u[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)r=u[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function y(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,d(t).apply(this,arguments))}var r,o,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),r=t,(o=[{key:"render",value:function(){var e=this.props,t=e.className,r=e.top,o=e.right,u=e.bottom,i=e.left,c=e.style,f=e.smooth,p=b(e,["className","top","right","bottom","left","style","smooth"]),y=s()({top:r,right:o,bottom:u,left:i},c);return n.a.createElement("section",l({"data-smooth":f,className:a()("react-absolute-rect",t),style:y},p))}}])&&y(r.prototype,o),u&&y(r,u),t}(o.Component);g.displayName="react-absolute-rect",g.propTypes={className:i.a.string,top:i.a.number,right:i.a.number,bottom:i.a.number,left:i.a.number,smooth:i.a.bool},g.defaultProps={top:0,right:0,bottom:0,left:0,smooth:!1};t.default=g}])}));