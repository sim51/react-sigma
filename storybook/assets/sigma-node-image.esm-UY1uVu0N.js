import{e as pe,f as me,N as ye}from"./react-sigma.min-CrKgMPKo.js";function re(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _e(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var i=a.call(e,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function se(e){var t=_e(e,"string");return typeof t=="symbol"?t:String(t)}function ie(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,se(i.key),i)}}function ne(e,t,a){return t&&ie(e.prototype,t),a&&ie(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function W(e){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},W(e)}function le(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(le=function(){return!!e})()}function G(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function be(e,t){if(t&&(typeof t=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return G(e)}function fe(e,t,a){return t=W(t),be(e,le()?Reflect.construct(t,a||[],W(e).constructor):t.apply(e,a))}function we(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&(e=W(e),e!==null););return e}function Q(){return typeof Reflect<"u"&&Reflect.get?Q=Reflect.get.bind():Q=function(t,a,i){var l=we(t,a);if(l){var f=Object.getOwnPropertyDescriptor(l,a);return f.get?f.get.call(arguments.length<3?t:i):f.value}},Q.apply(this,arguments)}function Z(e,t){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,l){return i.__proto__=l,i},Z(e,t)}function he(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Z(e,t)}function L(e,t,a){return t=se(t),t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Ee(e,t){if(e==null)return{};var a={},i=Object.keys(e),l,f;for(f=0;f<i.length;f++)l=i[f],!(t.indexOf(l)>=0)&&(a[l]=e[l]);return a}function xe(e,t){if(e==null)return{};var a=Ee(e,t),i,l;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(e);for(l=0;l<f.length;l++)i=f[l],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}function oe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),a.push.apply(a,i)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?oe(Object(a),!0).forEach(function(i){L(e,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):oe(Object(a)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))})}return e}var Te=`
precision highp float;

varying vec4 v_color;
varying vec2 v_diffVector;
varying float v_radius;
varying vec4 v_texture;

uniform sampler2D u_atlas;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
uniform float u_percentagePadding;
uniform bool u_colorizeImages;
uniform bool u_keepWithinCircle;

const vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);

const float radius = 0.5;

void main(void) {
  float border = 2.0 * u_correctionRatio;
  float dist = length(v_diffVector);
  vec4 color = gl_FragColor;

  float c = cos(-u_cameraAngle);
  float s = sin(-u_cameraAngle);
  vec2 diffVector = mat2(c, s, -s, c) * (v_diffVector);

  // No antialiasing for picking mode:
  #ifdef PICKING_MODE
  border = 0.0;
  color = v_color;

  #else
  // First case: No image to display
  if (v_texture.w <= 0.0) {
    if (!u_colorizeImages) {
      color = v_color;
    }
  }

  // Second case: Image loaded into the texture
  else {
    float paddingRatio = 1.0 + 2.0 * u_percentagePadding;
    float coef = u_keepWithinCircle ? 1.0 : `.concat(Math.SQRT2,`;
    vec2 coordinateInTexture = diffVector * vec2(paddingRatio, -paddingRatio) / v_radius / 2.0 * coef + vec2(0.5, 0.5);
    vec4 texel = texture2D(u_atlas, (v_texture.xy + coordinateInTexture * v_texture.zw), -1.0);

    // Colorize all visible image pixels:
    if (u_colorizeImages) {
      color = mix(gl_FragColor, v_color, texel.a);
    }

    // Colorize background pixels, keep image pixel colors:
    else {
      color = vec4(mix(v_color, texel, texel.a).rgb, max(texel.a, v_color.a));
    }

    // Erase pixels "in the padding":
    if (abs(diffVector.x) > v_radius / paddingRatio || abs(diffVector.y) > v_radius / paddingRatio) {
      color = u_colorizeImages ? gl_FragColor : v_color;
    }
  }
  #endif

  // Crop in a circle when u_keepWithinCircle is truthy:
  if (u_keepWithinCircle) {
    if (dist < v_radius - border) {
      gl_FragColor = color;
    } else if (dist < v_radius) {
      gl_FragColor = mix(transparent, color, (v_radius - dist) / border);
    }
  }

  // Crop in a square else:
  else {
    float squareHalfSize = v_radius * `).concat(Math.SQRT1_2*Math.cos(Math.PI/12),`;
    if (abs(diffVector.x) > squareHalfSize || abs(diffVector.y) > squareHalfSize) {
      gl_FragColor = transparent;
    } else {
      gl_FragColor = color;
    }
  }
}
`),Oe=Te,Re=`
attribute vec4 a_id;
attribute vec4 a_color;
attribute vec2 a_position;
attribute float a_size;
attribute float a_angle;
attribute vec4 a_texture;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;

varying vec4 v_color;
varying vec2 v_diffVector;
varying float v_radius;
varying vec4 v_texture;

const float bias = 255.0 / 254.0;
const float marginRatio = 1.05;

void main() {
  float size = a_size * u_correctionRatio / u_sizeRatio * 4.0;
  vec2 diffVector = size * vec2(cos(a_angle), sin(a_angle));
  vec2 position = a_position + diffVector * marginRatio;
  gl_Position = vec4(
    (u_matrix * vec3(position, 1)).xy,
    0,
    1
  );

  v_diffVector = diffVector;
  v_radius = size / 2.0 / marginRatio;

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;

  // Pass the texture coordinates:
  v_texture = a_texture;
  #endif

  v_color.a *= bias;
}
`,Pe=Re;function D(){D=function(){return t};var e,t={},a=Object.prototype,i=a.hasOwnProperty,l=Object.defineProperty||function(n,r,o){n[r]=o.value},f=typeof Symbol=="function"?Symbol:{},h=f.iterator||"@@iterator",p=f.asyncIterator||"@@asyncIterator",_=f.toStringTag||"@@toStringTag";function c(n,r,o){return Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}),n[r]}try{c({},"")}catch{c=function(r,o,v){return r[o]=v}}function w(n,r,o,v){var s=r&&r.prototype instanceof m?r:m,y=Object.create(s.prototype),T=new A(v||[]);return l(y,"_invoke",{value:F(n,o,T)}),y}function O(n,r,o){try{return{type:"normal",arg:n.call(r,o)}}catch(v){return{type:"throw",arg:v}}}t.wrap=w;var b="suspendedStart",E="suspendedYield",g="executing",d="completed",u={};function m(){}function C(){}function x(){}var R={};c(R,h,function(){return this});var I=Object.getPrototypeOf,N=I&&I(I(B([])));N&&N!==a&&i.call(N,h)&&(R=N);var S=x.prototype=m.prototype=Object.create(R);function U(n){["next","throw","return"].forEach(function(r){c(n,r,function(o){return this._invoke(r,o)})})}function z(n,r){function o(s,y,T,P){var k=O(n[s],n,y);if(k.type!=="throw"){var V=k.arg,q=V.value;return q&&typeof q=="object"&&i.call(q,"__await")?r.resolve(q.__await).then(function(j){o("next",j,T,P)},function(j){o("throw",j,T,P)}):r.resolve(q).then(function(j){V.value=j,T(V)},function(j){return o("throw",j,T,P)})}P(k.arg)}var v;l(this,"_invoke",{value:function(s,y){function T(){return new r(function(P,k){o(s,y,P,k)})}return v=v?v.then(T,T):T()}})}function F(n,r,o){var v=b;return function(s,y){if(v===g)throw new Error("Generator is already running");if(v===d){if(s==="throw")throw y;return{value:e,done:!0}}for(o.method=s,o.arg=y;;){var T=o.delegate;if(T){var P=X(T,o);if(P){if(P===u)continue;return P}}if(o.method==="next")o.sent=o._sent=o.arg;else if(o.method==="throw"){if(v===b)throw v=d,o.arg;o.dispatchException(o.arg)}else o.method==="return"&&o.abrupt("return",o.arg);v=g;var k=O(n,r,o);if(k.type==="normal"){if(v=o.done?d:E,k.arg===u)continue;return{value:k.arg,done:o.done}}k.type==="throw"&&(v=d,o.method="throw",o.arg=k.arg)}}}function X(n,r){var o=r.method,v=n.iterator[o];if(v===e)return r.delegate=null,o==="throw"&&n.iterator.return&&(r.method="return",r.arg=e,X(n,r),r.method==="throw")||o!=="return"&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+o+"' method")),u;var s=O(v,n.iterator,r.arg);if(s.type==="throw")return r.method="throw",r.arg=s.arg,r.delegate=null,u;var y=s.arg;return y?y.done?(r[n.resultName]=y.value,r.next=n.nextLoc,r.method!=="return"&&(r.method="next",r.arg=e),r.delegate=null,u):y:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,u)}function H(n){var r={tryLoc:n[0]};1 in n&&(r.catchLoc=n[1]),2 in n&&(r.finallyLoc=n[2],r.afterLoc=n[3]),this.tryEntries.push(r)}function Y(n){var r=n.completion||{};r.type="normal",delete r.arg,n.completion=r}function A(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(H,this),this.reset(!0)}function B(n){if(n||n===""){var r=n[h];if(r)return r.call(n);if(typeof n.next=="function")return n;if(!isNaN(n.length)){var o=-1,v=function s(){for(;++o<n.length;)if(i.call(n,o))return s.value=n[o],s.done=!1,s;return s.value=e,s.done=!0,s};return v.next=v}}throw new TypeError(typeof n+" is not iterable")}return C.prototype=x,l(S,"constructor",{value:x,configurable:!0}),l(x,"constructor",{value:C,configurable:!0}),C.displayName=c(x,_,"GeneratorFunction"),t.isGeneratorFunction=function(n){var r=typeof n=="function"&&n.constructor;return!!r&&(r===C||(r.displayName||r.name)==="GeneratorFunction")},t.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,x):(n.__proto__=x,c(n,_,"GeneratorFunction")),n.prototype=Object.create(S),n},t.awrap=function(n){return{__await:n}},U(z.prototype),c(z.prototype,p,function(){return this}),t.AsyncIterator=z,t.async=function(n,r,o,v,s){s===void 0&&(s=Promise);var y=new z(w(n,r,o,v),s);return t.isGeneratorFunction(r)?y:y.next().then(function(T){return T.done?T.value:y.next()})},U(S),c(S,_,"Generator"),c(S,h,function(){return this}),c(S,"toString",function(){return"[object Generator]"}),t.keys=function(n){var r=Object(n),o=[];for(var v in r)o.push(v);return o.reverse(),function s(){for(;o.length;){var y=o.pop();if(y in r)return s.value=y,s.done=!1,s}return s.done=!0,s}},t.values=B,A.prototype={constructor:A,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(Y),!n)for(var r in this)r.charAt(0)==="t"&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if(n.type==="throw")throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function o(k,V){return y.type="throw",y.arg=n,r.next=k,V&&(r.method="next",r.arg=e),!!V}for(var v=this.tryEntries.length-1;v>=0;--v){var s=this.tryEntries[v],y=s.completion;if(s.tryLoc==="root")return o("end");if(s.tryLoc<=this.prev){var T=i.call(s,"catchLoc"),P=i.call(s,"finallyLoc");if(T&&P){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(T){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!P)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(n,r){for(var o=this.tryEntries.length-1;o>=0;--o){var v=this.tryEntries[o];if(v.tryLoc<=this.prev&&i.call(v,"finallyLoc")&&this.prev<v.finallyLoc){var s=v;break}}s&&(n==="break"||n==="continue")&&s.tryLoc<=r&&r<=s.finallyLoc&&(s=null);var y=s?s.completion:{};return y.type=n,y.arg=r,s?(this.method="next",this.next=s.finallyLoc,u):this.complete(y)},complete:function(n,r){if(n.type==="throw")throw n.arg;return n.type==="break"||n.type==="continue"?this.next=n.arg:n.type==="return"?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):n.type==="normal"&&r&&(this.next=r),u},finish:function(n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.finallyLoc===n)return this.complete(o.completion,o.afterLoc),Y(o),u}},catch:function(n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc===n){var v=o.completion;if(v.type==="throw"){var s=v.arg;Y(o)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,o){return this.delegate={iterator:B(n),resultName:r,nextLoc:o},this.method==="next"&&(this.arg=e),u}},t}function ue(e,t,a,i,l,f,h){try{var p=e[f](h),_=p.value}catch(c){a(c);return}p.done?t(_):Promise.resolve(_).then(i,l)}function ae(e){return function(){var t=this,a=arguments;return new Promise(function(i,l){var f=e.apply(t,a);function h(_){ue(f,i,l,h,p,"next",_)}function p(_){ue(f,i,l,h,p,"throw",_)}h(void 0)})}}var ve={size:{mode:"max",value:512},objectFit:"cover",correctCentering:!1},Se=100,ke=1;function $(e){return new Promise(function(t,a){var i=new Image;i.addEventListener("load",function(){t(i)},{once:!0}),i.addEventListener("error",function(l){a(l.error)},{once:!0}),i.setAttribute("crossOrigin",""),i.src=e})}function Le(e){return ee.apply(this,arguments)}function ee(){return ee=ae(D().mark(function e(t){var a,i,l,f,h,p,_,c,w,O,b,E,g=arguments;return D().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return a=g.length>1&&g[1]!==void 0?g[1]:{},i=a.size,u.next=3,fetch(t);case 3:return l=u.sent,u.next=6,l.text();case 6:if(f=u.sent,h=new DOMParser().parseFromString(f,"image/svg+xml"),p=h.documentElement,_=p.getAttribute("width"),c=p.getAttribute("height"),!(!_||!c)){u.next=13;break}throw new Error("loadSVGImage: cannot use `size` if target SVG has no definite dimensions.");case 13:return typeof i=="number"&&(p.setAttribute("width",""+i),p.setAttribute("height",""+i)),w=new XMLSerializer().serializeToString(h),O=new Blob([w],{type:"image/svg+xml"}),b=URL.createObjectURL(O),E=$(b),E.finally(function(){return URL.revokeObjectURL(b)}),u.abrupt("return",E);case 20:case"end":return u.stop()}},e)})),ee.apply(this,arguments)}function Ne(e){return te.apply(this,arguments)}function te(){return te=ae(D().mark(function e(t){var a,i,l,f,h,p=arguments;return D().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(i=p.length>1&&p[1]!==void 0?p[1]:{},l=i.size,f=((a=t.split(/[#?]/)[0].split(".").pop())===null||a===void 0?void 0:a.trim().toLowerCase())==="svg",!(f&&l)){c.next=16;break}return c.prev=3,c.next=6,Le(t,{size:l});case 6:h=c.sent,c.next=14;break;case 9:return c.prev=9,c.t0=c.catch(3),c.next=13,$(t);case 13:h=c.sent;case 14:c.next=19;break;case 16:return c.next=18,$(t);case 18:h=c.sent;case 19:return c.abrupt("return",h);case 20:case"end":return c.stop()}},e,null,[[3,9]])})),te.apply(this,arguments)}function Ae(e,t,a){var i=a.objectFit,l=a.size,f=a.correctCentering,h=i==="contain"?Math.max(e.width,e.height):Math.min(e.width,e.height),p=l.mode==="auto"?h:l.mode==="force"?l.value:Math.min(l.value,h),_=(e.width-h)/2,c=(e.height-h)/2;if(f){var w=t.getCorrectionOffset(e,h);_=w.x,c=w.y}return{sourceX:_,sourceY:c,sourceSize:h,destinationSize:p}}function Ce(e,t){var a=3072,i=.6,l=[],f=0,h=0;for(var p in t){var _=t[p];_.status==="ready"&&(h=Math.max(h,_.destinationSize),f+=Math.pow(_.destinationSize,2),l.push(M({key:p},_)))}l.sort(function(T,P){return T.destinationSize>P.destinationSize?-1:1});for(var c=f/i,w=Math.min(Math.max(Math.sqrt(c),h),a),O=[],b=0,E=0,g=0,d=0,u={},m=0,C=l.length;m<C;m++){var x=l[m],R=x.key,I=x.image,N=x.sourceSize,S=x.sourceX,U=x.sourceY,z=x.destinationSize,F=z+ke;b+F>w&&(d=Math.max(d,b),b=0,E+=g,g=F),O.push({key:R,image:I,sourceX:S,sourceY:U,sourceSize:N,destinationX:b,destinationY:E,destinationSize:z}),u[R]={x:b,y:E,size:z},b+=F,g=Math.max(g,F)}d=Math.max(d,b);var X=e.canvas;X.width=d,X.height=E+g;for(var H=0,Y=O.length;H<Y;H++){var A=O[H],B=A.image,n=A.sourceSize,r=A.sourceX,o=A.sourceY,v=A.destinationSize,s=A.destinationX,y=A.destinationY;e.drawImage(B,r,o,n,n,s,y,v,v)}return u}var Ie=function(){function e(){re(this,e),this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d",{willReadFrequently:!0})}return ne(e,[{key:"getCorrectionOffset",value:function(a,i){this.canvas.width=i,this.canvas.height=i,this.context.clearRect(0,0,i,i),this.context.drawImage(a,0,0,i,i);for(var l=this.context.getImageData(0,0,i,i).data,f=new Uint8ClampedArray(l.length/4),h=0;h<l.length;h++)f[h]=l[h*4+3];for(var p=0,_=0,c=0,w=0;w<i;w++)for(var O=0;O<i;O++){var b=f[w*i+O];c+=b,p+=b*O,_+=b*w}var E=p/c,g=_/c;return{x:E-i/2,y:g-i/2}}}]),e}(),J=function(e){he(t,e);function t(){var a,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return re(this,t),a=fe(this,t),L(G(a),"canvas",document.createElement("canvas")),L(G(a),"ctx",a.canvas.getContext("2d",{willReadFrequently:!0})),L(G(a),"corrector",new Ie),L(G(a),"imageStates",{}),L(G(a),"texture",a.ctx.getImageData(0,0,1,1)),L(G(a),"atlas",{}),a.options=M(M({},ve),i),a}return ne(t,[{key:"scheduleGenerateTexture",value:function(){var i=this;typeof this.frameId!="number"&&(this.frameId=window.setTimeout(function(){i.generateTexture(),i.frameId=void 0},Se))}},{key:"generateTexture",value:function(){this.atlas=Ce(this.ctx,this.imageStates),this.texture=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height),this.emit(t.NEW_TEXTURE_EVENT,{atlas:this.atlas,texture:this.texture})}},{key:"registerImage",value:function(){var a=ae(D().mark(function l(f){var h,p;return D().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!this.imageStates[f]){c.next=2;break}return c.abrupt("return");case 2:return this.imageStates[f]={status:"loading"},c.prev=3,h=this.options.size,c.next=7,Ne(f,{size:h.mode==="force"?h.value:void 0});case 7:p=c.sent,this.imageStates[f]=M({status:"ready",image:p},Ae(p,this.corrector,this.options)),this.scheduleGenerateTexture(),c.next=15;break;case 12:c.prev=12,c.t0=c.catch(3),this.imageStates[f]={status:"error"};case 15:case"end":return c.stop()}},l,this,[[3,12]])}));function i(l){return a.apply(this,arguments)}return i}()},{key:"getAtlas",value:function(){return this.atlas}},{key:"getTexture",value:function(){return this.texture}}]),t}(pe.EventEmitter);L(J,"NEW_TEXTURE_EVENT","newTexture");var ze=["drawHover","drawLabel","drawingMode","keepWithinCircle","padding","colorAttribute"],ge=WebGLRenderingContext,ce=ge.UNSIGNED_BYTE,K=ge.FLOAT,Me=M(M({},ve),{},{drawingMode:"background",keepWithinCircle:!0,drawLabel:void 0,drawHover:void 0,padding:0,colorAttribute:"color"}),Ge=["u_sizeRatio","u_correctionRatio","u_cameraAngle","u_percentagePadding","u_matrix","u_colorizeImages","u_keepWithinCircle","u_atlas"];function de(e){var t,a=M(M(M({},Me),e||{}),{},{drawLabel:void 0,drawHover:void 0}),i=a.drawHover,l=a.drawLabel,f=a.drawingMode,h=a.keepWithinCircle,p=a.padding,_=a.colorAttribute,c=xe(a,ze),w=new J(c);return t=function(O){he(b,O);function b(E,g,d){var u;return re(this,b),u=fe(this,b,[E,g,d]),u.textureManagerCallback=function(){G(u)&&(u.bindTexture&&(u.atlas=w.getAtlas(),u.textureImage=w.getTexture(),u.bindTexture(),u.latestRenderParams&&u.render(u.latestRenderParams)),d&&d.refresh&&d.refresh())},w.on(J.NEW_TEXTURE_EVENT,u.textureManagerCallback),u.atlas=w.getAtlas(),u.textureImage=w.getTexture(),u.texture=E.createTexture(),u.bindTexture(),u}return ne(b,[{key:"getDefinition",value:function(){return{VERTICES:3,VERTEX_SHADER_SOURCE:Pe,FRAGMENT_SHADER_SOURCE:Oe,METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:Ge,ATTRIBUTES:[{name:"a_position",size:2,type:K},{name:"a_size",size:1,type:K},{name:"a_color",size:4,type:ce,normalized:!0},{name:"a_id",size:4,type:ce,normalized:!0},{name:"a_texture",size:4,type:K}],CONSTANT_ATTRIBUTES:[{name:"a_angle",size:1,type:K}],CONSTANT_DATA:[[b.ANGLE_1],[b.ANGLE_2],[b.ANGLE_3]]}}},{key:"kill",value:function(){w.off(J.NEW_TEXTURE_EVENT,this.textureManagerCallback)}},{key:"bindTexture",value:function(){var g=this.normalProgram.gl;g.bindTexture(g.TEXTURE_2D,this.texture),g.texImage2D(g.TEXTURE_2D,0,g.RGBA,g.RGBA,g.UNSIGNED_BYTE,this.textureImage),g.generateMipmap(g.TEXTURE_2D)}},{key:"renderProgram",value:function(g,d){if(!d.isPicking){var u=d.gl;u.bindTexture(u.TEXTURE_2D,this.texture)}Q(W(b.prototype),"renderProgram",this).call(this,g,d)}},{key:"processVisibleItem",value:function(g,d,u){var m=this.array,C=me(u[_]),x=u.image,R=x?this.atlas[x]:void 0;if(typeof x=="string"&&!R&&w.registerImage(x),m[d++]=u.x,m[d++]=u.y,m[d++]=u.size,m[d++]=C,m[d++]=g,R){var I=this.textureImage,N=I.width,S=I.height;m[d++]=R.x/N,m[d++]=R.y/S,m[d++]=R.size/N,m[d++]=R.size/S}else m[d++]=0,m[d++]=0,m[d++]=0,m[d++]=0}},{key:"setUniforms",value:function(g,d){var u=d.gl,m=d.uniformLocations,C=m.u_sizeRatio,x=m.u_correctionRatio,R=m.u_matrix,I=m.u_atlas,N=m.u_colorizeImages,S=m.u_keepWithinCircle,U=m.u_cameraAngle,z=m.u_percentagePadding;this.latestRenderParams=g,u.uniform1f(x,g.correctionRatio),u.uniform1f(C,h?g.sizeRatio:g.sizeRatio/Math.SQRT2),u.uniform1f(U,g.cameraAngle),u.uniform1f(z,p),u.uniformMatrix3fv(R,!1,g.matrix),u.uniform1i(I,0),u.uniform1i(N,f==="color"?1:0),u.uniform1i(S,h?1:0)}}]),b}(ye),L(t,"ANGLE_1",0),L(t,"ANGLE_2",2*Math.PI/3),L(t,"ANGLE_3",4*Math.PI/3),L(t,"drawLabel",l),L(t,"drawHover",i),t}var De=de();de({keepWithinCircle:!1,size:{mode:"force",value:256},drawingMode:"color",correctCentering:!0});export{De as N};
