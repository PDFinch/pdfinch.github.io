import{i as p,C as f,B as v,G as O,a as T,H as I,m as d,k as h,d as e,_ as r,y as A,I as D,J as R,z as V,j as g,K as c,L as y}from"./entry.0d02052c.js";import{u as b}from"./asyncData.569bda39.js";import"./Markdown.1a19a13b.js";import"./ContentDoc.88c625be.js";import"./ContentList.643e5d30.js";import"./ContentQuery.4857f1ab.js";import"./ContentSlot.78245ea7.js";import"./ProseCode.187f4512.js";import"./head.28a71d5c.js";const x=p({emits:{error(t){return!0}},setup(t,{slots:o,emit:_}){const n=f(null),i=v();return O(u=>{if(!i.isHydrating)return _("error",u),n.value=u,!1}),()=>{var u,a;return n.value?(u=o.error)==null?void 0:u.call(o,{error:n}):(a=o.default)==null?void 0:a.call(o)}}}),S=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"})),j=p({name:"ServerPlaceholder",render(){return T("div")}}),N=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),$=p({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t){const o=C({duration:t.duration,throttle:t.throttle}),_=v();return _.hook("page:start",o.start),_.hook("page:finish",o.finish),I(()=>o.clear),()=>d("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${o.progress.value}%`,height:`${t.height}px`,opacity:o.isLoading.value?1:0,background:t.color,backgroundSize:`${100/o.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}})}});function C(t){const o=f(0),_=f(!1),n=h(()=>1e4/t.duration);let i=null,u=null;function a(){l(),o.value=0,_.value=!0,t.throttle?u=setTimeout(E,t.throttle):E()}function m(){o.value=100,P()}function l(){clearInterval(i),clearTimeout(u),i=null,u=null}function s(L){o.value=Math.min(100,o.value+L)}function P(){l(),setTimeout(()=>{_.value=!1,setTimeout(()=>{o.value=0},400)},500)}function E(){i=setInterval(()=>{s(n.value)},100)}return{progress:o,isLoading:_,start:a,finish:m,clear:l}}const z=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));e(()=>r(()=>import("./Alert.46d36067.js"),["Alert.46d36067.js","entry.0d02052c.js","entry.a7dc6196.css","Markdown.1a19a13b.js","ContentSlot.78245ea7.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Icon.94e794d1.js"),["Icon.94e794d1.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./List.1e953a76.js"),["List.1e953a76.js","entry.0d02052c.js","entry.a7dc6196.css","Markdown.1a19a13b.js","ContentSlot.78245ea7.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./MarkdownBlock.c210e09d.js"),["MarkdownBlock.c210e09d.js","Markdown.1a19a13b.js","ContentSlot.78245ea7.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ColorModeSwitch.828e62a9.js"),["ColorModeSwitch.828e62a9.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Navbar.4e1148c2.js"),["Navbar.4e1148c2.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentDoc.88c625be.js"),["ContentDoc.88c625be.js","entry.0d02052c.js","entry.a7dc6196.css","head.28a71d5c.js","ContentQuery.4857f1ab.js","asyncData.569bda39.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentList.643e5d30.js"),["ContentList.643e5d30.js","ContentQuery.4857f1ab.js","entry.0d02052c.js","entry.a7dc6196.css","asyncData.569bda39.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>M),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentQuery.4857f1ab.js"),["ContentQuery.4857f1ab.js","entry.0d02052c.js","entry.a7dc6196.css","asyncData.569bda39.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.0d02052c.js").then(t=>t.a1),["entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.0d02052c.js").then(t=>t.a0),["entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentSlot.78245ea7.js"),["ContentSlot.78245ea7.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.0d02052c.js").then(t=>t.$),["entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.0d02052c.js").then(t=>t.a2),["entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Markdown.1a19a13b.js"),["Markdown.1a19a13b.js","ContentSlot.78245ea7.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseA.e4d4f4be.js"),["ProseA.e4d4f4be.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseBlockquote.ccada6f5.js"),["ProseBlockquote.ccada6f5.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCode.187f4512.js"),["ProseCode.187f4512.js","ProseCode.e63e49c6.css","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCodeInline.35def542.js"),["ProseCodeInline.35def542.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseEm.e20551f0.js"),["ProseEm.e20551f0.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH1.bfd4ce24.js"),["ProseH1.bfd4ce24.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH2.f913c89e.js"),["ProseH2.f913c89e.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH3.9b661b33.js"),["ProseH3.9b661b33.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH4.699215c0.js"),["ProseH4.699215c0.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH5.9e00dedc.js"),["ProseH5.9e00dedc.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH6.de5f9736.js"),["ProseH6.de5f9736.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseHr.8de6604f.js"),["ProseHr.8de6604f.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseImg.c297a089.js"),["ProseImg.c297a089.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseLi.0c404039.js"),["ProseLi.0c404039.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseOl.31a0cd34.js"),["ProseOl.31a0cd34.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseP.2f68fa64.js"),["ProseP.2f68fa64.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseStrong.9c582d86.js"),["ProseStrong.9c582d86.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTable.dc8219e7.js"),["ProseTable.dc8219e7.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTbody.c78bbc9c.js"),["ProseTbody.c78bbc9c.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTd.933eafde.js"),["ProseTd.933eafde.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTh.c03c26bb.js"),["ProseTh.c03c26bb.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseThead.c8844082.js"),["ProseThead.c8844082.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTr.85b3b681.js"),["ProseTr.85b3b681.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseUl.9276ff62.js"),["ProseUl.9276ff62.js","entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./welcome.8d89c245.js"),["welcome.8d89c245.js","entry.0d02052c.js","entry.a7dc6196.css","asyncData.569bda39.js","Markdown.1a19a13b.js","ContentSlot.78245ea7.js","ContentDoc.88c625be.js","head.28a71d5c.js","ContentQuery.4857f1ab.js","ContentList.643e5d30.js","ProseCode.187f4512.js","ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.0d02052c.js").then(t=>t.a3),["entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>S),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.0d02052c.js").then(t=>t.a4),["entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>N),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.0d02052c.js").then(t=>t.Z),["entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>z),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.0d02052c.js").then(t=>t.a5),["entry.0d02052c.js","entry.a7dc6196.css"],import.meta.url).then(t=>t.default||t));const B=p({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:o}=A(t),_=h(()=>{var i;return typeof((i=o.value)==null?void 0:i.params)=="function"?o.value.params():o.value});if(!_.value&&D("dd-navigation").value){const{navigation:i}=R();return{navigation:i}}const{data:n}=await b(`content-navigation-${V(_.value)}`,()=>c(_.value));return{navigation:n}},render(t){const o=g(),{navigation:_}=t,n=a=>d(y,{to:a._path},()=>a.title),i=(a,m)=>d("ul",m?{"data-level":m}:null,a.map(l=>l.children?d("li",null,[n(l),i(l.children,m+1)]):d("li",null,n(l)))),u=a=>i(a,0);return o!=null&&o.default?o.default({navigation:_,...this.$attrs}):u(_)}}),M=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));export{B as default};