import{e as ye,f as xe,N as be}from"./style-Bs0cF8GC.js";function Z(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function _e(e){if(Array.isArray(e))return Z(e)}function we(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ee(e,t){if(e){if(typeof e=="string")return Z(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Z(e,t):void 0}}function Te(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(e){return _e(e)||we(e)||Ee(e)||Te()}function ae(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Oe(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function he(e){var t=Oe(e,"string");return typeof t=="symbol"?t:t+""}function Re(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,he(n.key),n)}}function oe(e,t,r){return t&&Re(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(e)}function ge(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ge=function(){return!!e})()}function M(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Se(e,t){if(t&&(typeof t=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return M(e)}function de(e,t,r){return t=B(t),Se(e,ge()?Reflect.construct(t,r||[],B(e).constructor):t.apply(e,r))}function Pe(e,t){for(;!{}.hasOwnProperty.call(e,t)&&(e=B(e))!==null;);return e}function J(){return J=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=Pe(e,t);if(n){var s=Object.getOwnPropertyDescriptor(n,t);return s.get?s.get.call(arguments.length<3?e:r):s.value}},J.apply(null,arguments)}function se(e,t,r,n){var s=J(B(e.prototype),t,r);return typeof s=="function"?function(d){return s.apply(r,d)}:s}function $(e,t){return $=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},$(e,t)}function ve(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$(e,t)}function k(e,t,r){return(t=he(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ce(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}function Ie(e,t){if(e==null)return{};var r,n,s=Ce(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)r=d[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ce(Object(r),!0).forEach(function(n){k(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ke(e){var t=e.texturesCount,r=`
precision highp float;

varying vec4 v_color;
varying vec2 v_diffVector;
varying float v_radius;
varying vec4 v_texture;
varying float v_textureIndex;

uniform sampler2D u_atlas[`.concat(t,`];
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
    float coef = u_keepWithinCircle ? 1.0 : `).concat(Math.SQRT2,`;
    vec2 coordinateInTexture = diffVector * vec2(paddingRatio, -paddingRatio) / v_radius / 2.0 * coef + vec2(0.5, 0.5);
    int index = int(v_textureIndex + 0.5); // +0.5 avoid rounding errors

    bool noTextureFound = false;
    vec4 texel;

    `).concat(ne(new Array(t)).map(function(n,s){return"if (index == ".concat(s,") texel = texture2D(u_atlas[").concat(s,"], (v_texture.xy + coordinateInTexture * v_texture.zw), -1.0);")}).join(`
    else `)+`else {
      texel = texture2D(u_atlas[0], (v_texture.xy + coordinateInTexture * v_texture.zw), -1.0);
      noTextureFound = true;
    }`,`

    if (noTextureFound) {
      color = v_color;
    } else {
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
`);return r}var Ae=`
attribute vec4 a_id;
attribute vec4 a_color;
attribute vec2 a_position;
attribute float a_size;
attribute float a_angle;
attribute vec4 a_texture;
attribute float a_textureIndex;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;

varying vec4 v_color;
varying vec2 v_diffVector;
varying float v_radius;
varying vec4 v_texture;
varying float v_textureIndex;

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
  v_textureIndex = a_textureIndex;
  v_texture = a_texture;
  #endif

  v_color.a *= bias;
}
`,Le=Ae;function F(){F=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,s=Object.defineProperty||function(o,a,i){o[a]=i.value},d=typeof Symbol=="function"?Symbol:{},f=d.iterator||"@@iterator",v=d.asyncIterator||"@@asyncIterator",m=d.toStringTag||"@@toStringTag";function h(o,a,i){return Object.defineProperty(o,a,{value:i,enumerable:!0,configurable:!0,writable:!0}),o[a]}try{h({},"")}catch{h=function(a,i,x){return a[i]=x}}function p(o,a,i,x){var l=a&&a.prototype instanceof c?a:c,_=Object.create(l.prototype),R=new D(x||[]);return s(_,"_invoke",{value:A(o,i,R)}),_}function S(o,a,i){try{return{type:"normal",arg:o.call(a,i)}}catch(x){return{type:"throw",arg:x}}}t.wrap=p;var I="suspendedStart",P="suspendedYield",T="executing",w="completed",E={};function c(){}function g(){}function u(){}var y={};h(y,f,function(){return this});var O=Object.getPrototypeOf,C=O&&O(O(W([])));C&&C!==r&&n.call(C,f)&&(y=C);var b=u.prototype=c.prototype=Object.create(y);function z(o){["next","throw","return"].forEach(function(a){h(o,a,function(i){return this._invoke(a,i)})})}function G(o,a){function i(l,_,R,L){var N=S(o[l],o,_);if(N.type!=="throw"){var Y=N.arg,q=Y.value;return q&&typeof q=="object"&&n.call(q,"__await")?a.resolve(q.__await).then(function(U){i("next",U,R,L)},function(U){i("throw",U,R,L)}):a.resolve(q).then(function(U){Y.value=U,R(Y)},function(U){return i("throw",U,R,L)})}L(N.arg)}var x;s(this,"_invoke",{value:function(l,_){function R(){return new a(function(L,N){i(l,_,L,N)})}return x=x?x.then(R,R):R()}})}function A(o,a,i){var x=I;return function(l,_){if(x===T)throw Error("Generator is already running");if(x===w){if(l==="throw")throw _;return{value:e,done:!0}}for(i.method=l,i.arg=_;;){var R=i.delegate;if(R){var L=V(R,i);if(L){if(L===E)continue;return L}}if(i.method==="next")i.sent=i._sent=i.arg;else if(i.method==="throw"){if(x===I)throw x=w,i.arg;i.dispatchException(i.arg)}else i.method==="return"&&i.abrupt("return",i.arg);x=T;var N=S(o,a,i);if(N.type==="normal"){if(x=i.done?w:P,N.arg===E)continue;return{value:N.arg,done:i.done}}N.type==="throw"&&(x=w,i.method="throw",i.arg=N.arg)}}}function V(o,a){var i=a.method,x=o.iterator[i];if(x===e)return a.delegate=null,i==="throw"&&o.iterator.return&&(a.method="return",a.arg=e,V(o,a),a.method==="throw")||i!=="return"&&(a.method="throw",a.arg=new TypeError("The iterator does not provide a '"+i+"' method")),E;var l=S(x,o.iterator,a.arg);if(l.type==="throw")return a.method="throw",a.arg=l.arg,a.delegate=null,E;var _=l.arg;return _?_.done?(a[o.resultName]=_.value,a.next=o.nextLoc,a.method!=="return"&&(a.method="next",a.arg=e),a.delegate=null,E):_:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,E)}function X(o){var a={tryLoc:o[0]};1 in o&&(a.catchLoc=o[1]),2 in o&&(a.finallyLoc=o[2],a.afterLoc=o[3]),this.tryEntries.push(a)}function H(o){var a=o.completion||{};a.type="normal",delete a.arg,o.completion=a}function D(o){this.tryEntries=[{tryLoc:"root"}],o.forEach(X,this),this.reset(!0)}function W(o){if(o||o===""){var a=o[f];if(a)return a.call(o);if(typeof o.next=="function")return o;if(!isNaN(o.length)){var i=-1,x=function l(){for(;++i<o.length;)if(n.call(o,i))return l.value=o[i],l.done=!1,l;return l.value=e,l.done=!0,l};return x.next=x}}throw new TypeError(typeof o+" is not iterable")}return g.prototype=u,s(b,"constructor",{value:u,configurable:!0}),s(u,"constructor",{value:g,configurable:!0}),g.displayName=h(u,m,"GeneratorFunction"),t.isGeneratorFunction=function(o){var a=typeof o=="function"&&o.constructor;return!!a&&(a===g||(a.displayName||a.name)==="GeneratorFunction")},t.mark=function(o){return Object.setPrototypeOf?Object.setPrototypeOf(o,u):(o.__proto__=u,h(o,m,"GeneratorFunction")),o.prototype=Object.create(b),o},t.awrap=function(o){return{__await:o}},z(G.prototype),h(G.prototype,v,function(){return this}),t.AsyncIterator=G,t.async=function(o,a,i,x,l){l===void 0&&(l=Promise);var _=new G(p(o,a,i,x),l);return t.isGeneratorFunction(a)?_:_.next().then(function(R){return R.done?R.value:_.next()})},z(b),h(b,m,"Generator"),h(b,f,function(){return this}),h(b,"toString",function(){return"[object Generator]"}),t.keys=function(o){var a=Object(o),i=[];for(var x in a)i.push(x);return i.reverse(),function l(){for(;i.length;){var _=i.pop();if(_ in a)return l.value=_,l.done=!1,l}return l.done=!0,l}},t.values=W,D.prototype={constructor:D,reset:function(o){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(H),!o)for(var a in this)a.charAt(0)==="t"&&n.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function(){this.done=!0;var o=this.tryEntries[0].completion;if(o.type==="throw")throw o.arg;return this.rval},dispatchException:function(o){if(this.done)throw o;var a=this;function i(N,Y){return _.type="throw",_.arg=o,a.next=N,Y&&(a.method="next",a.arg=e),!!Y}for(var x=this.tryEntries.length-1;x>=0;--x){var l=this.tryEntries[x],_=l.completion;if(l.tryLoc==="root")return i("end");if(l.tryLoc<=this.prev){var R=n.call(l,"catchLoc"),L=n.call(l,"finallyLoc");if(R&&L){if(this.prev<l.catchLoc)return i(l.catchLoc,!0);if(this.prev<l.finallyLoc)return i(l.finallyLoc)}else if(R){if(this.prev<l.catchLoc)return i(l.catchLoc,!0)}else{if(!L)throw Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return i(l.finallyLoc)}}}},abrupt:function(o,a){for(var i=this.tryEntries.length-1;i>=0;--i){var x=this.tryEntries[i];if(x.tryLoc<=this.prev&&n.call(x,"finallyLoc")&&this.prev<x.finallyLoc){var l=x;break}}l&&(o==="break"||o==="continue")&&l.tryLoc<=a&&a<=l.finallyLoc&&(l=null);var _=l?l.completion:{};return _.type=o,_.arg=a,l?(this.method="next",this.next=l.finallyLoc,E):this.complete(_)},complete:function(o,a){if(o.type==="throw")throw o.arg;return o.type==="break"||o.type==="continue"?this.next=o.arg:o.type==="return"?(this.rval=this.arg=o.arg,this.method="return",this.next="end"):o.type==="normal"&&a&&(this.next=a),E},finish:function(o){for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a];if(i.finallyLoc===o)return this.complete(i.completion,i.afterLoc),H(i),E}},catch:function(o){for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a];if(i.tryLoc===o){var x=i.completion;if(x.type==="throw"){var l=x.arg;H(i)}return l}}throw Error("illegal catch attempt")},delegateYield:function(o,a,i){return this.delegate={iterator:W(o),resultName:a,nextLoc:i},this.method==="next"&&(this.arg=e),E}},t}function le(e,t,r,n,s,d,f){try{var v=e[d](f),m=v.value}catch(h){return void r(h)}v.done?t(m):Promise.resolve(m).then(n,s)}function ie(e){return function(){var t=this,r=arguments;return new Promise(function(n,s){var d=e.apply(t,r);function f(m){le(d,n,s,f,v,"next",m)}function v(m){le(d,n,s,f,v,"throw",m)}f(void 0)})}}var ue={size:{mode:"max",value:512},objectFit:"cover",correctCentering:!1,maxTextureSize:4096,debounceTimeout:500,crossOrigin:"anonymous"},Ne=1;function ee(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.crossOrigin;return new Promise(function(n,s){var d=new Image;d.addEventListener("load",function(){n(d)},{once:!0}),d.addEventListener("error",function(f){s(f.error)},{once:!0}),r&&d.setAttribute("crossOrigin",r),d.src=e})}function je(e){return te.apply(this,arguments)}function te(){return te=ie(F().mark(function e(t){var r,n,s,d,f,v,m,h,p,S,I,P,T,w=arguments;return F().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(r=w.length>1&&w[1]!==void 0?w[1]:{},n=r.size,s=r.crossOrigin,s!=="use-credentials"){c.next=7;break}return c.next=4,fetch(t,{credentials:"include"});case 4:d=c.sent,c.next=10;break;case 7:return c.next=9,fetch(t);case 9:d=c.sent;case 10:return c.next=12,d.text();case 12:if(f=c.sent,v=new DOMParser().parseFromString(f,"image/svg+xml"),m=v.documentElement,h=m.getAttribute("width"),p=m.getAttribute("height"),!(!h||!p)){c.next=19;break}throw new Error("loadSVGImage: cannot use `size` if target SVG has no definite dimensions.");case 19:return typeof n=="number"&&(m.setAttribute("width",""+n),m.setAttribute("height",""+n)),S=new XMLSerializer().serializeToString(v),I=new Blob([S],{type:"image/svg+xml"}),P=URL.createObjectURL(I),T=ee(P),T.finally(function(){return URL.revokeObjectURL(P)}),c.abrupt("return",T);case 26:case"end":return c.stop()}},e)})),te.apply(this,arguments)}function ze(e){return re.apply(this,arguments)}function re(){return re=ie(F().mark(function e(t){var r,n,s,d,f,v,m=arguments;return F().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(n=m.length>1&&m[1]!==void 0?m[1]:{},s=n.size,d=n.crossOrigin,f=((r=t.split(/[#?]/)[0].split(".").pop())===null||r===void 0?void 0:r.trim().toLowerCase())==="svg",!(f&&s)){p.next=16;break}return p.prev=3,p.next=6,je(t,{size:s,crossOrigin:d});case 6:v=p.sent,p.next=14;break;case 9:return p.prev=9,p.t0=p.catch(3),p.next=13,ee(t,{crossOrigin:d});case 13:v=p.sent;case 14:p.next=19;break;case 16:return p.next=18,ee(t,{crossOrigin:d});case 18:v=p.sent;case 19:return p.abrupt("return",v);case 20:case"end":return p.stop()}},e,null,[[3,9]])})),re.apply(this,arguments)}function Ge(e,t,r){var n=r.objectFit,s=r.size,d=r.correctCentering,f=n==="contain"?Math.max(e.width,e.height):Math.min(e.width,e.height),v=s.mode==="auto"?f:s.mode==="force"?s.value:Math.min(s.value,f),m=(e.width-f)/2,h=(e.height-f)/2;if(d){var p=t.getCorrectionOffset(e,f);m=p.x,h=p.y}return{sourceX:m,sourceY:h,sourceSize:f,destinationSize:v}}function Me(e,t,r){for(var n=t.canvas,s=n.width,d=n.height,f=[],v=r.x,m=r.y,h=r.rowHeight,p=r.maxRowWidth,S={},I=0,P=e.length;I<P;I++){var T=e[I],w=T.key,E=T.image,c=T.sourceSize,g=T.sourceX,u=T.sourceY,y=T.destinationSize,O=y+Ne;m+O>d||v+O>s&&m+O+h>d||(v+O>s&&(p=Math.max(p,v),v=0,m+=h,h=O),f.push({key:w,image:E,sourceX:g,sourceY:u,sourceSize:c,destinationX:v,destinationY:m,destinationSize:y}),S[w]={x:v,y:m,size:y},v+=O,h=Math.max(h,O))}p=Math.max(p,v);for(var C=p,b=m+h,z=0,G=f.length;z<G;z++){var A=f[z],V=A.image,X=A.sourceSize,H=A.sourceX,D=A.sourceY,W=A.destinationSize,o=A.destinationX,a=A.destinationY;t.drawImage(V,H,D,X,X,o,a,W,W)}return{atlas:S,texture:t.getImageData(0,0,C,b),cursor:{x:v,y:m,rowHeight:h,maxRowWidth:p}}}function De(e,t,r){var n=e.atlas,s=e.textures,d=e.cursor,f={atlas:j({},n),textures:ne(s.slice(0,-1)),cursor:j({},d)},v=[];for(var m in t){var h,p=t[m];if(p.status==="ready"){var S=(h=n[m])===null||h===void 0?void 0:h.textureIndex;typeof S!="number"&&v.push(j({key:m},p))}}for(var I=function(){var T=Me(v,r,f.cursor),w=T.atlas,E=T.texture,c=T.cursor;f.cursor=c;var g=[];v.forEach(function(u){w[u.key]?f.atlas[u.key]=j(j({},w[u.key]),{},{textureIndex:f.textures.length}):g.push(u)}),f.textures.push(E),v=g,v.length&&(f.cursor={x:0,y:0,rowHeight:0,maxRowWidth:0},r.clearRect(0,0,r.canvas.width,r.canvas.height))};v.length;)I();return f}var Ue=function(){function e(){ae(this,e),this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d",{willReadFrequently:!0})}return oe(e,[{key:"getCorrectionOffset",value:function(r,n){this.canvas.width=n,this.canvas.height=n,this.context.clearRect(0,0,n,n),this.context.drawImage(r,0,0,n,n);for(var s=this.context.getImageData(0,0,n,n).data,d=new Uint8ClampedArray(s.length/4),f=0;f<s.length;f++)d[f]=s[f*4+3];for(var v=0,m=0,h=0,p=0;p<n;p++)for(var S=0;S<n;S++){var I=d[p*n+S];h+=I,v+=I*S,m+=I*p}var P=v/h,T=m/h;return{x:P-n/2,y:T-n/2}}}]),e}(),Q=function(e){ve(t,e);function t(){var r,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ae(this,t),r=de(this,t),k(M(r),"canvas",document.createElement("canvas")),k(M(r),"ctx",r.canvas.getContext("2d",{willReadFrequently:!0})),k(M(r),"corrector",new Ue),k(M(r),"imageStates",{}),k(M(r),"textures",[r.ctx.getImageData(0,0,1,1)]),k(M(r),"lastTextureCursor",{x:0,y:0,rowHeight:0,maxRowWidth:0}),k(M(r),"atlas",{}),r.options=j(j({},ue),n),r.canvas.width=r.options.maxTextureSize,r.canvas.height=r.options.maxTextureSize,r}return oe(t,[{key:"scheduleGenerateTexture",value:function(){var n=this;typeof this.frameId!="number"&&(typeof this.options.debounceTimeout=="number"?this.frameId=window.setTimeout(function(){n.generateTextures(),n.frameId=void 0},this.options.debounceTimeout):this.generateTextures())}},{key:"generateTextures",value:function(){var n=De({atlas:this.atlas,textures:this.textures,cursor:this.lastTextureCursor},this.imageStates,this.ctx),s=n.atlas,d=n.textures,f=n.cursor;this.atlas=s,this.textures=d,this.lastTextureCursor=f,this.emit(t.NEW_TEXTURE_EVENT,{atlas:s,textures:d})}},{key:"registerImage",value:function(){var r=ie(F().mark(function s(d){var f,v;return F().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(!this.imageStates[d]){h.next=2;break}return h.abrupt("return");case 2:return this.imageStates[d]={status:"loading"},h.prev=3,f=this.options.size,h.next=7,ze(d,{size:f.mode==="force"?f.value:void 0,crossOrigin:this.options.crossOrigin||void 0});case 7:v=h.sent,this.imageStates[d]=j({status:"ready",image:v},Ge(v,this.corrector,this.options)),this.scheduleGenerateTexture(),h.next=15;break;case 12:h.prev=12,h.t0=h.catch(3),this.imageStates[d]={status:"error"};case 15:case"end":return h.stop()}},s,this,[[3,12]])}));function n(s){return r.apply(this,arguments)}return n}()},{key:"getAtlas",value:function(){return this.atlas}},{key:"getTextures",value:function(){return this.textures}}]),t}(ye.EventEmitter);k(Q,"NEW_TEXTURE_EVENT","newTexture");var Fe=["drawHover","drawLabel","drawingMode","keepWithinCircle","padding","colorAttribute","imageAttribute"],pe=WebGLRenderingContext,fe=pe.UNSIGNED_BYTE,K=pe.FLOAT,Ve=j(j({},ue),{},{drawingMode:"background",keepWithinCircle:!0,drawLabel:void 0,drawHover:void 0,padding:0,colorAttribute:"color",imageAttribute:"image"}),Xe=["u_sizeRatio","u_correctionRatio","u_cameraAngle","u_percentagePadding","u_matrix","u_colorizeImages","u_keepWithinCircle","u_atlas"];function me(e){var t,r=document.createElement("canvas").getContext("webgl"),n=Math.min(r.getParameter(r.MAX_TEXTURE_SIZE),ue.maxTextureSize);r.canvas.remove();var s=j(j(j({},Ve),{maxTextureSize:n}),e||{}),d=s.drawHover,f=s.drawLabel,v=s.drawingMode,m=s.keepWithinCircle,h=s.padding,p=s.colorAttribute,S=s.imageAttribute,I=Ie(s,Fe),P=new Q(I);return t=function(T){ve(w,T);function w(E,c,g){var u;return ae(this,w),u=de(this,w,[E,c,g]),k(M(u),"drawLabel",f),k(M(u),"drawHover",d),k(M(u),"textureManagerCallback",null),u.textureManagerCallback=function(y){var O=y.atlas,C=y.textures,b=C.length!==u.textures.length;u.atlas=O,u.textureImages=C,b&&u.upgradeShaders(),u.bindTextures(),u.latestRenderParams&&u.render(u.latestRenderParams),u.renderer&&u.renderer.refresh&&u.renderer.refresh()},P.on(Q.NEW_TEXTURE_EVENT,u.textureManagerCallback),u.atlas=P.getAtlas(),u.textureImages=P.getTextures(),u.textures=u.textureImages.map(function(){return E.createTexture()}),u.bindTextures(),u}return oe(w,[{key:"getDefinition",value:function(){return{VERTICES:3,VERTEX_SHADER_SOURCE:Le,FRAGMENT_SHADER_SOURCE:ke({texturesCount:P.getTextures().length}),METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:Xe,ATTRIBUTES:[{name:"a_position",size:2,type:K},{name:"a_size",size:1,type:K},{name:"a_color",size:4,type:fe,normalized:!0},{name:"a_id",size:4,type:fe,normalized:!0},{name:"a_texture",size:4,type:K},{name:"a_textureIndex",size:1,type:K}],CONSTANT_ATTRIBUTES:[{name:"a_angle",size:1,type:K}],CONSTANT_DATA:[[w.ANGLE_1],[w.ANGLE_2],[w.ANGLE_3]]}}},{key:"upgradeShaders",value:function(){var c=this.getDefinition(),g=this.normalProgram,u=g.program,y=g.buffer,O=g.vertexShader,C=g.fragmentShader,b=g.gl;b.deleteProgram(u),b.deleteBuffer(y),b.deleteShader(O),b.deleteShader(C),this.normalProgram=this.getProgramInfo("normal",b,c.VERTEX_SHADER_SOURCE,c.FRAGMENT_SHADER_SOURCE,null)}},{key:"kill",value:function(){var c,g=(c=this.normalProgram)===null||c===void 0?void 0:c.gl;if(g)for(var u=0;u<this.textures.length;u++)g.deleteTexture(this.textures[u]);this.textureManagerCallback&&(P.off(Q.NEW_TEXTURE_EVENT,this.textureManagerCallback),this.textureManagerCallback=null),se(w,"kill",this)([])}},{key:"bindTextures",value:function(){for(var c=this.normalProgram.gl,g=0;g<this.textureImages.length;g++){if(g>=this.textures.length){var u=c.createTexture();u&&this.textures.push(u)}c.activeTexture(c.TEXTURE0+g),c.bindTexture(c.TEXTURE_2D,this.textures[g]),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,this.textureImages[g]),c.generateMipmap(c.TEXTURE_2D)}}},{key:"renderProgram",value:function(c,g){if(!g.isPicking)for(var u=g.gl,y=0;y<this.textureImages.length;y++)u.activeTexture(u.TEXTURE0+y),u.bindTexture(u.TEXTURE_2D,this.textures[y]);se(w,"renderProgram",this)([c,g])}},{key:"processVisibleItem",value:function(c,g,u){var y=this.array,O=xe(u[p]),C=u[S],b=C?this.atlas[C]:void 0;if(typeof C=="string"&&!b&&P.registerImage(C),y[g++]=u.x,y[g++]=u.y,y[g++]=u.size,y[g++]=O,y[g++]=c,b&&typeof b.textureIndex=="number"){var z=this.textureImages[b.textureIndex],G=z.width,A=z.height;y[g++]=b.x/G,y[g++]=b.y/A,y[g++]=b.size/G,y[g++]=b.size/A,y[g++]=b.textureIndex}else y[g++]=0,y[g++]=0,y[g++]=0,y[g++]=0,y[g++]=0}},{key:"setUniforms",value:function(c,g){var u=g.gl,y=g.uniformLocations,O=y.u_sizeRatio,C=y.u_correctionRatio,b=y.u_matrix,z=y.u_atlas,G=y.u_colorizeImages,A=y.u_keepWithinCircle,V=y.u_cameraAngle,X=y.u_percentagePadding;this.latestRenderParams=c,u.uniform1f(C,c.correctionRatio),u.uniform1f(O,m?c.sizeRatio:c.sizeRatio/Math.SQRT2),u.uniform1f(V,c.cameraAngle),u.uniform1f(X,h),u.uniformMatrix3fv(b,!1,c.matrix),u.uniform1iv(z,ne(new Array(this.textureImages.length)).map(function(H,D){return D})),u.uniform1i(G,v==="color"?1:0),u.uniform1i(A,m?1:0)}}]),w}(be),k(t,"ANGLE_1",0),k(t,"ANGLE_2",2*Math.PI/3),k(t,"ANGLE_3",4*Math.PI/3),k(t,"textureManager",P),t}var We=me();me({keepWithinCircle:!1,size:{mode:"force",value:256},drawingMode:"color",correctCentering:!0});export{We as N};
