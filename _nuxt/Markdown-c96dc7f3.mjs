import{i as d,j as g,k as h,l as a,m as w,p as y}from"./entry-866aad9f.mjs";const m=d({name:"Markdown",functional:!0,props:{use:{type:[String,Function],default:"default"},unwrap:{type:[Boolean,String],default:!1}},setup(n){const{parent:o}=y(),{between:s}=g();return{tags:h(()=>typeof n.unwrap=="string"?n.unwrap.split(" "):["*"]),between:s,parent:o}},render({use:n,unwrap:o,between:s,tags:l,parent:r}){var f;try{const u=typeof n=="string"?(r==null?void 0:r.slots[n])||((f=r==null?void 0:r.parent)==null?void 0:f.slots[n]):n;if(!u)return a("div");if(!o)return[u()];const{flatUnwrap:p}=w(),i=p(u(),l);return s?i.flatMap((t,e)=>e===0?[t]:[s(),t]):i.reduce((t,e)=>(typeof e.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=e.children:t.push(e.children):t.push(e),t),[])}catch{return a("div")}}});export{m as default};
