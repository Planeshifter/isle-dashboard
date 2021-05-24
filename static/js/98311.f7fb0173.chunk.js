(self.webpackChunkisle_dashboard=self.webpackChunkisle_dashboard||[]).push([[98311],{98311:function(e,t,n){"use strict";n.r(t);var a=n(6610),l=n(5991),s=n(63349),o=n(10379),i=n(60446),r=n(96156),c=n(73284),u=n(91031),p=n.n(u),d=n(9617),h=n(9548),g=n(26646),m=n(89139),f=n(37263),v=n.n(f),b=n(24833),Z=n.n(b),y=n(11775),E=n.n(y),C=n(87950),k=n(72731),x=n(10724),V=n(75959),S=n(77386),P=n(64001),q=function(e){(0,o.Z)(n,e);var t=(0,i.Z)(n);function n(e){var l,o,i,u;return(0,a.Z)(this,n),l=t.call(this,e),(0,r.Z)((0,s.Z)(l),"compute",(function(){var e=l.state,t=e.y,n=e.success,a=e.x,s=e.intercept,o=e.omitMissing,i=c.createElement(S.Z,{data:l.props.data,x:a,y:t,success:n,intercept:s,omitMissing:o,quantitative:l.props.quantitative,onPredict:function(e,t,n,a){var s=E()(l.props.data,1),o=l.props.quantitative.slice(),i=l.props.categorical.slice(),r="probs_logis"+a;s[r]=t,Z()(o,r)||o.push(r),s[r="pred_logis"+a]=e,Z()(i,r)||i.push(r),r="resid_logis"+a,Z()(o,r)||o.push(r),s[r]=n,l.props.onGenerate(o,i,s)}});l.props.logAction(x.Ej,{y:t,x:a,intercept:s}),l.props.onCreated(i)})),v()(e.categorical)&&e.categorical.length>0?(i=e.categorical[0],u=(o=(0,V.Z)(e.data[i],i))[o.length-1]):(o=[],u=null),l.state={categories:o,y:i,success:u,x:e.quantitative[0],intercept:!0,omitMissing:!1},l}return(0,l.Z)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.categorical,a=t.quantitative,l=t.data,s=t.t,o=this.state,i=o.x,r=o.y,u=o.categories,f=o.success,v=o.intercept;return c.createElement(h.Z,{style:{fontSize:"14px",maxWidth:500}},c.createElement(h.Z.Header,{as:"h4"},s("Logistic Regression"),c.createElement(P.Z,{title:s("Logistic Regression"),content:"Predict a categorical response variable using one or more explanatory variables."})),c.createElement(h.Z.Body,null,c.createElement(g.Z,null,c.createElement(m.Z,{md:6},c.createElement(C.Z,{legend:s("outcome-y"),options:n,defaultValue:r,onChange:function(t){var n=(0,V.Z)(l[t],t);e.setState({categories:n,success:n[n.length-1],y:t})}})),c.createElement(m.Z,{md:6},c.createElement(C.Z,{legend:"".concat(s("success")," (Y = 1):"),defaultValue:f,options:u,onChange:function(t){e.setState({success:t})}}))),c.createElement(C.Z,{legend:s("predictors-x"),multi:!0,options:p()(a.concat(n)),defaultValue:i||"",onChange:function(t){return e.setState({x:t})},closeMenuOnSelect:!1,selectAllOption:!0}),c.createElement(k.Z,{legend:s("include-intercept"),defaultValue:v,onChange:function(t){return e.setState({intercept:t})}}),c.createElement(k.Z,{legend:s("omit-missing"),defaultValue:!1,onChange:function(t){return e.setState({omitMissing:t})}}),c.createElement(d.Z,{disabled:!i||0===i.length,variant:"primary",block:!0,onClick:this.compute},s("calculate"))))}}]),n}(c.Component);q.defaultProps={logAction:function(){}},t.default=q},64001:function(e,t,n){"use strict";var a=n(73284),l=n(9617),s=n(9874),o=n(36936),i=n(90105),r=n(69066);t.Z=function(e){var t=a.createElement(s.Z,{id:"popover-positioned-right"},a.createElement(o.Z,null,e.title),a.createElement(i.Z,null,e.content));return a.createElement(r.Z,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},a.createElement(l.Z,{size:"sm",variant:"outline-secondary",className:"question-button"},a.createElement("div",{className:"fa fa-question"})))}},72731:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var a=n(28991),l=n(6610),s=n(5991),o=n(63349),i=n(10379),r=n(60446),c=n(96156),u=n(73284),p=n(83603),d=n.n(p),h=n(67775),g=n.n(h),m=n(38958),f=n.n(m),v=n(43200),b=n(84972),Z=n(87651),y=function(e){(0,i.Z)(p,e);var t=(0,r.Z)(p);function p(e,a){var s;(0,l.Z)(this,p),s=t.call(this,e),(0,c.Z)((0,o.Z)(s),"updateValue",(function(e){s.setState({value:e},(function(){s.props.bind&&n.g.lesson.setState((0,c.Z)({},s.props.bind,e))}))})),(0,c.Z)((0,o.Z)(s),"handleChange",(function(e){var t=e.target.checked;s.props.onChange(t),s.updateValue(t)})),(0,c.Z)((0,o.Z)(s),"handleSpanChange",(function(e){var t=null!==s.props.value?!s.props.value:!s.state.value;s.props.onChange(t),s.updateValue(t)}));var i=a;return s.state={value:e.bind&&i.state?i.state[e.bind]:e.defaultValue,bind:e.bind,defaultValue:e.defaultValue},s}return(0,s.Z)(p,[{key:"componentDidUpdate",value:function(){if(this.props.bind){var e=n.g.lesson.state[this.props.bind];e!==this.state.value&&this.setState({value:e})}}},{key:"render",value:function(){var e=this.state.value;null!==this.props.value&&(e=this.props.value);var t=u.createElement("input",{className:"checkbox-input",type:"checkbox",checked:e,value:"checkbox",onChange:this.handleChange,disabled:this.props.disabled,"aria-label":this.props.tooltip});if(!0===this.props.inline)return u.createElement(b.Z,{tooltip:this.props.tooltip,placement:this.props.tooltipPlacement},u.createElement("span",{style:(0,a.Z)({marginLeft:"8px"},this.props.style)},t,u.createElement("span",{role:"button",tabIndex:0,className:"checkbox-legend",style:{color:this.props.disabled?"darkgray":null},onClick:this.handleSpanChange,onKeyPress:this.handleSpanChange},this.props.legend)));var n=this.props.disabled?f():this.handleSpanChange;return u.createElement(b.Z,{tooltip:this.props.tooltip,placement:this.props.tooltipPlacement},u.createElement("div",{className:"input checkbox-input-div",style:this.props.style},t,u.createElement("span",{role:"button",tabIndex:0,className:"checkbox-legend",style:{color:this.props.disabled?"darkgray":null},onClick:n,onKeyPress:n},this.props.legend)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a={};return e.defaultValue!==t.defaultValue?(a.value=e.defaultValue,a.defaultValue=e.defaultValue):e.bind!==t.bind&&(a.value=n.g.lesson.state[e.bind],a.bind=e.bind),g()(a)?null:a}}]),p}(v.Z);y.defaultProps={bind:"",onChange:function(){},defaultValue:!1,value:null,disabled:!1,inline:!1,legend:"",tooltip:"",tooltipPlacement:"right",style:{}},y.propTypes={bind:d().string,defaultValue:d().bool,value:d().bool,disabled:d().bool,inline:d().bool,onChange:d().func,legend:d().oneOfType([d().string,d().node]),tooltip:d().string,tooltipPlacement:d().oneOf(["left","top","right","bottom"]),style:d().object},y.contextType=Z.Z;var E=y}}]);
//# sourceMappingURL=98311.f7fb0173.chunk.js.map