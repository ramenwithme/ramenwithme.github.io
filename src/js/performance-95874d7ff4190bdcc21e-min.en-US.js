!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(e){return t[e]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="https://static.squarespace.com/universal/scripts-compressed/",e(e.s=10768)}({10767:function(t,e,n){!function(e,n){t.exports=n()}(window,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,i,c=function(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),u=1;u<arguments.length;u++){for(var d in n=Object(arguments[u]))o.call(n,d)&&(c[d]=n[d]);if(r){i=r(n);for(var p=0;p<i.length;p++)a.call(n,i[p])&&(c[i[p]]=n[i[p]])}}return c}},function(t,e,n){"use strict";function r(t,e,n){return t.reduce(function(t,r){if(r in n&&r in e){var o=n[r];t[e[r]]="number"==typeof o?o.toString(32):o}return t},{})}function o(t,e){if("function"!=typeof navigator.sendBeacon||!navigator.sendBeacon(t,e)){var n=new XMLHttpRequest;n.open("POST",t,!0),n.setRequestHeader("Content-Type","text/plain;charset=UTF-8"),n.send(e)}}function a(t){if("function"==typeof window.dispatchEvent&&"function"==typeof CustomEvent){var e={};e[t.event]=t,window.dispatchEvent(new CustomEvent("onRumCollectorData",{detail:e}))}var n=function(t){var e=r(S,g,t);return e.d=r(E,O,t.data),e.e=h[t.event],JSON.stringify(e)}(t);if(!n)throw new Error("Data is empty");o(l,n)}function i(){return x}function c(t){var e,n,r;if("performance"in window&&"timing"in window.performance)try{t=t||{};var o=window.performance.timing,i={};for(var c in o)i[c]=o[c];var u=(n=f()(t,i),r={},j.forEach(function(t){t in performance.timing&&"number"==typeof n[t]&&"navigationStart"!==t&&n[t]>=n.navigationStart?r[t]=n[t]-n.navigationStart:r[t]=n[t]}),r),d={event:"navigation",data:u,ts:Date.now()};a(d),e=d,x.push(e)}catch(t){var p=d||u||o;throw"object"==typeof t&&"name"in t&&(t.name="RUMError"),"object"==typeof t&&"message"in t&&(t.message+=": "+JSON.stringify(p)),t}}function u(t,e){e=e||{};var n=[].concat(t),r=function(t){var e=t.context||{};return"object"!=typeof e&&(e={}),{app:t.appName||"",context:e,hash:window.location.hash||"",pathname:window.location.pathname||""}}(e);return function(){try{n.forEach(function(t){t in d&&d[t](r)})}catch(t){o(v,t)}}}n.r(e);var d={};n.d(d,"navigation",function(){return c});var p=n(0),f=n.n(p),s={dev:"http://localhost:8000/api/1/wp-rum",stage:"https://www.stage.sqsp.net/api/1/wp-rum",prod:"/api/1/wp-rum"},l=s.prod+"/record",v=s.prod+"/error",m={navigationStart:"n",unloadEventStart:"u",unloadEventEnd:"ue",redirectStart:"rd",redirectEnd:"rde",fetchStart:"f",domainLookupStart:"dl",domainLookupEnd:"dle",connectStart:"c",connectEnd:"ce",secureConnectionStart:"s",requestStart:"r",responseStart:"rs",responseEnd:"re",domLoading:"d",domInteractive:"di",domContentLoadedEventStart:"ds",domContentLoadedEventEnd:"de",domComplete:"dc",loadEventStart:"l"},y={},b={},w={app:"a",hash:"h",pathname:"p",context:"ctx"},g={ts:"t",event:"e",data:"d"},h={navigation:0,resource:1,paint:2},O=f()({},w,m,y,b),j=Object.keys(f()({},w,m)),S=(Object.keys(f()({},w,y)),Object.keys(f()({},w,b)),Object.keys(g)),E=Object.keys(O),x=[];n.d(e,"getPerformanceData",function(){return i}),e.default=function(t){"function"==typeof window.addEventListener&&window.addEventListener("load",u("navigation",t))}}])})},10768:function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{default:t}}(n(10767));if(window.top===window){var o=window.Static&&window.Static.SQUARESPACE_CONTEXT;if(o){var a=o.website||{},i=o.websiteSettings||{},c=o.collection||{};(0,r.default)({appName:"v6-user-sites",context:{pageType:"number"==typeof o.pageType?o.pageType:-1,templateId:o.templateId||"",impersonatedSession:o.impersonatedSession||!1,websiteId:a.id||"",authenticUrl:a.authenticUrl||"",developerMode:a.developerMode||!1,timeZone:a.timeZone||"",language:a.language||"",ampEnabled:i.ampEnabled||!1,collectionType:"number"==typeof c.type?c.type:-1}})}}}});