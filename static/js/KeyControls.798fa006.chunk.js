(self.webpackChunkisle_dashboard=self.webpackChunkisle_dashboard||[]).push([[17659],{35079:function(e,n,t){"use strict";t.r(n);var o=t(6610),r=t(5991),i=t(63349),a=t(10379),s=t(60446),c=t(96156),d=t(73284),u=t(74745),p=t(10077),v=t.n(p),l=t(66731),f=t.n(l),m=t(83713),y=t.n(m),h=t(87651),k=v()("isle:key-controls"),g=function(e){(0,a.Z)(t,e);var n=(0,s.Z)(t);function t(e){var r;return(0,o.Z)(this,t),r=n.call(this,e),(0,c.Z)((0,i.Z)(r),"addListeners",(function(){var e=f()(r.props.actions);if(k("Add keydown event listeners for ".concat(r.props.container?"container":"document",": ").concat(e.join(", "))),r.props.container)try{u.findDOMNode(r.props.container).addEventListener("keydown",r.triggerEvent)}catch(n){k(n.message)}else document.addEventListener("keydown",r.triggerDocEvent)})),(0,c.Z)((0,i.Z)(r),"removeListeners",(function(e){var n=f()(r.props.actions);if(k("Remove keydown event listeners for ".concat(e?"container":"document",": ").concat(n.join(", "))),e)try{u.findDOMNode(e).removeEventListener("keydown",r.triggerEvent)}catch(t){k(t.message)}document.removeEventListener("keydown",r.triggerDocEvent)})),(0,c.Z)((0,i.Z)(r),"triggerEvent",(function(e){var n=e.key;k("Received key press for container: ".concat(n));var t=r.props.actions[n],o=e.ctrlKey||e.shiftKey||e.altKey||e.metaKey;document.activeElement===r.props.container&&!o&&y()(t)&&(e.preventDefault(),e.stopPropagation(),t(e))})),(0,c.Z)((0,i.Z)(r),"triggerDocEvent",(function(e){var n=e.key,t=e.ctrlKey||e.shiftKey||e.altKey||e.metaKey;k("Received key press for document: ".concat(n));var o=r.props.actions[n];!t&&y()(o)&&(e.preventDefault(),e.stopPropagation(),o(e))})),r}return(0,r.Z)(t,[{key:"componentDidMount",value:function(){k("Component has mounted..."),this.addListeners()}},{key:"componentDidUpdate",value:function(e){this.props.container!==e.container&&(k("Container has changed, re-attach event listeners..."),this.removeListeners(e.container),this.addListeners())}},{key:"componentWillUnmount",value:function(){k("Component has unmounted..."),this.removeListeners()}},{key:"render",value:function(){return null}}]),t}(d.Component);g.defaultProps={actions:{},container:null},g.contextType=h.Z,n.default=g}}]);
//# sourceMappingURL=KeyControls.798fa006.chunk.js.map