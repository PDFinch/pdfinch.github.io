import{q as o,A as n,o as r,a as i,b as e,T as a,V as l,W as d}from"./entry-866aad9f.mjs";const c=t=>(l("data-v-5fe03afb"),t=t(),d(),t),p={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},_=c(()=>e("div",{class:"fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight"},null,-1)),u={class:"max-w-520px text-center"},x=["textContent"],h=["textContent"],f={__name:"error-500",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:String,default:"500"},statusMessage:{type:String,default:"Server error"},description:{type:String,default:"This page is temporarily unavailable."}},setup(t){const s=t;return n({title:`${s.statusCode} - ${s.statusMessage} | ${s.appName}`,script:[],style:[{children:""}]}),(g,m)=>(r(),i("div",p,[_,e("div",u,[e("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:a(t.statusCode)},null,8,x),e("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:a(t.description)},null,8,h)])]))}};var b=o(f,[["__scopeId","data-v-5fe03afb"]]);export{b as default};
