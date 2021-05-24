(self.webpackChunkisle_dashboard=self.webpackChunkisle_dashboard||[]).push([[37483],{37483:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var r=n(41488),a=n(9251),o=n(87757),s=n.n(o),l=n(92137),i=n(6610),c=n(5991),u=n(63349),m=n(10379),d=n(60446),f=n(96156),p=n(25472),v=n(70048),g=n(29530),h=n(72945),Z=n(23596),E=n(54012),y=n(75018),b=n(73230),w=n(36659),x=n(58932),N=n(9050),C=n(14657),I=(n(27184),function(e){(0,m.Z)(n,e);var t=(0,d.Z)(n);function n(e){var r;return(0,i.Z)(this,n),r=t.call(this,e),(0,f.Z)((0,u.Z)(r),"handleSubmit",function(){var e=(0,l.Z)(s().mark((function e(t){var n,a,o,l,i,c,u,m;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==(n={password:r.state.password,email:r.state.email}).email){e.next=6;break}r.setState({showInputOverlay:!0,overlayTarget:r.emailInput,invalidInputMessage:"Enter your email address."}),e.next=31;break;case 6:if(""!==n.password){e.next=10;break}r.setState({showInputOverlay:!0,overlayTarget:r.passwordInput,invalidInputMessage:"Enter your password."}),e.next=31;break;case 10:return e.prev=10,e.next=13,r.props.handleLogin(n);case 13:if(a=e.sent,"finish-login-via-tfa"!==(o=a.data.message)){e.next=19;break}r.props.history.push("/login-tfa"),e.next=25;break;case 19:if("ok"!==o){e.next=25;break}return l=a.data,i=l.token,c=l.id,e.next=23,r.props.fetchCredentials({token:i,id:c});case 23:(u=e.sent)&&r.props.getEnrollableCohorts(u);case 25:e.next=31;break;case 27:e.prev=27,e.t0=e.catch(10),m=e.t0.response?e.t0.response.data:e.t0.message,r.setState({showInputOverlay:!0,overlayTarget:"Password is not correct."===m?r.passwordInput:r.emailInput,invalidInputMessage:m},(function(){setTimeout((function(){r.setState({showInputOverlay:!1})}),4e3)}));case 31:case"end":return e.stop()}}),e,null,[[10,27]])})));return function(t){return e.apply(this,arguments)}}()),(0,f.Z)((0,u.Z)(r),"handleInputChange",(function(e){var t=e.target,n=t.value,a=t.name;r.setState((0,f.Z)({},a,n))})),r.state={email:"",password:""},r}return(0,c.Z)(n,[{key:"componentDidMount",value:function(){var e=this.props.user;e&&e.loggedIn&&(this.props.restoreLogin(e),this.props.getEnrollableCohorts(e))}},{key:"render",value:function(){var e=this,t=this.props,n=t.t,a=t.settings;return r.createElement(r.Fragment,null,r.createElement("div",{className:"login"},r.createElement(g.Z,{className:"login-panel"},r.createElement(g.Z.Header,null,r.createElement(g.Z.Title,{as:"h1",style:{textAlign:"center"}},r.createElement("img",{alt:"ISLE Logo",className:"login-isle-logo",src:"img/isle_logo.svg"}),"ISLE ",r.createElement("small",null,a.siteTitle))),r.createElement(g.Z.Body,null,r.createElement(w.Z,null,r.createElement(b.Z,{controlId:"form-email"},r.createElement(Z.Z,null,r.createElement(h.Z,{sm:3},r.createElement(E.Z,null,n("common:email"))),r.createElement(h.Z,{sm:9},r.createElement(y.Z,{name:"email",type:"email",autoComplete:"isle-email",placeholder:n("common:email"),onChange:this.handleInputChange,ref:function(t){e.emailInput=t}})))),r.createElement(b.Z,{controlId:"form-password"},r.createElement(Z.Z,null,r.createElement(h.Z,{sm:3},r.createElement(E.Z,null,n("common:password"))),r.createElement(h.Z,{sm:9},r.createElement(y.Z,{name:"password",type:"password",autoComplete:"isle-password",placeholder:n("common:password"),onChange:this.handleInputChange,ref:function(t){e.passwordInput=t}})))),r.createElement(b.Z,null,r.createElement(v.Z,{className:"centered",variant:"primary",onClick:this.handleSubmit,type:"submit"},n("common:login"))))),r.createElement(g.Z.Footer,{style:{background:"rgba(255,255,255,0.6)",textAlign:"right"}},r.createElement(C.rU,{to:"/forgot-password"},n("common:forgot-password")),a.allowUserRegistrations?r.createElement(r.Fragment,null,r.createElement("span",null," | "),r.createElement(C.rU,{to:"/signup"},n("common:register"))):null)),a.brandingLogo?r.createElement("img",{className:"login-branding-logo",src:a.brandingLogo,alt:"Branded Logo"}):null),r.createElement(x.Z,{show:this.state.showInputOverlay,target:this.state.overlayTarget,placement:"right",containerPadding:20},r.createElement(N.Z,{id:"popover-contained",title:"Not valid"},this.state.invalidInputMessage)))}}]),n}(r.Component));I.defaultProps={settings:{}};var P=(0,p.Z)(["login","common"])(I),k=n(77703),R=n(58713),L=n(60299);var S=(0,a.$j)((function(e){return{user:e.user,settings:e.settings}}),(function(e){return{handleLogin:(0,L.IJ)(e),restoreLogin:(0,L.Dv)(e),fetchCredentials:(0,k.GI)(e),getEnrollableCohorts:(0,R.R9)(e)}}))(P)},96358:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=/-(.)/g;function a(e){return e.replace(r,(function(e,t){return t.toUpperCase()}))}},29530:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(22122),a=n(19756),o=n(78265),s=n.n(o),l=n(41488),i=n(38674),c=n(25237),u=n(90855),m=n(40539),d=l.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,c=e.variant,u=e.as,m=void 0===u?"img":u,d=(0,a.Z)(e,["bsPrefix","className","variant","as"]),f=(0,i.vE)(n,"card-img");return l.createElement(m,(0,r.Z)({ref:t,className:s()(c?f+"-"+c:f,o)},d))}));d.displayName="CardImg",d.defaultProps={variant:null};var f=d,p=(0,u.Z)("h5"),v=(0,u.Z)("h6"),g=(0,c.Z)("card-body"),h=(0,c.Z)("card-title",{Component:p}),Z=(0,c.Z)("card-subtitle",{Component:v}),E=(0,c.Z)("card-link",{Component:"a"}),y=(0,c.Z)("card-text",{Component:"p"}),b=(0,c.Z)("card-header"),w=(0,c.Z)("card-footer"),x=(0,c.Z)("card-img-overlay"),N=l.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,c=e.bg,u=e.text,d=e.border,f=e.body,p=e.children,v=e.as,h=void 0===v?"div":v,Z=(0,a.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),E=(0,i.vE)(n,"card"),y=(0,l.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return l.createElement(m.Z.Provider,{value:y},l.createElement(h,(0,r.Z)({ref:t},Z,{className:s()(o,E,c&&"bg-"+c,u&&"text-"+u,d&&"border-"+d)}),f?l.createElement(g,null,p):p))}));N.displayName="Card",N.defaultProps={body:!1},N.Img=f,N.Title=h,N.Subtitle=Z,N.Body=g,N.Link=E,N.Text=y,N.Header=b,N.Footer=w,N.ImgOverlay=x;var C=N},40539:function(e,t,n){"use strict";var r=n(41488).createContext(null);r.displayName="CardContext",t.Z=r},9050:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(22122),a=n(19756),o=n(78265),s=n.n(o),l=n(41488),i=(n(90427),n(38674)),c=l.forwardRef((function(e,t){var n=e.as,o=void 0===n?"div":n,c=e.bsPrefix,u=e.className,m=e.children,d=(0,a.Z)(e,["as","bsPrefix","className","children"]);return c=(0,i.vE)(c,"popover-header"),l.createElement(o,(0,r.Z)({ref:t},d,{className:s()(c,u)}),m)})),u=l.forwardRef((function(e,t){var n=e.as,o=void 0===n?"div":n,c=e.bsPrefix,u=e.className,m=e.children,d=(0,a.Z)(e,["as","bsPrefix","className","children"]);return c=(0,i.vE)(c,"popover-body"),l.createElement(o,(0,r.Z)({ref:t},d,{className:s()(u,c)}),m)})),m=l.forwardRef((function(e,t){var n=e.bsPrefix,o=e.placement,c=e.className,m=e.style,d=e.children,f=e.content,p=e.arrowProps,v=(e.popper,e.show,(0,a.Z)(e,["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"])),g=(0,i.vE)(n,"popover"),h=((null==o?void 0:o.split("-"))||[])[0];return l.createElement("div",(0,r.Z)({ref:t,role:"tooltip",style:m,"x-placement":h,className:s()(c,g,h&&"bs-popover-"+h)},v),l.createElement("div",(0,r.Z)({className:"arrow"},p)),f?l.createElement(u,null,d):d)}));m.defaultProps={placement:"right"},m.Title=c,m.Content=u;var d=m},23596:function(e,t,n){"use strict";var r=n(22122),a=n(19756),o=n(78265),s=n.n(o),l=n(41488),i=n(38674),c=["xl","lg","md","sm","xs"],u=l.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,u=e.noGutters,m=e.as,d=void 0===m?"div":m,f=(0,a.Z)(e,["bsPrefix","className","noGutters","as"]),p=(0,i.vE)(n,"row"),v=p+"-cols",g=[];return c.forEach((function(e){var t,n=f[e];delete f[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&g.push(""+v+r+"-"+t)})),l.createElement(d,(0,r.Z)({ref:t},f,{className:s().apply(void 0,[o,p,u&&"no-gutters"].concat(g))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.Z=u},25237:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(22122),a=n(19756),o=n(78265),s=n.n(o),l=n(96358),i=n(41488),c=n(38674);function u(e,t){var n,o=void 0===t?{}:t,u=o.displayName,m=void 0===u?(n=e)[0].toUpperCase()+(0,l.Z)(n).slice(1):u,d=o.Component,f=o.defaultProps,p=i.forwardRef((function(t,n){var o=t.className,l=t.bsPrefix,u=t.as,m=void 0===u?d||"div":u,f=(0,a.Z)(t,["className","bsPrefix","as"]),p=(0,c.vE)(l,e);return i.createElement(m,(0,r.Z)({ref:n,className:s()(o,p)},f))}));return p.defaultProps=f,p.displayName=m,p}},90855:function(e,t,n){"use strict";var r=n(22122),a=n(41488),o=n(78265),s=n.n(o);t.Z=function(e){return a.forwardRef((function(t,n){return a.createElement("div",(0,r.Z)({},t,{ref:n,className:s()(t.className,e)}))}))}},14657:function(e,t,n){"use strict";n.d(t,{rU:function(){return v}});var r=n(59486),a=n(41788),o=n(41488),s=n(86358),l=(n(83603),n(22122)),i=n(19756),c=n(83697);o.Component;o.Component;var u=function(e,t){return"function"===typeof e?e(t):e},m=function(e,t){return"string"===typeof e?(0,s.ob)(e,null,null,t):e},d=function(e){return e},f=o.forwardRef;"undefined"===typeof f&&(f=d);var p=f((function(e,t){var n=e.innerRef,r=e.navigate,a=e.onClick,s=(0,i.Z)(e,["innerRef","navigate","onClick"]),c=s.target,u=(0,l.Z)({},s,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return u.ref=d!==f&&t||n,o.createElement("a",u)}));var v=f((function(e,t){var n=e.component,a=void 0===n?p:n,s=e.replace,v=e.to,g=e.innerRef,h=(0,i.Z)(e,["component","replace","to","innerRef"]);return o.createElement(r.s6.Consumer,null,(function(e){e||(0,c.Z)(!1);var n=e.history,r=m(u(v,e.location),e.location),i=r?n.createHref(r):"",p=(0,l.Z)({},h,{href:i,navigate:function(){var t=u(v,e.location);(s?n.replace:n.push)(t)}});return d!==f?p.ref=t||g:p.innerRef=g,o.createElement(a,p)}))})),g=function(e){return e},h=o.forwardRef;"undefined"===typeof h&&(h=g);h((function(e,t){var n=e["aria-current"],a=void 0===n?"page":n,s=e.activeClassName,d=void 0===s?"active":s,f=e.activeStyle,p=e.className,Z=e.exact,E=e.isActive,y=e.location,b=e.sensitive,w=e.strict,x=e.style,N=e.to,C=e.innerRef,I=(0,i.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.createElement(r.s6.Consumer,null,(function(e){e||(0,c.Z)(!1);var n=y||e.location,s=m(u(N,n),n),i=s.pathname,P=i&&i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),k=P?(0,r.LX)(n.pathname,{path:P,exact:Z,sensitive:b,strict:w}):null,R=!!(E?E(k,n):k),L=R?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(p,d):p,S=R?(0,l.Z)({},x,{},f):x,T=(0,l.Z)({"aria-current":R&&a||null,className:L,style:S,to:s},I);return g!==h?T.ref=t||C:T.innerRef=C,o.createElement(v,T)}))}))},27184:function(){}}]);
//# sourceMappingURL=37483.9616e693.chunk.js.map