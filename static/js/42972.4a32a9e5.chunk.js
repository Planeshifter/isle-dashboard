(self.webpackChunkisle_dashboard=self.webpackChunkisle_dashboard||[]).push([[42972],{74230:function(e,t,n){"use strict";var a=(0,n(37086).Z)((function(){return Promise.all([n.e(13812),n.e(26362)]).then(n.bind(n,12569))}));t.Z=a},42972:function(e,t,n){"use strict";n.r(t);var a=n(73284),l=n(91031),i=n.n(l),s=n(24833),r=n.n(s),o=n(11775),u=n.n(o),p=n(66300),c=n(87950),d=n(72731),m=n(5046),h=n(74230),b=n(65135),v=n(10724),f=n(64001),g=function(e){var t=e.data,n=e.categorical,l=e.quantitative,s=e.t,o=e.logAction,g=e.onCreated,y=e.onGenerate;return a.createElement(h.Z,{title:a.createElement("span",null,s("LASSO"),a.createElement(f.Z,{title:s("LASSO"),content:s("LASSO-description")})),autoStart:!1,onGenerate:function(e,n,i,s){var p=a.createElement(b.Z,{x:n,y:e,lambda:i,intercept:s,data:t,quantitative:l,onPredict:function(e,n,a){var i=u()(t,1),s=l.slice(),o="pred_lasso"+a;i[o]=e,r()(s,o)||s.push(o),i[o="resid_lasso"+a]=n,r()(s,o)||s.push(o),y(s,i)}});o(v.VP,{y:e,x:n,intercept:s,lambda:i}),g(p)}},a.createElement(c.Z,{legend:s("outcome-y"),options:l,defaultValue:l[0]}),a.createElement(c.Z,{legend:s("predictors-x"),multi:!0,options:i()(l.concat(n)),defaultValue:l[1],closeMenuOnSelect:!1}),a.createElement(m.Z,{legend:a.createElement("span",null,"L1 Penalty Term ",a.createElement(p.Z,{raw:"lambda"})),defaultValue:.001,min:1e-12,max:1,step:"any",rangeInputStyle:{width:260},numberInputStyle:{width:120}}),a.createElement(d.Z,{legend:s("include-intercept"),defaultValue:!0}))};g.defaultProps={logAction:function(){}},t.default=g},64001:function(e,t,n){"use strict";var a=n(73284),l=n(9617),i=n(9874),s=n(36936),r=n(90105),o=n(69066);t.Z=function(e){var t=a.createElement(i.Z,{id:"popover-positioned-right"},a.createElement(s.Z,null,e.title),a.createElement(r.Z,null,e.content));return a.createElement(o.Z,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},a.createElement(l.Z,{size:"sm",variant:"outline-secondary",className:"question-button"},a.createElement("div",{className:"fa fa-question"})))}},72731:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var a=n(28991),l=n(6610),i=n(5991),s=n(63349),r=n(10379),o=n(60446),u=n(96156),p=n(73284),c=n(83603),d=n.n(c),m=n(67775),h=n.n(m),b=n(38958),v=n.n(b),f=n(43200),g=n(84972),y=n(87651),Z=function(e){(0,r.Z)(c,e);var t=(0,o.Z)(c);function c(e,a){var i;(0,l.Z)(this,c),i=t.call(this,e),(0,u.Z)((0,s.Z)(i),"updateValue",(function(e){i.setState({value:e},(function(){i.props.bind&&n.g.lesson.setState((0,u.Z)({},i.props.bind,e))}))})),(0,u.Z)((0,s.Z)(i),"handleChange",(function(e){var t=e.target.checked;i.props.onChange(t),i.updateValue(t)})),(0,u.Z)((0,s.Z)(i),"handleSpanChange",(function(e){var t=null!==i.props.value?!i.props.value:!i.state.value;i.props.onChange(t),i.updateValue(t)}));var r=a;return i.state={value:e.bind&&r.state?r.state[e.bind]:e.defaultValue,bind:e.bind,defaultValue:e.defaultValue},i}return(0,i.Z)(c,[{key:"componentDidUpdate",value:function(){if(this.props.bind){var e=n.g.lesson.state[this.props.bind];e!==this.state.value&&this.setState({value:e})}}},{key:"render",value:function(){var e=this.state.value;null!==this.props.value&&(e=this.props.value);var t=p.createElement("input",{className:"checkbox-input",type:"checkbox",checked:e,value:"checkbox",onChange:this.handleChange,disabled:this.props.disabled,"aria-label":this.props.tooltip});if(!0===this.props.inline)return p.createElement(g.Z,{tooltip:this.props.tooltip,placement:this.props.tooltipPlacement},p.createElement("span",{style:(0,a.Z)({marginLeft:"8px"},this.props.style)},t,p.createElement("span",{role:"button",tabIndex:0,className:"checkbox-legend",style:{color:this.props.disabled?"darkgray":null},onClick:this.handleSpanChange,onKeyPress:this.handleSpanChange},this.props.legend)));var n=this.props.disabled?v():this.handleSpanChange;return p.createElement(g.Z,{tooltip:this.props.tooltip,placement:this.props.tooltipPlacement},p.createElement("div",{className:"input checkbox-input-div",style:this.props.style},t,p.createElement("span",{role:"button",tabIndex:0,className:"checkbox-legend",style:{color:this.props.disabled?"darkgray":null},onClick:n,onKeyPress:n},this.props.legend)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a={};return e.defaultValue!==t.defaultValue?(a.value=e.defaultValue,a.defaultValue=e.defaultValue):e.bind!==t.bind&&(a.value=n.g.lesson.state[e.bind],a.bind=e.bind),h()(a)?null:a}}]),c}(f.Z);Z.defaultProps={bind:"",onChange:function(){},defaultValue:!1,value:null,disabled:!1,inline:!1,legend:"",tooltip:"",tooltipPlacement:"right",style:{}},Z.propTypes={bind:d().string,defaultValue:d().bool,value:d().bool,disabled:d().bool,inline:d().bool,onChange:d().func,legend:d().oneOfType([d().string,d().node]),tooltip:d().string,tooltipPlacement:d().oneOf(["left","top","right","bottom"]),style:d().object},Z.contextType=y.Z;var E=Z},5046:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var a=n(28991),l=n(6610),i=n(5991),s=n(63349),r=n(10379),o=n(60446),u=n(96156),p=n(73284),c=n(83603),d=n.n(c),m=n(10077),h=n.n(m),b=n(68359),v=n(43200),f=n(84972),g=n(20887),y=n.n(g),Z=n(67775),E=n.n(Z),x=n(40867),S=n.n(x),C=n(66785),V=n.n(C),k=n(87651),P=h()("isle:slider-input");function I(e){var t="Enter a".concat(1===e.step?"n integer":" number"," ");return e.max!==S()&&e.min!==V()?t+="between ".concat(e.min," and ").concat(e.max,":"):e.min!==V()?t+="larger or equal to ".concat(e.min,":"):e.max!==S()?t+="smaller or equal to ".concat(e.max,":"):t+=":",t}var T=function(e){(0,r.Z)(c,e);var t=(0,o.Z)(c);function c(e,a){var i;(0,l.Z)(this,c),i=t.call(this,e),(0,u.Z)((0,s.Z)(i),"finishChange",(function(e){P("Finalizing change...");var t=i.props,a=t.max,l=t.min,s=t.step,r=e.target.value;""!==r&&(r=parseFloat(r)),r>a?r=a:r<l?r=l:1===s&&""!==r&&(r-=r%i.props.step),P("Setting state value to: ".concat(r,"...")),r!==i.state.value&&i.setState({value:r},(function(){i.props.onChange(r),i.props.bind&&n.g.lesson.setState((0,u.Z)({},i.props.bind,r))}))})),(0,u.Z)((0,s.Z)(i),"handleInputChange",(function(e){var t=e.target.validity.valid,a=e.target.value;P("Input value changed to ".concat(a)),i.setState({value:a},(function(){t&&""!==a?(a=parseFloat(a),i.props.onChange(a),i.props.bind&&n.g.lesson.setState((0,u.Z)({},i.props.bind,a))):i.props.bind&&n.g.lesson.setState((0,u.Z)({},i.props.bind,a))}))}));var r=a;return i.state={tooltip:I(e),value:e.bind&&r.state?r.state[e.bind]:e.defaultValue,prevProps:e},i}return(0,i.Z)(c,[{key:"componentDidUpdate",value:function(){if(this.props.bind){var e=n.g.lesson.state[this.props.bind];e!==this.state.value&&this.setState({value:e})}}},{key:"render",value:function(){var e=this.state.value,t=this.props,n=t.legend,l=t.disabled,i=t.inline,s=t.min,r=t.max,o=t.precision,u=t.step,c=t.minLabel,d=t.maxLabel;""!==e&&y()(e,-1*o);var m=p.createElement("input",{type:"range",className:"slider-range-input",min:s,max:r,step:u,value:e,disabled:l,onChange:this.handleInputChange,style:(0,a.Z)({width:"160px",float:i?"none":"left",display:i?"inline":"block"},this.props.rangeInputStyle)}),h=p.createElement("input",{type:"number",name:"input",className:"slider-number-input",disabled:l,min:s,max:r,step:u,value:e,onChange:this.handleInputChange,onBlur:this.finishChange,style:(0,a.Z)({float:i?"none":"right",marginTop:n&&!i?-22:0},this.props.numberInputStyle),autoComplete:"off"});return i?p.createElement("span",{className:"input",style:(0,a.Z)({padding:"5px",opacity:l?.2:1},this.props.style)},n?p.createElement("label",null,n,":"):null,p.createElement("span",{className:"slider-range-wrapper"},p.createElement(b.Z,{variant:"secondary"},c||s),m,p.createElement(b.Z,{variant:"secondary"},d||r)),h):p.createElement(f.Z,{id:"sliderTooltip",placement:"top",show:!this.props.hideTooltip,tooltip:l?"The slider input is disabled right now.":this.state.tooltip},p.createElement("div",{className:"slider-outer-div input",style:(0,a.Z)({opacity:l?.2:1},this.props.style)},n?p.createElement("label",null,n,":"):null,p.createElement("br",null),p.createElement("span",{className:"slider-range-wrapper"},p.createElement(b.Z,{variant:"secondary",style:{float:"left"}},c||s),m,p.createElement(b.Z,{variant:"secondary",style:{float:"left"}},d||r)),h,p.createElement("br",null)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a={},l=t.prevProps;return e.defaultValue!==l.defaultValue?a.value=e.defaultValue:e.bind!==l.bind&&(a.value=n.g.lesson.state[e.bind]),e.min===l.min&&e.max===l.max||(a.tooltip=I(e)),E()(a)?null:(a.prevProps=e,a)}}]),c}(v.Z);T.defaultProps={inline:!1,legend:null,min:0,minLabel:null,max:100,maxLabel:null,step:1,defaultValue:10,onChange:function(){},precision:10,disabled:!1,hideTooltip:!1,style:{},numberInputStyle:{},rangeInputStyle:{}},T.propTypes={defaultValue:d().number,disabled:d().bool,inline:d().bool,legend:d().oneOfType([d().string,d().node]),max:d().number,maxLabel:d().string,min:d().number,minLabel:d().string,onChange:d().func,precision:d().number,step:d().oneOfType([d().number,d().string]),hideTooltip:d().bool,style:d().object,numberInputStyle:d().object,rangeInputStyle:d().object},T.contextType=k.Z;var N=T}}]);
//# sourceMappingURL=42972.4a32a9e5.chunk.js.map