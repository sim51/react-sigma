"use strict";(self.webpackChunk_react_sigma_website=self.webpackChunk_react_sigma_website||[]).push([[548],{548:(e,t,n)=>{n.d(t,{Ay:()=>O,IU:()=>g,yk:()=>b});var r=n(2072),o=n(5662);function i(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,i(r.key),r)}}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function s(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(s=function(){return!!e})()}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t,n){return t=c(t),function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return u(e)}(e,s()?Reflect.construct(t,n||[],c(e).constructor):t.apply(e,n))}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function p(e,t,n){return(t=i(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=.25,_={edgeIndexAttribute:"parallelIndex",edgeMaxIndexAttribute:"parallelMaxIndex"};function g(e,t){var n=d(d({},_),t||{}),r={},o={},i={},a=0;e.forEachNode((function(e){r[e]=++a+""})),e.forEachEdge((function(e,t,n,a){var c=r[n],s=r[a],u=[c,s].join("-");o[e]=u,i[u]=[c,s].sort().join("-")}));var c={},s={};for(var u in e.forEachEdge((function(e){var t=o[e],n=i[t];c[t]=c[t]||[],c[t].push(e),s[n]=s[n]||[],s[n].push(e)})),c){var l=c[u],v=l.length,p=s[i[u]].length;if(1===v&&1===p){var f=l[0];e.setEdgeAttribute(f,n.edgeIndexAttribute,null),e.setEdgeAttribute(f,n.edgeMaxIndexAttribute,null)}else if(1===v){var b=l[0];e.setEdgeAttribute(b,n.edgeIndexAttribute,0),e.setEdgeAttribute(b,n.edgeMaxIndexAttribute,1)}else for(var g=0;g<v;g++){var y=l[g];e.setEdgeAttribute(y,n.edgeIndexAttribute,g),e.setEdgeAttribute(y,n.edgeMaxIndexAttribute,v)}}}function y(e,t,n,r){return{x:Math.pow(1-e,2)*t.x+2*(1-e)*e*n.x+Math.pow(e,2)*r.x,y:Math.pow(1-e,2)*t.y+2*(1-e)*e*n.y+Math.pow(e,2)*r.y}}function h(e,t,n,r,o){var i=o.edgeLabelSize,a=t.curvature||b,c=o.edgeLabelFont,s=o.edgeLabelWeight,u=o.edgeLabelColor.attribute?t[o.edgeLabelColor.attribute]||o.edgeLabelColor.color||"#000":o.edgeLabelColor.color,l=t.label;if(l){e.fillStyle=u,e.font="".concat(s," ").concat(i,"px ").concat(c);var v=n.x,p=n.y,f=r.x,d=r.y,_=(v+f)/2,g=(p+d)/2,h=f-v,x=d-p,m=Math.sqrt(Math.pow(h,2)+Math.pow(x,2)),w=_+x*a,T=g-h*a,O=.7*t.size+5,E={x:T-p,y:-(w-v)},A=Math.sqrt(Math.pow(E.x,2)+Math.pow(E.y,2)),C={x:d-T,y:-(f-w)},R=Math.sqrt(Math.pow(C.x,2)+Math.pow(C.y,2)),S={x:w+=O*x/m,y:T-=O*h/m},k={x:v+=O*E.x/A,y:p+=O*E.y/A},I={x:f+=O*C.x/R,y:d+=O*C.y/R},M=function(e,t,n){for(var r=0,o=e,i=0;i<20;i++){var a=y((i+1)/20,e,t,n);r+=Math.sqrt(Math.pow(o.x-a.x,2)+Math.pow(o.y-a.y,2)),o=a}return r}(k,S,I);if(!(M<n.size+r.size)){var j=e.measureText(l).width,P=M-n.size-r.size;if(j>P){for(l+="\u2026",j=e.measureText(l).width;j>P&&l.length>1;)l=l.slice(0,-2)+"\u2026",j=e.measureText(l).width;if(l.length<4)return}for(var z={},N=0,B=l.length;N<B;N++){var D=l[N];z[D]||(z[D]=e.measureText(D).width*(1+.35*a))}for(var L=.5-j/M/2,F=0,G=l.length;F<G;F++){var U=l[F],V=y(L,k,S,I),W=2*(1-L)*(w-v)+2*L*(f-w),q=2*(1-L)*(T-p)+2*L*(d-T),K=Math.atan2(q,W);e.save(),e.translate(V.x,V.y),e.rotate(K),e.fillText(U,0,0),e.restore(),L+=z[U]/M}}}}var x=WebGLRenderingContext,m=x.UNSIGNED_BYTE,w=x.FLOAT,T=["u_matrix","u_sizeRatio","u_dimensions","u_pixelRatio"],O=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return p(u(e=l(this,t,[].concat(r))),"drawLabel",h),e}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(t,e),n=t,(r=[{key:"getDefinition",value:function(){return{VERTICES:6,VERTEX_SHADER_SOURCE:'\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute float a_direction;\nattribute float a_thickness;\nattribute vec2 a_source;\nattribute vec2 a_target;\nattribute float a_current;\nattribute float a_curvature;\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_pixelRatio;\nuniform vec2 u_dimensions;\n\nvarying vec4 v_color;\nvarying float v_thickness;\nvarying vec2 v_cpA;\nvarying vec2 v_cpB;\nvarying vec2 v_cpC;\n\nconst float bias = 255.0 / 254.0;\nconst float epsilon = 0.7;\nconst float minThickness = 0.3;\n\nvec2 clipspaceToViewport(vec2 pos, vec2 dimensions) {\n  return vec2(\n    (pos.x + 1.0) * dimensions.x / 2.0,\n    (pos.y + 1.0) * dimensions.y / 2.0\n  );\n}\n\nvec2 viewportToClipspace(vec2 pos, vec2 dimensions) {\n  return vec2(\n    pos.x / dimensions.x * 2.0 - 1.0,\n    pos.y / dimensions.y * 2.0 - 1.0\n  );\n}\n\nvoid main() {\n  // Selecting the correct position\n  // Branchless "position = a_source if a_current == 1.0 else a_target"\n  vec2 position = a_source * max(0.0, a_current) + a_target * max(0.0, 1.0 - a_current);\n  position = (u_matrix * vec3(position, 1)).xy;\n\n  vec2 source = (u_matrix * vec3(a_source, 1)).xy;\n  vec2 target = (u_matrix * vec3(a_target, 1)).xy;\n\n  vec2 viewportPosition = clipspaceToViewport(position, u_dimensions);\n  vec2 viewportSource = clipspaceToViewport(source, u_dimensions);\n  vec2 viewportTarget = clipspaceToViewport(target, u_dimensions);\n\n  vec2 delta = viewportTarget.xy - viewportSource.xy;\n  float len = length(delta);\n  vec2 normal = vec2(-delta.y, delta.x) * a_direction;\n  vec2 unitNormal = normal / len;\n  float boundingBoxThickness = len * a_curvature;\n  float curveThickness = max(minThickness, a_thickness / 2.0 / u_sizeRatio * u_pixelRatio);\n\n  v_thickness = curveThickness;\n\n  v_cpA = viewportSource;\n  v_cpB = 0.5 * (viewportSource + viewportTarget) + unitNormal * a_direction * boundingBoxThickness;\n  v_cpC = viewportTarget;\n\n  vec2 viewportOffsetPosition = (\n    viewportPosition +\n    unitNormal * (boundingBoxThickness / 2.0 + curveThickness + epsilon) *\n    max(0.0, a_direction) // NOTE: cutting the bounding box in half to avoid overdraw\n  );\n\n  position = viewportToClipspace(viewportOffsetPosition, u_dimensions);\n  gl_Position = vec4(position, 0, 1);\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n',FRAGMENT_SHADER_SOURCE:"\nprecision highp float;\n\nvarying vec4 v_color;\nvarying float v_thickness;\nvarying vec2 v_cpA;\nvarying vec2 v_cpB;\nvarying vec2 v_cpC;\n\nfloat det(vec2 a, vec2 b) {\n  return a.x * b.y - b.x * a.y;\n}\n\nvec2 getDistanceVector(vec2 b0, vec2 b1, vec2 b2) {\n  float a = det(b0, b2), b = 2.0 * det(b1, b0), d = 2.0 * det(b2, b1);\n  float f = b * d - a * a;\n  vec2 d21 = b2 - b1, d10 = b1 - b0, d20 = b2 - b0;\n  vec2 gf = 2.0 * (b * d21 + d * d10 + a * d20);\n  gf = vec2(gf.y, -gf.x);\n  vec2 pp = -f * gf / dot(gf, gf);\n  vec2 d0p = b0 - pp;\n  float ap = det(d0p, d20), bp = 2.0 * det(d10, d0p);\n  float t = clamp((ap + bp) / (2.0 * a + b + d), 0.0, 1.0);\n  return mix(mix(b0, b1, t), mix(b1, b2, t), t);\n}\n\nfloat distToQuadraticBezierCurve(vec2 p, vec2 b0, vec2 b1, vec2 b2) {\n  return length(getDistanceVector(b0 - p, b1 - p, b2 - p));\n}\n\nconst float epsilon = 0.7;\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  float dist = distToQuadraticBezierCurve(gl_FragCoord.xy, v_cpA, v_cpB, v_cpC);\n\n  if (dist < v_thickness + epsilon) {\n    #ifdef PICKING_MODE\n    gl_FragColor = v_color;\n    #else\n    float inCurve = 1.0 - smoothstep(v_thickness - epsilon, v_thickness + epsilon, dist);\n    gl_FragColor = inCurve * vec4(v_color.rgb * v_color.a, v_color.a);\n    #endif\n  } else {\n    gl_FragColor = transparent;\n  }\n}\n",METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:T,ATTRIBUTES:[{name:"a_source",size:2,type:w},{name:"a_target",size:2,type:w},{name:"a_thickness",size:1,type:w},{name:"a_curvature",size:1,type:w},{name:"a_color",size:4,type:m,normalized:!0},{name:"a_id",size:4,type:m,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:"a_current",size:1,type:w},{name:"a_direction",size:1,type:w}],CONSTANT_DATA:[[0,1],[0,-1],[1,1],[0,-1],[1,1],[1,-1]]}}},{key:"processVisibleItem",value:function(e,t,n,r,i){var a=i.size||1,c=n.x,s=n.y,u=r.x,l=r.y,v=(0,o.Ko)(i.color),p="number"==typeof i.curvature?i.curvature:b,f=this.array;f[t++]=c,f[t++]=s,f[t++]=u,f[t++]=l,f[t++]=a,f[t++]=p,f[t++]=v,f[t++]=e}},{key:"setUniforms",value:function(e,t){var n=t.gl,r=t.uniformLocations,o=r.u_matrix,i=r.u_pixelRatio,a=r.u_sizeRatio,c=r.u_dimensions;n.uniformMatrix3fv(o,!1,e.matrix),n.uniform1f(i,e.pixelRatio),n.uniform1f(a,e.sizeRatio),n.uniform2f(c,e.width*e.pixelRatio,e.height*e.pixelRatio)}}])&&a(n.prototype,r),i&&a(n,i),Object.defineProperty(n,"prototype",{writable:!1}),t}(r.SI)},2072:(e,t,n)=>{n.d(t,{SI:()=>r.g,TQ:()=>r.f,nc:()=>r.E});var r=n(8503),o=WebGLRenderingContext,i=(o.UNSIGNED_BYTE,o.FLOAT,WebGLRenderingContext),a=(i.UNSIGNED_BYTE,i.FLOAT,WebGLRenderingContext);a.UNSIGNED_BYTE,a.FLOAT},5662:(e,t,n)=>{n.d(t,{Ko:()=>o.f,fB:()=>r.h});var r=n(4202),o=n(2768);n(181)}}]);