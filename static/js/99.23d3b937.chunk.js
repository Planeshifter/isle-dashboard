(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1173:function(e,t,a){"use strict";t.a=function(e,t){var a=new String(e);return a.categories=t,a}},4768:function(e,t,a){"use strict";a.r(t);var n=a(485),i=a.n(n),s=a(97),l=a.n(s),o=a(36),r=a.n(o),p=a(970),u=a.n(p),c=a(539),d=a(526),h=a(552),m=a(587),b=a(1173),f=a(1454),v=a(531),g=a(507),y=function(e){var t=e.quantitative,a=e.originalQuantitative,n=e.t;return i.a.createElement(m.a,{title:i.a.createElement("span",null,n("kmeans Clustering"),i.a.createElement(g.a,{title:n("kmeans Clustering"),content:n("kmeans-description")})),autoStart:!1,onGenerate:function(t,a,n,s){var o=i.a.createElement(f.a,{data:e.data,variables:t,K:a,initialization:s,onResult:function(i){if(n){var s=r()(e.data,1),o=e.categorical.slice(),p=t.map((function(e){return e[0]})).join(""),c=Object(b.a)("kmeans_cluster_"+p,u()(0,a,1).map((function(e){return"Cluster ".concat(e+1)})));s[c]=i.clusters.map((function(e){return"Cluster ".concat(e+1)})),l()(o,c)||o.push(c),e.onGenerate(o,s)}}});e.logAction(v.o,{variables:t,K:a,attach:n,initialization:s}),e.onCreated(o)}},i.a.createElement(c.a,{legend:n("variables"),multi:!0,defaultValue:a,options:t,closeMenuOnSelect:!1}),i.a.createElement(h.a,{legend:n("number-of-clusters"),min:1,defaultValue:3}),i.a.createElement(d.a,{legend:n("attach-clusters-table"),defaultValue:!1}),i.a.createElement(c.a,{legend:"Initialization method",options:["kmeans++","random","mostDistant"],defaultValue:"kmeans++"}))};y.defaultProps={logAction:function(){}},t.default=y},507:function(e,t,a){"use strict";var n=a(485),i=a.n(n),s=a(489),l=a(544),o=a(551),r=a(546),p=a(547);t.a=function(e){var t=i.a.createElement(l.a,{id:"popover-positioned-right"},i.a.createElement(o.a,null,e.title),i.a.createElement(r.a,null,e.content));return i.a.createElement(p.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},i.a.createElement(s.a,{size:"sm",variant:"outline-secondary",className:"question-button"},i.a.createElement("div",{className:"fa fa-question"})))}},520:function(e,t,a){"use strict";var n=a(63),i=a.n(n),s=a(172),l=a.n(s);t.a=function(e){var t="Enter a".concat(1===e.step?"n integer":" number"," ");return e.max!==i.a&&e.min!==l.a?t+="between ".concat(e.min," and ").concat(e.max):e.min!==l.a?t+="larger or equal to ".concat(e.min):e.max!==i.a&&(t+="smaller or equal to ".concat(e.max)),t}},526:function(e,t,a){"use strict";var n=a(529);t.a=n.a},529:function(e,t,a){"use strict";(function(e){var n=a(16),i=a(12),s=a(13),l=a(27),o=a(20),r=a(39),p=a(50),u=a(485),c=a.n(u),d=a(8),h=a.n(d),m=a(510),b=a.n(m),f=a(177),v=a.n(f),g=a(519),y=a(497),O=a(504),E=(a(530),function(t){Object(o.a)(u,t);var a=Object(r.a)(u);function u(t,n){var s;Object(i.a)(this,u),s=a.call(this,t),Object(p.a)(Object(l.a)(s),"updateValue",(function(t){s.setState({value:t},(function(){s.props.bind&&e.lesson.setState({[s.props.bind]:t})}))})),Object(p.a)(Object(l.a)(s),"handleChange",(function(e){var t=e.target.checked;s.props.onChange(t),s.updateValue(t)})),Object(p.a)(Object(l.a)(s),"handleSpanChange",(function(e){var t=null!==s.props.value?!s.props.value:!s.state.value;s.props.onChange(t),s.updateValue(t)}));var o=n;return s.state={value:t.bind&&o.state?o.state[t.bind]:t.defaultValue,bind:t.bind,defaultValue:t.defaultValue},s}return Object(s.a)(u,[{key:"componentDidUpdate",value:function(){if(this.props.bind){var t=e.lesson.state[this.props.bind];t!==this.state.value&&this.setState({value:t})}}},{key:"render",value:function(){var e=this.state.value;null!==this.props.value&&(e=this.props.value);var t=c.a.createElement("input",{className:"checkbox-input",type:"checkbox",checked:e,value:"checkbox",onChange:this.handleChange,disabled:this.props.disabled,"aria-label":this.props.tooltip});if(!0===this.props.inline)return c.a.createElement(y.a,{tooltip:this.props.tooltip,placement:this.props.tooltipPlacement},c.a.createElement("span",{style:Object(n.a)({marginLeft:"8px"},this.props.style)},t,c.a.createElement("span",{role:"button",tabIndex:0,className:"checkbox-legend",style:{color:this.props.disabled?"darkgray":null},onClick:this.handleSpanChange,onKeyPress:this.handleSpanChange},this.props.legend)));var a=this.props.disabled?v.a:this.handleSpanChange;return c.a.createElement(y.a,{tooltip:this.props.tooltip,placement:this.props.tooltipPlacement},c.a.createElement("div",{className:"input checkbox-input-div",style:this.props.style},t,c.a.createElement("span",{role:"button",tabIndex:0,className:"checkbox-legend",style:{color:this.props.disabled?"darkgray":null},onClick:a,onKeyPress:a},this.props.legend)))}}],[{key:"getDerivedStateFromProps",value:function(t,a){var n={};return t.defaultValue!==a.defaultValue?(n.value=t.defaultValue,n.defaultValue=t.defaultValue):t.bind!==a.bind&&(n.value=e.lesson.state[t.bind],n.bind=t.bind),b()(n)?null:n}}]),u}(g.a));E.defaultProps={bind:"",onChange:function(){},defaultValue:!1,value:null,disabled:!1,inline:!1,legend:"",tooltip:"",tooltipPlacement:"right",style:{}},E.propTypes={bind:h.a.string,defaultValue:h.a.bool,value:h.a.bool,disabled:h.a.bool,inline:h.a.bool,onChange:h.a.func,legend:h.a.oneOfType([h.a.string,h.a.node]),tooltip:h.a.string,tooltipPlacement:h.a.oneOf(["left","top","right","bottom"]),style:h.a.object},E.contextType=O.a,t.a=E}).call(this,a(29))},530:function(e,t,a){},552:function(e,t,a){"use strict";var n=a(555);a(520).a;t.a=n.a},555:function(e,t,a){"use strict";(function(e){var n=a(16),i=a(12),s=a(13),l=a(27),o=a(20),r=a(39),p=a(50),u=a(485),c=a.n(u),d=a(8),h=a.n(d),m=a(30),b=a.n(m),f=a(519),v=a(97),g=a.n(v),y=a(95),O=a.n(y),E=a(40),C=a(53),j=a(510),x=a.n(j),k=a(63),P=a.n(k),V=a(172),K=a.n(V),S=a(497),w=a(504),D=a(586),N=a(520),F=(a(556),b()("isle:number-input")),T=Object(D.a)("number-input"),U=function(t){Object(o.a)(u,t);var a=Object(r.a)(u);function u(t,n){var s;Object(i.a)(this,u),s=a.call(this,t),Object(p.a)(Object(l.a)(s),"handleChange",(function(t){F("Handle change of input field...");var a=t.target.validity.valid,n=t.target.value;s.setState({value:n},(function(){s.props.value||a&&""!==n&&"-"!==n&&"."!==n&&"-."!==n?(n=parseFloat(n),O()(n)&&(n=""),s.props.onChange(n),s.props.bind&&e.lesson.setState({[s.props.bind]:n})):s.props.bind&&e.lesson.setState({[s.props.bind]:n})}))})),Object(p.a)(Object(l.a)(s),"finishChange",(function(t){var a=s.props,n=a.max,i=a.min,l=a.step;F("Finished change...");var o=t.target.value;if(g()(o,"/")){F("Encountered a fraction...");var r=o.split("/");""!==r[0]&&""!==r[1]&&(o=parseFloat(r[0])/parseFloat(r[1]))}O()(o)?o="":""!==o&&"-"!==o&&"."!==o&&"-."!==o&&(o=parseFloat(o)),o>n?o=n:o<i?o=i:1===l&&""!==o&&"-"!==o&&"."!==o&&"-."!==o&&(o-=o%s.props.step),s.props.onChange(o),s.props.onBlur(o),o!==s.state.value&&s.setState({value:o},(function(){s.props.bind&&e.lesson.setState({[s.props.bind]:o})}))}));var o=n;return s.id=t.id||T(t),s.state={value:t.value||(t.bind&&o.state?o.state[t.bind]:t.defaultValue),tooltip:t.tooltip||Object(N.a)(t),prevProps:t},s}return Object(s.a)(u,[{key:"componentDidUpdate",value:function(){if(F("Component did update..."),this.props.bind){var t=e.lesson.state[this.props.bind];t!==this.state.value&&Object(C.isPrimitive)(this.state.value)&&this.setState({value:t})}}},{key:"render",value:function(){var e=this.state.value;if(null!==this.props.value&&(e=this.props.value),!0===this.props.inline){var t=c.a.createElement("span",{className:"input",style:Object(n.a)({padding:"5px"},this.props.style)},this.props.legend?c.a.createElement("label",{htmlFor:this.id}," ",this.props.legend," =  "):null,c.a.createElement("input",{id:this.id,type:this.props.numbersOnly?"number":"text",name:"input",className:"number-number-input",disabled:this.props.disabled,value:e,step:this.props.step,min:this.props.min,max:this.props.max,style:Object(n.a)({width:"80px",paddingLeft:"6px",marginLeft:"3px"},this.props.inputStyle),onChange:this.handleChange,onBlur:this.finishChange,onKeyPress:this.props.onKeyPress,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp,autoComplete:"off"}),this.props.description?c.a.createElement("span",null,"(",this.props.description,")"):c.a.createElement("span",null));return this.props.disabled?t:c.a.createElement(S.a,{id:"number-input-tooltip-inline",placement:"top",tooltip:this.state.tooltip},t)}var a=c.a.createElement("input",{id:this.id,type:this.props.numbersOnly?"number":"text",name:"input",className:"number-number-input",disabled:this.props.disabled,value:e,step:this.props.step,min:this.props.min,max:this.props.max,style:Object(n.a)({width:"80px",marginLeft:"24px"},this.props.inputStyle),onChange:this.handleChange,onBlur:this.finishChange,onKeyPress:this.props.onKeyPress,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp,autoComplete:"off"});return c.a.createElement("div",{className:"input",style:Object(n.a)({marginBottom:"4px",marginTop:"4px"},this.props.style)},this.props.legend?c.a.createElement("span",null,c.a.createElement("label",{htmlFor:this.id},Object(E.isPrimitive)(this.props.legend)?this.props.legend+":":this.props.legend),this.props.description?c.a.createElement("span",null," ",this.props.description):null):null,c.a.createElement(S.a,{id:"number-input-tooltip",placement:this.props.tooltipPlacement,tooltip:this.state.tooltip},c.a.createElement("span",{className:"number-input-span"},a)))}}],[{key:"getDerivedStateFromProps",value:function(t,a){var n={},i=a.prevProps;return t.defaultValue!==i.defaultValue?n.value=t.defaultValue:t.bind!==i.bind&&(n.value=e.lesson.state[t.bind]),t.min!==i.min||t.max!==i.max?n.tooltip=t.tooltip||Object(N.a)(t):t.tooltip&&t.tooltip!==a.tooltip&&(n.tooltip=t.tooltip),x()(n)?null:(F("Created new state from props..."),n.prevProps=t,n)}}]),u}(f.a);U.defaultProps={bind:"",disabled:!1,legend:null,min:K.a,max:P.a,step:1,defaultValue:0,onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){},inline:!1,numbersOnly:!0,style:{},inputStyle:{},value:null,tooltip:null,tooltipPlacement:"left"},U.propTypes={bind:h.a.string,defaultValue:h.a.number,disabled:h.a.bool,inline:h.a.bool,legend:h.a.oneOfType([h.a.string,h.a.node]),max:h.a.number,min:h.a.number,numbersOnly:h.a.bool,onBlur:h.a.func,onChange:h.a.func,onKeyDown:h.a.func,onKeyPress:h.a.func,onKeyUp:h.a.func,step:h.a.oneOfType([h.a.number,h.a.string]),style:h.a.object,inputStyle:h.a.object,value:h.a.number,tooltip:h.a.string,tooltipPlacement:h.a.oneOf(["top","right","bottom","left"])},U.contextType=w.a,t.a=U}).call(this,a(29))},556:function(e,t,a){},587:function(e,t,a){"use strict";var n=a(514),i=Object(n.a)((function(){return a.e(92).then(a.bind(null,747))}));t.a=i}}]);
//# sourceMappingURL=99.23d3b937.chunk.js.map