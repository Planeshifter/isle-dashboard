/*! For license information please see 11453.94f74816.chunk.js.LICENSE.txt */
(self.webpackChunkisle_dashboard=self.webpackChunkisle_dashboard||[]).push([[11453],{81253:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(19756);function o(e,n){if(null==e)return{};var t,o,a=(0,r.Z)(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}},77880:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r=t(41488),o=t(9251),a=t(87757),i=t.n(a),c=t(92137),u=t(6610),s=t(5991),f=t(10379),l=t(60446),p=t(25472),d=t(29530),g=t(14657),v=t(8682),m=(t(27184),function(e){(0,f.Z)(o,e);var n,t=(0,l.Z)(o);function o(e){var n;return(0,u.Z)(this,o),(n=t.call(this,e)).state={message:"common:waiting"},n}return(0,s.Z)(o,[{key:"componentDidMount",value:(n=(0,c.Z)(i().mark((function e(){var n,t,r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.location.hash.substring(16),t=v.parse(n),r=t.token,e.next=5,this.props.confirmEmail(r);case 5:o=e.sent,this.setState({message:o});case 7:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.props,n=e.t,t=e.settings;return r.createElement("div",{className:"login"},r.createElement(d.Z,{style:{boxShadow:"0 0 8px rgba(0,0,0,0.3)",borderRadius:"6px",opacity:.98,background:"rgba(255,255,255,0.75)"}},r.createElement(d.Z.Header,null,r.createElement(d.Z.Title,{as:"h3"},n("common:confirm-email"))),r.createElement(d.Z.Body,null,r.createElement("p",{"data-testid":"message"},this.state.message)),r.createElement(d.Z.Footer,{style:{background:"rgba(255,255,255,0.6)",textAlign:"right"}},r.createElement(g.rU,{to:"/signup"},n("common:register")),r.createElement("span",null," | "),r.createElement(g.rU,{to:"/login"},n("common:login")))),t.brandingLogo?r.createElement("img",{className:"login-branding-logo",src:t.brandingLogo,alt:"Branded Logo"}):null)}}]),o}(r.Component));m.defaultProps={settings:{}};var y=(0,p.Z)(["common"])(m),b=t(60299);var h=(0,o.$j)((function(e){return{settings:e.settings}}),(function(e){return{confirmEmail:b.UG}}))(y)},78265:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)){if(t.length){var i=o.apply(null,t);i&&e.push(i)}}else if("object"===a)if(t.toString===Object.prototype.toString)for(var c in t)r.call(t,c)&&t[c]&&e.push(c);else e.push(t.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(n,[]))||(e.exports=t)}()},96358:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=/-(.)/g;function o(e){return e.replace(r,(function(e,n){return n.toUpperCase()}))}},38674:function(e,n,t){"use strict";t.d(n,{vE:function(){return a}});var r=t(41488),o=r.createContext({});o.Consumer,o.Provider;function a(e,n){var t=(0,r.useContext)(o);return e||t[n]||n}},25237:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(22122),o=t(19756),a=t(78265),i=t.n(a),c=t(96358),u=t(41488),s=t(38674);function f(e,n){var t,a=void 0===n?{}:n,f=a.displayName,l=void 0===f?(t=e)[0].toUpperCase()+(0,c.Z)(t).slice(1):f,p=a.Component,d=a.defaultProps,g=u.forwardRef((function(n,t){var a=n.className,c=n.bsPrefix,f=n.as,l=void 0===f?p||"div":f,d=(0,o.Z)(n,["className","bsPrefix","as"]),g=(0,s.vE)(c,e);return u.createElement(l,(0,r.Z)({ref:t,className:i()(a,g)},d))}));return g.defaultProps=d,g.displayName=l,g}},90855:function(e,n,t){"use strict";var r=t(22122),o=t(41488),a=t(78265),i=t.n(a);n.Z=function(e){return o.forwardRef((function(n,t){return o.createElement("div",(0,r.Z)({},n,{ref:t,className:i()(n.className,e)}))}))}},26180:function(e,n,t){"use strict";t.d(n,{$:function(){return f}});var r=t(34699),o=t(96156),a=t(41488),i=t(6244),c=t(30632);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,o=(0,a.useContext)(i.OO)||{},u=o.i18n,f=o.defaultNS,l=t||u||(0,i.nI)();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new i.zv),!l){(0,c.O4)("You will need to pass in an i18next instance by using initReactI18next");var p=function(e){return Array.isArray(e)?e[e.length-1]:e},d=[p,{},!1];return d.t=p,d.i18n={},d.ready=!1,d}l.options.react&&void 0!==l.options.react.wait&&(0,c.O4)("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var g=s(s(s({},(0,i.JP)()),l.options.react),n),v=g.useSuspense,m=e||f||l.options&&l.options.defaultNS;m="string"===typeof m?[m]:m||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(m);var y=(l.isInitialized||l.initializedStoreOnce)&&m.every((function(e){return(0,c.F0)(e,l,g)}));function b(){return l.getFixedT(null,"fallback"===g.nsMode?m:m[0])}var h=(0,a.useState)(b),w=(0,r.Z)(h,2),O=w[0],Z=w[1],E=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=g.bindI18n,n=g.bindI18nStore;function t(){E.current&&Z(b)}return E.current=!0,y||v||(0,c.DC)(l,m,(function(){E.current&&Z(b)})),e&&l&&l.on(e,t),n&&l&&l.store.on(n,t),function(){E.current=!1,e&&l&&e.split(" ").forEach((function(e){return l.off(e,t)})),n&&l&&n.split(" ").forEach((function(e){return l.store.off(e,t)}))}}),[l,m.join()]);var j=(0,a.useRef)(!0);(0,a.useEffect)((function(){E.current&&!j.current&&Z(b),j.current=!1}),[l]);var C=[O,l,y];if(C.t=O,C.i18n=l,C.ready=y,y)return C;if(!y&&!v)return C;throw new Promise((function(e){(0,c.DC)(l,m,(function(){e()}))}))}},30632:function(e,n,t){"use strict";function r(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}t.d(n,{ZK:function(){return r},O4:function(){return a},DC:function(){return i},F0:function(){return c},Gf:function(){return u}});var o={};function a(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&o[n[0]]||("string"===typeof n[0]&&(o[n[0]]=new Date),r.apply(void 0,n))}function i(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function c(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return a("i18n.languages were undefined or empty",n.languages),!0;var r=n.languages[0],o=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var c=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!c(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!n.services.backendConnector.backend||!(!c(r,e)||o&&!c(i,e))))}function u(e){return e.displayName||e.name||("string"===typeof e&&e.length>0?e:"Unknown")}},25472:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(96156),o=t(34699),a=t(81253),i=t(41488),c=t(26180),u=t(30632);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){function r(r){var u=r.forwardedRef,s=(0,a.Z)(r,["forwardedRef"]),l=(0,c.$)(e,s),p=(0,o.Z)(l,3),d=p[0],g=p[1],v=p[2],m=f(f({},s),{},{t:d,i18n:g,tReady:v});return n.withRef&&u?m.ref=u:!n.withRef&&u&&(m.forwardedRef=u),i.createElement(t,m)}r.displayName="withI18nextTranslation(".concat((0,u.Gf)(t),")"),r.WrappedComponent=t;return n.withRef?i.forwardRef((function(e,n){return i.createElement(r,Object.assign({},e,{forwardedRef:n}))})):r}}},14657:function(e,n,t){"use strict";t.d(n,{rU:function(){return v}});var r=t(59486),o=t(41788),a=t(41488),i=t(86358),c=(t(83603),t(22122)),u=t(19756),s=t(83697);a.Component;a.Component;var f=function(e,n){return"function"===typeof e?e(n):e},l=function(e,n){return"string"===typeof e?(0,i.ob)(e,null,null,n):e},p=function(e){return e},d=a.forwardRef;"undefined"===typeof d&&(d=p);var g=d((function(e,n){var t=e.innerRef,r=e.navigate,o=e.onClick,i=(0,u.Z)(e,["innerRef","navigate","onClick"]),s=i.target,f=(0,c.Z)({},i,{onClick:function(e){try{o&&o(e)}catch(n){throw e.preventDefault(),n}e.defaultPrevented||0!==e.button||s&&"_self"!==s||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return f.ref=p!==d&&n||t,a.createElement("a",f)}));var v=d((function(e,n){var t=e.component,o=void 0===t?g:t,i=e.replace,v=e.to,m=e.innerRef,y=(0,u.Z)(e,["component","replace","to","innerRef"]);return a.createElement(r.s6.Consumer,null,(function(e){e||(0,s.Z)(!1);var t=e.history,r=l(f(v,e.location),e.location),u=r?t.createHref(r):"",g=(0,c.Z)({},y,{href:u,navigate:function(){var n=f(v,e.location);(i?t.replace:t.push)(n)}});return p!==d?g.ref=n||m:g.innerRef=m,a.createElement(o,g)}))})),m=function(e){return e},y=a.forwardRef;"undefined"===typeof y&&(y=m);y((function(e,n){var t=e["aria-current"],o=void 0===t?"page":t,i=e.activeClassName,p=void 0===i?"active":i,d=e.activeStyle,g=e.className,b=e.exact,h=e.isActive,w=e.location,O=e.sensitive,Z=e.strict,E=e.style,j=e.to,C=e.innerRef,P=(0,u.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a.createElement(r.s6.Consumer,null,(function(e){e||(0,s.Z)(!1);var t=w||e.location,i=l(f(j,t),t),u=i.pathname,R=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),N=R?(0,r.LX)(t.pathname,{path:R,exact:b,sensitive:O,strict:Z}):null,x=!!(h?h(N,t):N),k=x?function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return e})).join(" ")}(g,p):g,S=x?(0,c.Z)({},E,{},d):E,D=(0,c.Z)({"aria-current":x&&o||null,className:k,style:S,to:i},P);return m!==y?D.ref=n||C:D.innerRef=C,a.createElement(v,D)}))}))},27184:function(){}}]);
//# sourceMappingURL=11453.94f74816.chunk.js.map