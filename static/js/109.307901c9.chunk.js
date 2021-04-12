(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{4779:function(e,t,a){"use strict";a.r(t);var n=a(98),l=a(485),i=a.n(l),o=a(489),s=a(571),r=a(97),c=a.n(r),p=a(34),u=a.n(p),d=a(526),b=a(539),h=a(860),m=a(686),g=a(1269),f=a(531),v=a(507),y=function(e){var t=e.variables,a=e.groupingVariables,r=e.defaultX,p=e.defaultY,y=e.t,E=Object(l.useState)(r||t[0]),O=Object(n.a)(E,2),j=O[0],S=O[1],C=Object(l.useState)(p||t[1]),x=Object(n.a)(C,2),V=x[0],w=x[1],k=Object(l.useState)(null),L=Object(n.a)(k,2),P=L[0],T=L[1],I=Object(l.useState)(null),N=Object(n.a)(I,2),R=N[0],B=N[1],z=Object(l.useState)(null),F=Object(n.a)(z,2),M=F[0],q=F[1],D=Object(l.useState)(null),A=Object(n.a)(D,2),J=A[0],K=A[1],U=Object(l.useState)(!1),X=Object(n.a)(U,2),Y=X[0],H=X[1],W=Object(l.useState)(["linear"]),G=Object(n.a)(W,2),Q=G[0],Z=G[1],$=Object(l.useState)(null),_=Object(n.a)($,2),ee=_[0],te=_[1],ae=Object(l.useState)(.66),ne=Object(n.a)(ae,2),le=ne[0],ie=ne[1];return i.a.createElement(s.a,{style:{minWidth:650}},i.a.createElement(s.a.Header,{as:"h4"},y("Scatterplot"),i.a.createElement(v.a,{title:y("Scatterplot"),content:y("Scatterplot-description")})),i.a.createElement(s.a.Body,null,i.a.createElement("div",{style:{width:"100%"}},i.a.createElement(b.a,{legend:y("x-axis"),defaultValue:j,options:t,style:{float:"left",paddingRight:10,width:"33.3%"},onChange:S}),i.a.createElement(b.a,{legend:y("y-axis"),defaultValue:V,style:{float:"left",paddingLeft:10,paddingRight:10,width:"33.3%"},options:t,onChange:w}),i.a.createElement(b.a,{legend:"Labels:",style:{float:"left",paddingLeft:10,width:"33.3%"},clearable:!0,options:a,onChange:K})),i.a.createElement("div",{style:{width:"100%"}},i.a.createElement(b.a,{legend:"Color:",options:a,clearable:!0,style:{float:"left",paddingRight:10,width:"33.3%"},onChange:T}),i.a.createElement(b.a,{legend:"Type:",options:a,clearable:!0,style:{float:"left",paddingLeft:10,paddingRight:10,width:"33.3%"},onChange:B}),i.a.createElement(b.a,{legend:"Size:",options:t,clearable:!0,style:{float:"left",paddingLeft:10,width:"33.3%"},onChange:q})),i.a.createElement("div",{style:{clear:"both"}}),i.a.createElement("div",{style:{opacity:e.showRegressionOption?1:0}},i.a.createElement(d.a,{inline:!0,legend:"Show Regression Model",defaultValue:!1,onChange:function(){H(!Y)}}),i.a.createElement("div",{style:{width:"100%"}},i.a.createElement(b.a,{legend:"Method:",defaultValue:"linear",multi:!0,options:["linear","smooth"],style:{float:"right",paddingLeft:10,width:"45%"},disabled:!Y,onChange:function(e){u()(e)||(e=[e]),Z(e)}}),i.a.createElement(b.a,{legend:"Split By:",options:e.groupingVariables,clearable:!0,style:{float:"right",paddingLeft:10,width:"45%"},disabled:!Y,onChange:te}),i.a.createElement(h.a,{legend:y("smoothing-parameter"),disabled:!c()(Q,"smooth"),min:.01,max:1,step:.01,defaultValue:.66,onChange:ie}))),i.a.createElement("div",{style:{clear:"both"}}),i.a.createElement(o.a,{variant:"primary",block:!0,onClick:function(){var t=Object(m.a)(6),a={xval:j,yval:V,plotId:t};P&&(a.color=P),R&&(a.type=R),M&&(a.size=M),J&&(a.text=J),Y&&(a.regressionLine=Y,a.regressionMethod=Q),c()(Q,"smooth")&&(a.smoothSpan=le),ee&&(a.lineBy=ee);var n=i.a.createElement(g.a,{data:e.data,xval:j,yval:V,color:P,type:R,size:M,text:J,regressionLine:Y,regressionMethod:Q,lineBy:ee,smoothSpan:le,id:t,action:a,onSelected:e.onSelected,onShare:function(){e.session.addNotification({title:y("plot-shared"),message:y("plot-shared-message"),level:"success",position:"tr"}),e.logAction(f.M,a)}});e.logAction(f.B,a),e.onCreated(n)}},y("generate"))))};y.defaultProps={defaultX:null,defaultY:null,groupingVariables:null,logAction:function(){},onSelected:function(){},showRegressionOption:!0},t.default=y},507:function(e,t,a){"use strict";var n=a(485),l=a.n(n),i=a(489),o=a(544),s=a(551),r=a(546),c=a(547);t.a=function(e){var t=l.a.createElement(o.a,{id:"popover-positioned-right"},l.a.createElement(s.a,null,e.title),l.a.createElement(r.a,null,e.content));return l.a.createElement(c.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},l.a.createElement(i.a,{size:"sm",variant:"outline-secondary",className:"question-button"},l.a.createElement("div",{className:"fa fa-question"})))}},526:function(e,t,a){"use strict";var n=a(529);t.a=n.a},529:function(e,t,a){"use strict";(function(e){var n=a(16),l=a(12),i=a(13),o=a(27),s=a(20),r=a(39),c=a(50),p=a(485),u=a.n(p),d=a(8),b=a.n(d),h=a(510),m=a.n(h),g=a(177),f=a.n(g),v=a(519),y=a(497),E=a(504),O=(a(530),function(t){Object(s.a)(p,t);var a=Object(r.a)(p);function p(t,n){var i;Object(l.a)(this,p),i=a.call(this,t),Object(c.a)(Object(o.a)(i),"updateValue",(function(t){i.setState({value:t},(function(){i.props.bind&&e.lesson.setState({[i.props.bind]:t})}))})),Object(c.a)(Object(o.a)(i),"handleChange",(function(e){var t=e.target.checked;i.props.onChange(t),i.updateValue(t)})),Object(c.a)(Object(o.a)(i),"handleSpanChange",(function(e){var t=null!==i.props.value?!i.props.value:!i.state.value;i.props.onChange(t),i.updateValue(t)}));var s=n;return i.state={value:t.bind&&s.state?s.state[t.bind]:t.defaultValue,bind:t.bind,defaultValue:t.defaultValue},i}return Object(i.a)(p,[{key:"componentDidUpdate",value:function(){if(this.props.bind){var t=e.lesson.state[this.props.bind];t!==this.state.value&&this.setState({value:t})}}},{key:"render",value:function(){var e=this.state.value;null!==this.props.value&&(e=this.props.value);var t=u.a.createElement("input",{className:"checkbox-input",type:"checkbox",checked:e,value:"checkbox",onChange:this.handleChange,disabled:this.props.disabled,"aria-label":this.props.tooltip});if(!0===this.props.inline)return u.a.createElement(y.a,{tooltip:this.props.tooltip,placement:this.props.tooltipPlacement},u.a.createElement("span",{style:Object(n.a)({marginLeft:"8px"},this.props.style)},t,u.a.createElement("span",{role:"button",tabIndex:0,className:"checkbox-legend",style:{color:this.props.disabled?"darkgray":null},onClick:this.handleSpanChange,onKeyPress:this.handleSpanChange},this.props.legend)));var a=this.props.disabled?f.a:this.handleSpanChange;return u.a.createElement(y.a,{tooltip:this.props.tooltip,placement:this.props.tooltipPlacement},u.a.createElement("div",{className:"input checkbox-input-div",style:this.props.style},t,u.a.createElement("span",{role:"button",tabIndex:0,className:"checkbox-legend",style:{color:this.props.disabled?"darkgray":null},onClick:a,onKeyPress:a},this.props.legend)))}}],[{key:"getDerivedStateFromProps",value:function(t,a){var n={};return t.defaultValue!==a.defaultValue?(n.value=t.defaultValue,n.defaultValue=t.defaultValue):t.bind!==a.bind&&(n.value=e.lesson.state[t.bind],n.bind=t.bind),m()(n)?null:n}}]),p}(v.a));O.defaultProps={bind:"",onChange:function(){},defaultValue:!1,value:null,disabled:!1,inline:!1,legend:"",tooltip:"",tooltipPlacement:"right",style:{}},O.propTypes={bind:b.a.string,defaultValue:b.a.bool,value:b.a.bool,disabled:b.a.bool,inline:b.a.bool,onChange:b.a.func,legend:b.a.oneOfType([b.a.string,b.a.node]),tooltip:b.a.string,tooltipPlacement:b.a.oneOf(["left","top","right","bottom"]),style:b.a.object},O.contextType=E.a,t.a=O}).call(this,a(29))},530:function(e,t,a){},860:function(e,t,a){"use strict";var n=a(861);t.a=n.a},861:function(e,t,a){"use strict";(function(e){var n=a(16),l=a(12),i=a(13),o=a(27),s=a(20),r=a(39),c=a(50),p=a(485),u=a.n(p),d=a(8),b=a.n(d),h=a(30),m=a.n(h),g=a(881),f=a(519),v=a(497),y=a(554),E=a.n(y),O=a(510),j=a.n(O),S=a(63),C=a.n(S),x=a(172),V=a.n(x),w=a(504),k=(a(862),m()("isle:slider-input"));function L(e){var t="Enter a".concat(1===e.step?"n integer":" number"," ");return e.max!==C.a&&e.min!==V.a?t+="between ".concat(e.min," and ").concat(e.max,":"):e.min!==V.a?t+="larger or equal to ".concat(e.min,":"):e.max!==C.a?t+="smaller or equal to ".concat(e.max,":"):t+=":",t}var P=function(t){Object(s.a)(p,t);var a=Object(r.a)(p);function p(t,n){var i;Object(l.a)(this,p),i=a.call(this,t),Object(c.a)(Object(o.a)(i),"finishChange",(function(t){k("Finalizing change...");var a=i.props,n=a.max,l=a.min,o=a.step,s=t.target.value;""!==s&&(s=parseFloat(s)),s>n?s=n:s<l?s=l:1===o&&""!==s&&(s-=s%i.props.step),k("Setting state value to: ".concat(s,"...")),s!==i.state.value&&i.setState({value:s},(function(){i.props.onChange(s),i.props.bind&&e.lesson.setState({[i.props.bind]:s})}))})),Object(c.a)(Object(o.a)(i),"handleInputChange",(function(t){var a=t.target.validity.valid,n=t.target.value;k("Input value changed to ".concat(n)),i.setState({value:n},(function(){a&&""!==n?(n=parseFloat(n),i.props.onChange(n),i.props.bind&&e.lesson.setState({[i.props.bind]:n})):i.props.bind&&e.lesson.setState({[i.props.bind]:n})}))}));var s=n;return i.state={tooltip:L(t),value:t.bind&&s.state?s.state[t.bind]:t.defaultValue,prevProps:t},i}return Object(i.a)(p,[{key:"componentDidUpdate",value:function(){if(this.props.bind){var t=e.lesson.state[this.props.bind];t!==this.state.value&&this.setState({value:t})}}},{key:"render",value:function(){var e=this.state.value,t=this.props,a=t.legend,l=t.disabled,i=t.inline,o=t.min,s=t.max,r=t.precision,c=t.step,p=t.minLabel,d=t.maxLabel;""!==e&&E()(e,-1*r);var b=u.a.createElement("input",{type:"range",className:"slider-range-input",min:o,max:s,step:c,value:e,disabled:l,onChange:this.handleInputChange,style:Object(n.a)({width:"160px",float:i?"none":"left",display:i?"inline":"block"},this.props.rangeInputStyle)}),h=u.a.createElement("input",{type:"number",name:"input",className:"slider-number-input",disabled:l,min:o,max:s,step:c,value:e,onChange:this.handleInputChange,onBlur:this.finishChange,style:Object(n.a)({float:i?"none":"right",marginTop:a&&!i?-22:0},this.props.numberInputStyle),autoComplete:"off"});return i?u.a.createElement("span",{className:"input",style:Object(n.a)({padding:"5px",opacity:l?.2:1},this.props.style)},a?u.a.createElement("label",null,a,":"):null,u.a.createElement("span",{className:"slider-range-wrapper"},u.a.createElement(g.a,{variant:"secondary"},p||o),b,u.a.createElement(g.a,{variant:"secondary"},d||s)),h):u.a.createElement(v.a,{id:"sliderTooltip",placement:"top",show:!this.props.hideTooltip,tooltip:l?"The slider input is disabled right now.":this.state.tooltip},u.a.createElement("div",{className:"slider-outer-div input",style:Object(n.a)({opacity:l?.2:1},this.props.style)},a?u.a.createElement("label",null,a,":"):null,u.a.createElement("br",null),u.a.createElement("span",{className:"slider-range-wrapper"},u.a.createElement(g.a,{variant:"secondary",style:{float:"left"}},p||o),b,u.a.createElement(g.a,{variant:"secondary",style:{float:"left"}},d||s)),h,u.a.createElement("br",null)))}}],[{key:"getDerivedStateFromProps",value:function(t,a){var n={},l=a.prevProps;return t.defaultValue!==l.defaultValue?n.value=t.defaultValue:t.bind!==l.bind&&(n.value=e.lesson.state[t.bind]),t.min===l.min&&t.max===l.max||(n.tooltip=L(t)),j()(n)?null:(n.prevProps=t,n)}}]),p}(f.a);P.defaultProps={inline:!1,legend:null,min:0,minLabel:null,max:100,maxLabel:null,step:1,defaultValue:10,onChange:function(){},precision:10,disabled:!1,hideTooltip:!1,style:{},numberInputStyle:{},rangeInputStyle:{}},P.propTypes={defaultValue:b.a.number,disabled:b.a.bool,inline:b.a.bool,legend:b.a.oneOfType([b.a.string,b.a.node]),max:b.a.number,maxLabel:b.a.string,min:b.a.number,minLabel:b.a.string,onChange:b.a.func,precision:b.a.number,step:b.a.oneOfType([b.a.number,b.a.string]),hideTooltip:b.a.bool,style:b.a.object,numberInputStyle:b.a.object,rangeInputStyle:b.a.object},P.contextType=w.a,t.a=P}).call(this,a(29))},862:function(e,t,a){}}]);
//# sourceMappingURL=109.307901c9.chunk.js.map