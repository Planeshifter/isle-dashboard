(self.webpackChunkisle_dashboard=self.webpackChunkisle_dashboard||[]).push([[1438],{37017:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return C}});var t=i(6610),l=i(5991),r=i(63349),a=i(10379),n=i(60446),o=i(96156),c=i(73284),u=i(10077),d=i.n(u),p=i(48827),h=i(944),v=i.n(h),b=function(e){(0,a.Z)(i,e);var s=(0,n.Z)(i);function i(){return(0,t.Z)(this,i),s.apply(this,arguments)}return(0,l.Z)(i,[{key:"render",value:function(){return c.createElement("button",{onClick:this.props.onClick,className:"vertical-slider-header ".concat(this.props.className),style:this.props.style},this.props.children)}}]),i}(c.Component);b.defaultProps={className:"",style:{}};var m=b,y=d()("isle:vertical-slider");function f(e){return!1===e?"vs-body vs-hidden":"vs-body vs-display"}var k=function(e){(0,a.Z)(i,e);var s=(0,n.Z)(i);function i(e){var l;(0,t.Z)(this,i),l=s.call(this,e),(0,o.Z)((0,r.Z)(l),"toggleVisibility",(function(){if(l.props.onClick(),!(0,p.isPrimitive)(l.props.visible)){var e=!l.state.visible;l.setState({visible:e,className:f(e)})}}));var a=e.visible||e.defaultVisible;return l.state={visible:a,className:f(a)},l}return(0,l.Z)(i,[{key:"renderHeader",value:function(){return null!==this.props.headerClassName?c.createElement(m,{onClick:this.toggleVisibility,className:this.props.headerClassName,style:this.props.headerStyle},this.props.header):c.createElement(m,{onClick:this.toggleVisibility,style:this.props.headerStyle},this.props.header)}},{key:"render",value:function(){return c.createElement("div",{className:"vertical-slider",style:this.props.style},this.renderHeader(),c.createElement("div",{className:this.state.className},this.props.children))}}],[{key:"getDerivedStateFromProps",value:function(e,s){return v()(e.visible)||e.visible===s.visible?null:(y("Override visible state..."),{visible:e.visible,className:f(e.visible)})}}]),i}(c.Component);k.defaultProps={header:"Header",headerClassName:null,headerStyle:null,defaultVisible:!1,visible:null,style:{},onClick:function(){}};var C=k}}]);
//# sourceMappingURL=Collapse.8cbd3e76.chunk.js.map