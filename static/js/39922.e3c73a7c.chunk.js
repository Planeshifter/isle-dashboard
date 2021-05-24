/*! For license information please see 39922.e3c73a7c.chunk.js.LICENSE.txt */
(self.webpackChunkisle_dashboard=self.webpackChunkisle_dashboard||[]).push([[39922],{19506:function(e,t,n){"use strict";var a=(0,n(37086).Z)((function(){return n.e(1438).then(n.bind(n,37017))}));t.Z=a},39922:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return et}});var a=n(34699),r=n(73284),l=n(9617),o=n(28991),i=n(10077),s=n.n(i),c=n(31731),u=n(76568),m=n(59946),d=n(8658),p=n(3840),h=n(9548),g=n(26646),f=n(89139),v=n(19487),Z=n.n(v),E=n(66731),b=n.n(E),y=n(20887),C=n.n(y),N=n(11775),w=n.n(N),k=n(40231),x=n(87914),V=n(87950),F=n(95571),P=n(13985),S=n(4827),G=n(37086);(0,n(72439).E4)("Panel");var H=(0,G.Z)((function(){return n.e(1894).then(n.bind(n,49602))})),L=n(66300),q=n(65649),A=n.n(q),T=n(56851),z=n(75127),B=n(41122),M=n(20360),K=n(10724),D=n(12376);var I=function(e){e.stopPropagation()},R=n(38868),O=n(35137),Y=s()("isle:data-explorer:variable-transformer"),j=/shapes\[(\d)\]\.x0/,J={group:null,displayDensity:!0,densityType:"Data-driven",chooseBins:!1,nBins:null};function W(e,t){return e-t}var $=function(e){for(var t=[],n=0;n<e.length;n++)t.push({type:"line",x0:e[n],y0:-100,x1:e[n],y1:100,line:{color:"red",width:3}});return t},_=function(e,t){var n=new Array(t.length);t[0]?n[0]=t[0]:n[0]="(-\u221e,".concat(e[0],")");for(var a=1;a<t.length;a++)t[a]?n[a]=t[a]:n[a]="[".concat(e[a-1],",").concat(e[a],")");var r=t.length-1;return t[r]?n[r]=t[r]:n[r]="[".concat(e[e.length-1],",\u221e)"),n},U=function(e){var t,n,i=(0,r.useState)(""),s=(0,a.Z)(i,2),v=s[0],E=s[1],y=(0,r.useState)(0),N=(0,a.Z)(y,2),G=N[0],q=N[1],U=(0,r.useState)({variable:null,configHist:null,breakpoints:null,categories:null,customNames:null}),X=(0,a.Z)(U,2),Q=X[0],ee=X[1],te=v.length<2,ne=function(){var t=Q.variable,n=Q.categories,a=Q.breakpoints,r=e.data[t],l=(0,R.Z)(r,n,a);e.logAction(K.dU,{name:v,variable:t,breaks:a,categories:n});var o=(0,T.Z)(v,n);e.onGenerate(o,l),e.onHide()},ae=function(e){13!==e.charCode||te||ne()},re=function(e){E(e.target.value)},le=function(e){return function(t){Y("Change break point...");var n=Q.breakpoints.slice();n[e]=C()(t,-G),n.sort(W);var a=w()(Q.configHist);a.layout.shapes=$(n),ee((0,o.Z)((0,o.Z)({},Q),{},{configHist:a,breakpoints:n,categories:_(n,Q.customNames)}))}},oe=function(e){return function(t){var n=Q.categories.slice();n[e]=t;var a=Q.customNames.slice();a[e]=t;var r=(0,o.Z)((0,o.Z)({},Q),{},{categories:n,customNames:a});ee(r)}},ie=function(e){return function(){var t=Q.breakpoints,n=Q.categories,a=Q.customNames;t.splice(e,1),n.splice(e,1),a.splice(e,1);var r=(0,o.Z)({},Q.configHist);r.layout.shapes=$(t),ee((0,o.Z)((0,o.Z)({},Q),{},{configHist:r,categories:n,customNames:a,breakpoints:t}))}},se=function(e){var t=b()(e),n=j.exec(t[0]);if(n){var a=n[1],r=Q.breakpoints.slice();r[a]=C()(e[t[0]],-G),r.sort(W);var l=w()(Q.configHist);l.layout.shapes=$(r),ee((0,o.Z)((0,o.Z)({},Q),{},{configHist:l,breakpoints:r,categories:_(r,Q.customNames)}))}},ce=function(t){Y("Change variable to bin...");var n=(0,o.Z)({data:e.data,variable:t},J),a=(0,D.N)(n);a.layout.yaxis={range:[(0,B.Z)(a.data[1].y),(0,M.Z)(a.data[1].y)],fixedrange:!0},a.layout.xaxis={fixedrange:!0};var r=e.data[t];r=r.filter((function(e){return(0,k.isPrimitive)(e)&&!A()(e)}));var l=[C()((0,z.Z)(r),-G)];a.layout.shapes=$(l);var i=[!1,!1];ee({variable:t,configHist:a,breakpoints:l,customNames:i,categories:_(l,i)})},ue=function(){var t=Q.breakpoints.slice(),n=e.data[Q.variable];n=n.filter((function(e){return(0,k.isPrimitive)(e)&&!A()(e)}));var a=Z()(.8,1.2)*(0,z.Z)(n);t.push(C()(a,-G)),t.sort(W);var r=w()(Q.configHist);r.layout.shapes=$(t);var l=Q.customNames;l.push(!1);var i=(0,o.Z)((0,o.Z)({},Q),{},{breakpoints:t,configHist:r,categories:_(t,l)});ee(i)};return r.createElement(P.Z,{cancel:".card-body",onDragStart:I,style:{zIndex:1006}},r.createElement(H,{onHide:e.onHide,show:e.show,header:e.t("bin-transformer-header"),footer:r.createElement(l.Z,{onClick:ne,disabled:te},e.t("create-new-variable")),bodyStyle:{maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative"},role:"button",tabIndex:0},(t=Q.configHist,n=r.createElement(V.Z,{legend:e.t("variable-to-bin"),defaultValue:Q.variable,options:e.quantitative,onChange:ce,style:{maxWidth:400}}),t?r.createElement(r.Fragment,null,n,r.createElement(l.Z,{className:"insert-line-button",onClick:ue},e.t("insert-break-line")),r.createElement("p",null,e.t("drag-red-bars"),"(",r.createElement(x.Z,{legend:e.t("digits-after-comma-snap"),min:0,max:9,inline:!0,defaultValue:G,onChange:q}),")"),r.createElement("div",{style:{height:250}},r.createElement(S.Z,{data:t.data,layout:t.layout,editable:!0,fit:!0,removeButtons:!0,legendButtons:!1,onRelayout:se})),r.createElement("div",null,r.createElement(h.Z,{className:"mb-2"},r.createElement(h.Z.Header,null,e.t("choose-category-labels"),":"),r.createElement(h.Z.Body,null,function(){var e=[],t=Q.breakpoints,n=1===t.length;if(e.push(r.createElement(g.Z,{key:"div-0"},r.createElement(f.Z,{md:7},r.createElement(L.Z,{raw:"x < "}),r.createElement(x.Z,{inline:!0,onBlur:le(0),defaultValue:t[0],step:"any"})),r.createElement(f.Z,{md:4},r.createElement(F.Z,{key:0,legend:"Label 1",defaultValue:Q.categories[0],onChange:oe(0),style:{width:200}})),r.createElement(f.Z,{md:1}))),t.length>1)for(var a=0;a<t.length-1;a++){var l=oe(a+1);e.push(r.createElement(g.Z,{key:"div-".concat(a+1)},r.createElement(f.Z,{md:7},r.createElement(x.Z,{inline:!0,onBlur:le(a),defaultValue:t[a],step:"any"}),r.createElement(L.Z,{raw:"le x <"}),r.createElement(x.Z,{inline:!0,onBlur:le(a+1),defaultValue:t[a+1],step:"any"})),r.createElement(f.Z,{md:4},r.createElement(F.Z,{key:1+a,legend:"Label ".concat(a+2),defaultValue:Q.categories[a+1],onChange:l,style:{width:200}})),r.createElement(f.Z,{md:1},r.createElement(O.Z,{onClick:ie(a),style:{marginTop:"5px"},disabled:n,tooltipPlacement:"right"}))))}var o=t.length;return e.push(r.createElement(g.Z,{key:"div-".concat(o)},r.createElement(f.Z,{md:7},r.createElement(L.Z,{raw:"x ge"}),r.createElement(x.Z,{inline:!0,onChange:le(o-1),defaultValue:t[o-1],step:"any"})),r.createElement(f.Z,{md:4},r.createElement(F.Z,{legend:"Label ".concat(o+1),defaultValue:Q.categories[o],onChange:oe(o),key:o,style:{width:200}})),r.createElement(f.Z,{md:1},r.createElement(O.Z,{onClick:ie(o-1),style:{marginTop:"5px"},disabled:n})))),e}()))),r.createElement(m.Z,{style:{width:"fit-content"}},r.createElement(u.Z,null,e.t("name-new-variable"),":"),r.createElement(c.Z,{type:"text",placeholder:e.t("select-name"),onChange:re,onKeyPress:ae}),r.createElement(d.Z,null,e.t("new-variable-appended")))):r.createElement(r.Fragment,null,n,r.createElement(p.Z,{variant:"info"},e.t("select-variable-bin"))))))};U.defaultProps={logAction:function(){},onGenerate:function(){}};var X=U,Q=n(6610),ee=n(5991),te=n(63349),ne=n(10379),ae=n(60446),re=n(96156),le=n(12929),oe=n(34158),ie=n(24730),se=n(16821),ce=n(93830),ue=n(19506),me=n(67775),de=n.n(me),pe=(0,n(20216).Z)("text-area"),he=function(e){(0,ne.Z)(n,e);var t=(0,ae.Z)(n);function n(e){var a;return(0,Q.Z)(this,n),a=t.call(this,e),(0,re.Z)((0,te.Z)(a),"handleChange",(function(e){var t=e.target.value;a.setState({value:t}),a.props.onChange(t)})),a.id=e.id||pe(e),a.state=(0,o.Z)({value:e.value||e.defaultValue},e),a}return(0,ee.Z)(n,[{key:"renderLegend",value:function(){return this.props.legend?r.createElement(u.Z,{htmlFor:this.id},this.props.legend):null}},{key:"render",value:function(){var e=this,t=this.state.value;return null!==this.props.value&&(t=this.props.value),r.createElement(m.Z,{className:"input",id:"".concat(this.id,"-form")},this.renderLegend(),r.createElement(c.Z,{id:this.id,as:"textarea",placeholder:this.props.placeholder,ref:function(t){e.textarea=t},onBlur:this.props.onBlur,onChange:this.handleChange,style:(0,o.Z)({resize:this.props.resizable},this.props.style),rows:this.props.rows,value:t,disabled:this.props.disabled}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n={};return e.defaultValue!==t.defaultValue&&(n.value=e.defaultValue),de()(n)?null:n}}]),n}(r.Component);he.defaultProps={defaultValue:"",value:null,disabled:!1,legend:"",onBlur:function(){},onChange:function(){},placeholder:"Enter text",resizable:"none",rows:5,style:{}};var ge=he,fe=n(84972),ve=n(42630),Ze=n.n(ve),Ee=n(24833),be=n.n(Ee),ye=n(918),Ce=n.n(ye),Ne=n(25953),we=n(3260),ke=Ze()(0,10,1),xe=/(?:^|\n)([^\n]*)$/,Ve=/^[0-9]/,Fe=r.forwardRef((function(e,t){var n=e.children,l=e.style,o=e.className,i=e["aria-labelledby"],s=(0,r.useState)(""),u=(0,a.Z)(s,2),m=u[0],d=u[1];return r.createElement("div",{ref:t,style:l,className:o,"aria-labelledby":i},r.createElement(c.Z,{className:"mx-3 my-2 w-auto",placeholder:"Type to filter...",onChange:function(e){return d(e.target.value)},value:m}),r.createElement("ul",{className:"list-unstyled"},r.Children.toArray(n).filter((function(e){return!m||e.props.children.toLowerCase().startsWith(m)}))))})),Pe=function(e){(0,ne.Z)(n,e);var t=(0,ae.Z)(n);function n(e){var a;return(0,Q.Z)(this,n),a=t.call(this,e),(0,re.Z)((0,te.Z)(a),"handleGenerate",(function(){var e,t=a.state,n=t.code,r=t.name;be()(n,"return ")||(n=Ce()(n,xe,"\nreturn $1"));try{e=(0,Ne.Z)(n,a.props.data),a.props.logAction(K.gx,{code:n,name:r}),a.props.onGenerate(r,e)}catch(l){return a.props.session.addNotification({title:"Errored",message:"Encountered the following error: "+l.message,level:"error",position:"tr"})}a.props.onHide()})),(0,re.Z)((0,te.Z)(a),"handleNameChange",(function(e){a.setState({name:e.target.value})})),(0,re.Z)((0,te.Z)(a),"handleCodeChange",(function(e){a.setState({code:e})})),(0,re.Z)((0,te.Z)(a),"handleKeyPress",(function(e){13===e.charCode&&a.state.name.length>=2&&a.handleGenerate()})),(0,re.Z)((0,te.Z)(a),"insertVarFactory",(function(e){return function(){var t=a.state.code.substring(0,a.state.selection),n="datum";t+=n+=!be()(e," ")&&!be()(e,".")&&!Ve.test(e)?".".concat(e):"['".concat(e,"']"),t+=a.state.code.substring(a.state.selection),a.setState({code:t,selection:a.state.selection+n.length})}})),(0,re.Z)((0,te.Z)(a),"insertLiteralFactory",(function(e){return function(){var t=a.state.code.substring(0,a.state.selection),n=e;t+=n,t+=a.state.code.substring(a.state.selection),a.setState({code:t,selection:a.state.selection+n.length})}})),(0,re.Z)((0,te.Z)(a),"insertFuncFactory",(function(e){return function(){var t=a.state.code.substring(0,a.state.selection),n=" "+e+"()";t+=n,t+=a.state.code.substring(a.state.selection),a.setState({code:t,selection:a.state.selection+n.length-1})}})),a.state={code:e.defaultCode,selection:null,name:"",showGuide:!1},a}return(0,ee.Z)(n,[{key:"render",value:function(){var e=this,t=this.props.t,n=this.props.quantitative.map((function(t,n){return r.createElement(ce.Z.Item,{key:n,onClick:e.insertVarFactory(t),eventKey:n},t)}));return r.createElement(P.Z,{cancel:".card-body",onDragStart:function(e){e.stopPropagation()},style:{zIndex:1006}},r.createElement(H,{show:this.props.show,onHide:this.props.onHide,header:this.props.t("formula-transformer-header"),footer:r.createElement(l.Z,{onClick:this.handleGenerate,disabled:this.state.name.length<2},this.props.t("create-new-variable")),role:"button",tabIndex:0,bodyStyle:{maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative"}},r.createElement("div",{className:"formula-transformer-body"},r.createElement(ue.Z,{headerClassName:"title",header:this.state.showGuide?t("hide-example-guide"):t("show-example-guide"),visible:this.state.showGuide,onClick:function(){return e.setState({showGuide:!e.state.showGuide})}},r.createElement("p",null,t("formula-transformer-example-intro")),r.createElement(oe.Z,{condensed:!0},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,t("type")),r.createElement("th",null,t("example")),r.createElement("th",null,t("description")))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,t("interaction"),":"),r.createElement("td",null,r.createElement("code",null,"datum.",this.props.quantitative[0]," * datum.",this.props.quantitative[1])),r.createElement("td",null,r.createElement(le.c,{i18nKey:"example-description-multiply",ns:"DataExplorer"},"Multiply values of variables ",r.createElement("code",null,{first:this.props.quantitative[0]})," and ",r.createElement("code",null,{second:this.props.quantitative[1]})))),r.createElement("tr",null,r.createElement("td",null,t("transformation"),":"),r.createElement("td",null,r.createElement("code",null,"exp( datum.",this.props.quantitative[0]," )")),r.createElement("td",null,r.createElement(le.c,{i18nKey:"example-description-exponential",ns:"DataExplorer"},"Natural exponential function of variable ",r.createElement("code",null,{variable:this.props.quantitative[0]})))),r.createElement("tr",null,r.createElement("td",null,t("function"),":"),r.createElement("td",null,r.createElement("code",null,"9/5 * ",this.props.quantitative[0]," + 32")),r.createElement("td",null,r.createElement(le.c,{i18nKey:"example-description-calculation",ns:"DataExplorer"},"Multiply values of ",r.createElement("code",null,{variable:this.props.quantitative[0]})," by ",r.createElement("code",null,"9/5")," and add ",r.createElement("code",null,"32"))))))),r.createElement("hr",null),r.createElement("div",{className:"mb-2"},r.createElement(se.Z,{style:{marginBottom:5}},r.createElement(ce.Z,{className:"mr-2"},r.createElement(ce.Z.Toggle,{variant:"light",id:"dropdown-custom-components"},t("quantitative")),r.createElement(ce.Z.Menu,{variant:"light",as:Fe,id:"bg-nested-dropdown"},n)),r.createElement(ce.Z,{className:"mr-2"},r.createElement(ce.Z.Toggle,{variant:"light",id:"dropdown-custom-components"},t("categorical")),r.createElement(ce.Z.Menu,{variant:"light",as:Fe,id:"bg-nested-dropdown"},this.props.categorical.map((function(t,n){return r.createElement(ce.Z.Item,{key:n,onClick:e.insertVarFactory(t),eventKey:n},t)})))))),r.createElement(h.Z,{className:"mb-2"},r.createElement(h.Z.Body,null,r.createElement(se.Z,{style:{marginBottom:5}},r.createElement(ie.Z,{size:"sm",className:"mr-2"},r.createElement(l.Z,{variant:"light",onClick:this.insertLiteralFactory(" < ")},"<"),r.createElement(l.Z,{variant:"light",onClick:this.insertLiteralFactory(" > ")},">"),r.createElement(l.Z,{variant:"light",onClick:this.insertLiteralFactory(" <= ")},"<="),r.createElement(l.Z,{variant:"light",onClick:this.insertLiteralFactory(" >= ")},">=")),r.createElement(ie.Z,{size:"sm",className:"mr-2"},r.createElement(fe.Z,{placement:"top",tooltip:t("open-parenthesis")},r.createElement(l.Z,{variant:"light",onClick:this.insertLiteralFactory(" ( ")},"(")),r.createElement(fe.Z,{placement:"top",tooltip:t("closing-parenthesis")},r.createElement(l.Z,{variant:"light",onClick:this.insertLiteralFactory(" ) ")},")"))),r.createElement(ie.Z,{size:"sm",className:"mr-2"},r.createElement(fe.Z,{placement:"top",tooltip:t("addition")},r.createElement(l.Z,{variant:"light",onClick:this.insertLiteralFactory(" + ")},"+")),r.createElement(fe.Z,{placement:"top",tooltip:t("subtraction")},r.createElement(l.Z,{variant:"light",onClick:this.insertLiteralFactory(" - ")},"-")),r.createElement(fe.Z,{placement:"top",tooltip:t("multiplication")},r.createElement(l.Z,{variant:"light",onClick:this.insertLiteralFactory(" * ")},"*")),r.createElement(fe.Z,{placement:"top",tooltip:t("division")},r.createElement(l.Z,{variant:"light",onClick:this.insertLiteralFactory(" / ")},"/"))),r.createElement(ie.Z,{size:"sm",className:"mr-2"},r.createElement(l.Z,{variant:"light",onClick:this.insertLiteralFactory(" && ")},t("and")),r.createElement(l.Z,{variant:"light",onClick:this.insertLiteralFactory(" || ")},t("or")),r.createElement(l.Z,{variant:"light",onClick:this.insertLiteralFactory(" !")},t("not"))),r.createElement(ie.Z,{size:"sm",className:"me-2"},we.map((function(t,n){return r.createElement(l.Z,{key:n,variant:"light",onClick:e.insertFuncFactory(t),eventKey:n},t)})))),r.createElement(se.Z,null,r.createElement(ie.Z,{size:"sm",className:"mr-2"},ke.map((function(t,n){return r.createElement(l.Z,{key:n,variant:"light",onClick:e.insertLiteralFactory("".concat(t))},t)})),r.createElement(l.Z,{variant:"light",onClick:this.insertLiteralFactory(".")},"."))))),r.createElement(h.Z,{className:"mb-2"},r.createElement(h.Z.Body,null,r.createElement(ge,{ref:function(t){e.textarea=t},legend:"Expression:",placeholder:"Enter formula...",value:this.state.code,onChange:this.handleCodeChange,onBlur:function(t){var n=t.target.selectionStart;e.setState({selection:n})},rows:3}))),r.createElement(m.Z,{style:{margin:8}},r.createElement(u.Z,null,t("name-new-variable"),":"),r.createElement(c.Z,{type:"text",placeholder:t("select-name"),onChange:this.handleNameChange,onKeyPress:this.handleKeyPress}),r.createElement(d.Z,null,t("new-variable-appended"))))))}}]),n}(r.Component);Pe.defaultProps={logAction:function(){},onGenerate:function(){},defaultCode:"",session:{}};var Se=Pe,Ge=n(83301),He=n(18426),Le=n.n(He),qe=n(96368),Ae=n.n(qe),Te=n(33489),ze=n.n(Te),Be=n(72731),Me=n(49116),Ke=n(54219),De=s()("isle:data-explorer:variable-transformer");function Ie(e){return e?Ce()(e,".","[dot]"):e}function Re(e){for(var t=b()(e),n=!0,a=0;a<t.length;a++)ze()(e[t[a]])||(n=!1);return n}var Oe=function(e){(0,ne.Z)(n,e);var t=(0,ae.Z)(n);function n(e){var a;(0,Q.Z)(this,n),a=t.call(this,e),(0,re.Z)((0,te.Z)(a),"handleFirstVariableChange",(function(e){var t,n={};if(a.state.secondVar){var r=e,l=a.state.secondVar,o=a.props.data[r];t=Le()(o,Ae());for(var i=(0,Ke.Z)(t,r),s=(0,Ke.Z)(a.state.secondFreqs,l),c=0;c<i.length;c++)for(var u=0;u<s.length;u++){var m=i[c]+"-"+s[u];n[Ie(m)]=m}}else{var d=a.props.data[e];t=Le()(d,Ae());for(var p=(0,Ke.Z)(t,e),h=0;h<p.length;h++)n[Ie(p[h])]=p[h]}var g=Re(n);a.setState({firstVar:e,firstFreqs:t,nameMappings:n,onlyNumbers:g})})),(0,re.Z)((0,te.Z)(a),"handleSecondVariableChange",(function(e){if(!e){for(var t=a.state.firstVar,n=(0,Ke.Z)(a.state.firstFreqs,t),r={},l=0;l<n.length;l++)r[Ie(n[l])]=n[l];return a.setState({secondVar:e,nameMappings:r})}for(var o={},i=a.state.firstVar,s=a.props.data[e],c=Le()(s,Ae()),u=(0,Ke.Z)(a.state.firstFreqs,i),m=(0,Ke.Z)(c,e),d=0;d<u.length;d++)for(var p=0;p<m.length;p++){var h=u[d]+"-"+m[p];o[Ie(h)]=h}var g=Re(o);a.setState({secondVar:e,secondFreqs:c,nameMappings:o,onlyNumbers:g})})),(0,re.Z)((0,te.Z)(a),"handleKeyPress",(function(e){13===e.charCode&&a.state.generatedName.length>=2&&a.makeNewVar()})),(0,re.Z)((0,te.Z)(a),"changeFreqFactory",(function(e){return function(t){var n=w()(a.state.nameMappings);n[Ie(e)]=t.target.value;var r=Re(n);a.setState({nameMappings:n,onlyNumbers:r})}})),(0,re.Z)((0,te.Z)(a),"changeContigencyFactory",(function(e,t){return function(n){var r=w()(a.state.nameMappings);r[Ie(t)+"-"+Ie(e)]=n.target.value,a.setState({nameMappings:r})}})),(0,re.Z)((0,te.Z)(a),"handleGeneratedNameChange",(function(e){a.setState({generatedName:e.target.value})})),(0,re.Z)((0,te.Z)(a),"makeNewVar",(function(){De("Generating new categorical variable...");var e=a.state,t=e.firstVar,n=e.secondVar,r=e.nameMappings,l=e.castNumeric,o=(0,Me.Z)(t,n,r,a.props.data,l);a.props.onGenerate(a.state.generatedName,o),a.props.logAction(K.CS,{name:a.state.generatedName,firstVar:t,secondVar:n,nameMappings:r,castNumeric:l}),a.props.onHide()})),(0,re.Z)((0,te.Z)(a),"renderFrequencyTable",(function(){var e=a.state.firstVar,t=a.props.data[e],n=Le()(t,Ae()),l=(0,Ke.Z)(n,e);return r.createElement(Ge.Z,{bordered:!0,style:{margin:8}},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,a.props.t("old"),":"),l.map((function(t,n){return r.createElement("th",{key:"".concat(e,"-").concat(n,"-old")},t)})))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,a.props.t("new"),":"),l.map((function(t,n){return r.createElement("th",{key:"".concat(e,"-").concat(n,"-new")},r.createElement("input",{className:"transformer-table-input",type:"text",defaultValue:t,onChange:a.changeFreqFactory(t)}))}))),r.createElement("tr",{style:{borderTop:"1px solid black"}},r.createElement("th",null,a.props.t("frequencies"),":"),l.map((function(t,n){var l=a.state.firstFreqs[t];return r.createElement("td",{key:"".concat(e,"-").concat(n,"-freq")},l)})))))})),(0,re.Z)((0,te.Z)(a),"renderContingencyTable",(function(){var e=a.state.secondVar,t=a.state.firstVar,n=a.props.data[e],l=a.props.data[t],o=Le()(n,Ae()),i=Le()(l,Ae()),s=(0,Ke.Z)(o,e),c=(0,Ke.Z)(i,t);return r.createElement(Ge.Z,{bordered:!0,style:{margin:8}},r.createElement("tr",null,r.createElement("th",null),c.map((function(e,t){return r.createElement("th",{key:"".concat(e,"-").concat(t)},e)}))),s.map((function(e,t){return r.createElement("tr",{key:"".concat(e,"-").concat(t)},r.createElement("th",null,e),c.map((function(t,n){return r.createElement("td",{key:"".concat(e,"-").concat(t,"-").concat(n)},r.createElement("input",{className:"transformer-table-input",type:"text",defaultValue:"".concat(t,"-").concat(e),onChange:a.changeContigencyFactory(e,t)}))})))})))}));for(var l=e.categorical[0],o=e.data[l],i=Le()(o,Ae()),s=(0,Ke.Z)(i,l),c={},u=0;u<s.length;u++)c[Ie(s[u])]=s[u];return a.state={generatedName:"",firstVar:l,firstFreqs:i,nameMappings:c,secondVar:null,secondFreqs:null,castNumeric:!1,onlyNumbers:!1},a}return(0,ee.Z)(n,[{key:"renderTable",value:function(){return this.state.firstVar&&this.state.secondVar?this.renderContingencyTable():this.state.firstVar||this.state.secondVar?this.renderFrequencyTable():null}},{key:"render",value:function(){var e=this,t=this.props.t;return r.createElement(P.Z,{cancel:".card-body",onDragStart:function(e){e.stopPropagation()},style:{zIndex:1006}},r.createElement(H,{onHide:this.props.onHide,show:this.props.show,header:t("categorical-transformer-header"),footer:r.createElement(l.Z,{onClick:this.makeNewVar,disabled:this.state.generatedName.length<2},t("create-new-variable")),bodyStyle:{maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative"},role:"button",tabIndex:0},r.createElement(g.Z,null,r.createElement(f.Z,{md:4},r.createElement(V.Z,{legend:t("first-variable"),defaultValue:this.state.firstVar||"",options:this.props.categorical,onChange:this.handleFirstVariableChange})),r.createElement(f.Z,{md:4},r.createElement(V.Z,{clearable:!0,legend:t("optional-second-variable"),defaultValue:this.state.secondVar||"",options:this.props.categorical,onChange:this.handleSecondVariableChange}))),r.createElement(g.Z,{style:{overflowX:"auto",width:"100%"}},this.renderTable()),r.createElement(g.Z,null,r.createElement(fe.Z,{tooltip:t("treat-labels-as-numbers-tooltip")},r.createElement(Be.Z,{legend:t("treat-labels-as-numbers"),defaultValue:!1,disabled:!this.state.onlyNumbers,onChange:function(){e.setState({castNumeric:!e.state.castNumeric})}}))),r.createElement(g.Z,null,r.createElement(m.Z,{style:{margin:8}},r.createElement(u.Z,null,t("name-new-variable"),":"),r.createElement(c.Z,{type:"text",placeholder:t("select-name"),onChange:this.handleGeneratedNameChange,onKeyPress:this.handleKeyPress}),r.createElement(d.Z,null,t("new-variable-appended"))))))}}]),n}(r.Component);Oe.defaultProps={logAction:function(){}};var Ye=Oe,je=n(98304),Je=n.n(je),We=n(70649),$e=n.n(We),_e=s()("isle:data-explorer:group-transformer"),Ue=function(e){(0,ne.Z)(n,e);var t=(0,ae.Z)(n);function n(e){var a;return(0,Q.Z)(this,n),a=t.call(this,e),(0,re.Z)((0,te.Z)(a),"handleGeneratedNameChange",(function(e){a.setState({generatedName:e.target.value})})),(0,re.Z)((0,te.Z)(a),"handleGroupNumberChange",(function(e){for(var t=new Array(e).fill(1/e),n=new Array(e),r=0;r<n.length;r++)n[r]="".concat(a.props.t("group")," ").concat(r+1);a.setState({groupProbs:t,labels:n,nGroups:e})})),(0,re.Z)((0,te.Z)(a),"handleKeyPress",(function(e){if(13===e.charCode){for(var t=0,n=0;n<a.state.groupProbs.length;n++)t+=a.state.groupProbs[n];a.state.generatedName.length>2&&$e()(t,1)<=15e-9&&a.makeNewVar()}})),(0,re.Z)((0,te.Z)(a),"makeNewVar",(function(){_e("Generating new categorical variable...");var e=b()(a.props.data),t=a.props.data[e[0]].length,n=Je()(a.state.labels,{size:t,probs:a.state.groupProbs,replace:!0});a.props.onGenerate(a.state.generatedName,n),a.props.logAction(K.Dp,{name:a.state.generatedName,labels:a.state.labels,groupProbs:a.state.groupProbs}),a.props.onHide()})),a.state={generatedName:"",nGroups:2,groupProbs:[.5,.5],labels:["Group 1","Group 2"]},a}return(0,ee.Z)(n,[{key:"renderTable",value:function(){for(var e=this,t=new Array(this.state.nGroups),n=function(n){t[n]=r.createElement(g.Z,{key:n},r.createElement(f.Z,null,r.createElement(F.Z,{legend:"Label for Group ".concat(n+1),defaultValue:e.state.labels[n],onChange:function(t){var a=e.state.labels.slice();a[n]=t,e.setState({labels:a})}})),r.createElement(f.Z,null,r.createElement(x.Z,{legend:"Group Proportion",onChange:function(t){var a=e.state.groupProbs.slice();a[n]=t,e.setState({groupProbs:a})},defaultValue:e.state.groupProbs[n],step:.01,min:0,max:1,numbersOnly:!1})))},a=0;a<t.length;a++)n(a);return r.createElement(r.Fragment,null,t,r.createElement("p",null,this.props.t("proportions-sum-one")))}},{key:"render",value:function(){for(var e=0,t=0;t<this.state.groupProbs.length;t++)e+=this.state.groupProbs[t];var n=this.state.generatedName.length>2&&$e()(e,1)<=15e-9;return r.createElement(P.Z,{cancel:".card-body",onDragStart:function(e){e.stopPropagation()},style:{zIndex:1006}},r.createElement(H,{onHide:this.props.onHide,show:this.props.show,header:this.props.t("group-transformer-header"),footer:r.createElement(l.Z,{onClick:this.makeNewVar,disabled:!n},this.props.t("create-new-variable")),role:"button",tabIndex:0,bodyStyle:{maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative"}},r.createElement(g.Z,null,r.createElement(f.Z,null,r.createElement(x.Z,{legend:this.props.t("number-of-groups"),onChange:this.handleGroupNumberChange,defaultValue:this.state.nGroups,step:1,min:1,max:99}))),this.renderTable(),r.createElement(g.Z,null,r.createElement(m.Z,{style:{margin:8}},r.createElement(u.Z,null,this.props.t("name-new-variable"),":"),r.createElement(c.Z,{type:"text",placeholder:this.props.t("select-name"),onChange:this.handleGeneratedNameChange,onKeyPress:this.handleKeyPress}),r.createElement(d.Z,null,this.props.t("new-variable-appended"))))))}}]),n}(r.Component);Ue.defaultProps={logAction:function(){}};var Xe=Ue,Qe=function(e){var t,n=e.data,o=e.categorical,i=e.quantitative,s=e.t,c=e.session,u=e.defaultCode,m=e.logAction,d=e.onGenerate,p=(0,r.useState)(null),h=(0,a.Z)(p,2),g=h[0],f=h[1],v=function(){var t="formula"===g?null:"formula";f(t),e.onActive(t)},Z=function(){var t="bin"===g?null:"bin";f(t),e.onActive(t)},E=function(){var t="categorical"===g?null:"categorical";f(t),e.onActive(t)},b=function(){var t="group"===g?null:"group";f(t),e.onActive(t)};if(n)switch(g){case"bin":t=r.createElement(X,{show:!0,onHide:Z,quantitative:i,logAction:m,onGenerate:d,data:n,t:s});break;case"categorical":t=r.createElement(Ye,{show:!0,onHide:E,categorical:o,logAction:m,onGenerate:d,data:n,t:s});break;case"formula":t=r.createElement(Se,{show:!0,onHide:v,categorical:o,quantitative:i,data:n,defaultCode:u,logAction:m,onGenerate:d,session:c,t:s});break;case"group":t=r.createElement(Xe,{show:!0,onHide:b,logAction:m,onGenerate:d,data:n,t:s})}return r.createElement(r.Fragment,null,r.createElement("div",{className:"well",style:{padding:15,margin:15}},r.createElement("div",{style:{padding:12}},r.createElement(l.Z,{onClick:v,variant:"primary",block:!0,style:{fontSize:"1.2em"}},s("interactions-functions"))),r.createElement("div",{style:{padding:12}},r.createElement(l.Z,{onClick:Z,disabled:0===i.length,variant:"primary",block:!0,style:{fontSize:"1.2em"}},s("bin-quantitative"))),r.createElement("div",{style:{padding:12}},r.createElement(l.Z,{onClick:E,disabled:0===o.length,variant:"primary",block:!0,style:{fontSize:"1.2em"}},s("rename-or-combine"))),r.createElement("div",{style:{padding:12}},r.createElement(l.Z,{onClick:b,variant:"primary",block:!0,style:{fontSize:"1.2em"}},s("create-groups")))),t)};Qe.defaultProps={logAction:function(){},onActive:function(){},onGenerate:function(){},defaultCode:"",session:{}};var et=Qe},16821:function(e,t,n){"use strict";var a=n(22122),r=n(19756),l=n(78265),o=n.n(l),i=n(73284),s=n(85937),c=i.forwardRef((function(e,t){var n=e.bsPrefix,l=e.className,c=(0,r.Z)(e,["bsPrefix","className"]),u=(0,s.vE)(n,"btn-toolbar");return i.createElement("div",(0,a.Z)({},c,{ref:t,className:o()(l,u)}))}));c.displayName="ButtonToolbar",c.defaultProps={role:"toolbar"},t.Z=c},34158:function(e,t,n){"use strict";var a=n(22122),r=n(19756),l=n(78265),o=n.n(l),i=n(73284),s=n(85937),c=i.forwardRef((function(e,t){var n=e.bsPrefix,l=e.className,c=e.striped,u=e.bordered,m=e.borderless,d=e.hover,p=e.size,h=e.variant,g=e.responsive,f=(0,r.Z)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),v=(0,s.vE)(n,"table"),Z=o()(l,v,h&&v+"-"+h,p&&v+"-"+p,c&&v+"-striped",u&&v+"-bordered",m&&v+"-borderless",d&&v+"-hover"),E=i.createElement("table",(0,a.Z)({},f,{className:Z,ref:t}));if(g){var b=v+"-responsive";return"string"===typeof g&&(b=b+"-"+g),i.createElement("div",{className:b},E)}return E}));t.Z=c},56851:function(e,t){"use strict";t.Z=function(e,t){var n=new String(e);return n.categories=t,n}},33489:function(e,t,n){"use strict";var a=n(60687);e.exports=a},60687:function(e,t,n){"use strict";var a=n(52015).isPrimitive;e.exports=function(e){var t,n,r;if(!a(e))return!1;if(0===(t=e.length))return!1;for(r=0;r<t;r++)if((n=e.charCodeAt(r))<48||n>57)return!1;return!0}},60838:function(e,t,n){"use strict";var a=n(26310),r=n(10840),l=n(9288),o=n(15893),i=n(83713),s=n(12076),c=n(79936),u=n(38958),m=n(87241).factory,d=n(75209),p=n(35546),h=n(30385),g=n(83873);e.exports=function(){var e,t,n,f,v,Z;if(0===arguments.length)t=m();else if(1===arguments.length){if(!o(e=arguments[0]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(s(e,"prng")){if(!i(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=m(e)}else{if(f=h(v=arguments[0],Z=arguments[1]))throw f;if(arguments.length>2){if(!o(e=arguments[2]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(s(e,"prng")){if(!i(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=m(e)}else t=m()}return a(n=void 0===v?V:x,"NAME","uniform"),e&&e.prng?(a(n,"seed",null),a(n,"seedLength",null),l(n,"state",c(null),u),a(n,"stateLength",null),a(n,"byteLength",null),a(n,"toJSON",c(null)),a(n,"PRNG",t)):(r(n,"seed",E),r(n,"seedLength",b),l(n,"state",N,w),r(n,"stateLength",y),r(n,"byteLength",C),a(n,"toJSON",k),a(n,"PRNG",t),t=t.normalized),n;function E(){return t.seed}function b(){return t.seedLength}function y(){return t.stateLength}function C(){return t.byteLength}function N(){return t.state}function w(e){t.state=e}function k(){var e={type:"PRNG"};return e.name=n.NAME,e.state=p(t.state),e.params=void 0===v?[]:[v,Z],e}function x(){return g(t,v,Z)}function V(e,n){return d(e)||d(n)||e>=n?NaN:g(t,e,n)}}},19487:function(e,t,n){"use strict";var a=n(26310),r=n(87016);a(r,"factory",n(60838)),e.exports=r},87016:function(e,t,n){"use strict";var a=n(60838)();e.exports=a},83873:function(e){"use strict";e.exports=function(e,t,n){var a=e();return n*a+(1-a)*t}},30385:function(e,t,n){"use strict";var a=n(40231).isPrimitive,r=n(65649);e.exports=function(e,t){return!a(e)||r(e)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+e+"`."):!a(t)||r(t)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+t+"`."):e>=t?new RangeError("invalid argument. Minimum support `a` must be less than maximum support `b`. Value: `["+e+","+t+"]`."):null}}}]);
//# sourceMappingURL=39922.e3c73a7c.chunk.js.map