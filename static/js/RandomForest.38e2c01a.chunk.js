(self.webpackChunkisle_dashboard=self.webpackChunkisle_dashboard||[]).push([[66634],{90386:function(e,t,r){"use strict";r.r(t);var a=r(28991),s=r(6610),n=r(5991),i=r(63349),o=r(10379),u=r(60446),p=r(96156),l=r(73284),m=r(25472),c=r(3840),h=r(9617),d=r(37263),y=r.n(d),T=r(4827),v=r(84972),f=r(24585);(0,r(72439).E4)("StatisticalModels");var x=0,C=function(e){var t=e.y,r=e.x,a=e.type,s=e.nTrees,n=e.nTry,i=e.impurityMeasure,o=e.data,u=e.quantitative,p=e.scoreThreshold,l=e.maxTreeDepth,m=e.minItemsCount;try{var c,h;c=y()(r)?r:[r],"Classification"===a&&(h=new f.OI({response:t,predictors:c,data:o,quantitative:u,criterion:i,nTrees:s,nTry:n,scoreThreshold:p,maxTreeDepth:l,minItemsCount:m}));for(var d=[],T=0;T<c.length;T++){var v=c[T];d.push(h.importances[v])}return{forest:h,predictors:c,importances:d}}catch(x){return{}}},Z=function(e){(0,o.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n;(0,s.Z)(this,r),n=t.call(this,e),(0,p.Z)((0,i.Z)(n),"handlePredict",(function(){n.props.onPredict(n.state.forest,x)})),x+=1;var o=e.y,u=e.x,l=e.type,m=e.nTrees,c=e.nTry,h=e.impurityMeasure,d=e.data,y=e.quantitative,T=e.scoreThreshold,v=e.maxTreeDepth,f=e.minItemsCount;return n.state=(0,a.Z)((0,a.Z)({},C({y:o,x:u,type:l,nTrees:m,nTry:c,impurityMeasure:h,data:d,quantitative:y,scoreThreshold:T,maxTreeDepth:v,minItemsCount:f})),e),n}return(0,n.Z)(r,[{key:"render",value:function(){var e=this.state.forest,t=this.props.t;return e?l.createElement("div",{style:{overflowX:"auto",width:"100%"}},l.createElement("span",{className:"title"},t("random-forest-for",{y:this.props.y,counter:x})),l.createElement("p",null,t("created-from-trees",{nTrees:this.props.nTrees,nTry:this.props.nTry})),l.createElement(T.Z,{editable:!0,data:[{type:"bar",x:this.state.predictors,y:this.state.importances}],layout:{xaxis:{title:t("variable")},yaxis:{title:t("importance")}}}),this.props.onPredict?l.createElement(v.Z,{tooltip:t("predictions-attached")},l.createElement(h.Z,{variant:"secondary",size:"sm",style:{marginTop:10},onClick:this.handlePredict},this.props.t("use-model-to-predict"))):null):l.createElement(c.Z,{variant:"danger"},t("missing-attributes"))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.y!==t.y||e.x!==t.x||e.type!==t.type||e.nTrees!==t.nTrees||e.nTry!==t.nTry||e.impurityMeasure!==t.impurityMeasure||e.data!==t.data||e.quantitative!==t.quantitative||e.scoreThreshold!==t.scoreThreshold||e.maxTreeDepth!==t.maxTreeDepth||e.minItemsCount!==t.minItemsCount){var r=e.y,s=e.x,n=e.type,i=e.nTrees,o=e.nTry,u=e.impurityMeasure,p=e.data,l=e.quantitative,m=e.scoreThreshold,c=e.maxTreeDepth,h=e.minItemsCount;return(0,a.Z)((0,a.Z)({},C({y:r,x:s,type:n,nTrees:i,nTry:o,impurityMeasure:u,data:p,quantitative:l,scoreThreshold:m,maxTreeDepth:c,minItemsCount:h})),e)}return null}}]),r}(l.Component);Z.defaultProps={type:"Classification",nTrees:50,nTry:1,impurityMeasure:"gini",scoreThreshold:.01,maxTreeDepth:20,minItemsCount:50,onPredict:null},t.default=(0,m.Z)("StatisticalModels")(Z)}}]);
//# sourceMappingURL=RandomForest.38e2c01a.chunk.js.map