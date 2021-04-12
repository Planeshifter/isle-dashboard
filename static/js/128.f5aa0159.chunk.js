(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{4789:function(e,t,a){"use strict";a.r(t);var n=a(98),i=a(485),o=a.n(i),s=a(571),l=a(489),r=a(552),p=a(539),u=a(774),c=a(1444),m=a(991),d=a(531),h=a(507),b=function(e){var t=e.data,a=e.categorical,b=e.showDecision,f=e.t,v=Object(i.useState)(null),g=Object(n.a)(v,2),y=g[0],O=g[1],E=Object(i.useState)(null),j=Object(n.a)(E,2),x=j[0],w=j[1],C=Object(i.useState)(.5),S=Object(n.a)(C,2),P=S[0],K=S[1],D=Object(i.useState)("two-sided"),V=Object(n.a)(D,2),F=V[0],T=V[1],k=Object(i.useState)(.05),B=Object(n.a)(k,2),N=B[0],U=B[1],q=Object(i.useState)(null),L=Object(n.a)(q,2),z=L[0],A=L[1];return o.a.createElement(s.a,{style:{fontSize:"14px"}},o.a.createElement(s.a.Header,{as:"h4"},f("One-Sample Proportion Test"),o.a.createElement(h.a,{title:f("One-Sample Proportion Test"),content:f("One-Sample Proportion Test-description")})),o.a.createElement(s.a.Body,null,o.a.createElement(p.a,{legend:f("variable"),defaultValue:y,options:a,onChange:function(t){var a=e.data[t],n=Object(m.a)(a,t);A(n),O(t),w(n[0])}}),z?o.a.createElement(p.a,{legend:"Success:",defaultValue:x,options:z,onChange:w}):null,o.a.createElement(r.a,{legend:o.a.createElement(u.a,{raw:"p_0"}),defaultValue:P,min:.001,max:.999,step:"any",onChange:K}),o.a.createElement(p.a,{legend:f("direction"),defaultValue:F,options:["less","greater","two-sided"],onChange:T}),o.a.createElement(r.a,{legend:o.a.createElement("span",null,f("significance-level"),o.a.createElement(u.a,{raw:"alpha"})),defaultValue:N,min:0,max:1,step:"any",onChange:U}),o.a.createElement(l.a,{variant:"primary",block:!0,onClick:function(){var a=o.a.createElement(c.a,{data:t,variable:y,success:x,p0:P,direction:F,alpha:N,showDecision:b});e.logAction(d.W,{variable:y,success:x,p0:P,direction:F,alpha:N,showDecision:b}),e.onCreated(a)},disabled:!y},f("calculate"))))};b.defaultProps={categorical:null,logAction:function(){},showDecision:!0},t.default=b},507:function(e,t,a){"use strict";var n=a(485),i=a.n(n),o=a(489),s=a(544),l=a(551),r=a(546),p=a(547);t.a=function(e){var t=i.a.createElement(s.a,{id:"popover-positioned-right"},i.a.createElement(l.a,null,e.title),i.a.createElement(r.a,null,e.content));return i.a.createElement(p.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},i.a.createElement(o.a,{size:"sm",variant:"outline-secondary",className:"question-button"},i.a.createElement("div",{className:"fa fa-question"})))}},520:function(e,t,a){"use strict";var n=a(63),i=a.n(n),o=a(172),s=a.n(o);t.a=function(e){var t="Enter a".concat(1===e.step?"n integer":" number"," ");return e.max!==i.a&&e.min!==s.a?t+="between ".concat(e.min," and ").concat(e.max):e.min!==s.a?t+="larger or equal to ".concat(e.min):e.max!==i.a&&(t+="smaller or equal to ".concat(e.max)),t}},552:function(e,t,a){"use strict";var n=a(555);a(520).a;t.a=n.a},555:function(e,t,a){"use strict";(function(e){var n=a(16),i=a(12),o=a(13),s=a(27),l=a(20),r=a(39),p=a(50),u=a(485),c=a.n(u),m=a(8),d=a.n(m),h=a(30),b=a.n(h),f=a(519),v=a(97),g=a.n(v),y=a(95),O=a.n(y),E=a(40),j=a(53),x=a(510),w=a.n(x),C=a(63),S=a.n(C),P=a(172),K=a.n(P),D=a(497),V=a(504),F=a(586),T=a(520),k=(a(556),b()("isle:number-input")),B=Object(F.a)("number-input"),N=function(t){Object(l.a)(u,t);var a=Object(r.a)(u);function u(t,n){var o;Object(i.a)(this,u),o=a.call(this,t),Object(p.a)(Object(s.a)(o),"handleChange",(function(t){k("Handle change of input field...");var a=t.target.validity.valid,n=t.target.value;o.setState({value:n},(function(){o.props.value||a&&""!==n&&"-"!==n&&"."!==n&&"-."!==n?(n=parseFloat(n),O()(n)&&(n=""),o.props.onChange(n),o.props.bind&&e.lesson.setState({[o.props.bind]:n})):o.props.bind&&e.lesson.setState({[o.props.bind]:n})}))})),Object(p.a)(Object(s.a)(o),"finishChange",(function(t){var a=o.props,n=a.max,i=a.min,s=a.step;k("Finished change...");var l=t.target.value;if(g()(l,"/")){k("Encountered a fraction...");var r=l.split("/");""!==r[0]&&""!==r[1]&&(l=parseFloat(r[0])/parseFloat(r[1]))}O()(l)?l="":""!==l&&"-"!==l&&"."!==l&&"-."!==l&&(l=parseFloat(l)),l>n?l=n:l<i?l=i:1===s&&""!==l&&"-"!==l&&"."!==l&&"-."!==l&&(l-=l%o.props.step),o.props.onChange(l),o.props.onBlur(l),l!==o.state.value&&o.setState({value:l},(function(){o.props.bind&&e.lesson.setState({[o.props.bind]:l})}))}));var l=n;return o.id=t.id||B(t),o.state={value:t.value||(t.bind&&l.state?l.state[t.bind]:t.defaultValue),tooltip:t.tooltip||Object(T.a)(t),prevProps:t},o}return Object(o.a)(u,[{key:"componentDidUpdate",value:function(){if(k("Component did update..."),this.props.bind){var t=e.lesson.state[this.props.bind];t!==this.state.value&&Object(j.isPrimitive)(this.state.value)&&this.setState({value:t})}}},{key:"render",value:function(){var e=this.state.value;if(null!==this.props.value&&(e=this.props.value),!0===this.props.inline){var t=c.a.createElement("span",{className:"input",style:Object(n.a)({padding:"5px"},this.props.style)},this.props.legend?c.a.createElement("label",{htmlFor:this.id}," ",this.props.legend," =  "):null,c.a.createElement("input",{id:this.id,type:this.props.numbersOnly?"number":"text",name:"input",className:"number-number-input",disabled:this.props.disabled,value:e,step:this.props.step,min:this.props.min,max:this.props.max,style:Object(n.a)({width:"80px",paddingLeft:"6px",marginLeft:"3px"},this.props.inputStyle),onChange:this.handleChange,onBlur:this.finishChange,onKeyPress:this.props.onKeyPress,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp,autoComplete:"off"}),this.props.description?c.a.createElement("span",null,"(",this.props.description,")"):c.a.createElement("span",null));return this.props.disabled?t:c.a.createElement(D.a,{id:"number-input-tooltip-inline",placement:"top",tooltip:this.state.tooltip},t)}var a=c.a.createElement("input",{id:this.id,type:this.props.numbersOnly?"number":"text",name:"input",className:"number-number-input",disabled:this.props.disabled,value:e,step:this.props.step,min:this.props.min,max:this.props.max,style:Object(n.a)({width:"80px",marginLeft:"24px"},this.props.inputStyle),onChange:this.handleChange,onBlur:this.finishChange,onKeyPress:this.props.onKeyPress,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp,autoComplete:"off"});return c.a.createElement("div",{className:"input",style:Object(n.a)({marginBottom:"4px",marginTop:"4px"},this.props.style)},this.props.legend?c.a.createElement("span",null,c.a.createElement("label",{htmlFor:this.id},Object(E.isPrimitive)(this.props.legend)?this.props.legend+":":this.props.legend),this.props.description?c.a.createElement("span",null," ",this.props.description):null):null,c.a.createElement(D.a,{id:"number-input-tooltip",placement:this.props.tooltipPlacement,tooltip:this.state.tooltip},c.a.createElement("span",{className:"number-input-span"},a)))}}],[{key:"getDerivedStateFromProps",value:function(t,a){var n={},i=a.prevProps;return t.defaultValue!==i.defaultValue?n.value=t.defaultValue:t.bind!==i.bind&&(n.value=e.lesson.state[t.bind]),t.min!==i.min||t.max!==i.max?n.tooltip=t.tooltip||Object(T.a)(t):t.tooltip&&t.tooltip!==a.tooltip&&(n.tooltip=t.tooltip),w()(n)?null:(k("Created new state from props..."),n.prevProps=t,n)}}]),u}(f.a);N.defaultProps={bind:"",disabled:!1,legend:null,min:K.a,max:S.a,step:1,defaultValue:0,onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){},inline:!1,numbersOnly:!0,style:{},inputStyle:{},value:null,tooltip:null,tooltipPlacement:"left"},N.propTypes={bind:d.a.string,defaultValue:d.a.number,disabled:d.a.bool,inline:d.a.bool,legend:d.a.oneOfType([d.a.string,d.a.node]),max:d.a.number,min:d.a.number,numbersOnly:d.a.bool,onBlur:d.a.func,onChange:d.a.func,onKeyDown:d.a.func,onKeyPress:d.a.func,onKeyUp:d.a.func,step:d.a.oneOfType([d.a.number,d.a.string]),style:d.a.object,inputStyle:d.a.object,value:d.a.number,tooltip:d.a.string,tooltipPlacement:d.a.oneOf(["top","right","bottom","left"])},N.contextType=V.a,t.a=N}).call(this,a(29))},556:function(e,t,a){}}]);
//# sourceMappingURL=128.f5aa0159.chunk.js.map