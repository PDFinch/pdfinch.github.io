import{i as p,G as E,E as v,K as T,a as L,L as I,m as d,k as f,d as e,_ as r,y as A,M as D,N as R,z as V,j as g,O as y,P as c}from"./entry.d025ab79.js";import{u as b}from"./asyncData.051fdc42.js";import"./Markdown.a556ca6f.js";import"./ContentDoc.8c4f5cfc.js";import"./ContentList.b2af78d9.js";import"./ContentQuery.685d91fb.js";import"./ContentRenderer.ea214dde.js";import"./ContentRendererMarkdown.a345bdab.js";import"./ContentSlot.705ac277.js";import"./DocumentDrivenEmpty.60ffffd4.js";import"./DocumentDrivenNotFound.042d63e2.js";import"./ProseCode.35b3b370.js";import"./layout.960d32af.js";import"./head.46dc42ab.js";import"./_commonjsHelpers.fed2a411.js";const S=p({emits:{error(t){return!0}},setup(t,{slots:o,emit:_}){const i=E(null),u=v();return T(a=>{if(!u.isHydrating)return _("error",a),i.value=a,!1}),()=>{var a,n;return i.value?(a=o.error)==null?void 0:a.call(o,{error:i}):(n=o.default)==null?void 0:n.call(o)}}}),x=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),j=p({name:"DevOnly",setup(t,o){return()=>null}}),N=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),$=p({name:"ServerPlaceholder",render(){return L("div")}}),z=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"})),M=p({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:o}){const _=B({duration:t.duration,throttle:t.throttle}),i=v();return i.hook("page:start",_.start),i.hook("page:finish",_.finish),I(()=>_.clear),()=>d("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${_.progress.value}%`,height:`${t.height}px`,opacity:_.isLoading.value?1:0,background:t.color,backgroundSize:`${100/_.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},o)}});function B(t){const o=E(0),_=E(!1),i=f(()=>1e4/t.duration);let u=null,a=null;function n(){l(),o.value=0,_.value=!0,t.throttle?a=setTimeout(h,t.throttle):h()}function m(){o.value=100,O()}function l(){clearInterval(u),clearTimeout(a),u=null,a=null}function s(P){o.value=Math.min(100,o.value+P)}function O(){l(),setTimeout(()=>{_.value=!1,setTimeout(()=>{o.value=0},400)},500)}function h(){u=setInterval(()=>{s(i.value)},100)}return{progress:o,isLoading:_,start:n,finish:m,clear:l}}const C=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));e(()=>r(()=>import("./Alert.53a80814.js"),["./Alert.53a80814.js","./entry.d025ab79.js","./entry.d4a0e373.css","./Markdown.a556ca6f.js","./ContentSlot.705ac277.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Icon.98b2431d.js"),["./Icon.98b2431d.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./List.504b668f.js"),["./List.504b668f.js","./entry.d025ab79.js","./entry.d4a0e373.css","./Markdown.a556ca6f.js","./ContentSlot.705ac277.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./MarkdownBlock.27d6824c.js"),["./MarkdownBlock.27d6824c.js","./Markdown.a556ca6f.js","./ContentSlot.705ac277.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ColorModeSwitch.6c3f6cfc.js"),["./ColorModeSwitch.6c3f6cfc.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Navbar.4acc2f8e.js"),["./Navbar.4acc2f8e.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentDoc.8c4f5cfc.js"),["./ContentDoc.8c4f5cfc.js","./entry.d025ab79.js","./entry.d4a0e373.css","./head.46dc42ab.js","./ContentRenderer.ea214dde.js","./ContentRendererMarkdown.a345bdab.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.685d91fb.js","./asyncData.051fdc42.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentList.b2af78d9.js"),["./ContentList.b2af78d9.js","./ContentQuery.685d91fb.js","./entry.d025ab79.js","./entry.d4a0e373.css","./asyncData.051fdc42.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>q),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentQuery.685d91fb.js"),["./ContentQuery.685d91fb.js","./entry.d025ab79.js","./entry.d4a0e373.css","./asyncData.051fdc42.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentRenderer.ea214dde.js"),["./ContentRenderer.ea214dde.js","./ContentRendererMarkdown.a345bdab.js","./entry.d025ab79.js","./entry.d4a0e373.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentRendererMarkdown.a345bdab.js"),["./ContentRendererMarkdown.a345bdab.js","./entry.d025ab79.js","./entry.d4a0e373.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentSlot.705ac277.js"),["./ContentSlot.705ac277.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenEmpty.60ffffd4.js"),["./DocumentDrivenEmpty.60ffffd4.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenNotFound.042d63e2.js"),["./DocumentDrivenNotFound.042d63e2.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Markdown.a556ca6f.js"),["./Markdown.a556ca6f.js","./ContentSlot.705ac277.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseA.4bc10bbf.js"),["./ProseA.4bc10bbf.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseBlockquote.564ae859.js"),["./ProseBlockquote.564ae859.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCode.35b3b370.js"),["./ProseCode.35b3b370.js","./entry.d025ab79.js","./entry.d4a0e373.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCodeInline.570dd34f.js"),["./ProseCodeInline.570dd34f.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseEm.1445ebd4.js"),["./ProseEm.1445ebd4.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH1.d2ec15bb.js"),["./ProseH1.d2ec15bb.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH2.1f2e0432.js"),["./ProseH2.1f2e0432.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH3.24317026.js"),["./ProseH3.24317026.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH4.93392e6e.js"),["./ProseH4.93392e6e.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH5.4faa5752.js"),["./ProseH5.4faa5752.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH6.15aa04af.js"),["./ProseH6.15aa04af.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseHr.3a1e8f38.js"),["./ProseHr.3a1e8f38.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseImg.7039f010.js"),["./ProseImg.7039f010.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseLi.2967a0dd.js"),["./ProseLi.2967a0dd.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseOl.11e6bf67.js"),["./ProseOl.11e6bf67.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseP.09c27d68.js"),["./ProseP.09c27d68.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseStrong.1564039c.js"),["./ProseStrong.1564039c.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTable.2f61d8fd.js"),["./ProseTable.2f61d8fd.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTbody.9e6e1b07.js"),["./ProseTbody.9e6e1b07.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTd.66297012.js"),["./ProseTd.66297012.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTh.8e8c5029.js"),["./ProseTh.8e8c5029.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseThead.ade6a3b3.js"),["./ProseThead.ade6a3b3.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTr.6194119f.js"),["./ProseTr.6194119f.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseUl.510a902b.js"),["./ProseUl.510a902b.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./welcome.2ad295df.js"),["./welcome.2ad295df.js","./entry.d025ab79.js","./entry.d4a0e373.css","./asyncData.051fdc42.js","./Markdown.a556ca6f.js","./ContentSlot.705ac277.js","./ContentDoc.8c4f5cfc.js","./head.46dc42ab.js","./ContentRenderer.ea214dde.js","./ContentRendererMarkdown.a345bdab.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.685d91fb.js","./ContentList.b2af78d9.js","./DocumentDrivenEmpty.60ffffd4.js","./DocumentDrivenNotFound.042d63e2.js","./ProseCode.35b3b370.js","./ProseCode.e63e49c6.css","./layout.960d32af.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./layout.960d32af.js"),["./layout.960d32af.js","./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>x),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.d025ab79.js").then(t=>t.ah),["./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>N),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>z),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.d025ab79.js").then(t=>t.af),["./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>C),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.d025ab79.js").then(t=>t.ai),["./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.d025ab79.js").then(t=>t.aj),["./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.d025ab79.js").then(t=>t.ag),["./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.NoScript));e(()=>r(()=>import("./entry.d025ab79.js").then(t=>t.ag),["./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.Link));e(()=>r(()=>import("./entry.d025ab79.js").then(t=>t.ag),["./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.Base));e(()=>r(()=>import("./entry.d025ab79.js").then(t=>t.ag),["./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.Title));e(()=>r(()=>import("./entry.d025ab79.js").then(t=>t.ag),["./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.Meta));e(()=>r(()=>import("./entry.d025ab79.js").then(t=>t.ag),["./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.Style));e(()=>r(()=>import("./entry.d025ab79.js").then(t=>t.ag),["./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.Head));e(()=>r(()=>import("./entry.d025ab79.js").then(t=>t.ag),["./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.Html));e(()=>r(()=>import("./entry.d025ab79.js").then(t=>t.ag),["./entry.d025ab79.js","./entry.d4a0e373.css"],import.meta.url).then(t=>t.Body));const k=p({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:o}=A(t),_=f(()=>{var u;return typeof((u=o.value)==null?void 0:u.params)=="function"?o.value.params():o.value});if(!_.value&&D("dd-navigation").value){const{navigation:u}=R();return{navigation:u}}const{data:i}=await b(`content-navigation-${V(_.value)}`,()=>y(_.value));return{navigation:i}},render(t){const o=g(),{navigation:_}=t,i=n=>d(c,{to:n._path},()=>n.title),u=(n,m)=>d("ul",m?{"data-level":m}:null,n.map(l=>l.children?d("li",null,[i(l),u(l.children,m+1)]):d("li",null,i(l)))),a=n=>u(n,0);return o!=null&&o.default?o.default({navigation:_,...this.$attrs}):a(_)}}),q=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"}));export{k as default};