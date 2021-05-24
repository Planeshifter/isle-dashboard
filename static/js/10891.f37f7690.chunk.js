(self.webpackChunkisle_dashboard=self.webpackChunkisle_dashboard||[]).push([[10891],{41641:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return G}});var s=a(9251),n=a(87757),r=a.n(n),o=a(92137),l=a(6610),c=a(5991),i=a(63349),d=a(10379),u=a(60446),m=a(96156),p=a(41488),h=a(86072),w=a.n(h),f=a(25472),v=a(70048),Z=a(29530),E=a(72945),g=a(23596),b=a(54012),y=a(75018),P=a(73230),x=a(36659),N=a(29619),C=a(58932),k=a(9050),S=a(93391),R=a(47701),I=a(59486),T=a(8682),F=a(4135),M=(a(27184),function(e){return p.createElement(N.Z,{show:e.show,onHide:e.close},p.createElement(N.Z.Header,null,p.createElement(N.Z.Title,null,"New Password Chosen")),p.createElement(N.Z.Body,null,e.message),p.createElement(N.Z.Footer,null,p.createElement(v.Z,{onClick:e.close},e.t("common:close"))))}),L=function(e){(0,d.Z)(a,e);var t=(0,u.Z)(a);function a(e){var s;return(0,l.Z)(this,a),s=t.call(this,e),(0,m.Z)((0,i.Z)(s),"handleSubmit",function(){var e=(0,o.Z)(r().mark((function e(t){var a,n,o,l,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!s.getPasswordValidationState()){e.next=18;break}return a=window.location.hash.substring(15),n=T.parse(a),o=n.token,e.prev=5,e.next=8,w().post(F.ZP+"/update_user_password",{id:o,newPassword:s.state.password});case 8:l=e.sent,s.setState({message:l.data.message,showModal:!0}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(5),e.t0.response?(c="Server response: "+e.t0.response.status+".\n",c+=e.t0.response.data):c=e.t0.message,s.setState({message:c,showModal:!0});case 16:e.next=19;break;case 18:s.setState({showSubmitOverlay:!0,overlayTarget:t.target},(function(){setTimeout((function(){s.setState({showSubmitOverlay:!1})}),4e3)}));case 19:return e.abrupt("return",!1);case 20:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t){return e.apply(this,arguments)}}()),(0,m.Z)((0,i.Z)(s),"handleInputChange",(function(e){var t=e.target,a=t.value,n=t.name;s.setState((0,m.Z)({},n,a))})),(0,m.Z)((0,i.Z)(s),"getPasswordValidationState",(function(){var e=s.state,t=e.password,a=e.passwordRepeat;return!(t.length<6||0===a.length)&&t===a})),(0,m.Z)((0,i.Z)(s),"close",(function(){s.props.history.replace("/")})),s.state={password:"",passwordRepeat:"",showModal:!1},s}return(0,c.Z)(a,[{key:"render",value:function(){var e,t=this.state.password||this.state.passwordRepeat,a=this.getPasswordValidationState();return p.createElement("div",null,p.createElement("div",{className:"login"},p.createElement(Z.Z,{style:{opacity:.9}},p.createElement(Z.Z.Header,null,p.createElement(Z.Z.Title,{as:"h1"},p.createElement("small",null,"Choose a new Password"))),p.createElement(Z.Z.Body,null,p.createElement(x.Z,null,p.createElement(S.Z,{placement:"right",overlay:(e="Please enter a new password with at least six characters",p.createElement(R.Z,{id:"tooltip"},e))},p.createElement(P.Z,{controlId:"form-password"},p.createElement(g.Z,null,p.createElement(E.Z,{sm:2},p.createElement(b.Z,null,this.props.t("common:password"))),p.createElement(E.Z,{sm:10},p.createElement(y.Z,{name:"password",type:"password",placeholder:"Enter new password",onChange:this.handleInputChange,maxLength:30,minLength:6,autoComplete:"new-password",isInvalid:t&&!a}),p.createElement(y.Z.Feedback,{type:"invalid"},"Please enter a new password with at least six characters."))))),p.createElement(P.Z,{controlId:"form-password-confirmation"},p.createElement(g.Z,null,p.createElement(E.Z,{sm:{span:10,offset:2}},p.createElement(y.Z,{name:"passwordRepeat",type:"password",placeholder:"Confirm new password",onChange:this.handleInputChange,maxLength:30,minLength:6,autoComplete:"new-password",isInvalid:t&&!a}),p.createElement(y.Z.Feedback,{type:"invalid"},"Passwords do not match.")))),p.createElement(P.Z,null,p.createElement(v.Z,{variant:"primary",type:"submit",onClick:this.handleSubmit,className:"centered"},this.props.t("common:confirm"))))))),this.state.showModal?p.createElement(M,{show:this.state.showModal,close:this.close,message:this.state.message,t:this.props.t}):null,p.createElement(C.Z,{show:this.state.showSubmitOverlay,target:this.state.overlayTarget,placement:"bottom",containerPadding:20},p.createElement(k.Z,{id:"popover-contained",title:"Input fields are not valid"},"Please make sure that the passwords are valid and match each other before submitting.")))}}]),a}(p.Component),_=(0,I.EN)((0,f.Z)(["common","signup"])(L));var G=(0,s.$j)((function(e){return{settings:e.settings}}),(function(){return{}}))(_)},44503:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var s=Function.prototype.bind.call(Function.prototype.call,[].slice);function n(e,t){return s(e.querySelectorAll(t))}},9050:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var s=a(22122),n=a(19756),r=a(78265),o=a.n(r),l=a(41488),c=(a(90427),a(38674)),i=l.forwardRef((function(e,t){var a=e.as,r=void 0===a?"div":a,i=e.bsPrefix,d=e.className,u=e.children,m=(0,n.Z)(e,["as","bsPrefix","className","children"]);return i=(0,c.vE)(i,"popover-header"),l.createElement(r,(0,s.Z)({ref:t},m,{className:o()(i,d)}),u)})),d=l.forwardRef((function(e,t){var a=e.as,r=void 0===a?"div":a,i=e.bsPrefix,d=e.className,u=e.children,m=(0,n.Z)(e,["as","bsPrefix","className","children"]);return i=(0,c.vE)(i,"popover-body"),l.createElement(r,(0,s.Z)({ref:t},m,{className:o()(d,i)}),u)})),u=l.forwardRef((function(e,t){var a=e.bsPrefix,r=e.placement,i=e.className,u=e.style,m=e.children,p=e.content,h=e.arrowProps,w=(e.popper,e.show,(0,n.Z)(e,["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"])),f=(0,c.vE)(a,"popover"),v=((null==r?void 0:r.split("-"))||[])[0];return l.createElement("div",(0,s.Z)({ref:t,role:"tooltip",style:u,"x-placement":v,className:o()(i,f,v&&"bs-popover-"+v)},w),l.createElement("div",(0,s.Z)({className:"arrow"},h)),p?l.createElement(d,null,m):m)}));u.defaultProps={placement:"right"},u.Title=i,u.Content=d;var m=u},23596:function(e,t,a){"use strict";var s=a(22122),n=a(19756),r=a(78265),o=a.n(r),l=a(41488),c=a(38674),i=["xl","lg","md","sm","xs"],d=l.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,d=e.noGutters,u=e.as,m=void 0===u?"div":u,p=(0,n.Z)(e,["bsPrefix","className","noGutters","as"]),h=(0,c.vE)(a,"row"),w=h+"-cols",f=[];return i.forEach((function(e){var t,a=p[e];delete p[e];var s="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&f.push(""+w+s+"-"+t)})),l.createElement(m,(0,s.Z)({ref:t},p,{className:o().apply(void 0,[r,h,d&&"no-gutters"].concat(f))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.Z=d},27184:function(){}}]);
//# sourceMappingURL=10891.f37f7690.chunk.js.map