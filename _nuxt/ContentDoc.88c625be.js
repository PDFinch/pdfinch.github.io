import{i as y,s as h,j as g,m as o,t as q}from"./entry.0d02052c.js";import{u as i}from"./head.28a71d5c.js";import C from"./ContentQuery.4857f1ab.js";import"./asyncData.569bda39.js";const S=y({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:()=>h().path},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(f){const e=g(),{tag:p,excerpt:r,path:d,query:m,head:u}=f,c=Object.assign(m||{},{path:d,find:"one"}),s=(t,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:t,data:n},null,2));return o(C,c,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:l})=>{var a;return u&&i(t),(a=e.default)==null?void 0:a.call(e,{doc:t,refresh:n,isPartial:l,excerpt:r,...this.$attrs})}:({data:t})=>(u&&i(t),o(q,{value:t,excerpt:r,tag:p,...this.$attrs},{empty:n=>e!=null&&e.empty?e.empty(n):s("default",t)})),empty:t=>{var n;return((n=e==null?void 0:e.empty)==null?void 0:n.call(e,t))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":t=>{var n;return((n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{S as default};
