import{g as bi,r as q,R as ae}from"./index-nBX9XC1j.js";var wt={exports:{}},ra;function yi(){if(ra)return wt.exports;ra=1;var a=typeof Reflect=="object"?Reflect:null,n=a&&typeof a.apply=="function"?a.apply:function(x,T,w){return Function.prototype.apply.call(x,T,w)},t;a&&typeof a.ownKeys=="function"?t=a.ownKeys:Object.getOwnPropertySymbols?t=function(x){return Object.getOwnPropertyNames(x).concat(Object.getOwnPropertySymbols(x))}:t=function(x){return Object.getOwnPropertyNames(x)};function e(m){console&&console.warn&&console.warn(m)}var r=Number.isNaN||function(x){return x!==x};function i(){i.init.call(this)}wt.exports=i,wt.exports.once=f,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._eventsCount=0,i.prototype._maxListeners=void 0;var o=10;function s(m){if(typeof m!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof m)}Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return o},set:function(m){if(typeof m!="number"||m<0||r(m))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+m+".");o=m}}),i.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},i.prototype.setMaxListeners=function(x){if(typeof x!="number"||x<0||r(x))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+x+".");return this._maxListeners=x,this};function l(m){return m._maxListeners===void 0?i.defaultMaxListeners:m._maxListeners}i.prototype.getMaxListeners=function(){return l(this)},i.prototype.emit=function(x){for(var T=[],w=1;w<arguments.length;w++)T.push(arguments[w]);var S=x==="error",A=this._events;if(A!==void 0)S=S&&A.error===void 0;else if(!S)return!1;if(S){var R;if(T.length>0&&(R=T[0]),R instanceof Error)throw R;var k=new Error("Unhandled error."+(R?" ("+R.message+")":""));throw k.context=R,k}var D=A[x];if(D===void 0)return!1;if(typeof D=="function")n(D,this,T);else for(var F=D.length,L=p(D,F),w=0;w<F;++w)n(L[w],this,T);return!0};function u(m,x,T,w){var S,A,R;if(s(T),A=m._events,A===void 0?(A=m._events=Object.create(null),m._eventsCount=0):(A.newListener!==void 0&&(m.emit("newListener",x,T.listener?T.listener:T),A=m._events),R=A[x]),R===void 0)R=A[x]=T,++m._eventsCount;else if(typeof R=="function"?R=A[x]=w?[T,R]:[R,T]:w?R.unshift(T):R.push(T),S=l(m),S>0&&R.length>S&&!R.warned){R.warned=!0;var k=new Error("Possible EventEmitter memory leak detected. "+R.length+" "+String(x)+" listeners added. Use emitter.setMaxListeners() to increase limit");k.name="MaxListenersExceededWarning",k.emitter=m,k.type=x,k.count=R.length,e(k)}return m}i.prototype.addListener=function(x,T){return u(this,x,T,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(x,T){return u(this,x,T,!0)};function d(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function h(m,x,T){var w={fired:!1,wrapFn:void 0,target:m,type:x,listener:T},S=d.bind(w);return S.listener=T,w.wrapFn=S,S}i.prototype.once=function(x,T){return s(T),this.on(x,h(this,x,T)),this},i.prototype.prependOnceListener=function(x,T){return s(T),this.prependListener(x,h(this,x,T)),this},i.prototype.removeListener=function(x,T){var w,S,A,R,k;if(s(T),S=this._events,S===void 0)return this;if(w=S[x],w===void 0)return this;if(w===T||w.listener===T)--this._eventsCount===0?this._events=Object.create(null):(delete S[x],S.removeListener&&this.emit("removeListener",x,w.listener||T));else if(typeof w!="function"){for(A=-1,R=w.length-1;R>=0;R--)if(w[R]===T||w[R].listener===T){k=w[R].listener,A=R;break}if(A<0)return this;A===0?w.shift():y(w,A),w.length===1&&(S[x]=w[0]),S.removeListener!==void 0&&this.emit("removeListener",x,k||T)}return this},i.prototype.off=i.prototype.removeListener,i.prototype.removeAllListeners=function(x){var T,w,S;if(w=this._events,w===void 0)return this;if(w.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):w[x]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete w[x]),this;if(arguments.length===0){var A=Object.keys(w),R;for(S=0;S<A.length;++S)R=A[S],R!=="removeListener"&&this.removeAllListeners(R);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(T=w[x],typeof T=="function")this.removeListener(x,T);else if(T!==void 0)for(S=T.length-1;S>=0;S--)this.removeListener(x,T[S]);return this};function c(m,x,T){var w=m._events;if(w===void 0)return[];var S=w[x];return S===void 0?[]:typeof S=="function"?T?[S.listener||S]:[S]:T?v(S):p(S,S.length)}i.prototype.listeners=function(x){return c(this,x,!0)},i.prototype.rawListeners=function(x){return c(this,x,!1)},i.listenerCount=function(m,x){return typeof m.listenerCount=="function"?m.listenerCount(x):g.call(m,x)},i.prototype.listenerCount=g;function g(m){var x=this._events;if(x!==void 0){var T=x[m];if(typeof T=="function")return 1;if(T!==void 0)return T.length}return 0}i.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]};function p(m,x){for(var T=new Array(x),w=0;w<x;++w)T[w]=m[w];return T}function y(m,x){for(;x+1<m.length;x++)m[x]=m[x+1];m.pop()}function v(m){for(var x=new Array(m.length),T=0;T<x.length;++T)x[T]=m[T].listener||m[T];return x}function f(m,x){return new Promise(function(T,w){function S(R){m.removeListener(x,A),w(R)}function A(){typeof m.removeListener=="function"&&m.removeListener("error",S),T([].slice.call(arguments))}_(m,x,A,{once:!0}),x!=="error"&&b(m,S,{once:!0})})}function b(m,x,T){typeof m.on=="function"&&_(m,"error",x,T)}function _(m,x,T,w){if(typeof m.on=="function")w.once?m.once(x,T):m.on(x,T);else if(typeof m.addEventListener=="function")m.addEventListener(x,function S(A){w.once&&m.removeEventListener(x,S),T(A)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof m)}return wt.exports}var Fn=yi();function xi(){const a=arguments[0];for(let n=1,t=arguments.length;n<t;n++)if(arguments[n])for(const e in arguments[n])a[e]=arguments[n][e];return a}let re=xi;typeof Object.assign=="function"&&(re=Object.assign);function ve(a,n,t,e){const r=a._nodes.get(n);let i=null;return r&&(e==="mixed"?i=r.out&&r.out[t]||r.undirected&&r.undirected[t]:e==="directed"?i=r.out&&r.out[t]:i=r.undirected&&r.undirected[t]),i}function se(a){return typeof a=="object"&&a!==null}function dr(a){let n;for(n in a)return!1;return!0}function ge(a,n,t){Object.defineProperty(a,n,{enumerable:!1,configurable:!1,writable:!0,value:t})}function ye(a,n,t){const e={enumerable:!0,configurable:!0};typeof t=="function"?e.get=t:(e.value=t,e.writable=!1),Object.defineProperty(a,n,e)}function ia(a){return!(!se(a)||a.attributes&&!Array.isArray(a.attributes))}function _i(){let a=Math.floor(Math.random()*256)&255;return()=>a++}function we(){const a=arguments;let n=null,t=-1;return{[Symbol.iterator](){return this},next(){let e=null;do{if(n===null){if(t++,t>=a.length)return{done:!0};n=a[t][Symbol.iterator]()}if(e=n.next(),e.done){n=null;continue}break}while(!0);return e}}}function Je(){return{[Symbol.iterator](){return this},next(){return{done:!0}}}}class In extends Error{constructor(n){super(),this.name="GraphError",this.message=n}}class O extends In{constructor(n){super(n),this.name="InvalidArgumentsGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,O.prototype.constructor)}}class B extends In{constructor(n){super(n),this.name="NotFoundGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,B.prototype.constructor)}}class V extends In{constructor(n){super(n),this.name="UsageGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,V.prototype.constructor)}}function hr(a,n){this.key=a,this.attributes=n,this.clear()}hr.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.undirectedDegree=0,this.undirectedLoops=0,this.directedLoops=0,this.in={},this.out={},this.undirected={}};function cr(a,n){this.key=a,this.attributes=n,this.clear()}cr.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.directedLoops=0,this.in={},this.out={}};function fr(a,n){this.key=a,this.attributes=n,this.clear()}fr.prototype.clear=function(){this.undirectedDegree=0,this.undirectedLoops=0,this.undirected={}};function et(a,n,t,e,r){this.key=n,this.attributes=r,this.undirected=a,this.source=t,this.target=e}et.prototype.attach=function(){let a="out",n="in";this.undirected&&(a=n="undirected");const t=this.source.key,e=this.target.key;this.source[a][e]=this,!(this.undirected&&t===e)&&(this.target[n][t]=this)};et.prototype.attachMulti=function(){let a="out",n="in";const t=this.source.key,e=this.target.key;this.undirected&&(a=n="undirected");const r=this.source[a],i=r[e];if(typeof i>"u"){r[e]=this,this.undirected&&t===e||(this.target[n][t]=this);return}i.previous=this,this.next=i,r[e]=this,this.target[n][t]=this};et.prototype.detach=function(){const a=this.source.key,n=this.target.key;let t="out",e="in";this.undirected&&(t=e="undirected"),delete this.source[t][n],delete this.target[e][a]};et.prototype.detachMulti=function(){const a=this.source.key,n=this.target.key;let t="out",e="in";this.undirected&&(t=e="undirected"),this.previous===void 0?this.next===void 0?(delete this.source[t][n],delete this.target[e][a]):(this.next.previous=void 0,this.source[t][n]=this.next,this.target[e][a]=this.next):(this.previous.next=this.next,this.next!==void 0&&(this.next.previous=this.previous))};const gr=0,pr=1,Ti=2,vr=3;function Ae(a,n,t,e,r,i,o){let s,l,u,d;if(e=""+e,t===gr){if(s=a._nodes.get(e),!s)throw new B(`Graph.${n}: could not find the "${e}" node in the graph.`);u=r,d=i}else if(t===vr){if(r=""+r,l=a._edges.get(r),!l)throw new B(`Graph.${n}: could not find the "${r}" edge in the graph.`);const h=l.source.key,c=l.target.key;if(e===h)s=l.target;else if(e===c)s=l.source;else throw new B(`Graph.${n}: the "${e}" node is not attached to the "${r}" edge (${h}, ${c}).`);u=i,d=o}else{if(l=a._edges.get(e),!l)throw new B(`Graph.${n}: could not find the "${e}" edge in the graph.`);t===pr?s=l.source:s=l.target,u=r,d=i}return[s,u,d]}function Si(a,n,t){a.prototype[n]=function(e,r,i){const[o,s]=Ae(this,n,t,e,r,i);return o.attributes[s]}}function Ei(a,n,t){a.prototype[n]=function(e,r){const[i]=Ae(this,n,t,e,r);return i.attributes}}function wi(a,n,t){a.prototype[n]=function(e,r,i){const[o,s]=Ae(this,n,t,e,r,i);return o.attributes.hasOwnProperty(s)}}function Ai(a,n,t){a.prototype[n]=function(e,r,i,o){const[s,l,u]=Ae(this,n,t,e,r,i,o);return s.attributes[l]=u,this.emit("nodeAttributesUpdated",{key:s.key,type:"set",attributes:s.attributes,name:l}),this}}function Ri(a,n,t){a.prototype[n]=function(e,r,i,o){const[s,l,u]=Ae(this,n,t,e,r,i,o);if(typeof u!="function")throw new O(`Graph.${n}: updater should be a function.`);const d=s.attributes,h=u(d[l]);return d[l]=h,this.emit("nodeAttributesUpdated",{key:s.key,type:"set",attributes:s.attributes,name:l}),this}}function Di(a,n,t){a.prototype[n]=function(e,r,i){const[o,s]=Ae(this,n,t,e,r,i);return delete o.attributes[s],this.emit("nodeAttributesUpdated",{key:o.key,type:"remove",attributes:o.attributes,name:s}),this}}function Ci(a,n,t){a.prototype[n]=function(e,r,i){const[o,s]=Ae(this,n,t,e,r,i);if(!se(s))throw new O(`Graph.${n}: provided attributes are not a plain object.`);return o.attributes=s,this.emit("nodeAttributesUpdated",{key:o.key,type:"replace",attributes:o.attributes}),this}}function Li(a,n,t){a.prototype[n]=function(e,r,i){const[o,s]=Ae(this,n,t,e,r,i);if(!se(s))throw new O(`Graph.${n}: provided attributes are not a plain object.`);return re(o.attributes,s),this.emit("nodeAttributesUpdated",{key:o.key,type:"merge",attributes:o.attributes,data:s}),this}}function ki(a,n,t){a.prototype[n]=function(e,r,i){const[o,s]=Ae(this,n,t,e,r,i);if(typeof s!="function")throw new O(`Graph.${n}: provided updater is not a function.`);return o.attributes=s(o.attributes),this.emit("nodeAttributesUpdated",{key:o.key,type:"update",attributes:o.attributes}),this}}const Pi=[{name:a=>`get${a}Attribute`,attacher:Si},{name:a=>`get${a}Attributes`,attacher:Ei},{name:a=>`has${a}Attribute`,attacher:wi},{name:a=>`set${a}Attribute`,attacher:Ai},{name:a=>`update${a}Attribute`,attacher:Ri},{name:a=>`remove${a}Attribute`,attacher:Di},{name:a=>`replace${a}Attributes`,attacher:Ci},{name:a=>`merge${a}Attributes`,attacher:Li},{name:a=>`update${a}Attributes`,attacher:ki}];function Fi(a){Pi.forEach(function({name:n,attacher:t}){t(a,n("Node"),gr),t(a,n("Source"),pr),t(a,n("Target"),Ti),t(a,n("Opposite"),vr)})}function Ii(a,n,t){a.prototype[n]=function(e,r){let i;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new V(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new V(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+e,s=""+r;if(r=arguments[2],i=ve(this,o,s,t),!i)throw new B(`Graph.${n}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(t!=="mixed")throw new V(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=""+e,i=this._edges.get(e),!i)throw new B(`Graph.${n}: could not find the "${e}" edge in the graph.`)}return i.attributes[r]}}function Gi(a,n,t){a.prototype[n]=function(e){let r;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new V(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>1){if(this.multi)throw new V(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const i=""+e,o=""+arguments[1];if(r=ve(this,i,o,t),!r)throw new B(`Graph.${n}: could not find an edge for the given path ("${i}" - "${o}").`)}else{if(t!=="mixed")throw new V(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=""+e,r=this._edges.get(e),!r)throw new B(`Graph.${n}: could not find the "${e}" edge in the graph.`)}return r.attributes}}function Ni(a,n,t){a.prototype[n]=function(e,r){let i;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new V(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new V(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+e,s=""+r;if(r=arguments[2],i=ve(this,o,s,t),!i)throw new B(`Graph.${n}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(t!=="mixed")throw new V(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=""+e,i=this._edges.get(e),!i)throw new B(`Graph.${n}: could not find the "${e}" edge in the graph.`)}return i.attributes.hasOwnProperty(r)}}function zi(a,n,t){a.prototype[n]=function(e,r,i){let o;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new V(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new V(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const s=""+e,l=""+r;if(r=arguments[2],i=arguments[3],o=ve(this,s,l,t),!o)throw new B(`Graph.${n}: could not find an edge for the given path ("${s}" - "${l}").`)}else{if(t!=="mixed")throw new V(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=""+e,o=this._edges.get(e),!o)throw new B(`Graph.${n}: could not find the "${e}" edge in the graph.`)}return o.attributes[r]=i,this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:r}),this}}function Mi(a,n,t){a.prototype[n]=function(e,r,i){let o;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new V(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new V(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const s=""+e,l=""+r;if(r=arguments[2],i=arguments[3],o=ve(this,s,l,t),!o)throw new B(`Graph.${n}: could not find an edge for the given path ("${s}" - "${l}").`)}else{if(t!=="mixed")throw new V(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=""+e,o=this._edges.get(e),!o)throw new B(`Graph.${n}: could not find the "${e}" edge in the graph.`)}if(typeof i!="function")throw new O(`Graph.${n}: updater should be a function.`);return o.attributes[r]=i(o.attributes[r]),this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:r}),this}}function Bi(a,n,t){a.prototype[n]=function(e,r){let i;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new V(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new V(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+e,s=""+r;if(r=arguments[2],i=ve(this,o,s,t),!i)throw new B(`Graph.${n}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(t!=="mixed")throw new V(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=""+e,i=this._edges.get(e),!i)throw new B(`Graph.${n}: could not find the "${e}" edge in the graph.`)}return delete i.attributes[r],this.emit("edgeAttributesUpdated",{key:i.key,type:"remove",attributes:i.attributes,name:r}),this}}function Wi(a,n,t){a.prototype[n]=function(e,r){let i;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new V(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new V(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+e,s=""+r;if(r=arguments[2],i=ve(this,o,s,t),!i)throw new B(`Graph.${n}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(t!=="mixed")throw new V(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=""+e,i=this._edges.get(e),!i)throw new B(`Graph.${n}: could not find the "${e}" edge in the graph.`)}if(!se(r))throw new O(`Graph.${n}: provided attributes are not a plain object.`);return i.attributes=r,this.emit("edgeAttributesUpdated",{key:i.key,type:"replace",attributes:i.attributes}),this}}function Oi(a,n,t){a.prototype[n]=function(e,r){let i;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new V(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new V(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+e,s=""+r;if(r=arguments[2],i=ve(this,o,s,t),!i)throw new B(`Graph.${n}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(t!=="mixed")throw new V(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=""+e,i=this._edges.get(e),!i)throw new B(`Graph.${n}: could not find the "${e}" edge in the graph.`)}if(!se(r))throw new O(`Graph.${n}: provided attributes are not a plain object.`);return re(i.attributes,r),this.emit("edgeAttributesUpdated",{key:i.key,type:"merge",attributes:i.attributes,data:r}),this}}function Ui(a,n,t){a.prototype[n]=function(e,r){let i;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new V(`Graph.${n}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new V(`Graph.${n}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+e,s=""+r;if(r=arguments[2],i=ve(this,o,s,t),!i)throw new B(`Graph.${n}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(t!=="mixed")throw new V(`Graph.${n}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=""+e,i=this._edges.get(e),!i)throw new B(`Graph.${n}: could not find the "${e}" edge in the graph.`)}if(typeof r!="function")throw new O(`Graph.${n}: provided updater is not a function.`);return i.attributes=r(i.attributes),this.emit("edgeAttributesUpdated",{key:i.key,type:"update",attributes:i.attributes}),this}}const Hi=[{name:a=>`get${a}Attribute`,attacher:Ii},{name:a=>`get${a}Attributes`,attacher:Gi},{name:a=>`has${a}Attribute`,attacher:Ni},{name:a=>`set${a}Attribute`,attacher:zi},{name:a=>`update${a}Attribute`,attacher:Mi},{name:a=>`remove${a}Attribute`,attacher:Bi},{name:a=>`replace${a}Attributes`,attacher:Wi},{name:a=>`merge${a}Attributes`,attacher:Oi},{name:a=>`update${a}Attributes`,attacher:Ui}];function $i(a){Hi.forEach(function({name:n,attacher:t}){t(a,n("Edge"),"mixed"),t(a,n("DirectedEdge"),"directed"),t(a,n("UndirectedEdge"),"undirected")})}const Vi=[{name:"edges",type:"mixed"},{name:"inEdges",type:"directed",direction:"in"},{name:"outEdges",type:"directed",direction:"out"},{name:"inboundEdges",type:"mixed",direction:"in"},{name:"outboundEdges",type:"mixed",direction:"out"},{name:"directedEdges",type:"directed"},{name:"undirectedEdges",type:"undirected"}];function ji(a,n,t,e){let r=!1;for(const i in n){if(i===e)continue;const o=n[i];if(r=t(o.key,o.attributes,o.source.key,o.target.key,o.source.attributes,o.target.attributes,o.undirected),a&&r)return o.key}}function Xi(a,n,t,e){let r,i,o,s=!1;for(const l in n)if(l!==e){r=n[l];do{if(i=r.source,o=r.target,s=t(r.key,r.attributes,i.key,o.key,i.attributes,o.attributes,r.undirected),a&&s)return r.key;r=r.next}while(r!==void 0)}}function Jt(a,n){const t=Object.keys(a),e=t.length;let r,i=0;return{[Symbol.iterator](){return this},next(){do if(r)r=r.next;else{if(i>=e)return{done:!0};const o=t[i++];if(o===n){r=void 0;continue}r=a[o]}while(!r);return{done:!1,value:{edge:r.key,attributes:r.attributes,source:r.source.key,target:r.target.key,sourceAttributes:r.source.attributes,targetAttributes:r.target.attributes,undirected:r.undirected}}}}}function qi(a,n,t,e){const r=n[t];if(!r)return;const i=r.source,o=r.target;if(e(r.key,r.attributes,i.key,o.key,i.attributes,o.attributes,r.undirected)&&a)return r.key}function Ki(a,n,t,e){let r=n[t];if(!r)return;let i=!1;do{if(i=e(r.key,r.attributes,r.source.key,r.target.key,r.source.attributes,r.target.attributes,r.undirected),a&&i)return r.key;r=r.next}while(r!==void 0)}function en(a,n){let t=a[n];if(t.next!==void 0)return{[Symbol.iterator](){return this},next(){if(!t)return{done:!0};const r={edge:t.key,attributes:t.attributes,source:t.source.key,target:t.target.key,sourceAttributes:t.source.attributes,targetAttributes:t.target.attributes,undirected:t.undirected};return t=t.next,{done:!1,value:r}}};let e=!1;return{[Symbol.iterator](){return this},next(){return e===!0?{done:!0}:(e=!0,{done:!1,value:{edge:t.key,attributes:t.attributes,source:t.source.key,target:t.target.key,sourceAttributes:t.source.attributes,targetAttributes:t.target.attributes,undirected:t.undirected}})}}}function Yi(a,n){if(a.size===0)return[];if(n==="mixed"||n===a.type)return Array.from(a._edges.keys());const t=n==="undirected"?a.undirectedSize:a.directedSize,e=new Array(t),r=n==="undirected",i=a._edges.values();let o=0,s,l;for(;s=i.next(),s.done!==!0;)l=s.value,l.undirected===r&&(e[o++]=l.key);return e}function mr(a,n,t,e){if(n.size===0)return;const r=t!=="mixed"&&t!==n.type,i=t==="undirected";let o,s,l=!1;const u=n._edges.values();for(;o=u.next(),o.done!==!0;){if(s=o.value,r&&s.undirected!==i)continue;const{key:d,attributes:h,source:c,target:g}=s;if(l=e(d,h,c.key,g.key,c.attributes,g.attributes,s.undirected),a&&l)return d}}function Zi(a,n){if(a.size===0)return Je();const t=n!=="mixed"&&n!==a.type,e=n==="undirected",r=a._edges.values();return{[Symbol.iterator](){return this},next(){let i,o;for(;;){if(i=r.next(),i.done)return i;if(o=i.value,!(t&&o.undirected!==e))break}return{value:{edge:o.key,attributes:o.attributes,source:o.source.key,target:o.target.key,sourceAttributes:o.source.attributes,targetAttributes:o.target.attributes,undirected:o.undirected},done:!1}}}}function Gn(a,n,t,e,r,i){const o=n?Xi:ji;let s;if(t!=="undirected"&&(e!=="out"&&(s=o(a,r.in,i),a&&s)||e!=="in"&&(s=o(a,r.out,i,e?void 0:r.key),a&&s))||t!=="directed"&&(s=o(a,r.undirected,i),a&&s))return s}function Qi(a,n,t,e){const r=[];return Gn(!1,a,n,t,e,function(i){r.push(i)}),r}function Ji(a,n,t){let e=Je();return a!=="undirected"&&(n!=="out"&&typeof t.in<"u"&&(e=we(e,Jt(t.in))),n!=="in"&&typeof t.out<"u"&&(e=we(e,Jt(t.out,n?void 0:t.key)))),a!=="directed"&&typeof t.undirected<"u"&&(e=we(e,Jt(t.undirected))),e}function Nn(a,n,t,e,r,i,o){const s=t?Ki:qi;let l;if(n!=="undirected"&&(typeof r.in<"u"&&e!=="out"&&(l=s(a,r.in,i,o),a&&l)||typeof r.out<"u"&&e!=="in"&&(e||r.key!==i)&&(l=s(a,r.out,i,o),a&&l))||n!=="directed"&&typeof r.undirected<"u"&&(l=s(a,r.undirected,i,o),a&&l))return l}function eo(a,n,t,e,r){const i=[];return Nn(!1,a,n,t,e,r,function(o){i.push(o)}),i}function to(a,n,t,e){let r=Je();return a!=="undirected"&&(typeof t.in<"u"&&n!=="out"&&e in t.in&&(r=we(r,en(t.in,e))),typeof t.out<"u"&&n!=="in"&&e in t.out&&(n||t.key!==e)&&(r=we(r,en(t.out,e)))),a!=="directed"&&typeof t.undirected<"u"&&e in t.undirected&&(r=we(r,en(t.undirected,e))),r}function no(a,n){const{name:t,type:e,direction:r}=n;a.prototype[t]=function(i,o){if(e!=="mixed"&&this.type!=="mixed"&&e!==this.type)return[];if(!arguments.length)return Yi(this,e);if(arguments.length===1){i=""+i;const s=this._nodes.get(i);if(typeof s>"u")throw new B(`Graph.${t}: could not find the "${i}" node in the graph.`);return Qi(this.multi,e==="mixed"?this.type:e,r,s)}if(arguments.length===2){i=""+i,o=""+o;const s=this._nodes.get(i);if(!s)throw new B(`Graph.${t}:  could not find the "${i}" source node in the graph.`);if(!this._nodes.has(o))throw new B(`Graph.${t}:  could not find the "${o}" target node in the graph.`);return eo(e,this.multi,r,s,o)}throw new O(`Graph.${t}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function ao(a,n){const{name:t,type:e,direction:r}=n,i="forEach"+t[0].toUpperCase()+t.slice(1,-1);a.prototype[i]=function(u,d,h){if(!(e!=="mixed"&&this.type!=="mixed"&&e!==this.type)){if(arguments.length===1)return h=u,mr(!1,this,e,h);if(arguments.length===2){u=""+u,h=d;const c=this._nodes.get(u);if(typeof c>"u")throw new B(`Graph.${i}: could not find the "${u}" node in the graph.`);return Gn(!1,this.multi,e==="mixed"?this.type:e,r,c,h)}if(arguments.length===3){u=""+u,d=""+d;const c=this._nodes.get(u);if(!c)throw new B(`Graph.${i}:  could not find the "${u}" source node in the graph.`);if(!this._nodes.has(d))throw new B(`Graph.${i}:  could not find the "${d}" target node in the graph.`);return Nn(!1,e,this.multi,r,c,d,h)}throw new O(`Graph.${i}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)}};const o="map"+t[0].toUpperCase()+t.slice(1);a.prototype[o]=function(){const u=Array.prototype.slice.call(arguments),d=u.pop();let h;if(u.length===0){let c=0;e!=="directed"&&(c+=this.undirectedSize),e!=="undirected"&&(c+=this.directedSize),h=new Array(c);let g=0;u.push((p,y,v,f,b,_,m)=>{h[g++]=d(p,y,v,f,b,_,m)})}else h=[],u.push((c,g,p,y,v,f,b)=>{h.push(d(c,g,p,y,v,f,b))});return this[i].apply(this,u),h};const s="filter"+t[0].toUpperCase()+t.slice(1);a.prototype[s]=function(){const u=Array.prototype.slice.call(arguments),d=u.pop(),h=[];return u.push((c,g,p,y,v,f,b)=>{d(c,g,p,y,v,f,b)&&h.push(c)}),this[i].apply(this,u),h};const l="reduce"+t[0].toUpperCase()+t.slice(1);a.prototype[l]=function(){let u=Array.prototype.slice.call(arguments);if(u.length<2||u.length>4)throw new O(`Graph.${l}: invalid number of arguments (expecting 2, 3 or 4 and got ${u.length}).`);if(typeof u[u.length-1]=="function"&&typeof u[u.length-2]!="function")throw new O(`Graph.${l}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let d,h;u.length===2?(d=u[0],h=u[1],u=[]):u.length===3?(d=u[1],h=u[2],u=[u[0]]):u.length===4&&(d=u[2],h=u[3],u=[u[0],u[1]]);let c=h;return u.push((g,p,y,v,f,b,_)=>{c=d(c,g,p,y,v,f,b,_)}),this[i].apply(this,u),c}}function ro(a,n){const{name:t,type:e,direction:r}=n,i="find"+t[0].toUpperCase()+t.slice(1,-1);a.prototype[i]=function(l,u,d){if(e!=="mixed"&&this.type!=="mixed"&&e!==this.type)return!1;if(arguments.length===1)return d=l,mr(!0,this,e,d);if(arguments.length===2){l=""+l,d=u;const h=this._nodes.get(l);if(typeof h>"u")throw new B(`Graph.${i}: could not find the "${l}" node in the graph.`);return Gn(!0,this.multi,e==="mixed"?this.type:e,r,h,d)}if(arguments.length===3){l=""+l,u=""+u;const h=this._nodes.get(l);if(!h)throw new B(`Graph.${i}:  could not find the "${l}" source node in the graph.`);if(!this._nodes.has(u))throw new B(`Graph.${i}:  could not find the "${u}" target node in the graph.`);return Nn(!0,e,this.multi,r,h,u,d)}throw new O(`Graph.${i}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)};const o="some"+t[0].toUpperCase()+t.slice(1,-1);a.prototype[o]=function(){const l=Array.prototype.slice.call(arguments),u=l.pop();return l.push((h,c,g,p,y,v,f)=>u(h,c,g,p,y,v,f)),!!this[i].apply(this,l)};const s="every"+t[0].toUpperCase()+t.slice(1,-1);a.prototype[s]=function(){const l=Array.prototype.slice.call(arguments),u=l.pop();return l.push((h,c,g,p,y,v,f)=>!u(h,c,g,p,y,v,f)),!this[i].apply(this,l)}}function io(a,n){const{name:t,type:e,direction:r}=n,i=t.slice(0,-1)+"Entries";a.prototype[i]=function(o,s){if(e!=="mixed"&&this.type!=="mixed"&&e!==this.type)return Je();if(!arguments.length)return Zi(this,e);if(arguments.length===1){o=""+o;const l=this._nodes.get(o);if(!l)throw new B(`Graph.${i}: could not find the "${o}" node in the graph.`);return Ji(e,r,l)}if(arguments.length===2){o=""+o,s=""+s;const l=this._nodes.get(o);if(!l)throw new B(`Graph.${i}:  could not find the "${o}" source node in the graph.`);if(!this._nodes.has(s))throw new B(`Graph.${i}:  could not find the "${s}" target node in the graph.`);return to(e,r,l,s)}throw new O(`Graph.${i}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function oo(a){Vi.forEach(n=>{no(a,n),ao(a,n),ro(a,n),io(a,n)})}const so=[{name:"neighbors",type:"mixed"},{name:"inNeighbors",type:"directed",direction:"in"},{name:"outNeighbors",type:"directed",direction:"out"},{name:"inboundNeighbors",type:"mixed",direction:"in"},{name:"outboundNeighbors",type:"mixed",direction:"out"},{name:"directedNeighbors",type:"directed"},{name:"undirectedNeighbors",type:"undirected"}];function $t(){this.A=null,this.B=null}$t.prototype.wrap=function(a){this.A===null?this.A=a:this.B===null&&(this.B=a)};$t.prototype.has=function(a){return this.A!==null&&a in this.A||this.B!==null&&a in this.B};function it(a,n,t,e,r){for(const i in e){const o=e[i],s=o.source,l=o.target,u=s===t?l:s;if(n&&n.has(u.key))continue;const d=r(u.key,u.attributes);if(a&&d)return u.key}}function zn(a,n,t,e,r){if(n!=="mixed"){if(n==="undirected")return it(a,null,e,e.undirected,r);if(typeof t=="string")return it(a,null,e,e[t],r)}const i=new $t;let o;if(n!=="undirected"){if(t!=="out"){if(o=it(a,null,e,e.in,r),a&&o)return o;i.wrap(e.in)}if(t!=="in"){if(o=it(a,i,e,e.out,r),a&&o)return o;i.wrap(e.out)}}if(n!=="directed"&&(o=it(a,i,e,e.undirected,r),a&&o))return o}function lo(a,n,t){if(a!=="mixed"){if(a==="undirected")return Object.keys(t.undirected);if(typeof n=="string")return Object.keys(t[n])}const e=[];return zn(!1,a,n,t,function(r){e.push(r)}),e}function ot(a,n,t){const e=Object.keys(t),r=e.length;let i=0;return{[Symbol.iterator](){return this},next(){let o=null;do{if(i>=r)return a&&a.wrap(t),{done:!0};const s=t[e[i++]],l=s.source,u=s.target;if(o=l===n?u:l,a&&a.has(o.key)){o=null;continue}}while(o===null);return{done:!1,value:{neighbor:o.key,attributes:o.attributes}}}}}function uo(a,n,t){if(a!=="mixed"){if(a==="undirected")return ot(null,t,t.undirected);if(typeof n=="string")return ot(null,t,t[n])}let e=Je();const r=new $t;return a!=="undirected"&&(n!=="out"&&(e=we(e,ot(r,t,t.in))),n!=="in"&&(e=we(e,ot(r,t,t.out)))),a!=="directed"&&(e=we(e,ot(r,t,t.undirected))),e}function ho(a,n){const{name:t,type:e,direction:r}=n;a.prototype[t]=function(i){if(e!=="mixed"&&this.type!=="mixed"&&e!==this.type)return[];i=""+i;const o=this._nodes.get(i);if(typeof o>"u")throw new B(`Graph.${t}: could not find the "${i}" node in the graph.`);return lo(e==="mixed"?this.type:e,r,o)}}function co(a,n){const{name:t,type:e,direction:r}=n,i="forEach"+t[0].toUpperCase()+t.slice(1,-1);a.prototype[i]=function(u,d){if(e!=="mixed"&&this.type!=="mixed"&&e!==this.type)return;u=""+u;const h=this._nodes.get(u);if(typeof h>"u")throw new B(`Graph.${i}: could not find the "${u}" node in the graph.`);zn(!1,e==="mixed"?this.type:e,r,h,d)};const o="map"+t[0].toUpperCase()+t.slice(1);a.prototype[o]=function(u,d){const h=[];return this[i](u,(c,g)=>{h.push(d(c,g))}),h};const s="filter"+t[0].toUpperCase()+t.slice(1);a.prototype[s]=function(u,d){const h=[];return this[i](u,(c,g)=>{d(c,g)&&h.push(c)}),h};const l="reduce"+t[0].toUpperCase()+t.slice(1);a.prototype[l]=function(u,d,h){if(arguments.length<3)throw new O(`Graph.${l}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let c=h;return this[i](u,(g,p)=>{c=d(c,g,p)}),c}}function fo(a,n){const{name:t,type:e,direction:r}=n,i=t[0].toUpperCase()+t.slice(1,-1),o="find"+i;a.prototype[o]=function(u,d){if(e!=="mixed"&&this.type!=="mixed"&&e!==this.type)return;u=""+u;const h=this._nodes.get(u);if(typeof h>"u")throw new B(`Graph.${o}: could not find the "${u}" node in the graph.`);return zn(!0,e==="mixed"?this.type:e,r,h,d)};const s="some"+i;a.prototype[s]=function(u,d){return!!this[o](u,d)};const l="every"+i;a.prototype[l]=function(u,d){return!this[o](u,(c,g)=>!d(c,g))}}function go(a,n){const{name:t,type:e,direction:r}=n,i=t.slice(0,-1)+"Entries";a.prototype[i]=function(o){if(e!=="mixed"&&this.type!=="mixed"&&e!==this.type)return Je();o=""+o;const s=this._nodes.get(o);if(typeof s>"u")throw new B(`Graph.${i}: could not find the "${o}" node in the graph.`);return uo(e==="mixed"?this.type:e,r,s)}}function po(a){so.forEach(n=>{ho(a,n),co(a,n),fo(a,n),go(a,n)})}function At(a,n,t,e,r){const i=e._nodes.values(),o=e.type;let s,l,u,d,h,c;for(;s=i.next(),s.done!==!0;){let g=!1;if(l=s.value,o!=="undirected"){d=l.out;for(u in d){h=d[u];do c=h.target,g=!0,r(l.key,c.key,l.attributes,c.attributes,h.key,h.attributes,h.undirected),h=h.next;while(h)}}if(o!=="directed"){d=l.undirected;for(u in d)if(!(n&&l.key>u)){h=d[u];do c=h.target,c.key!==u&&(c=h.source),g=!0,r(l.key,c.key,l.attributes,c.attributes,h.key,h.attributes,h.undirected),h=h.next;while(h)}}t&&!g&&r(l.key,null,l.attributes,null,null,null,null)}}function vo(a,n){const t={key:a};return dr(n.attributes)||(t.attributes=re({},n.attributes)),t}function mo(a,n,t){const e={key:n,source:t.source.key,target:t.target.key};return dr(t.attributes)||(e.attributes=re({},t.attributes)),a==="mixed"&&t.undirected&&(e.undirected=!0),e}function bo(a){if(!se(a))throw new O('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');if(!("key"in a))throw new O("Graph.import: serialized node is missing its key.");if("attributes"in a&&(!se(a.attributes)||a.attributes===null))throw new O("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.")}function yo(a){if(!se(a))throw new O('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');if(!("source"in a))throw new O("Graph.import: serialized edge is missing its source.");if(!("target"in a))throw new O("Graph.import: serialized edge is missing its target.");if("attributes"in a&&(!se(a.attributes)||a.attributes===null))throw new O("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");if("undirected"in a&&typeof a.undirected!="boolean")throw new O("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.")}const xo=_i(),_o=new Set(["directed","undirected","mixed"]),oa=new Set(["domain","_events","_eventsCount","_maxListeners"]),To=[{name:a=>`${a}Edge`,generateKey:!0},{name:a=>`${a}DirectedEdge`,generateKey:!0,type:"directed"},{name:a=>`${a}UndirectedEdge`,generateKey:!0,type:"undirected"},{name:a=>`${a}EdgeWithKey`},{name:a=>`${a}DirectedEdgeWithKey`,type:"directed"},{name:a=>`${a}UndirectedEdgeWithKey`,type:"undirected"}],So={allowSelfLoops:!0,multi:!1,type:"mixed"};function Eo(a,n,t){if(t&&!se(t))throw new O(`Graph.addNode: invalid attributes. Expecting an object but got "${t}"`);if(n=""+n,t=t||{},a._nodes.has(n))throw new V(`Graph.addNode: the "${n}" node already exist in the graph.`);const e=new a.NodeDataClass(n,t);return a._nodes.set(n,e),a.emit("nodeAdded",{key:n,attributes:t}),e}function sa(a,n,t){const e=new a.NodeDataClass(n,t);return a._nodes.set(n,e),a.emit("nodeAdded",{key:n,attributes:t}),e}function br(a,n,t,e,r,i,o,s){if(!e&&a.type==="undirected")throw new V(`Graph.${n}: you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.`);if(e&&a.type==="directed")throw new V(`Graph.${n}: you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.`);if(s&&!se(s))throw new O(`Graph.${n}: invalid attributes. Expecting an object but got "${s}"`);if(i=""+i,o=""+o,s=s||{},!a.allowSelfLoops&&i===o)throw new V(`Graph.${n}: source & target are the same ("${i}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);const l=a._nodes.get(i),u=a._nodes.get(o);if(!l)throw new B(`Graph.${n}: source node "${i}" not found.`);if(!u)throw new B(`Graph.${n}: target node "${o}" not found.`);const d={key:null,undirected:e,source:i,target:o,attributes:s};if(t)r=a._edgeKeyGenerator();else if(r=""+r,a._edges.has(r))throw new V(`Graph.${n}: the "${r}" edge already exists in the graph.`);if(!a.multi&&(e?typeof l.undirected[o]<"u":typeof l.out[o]<"u"))throw new V(`Graph.${n}: an edge linking "${i}" to "${o}" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`);const h=new et(e,r,l,u,s);a._edges.set(r,h);const c=i===o;return e?(l.undirectedDegree++,u.undirectedDegree++,c&&(l.undirectedLoops++,a._undirectedSelfLoopCount++)):(l.outDegree++,u.inDegree++,c&&(l.directedLoops++,a._directedSelfLoopCount++)),a.multi?h.attachMulti():h.attach(),e?a._undirectedSize++:a._directedSize++,d.key=r,a.emit("edgeAdded",d),r}function wo(a,n,t,e,r,i,o,s,l){if(!e&&a.type==="undirected")throw new V(`Graph.${n}: you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead.`);if(e&&a.type==="directed")throw new V(`Graph.${n}: you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead.`);if(s){if(l){if(typeof s!="function")throw new O(`Graph.${n}: invalid updater function. Expecting a function but got "${s}"`)}else if(!se(s))throw new O(`Graph.${n}: invalid attributes. Expecting an object but got "${s}"`)}i=""+i,o=""+o;let u;if(l&&(u=s,s=void 0),!a.allowSelfLoops&&i===o)throw new V(`Graph.${n}: source & target are the same ("${i}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let d=a._nodes.get(i),h=a._nodes.get(o),c,g;if(!t&&(c=a._edges.get(r),c)){if((c.source.key!==i||c.target.key!==o)&&(!e||c.source.key!==o||c.target.key!==i))throw new V(`Graph.${n}: inconsistency detected when attempting to merge the "${r}" edge with "${i}" source & "${o}" target vs. ("${c.source.key}", "${c.target.key}").`);g=c}if(!g&&!a.multi&&d&&(g=e?d.undirected[o]:d.out[o]),g){const b=[g.key,!1,!1,!1];if(l?!u:!s)return b;if(l){const _=g.attributes;g.attributes=u(_),a.emit("edgeAttributesUpdated",{type:"replace",key:g.key,attributes:g.attributes})}else re(g.attributes,s),a.emit("edgeAttributesUpdated",{type:"merge",key:g.key,attributes:g.attributes,data:s});return b}s=s||{},l&&u&&(s=u(s));const p={key:null,undirected:e,source:i,target:o,attributes:s};if(t)r=a._edgeKeyGenerator();else if(r=""+r,a._edges.has(r))throw new V(`Graph.${n}: the "${r}" edge already exists in the graph.`);let y=!1,v=!1;d||(d=sa(a,i,{}),y=!0,i===o&&(h=d,v=!0)),h||(h=sa(a,o,{}),v=!0),c=new et(e,r,d,h,s),a._edges.set(r,c);const f=i===o;return e?(d.undirectedDegree++,h.undirectedDegree++,f&&(d.undirectedLoops++,a._undirectedSelfLoopCount++)):(d.outDegree++,h.inDegree++,f&&(d.directedLoops++,a._directedSelfLoopCount++)),a.multi?c.attachMulti():c.attach(),e?a._undirectedSize++:a._directedSize++,p.key=r,a.emit("edgeAdded",p),[r,!0,y,v]}function $e(a,n){a._edges.delete(n.key);const{source:t,target:e,attributes:r}=n,i=n.undirected,o=t===e;i?(t.undirectedDegree--,e.undirectedDegree--,o&&(t.undirectedLoops--,a._undirectedSelfLoopCount--)):(t.outDegree--,e.inDegree--,o&&(t.directedLoops--,a._directedSelfLoopCount--)),a.multi?n.detachMulti():n.detach(),i?a._undirectedSize--:a._directedSize--,a.emit("edgeDropped",{key:n.key,attributes:r,source:t.key,target:e.key,undirected:i})}class J extends Fn.EventEmitter{constructor(n){if(super(),n=re({},So,n),typeof n.multi!="boolean")throw new O(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "${n.multi}".`);if(!_o.has(n.type))throw new O(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "${n.type}".`);if(typeof n.allowSelfLoops!="boolean")throw new O(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "${n.allowSelfLoops}".`);const t=n.type==="mixed"?hr:n.type==="directed"?cr:fr;ge(this,"NodeDataClass",t);const e="geid_"+xo()+"_";let r=0;const i=()=>{let o;do o=e+r++;while(this._edges.has(o));return o};ge(this,"_attributes",{}),ge(this,"_nodes",new Map),ge(this,"_edges",new Map),ge(this,"_directedSize",0),ge(this,"_undirectedSize",0),ge(this,"_directedSelfLoopCount",0),ge(this,"_undirectedSelfLoopCount",0),ge(this,"_edgeKeyGenerator",i),ge(this,"_options",n),oa.forEach(o=>ge(this,o,this[o])),ye(this,"order",()=>this._nodes.size),ye(this,"size",()=>this._edges.size),ye(this,"directedSize",()=>this._directedSize),ye(this,"undirectedSize",()=>this._undirectedSize),ye(this,"selfLoopCount",()=>this._directedSelfLoopCount+this._undirectedSelfLoopCount),ye(this,"directedSelfLoopCount",()=>this._directedSelfLoopCount),ye(this,"undirectedSelfLoopCount",()=>this._undirectedSelfLoopCount),ye(this,"multi",this._options.multi),ye(this,"type",this._options.type),ye(this,"allowSelfLoops",this._options.allowSelfLoops),ye(this,"implementation",()=>"graphology")}_resetInstanceCounters(){this._directedSize=0,this._undirectedSize=0,this._directedSelfLoopCount=0,this._undirectedSelfLoopCount=0}hasNode(n){return this._nodes.has(""+n)}hasDirectedEdge(n,t){if(this.type==="undirected")return!1;if(arguments.length===1){const e=""+n,r=this._edges.get(e);return!!r&&!r.undirected}else if(arguments.length===2){n=""+n,t=""+t;const e=this._nodes.get(n);return e?e.out.hasOwnProperty(t):!1}throw new O(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasUndirectedEdge(n,t){if(this.type==="directed")return!1;if(arguments.length===1){const e=""+n,r=this._edges.get(e);return!!r&&r.undirected}else if(arguments.length===2){n=""+n,t=""+t;const e=this._nodes.get(n);return e?e.undirected.hasOwnProperty(t):!1}throw new O(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasEdge(n,t){if(arguments.length===1){const e=""+n;return this._edges.has(e)}else if(arguments.length===2){n=""+n,t=""+t;const e=this._nodes.get(n);return e?typeof e.out<"u"&&e.out.hasOwnProperty(t)||typeof e.undirected<"u"&&e.undirected.hasOwnProperty(t):!1}throw new O(`Graph.hasEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}directedEdge(n,t){if(this.type==="undirected")return;if(n=""+n,t=""+t,this.multi)throw new V("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");const e=this._nodes.get(n);if(!e)throw new B(`Graph.directedEdge: could not find the "${n}" source node in the graph.`);if(!this._nodes.has(t))throw new B(`Graph.directedEdge: could not find the "${t}" target node in the graph.`);const r=e.out&&e.out[t]||void 0;if(r)return r.key}undirectedEdge(n,t){if(this.type==="directed")return;if(n=""+n,t=""+t,this.multi)throw new V("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");const e=this._nodes.get(n);if(!e)throw new B(`Graph.undirectedEdge: could not find the "${n}" source node in the graph.`);if(!this._nodes.has(t))throw new B(`Graph.undirectedEdge: could not find the "${t}" target node in the graph.`);const r=e.undirected&&e.undirected[t]||void 0;if(r)return r.key}edge(n,t){if(this.multi)throw new V("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");n=""+n,t=""+t;const e=this._nodes.get(n);if(!e)throw new B(`Graph.edge: could not find the "${n}" source node in the graph.`);if(!this._nodes.has(t))throw new B(`Graph.edge: could not find the "${t}" target node in the graph.`);const r=e.out&&e.out[t]||e.undirected&&e.undirected[t]||void 0;if(r)return r.key}areDirectedNeighbors(n,t){n=""+n,t=""+t;const e=this._nodes.get(n);if(!e)throw new B(`Graph.areDirectedNeighbors: could not find the "${n}" node in the graph.`);return this.type==="undirected"?!1:t in e.in||t in e.out}areOutNeighbors(n,t){n=""+n,t=""+t;const e=this._nodes.get(n);if(!e)throw new B(`Graph.areOutNeighbors: could not find the "${n}" node in the graph.`);return this.type==="undirected"?!1:t in e.out}areInNeighbors(n,t){n=""+n,t=""+t;const e=this._nodes.get(n);if(!e)throw new B(`Graph.areInNeighbors: could not find the "${n}" node in the graph.`);return this.type==="undirected"?!1:t in e.in}areUndirectedNeighbors(n,t){n=""+n,t=""+t;const e=this._nodes.get(n);if(!e)throw new B(`Graph.areUndirectedNeighbors: could not find the "${n}" node in the graph.`);return this.type==="directed"?!1:t in e.undirected}areNeighbors(n,t){n=""+n,t=""+t;const e=this._nodes.get(n);if(!e)throw new B(`Graph.areNeighbors: could not find the "${n}" node in the graph.`);return this.type!=="undirected"&&(t in e.in||t in e.out)||this.type!=="directed"&&t in e.undirected}areInboundNeighbors(n,t){n=""+n,t=""+t;const e=this._nodes.get(n);if(!e)throw new B(`Graph.areInboundNeighbors: could not find the "${n}" node in the graph.`);return this.type!=="undirected"&&t in e.in||this.type!=="directed"&&t in e.undirected}areOutboundNeighbors(n,t){n=""+n,t=""+t;const e=this._nodes.get(n);if(!e)throw new B(`Graph.areOutboundNeighbors: could not find the "${n}" node in the graph.`);return this.type!=="undirected"&&t in e.out||this.type!=="directed"&&t in e.undirected}inDegree(n){n=""+n;const t=this._nodes.get(n);if(!t)throw new B(`Graph.inDegree: could not find the "${n}" node in the graph.`);return this.type==="undirected"?0:t.inDegree}outDegree(n){n=""+n;const t=this._nodes.get(n);if(!t)throw new B(`Graph.outDegree: could not find the "${n}" node in the graph.`);return this.type==="undirected"?0:t.outDegree}directedDegree(n){n=""+n;const t=this._nodes.get(n);if(!t)throw new B(`Graph.directedDegree: could not find the "${n}" node in the graph.`);return this.type==="undirected"?0:t.inDegree+t.outDegree}undirectedDegree(n){n=""+n;const t=this._nodes.get(n);if(!t)throw new B(`Graph.undirectedDegree: could not find the "${n}" node in the graph.`);return this.type==="directed"?0:t.undirectedDegree}inboundDegree(n){n=""+n;const t=this._nodes.get(n);if(!t)throw new B(`Graph.inboundDegree: could not find the "${n}" node in the graph.`);let e=0;return this.type!=="directed"&&(e+=t.undirectedDegree),this.type!=="undirected"&&(e+=t.inDegree),e}outboundDegree(n){n=""+n;const t=this._nodes.get(n);if(!t)throw new B(`Graph.outboundDegree: could not find the "${n}" node in the graph.`);let e=0;return this.type!=="directed"&&(e+=t.undirectedDegree),this.type!=="undirected"&&(e+=t.outDegree),e}degree(n){n=""+n;const t=this._nodes.get(n);if(!t)throw new B(`Graph.degree: could not find the "${n}" node in the graph.`);let e=0;return this.type!=="directed"&&(e+=t.undirectedDegree),this.type!=="undirected"&&(e+=t.inDegree+t.outDegree),e}inDegreeWithoutSelfLoops(n){n=""+n;const t=this._nodes.get(n);if(!t)throw new B(`Graph.inDegreeWithoutSelfLoops: could not find the "${n}" node in the graph.`);return this.type==="undirected"?0:t.inDegree-t.directedLoops}outDegreeWithoutSelfLoops(n){n=""+n;const t=this._nodes.get(n);if(!t)throw new B(`Graph.outDegreeWithoutSelfLoops: could not find the "${n}" node in the graph.`);return this.type==="undirected"?0:t.outDegree-t.directedLoops}directedDegreeWithoutSelfLoops(n){n=""+n;const t=this._nodes.get(n);if(!t)throw new B(`Graph.directedDegreeWithoutSelfLoops: could not find the "${n}" node in the graph.`);return this.type==="undirected"?0:t.inDegree+t.outDegree-t.directedLoops*2}undirectedDegreeWithoutSelfLoops(n){n=""+n;const t=this._nodes.get(n);if(!t)throw new B(`Graph.undirectedDegreeWithoutSelfLoops: could not find the "${n}" node in the graph.`);return this.type==="directed"?0:t.undirectedDegree-t.undirectedLoops*2}inboundDegreeWithoutSelfLoops(n){n=""+n;const t=this._nodes.get(n);if(!t)throw new B(`Graph.inboundDegreeWithoutSelfLoops: could not find the "${n}" node in the graph.`);let e=0,r=0;return this.type!=="directed"&&(e+=t.undirectedDegree,r+=t.undirectedLoops*2),this.type!=="undirected"&&(e+=t.inDegree,r+=t.directedLoops),e-r}outboundDegreeWithoutSelfLoops(n){n=""+n;const t=this._nodes.get(n);if(!t)throw new B(`Graph.outboundDegreeWithoutSelfLoops: could not find the "${n}" node in the graph.`);let e=0,r=0;return this.type!=="directed"&&(e+=t.undirectedDegree,r+=t.undirectedLoops*2),this.type!=="undirected"&&(e+=t.outDegree,r+=t.directedLoops),e-r}degreeWithoutSelfLoops(n){n=""+n;const t=this._nodes.get(n);if(!t)throw new B(`Graph.degreeWithoutSelfLoops: could not find the "${n}" node in the graph.`);let e=0,r=0;return this.type!=="directed"&&(e+=t.undirectedDegree,r+=t.undirectedLoops*2),this.type!=="undirected"&&(e+=t.inDegree+t.outDegree,r+=t.directedLoops*2),e-r}source(n){n=""+n;const t=this._edges.get(n);if(!t)throw new B(`Graph.source: could not find the "${n}" edge in the graph.`);return t.source.key}target(n){n=""+n;const t=this._edges.get(n);if(!t)throw new B(`Graph.target: could not find the "${n}" edge in the graph.`);return t.target.key}extremities(n){n=""+n;const t=this._edges.get(n);if(!t)throw new B(`Graph.extremities: could not find the "${n}" edge in the graph.`);return[t.source.key,t.target.key]}opposite(n,t){n=""+n,t=""+t;const e=this._edges.get(t);if(!e)throw new B(`Graph.opposite: could not find the "${t}" edge in the graph.`);const r=e.source.key,i=e.target.key;if(n===r)return i;if(n===i)return r;throw new B(`Graph.opposite: the "${n}" node is not attached to the "${t}" edge (${r}, ${i}).`)}hasExtremity(n,t){n=""+n,t=""+t;const e=this._edges.get(n);if(!e)throw new B(`Graph.hasExtremity: could not find the "${n}" edge in the graph.`);return e.source.key===t||e.target.key===t}isUndirected(n){n=""+n;const t=this._edges.get(n);if(!t)throw new B(`Graph.isUndirected: could not find the "${n}" edge in the graph.`);return t.undirected}isDirected(n){n=""+n;const t=this._edges.get(n);if(!t)throw new B(`Graph.isDirected: could not find the "${n}" edge in the graph.`);return!t.undirected}isSelfLoop(n){n=""+n;const t=this._edges.get(n);if(!t)throw new B(`Graph.isSelfLoop: could not find the "${n}" edge in the graph.`);return t.source===t.target}addNode(n,t){return Eo(this,n,t).key}mergeNode(n,t){if(t&&!se(t))throw new O(`Graph.mergeNode: invalid attributes. Expecting an object but got "${t}"`);n=""+n,t=t||{};let e=this._nodes.get(n);return e?(t&&(re(e.attributes,t),this.emit("nodeAttributesUpdated",{type:"merge",key:n,attributes:e.attributes,data:t})),[n,!1]):(e=new this.NodeDataClass(n,t),this._nodes.set(n,e),this.emit("nodeAdded",{key:n,attributes:t}),[n,!0])}updateNode(n,t){if(t&&typeof t!="function")throw new O(`Graph.updateNode: invalid updater function. Expecting a function but got "${t}"`);n=""+n;let e=this._nodes.get(n);if(e){if(t){const i=e.attributes;e.attributes=t(i),this.emit("nodeAttributesUpdated",{type:"replace",key:n,attributes:e.attributes})}return[n,!1]}const r=t?t({}):{};return e=new this.NodeDataClass(n,r),this._nodes.set(n,e),this.emit("nodeAdded",{key:n,attributes:r}),[n,!0]}dropNode(n){n=""+n;const t=this._nodes.get(n);if(!t)throw new B(`Graph.dropNode: could not find the "${n}" node in the graph.`);let e;if(this.type!=="undirected"){for(const r in t.out){e=t.out[r];do $e(this,e),e=e.next;while(e)}for(const r in t.in){e=t.in[r];do $e(this,e),e=e.next;while(e)}}if(this.type!=="directed")for(const r in t.undirected){e=t.undirected[r];do $e(this,e),e=e.next;while(e)}this._nodes.delete(n),this.emit("nodeDropped",{key:n,attributes:t.attributes})}dropEdge(n){let t;if(arguments.length>1){const e=""+arguments[0],r=""+arguments[1];if(t=ve(this,e,r,this.type),!t)throw new B(`Graph.dropEdge: could not find the "${e}" -> "${r}" edge in the graph.`)}else if(n=""+n,t=this._edges.get(n),!t)throw new B(`Graph.dropEdge: could not find the "${n}" edge in the graph.`);return $e(this,t),this}dropDirectedEdge(n,t){if(arguments.length<2)throw new V("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new V("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");n=""+n,t=""+t;const e=ve(this,n,t,"directed");if(!e)throw new B(`Graph.dropDirectedEdge: could not find a "${n}" -> "${t}" edge in the graph.`);return $e(this,e),this}dropUndirectedEdge(n,t){if(arguments.length<2)throw new V("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new V("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");const e=ve(this,n,t,"undirected");if(!e)throw new B(`Graph.dropUndirectedEdge: could not find a "${n}" -> "${t}" edge in the graph.`);return $e(this,e),this}clear(){this._edges.clear(),this._nodes.clear(),this._resetInstanceCounters(),this.emit("cleared")}clearEdges(){const n=this._nodes.values();let t;for(;t=n.next(),t.done!==!0;)t.value.clear();this._edges.clear(),this._resetInstanceCounters(),this.emit("edgesCleared")}getAttribute(n){return this._attributes[n]}getAttributes(){return this._attributes}hasAttribute(n){return this._attributes.hasOwnProperty(n)}setAttribute(n,t){return this._attributes[n]=t,this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:n}),this}updateAttribute(n,t){if(typeof t!="function")throw new O("Graph.updateAttribute: updater should be a function.");const e=this._attributes[n];return this._attributes[n]=t(e),this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:n}),this}removeAttribute(n){return delete this._attributes[n],this.emit("attributesUpdated",{type:"remove",attributes:this._attributes,name:n}),this}replaceAttributes(n){if(!se(n))throw new O("Graph.replaceAttributes: provided attributes are not a plain object.");return this._attributes=n,this.emit("attributesUpdated",{type:"replace",attributes:this._attributes}),this}mergeAttributes(n){if(!se(n))throw new O("Graph.mergeAttributes: provided attributes are not a plain object.");return re(this._attributes,n),this.emit("attributesUpdated",{type:"merge",attributes:this._attributes,data:n}),this}updateAttributes(n){if(typeof n!="function")throw new O("Graph.updateAttributes: provided updater is not a function.");return this._attributes=n(this._attributes),this.emit("attributesUpdated",{type:"update",attributes:this._attributes}),this}updateEachNodeAttributes(n,t){if(typeof n!="function")throw new O("Graph.updateEachNodeAttributes: expecting an updater function.");if(t&&!ia(t))throw new O("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const e=this._nodes.values();let r,i;for(;r=e.next(),r.done!==!0;)i=r.value,i.attributes=n(i.key,i.attributes);this.emit("eachNodeAttributesUpdated",{hints:t||null})}updateEachEdgeAttributes(n,t){if(typeof n!="function")throw new O("Graph.updateEachEdgeAttributes: expecting an updater function.");if(t&&!ia(t))throw new O("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const e=this._edges.values();let r,i,o,s;for(;r=e.next(),r.done!==!0;)i=r.value,o=i.source,s=i.target,i.attributes=n(i.key,i.attributes,o.key,s.key,o.attributes,s.attributes,i.undirected);this.emit("eachEdgeAttributesUpdated",{hints:t||null})}forEachAdjacencyEntry(n){if(typeof n!="function")throw new O("Graph.forEachAdjacencyEntry: expecting a callback.");At(!1,!1,!1,this,n)}forEachAdjacencyEntryWithOrphans(n){if(typeof n!="function")throw new O("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");At(!1,!1,!0,this,n)}forEachAssymetricAdjacencyEntry(n){if(typeof n!="function")throw new O("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");At(!1,!0,!1,this,n)}forEachAssymetricAdjacencyEntryWithOrphans(n){if(typeof n!="function")throw new O("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");At(!1,!0,!0,this,n)}nodes(){return Array.from(this._nodes.keys())}forEachNode(n){if(typeof n!="function")throw new O("Graph.forEachNode: expecting a callback.");const t=this._nodes.values();let e,r;for(;e=t.next(),e.done!==!0;)r=e.value,n(r.key,r.attributes)}findNode(n){if(typeof n!="function")throw new O("Graph.findNode: expecting a callback.");const t=this._nodes.values();let e,r;for(;e=t.next(),e.done!==!0;)if(r=e.value,n(r.key,r.attributes))return r.key}mapNodes(n){if(typeof n!="function")throw new O("Graph.mapNode: expecting a callback.");const t=this._nodes.values();let e,r;const i=new Array(this.order);let o=0;for(;e=t.next(),e.done!==!0;)r=e.value,i[o++]=n(r.key,r.attributes);return i}someNode(n){if(typeof n!="function")throw new O("Graph.someNode: expecting a callback.");const t=this._nodes.values();let e,r;for(;e=t.next(),e.done!==!0;)if(r=e.value,n(r.key,r.attributes))return!0;return!1}everyNode(n){if(typeof n!="function")throw new O("Graph.everyNode: expecting a callback.");const t=this._nodes.values();let e,r;for(;e=t.next(),e.done!==!0;)if(r=e.value,!n(r.key,r.attributes))return!1;return!0}filterNodes(n){if(typeof n!="function")throw new O("Graph.filterNodes: expecting a callback.");const t=this._nodes.values();let e,r;const i=[];for(;e=t.next(),e.done!==!0;)r=e.value,n(r.key,r.attributes)&&i.push(r.key);return i}reduceNodes(n,t){if(typeof n!="function")throw new O("Graph.reduceNodes: expecting a callback.");if(arguments.length<2)throw new O("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");let e=t;const r=this._nodes.values();let i,o;for(;i=r.next(),i.done!==!0;)o=i.value,e=n(e,o.key,o.attributes);return e}nodeEntries(){const n=this._nodes.values();return{[Symbol.iterator](){return this},next(){const t=n.next();if(t.done)return t;const e=t.value;return{value:{node:e.key,attributes:e.attributes},done:!1}}}}export(){const n=new Array(this._nodes.size);let t=0;this._nodes.forEach((r,i)=>{n[t++]=vo(i,r)});const e=new Array(this._edges.size);return t=0,this._edges.forEach((r,i)=>{e[t++]=mo(this.type,i,r)}),{options:{type:this.type,multi:this.multi,allowSelfLoops:this.allowSelfLoops},attributes:this.getAttributes(),nodes:n,edges:e}}import(n,t=!1){if(n instanceof J)return n.forEachNode((l,u)=>{t?this.mergeNode(l,u):this.addNode(l,u)}),n.forEachEdge((l,u,d,h,c,g,p)=>{t?p?this.mergeUndirectedEdgeWithKey(l,d,h,u):this.mergeDirectedEdgeWithKey(l,d,h,u):p?this.addUndirectedEdgeWithKey(l,d,h,u):this.addDirectedEdgeWithKey(l,d,h,u)}),this;if(!se(n))throw new O("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");if(n.attributes){if(!se(n.attributes))throw new O("Graph.import: invalid attributes. Expecting a plain object.");t?this.mergeAttributes(n.attributes):this.replaceAttributes(n.attributes)}let e,r,i,o,s;if(n.nodes){if(i=n.nodes,!Array.isArray(i))throw new O("Graph.import: invalid nodes. Expecting an array.");for(e=0,r=i.length;e<r;e++){o=i[e],bo(o);const{key:l,attributes:u}=o;t?this.mergeNode(l,u):this.addNode(l,u)}}if(n.edges){let l=!1;if(this.type==="undirected"&&(l=!0),i=n.edges,!Array.isArray(i))throw new O("Graph.import: invalid edges. Expecting an array.");for(e=0,r=i.length;e<r;e++){s=i[e],yo(s);const{source:u,target:d,attributes:h,undirected:c=l}=s;let g;"key"in s?(g=t?c?this.mergeUndirectedEdgeWithKey:this.mergeDirectedEdgeWithKey:c?this.addUndirectedEdgeWithKey:this.addDirectedEdgeWithKey,g.call(this,s.key,u,d,h)):(g=t?c?this.mergeUndirectedEdge:this.mergeDirectedEdge:c?this.addUndirectedEdge:this.addDirectedEdge,g.call(this,u,d,h))}}return this}nullCopy(n){const t=new J(re({},this._options,n));return t.replaceAttributes(re({},this.getAttributes())),t}emptyCopy(n){const t=this.nullCopy(n);return this._nodes.forEach((e,r)=>{const i=re({},e.attributes);e=new t.NodeDataClass(r,i),t._nodes.set(r,e)}),t}copy(n){if(n=n||{},typeof n.type=="string"&&n.type!==this.type&&n.type!=="mixed")throw new V(`Graph.copy: cannot create an incompatible copy from "${this.type}" type to "${n.type}" because this would mean losing information about the current graph.`);if(typeof n.multi=="boolean"&&n.multi!==this.multi&&n.multi!==!0)throw new V("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");if(typeof n.allowSelfLoops=="boolean"&&n.allowSelfLoops!==this.allowSelfLoops&&n.allowSelfLoops!==!0)throw new V("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");const t=this.emptyCopy(n),e=this._edges.values();let r,i;for(;r=e.next(),r.done!==!0;)i=r.value,br(t,"copy",!1,i.undirected,i.key,i.source.key,i.target.key,re({},i.attributes));return t}toJSON(){return this.export()}toString(){return"[object Graph]"}inspect(){const n={};this._nodes.forEach((i,o)=>{n[o]=i.attributes});const t={},e={};this._edges.forEach((i,o)=>{const s=i.undirected?"--":"->";let l="",u=i.source.key,d=i.target.key,h;i.undirected&&u>d&&(h=u,u=d,d=h);const c=`(${u})${s}(${d})`;o.startsWith("geid_")?this.multi&&(typeof e[c]>"u"?e[c]=0:e[c]++,l+=`${e[c]}. `):l+=`[${o}]: `,l+=c,t[l]=i.attributes});const r={};for(const i in this)this.hasOwnProperty(i)&&!oa.has(i)&&typeof this[i]!="function"&&typeof i!="symbol"&&(r[i]=this[i]);return r.attributes=this._attributes,r.nodes=n,r.edges=t,ge(r,"constructor",this.constructor),r}}typeof Symbol<"u"&&(J.prototype[Symbol.for("nodejs.util.inspect.custom")]=J.prototype.inspect);To.forEach(a=>{["add","merge","update"].forEach(n=>{const t=a.name(n),e=n==="add"?br:wo;a.generateKey?J.prototype[t]=function(r,i,o){return e(this,t,!0,(a.type||this.type)==="undirected",null,r,i,o,n==="update")}:J.prototype[t]=function(r,i,o,s){return e(this,t,!1,(a.type||this.type)==="undirected",r,i,o,s,n==="update")}})});Fi(J);$i(J);oo(J);po(J);class yr extends J{constructor(n){const t=re({type:"directed"},n);if("multi"in t&&t.multi!==!1)throw new O("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(t.type!=="directed")throw new O('DirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class xr extends J{constructor(n){const t=re({type:"undirected"},n);if("multi"in t&&t.multi!==!1)throw new O("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(t.type!=="undirected")throw new O('UndirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class _r extends J{constructor(n){const t=re({multi:!0},n);if("multi"in t&&t.multi!==!0)throw new O("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");super(t)}}class Tr extends J{constructor(n){const t=re({type:"directed",multi:!0},n);if("multi"in t&&t.multi!==!0)throw new O("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(t.type!=="directed")throw new O('MultiDirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class Sr extends J{constructor(n){const t=re({type:"undirected",multi:!0},n);if("multi"in t&&t.multi!==!0)throw new O("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(t.type!=="undirected")throw new O('MultiUndirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}function tt(a){a.from=function(n,t){const e=re({},n.options,t),r=new a(e);return r.import(n),r}}tt(J);tt(yr);tt(xr);tt(_r);tt(Tr);tt(Sr);J.Graph=J;J.DirectedGraph=yr;J.UndirectedGraph=xr;J.MultiGraph=_r;J.MultiDirectedGraph=Tr;J.MultiUndirectedGraph=Sr;J.InvalidArgumentsGraphError=O;J.NotFoundGraphError=B;J.UsageGraphError=V;function pn(a,n){(n==null||n>a.length)&&(n=a.length);for(var t=0,e=Array(n);t<n;t++)e[t]=a[t];return e}function Mn(a,n){if(a){if(typeof a=="string")return pn(a,n);var t={}.toString.call(a).slice(8,-1);return t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set"?Array.from(a):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?pn(a,n):void 0}}function Ao(a){if(Array.isArray(a))return a}function Ro(a,n){var t=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(t!=null){var e,r,i,o,s=[],l=!0,u=!1;try{if(i=(t=t.call(a)).next,n===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(e=i.call(t)).done)&&(s.push(e.value),s.length!==n);l=!0);}catch(d){u=!0,r=d}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(u)throw r}}return s}}function Do(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ee(a,n){return Ao(a)||Ro(a,n)||Mn(a,n)||Do()}function M(a,n){var t=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!t){if(Array.isArray(a)||(t=Mn(a))||n){t&&(a=t);var e=0,r=function(){};return{s:r,n:function(){return e>=a.length?{done:!0}:{done:!1,value:a[e++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){t=t.call(a)},n:function(){var l=t.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||t.return==null||t.return()}finally{if(s)throw i}}}}function xe(){return Float32Array.of(1,0,0,0,1,0,0,0,1)}function Rt(a,n,t){return a[0]=n,a[4]=typeof t=="number"?t:n,a}function la(a,n){var t=Math.sin(n),e=Math.cos(n);return a[0]=e,a[1]=t,a[3]=-t,a[4]=e,a}function ua(a,n,t){return a[6]=n,a[7]=t,a}function De(a,n){var t=a[0],e=a[1],r=a[2],i=a[3],o=a[4],s=a[5],l=a[6],u=a[7],d=a[8],h=n[0],c=n[1],g=n[2],p=n[3],y=n[4],v=n[5],f=n[6],b=n[7],_=n[8];return a[0]=h*t+c*i+g*l,a[1]=h*e+c*o+g*u,a[2]=h*r+c*s+g*d,a[3]=p*t+y*i+v*l,a[4]=p*e+y*o+v*u,a[5]=p*r+y*s+v*d,a[6]=f*t+b*i+_*l,a[7]=f*e+b*o+_*u,a[8]=f*r+b*s+_*d,a}function Er(a,n){var t=Math.cos(n),e=Math.sin(n);return{x:t*a.x+e*a.y,y:-e*a.x+t*a.y}}function bt(a,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,e=a[0],r=a[1],i=a[3],o=a[4],s=a[6],l=a[7],u=n.x,d=n.y;return{x:u*e+d*i+s*t,y:u*r+d*o+l*t}}function Co(a,n){var t=a.height/a.width,e=n.height/n.width;return t<1&&e>1||t>1&&e<1?1:Math.min(Math.max(e,1/e),Math.max(1/t,t))}function ze(a,n,t,e,r){var i=a.angle,o=a.ratio,s=a.x,l=a.y,u=n.width,d=n.height,h=xe(),c=Math.min(u,d)-2*e,g=Co(n,t);return r?(De(h,ua(xe(),s,l)),De(h,Rt(xe(),o)),De(h,la(xe(),i)),De(h,Rt(xe(),u/c/2/g,d/c/2/g))):(De(h,Rt(xe(),2*(c/u)*g,2*(c/d)*g)),De(h,la(xe(),-i)),De(h,Rt(xe(),1/o)),De(h,ua(xe(),-s,-l))),h}function Lo(a,n,t){var e=bt(a,{x:Math.cos(n.angle),y:Math.sin(n.angle)},0),r=e.x,i=e.y;return 1/Math.sqrt(Math.pow(r,2)+Math.pow(i,2))/t.width}function wr(a,n,t,e,r){var i=Math.floor(n/r*e),o=Math.floor(a.drawingBufferHeight/r-t/r*e);return[i,o]}var ct={black:"#000000",silver:"#C0C0C0",gray:"#808080",grey:"#808080",white:"#FFFFFF",maroon:"#800000",red:"#FF0000",purple:"#800080",fuchsia:"#FF00FF",green:"#008000",lime:"#00FF00",olive:"#808000",yellow:"#FFFF00",navy:"#000080",blue:"#0000FF",teal:"#008080",aqua:"#00FFFF",darkblue:"#00008B",mediumblue:"#0000CD",darkgreen:"#006400",darkcyan:"#008B8B",deepskyblue:"#00BFFF",darkturquoise:"#00CED1",mediumspringgreen:"#00FA9A",springgreen:"#00FF7F",cyan:"#00FFFF",midnightblue:"#191970",dodgerblue:"#1E90FF",lightseagreen:"#20B2AA",forestgreen:"#228B22",seagreen:"#2E8B57",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",limegreen:"#32CD32",mediumseagreen:"#3CB371",turquoise:"#40E0D0",royalblue:"#4169E1",steelblue:"#4682B4",darkslateblue:"#483D8B",mediumturquoise:"#48D1CC",indigo:"#4B0082",darkolivegreen:"#556B2F",cadetblue:"#5F9EA0",cornflowerblue:"#6495ED",rebeccapurple:"#663399",mediumaquamarine:"#66CDAA",dimgray:"#696969",dimgrey:"#696969",slateblue:"#6A5ACD",olivedrab:"#6B8E23",slategray:"#708090",slategrey:"#708090",lightslategray:"#778899",lightslategrey:"#778899",mediumslateblue:"#7B68EE",lawngreen:"#7CFC00",chartreuse:"#7FFF00",aquamarine:"#7FFFD4",skyblue:"#87CEEB",lightskyblue:"#87CEFA",blueviolet:"#8A2BE2",darkred:"#8B0000",darkmagenta:"#8B008B",saddlebrown:"#8B4513",darkseagreen:"#8FBC8F",lightgreen:"#90EE90",mediumpurple:"#9370DB",darkviolet:"#9400D3",palegreen:"#98FB98",darkorchid:"#9932CC",yellowgreen:"#9ACD32",sienna:"#A0522D",brown:"#A52A2A",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",lightblue:"#ADD8E6",greenyellow:"#ADFF2F",paleturquoise:"#AFEEEE",lightsteelblue:"#B0C4DE",powderblue:"#B0E0E6",firebrick:"#B22222",darkgoldenrod:"#B8860B",mediumorchid:"#BA55D3",rosybrown:"#BC8F8F",darkkhaki:"#BDB76B",mediumvioletred:"#C71585",indianred:"#CD5C5C",peru:"#CD853F",chocolate:"#D2691E",tan:"#D2B48C",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",thistle:"#D8BFD8",orchid:"#DA70D6",goldenrod:"#DAA520",palevioletred:"#DB7093",crimson:"#DC143C",gainsboro:"#DCDCDC",plum:"#DDA0DD",burlywood:"#DEB887",lightcyan:"#E0FFFF",lavender:"#E6E6FA",darksalmon:"#E9967A",violet:"#EE82EE",palegoldenrod:"#EEE8AA",lightcoral:"#F08080",khaki:"#F0E68C",aliceblue:"#F0F8FF",honeydew:"#F0FFF0",azure:"#F0FFFF",sandybrown:"#F4A460",wheat:"#F5DEB3",beige:"#F5F5DC",whitesmoke:"#F5F5F5",mintcream:"#F5FFFA",ghostwhite:"#F8F8FF",salmon:"#FA8072",antiquewhite:"#FAEBD7",linen:"#FAF0E6",lightgoldenrodyellow:"#FAFAD2",oldlace:"#FDF5E6",magenta:"#FF00FF",deeppink:"#FF1493",orangered:"#FF4500",tomato:"#FF6347",hotpink:"#FF69B4",coral:"#FF7F50",darkorange:"#FF8C00",lightsalmon:"#FFA07A",orange:"#FFA500",lightpink:"#FFB6C1",pink:"#FFC0CB",gold:"#FFD700",peachpuff:"#FFDAB9",navajowhite:"#FFDEAD",moccasin:"#FFE4B5",bisque:"#FFE4C4",mistyrose:"#FFE4E1",blanchedalmond:"#FFEBCD",papayawhip:"#FFEFD5",lavenderblush:"#FFF0F5",seashell:"#FFF5EE",cornsilk:"#FFF8DC",lemonchiffon:"#FFFACD",floralwhite:"#FFFAF0",snow:"#FFFAFA",lightyellow:"#FFFFE0",ivory:"#FFFFF0"},Ar=new Int8Array(4),Nt=new Int32Array(Ar.buffer,0,1),Rr=new Float32Array(Ar.buffer,0,1),ko=/^\s*rgba?\s*\(/,Po=/^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;function Vt(a){var n=0,t=0,e=0,r=1,i=a.toLowerCase();if(i==="transparent")return{r:0,g:0,b:0,a:0};if(i in ct)return Vt(ct[i]);if(a[0]==="#")a.length===4?(n=parseInt(a.charAt(1)+a.charAt(1),16),t=parseInt(a.charAt(2)+a.charAt(2),16),e=parseInt(a.charAt(3)+a.charAt(3),16)):(n=parseInt(a.charAt(1)+a.charAt(2),16),t=parseInt(a.charAt(3)+a.charAt(4),16),e=parseInt(a.charAt(5)+a.charAt(6),16)),a.length===9&&(r=parseInt(a.charAt(7)+a.charAt(8),16)/255);else if(ko.test(a)){var o=a.match(Po);o&&(n=+o[1],t=+o[2],e=+o[3],o[4]&&(r=+o[4]))}return{r:n,g:t,b:e,a:r}}function zd(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=Vt(a),e=t.r,r=t.g,i=t.b,o=t.a;return n?[e/255*o,r/255*o,i/255*o,o]:[e/255,r/255,i/255,o]}var qe={};for(var Dt in ct)qe[Dt]=Se(ct[Dt]),qe[ct[Dt]]=qe[Dt];function Fo(a,n,t,e,r){return Nt[0]=e<<24|t<<16|n<<8|a,Nt[0]=Nt[0]&4278190079,Rr[0]}function Se(a){if(a=a.toLowerCase(),typeof qe[a]<"u")return qe[a];var n=Vt(a),t=n.r,e=n.g,r=n.b,i=n.a;i=i*255|0;var o=Fo(t,e,r,i);return qe[a]=o,o}function ft(a,n){Rr[0]=Se(a);var t=Nt[0],e=t&255,r=t>>8&255,i=t>>16&255,o=t>>24&255;return[e,r,i,o]}function Ot(a){var n=a>>>8&255,t=a>>>16&255,e=a>>>24&255,r=a&255;return(r<<24|e<<16|t<<8|n)>>>0}function Dr(a,n,t,e){return(t<<24|n<<16|a<<8|e)>>>0}function Io(a,n,t,e,r,i){var o=wr(a,t,e,r,i),s=ee(o,2),l=s[0],u=s[1],d=new Uint8Array(4);a.bindFramebuffer(a.FRAMEBUFFER,n),a.readPixels(l,u,1,1,a.RGBA,a.UNSIGNED_BYTE,d);var h=ee(d,4),c=h[0],g=h[1],p=h[2],y=h[3];return[c,g,p,y]}function Go(a){var n=Vt(a),t=n.r,e=n.g,r=n.b,i=n.a,o=(t/255).toFixed(6),s=(e/255).toFixed(6),l=(r/255).toFixed(6),u=i.toFixed(6);return"vec4(".concat(o,", ").concat(s,", ").concat(l,", ").concat(u,")")}function No(a,n){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var e=t.call(a,n||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function Cr(a){var n=No(a,"string");return typeof n=="symbol"?n:n+""}function E(a,n,t){return(n=Cr(n))in a?Object.defineProperty(a,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[n]=t,a}function da(a,n){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),t.push.apply(t,e)}return t}function W(a){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?da(Object(t),!0).forEach(function(e){E(a,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):da(Object(t)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))})}return a}function Y(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function ha(a,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,Cr(e.key),e)}}function Z(a,n,t){return n&&ha(a.prototype,n),t&&ha(a,t),Object.defineProperty(a,"prototype",{writable:!1}),a}function Ke(a){return Ke=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ke(a)}function Lr(){try{var a=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Lr=function(){return!!a})()}function zo(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Mo(a,n){if(n&&(typeof n=="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return zo(a)}function ie(a,n,t){return n=Ke(n),Mo(a,Lr()?Reflect.construct(n,t||[],Ke(a).constructor):n.apply(a,t))}function vn(a,n){return vn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},vn(a,n)}function oe(a,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(n&&n.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),n&&vn(a,n)}function Bo(a){if(Array.isArray(a))return pn(a)}function Wo(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function Oo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(a){return Bo(a)||Wo(a)||Mn(a)||Oo()}function Q(a){"@babel/helpers - typeof";return Q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Q(a)}function Le(a){return Q(a)==="object"&&a!==null&&"attribute"in a}function Uo(){var a=`
float sdf_circle(vec2 uv, float size) {
  return length(uv) - size;
}
`;return{name:"circle",glsl:a,uniforms:[]}}function Ho(a){var n,t=WebGL2RenderingContext,e=t.UNSIGNED_BYTE,r=(n=a==null?void 0:a.color)!==null&&n!==void 0?n:{attribute:"color"};if(!Le(r)){var i=r,o=`
vec4 layer_fill() {
  return `.concat(Go(i),`;
}
`);return{name:"fill",uniforms:[],attributes:[],glsl:o}}var s=r.attribute,l=`
vec4 layer_fill(vec4 v_fillColor) {
  return v_fillColor;
}
`;return{name:"fill",uniforms:[],attributes:[{name:"fillColor",size:4,type:e,normalized:!0,source:s}],glsl:l}}function _t(a){{var n=`
// Plain solid color layer
vec4 layer_plain(EdgeContext ctx) {
  return v_color;
}
`;return{name:"plain",glsl:n,uniforms:[],attributes:[]}}}function $o(){var a=`
// Position at parameter t ∈ [0, 1]
vec2 path_straight_position(float t, vec2 source, vec2 target) {
  return mix(source, target, t);
}

// Total length of the path (analytical - more efficient than sampling)
float path_straight_length(vec2 source, vec2 target) {
  return length(target - source);
}
`;return{name:"straight",segments:1,minBodyLengthRatio:0,linearParameterization:!0,glsl:a,uniforms:[],attributes:[]}}function Vo(a){var n={},t=n.segments,e=t===void 0?32:t,r=`
const float LOOP_PI = 3.141592653589793;

float loopWorldRadius() {
  float nodeWorldRadius = v_sourceNodeSize * u_correctionRatio / u_sizeRatio;
  return max(v_loopRadius * nodeWorldRadius, 0.001);
}

// Cubic Bézier with P0 = P3 = source.
// Control points extend outward orthogonal to the node surface at exit/entry angles.
vec2 path_loop_position(float t, vec2 source, vec2 target) {
  float R = loopWorldRadius();
  float angle = v_loopAngle + (v_loopFixedOrientation > 0.5 ? u_cameraAngle : 0.0);
  float halfSpread = v_loopSpread * 0.5;

  float exitAngle = angle - halfSpread;
  float entryAngle = angle + halfSpread;

  // Control point distance: at t=0.5 the Bézier reaches 0.75 * cpDist * cos(halfSpread)
  // from source. Solve for cpDist so the loop tip reaches exactly R.
  float cpDist = R / (0.75 * cos(halfSpread));

  vec2 cp1 = source + cpDist * vec2(cos(exitAngle), sin(exitAngle));
  vec2 cp2 = source + cpDist * vec2(cos(entryAngle), sin(entryAngle));

  float u = 1.0 - t;
  vec2 d1 = cp1 - source;
  vec2 d2 = cp2 - source;
  return source + 3.0 * t * u * (u * d1 + t * d2);
}

// Approximate arc length via chord sampling
float path_loop_length(vec2 source, vec2 target) {
  float len = 0.0;
  vec2 prev = path_loop_position(0.0, source, target);
  const int STEPS = 16;
  for (int i = 1; i <= STEPS; i++) {
    float t = float(i) / float(STEPS);
    vec2 cur = path_loop_position(t, source, target);
    len += length(cur - prev);
    prev = cur;
  }
  return len;
}
`;return{name:"loop",segments:e,glsl:r,needsNodeSize:!0,uniforms:[],attributes:[{name:"loopRadius",size:1,type:WebGL2RenderingContext.FLOAT},{name:"loopAngle",size:1,type:WebGL2RenderingContext.FLOAT},{name:"loopSpread",size:1,type:WebGL2RenderingContext.FLOAT},{name:"loopFixedOrientation",size:1,type:WebGL2RenderingContext.FLOAT}],variables:{loopRadius:{type:"number",default:4},loopAngle:{type:"number",default:Math.PI/4},loopSpread:{type:"number",default:80*Math.PI/180},loopFixedOrientation:{type:"number",default:0}},spread:{variable:"loopRadius",compute:function(o){return o+4}}}}function jo(a){return Q(a)==="object"&&"glsl"in a&&!("attributes"in a)}function Xo(a){return Q(a)==="object"&&"glsl"in a&&!("attributes"in a)}var mn={shapes:[Uo()],variables:{},layers:[Ho()],label:{},backdrop:{},labelAttachments:{}},zt={paths:[$o(),Vo()],extremities:[],variables:{},layers:[_t()],defaultHead:"none",defaultTail:"none",label:{}},bn=["nodes","topNodes"],yn=["edges","topEdges"],xn=[].concat(yn,bn),qo={nodes:mn,edges:zt,depthLayers:j(xn)},Ko=function(n){return n},Yo=function(n){return n*n},Zo=function(n){return n*(2-n)},Qo=function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)},Jo=function(n){return n*n*n},es=function(n){return--n*n*n+1},ts=function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)},ns=function(n){return n===0?0:Math.pow(2,10*(n-1))},as=function(n){return n===1?1:1-Math.pow(2,-10*n)},rs=function(n){return n===0?0:n===1?1:n<.5?Math.pow(2,10*(2*n-1))/2:(2-Math.pow(2,-10*(2*n-1)))/2},ca={linear:Ko,quadraticIn:Yo,quadraticOut:Zo,quadraticInOut:Qo,cubicIn:Jo,cubicOut:es,cubicInOut:ts,exponentialIn:ns,exponentialOut:as,exponentialInOut:rs};function Bn(a){return a?typeof a=="function"?a:ca[a]:ca.linear}function Wn(a){return Q(a)==="object"&&a!==null&&"attribute"in a}function kr(a){return typeof a=="function"}function Pr(a){return Q(a)==="object"&&a!==null&&"when"in a&&typeof a.when=="function"&&"then"in a}function Fr(a){return Q(a)==="object"&&a!==null&&"whenState"in a&&"then"in a}function Ir(a){return Q(a)==="object"&&a!==null&&"whenData"in a&&"then"in a}var is={isHovered:!1,isLabelHovered:!1,isHidden:!1,isHighlighted:!1,isDragged:!1},os={isHovered:!1,isLabelHovered:!1,isHidden:!1,isHighlighted:!1,parallelIndex:0,parallelCount:1},ss={isIdle:!0,isPanning:!1,isZooming:!1,isDragging:!1,hasHovered:!1,hasHighlighted:!1};function ls(a){return W(W({},is),a)}function us(a){return W(W({},os),a)}function fa(a){return W(W({},ss),a)}var ds={x:{attribute:"x"},y:{attribute:"y"},size:{whenState:"isHovered",then:{attribute:"size",defaultValue:12},else:{attribute:"size",defaultValue:10}},color:{attribute:"color",defaultValue:"#666"},label:{attribute:"label"},visibility:{whenState:"isHidden",then:"hidden",else:"visible"},labelVisibility:{whenState:"isHovered",then:"visible",else:"auto"},backdropVisibility:{whenState:"isHovered",then:"visible",else:"hidden"},backdropColor:"#ffffff",backdropShadowColor:"rgba(0, 0, 0, 0.5)",backdropShadowBlur:12,backdropPadding:6},hs={size:{attribute:"size",defaultValue:1},color:{attribute:"color",defaultValue:"#ccc"},label:{attribute:"label"},visibility:{whenState:"isHidden",then:"hidden",else:"visible"}},tn={nodes:W(W({},ds),{},{depth:{whenState:"isHovered",then:"topNodes",else:"nodes"}}),edges:W(W({},hs),{},{depth:{whenState:["isHighlighted","isHovered"],then:"topEdges",else:"edges"}})};function cs(a){return"min"in a||"max"in a||"minValue"in a||"maxValue"in a||"easing"in a}function fs(a){return"dict"in a}function jt(a,n){return typeof a=="string"?n[a]===!0:Array.isArray(a)?a.every(function(t){return n[t]===!0}):Q(a)==="object"&&a!==null?Object.entries(a).every(function(t){var e=ee(t,2),r=e[0],i=e[1];return n[r]===i}):!1}function gs(a,n){var t=n[a.attribute];return t===void 0?a.defaultValue:t}function ps(a,n,t){var e,r,i,o,s=n[a.attribute];if(s===void 0)return a.defaultValue;var l=Number(s);if(isNaN(l))return a.defaultValue;if(a.min===void 0&&a.max===void 0)return l;var u=(e=a.minValue)!==null&&e!==void 0?e:l,d=(r=a.maxValue)!==null&&r!==void 0?r:l;if(d===u){var h;return(h=a.min)!==null&&h!==void 0?h:l}var c=(l-u)/(d-u);c=Math.max(0,Math.min(1,c));var g=Bn(a.easing);c=g(c);var p=(i=a.min)!==null&&i!==void 0?i:0,y=(o=a.max)!==null&&o!==void 0?o:1;return p+c*(y-p)}function vs(a,n){var t=n[a.attribute];if(t===void 0)return a.defaultValue;var e=String(t);return e in a.dict?a.dict[e]:a.defaultValue}function ms(a,n,t){return fs(a)?vs(a,n):cs(a)?ps(a,n):gs(a,n)}function Gr(a,n){return typeof a=="string"?!!n[a]:Array.isArray(a)?a.every(function(t){return!!n[t]}):Q(a)==="object"&&a!==null?Object.entries(a).every(function(t){var e=ee(t,2),r=e[0],i=e[1];return n[r]===i}):!1}function Mt(a,n,t,e,r,i){if(a==null)return i;if(Q(a)!=="object"&&typeof a!="function")return a;if(Pr(a)){var o=a.when(n,t,e,r)?a.then:a.else;return o===void 0?i:Mt(o,n,t,e,r,i)}if(Fr(a)){var s=jt(a.whenState,t)?a.then:a.else;return s===void 0?i:Mt(s,n,t,e,r,i)}if(Ir(a)){var l=Gr(a.whenData,n)?a.then:a.else;return l===void 0?i:Mt(l,n,t,e,r,i)}if(kr(a)){var u=a(n,t,e,r);return u??i}if(Wn(a)){var d=ms(a,n);return d??i}return a}function _e(a){if(a==null)return"static";if(Pr(a))return"graph-state";if(Fr(a)){var n=_e(a.then),t=a.else!==void 0?_e(a.else):"static";return pe("item-state",pe(n,t))}if(Ir(a)){var e=_e(a.then),r=a.else!==void 0?_e(a.else):"static";return pe(e,r)}return kr(a)?"graph-state":(Wn(a),"static")}function pe(a,n){return a==="graph-state"||n==="graph-state"?"graph-state":a==="item-state"||n==="item-state"?"item-state":"static"}function ga(a){if(!a)return{dependency:"static",xAttribute:null,yAttribute:null};var n=Array.isArray(a)?a:[a],t="static",e=null,r=null,i=M(n),o;try{for(i.s();!(o=i.n()).done;){var s=o.value;if("matchData"in s&&"cases"in s)for(var l=s.cases,u=0,d=Object.values(l);u<d.length;u++)for(var h=d[u],c=0,g=Object.values(h);c<g.length;c++){var p=g[c];t=pe(t,_e(p))}else if("matchState"in s&&"cases"in s){t=pe(t,"item-state");for(var y=s.cases,v=0,f=Object.values(y);v<f.length;v++)for(var b=f[v],_=0,m=Object.values(b);_<m.length;_++){var x=m[_];t=pe(t,_e(x))}}else if("when"in s&&"then"in s)t="graph-state";else if("whenState"in s){t=pe(t,"item-state");var T=s.then;if(T&&Q(T)==="object")for(var w=0,S=Object.values(T);w<S.length;w++){var A=S[w];t=pe(t,_e(A))}var R=s.else;if(R&&Q(R)==="object")for(var k=0,D=Object.values(R);k<D.length;k++){var F=D[k];t=pe(t,_e(F))}}else if("whenData"in s){var L=s.then;if(L&&Q(L)==="object")for(var N=0,G=Object.values(L);N<G.length;N++){var z=G[N];t=pe(t,_e(z))}var P=s.else;if(P&&Q(P)==="object")for(var C=0,I=Object.values(P);C<I.length;C++){var H=I[C];t=pe(t,_e(H))}}else for(var U=0,$=Object.entries(s);U<$.length;U++){var X=ee($[U],2),K=X[0],ne=X[1];if(!Un.has(K)&&(t=pe(t,_e(ne)),(K==="x"||K==="y")&&Wn(ne))){var fe=ne.attribute;K==="x"&&!e&&(e=fe),K==="y"&&!r&&(r=fe)}}}}catch(be){i.e(be)}finally{i.f()}return{dependency:t,xAttribute:e,yAttribute:r}}var Ce={size:10,color:"#666",opacity:1,shape:"circle",rotationAlignment:"viewport",labelRotationAlignment:"viewport",visibility:"visible",depth:"nodes",zIndex:0,label:"",labelColor:"#000",labelSize:12,labelFont:"sans-serif",labelVisibility:"auto",labelPosition:"right",labelAngle:0,labelDepth:"nodes",backdropVisibility:"hidden",backdropColor:"transparent",backdropShadowColor:"transparent",backdropShadowBlur:0,backdropPadding:0,backdropBorderColor:"transparent",backdropBorderWidth:0,backdropCornerRadius:0,backdropLabelPadding:-1,backdropArea:"both",labelAttachment:null,labelAttachmentPlacement:"below"},On={size:1,color:"#ccc",opacity:1,path:"straight",selfLoopPath:"loop",parallelSpread:.25,tail:"none",head:"none",visibility:"visible",depth:"edges",zIndex:0,label:"",labelColor:"#666",labelVisibility:"auto",labelDepth:"edges"},Un=new Set(["when","whenState","whenData","then","else"]),pa=Object.keys(Ce),bs=Object.values(Ce),va=Object.keys(On),ys=Object.values(On);function Ve(a,n,t,e,r,i,o){for(var s in n){var l;if(!Un.has(s)){var u=(l=a[s])!==null&&l!==void 0?l:o[s];a[s]=Mt(n[s],t,e,r,i,u)}}"depth"in n&&!("labelDepth"in n)&&(a.labelDepth=a.depth)}function Nr(a,n,t,e,r,i,o){var s=M(n),l;try{for(s.s();!(l=s.n()).done;){var u=l.value;if("matchData"in u&&"cases"in u){var d,h=String((d=t[u.matchData])!==null&&d!==void 0?d:""),c=u.cases;h in c&&Ve(a,c[h],t,e,r,i,o)}else if("matchState"in u&&"cases"in u){var g,p=String((g=e[u.matchState])!==null&&g!==void 0?g:""),y=u.cases;p in y&&Ve(a,y[p],t,e,r,i,o)}else if("when"in u&&"then"in u){var v=u.when;if(!v(t,e,r,i))continue;Ve(a,u.then,t,e,r,i,o)}else if("whenState"in u&&"then"in u){if(!jt(u.whenState,e))continue;Ve(a,u.then,t,e,r,i,o)}else if("whenData"in u&&"then"in u){if(!Gr(u.whenData,t))continue;Ve(a,u.then,t,e,r,i,o)}else Ve(a,u,t,e,r,i,o)}}catch(f){s.e(f)}finally{s.f()}}function ma(a,n,t,e,r,i){for(var o=i||{},s=o,l=0,u=pa.length;l<u;l++)s[pa[l]]=bs[l];if(s.x=void 0,s.y=void 0,s.labelBackgroundColor=void 0,s.labelBackgroundPadding=void 0,s.labelCursor=void 0,!a){var d,h,c,g,p;return s.x=(d=n.x)!==null&&d!==void 0?d:0,s.y=(h=n.y)!==null&&h!==void 0?h:0,o.size=(c=n.size)!==null&&c!==void 0?c:10,o.color=(g=n.color)!==null&&g!==void 0?g:"#666",o.label=(p=n.label)!==null&&p!==void 0?p:"",o}var y=Array.isArray(a)?a:[a];return Nr(s,y,n,t,e,r,Ce),o}function ba(a,n,t,e,r,i){for(var o=i||{},s=o,l=0,u=va.length;l<u;l++)s[va[l]]=ys[l];if(!a){var d,h,c;return o.size=(d=n.size)!==null&&d!==void 0?d:1,o.color=(h=n.color)!==null&&h!==void 0?h:"#ccc",o.label=(c=n.label)!==null&&c!==void 0?c:"",o}var g=Array.isArray(a)?a:[a];return Nr(s,g,n,t,e,r,On),typeof s.labelPosition=="number"&&(s.labelPosition=void 0),o}function xs(a,n,t){var e,r;if(a==null)return t;if(typeof a=="function")return(e=a(n))!==null&&e!==void 0?e:t;if(Q(a)==="object"&&"when"in a){var i,o=a,s=o.when(n),l=s?o.then:o.else;return l===void 0?t:typeof l=="function"?(i=l(n))!==null&&i!==void 0?i:t:l??t}if(Q(a)==="object"&&"whenState"in a){var u,d=a,h=jt(d.whenState,n),c=h?d.then:d.else;return c===void 0?t:typeof c=="function"?(u=c(n))!==null&&u!==void 0?u:t:c??t}return(r=a)!==null&&r!==void 0?r:t}function ya(a,n){var t={};if(!a)return t;var e=Array.isArray(a)?a:[a],r=M(e),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if("when"in o&&"then"in o){var s=o.when(n),l=s?o.then:o.else;l&&Q(l)==="object"&&nn(t,l,n)}else if("whenState"in o&&"then"in o){var u=jt(o.whenState,n),d=u?o.then:o.else;d&&Q(d)==="object"&&nn(t,d,n)}else nn(t,o,n)}}catch(h){r.e(h)}finally{r.f()}return t}function nn(a,n,t){for(var e=0,r=Object.entries(n);e<r.length;e++){var i=ee(r[e],2),o=i[0],s=i[1];Un.has(o)||(a[o]=xs(s,t))}}var Hn=function(a){function n(){var t;return Y(this,n),t=ie(this,n),t.rawEmitter=t,t}return oe(n,a),Z(n)}(Fn.EventEmitter),_s=qo;function xa(a,n){var t=n.size;if(t!==0){var e=a.length;a.length+=t;var r=0;n.forEach(function(i){a[e+r]=i,r++})}}function Ts(a){a=a||{};for(var n=0,t=arguments.length<=1?0:arguments.length-1;n<t;n++){var e=n+1<1||arguments.length<=n+1?void 0:arguments[n+1];e&&Object.assign(a,e)}return a}function st(a,n){for(var t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&n[t]!==a[t])return!0;return!1}function Ss(a,n){var t=a,e=n;for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&t[r]!==e[r])return!1;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&e[i]!==t[i])return!1;return!0}function je(a,n,t){t?a.add(n):a.delete(n)}var an,_a;function Es(){return _a||(_a=1,an=function(n){return n!==null&&typeof n=="object"&&typeof n.addUndirectedEdgeWithKey=="function"&&typeof n.dropNode=="function"&&typeof n.multi=="boolean"}),an}var ws=Es();const As=bi(ws);var zr={easing:"quadraticInOut",duration:150};function Md(a,n,t,e){var r=Object.assign({},zr,t),i=Bn(r.easing),o=Date.now(),s={};for(var l in n){var u=n[l];s[l]={};for(var d in u)s[l][d]=a.getNodeAttribute(l,d)}var h=null,c=function(){h=null;var p=(Date.now()-o)/r.duration;if(p>=1){for(var y in n){var v=n[y];for(var f in v)a.setNodeAttribute(y,f,v[f])}return}p=i(p);for(var b in n){var _=n[b],m=s[b];for(var x in _)a.setNodeAttribute(b,x,_[x]*p+m[x]*(1-p))}h=requestAnimationFrame(c)};return c(),function(){h&&cancelAnimationFrame(h)}}function Me(a){return a.labelVisibility==="visible"&&a.visibility!=="hidden"}function Ta(a){return a.backdropVisibility==="visible"&&a.visibility!=="hidden"}function rn(a){return[a.rotationAlignment==="graph"?1:0,a.labelRotationAlignment==="graph"?1:0]}function Sa(a,n,t){var e=a[n];if(e)for(var r=0;r<e.length;r++){var i=e[r];if(!(t<i.offset||t>=i.offset+i.count)){if(i.count===1)e.splice(r,1);else if(t===i.offset)i.offset++,i.count--;else if(t===i.offset+i.count-1)i.count--;else{var o=t+1,s=i.offset+i.count-o;i.count=t-i.offset,e.splice(r+1,0,{offset:o,count:s})}return}}}function Ea(a,n,t){if(!a[n]){a[n]=[{offset:t,count:1}];return}for(var e=a[n],r=e.length,i=0;i<e.length;i++)if(t<e[i].offset){r=i;break}var o=r>0?e[r-1]:null,s=r<e.length?e[r]:null,l=o&&o.offset+o.count===t,u=s&&t+1===s.offset;l&&u?(o.count+=1+s.count,e.splice(r,1)):l?o.count++:u?(s.offset--,s.count++):e.splice(r,0,{offset:t,count:1})}function Rs(a){if(!As(a))throw new Error("Sigma: invalid graph instance.")}function _n(a){var n=ee(a.x,2),t=n[0],e=n[1],r=ee(a.y,2),i=r[0],o=r[1],s=Math.max(e-t,o-i),l=(e+t)/2,u=(o+i)/2;(s===0||Math.abs(s)===1/0||isNaN(s))&&(s=1),isNaN(l)&&(l=0),isNaN(u)&&(u=0);var d=function(c){return{x:.5+(c.x-l)/s,y:.5+(c.y-u)/s}};return d.applyTo=function(h){h.x=.5+(h.x-l)/s,h.y=.5+(h.y-u)/s},d.inverse=function(h){return{x:l+s*(h.x-.5),y:u+s*(h.y-.5)}},d.ratio=s,d}var $n={hideEdgesOnMove:!1,hideLabelsOnMove:!1,renderLabels:!0,renderEdgeLabels:!1,edgeLabelAnchors:"nodeLabels",enableEdgeEvents:!1,nodeLabelEvents:!1,edgeLabelEvents:!1,pickingDownSizingRatio:2,nodePickingPadding:0,edgePickingPadding:4,labelPickingPadding:10,stagePadding:30,minEdgeThickness:1.7,antiAliasingFeather:1,antialiasEdges:!0,antialiasNodes:!0,dragTimeout:100,draggedEventsTolerance:3,inertiaDuration:200,inertiaRatio:3,zoomDuration:250,zoomingRatio:1.7,doubleClickTimeout:300,doubleClickZoomingRatio:2.2,doubleClickZoomingDuration:200,tapMoveTolerance:10,zoomToSizeRatioFunction:Math.sqrt,itemSizesReference:"positions",autoRescale:!0,autoRescaleContent:"positions",enableNodeDrag:!1,getDraggedNodes:function(n){return[n]},dragPositionToAttributes:null,labelDensity:1,labelGridCellSize:100,labelRenderedSizeThreshold:6,labelPixelSnapping:!0,minCameraRatio:null,maxCameraRatio:null,enableCameraZooming:!0,enableCameraPanning:!0,enableCameraRotation:!0,enableCameraMouseRotation:!0,cameraPanBoundaries:null,gestureTarget:"graph",sharedGestureWheelMessage:"Use Ctrl + scroll to zoom the graph",sharedGestureAppleWheelMessage:"Use ⌘ + scroll to zoom the graph",sharedGestureTouchMessage:"Use two fingers to move the graph",allowInvalidContainer:!1,DEBUG_displayPickingLayer:!1,DEBUG_logShaders:!1,DEBUG_logRenderStats:!1,DEBUG_gpuTimerQueries:!1};function on(a){if(typeof a.labelDensity!="number"||a.labelDensity<0)throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");var n=a.minCameraRatio,t=a.maxCameraRatio;if(typeof n=="number"&&typeof t=="number"&&t<n)throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.")}function Ds(a){return Ts({},$n,a)}var Cs=new Set(["italic","oblique"]),Ls=new Set(["bold","bolder","lighter"]);function sn(a){for(var n="normal",t="normal",e=a.trim(),r=e.split(/\s+/),i=0,o=0;o<r.length;o++){var s=r[o].toLowerCase();if(Cs.has(s))t=s,i=o+1;else if(Ls.has(s)||/^\d{3}$/.test(s))n=s,i=o+1;else if(s==="normal")i=o+1;else break}var l=r.slice(i).join(" ");return{family:l||e,weight:n,style:t}}function yt(a,n,t){var e=document.createElement(a);if(n)for(var r in n)e.style[r]=n[r];if(t)for(var i in t)e.setAttribute(i,t[i]);return e}function Tn(){return typeof window.devicePixelRatio<"u"?window.devicePixelRatio:1}function ks(a){var n=a.type===WebGL2RenderingContext.FLOAT&&!a.normalized,t=a.type===WebGL2RenderingContext.UNSIGNED_BYTE&&a.size===4&&a.normalized;if(!n&&!t)throw new Error('Attribute "'.concat(a.name,'" is invalid: only non-normalized FLOAT and normalized UNSIGNED_BYTE with size 4 are supported.'));return a.normalized?1:a.size}function ln(a){var n=0;return a.forEach(function(t){return n+=ks(t)}),n}function Mr(a,n,t){var e=a==="VERTEX"?n.VERTEX_SHADER:n.FRAGMENT_SHADER,r=n.createShader(e);if(r===null)throw new Error("loadShader: error while creating the shader");n.shaderSource(r,t),n.compileShader(r);var i=n.getShaderParameter(r,n.COMPILE_STATUS);if(!i){var o=n.getShaderInfoLog(r);throw n.deleteShader(r),new Error(`loadShader: error while compiling the shader:
`.concat(o,`
`).concat(t))}return r}function Vn(a,n){return Mr("VERTEX",a,n)}function jn(a,n){return Mr("FRAGMENT",a,n)}function Xn(a,n){var t=a.createProgram();if(t===null)throw new Error("loadProgram: error while creating the program.");var e,r;for(e=0,r=n.length;e<r;e++)a.attachShader(t,n[e]);a.linkProgram(t);var i=a.getProgramParameter(t,a.LINK_STATUS);if(!i){var o=a.getProgramInfoLog(t);throw a.deleteProgram(t),new Error("loadProgram: error while linking the program: ".concat(o))}return t}function wa(a){var n=a.gl,t=a.buffer,e=a.program,r=a.vertexShader,i=a.fragmentShader;n.deleteShader(r),n.deleteShader(i),n.deleteProgram(e),n.deleteBuffer(t)}function te(a){return a%1===0?a.toFixed(1):a.toString()}var Ut=new Map,Br=new Map,Ps=0;function Wr(a,n){var t,e=(t=a.variables)===null||t===void 0||(t=t[n.source||n.name.replace(/^a_/,"")])===null||t===void 0?void 0:t.default,r=typeof e=="number"?e:typeof n.defaultValue=="number"?n.defaultValue:0;return te(r)}function Xt(a,n,t){var e,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:function(o){return"v_".concat(o.name.replace(/^a_/,""))},i=[n,t].concat(j(a.uniforms.filter(function(o){return o.type==="float"}).map(function(o){var s;return te((s=o.value)!==null&&s!==void 0?s:0)})),j(((e=a.attributes)!==null&&e!==void 0?e:[]).map(r)));return"sdf_".concat(a.name,"(").concat(i.join(", "),")")}function Fs(a){var n,t=a.name,e=a.uniforms.filter(function(o){return o.type==="float"&&o.value!==void 0&&o.value!==0}).map(function(o){return"".concat(o.name.replace("u_",""),"=").concat(o.value)}).sort(),r=((n=a.attributes)!==null&&n!==void 0?n:[]).map(function(o){var s;return"".concat(o.name,"@").concat((s=o.source)!==null&&s!==void 0?s:"","=").concat(Wr(a,o))}),i=[].concat(j(e),j(r));return i.length>0&&(t+="#"+i.join("#")),t}function Is(a){var n=Fs(a);if(!Ut.has(n)){var t={},e=M(a.uniforms),r;try{for(e.s();!(r=e.n()).done;){var i=r.value;i.type==="float"&&i.value!==void 0&&(t[i.name]=i.value)}}catch(o){e.e(o)}finally{e.f()}Ut.set(n,{shape:a,uniformValues:t,slug:n}),Br.set(n,Ps++)}return n}function Bt(a){var n;return(n=Br.get(a))!==null&&n!==void 0?n:-1}function Or(a){var n=[],t=new Set,e=new Set,r=/mat2 rotate2D\(float angle\)\s*\{[^}]+\}/,i=M(a),o;try{for(i.s();!(o=i.n()).done;){var s=o.value;if(!e.has(s.name)){e.add(s.name);var l=s.glsl;r.test(l)&&(t.has("rotate2D")?l=l.replace(r,""):t.add("rotate2D")),n.push(l)}}}catch(u){i.e(u)}finally{i.f()}return n.join(`
`)}function Gs(){return Or(Array.from(Ut.values()).map(function(a){return a.shape}))}function Ns(a){var n=Array.from(Ut.entries());if(n.length===0)return`
float querySDF(int shapeId, vec2 uv, float size) {
  return length(uv) - size;
}
`;var t=n.map(function(e,r){var i=ee(e,2),o=i[0],s=i[1].shape,l=Xt(s,"uv","size",function(u){var d=u.name.replace(/^a_/,"");return a!=null&&a.has(d)?"g_".concat(d):Wr(s,u)});return"    case ".concat(r,": return ").concat(l,"; // ").concat(o)}).join(`
`);return`
float querySDF(int shapeId, vec2 uv, float size) {
  switch (shapeId) {
`.concat(t,`
    default: return length(uv) - size;
  }
}
`)}function qn(a){return Or(a)}function Tt(a){return j(new Map(a.flatMap(function(n){return n.uniforms}).map(function(n){return[n.name,n]})).values())}function zs(a,n){if(a.length===0)return`
void queryNodeSDF(int shapeId, vec2 uv, float size) {
  context.sdf = length(uv) - size;
  context.inradiusFactor = 1.0;
}
`;var t=function(h){return Xt(h,"uv","size")},e=function(h){var c,g;return(c=h.inradiusFactorGLSL)!==null&&c!==void 0?c:te((g=h.inradiusFactor)!==null&&g!==void 0?g:1)};if(a.length===1){var r=a[0];return`
void queryNodeSDF(int shapeId, vec2 uv, float size) {
  context.sdf = `.concat(t(r),`;
  context.inradiusFactor = `).concat(e(r),`;
}
`)}var i=a.map(function(d,h){return"    case ".concat(h,": // ").concat(d.name,`
      context.sdf = `).concat(t(d),`;
      context.inradiusFactor = `).concat(e(d),`;
      break;`)}).join(`
`),o=a[0],s="",l="shapeId";if(n&&n.length>1){var u=n.map(function(d,h){return"    case ".concat(d,": return ").concat(h,"; // ").concat(a[h].name)}).join(`
`);s=`
int globalToLocalShapeId(int globalId) {
  switch (globalId) {
`.concat(u,`
    default: return 0;
  }
}
`),l="globalToLocalShapeId(shapeId)"}return"".concat(s,`
void queryNodeSDF(int shapeId, vec2 uv, float size) {
  switch (`).concat(l,`) {
`).concat(i,`
    default:
      context.sdf = `).concat(t(o),`;
      context.inradiusFactor = `).concat(e(o),`;
  }
}
`)}var gt={right:0,left:1,above:2,below:3,over:4},xt=5,Aa=3,Ur=`
float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
float nodeRadiusGraphSpace = nodeSize * u_correctionRatio / u_sizeRatio * 2.0;
float nodeRadiusNDC = nodeRadiusGraphSpace * matrixScaleX;
float nodeRadiusPixels = nodeRadiusNDC * u_resolution.x / 2.0;
`,Ms=`
mat2 rotate2D(float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return mat2(c, -s, s, c);
}
`,Hr=`
vec2 getLabelDirection(float positionMode) {
  if (positionMode < 0.5) return vec2(1.0, 0.0);   // Right
  if (positionMode < 1.5) return vec2(-1.0, 0.0);  // Left
  if (positionMode < 2.5) return vec2(0.0, -1.0);  // Above
  if (positionMode < 3.5) return vec2(0.0, 1.0);   // Below
  return vec2(0.0);                                 // Over (centered)
}
`,Bs=`
float sdfBox(vec2 p, vec2 halfSize) {
  vec2 d = abs(p) - halfSize;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}
`,Ws=`
float sdfRotatedBox(vec2 p, vec2 halfSize, float angle) {
  float c = cos(-angle);
  float s = sin(-angle);
  vec2 rotatedP = mat2(c, -s, s, c) * p;
  return sdfBox(rotatedP, halfSize);
}
`,Os=`
float sdfRoundedBox(vec2 p, vec2 halfSize, float radius) {
  vec2 d = abs(p) - halfSize + radius;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - radius;
}
`,Us=`
float sdfRoundedRotatedBox(vec2 p, vec2 halfSize, float angle, float radius) {
  float c = cos(-angle);
  float s = sin(-angle);
  vec2 rotatedP = mat2(c, -s, s, c) * p;
  return sdfRoundedBox(rotatedP, halfSize, radius);
}
`,$r=`
vec2 labelBoxCenter(float positionMode, float labelStart, vec2 halfSize, float textHalfY) {
  if (positionMode < 0.5) return vec2(labelStart + halfSize.x, 0.0);    // right
  if (positionMode < 1.5) return vec2(-(labelStart + halfSize.x), 0.0); // left
  if (positionMode < 2.5) return vec2(0.0, -(labelStart + textHalfY));  // above
  if (positionMode < 3.5) return vec2(0.0, labelStart + textHalfY);     // below
  return vec2(0.0);                                                     // over
}
`,Kn=2,Re=`
vec4 readNodeData(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * `.concat(Kn,`;
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  return texelFetch(nodeDataTexture, coord, 0);
}
`),Oe=`
vec4 readNodeFlags(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * `.concat(Kn,` + 1;
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  return texelFetch(nodeDataTexture, coord, 0);
}
`),Hs=`
vec4 readNodeColor(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * `.concat(Kn,` + 1;
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  vec4 texel = texelFetch(nodeDataTexture, coord, 0);
  float r = floor(texel.b / 65536.0);
  float g = floor(mod(texel.b, 65536.0) / 256.0);
  float b = mod(texel.b, 256.0);
  return vec4(r / 255.0, g / 255.0, b / 255.0, texel.a);
}
`),nt=`
vec4 readFrameTexel(sampler2D frameTexture, int frameTextureWidth, int index) {
  ivec2 coord = ivec2(index % frameTextureWidth, index / frameTextureWidth);
  return texelFetch(frameTexture, coord, 0);
}
`;function $s(a,n){var t=function(o){return Xt(o,"uv","size")};if(a.length===1)return{code:Ra(t(a[0])),multiShape:!1};var e=a.map(function(i,o){return"    case ".concat(n?n[o]:o,": return ").concat(t(i),";")}).join(`
`),r=`
float queryShapeSDF(int shapeId, vec2 uv, float size) {
  switch (shapeId) {
`.concat(e,`
    default: return `).concat(t(a[0]),`;
  }
}
int g_shapeId;
`).concat(Ra("queryShapeSDF(g_shapeId, uv, size)"),`
`);return{code:r,multiShape:!0}}function Ra(a){return`
float findEdgeDistance(vec2 direction, float size) {
  float lo = 0.0, hi = 2.0;
  for (int i = 0; i < 8; i++) {
    float mid = (lo + hi) * 0.5;
    vec2 uv = direction * mid;
    if (`.concat(a,` < 0.0) lo = mid; else hi = mid;
  }
  return (lo + hi) * 0.5;
}
`)}function Vs(a,n){for(;!{}.hasOwnProperty.call(a,n)&&(a=Ke(a))!==null;);return a}function Sn(){return Sn=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(a,n,t){var e=Vs(a,n);if(e){var r=Object.getOwnPropertyDescriptor(e,n);return r.get?r.get.call(arguments.length<3?a:t):r.value}},Sn.apply(null,arguments)}function le(a,n,t,e){var r=Sn(Ke(a.prototype),n,t);return typeof r=="function"?function(i){return r.apply(t,i)}:r}var js=1024,Xs=1.5,qs=4096,Vr=-1,Yn=function(){function a(n,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:js;Y(this,a),E(this,"texture",null),E(this,"dirty",!1),E(this,"dirtyRangeStart",1/0),E(this,"dirtyRangeEnd",-1),E(this,"indexMap",new Map),E(this,"freeIndices",[]),E(this,"nextIndex",0),this.gl=n,this.TEXELS_PER_ITEM=t,this.capacity=this.roundUpToPowerOfTwo(e);var r=this.computeTextureDimensions(this.capacity);this.textureWidth=r.width,this.textureHeight=r.height,this.data=new Float32Array(this.textureWidth*this.textureHeight*4),this.createTexture()}return Z(a,[{key:"computeTextureDimensions",value:function(t){var e=t*this.TEXELS_PER_ITEM,r=Math.min(e,qs),i=Math.ceil(e/r);return{width:r,height:i}}},{key:"roundUpToPowerOfTwo",value:function(t){return Math.pow(2,Math.ceil(Math.log2(Math.max(1,t))))}},{key:"createTexture",value:function(){var t=this.gl;this.texture=t.createTexture(),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.textureWidth,this.textureHeight,0,t.RGBA,t.FLOAT,this.data),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null)}},{key:"resize",value:function(t){if(!(t<=this.capacity)){var e=this.roundUpToPowerOfTwo(Math.ceil(t*Xs)),r=this.gl,i=this.computeTextureDimensions(e),o=new Float32Array(i.width*i.height*4);o.set(this.data),this.texture&&r.deleteTexture(this.texture),this.data=o,this.capacity=e,this.textureWidth=i.width,this.textureHeight=i.height,this.createTexture(),this.dirty=!0,this.dirtyRangeStart=0,this.dirtyRangeEnd=this.nextIndex}}},{key:"allocate",value:function(t){var e=this.indexMap.get(t);if(e!==void 0)return e;var r;return this.freeIndices.length>0?r=this.freeIndices.pop():(r=this.nextIndex++,r>=this.capacity&&this.resize(r+1)),this.indexMap.set(t,r),r}},{key:"free",value:function(t){var e=this.indexMap.get(t);if(e!==void 0){this.indexMap.delete(t),this.freeIndices.push(e);for(var r=e*this.TEXELS_PER_ITEM*4,i=0;i<this.TEXELS_PER_ITEM*4;i++)this.data[r+i]=0;this.markDirty(e)}}},{key:"getIndex",value:function(t){var e;return(e=this.indexMap.get(t))!==null&&e!==void 0?e:-1}},{key:"has",value:function(t){return this.indexMap.has(t)}},{key:"markDirty",value:function(t){this.dirty=!0,this.dirtyRangeStart=Math.min(this.dirtyRangeStart,t),this.dirtyRangeEnd=Math.max(this.dirtyRangeEnd,t+1)}},{key:"upload",value:function(){if(!(!this.dirty||!this.texture)){var t=this.gl,e=this.textureWidth;t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.texture);var r=this.dirtyRangeStart*this.TEXELS_PER_ITEM,i=Math.min(this.dirtyRangeEnd*this.TEXELS_PER_ITEM,this.capacity*this.TEXELS_PER_ITEM);if(r<i)for(var o=Math.floor(r/e),s=Math.floor((i-1)/e),l=o;l<=s;l++){var u=l*e,d=Math.min(u+e,this.capacity*this.TEXELS_PER_ITEM),h=Math.max(r,u),c=Math.min(i,d);if(h<c){var g=h-u,p=c-h,y=this.data.subarray(h*4,c*4);t.texSubImage2D(t.TEXTURE_2D,0,g,l,p,1,t.RGBA,t.FLOAT,y)}}t.bindTexture(t.TEXTURE_2D,null),this.dirty=!1,this.dirtyRangeStart=1/0,this.dirtyRangeEnd=-1}}},{key:"bind",value:function(t){var e=this.gl;e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,this.texture)}},{key:"getTexture",value:function(){return this.texture}},{key:"getCapacity",value:function(){return this.capacity}},{key:"getTextureWidth",value:function(){return this.textureWidth}},{key:"getTextureHeight",value:function(){return this.textureHeight}},{key:"getTexelsPerItem",value:function(){return this.TEXELS_PER_ITEM}},{key:"getCount",value:function(){return this.indexMap.size}},{key:"getHighWaterMark",value:function(){return this.nextIndex}},{key:"isDirty",value:function(){return this.dirty}},{key:"clear",value:function(){this.indexMap.clear(),this.freeIndices=[],this.nextIndex=0,this.data.fill(0),this.dirty=!0,this.dirtyRangeStart=0,this.dirtyRangeEnd=this.capacity}},{key:"restore",value:function(){this.createTexture(),this.dirty=!1,this.dirtyRangeStart=1/0,this.dirtyRangeEnd=-1}},{key:"kill",value:function(){this.texture&&(this.gl.deleteTexture(this.texture),this.texture=null),this.indexMap.clear(),this.freeIndices=[]}}])}();function me(a){var n={},t={},e=0,r=M(a),i;try{for(r.s();!(i=r.n()).done;){var o=i.value,s=M(o.attributes),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,d=u.name.replace(/^a_/,"");d in n||(n[d]=e,t[d]=u,e+=u.size)}}catch(h){s.e(h)}finally{s.f()}}}catch(h){r.e(h)}finally{r.f()}return{floatsPerItem:e,texelsPerItem:Math.max(1,Math.ceil(e/4)),offsets:n,specs:t}}var qt=function(a){function n(t,e,r){var i;return Y(this,n),i=ie(this,n,[t,e.texelsPerItem,r]),i.floatsPerItem=e.floatsPerItem,i}return oe(n,a),Z(n,[{key:"updateAllAttributes",value:function(e,r){var i=this.indexMap.get(e);i===void 0&&(i=this.allocate(e));for(var o=i*this.TEXELS_PER_ITEM*4,s=Math.min(r.length,this.floatsPerItem),l=0;l<s;l++)this.data[o+l]=r[l];this.markDirty(i)}},{key:"updateAllAttributesAtRow",value:function(e,r){e>=this.capacity&&this.resize(e+1);for(var i=e*this.TEXELS_PER_ITEM*4,o=Math.min(r.length,this.floatsPerItem),s=0;s<o;s++)this.data[i+s]=r[s];this.markDirty(e)}}])}(Yn);function Kt(a,n,t){for(var e=[],r=new Set,i=0;i<a.length;i++){var o=a[i],s=M(o.attributes),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,d=u.name.replace(/^a_/,"");if(!r.has(d)){r.add(d);var h=n.offsets[d];if(h!==void 0){var c=t==null?void 0:t.get(i);e.push({sourceKey:u.source||d,packedOffset:h,size:u.size,isColor:u.size===4&&!!u.normalized,defaultNum:typeof u.defaultValue=="number"?u.defaultValue:u.defaultValue===!0?1:0,defaultColor:typeof u.defaultValue=="string"?u.defaultValue:"",sourceIndex:i,hasLifecycleHook:!!(c!=null&&c.getAttributeData)})}}}}catch(g){s.e(g)}finally{s.f()}}return e}function Yt(a,n,t,e,r,i){t.fill(0);for(var o=0,s=a.length;o<s;o++){var l=a[o],u=l.packedOffset,d=void 0;if(l.hasLifecycleHook){var h=r.get(l.sourceIndex-i);d=h.getAttributeData(n,l.sourceKey),d===null&&(d=n[l.sourceKey])}else d=n[l.sourceKey];if(l.isColor){var c=typeof d=="string"?d:l.defaultColor||e,g=ft(c),p=ee(g,4),y=p[0],v=p[1],f=p[2],b=p[3];t[u]=y/255,t[u+1]=v/255,t[u+2]=f/255,t[u+3]=b/255}else if(l.size===1)t[u]=typeof d=="number"?d:typeof d=="boolean"?d?1:0:l.defaultNum;else{var _=Array.isArray(d)?d:null;if(_)for(var m=0;m<l.size;m++){var x;t[u+m]=(x=_[m])!==null&&x!==void 0?x:0}}}}var Ct=["r","g","b","a"];function Ye(a,n){var t=a.offsets,e=a.specs,r=a.texelsPerItem,i=a.floatsPerItem,o=Object.keys(t);if(o.length===0||i===0)return{fetchCode:"",varyingAssignments:""};var s=n.varPrefix,l=n.baseTexelExpr,u=n.textureWidthUniform,d=n.textureSamplerUniform,h=n.outputPrefix,c=h===void 0?"v_":h,g=[];g.push("  int ".concat(s,"BaseTexel = ").concat(l,";")),g.push("");for(var p=0;p<r;p++)g.push("  ivec2 ".concat(s,"Coord").concat(p," = ivec2((").concat(s,"BaseTexel + ").concat(p,") % ").concat(u,", (").concat(s,"BaseTexel + ").concat(p,") / ").concat(u,");")),g.push("  vec4 ".concat(s,"Texel").concat(p," = texelFetch(").concat(d,", ").concat(s,"Coord").concat(p,", 0);"));g.push("");for(var y=[],v=function(){var m=b[f],x=e[m],T=t[m],w=Math.floor(T/4),S=T%4,A="".concat(s,"Texel").concat(w),R="".concat(s,"Texel").concat(w+1),k="".concat(s,"Fetched_").concat(m);if(x.size===1)g.push("  float ".concat(k," = ").concat(A,".").concat(Ct[S],";"));else if(x.size===4&&S===0)g.push("  vec4 ".concat(k," = ").concat(A,";"));else{var D=S+x.size;if(D<=4){var F="vec".concat(x.size),L=Ct.slice(S,D).join("");g.push("  ".concat(F," ").concat(k," = ").concat(A,".").concat(L,";"))}else{var N=x.size===4?"vec4":"vec".concat(x.size),G=Ct.slice(S).map(function(C){return"".concat(A,".").concat(C)}),z=Ct.slice(0,D-4).map(function(C){return"".concat(R,".").concat(C)}),P=[].concat(j(G),j(z)).join(", ");g.push("  ".concat(N," ").concat(k," = ").concat(N,"(").concat(P,");"))}}y.push("  ".concat(c).concat(m," = ").concat(k,";"))},f=0,b=o;f<b.length;f++)v();return{fetchCode:g.join(`
`),varyingAssignments:y.join(`
`)}}function Zn(a,n,t){if(!(!n||t.type==="sampler2D"))switch(t.type){case"float":a.uniform1f(n,t.value);break;case"int":case"bool":a.uniform1i(n,t.value);break;case"vec2":a.uniform2fv(n,t.value);break;case"vec3":a.uniform3fv(n,t.value);break;case"vec4":a.uniform4fv(n,t.value);break;case"mat3":a.uniformMatrix3fv(n,!1,t.value);break;case"mat4":a.uniformMatrix4fv(n,!1,t.value);break}}var Ks=E(E(E(E(E(E(E(E({},WebGL2RenderingContext.BOOL,1),WebGL2RenderingContext.BYTE,1),WebGL2RenderingContext.UNSIGNED_BYTE,1),WebGL2RenderingContext.SHORT,2),WebGL2RenderingContext.UNSIGNED_SHORT,2),WebGL2RenderingContext.INT,4),WebGL2RenderingContext.UNSIGNED_INT,4),WebGL2RenderingContext.FLOAT,4);function Lt(a){var n=a.match(/^(#version[^\n]*\n)/);return n?n[1]+`#define PICKING_MODE
`+a.slice(n[1].length):`#define PICKING_MODE
`+a}var Ue=function(){function a(n,t,e){Y(this,a),E(this,"floats",new Float32Array),E(this,"ints",new Uint32Array),E(this,"constantArray",new Float32Array),E(this,"capacity",0),E(this,"verticesCount",0),E(this,"bufferGeneration",0),E(this,"uploadedGeneration",new Map),E(this,"constantBufferGeneration",0),E(this,"uploadedConstantGeneration",new Map),E(this,"renderOffset",0),E(this,"renderCount",-1),E(this,"debugStats",{drawCalls:0,verticesDrawn:0,bufferUploadBytes:0}),E(this,"shadersLogged",!1),E(this,"pickProgram",null);var r=this.getDefinition();if(this.VERTICES=r.VERTICES,this.VERTEX_SHADER_SOURCE=r.VERTEX_SHADER_SOURCE,this.FRAGMENT_SHADER_SOURCE=r.FRAGMENT_SHADER_SOURCE,this.UNIFORMS=r.UNIFORMS,this.ATTRIBUTES=r.ATTRIBUTES,this.METHOD=r.METHOD,this.CONSTANT_ATTRIBUTES="CONSTANT_ATTRIBUTES"in r?r.CONSTANT_ATTRIBUTES:[],this.CONSTANT_DATA="CONSTANT_DATA"in r?r.CONSTANT_DATA:[],this.isInstanced="CONSTANT_ATTRIBUTES"in r,this.ATTRIBUTES_ITEMS_COUNT=ln(this.ATTRIBUTES),this.STRIDE=this.VERTICES*this.ATTRIBUTES_ITEMS_COUNT,this.renderer=e,this.normalProgram=this.getProgramInfo("normal",n,r.VERTEX_SHADER_SOURCE,r.FRAGMENT_SHADER_SOURCE,null),this.pickProgram=this.getProgramInfo("pick",n,Lt(r.VERTEX_SHADER_SOURCE),Lt(r.FRAGMENT_SHADER_SOURCE),null),this.isInstanced){var i=ln(this.CONSTANT_ATTRIBUTES);if(this.CONSTANT_DATA.length!==this.VERTICES)throw new Error("Program: error while getting constant data (expected ".concat(this.VERTICES," items, received ").concat(this.CONSTANT_DATA.length," instead)"));this.constantArray=new Float32Array(this.CONSTANT_DATA.length*i);for(var o=0;o<this.CONSTANT_DATA.length;o++){var s=this.CONSTANT_DATA[o];if(s.length!==i)throw new Error("Program: error while getting constant data (one vector has ".concat(s.length," items instead of ").concat(i,")"));for(var l=0;l<s.length;l++)this.constantArray[o*i+l]=s[l]}this.STRIDE=this.ATTRIBUTES_ITEMS_COUNT}}return Z(a,[{key:"kill",value:function(){wa(this.normalProgram),this.pickProgram&&wa(this.pickProgram)}},{key:"resetDebugStats",value:function(){this.debugStats.drawCalls=0,this.debugStats.verticesDrawn=0,this.debugStats.bufferUploadBytes=0}},{key:"getProgramInfo",value:function(t,e,r,i,o){var s=e.createBuffer();if(s===null)throw new Error("Program: error while creating the WebGL buffer.");var l=Vn(e,r),u=jn(e,i),d=Xn(e,[l,u]),h={};this.UNIFORMS.forEach(function(p){var y=e.getUniformLocation(d,p);y&&(h[p]=y)});var c={};this.ATTRIBUTES.forEach(function(p){c[p.name]=e.getAttribLocation(d,p.name)});var g;if(this.isInstanced&&(this.CONSTANT_ATTRIBUTES.forEach(function(p){c[p.name]=e.getAttribLocation(d,p.name)}),g=e.createBuffer(),g===null))throw new Error("Program: error while creating the WebGL constant buffer.");return{name:t,program:d,gl:e,frameBuffer:o,buffer:s,constantBuffer:g||{},uniformLocations:h,attributeLocations:c,isPicking:t==="pick",vertexShader:l,fragmentShader:u}}},{key:"bindProgram",value:function(t){var e=this,r=0,i=t.gl,o=t.buffer;if(this.isInstanced){if(i.bindBuffer(i.ARRAY_BUFFER,t.constantBuffer),r=0,this.CONSTANT_ATTRIBUTES.forEach(function(d){return r+=e.bindAttribute(d,t,r,!1)}),this.uploadedConstantGeneration.get(t.constantBuffer)!==this.constantBufferGeneration){var l;i.bufferData(i.ARRAY_BUFFER,this.constantArray,i.STATIC_DRAW),this.uploadedConstantGeneration.set(t.constantBuffer,this.constantBufferGeneration),(l=this.renderer)!==null&&l!==void 0&&l.getSetting("DEBUG_logRenderStats")&&(this.debugStats.bufferUploadBytes+=this.constantArray.byteLength)}if(i.bindBuffer(i.ARRAY_BUFFER,t.buffer),r=this.renderOffset*this.ATTRIBUTES_ITEMS_COUNT*Float32Array.BYTES_PER_ELEMENT,this.ATTRIBUTES.forEach(function(d){return r+=e.bindAttribute(d,t,r,!0)}),this.uploadedGeneration.get(o)!==this.bufferGeneration){var u;i.bufferData(i.ARRAY_BUFFER,this.floats,i.DYNAMIC_DRAW),this.uploadedGeneration.set(o,this.bufferGeneration),(u=this.renderer)!==null&&u!==void 0&&u.getSetting("DEBUG_logRenderStats")&&(this.debugStats.bufferUploadBytes+=this.floats.byteLength)}}else if(i.bindBuffer(i.ARRAY_BUFFER,o),r=0,this.ATTRIBUTES.forEach(function(d){return r+=e.bindAttribute(d,t,r)}),this.uploadedGeneration.get(o)!==this.bufferGeneration){var s;i.bufferData(i.ARRAY_BUFFER,this.floats,i.DYNAMIC_DRAW),this.uploadedGeneration.set(o,this.bufferGeneration),(s=this.renderer)!==null&&s!==void 0&&s.getSetting("DEBUG_logRenderStats")&&(this.debugStats.bufferUploadBytes+=this.floats.byteLength)}i.bindBuffer(i.ARRAY_BUFFER,null)}},{key:"unbindProgram",value:function(t){var e=this;this.isInstanced?(this.CONSTANT_ATTRIBUTES.forEach(function(r){return e.unbindAttribute(r,t,!1)}),this.ATTRIBUTES.forEach(function(r){return e.unbindAttribute(r,t,!0)})):this.ATTRIBUTES.forEach(function(r){return e.unbindAttribute(r,t)})}},{key:"bindAttribute",value:function(t,e,r,i){var o=Ks[t.type];if(typeof o!="number")throw new Error('Program.bind: yet unsupported attribute type "'.concat(t.type,'"'));var s=e.attributeLocations[t.name],l=e.gl;if(s!==-1){l.enableVertexAttribArray(s);var u=this.isInstanced?(i?this.ATTRIBUTES_ITEMS_COUNT:ln(this.CONSTANT_ATTRIBUTES))*Float32Array.BYTES_PER_ELEMENT:this.ATTRIBUTES_ITEMS_COUNT*Float32Array.BYTES_PER_ELEMENT;l.vertexAttribPointer(s,t.size,t.type,t.normalized||!1,u,r),this.isInstanced&&i&&l.vertexAttribDivisor(s,1)}return t.size*o}},{key:"unbindAttribute",value:function(t,e,r){var i=e.attributeLocations[t.name],o=e.gl;i!==-1&&(o.disableVertexAttribArray(i),this.isInstanced&&r&&o.vertexAttribDivisor(i,0))}},{key:"reallocate",value:function(t){t!==this.capacity&&(this.capacity=t,this.verticesCount=this.VERTICES*t,this.floats=new Float32Array(this.isInstanced?this.capacity*this.ATTRIBUTES_ITEMS_COUNT:this.verticesCount*this.ATTRIBUTES_ITEMS_COUNT),this.ints=new Uint32Array(this.floats.buffer),this.invalidateBuffers())}},{key:"invalidateBuffers",value:function(){this.bufferGeneration++,this.constantBufferGeneration++}},{key:"hasNothingToRender",value:function(){return this.verticesCount===0}},{key:"setTypedUniform",value:function(t,e){var r;Zn(e.gl,(r=e.uniformLocations[t.name])!==null&&r!==void 0?r:null,t)}},{key:"renderProgram",value:function(t,e){var r=e.gl,i=e.program,o=e.isPicking;o?r.disable(r.BLEND):r.enable(r.BLEND),r.useProgram(i),this.setUniforms(t,e),this.drawWebGL(this.METHOD,e)}},{key:"render",value:function(t,e,r){var i;if(!this.shadersLogged&&(i=this.renderer)!==null&&i!==void 0&&i.getSetting("DEBUG_logShaders")&&(this.shadersLogged=!0,console.log("[sigma] DEBUG_logShaders: ".concat(this.constructor.name),{normal:{vertexShaderSource:this.VERTEX_SHADER_SOURCE,fragmentShaderSource:this.FRAGMENT_SHADER_SOURCE},pick:{vertexShaderSource:Lt(this.VERTEX_SHADER_SOURCE),fragmentShaderSource:Lt(this.FRAGMENT_SHADER_SOURCE)}})),!this.hasNothingToRender()){this.renderOffset=e??0,this.renderCount=r??-1;var o=this.normalProgram.gl;if(o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,t.width*t.pixelRatio,t.height*t.pixelRatio),this.bindProgram(this.normalProgram),this.renderProgram(t,this.normalProgram),this.unbindProgram(this.normalProgram),this.pickProgram&&t.pickingFrameBuffer){var s=Math.ceil(t.width*t.pixelRatio/t.downSizingRatio),l=Math.ceil(t.height*t.pixelRatio/t.downSizingRatio);o.bindFramebuffer(o.FRAMEBUFFER,t.pickingFrameBuffer),o.viewport(0,0,s,l),this.bindProgram(this.pickProgram),this.renderProgram(t,this.pickProgram),this.unbindProgram(this.pickProgram),o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,t.width*t.pixelRatio,t.height*t.pixelRatio)}}}},{key:"drawWebGL",value:function(t,e){var r,i=e.gl,o=this.renderCount>=0?this.renderCount:this.capacity;(r=this.renderer)!==null&&r!==void 0&&r.getSetting("DEBUG_logRenderStats")&&(this.debugStats.drawCalls++,this.debugStats.verticesDrawn+=o*this.VERTICES),this.isInstanced?i.drawArraysInstanced(t,0,this.VERTICES,o):i.drawArrays(t,this.renderOffset*this.VERTICES,o*this.VERTICES)}}])}(),Ne=2,Qn=7,Ys={below:0,above:1,left:2,right:3};function Zs(){var a=`#version 300 es
precision highp float;

uniform mat3 u_matrix;
uniform vec2 u_resolution;
uniform float u_labelPixelSnapping;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
uniform float u_pixelRatio;
uniform float u_labelMargin;
uniform float u_zoomLabelSizeRatio;

uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_nodeFrameTexture;
uniform int u_nodeFrameTextureWidth;

// Atlas size is fixed at 2048×2048 — matches AttachmentManager.ATLAS_SIZE.
uniform sampler2D u_atlasTexture;
const vec2 u_atlasSize = vec2(2048.0);

// Per-instance
in float a_nodeIndex;           // node-data texture index
in vec4 a_atlasRect;            // x, y, width, height in atlas pixels
in vec2 a_attachmentSize;       // attachment dimensions (CSS px)
in float a_positionMode;        // label position: 0=right 1=left 2=above 3=below 4=over
in float a_attachmentPlacement; // 0=below 1=above 2=left 3=right (relative to label)
in float a_labelWidth;          // label width (CSS px)
in float a_labelHeight;         // label height: font line box (CSS px)
in float a_textHeight;          // actual glyph height (CSS px)
in float a_labelAngle;          // label rotation angle (radians)

// Per-vertex (constant)
in vec2 a_quadCorner;           // [-1,-1], [1,-1], [-1,1], [1,1]

out vec2 v_texCoord;

`.concat(Re,`
`).concat(Oe,`
`).concat(nt,`
`).concat($r,`
`).concat(Ms,`

void main() {
  int nodeIdx = int(a_nodeIndex);

  // Node data: (x, y, size, shapeId).
  vec4 nodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  vec2 nodePos = nodeData.xy;
  float nodeSize = nodeData.z;

  // Normalized edge distance from the shared frame texture (the frame-pass ran
  // the SDF search once; we just read the result).
  float edgeDist = readFrameTexel(u_nodeFrameTexture, u_nodeFrameTextureWidth, nodeIdx).r;

  // Per-node label rotation alignment: 0 = viewport, 1 = label turns with camera.
  float labelRotation = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx).g;

  vec3 nodeClip = u_matrix * vec3(nodePos, 1.0);

  // Node radius in physical pixels (matches label/background).
  float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
  float nodeRadiusGraphSpace = nodeSize * u_correctionRatio / u_sizeRatio * 2.0;
  float nodeRadiusPixels = nodeRadiusGraphSpace * matrixScaleX * u_resolution.x / 2.0;

  // CSS-px inputs -> physical px, scaled by the zoom-dependent label ratio, so
  // the attachment stays glued to the label box exactly as the label scales.
  float zoomScale = u_zoomLabelSizeRatio;
  vec2 labelHalf = vec2(a_labelWidth, a_labelHeight) * 0.5 * zoomScale * u_pixelRatio;
  vec2 attachHalf = a_attachmentSize * 0.5 * zoomScale * u_pixelRatio;
  float gap = `).concat(Ne.toFixed(1),` * zoomScale * u_pixelRatio;
  float labelMargin = u_labelMargin * zoomScale * u_pixelRatio;

  // Graph-aligned labels add the camera angle so the attachment orbits with the box.
  mat2 labelRotMat = rotate2D(a_labelAngle - labelRotation * u_cameraAngle);

  // Label box center relative to the node center (pre-rotation). The shape-aware
  // edge distance comes from the frame texture, so placement matches the label.
  vec2 boxCenter = vec2(0.0);
  if (a_positionMode < 4.0) {
    float labelStart = nodeRadiusPixels * edgeDist + labelMargin;
    float textHalf = a_textHeight * 0.5 * zoomScale * u_pixelRatio;
    boxCenter = labelBoxCenter(a_positionMode, labelStart, labelHalf, textHalf);
  }

  // Horizontal anchor of below/above attachments tracks the label position, so
  // the attachment hangs from the label edge nearest the node (or is centered
  // when the label itself is node-centered): right->left, left->right, else center.
  float anchorX = 0.0;
  if (a_positionMode < 0.5) anchorX = -labelHalf.x + attachHalf.x;       // right label
  else if (a_positionMode < 1.5) anchorX = labelHalf.x - attachHalf.x;   // left label

  // Attachment center relative to the box (pre-rotation, Y-down). This offset
  // depends only on the box, the gap and the attachment size — never the shape.
  vec2 attachCenter;
  if (a_attachmentPlacement < 0.5) {
    // below
    attachCenter = boxCenter + vec2(anchorX, labelHalf.y + gap + attachHalf.y);
  } else if (a_attachmentPlacement < 1.5) {
    // above
    attachCenter = boxCenter + vec2(anchorX, -(labelHalf.y + gap + attachHalf.y));
  } else if (a_attachmentPlacement < 2.5) {
    // left, top-aligned
    attachCenter = boxCenter + vec2(-(labelHalf.x + gap + attachHalf.x), -labelHalf.y + attachHalf.y);
  } else {
    // right, top-aligned
    attachCenter = boxCenter + vec2(labelHalf.x + gap + attachHalf.x, -labelHalf.y + attachHalf.y);
  }

  // Rotate the whole assembly by the label angle, around the node center.
  vec2 rotatedCenter = labelRotMat * attachCenter;
  vec2 cornerOffset = labelRotMat * (a_quadCorner * attachHalf);

  // Node center in screen px (Y-down).
  vec2 nodeScreen = vec2(
    (nodeClip.x + 1.0) * u_resolution.x,
    (1.0 - nodeClip.y) * u_resolution.y
  ) * 0.5;

  // Snap node center to the pixel grid so label/backdrop/attachment move as one.
  vec2 snapDelta = (round(nodeScreen) - nodeScreen) * u_labelPixelSnapping;

  // Snap the quad's top-left to integer pixels so atlas texels map 1:1.
  vec2 centerScreen = nodeScreen + rotatedCenter + snapDelta;
  vec2 topLeft = centerScreen - attachHalf;
  topLeft = mix(topLeft, round(topLeft), u_labelPixelSnapping);
  centerScreen = topLeft + attachHalf;

  vec2 vertexScreen = centerScreen + cornerOffset;
  gl_Position = vec4(
    vertexScreen.x * 2.0 / u_resolution.x - 1.0,
    1.0 - vertexScreen.y * 2.0 / u_resolution.y,
    0.0, 1.0
  );

  vec2 texOrigin = a_atlasRect.xy / u_atlasSize;
  vec2 texSize = a_atlasRect.zw / u_atlasSize;
  vec2 uv = (a_quadCorner + 1.0) / 2.0;
  v_texCoord = texOrigin + uv * texSize;
}
`);return a}var Qs=`#version 300 es
precision highp float;

uniform sampler2D u_atlasTexture;

in vec2 v_texCoord;

layout(location = 0) out vec4 fragColor;
#ifdef PICKING_MODE
layout(location = 1) out vec4 pickColor;
#endif

void main() {
  // Canvas textures are premultiplied; output directly for (ONE, 1-SRC_ALPHA) blending
  vec4 color = texture(u_atlasTexture, v_texCoord);
  if (color.a < 0.01) discard;
  fragColor = color;
#ifdef PICKING_MODE
  pickColor = vec4(0.0); // Attachments are not pickable
#endif
}
`;function Js(a,n,t,e){var r,i,o=e.label,s=o===void 0?{}:o,l=(r=s.margin)!==null&&r!==void 0?r:xt,u=(i=s.zoomToLabelSizeRatioFunction)!==null&&i!==void 0?i:function(){return 1},d=Zs(),h=Qs,c=function(g){function p(){var y;Y(this,p);for(var v=arguments.length,f=new Array(v),b=0;b<v;b++)f[b]=arguments[b];return y=ie(this,p,[].concat(f)),E(y,"totalCount",0),E(y,"bufferCapacity",0),y}return oe(p,g),Z(p,[{key:"getDefinition",value:function(){var v=WebGL2RenderingContext,f=v.FLOAT,b=v.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:d,FRAGMENT_SHADER_SOURCE:h,METHOD:b,UNIFORMS:["u_matrix","u_resolution","u_labelPixelSnapping","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_pixelRatio","u_labelMargin","u_zoomLabelSizeRatio","u_nodeDataTexture","u_nodeDataTextureWidth","u_nodeFrameTexture","u_nodeFrameTextureWidth","u_atlasTexture"],ATTRIBUTES:[{name:"a_nodeIndex",size:1,type:f},{name:"a_atlasRect",size:4,type:f},{name:"a_attachmentSize",size:2,type:f},{name:"a_positionMode",size:1,type:f},{name:"a_attachmentPlacement",size:1,type:f},{name:"a_labelWidth",size:1,type:f},{name:"a_labelHeight",size:1,type:f},{name:"a_textHeight",size:1,type:f},{name:"a_labelAngle",size:1,type:f}],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:f}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:"processAttachment",value:function(v,f){var b=this.floats,_=v*this.STRIDE;b[_++]=f.nodeIndex,b[_++]=f.atlasX,b[_++]=f.atlasY,b[_++]=f.atlasW,b[_++]=f.atlasH,b[_++]=f.attachWidth,b[_++]=f.attachHeight,b[_++]=f.positionMode,b[_++]=f.attachmentPlacement,b[_++]=f.labelWidth,b[_++]=f.labelHeight,b[_++]=f.textHeight,b[_++]=f.labelAngle}},{key:"setUniforms",value:function(v,f){var b=f.gl,_=f.uniformLocations;b.uniformMatrix3fv(_.u_matrix,!1,v.matrix),b.uniform2f(_.u_resolution,v.width*v.pixelRatio,v.height*v.pixelRatio),b.uniform1f(_.u_labelPixelSnapping,v.labelPixelSnapping),b.uniform1f(_.u_sizeRatio,v.sizeRatio),b.uniform1f(_.u_correctionRatio,v.correctionRatio),b.uniform1f(_.u_cameraAngle,v.cameraAngle),b.uniform1f(_.u_pixelRatio,v.pixelRatio),b.uniform1f(_.u_labelMargin,p.labelMargin),b.uniform1f(_.u_zoomLabelSizeRatio,1/u(v.zoomRatio)),b.uniform1i(_.u_nodeDataTexture,v.nodeDataTextureUnit),b.uniform1i(_.u_nodeDataTextureWidth,v.nodeDataTextureWidth),b.uniform1i(_.u_nodeFrameTexture,v.nodeFrameTextureUnit),b.uniform1i(_.u_nodeFrameTextureWidth,v.nodeFrameTextureWidth),b.uniform1i(_.u_atlasTexture,Qn)}},{key:"reallocateAttachments",value:function(v){this.totalCount=v,v>this.bufferCapacity&&(this.bufferCapacity=Math.max(v,Math.ceil(this.bufferCapacity*1.5)||10),le(p,"reallocate",this)([this.bufferCapacity]))}},{key:"hasNothingToRender",value:function(){return this.totalCount===0}},{key:"drawWebGL",value:function(v,f){var b=f.gl;this.totalCount!==0&&b.drawArraysInstanced(v,0,this.VERTICES,this.totalCount)}}])}(Ue);return E(c,"labelMargin",l),new c(a,n,t)}var ke=5;function Zt(a,n){return[].concat(j(n),j(a.map(function(t){var e;return{attributes:(e=t.attributes)!==null&&e!==void 0?e:[]}})))}function at(a,n){var t=me(Zt(a,n)),e=new Set(a.flatMap(function(u){var d;return(d=u.attributes)!==null&&d!==void 0?d:[]}).map(function(u){return u.name.replace(/^a_/,"")})),r={},i={},o=M(e),s;try{for(o.s();!(s=o.n()).done;){var l=s.value;r[l]=t.offsets[l],i[l]=t.specs[l]}}catch(u){o.e(u)}finally{o.f()}return W(W({},t),{},{offsets:r,specs:i})}function el(a,n){var t=new Set(["u_matrix","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_pickingPadding","u_nodeDataTexture","u_layerAttributeTexture"]),e=new Set,r=a.flatMap(function(g){return g.uniforms}).filter(function(g){return t.has(g.name)||e.has(g.name)?!1:(e.add(g.name),!0)}).map(function(g){return"uniform ".concat(g.type," ").concat(g.name,";")}).join(`
`),i=n.flatMap(function(g){return g.uniforms}).filter(function(g){return t.has(g.name)||e.has(g.name)?!1:(e.add(g.name),!0)}).map(function(g){return"uniform ".concat(g.type," ").concat(g.name,";")}).join(`
`),o=Zt(a,n),s=new Set,l=o.flatMap(function(g){return g.attributes}).filter(function(g){var p=g.name.replace(/^a_/,"");return s.has(p)?!1:(s.add(p),!0)}).map(function(g){var p=g.name.replace(/^a_/,""),y=g.size===1?"float":"vec".concat(g.size);return"out ".concat(y," v_").concat(p,";")}).join(`
`),u=Ye(me(o),{varPrefix:"layer",baseTexelExpr:"nodeIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture"}),d=u.fetchCode,h=u.varyingAssignments,c=`#version 300 es

// Standard node attributes (per instance) - minimal buffer usage
in float a_nodeIndex;  // Index into node data texture AND layer attribute texture
in vec4 a_id;          // Node ID for picking
in float a_opacity;    // Node opacity, applied once to the final fragment

// Constant attributes (per vertex, same for all instances)
in vec2 a_quadCorner;  // (-1,-1), (1,-1), (1,1), (-1,1) for quad corners

// Standard uniforms
uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
#ifdef PICKING_MODE
uniform float u_pickingPadding;
#endif
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;

// Layer attribute texture uniforms
uniform sampler2D u_layerAttributeTexture;
uniform int u_layerAttributeTextureWidth;
uniform int u_layerAttributeTexelsPerNode;

`.concat(r,`
`).concat(i,`

// Standard varyings
out vec2 v_uv;                    // Normalized coordinates [-1, 1]
out vec4 v_id;
out float v_opacity;
out float v_antialiasingWidth;    // Width for antialiasing in UV space
out float v_pixelSize;            // Node size in pixels (for pixel-mode borders)
out float v_pixelToUV;            // Conversion factor: multiply by this to convert screen pixels to UV units
out float v_shapeId;              // Shape ID for multi-shape programs

// Layer varyings
`).concat(l,`

// Node-data fetch helpers (geometry texel + rotation-flags texel)
`).concat(Re,`
`).concat(Oe,`

void main() {
  // Fetch node geometry: vec4(x, y, size, shapeId).
  int nodeIdx = int(a_nodeIndex);

  // Hidden nodes are flagged with a negative row by NodeProgram.process(). Push
  // the whole quad outside the clip volume: every vertex lands at the same
  // out-of-range position, so the primitive is fully clipped and rasterizes
  // nothing — neither to the frame buffer nor to the picking buffer.
  if (nodeIdx < 0) {
    gl_Position = vec4(2.0, 0.0, 0.0, 1.0);
    v_id = vec4(0.0);
    return;
  }

  vec4 nodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  vec2 a_position = nodeData.xy;
  float a_size = nodeData.z;
  v_shapeId = nodeData.w;  // Pass shape ID to fragment shader

  // Per-node rotation alignment: 0 = viewport (screen-upright), 1 = graph.
  float nodeRotation = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx).r;

`).concat(d,`

  // Calculate the actual size in pixels
  float size = a_size * u_correctionRatio / u_sizeRatio * 2.0;

  // In PICKING_MODE, inflate the quad by nodePickingPadding pixels on each side
  #ifdef PICKING_MODE
    float paddedSize = size + u_pickingPadding * u_correctionRatio;
    vec2 offset = a_quadCorner * paddedSize;
  #else
    vec2 offset = a_quadCorner * size;
  #endif
  // Counter-rotate the quad offset so viewport-aligned nodes stay upright as the
  // camera turns. Graph-aligned nodes (nodeRotation=1) skip it and turn with the
  // camera. The angle scales by (1 - nodeRotation) so both fall out of one path.
  {
    float ca = u_cameraAngle * (1.0 - nodeRotation);
    float c = cos(ca);
    float s = sin(ca);
    offset = mat2(c, s, -s, c) * offset;
  }
  vec2 position = a_position + offset;

  gl_Position = vec4(
    (u_matrix * vec3(position, 1)).xy,
    0,
    1
  );

  // In PICKING_MODE, UV is scaled beyond [-1, 1] to match the inflated quad
  #ifdef PICKING_MODE
    v_uv = a_quadCorner * (paddedSize / size);
  #else
    v_uv = a_quadCorner;
  #endif

  // Pass ID to fragment shader
  v_id = a_id;
  v_opacity = a_opacity;

  // Pass pixel size for layers that need pixel-mode calculations
  // Multiply by 2 because 'size' is half-width (offset from center), not full diameter
  v_pixelSize = size * 2.0;

  // Conversion factor from screen pixels to UV units
  // Same derivation as v_antialiasingWidth which represents ~1 pixel in UV space
  // P pixels in UV space = P * u_correctionRatio / size
  v_pixelToUV = u_correctionRatio / size;

  // We use an antialiasing width of 1px (so v_pixelToUV)
  v_antialiasingWidth = v_pixelToUV;

  // Pass layer attributes to fragment shader (fetched from texture)
`).concat(h,`
}
`);return c}function tl(a,n,t){var e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,r=n.map(function(p,y){var v="layer_".concat(p.name),f=[].concat(j(p.attributes.map(function(b){return"v_".concat(b.name.replace(/^a_/,""))})),j(p.uniforms.map(function(b){return b.name}))).join(", ");return"  // Layer ".concat(y+1,": ").concat(p.name,`
  color = blendOver(color, `).concat(v,"(").concat(f,"));")}).join(`

`),i=new Set(["u_correctionRatio"]),o=new Set,s=a.flatMap(function(p){return p.uniforms}).filter(function(p){return i.has(p.name)||o.has(p.name)?!1:(o.add(p.name),!0)}).map(function(p){return"uniform ".concat(p.type," ").concat(p.name,";")}).join(`
`),l=n.flatMap(function(p){return p.uniforms}).filter(function(p){return i.has(p.name)||o.has(p.name)?!1:(o.add(p.name),!0)}).map(function(p){return"uniform ".concat(p.type," ").concat(p.name,";")}).join(`
`),u=new Set,d=Zt(a,n).flatMap(function(p){return p.attributes}).filter(function(p){var y=p.name.replace(/^a_/,"");return u.has(y)?!1:(u.add(y),!0)}).map(function(p){var y=p.name.replace(/^a_/,""),v=p.size===1?"float":"vec".concat(p.size);return"in ".concat(v," v_").concat(y,";")}).join(`
`),h=qn(a),c=zs(a,t),g=`#version 300 es
precision highp float;

// Standard varyings
in vec2 v_uv;
in vec4 v_id;
in float v_opacity;
in float v_antialiasingWidth;
in float v_pixelSize;
in float v_pixelToUV;
in float v_shapeId;  // Shape ID for multi-shape programs

// Standard uniforms (needed for some layer calculations like pixel-mode borders)
uniform float u_correctionRatio;
#ifdef PICKING_MODE
uniform float u_pickingPadding;
#endif

// Shape uniforms
`.concat(s,`

// Layer uniforms
`).concat(l,`

// Layer varyings
`).concat(d,`

// Fragment output (single target - picking handled via separate pass)
out vec4 fragColor;

// LayerContext struct - provides rendering context to all layers
struct LayerContext {
  float sdf;             // Signed distance from shape boundary (negative inside)
  vec2 uv;               // UV coordinates [-1, 1], center at (0,0)
  float shapeSize;       // Effective shape size (~diameter) in UV space (1.0 - aaWidth)
  float shapeHalfSize;   // Effective shape half size (~radius) in UV space
  float pixelSize;       // Node full size (~diameter) in screen pixels
  float aaWidth;         // Anti-aliasing width for smooth transitions
  float correctionRatio; // Scaling factor for consistent rendering across zoom levels
  float pixelToUV;       // Conversion factor: multiply screen pixels by this to get UV units
  float inradiusFactor;  // Ratio of inradius to circumradius (shape depth factor)
};

LayerContext context;  // Global instance, populated before layer calls

// Alpha "over" compositing for layer blending
vec4 blendOver(vec4 bg, vec4 fg) {
  float a = fg.a;
  return vec4(mix(bg.rgb, fg.rgb, a), bg.a + a * (1.0 - bg.a));
}

// SDF shape functions
`).concat(h,`

// Shape selector function (sets context.sdf and context.inradiusFactor)
`).concat(c,`

// Layer functions
`).concat(n.map(function(p){return p.glsl}).join(`

`),`

void main() {
  // 1. Setup LayerContext (available to all layer functions)
  context.shapeSize = 1.0 - v_antialiasingWidth;
  context.shapeHalfSize = context.shapeSize * 0.5;
  context.pixelSize = v_pixelSize;
  context.uv = v_uv;
  context.aaWidth = v_antialiasingWidth;
  context.correctionRatio = u_correctionRatio;
  context.pixelToUV = v_pixelToUV;

  // Query shape SDF based on shapeId (sets context.sdf and context.inradiusFactor)
  queryNodeSDF(int(v_shapeId), v_uv, context.shapeSize);

  // 2. Early discard for pixels fully outside the shape (with AA margin)
  // In PICKING_MODE, allow extra fragments up to the picking padding distance
  #ifdef PICKING_MODE
    if (context.sdf > u_pickingPadding * v_pixelToUV + context.aaWidth) discard;
  #else
    if (context.sdf > context.aaWidth) discard;
  #endif

  // 3. Apply layers sequentially with "over" compositing
  vec4 color = vec4(0.0);

`).concat(r,`

  #ifdef PICKING_MODE
    // Picking pass: output node ID for pixels within the picking area.
    if (context.sdf > u_pickingPadding * v_pixelToUV) discard;
    fragColor = v_id;
  #else
`).concat(e?`    // Visual pass: apply antialiasing at shape boundary, node opacity once
    // smoothstep provides smooth transition from opaque to transparent
    float alpha = smoothstep(context.aaWidth, -context.aaWidth, context.sdf) * v_opacity;`:`    // Visual pass: hard-edged (no anti-aliasing gradient) shape boundary, node opacity applied once
    float alpha = (context.sdf < 0.0 ? 1.0 : 0.0) * v_opacity;`,`
    // Mix with transparent to fade both color AND alpha together (avoids bright halo)
    fragColor = mix(vec4(0.0), color, alpha);
  #endif
}
`);return g}function nl(a,n){var t=new Set;return t.add("u_matrix"),t.add("u_sizeRatio"),t.add("u_correctionRatio"),t.add("u_cameraAngle"),t.add("u_pickingPadding"),t.add("u_nodeDataTexture"),t.add("u_nodeDataTextureWidth"),t.add("u_layerAttributeTexture"),t.add("u_layerAttributeTextureWidth"),t.add("u_layerAttributeTexelsPerNode"),a.forEach(function(e){e.uniforms.forEach(function(r){return t.add(r.name)})}),n.forEach(function(e){e.uniforms.forEach(function(r){return t.add(r.name)})}),Array.from(t)}function al(a){var n=WebGL2RenderingContext,t=n.UNSIGNED_BYTE,e=n.FLOAT;return[{name:"a_nodeIndex",size:1,type:e},{name:"a_id",size:4,type:t,normalized:!0},{name:"a_opacity",size:1,type:e}]}function Da(a){var n=a.shapes,t=a.layers,e=a.shapeGlobalIds,r=a.antialias,i=r===void 0?!0:r;return{vertexShader:el(n,t),fragmentShader:tl(n,t,e,i),uniforms:nl(n,t),attributes:al()}}function jr(a,n,t){var e=at(a,n),r=e.specs;return Object.keys(r).map(function(i){return"flat ".concat(t," ").concat(r[i].size===1?"float":"vec".concat(r[i].size)," v_").concat(i,";")}).join(`
`)}function rl(a){var n,t,e=a.shapes,r=a.layers,i=a.shapeGlobalIds,o=Ye(at(e,r),{varPrefix:"nodeAttr",baseTexelExpr:"nodeIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture"}),s=e.length===1?"float inradiusFactor = ".concat(te((n=e[0].inradiusFactor)!==null&&n!==void 0?n:1),";"):"float inradiusFactor = ".concat(te((t=e[0].inradiusFactor)!==null&&t!==void 0?t:1),`;
  switch (int(shapeId)) {
`).concat(e.map(function(u,d){var h,c=i?i[d]:d;return"    case ".concat(c,": inradiusFactor = ").concat(te((h=u.inradiusFactor)!==null&&h!==void 0?h:1),"; break;")}).join(`
`),`
    default: break;
  }`),l=`#version 300 es

in float a_nodeIndex;
in float a_labelWidth;
in float a_labelHeight;
in float a_textHeight;
in float a_positionMode;
in float a_labelAngle;
in vec4 a_backdropColor;
in vec4 a_backdropShadowColor;
in float a_backdropShadowBlur;
in float a_backdropPadding;
in vec4 a_backdropBorderColor;
in vec4 a_backdropExtra; // [borderWidth, cornerRadius, labelPadding, area]
in vec2 a_labelBoxOffset;
in vec2 a_quadCorner;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_labelMargin;
uniform float u_zoomLabelSizeRatio;
uniform float u_labelPixelSnapping;
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_nodeFrameTexture;
uniform int u_nodeFrameTextureWidth;
uniform sampler2D u_layerAttributeTexture;
uniform int u_layerAttributeTextureWidth;
uniform int u_layerAttributeTexelsPerNode;

out vec2 v_uv;
out vec2 v_nodeCenter;
out float v_nodeRadius;
out vec2 v_labelCenter;
out vec2 v_labelHalfSize;
out float v_aaWidth;
out float v_shapeId;
out float v_nodeRotation;
out float v_labelAngle;
out vec4 v_backdropColor;
out vec4 v_backdropShadowColor;
out float v_backdropShadowBlur;
out float v_backdropPadding;
out vec4 v_backdropBorderColor;
out float v_backdropBorderWidth;
out float v_backdropCornerRadius;
out float v_backdropArea;
`.concat(jr(e,r,"out"),`

`).concat(Re,`
`).concat(Oe,`
`).concat(nt,`

void main() {
  int nodeIdx = int(a_nodeIndex);
`).concat(o.fetchCode,`
`).concat(o.varyingAssignments,`

  // Node data: (x, y, size, shapeId). shapeId (global) is forwarded to the
  // fragment shader, which keeps the shape SDF for the outline.
  vec4 nodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  vec2 nodePosition = nodeData.xy;
  float nodeSize = nodeData.z;
  float shapeId = nodeData.w;

  // Per-node rotation alignment (0 = viewport, 1 = graph). nodeRotation drives
  // the fragment's shape outline; labelRotation turns the label box with camera.
  vec4 nodeFlags = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  float nodeRotation = nodeFlags.r;
  float labelRotation = nodeFlags.g;
  v_nodeRotation = nodeRotation;

  `).concat(Ur,`
  // CSS pixel attributes are multiplied by u_pixelRatio to match nodeRadiusPixels,
  // which is already in physical pixels (nodeRadiusNDC * u_resolution.x / 2.0).
  float padding = a_backdropPadding * u_pixelRatio;
  float shadowBlur = a_backdropShadowBlur * u_pixelRatio;
  // Unpack a_backdropExtra: [borderWidth, cornerRadius, labelPadding, area]
  float borderWidth = a_backdropExtra.x * u_pixelRatio;
  float cornerRadius = a_backdropExtra.y * u_pixelRatio;
  float labelPad = a_backdropExtra.z * u_pixelRatio;
  float backdropArea = a_backdropExtra.w;
  // Use 2x shadowBlur so the Gaussian fully decays before the quad edge
  float totalExpansion = shadowBlur * 2.0 + borderWidth;
  float enlargedRadius = nodeRadiusPixels + padding;

  // Circumscribed radius for the quad bounds. Non-circular shapes reach past
  // their inradius out to their circumradius (= enlargedRadius / inradiusFactor),
  // in any direction once rotated. The axis-aligned quad must contain that, or
  // the fill/shadow gets clipped (square corners, triangle tip, etc.).
  `).concat(s,`
  float boundRadius = enlargedRadius / inradiusFactor;

  // Apply zoom-dependent label size scaling
  float zoomScale = u_zoomLabelSizeRatio;
  float labelW = a_labelWidth * zoomScale * u_pixelRatio;
  float labelH = a_labelHeight * zoomScale * u_pixelRatio;
  float labelMargin = u_labelMargin * zoomScale * u_pixelRatio;

  // Only apply labelPad when a label is actually present
  float effectiveLabelPad = labelW > 0.0 ? labelPad : 0.0;
  vec2 labelHalfSize = vec2(labelW * 0.5 + effectiveLabelPad, labelH * 0.5 + effectiveLabelPad);
  vec2 labelOffset = vec2(0.0);

  // Effective label angle: intrinsic angle plus the camera angle when the label
  // is graph-aligned, so the box orbits the node in lockstep with the frame-pass.
  float labelAngle = a_labelAngle - labelRotation * u_cameraAngle;
  float la_c = cos(labelAngle);
  float la_s = sin(labelAngle);
  mat2 labelRotMat = mat2(la_c, -la_s, la_s, la_c);

  vec3 nodeClip = u_matrix * vec3(nodePosition, 1.0);
  vec2 snapDelta = vec2(0.0);

  if (labelW > 0.0) {
    // labelW > 0.0 means this node's label is displayed, so the frame-pass wrote
    // its edge distance this frame.
    float edgeDistPixels = nodeRadiusPixels * readFrameTexel(u_nodeFrameTexture, u_nodeFrameTextureWidth, nodeIdx).r;
    // labelMargin matches the label shader's margin (gap from node edge to text)
    float labelStart = edgeDistPixels + labelMargin;
    // Above/below center on the actual glyph height, not the font line box, so
    // the box stays aligned with the rendered text (matches labelBoxCenter()).
    float textHalf = a_textHeight * zoomScale * u_pixelRatio * 0.5;

    // Snap node center to pixel grid so label/backdrop/attachment move as a unit
    vec2 nodeScreen = vec2(
      (nodeClip.x + 1.0) * u_resolution.x,
      (1.0 - nodeClip.y) * u_resolution.y
    ) * 0.5;
    snapDelta = (round(nodeScreen) - nodeScreen) * u_labelPixelSnapping;

    if (a_positionMode < 0.5) {
      // Right: box spans from node center to text end + padding
      float boxRightEdge = labelStart + labelW + labelPad;
      labelOffset = vec2(boxRightEdge * 0.5, 0.0);
      labelHalfSize.x = boxRightEdge * 0.5;
    } else if (a_positionMode < 1.5) {
      // Left: mirror of right
      float boxLeftEdge = labelStart + labelW + labelPad;
      labelOffset = vec2(-boxLeftEdge * 0.5, 0.0);
      labelHalfSize.x = boxLeftEdge * 0.5;
    } else if (a_positionMode < 2.5) {
      // Above: text bottom at labelStart, centered horizontally
      labelOffset = vec2(0.0, -(labelStart + textHalf));
    } else if (a_positionMode < 3.5) {
      // Below: text top at labelStart, centered horizontally
      labelOffset = vec2(0.0, labelStart + textHalf);
    }
    // over (>=4): labelOffset stays (0,0) — text centered on the node.

    // The attachment-cover shift is in label space (like the attachment itself),
    // so rotate it together with the position offset — otherwise the box drifts
    // off the attachment as the label angle grows.
    labelOffset = labelRotMat * (labelOffset + a_labelBoxOffset * zoomScale * u_pixelRatio);
  }

  // For node-only mode, zero out label dimensions
  if (backdropArea > 0.5 && backdropArea < 1.5) {
    labelHalfSize = vec2(0.0);
    labelOffset = vec2(0.0);
  }

  vec2 minBound, maxBound;

  bool hasLabelBounds = labelW > 0.0 && (backdropArea > 1.5 || backdropArea < 0.5);

  if (hasLabelBounds) {
    // Union with label bounds (area=both) or label-only bounds (area=label)
    vec2 labelMin, labelMax;

    if (a_labelAngle != 0.0) {
      vec2 corner1 = labelOffset + labelRotMat * vec2(-labelHalfSize.x, -labelHalfSize.y);
      vec2 corner2 = labelOffset + labelRotMat * vec2(labelHalfSize.x, -labelHalfSize.y);
      vec2 corner3 = labelOffset + labelRotMat * vec2(labelHalfSize.x, labelHalfSize.y);
      vec2 corner4 = labelOffset + labelRotMat * vec2(-labelHalfSize.x, labelHalfSize.y);
      labelMin = min(min(corner1, corner2), min(corner3, corner4));
      labelMax = max(max(corner1, corner2), max(corner3, corner4));
    } else {
      labelMin = labelOffset - labelHalfSize;
      labelMax = labelOffset + labelHalfSize;
    }

    if (backdropArea > 1.5) {
      // Label-only: bounds from label rect only
      minBound = labelMin - totalExpansion;
      maxBound = labelMax + totalExpansion;
    } else {
      // Both: union of node + label
      minBound = min(-vec2(boundRadius), labelMin) - totalExpansion;
      maxBound = max(vec2(boundRadius), labelMax) + totalExpansion;
    }
  } else {
    // Node-only or no visible label
    float totalRadius = boundRadius + totalExpansion;
    minBound = -vec2(totalRadius);
    maxBound = vec2(totalRadius);
  }

  vec2 quadSize = maxBound - minBound;
  vec2 quadCenter = (minBound + maxBound) * 0.5;

  vec2 localPos = quadCenter + a_quadCorner * quadSize * 0.5 + snapDelta;
  vec2 ndcOffset = localPos * 2.0 / u_resolution;
  ndcOffset.y = -ndcOffset.y;

  gl_Position = vec4(nodeClip.xy + ndcOffset, 0.0, 1.0);

  v_uv = localPos;
  v_nodeCenter = vec2(0.0);
  v_nodeRadius = nodeRadiusPixels;
  v_labelCenter = labelOffset;
  v_labelHalfSize = labelHalfSize;
  v_aaWidth = 1.0;
  v_shapeId = shapeId;
  v_labelAngle = labelAngle;
  v_backdropColor = a_backdropColor;
  v_backdropShadowColor = a_backdropShadowColor;
  v_backdropShadowBlur = a_backdropShadowBlur;
  v_backdropPadding = a_backdropPadding;
  v_backdropBorderColor = a_backdropBorderColor;
  v_backdropBorderWidth = borderWidth;
  v_backdropCornerRadius = cornerRadius;
  v_backdropArea = backdropArea;
}
`);return l}function il(a){var n=a.shapes,t=a.layers,e=a.shapeGlobalIds,r=qn(n),i=Tt(n).map(function(c){return"uniform ".concat(c.type," ").concat(c.name,";")}).join(`
`),o=function(g){return Xt(g,"nodeUV","1.0")},s;if(n.length===1)s="float nodeSdfNormalized = ".concat(o(n[0]),";");else{var l=n.map(function(c,g){var p=e?e[g]:g;return"    case ".concat(p,": nodeSdfNormalized = ").concat(o(c),"; break;")}).join(`
`),u=o(n[0]);s=`float nodeSdfNormalized;
  int shapeId = int(v_shapeId);
  switch (shapeId) {
`.concat(l,`
    default: nodeSdfNormalized = `).concat(u,`;
  }`)}var d=`float effectiveRadius = max(enlargedRadius - cornerRadius, 0.01);
  float ca = u_cameraAngle * v_nodeRotation;
  float ca_c = cos(ca);
  float ca_s = sin(ca);
  vec2 rotatedScreenUV = mat2(ca_c, -ca_s, ca_s, ca_c) * screenUV;
  vec2 nodeUV = vec2(rotatedScreenUV.x, -rotatedScreenUV.y) / effectiveRadius;`,h=`#version 300 es
precision highp float;

in vec2 v_uv;
in vec2 v_nodeCenter;
in float v_nodeRadius;
in vec2 v_labelCenter;
in vec2 v_labelHalfSize;
in float v_aaWidth;
in float v_shapeId;
in float v_nodeRotation;
in float v_labelAngle;
in vec4 v_backdropColor;
in vec4 v_backdropShadowColor;
in float v_backdropShadowBlur;
in float v_backdropPadding;
in vec4 v_backdropBorderColor;
in float v_backdropBorderWidth;
in float v_backdropCornerRadius;
in float v_backdropArea;
`.concat(jr(n,t,"in"),`

uniform float u_cameraAngle;
`).concat(i,`

layout(location = 0) out vec4 fragColor;
layout(location = 1) out vec4 fragPicking;

`).concat(r,`
`).concat(Bs,`
`).concat(Ws,`
`).concat(Os,`
`).concat(Us,`

void main() {
  vec4 backdropColor = v_backdropColor;
  vec4 shadowColor = v_backdropShadowColor;
  float shadowBlur = v_backdropShadowBlur;
  float padding = v_backdropPadding;
  vec4 borderColor = v_backdropBorderColor;
  float borderWidth = v_backdropBorderWidth;
  float cornerRadius = v_backdropCornerRadius;

  float enlargedRadius = v_nodeRadius + padding;
  vec2 screenUV = v_uv - v_nodeCenter;
  `).concat(d,`

  // Query the correct shape SDF based on shapeId
  `).concat(s,`
  float nodeSdfPixels = nodeSdfNormalized * effectiveRadius - cornerRadius;

  // Label SDF with optional corner radius and rotation
  float labelSdfPixels;
  if (v_labelHalfSize.x > 0.0) {
    vec2 labelP = v_uv - v_labelCenter;
    labelSdfPixels = sdfRoundedRotatedBox(labelP, v_labelHalfSize, v_labelAngle, cornerRadius);
  } else {
    labelSdfPixels = 10000.0;
  }

  // Select area: 0=both, 1=node, 2=label
  float combinedSdf;
  if (v_backdropArea > 1.5) {
    combinedSdf = labelSdfPixels;
  } else if (v_backdropArea > 0.5) {
    combinedSdf = nodeSdfPixels;
  } else {
    combinedSdf = min(nodeSdfPixels, labelSdfPixels);
  }

  // Fill + border composite
  float outerEdge = smoothstep(v_aaWidth, -v_aaWidth, combinedSdf);
  vec4 background;
  if (borderWidth > 0.5) {
    float innerEdge = smoothstep(v_aaWidth, -v_aaWidth, combinedSdf + borderWidth);
    float fillAlpha = innerEdge * backdropColor.a;
    vec4 fill = vec4(backdropColor.rgb * fillAlpha, fillAlpha);
    float borderAlpha = (outerEdge - innerEdge) * borderColor.a;
    vec4 border = vec4(borderColor.rgb * borderAlpha, borderAlpha);
    background = fill + border * (1.0 - fill.a);
  } else {
    float fillAlpha = outerEdge * backdropColor.a;
    background = vec4(backdropColor.rgb * fillAlpha, fillAlpha);
  }

  // Gaussian-like shadow falloff (mimics canvas shadowBlur)
  vec4 shadow = vec4(0.0);
  float sigma = shadowBlur / 2.5;
  if (sigma > 0.001) {
    float shadowDist = max(0.0, combinedSdf);
    float shadowAlpha = exp(-(shadowDist * shadowDist) / (2.0 * sigma * sigma)) * shadowColor.a;
    shadow = vec4(shadowColor.rgb * shadowAlpha, shadowAlpha);
  }

  fragColor = background + shadow * (1.0 - background.a);
  fragPicking = vec4(0.0);
}
`);return h}function ol(a){var n=["u_matrix","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_resolution","u_pixelRatio","u_labelMargin","u_zoomLabelSizeRatio","u_labelPixelSnapping","u_nodeDataTexture","u_nodeDataTextureWidth","u_nodeFrameTexture","u_nodeFrameTextureWidth","u_layerAttributeTexture","u_layerAttributeTextureWidth","u_layerAttributeTexelsPerNode"],t=M(Tt(a)),e;try{for(t.s();!(e=t.n()).done;){var r=e.value;n.includes(r.name)||n.push(r.name)}}catch(i){t.e(i)}finally{t.f()}return n}function sl(a){return{vertexShader:rl(a),fragmentShader:il(a),uniforms:ol(a.shapes)}}function ll(a,n,t,e){var r,i,o=e.label,s=o===void 0?{}:o,l=e.shapes,u=e.layers,d=e.getAttributeTexture,h=e.shapeGlobalIds;if(l.length===0)throw new Error("createBackdropProgram: at least one shape must be provided in 'shapes'");var c=(r=s.margin)!==null&&r!==void 0?r:5,g=(i=s.zoomToLabelSizeRatioFunction)!==null&&i!==void 0?i:function(){return 1},p={shapes:l,layers:u,shapeGlobalIds:h},y=sl(p),v=function(f){function b(){var _;Y(this,b);for(var m=arguments.length,x=new Array(m),T=0;T<m;T++)x[T]=arguments[T];return _=ie(this,b,[].concat(x)),E(_,"totalBackdropCount",0),E(_,"bufferCapacity",0),_}return oe(b,f),Z(b,[{key:"getDefinition",value:function(){var m=WebGL2RenderingContext,x=m.FLOAT,T=m.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:y.vertexShader,FRAGMENT_SHADER_SOURCE:y.fragmentShader,METHOD:T,UNIFORMS:y.uniforms,ATTRIBUTES:[{name:"a_nodeIndex",size:1,type:x},{name:"a_labelWidth",size:1,type:x},{name:"a_labelHeight",size:1,type:x},{name:"a_textHeight",size:1,type:x},{name:"a_positionMode",size:1,type:x},{name:"a_labelAngle",size:1,type:x},{name:"a_backdropColor",size:4,type:x},{name:"a_backdropShadowColor",size:4,type:x},{name:"a_backdropShadowBlur",size:1,type:x},{name:"a_backdropPadding",size:1,type:x},{name:"a_backdropBorderColor",size:4,type:x},{name:"a_backdropExtra",size:4,type:x},{name:"a_labelBoxOffset",size:2,type:x}],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:x}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:"processBackdrop",value:function(m,x){var T=this.floats,w=this.STRIDE,S=m*w;T[S++]=x.nodeIndex,T[S++]=x.labelWidth,T[S++]=x.labelHeight,T[S++]=x.textHeight,T[S++]=gt[x.position],T[S++]=x.labelAngle,T[S++]=x.backdropColor[0],T[S++]=x.backdropColor[1],T[S++]=x.backdropColor[2],T[S++]=x.backdropColor[3],T[S++]=x.backdropShadowColor[0],T[S++]=x.backdropShadowColor[1],T[S++]=x.backdropShadowColor[2],T[S++]=x.backdropShadowColor[3],T[S++]=x.backdropShadowBlur,T[S++]=x.backdropPadding,T[S++]=x.backdropBorderColor[0],T[S++]=x.backdropBorderColor[1],T[S++]=x.backdropBorderColor[2],T[S++]=x.backdropBorderColor[3],T[S++]=x.backdropBorderWidth,T[S++]=x.backdropCornerRadius,T[S++]=x.backdropLabelPadding,T[S++]=x.backdropArea,T[S++]=x.labelBoxOffset[0],T[S++]=x.labelBoxOffset[1]}},{key:"setUniforms",value:function(m,x){var T=x.gl,w=x.uniformLocations;T.uniformMatrix3fv(w.u_matrix,!1,m.matrix),T.uniform1f(w.u_sizeRatio,m.sizeRatio),T.uniform1f(w.u_correctionRatio,m.correctionRatio),T.uniform1f(w.u_cameraAngle,m.cameraAngle),T.uniform2f(w.u_resolution,m.width*m.pixelRatio,m.height*m.pixelRatio),T.uniform1f(w.u_pixelRatio,m.pixelRatio),T.uniform1f(w.u_labelMargin,b.labelMargin),T.uniform1f(w.u_zoomLabelSizeRatio,1/g(m.zoomRatio)),T.uniform1f(w.u_labelPixelSnapping,m.labelPixelSnapping),T.uniform1i(w.u_nodeDataTexture,m.nodeDataTextureUnit),T.uniform1i(w.u_nodeDataTextureWidth,m.nodeDataTextureWidth),T.uniform1i(w.u_nodeFrameTexture,m.nodeFrameTextureUnit),T.uniform1i(w.u_nodeFrameTextureWidth,m.nodeFrameTextureWidth);var S=d();w.u_layerAttributeTexture&&S&&(S.bind(ke),T.uniform1i(w.u_layerAttributeTexture,ke),T.uniform1i(w.u_layerAttributeTextureWidth,S.getTextureWidth()),T.uniform1i(w.u_layerAttributeTexelsPerNode,S.getTexelsPerItem()));var A=M(Tt(l)),R;try{for(A.s();!(R=A.n()).done;){var k=R.value;this.setTypedUniform(k,x)}}catch(D){A.e(D)}finally{A.f()}}},{key:"hasNothingToRender",value:function(){return this.totalBackdropCount===0}},{key:"drawWebGL",value:function(m,x){var T=x.gl;this.totalBackdropCount!==0&&(this.isInstanced?T.drawArraysInstanced(m,0,this.VERTICES,this.totalBackdropCount):T.drawArrays(m,0,this.totalBackdropCount*this.VERTICES))}},{key:"reallocate",value:function(m){this.totalBackdropCount=m,m>this.bufferCapacity&&(this.bufferCapacity=Math.max(m,Math.ceil(this.bufferCapacity*1.5)||10),le(b,"reallocate",this)([this.bufferCapacity]))}}])}(Ue);return E(v,"labelMargin",c),new v(a,n,t)}var Xr=function(a){function n(){var t;Y(this,n);for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return t=ie(this,n,[].concat(r)),E(t,"totalCharacterCount",0),E(t,"bufferCapacity",0),t}return oe(n,a),Z(n,[{key:"processLabel",value:function(e,r,i){if(i.hidden||!i.text)return 0;for(var o=i.text,s=o.length,l=0;l<s;l++){var u=o[l];this.processCharacter(r+l,i,u,l)}return s}},{key:"hasNothingToRender",value:function(){return this.totalCharacterCount===0}},{key:"drawWebGL",value:function(e,r){var i=r.gl;this.totalCharacterCount!==0&&(this.isInstanced?i.drawArraysInstanced(e,0,this.VERTICES,this.totalCharacterCount):i.drawArrays(e,0,this.totalCharacterCount*this.VERTICES))}},{key:"reallocate",value:function(e){this.totalCharacterCount=e,e>this.bufferCapacity&&(this.bufferCapacity=Math.max(e,Math.ceil(this.bufferCapacity*1.5)||1e3),le(n,"reallocate",this)([this.bufferCapacity]))}}])}(Ue);function ul(){var a=`#version 300 es

in float a_nodeIndex;
in vec4 a_id;
in vec4 a_color;
in float a_labelWidth;
in float a_labelHeight;
in float a_textHeight;
in float a_positionMode;
in float a_labelAngle;
in float a_padding;
in vec2 a_quadCorner;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_labelMargin;
uniform float u_zoomLabelSizeRatio;
uniform float u_labelPixelSnapping;
uniform float u_pickingPadding;
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_nodeFrameTexture;
uniform int u_nodeFrameTextureWidth;

out vec4 v_id;
out vec4 v_color;

`.concat(Re,`
`).concat(Oe,`
`).concat(nt,`
`).concat($r,`

void main() {
  int nodeIdx = int(a_nodeIndex);

  // Node data: (x, y, size, shapeId).
  vec4 nodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  vec2 nodePosition = nodeData.xy;
  float nodeSize = nodeData.z;

  // Shape-aware edge distance, read once from the shared frame texture.
  float edgeDist = readFrameTexel(u_nodeFrameTexture, u_nodeFrameTextureWidth, nodeIdx).r;

  // Per-node label rotation alignment: 0 = viewport, 1 = label turns with camera.
  float labelRotation = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx).g;

  `).concat(Ur,`

  float zoomScale = u_zoomLabelSizeRatio;
  float labelW = a_labelWidth * zoomScale * u_pixelRatio;
  float labelH = a_labelHeight * zoomScale * u_pixelRatio;
  float labelMargin = u_labelMargin * zoomScale * u_pixelRatio;
#ifdef PICKING_MODE
  float padding = u_pickingPadding * u_pixelRatio;
#else
  float padding = a_padding * u_pixelRatio;
#endif

  if (labelW <= 0.0) {
    gl_Position = vec4(2.0, 0.0, 0.0, 1.0);
    v_id = vec4(0.0);
    v_color = vec4(0.0);
    return;
  }

  vec2 labelHalfSize = vec2(labelW * 0.5 + padding, labelH * 0.5 + padding);
  vec2 labelOffset = vec2(0.0);

  // Graph-aligned labels add the camera angle so the rect orbits with the text.
  float labelAngle = a_labelAngle - labelRotation * u_cameraAngle;
  float la_c = cos(labelAngle);
  float la_s = sin(labelAngle);
  mat2 labelRotMat = mat2(la_c, -la_s, la_s, la_c);

  vec3 nodeClip = u_matrix * vec3(nodePosition, 1.0);
  vec2 nodeScreen = vec2(
    (nodeClip.x + 1.0) * u_resolution.x,
    (1.0 - nodeClip.y) * u_resolution.y
  ) * 0.5;
  vec2 snapDelta = (round(nodeScreen) - nodeScreen) * u_labelPixelSnapping;

  if (a_positionMode < 4.0) {
    float labelStart = nodeRadiusPixels * edgeDist + labelMargin;
    float textHalf = a_textHeight * zoomScale * u_pixelRatio * 0.5;
    // Box center uses the text half-size; the padding expands the quad below.
    labelOffset = labelRotMat * labelBoxCenter(a_positionMode, labelStart, vec2(labelW * 0.5, labelH * 0.5), textHalf);
  }

  // Rotate the rect with the label so it stays aligned with the (rotated) text.
  vec2 localPos = labelOffset + labelRotMat * (a_quadCorner * labelHalfSize);
  vec2 ndcOffset = (localPos + snapDelta) * 2.0 / u_resolution;
  ndcOffset.y = -ndcOffset.y;

  gl_Position = vec4(nodeClip.xy + ndcOffset, 0.0, 1.0);
  v_id = a_id;
  v_color = a_color;
}
`);return a}var dl=`#version 300 es
precision highp float;

in vec4 v_id;
in vec4 v_color;

out vec4 fragColor;

void main() {
  #ifdef PICKING_MODE
    fragColor = v_id;
  #else
    if (v_color.a <= 0.0) discard;
    // v_color is non-premultiplied RGBA (0-1); convert to premultiplied for blending
    fragColor = vec4(v_color.rgb * v_color.a, v_color.a);
  #endif
}
`;function hl(a,n,t,e){var r,i,o=e.label,s=o===void 0?{}:o,l=(r=s.margin)!==null&&r!==void 0?r:xt,u=(i=s.zoomToLabelSizeRatioFunction)!==null&&i!==void 0?i:function(){return 1},d=ul(),h=function(c){function g(){var p;Y(this,g);for(var y=arguments.length,v=new Array(y),f=0;f<y;f++)v[f]=arguments[f];return p=ie(this,g,[].concat(v)),E(p,"totalCount",0),E(p,"bufferCapacity",0),p}return oe(g,c),Z(g,[{key:"getDefinition",value:function(){var y=WebGL2RenderingContext,v=y.FLOAT,f=y.UNSIGNED_BYTE,b=y.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:d,FRAGMENT_SHADER_SOURCE:dl,METHOD:b,UNIFORMS:["u_matrix","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_resolution","u_pixelRatio","u_labelMargin","u_zoomLabelSizeRatio","u_labelPixelSnapping","u_pickingPadding","u_nodeDataTexture","u_nodeDataTextureWidth","u_nodeFrameTexture","u_nodeFrameTextureWidth"],ATTRIBUTES:[{name:"a_nodeIndex",size:1,type:v},{name:"a_id",size:4,type:f,normalized:!0},{name:"a_color",size:4,type:f,normalized:!0},{name:"a_labelWidth",size:1,type:v},{name:"a_labelHeight",size:1,type:v},{name:"a_textHeight",size:1,type:v},{name:"a_positionMode",size:1,type:v},{name:"a_labelAngle",size:1,type:v},{name:"a_padding",size:1,type:v}],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:v}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:"processLabelBackground",value:function(y,v){var f=this.floats,b=this.ints,_=y*this.STRIDE;f[_++]=v.nodeIndex,b[_++]=v.id,f[_++]=v.color,f[_++]=v.labelWidth,f[_++]=v.labelHeight,f[_++]=v.textHeight,f[_++]=v.positionMode,f[_++]=v.labelAngle,f[_++]=v.padding}},{key:"setUniforms",value:function(y,v){var f=v.gl,b=v.uniformLocations;f.uniformMatrix3fv(b.u_matrix,!1,y.matrix),f.uniform1f(b.u_sizeRatio,y.sizeRatio),f.uniform1f(b.u_correctionRatio,y.correctionRatio),f.uniform1f(b.u_cameraAngle,y.cameraAngle),f.uniform2f(b.u_resolution,y.width*y.pixelRatio,y.height*y.pixelRatio),f.uniform1f(b.u_pixelRatio,y.pixelRatio),f.uniform1f(b.u_labelMargin,g.labelMargin),f.uniform1f(b.u_zoomLabelSizeRatio,1/u(y.zoomRatio)),f.uniform1f(b.u_labelPixelSnapping,y.labelPixelSnapping),f.uniform1f(b.u_pickingPadding,y.labelPickingPadding),f.uniform1i(b.u_nodeDataTexture,y.nodeDataTextureUnit),f.uniform1i(b.u_nodeDataTextureWidth,y.nodeDataTextureWidth),f.uniform1i(b.u_nodeFrameTexture,y.nodeFrameTextureUnit),f.uniform1i(b.u_nodeFrameTextureWidth,y.nodeFrameTextureWidth)}},{key:"hasNothingToRender",value:function(){return this.totalCount===0}},{key:"drawWebGL",value:function(y,v){var f=v.gl;this.totalCount!==0&&f.drawArraysInstanced(f.TRIANGLE_STRIP,0,this.VERTICES,this.totalCount)}},{key:"reallocate",value:function(y){this.totalCount=y,y>this.bufferCapacity&&(this.bufferCapacity=Math.max(y,Math.ceil(this.bufferCapacity*1.5)||10),le(g,"reallocate",this)([this.bufferCapacity]))}}])}(Ue);return E(h,"labelMargin",l),new h(a,n,t)}var Ee={fontSize:64,buffer:8,radius:24,cutoff:.25,maxTextureSize:2048,debounceTimeout:100},lt=2,Ht=1e20;function cl(a,n,t,e,r){var i=a+r*4,o=document.createElement("canvas");o.width=i,o.height=i;var s=o.getContext("2d",{willReadFrequently:!0});return s.font="".concat(e," ").concat(t," ").concat(a,"px ").concat(n),s.textBaseline="alphabetic",s.textAlign="left",s.fillStyle="black",{ctx:s,canvasSize:i,gridOuter:new Float64Array(i*i),gridInner:new Float64Array(i*i),f:new Float64Array(i),z:new Float64Array(i+1),v:new Uint16Array(i)}}function fl(a,n,t,e,r){var i=a.ctx,o=a.canvasSize,s=i.measureText(n),l=s.width,u=s.actualBoundingBoxAscent,d=s.actualBoundingBoxDescent,h=s.actualBoundingBoxLeft,c=s.actualBoundingBoxRight,g=Math.ceil(u),p=Math.ceil(h),y=Math.max(0,Math.min(o-t,Math.ceil(h)+Math.ceil(c))),v=Math.min(o-t,g+Math.ceil(d)),f=y+2*t,b=v+2*t,_=Math.max(f*b,0),m=new Uint8ClampedArray(_),x={data:m,width:f,height:b,glyphWidth:y,glyphHeight:v,glyphTop:g,glyphLeft:p,glyphAdvance:l};if(y===0||v===0)return x;var T=a.gridInner,w=a.gridOuter;i.clearRect(t,t,y,v),i.fillText(n,t+p,t+g);var S=i.getImageData(t,t,y,v);w.fill(Ht,0,_),T.fill(0,0,_);for(var A=0;A<v;A++)for(var R=0;R<y;R++){var k=S.data[4*(A*y+R)+3]/255;if(k!==0){var D=(A+t)*f+R+t;if(k===1)w[D]=0,T[D]=Ht;else{var F=.5-k;w[D]=F>0?F*F:0,T[D]=F<0?F*F:0}}}Ca(w,0,0,f,b,f,a.f,a.v,a.z),Ca(T,t,t,y,v,f,a.f,a.v,a.z);for(var L=0;L<_;L++){var N=Math.sqrt(w[L])-Math.sqrt(T[L]);m[L]=Math.round(255-255*(N/e+r))}return x}function Ca(a,n,t,e,r,i,o,s,l){for(var u=n;u<n+e;u++)La(a,t*i+u,i,r,o,s,l);for(var d=t;d<t+r;d++)La(a,d*i+n,1,e,o,s,l)}function La(a,n,t,e,r,i,o){i[0]=0,o[0]=-1e20,o[1]=Ht,r[0]=a[n];for(var s=1,l=0,u=0;s<e;s++){r[s]=a[n+s*t];var d=s*s;do{var h=i[l];u=(r[s]-r[h]+d-h*h)/(s-h)/2}while(u<=o[l]&&--l>-1);l++,i[l]=s,o[l]=u,o[l+1]=Ht}for(var c=0,g=0;c<e;c++){for(;o[g+1]<c;)g++;var p=i[g],y=c-p;a[n+c*t]=r[p]+y*y}}var Ze=function(a){function n(){var t,e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Y(this,n),t=ie(this,n),E(t,"fonts",new Map),E(t,"textures",[]),E(t,"cursor",{x:0,y:0,rowHeight:0,atlasIndex:0}),E(t,"pendingGlyphs",[]),E(t,"debounceTimer",null),t.options=W(W({},Ee),e),t.canvas=document.createElement("canvas"),t.canvas.width=t.options.maxTextureSize,t.canvas.height=t.options.maxTextureSize,t.ctx=t.canvas.getContext("2d",{willReadFrequently:!0}),t.measureCanvas=document.createElement("canvas"),t.measureCtx=t.measureCanvas.getContext("2d"),t.textures.push(t.ctx.getImageData(0,0,1,1)),t}return oe(n,a),Z(n,[{key:"getFontKey",value:function(e){return"".concat(e.family,"-").concat(e.weight,"-").concat(e.style)}},{key:"registerFont",value:function(e){var r=this.getFontKey(e);if(this.fonts.has(r))return r;var i=cl(this.options.fontSize,e.family,e.weight,e.style,this.options.buffer);return this.fonts.set(r,{descriptor:e,generator:i,glyphs:new Map}),r}},{key:"ensureGlyphs",value:function(e,r){var i=this.fonts.get(r);if(!i)throw new Error('Font "'.concat(r,'" is not registered. Call registerFont() first.'));var o=!1,s=M(e),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,d=u.codePointAt(0);d!==void 0&&(i.glyphs.has(d)||(this.pendingGlyphs.push({fontKey:r,charCode:d}),o=!0))}}catch(h){s.e(h)}finally{s.f()}o&&this.scheduleTextureGeneration()}},{key:"measureText",value:function(e,r){var i=this.fonts.get(r);if(!i)throw new Error('Font "'.concat(r,'" is not registered.'));var o=i.descriptor,s=o.family,l=o.weight,u=o.style;return this.measureCtx.font="".concat(u," ").concat(l," ").concat(this.options.fontSize,"px ").concat(s),this.measureCtx.measureText(e).width}},{key:"getGlyph",value:function(e,r){var i=this.fonts.get(r);if(i)return i.glyphs.get(e)}},{key:"getTextures",value:function(){return this.textures}},{key:"getFontCount",value:function(){return this.fonts.size}},{key:"getGlyphCount",value:function(){var e=0,r=M(this.fonts.values()),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;e+=o.glyphs.size}}catch(s){r.e(s)}finally{r.f()}return e}},{key:"hasPendingGlyphs",value:function(){return this.pendingGlyphs.length>0}},{key:"flush",value:function(){this.debounceTimer&&(clearTimeout(this.debounceTimer),this.debounceTimer=null),this.generateTextures()}},{key:"destroy",value:function(){this.debounceTimer&&clearTimeout(this.debounceTimer),this.fonts.clear(),this.textures=[],this.pendingGlyphs=[],this.removeAllListeners()}},{key:"scheduleTextureGeneration",value:function(){var e=this;this.debounceTimer===null&&(this.options.debounceTimeout===null?this.generateTextures():this.debounceTimer=setTimeout(function(){e.debounceTimer=null,e.generateTextures()},this.options.debounceTimeout))}},{key:"generateTextures",value:function(){if(this.pendingGlyphs.length!==0){var e=this.options,r=e.maxTextureSize,i=e.buffer,o=e.radius,s=e.cutoff,l=M(this.pendingGlyphs),u;try{for(l.s();!(u=l.n()).done;){var d=u.value,h=d.fontKey,c=d.charCode,g=this.fonts.get(h);if(!(!g||g.glyphs.has(c))){var p=String.fromCodePoint(c),y=fl(g.generator,p,i,o,s),v=y.width,f=y.height;this.cursor.x+v+lt>r&&(this.cursor.x=0,this.cursor.y+=this.cursor.rowHeight+lt,this.cursor.rowHeight=0),this.cursor.y+f+lt>r&&(this.finalizeCurrentTexture(),this.cursor={x:0,y:0,rowHeight:0,atlasIndex:this.cursor.atlasIndex+1},this.ctx.clearRect(0,0,r,r));for(var b=y.data,_=new Uint8ClampedArray(v*f*4),m=0;m<b.length;m++){var x=m*4;_[x]=255,_[x+1]=255,_[x+2]=255,_[x+3]=b[m]}var T=new ImageData(_,v,f);this.ctx.putImageData(T,this.cursor.x,this.cursor.y);var w={charCode:c,width:y.glyphWidth,height:y.glyphHeight,bearingX:-y.glyphLeft-i,bearingY:y.glyphTop+i,advance:y.glyphAdvance,atlasX:this.cursor.x,atlasY:this.cursor.y,atlasWidth:v,atlasHeight:f,atlasIndex:this.cursor.atlasIndex};g.glyphs.set(c,w),this.cursor.x+=v+lt,this.cursor.rowHeight=Math.max(this.cursor.rowHeight,f)}}}catch(S){l.e(S)}finally{l.f()}this.finalizeCurrentTexture(),this.pendingGlyphs=[],this.emit(n.ATLAS_UPDATED_EVENT,{textures:this.textures,glyphCount:this.getGlyphCount()})}}},{key:"finalizeCurrentTexture",value:function(){var e=this.options.maxTextureSize,r=this.cursor.y>0||this.cursor.rowHeight>0,i=Math.min(e,Math.max(this.cursor.x,r?e:1)),o=Math.min(e,this.cursor.y+this.cursor.rowHeight+lt),s=this.ctx.getImageData(0,0,i,o);this.cursor.atlasIndex>=this.textures.length?this.textures.push(s):this.textures[this.cursor.atlasIndex]=s}}])}(Fn.EventEmitter);E(Ze,"ATLAS_UPDATED_EVENT","atlasUpdated");var gl=Ee.fontSize;function pl(){var a=`  // -------------------------------------------------------------------------
  // Step 3: Calculate position offset from the shared edge distance
  // -------------------------------------------------------------------------
  vec2 positionOffset = vec2(0.0);

  if (a_positionMode < 4.0) {
    vec2 screenDir = getLabelDirection(a_positionMode);
    float boundaryDistPixels = nodeRadiusPixels * edgeDist;
    positionOffset = screenDir * (boundaryDistPixels + margin);
  }`,n=`#version 300 es

// ============================================================================
// Attributes
// ============================================================================

// Per-character (instanced)
in float a_nodeIndex;        // Index into node data texture
in vec2 a_charOffset;        // Character offset from label origin (pixels)
in vec2 a_charSize;          // Character dimensions (pixels)
in vec4 a_texCoords;         // Atlas coords: (x, y, width, height) in pixels
in vec4 a_color;             // Text color (RGBA)
in float a_margin;           // Gap between node edge and label (pixels)
in float a_positionMode;     // Position: 0=right, 1=left, 2=above, 3=below, 4=over
in float a_labelWidth;       // Total label width (pixels)
in float a_labelHeight;      // Label height (pixels)
in float a_verticalCenter;   // Vertical center offset from baseline (pixels)
in float a_textHeight;       // Actual text height: maxAscent + maxDescent (pixels)
in float a_labelAngle;       // Label rotation angle (radians)

// Per-vertex (constant quad corners)
in vec2 a_quadCorner;        // Quad corner: [-1,-1], [1,-1], [-1,1], [1,1]

// ============================================================================
// Uniforms
// ============================================================================

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
uniform vec2 u_resolution;
uniform vec2 u_atlasSize;
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_nodeFrameTexture;
uniform int u_nodeFrameTextureWidth;
uniform float u_zoomLabelSizeRatio;
uniform float u_labelPixelSnapping;
uniform float u_pixelRatio;

// ============================================================================
// Varyings
// ============================================================================

out vec2 v_texCoord;
out vec4 v_color;
out float v_fontScale;

// ============================================================================
// Constants
// ============================================================================

const float bias = 255.0 / 254.0;
const float ATLAS_FONT_SIZE = `.concat(te(gl),`;

// ============================================================================
// Helper Functions
// ============================================================================

`).concat(Re,`
`).concat(Oe,`
`).concat(nt,`
`).concat(Hr,`

// ============================================================================
// Main
// ============================================================================

void main() {
  // -------------------------------------------------------------------------
  // Step 0: Fetch node data + shared edge distance from textures
  // -------------------------------------------------------------------------
  // Node-data texture format: vec4(x, y, size, shapeId)
  // 2D texture layout: texCoord = (index % width, index / width)
  int nodeIdx = int(a_nodeIndex);
  vec4 nodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  vec2 a_anchorPosition = nodeData.xy;
  float a_nodeSize = nodeData.z;

  // Normalized edge distance from the shared frame texture (the frame-pass ran
  // the SDF search once; the label just reads the result).
  float edgeDist = readFrameTexel(u_nodeFrameTexture, u_nodeFrameTextureWidth, nodeIdx).r;

  // Per-node label rotation alignment: 0 = viewport, 1 = label turns with camera.
  float labelRotation = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx).g;

  // Apply zoom-dependent label size scaling
  // Positional values are in CSS pixels; multiply by u_pixelRatio to convert to
  // physical pixels, which is what the NDC conversion (/ u_resolution) expects.
  float zoomScale = u_zoomLabelSizeRatio;
  float margin = a_margin * zoomScale * u_pixelRatio;
  vec2 charOffset = a_charOffset * zoomScale * u_pixelRatio;
  vec2 charSize = a_charSize * zoomScale * u_pixelRatio;
  float labelWidth = a_labelWidth * zoomScale * u_pixelRatio;
  float labelHeight = a_labelHeight * zoomScale;

  // Font scale: ratio of CSS label size to the base atlas font size.
  // Divided by u_pixelRatio because the atlas is generated at ATLAS_FONT_SIZE * pixelRatio,
  // which cancels out the u_pixelRatio in the fragment shader's gamma formula and keeps
  // the anti-aliasing band width consistent across pixel densities.
  v_fontScale = a_labelHeight * zoomScale / (ATLAS_FONT_SIZE * u_pixelRatio);

  // -------------------------------------------------------------------------
  // Step 1: Transform node position to clip space
  // -------------------------------------------------------------------------
  vec3 anchorClip = u_matrix * vec3(a_anchorPosition, 1.0);

  // -------------------------------------------------------------------------
  // Step 2: Convert node size to screen pixels
  // -------------------------------------------------------------------------
  float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
  float nodeRadiusGraphSpace = a_nodeSize * u_correctionRatio / u_sizeRatio * 2.0;
  float nodeRadiusNDC = nodeRadiusGraphSpace * matrixScaleX;
  float nodeRadiusPixels = nodeRadiusNDC * u_resolution.x / 2.0;

`).concat(a,`

  // -------------------------------------------------------------------------
  // Step 4: Calculate final vertex position
  // -------------------------------------------------------------------------
  vec2 cornerOffset = (a_quadCorner + 1.0) * 0.5;
  vec2 charPixelPos = positionOffset + charOffset + cornerOffset * charSize;

  // Apply text alignment based on position mode
  float verticalCenter = a_verticalCenter * zoomScale * u_pixelRatio;
  float textHeight = a_textHeight * zoomScale * u_pixelRatio;
  float baselineToDescent = textHeight / 2.0 - verticalCenter;
  float baselineToAscent = textHeight / 2.0 + verticalCenter;

  if (a_positionMode < 0.5) {
    // Right: vertically center
    charPixelPos.y += verticalCenter;
  } else if (a_positionMode < 1.5) {
    // Left: right-align and vertically center
    charPixelPos.x -= labelWidth;
    charPixelPos.y += verticalCenter;
  } else if (a_positionMode < 2.5) {
    // Above: center horizontally, bottom of text at anchor
    charPixelPos.x -= labelWidth * 0.5;
    charPixelPos.y -= baselineToDescent;
  } else if (a_positionMode < 3.5) {
    // Below: center horizontally, top of text at anchor
    charPixelPos.x -= labelWidth * 0.5;
    charPixelPos.y += baselineToAscent;
  } else {
    // Over: center both
    charPixelPos.x -= labelWidth * 0.5;
    charPixelPos.y += verticalCenter;
  }

  // Apply label angle rotation. Graph-aligned labels add the camera angle so the
  // whole label orbits the node in lockstep with the frame-pass edge distance.
  float labelAngle = a_labelAngle - labelRotation * u_cameraAngle;
  float la_c = cos(labelAngle);
  float la_s = sin(labelAngle);
  mat2 labelRotMat = mat2(la_c, -la_s, la_s, la_c);
  charPixelPos = labelRotMat * charPixelPos;

  // Snap node center to pixel grid so label/backdrop/attachment move as a unit
  vec2 nodeScreen = vec2(
    (anchorClip.x + 1.0) * u_resolution.x,
    (1.0 - anchorClip.y) * u_resolution.y
  ) * 0.5;
  charPixelPos += (round(nodeScreen) - nodeScreen) * u_labelPixelSnapping;

  // Convert to NDC (flip Y: screen Y-down -> clip Y-up)
  vec2 ndcOffset = vec2(charPixelPos.x, -charPixelPos.y) * 2.0 / u_resolution;
  gl_Position = vec4(anchorClip.xy + ndcOffset, 0.0, 1.0);

  // -------------------------------------------------------------------------
  // Step 5: Texture coordinates
  // -------------------------------------------------------------------------
  v_texCoord = (a_texCoords.xy + cornerOffset * a_texCoords.zw) / u_atlasSize;

  // -------------------------------------------------------------------------
  // Step 6: Pass color
  // -------------------------------------------------------------------------
  v_color = a_color;
  v_color.a *= bias;
}
`);return n}function vl(){var a=`#version 300 es
precision highp float;

in vec2 v_texCoord;
in vec4 v_color;
in float v_fontScale;

uniform sampler2D u_atlas;
uniform float u_gamma;
uniform float u_sdfBuffer;
uniform float u_pixelRatio;

// Fragment output (single target - picking handled via separate pass)
out vec4 fragColor;

void main() {
  #ifdef PICKING_MODE
    // Labels are not pickable - discard all fragments in picking mode
    discard;
  #else
    // Sample SDF value from atlas (high = inside glyph, low = outside)
    float sdfValue = texture(u_atlas, v_texCoord).a;

    // Edge threshold: 1.0 - cutoff = 0.75 for default cutoff=0.25
    // This is where the glyph edge is located in the SDF
    float edgeThreshold = 1.0 - u_sdfBuffer;

    // Gamma controls the anti-aliasing band width.
    // Scale inversely with font scale so small labels get a wider AA band
    // (smoother) and large labels get a tighter band (sharper).
    float gamma = u_gamma / (u_pixelRatio * v_fontScale);

    // Pure gamma-based anti-aliasing using smoothstep
    // The AA band extends from (threshold - gamma) to (threshold + gamma)
    float alpha = smoothstep(edgeThreshold - gamma, edgeThreshold + gamma, sdfValue);

    // Premultiplied alpha output for correct blending
    float finalAlpha = v_color.a * alpha;
    fragColor = vec4(v_color.rgb * finalAlpha, finalAlpha);
  #endif
}
`;return a}function ml(){return["u_matrix","u_sizeRatio","u_correctionRatio","u_cameraAngle","u_resolution","u_atlasSize","u_atlas","u_gamma","u_sdfBuffer","u_pixelRatio","u_nodeDataTexture","u_nodeDataTextureWidth","u_nodeFrameTexture","u_nodeFrameTextureWidth","u_zoomLabelSizeRatio","u_labelPixelSnapping"]}function bl(){return{vertexShader:pl(),fragmentShader:vl(),uniforms:ml()}}function yl(a,n,t,e){var r,i,o=e.label,s=o===void 0?{}:o,l=(r=s.margin)!==null&&r!==void 0?r:xt,u=(i=s.zoomToLabelSizeRatioFunction)!==null&&i!==void 0?i:function(){return 1},d=bl(),h=function(c){function g(p,y,v){var f,b,_,m;if(Y(this,g),m=ie(this,g,[p,y,v]),E(m,"atlasTexture",null),E(m,"atlasNeedsUpdate",!1),E(m,"labelGlyphCache",new Map),m.atlasFontSize=Ee.fontSize*Tn(),m.atlasManager=new Ze({fontSize:m.atlasFontSize}),m.gamma=.025,m.sdfBuffer=Ee.cutoff,m.atlasTexture=p.createTexture(),!m.atlasTexture)throw new Error("NodeLabelProgram: failed to create atlas texture");p.bindTexture(p.TEXTURE_2D,m.atlasTexture),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_S,p.CLAMP_TO_EDGE),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_T,p.CLAMP_TO_EDGE),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MIN_FILTER,p.LINEAR),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MAG_FILTER,p.LINEAR),p.bindTexture(p.TEXTURE_2D,null),m.atlasManager.on(Ze.ATLAS_UPDATED_EVENT,function(){m.atlasNeedsUpdate=!0});var x={family:((f=s.font)===null||f===void 0?void 0:f.family)||"sans-serif",weight:((b=s.font)===null||b===void 0?void 0:b.weight)||"normal",style:((_=s.font)===null||_===void 0?void 0:_.style)||"normal"};return m.defaultFontKey=m.atlasManager.registerFont(x),m}return oe(g,c),Z(g,[{key:"getDefinition",value:function(){var y=WebGL2RenderingContext,v=y.FLOAT,f=y.UNSIGNED_BYTE,b=y.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:d.vertexShader,FRAGMENT_SHADER_SOURCE:d.fragmentShader,METHOD:b,UNIFORMS:d.uniforms,ATTRIBUTES:[{name:"a_nodeIndex",size:1,type:v},{name:"a_charOffset",size:2,type:v},{name:"a_charSize",size:2,type:v},{name:"a_texCoords",size:4,type:v},{name:"a_color",size:4,type:f,normalized:!0},{name:"a_margin",size:1,type:v},{name:"a_positionMode",size:1,type:v},{name:"a_labelWidth",size:1,type:v},{name:"a_labelHeight",size:1,type:v},{name:"a_verticalCenter",size:1,type:v},{name:"a_textHeight",size:1,type:v},{name:"a_labelAngle",size:1,type:v}],CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:v}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:"prepareLabelGlyphs",value:function(y,v){if(v.hidden||!v.text){this.labelGlyphCache.delete(y);return}var f=v.text,b=v.fontKey||this.defaultFontKey;this.atlasManager.ensureGlyphs(f,b);var _=[],m=[],x=0,T=0,w=0,S=M(f),A;try{for(S.s();!(A=S.n()).done;){var R=A.value,k=R.codePointAt(0);if(k===void 0){_.push(void 0),m.push(x);continue}var D=this.atlasManager.getGlyph(k,b);_.push(D),m.push(x),D&&(x+=D.advance,T=Math.max(T,D.bearingY),w=Math.max(w,D.atlasHeight-D.bearingY))}}catch(F){S.e(F)}finally{S.f()}this.labelGlyphCache.set(y,{glyphs:_,xOffsets:m,totalWidth:x,totalHeight:T+w,verticalCenterOffset:(T-w)/2})}},{key:"processCharacter",value:function(y,v,f,b){var _=this.floats,m=this.STRIDE,x=y*m,T=this.labelGlyphCache.get(v.parentKey);if(!T||!T.glyphs[b]){for(var w=0;w<m;w++)_[x+w]=0;return}var S=T.glyphs[b],A=T.xOffsets[b],R=v.size/this.atlasFontSize,k=Se(v.color),D=x;_[D++]=v.nodeIndex,_[D++]=(A+S.bearingX)*R,_[D++]=-S.bearingY*R,_[D++]=S.atlasWidth*R,_[D++]=S.atlasHeight*R,_[D++]=S.atlasX,_[D++]=S.atlasY,_[D++]=S.atlasWidth,_[D++]=S.atlasHeight,_[D++]=k,_[D++]=v.margin,_[D++]=gt[v.position],_[D++]=T.totalWidth*R,_[D++]=v.size,_[D++]=T.verticalCenterOffset*R,_[D++]=T.totalHeight*R,_[D++]=v.labelAngle}},{key:"processLabel",value:function(y,v,f){return this.prepareLabelGlyphs(y,f),le(g,"processLabel",this)([y,v,f])}},{key:"updateAtlasTexture",value:function(){if(this.atlasNeedsUpdate){var y=this.normalProgram.gl,v=this.atlasManager.getTextures();if(v.length!==0){var f=v[0];y.bindTexture(y.TEXTURE_2D,this.atlasTexture),y.texImage2D(y.TEXTURE_2D,0,y.RGBA,f.width,f.height,0,y.RGBA,y.UNSIGNED_BYTE,f.data),y.bindTexture(y.TEXTURE_2D,null),this.atlasNeedsUpdate=!1}}}},{key:"setUniforms",value:function(y,v){var f=v.gl,b=v.uniformLocations;f.uniformMatrix3fv(b.u_matrix,!1,y.matrix),f.uniform1f(b.u_sizeRatio,y.sizeRatio),f.uniform1f(b.u_correctionRatio,y.correctionRatio),f.uniform1f(b.u_cameraAngle,y.cameraAngle),f.uniform2f(b.u_resolution,y.width*y.pixelRatio,y.height*y.pixelRatio);var _=this.atlasManager.getTextures();_.length>0?f.uniform2f(b.u_atlasSize,_[0].width,_[0].height):f.uniform2f(b.u_atlasSize,1,1),f.activeTexture(f.TEXTURE0),f.bindTexture(f.TEXTURE_2D,this.atlasTexture),f.uniform1i(b.u_atlas,0),b.u_nodeDataTexture!==void 0&&f.uniform1i(b.u_nodeDataTexture,y.nodeDataTextureUnit),b.u_nodeDataTextureWidth!==void 0&&f.uniform1i(b.u_nodeDataTextureWidth,y.nodeDataTextureWidth),f.uniform1i(b.u_nodeFrameTexture,y.nodeFrameTextureUnit),f.uniform1i(b.u_nodeFrameTextureWidth,y.nodeFrameTextureWidth),f.uniform1f(b.u_gamma,this.gamma),f.uniform1f(b.u_sdfBuffer,this.sdfBuffer),f.uniform1f(b.u_pixelRatio,y.pixelRatio),f.uniform1f(b.u_zoomLabelSizeRatio,1/g.zoomToLabelSizeRatioFunction(y.zoomRatio)),f.uniform1f(b.u_labelPixelSnapping,y.labelPixelSnapping)}},{key:"renderProgram",value:function(y,v){this.updateAtlasTexture(),this.atlasManager.hasPendingGlyphs()&&(this.atlasManager.flush(),this.updateAtlasTexture()),le(g,"renderProgram",this)([y,v])}},{key:"registerFont",value:function(y){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"normal",f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"normal";return this.atlasManager.registerFont({family:y,weight:v,style:f})}},{key:"getAtlasManager",value:function(){return this.atlasManager}},{key:"measureLabel",value:function(y,v,f){var b=f||this.defaultFontKey;this.atlasManager.ensureGlyphs(y,b),this.atlasManager.hasPendingGlyphs()&&this.atlasManager.flush();var _=0,m=0,x=0,T=M(y),w;try{for(T.s();!(w=T.n()).done;){var S=w.value,A=S.codePointAt(0);if(A!==void 0){var R=this.atlasManager.getGlyph(A,b);R&&(_+=R.advance,m=Math.max(m,R.bearingY),x=Math.max(x,R.atlasHeight-R.bearingY))}}}catch(D){T.e(D)}finally{T.f()}var k=v/this.atlasFontSize;return{width:_*k,height:v,textHeight:(m+x)*k}}},{key:"ensureGlyphsReady",value:function(y,v){var f=v||this.defaultFontKey,b=M(y),_;try{for(b.s();!(_=b.n()).done;){var m=_.value;this.atlasManager.ensureGlyphs(m,f)}}catch(x){b.e(x)}finally{b.f()}this.atlasManager.flush()}},{key:"kill",value:function(){var y=this.normalProgram.gl;this.atlasTexture&&(y.deleteTexture(this.atlasTexture),this.atlasTexture=null),this.atlasManager.destroy(),this.labelGlyphCache.clear(),le(g,"kill",this)([])}}])}(Xr);return E(h,"labelMargin",l),E(h,"zoomToLabelSizeRatioFunction",u),new h(a,n,t)}var xl=`#version 300 es
precision highp float;

in float v_edgeDist;

// R32F target: only the .r channel is stored.
out vec4 fragColor;

void main() {
  fragColor = vec4(v_edgeDist, 0.0, 0.0, 0.0);
}
`;function _l(a,n,t){var e=qn(a),r=Tt(a).map(function(p){return"uniform ".concat(p.type," ").concat(p.name,";")}).join(`
`),i=$s(a,t),o=i.code,s=i.multiShape,l=at(a,n),u=Object.keys(l.specs).map(function(p){return"float v_".concat(p,";")}).join(`
`),d=Ye(l,{varPrefix:"nodeAttr",baseTexelExpr:"nodeIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture"}),h=d.fetchCode,c=d.varyingAssignments,g=`#version 300 es
precision highp float;

uniform float u_cameraAngle;
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform float u_frameTextureWidth;
uniform float u_frameTextureHeight;
uniform sampler2D u_layerAttributeTexture;
uniform int u_layerAttributeTextureWidth;
uniform int u_layerAttributeTexelsPerNode;
`.concat(r,`

in float a_nodeIndex;     // node-data texture index (also the target frame texel)
in float a_positionMode;  // 0=right 1=left 2=above 3=below 4=over
in float a_labelAngle;    // intrinsic label angle (radians)

out float v_edgeDist;

// Shape attributes (plain globals: this pass is vertex-only)
`).concat(u,`

`).concat(Re,`
`).concat(Oe,`
`).concat(e,`
`).concat(o,`
`).concat(Hr,`

void main() {
  int nodeIdx = int(a_nodeIndex);
`).concat(h,`
`).concat(c,`
  `).concat(s?`// Multi-shape: the shape id lives in the node-data texture's .w channel:
  g_shapeId = int(readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx).w);`:"// Single-shape mode, shape id not needed",`

  // Per-node rotation alignment (0 = viewport, 1 = graph).
  vec4 nodeFlags = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  float nodeRotation = nodeFlags.r;
  float labelRotation = nodeFlags.g;

  // Effective angle: intrinsic (style-given) plus the camera angle when the label
  // is graph-aligned. The companions place the box at this same angle.
  float effectiveAngle = a_labelAngle - labelRotation * u_cameraAngle;

  // The "over" mode (4) sits on the node center, so it has no edge distance.
  float edgeDist = 0.0;
  if (a_positionMode < 4.0) {
    vec2 screenDir = getLabelDirection(a_positionMode);
    // Rotate by the effective label angle. Inlined rather than via rotate2D()
    // because the shape SDFs (getShapeGLSLForShapes) already define that helper
    // for multi-shape programs, and redefining it would be a GLSL error.
    float ea_c = cos(effectiveAngle);
    float ea_s = sin(effectiveAngle);
    vec2 rotatedScreenDir = mat2(ea_c, -ea_s, ea_s, ea_c) * screenDir;
    // Screen (Y-down) -> SDF (Y-up).
    vec2 sdfDir = vec2(rotatedScreenDir.x, -rotatedScreenDir.y);
    // Counter-rotate into the shape's local frame for graph-aligned nodes, so the
    // boundary is queried against the shape's actual on-screen orientation.
    float nodeCa = -u_cameraAngle * nodeRotation;
    float nc = cos(nodeCa), ns = sin(nodeCa);
    sdfDir = mat2(nc, -ns, ns, nc) * sdfDir;
    edgeDist = findEdgeDistance(sdfDir, 1.0);
  }
  v_edgeDist = edgeDist;

  // Scatter to this node's texel center in the frame texture.
  float x = mod(a_nodeIndex, u_frameTextureWidth);
  float y = floor(a_nodeIndex / u_frameTextureWidth);
  vec2 ndc = (vec2(x, y) + 0.5) / vec2(u_frameTextureWidth, u_frameTextureHeight) * 2.0 - 1.0;
  gl_Position = vec4(ndc, 0.0, 1.0);
  gl_PointSize = 1.0;
}
`);return g}var qr=function(){function a(n,t){Y(this,a),E(this,"uniformLocations",{});var e=t.shapes,r=t.layers,i=t.shapeGlobalIds;if(e.length===0)throw new Error("NodeLabelFramePass: at least one shape must be provided");this.gl=n,this.shapeUniforms=Tt(e),this.hasAttributeData=Object.keys(at(e,r).offsets).length>0,this.vertexShader=Vn(n,_l(e,r,i)),this.fragmentShader=jn(n,xl),this.program=Xn(n,[this.vertexShader,this.fragmentShader]);var o=["u_cameraAngle","u_nodeDataTexture","u_nodeDataTextureWidth","u_frameTextureWidth","u_frameTextureHeight","u_layerAttributeTexture","u_layerAttributeTextureWidth","u_layerAttributeTexelsPerNode"].concat(j(this.shapeUniforms.map(function(f){return f.name}))),s=M(o),l;try{for(s.s();!(l=s.n()).done;){var u=l.value;this.uniformLocations[u]=n.getUniformLocation(this.program,u)}}catch(f){s.e(f)}finally{s.f()}var d=a.FLOATS_PER_POINT*4;this.vao=n.createVertexArray(),this.buffer=n.createBuffer(),n.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,this.buffer);var h=M([["a_nodeIndex",0],["a_positionMode",4],["a_labelAngle",8]]),c;try{for(h.s();!(c=h.n()).done;){var g=ee(c.value,2),p=g[0],y=g[1],v=n.getAttribLocation(this.program,p);v>=0&&(n.enableVertexAttribArray(v),n.vertexAttribPointer(v,1,n.FLOAT,!1,d,y))}}catch(f){h.e(f)}finally{h.f()}n.bindVertexArray(null)}return Z(a,[{key:"run",value:function(t,e,r,i,o){if(e!==0){var s=this.gl;s.useProgram(this.program),s.bindVertexArray(this.vao),s.bindBuffer(s.ARRAY_BUFFER,this.buffer),s.bufferData(s.ARRAY_BUFFER,t.subarray(0,e*a.FLOATS_PER_POINT),s.DYNAMIC_DRAW);var l=this.uniformLocations;s.uniform1f(l.u_cameraAngle,i.cameraAngle),s.uniform1i(l.u_nodeDataTexture,i.nodeDataTextureUnit),s.uniform1i(l.u_nodeDataTextureWidth,i.nodeDataTextureWidth),s.uniform1f(l.u_frameTextureWidth,r.getTextureWidth()),s.uniform1f(l.u_frameTextureHeight,r.getTextureHeight()),this.hasAttributeData&&o&&(o.bind(ke),l.u_layerAttributeTexture&&s.uniform1i(l.u_layerAttributeTexture,ke),l.u_layerAttributeTextureWidth&&s.uniform1i(l.u_layerAttributeTextureWidth,o.getTextureWidth()),l.u_layerAttributeTexelsPerNode&&s.uniform1i(l.u_layerAttributeTexelsPerNode,o.getTexelsPerItem()));var u=M(this.shapeUniforms),d;try{for(u.s();!(d=u.n()).done;){var h=d.value;Zn(s,this.uniformLocations[h.name],h)}}catch(c){u.e(c)}finally{u.f()}r.bindAsRenderTarget(),s.disable(s.BLEND),s.disable(s.DEPTH_TEST),s.drawArrays(s.POINTS,0,e),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindVertexArray(null)}}},{key:"kill",value:function(){var t=this.gl;t.deleteProgram(this.program),t.deleteShader(this.vertexShader),t.deleteShader(this.fragmentShader),t.deleteBuffer(this.buffer),t.deleteVertexArray(this.vao)}}])}();E(qr,"FLOATS_PER_POINT",3);function Tl(a,n,t,e,r){var i,o=e.label,s=o===void 0?{}:o,l=e.shapes;if(l.length===0)throw new Error("createNodeProgram: at least one shape must be provided in 'shapes'");var u={},d=[],h;l.forEach(function(w,S){var A=Is(w);S===0&&(h=A),u[w.name]=S,d[S]=Bt(A)});var c=j(e.layers),g=Da({shapes:l,layers:c,shapeGlobalIds:l.length>1?d:void 0,antialias:r}),p=yl(a,null,t,{label:s}),y=ll(a,null,t,{shapes:l,layers:c,getAttributeTexture:function(){return T.getAttributeTexture()},label:s,shapeGlobalIds:l.length>1?d:void 0}),v=hl(a,n,t,{label:s}),f=e.labelAttachments&&Object.keys(e.labelAttachments).length>0?Js(a,null,t,{label:s}):null,b=new qr(a,{shapes:l,layers:c,shapeGlobalIds:l.length>1?d:void 0}),_=Zt(l,c),m=me(_),x=(i=function(w){function S(A,R,k){var D;Y(this,S),D=ie(this,S,[A,R,k]),E(D,"layerLifecycles",new Map),E(D,"layersNeedingRegeneration",new Set),E(D,"attrDescriptors",[]),D._pickingBuffer=R;var F=x.layerTextures.get(A);F||(F=new qt(A,m),x.layerTextures.set(A,F)),D.layerAttributeTexture=F;var L=x.textureRefCounts.get(A)||0;x.textureRefCounts.set(A,L+1),D.packedAttributeData=new Float32Array(m.floatsPerItem),c.forEach(function(G,z){if(G.lifecycle){var P={gl:A,renderer:{refresh:function(){return k.refresh()}},getUniformLocation:function(H){return A.getUniformLocation(D.normalProgram.program,H)},requestShaderRegeneration:function(){D.layersNeedingRegeneration.add(z)},requestRefresh:function(){k.refresh()}},C=G.lifecycle(P);D.layerLifecycles.set(z,C)}}),D.layerLifecycles.forEach(function(G){var z;(z=G.init)===null||z===void 0||z.call(G)});var N=new Map;return D.layerLifecycles.forEach(function(G,z){G.getAttributeData&&N.set(z,G)}),D.attrDescriptors=Kt(_,m,N),D}return oe(S,w),Z(S,[{key:"getDefinition",value:function(){var R=WebGL2RenderingContext,k=R.FLOAT,D=R.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:g.vertexShader,FRAGMENT_SHADER_SOURCE:g.fragmentShader,METHOD:D,UNIFORMS:g.uniforms,ATTRIBUTES:g.attributes,CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:k}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:"maybeRegenerateShaders",value:function(){var R=this;if(this.layersNeedingRegeneration.size!==0){c=c.map(function(z,P){if(R.layersNeedingRegeneration.has(P)){var C=R.layerLifecycles.get(P);if(C!=null&&C.regenerate){var I=C.regenerate();return W(W({},I),{},{lifecycle:z.lifecycle})}}return z}),this.layersNeedingRegeneration.clear(),g=Da({shapes:l,layers:c,shapeGlobalIds:l.length>1?d:void 0,antialias:this.renderer.getSetting("antialiasNodes")});var k=this.normalProgram.gl,D=this.normalProgram,F=D.program,L=D.buffer,N=D.vertexShader,G=D.fragmentShader;k.deleteProgram(F),k.deleteBuffer(L),k.deleteShader(N),k.deleteShader(G),this.normalProgram=this.getProgramInfo("normal",k,g.vertexShader,g.fragmentShader,this._pickingBuffer)}}},{key:"allocateNode",value:function(R){this.layerAttributeTexture.allocate(R)}},{key:"freeNode",value:function(R){this.layerAttributeTexture.free(R)}},{key:"getAttributeTexture",value:function(){return this.layerAttributeTexture}},{key:"uploadLayerTexture",value:function(){this.layerAttributeTexture.upload()}},{key:"process",value:function(R,k,D,F,L){var N=k*this.STRIDE;if(D.visibility==="hidden"){for(var G=N+this.STRIDE;N<G;N++)this.floats[N]=0;this.floats[k*this.STRIDE]=Vr;return}this.processVisibleItem(Ot(R),N,D,F,L)}},{key:"processVisibleItem",value:function(R,k,D,F,L){var N,G=this.floats,z=this.ints;if(G[k++]=F,z[k++]=R,G[k++]=(N=D.opacity)!==null&&N!==void 0?N:1,m.floatsPerItem!==0){var P=this.packedAttributeData;Yt(this.attrDescriptors,D,P,D.color,this.layerLifecycles,0),this.layerAttributeTexture.updateAllAttributes(L,P)}}},{key:"setUniforms",value:function(R,k){var D=this,F=k.gl,L=k.uniformLocations;L.u_matrix&&F.uniformMatrix3fv(L.u_matrix,!1,R.matrix),L.u_sizeRatio&&F.uniform1f(L.u_sizeRatio,R.sizeRatio),L.u_correctionRatio&&F.uniform1f(L.u_correctionRatio,R.correctionRatio),L.u_pickingPadding&&F.uniform1f(L.u_pickingPadding,R.nodePickingPadding),L.u_cameraAngle&&F.uniform1f(L.u_cameraAngle,R.cameraAngle),L.u_nodeDataTexture&&F.uniform1i(L.u_nodeDataTexture,R.nodeDataTextureUnit),L.u_nodeDataTextureWidth&&F.uniform1i(L.u_nodeDataTextureWidth,R.nodeDataTextureWidth),L.u_layerAttributeTexture&&(this.layerAttributeTexture.bind(ke),F.uniform1i(L.u_layerAttributeTexture,ke)),L.u_layerAttributeTextureWidth&&F.uniform1i(L.u_layerAttributeTextureWidth,this.layerAttributeTexture.getTextureWidth()),L.u_layerAttributeTexelsPerNode&&F.uniform1i(L.u_layerAttributeTexelsPerNode,this.layerAttributeTexture.getTexelsPerItem()),l.forEach(function(N){N.uniforms.forEach(function(G){D.setTypedUniform(G,k)})}),c.forEach(function(N){N.uniforms.forEach(function(G){D.setTypedUniform(G,k)})})}},{key:"renderProgram",value:function(R,k){this.maybeRegenerateShaders();var D=k.gl,F=k.program;D.useProgram(F),k===this.normalProgram&&this.layerLifecycles.forEach(function(L){var N;(N=L.beforeRender)===null||N===void 0||N.call(L)}),le(S,"renderProgram",this)([R,k])}},{key:"kill",value:function(){this.layerLifecycles.forEach(function(D){var F;(F=D.kill)===null||F===void 0||F.call(D)}),this.layerLifecycles.clear();var R=this.normalProgram.gl,k=(x.textureRefCounts.get(R)||1)-1;k<=0?(this.layerAttributeTexture.kill(),x.layerTextures.delete(R),x.textureRefCounts.delete(R)):x.textureRefCounts.set(R,k),le(S,"kill",this)([])}}])}(Ue),E(i,"layerTextures",new WeakMap),E(i,"textureRefCounts",new WeakMap),i),T=new x(a,null,t);return{nodeProgram:T,labelProgram:p,backdropProgram:y,labelBackgroundProgram:v,attachmentProgram:f,framePass:b,shapeSlug:h,shapeNameToIndex:l.length>1?u:void 0,shapeGlobalIds:l.length>1?d:void 0}}var Pe=6;function St(a){var n=a.offsets,t=a.specs,e=a.floatsPerItem,r=Object.keys(n);if(r.length===0||e===0)return{uniformDeclarations:"",uniformNames:[],vertexVaryingDeclarations:"",fragmentVaryingDeclarations:"",fetchCode:"",varyingAssignments:""};var i=`
uniform sampler2D u_edgeAttributeTexture;
uniform int u_edgeAttributeTextureWidth;
uniform int u_edgeAttributeTexelsPerEdge;`,o=["u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge"],s=r.map(function(g){var p=t[g].size===1?"float":"vec".concat(t[g].size);return"".concat(p," v_").concat(g,";")}),l=s.map(function(g){return"out ".concat(g)}).join(`
`),u=s.map(function(g){return"in ".concat(g)}).join(`
`),d=Ye(a,{varPrefix:"attr",baseTexelExpr:"edgeIdx * u_edgeAttributeTexelsPerEdge",textureWidthUniform:"u_edgeAttributeTextureWidth",textureSamplerUniform:"u_edgeAttributeTexture"}),h=d.fetchCode,c=d.varyingAssignments;return{uniformDeclarations:i,uniformNames:o,vertexVaryingDeclarations:l,fragmentVaryingDeclarations:u,fetchCode:h,varyingAssignments:c}}function Sl(a){return`
float findSourceClampT_`.concat(a,`(vec2 source, float sourceSize, int sourceShapeId, float sourceRotateAlign, vec2 target, float margin) {
  float lo = 0.0, hi = 0.5;
  float nodeExtent = sourceSize * u_correctionRatio / u_sizeRatio * 2.0;
  float effectiveSize = 1.0 - u_correctionRatio / nodeExtent;

  // Counter-rotate the query point so viewport-aligned nodes (rotateAlign=0) are
  // clamped against their on-screen orientation; graph-aligned nodes skip it.
  float ca = u_cameraAngle * (1.0 - sourceRotateAlign);
  float rc = cos(ca), rs = sin(ca);
  mat2 rot = mat2(rc, -rs, rs, rc);

  for (int i = 0; i < 12; i++) {
    float mid = (lo + hi) * 0.5;
    vec2 pos = path_`).concat(a,`_position(mid, source, target);
    vec2 localPos = rot * ((pos - source) / nodeExtent);
    float sdf = querySDF(sourceShapeId, localPos, effectiveSize);
    if (sdf < 0.0) lo = mid;
    else hi = mid;
  }

  float pathLen = path_`).concat(a,`_length(source, target);
  float marginT = (margin * u_correctionRatio / u_sizeRatio) / pathLen;
  return (lo + hi) * 0.5 + marginT;
}
`)}function El(a){return`
float findTargetClampT_`.concat(a,`(vec2 source, vec2 target, float targetSize, int targetShapeId, float targetRotateAlign, float margin) {
  float lo = 0.5, hi = 1.0;
  float nodeExtent = targetSize * u_correctionRatio / u_sizeRatio * 2.0;
  float effectiveSize = 1.0 - u_correctionRatio / nodeExtent;

  // See findSourceClampT_ for the rotation rationale.
  float ca = u_cameraAngle * (1.0 - targetRotateAlign);
  float rc = cos(ca), rs = sin(ca);
  mat2 rot = mat2(rc, -rs, rs, rc);

  for (int i = 0; i < 12; i++) {
    float mid = (lo + hi) * 0.5;
    vec2 pos = path_`).concat(a,`_position(mid, source, target);
    vec2 localPos = rot * ((pos - target) / nodeExtent);
    float sdf = querySDF(targetShapeId, localPos, effectiveSize);
    if (sdf < 0.0) hi = mid;
    else lo = mid;
  }

  float pathLen = path_`).concat(a,`_length(source, target);
  float marginT = (margin * u_correctionRatio / u_sizeRatio) / pathLen;
  return (lo + hi) * 0.5 - marginT;
}
`)}function Kr(a){return`
// Auto-generated numerical tangent (from position via finite differences)
vec2 path_`.concat(a,`_tangent(float t, vec2 source, vec2 target) {
  float epsilon = 0.001;
  float t1 = max(0.0, t - epsilon);
  float t2 = min(1.0, t + epsilon);
  vec2 p1 = path_`).concat(a,`_position(t1, source, target);
  vec2 p2 = path_`).concat(a,`_position(t2, source, target);
  return normalize(p2 - p1);
}

// Auto-generated normal (perpendicular to tangent)
vec2 path_`).concat(a,`_normal(float t, vec2 source, vec2 target) {
  vec2 tangent = path_`).concat(a,`_tangent(t, source, target);
  return vec2(-tangent.y, tangent.x);
}
`)}function wl(a){return`
// Auto-generated path length (samples position 16 times)
float path_`.concat(a,`_length(vec2 source, vec2 target) {
  float len = 0.0;
  vec2 prev = path_`).concat(a,`_position(0.0, source, target);
  for (int i = 1; i <= 16; i++) {
    float t = float(i) / 16.0;
    vec2 curr = path_`).concat(a,`_position(t, source, target);
    len += length(curr - prev);
    prev = curr;
  }
  return len;
}
`)}function Al(a){return`
// Auto-generated closest_t (coarse sample + ternary search)
float path_`.concat(a,`_closest_t(vec2 p, vec2 source, vec2 target) {
  // Coarse search: find best among 10 samples
  float bestT = 0.0;
  float bestDist = 1e10;
  for (int i = 0; i <= 10; i++) {
    float t = float(i) / 10.0;
    vec2 pos = path_`).concat(a,`_position(t, source, target);
    float d = length(p - pos);
    if (d < bestDist) {
      bestDist = d;
      bestT = t;
    }
  }

  // Refine with ternary search
  float lo = max(0.0, bestT - 0.1);
  float hi = min(1.0, bestT + 0.1);
  for (int i = 0; i < 10; i++) {
    float mid1 = lo + (hi - lo) / 3.0;
    float mid2 = hi - (hi - lo) / 3.0;
    float d1 = length(p - path_`).concat(a,`_position(mid1, source, target));
    float d2 = length(p - path_`).concat(a,`_position(mid2, source, target));
    if (d1 < d2) {
      hi = mid2;
    } else {
      lo = mid1;
    }
  }
  return (lo + hi) * 0.5;
}
`)}function Rl(a){return`
// Auto-generated signed distance (via closest_t + normal)
float path_`.concat(a,`_distance(vec2 p, vec2 source, vec2 target) {
  float closestT = path_`).concat(a,`_closest_t(p, source, target);
  vec2 closest = path_`).concat(a,`_position(closestT, source, target);
  vec2 diff = p - closest;
  float dist = length(diff);
  if (dist < 0.0001) return 0.0;

  // Get normal at closest point
  vec2 normal = path_`).concat(a,`_normal(closestT, source, target);
  return dist * sign(dot(diff, normal));
}
`)}function Dl(a){return`
// Auto-generated t_at_distance (binary search)
float path_`.concat(a,`_t_at_distance(float targetDist, vec2 source, vec2 target) {
  if (targetDist <= 0.0) return 0.0;

  float totalLen = path_`).concat(a,`_length(source, target);
  if (targetDist >= totalLen) return 1.0;

  // Binary search for t
  float lo = 0.0, hi = 1.0;
  for (int i = 0; i < 12; i++) {
    float mid = (lo + hi) * 0.5;

    // Compute arc length from 0 to mid
    float arcLen = 0.0;
    vec2 prev = path_`).concat(a,`_position(0.0, source, target);
    for (int j = 1; j <= 8; j++) {
      float t = mid * float(j) / 8.0;
      vec2 curr = path_`).concat(a,`_position(t, source, target);
      arcLen += length(curr - prev);
      prev = curr;
    }

    if (arcLen < targetDist) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return (lo + hi) * 0.5;
}
`)}function kt(a,n){var t=new RegExp("\\b(float|vec[234]|void|int|bool)\\s+".concat(n,"\\s*\\("));return t.test(a)}function Yr(a,n){var t=[];return kt(n,"path_".concat(a,"_length"))||t.push(wl(a)),kt(n,"path_".concat(a,"_closest_t"))||t.push(Al(a)),kt(n,"path_".concat(a,"_distance"))||t.push(Rl(a)),kt(n,"path_".concat(a,"_t_at_distance"))||t.push(Dl(a)),t.length>0?`
// ============================================================================
// Auto-generated fallback functions (path only provided position)
// ============================================================================
`.concat(t.join(`
`)):""}function Zr(a){var n,t,e,r=a.paths,i=a.layers,o=(n=a.extremities)!==null&&n!==void 0?n:[];if(r.length===0)throw new Error("At least one path is required in 'paths'");if(i.length===0)throw new Error("At least one layer is required in 'layers'");var s=(t=a.defaultHead)!==null&&t!==void 0?t:"none",l=(e=a.defaultTail)!==null&&e!==void 0?e:"none";return{paths:r,extremities:o,layers:i,path:r[0],layer:i[0],defaultHead:s,defaultTail:l}}var Qr=WebGL2RenderingContext,pt=Qr.FLOAT,ka=Qr.UNSIGNED_BYTE;function Cl(a,n,t){var e=new Set(["u_matrix","u_sizeRatio","u_correctionRatio","u_zoomRatio","u_pixelRatio","u_cameraAngle","u_minEdgeThickness","u_pickingPadding","u_nodeDataTexture","u_nodeDataTextureWidth","u_edgeDataTexture","u_edgeDataTextureWidth","u_edgeFrameTexture","u_edgeFrameTextureWidth","u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge"]),r=new Set(e);return a.forEach(function(i){return i.uniforms.forEach(function(o){return r.add(o.name)})}),n.forEach(function(i){return i.uniforms.forEach(function(o){return r.add(o.name)})}),t.forEach(function(i){return i.uniforms.forEach(function(o){return r.add(o.name)})}),Array.from(r)}function Jn(a){var n=new Set,t=[],e=M(a),r;try{for(e.s();!(r=e.n()).done;){var i=r.value;n.has(i.name)||(n.add(i.name),t.push("// Path: ".concat(i.name)),t.push(i.glsl),t.push(Kr(i.name)),t.push(Yr(i.name,i.glsl)))}}catch(o){e.e(o)}finally{e.f()}return t.join(`

`)}function Ll(a){var n=[],t=M(a),e;try{for(t.s();!(e=t.n()).done;){var r=e.value;n.push("// Extremity: ".concat(r.name)),n.push(r.glsl)}}catch(i){t.e(i)}finally{t.f()}return n.join(`

`)}var kl=[{queryName:"queryPathPosition",pathFunc:"position",returnType:"vec2",params:"float t, vec2 source, vec2 target",args:"t, source, target"},{queryName:"queryPathTangent",pathFunc:"tangent",returnType:"vec2",params:"float t, vec2 source, vec2 target",args:"t, source, target"},{queryName:"queryPathNormal",pathFunc:"normal",returnType:"vec2",params:"float t, vec2 source, vec2 target",args:"t, source, target"},{queryName:"queryPathLength",pathFunc:"length",returnType:"float",params:"vec2 source, vec2 target",args:"source, target"},{queryName:"queryPathClosestT",pathFunc:"closest_t",returnType:"float",params:"vec2 p, vec2 source, vec2 target",args:"p, source, target"}];function Pl(a,n){var t=n.queryName,e=n.pathFunc,r=n.returnType,i=n.params,o=n.args;if(a.length===1)return"".concat(r," ").concat(t,"(int pathId, ").concat(i,`) {
  return path_`).concat(a[0].name,"_").concat(e,"(").concat(o,`);
}`);var s=a.map(function(l,u){return"    case ".concat(u,": return path_").concat(l.name,"_").concat(e,"(").concat(o,");")}).join(`
`);return"".concat(r," ").concat(t,"(int pathId, ").concat(i,`) {
  switch (pathId) {
`).concat(s,`
    default: return path_`).concat(a[0].name,"_").concat(e,"(").concat(o,`);
  }
}`)}function ea(a){return kl.map(function(n){return Pl(a,n)}).join(`

`)}function Fl(a){if(a.length===1)return`float queryExtremitySDF(int extremityId, vec2 uv, float lengthRatio, float widthRatio) {
  return extremity_`.concat(a[0].name,`(uv, lengthRatio, widthRatio);
}`);var n=a.map(function(t,e){return"    case ".concat(e,": return extremity_").concat(t.name,"(uv, lengthRatio, widthRatio);")}).join(`
`);return`float queryExtremitySDF(int extremityId, vec2 uv, float lengthRatio, float widthRatio) {
  switch (extremityId) {
`.concat(n,`
    default: return extremity_`).concat(a[0].name,`(uv, lengthRatio, widthRatio);
  }
}`)}function Il(a){var n=[],t=M(a),e;try{for(t.s();!(e=t.n()).done;){var r=e.value;n.push(Sl(r.name)),n.push(El(r.name))}}catch(s){t.e(s)}finally{t.f()}if(a.length===1)n.push(`
float queryFindSourceClampT(int pathId, vec2 source, float sourceSize, int sourceShapeId, float sourceRotateAlign, vec2 target, float margin) {
  return findSourceClampT_`.concat(a[0].name,`(source, sourceSize, sourceShapeId, sourceRotateAlign, target, margin);
}

float queryFindTargetClampT(int pathId, vec2 source, vec2 target, float targetSize, int targetShapeId, float targetRotateAlign, float margin) {
  return findTargetClampT_`).concat(a[0].name,`(source, target, targetSize, targetShapeId, targetRotateAlign, margin);
}`));else{var i=a.map(function(s,l){return"    case ".concat(l,": return findSourceClampT_").concat(s.name,"(source, sourceSize, sourceShapeId, sourceRotateAlign, target, margin);")}).join(`
`),o=a.map(function(s,l){return"    case ".concat(l,": return findTargetClampT_").concat(s.name,"(source, target, targetSize, targetShapeId, targetRotateAlign, margin);")}).join(`
`);n.push(`
float queryFindSourceClampT(int pathId, vec2 source, float sourceSize, int sourceShapeId, float sourceRotateAlign, vec2 target, float margin) {
  switch (pathId) {
`.concat(i,`
    default: return findSourceClampT_`).concat(a[0].name,`(source, sourceSize, sourceShapeId, sourceRotateAlign, target, margin);
  }
}

float queryFindTargetClampT(int pathId, vec2 source, vec2 target, float targetSize, int targetShapeId, float targetRotateAlign, float margin) {
  switch (pathId) {
`).concat(o,`
    default: return findTargetClampT_`).concat(a[0].name,`(source, target, targetSize, targetShapeId, targetRotateAlign, margin);
  }
}`))}return n.join(`

`)}function Gl(a,n,t,e,r){var i=me([].concat(j(a),j(t))),o=St(i),s=at(e,r),l=Object.keys(s.offsets),u=function(w){var S=s.specs[w].size;return S===1?"float":"vec".concat(S)},d=l.map(function(T){return"".concat(u(T)," v_source_").concat(T,`;
`).concat(u(T)," v_target_").concat(T,";")}).join(`
`),h=Ye(s,{varPrefix:"srcNodeAttr",baseTexelExpr:"srcIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture",outputPrefix:"v_source_"}),c=Ye(s,{varPrefix:"tgtNodeAttr",baseTexelExpr:"tgtIdx * u_layerAttributeTexelsPerNode",textureWidthUniform:"u_layerAttributeTextureWidth",textureSamplerUniform:"u_layerAttributeTexture",outputPrefix:"v_target_"}),g=l.map(function(T){return"".concat(u(T)," g_").concat(T,";")}).join(`
`),p=l.map(function(T){return"  g_".concat(T," = v_source_").concat(T,";")}).join(`
`),y=l.map(function(T){return"  g_".concat(T," = v_target_").concat(T,";")}).join(`
`),v=new Set,f=[],b=function(w){v.has(w.name)||(v.add(w.name),f.push("uniform ".concat(w.type," ").concat(w.name,";")))};a.forEach(function(T){return T.uniforms.forEach(b)}),n.forEach(function(T){return T.uniforms.forEach(b)});var _=n.map(function(T){return te(T.widthFactor)}).join(", "),m=Math.max.apply(Math,j(a.map(function(T){return T.minBodyLengthRatio||0}))),x=`#version 300 es

// Node and edge data textures
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_edgeDataTexture;
uniform int u_edgeDataTextureWidth;

// Edge attribute texture (for path-specific attributes like curvature)
`.concat(o.uniformDeclarations,`

// Node attribute texture (for node shape attributes)
uniform sampler2D u_layerAttributeTexture;
uniform int u_layerAttributeTextureWidth;
uniform int u_layerAttributeTexelsPerNode;

// Render params needed for clamping
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
uniform float u_minEdgeThickness;

// Edge-frame texture dimensions, for scattering each point to its texel
uniform float u_frameTextureWidth;
uniform float u_frameTextureHeight;

// Custom path/extremity uniforms
`).concat(f.join(`
`),`

// Path attribute varyings — assigned so path functions can read them as globals
`).concat(o.vertexVaryingDeclarations,`

// Node size varyings — read by path functions like loop
out float v_sourceNodeSize;
out float v_targetNodeSize;

// Node shape attributes per endpoint, and the ones querySDF reads
`).concat(d,`
`).concat(g,`

// Scattered output written to the edge-frame texel: [tStart, tEnd, straightenFactor, pathLength]
out vec4 v_clamp;

// Extremity width factor array (needed for extremityScale computation)
const float EXTREMITY_WIDTH_FACTORS[`).concat(n.length,"] = float[](").concat(_,`);

// Node-data fetch helpers (geometry texel + rotation-flags texel)
`).concat(Re,`
`).concat(Oe,`

// Shape SDFs for node boundary clamping
`).concat(Gs(),`
`).concat(Ns(new Set(l)),`

// Path functions
`).concat(Jn(a),`
`).concat(ea(a),`
`).concat(Il(a),`

void main() {
  // One point per edge-data row; the row index is the edge-frame texel target.
  int edgeIdx = gl_VertexID;
  int texel0Idx = edgeIdx * 2;
  int texel1Idx = edgeIdx * 2 + 1;
  ivec2 edgeTexCoord0 = ivec2(texel0Idx % u_edgeDataTextureWidth, texel0Idx / u_edgeDataTextureWidth);
  ivec2 edgeTexCoord1 = ivec2(texel1Idx % u_edgeDataTextureWidth, texel1Idx / u_edgeDataTextureWidth);
  vec4 edgeData0 = texelFetch(u_edgeDataTexture, edgeTexCoord0, 0);
  vec4 edgeData1 = texelFetch(u_edgeDataTexture, edgeTexCoord1, 0);

  int srcIdx = int(edgeData0.x);
  int tgtIdx = int(edgeData0.y);
  float a_thickness = edgeData0.z;
  float a_headLengthRatio = edgeData1.x;
  float a_tailLengthRatio = edgeData1.y;
  int pathId = int(edgeData1.z);
  int extremityPacked = int(edgeData1.w);
  int headId = extremityPacked >> 4;
  int tailId = extremityPacked & 15;

  // Fetch path/layer attributes and assign to path-function globals
`).concat(o.fetchCode,`
`).concat(o.varyingAssignments,`

  // Fetch node shape attributes for both endpoints
`).concat(h.fetchCode,`
`).concat(h.varyingAssignments,`
`).concat(c.fetchCode,`
`).concat(c.varyingAssignments,`

  // Fetch node geometry (texel 0) and rotation flags (texel 1).
  vec4 srcNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx);
  vec4 tgtNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx);

  vec2 a_source = srcNodeData.xy;
  vec2 a_target = tgtNodeData.xy;
  float a_sourceSize = srcNodeData.z;
  float a_targetSize = tgtNodeData.z;
  float a_sourceShapeId = srcNodeData.w;
  float a_targetShapeId = tgtNodeData.w;
  // Per-node rotation alignment (0 = viewport, 1 = graph), for boundary clamping.
  float a_sourceRotateAlign = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx).r;
  float a_targetRotateAlign = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx).r;

  v_sourceNodeSize = a_sourceSize;
  v_targetNodeSize = a_targetSize;

  float headLengthRatio = a_headLengthRatio;
  float tailLengthRatio = a_tailLengthRatio;
  float headWidthFactor = EXTREMITY_WIDTH_FACTORS[headId];
  float tailWidthFactor = EXTREMITY_WIDTH_FACTORS[tailId];
  float minBodyLengthRatio = `).concat(te(m),`;

  // Thickness in WebGL units (needed to compute clamping margin and extremity lengths)
  float pixelsThickness = max(a_thickness, u_minEdgeThickness * u_sizeRatio);
  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;

  // SDF clamping: find where the edge body meets the node boundaries. Always
  // searched (ungated) so labels get a true boundary clamp; the body re-applies
  // its extremity gating in-shader.
`).concat(p,`
  float tStart = queryFindSourceClampT(pathId, a_source, a_sourceSize, int(a_sourceShapeId), a_sourceRotateAlign, a_target, 0.0);
`).concat(y,`
  float tEnd = queryFindTargetClampT(pathId, a_source, a_target, a_targetSize, int(a_targetShapeId), a_targetRotateAlign, 0.0);

  // straightenFactor (frame .z) is consumed only by the body, which runs to the
  // node center when an extremity is absent. Derive the straightening math from
  // these gated clamps — not the ungated boundary ones above — so it matches the
  // geometry it drives. The ungated tStart/tEnd remain what labels read.
  float bodyTStart = tailLengthRatio > 0.0 ? tStart : 0.0;
  float bodyTEnd = headLengthRatio > 0.0 ? tEnd : 1.0;

  // Path length and zone boundaries (needed for straightening check)
  float pathLength = queryPathLength(pathId, a_source, a_target);
  float visibleLength = pathLength * (bodyTEnd - bodyTStart);

  float headLength = headLengthRatio * webGLThickness;
  float tailLength = tailLengthRatio * webGLThickness;
  float minBodyLength = minBodyLengthRatio * webGLThickness;

  float totalNeededLength = headLength + tailLength + minBodyLength;
  float extremityScale = 1.0;
  if (totalNeededLength > visibleLength && totalNeededLength > 0.0001) {
    extremityScale = visibleLength / totalNeededLength;
    headLength *= extremityScale;
    tailLength *= extremityScale;
  }

  float headLengthT = pathLength > 0.0001 ? headLength / pathLength : 0.0;
  float tailLengthT = pathLength > 0.0001 ? tailLength / pathLength : 0.0;

  float tTailEnd = bodyTStart + tailLengthT;
  float tHeadStart = bodyTEnd - headLengthT;
  if (tTailEnd > tHeadStart) {
    float mid = (bodyTStart + bodyTEnd) * 0.5;
    tTailEnd = mid;
    tHeadStart = mid;
  }

  // Straighten factor: blend toward straight line when path twists in extremity zones
  float straightenFactor = 0.0;
  {
    float maxDeviation = 0.0;
    if (tailLengthT > 0.0001) {
      vec2 tailTang = queryPathTangent(pathId, tTailEnd, a_source, a_target);
      vec2 tailChord = queryPathPosition(pathId, bodyTStart, a_source, a_target)
                     - queryPathPosition(pathId, tTailEnd, a_source, a_target);
      float tailChordLen = length(tailChord);
      if (tailChordLen > 0.0001) {
        maxDeviation = max(maxDeviation, 1.0 - dot(-tailTang, tailChord / tailChordLen));
      }
    }
    if (headLengthT > 0.0001) {
      vec2 headTang = queryPathTangent(pathId, tHeadStart, a_source, a_target);
      vec2 headChord = queryPathPosition(pathId, bodyTEnd, a_source, a_target)
                     - queryPathPosition(pathId, tHeadStart, a_source, a_target);
      float headChordLen = length(headChord);
      if (headChordLen > 0.0001) {
        maxDeviation = max(maxDeviation, 1.0 - dot(headTang, headChord / headChordLen));
      }
    }
    straightenFactor = smoothstep(0.035, 0.5, maxDeviation);
  }

  // When straightening, blend the ungated tStart/tEnd (the label-facing clamps)
  // toward straight-line clamp positions.
  if (straightenFactor > 0.001) {
    if (tailLengthRatio > 0.0) {
`).concat(p,`
      float srcExtent = a_sourceSize * u_correctionRatio / u_sizeRatio * 2.0;
      float srcEffective = 1.0 - u_correctionRatio / srcExtent;
      float srcCa = u_cameraAngle * (1.0 - a_sourceRotateAlign);
      mat2 srcRot = mat2(cos(srcCa), -sin(srcCa), sin(srcCa), cos(srcCa));
      float lo = 0.0, hi = 0.5;
      for (int i = 0; i < 12; i++) {
        float mid = (lo + hi) * 0.5;
        vec2 pos = mix(a_source, a_target, mid);
        vec2 localPos = srcRot * ((pos - a_source) / srcExtent);
        float sdf = querySDF(int(a_sourceShapeId), localPos, srcEffective);
        if (sdf < 0.0) lo = mid; else hi = mid;
      }
      tStart = mix(tStart, (lo + hi) * 0.5, straightenFactor);
    }
    if (headLengthRatio > 0.0) {
`).concat(y,`
      float tgtExtent = a_targetSize * u_correctionRatio / u_sizeRatio * 2.0;
      float tgtEffective = 1.0 - u_correctionRatio / tgtExtent;
      float tgtCa = u_cameraAngle * (1.0 - a_targetRotateAlign);
      mat2 tgtRot = mat2(cos(tgtCa), -sin(tgtCa), sin(tgtCa), cos(tgtCa));
      float lo = 0.5, hi = 1.0;
      for (int i = 0; i < 12; i++) {
        float mid = (lo + hi) * 0.5;
        vec2 pos = mix(a_source, a_target, mid);
        vec2 localPos = tgtRot * ((pos - a_target) / tgtExtent);
        float sdf = querySDF(int(a_targetShapeId), localPos, tgtEffective);
        if (sdf < 0.0) hi = mid; else lo = mid;
      }
      tEnd = mix(tEnd, (lo + hi) * 0.5, straightenFactor);
    }
  }

  v_clamp = vec4(tStart, tEnd, straightenFactor, pathLength);

  // Scatter this point to its edge's texel center in the frame texture.
  float x = mod(float(edgeIdx), u_frameTextureWidth);
  float y = floor(float(edgeIdx) / u_frameTextureWidth);
  vec2 ndc = (vec2(x, y) + 0.5) / vec2(u_frameTextureWidth, u_frameTextureHeight) * 2.0 - 1.0;
  gl_Position = vec4(ndc, 0.0, 1.0);
  gl_PointSize = 1.0;
}
`);return x}var Pt=0,Pa=1,Ft=2;function Nl(a,n,t){var e=[];t&&(e.push([Pt,0,-1],[Pt,0,1]),e.push([Pt,1,-1],[Pt,1,1]));for(var r=0;r<=a;r++){var i=r/a;e.push([Pa,i,-1],[Pa,i,1])}return n&&(e.push([Ft,0,-1],[Ft,0,1]),e.push([Ft,1,-1],[Ft,1,1])),{data:e,attributes:[{name:"a_zone",size:1,type:pt},{name:"a_zoneT",size:1,type:pt},{name:"a_side",size:1,type:pt}],verticesPerEdge:e.length}}function zl(a,n,t,e){var r=me([].concat(j(a),j(t))),i=St(r),o=new Set(["u_matrix","u_sizeRatio","u_correctionRatio","u_zoomRatio","u_pixelRatio","u_cameraAngle","u_minEdgeThickness","u_pickingPadding","u_nodeDataTexture"]),s=new Set,l=[],u=function(f){!o.has(f.name)&&!s.has(f.name)&&(s.add(f.name),l.push("uniform ".concat(f.type," ").concat(f.name,";")))};a.forEach(function(v){return v.uniforms.forEach(u)}),n.forEach(function(v){return v.uniforms.forEach(u)}),t.forEach(function(v){return v.uniforms.forEach(u)});var d=e.map(function(v){var f=v.size===1?"float":"vec".concat(v.size);return"in ".concat(f," ").concat(v.name,";")}).join(`
`),h=n.map(function(v){return te(v.widthFactor)}).join(", "),c=Math.max.apply(Math,j(a.map(function(v){return v.minBodyLengthRatio||0}))),g=t.some(function(v){return v.needsNodeColors}),p=a.some(function(v){return v.needsNodeSize}),y=`#version 300 es

// Constant attributes (per vertex)
`.concat(d,`

// Per-edge attributes
// Edge data (source/target indices, thickness, extremity ratios, path/extremity IDs)
// is fetched from edge data texture via edge index
in float a_edgeIndex;   // Index into edge data texture
in vec4 a_color;        // Edge color
in vec4 a_id;           // Edge ID for picking
in float a_opacity;     // Edge opacity

// Standard uniforms
uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_zoomRatio;
uniform float u_pixelRatio;
uniform float u_cameraAngle;
uniform float u_minEdgeThickness;
#ifdef PICKING_MODE
uniform float u_pickingPadding;
#endif
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_edgeDataTexture;
uniform int u_edgeDataTextureWidth;
uniform sampler2D u_edgeFrameTexture;
uniform int u_edgeFrameTextureWidth;

// Edge path attribute texture uniforms
`).concat(i.uniformDeclarations,`

// Custom uniforms
`).concat(l.join(`
`),`

// Standard varyings
out vec4 v_color;
out float v_opacity;
out vec4 v_id;
out float v_thickness;       // Edge body thickness (in consistent units)
out float v_t;
out float v_tStart;
out float v_tEnd;
out float v_side;
out float v_antialiasingWidth;  // Anti-aliasing width (normalized: u_correctionRatio / thickness)
out vec2 v_source;
out vec2 v_target;
out float v_edgeLength;
`).concat(p?`
out float v_sourceNodeSize;  // Source node size (mirrored in labels/generator.ts as plain float)
out float v_targetNodeSize;  // Target node size (mirrored in labels/generator.ts as plain float)`:"",`
`).concat(g?`
out vec4 v_sourceColor;
out vec4 v_targetColor;`:"",`
// Zone varyings
out float v_zone;            // 0=tail, 1=body, 2=head
out float v_zoneT;           // Position within zone [0,1]
out float v_headLengthRatio; // Head length as ratio of thickness
out float v_tailLengthRatio; // Tail length as ratio of thickness
out float v_headWidthRatio;  // Head width factor
out float v_tailWidthRatio;  // Tail width factor

// Multi-path/extremity varyings
flat out int v_pathId;
flat out int v_headId;
flat out int v_tailId;

// Path/layer attribute varyings (fetched from edge attribute texture)
`).concat(i.vertexVaryingDeclarations,`

const float bias = 255.0 / 254.0;

// Width factor array for extremities (shared pool for head/tail)
const float EXTREMITY_WIDTH_FACTORS[`).concat(n.length,"] = float[](").concat(h,`);

// All path functions
`).concat(Jn(a),`

// Path selector functions
`).concat(ea(a),`

// Node-data fetch helper (geometry texel of the two-texel node stride)
`).concat(Re,`
`).concat(g?Hs:"",`
// Per-edge clamp from the frame-pass (tStart, tEnd, straightenFactor, pathLength)
`).concat(nt,`

void main() {
  // Fetch edge data from edge texture (2 texels per edge)
  // Texel 0: sourceNodeIndex, targetNodeIndex, thickness, reserved
  // Texel 1: headLengthRatio, tailLengthRatio, pathId, (headId << 4) | tailId
  int edgeIdx = int(a_edgeIndex);

  // Hidden edges are flagged with a negative row by EdgeProgram.process(). Push
  // the whole primitive outside the clip volume: every vertex lands at the same
  // out-of-range position, so it is fully clipped and rasterizes nothing —
  // neither to the frame buffer nor to the picking buffer.
  if (edgeIdx < 0) {
    gl_Position = vec4(2.0, 0.0, 0.0, 1.0);
    v_color = vec4(0.0);
    v_id = vec4(0.0);
    return;
  }

  int texel0Idx = edgeIdx * 2;
  int texel1Idx = edgeIdx * 2 + 1;
  ivec2 edgeTexCoord0 = ivec2(texel0Idx % u_edgeDataTextureWidth, texel0Idx / u_edgeDataTextureWidth);
  ivec2 edgeTexCoord1 = ivec2(texel1Idx % u_edgeDataTextureWidth, texel1Idx / u_edgeDataTextureWidth);
  vec4 edgeData0 = texelFetch(u_edgeDataTexture, edgeTexCoord0, 0);
  vec4 edgeData1 = texelFetch(u_edgeDataTexture, edgeTexCoord1, 0);

  // Unpack edge data
  int srcIdx = int(edgeData0.x);
  int tgtIdx = int(edgeData0.y);
  float a_thickness = edgeData0.z;
  // edgeData0.w is now reserved (curvature moved to path attribute texture)
  float a_headLengthRatio = edgeData1.x;
  float a_tailLengthRatio = edgeData1.y;
  int pathId = int(edgeData1.z);
  int extremityPacked = int(edgeData1.w);
  int headId = extremityPacked >> 4;
  int tailId = extremityPacked & 15;

  // Fetch path/layer attributes from edge attribute texture
`).concat(i.fetchCode,`

  // Assign path/layer attribute varyings
`).concat(i.varyingAssignments,`

  // Fetch source and target node geometry (texel 0 of the two-texel node stride)
  vec4 srcNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx);
  vec4 tgtNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx);

  vec2 a_source = srcNodeData.xy;
  vec2 a_target = tgtNodeData.xy;
`).concat(p?`
  // Assign node size varyings early (path functions like loops need them during clamping)
  v_sourceNodeSize = srcNodeData.z;
  v_targetNodeSize = tgtNodeData.z;`:"",`
`).concat(g?`
  v_sourceColor = readNodeColor(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx);
  v_targetColor = readNodeColor(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx);`:"",`

  // Convert thickness to WebGL units
  float minThickness = u_minEdgeThickness;
  float pixelsThickness = max(a_thickness, minThickness * u_sizeRatio);
  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;

  // Extremity parameters from ID lookups (shared pool)
  float headLengthRatio = a_headLengthRatio;
  float tailLengthRatio = a_tailLengthRatio;
  float headWidthFactor = EXTREMITY_WIDTH_FACTORS[headId];
  float tailWidthFactor = EXTREMITY_WIDTH_FACTORS[tailId];
  float minBodyLengthRatio = `).concat(te(c),`;

  // Per-edge values from the frame-pass texture (read by edge index).
  // tStart/tEnd are the ungated boundary clamps: re-apply the body's extremity
  // gating here (no extremity → body runs to the node center, 0/1).
  vec4 frameClamp = readFrameTexel(u_edgeFrameTexture, u_edgeFrameTextureWidth, edgeIdx);
  float tStart           = a_tailLengthRatio > 0.0 ? frameClamp.x : 0.0;
  float tEnd             = a_headLengthRatio > 0.0 ? frameClamp.y : 1.0;
  float straightenFactor = frameClamp.z;
  float pathLength       = frameClamp.w;

  // Anti-aliasing width (~1 pixel, normalized by thickness)
  float antialiasingWidth = u_correctionRatio / webGLThickness;

  float visibleLength = pathLength * (tEnd - tStart);

  // Compute extremity lengths in world units
  float headLength = headLengthRatio * webGLThickness;
  float tailLength = tailLengthRatio * webGLThickness;
  float minBodyLength = minBodyLengthRatio * webGLThickness;

  // Handle short edges: scale down extremities if needed
  float totalNeededLength = headLength + tailLength + minBodyLength;
  float extremityScale = 1.0;
  if (totalNeededLength > visibleLength && totalNeededLength > 0.0001) {
    extremityScale = visibleLength / totalNeededLength;
    headLength *= extremityScale;
    tailLength *= extremityScale;
  }

  // Convert lengths to t-values
  float headLengthT = pathLength > 0.0001 ? headLength / pathLength : 0.0;
  float tailLengthT = pathLength > 0.0001 ? tailLength / pathLength : 0.0;

  // Zone boundaries in t-space
  float tTailEnd = tStart + tailLengthT;
  float tHeadStart = tEnd - headLengthT;

  // Ensure body has non-negative length
  if (tTailEnd > tHeadStart) {
    float mid = (tStart + tEnd) * 0.5;
    tTailEnd = mid;
    tHeadStart = mid;
  }

  // Convert to webGL units for geometry expansion
  float aaWidthWebGL = antialiasingWidth * webGLThickness;

  // Extra geometry width for picking padding (0 in visual mode)
  #ifdef PICKING_MODE
    float pickingPaddingWebGL = u_pickingPadding * u_correctionRatio;
  #else
    float pickingPaddingWebGL = 0.0;
  #endif

  // Straight-line direction and normal (for blending when straightenFactor > 0)
  vec2 straightDir = length(a_target - a_source) > 0.0001
    ? normalize(a_target - a_source) : vec2(1.0, 0.0);
  vec2 straightNormal = vec2(-straightDir.y, straightDir.x);

  // Zone-based vertex processing using path selectors
  vec2 position;
  vec2 normal;
  float t;
  float zone = a_zone;
  float zoneT = a_zoneT;
  float side = a_side;

  // Scaled extremity width factors (geometry must be at least as wide as body)
  float scaledTailWidth = max(tailWidthFactor * extremityScale, 1.0);
  float scaledHeadWidth = max(headWidthFactor * extremityScale, 1.0);

  if (zone < 0.5) {
    // TAIL ZONE: rectangular quad with scaled width
    vec2 tang = queryPathTangent(pathId, tTailEnd, a_source, a_target);
    normal = vec2(-tang.y, tang.x);
    vec2 centerPos = mix(queryPathPosition(pathId, tStart, a_source, a_target),
                         queryPathPosition(pathId, tTailEnd, a_source, a_target), zoneT);
    float halfWidth = webGLThickness * scaledTailWidth * 0.5 + aaWidthWebGL + pickingPaddingWebGL;
    position = centerPos + normal * side * halfWidth;
    t = mix(tStart, tTailEnd, zoneT);

  } else if (zone < 1.5) {
    // BODY ZONE: follows path curvature with width = 1.0
    t = mix(tTailEnd, tHeadStart, zoneT);
    normal = queryPathNormal(pathId, t, a_source, a_target);
    float halfWidth = webGLThickness * 0.5 + aaWidthWebGL + pickingPaddingWebGL;
    position = queryPathPosition(pathId, t, a_source, a_target) + normal * side * halfWidth;

  } else {
    // HEAD ZONE: rectangular quad with scaled width
    vec2 tang = queryPathTangent(pathId, tHeadStart, a_source, a_target);
    normal = vec2(-tang.y, tang.x);
    vec2 centerPos = mix(queryPathPosition(pathId, tHeadStart, a_source, a_target),
                         queryPathPosition(pathId, tEnd, a_source, a_target), zoneT);
    float halfWidth = webGLThickness * scaledHeadWidth * 0.5 + aaWidthWebGL + pickingPaddingWebGL;
    position = centerPos + normal * side * halfWidth;
    t = mix(tHeadStart, tEnd, zoneT);
  }

  // Blend toward straight line based on path twist in extremity zones
  if (straightenFactor > 0.001) {
    float zoneWidth = zone < 0.5 ? webGLThickness * scaledTailWidth * 0.5 + aaWidthWebGL + pickingPaddingWebGL :
                      zone < 1.5 ? webGLThickness * 0.5 + aaWidthWebGL + pickingPaddingWebGL :
                      webGLThickness * scaledHeadWidth * 0.5 + aaWidthWebGL + pickingPaddingWebGL;
    vec2 straightPos = mix(a_source, a_target, t) + straightNormal * side * zoneWidth;
    position = mix(position, straightPos, straightenFactor);
  }

  gl_Position = vec4((u_matrix * vec3(position, 1.0)).xy, 0.0, 1.0);

  // Pass varyings to fragment shader
  v_color = a_color;
  v_color.a *= bias;
  v_opacity = a_opacity;
  v_id = a_id;
  v_thickness = webGLThickness;
  v_t = t;
  v_tStart = tStart;
  v_tEnd = tEnd;
  v_side = side;
  v_antialiasingWidth = antialiasingWidth;
  v_source = a_source;
  v_target = a_target;
  v_edgeLength = pathLength;

  // Zone varyings
  v_zone = zone;
  v_zoneT = zoneT;
  v_headLengthRatio = headLengthRatio * extremityScale;
  v_tailLengthRatio = tailLengthRatio * extremityScale;
  // Scale extremity width proportionally with length when crushed
  v_headWidthRatio = headWidthFactor * extremityScale;
  v_tailWidthRatio = tailWidthFactor * extremityScale;

  // Multi-path varyings
  v_pathId = pathId;
  v_headId = headId;
  v_tailId = tailId;
}
`);return y}function Ml(a,n,t,e){var r=me([].concat(j(a),j(t))),i=St(r),o=new Set(["u_matrix","u_sizeRatio","u_correctionRatio","u_zoomRatio","u_pixelRatio","u_cameraAngle","u_minEdgeThickness","u_pickingPadding"]),s=new Set,l=[],u=function(b){!o.has(b.name)&&!s.has(b.name)&&(s.add(b.name),l.push("uniform ".concat(b.type," ").concat(b.name,";")))};a.forEach(function(f){return f.uniforms.forEach(u)}),n.forEach(function(f){return f.uniforms.forEach(u)}),t.forEach(function(f){return f.uniforms.forEach(u)});var d=n.map(function(f){var b;return te((b=f.baseRatio)!==null&&b!==void 0?b:.5)}).join(", "),h=function(b){var _,m;return n.length>1?"EXTREMITY_BASE_RATIOS[".concat(b,"]"):te((_=(m=n[0])===null||m===void 0?void 0:m.baseRatio)!==null&&_!==void 0?_:.5)},c=n.some(function(f){return Le(f.length)?!0:f.length>0}),g=t.some(function(f){return f.needsNodeColors}),p=a.some(function(f){return f.needsNodeSize}),y=t.map(function(f,b){return"  // Layer ".concat(b+1,": ").concat(f.name,`
  color = blendOver(color, layer_`).concat(f.name,"(context));")}).join(`

`),v=`#version 300 es
precision highp float;

// Standard varyings
in vec4 v_color;
in float v_opacity;
in vec4 v_id;
in float v_thickness;       // Edge body thickness
in float v_t;
in float v_tStart;
in float v_tEnd;
in float v_side;
in float v_antialiasingWidth;  // Anti-aliasing width (normalized: u_correctionRatio / thickness)
in vec2 v_source;
in vec2 v_target;
in float v_edgeLength;
`.concat(p?`
in float v_sourceNodeSize;   // Source node size (mirrored in labels/generator.ts as plain float)
in float v_targetNodeSize;   // Target node size (mirrored in labels/generator.ts as plain float)`:"",`
`).concat(g?`
in vec4 v_sourceColor;
in vec4 v_targetColor;`:"",`
// Zone varyings
in float v_zone;            // 0=tail, 1=body, 2=head
in float v_zoneT;           // Position within zone [0,1]
in float v_headLengthRatio; // Head length as ratio of thickness (scaled for short edges)
in float v_tailLengthRatio; // Tail length as ratio of thickness (scaled for short edges)
in float v_headWidthRatio;  // Head width factor
in float v_tailWidthRatio;  // Tail width factor

// Multi-path/extremity varyings
flat in int v_pathId;
flat in int v_headId;
flat in int v_tailId;

// Path/layer attribute varyings (from vertex shader texture fetch)
`).concat(i.fragmentVaryingDeclarations,`

// Standard uniforms (needed by some path types)
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
#ifdef PICKING_MODE
uniform float u_pickingPadding;
#endif

// Custom uniforms
`).concat(l.join(`
`),`

// Fragment output (single target - picking handled via separate pass)
out vec4 fragColor;

`).concat(n.length>1?`// Base ratio array for extremities (shared pool for head/tail)
const float EXTREMITY_BASE_RATIOS[`.concat(n.length,"] = float[](").concat(d,");"):"",`

// EdgeContext struct
struct EdgeContext {
  float t;                   // Position along path [0, 1]
  float sdf;                 // Signed distance from centerline
  vec2 position;             // World position
  vec2 tangent;              // Path tangent
  vec2 normal;               // Path normal
  float thickness;           // Edge thickness
  float aaWidth;             // Anti-aliasing width
  float edgeLength;          // Total path length
  float tStart;              // Clamped start t
  float tEnd;                // Clamped end t
  float distanceFromSource;  // Arc distance from source
  float distanceToTarget;    // Arc distance to target
};

EdgeContext context;

// Alpha "over" compositing for layer blending
vec4 blendOver(vec4 bg, vec4 fg) {
  float a = fg.a;
  return vec4(mix(bg.rgb, fg.rgb, a), bg.a + a * (1.0 - bg.a));
}

// All path functions
`).concat(Jn(a),`

// Path selector functions
`).concat(ea(a),`

// All extremity functions
`).concat(Ll(n),`

// Extremity SDF selector (shared pool for head/tail)
`).concat(Fl(n),`

// Layer functions
`).concat(t.map(function(f){return f.glsl}).join(`

`),`

// Helper: Compute arc length using path selector
float computeArcLengthMulti(int pathId, float t0, float t1, vec2 source, vec2 target, int samples) {
  float arcLen = 0.0;
  vec2 prev = queryPathPosition(pathId, t0, source, target);
  for (int i = 1; i <= samples; i++) {
    float t = t0 + (t1 - t0) * float(i) / float(samples);
    vec2 curr = queryPathPosition(pathId, t, source, target);
    arcLen += length(curr - prev);
    prev = curr;
  }
  return arcLen;
}

void main() {
  // Compute normalized t within visible edge (0 = start, 1 = end)
  float tNorm = (v_t - v_tStart) / max(v_tEnd - v_tStart, 0.0001);

  // Edge body half-thickness
  float halfThickness = v_thickness * 0.5;

  // Convert normalized AA width to webGL units (~1 pixel)
  float aaWidthWebGL = v_antialiasingWidth * v_thickness;

  // Distance from centerline based on v_side interpolation
  float zoneWidthFactor = v_zone < 0.5 ? v_tailWidthRatio :
                          v_zone < 1.5 ? 1.0 :
                          v_headWidthRatio;
  // In PICKING_MODE, inflate halfGeometryWidth to match the inflated vertex geometry
  #ifdef PICKING_MODE
    float halfGeometryWidth = halfThickness * zoneWidthFactor + aaWidthWebGL + u_pickingPadding * aaWidthWebGL;
  #else
    float halfGeometryWidth = halfThickness * zoneWidthFactor + aaWidthWebGL;
  #endif
  float distFromCenter = abs(v_side) * halfGeometryWidth;

  // Populate EdgeContext (for layer functions)
  context.t = tNorm;
  context.sdf = distFromCenter - halfThickness;
  context.position = queryPathPosition(v_pathId, v_t, v_source, v_target);
  context.tangent = queryPathTangent(v_pathId, v_t, v_source, v_target);
  context.normal = vec2(-context.tangent.y, context.tangent.x);
  context.thickness = v_thickness;
  context.aaWidth = aaWidthWebGL;
  context.edgeLength = v_edgeLength;
  context.tStart = v_tStart;
  context.tEnd = v_tEnd;

  // Compute arc distances
  float visibleLength = v_edgeLength * (v_tEnd - v_tStart);
  float pathT = v_t;
  float pathTNorm = tNorm;
`).concat(a.every(function(f){return f.linearParameterization})?`  // All paths have linear parameterization: t maps directly to arc distance
  context.distanceFromSource = pathTNorm * visibleLength;
  context.distanceToTarget = (1.0 - pathTNorm) * visibleLength;`:a.every(function(f){return!f.linearParameterization})?`  // No paths have linear parameterization: use numerical integration
  context.distanceFromSource = computeArcLengthMulti(v_pathId, v_tStart, pathT, v_source, v_target, 16);
  context.distanceToTarget = computeArcLengthMulti(v_pathId, pathT, v_tEnd, v_source, v_target, 16);`:`  // Mixed parameterization: use analytical for linear paths, numerical for others
  if (`.concat(a.filter(function(f){return f.linearParameterization}).map(function(f){return"v_pathId == ".concat(a.indexOf(f))}).join(" || "),`) {
    context.distanceFromSource = pathTNorm * visibleLength;
    context.distanceToTarget = (1.0 - pathTNorm) * visibleLength;
  } else {
    context.distanceFromSource = computeArcLengthMulti(v_pathId, v_tStart, pathT, v_source, v_target, 16);
    context.distanceToTarget = computeArcLengthMulti(v_pathId, pathT, v_tEnd, v_source, v_target, 16);
  }`),`

  // Compute SDF based on zone using extremity selector (shared pool)
  float bodySDF = distFromCenter - halfThickness;
  float finalSDF;

`).concat(c?`  // Base ratios, from baseRatioLookup
  float headBaseRatio = `.concat(h("v_headId"),`;
  float tailBaseRatio = `).concat(h("v_tailId"),`;

  if (v_zone < 0.5) {
    // TAIL ZONE: v_zoneT goes 0 (tip) to 1 (base)
    vec2 uv = vec2((1.0 - v_zoneT) * v_tailLengthRatio, v_side * v_tailWidthRatio * 0.5);
    float tailSDF = queryExtremitySDF(v_tailId, uv, v_tailLengthRatio, v_tailWidthRatio) * v_thickness;

    // Apply union only near base (v_zoneT > 1 - baseRatio)
    if (v_zoneT > 1.0 - tailBaseRatio) {
      finalSDF = min(tailSDF, bodySDF);
    } else {
      finalSDF = tailSDF;
    }
  } else if (v_zone < 1.5) {
    // BODY ZONE: distance from centerline
    finalSDF = bodySDF;
  } else {
    // HEAD ZONE: v_zoneT goes 0 (base) to 1 (tip)
    vec2 uv = vec2(v_zoneT * v_headLengthRatio, v_side * v_headWidthRatio * 0.5);
    float headSDF = queryExtremitySDF(v_headId, uv, v_headLengthRatio, v_headWidthRatio) * v_thickness;

    // Apply union only near base (v_zoneT < baseRatio)
    if (v_zoneT < headBaseRatio) {
      finalSDF = min(headSDF, bodySDF);
    } else {
      finalSDF = headSDF;
    }
  }`):`  // No extremity draws tail/head geometry, so every vertex is body zone.
  finalSDF = bodySDF;`,`

  #ifdef PICKING_MODE
    // Picking pass: output edge ID for pixels within the picking area
    if (finalSDF > u_pickingPadding * aaWidthWebGL) discard;
    fragColor = v_id;
  #else
`).concat(e?`    // Visual pass: anti-aliased edge with layers, edge opacity applied once
    float alpha = smoothstep(aaWidthWebGL, -aaWidthWebGL, finalSDF) * v_opacity;`:`    // Visual pass: hard-edged (no anti-aliasing gradient) edge with layers, edge opacity applied once
    float alpha = (finalSDF < 0.0 ? 1.0 : 0.0) * v_opacity;`,`
    if (alpha < 0.01) discard;

    // Apply layers sequentially with "over" compositing
    vec4 color = vec4(0.0);

`).concat(y,`

    // Mix with transparent to fade both color AND alpha (pre-multiplied alpha for correct blending)
    fragColor = mix(vec4(0.0), color, alpha);
  #endif
}
`);return v}function Bl(a,n,t){var e=Le(n.length)?!0:n.length>0,r=Le(t.length)?!0:t.length>0;if(a.generateConstantData){var i=a.generateConstantData();return{data:i.data,attributes:i.attributes,verticesPerEdge:i.verticesPerEdge}}return Nl(a.segments,e,r)}function Fa(a){var n,t=Zr(a),e=t.paths,r=t.extremities,i=t.layers,o=(n=a.antialias)!==null&&n!==void 0?n:!0,s=new Map,l=new Map,u=new Map,d=M(e),h;try{for(d.s();!(h=d.n()).done;){var c=h.value,g=M(r),p;try{for(g.s();!(p=g.n()).done;){var y=p.value,v=M(r),f;try{for(v.s();!(f=v.n()).done;){var b=f.value,_="".concat(c.name,":").concat(y.name,":").concat(b.name),m=Bl(c,y,b);s.set(_,m.verticesPerEdge),l.set(_,m.data);var x=M(m.attributes),T;try{for(x.s();!(T=x.n()).done;){var w=T.value;u.has(w.name)||u.set(w.name,w)}}catch(X){x.e(X)}finally{x.f()}}}catch(X){v.e(X)}finally{v.f()}}}catch(X){g.e(X)}finally{g.f()}}}catch(X){d.e(X)}finally{d.f()}var S=Array.from(u.values()),A={};S.forEach(function(X,K){A[X.name]=K});var R=0,k="",D=M(s),F;try{for(D.s();!(F=D.n()).done;){var L=ee(F.value,2),N=L[0],G=L[1];G>R&&(R=G,k=N)}}catch(X){D.e(X)}finally{D.f()}var z=l.get(k)||[],P=k.split(":"),C=ee(P,1),I=C[0],H=e.find(function(X){return X.name===I}),U=[];H!=null&&H.generateConstantData?U=H.generateConstantData().attributes:U=[{name:"a_zone"},{name:"a_zoneT"},{name:"a_side"}];var $=z.map(function(X){var K=new Array(S.length).fill(0);return U.forEach(function(ne,fe){var be=A[ne.name];be!==void 0&&fe<X.length&&(K[be]=X[fe])}),K});return{vertexShader:zl(e,r,i,S),fragmentShader:Ml(e,r,i,o),uniforms:Cl(e,r,i),attributes:Wl(),verticesPerEdge:R,constantData:$,constantAttributes:S,vertexCountsPerCombination:s,constantDataPerCombination:l}}function Wl(a,n,t){return[{name:"a_edgeIndex",size:1,type:pt},{name:"a_color",size:4,type:ka,normalized:!0},{name:"a_id",size:4,type:ka,normalized:!0},{name:"a_opacity",size:1,type:pt}]}var Ol=`#version 300 es
precision highp float;

in vec4 v_clamp;

// RGBA32F target: stores (tStart, tEnd, straightenFactor, pathLength).
out vec4 fragColor;

void main() {
  fragColor = v_clamp;
}
`,Ul=function(){function a(n,t){Y(this,a),E(this,"uniformLocations",{});var e=t.paths,r=t.extremities,i=t.layers,o=t.nodeShapes,s=t.nodeLayers;this.gl=n,this.hasAttributeData=me([].concat(j(e),j(i))).floatsPerItem>0,this.hasNodeAttributeData=Object.keys(at(o,s).offsets).length>0,this.vertexShader=Vn(n,Gl(e,r,i,o,s)),this.fragmentShader=jn(n,Ol),this.program=Xn(n,[this.vertexShader,this.fragmentShader]);var l=new Set;this.customUniforms=[];for(var u=0,d=[].concat(j(e),j(r));u<d.length;u++){var h=d[u],c=M(h.uniforms),g;try{for(c.s();!(g=c.n()).done;){var p=g.value;l.has(p.name)||(l.add(p.name),this.customUniforms.push(p))}}catch(_){c.e(_)}finally{c.f()}}var y=["u_sizeRatio","u_correctionRatio","u_cameraAngle","u_minEdgeThickness","u_nodeDataTexture","u_nodeDataTextureWidth","u_edgeDataTexture","u_edgeDataTextureWidth","u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge","u_layerAttributeTexture","u_layerAttributeTextureWidth","u_layerAttributeTexelsPerNode","u_frameTextureWidth","u_frameTextureHeight"].concat(j(this.customUniforms.map(function(_){return _.name}))),v=M(y),f;try{for(v.s();!(f=v.n()).done;){var b=f.value;this.uniformLocations[b]=n.getUniformLocation(this.program,b)}}catch(_){v.e(_)}finally{v.f()}this.vao=n.createVertexArray()}return Z(a,[{key:"run",value:function(t,e,r,i,o){if(r!==0){var s=this.gl,l=this.uniformLocations;s.useProgram(this.program),s.bindVertexArray(this.vao),l.u_sizeRatio&&s.uniform1f(l.u_sizeRatio,t.sizeRatio),l.u_correctionRatio&&s.uniform1f(l.u_correctionRatio,t.correctionRatio),l.u_cameraAngle&&s.uniform1f(l.u_cameraAngle,t.cameraAngle),l.u_minEdgeThickness&&s.uniform1f(l.u_minEdgeThickness,t.minEdgeThickness),l.u_nodeDataTexture&&s.uniform1i(l.u_nodeDataTexture,t.nodeDataTextureUnit),l.u_nodeDataTextureWidth&&s.uniform1i(l.u_nodeDataTextureWidth,t.nodeDataTextureWidth),l.u_edgeDataTexture&&s.uniform1i(l.u_edgeDataTexture,t.edgeDataTextureUnit),l.u_edgeDataTextureWidth&&s.uniform1i(l.u_edgeDataTextureWidth,t.edgeDataTextureWidth),l.u_frameTextureWidth&&s.uniform1f(l.u_frameTextureWidth,e.getTextureWidth()),l.u_frameTextureHeight&&s.uniform1f(l.u_frameTextureHeight,e.getTextureHeight()),this.hasAttributeData&&i&&(i.bind(Pe),l.u_edgeAttributeTexture&&s.uniform1i(l.u_edgeAttributeTexture,Pe),l.u_edgeAttributeTextureWidth&&s.uniform1i(l.u_edgeAttributeTextureWidth,i.getTextureWidth()),l.u_edgeAttributeTexelsPerEdge&&s.uniform1i(l.u_edgeAttributeTexelsPerEdge,i.getTexelsPerItem())),this.hasNodeAttributeData&&o&&(o.bind(ke),l.u_layerAttributeTexture&&s.uniform1i(l.u_layerAttributeTexture,ke),l.u_layerAttributeTextureWidth&&s.uniform1i(l.u_layerAttributeTextureWidth,o.getTextureWidth()),l.u_layerAttributeTexelsPerNode&&s.uniform1i(l.u_layerAttributeTexelsPerNode,o.getTexelsPerItem()));var u=M(this.customUniforms),d;try{for(u.s();!(d=u.n()).done;){var h=d.value;Zn(s,this.uniformLocations[h.name],h)}}catch(c){u.e(c)}finally{u.f()}e.bindAsRenderTarget(),s.disable(s.BLEND),s.disable(s.DEPTH_TEST),s.drawArrays(s.POINTS,0,r),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindVertexArray(null)}}},{key:"kill",value:function(){var t=this.gl;t.deleteProgram(this.program),t.deleteShader(this.vertexShader),t.deleteShader(this.fragmentShader),t.deleteVertexArray(this.vao)}}])}();function ut(a,n,t,e,r,i){if(a.length===1)return"".concat(e," ").concat(n,"(int pathId, ").concat(r,`) {
  return path_`).concat(a[0].name,"_").concat(t,"(").concat(i,`);
}`);var o=a.map(function(s,l){return"    case ".concat(l,": return path_").concat(s.name,"_").concat(t,"(").concat(i,");")}).join(`
`);return"".concat(e," ").concat(n,"(int pathId, ").concat(r,`) {
  switch (pathId) {
`).concat(o,`
    default: return path_`).concat(a[0].name,"_").concat(t,"(").concat(i,`);
  }
}`)}var Hl=`
vec3 computeEdgeLabelBodyBounds(
  float tStart, float tEnd, float pathLength,
  float webGLThickness, float headLengthRatio, float tailLengthRatio
) {
  float visibleLength = pathLength * (tEnd - tStart);

  float headLength = headLengthRatio * webGLThickness;
  float tailLength = tailLengthRatio * webGLThickness;
  float totalNeededLength = headLength + tailLength;
  if (totalNeededLength > visibleLength && totalNeededLength > 0.0001) {
    float extremityScale = visibleLength / totalNeededLength;
    headLength *= extremityScale;
    tailLength *= extremityScale;
  }

  float bodyStartDist = tStart * pathLength + tailLength;
  float bodyEndDist = tEnd * pathLength - headLength;
  return vec3(bodyStartDist, bodyEndDist, max(bodyEndDist - bodyStartDist, 0.0));
}
`;function $l(a,n){var t=te(a),e=te(n);return`
float computeEdgeLabelAlpha(float bodyLength, float textWidthWebGL) {
  float ratio = textWidthWebGL > 0.0001 ? min(bodyLength / textWidthWebGL, 1.0) : 1.0;
  if (ratio < `.concat(t,`) return 0.0;
  if (ratio < `).concat(e,") return (ratio - ").concat(t,") / (").concat(e," - ").concat(t,`);
  return 1.0;
}
`)}var Vl=`
float computeEdgeLabelPerpOffset(
  float positionMode,
  float halfThickness, float marginWebGL, float halfTextHeight,
  vec2 source, vec2 target, mat3 matrix
) {
  float magnitude = halfThickness + marginWebGL + halfTextHeight;
  if (positionMode == 1.0) return magnitude;
  if (positionMode == 2.0) return -magnitude;
  if (positionMode == 3.0) {
    vec3 sc = matrix * vec3(source, 1.0);
    vec3 tc = matrix * vec3(target, 1.0);
    return sc.x < tc.x ? magnitude : -magnitude;
  }
  return 0.0;
}
`;function Jr(a){var n=a.paths,t=a.minVisibilityThreshold,e=a.fullVisibilityThreshold,r=n.some(function(s){return s.hasSharpCorners}),i=n.map(function(s){return"// --- Path: ".concat(s.name,` ---
`).concat(s.glsl,`

// Tangent/normal functions: analytical if provided, otherwise numerical
`).concat(s.analyticalTangentGlsl||Kr(s.name),`

// Auto-generated fallbacks for any missing path functions
`).concat(Yr(s.name,s.glsl),`

// Corner skip helpers (for paths with sharp corners like step/taxi)
`).concat(s.cornerSkipGlsl||"",`
`)}).join(`
`),o=r?`// Corner function selectors (only some paths have sharp corners)
vec2 queryGetCornerTs(int pathId, vec2 source, vec2 target) {
  switch (pathId) {
`.concat(n.map(function(s,l){return s.hasSharpCorners?"    case ".concat(l,": return path_").concat(s.name,"_getCornerTs(source, target);"):"    case ".concat(l,": return vec2(-1.0, -1.0); // No corners for ").concat(s.name)}).join(`
`),`
    default: return vec2(-1.0, -1.0);
  }
}

vec2 queryGetCornerConcavity(int pathId, vec2 source, vec2 target, float perpOffset) {
  switch (pathId) {
`).concat(n.map(function(s,l){return s.hasSharpCorners?"    case ".concat(l,": return path_").concat(s.name,"_getCornerConcavity(source, target, perpOffset);"):"    case ".concat(l,": return vec2(0.0, 0.0); // No corners for ").concat(s.name)}).join(`
`),`
    default: return vec2(0.0, 0.0);
  }
}`):"";return`
// ============================================================================
// Node data fetch (geometry texel) and per-edge clamp fetch (edge-frame texture)
// ============================================================================

`.concat(Re,`
`).concat(nt,`

// ============================================================================
// Path Functions (one block per path)
// ============================================================================

`).concat(i,`

// ============================================================================
// Path Query Selectors (dispatch by pathId)
// ============================================================================

`).concat(ut(n,"queryPathPosition","position","vec2","float t, vec2 source, vec2 target","t, source, target"),`

`).concat(ut(n,"queryPathTangent","tangent","vec2","float t, vec2 source, vec2 target","t, source, target"),`

`).concat(ut(n,"queryPathNormal","normal","vec2","float t, vec2 source, vec2 target","t, source, target"),`

`).concat(ut(n,"queryPathLength","length","float","vec2 source, vec2 target","source, target"),`

`).concat(ut(n,"queryPathTAtDistance","t_at_distance","float","float dist, vec2 source, vec2 target","dist, source, target"),`

`).concat(o,`

// ============================================================================
// Shared helpers (body bounds, alpha ramp, perpendicular offset)
// ============================================================================

`).concat(Hl,`
`).concat($l(t,e),`
`).concat(Vl,`
`)}var jl=Ee.fontSize,Xl=new Map,ei=24,Ia=(ei+1)*2;function ql(a){var n=a.paths,t=a.fontSizeMode,e=a.headLengthRatio,r=a.tailLengthRatio,i=a.minVisibilityThreshold,o=a.fullVisibilityThreshold,s=t==="scaled",l=_t(),u=me([].concat(j(n),[l])),d=St(u),h=`#version 300 es

// Per-instance attributes
in float a_edgeIndex;
in float a_edgeAttrIndex;
in float a_baseFontSize;
in float a_totalTextWidth;
in float a_positionMode;
in float a_margin;
in float a_padding;
in vec4 a_color;
in vec4 a_id;

// Per-vertex (constant) attribute: strip vertex index
in float a_vertexIndex;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_pixelRatio;
uniform float u_cameraAngle;
uniform vec2 u_resolution;
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_edgeDataTexture;
uniform int u_edgeDataTextureWidth;
uniform sampler2D u_edgeFrameTexture; // Per-edge clamp (tStart, tEnd, straightenFactor, pathLength)
uniform int u_edgeFrameTextureWidth;
`.concat(s?"uniform float u_zoomSizeRatio;":"",`

`).concat(d.uniformDeclarations,`

out vec4 v_color;
out vec4 v_id;
out float v_alphaModifier;

const float ATLAS_FONT_SIZE = `).concat(te(jl),`;
const float HEAD_RATIO = `).concat(te(e),`;
const float TAIL_RATIO = `).concat(te(r),`;
const int RIBBON_SEGMENTS = `).concat(ei,`;

// Path attribute varyings (declared as plain locals since this shader has no FS inputs for them)
`).concat(d.vertexVaryingDeclarations.replace(/out /g,""),`

// Node size variables used by some path functions (self-loops, etc.)
float v_sourceNodeSize;
float v_targetNodeSize;

// Shared preamble: shape SDFs, path functions + selectors, clamp, helpers.
`).concat(Jr({paths:n,minVisibilityThreshold:i,fullVisibilityThreshold:o}),`

void main() {
  int vIdx = int(a_vertexIndex);
  int pairIdx = vIdx / 2;
  int side = vIdx - pairIdx * 2; // 0 = left/bottom, 1 = right/top

  // --- Fetch edge data (2 texels per edge) ---
  int edgeIdx = int(a_edgeIndex);
  int texel0Idx = edgeIdx * 2;
  int texel1Idx = edgeIdx * 2 + 1;
  ivec2 e0 = ivec2(texel0Idx % u_edgeDataTextureWidth, texel0Idx / u_edgeDataTextureWidth);
  ivec2 e1 = ivec2(texel1Idx % u_edgeDataTextureWidth, texel1Idx / u_edgeDataTextureWidth);
  vec4 edgeData0 = texelFetch(u_edgeDataTexture, e0, 0);
  vec4 edgeData1 = texelFetch(u_edgeDataTexture, e1, 0);

  int srcIdx = int(edgeData0.x);
  int tgtIdx = int(edgeData0.y);
  float thickness = edgeData0.z;
  int pathId = int(edgeData1.z);

  // --- Fetch path attributes (curvature, etc.) ---
  {
    int edgeIdx = int(a_edgeAttrIndex);
`).concat(d.fetchCode,`
`).concat(d.varyingAssignments,`
  }

  // --- Fetch node data: geometry (texel 0) + rotation flags (texel 1) ---
  vec4 srcN = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx);
  vec4 tgtN = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx);

  vec2 source = srcN.xy;
  vec2 target = tgtN.xy;
  float sourceSize = srcN.z;
  float targetSize = tgtN.z;
  v_sourceNodeSize = sourceSize;
  v_targetNodeSize = targetSize;

  // --- Pixel-to-graph conversion (fixed font mode) ---
  float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
  float pixelToGraph = 2.0 / (matrixScaleX * u_resolution.x);

  float webGLThickness = thickness * u_correctionRatio / u_sizeRatio;

  // --- Body bounds (shared with edge label shader) ---
  vec4 edgeClamp = readFrameTexel(u_edgeFrameTexture, u_edgeFrameTextureWidth, edgeIdx);
  vec3 bodyBounds = computeEdgeLabelBodyBounds(
    edgeClamp.x, edgeClamp.y, edgeClamp.w,
    webGLThickness, HEAD_RATIO, TAIL_RATIO
  );
  float bodyStartDist = bodyBounds.x;
  float bodyEndDist = bodyBounds.y;
  float bodyLength = bodyBounds.z;

  // --- Text dimensions ---
  float baseFontSize = a_baseFontSize;
  `).concat(s?`float fontScale = baseFontSize / ATLAS_FONT_SIZE * u_zoomSizeRatio;
  float textWidthWebGL = a_totalTextWidth * fontScale * u_correctionRatio / u_sizeRatio;
  float halfTextHeight = baseFontSize * 0.35 * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;
  float marginWebGL = a_margin * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;`:`float fontScale = baseFontSize / ATLAS_FONT_SIZE;
  float textWidthWebGL = a_totalTextWidth * fontScale * pixelToGraph;
  float halfTextHeight = baseFontSize * 0.35 * pixelToGraph;
  float marginWebGL = a_margin * pixelToGraph;`,`
  float paddingWebGL = a_padding * pixelToGraph;

  // --- Alpha modifier (shared with edge label shader) ---
  float alphaModifier = computeEdgeLabelAlpha(bodyLength, textWidthWebGL);
  if (alphaModifier <= 0.0 || textWidthWebGL <= 0.0) {
    gl_Position = vec4(2.0, 0.0, 0.0, 1.0);
    v_color = vec4(0.0);
    v_id = vec4(0.0);
    v_alphaModifier = 0.0;
    return;
  }

  // --- Perpendicular offset (shared with edge label shader) ---
  float halfThickness = webGLThickness * 0.5;
  float perpOffset = computeEdgeLabelPerpOffset(
    a_positionMode, halfThickness, marginWebGL, halfTextHeight, source, target, u_matrix
  );

  // --- Ribbon span (clipped to body) ---
  float bodyCenterDist = (bodyStartDist + bodyEndDist) * 0.5;
  float halfTextWebGL = textWidthWebGL * 0.5;
  float labelStartDist = max(bodyCenterDist - halfTextWebGL, bodyStartDist);
  float labelEndDist = min(bodyCenterDist + halfTextWebGL, bodyEndDist);

  // Sample centerline at this pair, then apply perpendicular offset.
  // The ribbon follows the centerline path (simple & robust); for curved edges
  // this closely matches the offset path the characters sit on.
  float u = float(pairIdx) / float(RIBBON_SEGMENTS);
  float arcDist = mix(labelStartDist, labelEndDist, u);
  float t = queryPathTAtDistance(pathId, arcDist, source, target);
  vec2 pos = queryPathPosition(pathId, t, source, target);
  vec2 tan = queryPathTangent(pathId, t, source, target);
  vec2 perp = vec2(-tan.y, tan.x);

  vec2 centerPos = pos + perp * perpOffset;

  float halfRibbon = halfTextHeight + paddingWebGL;
  float sideSign = side == 0 ? -1.0 : 1.0;
  vec2 ribbonPos = centerPos + perp * (sideSign * halfRibbon);

  vec3 clipPos = u_matrix * vec3(ribbonPos, 1.0);
  gl_Position = vec4(clipPos.xy, 0.0, 1.0);

  v_color = a_color;
  v_id = a_id;
  v_alphaModifier = alphaModifier;
}
`);return h}var Kl=`#version 300 es
precision highp float;

in vec4 v_color;
in vec4 v_id;
in float v_alphaModifier;

out vec4 fragColor;

void main() {
#ifdef PICKING_MODE
  if (v_alphaModifier <= 0.0) discard;
  fragColor = v_id;
#else
  float alpha = v_color.a * v_alphaModifier;
  if (alpha <= 0.0) discard;
  fragColor = vec4(v_color.rgb * alpha, alpha);
#endif
}
`;function Yl(a,n,t,e){var r=e.shaderConfig,i=r.paths,o=r.fontSizeMode;if(i.length===0)throw new Error("createEdgeLabelBackgroundProgram: shaderConfig must declare at least one path");var s=_t(),l=me([].concat(j(i),[s])),u=Kt([].concat(j(i),[s]),l),d=ql(r),h=function(c){function g(p,y,v){var f;return Y(this,g),f=ie(this,g,[p,y,v]),E(f,"totalCount",0),E(f,"bufferCapacity",0),E(f,"edgeAttributeTexture",null),f.edgeAttributeTexture=new qt(p,l),f.packedAttributeData=new Float32Array(l.floatsPerItem),f}return oe(g,c),Z(g,[{key:"getDefinition",value:function(){for(var y=WebGL2RenderingContext,v=y.FLOAT,f=y.UNSIGNED_BYTE,b=y.TRIANGLE_STRIP,_=[],m=0;m<Ia;m++)_.push([m]);var x=["u_matrix","u_sizeRatio","u_correctionRatio","u_pixelRatio","u_cameraAngle","u_resolution","u_nodeDataTexture","u_nodeDataTextureWidth","u_edgeDataTexture","u_edgeDataTextureWidth","u_edgeFrameTexture","u_edgeFrameTextureWidth"];return o==="scaled"&&x.push("u_zoomSizeRatio"),l.floatsPerItem>0&&x.push("u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge"),{VERTICES:Ia,VERTEX_SHADER_SOURCE:d,FRAGMENT_SHADER_SOURCE:Kl,METHOD:b,UNIFORMS:x,ATTRIBUTES:[{name:"a_edgeIndex",size:1,type:v},{name:"a_edgeAttrIndex",size:1,type:v},{name:"a_baseFontSize",size:1,type:v},{name:"a_totalTextWidth",size:1,type:v},{name:"a_positionMode",size:1,type:v},{name:"a_margin",size:1,type:v},{name:"a_padding",size:1,type:v},{name:"a_color",size:4,type:f,normalized:!0},{name:"a_id",size:4,type:f,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:"a_vertexIndex",size:1,type:v}],CONSTANT_DATA:_}}},{key:"processEdgeLabelBackground",value:function(y,v,f){var b=0;if(this.edgeAttributeTexture&&l.floatsPerItem>0){b=this.edgeAttributeTexture.allocate(v);var _=this.packedAttributeData;Yt(u,f.edgeAttributes,_,"",Xl,0),this.edgeAttributeTexture.updateAllAttributes(v,_)}var m=this.floats,x=this.ints,T=y*this.STRIDE;m[T++]=f.edgeIndex,m[T++]=b,m[T++]=f.baseFontSize,m[T++]=f.totalTextWidth,m[T++]=f.positionMode,m[T++]=f.margin,m[T++]=f.padding,m[T++]=f.color,x[T++]=f.id}},{key:"setUniforms",value:function(y,v){var f=v.gl,b=v.uniformLocations;if(f.uniformMatrix3fv(b.u_matrix,!1,y.matrix),f.uniform1f(b.u_sizeRatio,y.sizeRatio),f.uniform1f(b.u_correctionRatio,y.correctionRatio),f.uniform1f(b.u_pixelRatio,y.pixelRatio),f.uniform1f(b.u_cameraAngle,y.cameraAngle),f.uniform2f(b.u_resolution,y.width,y.height),b.u_nodeDataTexture!==void 0&&f.uniform1i(b.u_nodeDataTexture,y.nodeDataTextureUnit),b.u_nodeDataTextureWidth!==void 0&&f.uniform1i(b.u_nodeDataTextureWidth,y.nodeDataTextureWidth),b.u_edgeDataTexture!==void 0&&f.uniform1i(b.u_edgeDataTexture,y.edgeDataTextureUnit),b.u_edgeDataTextureWidth!==void 0&&f.uniform1i(b.u_edgeDataTextureWidth,y.edgeDataTextureWidth),b.u_edgeFrameTexture!==void 0&&f.uniform1i(b.u_edgeFrameTexture,y.edgeFrameTextureUnit),b.u_edgeFrameTextureWidth!==void 0&&f.uniform1i(b.u_edgeFrameTextureWidth,y.edgeFrameTextureWidth),o==="scaled"&&b.u_zoomSizeRatio!==void 0){var _=this.renderer.getSetting("zoomToSizeRatioFunction");f.uniform1f(b.u_zoomSizeRatio,1/_(y.zoomRatio))}this.edgeAttributeTexture&&l.floatsPerItem>0&&b.u_edgeAttributeTexture!==void 0&&(this.edgeAttributeTexture.bind(Pe),f.uniform1i(b.u_edgeAttributeTexture,Pe),f.uniform1i(b.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),f.uniform1i(b.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem()))}},{key:"renderProgram",value:function(y,v){this.edgeAttributeTexture&&l.floatsPerItem>0&&this.edgeAttributeTexture.upload(),le(g,"renderProgram",this)([y,v])}},{key:"kill",value:function(){this.edgeAttributeTexture&&(this.edgeAttributeTexture.kill(),this.edgeAttributeTexture=null),le(g,"kill",this)([])}},{key:"drawWebGL",value:function(y,v){var f=v.gl;this.totalCount!==0&&f.drawArraysInstanced(f.TRIANGLE_STRIP,0,this.VERTICES,this.totalCount)}},{key:"reallocate",value:function(y){this.totalCount=y,y>this.bufferCapacity&&(this.bufferCapacity=Math.max(y,Math.ceil(this.bufferCapacity*1.5)||10),le(g,"reallocate",this)([this.bufferCapacity]))}}])}(Ue);return new h(a,n,t)}function ti(a){var n,t,e,r,i;return{paths:a.paths,headLengthRatio:(n=a.headLengthRatio)!==null&&n!==void 0?n:0,tailLengthRatio:(t=a.tailLengthRatio)!==null&&t!==void 0?t:0,fontSizeMode:(e=a.fontSizeMode)!==null&&e!==void 0?e:"fixed",minVisibilityThreshold:(r=a.minVisibilityThreshold)!==null&&r!==void 0?r:.7,fullVisibilityThreshold:(i=a.fullVisibilityThreshold)!==null&&i!==void 0?i:.8}}var Zl=Ee.fontSize,Ql=17/64;function Jl(a){var n=a.paths,t=a.hasBorder,e=t===void 0?!1:t,r=a.fontSizeMode,i=r===void 0?"fixed":r,o=a.minVisibilityThreshold,s=o===void 0?.5:o,l=a.fullVisibilityThreshold,u=l===void 0?.6:l,d=i==="scaled",h=n.some(function(v){return v.hasSharpCorners}),c=_t(),g=me([].concat(j(n),[c])),p=St(g),y=`#version 300 es

// ============================================================================
// Attributes - Per Character (Instanced)
// ============================================================================

// Edge geometry: indices for texture lookup
// Edge data (source/target node indices, thickness, head/tail ratios) is fetched from edge data texture
// Edge path attributes (curvature, etc.) are fetched from edge attribute texture
in float a_edgeIndex;       // Index into edge data texture
in float a_edgeAttrIndex;   // Index into edge attribute texture (for curvature, etc.)
in float a_baseFontSize;    // Base font size in pixels (per-label)

// Character metrics (in glyph units = atlas font size pixels)
in vec4 a_charMetrics;      // (charTextOffset, charAdvance, totalTextWidth, positionMode)
in vec4 a_charDims;         // (charSize.x, charSize.y, charOffset.x, charOffset.y)

// Atlas texture coordinates
in vec4 a_texCoords;        // (x, y, width, height) in atlas pixels

// Label parameters
in vec2 a_labelParams;      // (margin, unused)

// Appearance
in vec4 a_color;            // Character color (RGBA, normalized)
`.concat(e?"in vec4 a_borderColor;      // Border color (RGBA, normalized)":"",`

// ============================================================================
// Attributes - Per Vertex (Constant)
// ============================================================================

in vec2 a_quadCorner;       // Quad corner: (0,0), (1,0), (0,1), (1,1)

// ============================================================================
// Uniforms
// ============================================================================

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_pixelRatio;
uniform float u_cameraAngle;    // Required by node shape SDFs
// u_sdfBufferPixels kept for ABI compatibility but unused in shader
uniform float u_sdfBufferPixels;
uniform vec2 u_resolution;
uniform vec2 u_atlasSize;
uniform sampler2D u_nodeDataTexture; // Shared texture with node position/size/shape data
uniform int u_nodeDataTextureWidth;  // Width of 2D node data texture for coordinate calculation
uniform sampler2D u_edgeDataTexture; // Shared texture with edge data
uniform int u_edgeDataTextureWidth;  // Width of 2D edge data texture for coordinate calculation
uniform sampler2D u_edgeFrameTexture; // Per-edge clamp (tStart, tEnd, straightenFactor, pathLength)
uniform int u_edgeFrameTextureWidth;
`).concat(d?"uniform float u_zoomSizeRatio;  // Zoom-based size ratio from zoomToSizeRatioFunction":"",`

// Edge path attribute texture uniforms (for curvature and other path attributes)
`).concat(p.uniformDeclarations,`

// ============================================================================
// Varyings
// ============================================================================

out vec2 v_texCoord;
out vec4 v_color;
`).concat(e?"out vec4 v_borderColor;":"",`
out float v_edgeFade;  // 0 = fully visible, 1 = fully faded (outside body)
out float v_alphaModifier;  // 0-1 based on label visibility ratio
out float v_fontScale;  // Ratio of rendered font size to atlas font size
`).concat(e?"out float v_positionMode;  // Position mode for conditional border (0=over needs border)":"",`

// ============================================================================
// Constants
// ============================================================================

const float bias = 255.0 / 254.0;
const float FADE_WIDTH_PIXELS = 15.0;  // Width of fade gradient in pixels
const float ATLAS_FONT_SIZE = `).concat(te(Zl),`;  // Base font size used in SDF atlas
const float VERTICAL_CENTER_RATIO = `).concat(te(Ql),`;  // Baseline to visual center ratio

// ============================================================================
// Path Attribute Variables (set in main, used by path functions)
// ============================================================================
// Path attributes are fetched from the edge attribute texture and stored in
// variables with v_ prefix (e.g., v_curvature) for path functions to access.
`).concat(p.vertexVaryingDeclarations.replace(/out /g,""),`

// Node size variables (set in main, used by some path functions like loops).
// These mirror the v_sourceNodeSize / v_targetNodeSize varyings in generator.ts,
// but are plain floats here since the label shader is vertex-only.
float v_sourceNodeSize;
float v_targetNodeSize;

// Shared preamble: shape SDFs, path functions + selectors, clamp, helpers.
`).concat(Jr({paths:n,minVisibilityThreshold:s,fullVisibilityThreshold:u}),`

// ============================================================================
// Main
// ============================================================================

void main() {
  // -------------------------------------------------------------------------
  // Fetch edge data from edge texture (2 texels per edge)
  // -------------------------------------------------------------------------
  // Texel 0: sourceNodeIndex, targetNodeIndex, thickness, reserved
  // Texel 1: headLengthRatio, tailLengthRatio, pathId, extremityIds
  int edgeIdx = int(a_edgeIndex);
  int texel0Idx = edgeIdx * 2;
  int texel1Idx = edgeIdx * 2 + 1;
  ivec2 edgeTexCoord0 = ivec2(texel0Idx % u_edgeDataTextureWidth, texel0Idx / u_edgeDataTextureWidth);
  ivec2 edgeTexCoord1 = ivec2(texel1Idx % u_edgeDataTextureWidth, texel1Idx / u_edgeDataTextureWidth);
  vec4 edgeData0 = texelFetch(u_edgeDataTexture, edgeTexCoord0, 0);
  vec4 edgeData1 = texelFetch(u_edgeDataTexture, edgeTexCoord1, 0);

  // Unpack edge data
  int srcIdx = int(edgeData0.x);
  int tgtIdx = int(edgeData0.y);
  float thickness = edgeData0.z;
  // edgeData0.w is reserved
  float headLengthRatio = edgeData1.x;
  float tailLengthRatio = edgeData1.y;
  int pathId = int(edgeData1.z);  // Path type for multi-path support
  float baseFontSize = a_baseFontSize;

  // -------------------------------------------------------------------------
  // Fetch path attributes from edge attribute texture
  // -------------------------------------------------------------------------
  // Note: The fetch code uses 'edgeIdx' variable, so we set it to the attribute texture index
  {
    int edgeIdx = int(a_edgeAttrIndex);  // Use attribute texture index for path attributes
`).concat(p.fetchCode,`
`).concat(p.varyingAssignments,`
  }

  // -------------------------------------------------------------------------
  // Fetch node data from node texture (geometry texel + rotation-flags texel)
  // -------------------------------------------------------------------------
  vec4 srcNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx);
  vec4 tgtNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx);

  vec2 source = srcNodeData.xy;
  vec2 target = tgtNodeData.xy;
  float sourceSize = srcNodeData.z;
  float targetSize = tgtNodeData.z;
  v_sourceNodeSize = sourceSize;
  v_targetNodeSize = targetSize;
  float charTextOffset = a_charMetrics.x;
  float charAdvance = a_charMetrics.y;
  float totalTextWidth = a_charMetrics.z;
  float positionMode = a_charMetrics.w;
  vec2 charSize = a_charDims.xy;
  vec2 charOffset = a_charDims.zw;
  float margin = a_labelParams.x;

  // -------------------------------------------------------------------------
  // Compute pixel-to-graph conversion (for fixed font size mode)
  // -------------------------------------------------------------------------
  // This converts screen pixels to graph units such that N pixels on screen
  // becomes N pixels regardless of zoom level.
  // matrixScaleX is how much the matrix scales graph units to clip space
  float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
  float pixelToGraph = 2.0 / (matrixScaleX * u_resolution.x);

  // -------------------------------------------------------------------------
  // Step 1: Convert thickness to WebGL units
  // -------------------------------------------------------------------------
  float webGLThickness = thickness * u_correctionRatio / u_sizeRatio;

  // -------------------------------------------------------------------------
  // Step 2: Compute body bounds (truncated at node boundaries + extremities)
  // -------------------------------------------------------------------------
  vec4 edgeClamp = readFrameTexel(u_edgeFrameTexture, u_edgeFrameTextureWidth, edgeIdx);
  vec3 bodyBounds = computeEdgeLabelBodyBounds(
    edgeClamp.x, edgeClamp.y, edgeClamp.w,
    webGLThickness, headLengthRatio, tailLengthRatio
  );
  float bodyStartDist = bodyBounds.x;
  float bodyEndDist = bodyBounds.y;
  float bodyLength = bodyBounds.z;

  // -------------------------------------------------------------------------
  // Step 3: Compute font scale and text dimensions
  // -------------------------------------------------------------------------
  // Font size modes:
  // - "fixed": Constant pixel size regardless of zoom, using pixelToGraph conversion
  // - "scaled": Scales with zoom using zoomToSizeRatioFunction
  `).concat(d?`// Scaled mode: font scales with zoom
  float fontScale = baseFontSize / ATLAS_FONT_SIZE * u_zoomSizeRatio;
  // Convert glyph-unit metrics to WebGL units (scales with zoom)
  float textWidthWebGL = totalTextWidth * fontScale * u_correctionRatio / u_sizeRatio;
  float charOffsetWebGL = charTextOffset * fontScale * u_correctionRatio / u_sizeRatio;
  float charAdvanceWebGL = charAdvance * fontScale * u_correctionRatio / u_sizeRatio;`:`// Fixed mode: font stays constant in screen pixels
  float fontScale = baseFontSize / ATLAS_FONT_SIZE;
  // Convert glyph-unit metrics to graph units using pixelToGraph (zoom-independent)
  float textWidthWebGL = totalTextWidth * fontScale * pixelToGraph;
  float charOffsetWebGL = charTextOffset * fontScale * pixelToGraph;
  float charAdvanceWebGL = charAdvance * fontScale * pixelToGraph;`,`

  // Font scale varying for fragment shader gamma scaling.
  // Ratio of rendered font size to atlas font size — used to tighten the
  // anti-aliasing band for large labels so they stay sharp.
  v_fontScale = fontScale;

  // -------------------------------------------------------------------------
  // Step 4: Alpha modifier from how much of the label fits in the body
  // -------------------------------------------------------------------------
  float alphaModifier = computeEdgeLabelAlpha(bodyLength, textWidthWebGL);

  // -------------------------------------------------------------------------
  // Step 5: Compute character center offset (truncation check moved to after curvature adjustment)
  // -------------------------------------------------------------------------
  // Character center position relative to label center (on centerline, before curvature adjustment)
  float charCenterOffset = charOffsetWebGL + charAdvanceWebGL * 0.5 - textWidthWebGL * 0.5;

  // -------------------------------------------------------------------------
  // Step 6: Compute perpendicular offset based on position mode
  // -------------------------------------------------------------------------
  // Position modes: 0=over, 1=above, 2=below, 3=auto
  // Needed early for curvature-adaptive character spacing in Step 7
  float halfThickness = webGLThickness * 0.5;
  `).concat(d?`// Scaled mode: margin and text height scale with zoom (same factor as font)
  float marginWebGL = margin * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;
  float halfTextHeight = baseFontSize * 0.35 * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;`:`// Fixed mode: margin and text height stay constant in screen pixels
  float marginWebGL = margin * pixelToGraph;
  float halfTextHeight = baseFontSize * 0.35 * pixelToGraph;`,`
  float perpOffset = computeEdgeLabelPerpOffset(
    positionMode, halfThickness, marginWebGL, halfTextHeight, source, target, u_matrix
  );

  // -------------------------------------------------------------------------
  // Step 7: Position character on path using offset path traversal
  // -------------------------------------------------------------------------
  // Body center in arc distance
  float bodyCenterDist = (bodyStartDist + bodyEndDist) * 0.5;

  // For "over" mode (perpOffset = 0), use simple centerline placement
  // For above/below modes, walk along the offset path to find correct position
  float charT;

  if (perpOffset == 0.0) {
    // Simple case: place on centerline
    float charArcDist = bodyCenterDist + charCenterOffset;
    charT = queryPathTAtDistance(pathId, charArcDist, source, target);
  } else {
    // Offset path traversal: walk along the offset curve to find character position
    // This ensures even character spacing regardless of curvature

    // Start from body center on offset path
    float centerT = queryPathTAtDistance(pathId, bodyCenterDist, source, target);

    `).concat(h?`// -----------------------------------------------------------------------
    // Corner skip setup for step/taxi edges with above/below labels
    // -----------------------------------------------------------------------
    // At concave corners (inner side of the bend), characters would bunch up
    // because the offset path has near-zero arc length. We detect corner
    // crossings during the offset path traversal and add skip distance.

    // Get corner t values and concavity
    vec2 cornerTs = queryGetCornerTs(pathId, source, target);
    vec2 concavity = queryGetCornerConcavity(pathId, source, target, perpOffset);

    // Skip distance in graph units, proportional to on-screen font size
    // For fixed mode: use pixelToGraph so gap stays constant regardless of zoom
    // For scaled mode: use the same conversion as text width
    `.concat(d?"float skipDistGraph = STEP_INNER_CORNER_SKIP_FACTOR * baseFontSize * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;":"float skipDistGraph = STEP_INNER_CORNER_SKIP_FACTOR * baseFontSize * pixelToGraph;",`

    // Corner t values for detecting crossings during traversal
    float corner1T = cornerTs.x;
    float corner2T = cornerTs.y;
    bool corner1IsConcave = concavity.x > 0.5;
    bool corner2IsConcave = concavity.y > 0.5;`):"",`

    // Target distance along offset path from center
    float targetOffsetDist = abs(charCenterOffset);

    // Handle center character (charCenterOffset ≈ 0) - no search needed
    if (targetOffsetDist < 0.0001) {
      charT = centerT;
    } else {
      vec2 centerPos = queryPathPosition(pathId, centerT, source, target);
      vec2 centerNormal = queryPathNormal(pathId, centerT, source, target);
      vec2 offsetCenter = centerPos + centerNormal * perpOffset;

      float searchDir = charCenterOffset > 0.0 ? 1.0 : -1.0;

      // Search bounds (t values for body start and end)
      float tBodyStart = queryPathTAtDistance(pathId, bodyStartDist, source, target);
      float tBodyEnd = queryPathTAtDistance(pathId, bodyEndDist, source, target);

      // Walk along offset path to find character position
      float accumDist = 0.0;
      vec2 prevOffsetPos = offsetCenter;
      float prevT = centerT;
      float foundT = centerT;

      // Search range depends on direction
      float tSearchEnd = searchDir > 0.0 ? tBodyEnd : tBodyStart;

      `).concat(h?`// Track which concave corners we've crossed to add skip distance
      bool crossedCorner1 = false;
      bool crossedCorner2 = false;
      float effectiveTargetDist = targetOffsetDist;`:"",`

      const int STEPS = 32;
      for (int i = 1; i <= STEPS; i++) {
        // Step along centerline t, from center toward target
        float stepT = centerT + searchDir * float(i) * abs(tSearchEnd - centerT) / float(STEPS);

        `).concat(h?`// Check for concave corner crossings and add skip distance
        // Corner 1 crossing check
        if (corner1IsConcave && !crossedCorner1) {
          bool crossingCorner1 = (searchDir > 0.0)
            ? (prevT < corner1T && stepT >= corner1T)
            : (prevT > corner1T && stepT <= corner1T);
          if (crossingCorner1) {
            crossedCorner1 = true;
            effectiveTargetDist += skipDistGraph;
          }
        }

        // Corner 2 crossing check
        if (corner2IsConcave && !crossedCorner2) {
          bool crossingCorner2 = (searchDir > 0.0)
            ? (prevT < corner2T && stepT >= corner2T)
            : (prevT > corner2T && stepT <= corner2T);
          if (crossingCorner2) {
            crossedCorner2 = true;
            effectiveTargetDist += skipDistGraph;
          }
        }`:"",`

        // Compute offset position at this t
        vec2 stepPos = queryPathPosition(pathId, stepT, source, target);
        vec2 stepNormal = queryPathNormal(pathId, stepT, source, target);
        vec2 offsetPos = stepPos + stepNormal * perpOffset;

        // Distance along offset path
        float segDist = length(offsetPos - prevOffsetPos);

        `).concat(h?`if (accumDist + segDist >= effectiveTargetDist) {
          // Interpolate within segment to find exact t
          float remaining = effectiveTargetDist - accumDist;
          float segT = remaining / max(segDist, 0.0001);
          foundT = mix(prevT, stepT, segT);
          break;
        }`:`if (accumDist + segDist >= targetOffsetDist) {
          // Interpolate within segment to find exact t
          float remaining = targetOffsetDist - accumDist;
          float segT = remaining / max(segDist, 0.0001);
          foundT = mix(prevT, stepT, segT);
          break;
        }`,`

        accumDist += segDist;
        prevOffsetPos = offsetPos;
        prevT = stepT;
        // Update foundT to last valid position in case loop exhausts without finding target
        foundT = stepT;
      }

      charT = foundT;
    }
  }

  // Get position and tangent at final character position
  vec2 pathPos = queryPathPosition(pathId, charT, source, target);
  vec2 tangent = queryPathTangent(pathId, charT, source, target);

  // Compute perpendicular direction (90 degrees from tangent)
  vec2 perpDir = vec2(-tangent.y, tangent.x);

  // Apply perpendicular offset to path position
  vec2 offsetPathPos = pathPos + perpDir * perpOffset;

  // -------------------------------------------------------------------------
  // Step 8: Build character quad
  // -------------------------------------------------------------------------
  // Character size in screen pixels
  vec2 charSizePixels = charSize * fontScale;

  // Character offset from origin to the atlas region's top-left corner.
  // bearingX/bearingY already include the SDF buffer.
  vec2 charOffsetPixels = charOffset * fontScale;

  // The character's local X offset from pathPos (which is at character center)
  float charLocalX = -charAdvance * 0.5 * fontScale;

  // Build quad position:
  // - Start at character origin (charLocalX on X axis, 0 on Y axis = baseline)
  // - Add bearing offset to get to atlas region corner
  // - Add quad corner * size to get vertex position
  vec2 quadPos;
  quadPos.x = charLocalX + charOffsetPixels.x + a_quadCorner.x * charSizePixels.x;
  // charOffset.y = -bearingY (negated), so -charOffsetPixels.y = bearingY * fontScale
  // (distance from baseline to atlas region top, positive = upward)
  // Quad corner (0,0) = bottom-left, (1,1) = top-right
  quadPos.y = -charOffsetPixels.y - charSizePixels.y * (1.0 - a_quadCorner.y);

  // Center vertically on the path by offsetting by half the visual text height
  // VERTICAL_CENTER_RATIO is the distance from baseline to visual center as a ratio of atlas font size
  float verticalCenterOffset = VERTICAL_CENTER_RATIO * ATLAS_FONT_SIZE * fontScale;
  quadPos.y -= verticalCenterOffset;

  // -------------------------------------------------------------------------
  // Step 9: Rotate quad to align with tangent
  // -------------------------------------------------------------------------
  // Rotation matrix from tangent
  // tangent = (cos(angle), sin(angle)), so we can build rotation directly
  mat2 rotation = mat2(tangent.x, tangent.y, -tangent.y, tangent.x);

  // Convert pixel offset to WebGL units for rotation
  `).concat(d?"vec2 quadPosWebGL = quadPos * u_correctionRatio / u_sizeRatio; // Scaled mode":"vec2 quadPosWebGL = quadPos * pixelToGraph; // Fixed mode: use pixelToGraph for zoom-independent size",`

  // Rotate around character center on path
  vec2 rotatedOffset = rotation * quadPosWebGL;

  // Final position in graph space (using offset path position for above/below modes)
  vec2 worldPos = offsetPathPos + rotatedOffset;

  // -------------------------------------------------------------------------
  // Step 10: Transform to clip space
  // -------------------------------------------------------------------------
  vec3 clipPos = u_matrix * vec3(worldPos, 1.0);
  gl_Position = vec4(clipPos.xy, 0.0, 1.0);

  // -------------------------------------------------------------------------
  // Step 11: Texture coordinates
  // -------------------------------------------------------------------------
  // Flip Y for texture coordinates (texture Y goes down, quad Y goes up)
  vec2 texCorner = vec2(a_quadCorner.x, 1.0 - a_quadCorner.y);
  v_texCoord = (a_texCoords.xy + texCorner * a_texCoords.zw) / u_atlasSize;

  // -------------------------------------------------------------------------
  // Step 12: Pass color, border color, and alpha modifier
  // -------------------------------------------------------------------------
  v_color = a_color;
  v_color.a *= bias;
`).concat(e?`  v_borderColor = a_borderColor;
  v_borderColor.a *= bias;
  v_positionMode = positionMode;`:"",`
  v_alphaModifier = alphaModifier;

  // -------------------------------------------------------------------------
  // Step 13: Compute edge fade for soft truncation
  // -------------------------------------------------------------------------
  // Convert fade width from pixels to WebGL units
  `).concat(d?"float fadeWidthWebGL = FADE_WIDTH_PIXELS * u_correctionRatio / u_sizeRatio;":"float fadeWidthWebGL = FADE_WIDTH_PIXELS * pixelToGraph;",`

  // Compute the arc position of THIS VERTEX (not just character center)
  // The quad extends from charCenter - advance/2 to charCenter + advance/2
  // a_quadCorner.x is 0 for left edge, 1 for right edge
  float vertexLocalOffset = (a_quadCorner.x - 0.5) * charAdvanceWebGL;
  float vertexArcOffset = charCenterOffset + vertexLocalOffset;

  // Compute distance from body edges (positive = inside body, negative = outside)
  float halfBody = bodyLength * 0.5;
  float distFromStart = vertexArcOffset + halfBody;  // Distance from body start edge
  float distFromEnd = halfBody - vertexArcOffset;    // Distance from body end edge
  float distFromEdge = min(distFromStart, distFromEnd);

  // Compute fade: 0 = fully visible (deep inside body), 1 = fully faded (at body edge)
  // Fade goes from 0 (at 2*fadeWidth inside) to 1 (at body edge)
  // This ensures text is fully transparent before reaching extremities
  v_edgeFade = 1.0 - smoothstep(0.0, fadeWidthWebGL * 2.0, distFromEdge);
}
`);return y}function eu(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=a.hasBorder,t=n===void 0?!1:n,e=`#version 300 es
precision highp float;

in vec2 v_texCoord;
in vec4 v_color;
`.concat(t?"in vec4 v_borderColor;":"",`
in float v_edgeFade;  // 0 = fully visible, 1 = fully faded
in float v_alphaModifier;  // 0-1 based on label visibility ratio
in float v_fontScale;  // Ratio of rendered font size to atlas font size
`).concat(t?"in float v_positionMode;  // Position mode (0=over, 1=above, 2=below, 3=auto)":"",`

uniform sampler2D u_atlas;
uniform float u_gamma;
uniform float u_sdfBuffer;
uniform float u_pixelRatio;
`).concat(t?"uniform float u_borderWidth;  // Border width in SDF units (normalized)":"",`

// Fragment output (single target - picking handled via separate pass)
out vec4 fragColor;

void main() {
  #ifdef PICKING_MODE
    // Edge labels are not pickable - discard all fragments in picking mode
    discard;
  #else
  // SDF stores normalized distance: 0.5 = on edge, >0.5 = inside glyph
  float sdfValue = texture(u_atlas, v_texCoord).a;

  // Edge threshold accounting for SDF buffer padding
  float edge = 1.0 - u_sdfBuffer;

  // Scale gamma inversely with font scale so small labels get a wider AA band
  // (smoother) and large labels get a tighter band (sharper).
  float aaWidth = u_gamma / (u_pixelRatio * v_fontScale);

  // Apply edge fade for soft truncation at body boundaries
  // Also apply visibility-based alpha modifier for short edge labels
  float edgeAlpha = (1.0 - v_edgeFade) * v_alphaModifier;

`).concat(t?`  // Fill alpha: fully opaque inside the glyph
  float fillAlpha = smoothstep(edge - aaWidth, edge + aaWidth, sdfValue);

  // Only apply border for "over" position mode (v_positionMode == 0.0)
  // Labels positioned above/below/auto don't overlap the edge line and don't need borders
  if (v_positionMode < 0.5) {
    // Border rendering: compute alpha for both fill and border regions
    // Border extends from (edge - borderWidth) to edge
    float borderEdge = edge - u_borderWidth;

    // Border alpha: opaque in the border region (between borderEdge and edge)
    float borderAlpha = smoothstep(borderEdge - aaWidth, borderEdge + aaWidth, sdfValue);

    // Composite: fill on top of border
    // Border is visible where borderAlpha > 0 but fillAlpha < 1
    vec3 borderColorPremult = v_borderColor.rgb * v_borderColor.a * borderAlpha * edgeAlpha;
    vec3 fillColorPremult = v_color.rgb * v_color.a * fillAlpha * edgeAlpha;

    // Blend fill over border (fill replaces border where fill is opaque)
    float finalBorderAlpha = borderAlpha * (1.0 - fillAlpha);
    vec3 finalColor = fillColorPremult + v_borderColor.rgb * v_borderColor.a * finalBorderAlpha * edgeAlpha;
    float finalAlpha = (v_color.a * fillAlpha + v_borderColor.a * finalBorderAlpha) * edgeAlpha;

    fragColor = vec4(finalColor, finalAlpha);
  } else {
    // No border for above/below/auto positions - simple text rendering
    float finalAlpha = v_color.a * fillAlpha * edgeAlpha;
    fragColor = vec4(v_color.rgb * finalAlpha, finalAlpha);
  }`:`  // Smooth transition from transparent to opaque at glyph edge
  float alpha = smoothstep(edge - aaWidth, edge + aaWidth, sdfValue);

  // Premultiplied alpha output
  float finalAlpha = v_color.a * alpha * edgeAlpha;
  fragColor = vec4(v_color.rgb * finalAlpha, finalAlpha);`,`
  #endif
}
`);return e}function tu(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"fixed",e=["u_matrix","u_sizeRatio","u_correctionRatio","u_pixelRatio","u_cameraAngle","u_sdfBufferPixels","u_resolution","u_atlasSize","u_atlas","u_gamma","u_sdfBuffer","u_nodeDataTexture","u_nodeDataTextureWidth","u_edgeDataTexture","u_edgeDataTextureWidth","u_edgeFrameTexture","u_edgeFrameTextureWidth","u_edgeAttributeTexture","u_edgeAttributeTextureWidth","u_edgeAttributeTexelsPerEdge"];t==="scaled"&&e.push("u_zoomSizeRatio"),n&&e.push("u_borderWidth");var r=M(a),i;try{for(r.s();!(i=r.n()).done;){var o=i.value,s=M(o.uniforms),l;try{for(s.s();!(l=s.n()).done;){var u=l.value;e.includes(u.name)||e.push(u.name)}}catch(d){s.e(d)}finally{s.f()}}}catch(d){r.e(d)}finally{r.f()}return e}function nu(a){var n=a.hasBorder,t=n===void 0?!1:n,e=a.fontSizeMode,r=e===void 0?"fixed":e;return{vertexShader:Jl(a),fragmentShader:eu({hasBorder:t}),uniforms:tu(a.paths,t,r)}}var au=new Map;function ru(a){switch(a){case"over":return 0;case"above":return 1;case"below":return 2;case"auto":return 3;default:return 0}}function iu(a,n,t,e){var r=e.color,i=e.margin,o=e.textBorder,s=ti(e),l=s.paths,u=s.fontSizeMode,d=s.minVisibilityThreshold,h=s.fullVisibilityThreshold,c=!!o,g=nu({paths:l,hasBorder:c,fontSizeMode:u,minVisibilityThreshold:d,fullVisibilityThreshold:h}),p=function(y){function v(f,b,_){var m;Y(this,v),m=ie(this,v,[f,b,_]),E(m,"atlasTexture",null),E(m,"atlasNeedsUpdate",!1),E(m,"labelGlyphCache",new Map),E(m,"edgeAttributeTexture",null);var x=_t();if(m.attributeLayout=me([].concat(j(l),[x])),m.attrDescriptors=Kt([].concat(j(l),[x]),m.attributeLayout),m.edgeAttributeTexture=new qt(f,m.attributeLayout),m.packedAttributeData=new Float32Array(m.attributeLayout.floatsPerItem),m.atlasManager=new Ze,m.gamma=.025,m.sdfBuffer=Ee.cutoff,m.atlasTexture=f.createTexture(),!m.atlasTexture)throw new Error("EdgeLabelProgram: failed to create atlas texture");f.bindTexture(f.TEXTURE_2D,m.atlasTexture),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_WRAP_S,f.CLAMP_TO_EDGE),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_WRAP_T,f.CLAMP_TO_EDGE),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_MIN_FILTER,f.LINEAR),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_MAG_FILTER,f.LINEAR),f.bindTexture(f.TEXTURE_2D,null),m.atlasManager.on(Ze.ATLAS_UPDATED_EVENT,function(){m.atlasNeedsUpdate=!0,setTimeout(function(){return m.renderer.refresh()},0)});var T={family:"sans-serif",weight:"normal",style:"normal"};return m.defaultFontKey=m.atlasManager.registerFont(T),m}return oe(v,y),Z(v,[{key:"getDefinition",value:function(){var b=WebGL2RenderingContext,_=b.FLOAT,m=b.UNSIGNED_BYTE,x=b.TRIANGLE_STRIP,T=new Set,w=[],S=M(l),A;try{for(S.s();!(A=S.n()).done;){var R=A.value,k=M(R.attributes),D;try{for(k.s();!(D=k.n()).done;){var F=D.value,L=F.name.startsWith("a_")?F.name:"a_".concat(F.name);T.has(L)||(T.add(L),w.push({name:L,size:F.size,type:F.type}))}}catch(N){k.e(N)}finally{k.f()}}}catch(N){S.e(N)}finally{S.f()}return{VERTICES:4,VERTEX_SHADER_SOURCE:g.vertexShader,FRAGMENT_SHADER_SOURCE:g.fragmentShader,METHOD:x,UNIFORMS:g.uniforms,ATTRIBUTES:[{name:"a_edgeIndex",size:1,type:_},{name:"a_edgeAttrIndex",size:1,type:_},{name:"a_baseFontSize",size:1,type:_},{name:"a_charMetrics",size:4,type:_},{name:"a_charDims",size:4,type:_},{name:"a_texCoords",size:4,type:_},{name:"a_labelParams",size:2,type:_},{name:"a_color",size:4,type:m,normalized:!0}].concat(j(c?[{name:"a_borderColor",size:4,type:m,normalized:!0}]:[]),j(w.filter(function(N){return!["a_curvature","curvature"].includes(N.name)}))),CONSTANT_ATTRIBUTES:[{name:"a_quadCorner",size:2,type:_}],CONSTANT_DATA:[[0,0],[1,0],[0,1],[1,1]]}}},{key:"prepareLabelGlyphs",value:function(b,_){if(_.hidden||!_.text){this.labelGlyphCache.delete(b);return}var m=_.text,x=_.fontKey||this.defaultFontKey;this.atlasManager.ensureGlyphs(m,x);var T=[],w=[],S=0,A=M(m),R;try{for(A.s();!(R=A.n()).done;){var k=R.value,D=k.codePointAt(0);if(D===void 0){T.push(void 0),w.push(S);continue}var F=this.atlasManager.getGlyph(D,x);T.push(F),w.push(S),F&&(S+=F.advance)}}catch(L){A.e(L)}finally{A.f()}this.labelGlyphCache.set(b,{glyphs:T,xOffsets:w,totalWidth:S})}},{key:"processCharacter",value:function(b,_,m,x){var T,w,S,A=this.floats,R=this.STRIDE,k=b*R,D=this.labelGlyphCache.get(_.parentKey);if(!D||!D.glyphs[x]){for(var F=0;F<R;F++)A[k+F]=0;return}var L=D.glyphs[x],N=D.xOffsets[x],G=v.labelColor,z=G&&Q(G)==="object"&&"color"in G&&G.color?G.color:_.color,P=Se(z),C=k;A[C++]=_.edgeIndex,A[C++]=(T=(w=this.edgeAttributeTexture)===null||w===void 0?void 0:w.getIndex(_.parentKey))!==null&&T!==void 0?T:0,A[C++]=_.size,A[C++]=N,A[C++]=L.advance,A[C++]=D.totalWidth,A[C++]=ru(_.position),A[C++]=L.atlasWidth,A[C++]=L.atlasHeight,A[C++]=L.bearingX,A[C++]=-L.bearingY,A[C++]=L.atlasX,A[C++]=L.atlasY,A[C++]=L.atlasWidth,A[C++]=L.atlasHeight;var I=(S=v.labelMargin)!==null&&S!==void 0?S:_.margin;if(A[C++]=I,A[C++]=0,A[C++]=P,c&&o){var H;typeof o.color=="string"?H=o.color:H=o.color.color||"#ffffff",A[C++]=Se(H)}var U=new Set,$=M(l),X;try{for($.s();!(X=$.n()).done;){var K=X.value,ne=M(K.attributes),fe;try{for(ne.s();!(fe=ne.n()).done;){var be=fe.value,rt=be.name.startsWith("a_")?be.name.slice(2):be.name;if(rt!=="curvature"&&!U.has(rt)){U.add(rt);for(var Et=0;Et<be.size;Et++)A[C++]=0}}}catch(He){ne.e(He)}finally{ne.f()}}}catch(He){$.e(He)}finally{$.f()}}},{key:"processEdgeLabel",value:function(b,_,m){if(this.prepareLabelGlyphs(b,m),this.edgeAttributeTexture&&!m.hidden&&m.text){this.edgeAttributeTexture.allocate(b);var x=this.packedAttributeData;Yt(this.attrDescriptors,m.edgeAttributes,x,"",au,0),this.edgeAttributeTexture.updateAllAttributes(b,x)}return le(v,"processLabel",this)([b,_,m])}},{key:"updateAtlasTexture",value:function(){if(this.atlasNeedsUpdate){var b=this.normalProgram.gl,_=this.atlasManager.getTextures();if(_.length!==0){var m=_[0];b.bindTexture(b.TEXTURE_2D,this.atlasTexture),b.texImage2D(b.TEXTURE_2D,0,b.RGBA,m.width,m.height,0,b.RGBA,b.UNSIGNED_BYTE,m.data),b.bindTexture(b.TEXTURE_2D,null),this.atlasNeedsUpdate=!1}}}},{key:"setUniforms",value:function(b,_){var m=_.gl,x=_.uniformLocations,T=this.atlasManager.getTextures(),w=T.length>0?[T[0].width,T[0].height]:[1,1];if(m.uniformMatrix3fv(x.u_matrix,!1,b.matrix),m.uniform1f(x.u_sizeRatio,b.sizeRatio),m.uniform1f(x.u_correctionRatio,b.correctionRatio),m.uniform1f(x.u_pixelRatio,b.pixelRatio),m.uniform1f(x.u_cameraAngle,b.cameraAngle),m.uniform1f(x.u_sdfBufferPixels,Ee.buffer),m.uniform2f(x.u_resolution,b.width,b.height),m.uniform2f(x.u_atlasSize,w[0],w[1]),m.uniform1f(x.u_gamma,this.gamma),m.uniform1f(x.u_sdfBuffer,this.sdfBuffer),m.activeTexture(m.TEXTURE0),m.bindTexture(m.TEXTURE_2D,this.atlasTexture),m.uniform1i(x.u_atlas,0),x.u_nodeDataTexture!==void 0&&m.uniform1i(x.u_nodeDataTexture,b.nodeDataTextureUnit),x.u_nodeDataTextureWidth!==void 0&&m.uniform1i(x.u_nodeDataTextureWidth,b.nodeDataTextureWidth),x.u_edgeDataTexture!==void 0&&m.uniform1i(x.u_edgeDataTexture,b.edgeDataTextureUnit),x.u_edgeDataTextureWidth!==void 0&&m.uniform1i(x.u_edgeDataTextureWidth,b.edgeDataTextureWidth),x.u_edgeFrameTexture!==void 0&&m.uniform1i(x.u_edgeFrameTexture,b.edgeFrameTextureUnit),x.u_edgeFrameTextureWidth!==void 0&&m.uniform1i(x.u_edgeFrameTextureWidth,b.edgeFrameTextureWidth),c&&o&&x.u_borderWidth!==void 0){var S=o.width/Ee.buffer*this.sdfBuffer;m.uniform1f(x.u_borderWidth,S)}if(this.edgeAttributeTexture&&x.u_edgeAttributeTexture!==void 0&&(this.edgeAttributeTexture.bind(Pe),m.uniform1i(x.u_edgeAttributeTexture,Pe),m.uniform1i(x.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),m.uniform1i(x.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem())),u==="scaled"&&x.u_zoomSizeRatio!==void 0){var A=this.renderer.getSetting("zoomToSizeRatioFunction"),R=1/A(b.zoomRatio);m.uniform1f(x.u_zoomSizeRatio,R)}}},{key:"renderProgram",value:function(b,_){this.updateAtlasTexture(),this.atlasManager.hasPendingGlyphs()&&(this.atlasManager.flush(),this.updateAtlasTexture()),this.edgeAttributeTexture&&this.edgeAttributeTexture.upload(),le(v,"renderProgram",this)([b,_])}},{key:"registerFont",value:function(b){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"normal",m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"normal";return this.atlasManager.registerFont({family:b,weight:_,style:m})}},{key:"getAtlasManager",value:function(){return this.atlasManager}},{key:"ensureGlyphsReady",value:function(b,_){var m=_||this.defaultFontKey,x=M(b),T;try{for(x.s();!(T=x.n()).done;){var w=T.value;this.atlasManager.ensureGlyphs(w,m)}}catch(S){x.e(S)}finally{x.f()}this.atlasManager.flush()}},{key:"measureLabelAtlasWidth",value:function(b,_){var m=_||this.defaultFontKey;this.atlasManager.ensureGlyphs(b,m),this.atlasManager.hasPendingGlyphs()&&this.atlasManager.flush();var x=0,T=M(b),w;try{for(T.s();!(w=T.n()).done;){var S=w.value,A=S.codePointAt(0);if(A!==void 0){var R=this.atlasManager.getGlyph(A,m);R&&(x+=R.advance)}}}catch(k){T.e(k)}finally{T.f()}return x}},{key:"measureLabel",value:function(b,_,m){var x=this.measureLabelAtlasWidth(b,m),T=_/Ee.fontSize;return{width:x*T,height:_,textHeight:_}}},{key:"kill",value:function(){var b=this.normalProgram.gl;this.atlasTexture&&(b.deleteTexture(this.atlasTexture),this.atlasTexture=null),this.edgeAttributeTexture&&(this.edgeAttributeTexture.kill(),this.edgeAttributeTexture=null),this.atlasManager.destroy(),this.labelGlyphCache.clear(),le(v,"kill",this)([])}}])}(Xr);return E(p,"labelColor",r),E(p,"labelMargin",i),new p(a,n,t)}function ou(){var a=`
// No extremity - always returns positive (outside)
float extremity_none(vec2 uv, float lengthRatio, float widthRatio) {
  return 1.0;
}
`;return{name:"none",glsl:a,length:0,widthFactor:1,margin:0,uniforms:[],attributes:[]}}function su(a,n,t,e,r,i,o){var s,l,u=Zr(e),d=u.paths,h=u.layers,c=u.defaultHead,g=u.defaultTail,p=[ou()].concat(j(u.extremities)),y={},v={};d.forEach(function(F,L){return y[F.name]=L}),p.forEach(function(F,L){return v[F.name]=L});var f=(s=v[c])!==null&&s!==void 0?s:0,b=(l=v[g])!==null&&l!==void 0?l:0,_=null,m=me([].concat(j(d),j(h))),x=function(F){function L(N,G,z){var P;Y(this,L),_||(_=Fa({paths:d,extremities:p,layers:h,antialias:r})),P=ie(this,L,[N,G,z]),E(P,"layerLifecycles",new Map),E(P,"needsShaderRegeneration",!1),E(P,"edgeAttributeTexture",null),E(P,"layout",m),E(P,"attrDescriptors",[]),E(P,"lifecycleIndexOffset",d.length),P._pickingBuffer=G,P.edgeAttributeTexture=new qt(N,P.layout),P.packedAttributeData=new Float32Array(P.layout.floatsPerItem),h.forEach(function(I,H){if(I.lifecycle){var U={gl:N,renderer:{refresh:function(){return z.refresh()}},getUniformLocation:function(X){return N.getUniformLocation(P.normalProgram.program,X)},requestShaderRegeneration:function(){P.needsShaderRegeneration=!0},requestRefresh:function(){z.refresh()}};P.layerLifecycles.set(H,I.lifecycle(U))}}),P.layerLifecycles.forEach(function(I){var H;return(H=I.init)===null||H===void 0?void 0:H.call(I)});var C=new Map;return P.layerLifecycles.forEach(function(I,H){I.getAttributeData&&C.set(d.length+H,I)}),P.attrDescriptors=Kt([].concat(j(d),j(h)),P.layout,C),P}return oe(L,F),Z(L,[{key:"getAttributeTexture",value:function(){return this.edgeAttributeTexture}},{key:"resolveEdgeIds",value:function(G,z,P){var C=G,I=0,H=f,U=b,$=z?C.selfLoopPath:P&&C.parallelPath?C.parallelPath:C.path;$&&y[$]!==void 0&&(I=y[$]),C.head&&C.head!=="none"&&v[C.head]!==void 0&&(H=v[C.head]),C.tail&&C.tail!=="none"&&v[C.tail]!==void 0&&(U=v[C.tail]);var X=p[H],K=p[U];return{pathId:I,headId:H,tailId:U,headLengthRatio:Le(X.length)?0:X.length,tailLengthRatio:Le(K.length)?0:K.length}}},{key:"getDefinition",value:function(){var G=WebGL2RenderingContext,z=G.TRIANGLE_STRIP,P=z,C=_;return{VERTICES:C.verticesPerEdge,VERTEX_SHADER_SOURCE:C.vertexShader,FRAGMENT_SHADER_SOURCE:C.fragmentShader,METHOD:P,UNIFORMS:C.uniforms,ATTRIBUTES:C.attributes,CONSTANT_ATTRIBUTES:C.constantAttributes,CONSTANT_DATA:C.constantData}}},{key:"maybeRegenerateShaders",value:function(){var G=this;if(this.needsShaderRegeneration){this.needsShaderRegeneration=!1;var z=h.map(function(X,K){var ne=G.layerLifecycles.get(K);return ne!=null&&ne.regenerate?ne.regenerate():X});_=Fa({paths:d,extremities:p,layers:z,antialias:this.renderer.getSetting("antialiasEdges")});var P=this.normalProgram.gl,C=this.normalProgram,I=C.program,H=C.buffer,U=C.vertexShader,$=C.fragmentShader;P.deleteProgram(I),P.deleteBuffer(H),P.deleteShader(U),P.deleteShader($),this.normalProgram=this.getProgramInfo("normal",P,_.vertexShader,_.fragmentShader,this._pickingBuffer)}}},{key:"process",value:function(G,z,P,C,I,H){var U=z*this.STRIDE;if(I.visibility==="hidden"||P.visibility==="hidden"||C.visibility==="hidden"){for(var $=U+this.STRIDE;U<$;U++)this.floats[U]=0;this.floats[z*this.STRIDE]=Vr;return}this.processVisibleItem(Ot(G),U,P,C,I,H)}},{key:"processVisibleItem",value:function(G,z,P,C,I,H){var U,$=this.floats,X=this.ints;$[z++]=H,$[z++]=Se(I.color),X[z++]=G,$[z++]=(U=I.opacity)!==null&&U!==void 0?U:1;var K=this.packedAttributeData;Yt(this.attrDescriptors,I,K,I.color,this.layerLifecycles,this.lifecycleIndexOffset),this.edgeAttributeTexture.updateAllAttributesAtRow(H,K)}},{key:"setUniforms",value:function(G,z){var P=this,C=z.gl,I=z.uniformLocations;I.u_matrix&&C.uniformMatrix3fv(I.u_matrix,!1,G.matrix),I.u_sizeRatio&&C.uniform1f(I.u_sizeRatio,G.sizeRatio),I.u_correctionRatio&&C.uniform1f(I.u_correctionRatio,G.correctionRatio),I.u_zoomRatio&&C.uniform1f(I.u_zoomRatio,G.zoomRatio),I.u_pixelRatio&&C.uniform1f(I.u_pixelRatio,G.pixelRatio),I.u_cameraAngle&&C.uniform1f(I.u_cameraAngle,G.cameraAngle),I.u_feather&&C.uniform1f(I.u_feather,G.antiAliasingFeather),I.u_minEdgeThickness&&C.uniform1f(I.u_minEdgeThickness,G.minEdgeThickness),I.u_pickingPadding&&C.uniform1f(I.u_pickingPadding,G.edgePickingPadding),I.u_nodeDataTexture&&C.uniform1i(I.u_nodeDataTexture,G.nodeDataTextureUnit),I.u_nodeDataTextureWidth&&C.uniform1i(I.u_nodeDataTextureWidth,G.nodeDataTextureWidth),I.u_edgeDataTexture&&C.uniform1i(I.u_edgeDataTexture,G.edgeDataTextureUnit),I.u_edgeDataTextureWidth&&C.uniform1i(I.u_edgeDataTextureWidth,G.edgeDataTextureWidth),I.u_edgeFrameTexture&&C.uniform1i(I.u_edgeFrameTexture,G.edgeFrameTextureUnit),I.u_edgeFrameTextureWidth&&C.uniform1i(I.u_edgeFrameTextureWidth,G.edgeFrameTextureWidth),this.edgeAttributeTexture&&this.layout.floatsPerItem>0&&(this.edgeAttributeTexture.bind(Pe),I.u_edgeAttributeTexture&&C.uniform1i(I.u_edgeAttributeTexture,Pe),I.u_edgeAttributeTextureWidth&&C.uniform1i(I.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),I.u_edgeAttributeTexelsPerEdge&&C.uniform1i(I.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem()));var H=new Set;d.forEach(function(U){U.uniforms.forEach(function($){H.has($.name)||(H.add($.name),P.setTypedUniform($,z))})}),p.forEach(function(U){U.uniforms.forEach(function($){H.has($.name)||(H.add($.name),P.setTypedUniform($,z))})}),h.forEach(function(U){U.uniforms.forEach(function($){H.has($.name)||(H.add($.name),P.setTypedUniform($,z))})})}},{key:"renderProgram",value:function(G,z){this.maybeRegenerateShaders(),this.layerLifecycles.forEach(function(P){var C;return(C=P.beforeRender)===null||C===void 0?void 0:C.call(P)}),le(L,"renderProgram",this)([G,z])}},{key:"uploadAttributeTexture",value:function(){this.edgeAttributeTexture&&this.layout.floatsPerItem>0&&this.edgeAttributeTexture.upload()}},{key:"kill",value:function(){this.layerLifecycles.forEach(function(G){var z;return(z=G.kill)===null||z===void 0?void 0:z.call(G)}),this.edgeAttributeTexture&&(this.edgeAttributeTexture.kill(),this.edgeAttributeTexture=null),le(L,"kill",this)([])}}])}(Ue),T=p[f],w=p[b],S=W({paths:d,headLengthRatio:Le(T.length)?0:T.length,tailLengthRatio:Le(w.length)?0:w.length},e.label),A=ti(S),R=iu(a,null,t,S),k=Yl(a,n,t,{shaderConfig:A}),D=new Ul(a,{paths:d,extremities:p,layers:h,nodeShapes:i,nodeLayers:o});return{edgeProgram:new x(a,null,t),labelProgram:R,labelBackgroundProgram:k,framePass:D}}function lu(a){return Q(a)==="object"&&"uniforms"in a&&Array.isArray(a.uniforms)}function uu(a){return Q(a)==="object"&&"uniforms"in a&&"attributes"in a&&"glsl"in a}function du(a){return Q(a)==="object"&&"uniforms"in a&&"attributes"in a&&"segments"in a}function hu(a){return Q(a)==="object"&&"uniforms"in a&&"attributes"in a&&"length"in a}function cu(a){return Q(a)==="object"&&"uniforms"in a&&"attributes"in a&&"glsl"in a}function fu(a){return Q(a)==="object"&&"glsl"in a&&"name"in a&&!("uniforms"in a)}function gu(a){return Q(a)==="object"&&"glsl"in a&&"name"in a&&!("uniforms"in a)}function pu(a){return Q(a)==="object"&&"glsl"in a&&"name"in a&&!("uniforms"in a)}function vu(a){if(lu(a))return a;if(fu(a))return{name:a.name,glsl:a.glsl,inradiusFactor:a.inradiusFactor,uniforms:[]};throw new Error("Invalid node shape specification: ".concat(JSON.stringify(a)))}function mu(a){if(uu(a))return a;if(jo(a))return{name:a.name,glsl:a.glsl,uniforms:[],attributes:[]};throw new Error("Invalid node layer specification: ".concat(JSON.stringify(a)))}function bu(a){if(du(a))return a;if(gu(a))return{name:a.name,glsl:a.glsl,segments:a.segments,uniforms:[],attributes:[]};throw new Error("Invalid edge path specification: ".concat(JSON.stringify(a)))}function yu(a){if(cu(a))return a;if(Xo(a))return{name:a.name,glsl:a.glsl,uniforms:[],attributes:[]};throw new Error("Invalid edge layer specification: ".concat(JSON.stringify(a)))}function xu(a){if(hu(a))return a;if(pu(a))return{name:a.name,glsl:a.glsl,length:a.length,widthFactor:a.widthFactor,margin:0,uniforms:[],attributes:[]};throw new Error("Invalid edge extremity specification: ".concat(JSON.stringify(a)))}function ni(a){var n,t,e=(n=a==null?void 0:a.shapes)!==null&&n!==void 0?n:mn.shapes,r=(t=a==null?void 0:a.layers)!==null&&t!==void 0?t:mn.layers,i=e.map(vu),o=r.map(mu);if(i.length===0)throw new Error("At least one node shape must be specified.");if(o.length===0)throw new Error("At least one node layer must be specified.");return{shapes:i,layers:o}}function _u(a){var n,t,e,r=(n=a==null?void 0:a.paths)!==null&&n!==void 0?n:zt.paths,i=(t=a==null?void 0:a.extremities)!==null&&t!==void 0?t:zt.extremities,o=(e=a==null?void 0:a.layers)!==null&&e!==void 0?e:zt.layers,s=r.map(bu),l=i.map(xu).filter(function(d){return d!==null}),u=o.map(yu);if(s.length===0)throw new Error("At least one edge path must be specified.");if(u.length===0)throw new Error("At least one edge layer must be specified.");return{paths:s,extremities:l,layers:u}}function ai(a,n){var t={},e=M(a),r;try{for(e.s();!(r=e.n()).done;){var i=r.value;i.variables&&Object.assign(t,i.variables)}}catch(o){e.e(o)}finally{e.f()}return Object.assign(t,n||{}),t}function Tu(a,n,t,e,r){var i=ni(e),o=i.shapes,s=i.layers,l=ai(o,e==null?void 0:e.variables),u=Tl(a,n,t,{shapes:o,layers:s,label:e==null?void 0:e.label,backdrop:e==null?void 0:e.backdrop,labelAttachments:e==null?void 0:e.labelAttachments},r);return W(W({},u),{},{variables:l})}function Su(a,n,t,e,r,i){var o=_u(e),s=o.paths,l=o.extremities,u=o.layers,d=ni(i),h=d.shapes,c=d.layers,g=ai(s,e==null?void 0:e.variables),p=su(a,n,t,{paths:s,extremities:l,layers:u,defaultHead:e==null?void 0:e.defaultHead,defaultTail:e==null?void 0:e.defaultTail,label:e==null?void 0:e.label},r,h,c);return W(W({},p),{},{variables:g,paths:s})}var Eu=2;function wu(a,n,t){var e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Eu,r=n.canvas,i=r.width,o=r.height,s=t.x,l=t.y,u=t.rowHeight,d=t.maxRowWidth,h={},c=[],g=M(a),p;try{for(g.s();!(p=g.n()).done;){var y=p.value,v=y.width+e,f=y.height+e;if(v>i||f>o||s+v>i&&l+u+f>o){c.push(y);continue}s+v>i&&(d=Math.max(d,s),s=0,l+=u,u=f),y.draw(n,s,l),h[y.key]={x:s,y:l,width:y.width,height:y.height},s+=v,u=Math.max(u,f)}}catch(b){g.e(b)}finally{g.f()}return d=Math.max(d,s),{atlas:h,cursor:{x:s,y:l,rowHeight:u,maxRowWidth:d},remaining:c}}function de(a,n,t,e){var r=Object.defineProperty;try{r({},"",{})}catch{r=0}de=function(i,o,s,l){function u(d,h){de(i,d,function(c){return this._invoke(d,h,c)})}o?r?r(i,o,{value:s,enumerable:!l,configurable:!l,writable:!l}):i[o]=s:(u("next",0),u("throw",1),u("return",2))},de(a,n,t,e)}function ce(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var a,n,t=typeof Symbol=="function"?Symbol:{},e=t.iterator||"@@iterator",r=t.toStringTag||"@@toStringTag";function i(g,p,y,v){var f=p&&p.prototype instanceof s?p:s,b=Object.create(f.prototype);return de(b,"_invoke",function(_,m,x){var T,w,S,A=0,R=x||[],k=!1,D={p:0,n:0,v:a,a:F,f:F.bind(a,4),d:function(L,N){return T=L,w=0,S=a,D.n=N,o}};function F(L,N){for(w=L,S=N,n=0;!k&&A&&!G&&n<R.length;n++){var G,z=R[n],P=D.p,C=z[2];L>3?(G=C===N)&&(S=z[(w=z[4])?5:(w=3,3)],z[4]=z[5]=a):z[0]<=P&&((G=L<2&&P<z[1])?(w=0,D.v=N,D.n=z[1]):P<C&&(G=L<3||z[0]>N||N>C)&&(z[4]=L,z[5]=N,D.n=C,w=0))}if(G||L>1)return o;throw k=!0,N}return function(L,N,G){if(A>1)throw TypeError("Generator is already running");for(k&&N===1&&F(N,G),w=N,S=G;(n=w<2?a:S)||!k;){T||(w?w<3?(w>1&&(D.n=-1),F(w,S)):D.n=S:D.v=S);try{if(A=2,T){if(w||(L="next"),n=T[L]){if(!(n=n.call(T,S)))throw TypeError("iterator result is not an object");if(!n.done)return n;S=n.value,w<2&&(w=0)}else w===1&&(n=T.return)&&n.call(T),w<2&&(S=TypeError("The iterator does not provide a '"+L+"' method"),w=1);T=a}else if((n=(k=D.n<0)?S:_.call(m,D))!==o)break}catch(z){T=a,w=1,S=z}finally{A=1}}return{value:n,done:k}}}(g,y,v),!0),b}var o={};function s(){}function l(){}function u(){}n=Object.getPrototypeOf;var d=[][e]?n(n([][e]())):(de(n={},e,function(){return this}),n),h=u.prototype=s.prototype=Object.create(d);function c(g){return Object.setPrototypeOf?Object.setPrototypeOf(g,u):(g.__proto__=u,de(g,r,"GeneratorFunction")),g.prototype=Object.create(h),g}return l.prototype=u,de(h,"constructor",u),de(u,"constructor",l),l.displayName="GeneratorFunction",de(u,r,"GeneratorFunction"),de(h),de(h,r,"Generator"),de(h,e,function(){return this}),de(h,"toString",function(){return"[object Generator]"}),(ce=function(){return{w:i,m:c}})()}function Ga(a,n,t,e,r,i,o){try{var s=a[i](o),l=s.value}catch(u){return void t(u)}s.done?n(l):Promise.resolve(l).then(e,r)}function Qe(a){return function(){var n=this,t=arguments;return new Promise(function(e,r){var i=a.apply(n,t);function o(l){Ga(i,e,r,o,s,"next",l)}function s(l){Ga(i,e,r,o,s,"throw",l)}o(void 0)})}}var It=new Map,Na=!1;function Au(a){return new Promise(function(n,t){var e=new FileReader;e.onload=function(){return n(e.result)},e.onerror=t,e.readAsDataURL(a)})}function Ru(a){if(!It.has(a)){var n=fetch(a).then(function(t){return t.blob()}).then(Au).catch(function(){return It.delete(a),null});It.set(a,n)}return It.get(a)}function Du(a){return En.apply(this,arguments)}function En(){return En=Qe(ce().m(function a(n){var t,e,r;return ce().w(function(i){for(;;)switch(i.n){case 0:return t=document.createElement("div"),t.innerHTML=n,e=Array.from(t.querySelectorAll("img[src]")),r=e.filter(function(o){return!o.getAttribute("src").startsWith("data:")}),i.n=1,Promise.all(r.map(function(){var o=Qe(ce().m(function s(l){var u;return ce().w(function(d){for(;;)switch(d.n){case 0:return d.n=1,Ru(l.getAttribute("src"));case 1:u=d.v,u&&l.setAttribute("src",u);case 2:return d.a(2)}},s)}));return function(s){return o.apply(this,arguments)}}()));case 1:return i.a(2,t.innerHTML)}},a)})),En.apply(this,arguments)}function ri(a){return wn.apply(this,arguments)}function wn(){return wn=Qe(ce().m(function a(n){var t,e,r,i,o,s,l,u,d,h,c,g,p,y=arguments;return ce().w(function(v){for(;;)switch(v.n){case 0:if(t=y.length>1&&y[1]!==void 0?y[1]:1,e=n instanceof SVGElement?new XMLSerializer().serializeToString(n):n,r=new DOMParser,i=r.parseFromString(e,"image/svg+xml"),o=i.querySelector("svg"),o){v.n=1;break}return v.a(2,null);case 1:if(s=parseFloat(o.getAttribute("width")||""),l=parseFloat(o.getAttribute("height")||""),(!(s>0)||!(l>0))&&(u=o.getAttribute("viewBox"),u&&(d=u.trim().split(/[\s,]+/),s=parseFloat(d[2]),l=parseFloat(d[3]))),!(!(s>0)||!(l>0))){v.n=2;break}return console.warn("Sigma: SVG label attachment has no parseable dimensions — skipped."),v.a(2,null);case 2:return h=Math.ceil(s*t),c=Math.ceil(l*t),g=new Blob([e],{type:"image/svg+xml"}),p=URL.createObjectURL(g),v.a(2,new Promise(function(f){var b=new Image;b.onload=function(){var _=document.createElement("canvas");_.width=h,_.height=c,_.getContext("2d").drawImage(b,0,0,h,c),URL.revokeObjectURL(p);try{_.getContext("2d").getImageData(0,0,1,1)}catch(m){if(m instanceof DOMException&&m.name==="SecurityError"){Na||(Na=!0,console.warn('Sigma: A label attachment was skipped because the rendered canvas is tainted. SVG with <foreignObject> (used by the "html" attachment type) is blocked in Chromium and Safari. Use type: "canvas" with Canvas 2D rendering instead.')),f(null);return}throw m}f(_)},b.onerror=function(){URL.revokeObjectURL(p),f(null)},b.src=p}))}},a)})),wn.apply(this,arguments)}function Cu(a,n){var t=document.createElement("div");t.style.cssText="position:fixed;left:-99999px;top:0;visibility:hidden;width:max-content;height:max-content",t.innerHTML=(n?"<style>".concat(n,"</style>"):"")+a,document.body.appendChild(t);var e=t.getBoundingClientRect(),r=e.width,i=e.height;return document.body.removeChild(t),{width:Math.ceil(r),height:Math.ceil(i)}}function Lu(a,n,t,e){return An.apply(this,arguments)}function An(){return An=Qe(ce().m(function a(n,t,e,r){var i,o,s,l,u,d,h,c,g=arguments;return ce().w(function(p){for(;;)switch(p.n){case 0:return i=g.length>4&&g[4]!==void 0?g[4]:1,o=n instanceof HTMLElement?n.outerHTML:n,p.n=1,Du(o);case 1:return s=p.v,(e==null||r==null)&&(l=Cu(s,t),e=e??l.width,r=r??l.height),u=Math.ceil(e*i),d=Math.ceil(r*i),h=t?"<style>".concat(t,"</style>"):"",c='<svg xmlns="http://www.w3.org/2000/svg" '+'width="'.concat(u,'" height="').concat(d,'" viewBox="0 0 ').concat(e," ").concat(r,'">')+'<foreignObject width="'.concat(e,'" height="').concat(r,'">')+'<body xmlns="http://www.w3.org/1999/xhtml" style="margin:0;padding:0">'.concat(h).concat(s,"</body>")+"</foreignObject></svg>",p.a(2,ri(c,1))}},a)})),An.apply(this,arguments)}function ku(a){return Rn.apply(this,arguments)}function Rn(){return Rn=Qe(ce().m(function a(n){var t,e=arguments,r;return ce().w(function(i){for(;;)switch(i.n){case 0:t=e.length>1&&e[1]!==void 0?e[1]:1,r=n.type,i.n=r==="canvas"?1:r==="svg"?2:r==="html"?3:4;break;case 1:return i.a(2,n.canvas);case 2:return i.a(2,ri(n.svg,t));case 3:return i.a(2,Lu(n.html,n.css,n.width,n.height,t));case 4:return i.a(2)}},a)})),Rn.apply(this,arguments)}var Xe=2048,Pu=function(){function a(n,t,e){Y(this,a),E(this,"cache",new Map),E(this,"pending",new Set),E(this,"atlas",{}),E(this,"glTexture",null),E(this,"dirty",!0),this.gl=n,this.renderers=t,this.scheduleRender=e,this.packCanvas=document.createElement("canvas"),this.packCanvas.width=Xe,this.packCanvas.height=Xe,this.packCtx=this.packCanvas.getContext("2d")}return Z(a,[{key:"renderAttachment",value:function(t,e,r){var i=this,o="".concat(t,":").concat(e);if(!(this.cache.has(o)||this.pending.has(o))){var s=this.renderers[e];if(s){var l=s(r);if(l){this.pending.add(o);var u=r.pixelRatio;Promise.resolve(l).then(function(){var d=Qe(ce().m(function h(c){var g;return ce().w(function(p){for(;;)switch(p.n){case 0:if(i.pending.has(o)){p.n=1;break}return p.a(2);case 1:if(i.pending.delete(o),c){p.n=2;break}return p.a(2);case 2:return p.n=3,ku(c,u);case 3:if(g=p.v,!(!g||g.width===0||g.height===0)){p.n=4;break}return p.a(2);case 4:i.cache.set(o,{image:g,width:g.width,height:g.height}),i.dirty=!0,i.scheduleRender();case 5:return p.a(2)}},h)}));return function(h){return d.apply(this,arguments)}}())}}}}},{key:"regenerateAtlas",value:function(){if(this.dirty){this.dirty=!1;var t=[];if(this.cache.forEach(function(u,d){t.push({key:d,width:u.width,height:u.height,draw:function(c,g,p){c.drawImage(u.image,g,p)}})}),t.length===0){this.atlas={},this.deleteGLTexture();return}var e={x:0,y:0,rowHeight:0,maxRowWidth:0};this.packCtx.clearRect(0,0,Xe,Xe);var r=wu(t,this.packCtx,e),i=r.atlas,o=r.remaining;this.atlas=i,o.length>0&&console.warn("Sigma: ".concat(o.length," label attachment(s) could not fit in the ").concat(Xe,"x").concat(Xe," atlas and will not be rendered.")),this.deleteGLTexture();var s=this.gl,l=s.createTexture();s.activeTexture(s.TEXTURE0+Qn),s.bindTexture(s.TEXTURE_2D,l),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,this.packCanvas),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),this.glTexture=l}}},{key:"bindTexture",value:function(t){if(this.glTexture){var e=this.gl;e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,this.glTexture)}}},{key:"getEntry",value:function(t,e){var r="".concat(t,":").concat(e);return this.atlas[r]||null}},{key:"invalidateNode",value:function(t){var e="".concat(t,":"),r=M(this.cache.keys()),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;o.startsWith(e)&&(this.cache.delete(o),this.dirty=!0)}}catch(d){r.e(d)}finally{r.f()}var s=M(this.pending),l;try{for(s.s();!(l=s.n()).done;){var u=l.value;u.startsWith(e)&&this.pending.delete(u)}}catch(d){s.e(d)}finally{s.f()}}},{key:"restore",value:function(){this.glTexture=null,this.dirty=!0}},{key:"clear",value:function(){this.cache.clear(),this.pending.clear(),this.atlas={},this.dirty=!0,this.deleteGLTexture()}},{key:"kill",value:function(){this.clear(),this.packCanvas=null,this.packCtx=null,this.gl=null}},{key:"deleteGLTexture",value:function(){this.glTexture&&(this.gl.deleteTexture(this.glTexture),this.glTexture=null)}}])}(),za=function(){function a(n){Y(this,a),E(this,"buckets",new Map),E(this,"keyDepth",new Map);var t=M(n),e;try{for(t.s();!(e=t.n()).done;){var r=e.value;this.buckets.set(r,new Set)}}catch(i){t.e(i)}finally{t.f()}}return Z(a,[{key:"has",value:function(t){return this.keyDepth.has(t)}},{key:"getBucket",value:function(t){return this.buckets.get(t)}},{key:"set",value:function(t,e){var r,i=this.keyDepth.get(t);if(i!==e){var o=this.buckets.get(e);if(!o)throw new Error('Sigma: "'.concat(e,'" is not a declared depth layer'));i!==void 0&&((r=this.buckets.get(i))===null||r===void 0||r.delete(t)),o.add(t),this.keyDepth.set(t,e)}}},{key:"remove",value:function(t){var e=this.keyDepth.get(t);e!==void 0&&(this.buckets.get(e).delete(t),this.keyDepth.delete(t))}},{key:"clearAll",value:function(){var t=M(this.buckets.values()),e;try{for(t.s();!(e=t.n()).done;){var r=e.value;r.clear()}}catch(i){t.e(i)}finally{t.f()}this.keyDepth.clear()}},{key:"getSorted",value:function(t,e){var r=this.buckets.get(t);return!r||r.size===0?[]:j(r).sort(function(i,o){return e(i)-e(o)})}}])}(),Fu=function(a){function n(t,e){return Y(this,n),ie(this,n,[t,2,e])}return oe(n,a),Z(n,[{key:"updateNode",value:function(e,r,i,o,s,l,u,d){var h=this.indexMap.get(e);if(h===void 0)throw new Error('Node "'.concat(e,'" not allocated in NodeDataTexture'));var c=ft(d),g=ee(c,4),p=g[0],y=g[1],v=g[2],f=g[3],b=h*2*4;this.data[b]=r,this.data[b+1]=i,this.data[b+2]=o,this.data[b+3]=s,this.data[b+4]=l,this.data[b+5]=u,this.data[b+6]=p*65536+y*256+v,this.data[b+7]=f/255,this.markDirty(h)}}])}(Yn),Iu=1024,Gu=1.5,Nu=4096,Ma=function(){function a(n,t){var e;if(Y(this,a),E(this,"texture",null),E(this,"framebuffer",null),!n.getExtension("EXT_color_buffer_float"))throw new Error("sigma: EXT_color_buffer_float is required for label/edge placement but is unavailable in this WebGL2 context.");this.gl=n,this.channels=t.channels,this.capacity=this.roundUpToPowerOfTwo((e=t.initialCapacity)!==null&&e!==void 0?e:Iu);var r=this.computeDimensions(this.capacity);this.textureWidth=r.width,this.textureHeight=r.height,this.create()}return Z(a,[{key:"roundUpToPowerOfTwo",value:function(t){return Math.pow(2,Math.ceil(Math.log2(Math.max(1,t))))}},{key:"computeDimensions",value:function(t){var e=Math.min(t,Nu),r=Math.ceil(t/e);return{width:e,height:r}}},{key:"create",value:function(){var t=this.gl,e=this.channels===1?t.R32F:t.RGBA32F,r=this.channels===1?t.RED:t.RGBA;if(this.texture=t.createTexture(),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.texture),t.texImage2D(t.TEXTURE_2D,0,e,this.textureWidth,this.textureHeight,0,r,t.FLOAT,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),this.framebuffer=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.texture,0),t.checkFramebufferStatus(t.FRAMEBUFFER)!==t.FRAMEBUFFER_COMPLETE)throw new Error("sigma: float framebuffer for frame-pass placement is incomplete.");t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,null)}},{key:"ensureCapacity",value:function(t){if(!(t<=this.capacity)){var e=this.gl;this.capacity=this.roundUpToPowerOfTwo(Math.ceil(t*Gu));var r=this.computeDimensions(this.capacity);this.textureWidth=r.width,this.textureHeight=r.height,this.texture&&e.deleteTexture(this.texture),this.framebuffer&&e.deleteFramebuffer(this.framebuffer),this.create()}}},{key:"bindAsRenderTarget",value:function(){var t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer),t.viewport(0,0,this.textureWidth,this.textureHeight)}},{key:"bind",value:function(t){var e=this.gl;e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,this.texture)}},{key:"getTexture",value:function(){return this.texture}},{key:"getTextureWidth",value:function(){return this.textureWidth}},{key:"getTextureHeight",value:function(){return this.textureHeight}},{key:"restore",value:function(){this.gl.getExtension("EXT_color_buffer_float"),this.create()}},{key:"kill",value:function(){var t=this.gl;this.texture&&(t.deleteTexture(this.texture),this.texture=null),this.framebuffer&&(t.deleteFramebuffer(this.framebuffer),this.framebuffer=null)}}])}(),zu=function(a){function n(t,e){return Y(this,n),ie(this,n,[t,2,e])}return oe(n,a),Z(n,[{key:"updateEdge",value:function(e,r,i,o,s,l){var u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0,d=arguments.length>7&&arguments[7]!==void 0?arguments[7]:0,h=arguments.length>8&&arguments[8]!==void 0?arguments[8]:0,c=this.indexMap.get(e);if(c===void 0)throw new Error('Edge "'.concat(e,'" not allocated in EdgeDataTexture'));var g=c*this.TEXELS_PER_ITEM*4;this.data[g+0]=r,this.data[g+1]=i,this.data[g+2]=o,this.data[g+3]=0,this.data[g+4]=s,this.data[g+5]=l,this.data[g+6]=u,this.data[g+7]=(d&15)<<4|h&15,this.markDirty(c)}}])}(Yn);function Mu(a,n){if(a==null)return{};var t={};for(var e in a)if({}.hasOwnProperty.call(a,e)){if(n.indexOf(e)!==-1)continue;t[e]=a[e]}return t}function Ba(a,n){if(a==null)return{};var t,e,r=Mu(a,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(e=0;e<i.length;e++)t=i[e],n.indexOf(t)===-1&&{}.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var Bu=["factor"],Wu=["factor"],Wa=1.5,un={x:.5,y:.5,angle:0,ratio:1},Oa=function(a){function n(){var t;Y(this,n);for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return t=ie(this,n,[].concat(r)),E(t,"minRatio",null),E(t,"maxRatio",null),E(t,"enabled",!0),E(t,"enabledZooming",!0),E(t,"enabledPanning",!0),E(t,"enabledRotation",!0),E(t,"constrainState",null),E(t,"state",W({},un)),E(t,"previousState",W({},un)),E(t,"nextFrame",null),E(t,"currentAnimationFrom",null),E(t,"currentAnimationTo",null),E(t,"animationCallback",null),t}return oe(n,a),Z(n,[{key:"x",get:function(){return this.state.x}},{key:"y",get:function(){return this.state.y}},{key:"angle",get:function(){return this.state.angle}},{key:"ratio",get:function(){return this.state.ratio}},{key:"getState",value:function(){return W({},this.state)}},{key:"getPreviousState",value:function(){return W({},this.previousState)}},{key:"getBoundedRatio",value:function(e){var r=e;return typeof this.minRatio=="number"&&(r=Math.max(r,this.minRatio)),typeof this.maxRatio=="number"&&(r=Math.min(r,this.maxRatio)),r}},{key:"validateState",value:function(e){var r=this.getState();return this.enabledPanning&&typeof e.x=="number"&&(r.x=e.x),this.enabledPanning&&typeof e.y=="number"&&(r.y=e.y),this.enabledZooming&&typeof e.ratio=="number"&&(r.ratio=this.getBoundedRatio(e.ratio)),this.enabledRotation&&typeof e.angle=="number"&&(r.angle=e.angle),this.constrainState?this.constrainState(r):r}},{key:"isAnimating",value:function(){return this.nextFrame!==null}},{key:"setState",value:function(e){if(!this.enabled)return this;var r=this.validateState(e);return Ss(this.state,r)?this:(this.previousState=this.state,this.state=r,this.emit("updated",this.getState()),this)}},{key:"updateState",value:function(e){return this.setState(e(this.getState())),this}},{key:"animate",value:function(e,r){var i=this;return this.enabled?new Promise(function(o){return i.runAnimation(e,W(W({},zr),r),o)}):Promise.resolve()}},{key:"cancelAnimation",value:function(){return this.nextFrame!==null&&(cancelAnimationFrame(this.nextFrame),this.nextFrame=null),this.resolveAnimation(),this.emitAnimationEnd(!1),this}},{key:"zoomIn",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=e.factor,i=r===void 0?Wa:r,o=Ba(e,Bu);return this.animate({ratio:this.ratio/i},o)}},{key:"zoomOut",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=e.factor,i=r===void 0?Wa:r,o=Ba(e,Wu);return this.animate({ratio:this.ratio*i},o)}},{key:"reset",value:function(e){return this.animate(un,e)}},{key:"runAnimation",value:function(e,r,i){var o=this,s=Bn(r.easing),l=Date.now(),u=this.getState(),d=this.validateState(e),h=function(){if(!o.enabled){o.cancelAnimation();return}var g=r.duration>0?(Date.now()-l)/r.duration:1;if(g>=1){o.nextFrame=null,o.setState(d),o.resolveAnimation(),o.emitAnimationEnd(!0);return}var p=s(g);o.setState({x:u.x+(d.x-u.x)*p,y:u.y+(d.y-u.y)*p,angle:u.angle+(d.angle-u.angle)*p,ratio:u.ratio+(d.ratio-u.ratio)*p}),o.nextFrame=requestAnimationFrame(h)};this.cancelAnimation(),this.currentAnimationFrom=u,this.currentAnimationTo=d,this.animationCallback=i,this.emit("animationStart",{from:u,to:d}),h()}},{key:"resolveAnimation",value:function(){var e=this.animationCallback;this.animationCallback=null,e&&e()}},{key:"emitAnimationEnd",value:function(e){var r=this.currentAnimationFrom,i=this.currentAnimationTo;!r||!i||(this.currentAnimationFrom=null,this.currentAnimationTo=null,this.emit("animationEnd",{from:r,to:i,completed:e}))}}],[{key:"from",value:function(e){var r=new n;return r.setState(e)}}])}(Hn);function he(a,n){var t=n.getBoundingClientRect();return{x:a.clientX-t.left,y:a.clientY-t.top}}function Te(a,n){var t=W(W({},he(a,n)),{},{sigmaDefaultPrevented:!1,preventSigmaDefault:function(){t.sigmaDefaultPrevented=!0},original:a});return t}function Ie(a){var n="x"in a?a:W(W({},a.touches[0]||a.previousTouches[0]),{},{original:a.original,sigmaDefaultPrevented:a.sigmaDefaultPrevented,preventSigmaDefault:function(){a.sigmaDefaultPrevented=!0,n.sigmaDefaultPrevented=!0}});return n}function Ou(a,n){var t=Te(a,n);return t.delta=ii(a),t}var Uu=2;function Wt(a){for(var n=[],t=0,e=Math.min(a.length,Uu);t<e;t++)n.push(a[t]);return n}function dt(a,n,t){var e={touches:Wt(a.touches).map(function(r){return he(r,t)}),previousTouches:n.map(function(r){return he(r,t)}),sigmaDefaultPrevented:!1,preventSigmaDefault:function(){e.sigmaDefaultPrevented=!0},original:a};return e}function ii(a){if(typeof a.deltaY<"u")return a.deltaY*-3/360;if(typeof a.detail<"u")return a.detail/-9;throw new Error("Captor: could not extract delta from event.")}var oi=function(a){function n(t,e){var r;return Y(this,n),r=ie(this,n),r.container=t,r.renderer=e,r}return oe(n,a),Z(n)}(Hn),Hu=["doubleClickTimeout","doubleClickZoomingDuration","doubleClickZoomingRatio","dragTimeout","draggedEventsTolerance","enableCameraMouseRotation","gestureTarget","inertiaDuration","inertiaRatio","zoomDuration","zoomingRatio"],$u=Hu.reduce(function(a,n){return W(W({},a),{},E({},n,$n[n]))},{});function ht(a){return a instanceof PointerEvent&&a.pointerType==="touch"}var Vu=function(a){function n(t,e){var r;return Y(this,n),r=ie(this,n,[t,e]),E(r,"enabled",!0),E(r,"draggedEvents",0),E(r,"downStartTime",null),E(r,"lastMouseX",null),E(r,"lastMouseY",null),E(r,"isMouseDown",!1),E(r,"isMoving",!1),E(r,"isPanningStage",!1),E(r,"movingTimeout",null),E(r,"startCameraState",null),E(r,"clicks",0),E(r,"doubleClickTimeout",null),E(r,"isRightMouseDown",!1),E(r,"startRotationAngle",null),E(r,"startCameraAngle",null),E(r,"currentWheelDirection",0),E(r,"lastWheelAnimationId",0),E(r,"settings",$u),r.handleRightClick=r.handleRightClick.bind(r),r.handleDown=r.handleDown.bind(r),r.handleUp=r.handleUp.bind(r),r.handleMove=r.handleMove.bind(r),r.handleWheel=r.handleWheel.bind(r),r.handleLeave=r.handleLeave.bind(r),r.handleEnter=r.handleEnter.bind(r),t.addEventListener("contextmenu",r.handleRightClick,{capture:!1}),t.addEventListener("pointerdown",r.handleDown,{capture:!1}),t.addEventListener("wheel",r.handleWheel,{capture:!1,passive:!1}),t.addEventListener("pointerleave",r.handleLeave,{capture:!1}),t.addEventListener("pointerenter",r.handleEnter,{capture:!1}),document.addEventListener("pointermove",r.handleMove,{capture:!1}),document.addEventListener("pointerup",r.handleUp,{capture:!1}),r}return oe(n,a),Z(n,[{key:"kill",value:function(){var e=this.container;e.removeEventListener("contextmenu",this.handleRightClick),e.removeEventListener("pointerdown",this.handleDown),e.removeEventListener("wheel",this.handleWheel),e.removeEventListener("pointerleave",this.handleLeave),e.removeEventListener("pointerenter",this.handleEnter),document.removeEventListener("pointermove",this.handleMove),document.removeEventListener("pointerup",this.handleUp)}},{key:"handleClick",value:function(e){var r=this;if(this.enabled){if(this.clicks++,this.clicks===2)return this.clicks=0,typeof this.doubleClickTimeout=="number"&&(clearTimeout(this.doubleClickTimeout),this.doubleClickTimeout=null),this.handleDoubleClick(e);setTimeout(function(){r.clicks=0,r.doubleClickTimeout=null},this.settings.doubleClickTimeout),this.draggedEvents<this.settings.draggedEventsTolerance&&this.emit("click",Te(e,this.container))}}},{key:"handleRightClick",value:function(e){this.enabled&&(this.settings.enableCameraMouseRotation&&e.preventDefault(),this.emit("rightClick",Te(e,this.container)))}},{key:"handleDoubleClick",value:function(e){if(this.enabled){e.preventDefault(),e.stopPropagation();var r=Te(e,this.container);if(this.emit("doubleClick",r),!r.sigmaDefaultPrevented){var i=this.renderer.getCamera(),o=i.getBoundedRatio(i.getState().ratio/this.settings.doubleClickZoomingRatio);i.animate(this.renderer.getViewportZoomedState(he(e,this.container),o),{easing:"quadraticInOut",duration:this.settings.doubleClickZoomingDuration})}}}},{key:"handleDown",value:function(e){if(!(!this.enabled||ht(e))){if(e.button===0){this.startCameraState=this.renderer.getCamera().getState();var r=he(e,this.container),i=r.x,o=r.y;this.lastMouseX=i,this.lastMouseY=o,this.draggedEvents=0,this.downStartTime=Date.now(),this.isMouseDown=!0}if(e.button===2&&this.settings.enableCameraMouseRotation){var s=he(e,this.container),l=s.x,u=s.y,d=this.container.offsetWidth/2,h=this.container.offsetHeight/2;this.startRotationAngle=Math.atan2(u-h,l-d),this.startCameraAngle=this.renderer.getCamera().getState().angle,this.isRightMouseDown=!0}this.emit("mousedown",Te(e,this.container))}}},{key:"handleUp",value:function(e){var r=this;if(!(!this.enabled||ht(e)||!this.isMouseDown&&!this.isRightMouseDown)){if(this.isRightMouseDown){this.isRightMouseDown=!1,this.startRotationAngle=null,this.startCameraAngle=null,this.emit("mouseup",Te(e,this.container));return}var i=this.renderer.getCamera();this.isMouseDown=!1,this.isPanningStage&&(this.isPanningStage=!1,this.renderer._setPanning(!1)),typeof this.movingTimeout=="number"&&(clearTimeout(this.movingTimeout),this.movingTimeout=null);var o=he(e,this.container),s=o.x,l=o.y,u=i.getState(),d=i.getPreviousState();this.isMoving?i.animate({x:u.x+this.settings.inertiaRatio*(u.x-d.x),y:u.y+this.settings.inertiaRatio*(u.y-d.y)},{duration:this.settings.inertiaDuration,easing:"quadraticOut"}):(this.lastMouseX!==s||this.lastMouseY!==l)&&i.setState({x:u.x,y:u.y}),this.isMoving=!1,setTimeout(function(){var h=r.draggedEvents>0;r.draggedEvents=0;var c=r.renderer.getSetting("hideEdgesOnMove")||r.renderer.getSetting("hideLabelsOnMove");h&&c&&r.renderer.refresh()},0),this.emit("mouseup",Te(e,this.container)),(e.target===this.container||e.composedPath()[0]===this.container)&&this.handleClick(e)}}},{key:"handleMove",value:function(e){var r=this;if(!(!this.enabled||ht(e))){var i=Te(e,this.container);if(this.emit("mousemovebody",i),(e.target===this.container||e.composedPath()[0]===this.container)&&this.emit("mousemove",i),this.isMouseDown&&this.draggedEvents++,!i.sigmaDefaultPrevented){if(this.isMouseDown){this.isMoving=!0,typeof this.movingTimeout=="number"&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(function(){r.movingTimeout=null,r.isMoving=!1},this.settings.dragTimeout);var o=this.renderer.getCamera(),s=he(e,this.container),l=s.x,u=s.y,d=this.renderer.viewportToFramedGraph({x:this.lastMouseX,y:this.lastMouseY}),h=this.renderer.viewportToFramedGraph({x:l,y:u}),c=d.x-h.x,g=d.y-h.y,p=o.getState(),y=p.x+c,v=p.y+g;this.isPanningStage||(this.isPanningStage=!0,this.renderer._setPanning(!0)),o.setState({x:y,y:v}),this.lastMouseX=l,this.lastMouseY=u,e.preventDefault(),e.stopPropagation()}if(this.isRightMouseDown){var f=he(e,this.container),b=f.x,_=f.y,m=this.container.offsetWidth/2,x=this.container.offsetHeight/2,T=Math.atan2(_-x,b-m),w=T-this.startRotationAngle,S=this.renderer.getCamera();S.setState({angle:this.startCameraAngle+w}),e.preventDefault(),e.stopPropagation()}}}}},{key:"handleLeave",value:function(e){ht(e)||this.emit("mouseleave",Te(e,this.container))}},{key:"handleEnter",value:function(e){ht(e)||this.emit("mouseenter",Te(e,this.container))}},{key:"handleWheel",value:function(e){var r=this,i=this.renderer.getCamera();if(!(!this.enabled||!i.enabledZooming)){var o=Ou(e,this.container);if(this.emit("wheel",o),!o.sigmaDefaultPrevented){var s=this.settings.gestureTarget;if(s!=="page"){if(s==="shared"&&!e.ctrlKey&&!e.metaKey){this.renderer._showGestureHint("wheel");return}var l=ii(e);if(l){e.preventDefault(),e.stopPropagation();var u=i.getState().ratio,d=l>0?1/this.settings.zoomingRatio:this.settings.zoomingRatio,h=i.getBoundedRatio(u*d),c=l>0?1:-1,g=Date.now();if(u!==h&&!(this.currentWheelDirection===c&&this.lastWheelTriggerTime&&g-this.lastWheelTriggerTime<this.settings.zoomDuration/5)){var p=++this.lastWheelAnimationId;i.animate(this.renderer.getViewportZoomedState(he(e,this.container),h),{easing:"quadraticOut",duration:this.settings.zoomDuration}).then(function(){r.lastWheelAnimationId===p&&(r.currentWheelDirection=0)}),this.currentWheelDirection=c,this.lastWheelTriggerTime=g}}}}}}},{key:"setSettings",value:function(e){this.settings=e}}])}(oi),ju=["dragTimeout","gestureTarget","inertiaDuration","inertiaRatio","doubleClickTimeout","doubleClickZoomingRatio","doubleClickZoomingDuration","tapMoveTolerance"],Xu=ju.reduce(function(a,n){return W(W({},a),{},E({},n,$n[n]))},{}),qu=function(a){function n(t,e){var r;return Y(this,n),r=ie(this,n,[t,e]),E(r,"enabled",!0),E(r,"isMoving",!1),E(r,"hasMoved",!1),E(r,"isPanningStage",!1),E(r,"isZoomingStage",!1),E(r,"touchMode",0),E(r,"startTouchesPositions",[]),E(r,"lastTouches",[]),E(r,"lastTap",null),E(r,"settings",Xu),r.handleStart=r.handleStart.bind(r),r.handleLeave=r.handleLeave.bind(r),r.handleMove=r.handleMove.bind(r),t.addEventListener("touchstart",r.handleStart,{capture:!1}),t.addEventListener("touchcancel",r.handleLeave,{capture:!1}),document.addEventListener("touchend",r.handleLeave,{capture:!1,passive:!1}),document.addEventListener("touchmove",r.handleMove,{capture:!1,passive:!1}),r}return oe(n,a),Z(n,[{key:"kill",value:function(){var e=this.container;e.removeEventListener("touchstart",this.handleStart),e.removeEventListener("touchcancel",this.handleLeave),document.removeEventListener("touchend",this.handleLeave),document.removeEventListener("touchmove",this.handleMove)}},{key:"getDimensions",value:function(){return{width:this.container.offsetWidth,height:this.container.offsetHeight}}},{key:"doesCapture",value:function(e){var r=this.settings.gestureTarget;return r==="graph"?!0:r==="page"?!1:e>=2}},{key:"syncStageFlags",value:function(){var e=this.touchMode===1&&this.hasMoved,r=this.touchMode===2;e!==this.isPanningStage&&(this.isPanningStage=e,this.renderer._setPanning(e)),r!==this.isZoomingStage&&(this.isZoomingStage=r,this.renderer._setZooming(r))}},{key:"handleStart",value:function(e){var r=this;if(this.enabled){var i=Wt(e.touches);if(this.touchMode=i.length,this.startCameraState=this.renderer.getCamera().getState(),this.startTouchesPositions=i.map(function(g){return he(g,r.container)}),this.touchMode===2){var o=ee(this.startTouchesPositions,2),s=o[0],l=s.x,u=s.y,d=o[1],h=d.x,c=d.y;this.startTouchesAngle=Math.atan2(c-u,h-l),this.startTouchesDistance=Math.sqrt(Math.pow(h-l,2)+Math.pow(c-u,2))}this.syncStageFlags(),this.emit("touchdown",dt(e,this.lastTouches,this.container)),this.lastTouches=i,this.lastTouchesPositions=this.startTouchesPositions,e.cancelable&&(this.doesCapture(e.touches.length)||this.renderer._hasNodeDrag())&&e.preventDefault()}}},{key:"handleLeave",value:function(e){if(!(!this.enabled||!this.startTouchesPositions.length)){switch(e.cancelable&&this.doesCapture(this.touchMode)&&e.preventDefault(),this.movingTimeout&&(this.isMoving=!1,clearTimeout(this.movingTimeout)),this.touchMode){case 2:if(e.touches.length===1){this.handleStart(e);break}case 1:if(this.isMoving){var r=this.renderer.getCamera(),i=r.getState(),o=r.getPreviousState();r.animate({x:i.x+this.settings.inertiaRatio*(i.x-o.x),y:i.y+this.settings.inertiaRatio*(i.y-o.y)},{duration:this.settings.inertiaDuration,easing:"quadraticOut"})}this.hasMoved=!1,this.isMoving=!1,this.touchMode=0;break}if(this.syncStageFlags(),this.emit("touchup",dt(e,this.lastTouches,this.container)),!e.touches.length){var s=he(this.lastTouches[0],this.container),l=this.startTouchesPositions[0],u=Math.pow(s.x-l.x,2)+Math.pow(s.y-l.y,2);if(!e.touches.length&&u<Math.pow(this.settings.tapMoveTolerance,2))if(this.lastTap&&Date.now()-this.lastTap.time<this.settings.doubleClickTimeout){var d=dt(e,this.lastTouches,this.container);if(this.emit("doubletap",d),this.lastTap=null,!d.sigmaDefaultPrevented&&this.settings.gestureTarget!=="page"){var h=this.renderer.getCamera(),c=h.getBoundedRatio(h.getState().ratio/this.settings.doubleClickZoomingRatio);h.animate(this.renderer.getViewportZoomedState(s,c),{easing:"quadraticInOut",duration:this.settings.doubleClickZoomingDuration})}}else{var g=dt(e,this.lastTouches,this.container);this.emit("tap",g),this.lastTap={time:Date.now(),position:g.touches[0]||g.previousTouches[0]}}}this.lastTouches=Wt(e.touches),this.startTouchesPositions=[]}}},{key:"handleMove",value:function(e){var r=this;if(!(!this.enabled||!this.startTouchesPositions.length)){var i=this.doesCapture(e.touches.length);i&&e.preventDefault();var o=Wt(e.touches),s=o.map(function(U){return he(U,r.container)}),l=this.lastTouches;this.lastTouches=o,this.lastTouchesPositions=s;var u=dt(e,l,this.container);if(this.emit("touchmove",u),!u.sigmaDefaultPrevented&&(this.hasMoved||(this.hasMoved=s.some(function(U,$){var X=r.startTouchesPositions[$];return X&&(U.x!==X.x||U.y!==X.y)})),!!this.hasMoved)){if(!i){this.settings.gestureTarget==="shared"&&this.renderer._showGestureHint("touch");return}this.isMoving=!0,this.syncStageFlags(),this.movingTimeout&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(function(){r.isMoving=!1},this.settings.dragTimeout);var d=this.renderer.getCamera(),h=this.startCameraState,c=this.renderer.getSetting("stagePadding");switch(this.touchMode){case 1:{var g=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0]),p=g.x,y=g.y,v=this.renderer.viewportToFramedGraph(s[0]),f=v.x,b=v.y;d.setState({x:h.x+p-f,y:h.y+y-b});break}case 2:{var _={x:.5,y:.5,angle:0,ratio:1},m=s[0],x=m.x,T=m.y,w=s[1],S=w.x,A=w.y,R=Math.atan2(A-T,S-x)-this.startTouchesAngle,k=Math.hypot(A-T,S-x)/this.startTouchesDistance,D=d.getBoundedRatio(h.ratio/k);_.ratio=D,_.angle=h.angle+R;var F=this.getDimensions(),L=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0],{cameraState:h}),N=Math.min(F.width,F.height)-2*c,G=N/F.width,z=N/F.height,P=D/N,C=x-N/2/G,I=T-N/2/z,H=Er({x:C,y:I},_.angle);C=H.x,I=H.y,_.x=L.x-C*P,_.y=L.y+I*P,d.setState(_);break}}}}}},{key:"setSettings",value:function(e){this.settings=e}}])}(oi),Ku=function(){function a(n,t,e,r){Y(this,a),E(this,"pendingNode",null),E(this,"session",null),this.graph=n,this.viewportToGraph=t,this.setNodesState=e,this.emit=r}return Z(a,[{key:"start",value:function(t,e,r,i,o){var s=r(t),l=!1;if(this.emit("nodeDragStart",{node:t,allDraggedNodes:s,event:e,preventSigmaDefault:function(){l=!0}}),l)return!1;var u=new Map,d=M(s),h;try{for(d.s();!(h=d.n()).done;){var c=h.value;u.set(c,{x:this.graph.getNodeAttribute(c,i),y:this.graph.getNodeAttribute(c,o)})}}catch(g){d.e(g)}finally{d.f()}return this.session={node:t,allNodes:s,startPosition:this.viewportToGraph(e),startNodePositions:u,xAttr:i,yAttr:o},this.setNodesState(s,{isDragged:!0}),!0}},{key:"applyMove",value:function(t,e){var r=this.session,i=r.allNodes,o=r.startNodePositions,s=r.startPosition,l=r.xAttr,u=r.yAttr,d=this.viewportToGraph(t),h={x:d.x-s.x,y:d.y-s.y},c=M(i),g;try{for(c.s();!(g=c.n()).done;){var p=g.value,y=o.get(p);if(!(!y||!this.graph.hasNode(p))){var v={x:y.x+h.x,y:y.y+h.y};e?this.graph.mergeNodeAttributes(p,e(v,p)):(this.graph.setNodeAttribute(p,l,v.x),this.graph.setNodeAttribute(p,u,v.y))}}}catch(f){c.e(f)}finally{c.f()}}},{key:"end",value:function(){if(this.pendingNode=null,!this.session)return null;var t=this.session,e=t.node,r=t.allNodes;return this.setNodesState(r,{isDragged:!1}),this.session=null,{node:e,allNodes:r}}},{key:"removeNode",value:function(t){t===this.pendingNode&&(this.pendingNode=null),this.session&&(this.session.node===t?(this.setNodesState(this.session.allNodes,{isDragged:!1}),this.session=null):this.session.allNodes.includes(t)&&(this.session.allNodes=this.session.allNodes.filter(function(e){return e!==t}),this.session.startNodePositions.delete(t)))}},{key:"clear",value:function(){this.pendingNode=null,this.session=null}}])}(),Yu=function(){function a(n,t){Y(this,a),E(this,"groups",new Map),E(this,"edgeToGroupKey",new Map),this.graph=n,this.onGroupChanged=t}return Z(a,[{key:"getGroupKey",value:function(t){var e=this.graph.source(t),r=this.graph.target(t);return e<r?"".concat(e,"\0").concat(r):"".concat(r,"\0").concat(e)}},{key:"sortGroup",value:function(t,e){var r=this,i=e.split("\0")[0];t.sort(function(o,s){var l=r.graph.source(o)===i||!r.graph.isDirected(o)?0:1,u=r.graph.source(s)===i||!r.graph.isDirected(s)?0:1;return l-u})}},{key:"register",value:function(t){var e=this.getGroupKey(t),r=this.groups.get(e);r||(r=[],this.groups.set(e,r)),r.includes(t)||r.push(t),this.edgeToGroupKey.set(t,e),this.sortGroup(r,e),this.onGroupChanged(r,r.length)}},{key:"unregister",value:function(t){var e=this.edgeToGroupKey.get(t);if(e){this.edgeToGroupKey.delete(t);var r=this.groups.get(e);if(r){var i=r.indexOf(t);i!==-1&&r.splice(i,1),r.length===0?this.groups.delete(e):this.onGroupChanged(r,r.length)}}}},{key:"getGroup",value:function(t){var e,r=this.edgeToGroupKey.get(t);return r?(e=this.groups.get(r))!==null&&e!==void 0?e:[]:[]}},{key:"getSiblings",value:function(t){return this.getGroup(t).filter(function(e){return e!==t})}},{key:"rebuild",value:function(){var t=this;this.groups.clear(),this.edgeToGroupKey.clear(),this.graph.forEachEdge(function(l){var u=t.getGroupKey(l),d=t.groups.get(u);d||(d=[],t.groups.set(u,d)),d.push(l),t.edgeToGroupKey.set(l,u)});var e=M(this.groups),r;try{for(e.s();!(r=e.n()).done;){var i=ee(r.value,2),o=i[0],s=i[1];this.sortGroup(s,o),this.onGroupChanged(s,s.length)}}catch(l){e.e(l)}finally{e.f()}}},{key:"clear",value:function(){this.groups.clear(),this.edgeToGroupKey.clear()}}])}();function Ua(a,n){var t;if(a===!1||a==="extend"||a==="separate")return a;var e=a[n];return e!==void 0?e:(t=a.default)!==null&&t!==void 0?t:!1}function Ha(a){return a===!1?!1:a==="extend"||a==="separate"?!0:Object.values(a).some(function(n){return n==="extend"||n==="separate"})}function $a(a){return a==="separate"?!0:a===!1||a==="extend"?!1:a.default==="separate"?!0:Object.values(a).includes("separate")}var ue={node:{parent:null,eventSuffix:"Node",payloadKey:"node",isEnabled:function(){return!0},writesPickingThisFrame:function(){return!0},setHover:function(n,t,e){return n.setNodeState(t,{isHovered:e})},getCursor:function(n,t){var e;return(e=n.nodeDataCache[t])===null||e===void 0?void 0:e.cursor},isHitValid:function(n,t){var e;return((e=n.nodeDataCache[t])===null||e===void 0?void 0:e.visibility)!=="hidden"}},edge:{parent:null,eventSuffix:"Edge",payloadKey:"edge",isEnabled:function(n){return!!n.settings.enableEdgeEvents},writesPickingThisFrame:function(n){return!!n.settings.enableEdgeEvents},setHover:function(n,t,e){return n.setEdgeState(t,{isHovered:e})},getCursor:function(n,t){var e;return(e=n.edgeDataCache[t])===null||e===void 0?void 0:e.cursor}},nodeLabel:{parent:"node",eventSuffix:"NodeLabel",payloadKey:"node",isEnabled:function(n){return $a(n.settings.nodeLabelEvents)},writesPickingThisFrame:function(n){return Ha(n.settings.nodeLabelEvents)},setHover:function(n,t,e){return n.setNodeState(t,{isLabelHovered:e})},getCursor:function(n,t){var e;return(e=n.nodeDataCache[t])===null||e===void 0?void 0:e.labelCursor},resolveForVerb:function(n,t,e){var r=Ua(e.settings.nodeLabelEvents,t);return r===!1?null:r==="extend"?{kind:"node",key:n.key}:n}},edgeLabel:{parent:"edge",eventSuffix:"EdgeLabel",payloadKey:"edge",isEnabled:function(n){return $a(n.settings.edgeLabelEvents)},writesPickingThisFrame:function(n){return Ha(n.settings.edgeLabelEvents)},setHover:function(n,t,e){return n.setEdgeState(t,{isLabelHovered:e})},getCursor:function(n,t){var e;return(e=n.edgeDataCache[t])===null||e===void 0?void 0:e.labelCursor},resolveForVerb:function(n,t,e){var r=Ua(e.settings.edgeLabelEvents,t);return r===!1?null:r==="extend"?{kind:"edge",key:n.key}:n}}},We=["node","edge","nodeLabel","edgeLabel"];function Zu(){return{lookup:[null],idsByKind:{node:new Map,edge:new Map,nodeLabel:new Map,edgeLabel:new Map},nextId:1}}function Be(a,n,t){var e;return(e=a.idsByKind[n].get(t))!==null&&e!==void 0?e:0}function dn(a,n){var t=M(We),e;try{for(t.s();!(e=t.n()).done;){var r=e.value;if(r===n||ue[r].parent===n){var i=M(a.idsByKind[r].values()),o;try{for(i.s();!(o=i.n()).done;){var s=o.value;a.lookup[s]=null}}catch(c){i.e(c)}finally{i.f()}a.idsByKind[r]=new Map}}}catch(c){t.e(c)}finally{t.f()}var l=1,u=M(We),d;try{for(u.s();!(d=u.n()).done;){var h=d.value;if(h===n)break;l+=a.idsByKind[h].size}}catch(c){u.e(c)}finally{u.f()}a.nextId=l}function Va(a,n,t){var e=a.nextId++;return a.idsByKind[n].set(t,e),a.lookup[e]={kind:n,key:t},e}function Qu(a,n){var t=M(We),e;try{for(t.s();!(e=t.n()).done;){var r=e.value;if(ue[r].parent!==null){var i=M(a.idsByKind[r].values()),o;try{for(i.s();!(o=i.n()).done;){var s=o.value;a.lookup[s]=null}}catch(x){i.e(x)}finally{i.f()}a.idsByKind[r]=new Map}}}catch(x){t.e(x)}finally{t.f()}a.nextId=1;var l=M(We),u;try{for(l.s();!(u=l.n()).done;){var d=u.value;if(ue[d].parent===null){var h=M(a.idsByKind[d].values()),c;try{for(h.s();!(c=h.n()).done;){var g=c.value;g>=a.nextId&&(a.nextId=g+1)}}catch(x){h.e(x)}finally{h.f()}}}}catch(x){l.e(x)}finally{l.f()}var p=M(We),y;try{for(p.s();!(y=p.n()).done;){var v=y.value,f=ue[v];if(!(f.parent===null||!f.isEnabled(n))){var b=M(a.idsByKind[f.parent].keys()),_;try{for(b.s();!(_=b.n()).done;){var m=_.value;a.idsByKind[v].set(m,a.nextId),a.lookup[a.nextId]={kind:v,key:m},a.nextId++}}catch(x){b.e(x)}finally{b.f()}}}}catch(x){p.e(x)}finally{p.f()}}function Ju(a,n){var t=M(We),e;try{for(t.s();!(e=t.n()).done;){var r=e.value,i=a[r],o=n[r];if(i!==o){if(i.size!==o.size)return!1;var s=M(i),l;try{for(s.s();!(l=s.n()).done;){var u=ee(l.value,2),d=u[0],h=u[1];if(o.get(d)!==h)return!1}}catch(c){s.e(c)}finally{s.f()}}}}catch(c){t.e(c)}finally{t.f()}return!0}function ja(a,n,t){ue[n.kind].setHover(a,n.key,t)}function ed(a,n){return ue[n.kind].getCursor(a,n.key)}function vt(a,n){return"".concat(n).concat(ue[a].eventSuffix)}function mt(a,n){return W(W({},n),{},E({},ue[a.kind].payloadKey,a.key))}function td(a,n,t){var e=ue[n.kind].resolveForVerb;return e?e(n,t,a):n}function nd(a,n){var t=ue[n.kind].isHitValid;return t?t(a,n.key):!0}function hn(a){return We.filter(function(n){return n===a||ue[n].parent===a})}function si(a,n,t){return n&&(n=td(a,n,t)),n&&!nd(a,n)&&(n=null),n}function cn(a,n,t){var e=t==="wheel"?a.stateManager.hovered:a.getHitAtPosition(n);return si(a,e,t)}function ad(a,n){return!a||!n?a===n:a.kind===n.kind&&a.key===n.key}function li(a,n,t){var e={event:t,preventSigmaDefault:function(){return t.preventSigmaDefault()}},r=a.dragManager.session,i=r?{kind:"node",key:r.node}:si(a,n,"enter"),o=a.stateManager,s=o.hovered;ad(s,i)||(s&&(ja(a,s,!1),a.emit(vt(s.kind,"leave"),mt(s,e))),o.setHovered(i),i&&(ja(a,i,!0),a.emit(vt(i.kind,"enter"),mt(i,e))),a.updateContainerCursor())}function rd(a,n,t,e){e.handleResize=function(){return a.scheduleRefresh()},window.addEventListener("resize",e.handleResize),e.handleMove=function(i){a.hoverResolver.pointerMoved(Ie(i))},e.handleMoveBody=function(i){var o=Ie(i),s=a.dragManager;if(s.pendingNode&&!s.session){var l=a.nodeStyleAnalysis,u=l.xAttribute,d=l.yAttribute,h=a.settings;s.start(s.pendingNode,o,h.getDraggedNodes,u||"x",d||"y"),s.pendingNode=null}s.session&&(s.applyMove(o,a.settings.dragPositionToAttributes),a.emit("nodeDrag",{node:s.session.node,allDraggedNodes:s.session.allNodes,event:o}),o.preventSigmaDefault()),a.emit("moveBody",{event:o,preventSigmaDefault:function(){return o.preventSigmaDefault()}})},e.handleLeave=function(i){var o=Ie(i),s={event:o,preventSigmaDefault:function(){return o.preventSigmaDefault()}};a.hoverResolver.pointerLeft(),li(a,null,o),a.emit("leaveStage",s)},e.handleEnter=function(i){var o=Ie(i);a.emit("enterStage",{event:o,preventSigmaDefault:function(){return o.preventSigmaDefault()}})};var r=function(o){return function(s){var l=Ie(s),u={event:l,preventSigmaDefault:function(){return l.preventSigmaDefault()}},d=cn(a,l,o);if(d){a.emit(vt(d.kind,o),mt(d,u));return}a.emit("".concat(o,"Stage"),u)}};e.handleClick=r("click"),e.handleRightClick=r("rightClick"),e.handleDoubleClick=r("doubleClick"),e.handleWheel=r("wheel"),e.handleDown=function(i){var o=Ie(i),s={event:o,preventSigmaDefault:function(){return o.preventSigmaDefault()}},l=cn(a,o,"down");if(l){l.kind==="node"&&a.settings.enableNodeDrag&&(a.dragManager.pendingNode=l.key),a.emit(vt(l.kind,"down"),mt(l,s));return}a.emit("downStage",s)},e.handleUp=function(i){var o=Ie(i),s={event:o,preventSigmaDefault:function(){return o.preventSigmaDefault()}},l=a.dragManager.end();l&&a.emit("nodeDragEnd",W({node:l.node,allDraggedNodes:l.allNodes},s));var u=cn(a,o,"up");if(u){a.emit(vt(u.kind,"up"),mt(u,s));return}a.emit("upStage",s)},n.on("mousemove",e.handleMove),n.on("mousemovebody",e.handleMoveBody),n.on("click",e.handleClick),n.on("rightClick",e.handleRightClick),n.on("doubleClick",e.handleDoubleClick),n.on("wheel",e.handleWheel),n.on("mousedown",e.handleDown),n.on("mouseup",e.handleUp),n.on("mouseleave",e.handleLeave),n.on("mouseenter",e.handleEnter),t.on("touchdown",e.handleDown),t.on("touchdown",e.handleMove),t.on("touchup",e.handleUp),t.on("touchmove",e.handleMove),t.on("tap",e.handleClick),t.on("doubletap",e.handleDoubleClick),t.on("touchmove",e.handleMoveBody)}function id(a,n){var t=a.graph,e=new Set(["x","y","zIndex","type"]);n.eachNodeAttributesUpdatedGraphUpdate=function(r){var i,o=(i=r.hints)===null||i===void 0?void 0:i.attributes,s=!o||o.some(function(l){return e.has(l)});a.refresh({partialGraph:{nodes:t.nodes()},skipIndexation:!s,schedule:!0})},n.eachEdgeAttributesUpdatedGraphUpdate=function(r){var i,o=(i=r.hints)===null||i===void 0?void 0:i.attributes,s=o&&["zIndex","type"].some(function(l){return o==null?void 0:o.includes(l)});a.refresh({partialGraph:{edges:t.edges()},skipIndexation:!s,schedule:!0})},n.addNodeGraphUpdate=function(r){a.addNode(r.key),a.refresh({partialGraph:{nodes:[r.key]},skipIndexation:!1,schedule:!0})},n.updateNodeGraphUpdate=function(r){a.refresh({partialGraph:{nodes:[r.key]},skipIndexation:!1,schedule:!0})},n.dropNodeGraphUpdate=function(r){a.removeNode(r.key),a.refresh({schedule:!0})},n.addEdgeGraphUpdate=function(r){var i=r.key;a.edgeGroups.register(i),a.addEdge(i);var o=a.edgeGroups.getSiblings(i),s=M(o),l;try{for(s.s();!(l=s.n()).done;){var u=l.value;a.addEdge(u)}}catch(d){s.e(d)}finally{s.f()}a.refresh({partialGraph:{edges:[i].concat(j(o))},schedule:!0})},n.updateEdgeGraphUpdate=function(r){a.refresh({partialGraph:{edges:[r.key]},skipIndexation:!1,schedule:!0})},n.dropEdgeGraphUpdate=function(r){var i=r.key,o=a.edgeGroups.getSiblings(i);a.edgeGroups.unregister(i),a.removeEdge(i);var s=M(o),l;try{for(s.s();!(l=s.n()).done;){var u=l.value;a.addEdge(u)}}catch(d){s.e(d)}finally{s.f()}a.refresh({schedule:!0})},n.clearEdgesGraphUpdate=function(){a.clearEdgeState(),a.clearEdgeIndices(),a.refresh({schedule:!0})},n.clearGraphUpdate=function(){a.clearEdgeState(),a.clearNodeState(),a.clearEdgeIndices(),a.clearNodeIndices(),a.refresh({schedule:!0})},t.on("nodeAdded",n.addNodeGraphUpdate),t.on("nodeDropped",n.dropNodeGraphUpdate),t.on("nodeAttributesUpdated",n.updateNodeGraphUpdate),t.on("eachNodeAttributesUpdated",n.eachNodeAttributesUpdatedGraphUpdate),t.on("edgeAdded",n.addEdgeGraphUpdate),t.on("edgeDropped",n.dropEdgeGraphUpdate),t.on("edgeAttributesUpdated",n.updateEdgeGraphUpdate),t.on("eachEdgeAttributesUpdated",n.eachEdgeAttributesUpdatedGraphUpdate),t.on("edgesCleared",n.clearEdgesGraphUpdate),t.on("cleared",n.clearGraphUpdate)}function od(a,n){a.removeListener("nodeAdded",n.addNodeGraphUpdate),a.removeListener("nodeDropped",n.dropNodeGraphUpdate),a.removeListener("nodeAttributesUpdated",n.updateNodeGraphUpdate),a.removeListener("eachNodeAttributesUpdated",n.eachNodeAttributesUpdatedGraphUpdate),a.removeListener("edgeAdded",n.addEdgeGraphUpdate),a.removeListener("edgeDropped",n.dropEdgeGraphUpdate),a.removeListener("edgeAttributesUpdated",n.updateEdgeGraphUpdate),a.removeListener("eachEdgeAttributesUpdated",n.eachEdgeAttributesUpdatedGraphUpdate),a.removeListener("edgesCleared",n.clearEdgesGraphUpdate),a.removeListener("cleared",n.clearGraphUpdate)}var sd={x:.5,y:.5,angle:0,ratio:1},ld=8,ud=.001;function dd(a){var n=a.coords,t=a.nodeData,e=a.dimensions,r=a.stagePadding,i=a.zoomToSizeRatioFunction,o=a.itemSizesReference,s=a.fitLabels,l=a.nodeLabelBox,u=Object.keys(n);if(!u.length)return a.extent;for(var d=i(1)||1,h=o==="positions",c=e.width,g=e.height,p=a.extent,y=0;y<ld;y++){for(var v=_n(p),f={width:p.x[1]-p.x[0]||1,height:p.y[1]-p.y[0]||1},b=ze(sd,e,f,r),_=Xa(b,v({x:0,y:0}),c,g),m=Xa(b,v({x:1,y:0}),c,g),x=Math.hypot(m.x-_.x,m.y-_.y)||1,T=1/0,w=-1/0,S=1/0,A=-1/0,R=0,k=u.length;R<k;R++){var D=u[R],F=t[D],L=F.size/d*(h?x:1),N=-L,G=L,z=-L,P=L;if(s){var C=l(F,L);C&&(C.minX<N&&(N=C.minX),C.maxX>G&&(G=C.maxX),C.minY<z&&(z=C.minY),C.maxY>P&&(P=C.maxY))}var I=n[D],H=I.x,U=I.y;T=Math.min(T,H+N/x),w=Math.max(w,H+G/x),S=Math.min(S,U-P/x),A=Math.max(A,U-z/x)}var $={x:[T,w],y:[S,A]},X=Math.max($.x[1]-$.x[0],$.y[1]-$.y[0])||1,K=Math.max(Math.abs($.x[0]-p.x[0]),Math.abs($.x[1]-p.x[1]),Math.abs($.y[0]-p.y[0]),Math.abs($.y[1]-p.y[1]));if(p=$,K/X<ud)break}return p}function Xa(a,n,t,e){var r=bt(a,n);return{x:(1+r.x)*t/2,y:(1-r.y)*e/2}}var hd=typeof navigator<"u"&&/Mac|iP(hone|ad|od)/.test(navigator.platform),cd=1500,fd=`.sigma-gesture-hint {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1em;
  background: #00000066;
  color: #ffffff;
  font-size: 1em;
  pointer-events: none;
  transition: opacity 0.1s;
}`;function qa(a){var n,t,e=yt("style");e.textContent=a,document.head.appendChild(e);var r=((n=(t=e.sheet)===null||t===void 0?void 0:t.cssRules.length)!==null&&n!==void 0?n:0)>0;return e.remove(),r}var Ge=null;function gd(){return Ge===null&&(Ge=fd,qa("@scope {}")&&(Ge=`@scope {
`.concat(Ge,`
}`)),qa("@layer sigma-gesture-hint {}")&&(Ge=`@layer sigma-gesture-hint {
`.concat(Ge,`
}`))),Ge}var pd=function(){function a(n){Y(this,a),E(this,"hideTimeout",null),this.styleElement=yt("style"),this.styleElement.textContent=gd(),n.appendChild(this.styleElement),this.element=yt("div",{opacity:"0"},{class:"sigma-gesture-hint"}),n.appendChild(this.element)}return Z(a,[{key:"show",value:function(t,e){var r=this,i=t==="touch"?e.sharedGestureTouchMessage:hd?e.sharedGestureAppleWheelMessage:e.sharedGestureWheelMessage;i&&(this.element.textContent=i,this.element.style.opacity="1",typeof this.hideTimeout=="number"&&clearTimeout(this.hideTimeout),this.hideTimeout=window.setTimeout(function(){r.hideTimeout=null,r.element.style.opacity="0"},cd))}},{key:"kill",value:function(){typeof this.hideTimeout=="number"&&clearTimeout(this.hideTimeout),this.styleElement.remove(),this.element.remove()}}])}(),vd=function(){function a(n){Y(this,a),E(this,"readBuffer",null),E(this,"fence",null),E(this,"result",new Uint8Array(4)),E(this,"generation",0),E(this,"readGeneration",0),E(this,"lastEvent",null),E(this,"active",!1),E(this,"dirty",!1),E(this,"rafId",null),E(this,"killed",!1),this.options=n}return Z(a,[{key:"pointerMoved",value:function(t){this.lastEvent=t,this.active=!0,!this.options.isRenderPending()&&this.request()}},{key:"pointerLeft",value:function(){this.active=!1,this.dirty=!1}},{key:"frameRendered",value:function(){this.request()}},{key:"invalidate",value:function(){this.generation++}},{key:"request",value:function(){if(!(this.killed||!this.active||!this.lastEvent)){if(this.fence){this.dirty=!0;return}this.startRead()}}},{key:"startRead",value:function(){var t=this.options,e=t.gl,r=t.getFrameBuffer,i=t.getPixelRatio,o=t.getDownSizingRatio;this.readGeneration=this.generation;var s=this.lastEvent,l=wr(e,s.x,s.y,i(),o()),u=ee(l,2),d=u[0],h=u[1];this.readBuffer||(this.readBuffer=e.createBuffer()),e.bindFramebuffer(e.FRAMEBUFFER,r()),e.bindBuffer(e.PIXEL_PACK_BUFFER,this.readBuffer),e.bufferData(e.PIXEL_PACK_BUFFER,4,e.STREAM_READ),e.readPixels(d,h,1,1,e.RGBA,e.UNSIGNED_BYTE,0),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null),this.fence=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0),e.flush(),this.schedulePoll(s)}},{key:"schedulePoll",value:function(t){var e=this;this.rafId=requestAnimationFrame(function(){e.rafId=null,e.poll(t)})}},{key:"poll",value:function(t){var e=this.options,r=e.gl,i=e.onIndex;if(!(this.killed||!this.fence)){var o=r.clientWaitSync(this.fence,0,0);if(o===r.TIMEOUT_EXPIRED){this.schedulePoll(t);return}if(r.deleteSync(this.fence),this.fence=null,o!==r.WAIT_FAILED&&this.readGeneration===this.generation){r.bindBuffer(r.PIXEL_PACK_BUFFER,this.readBuffer),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,this.result),r.bindBuffer(r.PIXEL_PACK_BUFFER,null);var s=ee(this.result,4),l=s[0],u=s[1],d=s[2],h=s[3];this.active&&i(Dr(l,u,d,h),t)}this.dirty&&(this.dirty=!1,this.active&&this.lastEvent&&!this.options.isRenderPending()&&this.startRead())}}},{key:"reset",value:function(){this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=null,this.fence=null,this.readBuffer=null,this.dirty=!1}},{key:"kill",value:function(){this.killed=!0,this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=null;var t=this.options.gl;this.fence&&t.deleteSync(this.fence),this.fence=null,this.readBuffer&&t.deleteBuffer(this.readBuffer),this.readBuffer=null}}])}(),Ka=function(){function a(n,t){Y(this,a),this.key=n,this.size=t}return Z(a,null,[{key:"compare",value:function(t,e){return t.size>e.size?-1:t.size<e.size||t.key>e.key?1:-1}}])}(),Gt=function(){function a(){Y(this,a),E(this,"width",0),E(this,"height",0),E(this,"cellSize",0),E(this,"columns",0),E(this,"rows",0),E(this,"cells",{})}return Z(a,[{key:"resizeAndClear",value:function(t,e){this.width=t.width,this.height=t.height,this.cellSize=e,this.columns=Math.ceil(t.width/e),this.rows=Math.ceil(t.height/e),this.cells={}}},{key:"getIndex",value:function(t){var e=Math.floor(t.x/this.cellSize),r=Math.floor(t.y/this.cellSize);return r*this.columns+e}},{key:"add",value:function(t,e,r){var i=new Ka(t,e),o=this.getIndex(r),s=this.cells[o];s||(s=[],this.cells[o]=s),s.push(i)}},{key:"organize",value:function(){for(var t in this.cells){var e=this.cells[t];e.sort(Ka.compare)}}},{key:"getLabelsToDisplay",value:function(t,e,r){var i=this.cellSize*this.cellSize,o=i/t/t,s=o*e/i,l=Math.ceil(s),u=[];if(r)for(var d=Math.max(0,Math.floor(r.x1/this.cellSize)),h=Math.min(this.columns-1,Math.floor(r.x2/this.cellSize)),c=Math.max(0,Math.floor(r.y1/this.cellSize)),g=Math.min(this.rows-1,Math.floor(r.y2/this.cellSize)),p=c;p<=g;p++)for(var y=d;y<=h;y++){var v=p*this.columns+y,f=this.cells[v];if(f)for(var b=0;b<Math.min(l,f.length);b++)u.push(f[b].key)}else for(var _ in this.cells)for(var m=this.cells[_],x=0;x<Math.min(l,m.length);x++)u.push(m[x].key);return u}}])}();function md(a){var n=a.graph,t=a.hoveredNode,e=a.highlightedNodes,r=a.displayedNodeLabels,i=new Set,o=new Set(e);t&&o.add(t);var s=M(o),l;try{for(s.s();!(l=s.n()).done;){var u=l.value;n.hasNode(u)&&n.forEachEdge(u,function(g){i.add(g)})}}catch(g){s.e(g)}finally{s.f()}var d=M(r),h;try{var c=function(){var p=h.value;if(o.has(p))return 1;n.forEachEdge(p,function(y,v,f,b){var _=f===p?b:f;r.has(_)&&i.add(y)})};for(d.s();!(h=d.n()).done;)c()}catch(g){d.e(g)}finally{d.f()}return Array.from(i)}var fn=150,gn=50,bd={both:0,node:1,label:2},yd={over:0,above:1,below:2,auto:3},Ya=12,xd=3,_d=function(){function a(n){Y(this,a),E(this,"labelGrid",new Gt),E(this,"edgeAnchorGrid",new Gt),E(this,"displayedNodeLabels",new Set),E(this,"displayedEdgeLabels",new Set),E(this,"edgeLabelCandidates",[]),E(this,"renderedNodeLabels",new Set),E(this,"labelSizeCache",new Map),E(this,"framePassPoints",new Float32Array(0)),E(this,"labelsDirty",!0),this.internals=n}return Z(a,[{key:"resetFrame",value:function(){this.displayedNodeLabels=new Set,this.renderedNodeLabels=new Set,this.labelSizeCache.clear()}},{key:"clearEdgeLabels",value:function(){this.displayedEdgeLabels=new Set}},{key:"resetLabelGrid",value:function(){this.labelGrid=new Gt,this.edgeAnchorGrid=new Gt}},{key:"processWebGLLabels",value:function(t){for(var e,r=this.internals,i=r.labelProgram,o=r.primitives,s=r.nodeDataCache,l=(o==null||(e=o.nodes)===null||e===void 0||(e=e.label)===null||e===void 0||(e=e.font)===null||e===void 0?void 0:e.family)||"sans-serif",u=new Map,d=0,h=t.length;d<h;d++){var c=t[d],g=s[c];if(!(g.visibility==="hidden"||!g.label)){var p=g.labelFont||l,y=u.get(p);y?y.push(g.label):u.set(p,[g.label])}}var v=M(u),f;try{for(v.s();!(f=v.n()).done;){var b=ee(f.value,2),_=b[0],m=b[1],x=sn(_),T=x.family,w=x.weight,S=x.style,A=i.registerFont(T,w,S);i.ensureGlyphsReady(m,A)}}catch(R){v.e(R)}finally{v.f()}}},{key:"measureNodeLabel",value:function(t){var e,r;if(!t.label)return{width:0,height:0,textHeight:0};var i=this.internals,o=i.labelProgram,s=i.primitives,l=(e=t.labelSize)!==null&&e!==void 0?e:14,u=t.labelFont||(s==null||(r=s.nodes)===null||r===void 0||(r=r.label)===null||r===void 0||(r=r.font)===null||r===void 0?void 0:r.family)||"sans-serif",d="".concat(t.label,"|").concat(l,"|").concat(u);if(this.labelSizeCache.has(d))return this.labelSizeCache.get(d);var h=sn(u),c=h.family,g=h.weight,p=h.style,y=o.registerFont(c,g,p),v=o.measureLabel(t.label,l,y);return this.labelSizeCache.set(d,v),v}},{key:"nodeLabelBox",value:function(t,e){var r,i,o,s,l;if(t.visibility==="hidden"||t.labelVisibility==="hidden")return null;var u=this.measureNodeLabel(t),d=u.width,h=u.height,c=u.textHeight;if(!d)return null;var g=(r=(i=this.internals.primitives)===null||i===void 0||(i=i.nodes)===null||i===void 0||(i=i.label)===null||i===void 0?void 0:i.margin)!==null&&r!==void 0?r:xt,p=e+g,y=t.labelBackgroundColor?(o=t.labelBackgroundPadding)!==null&&o!==void 0?o:Aa:0,v=d/2,f=h/2,b=v+y,_=f+y,m=c/2,x=0,T=0;switch((s=t.labelPosition)!==null&&s!==void 0?s:"right"){case"left":x=-(p+v);break;case"above":T=-(p+m);break;case"below":T=p+m;break;case"over":break;default:x=p+v}var w=(l=t.labelAngle)!==null&&l!==void 0?l:0,S=Er({x,y:T},w),A=S.x,R=S.y,k=Math.abs(Math.cos(w)),D=Math.abs(Math.sin(w)),F=k*b+D*_,L=D*b+k*_;return{minX:A-F,maxX:A+F,minY:R-L,maxY:R+L}}},{key:"computeDisplayedNodeLabels",value:function(){var t=this.internals.getCameraState(),e=this.internals.getDimensions(),r=e.width,i=e.height,o=this.internals.viewportToFramedGraph({x:-150,y:-50}),s=this.internals.viewportToFramedGraph({x:r+fn,y:-50}),l=this.internals.viewportToFramedGraph({x:-150,y:i+gn}),u=this.internals.viewportToFramedGraph({x:r+fn,y:i+gn}),d=Math.min(o.x,s.x,l.x,u.x),h=Math.max(o.x,s.x,l.x,u.x),c=Math.min(o.y,s.y,l.y,u.y),g=Math.max(o.y,s.y,l.y,u.y),p=ze({x:.5,y:.5,ratio:1,angle:0},{width:r,height:i},this.internals.getGraphDimensions(),this.internals.getStagePadding()),y=function(C){var I=bt(p,C);return{x:(1+I.x)*r/2,y:(1-I.y)*i/2}},v=y({x:d,y:c}),f=y({x:h,y:c}),b=y({x:d,y:g}),_=y({x:h,y:g}),m={x1:Math.min(v.x,f.x,b.x,_.x),y1:Math.min(v.y,f.y,b.y,_.y),x2:Math.max(v.x,f.x,b.x,_.x),y2:Math.max(v.y,f.y,b.y,_.y)},x=this.internals,T=x.settings,w=x.nodeDataCache,S=x.nodesWithForcedLabels,A=this.labelGrid.getLabelsToDisplay(t.ratio,T.labelDensity,m);xa(A,S);for(var R=0,k=A.length;R<k;R++){var D=A[R],F=w[D];if(!this.displayedNodeLabels.has(D)&&!(F.visibility==="hidden"||F.labelVisibility==="hidden")&&F.label&&!(F.x<d||F.x>h||F.y<c||F.y>g)){var L=this.internals.framedGraphToViewport(F),N=L.x,G=L.y,z=this.internals.scaleSize(F.size);!Me(F)&&z<T.labelRenderedSizeThreshold||N<-150-z||N>r+fn+z||G<-50-z||G>i+gn+z||this.displayedNodeLabels.add(D)}}}},{key:"buildFramePassPoints",value:function(){var t=this.internals,e=t.nodeDataCache,r=t.nodeDataTexture;if(!r)return{data:this.framePassPoints,count:0};var i=this.displayedNodeLabels.size*3;this.framePassPoints.length<i&&(this.framePassPoints=new Float32Array(i));var o=this.framePassPoints,s=0,l=M(this.displayedNodeLabels),u;try{for(l.s();!(u=l.n()).done;){var d,h,c=u.value,g=e[c];if(g){var p=r.getIndex(c);p<0||(o[s*3]=p,o[s*3+1]=(d=gt[g.labelPosition||Ce.labelPosition])!==null&&d!==void 0?d:0,o[s*3+2]=(h=g.labelAngle)!==null&&h!==void 0?h:0,s++)}}}catch(y){l.e(y)}finally{l.f()}return{data:o,count:s}}},{key:"renderWebGLLabels",value:function(t,e){var r=this.internals,i=r.nodeDataCache,o=r.labelProgram,s=r.primitives,l=r.nodeDataTexture,u=[],d=M(this.displayedNodeLabels),h;try{for(d.s();!(h=d.n()).done;){var c=h.value;if(!this.renderedNodeLabels.has(c)){var g=i[c];e&&g.labelDepth!==e||(this.renderedNodeLabels.add(c),u.push(c))}}}catch(fe){d.e(fe)}finally{d.f()}if(u.length!==0){if(this.labelsDirty){for(var p,y,v,f=0,b=0,_=u.length;b<_;b++){var m=i[u[b]];f+=m.label.length}o.reallocate(f);for(var x=14,T=(p=s==null||(y=s.nodes)===null||y===void 0||(y=y.label)===null||y===void 0?void 0:y.margin)!==null&&p!==void 0?p:xt,w=Ce.labelPosition,S=(s==null||(v=s.nodes)===null||v===void 0||(v=v.label)===null||v===void 0||(v=v.font)===null||v===void 0?void 0:v.family)||"sans-serif",A=new Map,R=0,k=0,D=u.length;k<D;k++){var F,L,N,G,z=u[k],P=i[z],C=P.labelFont||S,I=A.get(C);if(I===void 0){var H=sn(C),U=H.family,$=H.weight,X=H.style;I=o.registerFont(U,$,X),A.set(C,I)}var K={text:P.label,x:P.x,y:P.y,size:(F=P.labelSize)!==null&&F!==void 0?F:x,color:P.labelColor,nodeSize:P.size,margin:T,position:(L=P.labelPosition)!==null&&L!==void 0?L:w,hidden:!1,forceLabel:Me(P),type:"default",zIndex:(N=P.zIndex)!==null&&N!==void 0?N:0,parentType:"node",parentKey:z,fontKey:I,labelAngle:(G=P.labelAngle)!==null&&G!==void 0?G:0,nodeIndex:l.getIndex(z)},ne=o.processLabel(z,R,K);R+=ne}o.invalidateBuffers()}o.render(t)}}},{key:"renderBackdrops",value:function(t,e){var r=this.internals,i=r.backdropProgram,o=r.nodeDataCache,s=r.nodesWithBackdrop,l=r.attachmentManager,u=r.pixelRatio,d=r.nodeDataTexture,h=[],c=M(s),g;try{for(c.s();!(g=c.n()).done;){var p,y=g.value,v=o[y];if(!(!v||v.visibility==="hidden")&&!(e&&v.depth!==e)){var f=(p=d==null?void 0:d.getIndex(y))!==null&&p!==void 0?p:-1;f<0||h.push({key:y,nodeIndex:f})}}}catch(Fe){c.e(Fe)}finally{c.f()}if(h.length!==0){i.reallocate(h.length);for(var b=0;b<h.length;b++){var _,m,x,T,w,S,A,R,k=h[b],D=k.key,F=k.nodeIndex,L=o[D],N=this.displayedNodeLabels.has(D),G=N?this.measureNodeLabel(L):{width:0,height:0,textHeight:0},z=G.textHeight,P=G.width,C=G.height,I=0,H=0;if(N&&L.labelAttachment&&l){var U=l.getEntry(D,L.labelAttachment);if(U){var $=L.labelAttachmentPlacement||"below";if($==="below"||$==="above"){var X=U.height/u;C+=X+Ne,P=Math.max(P,U.width/u),H=$==="below"?(X+Ne)/2:-(X+Ne)/2}else{var K=U.width/u;P+=K+Ne,C=Math.max(C,U.height/u),I=$==="right"?(K+Ne)/2:-(K+Ne)/2}}}var ne=L.backdropColor?ft(L.backdropColor):[255,255,255,255],fe=L.backdropShadowColor?ft(L.backdropShadowColor):[0,0,0,128],be=ne.map(function(Fe){return Fe/255}),rt=fe.map(function(Fe){return Fe/255}),Et=(_=L.backdropShadowBlur)!==null&&_!==void 0?_:12,He=(m=L.backdropPadding)!==null&&m!==void 0?m:6,hi=L.backdropBorderColor?ft(L.backdropBorderColor):[0,0,0,0],ci=hi.map(function(Fe){return Fe/255}),fi=(x=L.backdropBorderWidth)!==null&&x!==void 0?x:0,gi=(T=L.backdropCornerRadius)!==null&&T!==void 0?T:0,aa=(w=L.backdropLabelPadding)!==null&&w!==void 0?w:-1,pi=aa<0?He:aa,vi=(S=bd[(A=L.backdropArea)!==null&&A!==void 0?A:"both"])!==null&&S!==void 0?S:0,mi={key:D,nodeIndex:F,label:L.label,labelWidth:P,labelHeight:C,textHeight:z,type:"default",position:L.labelPosition||Ce.labelPosition,labelAngle:(R=L.labelAngle)!==null&&R!==void 0?R:0,backdropColor:be,backdropShadowColor:rt,backdropShadowBlur:Et,backdropPadding:He,backdropBorderColor:ci,backdropBorderWidth:fi,backdropCornerRadius:gi,backdropLabelPadding:pi,backdropArea:vi,labelBoxOffset:[I,H]};i.processBackdrop(b,mi)}i.invalidateBuffers(),i.render(t)}}},{key:"renderLabelBackgrounds",value:function(t,e){var r=this.internals,i=r.labelBackgroundProgram,o=r.nodeDataCache,s=r.nodeDataTexture,l=ue.nodeLabel.writesPickingThisFrame(this.internals),u=[],d=M(this.displayedNodeLabels),h;try{for(d.s();!(h=d.n()).done;){var c=h.value,g=o[c];!g||g.visibility==="hidden"||e&&g.labelDepth!==e||!l&&!g.labelBackgroundColor||u.push(c)}}catch(F){d.e(F)}finally{d.f()}if(u.length!==0){i.reallocate(u.length);for(var p=0;p<u.length;p++){var y,v,f,b,_=u[p],m=o[_],x=(y=s==null?void 0:s.getIndex(_))!==null&&y!==void 0?y:-1;if(!(x<0)){var T=this.measureNodeLabel(m),w=T.width,S=T.height,A=T.textHeight,R=Be(this.internals.pickingState,"nodeLabel",_)||Be(this.internals.pickingState,"node",_),k=m.labelBackgroundColor?Se(m.labelBackgroundColor):Se("transparent"),D={nodeIndex:x,id:Ot(R),color:k,labelWidth:w,labelHeight:S,textHeight:A,positionMode:(v=gt[m.labelPosition||Ce.labelPosition])!==null&&v!==void 0?v:0,labelAngle:(f=m.labelAngle)!==null&&f!==void 0?f:0,padding:(b=m.labelBackgroundPadding)!==null&&b!==void 0?b:Aa};i.processLabelBackground(p,D)}}i.invalidateBuffers(),i.render(t)}}},{key:"cacheAttachments",value:function(t){var e=this.internals,r=e.attachmentManager,i=e.pixelRatio,o=e.nodeDataCache,s=e.nodesWithBackdrop,l=e.graph;if(r){var u=M(s),d;try{for(u.s();!(d=u.n()).done;){var h=d.value;if(this.displayedNodeLabels.has(h)){var c=o[h];if(!(!c||c.visibility==="hidden")&&!(t&&c.depth!==t)&&c.labelAttachment){var g=l.getNodeAttributes(h),p=this.measureNodeLabel(c),y=p.width,v=p.height,f={node:h,attributes:g,pixelRatio:i,labelWidth:y,labelHeight:v};r.renderAttachment(h,c.labelAttachment,f)}}}}catch(b){u.e(b)}finally{u.f()}r.regenerateAtlas()}}},{key:"renderAttachments",value:function(t,e){var r=this.internals,i=r.attachmentManager,o=r.attachmentProgram,s=r.nodeDataCache,l=r.nodesWithBackdrop,u=r.pixelRatio,d=r.nodeDataTexture;if(!(!i||!o)){var h=0;o.reallocateAttachments(l.size);var c=M(l),g;try{for(c.s();!(g=c.n()).done;){var p,y,v,f,b=g.value;if(this.displayedNodeLabels.has(b)){var _=s[b];if(!(!_||_.visibility==="hidden")&&!(e&&_.labelDepth!==e)&&_.labelAttachment){var m=i.getEntry(b,_.labelAttachment);if(m){var x=(p=d==null?void 0:d.getIndex(b))!==null&&p!==void 0?p:-1;if(!(x<0)){var T=this.measureNodeLabel(_),w=T.width,S=T.height,A=T.textHeight,R=(y=Ys[_.labelAttachmentPlacement||"below"])!==null&&y!==void 0?y:0;o.processAttachment(h,{nodeIndex:x,atlasX:m.x,atlasY:m.y,atlasW:m.width,atlasH:m.height,attachWidth:m.width/u,attachHeight:m.height/u,positionMode:(v=gt[_.labelPosition||Ce.labelPosition])!==null&&v!==void 0?v:0,attachmentPlacement:R,labelWidth:w,labelHeight:S,textHeight:A,labelAngle:(f=_.labelAngle)!==null&&f!==void 0?f:0}),h++}}}}}}catch(k){c.e(k)}finally{c.f()}h!==0&&(o.reallocateAttachments(h),i.bindTexture(Qn),o.invalidateBuffers(),o.render(t))}}},{key:"computeDisplayedEdgeLabels",value:function(){var t=this.internals,e=t.graph,r=t.stateManager,i=t.settings,o=t.edgesWithForcedLabels,s=r.getHighlightedNodes(),l=i.edgeLabelAnchors==="allNodes"?new Set(this.edgeAnchorGrid.getLabelsToDisplay(this.internals.getCameraState().ratio,i.labelDensity)):this.displayedNodeLabels,u=r.hovered,d=md({graph:e,hoveredNode:(u==null?void 0:u.kind)==="node"?u.key:null,displayedNodeLabels:l,highlightedNodes:s});xa(d,o),this.edgeLabelCandidates=d,this.displayedEdgeLabels=new Set}},{key:"filterEdgeLabelsForDepth",value:function(t){for(var e=this.internals,r=e.graph,i=e.nodeDataCache,o=e.edgeDataCache,s=[],l=new Set,u=0,d=this.edgeLabelCandidates.length;u<d;u++){var h=this.edgeLabelCandidates[u];if(!l.has(h)){l.add(h);var c=r.extremities(h),g=i[c[0]],p=i[c[1]],y=o[h];!y||!g||!p||y.visibility==="hidden"||y.labelVisibility==="hidden"||g.visibility==="hidden"||p.visibility==="hidden"||t&&y.labelDepth!==t||y.label&&s.push(h)}}return s}},{key:"renderEdgeLabels",value:function(t,e){var r=this.internals,i=r.graph,o=r.nodeDataCache,s=r.edgeDataCache,l=r.primitives,u=r.edgeLabelProgram,d=r.nodeDataTexture,h=r.edgeDataTexture,c=this.filterEdgeLabelsForDepth(e),g=M(c),p;try{for(g.s();!(p=g.n()).done;){var y=p.value;this.displayedEdgeLabels.add(y)}}catch(K){g.e(K)}finally{g.f()}if(c.length!==0){if(this.labelsDirty){var v,f,b=0,_=M(c),m;try{for(_.s();!(m=_.n()).done;){var x=m.value;b+=s[x].label.length}}catch(K){_.e(K)}finally{_.f()}u.reallocate(b);var T=(v=l==null||(f=l.edges)===null||f===void 0||(f=f.label)===null||f===void 0?void 0:f.margin)!==null&&v!==void 0?v:5,w="over",S=0,A=M(c),R;try{for(A.s();!(R=A.n()).done;){var k,D,F=R.value,L=i.extremities(F),N=L[0],G=L[1],z=o[N],P=o[G],C=s[F],I=d.getIndex(N),H=d.getIndex(G),U=h.getIndex(F),$={text:C.label,x:(z.x+P.x)/2,y:(z.y+P.y)/2,size:Ya,color:C.labelColor,nodeSize:0,nodeIndex:-1,margin:T,position:(k=C.labelPosition)!==null&&k!==void 0?k:w,hidden:!1,forceLabel:Me(C),type:"default",zIndex:(D=C.zIndex)!==null&&D!==void 0?D:0,parentType:"edge",parentKey:F,fontKey:"",labelAngle:0,sourceX:z.x,sourceY:z.y,targetX:P.x,targetY:P.y,sourceSize:z.size,targetSize:P.size,sourceShape:z.shape||"circle",targetShape:P.shape||"circle",edgeSize:C.size,offset:0,edgeAttributes:C,sourceNodeIndex:I,targetNodeIndex:H,edgeIndex:U},X=u.processEdgeLabel(F,S,$);S+=X}}catch(K){A.e(K)}finally{A.f()}u.invalidateBuffers()}u.render(t)}}},{key:"renderEdgeLabelBackgrounds",value:function(t,e){var r,i,o=this.internals,s=o.edgeLabelBackgroundProgram,l=o.edgeLabelProgram,u=o.edgeDataCache,d=o.primitives,h=o.edgeDataTexture;if(h){var c=ue.edgeLabel.writesPickingThisFrame(this.internals),g=(r=d==null||(i=d.edges)===null||i===void 0||(i=i.label)===null||i===void 0?void 0:i.margin)!==null&&r!==void 0?r:5,p="over",y=this.filterEdgeLabelsForDepth(e),v=[],f=M(y),b;try{for(f.s();!(b=f.n()).done;){var _=b.value;!c&&!u[_].labelBackgroundColor||v.push(_)}}catch(z){f.e(z)}finally{f.f()}if(v.length!==0){s.reallocate(v.length);for(var m=0;m<v.length;m++){var x,T,w,S=v[m],A=u[S],R=A.label,k=l.measureLabelAtlasWidth(R),D=(x=A.labelPosition)!==null&&x!==void 0?x:p,F=typeof D=="string"&&(T=yd[D])!==null&&T!==void 0?T:0,L=Be(this.internals.pickingState,"edgeLabel",S)||Be(this.internals.pickingState,"edge",S),N=A.labelBackgroundColor?Se(A.labelBackgroundColor):Se("transparent"),G={edgeIndex:h.getIndex(S),baseFontSize:Ya,totalTextWidth:k,positionMode:F,margin:g,padding:(w=A.labelBackgroundPadding)!==null&&w!==void 0?w:xd,color:N,id:Ot(L),edgeAttributes:A};s.processEdgeLabelBackground(m,S,G)}s.invalidateBuffers(),s.render(t)}}}}])}(),Td=function(){function a(n,t,e,r){Y(this,a),E(this,"nodeStates",new Map),E(this,"edgeStates",new Map),E(this,"hovered",null),E(this,"dirtyNodes",new Set),E(this,"dirtyEdges",new Set),E(this,"graphStateChanged",!1),E(this,"graphStateFlagsDirty",!1),this.scheduleRefresh=n,this.customNodeStateDefaults=t,this.customEdgeStateDefaults=e,this.customGraphStateDefaults=r,this.graphState=fa(r)}return Z(a,[{key:"getNodeState",value:function(t){t=""+t;var e=this.nodeStates.get(t);return e||(e=ls(this.customNodeStateDefaults),this.nodeStates.set(t,e)),e}},{key:"getEdgeState",value:function(t){t=""+t;var e=this.edgeStates.get(t);return e||(e=us(this.customEdgeStateDefaults),this.edgeStates.set(t,e)),e}},{key:"getGraphState",value:function(){return this.flushGraphStateFlags(),this.graphState}},{key:"getHighlightedNodes",value:function(){var t=new Set,e=M(this.nodeStates),r;try{for(e.s();!(r=e.n()).done;){var i=ee(r.value,2),o=i[0],s=i[1];s.isHighlighted&&t.add(o)}}catch(l){e.e(l)}finally{e.f()}return t}},{key:"setNodeState",value:function(t,e){t=""+t;var r=this.getNodeState(t);if(st(r,e)){var i=W(W({},r),e);this.nodeStates.set(t,i),this.dirtyNodes.add(t),this.updateHoveredNodeTracking(t,r,i),this.graphStateFlagsDirty=!0,this.scheduleRefresh()}}},{key:"setEdgeState",value:function(t,e){t=""+t;var r=this.getEdgeState(t);if(st(r,e)){var i=W(W({},r),e);this.edgeStates.set(t,i),this.dirtyEdges.add(t),this.updateHoveredEdgeTracking(t,r,i),this.graphStateFlagsDirty=!0,this.scheduleRefresh()}}},{key:"setGraphState",value:function(t){if(st(this.graphState,t)){var e=W(W({},this.graphState),t);e.isIdle=!e.isPanning&&!e.isZooming&&!e.isDragging,this.graphState=e,this.graphStateChanged=!0,this.scheduleRefresh()}}},{key:"setNodesState",value:function(t,e){var r=!1,i=M(t),o;try{for(i.s();!(o=i.n()).done;){var s=o.value;s=""+s;var l=this.getNodeState(s);if(st(l,e)){var u=W(W({},l),e);this.nodeStates.set(s,u),this.dirtyNodes.add(s),this.updateHoveredNodeTracking(s,l,u),r=!0}}}catch(d){i.e(d)}finally{i.f()}r&&(this.graphStateFlagsDirty=!0,this.scheduleRefresh())}},{key:"setEdgesState",value:function(t,e){var r=!1,i=M(t),o;try{for(i.s();!(o=i.n()).done;){var s=o.value;s=""+s;var l=this.getEdgeState(s);if(st(l,e)){var u=W(W({},l),e);this.edgeStates.set(s,u),this.dirtyEdges.add(s),this.updateHoveredEdgeTracking(s,l,u),r=!0}}}catch(d){i.e(d)}finally{i.f()}r&&(this.graphStateFlagsDirty=!0,this.scheduleRefresh())}},{key:"removeNode",value:function(t){this.nodeStates.delete(t),this.dirtyNodes.delete(t),this.clearHoveredFor("node",t)}},{key:"removeEdge",value:function(t){this.edgeStates.delete(t),this.dirtyEdges.delete(t),this.clearHoveredFor("edge",t)}},{key:"pruneNodes",value:function(t){var e=M(this.nodeStates.keys()),r;try{for(e.s();!(r=e.n()).done;){var i=r.value;t(i)||this.removeNode(i)}}catch(o){e.e(o)}finally{e.f()}}},{key:"pruneEdges",value:function(t){var e=M(this.edgeStates.keys()),r;try{for(e.s();!(r=e.n()).done;){var i=r.value;t(i)||this.removeEdge(i)}}catch(o){e.e(o)}finally{e.f()}}},{key:"clearNodes",value:function(){this.nodeStates.clear(),this.dirtyNodes.clear(),this.clearHoveredForKinds(hn("node"))}},{key:"clearEdges",value:function(){this.edgeStates.clear(),this.dirtyEdges.clear(),this.clearHoveredForKinds(hn("edge"))}},{key:"resetGraphState",value:function(){this.graphState=fa(this.customGraphStateDefaults),this.graphStateChanged=!1,this.graphStateFlagsDirty=!1}},{key:"clearDirtyTracking",value:function(){this.dirtyNodes.clear(),this.dirtyEdges.clear(),this.graphStateChanged=!1}},{key:"setHovered",value:function(t){this.hovered=t}},{key:"clearHoveredFor",value:function(t,e){this.hovered&&this.hovered.key===e&&hn(t).includes(this.hovered.kind)&&(this.hovered=null)}},{key:"clearHoveredForKinds",value:function(t){this.hovered&&t.includes(this.hovered.kind)&&(this.hovered=null)}},{key:"updateGraphStateFromNodes",value:function(){var t,e=!1,r=!1,i=!1,o=M(this.nodeStates),s;try{for(o.s();!(s=o.n()).done;){var l=ee(s.value,2),u=l[1];if(u.isHovered&&(e=!0),u.isHighlighted&&(r=!0),u.isDragged&&(i=!0),e&&r&&i)break}}catch(h){o.e(h)}finally{o.f()}!e&&((t=this.hovered)===null||t===void 0?void 0:t.kind)==="edge"&&(e=!0);var d=!this.graphState.isPanning&&!this.graphState.isZooming&&!i;(this.graphState.hasHovered!==e||this.graphState.hasHighlighted!==r||this.graphState.isDragging!==i||this.graphState.isIdle!==d)&&(this.graphStateChanged=!0),this.graphState=W(W({},this.graphState),{},{hasHovered:e,hasHighlighted:r,isDragging:i,isIdle:d})}},{key:"updateGraphStateFromEdges",value:function(){var t,e=((t=this.hovered)===null||t===void 0?void 0:t.kind)==="node";if(!e){var r=M(this.edgeStates),i;try{for(r.s();!(i=r.n()).done;){var o=ee(i.value,2),s=o[1];if(s.isHovered){e=!0;break}}}catch(l){r.e(l)}finally{r.f()}}this.graphState.hasHovered!==e&&(this.graphStateChanged=!0),this.graphState=W(W({},this.graphState),{},{hasHovered:e})}},{key:"flushGraphStateFlags",value:function(){this.graphStateFlagsDirty&&(this.updateGraphStateFromNodes(),this.updateGraphStateFromEdges(),this.graphStateFlagsDirty=!1)}},{key:"updateHoveredNodeTracking",value:function(t,e,r){var i;if(e.isHovered!==r.isHovered)if(r.isHovered){var o;if(((o=this.hovered)===null||o===void 0?void 0:o.kind)==="node"&&this.hovered.key!==t){var s=this.hovered.key,l=this.getNodeState(s);this.nodeStates.set(s,W(W({},l),{},{isHovered:!1})),this.dirtyNodes.add(s)}this.hovered={kind:"node",key:t}}else((i=this.hovered)===null||i===void 0?void 0:i.kind)==="node"&&this.hovered.key===t&&(this.hovered=null)}},{key:"updateHoveredEdgeTracking",value:function(t,e,r){var i;if(e.isHovered!==r.isHovered)if(r.isHovered){var o;if(((o=this.hovered)===null||o===void 0?void 0:o.kind)==="edge"&&this.hovered.key!==t){var s=this.hovered.key,l=this.getEdgeState(s);this.edgeStates.set(s,W(W({},l),{},{isHovered:!1})),this.dirtyEdges.add(s)}this.hovered={kind:"edge",key:t}}else((i=this.hovered)===null||i===void 0?void 0:i.kind)==="edge"&&this.hovered.key===t&&(this.hovered=null)}}])}(),Za=1,Qa=2,Ja=3,er=4,Sd=function(a){function n(t,e){var r,i,o,s,l,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Y(this,n),l=ie(this,n),E(l,"nodeReducer",null),E(l,"edgeReducer",null),E(l,"stageCanvas",null),E(l,"mouseLayer",null),E(l,"gestureHint",null),E(l,"extraElements",{}),E(l,"webGLContext",null),E(l,"pickingFrameBuffer",null),E(l,"pickingTexture",null),E(l,"pickingDepthBuffer",null),E(l,"activeListeners",{}),E(l,"nodeVariableEntries",[]),E(l,"edgeVariableEntries",[]),E(l,"edgePathsByName",new Map),E(l,"nodeProgramIndex",{}),E(l,"edgeProgramIndex",{}),E(l,"edgeTextureIndexCache",{}),E(l,"nodeGraphCoords",{}),E(l,"nodeExtent",{x:[0,1],y:[0,1]}),E(l,"matrix",xe()),E(l,"invMatrix",xe()),E(l,"correctionRatio",1),E(l,"frameId",0),E(l,"customBBox",null),E(l,"gpuTimerExt",void 0),E(l,"activeGpuTimerQuery",null),E(l,"pendingGpuTimerQueries",[]),E(l,"normalizationFunction",_n({x:[0,1],y:[0,1]})),E(l,"graphToViewportRatio",1),E(l,"pickingState",Zu()),E(l,"prevNodeVisibilities",{}),E(l,"width",0),E(l,"height",0),E(l,"autoRescaleFrozen",!1),E(l,"stylesDeclaration",null),E(l,"resolvedStageStyle",{}),E(l,"renderFrame",null),E(l,"contextLost",!1),E(l,"pendingProcess","full"),E(l,"needToRefreshState",!1),E(l,"checkEdgesEventsFrame",null),E(l,"edgeStyleAnalysis",{dependency:"static",xAttribute:null,yAttribute:null}),E(l,"depthLayers",j(xn)),E(l,"customLayerPrograms",new Map),E(l,"nodeShapeSlug",null),E(l,"sdfAtlas",null),E(l,"depthRanges",{nodes:{},edges:{}}),E(l,"nodeBaseDepth",{}),E(l,"edgeBaseDepth",{});var d=u.primitives,h=u.styles,c=u.settings,g=c===void 0?{}:c,p=u.nodeReducer,y=u.edgeReducer,v=u.customNodeState,f=u.customEdgeState,b=u.customGraphState;l.stateManager=new Td(function(){return l.scheduleStateRefresh()},v,f,b);var _=d??_s;l.stylesDeclaration=h?{nodes:(r=h.nodes)!==null&&r!==void 0?r:tn.nodes,edges:(i=h.edges)!==null&&i!==void 0?i:tn.edges,stage:h.stage}:tn,l.nodeReducer=p??null,l.edgeReducer=y??null;var m=ga(l.stylesDeclaration.nodes);l.nodeReducer&&(m.dependency="graph-state"),l.edgeStyleAnalysis=ga(l.stylesDeclaration.edges),l.edgeReducer&&(l.edgeStyleAnalysis.dependency="graph-state"),l.stylesDeclaration.stage&&(l.resolvedStageStyle=ya(l.stylesDeclaration.stage,l.stateManager.graphState));var x=Ds(g);if(on(x),x.enableNodeDrag){var T=m.xAttribute,w=m.yAttribute;if((!T||!w)&&!x.dragPositionToAttributes)throw new Error('Sigma: `enableNodeDrag` is true but position attribute names could not be inferred from styles. Either use attribute bindings for x/y in your node styles (e.g. `x: { attribute: "x" }`), or provide a `dragPositionToAttributes` setting.')}if(Rs(t),!(e instanceof HTMLElement))throw new Error("Sigma: container should be an html element.");l.container=e,l.edgeGroups=new Yu(t,function(P,C){for(var I=0;I<P.length;I++){var H=l.stateManager.getEdgeState(P[I]);H.parallelIndex=I,H.parallelCount=C}});var S=new Ku(t,l.viewportToGraph.bind(l),l.setNodesState.bind(l),function(P,C){return l.emit(P,C)});if(l.depthLayers=(o=_.depthLayers)!==null&&o!==void 0?o:j(xn),!(h!=null&&h.nodes)&&!bn.every(function(P){return l.depthLayers.includes(P)}))throw new Error("Sigma: depthLayers must include ".concat(bn.join(", ")," for the built-in node styles."));if(!(h!=null&&h.edges)&&!yn.every(function(P){return l.depthLayers.includes(P)}))throw new Error("Sigma: depthLayers must include ".concat(yn.join(", ")," for the built-in edge styles."));l.itemBuckets={nodes:new za(l.depthLayers),edges:new za(l.depthLayers)},l.initWebGLContext(),l.mouseLayer=yt("div",{position:"absolute",touchAction:"none",userSelect:"none"},{class:"sigma-mouse"}),l.container.appendChild(l.mouseLayer),l.resolvedStageStyle.background&&(l.container.style.backgroundColor=l.resolvedStageStyle.background),l.resolvedStageStyle.cursor&&(l.container.style.cursor=l.resolvedStageStyle.cursor);var A=new Fu(l.webGLContext),R=new Ma(l.webGLContext,{channels:1}),k=new zu(l.webGLContext),D=new Ma(l.webGLContext,{channels:4}),F=l.webGLContext,L=new vd({gl:F,getFrameBuffer:function(){return l.pickingFrameBuffer},getPixelRatio:function(){return l.internals.pixelRatio},getDownSizingRatio:function(){return l.internals.settings.pickingDownSizingRatio},isRenderPending:function(){return l.renderFrame!==null},onIndex:function(C,I){var H;return li(l.internals,(H=l.pickingState.lookup[C])!==null&&H!==void 0?H:null,I)}}),N=l.initPrograms(_,x),G=_==null||(s=_.nodes)===null||s===void 0?void 0:s.labelAttachments,z=null;return G&&Object.keys(G).length>0&&(z=new Pu(F,G,function(){return l.scheduleRender()})),l.internals=W(W({nodeDataCache:{},edgeDataCache:{},nodesWithForcedLabels:new Set,nodesWithBackdrop:new Set,edgesWithForcedLabels:new Set,settings:x,primitives:_,pixelRatio:Tn(),graph:t,stateManager:l.stateManager,dragManager:S,hoverResolver:L,nodeStyleAnalysis:m,pickingState:l.pickingState},N),{},{attachmentManager:z,nodeDataTexture:A,nodeFrameTexture:R,edgeDataTexture:k,edgeFrameTexture:D,getDimensions:function(){return l.getDimensions()},getGraphDimensions:function(){return l.getGraphDimensions()},getStagePadding:function(){return l.getStagePadding()},getCameraState:function(){return l.camera.getState()},getHitAtPosition:function(C){return l.getHitAtPosition(C)},setNodeState:function(C,I){return l.setNodeState(C,I)},setEdgeState:function(C,I){return l.setEdgeState(C,I)},updateContainerCursor:function(){return l.updateContainerCursor()},scheduleRefresh:function(){return l.scheduleRefresh()},viewportToFramedGraph:function(C){return l.viewportToFramedGraph(C)},viewportToGraph:function(C){return l.viewportToGraph(C)},framedGraphToViewport:function(C){return l.framedGraphToViewport(C)},scaleSize:function(C){return l.scaleSize(C)},emit:function(C,I){return l.emit(C,I)}}),l.labelRenderer=new _d(l.internals),l.resize(),l.initializeWebGLLabels(),l.camera=new Oa,l.bindCameraHandlers(),l.mouseCaptor=new Vu(l.mouseLayer,l),l.mouseCaptor.setSettings(l.internals.settings),l.touchCaptor=new qu(l.mouseLayer,l),l.touchCaptor.setSettings(l.internals.settings),l.bindEventHandlers(),l.bindGraphHandlers(),l.handleSettingsUpdate(),l.refresh(),l}return oe(n,a),Z(n,[{key:"initializeWebGLLabels",value:function(){this.sdfAtlas=new Ze,this.sdfAtlas.registerFont({family:"sans-serif",weight:"normal",style:"normal"})}},{key:"resetWebGLTexture",value:function(){var e=this.webGLContext;if(!this.pickingFrameBuffer)return this;var r=Math.ceil(this.width*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio),i=Math.ceil(this.height*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio);e.bindFramebuffer(e.FRAMEBUFFER,this.pickingFrameBuffer),this.pickingTexture&&e.deleteTexture(this.pickingTexture);var o=e.createTexture();o&&(e.bindTexture(e.TEXTURE_2D,o),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,r,i,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),this.pickingTexture=o),this.pickingDepthBuffer&&e.deleteRenderbuffer(this.pickingDepthBuffer);var s=e.createRenderbuffer();return s&&(e.bindRenderbuffer(e.RENDERBUFFER,s),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,r,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,s),this.pickingDepthBuffer=s),e.bindFramebuffer(e.FRAMEBUFFER,null),this}},{key:"bindCameraHandlers",value:function(){var e=this;return this.activeListeners.camera=function(){e.refreshMatrices(),e.labelRenderer.labelsDirty=!0,e.scheduleRender()},this.activeListeners.cameraAnimationStart=function(r){var i=r.from,o=r.to;i.ratio!==o.ratio&&e.stateManager.setGraphState({isZooming:!0})},this.activeListeners.cameraAnimationEnd=function(){e.stateManager.setGraphState({isZooming:!1})},this.camera.on("updated",this.activeListeners.camera),this.camera.on("animationStart",this.activeListeners.cameraAnimationStart),this.camera.on("animationEnd",this.activeListeners.cameraAnimationEnd),this}},{key:"unbindCameraHandlers",value:function(){return this.camera.removeListener("updated",this.activeListeners.camera),this.camera.removeListener("animationStart",this.activeListeners.cameraAnimationStart),this.camera.removeListener("animationEnd",this.activeListeners.cameraAnimationEnd),this}},{key:"getHitAtPosition",value:function(e){var r;if(this.contextLost)return null;var i=this.webGLContext;i.bindFramebuffer(i.FRAMEBUFFER,this.pickingFrameBuffer);var o=Io(i,this.pickingFrameBuffer,e.x,e.y,this.internals.pixelRatio,this.internals.settings.pickingDownSizingRatio),s=Dr.apply(void 0,j(o));return(r=this.pickingState.lookup[s])!==null&&r!==void 0?r:null}},{key:"bindEventHandlers",value:function(){return rd(this.internals,this.mouseCaptor,this.touchCaptor,this.activeListeners),this}},{key:"bindGraphHandlers",value:function(){return id({graph:this.internals.graph,edgeGroups:this.edgeGroups,addNode:this.addNode.bind(this),updateNode:this.updateNode.bind(this),removeNode:this.removeNode.bind(this),addEdge:this.addEdge.bind(this),updateEdge:this.updateEdge.bind(this),removeEdge:this.removeEdge.bind(this),clearEdgeState:this.clearEdgeState.bind(this),clearNodeState:this.clearNodeState.bind(this),clearEdgeIndices:this.clearEdgeIndices.bind(this),clearNodeIndices:this.clearNodeIndices.bind(this),refresh:this.refresh.bind(this)},this.activeListeners),this}},{key:"unbindGraphHandlers",value:function(){od(this.internals.graph,this.activeListeners)}},{key:"getNodeShapeId",value:function(e){return this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&e.shape&&e.shape in this.internals.nodeShapeMap?this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[e.shape]]:Bt(e.shape||"circle")}},{key:"processNodes",value:function(){var e=this,r=this.internals.graph,i=this.internals.settings,o=this.getDimensions(),s=i.autoRescale,l=i.autoRescaleContent,u=this.nodeExtent;if(s===!1){var d=o.width,h=o.height;u={x:[-d/2,d/2],y:[-h/2,h/2]}}else(s!=="once"||!this.autoRescaleFrozen)&&(u=this.computeNodeExtent(),l!=="positions"&&!this.customBBox&&(u=dd({extent:u,coords:this.nodeGraphCoords,nodeData:this.internals.nodeDataCache,dimensions:o,stagePadding:this.getStagePadding(),zoomToSizeRatioFunction:i.zoomToSizeRatioFunction,itemSizesReference:i.itemSizesReference,fitLabels:l==="labels",nodeLabelBox:function(H,U){return e.labelRenderer.nodeLabelBox(H,U)}})),s==="once"&&(this.autoRescaleFrozen=!0));this.nodeExtent=u,this.normalizationFunction=_n(this.customBBox||this.nodeExtent);var c=new Oa,g=ze(c.getState(),o,this.getGraphDimensions(),this.getStagePadding());this.labelRenderer.labelGrid.resizeAndClear(o,i.labelGridCellSize),this.labelRenderer.edgeAnchorGrid.resizeAndClear(o,i.labelGridCellSize);var p=i.renderEdgeLabels&&i.edgeLabelAnchors==="allNodes",y=!1;dn(this.pickingState,"node");for(var v=r.nodes(),f=0,b=v.length;f<b;f++){var _=v[f],m=this.internals.nodeDataCache[_],x=this.nodeGraphCoords[_];m.x=x.x,m.y=x.y,this.normalizationFunction.applyTo(m),m.visibility!==this.prevNodeVisibilities[_]&&(y=!0),typeof m.label=="string"&&m.visibility!=="hidden"&&m.labelVisibility!=="hidden"&&this.labelRenderer.labelGrid.add(_,m.size,this.framedGraphToViewport(m,{matrix:g})),p&&m.visibility!=="hidden"&&this.labelRenderer.edgeAnchorGrid.add(_,m.size,this.framedGraphToViewport(m,{matrix:g}))}this.labelRenderer.labelGrid.organize(),this.labelRenderer.edgeAnchorGrid.organize(),this.nodeProgram.reallocate(v.length);var T=0;this.depthRanges.nodes={},this.nodeBaseDepth={};var w=this.internals.nodeDataCache,S=M(this.depthLayers),A;try{for(S.s();!(A=S.n()).done;){var R=A.value,k=this.itemBuckets.nodes.getSorted(R,function(I){return w[I].zIndex});if(k.length!==0){this.depthRanges.nodes[R]=[{offset:T,count:k.length}];var D=M(k),F;try{for(D.s();!(F=D.n()).done;){var L=F.value;this.nodeBaseDepth[L]=R,this.nodeProgram.allocateNode(L),Va(this.pickingState,"node",L),this.addNodeToProgram(L,T++)}}catch(I){D.e(I)}finally{D.f()}}}}catch(I){S.e(I)}finally{S.f()}this.nodeProgram.invalidateBuffers();for(var N=0,G=v.length;N<G;N++)this.prevNodeVisibilities[v[N]]=this.internals.nodeDataCache[v[N]].visibility;this.labelRenderer.processWebGLLabels(v);var z=M(this.customLayerPrograms.values()),P;try{for(z.s();!(P=z.n()).done;){var C=P.value.program;C.cacheData&&C.cacheData()}}catch(I){z.e(I)}finally{z.f()}return y}},{key:"processEdges",value:function(){var e=this.internals.graph,r=e.edges();this.edgeProgram.reallocate(r.length);var i=0;dn(this.pickingState,"edge"),this.depthRanges.edges={},this.edgeBaseDepth={};var o=this.internals.edgeDataCache,s=M(this.depthLayers),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,d=this.itemBuckets.edges.getSorted(u,function(p){return o[p].zIndex});if(d.length!==0){this.depthRanges.edges[u]=[{offset:i,count:d.length}];var h=M(d),c;try{for(h.s();!(c=h.n()).done;){var g=c.value;this.edgeBaseDepth[g]=u,Va(this.pickingState,"edge",g),this.addEdgeToProgram(g,i++)}}catch(p){h.e(p)}finally{h.f()}}}}catch(p){s.e(p)}finally{s.f()}this.edgeProgram.invalidateBuffers()}},{key:"updateNodeDepthRanges",value:function(e,r,i){var o=this.nodeProgramIndex[e];o!==void 0&&(Sa(this.depthRanges.nodes,r,o),Ea(this.depthRanges.nodes,i,o))}},{key:"updateEdgeDepthRanges",value:function(e,r,i){var o=this.edgeProgramIndex[e];o!==void 0&&(Sa(this.depthRanges.edges,r,o),Ea(this.depthRanges.edges,i,o))}},{key:"handleSettingsUpdate",value:function(){var e=this,r=this.internals.settings;return this.camera.minRatio=r.minCameraRatio,this.camera.maxRatio=r.maxCameraRatio,this.camera.enabledZooming=r.enableCameraZooming,this.camera.enabledPanning=r.enableCameraPanning,this.camera.enabledRotation=r.enableCameraRotation,r.cameraPanBoundaries?this.camera.constrainState=function(i){return e.cleanCameraState(i,r.cameraPanBoundaries&&Q(r.cameraPanBoundaries)==="object"?r.cameraPanBoundaries:{})}:this.camera.constrainState=null,this.camera.setState(this.camera.getState()),this.mouseLayer.style.touchAction=r.gestureTarget==="graph"?"none":r.gestureTarget==="shared"?"pan-x pan-y":"auto",r.gestureTarget!=="shared"&&this.gestureHint&&(this.gestureHint.kill(),this.gestureHint=null),this.mouseCaptor.setSettings(this.internals.settings),this.touchCaptor.setSettings(this.internals.settings),this}},{key:"cleanCameraState",value:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.tolerance,o=i===void 0?0:i,s=r.boundaries,l=W({},e),u=s||this.nodeExtent,d=ee(u.x,2),h=d[0],c=d[1],g=ee(u.y,2),p=g[0],y=g[1],v=[this.graphToViewport({x:h,y:p},{cameraState:e}),this.graphToViewport({x:c,y:p},{cameraState:e}),this.graphToViewport({x:h,y},{cameraState:e}),this.graphToViewport({x:c,y},{cameraState:e})],f=1/0,b=-1/0,_=1/0,m=-1/0;v.forEach(function(L){var N=L.x,G=L.y;f=Math.min(f,N),b=Math.max(b,N),_=Math.min(_,G),m=Math.max(m,G)});var x=b-f,T=m-_,w=this.getDimensions(),S=w.width,A=w.height,R=0,k=0;if(x>=S?b<S-o?R=b-(S-o):f>o&&(R=f-o):b>S+o?R=b-(S+o):f<-o&&(R=f+o),T>=A?m<A-o?k=m-(A-o):_>o&&(k=_-o):m>A+o?k=m-(A+o):_<-o&&(k=_+o),R||k){var D=this.viewportToFramedGraph({x:0,y:0},{cameraState:e}),F=this.viewportToFramedGraph({x:R,y:k},{cameraState:e});R=F.x-D.x,k=F.y-D.y,l.x+=R,l.y+=k}return l}},{key:"refreshMatrices",value:function(){var e=this.camera.getState(),r=this.getDimensions(),i=this.getGraphDimensions(),o=this.getStagePadding();this.matrix=ze(e,r,i,o),this.invMatrix=ze(e,r,i,o,!0),this.correctionRatio=Lo(this.matrix,e,r),this.graphToViewportRatio=this.getGraphToViewportRatio()}},{key:"processData",value:function(){var e;this.emit("beforeProcess"),(e=this.internals.attachmentManager)===null||e===void 0||e.clear();var r=W({},this.pickingState.idsByKind),i=this.processNodes();(this.pendingProcess==="full"||i)&&this.processEdges(),Qu(this.pickingState,this.internals),Ju(r,this.pickingState.idsByKind)||this.internals.hoverResolver.invalidate(),this.pendingProcess="none",this.emit("afterProcess")}},{key:"render",value:function(){var e=this;if(this.contextLost)return this;this.emit("beforeRender");var r=function(){return e.internals.hoverResolver.frameRendered(),e.emit("afterRender"),e};if(this.renderFrame&&(cancelAnimationFrame(this.renderFrame),this.renderFrame=null),this.resize(),(this.pendingProcess!=="none"||this.needToRefreshState)&&(this.labelRenderer.labelsDirty=!0),this.pendingProcess!=="none"&&this.processData(),this.needToRefreshState&&this.refreshState(),this.needToRefreshState=!1,this.stateManager.clearDirtyTracking(),this.pendingProcess!=="none"&&this.processData(),this.clear(),this.resetWebGLTexture(),!this.internals.graph.order)return r();var i=this.mouseCaptor,o=this.camera.isAnimating()||i.isMoving||i.draggedEvents||i.currentWheelDirection;this.refreshMatrices(),this.frameId++;var s=this.internals.settings.DEBUG_logRenderStats?this.getDebugPrograms():null;s&&s.forEach(function(U){return U.resetDebugStats()}),this.internals.settings.DEBUG_gpuTimerQueries&&this.beginGpuTimerQuery(),this.internals.nodeFrameTexture.ensureCapacity(this.internals.nodeDataTexture.getCapacity()),this.internals.edgeFrameTexture.ensureCapacity(this.internals.edgeDataTexture.getCapacity());var l=this.getRenderParams(),u=ue.edge.writesPickingThisFrame(this.internals)?l:W(W({},l),{},{pickingFrameBuffer:null});this.labelRenderer.resetFrame();var d=this.webGLContext,h=Math.ceil(this.width*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio),c=Math.ceil(this.height*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio);if(d.bindFramebuffer(d.FRAMEBUFFER,this.pickingFrameBuffer),d.viewport(0,0,h,c),d.clear(d.COLOR_BUFFER_BIT|d.DEPTH_BUFFER_BIT),d.bindFramebuffer(d.FRAMEBUFFER,null),d.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio),d.clear(d.COLOR_BUFFER_BIT|d.DEPTH_BUFFER_BIT),this.internals.nodeDataTexture.upload(),this.internals.edgeDataTexture.upload(),this.nodeProgram.uploadLayerTexture(),this.edgeProgram.uploadAttributeTexture(),this.emit("afterTexturesUpload"),this.internals.nodeDataTexture.bind(Ja),this.internals.edgeDataTexture.bind(er),this.edgeFramePass.run(l,this.internals.edgeFrameTexture,this.internals.edgeDataTexture.getHighWaterMark(),this.edgeProgram.getAttributeTexture(),this.nodeProgram.getAttributeTexture()),this.internals.edgeFrameTexture.bind(Za),this.internals.settings.renderLabels){this.labelRenderer.computeDisplayedNodeLabels();var g=this.labelRenderer.buildFramePassPoints(),p=g.data,y=g.count;this.nodeFramePass.run(p,y,this.internals.nodeFrameTexture,l,this.nodeProgram.getAttributeTexture()),this.internals.nodeFrameTexture.bind(Qa)}this.internals.settings.renderEdgeLabels&&this.labelRenderer.computeDisplayedEdgeLabels();var v=M(this.customLayerPrograms.values()),f;try{for(v.s();!(f=v.n()).done;){var b=f.value.program;b.preRender&&b.preRender(l)}}catch(U){v.e(U)}finally{v.f()}d.bindFramebuffer(d.FRAMEBUFFER,null),d.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio),d.blendFunc(d.ONE,d.ONE_MINUS_SRC_ALPHA);var _=!this.internals.settings.hideLabelsOnMove||!o,m=M(this.depthLayers),x;try{for(m.s();!(x=m.n()).done;){var T=x.value,w=M(this.customLayerPrograms.values()),S;try{for(w.s();!(S=w.n()).done;){var A=S.value;A.depth===T&&A.program.render(l)}}catch(U){w.e(U)}finally{w.f()}var R=this.depthRanges.edges[T];if(R&&(!this.internals.settings.hideEdgesOnMove||!o)){var k=M(R),D;try{for(k.s();!(D=k.n()).done;){var F=D.value,L=F.offset,N=F.count;N>0&&this.edgeProgram.render(u,L,N)}}catch(U){k.e(U)}finally{k.f()}}this.internals.settings.renderEdgeLabels&&_&&(this.labelRenderer.renderEdgeLabelBackgrounds(ue.edgeLabel.writesPickingThisFrame(this.internals)?l:W(W({},l),{},{pickingFrameBuffer:null}),T),this.labelRenderer.renderEdgeLabels(l,T)),this.labelRenderer.cacheAttachments(T),this.labelRenderer.renderBackdrops(W(W({},l),{},{pickingFrameBuffer:null}),T);var G=this.depthRanges.nodes[T];if(G){var z=M(G),P;try{for(z.s();!(P=z.n()).done;){var C=P.value,I=C.offset,H=C.count;H>0&&this.nodeProgram.render(l,I,H)}}catch(U){z.e(U)}finally{z.f()}}_&&(this.labelRenderer.renderAttachments(W(W({},l),{},{pickingFrameBuffer:null}),T),this.labelRenderer.renderLabelBackgrounds(ue.nodeLabel.writesPickingThisFrame(this.internals)?l:W(W({},l),{},{pickingFrameBuffer:null}),T),this.internals.settings.renderLabels&&this.labelRenderer.renderWebGLLabels(l,T))}}catch(U){m.e(U)}finally{m.f()}return this.labelRenderer.labelsDirty=!1,this.internals.settings.DEBUG_displayPickingLayer&&(d.bindFramebuffer(d.READ_FRAMEBUFFER,this.pickingFrameBuffer),d.bindFramebuffer(d.DRAW_FRAMEBUFFER,null),d.blitFramebuffer(0,0,h,c,0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio,d.COLOR_BUFFER_BIT,d.NEAREST)),this.internals.settings.DEBUG_gpuTimerQueries&&this.endGpuTimerQuery(),this.pollGpuTimerQueries(),s&&this.logRenderStats(s),r()}},{key:"getDebugPrograms",value:function(){return[this.nodeProgram,this.edgeProgram,this.internals.labelProgram,this.internals.edgeLabelProgram,this.internals.edgeLabelBackgroundProgram,this.internals.backdropProgram,this.internals.labelBackgroundProgram,this.internals.attachmentProgram].filter(function(e){return e!==null})}},{key:"logRenderStats",value:function(e){var r={},i=M(e),o;try{for(i.s();!(o=i.n()).done;){var s=o.value;r[s.constructor.name]=W({},s.debugStats)}}catch(l){i.e(l)}finally{i.f()}console.log("[sigma] DEBUG_logRenderStats: frame #".concat(this.frameId)),console.table(r)}},{key:"getGpuTimerExtension",value:function(){return this.gpuTimerExt===void 0&&(this.gpuTimerExt=this.webGLContext.getExtension("EXT_disjoint_timer_query_webgl2"),this.gpuTimerExt||console.warn("Sigma: DEBUG_gpuTimerQueries is enabled, but this browser/driver doesn't support EXT_disjoint_timer_query_webgl2.")),this.gpuTimerExt}},{key:"beginGpuTimerQuery",value:function(){var e=this.getGpuTimerExtension();if(e){var r=this.webGLContext,i=r.createQuery();i&&(r.beginQuery(e.TIME_ELAPSED_EXT,i),this.activeGpuTimerQuery=i)}}},{key:"endGpuTimerQuery",value:function(){!this.gpuTimerExt||!this.activeGpuTimerQuery||(this.webGLContext.endQuery(this.gpuTimerExt.TIME_ELAPSED_EXT),this.pendingGpuTimerQueries.push({query:this.activeGpuTimerQuery,frameId:this.frameId}),this.activeGpuTimerQuery=null)}},{key:"pollGpuTimerQueries",value:function(){if(this.pendingGpuTimerQueries.length!==0){var e=this.webGLContext,r=this.gpuTimerExt;if(!r){this.pendingGpuTimerQueries.forEach(function(h){var c=h.query;return e.deleteQuery(c)}),this.pendingGpuTimerQueries=[];return}var i=e.getParameter(r.GPU_DISJOINT_EXT),o=[],s=M(this.pendingGpuTimerQueries),l;try{for(s.s();!(l=s.n()).done;){var u=l.value;if(!e.getQueryParameter(u.query,e.QUERY_RESULT_AVAILABLE)){o.push(u);continue}if(!i){var d=e.getQueryParameter(u.query,e.QUERY_RESULT);console.log("[sigma] DEBUG_gpuTimerQueries: frame #".concat(u.frameId," GPU time = ").concat((d/1e6).toFixed(2),"ms"))}e.deleteQuery(u.query)}}catch(h){s.e(h)}finally{s.f()}this.pendingGpuTimerQueries=o}}},{key:"postEvaluateNode",value:function(e,r,i){var o=e;o.x===void 0&&(o.x=r.x),o.y===void 0&&(o.y=r.y),e.highlighted=i.isHighlighted;for(var s=0,l=this.nodeVariableEntries.length;s<l;s++){var u,d,h=ee(this.nodeVariableEntries[s],2),c=h[0],g=h[1];o[c]=(u=(d=o[c])!==null&&d!==void 0?d:r[c])!==null&&u!==void 0?u:g.default}}},{key:"addNode",value:function(e){var r=this.internals.graph.getNodeAttributes(e),i=this.stateManager.getNodeState(e),o=this.internals.nodeDataCache[e]||{};if(ma(this.stylesDeclaration.nodes,r,i,this.stateManager.graphState,this.internals.graph,o),this.postEvaluateNode(o,r,i),this.nodeReducer){var s=this.nodeReducer(e,o,r,i,this.stateManager.graphState,this.internals.graph);o=W(W({},o),s)}if(typeof o.x!="number"||typeof o.y!="number")throw new Error('Sigma: could not find a valid position (x, y) for node "'.concat(e,'". ')+"Provide coordinates via node attributes, styles, or a nodeReducer.");this.internals.nodeShapeMap?(!o.shape||!(o.shape in this.internals.nodeShapeMap))&&(o.shape=Object.keys(this.internals.nodeShapeMap)[0]):this.nodeShapeSlug&&(o.shape=this.nodeShapeSlug),this.internals.nodeDataCache[e]=o,this.nodeGraphCoords[e]={x:o.x,y:o.y},je(this.internals.nodesWithForcedLabels,e,Me(o)),je(this.internals.nodesWithBackdrop,e,Ta(o)),this.itemBuckets.nodes.set(e,o.depth)}},{key:"updateNode",value:function(e){this.addNode(e);var r=this.internals.nodeDataCache[e];this.normalizationFunction.applyTo(r)}},{key:"removeNode",value:function(e){this.itemBuckets.nodes.remove(e),delete this.internals.nodeDataCache[e],delete this.nodeGraphCoords[e],delete this.nodeProgramIndex[e],this.internals.dragManager.removeNode(e),this.stateManager.removeNode(e),this.internals.nodesWithForcedLabels.delete(e),this.internals.nodesWithBackdrop.delete(e)}},{key:"postEvaluateEdge",value:function(e,r){for(var i=e,o=0,s=this.edgeVariableEntries.length;o<s;o++){var l,u,d=ee(this.edgeVariableEntries[o],2),h=d[0],c=d[1];i[h]=(l=(u=i[h])!==null&&u!==void 0?u:r[h])!==null&&l!==void 0?l:c.default}}},{key:"applyEdgeSpread",value:function(e,r,i){var o;if(!(i.parallelCount<=1)){var s=this.internals.graph.source(e),l=this.internals.graph.target(e),u=s===l,d=u?r.selfLoopPath||r.path:r.parallelPath||r.path,h=d?this.edgePathsByName.get(d):void 0;if(h!=null&&h.spread){var c=(o=r.parallelSpread)!==null&&o!==void 0?o:.25,g=h.spread.compute(i.parallelIndex,i.parallelCount,c);!u&&this.internals.graph.isDirected(e)&&s>l&&(g=-g),r[h.spread.variable]=g}}}},{key:"addEdge",value:function(e){var r=this.internals.graph.getEdgeAttributes(e),i=this.stateManager.getEdgeState(e),o={};if(ba(this.stylesDeclaration.edges,r,i,this.stateManager.graphState,this.internals.graph,o),this.postEvaluateEdge(o,r),this.edgeReducer){var s=this.edgeReducer(e,o,r,i,this.stateManager.graphState,this.internals.graph);o=W(W({},o),s)}this.applyEdgeSpread(e,o,i),this.internals.edgeDataCache[e]=o,je(this.internals.edgesWithForcedLabels,e,Me(o)),this.itemBuckets.edges.set(e,o.depth)}},{key:"updateEdge",value:function(e){this.addEdge(e)}},{key:"removeEdge",value:function(e){this.itemBuckets.edges.remove(e),delete this.internals.edgeDataCache[e],delete this.edgeProgramIndex[e],delete this.edgeTextureIndexCache[e],this.internals.edgeDataTexture.free(e),this.stateManager.removeEdge(e),this.internals.edgesWithForcedLabels.delete(e)}},{key:"clearNodeIndices",value:function(){this.labelRenderer.resetLabelGrid(),this.autoRescaleFrozen||(this.nodeExtent={x:[0,1],y:[0,1]}),this.internals.nodeDataCache={},this.nodeGraphCoords={},this.edgeProgramIndex={},this.internals.nodesWithForcedLabels.clear(),this.internals.nodesWithBackdrop.clear(),this.prevNodeVisibilities={},this.itemBuckets.nodes.clearAll(),this.depthRanges.nodes={},this.nodeBaseDepth={}}},{key:"clearEdgeIndices",value:function(){this.internals.edgeDataCache={},this.edgeProgramIndex={},this.edgeTextureIndexCache={},this.internals.edgesWithForcedLabels.clear(),dn(this.pickingState,"edge"),this.itemBuckets.edges.clearAll(),this.depthRanges.edges={},this.edgeBaseDepth={},this.edgeGroups.clear()}},{key:"clearIndices",value:function(){this.clearEdgeIndices(),this.clearNodeIndices()}},{key:"clearNodeState",value:function(){this.labelRenderer.resetFrame(),this.internals.nodesWithBackdrop.clear(),this.internals.dragManager.clear(),this.autoRescaleFrozen=!1,this.stateManager.clearNodes()}},{key:"clearEdgeState",value:function(){this.labelRenderer.clearEdgeLabels(),this.stateManager.clearEdges()}},{key:"clearState",value:function(){this.clearEdgeState(),this.clearNodeState(),this.stateManager.resetGraphState()}},{key:"addNodeToProgram",value:function(e,r){var i,o=this.internals.nodeDataCache[e];this.internals.nodeDataTexture.allocate(e),(i=this.internals.nodeDataTexture).updateNode.apply(i,[e,o.x,o.y,o.size,this.getNodeShapeId(o)].concat(j(rn(o)),[o.color]));var s=this.internals.nodeDataTexture.getIndex(e);this.nodeProgram.process(Be(this.pickingState,"node",e),r,o,s,e),this.nodeProgramIndex[e]=r}},{key:"addEdgeToProgram",value:function(e,r){var i,o,s=this.internals.edgeDataCache[e],l=this.internals.graph.source(e),u=this.internals.graph.target(e),d=this.internals.edgeDataTexture.allocate(e);this.edgeTextureIndexCache[e]=d;var h=l===u,c=!h&&((i=(o=this.stateManager.getEdgeState(e))===null||o===void 0?void 0:o.parallelCount)!==null&&i!==void 0?i:1)>1,g=this.edgeProgram.resolveEdgeIds(s,h,c),p=g.pathId,y=g.headId,v=g.tailId,f=g.headLengthRatio,b=g.tailLengthRatio;this.internals.edgeDataTexture.updateEdge(e,this.internals.nodeDataTexture.getIndex(l),this.internals.nodeDataTexture.getIndex(u),s.size,f,b,p,y,v),this.edgeProgram.process(Be(this.pickingState,"edge",e),r,this.internals.nodeDataCache[l],this.internals.nodeDataCache[u],s,d),this.edgeProgramIndex[e]=r}},{key:"getRenderParams",value:function(){return{frameId:this.frameId,matrix:this.matrix,invMatrix:this.invMatrix,width:this.width,height:this.height,pixelRatio:this.internals.pixelRatio,zoomRatio:this.camera.ratio,cameraAngle:this.camera.angle,sizeRatio:1/this.scaleSize(),correctionRatio:this.correctionRatio,downSizingRatio:this.internals.settings.pickingDownSizingRatio,minEdgeThickness:this.internals.settings.minEdgeThickness,antiAliasingFeather:this.internals.settings.antiAliasingFeather,nodePickingPadding:this.internals.settings.nodePickingPadding,edgePickingPadding:this.internals.settings.edgePickingPadding,labelPickingPadding:this.internals.settings.labelPickingPadding,nodeDataTextureUnit:Ja,nodeDataTextureWidth:this.internals.nodeDataTexture.getTextureWidth(),nodeFrameTextureUnit:Qa,nodeFrameTextureWidth:this.internals.nodeFrameTexture.getTextureWidth(),edgeDataTextureUnit:er,edgeDataTextureWidth:this.internals.edgeDataTexture.getTextureWidth(),edgeFrameTextureUnit:Za,edgeFrameTextureWidth:this.internals.edgeFrameTexture.getTextureWidth(),pickingFrameBuffer:this.pickingFrameBuffer,labelPixelSnapping:this.internals.settings.labelPixelSnapping?1:0}}},{key:"getStagePadding",value:function(){var e=this.internals.settings,r=e.stagePadding,i=e.autoRescale;return i&&r||0}},{key:"getLayerElement",value:function(e){if(e==="mouse")return this.mouseLayer;var r=this.extraElements[e];if(!r)throw new Error('Sigma: layer "'.concat(e,'" does not exist'));return r}},{key:"initWebGLContext",value:function(){var e=this,r=this.createWebGLContext("stage");this.stageCanvas=this.extraElements.stage,this.webGLContext=r,this.stageCanvas.addEventListener("webglcontextlost",function(i){e.webGLContext&&(i.preventDefault(),e.contextLost=!0,e.renderFrame&&(cancelAnimationFrame(e.renderFrame),e.renderFrame=null),e.gpuTimerExt=void 0,e.activeGpuTimerQuery=null,e.pendingGpuTimerQueries=[],e.emit("webglContextLost"))}),this.stageCanvas.addEventListener("webglcontextrestored",function(){requestAnimationFrame(function(){e.webGLContext&&!e.webGLContext.isContextLost()&&e.restoreWebGLContext()})}),this.initPickingFramebuffer()}},{key:"initPickingFramebuffer",value:function(){var e=this.webGLContext,r=e.createFramebuffer();if(!r)throw new Error("Sigma: cannot create picking frame buffer");e.bindFramebuffer(e.FRAMEBUFFER,r);var i=e.createTexture();if(!i)throw new Error("Sigma: cannot create picking texture");e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0);var o=e.createRenderbuffer();if(!o)throw new Error("Sigma: cannot create picking depth buffer");if(e.bindRenderbuffer(e.RENDERBUFFER,o),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,1,1),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,o),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)throw new Error("Sigma: picking framebuffer is not complete");e.bindFramebuffer(e.FRAMEBUFFER,null),this.pickingFrameBuffer=r,this.pickingTexture=i,this.pickingDepthBuffer=o}},{key:"initPrograms",value:function(e,r){var i=this,o=this.webGLContext,s=Tu(o,this.pickingFrameBuffer,i,e==null?void 0:e.nodes,r.antialiasNodes),l=s.nodeProgram,u=s.labelProgram,d=s.backdropProgram,h=s.labelBackgroundProgram,c=s.attachmentProgram,g=s.framePass,p=s.shapeSlug,y=s.shapeNameToIndex,v=s.shapeGlobalIds,f=s.variables;this.nodeProgram=l,this.nodeFramePass=g,this.nodeVariableEntries=Object.entries(f),p&&(this.nodeShapeSlug=p);var b=Su(o,this.pickingFrameBuffer,i,e==null?void 0:e.edges,r.antialiasEdges,e==null?void 0:e.nodes),_=b.edgeProgram,m=b.labelProgram,x=b.labelBackgroundProgram,T=b.framePass,w=b.variables,S=b.paths;return this.edgeProgram=_,this.edgeFramePass=T,this.edgeVariableEntries=Object.entries(w),this.edgePathsByName=new Map(S.map(function(A){return[A.name,A]})),{labelProgram:u,edgeLabelProgram:m,edgeLabelBackgroundProgram:x,backdropProgram:d,labelBackgroundProgram:h,attachmentProgram:c,nodeShapeMap:y??null,nodeGlobalShapeIds:v??null}}},{key:"restoreWebGLContext",value:function(){var e,r,i,o,s,l=this.internals;this.initPickingFramebuffer(),(e=l.nodeDataTexture)===null||e===void 0||e.restore(),(r=l.nodeFrameTexture)===null||r===void 0||r.restore(),(i=l.edgeDataTexture)===null||i===void 0||i.restore(),(o=l.edgeFrameTexture)===null||o===void 0||o.restore(),(s=l.attachmentManager)===null||s===void 0||s.restore(),l.hoverResolver.reset(),Object.assign(l,this.initPrograms(l.primitives,l.settings));var u=M(this.customLayerPrograms.values()),d;try{for(u.s();!(d=u.n()).done;){var h=d.value;h.program.kill(),h.program=h.factory(this.webGLContext)}}catch(c){u.e(c)}finally{u.f()}this.contextLost=!1,this.emit("webglContextRestored"),this.refresh()}},{key:"createLayer",value:function(e,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.extraElements[e])throw new Error('Sigma: a layer named "'.concat(e,'" already exists'));var o=yt(r,{position:"absolute"},{class:"sigma-".concat(e)});return i.style&&Object.assign(o.style,i.style),this.extraElements[e]=o,"beforeLayer"in i&&i.beforeLayer?this.getLayerElement(i.beforeLayer).before(o):"afterLayer"in i&&i.afterLayer?this.getLayerElement(i.afterLayer).after(o):this.container.appendChild(o),o}},{key:"createCanvas",value:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.createLayer(e,"canvas",r)}},{key:"createWebGLContext",value:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.createCanvas(e,r);r.hidden&&i.remove();var o=i.getContext("webgl2",W({preserveDrawingBuffer:!1,antialias:!1,depth:!0},r));if(!o)throw new Error("Sigma: WebGL 2 is not supported by your browser. Please use a modern browser (Chrome 56+, Firefox 51+, Safari 15+, Edge 79+).");return o.blendFunc(o.ONE,o.ONE_MINUS_SRC_ALPHA),o}},{key:"killLayer",value:function(e){if(e==="stage"||e==="mouse")throw new Error('Sigma: cannot kill built-in layer "'.concat(e,'"'));var r=this.extraElements[e];if(!r)throw new Error("Sigma: cannot kill layer ".concat(e,", which does not exist"));return r.remove(),delete this.extraElements[e],this}},{key:"getWebGLContext",value:function(){if(!this.webGLContext)throw new Error("Sigma: WebGL context is not available");return this.webGLContext}},{key:"getNodeDataTexture",value:function(){if(!this.internals.nodeDataTexture)throw new Error("Sigma: node data texture is not available");return this.internals.nodeDataTexture}},{key:"getNormalizationFunction",value:function(){return this.normalizationFunction}},{key:"addCustomLayerProgram",value:function(e,r,i){var o;if(!this.depthLayers.includes(r))throw new Error('Sigma: cannot add custom layer program at depth "'.concat(r,'", ')+"it must be declared in primitives.depthLayers. Current layers: ".concat(this.depthLayers.join(", ")));return(o=this.customLayerPrograms.get(e))===null||o===void 0||o.program.kill(),this.customLayerPrograms.set(e,{depth:r,factory:i,program:i(this.webGLContext)}),this.refresh(),this}},{key:"removeCustomLayerProgram",value:function(e){var r=this.customLayerPrograms.get(e);return r&&(r.program.kill(),this.customLayerPrograms.delete(e),this.scheduleRender()),this}},{key:"getCamera",value:function(){return this.camera}},{key:"setCamera",value:function(e){return this.camera.cancelAnimation(),this.unbindCameraHandlers(),this.camera=e,this.bindCameraHandlers(),this.scheduleRender(),this}},{key:"getContainer",value:function(){return this.container}},{key:"getGraph",value:function(){return this.internals.graph}},{key:"setGraph",value:function(e){return e===this.internals.graph?this:(this.stateManager.pruneNodes(function(r){return e.hasNode(r)}),this.stateManager.pruneEdges(function(r){return e.hasEdge(r)}),this.unbindGraphHandlers(),this.checkEdgesEventsFrame!==null&&(cancelAnimationFrame(this.checkEdgesEventsFrame),this.checkEdgesEventsFrame=null),this.internals.graph=e,this.autoRescaleFrozen=!1,this.bindGraphHandlers(),this.refresh(),this)}},{key:"getMouseCaptor",value:function(){return this.mouseCaptor}},{key:"getTouchCaptor",value:function(){return this.touchCaptor}},{key:"getDimensions",value:function(){return{width:this.width,height:this.height}}},{key:"getGraphDimensions",value:function(){var e=this.customBBox||this.nodeExtent;return{width:e.x[1]-e.x[0]||1,height:e.y[1]-e.y[0]||1}}},{key:"getNodeDisplayData",value:function(e){var r=this.internals.nodeDataCache[e];return r?Object.assign({},r):void 0}},{key:"getEdgeDisplayData",value:function(e){var r=this.internals.edgeDataCache[e];return r?Object.assign({},r):void 0}},{key:"getNodeState",value:function(e){return this.stateManager.getNodeState(e)}},{key:"getEdgeState",value:function(e){return this.stateManager.getEdgeState(e)}},{key:"getGraphState",value:function(){return this.stateManager.getGraphState()}},{key:"setNodeState",value:function(e,r){return this.stateManager.setNodeState(e,r),this}},{key:"setEdgeState",value:function(e,r){return this.stateManager.setEdgeState(e,r),this}},{key:"setGraphState",value:function(e){return this.stateManager.setGraphState(e),this}},{key:"_setPanning",value:function(e){this.stateManager.setGraphState({isPanning:e})}},{key:"_setZooming",value:function(e){this.stateManager.setGraphState({isZooming:e})}},{key:"_hasNodeDrag",value:function(){var e=this.internals.dragManager;return!!(e.pendingNode||e.session)}},{key:"_showGestureHint",value:function(e){var r=this.internals.settings;r.gestureTarget==="shared"&&(this.gestureHint=this.gestureHint||new pd(this.container),this.gestureHint.show(e,r))}},{key:"setNodesState",value:function(e,r){return this.stateManager.setNodesState(e,r),this}},{key:"setEdgesState",value:function(e,r){return this.stateManager.setEdgesState(e,r),this}},{key:"updateContainerCursor",value:function(){var e=this.stateManager.hovered,r=this.resolvedStageStyle.cursor||"";this.container.style.cursor=e&&ed(this.internals,e)||r}},{key:"refreshStageStyle",value:function(){this.resolvedStageStyle=ya(this.stylesDeclaration.stage,this.stateManager.graphState),this.resolvedStageStyle.background!==void 0&&(this.container.style.backgroundColor=this.resolvedStageStyle.background),this.updateContainerCursor()}},{key:"getNodeDisplayedLabels",value:function(){return new Set(this.labelRenderer.displayedNodeLabels)}},{key:"getEdgeDisplayedLabels",value:function(){return new Set(this.labelRenderer.displayedEdgeLabels)}},{key:"getSettings",value:function(){return W({},this.internals.settings)}},{key:"getSetting",value:function(e){return this.internals.settings[e]}},{key:"getStyles",value:function(){return W({},this.stylesDeclaration)}},{key:"getPrimitives",value:function(){return W({},this.internals.primitives)}},{key:"setSetting",value:function(e,r){return this.internals.settings[e]=r,on(this.internals.settings),this.handleSettingsUpdate(),this.scheduleRefresh(),this}},{key:"updateSetting",value:function(e,r){return this.setSetting(e,r(this.internals.settings[e])),this}},{key:"setSettings",value:function(e){return this.internals.settings=W(W({},this.internals.settings),e),on(this.internals.settings),this.handleSettingsUpdate(),this.scheduleRefresh(),this}},{key:"resize",value:function(e){var r=this.width,i=this.height;if(this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.internals.pixelRatio=Tn(),this.width===0)if(this.internals.settings.allowInvalidContainer)this.width=1;else throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");if(this.height===0)if(this.internals.settings.allowInvalidContainer)this.height=1;else throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");if(!e&&r===this.width&&i===this.height)return this;this.labelRenderer.labelsDirty=!0;for(var o=0,s=[this.mouseLayer].concat(j(Object.values(this.extraElements)));o<s.length;o++){var l=s[o];l.style.width=this.width+"px",l.style.height=this.height+"px"}return this.webGLContext&&(this.stageCanvas.setAttribute("width",this.width*this.internals.pixelRatio+"px"),this.stageCanvas.setAttribute("height",this.height*this.internals.pixelRatio+"px"),this.webGLContext.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio)),this.emit("resize"),this}},{key:"clear",value:function(){return this.emit("beforeClear"),this.webGLContext.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER,null),this.webGLContext.clear(WebGLRenderingContext.COLOR_BUFFER_BIT),this.emit("afterClear"),this}},{key:"scheduleStateRefresh",value:function(){this.needToRefreshState=!0,this.scheduleRender()}},{key:"refreshState",value:function(){var e=this,r;this.stateManager.flushGraphStateFlags();var i=this.stateManager.graphStateChanged&&this.internals.nodeStyleAnalysis.dependency==="graph-state",o=this.stateManager.graphStateChanged&&this.edgeStyleAnalysis.dependency==="graph-state",s=!1;if(i)this.internals.graph.forEachNode(function(p){e.refreshNodeState(p)&&(s=!0)});else if(this.internals.nodeStyleAnalysis.dependency!=="static"){var l=M(this.stateManager.dirtyNodes),u;try{for(l.s();!(u=l.n()).done;){var d=u.value;this.refreshNodeState(d)&&(s=!0)}}catch(p){l.e(p)}finally{l.f()}}if(o)this.internals.graph.forEachEdge(function(p){e.refreshEdgeState(p)&&(s=!0)});else if(this.edgeStyleAnalysis.dependency!=="static"){var h=M(this.stateManager.dirtyEdges),c;try{for(h.s();!(c=h.n()).done;){var g=c.value;this.refreshEdgeState(g)&&(s=!0)}}catch(p){h.e(p)}finally{h.f()}}this.stateManager.graphStateChanged&&(r=this.stylesDeclaration)!==null&&r!==void 0&&r.stage&&this.refreshStageStyle(),this.stateManager.clearDirtyTracking(),s&&(this.pendingProcess="full")}},{key:"refreshNodeState",value:function(e){var r=this.internals.nodeDataCache[e];if(!r||this.nodeReducer){var i,o,s,l,u=(i=this.internals.nodeDataCache[e])===null||i===void 0?void 0:i.depth,d=(o=this.internals.nodeDataCache[e])===null||o===void 0?void 0:o.zIndex,h=(s=this.internals.nodeDataCache[e])===null||s===void 0?void 0:s.labelAttachment;this.updateNode(e);var c=this.internals.nodeDataCache[e];this.internals.attachmentManager&&c.labelAttachment!==h&&this.internals.attachmentManager.invalidateNode(e);var g;this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&c.shape&&c.shape in this.internals.nodeShapeMap?g=this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[c.shape]]:g=Bt(c.shape||"circle"),(l=this.internals.nodeDataTexture).updateNode.apply(l,[e,c.x,c.y,c.size,g].concat(j(rn(c)),[c.color])),u&&c.depth!==u&&this.updateNodeDepthRanges(e,u,c.depth);var p=this.nodeProgramIndex[e];return p!==void 0&&(this.addNodeToProgram(e,p),this.nodeProgram.invalidateBuffers()),d!==void 0&&c.zIndex!==d}var y=this.internals.graph.getNodeAttributes(e),v=this.stateManager.getNodeState(e),f=r.size,b=r.shape,_=r.depth,m=r.zIndex,x=r.labelAttachment,T=r.rotationAlignment,w=r.labelRotationAlignment,S=r.color;ma(this.stylesDeclaration.nodes,y,v,this.stateManager.graphState,this.internals.graph,r),this.postEvaluateNode(r,y,v);var A=this.nodeGraphCoords[e],R=r.x!==A.x||r.y!==A.y;if(R&&(A.x=r.x,A.y=r.y),this.normalizationFunction.applyTo(r),this.internals.nodeShapeMap?(!r.shape||!(r.shape in this.internals.nodeShapeMap))&&(r.shape=Object.keys(this.internals.nodeShapeMap)[0]):this.nodeShapeSlug&&(r.shape=this.nodeShapeSlug),this.internals.attachmentManager&&r.labelAttachment!==x&&this.internals.attachmentManager.invalidateNode(e),je(this.internals.nodesWithForcedLabels,e,Me(r)),je(this.internals.nodesWithBackdrop,e,Ta(r)),R||r.size!==f||r.shape!==b||r.rotationAlignment!==T||r.labelRotationAlignment!==w||r.color!==S){var k,D;this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&r.shape&&r.shape in this.internals.nodeShapeMap?D=this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[r.shape]]:D=Bt(r.shape||"circle"),(k=this.internals.nodeDataTexture).updateNode.apply(k,[e,r.x,r.y,r.size,D].concat(j(rn(r)),[r.color]))}this.itemBuckets.nodes.set(e,r.depth),r.depth!==_&&this.updateNodeDepthRanges(e,_,r.depth);var F=this.nodeProgramIndex[e];return F!==void 0&&(this.addNodeToProgram(e,F),this.nodeProgram.invalidateBuffers()),r.zIndex!==m}},{key:"refreshEdgeState",value:function(e){var r=this.internals.edgeDataCache[e];if(!r||this.edgeReducer){var i=r==null?void 0:r.depth,o=r==null?void 0:r.zIndex;this.updateEdge(e);var s=this.internals.edgeDataCache[e];i&&s.depth!==i&&this.updateEdgeDepthRanges(e,i,s.depth);var l=this.edgeProgramIndex[e];return l!==void 0&&(this.addEdgeToProgram(e,l),this.edgeProgram.invalidateBuffers()),o!==void 0&&s.zIndex!==o}var u=this.internals.graph.getEdgeAttributes(e),d=this.stateManager.getEdgeState(e),h=r.depth,c=r.zIndex,g=r.size,p=r.path,y=r.selfLoopPath,v=r.parallelPath,f=r.head,b=r.tail;ba(this.stylesDeclaration.edges,u,d,this.stateManager.graphState,this.internals.graph,r),this.postEvaluateEdge(r,u),this.applyEdgeSpread(e,r,d),je(this.internals.edgesWithForcedLabels,e,Me(r)),this.itemBuckets.edges.set(e,r.depth),r.depth!==h&&this.updateEdgeDepthRanges(e,h,r.depth);var _=this.edgeProgramIndex[e];if(_!==void 0){var m=r.size!==g||r.path!==p||r.selfLoopPath!==y||r.parallelPath!==v||r.head!==f||r.tail!==b;if(m)this.addEdgeToProgram(e,_),this.edgeProgram.invalidateBuffers();else{var x=this.internals.graph.source(e),T=this.internals.graph.target(e),w=this.internals.nodeDataCache[x],S=this.internals.nodeDataCache[T],A=this.edgeTextureIndexCache[e];this.edgeProgram.process(Be(this.pickingState,"edge",e),_,w,S,r,A),this.edgeProgram.invalidateBuffers()}}return r.zIndex!==c}},{key:"refresh",value:function(e){var r=this,i=(e==null?void 0:e.skipIndexation)!==void 0?e==null?void 0:e.skipIndexation:!1,o=(e==null?void 0:e.schedule)!==void 0?e.schedule:!1,s=!e||!e.partialGraph;if(s)this.clearEdgeIndices(),this.clearNodeIndices(),this.internals.graph.forEachNode(function(w){return r.addNode(w)}),this.edgeGroups.rebuild(),this.internals.graph.forEachEdge(function(w){return r.addEdge(w)}),this.pendingProcess="full";else{for(var l,u,d=((l=e.partialGraph)===null||l===void 0?void 0:l.nodes)||[],h=0,c=(d==null?void 0:d.length)||0;h<c;h++){var g,p,y=""+d[h],v=(g=this.internals.nodeDataCache[y])===null||g===void 0?void 0:g.labelAttachment;if(this.updateNode(y),this.internals.attachmentManager&&((p=this.internals.nodeDataCache[y])!==null&&p!==void 0&&p.labelAttachment||v)&&this.internals.attachmentManager.invalidateNode(y),i){var f=this.nodeProgramIndex[y];if(f===void 0)throw new Error('Sigma: node "'.concat(y,`" can't be repaint`));this.addNodeToProgram(y,f)}}i&&d.length>0&&(this.nodeProgram.invalidateBuffers(),this.labelRenderer.labelsDirty=!0);for(var b=(e==null||(u=e.partialGraph)===null||u===void 0?void 0:u.edges)||[],_=0,m=b.length;_<m;_++){var x=""+b[_];if(this.updateEdge(x),i){var T=this.edgeProgramIndex[x];if(T===void 0)throw new Error('Sigma: edge "'.concat(x,`" can't be repaint`));this.addEdgeToProgram(x,T)}}i&&b.length>0&&(this.edgeProgram.invalidateBuffers(),this.labelRenderer.labelsDirty=!0),!i&&this.pendingProcess!=="full"&&(this.pendingProcess=b.length>0?"full":"nodes")}return o?this.scheduleRender():this.render(),this}},{key:"scheduleRender",value:function(){var e=this;return this.renderFrame||(this.renderFrame=requestAnimationFrame(function(){e.render()})),this}},{key:"scheduleRefresh",value:function(e){return this.refresh(W(W({},e),{},{schedule:!0}))}},{key:"getViewportZoomedState",value:function(e,r){var i=this.camera.getState(),o=i.ratio,s=i.angle,l=i.x,u=i.y,d=this.internals.settings,h=d.minCameraRatio,c=d.maxCameraRatio;typeof c=="number"&&(r=Math.min(r,c)),typeof h=="number"&&(r=Math.max(r,h));var g=r/o,p={x:this.width/2,y:this.height/2},y=this.viewportToFramedGraph(e),v=this.viewportToFramedGraph(p);return{angle:s,x:(y.x-v.x)*(1-g)+l,y:(y.y-v.y)*(1-g)+u,ratio:r}}},{key:"viewRectangle",value:function(){var e=this.viewportToFramedGraph({x:0,y:0}),r=this.viewportToFramedGraph({x:this.width,y:0}),i=this.viewportToFramedGraph({x:0,y:this.height});return{x1:e.x,y1:e.y,x2:r.x,y2:r.y,height:r.y-i.y}}},{key:"framedGraphToViewport",value:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=!!r.cameraState||!!r.viewportDimensions||!!r.graphDimensions||!!r.padding,o=r.matrix||(i?ze(r.cameraState||this.camera.getState(),r.viewportDimensions||this.getDimensions(),r.graphDimensions||this.getGraphDimensions(),r.padding||this.getStagePadding()):this.matrix),s=bt(o,e);return{x:(1+s.x)*this.width/2,y:(1-s.y)*this.height/2}}},{key:"viewportToFramedGraph",value:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=!!r.cameraState||!!r.viewportDimensions||!!r.graphDimensions||!!r.padding,o=r.matrix||(i?ze(r.cameraState||this.camera.getState(),r.viewportDimensions||this.getDimensions(),r.graphDimensions||this.getGraphDimensions(),r.padding||this.getStagePadding(),!0):this.invMatrix),s=bt(o,{x:e.x/this.width*2-1,y:1-e.y/this.height*2});return isNaN(s.x)&&(s.x=0),isNaN(s.y)&&(s.y=0),s}},{key:"viewportToGraph",value:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.normalizationFunction.inverse(this.viewportToFramedGraph(e,r))}},{key:"graphToViewport",value:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.framedGraphToViewport(this.normalizationFunction(e),r)}},{key:"graphToFramedGraph",value:function(e){return this.normalizationFunction(e)}},{key:"framedGraphToGraph",value:function(e){return this.normalizationFunction.inverse(e)}},{key:"getGraphToViewportRatio",value:function(){var e={x:0,y:0},r={x:1,y:1},i=Math.sqrt(Math.pow(e.x-r.x,2)+Math.pow(e.y-r.y,2)),o=this.graphToViewport(e),s=this.graphToViewport(r),l=Math.sqrt(Math.pow(o.x-s.x,2)+Math.pow(o.y-s.y,2));return l/i}},{key:"computeNodeExtent",value:function(){var e=this.nodeGraphCoords,r=Object.keys(e);if(!r.length)return{x:[0,1],y:[0,1]};for(var i=1/0,o=-1/0,s=1/0,l=-1/0,u=0,d=r.length;u<d;u++){var h=e[r[u]],c=h.x,g=h.y;c<i&&(i=c),c>o&&(o=c),g<s&&(s=g),g>l&&(l=g)}return{x:[i,o],y:[s,l]}}},{key:"getBBox",value:function(){return this.nodeExtent}},{key:"getCustomBBox",value:function(){return this.customBBox}},{key:"setCustomBBox",value:function(e){return this.customBBox=e,this.scheduleRender(),this}},{key:"kill",value:function(){var e,r,i;this.emit("kill"),this.removeAllListeners(),this.camera.cancelAnimation(),this.unbindCameraHandlers(),window.removeEventListener("resize",this.activeListeners.handleResize),this.mouseCaptor.kill(),this.touchCaptor.kill(),this.internals.hoverResolver.kill(),this.unbindGraphHandlers(),this.clearIndices(),this.clearState(),this.internals.nodeDataCache={},this.internals.edgeDataCache={},this.renderFrame&&(cancelAnimationFrame(this.renderFrame),this.renderFrame=null);for(var o=this.container;o.firstChild;)o.removeChild(o.firstChild);this.nodeProgram.kill(),this.nodeFramePass.kill(),this.edgeProgram.kill(),this.edgeFramePass.kill(),this.internals.labelProgram.kill(),this.internals.edgeLabelProgram.kill(),this.internals.edgeLabelBackgroundProgram.kill(),this.internals.backdropProgram.kill(),this.internals.labelBackgroundProgram.kill(),(e=this.internals.attachmentProgram)===null||e===void 0||e.kill(),(r=this.internals.attachmentManager)===null||r===void 0||r.kill(),this.internals.attachmentProgram=null,this.internals.attachmentManager=null;var s=M(this.customLayerPrograms.values()),l;try{for(s.s();!(l=s.n()).done;){var u=l.value.program;u.kill()}}catch(c){s.e(c)}finally{s.f()}if(this.customLayerPrograms.clear(),this.sdfAtlas&&(this.sdfAtlas=null),this.internals.nodeDataTexture&&(this.internals.nodeDataTexture.kill(),this.internals.nodeDataTexture=null),this.internals.nodeFrameTexture&&(this.internals.nodeFrameTexture.kill(),this.internals.nodeFrameTexture=null),this.internals.edgeDataTexture&&(this.internals.edgeDataTexture.kill(),this.internals.edgeDataTexture=null),this.internals.edgeFrameTexture&&(this.internals.edgeFrameTexture.kill(),this.internals.edgeFrameTexture=null),this.webGLContext){var d;(d=this.webGLContext.getExtension("WEBGL_lose_context"))===null||d===void 0||d.loseContext(),this.webGLContext=null}(i=this.gestureHint)===null||i===void 0||i.kill(),this.gestureHint=null,this.mouseLayer.remove();for(var h in this.extraElements)this.extraElements[h].remove();this.extraElements={}}},{key:"scaleSize",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.camera.ratio;return e/this.internals.settings.zoomToSizeRatioFunction(r)*(this.getSetting("itemSizesReference")==="positions"?r*this.graphToViewportRatio:1)}},{key:"getStageCanvas",value:function(){return this.stageCanvas}},{key:"getMouseLayer",value:function(){return this.mouseLayer}}])}(Hn);const ui=q.createContext(null),Ed=ui.Provider;function di(){const a=q.useContext(ui);if(a==null)throw new Error("No context provided: useSigmaContext() can only be used in a descendant of <SigmaContainer>");return a}function ta(){return di().sigma}function Qt(a){return new Set(Object.keys(a))}const tr=Qt({clickNode:!0,rightClickNode:!0,downNode:!0,upNode:!0,enterNode:!0,leaveNode:!0,doubleClickNode:!0,wheelNode:!0,clickNodeLabel:!0,rightClickNodeLabel:!0,doubleClickNodeLabel:!0,wheelNodeLabel:!0,downNodeLabel:!0,upNodeLabel:!0,enterNodeLabel:!0,leaveNodeLabel:!0,clickEdge:!0,rightClickEdge:!0,downEdge:!0,upEdge:!0,enterEdge:!0,leaveEdge:!0,doubleClickEdge:!0,wheelEdge:!0,clickEdgeLabel:!0,rightClickEdgeLabel:!0,doubleClickEdgeLabel:!0,wheelEdgeLabel:!0,downEdgeLabel:!0,upEdgeLabel:!0,enterEdgeLabel:!0,leaveEdgeLabel:!0,clickStage:!0,rightClickStage:!0,downStage:!0,doubleClickStage:!0,wheelStage:!0,upStage:!0,enterStage:!0,leaveStage:!0,beforeRender:!0,afterRender:!0,kill:!0,resize:!0,afterClear:!0,afterProcess:!0,beforeClear:!0,beforeProcess:!0,moveBody:!0,nodeDragStart:!0,nodeDrag:!0,nodeDragEnd:!0,afterTexturesUpload:!0,webglContextLost:!0,webglContextRestored:!0}),nr=Qt({click:!0,rightClick:!0,doubleClick:!0,mouseup:!0,mousedown:!0,mousemove:!0,mousemovebody:!0,mouseleave:!0,mouseenter:!0,wheel:!0}),ar=Qt({touchup:!0,touchdown:!0,touchmove:!0,touchmovebody:!0,tap:!0,doubletap:!0}),rr=Qt({updated:!0,animationStart:void 0,animationEnd:void 0});function Bd(){const a=ta(),[n,t]=q.useState({});return q.useEffect(()=>{if(!a||!n)return;const e=n,r=Object.keys(e);return r.forEach(i=>{const o=e[i];tr.has(i)&&a.on(i,o),nr.has(i)&&a.getMouseCaptor().on(i,o),ar.has(i)&&a.getTouchCaptor().on(i,o),rr.has(i)&&a.getCamera().on(i,o)}),()=>{a&&r.forEach(i=>{const o=e[i];tr.has(i)&&a.off(i,o),nr.has(i)&&a.getMouseCaptor().off(i,o),ar.has(i)&&a.getTouchCaptor().off(i,o),rr.has(i)&&a.getCamera().off(i,o)})}},[a,n]),t}function Wd(){const a=ta();return q.useCallback((n,t=!0)=>{a&&n&&(t&&a.getGraph().order>0&&a.getGraph().clear(),a.getGraph().import(n),a.refresh())},[a])}function na(a,n){if(a===n)return!0;if(typeof a=="object"&&a!=null&&typeof n=="object"&&n!=null){if(Object.keys(a).length!=Object.keys(n).length)return!1;for(const t in a)if(!Object.hasOwn(n,t)||!na(a[t],n[t]))return!1;return!0}return!1}function Od(a,n){let t;return e=>new Promise(r=>{t&&clearTimeout(t),t=setTimeout(()=>{r(a(e))},n)})}function wd(a){const n=ta(),[t,e]=q.useState(a||{});q.useEffect(()=>{e(u=>na(u,a||{})?u:a||{})},[a]);const r=q.useCallback(u=>{n.getCamera().zoomIn(Object.assign(Object.assign({},t),u))},[n,t]),i=q.useCallback(u=>{n.getCamera().zoomOut(Object.assign(Object.assign({},t),u))},[n,t]),o=q.useCallback(u=>{n.getCamera().reset(Object.assign(Object.assign({},t),u))},[n,t]),s=q.useCallback((u,d)=>{n.getCamera().animate(u,Object.assign(Object.assign({},t),d))},[n,t]),l=q.useCallback((u,d)=>{const h=n.getNodeDisplayData(u);h?n.getCamera().animate(h,Object.assign(Object.assign({},t),d)):console.warn(`Node ${u} not found`)},[n,t]);return{zoomIn:r,zoomOut:i,reset:o,goto:s,gotoNode:l}}function Ad(a){const n=di(),[t,e]=q.useState(!1),[r,i]=q.useState(a||n.container),o=q.useCallback(()=>e(s=>!s),[]);return q.useEffect(()=>(document.addEventListener("fullscreenchange",o),()=>document.removeEventListener("fullscreenchange",o)),[o]),q.useEffect(()=>{i(a||n.container)},[a,n.container]),{toggle:q.useCallback(()=>{var s;s=r,document.fullscreenElement!==s?s.requestFullscreen():document.exitFullscreen&&document.exitFullscreen()},[r]),isFullScreen:t}}const Rd=q.forwardRef(({graph:a,id:n,className:t,style:e,options:r={},children:i},o)=>{const s=q.useRef(null),l=q.useRef(null),u={className:`react-sigma ${t||""}`,id:n,style:e},[d,h]=q.useState(null),[c,g]=q.useState(r);q.useEffect(()=>{g(v=>na(v,r)?v:r)},[r]),q.useEffect(()=>{let v=null;if(l.current!==null){let f=new J;a&&(f=typeof a=="function"?new a:a),v=new Sd(f,l.current,c),h(b=>{let _=null;return b&&(_=b.getCamera().getState()),_&&v.getCamera().setState(_),v})}return()=>{v&&v.kill()}},[l,a,c]),q.useImperativeHandle(o,()=>d,[d]);const p=q.useMemo(()=>d&&s.current?{sigma:d,container:s.current}:null,[d,s]),y=p!==null?ae.createElement(Ed,{value:p},i):null;return ae.createElement("div",Object.assign({},u,{ref:s}),ae.createElement("div",{className:"sigma-container",ref:l}),y)}),Dd=({id:a,className:n,style:t,children:e,position:r="bottom-left"})=>{const i={className:`react-sigma-controls ${n||""} ${r}`,id:a,style:t};return ae.createElement("div",Object.assign({},i),e)};var ir;function Dn(){return Dn=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var e in t)({}).hasOwnProperty.call(t,e)&&(a[e]=t[e])}return a},Dn.apply(null,arguments)}var or,Cd=function(a){return q.createElement("svg",Dn({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"dot-circle-regular_svg__svg-inline--fa dot-circle-regular_svg__fa-dot-circle dot-circle-regular_svg__fa-w-16","data-icon":"dot-circle","data-prefix":"far",viewBox:"0 0 512 512",width:"1em",height:"1em"},a),ir||(ir=q.createElement("path",{fill:"currentColor",d:"M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8m0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80"})))};function Cn(){return Cn=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var e in t)({}).hasOwnProperty.call(t,e)&&(a[e]=t[e])}return a},Cn.apply(null,arguments)}var sr,Ld=function(a){return q.createElement("svg",Cn({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"minus-solid_svg__svg-inline--fa minus-solid_svg__fa-minus minus-solid_svg__fa-w-14","data-icon":"minus","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},a),or||(or=q.createElement("path",{fill:"currentColor",d:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32"})))};function Ln(){return Ln=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var e in t)({}).hasOwnProperty.call(t,e)&&(a[e]=t[e])}return a},Ln.apply(null,arguments)}var kd=function(a){return q.createElement("svg",Ln({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"plus-solid_svg__svg-inline--fa plus-solid_svg__fa-plus plus-solid_svg__fa-w-14","data-icon":"plus","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},a),sr||(sr=q.createElement("path",{fill:"currentColor",d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32"})))};const Pd=({className:a,style:n,animationDuration:t=200,children:e,labels:r={}})=>{const{zoomIn:i,zoomOut:o,reset:s}=wd({duration:t,factor:1.5}),l={style:n,className:`react-sigma-control ${a||""}`};return ae.createElement(ae.Fragment,null,ae.createElement("div",Object.assign({},l),ae.createElement("button",{onClick:()=>i(),title:r.zoomIn||"Zoom In"},e?e[0]:ae.createElement(kd,{style:{width:"1em"}}))),ae.createElement("div",Object.assign({},l),ae.createElement("button",{onClick:()=>o(),title:r.zoomOut||"Zoom Out"},e?e[1]:ae.createElement(Ld,{style:{width:"1em"}}))),ae.createElement("div",Object.assign({},l),ae.createElement("button",{onClick:()=>s(),title:r.reset||"See whole graph"},e?e[2]:ae.createElement(Cd,{style:{width:"1em"}}))))};var lr;function kn(){return kn=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var e in t)({}).hasOwnProperty.call(t,e)&&(a[e]=t[e])}return a},kn.apply(null,arguments)}var ur,Fd=function(a){return q.createElement("svg",kn({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"compress-solid_svg__svg-inline--fa compress-solid_svg__fa-compress compress-solid_svg__fa-w-14","data-icon":"compress","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},a),lr||(lr=q.createElement("path",{fill:"currentColor",d:"M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12m-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24m0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12m192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12"})))};function Pn(){return Pn=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var e in t)({}).hasOwnProperty.call(t,e)&&(a[e]=t[e])}return a},Pn.apply(null,arguments)}var Id=function(a){return q.createElement("svg",Pn({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"expand-solid_svg__svg-inline--fa expand-solid_svg__fa-expand expand-solid_svg__fa-w-14","data-icon":"expand","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},a),ur||(ur=q.createElement("path",{fill:"currentColor",d:"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12M288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12m148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12M160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12"})))};const Gd=({id:a,className:n,style:t,container:e,children:r,labels:i={}})=>{const{isFullScreen:o,toggle:s}=Ad(e==null?void 0:e.current),l={className:`react-sigma-control ${n||""}`,id:a,style:t};return document.fullscreenEnabled?ae.createElement("div",Object.assign({},l),ae.createElement("button",{onClick:s,title:o?i.exit||"Exit fullscreen":i.enter||"Enter fullscreen"},r&&!o&&r[0],r&&o&&r[1],!r&&!o&&ae.createElement(Id,{style:{width:"1em"}}),!r&&o&&ae.createElement(Fd,{style:{width:"1em"}}))):null};Dd.__docgenInfo={description:"",methods:[],displayName:"L",props:{position:{defaultValue:{value:'"bottom-left"',computed:!1},required:!1}}};Gd.__docgenInfo={description:"",methods:[],displayName:"A",props:{labels:{defaultValue:{value:"{}",computed:!1},required:!1}}};Rd.__docgenInfo={description:"",methods:[],displayName:"S",props:{options:{defaultValue:{value:"{}",computed:!1},required:!1}}};Pd.__docgenInfo={description:"",methods:[],displayName:"I",props:{animationDuration:{defaultValue:{value:"200",computed:!1},required:!1},labels:{defaultValue:{value:"{}",computed:!1},required:!1}}};export{Gd as A,Wd as C,tn as D,J as G,Pd as I,Dd as L,Tr as M,Od as N,Bd as O,Rd as S,xr as U,Vo as a,_t as b,zd as c,Md as d,Fn as e,na as j,Ho as l,te as n,$o as p,Es as r,Uo as s,ta as v,wd as x};
