import{f as q,t as g,g as C,m as S,u as b,h as k,q as c}from"./entry-94ceb41e.mjs";import{u as N}from"./asyncData-1ed80033.mjs";var A=q({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(n){const{path:t,only:r,without:a,where:i,sort:l,limit:o,skip:s,locale:f,find:d}=g(n),p=C(()=>{var e;return(e=t.value)==null?void 0:e.includes("/_")}),{data:v,refresh:y}=await N(`content-query-${S(n)}`,()=>{let e;return t.value?e=c(t.value):e=c(),r.value&&(e=e.only(r.value)),a.value&&(e=e.without(a.value)),i.value&&(e=e.where(i.value)),l.value&&(e=e.sort(l.value)),o.value&&(e=e.limit(o.value)),s.value&&(e=e.skip(s.value)),f.value&&(e=e.where({_locale:f.value})),d.value==="one"?e.findOne():d.value==="surround"?t.value?e.findSurround(t):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find()):e.find()});return{isPartial:p,data:v,refresh:y}},render(n){var h;const t=b(),{data:r,refresh:a,isPartial:i,path:l,only:o,without:s,where:f,sort:d,limit:p,skip:v,locale:y,find:e}=n,u={path:l,only:o,without:s,where:f,sort:d,limit:p,skip:v,locale:y,find:e};if(u.find==="one"){if(!r&&(t==null?void 0:t["not-found"]))return t["not-found"]({props:u,...this.$attrs});if((r==null?void 0:r._type)==="markdown"&&!((h=r==null?void 0:r.body)!=null&&h.children.length))return t.empty({props:u,...this.$attrs})}else if((!r||!r.length)&&t!=null&&t["not-found"])return t["not-found"]({props:u,...this.$attrs});return t!=null&&t.default?t.default({data:r,refresh:a,isPartial:i,props:u,...this.$attrs}):((m,w)=>k("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:m,data:w},null,2)))("default",{data:r,props:u,isPartial:i})}});export{A as default};
