import{i as l,R as p,m as c,s as m,S as d,k as f,U as y,V as i,W as _,X as v,u as L}from"./entry.d025ab79.js";const h=l({props:{name:String},async setup(s,u){const e=await p[s.name]().then(t=>t.default||t);return()=>c(e,{},u.slots)}}),T=l({props:{name:{type:[String,Boolean,Object],default:null}},setup(s,u){const e=v("_route"),t=e===m()?d():e,n=f(()=>{var a,o;return(o=(a=L(s.name))!=null?a:t.meta.layout)!=null?o:"default"});return()=>{var r;const a=n.value&&n.value in p,o=(r=t.meta.layoutTransition)!=null?r:y;return i(_,a&&o,{default:()=>i(h,a&&{key:n.value,name:n.value,hasTransition:void 0},u.slots).default()}).default()}}});export{T as default};