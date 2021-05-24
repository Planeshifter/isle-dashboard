/*! For license information please see NaiveBayes.854706a0.chunk.js.LICENSE.txt */
(self.webpackChunkisle_dashboard=self.webpackChunkisle_dashboard||[]).push([[80139],{85637:function(t,e,r){"use strict";function a(t){throw new TypeError('"'+t+'" is read-only')}r.d(e,{Z:function(){return a}})},14621:function(t,e,r){"use strict";r.d(e,{i:function(){return y},W:function(){return g}});var a=r(24833),n=r.n(a),s=r(74049),i=r.n(s),o=r(40231),l=r(70295),c=r.n(l),u=r(65649),h=r.n(u),p=r(37263),f=r.n(p),v=r(75959);function m(t){return h()(t)||c()(t)}function d(t){return(0,o.isPrimitive)(t)&&!h()(t)}function y(t,e,r,a){var s=[],o=[],l={};f()(t)||(t=[t]);for(var c=0;c<t.length;c++){var u=r[t[c]];if(n()(a,t[c]))o.push(t[c]);else{for(var h=(0,v.Z)(u,t[c]),p=0;p<h.length;p++)o.push("".concat(t[c],"_").concat(h[p]));l[t[c]]=h}}for(var m=r[t[0]].length,d=0;d<m;d++){for(var y=[],g=0;g<t.length;g++){var E=r[t[g]];if(n()(a,t[g]))y.push(E[d]);else for(var w=l[t[g]],b=E[d],Z=0;Z<w.length;Z++)y.push(b===w[Z]?1:0)}s.push(y)}return{matrix:s=i()(s),predictors:o,yvalues:r[e]}}function g(t,e,r,a){var s=[],o=[],l={};f()(t)||(t=[t]);for(var c=0;c<t.length;c++){var u=r[t[c]];if(n()(a,t[c]))o.push(t[c]);else{for(var h=(0,v.Z)(u,t[c]),p=0;p<h.length;p++)o.push("".concat(t[c],"_").concat(h[p]));l[t[c]]=h}}for(var y=r[t[0]].length,g=[],E=0;E<y;E++){for(var w=[],b=!1,Z=0;Z<t.length;Z++){var k=r[t[Z]];if(n()(a,t[Z]))d(k[E])?w.push(k[E]):b=!0;else{var x=l[t[Z]],A=k[E];if(m(A))b=!0;else for(var P=0;P<x.length;P++)w.push(A===x[P]?1:0)}}m(r[e][E])&&(b=!0),b||(s.push(w),g.push(r[e][E]))}return{matrix:s=i()(s),predictors:o,yvalues:g}}},55344:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return U}});var a=r(28991),n=r(6610),s=r(5991),i=r(63349),o=r(10379),l=r(60446),c=r(96156),u=r(73284),h=r(25472),p=r(3840),f=r(9617),v=r(83301),m=r(24833),d=r.n(m),y=r(75140),g=r.n(y),E=r(84972),w=r(72439),b=r(74049),Z=r.n(b),k=(r(12076),r(56932)),x=r.n(k),A=r(24626),P=r.n(A),M=r(29285),F=r.n(M),q=(r(40231),r(85637)),T=r(34699),G=r(91031),V=r.n(G),S=r(70601),z=r.n(S),C=r(35214),O=r.n(C),_=r(6117),N=r.n(_),W=r(75127),D=r(13579),I=r(20360),L=r(55659);function X(t,e){this.n=t.shape[0],this.p=t.shape[1],this.classes=V()(e.slice()),this.nclass=this.classes.length,this.fitGaussian(t,e)}X.prototype.score=r(27892),X.prototype.fitGaussian=function(t,e){var r=this;this.prior={};var a=[this.p,this.nclass];this.mu=Z()(new Float64Array(a[0]*a[1]),{shape:a}),this.sigma=Z()(new Float64Array(a[0]*a[1]),{shape:a});for(var n=0;n<this.nclass;n++){for(var s=[],i=this.classes[n],o=0;o<this.n;o++)e[o]===i&&s.push(o);var l=s.length;this.prior[i]=z()(l/this.n);for(var c=function(e){var a=s.map((function(r){return t.get(r,e)})),i=(0,W.Z)(a),o=(0,D.Z)(a);r.mu.set(e,n,i),r.sigma.set(e,n,o)},u=0;u<this.p;u++)c(u)}},X.prototype.calcGaussianProb=function(t,e){for(var r=this.classes[e],a=this.prior[r],n=0;n<this.p;n++){var s=this.sigma.get(n,e),i=s*s,o=this.mu.get(n,e);a+=-.5*z()(2*N()*i)-O()(t[n]-o,2)/i}return a},X.prototype.predictOne=function(t){for(var e=this.classes.length,r=new Array(e),a=0;a<e;a++)r[a]=this.calcGaussianProb(t,a);for(var n=r[0],s=this.classes[0],i=0;i<e;i++){var o=r[i];o>n&&(n=o,s=this.classes[i])}return s},X.prototype.predict=function(t){var e=this.classes.length;if(x()(t)&&(t=Z()(t)),F()(t)){for(var r=(0,T.Z)(t.shape,2),a=r[0],n=r[1],s=new Array(a),i=0;i<a;i++){for(var o=new Array(e),l=0;l<e;l++){for(var c=new Array(n),u=0;u<n;u++)c[u]=t.get(i,u);o[l]=this.calcGaussianProb(c,l)}for(var h=o[0],p=this.classes[0],f=0;f<e;f++){var v=o[f];v>h&&(h=v,p=this.classes[f])}s[i]=p}return s}return this.predictOne(t)},X.prototype.predictProbs=function(t){if(x()(t)&&(t=Z()(t)),F()(t)){for(var e=(0,T.Z)(t.shape,2),r=e[0],a=e[1],n=new Array(r),s=0;s<r;s++){for(var i=new Array(this.nclass),o=0;o<this.nclass;o++){for(var l=new Array(a),c=0;c<a;c++)l[c]=t.get(s,c);i[o]=this.calcGaussianProb(l,o)}for(var u=(0,I.Z)(i),h=0,p=0;p<i.length;p++)h+=g()(i[p]-u);var f=u+z()(h);i=(0,L.Z)(i,f),n[s]=i.map((function(t){return g()(t)}))}return n}for(var v=new Array(this.nclass),m=0;m<this.nclass;m++)v[m]=this.calcGaussianProb(t,m);for(var d=(0,I.Z)(v),y=0,E=0;E<v.length;E++)y+=g()(v[E]-d);var w=d+z()(y);return(0,L.Z)(v,w),(0,q.Z)("logLik"),v.map((function(t){return g()(t)}))};var j=X,B=function(t){for(var e=0,r=0;r<t.length;r++)e+=t[r];return e};function H(t,e,r){this.n=t.shape[0],this.p=t.shape[1],this.classes=V()(e.slice()),this.nclass=this.classes.length,this.alpha=r,this.fitMultinomial(t,e)}H.prototype.score=r(27892),H.prototype.fitMultinomial=function(t,e){for(var r={},a=[this.p,this.nclass],n=Z()(new Float64Array(a[0]*a[1]),{shape:a}),s=0;s<this.nclass;s++){for(var i=[],o=new Int32Array(this.p),l=this.classes[s],c=0;c<this.n;c++)e[c]===l&&i.push(c);var u=i.length;r[l]=z()(u/this.n);for(var h=0,p=function(e){var r=i.map((function(r){return t.get(r,e)}));o[e]=B(r),h+=o[e]},f=0;f<this.p;f++)p(f);for(var v=0;v<this.p;v++){var m=z()(o[v]+this.alpha)-z()(h+this.p*this.alpha);n.set(v,s,m)}}this.prior=r,this.cprob=n},H.prototype.calcMultinomProb=function(t,e,r){var a=this.classes[e],n=this.prior[a];for(r=0;r<this.p;r++){n+=t[r]?t[r]*this.cprob.get(r,e):0}return n},H.prototype.predictOne=function(t){for(var e=this.classes.length,r=new Array(e),a=0;a<e;a++){var n=this.classes[a];r[a]=this.prior[n];for(var s=0;s<this.p;s++){var i=t[s]?t[s]*this.cprob.get(s,a):0;r[a]+=i}}for(var o=r[0],l=this.classes[0],c=0;c<e;c++){var u=r[c];u>o&&(o=u,l=this.classes[c])}return l},H.prototype.predict=function(t){var e=this.classes.length;if(x()(t)&&(t=Z()(t)),F()(t)){for(var r=[],a=t.shape[0],n=0;n<a;n++){for(var s=new Array(e),i=0;i<e;i++){var o=this.classes[i];s[i]=this.prior[o];for(var l=0;l<this.p;l++){var c=t.get(n,l)?t.get(n,l)*this.cprob.get(l,i):0;s[i]+=c}}for(var u=s[0],h=this.classes[0],p=0;p<e;p++){var f=s[p];f>u&&(u=f,h=this.classes[p])}r[n]=h}return r}return this.predictOne(t)},H.prototype.predictProbs=function(t){if(x()(t)&&(t=Z()(t)),F()(t)){for(var e=t.shape[0],r=new Array(e),a=0;a<e;a++){for(var n=new Array(this.nclass),s=0;s<this.nclass;s++){var i=this.classes[s];n[s]=this.prior[i];for(var o=0;o<this.p;o++){var l=t.get(a,o)?t.get(a,o)*this.cprob.get(o,s):0;n[s]+=l}}for(var c=(0,I.Z)(n),u=0,h=0;h<n.length;h++)u+=g()(n[h]-c);var p=c+z()(u);n=(0,L.Z)(n,p),r[a]=n.map((function(t){return g()(t)}))}return r}for(var f=new Array(this.nclass),v=0;v<this.nclass;v++){var m=this.classes[v];f[v]=this.prior[m];for(var d=0;d<this.p;d++){var y=t[d]*this.cprob.get(d,v);f[v]+=y}}for(var E=(0,I.Z)(f),w=0,b=0;b<f.length;b++)w+=g()(f[b]-E);var k=E+z()(w);return(f=(0,L.Z)(f,k)).map((function(t){return g()(t)}))};var J=r(14621);(0,w.E4)("StatisticalModels");var K=0,Q=function(t){var e=t.x,r=t.y,a=t.data,n=t.quantitative,s=t.omitMissing;try{var i=(s?J.W:J.i)(e,r,a,n),o=i.matrix,l=i.predictors;return{result:function(t,e){if(x()(t))t=Z()(t);else if(!F()(t))throw new TypeError("invalid input argument. The first argument must be a matrix or an array-of-arrays. Value: `"+t+"`");if(!P()(e))throw new TypeError("invalid input argument. The second argument must be array-like. Value: `"+e+"`");return new j(t,e)}(o,i.yvalues),predictors:l}}catch(c){return{}}},R=function(t){(0,o.Z)(r,t);var e=(0,l.Z)(r);function r(t){var s;(0,n.Z)(this,r),s=e.call(this,t),(0,c.Z)((0,i.Z)(s),"handlePrediction",(function(){s.props.onPredict(s.state.result,K)})),K+=1;var o=t.x,l=t.y,u=t.data,h=t.quantitative,p=t.omitMissing;return s.state=(0,a.Z)((0,a.Z)({},Q({x:o,y:l,data:u,quantitative:h,omitMissing:p})),t),s}return(0,s.Z)(r,[{key:"render",value:function(){var t=this.state,e=t.result,r=t.predictors,a=this.props.t;return e?u.createElement("div",{style:{overflowX:"auto",width:"100%"}},u.createElement("span",{className:"title"},a("naive-bayes-for-response",{y:this.props.y,counter:K})),function(t,e,r,a){return u.createElement("div",null,u.createElement("span",{className:"title"},a("apriori-probs"),":"),u.createElement(v.Z,{bordered:!0,size:"sm"},u.createElement("thead",null,u.createElement("tr",null,e.classes.map((function(t,e){return u.createElement("th",{key:e},t)})))),u.createElement("tbody",null,u.createElement("tr",null,e.classes.map((function(t,r){return u.createElement("th",{key:r},g()(e.prior[t]).toFixed(3))}))))),u.createElement("span",{className:"title"},a("conditionals"),":"),t.map((function(t,n){return d()(r,t)?u.createElement(v.Z,{bordered:!0,size:"sm",key:n},u.createElement("thead",null,u.createElement("tr",null,u.createElement("th",null,t),e.classes.map((function(t,e){return u.createElement("th",{key:e},t)})))),u.createElement("tbody",null,u.createElement("tr",null,u.createElement("th",null,a("mean")),e.classes.map((function(t,r){return u.createElement("td",{key:"".concat(n,"-").concat(r)},e.mu.get(n,r).toFixed(6))}))),u.createElement("tr",null,u.createElement("th",null,a("sd")),e.classes.map((function(t,r){return u.createElement("td",{key:"".concat(n,"-").concat(r)},e.sigma.get(n,r).toFixed(6))}))))):u.createElement(v.Z,{bordered:!0,size:"sm",key:n},u.createElement("thead",null,u.createElement("tr",null,u.createElement("th",null,t),e.classes.map((function(t,e){return u.createElement("th",{key:e},t)})))),u.createElement("tbody",null,u.createElement("tr",null,u.createElement("th",null,a("yes")),e.classes.map((function(t,r){return u.createElement("td",{key:"".concat(n,"-").concat(r)},e.mu.get(n,r).toFixed(3))}))),u.createElement("tr",null,u.createElement("th",null,a("no")),e.classes.map((function(t,r){return u.createElement("td",{key:"".concat(n,"-").concat(r)},(1-e.mu.get(n,r)).toFixed(3))})))))})))}(r,e,this.props.quantitative,a),this.props.onPredict?u.createElement(E.Z,{tooltip:a("use-model-to-predict-tooltip")},u.createElement(f.Z,{variant:"secondary",size:"sm",onClick:this.handlePrediction},a("use-model-to-predict"))):null):u.createElement(p.Z,{variant:"danger"},a("missing-attributes"))}}],[{key:"getDerivedStateFromProps",value:function(t,e){if(t.data!==e.data||t.quantitative!==e.quantitative||t.x!==e.x||t.y!==e.y||t.omitMissing!==e.omitMissing){var r=t.x,n=t.y,s=t.data,i=t.quantitative,o=t.omitMissing;return(0,a.Z)((0,a.Z)({},Q({x:r,y:n,data:s,quantitative:i,omitMissing:o})),t)}return null}}]),r}(u.Component);R.defaultProps={omitMissing:!1,onPredict:null};var U=(0,h.Z)("StatisticalModels")(R)},27892:function(t,e,r){"use strict";r.r(e);var a=r(24626),n=r.n(a);e.default=function(t,e){if(!n()(t))throw new TypeError("invalid argument. First argument must be a matrix or array of test data. Value: `"+t+"`");if(!n()(e))throw new TypeError("invalid argument. Second argument must be an array of labels for the test data. Value: `"+e+"`");for(var r=this.predict(t),a=e.length,s=0,i=0;i<a;i++)r[i]===e[i]&&(s+=1);return s/=a}},55659:function(t,e,r){"use strict";var a=r(24626),n=r.n(a),s=r(40231);e.Z=function(t,e){var r=n()(e);if(!n()(t))throw new TypeError("invalid input argument. Must provide an array. Value: `"+t+"`.");if(!r&&!(0,s.isPrimitive)(e))throw new TypeError("invalid input argument. Second argument must either be an array or number primitive. Value: `"+e+"`.");var a=t.length,i=new Array(a);if(r){if(a!==e.length)throw new Error("invalid input argument. Array to be added must have a length equal to that of the input array.");for(var o=0;o<a;o++)i[o]=t[o]-e[o]}else for(var l=0;l<a;l++)i[l]=t[l]-e;return i}},56932:function(t,e,r){"use strict";var a=r(20338);t.exports=a},20338:function(t,e,r){"use strict";var a=r(19097)(r(37263));t.exports=a}}]);
//# sourceMappingURL=NaiveBayes.854706a0.chunk.js.map