(self.webpackChunkisle_dashboard=self.webpackChunkisle_dashboard||[]).push([[12273],{84902:function(t,e,o){"use strict";o.r(e);var s=o(6610),i=o(5991),n=o(63349),a=o(10379),p=o(60446),r=o(96156),l=o(73284),c=o(10077),h=o.n(c),u=o(25472),d=o(9617),b=o(84972),f=o(92628),m=o(87651),v=o(65695),C=h()("isle:video-chat-button"),Z=function(t){(0,a.Z)(o,t);var e=(0,p.Z)(o);function o(t){var i;return(0,s.Z)(this,o),i=e.call(this,t),(0,r.Z)((0,n.Z)(i),"toggleVideoChat",(function(t){var e=!i.state.opened;i.props.onClick(t,e),i.setState({opened:e},(function(){var t=i.context;e?(C("Should join chat for component with id '".concat(i.props.for,"'...")),t.joinVideoChat({name:i.props.for,subject:i.props.subject||i.props.for})):(C("Should leave chat for component with id '".concat(i.props.for,"'...")),t.leaveVideoChat(i.props.for))}))})),i.state={opened:!1},i}return(0,i.Z)(o,[{key:"componentDidMount",value:function(){var t=this,e=this.context;this.unsubscribe=e.subscribe((function(e,o){e===v.q&&o===t.props.for?t.setState({opened:!0}):e===v.lK&&o===t.props.for?t.setState({opened:!1}):e!==v.O4&&e!==v.YQ||t.forceUpdate()}))}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var t,e,o,s=this.context,i=this.props.t;if(t=this.props.buttonLabel?this.props.buttonLabel:this.state.opened?i("leave"):i("join"),e=this.props.buttonVariant?this.props.buttonVariant:this.state.opened?"success":"secondary",!s.jitsi)return l.createElement(d.Z,{disabled:!0,name:"Video Chat",variant:e,size:this.props.size,className:this.props.className,style:this.props.style,"aria-disabled":"true","aria-label":i("disabled")},t);o=this.props.tooltip?this.props.tooltip:this.state.opened?i("leave-id",{id:this.props.for}):i("join-id",{id:this.props.for});var n=l.createElement(d.Z,{name:"Video Chat",variant:e,size:this.props.size,className:this.props.className,onClick:this.toggleVideoChat,style:this.props.style,"aria-label":i("toggle")},l.createElement("span",{style:{pointerEvents:"none"}},t));return this.props.showTooltip&&(n=l.createElement(b.Z,{tooltip:o,placement:this.props.tooltipPlacement},n)),l.createElement(f.Z,{user:!0},n)}}]),o}(l.Component);Z.defaultProps={subject:null,buttonLabel:null,showTooltip:!0,size:"sm",buttonVariant:null,tooltipPlacement:"top",onClick:function(){},className:"",style:{}},Z.contextType=m.Z,e.default=(0,u.Z)("Video")(Z)}}]);
//# sourceMappingURL=VideoChatButton.af678e4a.chunk.js.map