(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{4831:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(28),s=n(0),c=n.n(s),i=n(3),l=n(12),u=n(13),p=n(20),b=n(39),h=n(1048),m=n(540),d=n(481),f=n(1001),g=n.n(f),E=(n(705),function(e){Object(p.a)(a,e);var t,n=Object(b.a)(a);function a(e){var t;Object(l.a)(this,a),t=n.call(this,e);var r=window.location.hash.substring(12);return t.params=g.a.parse(r),t}return Object(u.a)(a,[{key:"componentDidMount",value:(t=Object(i.a)(c.a.mark((function e(){var t,n,a,r,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.shibboleth(this.params);case 2:if(!(t=e.sent)||!t.data){e.next=10;break}if(n=t.data,a=n.message,r=n.token,o=n.id,"ok"!==a){e.next=10;break}return e.next=8,this.props.fetchCredentials({token:r,id:o});case 8:(s=e.sent)&&this.props.getEnrollableCohorts(s);case 10:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this.props.t;return r.a.createElement("div",{className:"login"},r.a.createElement(m.a,{className:"login-panel"},r.a.createElement(m.a.Header,null,r.a.createElement(m.a.Title,{as:"h1",style:{textAlign:"center"}},"ISLE ",r.a.createElement("small",null,"Dashboard"))),r.a.createElement(m.a.Footer,{style:{background:"rgba(255,255,255,0.6)",textAlign:"right"}},r.a.createElement(d.a,{to:"/login"},e("common:login")),r.a.createElement("span",null," | "),r.a.createElement(d.a,{to:"/signup"},e("common:register")))))}}]),a}(a.Component)),k=Object(h.a)(["common"])(E),v=n(58),j=n(57);var w=Object(o.c)((function(){return{}}),(function(e){return{shibboleth:Object(v.d)(e),fetchCredentials:Object(v.b)(e),getEnrollableCohorts:Object(j.g)(e)}}))(k);t.default=w},705:function(e,t,n){}}]);
//# sourceMappingURL=160.5815144e.chunk.js.map