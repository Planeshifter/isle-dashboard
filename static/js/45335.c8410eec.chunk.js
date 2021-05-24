(self.webpackChunkisle_dashboard=self.webpackChunkisle_dashboard||[]).push([[45335],{45335:function(e,t,a){"use strict";a.r(t);var o=a(6610),n=a(5991),r=a(63349),i=a(10379),s=a(60446),c=a(96156),u=a(41488),h=a(41074),l=a.n(h),d=a(52785),p=a(70048),g=a(29619),m=a(36659),f=a(75018),v=a(72945),y=a(23596),b=a(14184),w=a.n(b);var M=function(e){(0,i.Z)(a,e);var t=(0,s.Z)(a);function a(e){var n,i;return(0,o.Z)(this,a),n=t.call(this,e),(0,c.Z)((0,r.Z)(n),"handleUpload",(function(){if(n.editor){var e=n.editor.getImageScaledToCanvas();e.toBlob((function(t){var a=new FormData,o=new FormData;(function(e,t,a){var o=document.createElement("canvas");return o.width=t,o.height=a,o.getContext("2d").drawImage(e,0,0,e.width,e.height,0,0,t,a),o})(e,80,80).toBlob((function(e){var r=n.props.user.id,i="".concat(r,"_").concat(n.state.zoom,"_").concat(n.state.rotate).concat(n.state.ext),s=i;a.append("avatar",t,i),o.append("thumbnail",e,s),n.props.uploadProfilePic({avatarData:a,thumbnailData:o})}))}))}})),(0,c.Z)((0,r.Z)(n),"handleFileSelection",(function(e){var t=e.target.files[0];if(t){var a=l().extname(t.name);n.setState({actualFile:t,ext:a})}})),(0,c.Z)((0,r.Z)(n),"changeZoom",(function(e){n.setState({zoom:Number(e.target.value)})})),(0,c.Z)((0,r.Z)(n),"renderAvatarEditor",(function(){var e=n.props.t;return u.createElement(u.Fragment,null,u.createElement(w(),{className:"avatarEditor",ref:function(e){n.editor=e},image:n.state.actualFile,width:200,height:200,border:[80,50],crossOrigin:"anonymous",color:[110,98,98,.29],scale:n.state.zoom,rotate:n.state.rotate}),u.createElement(m.Z.Group,{as:y.Z,controlId:"form-zoom"},u.createElement(m.Z.Label,{column:!0,sm:"2"},e("zoom")),u.createElement(v.Z,{sm:"10"},u.createElement(f.Z,{step:.05,type:"range",defaultValue:1,min:.5,max:3,onChange:n.changeZoom}))))})),(0,c.Z)((0,r.Z)(n),"rotateFactory",(function(e){return function(){n.setState({rotate:n.state.rotate+e})}})),i=e.user.picture?e.user.picture.substr(e.user.picture.lastIndexOf(".")):null,n.state={actualFile:e.user.picture,zoom:1.2,ext:i,rotate:0},n}return(0,n.Z)(a,[{key:"componentDidUpdate",value:function(e){this.props.user.picture!==e.user.picture&&this.setState({actualFile:this.props.user.picture,rotate:0,zoom:1.2})}},{key:"render",value:function(){var e=this.props.t;return u.createElement(g.Z,{onHide:this.props.onHide,show:this.props.show,dialogClassName:"profile-pic-modal"},u.createElement(g.Z.Header,{closeButton:!0},u.createElement(g.Z.Title,{as:"h3"},e("profile-picture"))),u.createElement(g.Z.Body,{style:{paddingBottom:0}},u.createElement(m.Z.Group,{style:{marginBottom:0}},u.createElement(m.Z.Label,{htmlFor:"imageUpload",style:{cursor:"pointer"}},u.createElement("h3",null,u.createElement(d.Z,{variant:"success"},e("select-file")))),u.createElement(f.Z,{id:"imageUpload",style:{display:"none"},type:"file",onChange:this.handleFileSelection,accept:"image/*"}),u.createElement("span",{style:{paddingLeft:10}},e("click-to-upload"))),this.renderAvatarEditor(),u.createElement(m.Z.Group,{as:y.Z,controlId:"form-rotate"},u.createElement(m.Z.Label,{column:!0,sm:"2"},e("rotate")),u.createElement(v.Z,{sm:"5"},u.createElement(p.Z,{block:!0,variant:"secondary",onClick:this.rotateFactory(-90)},e("left"))),u.createElement(v.Z,{sm:"5"},u.createElement(p.Z,{block:!0,variant:"secondary",style:{float:"right"},onClick:this.rotateFactory(90)},e("right"))))),u.createElement(g.Z.Footer,null,u.createElement(p.Z,{onClick:this.handleUpload},e("save-and-close"))))}}]),a}(u.Component);t.default=M},14184:function(e,t,a){e.exports=function(e,t){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=a(e),n=a(t);function r(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function c(e,t){var a,o=Object.keys(e);return Object.getOwnPropertySymbols&&(a=Object.getOwnPropertySymbols(e),t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)),o}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){if(null==e)return{};var a,o=function(e,t){if(null==e)return{};for(var a,o={},n=Object.keys(e),r=0;r<n.length;r++)a=n[r],0<=t.indexOf(a)||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols)for(var n=Object.getOwnPropertySymbols(e),r=0;r<n.length;r++)a=n[r],0<=t.indexOf(a)||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a]);return o}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var e,o,n=h(t);return!(o=a?(e=h(this).constructor,Reflect.construct(n,arguments,e)):n.apply(this,arguments))||"object"!=typeof o&&"function"!=typeof o?p(this):o}}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var a=[],o=!0,n=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(o=(i=s.next()).done)&&(a.push(i.value),!t||a.length!==t);o=!0);}catch(e){n=!0,r=e}finally{try{o||null==s.return||s.return()}finally{if(n)throw r}}return a}}(e,t)||f(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){if(e){if("string"==typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=e[a];return o}function y(e,t){return new Promise((function(a,o){var n,r=new Image;r.onload=function(){return a(r)},r.onerror=o,0==(null!==(n=e)&&!!n.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i))&&t&&(r.crossOrigin=t),r.src=e}))}var b,w=!("undefined"==typeof window||"undefined"==typeof navigator||!("ontouchstart"in window||0<navigator.msMaxTouchPoints)),M="undefined"!=typeof File,C={touch:{react:{down:"onTouchStart",mouseDown:"onMouseDown",drag:"onTouchMove",move:"onTouchMove",mouseMove:"onMouseMove",up:"onTouchEnd",mouseUp:"onMouseUp"},native:{down:"touchstart",mouseDown:"mousedown",drag:"touchmove",move:"touchmove",mouseMove:"mousemove",up:"touchend",mouseUp:"mouseup"}},desktop:{react:{down:"onMouseDown",drag:"onDragOver",move:"onMouseMove",up:"onMouseUp"},native:{down:"mousedown",drag:"dragStart",move:"mousemove",up:"mouseup"}}},O=w?C.touch:C.desktop,I="undefined"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,k={x:.5,y:.5},x=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(c,n.default.Component);var e,t,a,o=g(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),i(p(t=o.call(this,e)),"state",{drag:!1,my:null,mx:null,image:k}),i(p(t),"handleImageReady",(function(e){var a=t.getInitialSize(e.width,e.height);a.resource=e,a.x=.5,a.y=.5,a.backgroundColor=t.props.backgroundColor,t.setState({drag:!1,image:a},t.props.onImageReady),t.props.onLoadSuccess(a)})),i(p(t),"clearImage",(function(){t.canvas.getContext("2d").clearRect(0,0,t.canvas.width,t.canvas.height),t.setState({image:k})})),i(p(t),"handleMouseDown",(function(e){(e=e||window.event).preventDefault(),t.setState({drag:!0,mx:null,my:null})})),i(p(t),"handleMouseUp",(function(){t.state.drag&&(t.setState({drag:!1}),t.props.onMouseUp())})),i(p(t),"handleMouseMove",(function(e){var a,o,n,r,i,s,c,h,l,d,p,g,m,f,v,y;e=e||window.event,!1!==t.state.drag&&(e.preventDefault(),n={mx:a=e.targetTouches?e.targetTouches[0].pageX:e.clientX,my:o=e.targetTouches?e.targetTouches[0].pageY:e.clientY},y=t.props.rotate,y=(y%=360)<0?y+360:y,t.state.mx&&t.state.my&&(r=t.state.mx-a,i=t.state.my-o,s=t.state.image.width*t.props.scale,c=t.state.image.height*t.props.scale,l=(h=t.getCroppingRect()).x,d=h.y,l*=s,d*=c,p=function(e){return e*(Math.PI/180)},g=Math.cos(p(y)),f=d+-r*(m=Math.sin(p(y)))+i*g,v={x:(l+r*g+i*m)/s+1/t.props.scale*t.getXScale()/2,y:f/c+1/t.props.scale*t.getYScale()/2},t.props.onPositionChange(v),n.image=u(u({},t.state.image),v)),t.setState(n),t.props.onMouseMove(e))})),i(p(t),"setCanvas",(function(e){t.canvas=e})),t.canvas=null,t}return e=c,(t=[{key:"componentDidMount",value:function(){this.props.disableHiDPIScaling&&(I=1);var e,t,a=this.canvas.getContext("2d");this.props.image&&this.loadImage(this.props.image),this.paint(a),document&&(e=!!function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){e=!1}return e}()&&{passive:!1},t=O.native,document.addEventListener(t.move,this.handleMouseMove,e),document.addEventListener(t.up,this.handleMouseUp,e),w&&(document.addEventListener(t.mouseMove,this.handleMouseMove,e),document.addEventListener(t.mouseUp,this.handleMouseUp,e)))}},{key:"componentDidUpdate",value:function(e,t){this.props.image&&this.props.image!==e.image||this.props.width!==e.width||this.props.height!==e.height||this.props.backgroundColor!==e.backgroundColor?this.loadImage(this.props.image):this.props.image||t.image===k||this.clearImage();var a=this.canvas.getContext("2d");a.clearRect(0,0,this.canvas.width,this.canvas.height),this.paint(a),this.paintImage(a,this.state.image,this.props.border),e.image===this.props.image&&e.width===this.props.width&&e.height===this.props.height&&e.position===this.props.position&&e.scale===this.props.scale&&e.rotate===this.props.rotate&&t.my===this.state.my&&t.mx===this.state.mx&&t.image.x===this.state.image.x&&t.image.y===this.state.image.y&&t.backgroundColor===this.state.backgroundColor||this.props.onImageChange()}},{key:"componentWillUnmount",value:function(){var e;document&&(e=O.native,document.removeEventListener(e.move,this.handleMouseMove,!1),document.removeEventListener(e.up,this.handleMouseUp,!1),w&&(document.removeEventListener(e.mouseMove,this.handleMouseMove,!1),document.removeEventListener(e.mouseUp,this.handleMouseUp,!1)))}},{key:"isVertical",value:function(){return!this.props.disableCanvasRotation&&this.props.rotate%180!=0}},{key:"getBorders",value:function(e){var t=0<arguments.length&&void 0!==e?e:this.props.border;return Array.isArray(t)?t:[t,t]}},{key:"getDimensions",value:function(){var e=this.props,t=e.width,a=e.height,o=e.rotate,n=e.border,r={},i=m(this.getBorders(n),2),s=i[0],c=i[1],u=t,h=a;return this.isVertical()?(r.width=h,r.height=u):(r.width=u,r.height=h),r.width+=2*s,r.height+=2*c,{canvas:r,rotate:o,width:t,height:a,border:n}}},{key:"getImage",value:function(){var e=this.getCroppingRect(),t=this.state.image;e.x*=t.resource.width,e.y*=t.resource.height,e.width*=t.resource.width,e.height*=t.resource.height;var a=document.createElement("canvas");this.isVertical()?(a.width=e.height,a.height=e.width):(a.width=e.width,a.height=e.height);var o=a.getContext("2d");return o.translate(a.width/2,a.height/2),o.rotate(this.props.rotate*Math.PI/180),o.translate(-a.width/2,-a.height/2),this.isVertical()&&o.translate((a.width-a.height)/2,(a.height-a.width)/2),t.backgroundColor&&(o.fillStyle=t.backgroundColor,o.fillRect(-e.x,-e.y,t.resource.width,t.resource.height)),o.drawImage(t.resource,-e.x,-e.y),a}},{key:"getImageScaledToCanvas",value:function(){var e=this.getDimensions(),t=e.width,a=e.height,o=document.createElement("canvas");return this.isVertical()?(o.width=a,o.height=t):(o.width=t,o.height=a),this.paintImage(o.getContext("2d"),this.state.image,0,1),o}},{key:"getXScale",value:function(){var e=this.props.width/this.props.height,t=this.state.image.width/this.state.image.height;return Math.min(1,e/t)}},{key:"getYScale",value:function(){var e=this.props.height/this.props.width,t=this.state.image.height/this.state.image.width;return Math.min(1,e/t)}},{key:"getCroppingRect",value:function(){var e=this.props.position||{x:this.state.image.x,y:this.state.image.y},t=1/this.props.scale*this.getXScale(),a=1/this.props.scale*this.getYScale(),o={x:e.x-t/2,y:e.y-a/2,width:t,height:a},n=0,r=1-o.width,i=0,s=1-o.height;return(this.props.disableBoundaryChecks||1<t||1<a)&&(n=-o.width,i=-o.height,s=r=1),u(u({},o),{},{x:Math.max(n,Math.min(o.x,r)),y:Math.max(i,Math.min(o.y,s))})}},{key:"loadImage",value:function(e){var t;M&&e instanceof File?this.loadingImage=(t=e,new Promise((function(e,a){var o=new FileReader;o.onload=function(t){try{var o=y(t.target.result);e(o)}catch(t){a(t)}},o.readAsDataURL(t)})).then(this.handleImageReady).catch(this.props.onLoadFailure)):"string"==typeof e&&(this.loadingImage=y(e,this.props.crossOrigin).then(this.handleImageReady).catch(this.props.onLoadFailure))}},{key:"getInitialSize",value:function(e,t){var a,o,n=this.getDimensions();return t/e<n.height/n.width?o=e*((a=this.getDimensions().height)/t):a=t*((o=this.getDimensions().width)/e),{height:a,width:o}}},{key:"paintImage",value:function(e,t,a,o){var n,r=3<arguments.length&&void 0!==o?o:I;t.resource&&(n=this.calculatePosition(t,a),e.save(),e.translate(e.canvas.width/2,e.canvas.height/2),e.rotate(this.props.rotate*Math.PI/180),e.translate(-e.canvas.width/2,-e.canvas.height/2),this.isVertical()&&e.translate((e.canvas.width-e.canvas.height)/2,(e.canvas.height-e.canvas.width)/2),e.scale(r,r),e.globalCompositeOperation="destination-over",e.drawImage(t.resource,n.x,n.y,n.width,n.height),t.backgroundColor&&(e.fillStyle=t.backgroundColor,e.fillRect(n.x,n.y,n.width,n.height)),e.restore())}},{key:"calculatePosition",value:function(e,t){e=e||this.state.image;var a=m(this.getBorders(t),2),o=a[0],n=a[1],r=this.getCroppingRect(),i=e.width*this.props.scale,s=e.height*this.props.scale,c=-r.x*i,u=-r.y*s;return this.isVertical()?(c+=n,u+=o):(c+=o,u+=n),{x:c,y:u,height:s,width:i}}},{key:"paint",value:function(e){e.save(),e.scale(I,I),e.translate(0,0),e.fillStyle="rgba("+this.props.color.slice(0,4).join(",")+")";var t,a,o,n,r,i,s,c,u=this.props.borderRadius,h=this.getDimensions(),l=m(this.getBorders(h.border),2),d=l[0],p=l[1],g=h.canvas.height,f=h.canvas.width;u=Math.max(u,0),u=Math.min(u,f/2-d,g/2-p),e.beginPath(),t=e,n=f-2*(a=d),r=g-2*(o=p),0===(i=u)?t.rect(a,o,n,r):(s=n-i,c=r-i,t.translate(a,o),t.arc(i,i,i,Math.PI,1.5*Math.PI),t.lineTo(s,0),t.arc(s,i,i,1.5*Math.PI,2*Math.PI),t.lineTo(n,c),t.arc(s,c,i,2*Math.PI,.5*Math.PI),t.lineTo(i,r),t.arc(i,c,i,.5*Math.PI,Math.PI),t.translate(-a,-o)),e.rect(f,0,-f,g),e.fill("evenodd"),e.restore()}},{key:"render",value:function(){var e=this.props,t=(e.scale,e.rotate,e.image,e.border,e.borderRadius,e.width,e.height,e.position,e.color,e.backgroundColor,e.style),a=(e.crossOrigin,e.onLoadFailure,e.onLoadSuccess,e.onImageReady,e.onImageChange,e.onMouseUp,e.onMouseMove,e.onPositionChange,e.disableBoundaryChecks,e.disableHiDPIScaling,e.disableCanvasRotation,d(e,["scale","rotate","image","border","borderRadius","width","height","position","color","backgroundColor","style","crossOrigin","onLoadFailure","onLoadSuccess","onImageReady","onImageChange","onMouseUp","onMouseMove","onPositionChange","disableBoundaryChecks","disableHiDPIScaling","disableCanvasRotation"])),o=this.getDimensions(),r={width:o.canvas.width,height:o.canvas.height,cursor:this.state.drag?"grabbing":"grab",touchAction:"none"},i={width:o.canvas.width*I,height:o.canvas.height*I,style:u(u({},r),t)};return i[O.react.down]=this.handleMouseDown,w&&(i[O.react.mouseDown]=this.handleMouseDown),n.default.createElement("canvas",s({ref:this.setCanvas},i,a))}}])&&r(e.prototype,t),a&&r(e,a),c}();return i(x,"propTypes",{scale:o.default.number,rotate:o.default.number,image:o.default.oneOfType([o.default.string].concat(function(e){if(Array.isArray(e))return v(e)}(b=M?[o.default.instanceOf(File)]:[])||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(b)||f(b)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),border:o.default.oneOfType([o.default.number,o.default.arrayOf(o.default.number)]),borderRadius:o.default.number,width:o.default.number,height:o.default.number,position:o.default.shape({x:o.default.number,y:o.default.number}),color:o.default.arrayOf(o.default.number),backgroundColor:o.default.string,crossOrigin:o.default.oneOf(["","anonymous","use-credentials"]),onLoadFailure:o.default.func,onLoadSuccess:o.default.func,onImageReady:o.default.func,onImageChange:o.default.func,onMouseUp:o.default.func,onMouseMove:o.default.func,onPositionChange:o.default.func,disableBoundaryChecks:o.default.bool,disableHiDPIScaling:o.default.bool,disableCanvasRotation:o.default.bool}),i(x,"defaultProps",{scale:1,rotate:0,border:25,borderRadius:0,width:200,height:200,color:[0,0,0,.5],onLoadFailure:function(){},onLoadSuccess:function(){},onImageReady:function(){},onImageChange:function(){},onMouseUp:function(){},onMouseMove:function(){},onPositionChange:function(){},disableBoundaryChecks:!1,disableHiDPIScaling:!1,disableCanvasRotation:!0}),x}(a(83603),a(41488))}}]);
//# sourceMappingURL=45335.c8410eec.chunk.js.map