import{B as P,C as d,D as B,E as C,w as k,u as A,l as M}from"./entry.0d02052c.js";const z=()=>null;function R(...r){var h,m,v,D,_,g,w,b,x;const l=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(l);let[t,u,e={}]=r;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof u!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=(h=e.server)!=null?h:!0,e.default=(m=e.default)!=null?m:z,e.defer&&console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."),e.lazy=(D=(v=e.lazy)!=null?v:e.defer)!=null?D:!1,e.initialCache=(_=e.initialCache)!=null?_:!0,e.immediate=(g=e.immediate)!=null?g:!0;const a=P(),c=()=>(a.isHydrating||e.initialCache)&&a.payload.data[t]!==void 0;a._asyncData[t]||(a._asyncData[t]={data:d(c()?a.payload.data[t]:(b=(w=e.default)==null?void 0:w.call(e))!=null?b:null),pending:d(!c()),error:d((x=a.payload._errors[t])!=null?x:null)});const n={...a._asyncData[t]};n.refresh=n.execute=(o={})=>a._asyncDataPromises[t]?a._asyncDataPromises[t]:o._initial&&c()?a.payload.data[t]:(n.pending.value=!0,a._asyncDataPromises[t]=new Promise((i,s)=>{try{i(u(a))}catch(f){s(f)}}).then(i=>{e.transform&&(i=e.transform(i)),e.pick&&(i=E(i,e.pick)),n.data.value=i,n.error.value=null}).catch(i=>{var s,f;n.error.value=i,n.data.value=A((f=(s=e.default)==null?void 0:s.call(e))!=null?f:null)}).finally(()=>{n.pending.value=!1,a.payload.data[t]=n.data.value,n.error.value&&(a.payload._errors[t]=!0),delete a._asyncDataPromises[t]}),a._asyncDataPromises[t]);const y=()=>n.refresh({_initial:!0}),O=e.server!==!1&&a.payload.serverRendered;{const o=M();if(o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const s=o._nuxtOnBeforeMountCbs;o&&(B(()=>{s.forEach(f=>{f()}),s.splice(0,s.length)}),C(()=>s.splice(0,s.length)))}O&&a.isHydrating&&t in a.payload.data?n.pending.value=!1:o&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?o._nuxtOnBeforeMountCbs.push(y):e.immediate&&y(),e.watch&&k(e.watch,()=>n.refresh());const i=a.hook("app:data:refresh",s=>{if(!s||s.includes(t))return n.refresh()});o&&C(i)}const p=Promise.resolve(a._asyncDataPromises[t]).then(()=>n);return Object.assign(p,n),p}function j(r){const l=r?Array.isArray(r)?r:[r]:void 0;return P().callHook("app:data:refresh",l)}function E(r,l){const t={};for(const u of l)t[u]=r[u];return t}export{j as r,R as u};
