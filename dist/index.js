var x=Object.defineProperty,h=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var d=(t,e,n)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,T=(t,e)=>{for(var n in e||(e={}))k.call(e,n)&&d(t,n,e[n]);if(p)for(var n of p(e))v.call(e,n)&&d(t,n,e[n]);return t},c=(t,e)=>h(t,M(e));var u=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","animation","audio","circle","clipPath","color-profile","cursor","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","handler","hkern","image","line","linearGradient","listener","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","prefetch","radialGradient","rect","set","solidColor","stop","svg","switch","symbol","tbreak","text","textArea","textPath","tref","tspan","unknown","use","view","vkern"]),E=new Set(["class","style","for"]);var i=Symbol(),g=(t,e,n)=>{let a=t[i],r=a[e];r?(r.push(n),r.value!==void 0&&n(r.value)):a[e]=[n]},A=class{[i]={};constructor(){}watch(e,n){g(this,e,n)}};Object.defineProperties(Element.prototype,{[i]:{value:{}},watch:{value(t,e){g(this,t,e)}}});function P(t,e,n){var r,o;let a=(o=(r=t[i])[e])!=null?o:r[e]=[];a.value=n,Object.defineProperty(t,e,{get(){return a.value},set(l){a.value=l;for(let s=a.length;s--;)a[s](l)}}),t[e]=n}function J(t,e){var a;let n=t[i];for(let r in e){let o=e[r],l=(a=n[r])!=null?a:n[r]=[];l.value=o,Object.defineProperty(t,r,{get(){return l.value},set(s){l.value=s;for(let m=l.length;m--;)l[m](s)}}),t[r]=o}}function X(t,e){let n={};for(let a in e)n[a]={value:e[a]};Object.defineProperties(t,n)}var N=()=>({});var S=(t,e)=>{if(e instanceof Function)e(t);else if(e instanceof Array)for(let n of e)S(t,n);else t.append(e)};function H(t,e,...n){e!=null||(e={});let a=!1,r;if(typeof t=="string")u.has(t)?(r=document.createElementNS("http://www.w3.org/2000/svg",t),a=!0):r=document.createElement(t);else if(typeof t=="function")(t==null?void 0:t.prototype)instanceof Element?r=new t:(r=t(c(T({},e),{children:[...n]})),n.length=0);else throw new Error("Invalid Component");for(let o in e){let l=e[o];o==="ref"?l[0][l[1]]=r:a||E.has(o)||o.includes("-")?r.setAttribute(o,l):r[o]=l}return S(r,n),r}var C={r:H,Fragment:({children:t})=>t},L=C;export{A as AttrHolder,L as default,N as getRefs,P as useAttr,J as useAttrs,X as useConstProps};
