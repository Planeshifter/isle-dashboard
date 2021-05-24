(self.webpackChunkisle_dashboard=self.webpackChunkisle_dashboard||[]).push([[76992],{74230:function(e,t,n){"use strict";var a=(0,n(37086).Z)((function(){return Promise.all([n.e(13812),n.e(26362)]).then(n.bind(n,12569))}));t.Z=a},76992:function(e,t,n){"use strict";n.r(t);var a=n(73284),i=n(24833),l=n.n(i),s=n(11775),o=n.n(s),r=n(42630),p=n.n(r),u=n(87950),c=n(72731),d=n(87914),h=n(74230),m=n(56851),f=n(84262),b=n(10724),v=n(64001),g=function(e){var t=e.quantitative,n=e.originalQuantitative,i=e.t;return a.createElement(h.Z,{title:a.createElement("span",null,i("kmeans Clustering"),a.createElement(v.Z,{title:i("kmeans Clustering"),content:i("kmeans-description")})),autoStart:!1,onGenerate:function(t,n,i,s){var r=a.createElement(f.Z,{data:e.data,variables:t,K:n,initialization:s,onResult:function(a){if(i){var s=o()(e.data,1),r=e.categorical.slice(),u=t.map((function(e){return e[0]})).join(""),c=(0,m.Z)("kmeans_cluster_"+u,p()(0,n,1).map((function(e){return"Cluster ".concat(e+1)})));s[c]=a.clusters.map((function(e){return"Cluster ".concat(e+1)})),l()(r,c)||r.push(c),e.onGenerate(r,s)}}});e.logAction(b.e3,{variables:t,K:n,attach:i,initialization:s}),e.onCreated(r)}},a.createElement(u.Z,{legend:i("variables"),multi:!0,defaultValue:n,options:t,closeMenuOnSelect:!1}),a.createElement(d.Z,{legend:i("number-of-clusters"),min:1,defaultValue:3}),a.createElement(c.Z,{legend:i("attach-clusters-table"),defaultValue:!1}),a.createElement(u.Z,{legend:"Initialization method",options:["kmeans++","random","mostDistant"],defaultValue:"kmeans++"}))};g.defaultProps={logAction:function(){}},t.default=g},64001:function(e,t,n){"use strict";var a=n(73284),i=n(9617),l=n(9874),s=n(36936),o=n(90105),r=n(69066);t.Z=function(e){var t=a.createElement(l.Z,{id:"popover-positioned-right"},a.createElement(s.Z,null,e.title),a.createElement(o.Z,null,e.content));return a.createElement(r.Z,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},a.createElement(i.Z,{size:"sm",variant:"outline-secondary",className:"question-button"},a.createElement("div",{className:"fa fa-question"})))}},72731:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var a=n(28991),i=n(6610),l=n(5991),s=n(63349),o=n(10379),r=n(60446),p=n(96156),u=n(73284),c=n(83603),d=n.n(c),h=n(67775),m=n.n(h),f=n(38958),b=n.n(f),v=n(43200),g=n(84972),y=n(87651),Z=function(e){(0,o.Z)(c,e);var t=(0,r.Z)(c);function c(e,a){var l;(0,i.Z)(this,c),l=t.call(this,e),(0,p.Z)((0,s.Z)(l),"updateValue",(function(e){l.setState({value:e},(function(){l.props.bind&&n.g.lesson.setState((0,p.Z)({},l.props.bind,e))}))})),(0,p.Z)((0,s.Z)(l),"handleChange",(function(e){var t=e.target.checked;l.props.onChange(t),l.updateValue(t)})),(0,p.Z)((0,s.Z)(l),"handleSpanChange",(function(e){var t=null!==l.props.value?!l.props.value:!l.state.value;l.props.onChange(t),l.updateValue(t)}));var o=a;return l.state={value:e.bind&&o.state?o.state[e.bind]:e.defaultValue,bind:e.bind,defaultValue:e.defaultValue},l}return(0,l.Z)(c,[{key:"componentDidUpdate",value:function(){if(this.props.bind){var e=n.g.lesson.state[this.props.bind];e!==this.state.value&&this.setState({value:e})}}},{key:"render",value:function(){var e=this.state.value;null!==this.props.value&&(e=this.props.value);var t=u.createElement("input",{className:"checkbox-input",type:"checkbox",checked:e,value:"checkbox",onChange:this.handleChange,disabled:this.props.disabled,"aria-label":this.props.tooltip});if(!0===this.props.inline)return u.createElement(g.Z,{tooltip:this.props.tooltip,placement:this.props.tooltipPlacement},u.createElement("span",{style:(0,a.Z)({marginLeft:"8px"},this.props.style)},t,u.createElement("span",{role:"button",tabIndex:0,className:"checkbox-legend",style:{color:this.props.disabled?"darkgray":null},onClick:this.handleSpanChange,onKeyPress:this.handleSpanChange},this.props.legend)));var n=this.props.disabled?b():this.handleSpanChange;return u.createElement(g.Z,{tooltip:this.props.tooltip,placement:this.props.tooltipPlacement},u.createElement("div",{className:"input checkbox-input-div",style:this.props.style},t,u.createElement("span",{role:"button",tabIndex:0,className:"checkbox-legend",style:{color:this.props.disabled?"darkgray":null},onClick:n,onKeyPress:n},this.props.legend)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a={};return e.defaultValue!==t.defaultValue?(a.value=e.defaultValue,a.defaultValue=e.defaultValue):e.bind!==t.bind&&(a.value=n.g.lesson.state[e.bind],a.bind=e.bind),m()(a)?null:a}}]),c}(v.Z);Z.defaultProps={bind:"",onChange:function(){},defaultValue:!1,value:null,disabled:!1,inline:!1,legend:"",tooltip:"",tooltipPlacement:"right",style:{}},Z.propTypes={bind:d().string,defaultValue:d().bool,value:d().bool,disabled:d().bool,inline:d().bool,onChange:d().func,legend:d().oneOfType([d().string,d().node]),tooltip:d().string,tooltipPlacement:d().oneOf(["left","top","right","bottom"]),style:d().object},Z.contextType=y.Z;var C=Z},87914:function(e,t,n){"use strict";n.d(t,{Z:function(){return U}});var a=n(28991),i=n(6610),l=n(5991),s=n(63349),o=n(10379),r=n(60446),p=n(96156),u=n(73284),c=n(83603),d=n.n(c),h=n(10077),m=n.n(h),f=n(43200),b=n(24833),v=n.n(b),g=n(75209),y=n.n(g),Z=n(52015),C=n(40231),E=n(67775),x=n.n(E),k=n(40867),P=n.n(k),V=n(66785),K=n.n(V),S=n(84972),w=n(87651),D=n(20216);var N=function(e){var t="Enter a".concat(1===e.step?"n integer":" number"," ");return e.max!==P()&&e.min!==K()?t+="between ".concat(e.min," and ").concat(e.max):e.min!==K()?t+="larger or equal to ".concat(e.min):e.max!==P()&&(t+="smaller or equal to ".concat(e.max)),t},O=m()("isle:number-input"),F=(0,D.Z)("number-input"),T=function(e){(0,o.Z)(c,e);var t=(0,r.Z)(c);function c(e,a){var l;(0,i.Z)(this,c),l=t.call(this,e),(0,p.Z)((0,s.Z)(l),"handleChange",(function(e){O("Handle change of input field...");var t=e.target.validity.valid,a=e.target.value;l.setState({value:a},(function(){l.props.value||t&&""!==a&&"-"!==a&&"."!==a&&"-."!==a?(a=parseFloat(a),y()(a)&&(a=""),l.props.onChange(a),l.props.bind&&n.g.lesson.setState((0,p.Z)({},l.props.bind,a))):l.props.bind&&n.g.lesson.setState((0,p.Z)({},l.props.bind,a))}))})),(0,p.Z)((0,s.Z)(l),"finishChange",(function(e){var t=l.props,a=t.max,i=t.min,s=t.step;O("Finished change...");var o=e.target.value;if(v()(o,"/")){O("Encountered a fraction...");var r=o.split("/");""!==r[0]&&""!==r[1]&&(o=parseFloat(r[0])/parseFloat(r[1]))}y()(o)?o="":""!==o&&"-"!==o&&"."!==o&&"-."!==o&&(o=parseFloat(o)),o>a?o=a:o<i?o=i:1===s&&""!==o&&"-"!==o&&"."!==o&&"-."!==o&&(o-=o%l.props.step),l.props.onChange(o),l.props.onBlur(o),o!==l.state.value&&l.setState({value:o},(function(){l.props.bind&&n.g.lesson.setState((0,p.Z)({},l.props.bind,o))}))}));var o=a;return l.id=e.id||F(e),l.state={value:e.value||(e.bind&&o.state?o.state[e.bind]:e.defaultValue),tooltip:e.tooltip||N(e),prevProps:e},l}return(0,l.Z)(c,[{key:"componentDidUpdate",value:function(){if(O("Component did update..."),this.props.bind){var e=n.g.lesson.state[this.props.bind];e!==this.state.value&&(0,C.isPrimitive)(this.state.value)&&this.setState({value:e})}}},{key:"render",value:function(){var e=this.state.value;if(null!==this.props.value&&(e=this.props.value),!0===this.props.inline){var t=u.createElement("span",{className:"input",style:(0,a.Z)({padding:"5px"},this.props.style)},this.props.legend?u.createElement("label",{htmlFor:this.id}," ",this.props.legend," =  "):null,u.createElement("input",{id:this.id,type:this.props.numbersOnly?"number":"text",name:"input",className:"number-number-input",disabled:this.props.disabled,value:e,step:this.props.step,min:this.props.min,max:this.props.max,style:(0,a.Z)({width:"80px",paddingLeft:"6px",marginLeft:"3px"},this.props.inputStyle),onChange:this.handleChange,onBlur:this.finishChange,onKeyPress:this.props.onKeyPress,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp,autoComplete:"off"}),this.props.description?u.createElement("span",null,"(",this.props.description,")"):u.createElement("span",null));return this.props.disabled?t:u.createElement(S.Z,{id:"number-input-tooltip-inline",placement:"top",tooltip:this.state.tooltip},t)}var n=u.createElement("input",{id:this.id,type:this.props.numbersOnly?"number":"text",name:"input",className:"number-number-input",disabled:this.props.disabled,value:e,step:this.props.step,min:this.props.min,max:this.props.max,style:(0,a.Z)({width:"80px",marginLeft:"24px"},this.props.inputStyle),onChange:this.handleChange,onBlur:this.finishChange,onKeyPress:this.props.onKeyPress,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp,autoComplete:"off"});return u.createElement("div",{className:"input",style:(0,a.Z)({marginBottom:"4px",marginTop:"4px"},this.props.style)},this.props.legend?u.createElement("span",null,u.createElement("label",{htmlFor:this.id},(0,Z.isPrimitive)(this.props.legend)?this.props.legend+":":this.props.legend),this.props.description?u.createElement("span",null," ",this.props.description):null):null,u.createElement(S.Z,{id:"number-input-tooltip",placement:this.props.tooltipPlacement,tooltip:this.state.tooltip},u.createElement("span",{className:"number-input-span"},n)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a={},i=t.prevProps;return e.defaultValue!==i.defaultValue?a.value=e.defaultValue:e.bind!==i.bind&&(a.value=n.g.lesson.state[e.bind]),e.min!==i.min||e.max!==i.max?a.tooltip=e.tooltip||N(e):e.tooltip&&e.tooltip!==t.tooltip&&(a.tooltip=e.tooltip),x()(a)?null:(O("Created new state from props..."),a.prevProps=e,a)}}]),c}(f.Z);T.defaultProps={bind:"",disabled:!1,legend:null,min:K(),max:P(),step:1,defaultValue:0,onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){},inline:!1,numbersOnly:!0,style:{},inputStyle:{},value:null,tooltip:null,tooltipPlacement:"left"},T.propTypes={bind:d().string,defaultValue:d().number,disabled:d().bool,inline:d().bool,legend:d().oneOfType([d().string,d().node]),max:d().number,min:d().number,numbersOnly:d().bool,onBlur:d().func,onChange:d().func,onKeyDown:d().func,onKeyPress:d().func,onKeyUp:d().func,step:d().oneOfType([d().number,d().string]),style:d().object,inputStyle:d().object,value:d().number,tooltip:d().string,tooltipPlacement:d().oneOf(["top","right","bottom","left"])},T.contextType=w.Z;var U=T},56851:function(e,t){"use strict";t.Z=function(e,t){var n=new String(e);return n.categories=t,n}}}]);
//# sourceMappingURL=76992.fb1a4264.chunk.js.map