/*! For license information please see 6611.ab469332.chunk.js.LICENSE.txt */
(self.webpackChunkisle_dashboard=self.webpackChunkisle_dashboard||[]).push([[6611],{6611:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var n=r(41488),a=r(9251),i=r(6610),o=r(5991),c=r(63349),l=r(10379),s=r(60446),u=r(96156),f=r(25472),m=r(70048),d=r(29530),v=r(54012),p=r(75018),g=r(73230),Z=r(36659),y=r(14657),b=r(11387),h=r.n(b),E=(r(27184),function(e){(0,l.Z)(r,e);var t=(0,s.Z)(r);function r(e){var n;return(0,i.Z)(this,r),n=t.call(this,e),(0,u.Z)((0,c.Z)(n),"handleClick",(function(e){e.preventDefault(),n.props.forgotPassword({email:n.state.email})})),n.state={email:""},n}return(0,o.Z)(r,[{key:"render",value:function(){var e=this,t=this.props,r=t.t,a=t.settings;return n.createElement("div",{className:"login"},n.createElement(d.Z,{style:{boxShadow:"0 0 8px rgba(0,0,0,0.3)",borderRadius:"6px",opacity:.98,background:"rgba(255,255,255,0.75)"}},n.createElement(d.Z.Header,null,n.createElement(d.Z.Title,{as:"h3"},r("common:forgot-password"))),n.createElement(d.Z.Body,null,n.createElement(Z.Z,{inline:!0},n.createElement(g.Z,{controlId:"form-email"},n.createElement(v.Z,null,r("common:email-address")),n.createElement(p.Z,{type:"email",placeholder:r("common:enter-email"),value:this.state.email,onChange:function(t){var r=t.target.value;e.setState({email:r})},style:{marginLeft:"10px",marginRight:"6px"}}),n.createElement(m.Z,{disabled:!h()(this.state.email),onClick:this.handleClick,variant:"primary",type:"submit"},r("common:reset"))))),n.createElement(d.Z.Footer,{style:{background:"rgba(255,255,255,0.6)",textAlign:"right"}},a.allowUserRegistrations?n.createElement(n.Fragment,null,n.createElement(y.rU,{to:"/signup"},r("common:register")),n.createElement("span",null," | ")):null,n.createElement(y.rU,{to:"/login"},r("common:login")))),a.brandingLogo?n.createElement("img",{className:"login-branding-logo",src:a.brandingLogo,alt:"Branded Logo"}):null)}}]),r}(n.Component));E.defaultProps={settings:{}};var C=(0,f.Z)(["forgot_password","common"])(E),x=r(60299);var N=(0,a.$j)((function(e){return{user:e.user,settings:e.settings}}),(function(e){return{forgotPassword:(0,x.Vz)(e)}}))(C)},11387:function(e,t,r){"use strict";var n=r(79238);e.exports=n},79238:function(e,t,r){"use strict";var n=r(52015).isPrimitive,a=/@/;e.exports=function(e){return n(e)&&a.test(e)}},96358:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=/-(.)/g;function a(e){return e.replace(n,(function(e,t){return t.toUpperCase()}))}},29530:function(e,t,r){"use strict";r.d(t,{Z:function(){return P}});var n=r(22122),a=r(19756),i=r(78265),o=r.n(i),c=r(41488),l=r(38674),s=r(25237),u=r(90855),f=r(40539),m=c.forwardRef((function(e,t){var r=e.bsPrefix,i=e.className,s=e.variant,u=e.as,f=void 0===u?"img":u,m=(0,a.Z)(e,["bsPrefix","className","variant","as"]),d=(0,l.vE)(r,"card-img");return c.createElement(f,(0,n.Z)({ref:t,className:o()(s?d+"-"+s:d,i)},m))}));m.displayName="CardImg",m.defaultProps={variant:null};var d=m,v=(0,u.Z)("h5"),p=(0,u.Z)("h6"),g=(0,s.Z)("card-body"),Z=(0,s.Z)("card-title",{Component:v}),y=(0,s.Z)("card-subtitle",{Component:p}),b=(0,s.Z)("card-link",{Component:"a"}),h=(0,s.Z)("card-text",{Component:"p"}),E=(0,s.Z)("card-header"),C=(0,s.Z)("card-footer"),x=(0,s.Z)("card-img-overlay"),N=c.forwardRef((function(e,t){var r=e.bsPrefix,i=e.className,s=e.bg,u=e.text,m=e.border,d=e.body,v=e.children,p=e.as,Z=void 0===p?"div":p,y=(0,a.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),b=(0,l.vE)(r,"card"),h=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:b+"-header"}}),[b]);return c.createElement(f.Z.Provider,{value:h},c.createElement(Z,(0,n.Z)({ref:t},y,{className:o()(i,b,s&&"bg-"+s,u&&"text-"+u,m&&"border-"+m)}),d?c.createElement(g,null,v):v))}));N.displayName="Card",N.defaultProps={body:!1},N.Img=d,N.Title=Z,N.Subtitle=y,N.Body=g,N.Link=b,N.Text=h,N.Header=E,N.Footer=C,N.ImgOverlay=x;var P=N},40539:function(e,t,r){"use strict";var n=r(41488).createContext(null);n.displayName="CardContext",t.Z=n},25237:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(22122),a=r(19756),i=r(78265),o=r.n(i),c=r(96358),l=r(41488),s=r(38674);function u(e,t){var r,i=void 0===t?{}:t,u=i.displayName,f=void 0===u?(r=e)[0].toUpperCase()+(0,c.Z)(r).slice(1):u,m=i.Component,d=i.defaultProps,v=l.forwardRef((function(t,r){var i=t.className,c=t.bsPrefix,u=t.as,f=void 0===u?m||"div":u,d=(0,a.Z)(t,["className","bsPrefix","as"]),v=(0,s.vE)(c,e);return l.createElement(f,(0,n.Z)({ref:r,className:o()(i,v)},d))}));return v.defaultProps=d,v.displayName=f,v}},90855:function(e,t,r){"use strict";var n=r(22122),a=r(41488),i=r(78265),o=r.n(i);t.Z=function(e){return a.forwardRef((function(t,r){return a.createElement("div",(0,n.Z)({},t,{ref:r,className:o()(t.className,e)}))}))}},14657:function(e,t,r){"use strict";r.d(t,{rU:function(){return p}});var n=r(59486),a=r(41788),i=r(41488),o=r(86358),c=(r(83603),r(22122)),l=r(19756),s=r(83697);i.Component;i.Component;var u=function(e,t){return"function"===typeof e?e(t):e},f=function(e,t){return"string"===typeof e?(0,o.ob)(e,null,null,t):e},m=function(e){return e},d=i.forwardRef;"undefined"===typeof d&&(d=m);var v=d((function(e,t){var r=e.innerRef,n=e.navigate,a=e.onClick,o=(0,l.Z)(e,["innerRef","navigate","onClick"]),s=o.target,u=(0,c.Z)({},o,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||s&&"_self"!==s||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),n())}});return u.ref=m!==d&&t||r,i.createElement("a",u)}));var p=d((function(e,t){var r=e.component,a=void 0===r?v:r,o=e.replace,p=e.to,g=e.innerRef,Z=(0,l.Z)(e,["component","replace","to","innerRef"]);return i.createElement(n.s6.Consumer,null,(function(e){e||(0,s.Z)(!1);var r=e.history,n=f(u(p,e.location),e.location),l=n?r.createHref(n):"",v=(0,c.Z)({},Z,{href:l,navigate:function(){var t=u(p,e.location);(o?r.replace:r.push)(t)}});return m!==d?v.ref=t||g:v.innerRef=g,i.createElement(a,v)}))})),g=function(e){return e},Z=i.forwardRef;"undefined"===typeof Z&&(Z=g);Z((function(e,t){var r=e["aria-current"],a=void 0===r?"page":r,o=e.activeClassName,m=void 0===o?"active":o,d=e.activeStyle,v=e.className,y=e.exact,b=e.isActive,h=e.location,E=e.sensitive,C=e.strict,x=e.style,N=e.to,P=e.innerRef,R=(0,l.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.createElement(n.s6.Consumer,null,(function(e){e||(0,s.Z)(!1);var r=h||e.location,o=f(u(N,r),r),l=o.pathname,w=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),k=w?(0,n.LX)(r.pathname,{path:w,exact:y,sensitive:E,strict:C}):null,L=!!(b?b(k,r):k),U=L?function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return e})).join(" ")}(v,m):v,S=L?(0,c.Z)({},x,{},d):x,A=(0,c.Z)({"aria-current":L&&a||null,className:U,style:S,to:o},R);return g!==Z?A.ref=t||P:A.innerRef=P,i.createElement(p,A)}))}))},27184:function(){}}]);
//# sourceMappingURL=6611.ab469332.chunk.js.map