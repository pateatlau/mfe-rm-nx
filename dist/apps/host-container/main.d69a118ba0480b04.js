import*as e from"http://localhost:4500/remoteEntry.js";import*as r from"http://localhost:4600/remoteEntry.js";var t,n,o,a,i={629:(e,r,t)=>{Promise.all([t.e(619),t.e(212)]).then(t.bind(t,212))},137:r=>{r.exports=e},545:e=>{e.exports=r}},u={};function l(e){var r=u[e];if(void 0!==r)return r.exports;var t=u[e]={exports:{}};return i[e](t,t.exports,l),t.exports}l.m=i,l.c=u,l.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return l.d(r,{a:r}),r},l.d=(e,r)=>{for(var t in r)l.o(r,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((r,t)=>(l.f[t](e,r),r)),[])),l.u=e=>e+"."+{212:"c0b3f02e6ff706ea",316:"b56cfac9c7c9ebbc",591:"f2f4a1c826f78238",619:"641434d138402db2",784:"b2b1160aee4e2ae7"}[e]+".js",l.miniCssF=e=>{},l.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="host-container:",l.l=(e,r,o,a)=>{if(t[e])t[e].push(r);else{var i,u;if(void 0!==o)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var p=f[s];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==n+o){i=p;break}}i||(u=!0,(i=document.createElement("script")).type="module",i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",n+o),i.src=e),t[e]=[r];var h=(r,n)=>{i.onerror=i.onload=null,clearTimeout(d);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},d=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),u&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o={212:[758,38]},a={38:["default","./Module",137],758:["default","./Module",545]},l.f.remotes=(e,r)=>{l.o(o,e)&&o[e].forEach((e=>{var t=l.R;t||(t=[]);var n=a[e];if(!(t.indexOf(n)>=0)){if(t.push(n),n.p)return r.push(n.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+n[1]+'" from '+n[2]),l.m[e]=()=>{throw r},n.p=0},i=(e,t,a,i,u,l)=>{try{var f=e(t,a);if(!f||!f.then)return u(f,i,l);var s=f.then((e=>u(e,i)),o);if(!l)return s;r.push(n.p=s)}catch(e){o(e)}},u=(e,r,o)=>i(r.get,n[1],t,0,f,o),f=r=>{n.p=1,l.m[e]=e=>{e.exports=r()}};i(l,n[2],0,0,((e,r,t)=>e?i(l.I,n[0],0,e,u,t):o()),1)}}))},(()=>{l.S={};var e={},r={};l.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];l.o(l.S,t)||(l.S[t]={});var a=l.S[t],i="host-container",u=(e,r,t,n)=>{var o=a[e]=a[e]||{},u=o[r];(!u||!u.loaded&&(!n!=!u.eager?n:i>u.from))&&(o[r]={get:t,from:i,eager:!!n})},f=e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(r));var r};try{var o=l(e);if(!o)return;var a=e=>e&&e.init&&e.init(l.S[t],n);if(o.then)return s.push(o.then(a,r));var i=a(o);if(i&&i.then)return s.push(i.catch(r))}catch(e){r(e)}},s=[];return"default"===t&&(u("react-dom","18.2.0",(()=>Promise.all([l.e(316),l.e(619)]).then((()=>()=>l(316))))),u("react-router-dom","6.11.2",(()=>Promise.all([l.e(591),l.e(619)]).then((()=>()=>l(591))))),u("react","18.2.0",(()=>l.e(784).then((()=>()=>l(784))))),f(137),f(545)),s.length?e[t]=Promise.all(s).then((()=>e[t]=1)):e[t]=1}}})(),(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=e=>{var t=e[0],n="";if(1===e.length)return"*";if(t+.5){n+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(u=e[a]))[0]?"-":(o>0?".":"")+(o=2,u);return n}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():r(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},t=(r,n)=>{if(0 in r){n=e(n);var o=r[0],a=o<0;a&&(o=-o-1);for(var i=0,u=1,l=!0;;u++,i++){var f,s,p=u<r.length?(typeof r[u])[0]:"";if(i>=n.length||"o"==(s=(typeof(f=n[i]))[0]))return!l||("u"==p?u>o&&!a:""==p!=a);if("u"==s){if(!l||"u"!=p)return!1}else if(l)if(p==s)if(u<=o){if(f!=r[u])return!1}else{if(a?f>r[u]:f<r[u])return!1;f!=r[u]&&(l=!1)}else if("s"!=p&&"n"!=p){if(a||u<=o)return!1;l=!1,u--}else{if(u<=o||s<p!=a)return!1;l=!1}else"s"!=p&&"n"!=p&&(l=!1,u--)}}var h=[],d=h.pop.bind(h);for(i=1;i<r.length;i++){var c=r[i];h.push(1==c?d()|d():2==c?d()&d():c?t(c,n):!d())}return!!d()},n=(r,t)=>{var n=r[t];return Object.keys(n).reduce(((r,t)=>!r||!n[r].loaded&&((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}})(r,t)?t:r),0)},o=(e,o,i,u)=>{var l=n(e,i);if(!t(u,l))throw new Error(((e,t,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[t][n].from)+" of shared singleton module "+t+" (required "+r(o)+")")(e,i,l,u));return a(e[i][l])},a=e=>(e.loaded=1,e.get()),i=(e=>function(r,t,n,o){var a=l.I(r);return a&&a.then?a.then(e.bind(e,r,l.S[r],t,n,o)):e(r,l.S[r],t,n,o)})(((e,r,t,n,a)=>r&&l.o(r,t)?o(r,0,t,n):a())),u={},f={619:()=>i("default","react",[4,18,2,0],(()=>l.e(784).then((()=>()=>l(784))))),135:()=>i("default","react-dom",[4,18,2,0],(()=>l.e(316).then((()=>()=>l(316))))),607:()=>i("default","react-router-dom",[4,6,11,2],(()=>l.e(591).then((()=>()=>l(591)))))},s={212:[135,607],619:[619]};l.f.consumes=(e,r)=>{l.o(s,e)&&s[e].forEach((e=>{if(l.o(u,e))return r.push(u[e]);var t=r=>{u[e]=0,l.m[e]=t=>{delete l.c[e],t.exports=r()}},n=r=>{delete u[e],l.m[e]=t=>{throw delete l.c[e],r}};try{var o=f[e]();o.then?r.push(u[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))}})(),(()=>{var e={179:0};l.f.j=(r,t)=>{var n=l.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(619!=r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=l.p+l.u(r),i=new Error;l.l(a,(t=>{if(l.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[a,i,u]=t,f=0;if(a.some((r=>0!==e[r]))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);u&&u(l)}for(r&&r(t);f<a.length;f++)o=a[f],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkhost_container=self.webpackChunkhost_container||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),l(629);