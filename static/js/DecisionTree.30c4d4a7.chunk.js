(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{3627:function(e,t,a){"use strict";a.r(t);var r=a(16),i=a(12),n=a(13),s=a(27),o=a(20),u=a(39),c=a(50),p=a(485),m=a.n(p),d=a(1048),l=a(665),h=a(489),y=a(34),v=a.n(y),T=a(497),x=a(521),b=a(2105);Object(x.a)("StatisticalModels");var f=0,C=function(e){var t,a=e.x,r=e.y,i=e.data,n=e.type,s=e.quantitative,o=e.impurityMeasure,u=e.scoreThreshold,c=e.maxTreeDepth,p=e.minItemsCount;t=v()(a)?a:[a];try{return"Classification"===n?new b.a({response:r,predictors:t,data:i,quantitative:s,criterion:o,scoreThreshold:u,maxTreeDepth:c,minItemsCount:p}):new b.c({response:r,predictors:t,data:i,quantitative:s,scoreThreshold:u,maxTreeDepth:c,minItemsCount:p})}catch(m){return null}},D=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(i.a)(this,a),n=t.call(this,e),Object(c.a)(Object(s.a)(n),"handlePredict",(function(){n.props.onPredict(n.state.tree,f)})),f+=1;var o=n.props,u=o.x,p=o.y,m=o.data,d=o.type,l=o.quantitative,h=o.impurityMeasure,y=o.scoreThreshold,v=o.maxTreeDepth,T=o.minItemsCount;return n.state=Object(r.a)({tree:C({x:u,y:p,data:m,type:d,quantitative:l,impurityMeasure:h,scoreThreshold:y,maxTreeDepth:v,minItemsCount:T})},e),n}return Object(n.a)(a,[{key:"render",value:function(){var e=this.state.tree,t=this.props.t;return e?m.a.createElement("div",{style:{overflowX:"auto",width:"100%"}},m.a.createElement("span",{className:"title"},t("decision-tree-for",{y:this.props.y,counter:f})),m.a.createElement(b.d,{tree:e.root}),this.props.onPredict?m.a.createElement(T.a,{tooltip:t("predictions-attached")},m.a.createElement(h.a,{variant:"secondary",size:"sm",style:{marginTop:10},onClick:this.handlePredict},this.props.t("use-model-to-predict"))):null):m.a.createElement(l.a,{variant:"danger"},t("missing-attributes"))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.y!==t.y||e.x!==t.x||e.type!==t.type||e.impurityMeasure!==t.impurityMeasure||e.data!==t.data||e.quantitative!==t.quantitative||e.scoreThreshold!==t.scoreThreshold||e.maxTreeDepth!==t.maxTreeDepth||e.minItemsCount!==t.minItemsCount){var a=e.x,i=e.y,n=e.data,s=e.type,o=e.quantitative,u=e.impurityMeasure,c=e.scoreThreshold,p=e.maxTreeDepth,m=e.minItemsCount;return Object(r.a)({tree:C({x:a,y:i,data:n,type:s,quantitative:o,impurityMeasure:u,scoreThreshold:c,maxTreeDepth:p,minItemsCount:m})},e)}return null}}]),a}(p.Component);D.defaultProps={impurityMeasure:"gini",scoreThreshold:.0075,maxTreeDepth:5,minItemsCount:50,onPredict:null},t.default=Object(d.a)("StatisticalModels")(D)}}]);
//# sourceMappingURL=DecisionTree.30c4d4a7.chunk.js.map