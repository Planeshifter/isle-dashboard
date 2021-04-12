(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{4753:function(e,t,a){"use strict";a.r(t);var n=a(12),l=a(13),i=a(20),o=a(39),s=a(485),r=a.n(s),p=a(30),u=a.n(p),c=a(489),d=a(571),h=a(526),b=a(539),m=a(552),v=a(1431),f=a(531),g=a(507),y=u()("isle:data-explorer:contingency-table"),C=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={relativeFreqs:!1,rowVar:e.defaultRowVar||e.variables[0],colVar:e.defaultColVar||e.variables[1],group:null,nDecimalPlaces:3,variables:e.variables,display:[]},l}return Object(l.a)(a,[{key:"generateContingencyTable",value:function(){var e=this.state,t=e.rowVar,a=e.colVar,n=e.group,l=e.relativeFreqs,i=e.nDecimalPlaces,o=e.display;if(!t||!a)return this.props.session.addNotification({title:"Select Variables",message:"You need to select a row and column variable for the contingency table",level:"warning",position:"tr"});var s=r.a.createElement(v.a,{rowVar:t,colVar:a,group:n,relativeFreqs:l,nDecimalPlaces:i,display:o,data:this.props.data});this.props.logAction(f.f,{rowVar:t,colVar:a,group:n,relativeFreqs:l,display:o}),this.props.onCreated(s)}},{key:"render",value:function(){var e=this,t=this.props,a=t.variables,n=t.groupingVariables,l=t.t;return r.a.createElement(d.a,null,r.a.createElement(d.a.Header,{as:"h4"},l("Contingency Table"),r.a.createElement(g.a,{title:l("Contingency Table"),content:l("Contingency Table-description")})),r.a.createElement(d.a.Body,null,r.a.createElement(b.a,{legend:l("row-variable"),defaultValue:this.state.rowVar,options:a,onChange:function(t){e.setState({rowVar:t})}}),r.a.createElement(b.a,{legend:l("column-variable"),defaultValue:this.state.colVar,options:a,onChange:function(t){e.setState({colVar:t})}}),r.a.createElement(b.a,{legend:l("group-by"),options:n,clearable:!0,menuPlacement:"top",onChange:function(t){e.setState({group:t})},tooltip:l("contingency-table-group-tooltip")}),r.a.createElement(h.a,{legend:l("relative-frequency"),defaultValue:!1,onChange:function(){e.setState({relativeFreqs:!e.state.relativeFreqs})}}),r.a.createElement(b.a,{legend:l("display"),options:["Row Percent","Column Percent"],multi:!0,onChange:function(t){e.setState({display:t||[]})}}),this.state.relativeFreqs||this.state.display.length>0?r.a.createElement("p",null,l("report-relative-frequencies"),r.a.createElement(m.a,{inline:!0,width:50,max:16,min:0,defaultValue:this.state.nDecimalPlaces,onChange:function(t){e.setState({nDecimalPlaces:t})}}),l("decimal-places")):null,r.a.createElement(c.a,{variant:"primary",block:!0,onClick:this.generateContingencyTable.bind(this)},l("generate"))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.variables.length!==t.variables.length?(y("Available variables have changed..."),{rowVar:e.defaultRowVar||e.variables[0],colVar:e.defaultColVar||e.variables[1],variables:e.variables}):null}}]),a}(s.Component);C.defaultProps={defaultRowVar:null,defaultColVar:null,groupingVariables:null,logAction:function(){}},t.default=C},507:function(e,t,a){"use strict";var n=a(485),l=a.n(n),i=a(489),o=a(544),s=a(551),r=a(546),p=a(547);t.a=function(e){var t=l.a.createElement(o.a,{id:"popover-positioned-right"},l.a.createElement(s.a,null,e.title),l.a.createElement(r.a,null,e.content));return l.a.createElement(p.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},l.a.createElement(i.a,{size:"sm",variant:"outline-secondary",className:"question-button"},l.a.createElement("div",{className:"fa fa-question"})))}},520:function(e,t,a){"use strict";var n=a(63),l=a.n(n),i=a(172),o=a.n(i);t.a=function(e){var t="Enter a".concat(1===e.step?"n integer":" number"," ");return e.max!==l.a&&e.min!==o.a?t+="between ".concat(e.min," and ").concat(e.max):e.min!==o.a?t+="larger or equal to ".concat(e.min):e.max!==l.a&&(t+="smaller or equal to ".concat(e.max)),t}},526:function(e,t,a){"use strict";var n=a(529);t.a=n.a},529:function(e,t,a){"use strict";(function(e){var n=a(16),l=a(12),i=a(13),o=a(27),s=a(20),r=a(39),p=a(50),u=a(485),c=a.n(u),d=a(8),h=a.n(d),b=a(510),m=a.n(b),v=a(177),f=a.n(v),g=a(519),y=a(497),C=a(504),V=(a(530),function(t){Object(s.a)(u,t);var a=Object(r.a)(u);function u(t,n){var i;Object(l.a)(this,u),i=a.call(this,t),Object(p.a)(Object(o.a)(i),"updateValue",(function(t){i.setState({value:t},(function(){i.props.bind&&e.lesson.setState({[i.props.bind]:t})}))})),Object(p.a)(Object(o.a)(i),"handleChange",(function(e){var t=e.target.checked;i.props.onChange(t),i.updateValue(t)})),Object(p.a)(Object(o.a)(i),"handleSpanChange",(function(e){var t=null!==i.props.value?!i.props.value:!i.state.value;i.props.onChange(t),i.updateValue(t)}));var s=n;return i.state={value:t.bind&&s.state?s.state[t.bind]:t.defaultValue,bind:t.bind,defaultValue:t.defaultValue},i}return Object(i.a)(u,[{key:"componentDidUpdate",value:function(){if(this.props.bind){var t=e.lesson.state[this.props.bind];t!==this.state.value&&this.setState({value:t})}}},{key:"render",value:function(){var e=this.state.value;null!==this.props.value&&(e=this.props.value);var t=c.a.createElement("input",{className:"checkbox-input",type:"checkbox",checked:e,value:"checkbox",onChange:this.handleChange,disabled:this.props.disabled,"aria-label":this.props.tooltip});if(!0===this.props.inline)return c.a.createElement(y.a,{tooltip:this.props.tooltip,placement:this.props.tooltipPlacement},c.a.createElement("span",{style:Object(n.a)({marginLeft:"8px"},this.props.style)},t,c.a.createElement("span",{role:"button",tabIndex:0,className:"checkbox-legend",style:{color:this.props.disabled?"darkgray":null},onClick:this.handleSpanChange,onKeyPress:this.handleSpanChange},this.props.legend)));var a=this.props.disabled?f.a:this.handleSpanChange;return c.a.createElement(y.a,{tooltip:this.props.tooltip,placement:this.props.tooltipPlacement},c.a.createElement("div",{className:"input checkbox-input-div",style:this.props.style},t,c.a.createElement("span",{role:"button",tabIndex:0,className:"checkbox-legend",style:{color:this.props.disabled?"darkgray":null},onClick:a,onKeyPress:a},this.props.legend)))}}],[{key:"getDerivedStateFromProps",value:function(t,a){var n={};return t.defaultValue!==a.defaultValue?(n.value=t.defaultValue,n.defaultValue=t.defaultValue):t.bind!==a.bind&&(n.value=e.lesson.state[t.bind],n.bind=t.bind),m()(n)?null:n}}]),u}(g.a));V.defaultProps={bind:"",onChange:function(){},defaultValue:!1,value:null,disabled:!1,inline:!1,legend:"",tooltip:"",tooltipPlacement:"right",style:{}},V.propTypes={bind:h.a.string,defaultValue:h.a.bool,value:h.a.bool,disabled:h.a.bool,inline:h.a.bool,onChange:h.a.func,legend:h.a.oneOfType([h.a.string,h.a.node]),tooltip:h.a.string,tooltipPlacement:h.a.oneOf(["left","top","right","bottom"]),style:h.a.object},V.contextType=C.a,t.a=V}).call(this,a(29))},530:function(e,t,a){},552:function(e,t,a){"use strict";var n=a(555);a(520).a;t.a=n.a},555:function(e,t,a){"use strict";(function(e){var n=a(16),l=a(12),i=a(13),o=a(27),s=a(20),r=a(39),p=a(50),u=a(485),c=a.n(u),d=a(8),h=a.n(d),b=a(30),m=a.n(b),v=a(519),f=a(97),g=a.n(f),y=a(95),C=a.n(y),V=a(40),E=a(53),O=a(510),x=a.n(O),j=a(63),P=a.n(j),w=a(172),S=a.n(w),k=a(497),K=a(504),F=a(586),D=a(520),q=(a(556),m()("isle:number-input")),T=Object(F.a)("number-input"),N=function(t){Object(s.a)(u,t);var a=Object(r.a)(u);function u(t,n){var i;Object(l.a)(this,u),i=a.call(this,t),Object(p.a)(Object(o.a)(i),"handleChange",(function(t){q("Handle change of input field...");var a=t.target.validity.valid,n=t.target.value;i.setState({value:n},(function(){i.props.value||a&&""!==n&&"-"!==n&&"."!==n&&"-."!==n?(n=parseFloat(n),C()(n)&&(n=""),i.props.onChange(n),i.props.bind&&e.lesson.setState({[i.props.bind]:n})):i.props.bind&&e.lesson.setState({[i.props.bind]:n})}))})),Object(p.a)(Object(o.a)(i),"finishChange",(function(t){var a=i.props,n=a.max,l=a.min,o=a.step;q("Finished change...");var s=t.target.value;if(g()(s,"/")){q("Encountered a fraction...");var r=s.split("/");""!==r[0]&&""!==r[1]&&(s=parseFloat(r[0])/parseFloat(r[1]))}C()(s)?s="":""!==s&&"-"!==s&&"."!==s&&"-."!==s&&(s=parseFloat(s)),s>n?s=n:s<l?s=l:1===o&&""!==s&&"-"!==s&&"."!==s&&"-."!==s&&(s-=s%i.props.step),i.props.onChange(s),i.props.onBlur(s),s!==i.state.value&&i.setState({value:s},(function(){i.props.bind&&e.lesson.setState({[i.props.bind]:s})}))}));var s=n;return i.id=t.id||T(t),i.state={value:t.value||(t.bind&&s.state?s.state[t.bind]:t.defaultValue),tooltip:t.tooltip||Object(D.a)(t),prevProps:t},i}return Object(i.a)(u,[{key:"componentDidUpdate",value:function(){if(q("Component did update..."),this.props.bind){var t=e.lesson.state[this.props.bind];t!==this.state.value&&Object(E.isPrimitive)(this.state.value)&&this.setState({value:t})}}},{key:"render",value:function(){var e=this.state.value;if(null!==this.props.value&&(e=this.props.value),!0===this.props.inline){var t=c.a.createElement("span",{className:"input",style:Object(n.a)({padding:"5px"},this.props.style)},this.props.legend?c.a.createElement("label",{htmlFor:this.id}," ",this.props.legend," =  "):null,c.a.createElement("input",{id:this.id,type:this.props.numbersOnly?"number":"text",name:"input",className:"number-number-input",disabled:this.props.disabled,value:e,step:this.props.step,min:this.props.min,max:this.props.max,style:Object(n.a)({width:"80px",paddingLeft:"6px",marginLeft:"3px"},this.props.inputStyle),onChange:this.handleChange,onBlur:this.finishChange,onKeyPress:this.props.onKeyPress,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp,autoComplete:"off"}),this.props.description?c.a.createElement("span",null,"(",this.props.description,")"):c.a.createElement("span",null));return this.props.disabled?t:c.a.createElement(k.a,{id:"number-input-tooltip-inline",placement:"top",tooltip:this.state.tooltip},t)}var a=c.a.createElement("input",{id:this.id,type:this.props.numbersOnly?"number":"text",name:"input",className:"number-number-input",disabled:this.props.disabled,value:e,step:this.props.step,min:this.props.min,max:this.props.max,style:Object(n.a)({width:"80px",marginLeft:"24px"},this.props.inputStyle),onChange:this.handleChange,onBlur:this.finishChange,onKeyPress:this.props.onKeyPress,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp,autoComplete:"off"});return c.a.createElement("div",{className:"input",style:Object(n.a)({marginBottom:"4px",marginTop:"4px"},this.props.style)},this.props.legend?c.a.createElement("span",null,c.a.createElement("label",{htmlFor:this.id},Object(V.isPrimitive)(this.props.legend)?this.props.legend+":":this.props.legend),this.props.description?c.a.createElement("span",null," ",this.props.description):null):null,c.a.createElement(k.a,{id:"number-input-tooltip",placement:this.props.tooltipPlacement,tooltip:this.state.tooltip},c.a.createElement("span",{className:"number-input-span"},a)))}}],[{key:"getDerivedStateFromProps",value:function(t,a){var n={},l=a.prevProps;return t.defaultValue!==l.defaultValue?n.value=t.defaultValue:t.bind!==l.bind&&(n.value=e.lesson.state[t.bind]),t.min!==l.min||t.max!==l.max?n.tooltip=t.tooltip||Object(D.a)(t):t.tooltip&&t.tooltip!==a.tooltip&&(n.tooltip=t.tooltip),x()(n)?null:(q("Created new state from props..."),n.prevProps=t,n)}}]),u}(v.a);N.defaultProps={bind:"",disabled:!1,legend:null,min:S.a,max:P.a,step:1,defaultValue:0,onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){},inline:!1,numbersOnly:!0,style:{},inputStyle:{},value:null,tooltip:null,tooltipPlacement:"left"},N.propTypes={bind:h.a.string,defaultValue:h.a.number,disabled:h.a.bool,inline:h.a.bool,legend:h.a.oneOfType([h.a.string,h.a.node]),max:h.a.number,min:h.a.number,numbersOnly:h.a.bool,onBlur:h.a.func,onChange:h.a.func,onKeyDown:h.a.func,onKeyPress:h.a.func,onKeyUp:h.a.func,step:h.a.oneOfType([h.a.number,h.a.string]),style:h.a.object,inputStyle:h.a.object,value:h.a.number,tooltip:h.a.string,tooltipPlacement:h.a.oneOf(["top","right","bottom","left"])},N.contextType=K.a,t.a=N}).call(this,a(29))},556:function(e,t,a){}}]);
//# sourceMappingURL=104.43a4c389.chunk.js.map