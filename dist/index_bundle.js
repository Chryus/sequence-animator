!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){event.preventDefault();var t=event.target.animationInput.value,n=t.replace(/\'/g,'"').replace(/\s(\w+):/g,'"$1":'),r=JSON.parse(n),o=new u.default("bar",r);o.animate()}var i=n(6),a=(r(i),n(2)),u=r(a);document.getElementById("animationForm").onsubmit=function(){o()}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t,r){n(this,e),this.dataSet=r,this.element=document.getElementById(t)}return o(e,[{key:"animate",value:function(){var e=0,t=0,n=null,r=null,o=!0,i=!1,a=void 0;try{for(var u,s=this.dataSet[Symbol.iterator]();!(o=(u=s.next()).done);o=!0){var f=u.value;t=f[0]+e,n=f.filter(this.isObject),r=this.formatStyles(n),this.updateDOM(t,r),e=t}}catch(e){i=!0,a=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw a}}}},{key:"updateDOM",value:function(e,t){var n=this;setTimeout(function(){console.log(e),n.element.style=t},e)}},{key:"formatStyles",value:function(e){var t="";return e.forEach(function(n,r){var o=JSON.stringify(n);o=o.replace(/\"/g,"").replace(/({|})/g,""),o+=";",t+=r<e.length-1?o+" ":o}),t}},{key:"isObject",value:function(e){return"object"===("undefined"==typeof e?"undefined":r(e))}}]),e}();t.default=i},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,"body{margin:0}.gray{color:#525252}.jumbotron{margin:0;height:200px;width:100%;background:#eceeef;border-radius:5px;display:flex;align-items:center;justify-content:center}.main-header{font-family:fantasy;font-size:4em}.main-container{margin:25px}.submit{width:100px;height:40px;border-radius:5px;background:#a1a6ff;border:grey}.button{background-color:#f44336;border:none;color:#000;padding:12px 26px;text-align:center;text-decoration:none;display:inline-block;font-size:1.2em;font-family:monospace;font-weight:700;border-radius:3px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}#bar{margin-top:25px;background:blue;height:100px;width:100px}.form-group{display:block;margin-top:10px;margin-bottom:10px}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(f(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(f(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],u=o[2],s=o[3],f={css:a,media:u,sourceMap:s};n[i]?n[i].parts.push(f):t.push(n[i]={id:i,parts:[f]})}return t}function i(e,t){var n=v(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function u(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function f(e,t){var n,r,o;if(t.singleton){var i=b++;n=y||(y=u(t)),r=l.bind(null,n,i,!1),o=l.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),r=p.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),r=c.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function l(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function c(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=h(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,b=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var u=n[a],s=d[u.id];s.refs--,i.push(s)}if(e){var f=o(e);r(f,t)}for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete d[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.id,r,""]]);n(5)(r,{});r.locals&&(e.exports=r.locals)}]);