(self.webpackChunkisle_dashboard=self.webpackChunkisle_dashboard||[]).push([[86498],{19506:function(e,t,n){"use strict";var a=(0,n(37086).Z)((function(){return n.e(1438).then(n.bind(n,37017))}));t.Z=a},86498:function(e,t,n){"use strict";n.r(t);var a=n(6610),i=n(5991),s=n(63349),o=n(10379),r=n(60446),l=n(96156),p=n(73284),u=n(9617),c=n(9548),m=n(91031),d=n.n(m),h=n(24833),f=n.n(h),g=n(37263),y=n.n(g),v=n(11775),b=n.n(v),Z=n(78674),x=n.n(Z),C=n(80145),E=n.n(C),T=n(87950),S=n(87914),P=n(19506),K=n(37329),V=n(10724),w=n(64001);function D(e,t){return e?"Classificiation"===t?x()(E()(e.length)):e.length<3?1:x()(e.length/3):1}var k=function(e){(0,o.Z)(n,e);var t=(0,r.Z)(n);function n(e){var i;return(0,a.Z)(this,n),i=t.call(this,e),(0,l.Z)((0,s.Z)(i),"compute",(function(){var e=i.state,t=e.y,n=e.x,a=e.type,s=e.nTrees,o=e.nTry,r=e.impurityMeasure,l=e.scoreThreshold,u=e.maxTreeDepth,c=e.minItemsCount,m=p.createElement(K.Z,{x:n,y:t,type:a,nTrees:s,nTry:o,impurityMeasure:r,scoreThreshold:l,maxTreeDepth:u,minItemsCount:c,quantitative:i.props.quantitative,data:i.props.data,onPredict:function(e,n){var s=b()(i.props.data,1);if("Classification"===a){var o=i.props.categorical.slice(),r=e.predict(s).map((function(e){return String(e)})),l="pred_forest"+n;s[l]=r,f()(o,l)||o.push(l),l="correct_forest"+n;var p=i.props.data[t];s[l]=r.map((function(e,t){return e===String(p[t])?"Yes":"No"})),f()(o,l)||o.push(l),i.props.onGenerate(i.props.quantitative,o,s)}}});i.props.logAction(V.P$,{y:t,x:n,type:a,nTrees:s,nTry:o}),i.props.onCreated(m)})),i.state={y:e.categorical[0],x:e.quantitative[0],type:"Classification",nTrees:50,nTry:1,impurityMeasure:"gini",scoreThreshold:.01,maxTreeDepth:20,minItemsCount:50},i}return(0,i.Z)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.categorical,a=t.quantitative,i=t.t,s=this.state,o=s.x,r=s.y,l=s.type,m=s.nTrees,h=s.nTry;return p.createElement(c.Z,{style:{fontSize:"14px",maxWidth:600}},p.createElement(c.Z.Header,{as:"h4"},i("Random Forest"),p.createElement(w.Z,{title:i("Random Forest"),content:"Instead of growing a single decision tree, a random forest as an ensemble method constructs many decision trees at once and returns the average of the predictions (regression case) or the majority vote (classification case) of the individual trees"})),p.createElement(c.Z.Body,null,p.createElement(T.Z,{legend:"Type",options:["Classification"],defaultValue:l,onChange:function(t){t!==e.state.type&&e.setState({type:t,y:"Classification"===t?n[0]:a[0],nTry:D(e.state.x,t)})}}),p.createElement(T.Z,{legend:i("outcome-y"),options:"Classification"===l?n:a,defaultValue:r,onChange:function(t){return e.setState({y:t})}}),p.createElement(T.Z,{legend:i("predictors-x"),multi:!0,options:d()(a.concat(n)),defaultValue:o||"",onChange:function(t){e.setState({x:t,nTry:D(t,l)})}}),p.createElement(S.Z,{legend:i("number-of-trees"),defaultValue:m,inputStyle:{float:"right"},onChange:function(t){return e.setState({nTrees:t})},tooltipPlacement:"top",min:1}),p.createElement(S.Z,{legend:"# of predictors to check at each split",defaultValue:h,inputStyle:{float:"right"},onChange:function(t){return e.setState({nTry:t})},tooltipPlacement:"top",min:1,max:y()(o)?o.length:1}),p.createElement(P.Z,{header:i("change-tree-features"),headerStyle:{fontSize:"1rem"}},p.createElement(S.Z,{legend:"Score threshold for split",min:0,max:1,step:.001,defaultValue:this.state.scoreThreshold,onChange:function(t){return e.setState({scoreThreshold:t})}}),p.createElement(S.Z,{legend:i("maximum-tre-depth"),min:1,max:50,defaultValue:this.state.maxTreeDepth,onChange:function(t){return e.setState({maxTreeDepth:t})}}),p.createElement(S.Z,{legend:i("min-obs-leafs"),min:1,defaultValue:this.state.minItemsCount,onChange:function(t){return e.setState({minItemsCount:t})}})),"Classification"===l?p.createElement(T.Z,{legend:i("impurity-measure"),defaultValue:this.state.impurityMeasure,options:["gini","entropy"],onChange:function(t){return e.setState({impurityMeasure:t})}}):null,p.createElement(u.Z,{disabled:!o||0===o.length,variant:"primary",block:!0,onClick:this.compute},i("calculate"))))}}]),n}(p.Component);k.defaultProps={logAction:function(){}},t.default=k},64001:function(e,t,n){"use strict";var a=n(73284),i=n(9617),s=n(9874),o=n(36936),r=n(90105),l=n(69066);t.Z=function(e){var t=a.createElement(s.Z,{id:"popover-positioned-right"},a.createElement(o.Z,null,e.title),a.createElement(r.Z,null,e.content));return a.createElement(l.Z,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},a.createElement(i.Z,{size:"sm",variant:"outline-secondary",className:"question-button"},a.createElement("div",{className:"fa fa-question"})))}},87914:function(e,t,n){"use strict";n.d(t,{Z:function(){return B}});var a=n(28991),i=n(6610),s=n(5991),o=n(63349),r=n(10379),l=n(60446),p=n(96156),u=n(73284),c=n(83603),m=n.n(c),d=n(10077),h=n.n(d),f=n(43200),g=n(24833),y=n.n(g),v=n(75209),b=n.n(v),Z=n(52015),x=n(40231),C=n(67775),E=n.n(C),T=n(40867),S=n.n(T),P=n(66785),K=n.n(P),V=n(84972),w=n(87651),D=n(20216);var k=function(e){var t="Enter a".concat(1===e.step?"n integer":" number"," ");return e.max!==S()&&e.min!==K()?t+="between ".concat(e.min," and ").concat(e.max):e.min!==K()?t+="larger or equal to ".concat(e.min):e.max!==S()&&(t+="smaller or equal to ".concat(e.max)),t},F=h()("isle:number-input"),q=(0,D.Z)("number-input"),N=function(e){(0,r.Z)(c,e);var t=(0,l.Z)(c);function c(e,a){var s;(0,i.Z)(this,c),s=t.call(this,e),(0,p.Z)((0,o.Z)(s),"handleChange",(function(e){F("Handle change of input field...");var t=e.target.validity.valid,a=e.target.value;s.setState({value:a},(function(){s.props.value||t&&""!==a&&"-"!==a&&"."!==a&&"-."!==a?(a=parseFloat(a),b()(a)&&(a=""),s.props.onChange(a),s.props.bind&&n.g.lesson.setState((0,p.Z)({},s.props.bind,a))):s.props.bind&&n.g.lesson.setState((0,p.Z)({},s.props.bind,a))}))})),(0,p.Z)((0,o.Z)(s),"finishChange",(function(e){var t=s.props,a=t.max,i=t.min,o=t.step;F("Finished change...");var r=e.target.value;if(y()(r,"/")){F("Encountered a fraction...");var l=r.split("/");""!==l[0]&&""!==l[1]&&(r=parseFloat(l[0])/parseFloat(l[1]))}b()(r)?r="":""!==r&&"-"!==r&&"."!==r&&"-."!==r&&(r=parseFloat(r)),r>a?r=a:r<i?r=i:1===o&&""!==r&&"-"!==r&&"."!==r&&"-."!==r&&(r-=r%s.props.step),s.props.onChange(r),s.props.onBlur(r),r!==s.state.value&&s.setState({value:r},(function(){s.props.bind&&n.g.lesson.setState((0,p.Z)({},s.props.bind,r))}))}));var r=a;return s.id=e.id||q(e),s.state={value:e.value||(e.bind&&r.state?r.state[e.bind]:e.defaultValue),tooltip:e.tooltip||k(e),prevProps:e},s}return(0,s.Z)(c,[{key:"componentDidUpdate",value:function(){if(F("Component did update..."),this.props.bind){var e=n.g.lesson.state[this.props.bind];e!==this.state.value&&(0,x.isPrimitive)(this.state.value)&&this.setState({value:e})}}},{key:"render",value:function(){var e=this.state.value;if(null!==this.props.value&&(e=this.props.value),!0===this.props.inline){var t=u.createElement("span",{className:"input",style:(0,a.Z)({padding:"5px"},this.props.style)},this.props.legend?u.createElement("label",{htmlFor:this.id}," ",this.props.legend," =  "):null,u.createElement("input",{id:this.id,type:this.props.numbersOnly?"number":"text",name:"input",className:"number-number-input",disabled:this.props.disabled,value:e,step:this.props.step,min:this.props.min,max:this.props.max,style:(0,a.Z)({width:"80px",paddingLeft:"6px",marginLeft:"3px"},this.props.inputStyle),onChange:this.handleChange,onBlur:this.finishChange,onKeyPress:this.props.onKeyPress,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp,autoComplete:"off"}),this.props.description?u.createElement("span",null,"(",this.props.description,")"):u.createElement("span",null));return this.props.disabled?t:u.createElement(V.Z,{id:"number-input-tooltip-inline",placement:"top",tooltip:this.state.tooltip},t)}var n=u.createElement("input",{id:this.id,type:this.props.numbersOnly?"number":"text",name:"input",className:"number-number-input",disabled:this.props.disabled,value:e,step:this.props.step,min:this.props.min,max:this.props.max,style:(0,a.Z)({width:"80px",marginLeft:"24px"},this.props.inputStyle),onChange:this.handleChange,onBlur:this.finishChange,onKeyPress:this.props.onKeyPress,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp,autoComplete:"off"});return u.createElement("div",{className:"input",style:(0,a.Z)({marginBottom:"4px",marginTop:"4px"},this.props.style)},this.props.legend?u.createElement("span",null,u.createElement("label",{htmlFor:this.id},(0,Z.isPrimitive)(this.props.legend)?this.props.legend+":":this.props.legend),this.props.description?u.createElement("span",null," ",this.props.description):null):null,u.createElement(V.Z,{id:"number-input-tooltip",placement:this.props.tooltipPlacement,tooltip:this.state.tooltip},u.createElement("span",{className:"number-input-span"},n)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a={},i=t.prevProps;return e.defaultValue!==i.defaultValue?a.value=e.defaultValue:e.bind!==i.bind&&(a.value=n.g.lesson.state[e.bind]),e.min!==i.min||e.max!==i.max?a.tooltip=e.tooltip||k(e):e.tooltip&&e.tooltip!==t.tooltip&&(a.tooltip=e.tooltip),E()(a)?null:(F("Created new state from props..."),a.prevProps=e,a)}}]),c}(f.Z);N.defaultProps={bind:"",disabled:!1,legend:null,min:K(),max:S(),step:1,defaultValue:0,onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){},inline:!1,numbersOnly:!0,style:{},inputStyle:{},value:null,tooltip:null,tooltipPlacement:"left"},N.propTypes={bind:m().string,defaultValue:m().number,disabled:m().bool,inline:m().bool,legend:m().oneOfType([m().string,m().node]),max:m().number,min:m().number,numbersOnly:m().bool,onBlur:m().func,onChange:m().func,onKeyDown:m().func,onKeyPress:m().func,onKeyUp:m().func,step:m().oneOfType([m().number,m().string]),style:m().object,inputStyle:m().object,value:m().number,tooltip:m().string,tooltipPlacement:m().oneOf(["top","right","bottom","left"])},N.contextType=w.Z;var B=N}}]);
//# sourceMappingURL=86498.f08fafe1.chunk.js.map