!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VueScToast",[],t):"object"==typeof exports?exports.VueScToast=t():e.VueScToast=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";var o=n(9);n.n(o);t.a={data:function(){return{visible:!1,message:"",type:"warn",confirmButtonText:"确定",cancelButtonText:"取消",showCancel:!0}},computed:{},methods:{onConfirm:function(){this.visible=!1},onCancel:function(){this.visible=!1}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i={};i.install=function(e){var t=e.extend(o.a),n=new t;n.$mount(document.createElement("div")),document.body.appendChild(n.$el),e.prototype.$LToast=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=o.showCancel,r=void 0===i||i,a=o.confirmButtonText,s=void 0===a?"confim":a,c=o.cancelButtonText,d=void 0===c?"cancel":c,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){};n.visible=!0,n.message=e,n.type=t,n.showCancel=r,s&&(n.confirmButtonText=s),d&&(n.cancelButtonText=d),n.onConfirm=function(){l(),n.visible=!1},n.onCancel=function(){u(),n.visible=!1}}},t.default=i},function(e,t,n){"use strict";function o(e){n(3)}var i=n(0),r=n(10),a=n(8),s=o,c=a(i.a,r.a,!1,s,"data-v-db8731ea",null);t.a=c.exports},function(e,t,n){var o=n(4);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(6)("190f5b46",o,!0,{})},function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,".dialog[data-v-db8731ea]{z-index:99999;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5)}.dialog-center[data-v-db8731ea]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:4.5333rem;width:6.6667rem;border-radius:.1333rem;background-color:#fff;display:flex;flex-direction:column;justify-content:center}.dialog-center-image[data-v-db8731ea]{height:1.92rem;padding-top:.64rem;padding-bottom:.29335rem;align-self:center;box-sizing:border-box}.dialog-center-image img[data-v-db8731ea],.dialog-center-image svg[data-v-db8731ea]{height:1.28rem;width:1.28rem}.dialog-center-content[data-v-db8731ea]{flex:1;font-size:.42665rem;color:#999;text-align:center;padding:0 .5333rem;overflow:hidden}.dialog-center-btn[data-v-db8731ea]{height:1.2rem;display:flex;justify-content:flex-start;border-top:1px solid #f1e8e8}.dialog-center-btn_item[data-v-db8731ea]{flex:1;font-size:.42665rem;font-weight:600;color:#999;height:1.1733rem;line-height:1.1733rem;width:100%;text-align:center}.dialog-center-btn_item+.dialog-center-btn_item[data-v-db8731ea]{border-left:1px solid #f1e8e8}.dialog-center .confim[data-v-db8731ea]{color:#1e9bff}",""])},function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=o(i);return[n].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([r]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=l[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(r(n.parts[i]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(r(n.parts[i]));l[n.id]={id:n.id,refs:1,parts:a}}}}function i(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function r(e){var t,n,o=document.querySelector("style["+h+'~="'+e.id+'"]');if(o){if(v)return m;o.parentNode.removeChild(o)}if(b){var r=p++;o=f||(f=i()),t=a.bind(null,o,r,!1),n=a.bind(null,o,r,!0)}else o=i(),t=s.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function a(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function s(e,t){var n=t.css,o=t.media,i=t.sourceMap;if(o&&e.setAttribute("media",o),g.ssrId&&e.setAttribute(h,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(7),l={},u=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,m=function(){},g=null,h="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,i){v=n,g=i||{};var r=d(e,t);return o(r),function(t){for(var n=[],i=0;i<r.length;i++){var a=r[i],s=l[a.id];s.refs--,n.push(s)}t?(r=d(e,t),o(r)):r=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete l[s.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],o={},i=0;i<t.length;i++){var r=t[i],a=r[0],s=r[1],c=r[2],d=r[3],l={id:e+":"+i,css:s,media:c,sourceMap:d};o[a]?o[a].parts.push(l):n.push(o[a]={id:a,parts:[l]})}return n}},function(e,t){e.exports=function(e,t,n,o,i,r){var a,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(a=e,s=e.default);var d="function"==typeof s?s.options:s;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),i&&(d._scopeId=i);var l;if(r?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},d._ssrRegister=l):o&&(l=o),l){var u=d.functional,f=u?d.render:d.beforeCreate;u?(d._injectStyles=l,d.render=function(e,t){return l.call(t),f(e,t)}):d.beforeCreate=f?[].concat(f,l):[l]}return{esModule:a,exports:s,options:d}}},function(e,t){!function(e){function t(){var e,t;e=document.createElement("div"),e.innerHTML=n,n=null,(t=e.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",a(t,document.body))}var n='<svg><symbol id="icon-chenggong" viewBox="0 0 1024 1024"><path d="M512.66 64.64c-247.424 0-448 200.577-448 448s200.576 448 448 448 448-200.577 448-448c0-247.424-200.577-448-448-448z m250.713 334.863l-282.391 282.39c-15.496 15.497-40.62 15.497-56.117 0L261.947 518.975c-15.496-15.496-15.496-40.619 0-56.115s40.62-15.496 56.116 0l134.86 134.859 254.332-254.333c15.496-15.496 40.62-15.496 56.117 0s15.496 40.62 0 56.117z" fill="#71B7FF" ></path></symbol><symbol id="icon-jinggao" viewBox="0 0 1024 1024"><path d="M512 64.4C264.8 64.4 64.4 264.8 64.4 512c0 247.2 200.4 447.6 447.6 447.6S959.6 759.2 959.6 512c0-247.2-200.4-447.6-447.6-447.6z m-44.8 163c0-24.7 20-44.8 44.8-44.8 24.7 0 44.8 20 44.8 44.8v328.2c0 24.7-20 44.8-44.8 44.8-24.7 0-44.8-20-44.8-44.8V227.4zM512 780.5c-31.8 0-57.6-25.8-57.6-57.6s25.8-57.6 57.6-57.6 57.6 25.8 57.6 57.6-25.8 57.6-57.6 57.6z" fill="#71B7FF" ></path></symbol></svg>',o=function(){var e=document.getElementsByTagName("script");return e[e.length-1]}(),i=o.getAttribute("data-injectcss"),r=function(e,t){t.parentNode.insertBefore(e,t)},a=function(e,t){t.firstChild?r(e,t.firstChild):t.appendChild(e)};if(i&&!e.__iconfont__svg__cssinject__){e.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}!function(t){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(t,0);else{var n=function e(){document.removeEventListener("DOMContentLoaded",e,!1),t()};document.addEventListener("DOMContentLoaded",n,!1)}else document.attachEvent&&function(e,t){var n=e.document,o=!1,i=function(){o||(o=!0,t())};!function e(){try{n.documentElement.doScroll("left")}catch(t){return void setTimeout(e,50)}i()}(),n.onreadystatechange=function(){"complete"==n.readyState&&(n.onreadystatechange=null,i())}}(e,t)}(t)}(window)},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"dialog"},[n("div",{staticClass:"dialog-center"},[n("div",{staticClass:"dialog-center-image"},["success"===e.type?n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-chenggong"}})]):e._e(),e._v(" "),"warn"===e.type?n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-jinggao"}})]):e._e()]),e._v(" "),n("div",{staticClass:"dialog-center-content"},[e._v(e._s(e.message))]),e._v(" "),n("div",{staticClass:"dialog-center-btn"},[e.showCancel?n("div",{staticClass:"dialog-center-btn_item",on:{click:e.onCancel}},[e._v(e._s(e.cancelButtonText))]):e._e(),e._v(" "),n("div",{staticClass:"dialog-center-btn_item confim",on:{click:e.onConfirm}},[e._v(e._s(e.confirmButtonText))])])])])},i=[],r={render:o,staticRenderFns:i};t.a=r}])});
//# sourceMappingURL=vue-sc-toast.js.map