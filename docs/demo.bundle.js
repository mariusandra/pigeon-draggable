webpackJsonp([0],[,,,,function(t,e,n){"use strict";e.React=n(0),e.ReactDOM=n(3),e.Component=e.React.Component},,,function(t,e,n){t.exports=n(25)()},,,,,,,,,,,,function(t,e,n){t.exports=n(20)},function(t,e,n){"use strict";var o=n(4),a=n(21),r=function(t){return t&&t.__esModule?t:{default:t}}(a);n(32),o.ReactDOM.render(o.React.createElement(r.default,null),document.getElementById("root"))},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},l=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),u=n(4),c=n(22),h=o(c),d=n(30),f=o(d),m=n(31),p=o(m),g={Iceland:{center:[59.87637580063806,16.25089921561684],zoom:3.004015716849884,dragAnchor:[65.10368655246947,-18.612459647449725]},Paris:{center:[50.1102,3.1506],zoom:6,dragAnchor:[48.8565,2.3475]}},v=function(t){function e(t){a(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state=Object.assign({},g.Paris,{location:"Paris",animating:!1,animationStart:null}),n}return i(e,t),l(e,[{key:"render",value:function(){var t=this;return u.React.createElement("div",{style:{textAlign:"center",margin:"0 auto",maxWidth:600}},u.React.createElement("div",{style:{marginBottom:20,marginTop:20}},this.state.location?"There is a giant pigeon sitting on top of "+this.state.location+"! Quickly! Drag it away!":"Great work you wonderful person, you!"),u.React.createElement(h.default,{center:this.state.center,zoom:this.state.zoom,onBoundsChanged:function(e){var n=e.center,o=e.zoom;return t.setState({center:n,zoom:o})},defaultWidth:600,height:400},u.React.createElement(f.default,{anchor:this.state.dragAnchor,offset:[60,87],onDragStart:function(){t.setState({dragging:!0})},onDragEnd:function(e){t.setState({dragging:!1,dragAnchor:e,location:null})},className:"animated-marker"+(this.state.location||this.state.dragging?"":" stopped"),style:{clipPath:"polygon(100% 0, 83% 0, 79% 15%, 0 68%, 0 78%, 39% 84%, 43% 96%, 61% 100%, 79% 90%, 69% 84%, 88% 71%, 100% 15%)"}},u.React.createElement("img",{src:p.default,width:100,height:95}))),u.React.createElement("div",{style:{marginBottom:20}},"Visit next: ",Object.keys(g).map(function(e){return u.React.createElement("button",{key:e,onClick:function(){t.setState(s({},g[e],{location:e}))}},e)})),u.React.createElement("code",{style:{display:"block",marginTop:50,color:"#888"}},JSON.stringify({center:this.state.center,zoom:this.state.zoom,dragAnchor:this.state.dragAnchor})))}}]),e}(u.Component);e.default=v},function(t,e,n){t.exports=n(23)},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function a(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t,e,n){return"https://maps.wikimedia.org/osm-intl/"+n+"/"+t+"/"+e+("undefined"!=typeof window&&window.devicePixelRatio>=2?"@2x":"")+".png"}function u(t,e){return t/Math.pow(2,e)*360-180}function c(t,e){var n=Math.PI-2*Math.PI*t/Math.pow(2,e);return 180/Math.PI*Math.atan(.5*(Math.exp(n)-Math.exp(-n)))}function h(t,e){var n=(0,w.default)(t);return[e.clientX-n.x,e.clientY-n.y]}function d(t){return t*(2-t)}Object.defineProperty(e,"__esModule",{value:!0});var f=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),m=n(24),p=n(7),g=o(p),v=n(27),w=o(v),_=n(28),M=o(_),y=n(29),b=o(y),x=300,T=1500,S=150,E=40,D=2,z=300,P=60,C=300,R=300,k=function(){},Z=function(t,e){return(t+180)/360*Math.pow(2,e)},A=function(t,e){return(1-Math.log(Math.tan(t*Math.PI/180)+1/Math.cos(t*Math.PI/180))/Math.PI)/2*Math.pow(2,e)},O=[c(Math.pow(2,10),10),c(0,10),u(0,10),u(Math.pow(2,10),10)],L="undefined"!=typeof window,W=L&&window.performance&&window.performance.now?function(){return window.performance.now()}:function(){var t=(new Date).getTime();return function(){return(new Date).getTime()-t}}(),j=L?window.requestAnimationFrame||window.setTimeout:function(t){return t()},Y=L?window.cancelAnimationFrame||window.clearTimeout:function(){},X=function(t){function e(t){r(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.updateWidthHeight=function(){if(n._containerRef){var t=n._containerRef.getBoundingClientRect();n.setState({width:t.width,height:t.height})}},n.wa=function(t,e,n){return window.addEventListener(t,e,n)},n.wr=function(t,e){return window.removeEventListener(t,e)},n.bindMouseEvents=function(){n.wa("mousedown",n.handleMouseDown),n.wa("mouseup",n.handleMouseUp),n.wa("mousemove",n.handleMouseMove)},n.bindTouchEvents=function(){n.wa("touchstart",n.handleTouchStart,{passive:!1}),n.wa("touchmove",n.handleTouchMove,{passive:!1}),n.wa("touchend",n.handleTouchEnd,{passive:!1})},n.unbindMouseEvents=function(){n.wr("mousedown",n.handleMouseDown),n.wr("mouseup",n.handleMouseUp),n.wr("mousemove",n.handleMouseMove)},n.unbindTouchEvents=function(){n.wr("touchstart",n.handleTouchStart),n.wr("touchmove",n.handleTouchMove),n.wr("touchend",n.handleTouchEnd)},n.bindResizeEvent=function(){n.wa("resize",n.updateWidthHeight)},n.unbindResizeEvent=function(){n.wr("resize",n.updateWidthHeight)},n.setCenterZoomTarget=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:x;if(n.props.animate&&(!o||n.distanceInScreens(t,e,n.state.center,n.state.zoom)<=n.props.animateMaxScreens)){if(n._isAnimating){Y(n._animFrame);var i=n.animationStep(W()),s=i.centerStep,l=i.zoomStep;n._centerStart=s,n._zoomStart=l}else n._isAnimating=!0,n._centerStart=n.limitCenterAtZoom([n._lastCenter[0],n._lastCenter[1]],n._lastZoom),n._zoomStart=n._lastZoom,n.onAnimationStart();n._animationStart=W(),n._animationEnd=n._animationStart+r,a?(n._zoomAround=a,n._centerTarget=n.calculateZoomCenter(n._lastCenter,a,n._lastZoom,e)):(n._zoomAround=null,n._centerTarget=t),n._zoomTarget=e,n._animFrame=j(n.animate)}else if(a){var u=n.calculateZoomCenter(n._lastCenter,a,n._lastZoom,e);n.setCenterZoom(u,e,o)}else n.setCenterZoom(t,e,o)},n.distanceInScreens=function(t,e,o,a){var r=n.state,i=r.width,s=r.height,l=n.latLngToPixel(o,o,a),u=n.latLngToPixel(t,o,a),c=n.latLngToPixel(o,o,e),h=n.latLngToPixel(t,o,e),d=(Math.abs(l[0]-u[0])+Math.abs(c[0]-h[0]))/2/i,f=(Math.abs(l[1]-u[1])+Math.abs(c[1]-h[1]))/2/s;return Math.sqrt(d*d+f*f)},n.animationStep=function(t){var e=n._animationEnd-n._animationStart,o=Math.max(t-n._animationStart,0),a=d(o/e),r=(n._zoomTarget-n._zoomStart)*a,i=n._zoomStart+r;if(n._zoomAround){return{centerStep:n.calculateZoomCenter(n._centerStart,n._zoomAround,n._zoomStart,i),zoomStep:i}}return{centerStep:[n._centerStart[0]+(n._centerTarget[0]-n._centerStart[0])*a,n._centerStart[1]+(n._centerTarget[1]-n._centerStart[1])*a],zoomStep:i}},n.animate=function(t){if(t>=n._animationEnd)n._isAnimating=!1,n.setCenterZoom(n._centerTarget,n._zoomTarget,!0),n.onAnimationStop();else{var e=n.animationStep(t),o=e.centerStep,a=e.zoomStep;n.setCenterZoom(o,a),n._animFrame=j(n.animate)}},n.stopAnimating=function(){n._isAnimating&&(n._isAnimating=!1,n.onAnimationStop(),Y(n._animFrame))},n.limitCenterAtZoom=function(t,e){var o=n.getBoundsMinMax(e||n.state.zoom);return[Math.max(Math.min(isNaN(t[0])?n.state.center[0]:t[0],o[1]),o[0]),Math.max(Math.min(isNaN(t[1])?n.state.center[1]:t[1],o[3]),o[2])]},n.onAnimationStart=function(){n.props.onAnimationStart&&n.props.onAnimationStart()},n.onAnimationStop=function(){n.props.onAnimationStop&&n.props.onAnimationStop()},n.setCenterZoom=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=n.limitCenterAtZoom(t,e);if(Math.round(n.state.zoom)!==Math.round(e)){var i=n.tileValues(n.state),s=n.tileValues({center:r,zoom:e,width:n.state.width,height:n.state.height}),l=n.state.oldTiles;n.setState({oldTiles:l.filter(function(t){return t.roundedZoom!==i.roundedZoom}).concat(i)},k);for(var u={},c=s.tileMinX;c<=s.tileMaxX;c++)for(var h=s.tileMinY;h<=s.tileMaxY;h++){var d=c+"-"+h+"-"+s.roundedZoom;u[d]=!1}n._loadTracker=u}n.setState({center:r,zoom:e},k);var f=n.props.zoom?n.props.zoom:n._lastZoom,m=n.props.center?n.props.center:n._lastCenter;(o||Math.abs(f-e)>.001||Math.abs(m[0]-r[0])>1e-5||Math.abs(m[1]-r[1])>1e-5)&&(n._lastZoom=e,n._lastCenter=[].concat(a(r)),n.syncToProps(r,e))},n.getBoundsMinMax=function(t){if("center"===n.props.limitBounds)return O;var e=n.state,o=e.width,a=e.height;if(n._minMaxCache&&n._minMaxCache[0]===t&&n._minMaxCache[1]===o&&n._minMaxCache[2]===a)return n._minMaxCache[3];var r=256*Math.pow(2,t),i=o>r?0:u(o/512,t),s=a>r?0:c(Math.pow(2,t)-a/512,t),l=o>r?0:u(Math.pow(2,t)-o/512,t),h=a>r?0:c(a/512,t),d=[s,h,i,l];return n._minMaxCache=[t,o,a,d],d},n.imageLoaded=function(t){if(n._loadTracker&&t in n._loadTracker){n._loadTracker[t]=!0;0===Object.keys(n._loadTracker).filter(function(t){return!n._loadTracker[t]}).length&&n.setState({oldTiles:[]},k)}},n.handleTouchStart=function(t){if(!t.target||!(0,M.default)(t.target,"pigeon-drag-block"))if(1===t.touches.length){var e=t.touches[0],o=h(n._containerRef,e);if(n.coordsInside(o)&&(n._touchStartPixel=[o],!n.props.twoFingerDrag))if(n.stopAnimating(),n._lastTap&&W()-n._lastTap<z){t.preventDefault();var a=n.pixelToLatLng(n._touchStartPixel[0]);n.setCenterZoomTarget(null,Math.max(n.props.minZoom,Math.min(n.state.zoom+1,n.props.maxZoom)),!1,a)}else n._lastTap=W(),n.trackMoveEvents(o)}else if(2===t.touches.length&&n._touchStartPixel){t.preventDefault(),n.stopTrackingMoveEvents(),(n.state.pixelDelta||n.state.zoomDelta)&&n.sendDeltaChange();var r=h(n._containerRef,t.touches[0]),i=h(n._containerRef,t.touches[1]);n._touchStartPixel=[r,i],n._touchStartMidPoint=[(r[0]+i[0])/2,(r[1]+i[1])/2],n._touchStartDistance=Math.sqrt(Math.pow(r[0]-i[0],2)+Math.pow(r[1]-i[1],2))}},n.handleTouchMove=function(t){if(1===t.touches.length&&n._touchStartPixel){var e=t.touches[0],o=h(n._containerRef,e);n.props.twoFingerDrag?n.coordsInside(o)&&n.showWarning("fingers"):(t.preventDefault(),n.trackMoveEvents(o),n.setState({pixelDelta:[o[0]-n._touchStartPixel[0][0],o[1]-n._touchStartPixel[0][1]]},k))}else if(2===t.touches.length&&n._touchStartPixel){var a=n.state,r=a.width,i=a.height,s=a.zoom;t.preventDefault();var l=h(n._containerRef,t.touches[0]),u=h(n._containerRef,t.touches[1]),c=[(l[0]+u[0])/2,(l[1]+u[1])/2],d=[c[0]-n._touchStartMidPoint[0],c[1]-n._touchStartMidPoint[1]],f=Math.sqrt(Math.pow(l[0]-u[0],2)+Math.pow(l[1]-u[1],2)),m=Math.max(n.props.minZoom,Math.min(n.props.maxZoom,s+Math.log2(f/n._touchStartDistance)))-s,p=Math.pow(2,m),g=[(r/2-c[0])*(p-1),(i/2-c[1])*(p-1)];n.setState({zoomDelta:m,pixelDelta:[g[0]+d[0]*p,g[1]+d[1]*p]},k)}},n.handleTouchEnd=function(t){if(n._touchStartPixel){var e=n.props,o=e.zoomSnap,a=e.twoFingerDrag,r=e.minZoom,i=e.maxZoom,s=n.state.zoomDelta,l=n.sendDeltaChange(),u=l.center,c=l.zoom;if(0===t.touches.length)if(a)n.clearWarning();else{var d=n._touchStartPixel[0],f=h(n._containerRef,t.changedTouches[0]);(Math.abs(d[0]-f[0])>D||Math.abs(d[1]-f[1])>D)&&(!n._secondTouchEnd||W()-n._secondTouchEnd>C)&&(t.preventDefault(),n.throwAfterMoving(f,u,c)),n._touchStartPixel=null,n._secondTouchEnd=null}else if(1===t.touches.length){t.preventDefault();var m=h(n._containerRef,t.touches[0]);if(n._secondTouchEnd=W(),n._touchStartPixel=[m],n.trackMoveEvents(m),o){var p=n._touchStartMidPoint?n.pixelToLatLng(n._touchStartMidPoint):n.state.center,g=void 0;g=a&&Math.round(n.state.zoom)===Math.round(n.state.zoom+s)?Math.round(n.state.zoom):s>0?Math.ceil(n.state.zoom):Math.floor(n.state.zoom);var v=Math.max(r,Math.min(g,i));n.setCenterZoomTarget(p,v,!1,p)}}}},n.handleMouseDown=function(t){var e=h(n._containerRef,t);if(0===t.button&&(!t.target||!(0,M.default)(t.target,"pigeon-drag-block"))&&n.coordsInside(e))if(n.stopAnimating(),t.preventDefault(),n._lastClick&&W()-n._lastClick<z){var o=n.pixelToLatLng(n._mousePosition||e);n.setCenterZoomTarget(null,Math.max(n.props.minZoom,Math.min(n.state.zoom+1,n.props.maxZoom)),!1,o)}else n._lastClick=W(),n._mouseDown=!0,n._dragStart=e,n.trackMoveEvents(e)},n.handleMouseMove=function(t){n._mousePosition=h(n._containerRef,t),n._mouseDown&&n._dragStart&&(n.trackMoveEvents(n._mousePosition),n.setState({pixelDelta:[n._mousePosition[0]-n._dragStart[0],n._mousePosition[1]-n._dragStart[1]]},k))},n.handleMouseUp=function(t){var e=n.state.pixelDelta;if(n._mouseDown){n._mouseDown=!1;var o=h(n._containerRef,t);if(!n.props.onClick||t.target&&(0,M.default)(t.target,"pigeon-click-block")||e&&!(Math.abs(e[0])+Math.abs(e[1])<=D)){var a=n.sendDeltaChange(),r=a.center,i=a.zoom;n.throwAfterMoving(o,r,i)}else{var s=n.pixelToLatLng(o);n.props.onClick({event:t,latLng:s,pixel:o}),n.setState({pixelDelta:null},k)}}},n.stopTrackingMoveEvents=function(){n._moveEvents=[]},n.trackMoveEvents=function(t){var e=W();(0===n._moveEvents.length||e-n._moveEvents[n._moveEvents.length-1].timestamp>40)&&(n._moveEvents.push({timestamp:e,coords:t}),n._moveEvents.length>2&&n._moveEvents.shift())},n.throwAfterMoving=function(t,e,o){var a=n.state,r=a.width,i=a.height,s=n.props.animate,l=W(),h=n._moveEvents.shift();if(h&&s){var d=Math.max(l-h.timestamp,1),f=[(t[0]-h.coords[0])/d*120,(t[1]-h.coords[1])/d*120],m=Math.sqrt(f[0]*f[0]+f[1]*f[1]);if(m>E){var p=Math.sqrt(r*r+i*i),g=u(Z(e[1],o)-f[0]/256,o),v=c(A(e[0],o)-f[1]/256,o);n.setCenterZoomTarget([v,g],o,!1,null,T*m/p)}}n.stopTrackingMoveEvents()},n.sendDeltaChange=function(){var t=n.state,e=t.center,o=t.zoom,a=t.pixelDelta,r=t.zoomDelta,i=e[0],s=e[1];return(a||0!==r)&&(s=u(Z(e[1],o+r)-(a?a[0]/256:0),o+r),i=c(A(e[0],o+r)-(a?a[1]/256:0),o+r),n.setCenterZoom([i,s],o+r)),n.setState({pixelDelta:null,zoomDelta:0},k),{center:n.limitCenterAtZoom([i,s],o+r),zoom:o+r}},n.getBounds=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.state.center,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.zoomPlusDelta(),o=n.state,a=o.width,r=o.height;return{ne:n.pixelToLatLng([a-1,0],t,e),sw:n.pixelToLatLng([0,r-1],t,e)}},n.syncToProps=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.state.center,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.state.zoom,o=n.props.onBoundsChanged;if(o){o({center:t,zoom:e,bounds:n.getBounds(t,e),initial:!n._boundsSynced}),n._boundsSynced=!0}},n.handleWheel=function(t){var e=n.props,o=e.mouseEvents,a=e.metaWheelZoom,r=e.zoomSnap,i=e.animate;if(o)if(!a||t.metaKey){t.preventDefault();var s=-t.deltaY/S;if(!r&&n._zoomTarget){var l=n._zoomTarget-n.state.zoom;n.zoomAroundMouse(s+l,t)}else i?n.zoomAroundMouse(s,t):(!n._lastWheel||W()-n._lastWheel>x)&&(n._lastWheel=W(),n.zoomAroundMouse(s,t))}else n.showWarning("wheel")},n.showWarning=function(t){n.state.showWarning&&n.state.warningType===t||n.setState({showWarning:!0,warningType:t}),n._warningClearTimeout&&window.clearTimeout(n._warningClearTimeout),n._warningClearTimeout=window.setTimeout(n.clearWarning,R)},n.clearWarning=function(){n.state.showWarning&&n.setState({showWarning:!1})},n.zoomAroundMouse=function(t,e){var o=n.state.zoom,a=n.props,r=a.minZoom,i=a.maxZoom,s=a.zoomSnap;if(n._mousePosition=h(n._containerRef,e),!(!n._mousePosition||o===r&&t<0||o===i&&t>0)){var l=n.pixelToLatLng(n._mousePosition),u=o+t;s&&(u=t<0?Math.floor(u):Math.ceil(u)),u=Math.max(r,Math.min(u,i)),n.setCenterZoomTarget(null,u,!1,l)}},n.zoomPlusDelta=function(){return n.state.zoom+n.state.zoomDelta},n.pixelToLatLng=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.state.center,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.zoomPlusDelta(),a=n.state,r=a.width,i=a.height,s=a.pixelDelta,l=[(t[0]-r/2-(s?s[0]:0))/256,(t[1]-i/2-(s?s[1]:0))/256],h=Z(e[1],o)+l[0],d=A(e[0],o)+l[1];return[Math.max(O[0],Math.min(O[1],c(d,o))),Math.max(O[2],Math.min(O[3],u(h,o)))]},n.latLngToPixel=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.state.center,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.zoomPlusDelta(),a=n.state,r=a.width,i=a.height,s=a.pixelDelta,l=Z(e[1],o),u=A(e[0],o),c=Z(t[1],o),h=A(t[0],o);return[256*(c-l)+r/2+(s?s[0]:0),256*(h-u)+i/2+(s?s[1]:0)]},n.calculateZoomCenter=function(t,e,o,a){var r=n.state,i=r.width,s=r.height,l=n.latLngToPixel(e,t,o),u=n.latLngToPixel(e,t,a),c=n.pixelToLatLng([i/2+u[0]-l[0],s/2+u[1]-l[1]],t,a);return n.limitCenterAtZoom(c,a)},n.setRef=function(t){n._containerRef=t},n.syncToProps=(0,b.default)(n.syncToProps,P),n._mousePosition=null,n._dragStart=null,n._mouseDown=!1,n._moveEvents=[],n._lastClick=null,n._lastTap=null,n._touchStartPixel=null,n._isAnimating=!1,n._animationStart=null,n._animationEnd=null,n._centerTarget=null,n._zoomTarget=null,n._lastZoom=t.defaultZoom?t.defaultZoom:t.zoom,n._lastCenter=t.defaultCenter?t.defaultCenter:t.center,n._boundsSynced=!1,n._minMaxCache=null,n.state={zoom:n._lastZoom,center:n._lastCenter,width:t.width||t.defaultWidth,height:t.height||t.defaultHeight,zoomDelta:0,pixelDelta:null,oldTiles:[],showWarning:!1,warningType:null},n}return s(e,t),f(e,[{key:"componentDidMount",value:function(){this.props.mouseEvents&&this.bindMouseEvents(),this.props.touchEvents&&this.bindTouchEvents(),this.props.width&&this.props.height||(this.updateWidthHeight(),this.bindResizeEvent()),this.syncToProps()}},{key:"componentWillUnmount",value:function(){this.props.mouseEvents&&this.unbindMouseEvents(),this.props.touchEvents&&this.unbindTouchEvents(),this.props.width&&this.props.height||this.unbindResizeEvent()}},{key:"componentWillReceiveProps",value:function(t){if(t.mouseEvents!==this.props.mouseEvents&&(t.mouseEvents?this.bindMouseEvents():this.unbindMouseEvents()),t.touchEvents!==this.props.touchEvents&&(t.touchEvents?this.bindTouchEvents():this.unbindTouchEvents()),t.width&&t.width!==this.props.width&&this.setState({width:t.width}),t.height&&t.height!==this.props.height&&this.setState({height:t.height}),(t.center||t.zoom)&&(t.center&&(t.center[0]!==this.props.center[0]||t.center[1]!==this.props.center[1])||t.zoom!==this.props.zoom)){var e=t.center?t.center:this.state.center,n=t.zoom?t.zoom:this.state.zoom;(Math.abs(n-this.state.zoom)>.001||Math.abs(e[0]-this.state.center[0])>1e-4||Math.abs(e[1]-this.state.center[1])>1e-4)&&this.setCenterZoomTarget(e,n,!0)}}},{key:"coordsInside",value:function(t){var e=this.state,n=e.width,o=e.height;if(t[0]<0||t[1]<0||t[0]>=n||t[1]>=o)return!1;var a=this._containerRef,r=(0,w.default)(a),i=document.elementFromPoint(t[0]+r.x,t[1]+r.y);return a===i||a.contains(i)}},{key:"tileValues",value:function(t){var e=t.center,n=t.zoom,o=t.pixelDelta,a=t.zoomDelta,r=t.width,i=t.height,s=Math.round(n+(a||0)),l=Math.pow(2,n+(a||0)-s),u=r/l,c=i/l,h=Z(e[1],s)-(o?o[0]/256/l:0),d=A(e[0],s)-(o?o[1]/256/l:0),f=u/2/256,m=c/2/256;return{tileMinX:Math.floor(h-f),tileMaxX:Math.floor(h+f),tileMinY:Math.floor(d-m),tileMaxY:Math.floor(d+m),tileCenterX:h,tileCenterY:d,roundedZoom:s,zoomDelta:a||0,scaleWidth:u,scaleHeight:c,scale:l}}},{key:"renderTiles",value:function(){for(var t=this,e=this.state.oldTiles,n=this.props.provider||l,o=this.tileValues(this.state),a=o.tileMinX,r=o.tileMaxX,i=o.tileMinY,s=o.tileMaxY,u=o.tileCenterX,c=o.tileCenterY,h=o.roundedZoom,d=o.scaleWidth,f=o.scaleHeight,p=o.scale,g=[],v=0;v<e.length;v++){var w=e[v],_=w.roundedZoom-h;if(!(Math.abs(_)>4||0===_))for(var M=1/Math.pow(2,_),y=256*-(a-w.tileMinX*M),b=256*-(i-w.tileMinY*M),x=Math.max(w.tileMinX,0),T=Math.max(w.tileMinY,0),S=Math.min(w.tileMaxX,Math.pow(2,w.roundedZoom)-1),E=Math.min(w.tileMaxY,Math.pow(2,w.roundedZoom)-1),D=x;D<=S;D++)for(var z=T;z<=E;z++)g.push({key:D+"-"+z+"-"+w.roundedZoom,url:n(D,z,w.roundedZoom),left:y+256*(D-w.tileMinX)*M,top:b+256*(z-w.tileMinY)*M,width:256*M,height:256*M,active:!1})}for(var P=Math.max(a,0),C=Math.max(i,0),R=Math.min(r,Math.pow(2,h)-1),k=Math.min(s,Math.pow(2,h)-1),Z=P;Z<=R;Z++)for(var A=C;A<=k;A++)g.push({key:Z+"-"+A+"-"+h,url:n(Z,A,h),left:256*(Z-a),top:256*(A-i),width:256,height:256,active:!0});var O=this.props.boxClassname||"";return m.React.createElement("div",{style:{width:d,height:f,position:"absolute",top:0,left:0,overflow:"hidden",willChange:"transform",transform:"scale("+p+", "+p+")",transformOrigin:"top left"},className:O},m.React.createElement("div",{style:{position:"absolute",width:256*(r-a+1),height:256*(s-i+1),willChange:"transform",transform:"translate("+-(256*(u-a)-d/2)+"px, "+-(256*(c-i)-f/2)+"px)"}},g.map(function(e){return m.React.createElement("img",{key:e.key,src:e.url,width:e.width,height:e.height,onLoad:function(){return t.imageLoaded(e.key)},style:{position:"absolute",left:e.left,top:e.top,willChange:"transform",transform:e.transform,transformOrigin:"top left",opacity:1}})})))}},{key:"renderOverlays",value:function(){var t=this,e=this.state,n=e.width,o=e.height,a=e.center,r={bounds:this.getBounds(),zoom:this.zoomPlusDelta(),center:a,width:n,height:o},i=void 0;return i=m.React.Children.map(this.props.children,function(e){if(!e)return null;if("string"==typeof e.type)return e;var n=e.props,o=n.anchor,i=n.position,s=n.offset,l=t.latLngToPixel(o||i||a);return m.React.cloneElement(e,{left:l[0]-(s?s[0]:0),top:l[1]-(s?s[1]:0),latLngToPixel:t.latLngToPixel,pixelToLatLng:t.pixelToLatLng,mapState:r})}),m.React.createElement("div",{style:{position:"absolute",width:n,height:o,top:0,left:0}},i)}},{key:"renderAttribution",value:function(){var t=this.props,e=t.attribution,n=t.attributionPrefix;if(!1===e)return null;var o={color:"#0078A8",textDecoration:"none"};return m.React.createElement("div",{key:"attr",className:"pigeon-attribution",style:{position:"absolute",bottom:0,right:0,fontSize:"11px",padding:"2px 5px",background:"rgba(255, 255, 255, 0.7)",fontFamily:"'Helvetica Neue', Helvetica, Arial, sans-serif",color:"#333"}},!1===n?null:m.React.createElement("span",null,n||m.React.createElement("a",{href:"https://pigeon-maps.js.org/",style:o},"Pigeon")," | "),e||m.React.createElement("span",null," © ",m.React.createElement("a",{href:"https://www.openstreetmap.org/copyright",style:o},"OpenStreetMap")," contributors"))}},{key:"renderWarning",value:function(){var t=this.props,e=t.metaWheelZoom,n=t.metaWheelZoomWarning,o=t.twoFingerDrag,a=t.twoFingerDragWarning,r=t.warningZIndex,i=this.state,s=i.showWarning,l=i.warningType,u=i.width,c=i.height;if(e&&n||o&&a){var h={position:"absolute",top:0,left:0,width:u,height:c,overflow:"hidden",pointerEvents:"none",opacity:s?100:0,transition:"opacity 300ms",background:"rgba(0,0,0,0.5)",color:"#fff",display:"flex",justifyContent:"center",alignItems:"center",fontSize:22,fontFamily:'"Arial", sans-serif',textAlign:"center",zIndex:r},d="undefined"!=typeof window&&window.navigator&&window.navigator.platform.toUpperCase().indexOf("MAC")>=0?"⌘":"⊞",f="fingers"===l?a:n;return m.React.createElement("div",{style:h},f.replace("META",d))}return null}},{key:"render",value:function(){var t=this.props,e=t.touchEvents,n=t.twoFingerDrag,o=this.state,a=o.width,r=o.height,i={width:this.props.width?a:"100%",height:this.props.height?r:"100%",position:"relative",display:"inline-block",overflow:"hidden",background:"#dddddd",touchAction:e?n?"pan-x pan-y":"none":"auto"},s=!(!a||!r);return m.React.createElement("div",{style:i,ref:this.setRef,onWheel:this.handleWheel},s&&this.renderTiles(),s&&this.renderOverlays(),s&&this.renderAttribution(),s&&this.renderWarning())}}]),e}(m.Component);X.propTypes={center:g.default.array,defaultCenter:g.default.array,zoom:g.default.number,defaultZoom:g.default.number,width:g.default.number,defaultWidth:g.default.number,height:g.default.number,defaultHeight:g.default.number,provider:g.default.func,children:g.default.node,animate:g.default.bool,animateMaxScreens:g.default.number,minZoom:g.default.number,maxZoom:g.default.number,metaWheelZoom:g.default.bool,metaWheelZoomWarning:g.default.string,twoFingerDrag:g.default.bool,twoFingerDragWarning:g.default.string,warningZIndex:g.default.number,attribution:g.default.any,attributionPrefix:g.default.any,zoomSnap:g.default.bool,mouseEvents:g.default.bool,touchEvents:g.default.bool,onClick:g.default.func,onBoundsChanged:g.default.func,onAnimationStart:g.default.func,onAnimationStop:g.default.func,limitBounds:g.default.oneOf(["center","edge"])},X.defaultProps={animate:!0,metaWheelZoom:!1,metaWheelZoomWarning:"Use META+wheel to zoom!",twoFingerDrag:!1,twoFingerDragWarning:"Use two fingers to move the map",zoomSnap:!0,mouseEvents:!0,touchEvents:!0,warningZIndex:100,animateMaxScreens:5,minZoom:1,maxZoom:18,limitBounds:"center"},e.default=X},function(t,e,n){"use strict";e.React=n(0),e.ReactDOM=n(3),e.Component=e.React.Component},function(t,e,n){"use strict";var o=n(1),a=n(2),r=n(26);t.exports=function(){function t(t,e,n,o,i,s){s!==r&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=o,n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){"use strict";function o(t){var e=t.getBoundingClientRect();return{x:e.left,y:e.top}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},function(t,e,n){"use strict";function o(t,e){for(;t;){if(t.classList&&t.classList.contains(e))return!0;t=t.offsetParent}return!1}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},function(t,e,n){"use strict";function o(t,e){var n=void 0;return function(){for(var o=arguments.length,a=Array(o),r=0;r<o;r++)a[r]=arguments[r];var i=this;clearTimeout(n),n=setTimeout(function(){return t.apply(i,a)},e)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(t,e){for(;t;){if(t===e)return!0;t=t.offsetParent}return!1}Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},l=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),u=n(4),c=n(7),h=function(t){return t&&t.__esModule?t:{default:t}}(c),d=function(t){function e(t){o(this,e);var n=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.wa=function(t,e,n){return window.addEventListener(t,e,n)},n.wr=function(t,e){return window.removeEventListener(t,e)},n.bindMouseEvents=function(){n.wa("mousedown",n.handleDragStart),n.wa("mousemove",n.handleDragMove),n.wa("mouseup",n.handleDragEnd)},n.bindTouchEvents=function(){n.wa("touchstart",n.handleDragStart,{passive:!1}),n.wa("touchmove",n.handleDragMove,{passive:!1}),n.wa("touchend",n.handleDragEnd,{passive:!1})},n.unbindMouseEvents=function(){n.wr("mousedown",n.handleDragStart),n.wr("mousemove",n.handleDragMove),n.wr("mouseup",n.handleDragEnd)},n.unbindTouchEvents=function(){n.wr("touchstart",n.handleDragStart),n.wr("touchmove",n.handleDragMove),n.wr("touchend",n.handleDragEnd)},n.handleDragStart=function(t){i(t.target,n._dragRef)&&(t.preventDefault(),n.setState({isDragging:!0,startX:(t.touches?t.touches[0]:t).clientX,startY:(t.touches?t.touches[0]:t).clientY,deltaX:0,deltaY:0}),n.props.onDraStart&&n.props.onDragStart())},n.handleDragMove=function(t){if(n.state.isDragging){t.preventDefault();var e=(t.touches?t.touches[0]:t).clientX,o=(t.touches?t.touches[0]:t).clientY;if(n.setState({deltaX:e-n.state.startX,deltaY:o-n.state.startY}),n.props.onDragMove){var a=n.props,r=a.left,i=a.top,s=a.offset,l=a.pixelToLatLng;n.props.onDragMove(l([r+e-n.state.startX+(s?s[0]:0),i+o-n.state.startY+(s?s[1]:0)]))}}},n.handleDragEnd=function(t){if(n.state.isDragging){t.preventDefault();var e=n.props,o=e.left,a=e.top,r=e.offset,i=e.pixelToLatLng,s=n.state,l=s.deltaX,u=s.deltaY;n.props.onDragEnd&&n.props.onDragEnd(i([o+l+(r?r[0]:0),a+u+(r?r[1]:0)])),n.setState({isDragging:!1,deltaX:0,deltaY:0})}},n.setRef=function(t){n._dragRef=t},n.state={isDragging:!1,deltaX:0,deltaY:0},n}return r(e,t),l(e,[{key:"componentDidMount",value:function(){this.bindMouseEvents(),this.bindTouchEvents()}},{key:"componentWillUnmount",value:function(){this.unBindMouseEvents(),this.unBindTouchEvents()}},{key:"render",value:function(){var t=this.props,e=t.left,n=t.top,o=t.className,a=t.style,r=this.state,i=r.deltaX,l=r.deltaY;return u.React.createElement("div",{style:s({},a||{},{position:"absolute",transform:"translate("+(e+i)+"px, "+(n+l)+"px)"}),ref:this.setRef,className:"pigeon-drag-block"+(o?" "+o:"")},this.props.children)}}]),e}(u.Component);d.propTypes={anchor:h.default.array.isRequired,offset:h.default.array,className:h.default.string,left:h.default.number,top:h.default.number,pixelToLatLng:h.default.func},e.default=d},function(t,e,n){t.exports=n.p+"pigeon.svg"},function(t,e,n){t.exports=n.p+"index.html"}],[19]);