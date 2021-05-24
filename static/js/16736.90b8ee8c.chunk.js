(self.webpackChunkisle_dashboard=self.webpackChunkisle_dashboard||[]).push([[16736],{19506:function(e,t,n){"use strict";var a=(0,n(37086).Z)((function(){return n.e(1438).then(n.bind(n,37017))}));t.Z=a},16736:function(e,t,n){"use strict";n.r(t);var a=n(34699),i=n(73284),r=n(9617),o=n(9548),s=n(91031),l=n.n(s),p=n(24833),u=n.n(p),c=n(11775),m=n.n(c),d=n(87950),h=n(87914),f=n(19506),v=n(74951),g=n(10724),y=n(55659),b=n(64001),Z=function(e){var t=e.categorical,n=e.quantitative,s=e.t,p=(0,i.useState)(0),c=(0,a.Z)(p,2),Z=c[0],E=c[1],C=(0,i.useState)(0),x=(0,a.Z)(C,2),S=x[0],w=x[1],P=(0,i.useState)("Classification"),K=(0,a.Z)(P,2),V=K[0],D=K[1],T=(0,i.useState)("gini"),q=(0,a.Z)(T,2),k=q[0],F=q[1],N=(0,i.useState)(.0075),O=(0,a.Z)(N,2),B=O[0],U=O[1],_=(0,i.useState)(5),A=(0,a.Z)(_,2),z=A[0],L=A[1],M=(0,i.useState)(50),j=(0,a.Z)(M,2),G=j[0],H=j[1];return i.createElement(o.Z,{style:{fontSize:"14px",maxWidth:600}},i.createElement(o.Z.Header,{as:"h4"},s("Decision Tree"),i.createElement(b.Z,{title:s("Decision Tree"),content:s("Decision Tree-description")})),i.createElement(o.Z.Body,null,i.createElement(d.Z,{legend:s("type"),options:["Classification","Regression"],defaultValue:V,onChange:function(e){e!==V&&(D(e),E("Classification"===V?t[0]:n[0]))}}),i.createElement(d.Z,{legend:s("outcome-y"),options:"Classification"===V?t:n,defaultValue:Z,onChange:E}),i.createElement(d.Z,{legend:s("predictors-x"),multi:!0,options:l()(n.concat(t)),defaultValue:S||"",onChange:w,closeMenuOnSelect:!1}),"Classification"===V?i.createElement(d.Z,{legend:s("impurity-measure"),defaultValue:k,options:["gini","entropy"],onChange:F}):null,i.createElement(f.Z,{header:s("change-tree-features"),headerStyle:{fontSize:"1rem"}},i.createElement(h.Z,{legend:"Score threshold for split",min:0,max:1,step:.001,defaultValue:B,onChange:U}),i.createElement(h.Z,{legend:s("maximum-tree-depth"),min:1,max:50,defaultValue:z,onChange:L}),i.createElement(h.Z,{legend:s("min-obs-leafs"),min:1,defaultValue:G,onChange:H})),i.createElement(r.Z,{disabled:!S||0===S.length,variant:"primary",block:!0,onClick:function(){var t=i.createElement(v.Z,{x:S,y:Z,type:V,impurityMeasure:k,data:e.data,quantitative:e.quantitative,scoreThreshold:B,maxTreeDepth:z,minItemsCount:G,onPredict:function(t,n){var a=m()(e.data,1);if("Classification"===V){var i=e.categorical.slice(),r=t.predict(a).map((function(e){return String(e)})),o="pred_tree"+n;a[o]=r,u()(i,o)||i.push(o),o="correct_tree"+n;var s=e.data[Z];a[o]=r.map((function(e,t){return e===String(s[t])?"Yes":"No"})),u()(i,o)||i.push(o),e.onGenerate(e.quantitative,i,a)}else{var l=e.quantitative.slice(),p=t.predict(a),c="pred_tree"+n;a[c]=p,u()(l,c)||l.push(c),a[c="resid_tree"+n]=(0,y.Z)(p,e.data[Z]),u()(l,c)||l.push(c),e.onGenerate(l,e.categorical,a)}}});e.logAction(g.Ch,{y:Z,x:S,type:V}),e.onCreated(t)}},s("calculate"))))};Z.defaultProps={logAction:function(){}},t.default=Z},64001:function(e,t,n){"use strict";var a=n(73284),i=n(9617),r=n(9874),o=n(36936),s=n(90105),l=n(69066);t.Z=function(e){var t=a.createElement(r.Z,{id:"popover-positioned-right"},a.createElement(o.Z,null,e.title),a.createElement(s.Z,null,e.content));return a.createElement(l.Z,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},a.createElement(i.Z,{size:"sm",variant:"outline-secondary",className:"question-button"},a.createElement("div",{className:"fa fa-question"})))}},87914:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}});var a=n(28991),i=n(6610),r=n(5991),o=n(63349),s=n(10379),l=n(60446),p=n(96156),u=n(73284),c=n(83603),m=n.n(c),d=n(10077),h=n.n(d),f=n(43200),v=n(24833),g=n.n(v),y=n(75209),b=n.n(y),Z=n(52015),E=n(40231),C=n(67775),x=n.n(C),S=n(40867),w=n.n(S),P=n(66785),K=n.n(P),V=n(84972),D=n(87651),T=n(20216);var q=function(e){var t="Enter a".concat(1===e.step?"n integer":" number"," ");return e.max!==w()&&e.min!==K()?t+="between ".concat(e.min," and ").concat(e.max):e.min!==K()?t+="larger or equal to ".concat(e.min):e.max!==w()&&(t+="smaller or equal to ".concat(e.max)),t},k=h()("isle:number-input"),F=(0,T.Z)("number-input"),N=function(e){(0,s.Z)(c,e);var t=(0,l.Z)(c);function c(e,a){var r;(0,i.Z)(this,c),r=t.call(this,e),(0,p.Z)((0,o.Z)(r),"handleChange",(function(e){k("Handle change of input field...");var t=e.target.validity.valid,a=e.target.value;r.setState({value:a},(function(){r.props.value||t&&""!==a&&"-"!==a&&"."!==a&&"-."!==a?(a=parseFloat(a),b()(a)&&(a=""),r.props.onChange(a),r.props.bind&&n.g.lesson.setState((0,p.Z)({},r.props.bind,a))):r.props.bind&&n.g.lesson.setState((0,p.Z)({},r.props.bind,a))}))})),(0,p.Z)((0,o.Z)(r),"finishChange",(function(e){var t=r.props,a=t.max,i=t.min,o=t.step;k("Finished change...");var s=e.target.value;if(g()(s,"/")){k("Encountered a fraction...");var l=s.split("/");""!==l[0]&&""!==l[1]&&(s=parseFloat(l[0])/parseFloat(l[1]))}b()(s)?s="":""!==s&&"-"!==s&&"."!==s&&"-."!==s&&(s=parseFloat(s)),s>a?s=a:s<i?s=i:1===o&&""!==s&&"-"!==s&&"."!==s&&"-."!==s&&(s-=s%r.props.step),r.props.onChange(s),r.props.onBlur(s),s!==r.state.value&&r.setState({value:s},(function(){r.props.bind&&n.g.lesson.setState((0,p.Z)({},r.props.bind,s))}))}));var s=a;return r.id=e.id||F(e),r.state={value:e.value||(e.bind&&s.state?s.state[e.bind]:e.defaultValue),tooltip:e.tooltip||q(e),prevProps:e},r}return(0,r.Z)(c,[{key:"componentDidUpdate",value:function(){if(k("Component did update..."),this.props.bind){var e=n.g.lesson.state[this.props.bind];e!==this.state.value&&(0,E.isPrimitive)(this.state.value)&&this.setState({value:e})}}},{key:"render",value:function(){var e=this.state.value;if(null!==this.props.value&&(e=this.props.value),!0===this.props.inline){var t=u.createElement("span",{className:"input",style:(0,a.Z)({padding:"5px"},this.props.style)},this.props.legend?u.createElement("label",{htmlFor:this.id}," ",this.props.legend," =  "):null,u.createElement("input",{id:this.id,type:this.props.numbersOnly?"number":"text",name:"input",className:"number-number-input",disabled:this.props.disabled,value:e,step:this.props.step,min:this.props.min,max:this.props.max,style:(0,a.Z)({width:"80px",paddingLeft:"6px",marginLeft:"3px"},this.props.inputStyle),onChange:this.handleChange,onBlur:this.finishChange,onKeyPress:this.props.onKeyPress,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp,autoComplete:"off"}),this.props.description?u.createElement("span",null,"(",this.props.description,")"):u.createElement("span",null));return this.props.disabled?t:u.createElement(V.Z,{id:"number-input-tooltip-inline",placement:"top",tooltip:this.state.tooltip},t)}var n=u.createElement("input",{id:this.id,type:this.props.numbersOnly?"number":"text",name:"input",className:"number-number-input",disabled:this.props.disabled,value:e,step:this.props.step,min:this.props.min,max:this.props.max,style:(0,a.Z)({width:"80px",marginLeft:"24px"},this.props.inputStyle),onChange:this.handleChange,onBlur:this.finishChange,onKeyPress:this.props.onKeyPress,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp,autoComplete:"off"});return u.createElement("div",{className:"input",style:(0,a.Z)({marginBottom:"4px",marginTop:"4px"},this.props.style)},this.props.legend?u.createElement("span",null,u.createElement("label",{htmlFor:this.id},(0,Z.isPrimitive)(this.props.legend)?this.props.legend+":":this.props.legend),this.props.description?u.createElement("span",null," ",this.props.description):null):null,u.createElement(V.Z,{id:"number-input-tooltip",placement:this.props.tooltipPlacement,tooltip:this.state.tooltip},u.createElement("span",{className:"number-input-span"},n)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a={},i=t.prevProps;return e.defaultValue!==i.defaultValue?a.value=e.defaultValue:e.bind!==i.bind&&(a.value=n.g.lesson.state[e.bind]),e.min!==i.min||e.max!==i.max?a.tooltip=e.tooltip||q(e):e.tooltip&&e.tooltip!==t.tooltip&&(a.tooltip=e.tooltip),x()(a)?null:(k("Created new state from props..."),a.prevProps=e,a)}}]),c}(f.Z);N.defaultProps={bind:"",disabled:!1,legend:null,min:K(),max:w(),step:1,defaultValue:0,onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){},inline:!1,numbersOnly:!0,style:{},inputStyle:{},value:null,tooltip:null,tooltipPlacement:"left"},N.propTypes={bind:m().string,defaultValue:m().number,disabled:m().bool,inline:m().bool,legend:m().oneOfType([m().string,m().node]),max:m().number,min:m().number,numbersOnly:m().bool,onBlur:m().func,onChange:m().func,onKeyDown:m().func,onKeyPress:m().func,onKeyUp:m().func,step:m().oneOfType([m().number,m().string]),style:m().object,inputStyle:m().object,value:m().number,tooltip:m().string,tooltipPlacement:m().oneOf(["top","right","bottom","left"])},N.contextType=D.Z;var O=N},55659:function(e,t,n){"use strict";var a=n(24626),i=n.n(a),r=n(40231);t.Z=function(e,t){var n=i()(t);if(!i()(e))throw new TypeError("invalid input argument. Must provide an array. Value: `"+e+"`.");if(!n&&!(0,r.isPrimitive)(t))throw new TypeError("invalid input argument. Second argument must either be an array or number primitive. Value: `"+t+"`.");var a=e.length,o=new Array(a);if(n){if(a!==t.length)throw new Error("invalid input argument. Array to be added must have a length equal to that of the input array.");for(var s=0;s<a;s++)o[s]=e[s]-t[s]}else for(var l=0;l<a;l++)o[l]=e[l]-t;return o}}}]);
//# sourceMappingURL=16736.90b8ee8c.chunk.js.map