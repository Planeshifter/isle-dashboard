(self.webpackChunkisle_dashboard=self.webpackChunkisle_dashboard||[]).push([[25892],{905:function(e,t,n){"use strict";n.d(t,{Ib:function(){return v},Ll:function(){return w},kC:function(){return k},J3:function(){return L},qw:function(){return C},Tm:function(){return I},hA:function(){return S},Vw:function(){return _}});var s=n(87757),a=n.n(s),r=n(92137),o=n(86072),i=n.n(o),l=n(67403),c=n(87284),p=n(83531),u=n(4135),d=n(41985),m=n(58713),h=n(33357);function f(e){return{type:h.$8,payload:{namespace:e}}}function v(e){var t=e.title,n=e.owners,s=e.announcements,a=void 0===s?[]:s,r=e.cohorts,o=void 0===r?[]:r,i=e.description,l=e.enableTicketing,c=e._id;return{type:h.WF,payload:{title:t,announcements:a,cohorts:o,description:i,enableTicketing:l,owners:n,_id:c}}}function g(e){return{type:h.ke,payload:{id:e}}}function Z(e){var t=e.email,n=e.lessonID,s=e.progress,a=e.cohort;return{type:h.LX,payload:{email:t,lessonID:n,progress:s,cohort:a}}}var y=function(){var e=(0,r.Z)(a().mark((function e(t,n){var s,r,o,l,c,p;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=n.title,r=n.description,o=n.owners,l=n.props,e.prev=1,e.next=4,i().post(u.ZP+"/create_namespace",{title:s,description:r,owners:o});case 4:if((c=e.sent).data.successful){e.next=7;break}return e.abrupt("return",(0,d.EG)(t,new Error(c.data.message)));case 7:p=c.data.namespace,l.onNamespace(p),t(f(p)),l.history.replace("/lessons"),(0,d.wN)(t,{message:c.data.message,level:c.data.successful?"success":"error"}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),(0,d.EG)(t,e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,n){return e.apply(this,arguments)}}(),w=function(e){return function(){var t=(0,r.Z)(a().mark((function t(n){var s,r,o,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.title,r=n.description,o=n.owners,i=n.props,t.next=3,y(e,{title:s,description:r,owners:o,props:i});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(){var e=(0,r.Z)(a().mark((function e(t,n,s){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().post(u.ZP+"/delete_namespace",{id:n});case 3:r=e.sent,s&&s.replace("/lessons"),t(g(n)),(0,d.wN)(t,{message:r.data.message,level:"success"}),e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",(0,d.EG)(t,e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n,s){return e.apply(this,arguments)}}(),k=function(e){return function(){var t=(0,r.Z)(a().mark((function t(n,s){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e,n,s);case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},b=function(){var e=(0,r.Z)(a().mark((function e(t,n){var s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().post(u.ZP+"/update_namespace",{ns:n});case 3:s=e.sent,t(v(s.data.namespace)),t((a=s.data.namespace,r=void 0,o=void 0,l=void 0,c=void 0,p=void 0,r=a.title,o=a.owners,l=a.description,c=a.enableTicketing,p=a._id,{type:h.Rg,payload:{title:r,description:l,owners:o,enableTicketing:c,_id:p}})),(0,d.wN)(t,{message:s.data.message,level:"success"}),(0,m.k$)(t,{namespaceID:n._id}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),(0,d.EG)(t,e.t0);case 13:case"end":return e.stop()}var a,r,o,l,c,p}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}(),L=function(e){return function(){var t=(0,r.Z)(a().mark((function t(n,s){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e,n,s);case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},x=function(){var e=(0,r.Z)(a().mark((function e(t,n){var s,r,o,c,m;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=n.namespaceID,r=n.namespaceTitle,e.prev=1,e.next=4,i().get(u.ZP+"/get_namespace_actions?"+l.stringify({namespaceID:s}));case 4:o=e.sent,c=new Blob([o.data],{type:"application/json"}),m="actions_".concat(r,".json"),(0,p.Z)(c,m),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),(0,d.EG)(t,e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}(),C=function(e){return function(){var t=(0,r.Z)(a().mark((function t(n){var s,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.namespaceID,r=n.namespaceTitle,t.next=3,x(e,{namespaceID:s,namespaceTitle:r});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=function(){var e=(0,r.Z)(a().mark((function e(t,n){var s,r,o,l,p,m;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=n.email,r=n.lessonID,o=n.namespaceID,l=n.progress,p=n.cohort,e.next=3,i().post(u.ZP+"/user_adjust_progress",{email:s,lessonID:r,namespaceID:o,progress:l});case 3:m=e.sent,(0,d.wN)(t,{title:c.Z.t("common:updated"),message:m.data.message,level:"success"}),t(Z({email:s,lessonID:r,progress:l,cohort:p}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),I=function(e){return function(){var t=(0,r.Z)(a().mark((function t(n){var s,r,o,i,l;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.email,r=n.lessonID,o=n.namespaceID,i=n.progress,l=n.cohort,t.next=3,N(e,{email:s,lessonID:r,namespaceID:o,progress:i,cohort:l});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get(u.ZP+"/get_all_namespaces");case 3:n=e.sent,t({type:h.XM,payload:{namespaces:n.data.namespaces}}),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",(0,d.EG)(t,e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),S=function(e){return(0,r.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(e);case 2:case"end":return t.stop()}}),t)})))},T=function(){var e=(0,r.Z)(a().mark((function e(t,n){var s,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=n.lessons,r=n.id,e.prev=1,e.next=4,i().post(u.ZP+"/set_lesson_order",{lessons:s,id:r});case 4:e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(1),e.abrupt("return",(0,d.EG)(t,e.t0));case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,n){return e.apply(this,arguments)}}(),_=function(e){return function(){var t=(0,r.Z)(a().mark((function t(n){var s,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.lessons,r=n.id,t.next=3,T(e,{lessons:s,id:r});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},44593:function(e,t){"use strict";t.Z=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#c49c94","#e377c2","#17becf","#aec7e8","#ffbb78","#ff9896","#98df8a","#7f7f7f","#c5b0d5","#f7b6d2","#bcbd22","#c7c7c7","#dbdb8d","#9edae5"]},47105:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Te}});var s=n(41488),a=n(9251),r=n(22122),o=n(6610),i=n(5991),l=n(63349),c=n(10379),p=n(60446),u=n(96156),d=n(10077),m=n.n(d),h=n(25472),f=n(910),v=n(70048),g=n(93391),Z=n(47701),y=n(37263),w=n.n(y),E=n(24833),k=n.n(E),b=n(30165),L=n.n(b),x=n(72536),C=n.n(x),N=n(78674),I=n.n(N),D=(0,n(31835).Z)((function(){return n.e(28833).then(n.bind(n,28833))})),S=n(38315);var T=(0,a.$j)((function(e){return{admin:e.admin,user:e.user}}),(function(e){return{copyLesson:(0,S.Vo)(e)}}))(D),_=n(87757),P=n.n(_),F=n(92137),M=n(52785),U=n(87095),A=n(57690),B=n(29530),O=n(33606),G=n.n(O),R=n(75018),j=n(54012),H=n(73230),K=n(36659),V=n(29619),q=n(7548),z=n(67775),W=n.n(z),$=n(4135),X=m()("isle-dashboard");function J(e){e.stopPropagation()}var Q=function(e){(0,c.Z)(n,e);var t=(0,p.Z)(n);function n(e){var s,a,r;return(0,o.Z)(this,n),s=t.call(this,e),(0,u.Z)((0,l.Z)(s),"handleInputChange",(function(e){var t=e.target,n=t.value,a=t.name;X("Input field ".concat(a," changed to ").concat(n)),s.setState((0,u.Z)({},a,n),(function(){s.state.title.length>=3&&s.state.description.length>0?s.setState({disabled:!1}):s.setState({disabled:!0})}))})),(0,u.Z)((0,l.Z)(s),"handleLockChange",(function(e){s.setState({lockLesson:e.target.checked})})),(0,u.Z)((0,l.Z)(s),"handleTimeChange",(function(e){s.setState({lockUntil:e})})),(0,u.Z)((0,l.Z)(s),"handleTemplateChange",(function(e){s.setState({template:e.target.checked})})),(0,u.Z)((0,l.Z)(s),"onSubmit",(function(e){e.preventDefault();var t={newTitle:s.state.title,newDescription:s.state.description};s.state.lockLesson&&(t.lockUntil=s.state.lockUntil),!1!==s.state.template&&!0!==s.state.template||(t.template=s.state.template),s.props.update(t)})),e.lockUntil?(a=!0,r=e.lockUntil):(a=!1,r=new Date),s.state={title:e.title,description:e.description,disabled:!1,template:e.template,lockLesson:a,lockUntil:r},s}return(0,i.Z)(n,[{key:"componentDidUpdate",value:function(e){var t={};e.title!==this.props.title&&(t.title=this.props.title),e.description!==this.props.description&&(t.description=this.props.description),e.template!==this.props.template&&(t.template=this.props.template),e.lockUntil!==this.props.lockUntil&&(this.props.lockUntil?(t.lockLesson=!0,t.lockUntil=this.props.lockUntil):(t.lockLesson=!1,t.lockUntil=new Date)),W()(t)||this.setState(t)}},{key:"render",value:function(){var e=this.props.t;return s.createElement(V.Z,{show:this.props.show,onHide:this.props.close},s.createElement(K.Z,{action:$.ZP,method:"get",onSubmit:this.onSubmit,onKeyDown:J},s.createElement(V.Z.Header,null,s.createElement(V.Z.Title,{as:"h3"},e("lesson-details"))),s.createElement(V.Z.Body,null,s.createElement(H.Z,null,s.createElement(j.Z,null,e("common:title")),s.createElement(R.Z,{name:"title",type:"title",onChange:this.handleInputChange,defaultValue:this.state.title})),s.createElement(H.Z,null,s.createElement(j.Z,null,e("common:description")),s.createElement(R.Z,{name:"description",type:"description",onChange:this.handleInputChange,defaultValue:this.state.description})),s.createElement(H.Z,null,s.createElement(K.Z.Check,{type:"checkbox",label:e("common:lock-until"),checked:this.state.lockLesson,onChange:this.handleLockChange}),s.createElement("div",null,this.state.lockLesson?s.createElement(q.Z,{minDate:new Date,onChange:this.handleTimeChange,value:this.state.lockUntil,clearIcon:null}):null)),this.props.user.administrator?s.createElement(H.Z,null,s.createElement(K.Z.Check,{type:"checkbox",label:e("provide-as-template"),checked:this.state.template,onChange:this.handleTemplateChange})):null),s.createElement(V.Z.Footer,null,s.createElement(v.Z,{onClick:this.props.close},e("common:cancel")),s.createElement(v.Z,{variant:"success",type:"submit",disabled:this.state.disabled},e("common:save")))))}}]),n}(s.Component);Q.defaultProps={lockUntil:null,template:null};var Y=Q,ee=function(e){return s.createElement(V.Z,{show:e.show,onHide:e.close},s.createElement(V.Z.Header,null,s.createElement(V.Z.Title,null,e.t("common:delete"),"?")),s.createElement(V.Z.Body,null,e.t("delete-modal-body",{name:e.title})),s.createElement(V.Z.Footer,null,s.createElement(v.Z,{onClick:e.close},e.t("common:cancel")),s.createElement(v.Z,{variant:"danger",onClick:e.delete},e.t("common:delete"))))},te=n(44593),ne=n(30342),se=n.p+"static/media/upload.4da50dc4.svg",ae=m()("isle:lessons-page:lesson"),re=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document;function oe(e){e.target.src=ne.Z}var ie=function(e){(0,c.Z)(n,e);var t=(0,p.Z)(n);function n(e){var s;return(0,o.Z)(this,n),s=t.call(this,e),(0,u.Z)((0,l.Z)(s),"toggleLessonState",(function(){var e={lessonName:s.props.title,namespaceName:s.props.namespace};s.props.active?s.props.deactivateLesson(e):s.props.activateLesson(e)})),(0,u.Z)((0,l.Z)(s),"toggleLessonVisibility",(function(){var e={lessonName:s.props.title,namespaceName:s.props.namespace};s.props.public?s.props.hideLessonInGallery(e):s.props.showLessonInGallery(e)})),(0,u.Z)((0,l.Z)(s),"delete",(function(){s.props.deleteLesson({lessonName:s.props.title,namespaceName:s.props.namespace}),s.closeDeleteModal()})),(0,u.Z)((0,l.Z)(s),"update",function(){var e=(0,F.Z)(P().mark((function e(t){var n,a,r,o;return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.newTitle,a=t.newDescription,r=t.lockUntil,o=t.template,e.next=3,s.props.updateLesson({lessonName:s.props.title,namespaceName:s.props.namespace,newTitle:n,newDescription:a,template:o,lockUntil:r?r.getTime():null});case 3:e.sent&&s.closeDetailsModal();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),(0,u.Z)((0,l.Z)(s),"showDeleteModal",(function(){s.setState({showDeleteModal:!0})})),(0,u.Z)((0,l.Z)(s),"showDetailsModal",(function(){s.setState({showDetailsModal:!0})})),(0,u.Z)((0,l.Z)(s),"closeDeleteModal",(function(){s.setState({showDeleteModal:!1})})),(0,u.Z)((0,l.Z)(s),"closeDetailsModal",(function(){s.setState({showDetailsModal:!1})})),(0,u.Z)((0,l.Z)(s),"getIsleFile",(0,F.Z)(P().mark((function e(){var t;return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ae("Request ISLE source code from server..."),s.state.isleFile){e.next=6;break}return e.next=4,s.props.getIsleFile({lessonName:s.props.title,namespaceName:s.props.namespace});case 4:(t=e.sent)&&s.setState({isleFile:t});case 6:case"end":return e.stop()}}),e)})))),(0,u.Z)((0,l.Z)(s),"copyIsleFileToClipboard",(function(){if(!s.state.isleFile)return s.props.addNotification({message:s.props.t("source-file-error"),level:"error"});G()(s.state.isleFile).then((function(){s.props.addNotification({message:s.props.t("source-file-copied"),level:"success"})})).catch((function(e){s.props.addNotification({message:e.message,level:"error"})}))})),(0,u.Z)((0,l.Z)(s),"copyLinkToClipboard",(function(){G()(s.props.url).then((function(){s.props.addNotification({message:s.props.t("link-copied"),level:"success"})})).catch((function(e){s.props.addNotification({message:e.message,level:"error"})}))})),(0,u.Z)((0,l.Z)(s),"copyNameToClipboard",(function(e){e.stopPropagation(),G()(s.props.title).then((function(){s.props.addNotification({message:s.props.t("name-copied"),level:"success"})})).catch((function(e){s.props.addNotification({message:e.message,level:"error"})}))})),(0,u.Z)((0,l.Z)(s),"showPreviewImage",(function(){s.img.src=s.props.url+"/preview.jpg"})),(0,u.Z)((0,l.Z)(s),"openLesson",(function(){re?window.location=s.props.url:window.open(s.props.url,"_blank").focus()})),s.state={showDeleteModal:!1,showDetailsModal:!1,isleFile:null},s}return(0,i.Z)(n,[{key:"renderButtonToolbarDate",value:function(){var e=this.props.t,t=new Date(this.props.updatedAt);t=t.toLocaleDateString();var n=new Date(this.props.createdAt);return n=n.toLocaleDateString(),s.createElement("span",{className:"lessons-upload"},s.createElement(g.Z,{placement:"top",overlay:s.createElement(Z.Z,{id:"toggle_visibility"},e("created-at"))},s.createElement("span",{className:"lessons-uploaded-image"},s.createElement("img",{alt:"Upload Date Icon",style:{stroke:"white",fill:"red"},src:se}))),s.createElement(g.Z,{placement:"top",overlay:s.createElement(Z.Z,{id:"toggle_visibility"},e("last-updated"),t)},s.createElement("span",{className:"lessons-uploaded"},n)))}},{key:"renderActivateButton",value:function(){var e=this.props,t=e.lockUntil,n=e.t,a=!0===this.props.active?"success":"warning";return t?s.createElement(g.Z,{placement:"top",overlay:s.createElement(Z.Z,{id:"lockUntil_disabled"},n("scheduled-at",{date:t.toLocaleString()}))},s.createElement(M.Z,{className:"lessons-status",variant:a,style:{opacity:.3}},this.props.active?n("active"):n("inactive"))):s.createElement(g.Z,{placement:"top",overlay:s.createElement(Z.Z,{id:"toggle_availability"},this.props.active?n("disable-lesson"):n("activate-lesson"))},s.createElement(M.Z,{className:"lessons-status",onClick:this.toggleLessonState,variant:a},this.props.active?n("active"):n("inactive")))}},{key:"renderButtonToolbar",value:function(){var e=this.props.t,t=!0===this.props.public?"success":"warning";return s.createElement(A.Z,{className:"lesson-button-toolbar"},s.createElement(U.Z,{style:{marginRight:"5px"}},s.createElement(g.Z,{placement:"top",overlay:s.createElement(Z.Z,{id:"open_details"},e("open-details"))},s.createElement(v.Z,{size:"sm",variant:"secondary",onClick:this.showDetailsModal,"aria-label":e("open-details")},s.createElement("i",{className:"fa fa-cog"}))),s.createElement(g.Z,{placement:"top",overlay:s.createElement(Z.Z,{id:"delete_lesson"},e("delete-lesson"))},s.createElement(v.Z,{size:"sm",variant:"secondary",onClick:this.showDeleteModal,"aria-label":e("delete-lesson")},s.createElement("i",{className:"fa fa-trash-alt"}))),s.createElement(g.Z,{placement:"top",overlay:s.createElement(Z.Z,{id:"isle-file"},e("copy-file"))},s.createElement(v.Z,{variant:"secondary",size:"sm",onFocus:this.getIsleFile,onMouseEnter:this.getIsleFile,onClick:this.copyIsleFileToClipboard,style:{float:"right"},"aria-label":e("copy-file")},s.createElement("i",{className:"fa fa-clipboard"})))),this.renderActivateButton(),s.createElement(g.Z,{placement:"top",overlay:s.createElement(Z.Z,{id:"toggle_visibility"},this.props.public?e("remove-from-gallery"):e("show-in-gallery"))},s.createElement(M.Z,{className:"lessons-status",onClick:this.toggleLessonVisibility,variant:t},this.props.public?e("public"):e("private"))),this.renderButtonToolbarDate())}},{key:"renderModals",value:function(){return s.createElement(s.Fragment,null,s.createElement(ee,(0,r.Z)({},this.props,{show:this.state.showDeleteModal,close:this.closeDeleteModal,delete:this.delete})),this.state.showDetailsModal?s.createElement(Y,(0,r.Z)({},this.props,{show:this.state.showDetailsModal,close:this.closeDetailsModal,update:this.update})):null)}},{key:"render",value:function(){var e=this,t=this.props.t;return s.createElement(B.Z,{className:"animated-lesson-card"},s.createElement(B.Z.Body,{style:{padding:0}},s.createElement("div",{style:{filter:"grayscale(30%)",background:te.Z[this.props.colorIndex]},className:"hovereffect",onMouseOver:this.showPreviewImage,onFocus:this.showPreviewImage},s.createElement("img",{className:"img-responsive",src:ne.Z,ref:function(t){e.img=t},alt:"",style:{width:"100%",height:180},onError:oe}),s.createElement("div",{className:"overlay",style:{cursor:"cell"}},s.createElement("h2",null,s.createElement(g.Z,{placement:"top",overlay:s.createElement(Z.Z,{id:"copy_name"},t("common:copy-name"))},s.createElement("span",{className:"lesson-title-button",role:"button",tabIndex:0,onClick:this.copyNameToClipboard,onKeyPress:this.copyNameToClipboard},this.props.title))),"No description supplied."!==this.props.description?s.createElement("h3",null,this.props.description):null,s.createElement("span",{ref:function(t){e.link=t},className:"info",onClick:this.openLesson,onKeyPress:this.openLesson,tabIndex:0,role:"button"},t("open-lesson")))),s.createElement(g.Z,{placement:"top",overlay:s.createElement(Z.Z,{id:"copy_link"},t("common:copy-link"))},s.createElement("i",{role:"button",tabIndex:0,className:"lesson-link-icon fas fa-external-link-alt",onClick:this.copyLinkToClipboard,onKeyPress:this.copyLinkToClipboard,"aria-label":t("common:copy-link")})),this.renderButtonToolbar(),this.renderModals()))}}]),n}(s.Component);ie.defaultProps={lockUntil:null};var le=(0,h.Z)(["lesson","common"])(ie),ce=n(66310),pe=n(13918),ue=n.n(pe),de=n(56535),me=n.n(de),he=n(75033);function fe(e){e.target.src=ne.Z}var ve=function(e){(0,c.Z)(n,e);var t=(0,p.Z)(n);function n(e){var s;return(0,o.Z)(this,n),s=t.call(this,e),(0,u.Z)((0,l.Z)(s),"showPreviewImage",(function(){s.img.src=s.props.url+"/preview.jpg"})),(0,u.Z)((0,l.Z)(s),"openLesson",(function(){window.open(s.props.url,"_blank").focus()})),(0,u.Z)((0,l.Z)(s),"copyLinkToClipboard",(function(){G()(s.props.url).then((function(){s.props.addNotification({message:s.props.t("link-copied"),level:"success"})})).catch((function(e){s.props.addNotification({message:e.message,level:"error"})}))})),s.state={},s}return(0,i.Z)(n,[{key:"renderProgress",value:function(){var e;if(this.props.metadata&&!0===this.props.metadata.hideProgressBar)return s.createElement("div",{className:"enrolled-lesson-progress"});var t=this.props.user.lessonData[this.props._id];t?(e=t.progress,e*=100,e=me()(ue()(e),100)):e=0;var n=this.props.t;return s.createElement("div",{className:"enrolled-lesson-progress"},s.createElement(g.Z,{placement:"top",overlay:s.createElement(Z.Z,{id:"open_details"},n("your-progress"))},s.createElement(ce.Z,{variant:"success",now:e,label:"".concat(e,"%")})))}},{key:"renderButtonToolbar",value:function(){var e,t=this.props.user.lessonData[this.props._id];e=t?t.spentTime:0;var n=this.props.t;return s.createElement(A.Z,{style:{position:"absolute",top:180,width:"100%",height:"36px",background:"rgba(0, 0, 0, 0.75)"}},this.renderProgress(),s.createElement("div",{className:"enrolled-lesson-time",style:{width:"35%",height:"100%"}},s.createElement(g.Z,{placement:"top",overlay:s.createElement(Z.Z,{id:"open_details"},n("time-format"))},s.createElement("span",null,n("time-spent"),": ",(0,he.Z)(e)))))}},{key:"render",value:function(){var e=this,t=this.props.t;return s.createElement(B.Z,{className:"animated-lesson-card"},s.createElement(B.Z.Body,{style:{padding:0}},s.createElement("div",{style:{filter:"grayscale(30%)",background:te.Z[this.props.colorIndex]},onMouseOver:this.showPreviewImage,onFocus:this.showPreviewImage,className:"hovereffect"},s.createElement("img",{className:"img-responsive",src:ne.Z,ref:function(t){e.img=t},alt:"",style:{width:"100%",height:180},onError:fe}),s.createElement("div",{className:"overlay"},s.createElement("h2",null,this.props.title),"No description supplied."!==this.props.description?s.createElement("h3",null,this.props.description):null,s.createElement("span",{ref:function(t){e.link=t},className:"info",role:"button",tabIndex:0,onClick:this.openLesson,onKeyPress:this.openLesson},t("open-lesson")))),s.createElement(g.Z,{placement:"top",overlay:s.createElement(Z.Z,{id:"copy_link"},t("common:copy-link"))},s.createElement("i",{role:"button",tabIndex:0,className:"lesson-link-icon fas fa-external-link-alt",onClick:this.copyLinkToClipboard,onKeyPress:this.copyLinkToClipboard,"aria-label":t("common:copy-link")})),this.renderButtonToolbar()))}}]),n}(s.Component);ve.defaultProps={metadata:null};var ge=(0,h.Z)(["lesson","common"])(ve),Ze=n(62300),ye=(0,h.Z)(["lessons_page","common"])((function(e){var t=e.user,n=e.t,a=null;return a=t.writeAccess?s.createElement("span",null,n("create-new-one"),s.createElement("i",{className:"fa fa-pencil-alt"}),"."):" .",s.createElement(Ze.Z,{className:"lessons-jumbotron"},s.createElement("h1",null,n("common:no-course-selected")),s.createElement("p",null,n("no-course-description"),s.createElement("i",{className:"fa fa-align-justify"}),a))})),we=(0,h.Z)(["lessons_page","common"])((function(e){var t=e.user,n=e.t,a=n("no-lessons");return t.writeAccess&&(a+=n("upload-from-editor")),s.createElement(Ze.Z,{className:"lessons-jumbotron"},s.createElement("h1",null,n("no-lessons-found")),s.createElement("p",null,a))})),Ee=n(68692),ke=n(8819),be=(n(54584),n(77551),n(89471),m()("isle-dashboard:lessons-page")),Le=(0,f.WidthProvider)(f.Responsive);function xe(e,t){if(!t)return e;var n=[];if(w()(e))for(var s=0;s<e.length;s++)(k()(L()(e[s].title),t)||k()(L()(e[s].description),t))&&n.push(e[s]);return n}function Ce(e){be("Create layout...");var t=3.52,n=e.map((function(e,n){return{lg:{i:"cell-".concat(e.title,"-").concat(n),x:4*n%24,y:I()(n/6)*t,w:4,h:t},md:{i:"cell-".concat(e.title,"-").concat(n),x:4*n%20,y:I()(n/5)*t,w:4,h:t},sm:{i:"cell-".concat(e.title,"-").concat(n),x:4*n%16,y:I()(n/4)*t,w:4,h:t},xs:{i:"cell-".concat(e.title,"-").concat(n),x:4*n%12,y:I()(n/3)*t,w:4,h:t},xxs:{i:"cell-".concat(e.title,"-").concat(n),x:4*n%8,y:I()(n/2)*t,w:4,h:t},tiny:{i:"cell-".concat(e.title,"-").concat(n),x:4*n%4,y:I()(n/1)*t,w:4,h:t}}}));return n={lg:C()(n,"lg"),md:C()(n,"md"),sm:C()(n,"sm"),xs:C()(n,"xs"),xxs:C()(n,"xxs"),tiny:C()(n,"tiny")}}var Ne=function(e){(0,c.Z)(n,e);var t=(0,p.Z)(n);function n(e){var s;(0,o.Z)(this,n),s=t.call(this,e),(0,u.Z)((0,l.Z)(s),"preventOpeningLink",(function(e){e.preventDefault()})),(0,u.Z)((0,l.Z)(s),"handlePositionChangeFactory",(function(e){return function(t){var n=!1;switch(t.code){case"ArrowLeft":n=!0,s.repositionLessons(e,"left");break;case"ArrowRight":n=!0,s.repositionLessons(e,"right")}n&&(t.preventDefault(),t.stopPropagation())}})),(0,u.Z)((0,l.Z)(s),"toggleCreator",(function(){s.props.getTemplateLessons(),s.setState({showLessonCreator:!s.state.showLessonCreator})})),(0,u.Z)((0,l.Z)(s),"handleCreate",(function(){s.setState({showLessonCreator:!1});var e=s.props.namespace;e.title&&(be("Fetch lessons..."),s.props.getLessons(e.title))}));var a=e.namespace.lessons;return(0,ke.Z)(e.user,e.namespace)||(be("Filter out inactive lessons for enrolled students..."),a=a.filter((function(e){return!0===e.active}))),s.state={filteredLessons:xe(a,e.search.phrase),layouts:Ce(a),unfilteredLessons:a,search:e.search,activeElement:null,showLessonCreator:!1},s}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){be("Component did mount...");var e=this.props.namespace;e.title&&(be("Fetch lessons..."),this.props.getLessons(e.title))}},{key:"shouldComponentUpdate",value:function(e,t){return(e.search.direction!==this.props.search.direction||e.search.type!==this.props.search.type||t.filteredLessons!==this.state.filteredLessons||t.showLessonCreator!==this.state.showLessonCreator)&&(be("Should update page..."),!0)}},{key:"repositionLessons",value:function(e,t){var n=this.state.unfilteredLessons.slice();if("left"===t){if(e>0){var s=n[e],a=n[e-1],r=a.pos;a.pos=s.pos,s.pos=r}}else if("right"===t&&e<n.length-1){var o=n[e],i=n[e+1],l=i.pos;i.pos=o.pos,o.pos=l}var c=xe(n,this.props.search.phrase);(0,Ee.Z)(c,this.props.search);var p=Ce(c);this.setState({filteredLessons:c,layouts:p,unfilteredLessons:n},this.forceUpdate),this.props.setLessonOrder({id:this.props.namespace._id,lessons:n.map((function(e){return e._id}))})}},{key:"renderLessons",value:function(){var e=this,t=this.state.filteredLessons;return(0,ke.Z)(this.props.user,this.props.namespace)?t.map((function(n,a){var o=s.createElement(le,(0,r.Z)({},t[a],{addNotification:e.props.addNotification,deleteLesson:e.props.deleteLesson,updateLesson:e.props.updateLesson,deactivateLesson:e.props.deactivateLesson,activateLesson:e.props.activateLesson,showLessonInGallery:e.props.showLessonInGallery,hideLessonInGallery:e.props.hideLessonInGallery,getLessons:e.props.getLessons,getIsleFile:e.props.getIsleFile,user:e.props.user}));return"sequentially"===e.props.search.type?s.createElement("div",{className:"lesson-grid-item",key:"cell-".concat(n.title,"-").concat(a),tabIndex:0,role:"button",ref:function(t){return t&&e.state.activeElement===n.title&&t.focus(),t},onKeyDown:e.handlePositionChangeFactory(a),onFocus:function(){e.setState({activeElement:n.title})}},o):s.createElement("div",{className:"lesson-grid-item",key:"cell-".concat(n.title,"-").concat(a)},o)})):t.map((function(n,a){return s.createElement("div",{className:"lesson-grid-item",key:"cell-".concat(n.title,"-").concat(a)},s.createElement(ge,(0,r.Z)({},t[a],{addNotification:e.props.addNotification,user:e.props.user})))}))}},{key:"render",value:function(){if(!this.props.namespace.title)return s.createElement(ye,{user:this.props.user});var e=this.state.filteredLessons;if(w()(e)){var t=s.createElement(g.Z,{placement:"left",overlay:s.createElement(Z.Z,{id:"create-from-template-tooltip"},this.props.t("create-from-template"))},s.createElement(v.Z,{className:"create-from-template-button",onClick:this.toggleCreator},s.createElement("i",{className:"fas fa-plus"})));return 0===e.length?s.createElement(s.Fragment,null,s.createElement(we,{user:this.props.user}),t,this.state.showLessonCreator?s.createElement(T,{onHide:this.toggleCreator,onCreate:this.handleCreate,namespace:this.props.namespace}):null):s.createElement(s.Fragment,null,s.createElement("div",{className:"lessons-grid-container"},s.createElement(Le,{layouts:this.state.layouts,breakpoints:{lg:1800,md:1550,sm:1200,xs:900,xxs:400,tiny:0},cols:{lg:24,md:20,sm:16,xs:12,xxs:8,tiny:4},containerPadding:[10,10],isResizable:!1,isBounded:!0,isDraggable:!1,rowHeight:(0,ke.Z)(this.props.user,this.props.namespace)?54.5:55},this.renderLessons()),t),this.state.showLessonCreator?s.createElement(T,{onHide:this.toggleCreator,onCreate:this.handleCreate,namespace:this.props.namespace}):null)}}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.namespace.lessons!==t.unfilteredLessons||e.search.phrase!==t.search.phrase||e.search.direction!==t.search.direction||e.search.type!==t.search.type){be("Get derived state...");var n=e.namespace.lessons||[];(0,ke.Z)(e.user,e.namespace)||(be("Filter out inactive lessons for enrolled students..."),n=n.filter((function(e){return!0===e.active})));var s=xe(n,e.search.phrase);return(0,Ee.Z)(s,e.search),{filteredLessons:s,layouts:Ce(s),unfilteredLessons:e.namespace.lessons,search:e.search}}return null}}]),n}(s.Component);Ne.defaultProps={url:null};var Ie=(0,h.Z)(["lessons_page","common"])(Ne),De=n(905),Se=n(41985);var Te=(0,a.$j)((function(e){return{search:e.search,user:e.user,namespace:e.namespace}}),(function(e){return{addNotification:(0,Se.pP)(e),showLessonInGallery:(0,S.IH)(e),hideLessonInGallery:(0,S.kl)(e),activateLesson:(0,S.to)(e),deactivateLesson:(0,S.Ek)(e),updateLesson:(0,S.WU)(e),deleteLesson:(0,S.q2)(e),getLessons:(0,S.Hy)(e),getTemplateLessons:(0,S.BO)(e),getIsleFile:(0,S.OD)(e),setLessonOrder:(0,De.Vw)(e)}}))(Ie)},83531:function(e,t){"use strict";var n=/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i;function s(e){setImmediate((function(){throw e}),0)}function a(e){return n.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e}var r=function(e){if(!("undefined"===typeof e||"undefined"!==typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var t=e.document.createElementNS("http://www.w3.org/1999/xhtml","a"),n="download"in t,r=/constructor/i.test(e.HTMLElement)||e.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent),i=e.setImmediate||e.setTimeout,l=u.prototype;return"undefined"!==typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,n){return t=t||e.name||"download",n||(e=a(e)),navigator.msSaveOrOpenBlob(e,t)}:(l.abort=function(){},l.readyState=l.INIT=0,l.WRITING=1,l.DONE=2,l.error=null,l.onwritestart=null,l.onprogress=null,l.onwrite=null,l.onabort=null,l.onerror=null,l.onwriteend=null,function(e,t,n){return new u(e,t||e.name||"download",n)})}function c(){return e.URL||e.webkitURL||e}function p(e){setTimeout((function(){"string"===typeof e?c().revokeObjectURL(e):e.remove()}),4e4)}function u(l,u,d){d||(l=a(l));var m,h=this,f="application/octet-stream"===l.type;function v(){!function(e,t,n){for(var a=(t=[].concat(t)).length;a--;){var r=e["on"+t[a]];if("function"===typeof r)try{r.call(e,n||e)}catch(o){s(o)}}}(h,"writestart progress write writeend".split(" "))}if(h.readyState=h.INIT,n)return m=c().createObjectURL(l),void i((function(){var e,n;t.href=m,t.download=u,e=t,n=new MouseEvent("click"),e.dispatchEvent(n),v(),p(m),h.readyState=h.DONE}),0);!function(){if((o||f&&r)&&e.FileReader){var t=new FileReader;return t.onloadend=function(){var n=o?t.result:t.result.replace(/^data:[^;]*;/,"data:attachment/file;");e.open(n,"_blank")||(e.location.href=n),n=void 0,h.readyState=h.DONE,v()},t.readAsDataURL(l),void(h.readyState=h.INIT)}m||(m=c().createObjectURL(l)),f?e.location.href=m:e.open(m,"_blank")||(e.location.href=m),h.readyState=h.DONE,v(),p(m)}()}}("undefined"!==typeof self&&self||"undefined"!==typeof window&&window||(void 0).content);t.Z=r},75033:function(e,t,n){"use strict";var s=n(78674),a=n.n(s);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{hours:!0,minutes:!0,seconds:!0};e/=1e3;var n=a()(e/3600);e%=3600;var s=a()(e/60);s<10&&(s="0"+s),e%=60;var r=a()(e);r<10&&(r="0"+r);var o="";return t.hours&&(o+=n),t.minutes&&(o&&(o+=":"),o+=s),t.seconds&&(o&&(o+=":"),o+=r),o}},8819:function(e,t,n){"use strict";var s=n(10322),a=n.n(s);t.Z=function(e,t){for(var n=!1,s=0;s<t.owners.length;s++){var r=t.owners[s];a()(r)?r.email===e.email&&(n=!0):r===e.id&&(n=!0)}return n}},68692:function(e,t){"use strict";var n={numeric:!0};t.Z=function(e,t){var s=t.type,a=t.direction;"sequentially"===s?"ascending"===a?e.sort((function(e,t){return e.pos-t.pos})):e.sort((function(e,t){return t.pos-e.pos})):"alphabetically"===s?"ascending"===a?e.sort((function(e,t){var s=e.namespace+e.title,a=t.namespace+t.title;return s.localeCompare(a,void 0,n)})):e.sort((function(e,t){var s=e.namespace+e.title;return(t.namespace+t.title).localeCompare(s,void 0,n)})):"created_at"===s?"ascending"===a?e.sort((function(e,t){return e.createdAt.localeCompare(t.createdAt,void 0,n)})):e.sort((function(e,t){return t.createdAt.localeCompare(e.createdAt,void 0,n)})):"updated_at"===s&&("ascending"===a?e.sort((function(e,t){return e.updatedAt.localeCompare(t.updatedAt,void 0,n)})):e.sort((function(e,t){return t.updatedAt.localeCompare(e.updatedAt,void 0,n)})))}},54584:function(){},30342:function(e,t,n){"use strict";t.Z=n.p+"static/media/architecture.c9df90fc.jpeg"}}]);
//# sourceMappingURL=25892.342aad94.chunk.js.map