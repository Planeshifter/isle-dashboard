(self.webpackChunkisle_dashboard=self.webpackChunkisle_dashboard||[]).push([[39577],{42263:function(e,t,n){"use strict";var a=n(41488),l=n(25472),r=n(70048),s=n(29619),o=function(e){return a.createElement(s.Z,{show:e.show,onHide:e.close},a.createElement(s.Z.Header,null,a.createElement(s.Z.Title,{as:"h3"},e.title)),a.createElement(s.Z.Body,null,e.message),a.createElement(s.Z.Footer,null,a.createElement(r.Z,{onClick:e.close},e.t("cancel")),a.createElement(r.Z,{variant:"danger",onClick:e.onConfirm},e.t("confirm"))))};o.defaultProps={close:function(){},message:"",onConfirm:function(){},show:!1,title:""},t.Z=(0,l.Z)(["common"])(o)},39577:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var a=n(6610),l=n(5991),r=n(10379),s=n(60446),o=n(87757),i=n.n(o),c=n(92137),u=n(34699),m=n(41488),d=n(25472),f=n(73109),p=n(23596),g=n(72945),E=n(70048),v=n(52785),Z=n(36659),h=n(44524),b=n(42263),y=function(e){var t=e.logoPath,n=e.name,a=e.updateSettings,l=e.t,r=(0,m.useState)(!1),s=(0,u.Z)(r,2),o=s[0],i=s[1],c=(0,m.useCallback)((function(){a(n,null)}),[n,a]),d=(0,m.useCallback)((function(){i(!o)}),[o]);return m.createElement("div",{style:{position:"relative",width:"fit-content"}},m.createElement("img",{src:t,alt:"Logo",style:{height:"250px",width:"auto"}}),m.createElement(E.Z,{style:{position:"absolute",top:0,right:0},onClick:d,variant:"danger"},m.createElement("i",{className:"fas fa-trash"})),o?m.createElement(b.Z,{title:l("delete-logo"),message:m.createElement("span",null,l("delete-logo-confirm")),close:d,show:o,onConfirm:c}):null)},N=function(e){var t=e.name,n=e.t,a=e.uploadLogo,l=e.user,r=(0,m.useState)(null),s=(0,u.Z)(r,2),o=s[0],d=s[1],f=(0,m.useState)(null),p=(0,u.Z)(f,2),g=p[0],h=p[1],b=(0,m.useCallback)((function(e){var t=e.target.files[0];if(t){var n=new FileReader;n.onload=function(){var e=n.result;h(e)},n.readAsDataURL(t),d(t)}}),[]),y=(0,m.useCallback)((function(){d(null),h(null)}),[]),N=(0,m.useCallback)((0,c.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("branding",o,o.name),n.append("type",t),e.next=5,a({formData:n,user:l});case 5:e.sent instanceof Error===!1&&d(null);case 7:case"end":return e.stop()}}),e)}))),[a,t,o,l]);return m.createElement(m.Fragment,null,m.createElement(Z.Z.Group,{style:{marginBottom:0}},m.createElement(Z.Z.Label,{htmlFor:"".concat(t,"Upload"),style:{cursor:"pointer"}},m.createElement("h3",null,m.createElement(v.Z,{variant:"success"},n("select-file")))),m.createElement(Z.Z.Control,{id:"".concat(t,"Upload"),key:g,style:{display:"none"},type:"file",onChange:b,accept:"image/*"}),o?m.createElement(m.Fragment,null,m.createElement(E.Z,{className:"branding-confirm-btn",onClick:N,variant:"success",size:"sm"},m.createElement("i",{className:"fas fa-check"})),m.createElement(E.Z,{className:"branding-reset-btn",onClick:y,variant:"warning",size:"sm"},m.createElement("i",{className:"fas fa-times"}))):null),m.createElement("br",null),g?m.createElement("img",{src:g,alt:"Logo",style:{height:"250px",width:"auto"}}):null)},w=function(e){(0,r.Z)(n,e);var t=(0,s.Z)(n);function n(e){return(0,a.Z)(this,n),t.call(this,e)}return(0,l.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.admin,n=e.uploadLogo,a=e.updateSettings,l=e.user,r=e.t,s=t.settings;return m.createElement(m.Fragment,null,m.createElement("div",{className:"admin-settings-outer-container"},m.createElement(h.Z,null,m.createElement(f.Z,{style:{float:"left"}},m.createElement(p.Z,null,m.createElement(g.Z,{sm:2},m.createElement("h3",null,r("logo"))),m.createElement(g.Z,{sm:10},s.brandingLogo?m.createElement(y,{name:"brandingLogo",logoPath:s.brandingLogo,updateSettings:a,t:r}):m.createElement(N,{name:"brandingLogo",t:r,user:l,uploadLogo:n}))),m.createElement("hr",null),m.createElement(p.Z,null,m.createElement(g.Z,{sm:2},m.createElement("h3",null,r("small-logo"))),m.createElement(g.Z,{sm:10},s.brandingSmallLogo?m.createElement(y,{name:"brandingSmallLogo",logoPath:s.brandingSmallLogo,updateSettings:a,t:r}):m.createElement(N,{name:"brandingSmallLogo",t:r,user:l,uploadLogo:n})))))))}}]),n}(m.Component);w.defaultProps={};var C=(0,d.Z)("admin_settings")(w)},44524:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var a=n(9251),l=n(6610),r=n(5991),s=n(10379),o=n(60446),i=n(41488),c=n(25472),u=n(62300),m=function(e){(0,s.Z)(n,e);var t=(0,o.Z)(n);function n(){return(0,l.Z)(this,n),t.apply(this,arguments)}return(0,r.Z)(n,[{key:"render",value:function(){var e=this.props.admin;return this.props.user.licensed||e.license&&e.license.valid?this.props.children:i.createElement(u.Z,{style:{width:"100%",height:"73.7%"}},i.createElement("h3",{style:{textAlign:"center",marginTop:"12%"}},this.props.t("not-available-in-community-edition")))}}]),n}(i.Component);m.defaultProps={admin:null,user:null};var d=(0,c.Z)("common")(m);var f=(0,a.$j)((function(e){return{admin:e.admin,user:e.user}}),(function(){return{}}))(d)},52785:function(e,t,n){"use strict";var a=n(22122),l=n(19756),r=n(78265),s=n.n(r),o=n(41488),i=n(38674),c=o.forwardRef((function(e,t){var n=e.bsPrefix,r=e.variant,c=e.pill,u=e.className,m=e.as,d=void 0===m?"span":m,f=(0,l.Z)(e,["bsPrefix","variant","pill","className","as"]),p=(0,i.vE)(n,"badge");return o.createElement(d,(0,a.Z)({ref:t},f,{className:s()(u,p,c&&p+"-pill",r&&p+"-"+r)}))}));c.displayName="Badge",c.defaultProps={pill:!1},t.Z=c},73109:function(e,t,n){"use strict";var a=n(22122),l=n(19756),r=n(78265),s=n.n(r),o=n(41488),i=n(38674),c=o.forwardRef((function(e,t){var n=e.bsPrefix,r=e.fluid,c=e.as,u=void 0===c?"div":c,m=e.className,d=(0,l.Z)(e,["bsPrefix","fluid","as","className"]),f=(0,i.vE)(n,"container"),p="string"===typeof r?"-"+r:"-fluid";return o.createElement(u,(0,a.Z)({ref:t},d,{className:s()(m,r?""+f+p:f)}))}));c.displayName="Container",c.defaultProps={fluid:!1},t.Z=c},62300:function(e,t,n){"use strict";var a=n(22122),l=n(19756),r=n(41488),s=n(78265),o=n.n(s),i=n(38674),c=r.forwardRef((function(e,t){var n,s=e.as,c=void 0===s?"div":s,u=e.className,m=e.fluid,d=e.bsPrefix,f=(0,l.Z)(e,["as","className","fluid","bsPrefix"]),p=((n={})[d=(0,i.vE)(d,"jumbotron")]=!0,n[d+"-fluid"]=m,n);return r.createElement(c,(0,a.Z)({ref:t},f,{className:o()(u,p)}))}));c.defaultProps={fluid:!1},c.displayName="Jumbotron",t.Z=c},23596:function(e,t,n){"use strict";var a=n(22122),l=n(19756),r=n(78265),s=n.n(r),o=n(41488),i=n(38674),c=["xl","lg","md","sm","xs"],u=o.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,u=e.noGutters,m=e.as,d=void 0===m?"div":m,f=(0,l.Z)(e,["bsPrefix","className","noGutters","as"]),p=(0,i.vE)(n,"row"),g=p+"-cols",E=[];return c.forEach((function(e){var t,n=f[e];delete f[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&E.push(""+g+a+"-"+t)})),o.createElement(d,(0,a.Z)({ref:t},f,{className:s().apply(void 0,[r,p,u&&"no-gutters"].concat(E))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.Z=u}}]);
//# sourceMappingURL=39577.71f7f4c7.chunk.js.map