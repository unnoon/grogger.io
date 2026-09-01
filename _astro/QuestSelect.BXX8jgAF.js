import{o as e,t}from"./react.0T9Avz-T.js";import{t as n}from"./jsx-runtime.Dshd5hIJ.js";import{A as r,C as i,D as a,E as o,O as s,S as c,T as l,_ as u,a as d,b as f,c as p,d as m,g as h,h as g,j as _,l as v,o as ee,s as te,t as y,u as b,w as ne,x,y as re}from"./react.CV3ICbpF.js";import{n as S,t as ie}from"./use-spring.K8OUhxTw.js";function C(e,t){let n,r=()=>{let{currentTime:r}=t,i=(r===null?0:r.value)/100;n!==i&&e(i),n=i};return c.preUpdate(r,!0),()=>x(r)}function w(e){return typeof window>`u`?!1:e?u():h()}var T=50,E=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),ae=()=>({time:0,x:E(),y:E()}),D={x:{length:`Width`,position:`Left`},y:{length:`Height`,position:`Top`}};function O(e,t,n,r){let i=n[t],{length:a,position:o}=D[t],s=i.current,c=n.time;i.current=Math.abs(e[`scroll${o}`]),i.scrollLength=e[`scroll${a}`]-e[`client${a}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=l(0,i.scrollLength,i.current);let u=r-c;i.velocity=u>T?0:ne(i.current-s,u)}function oe(e,t,n){O(e,`x`,t,n),O(e,`y`,t,n),t.time=n}function se(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(m(r))n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName===`svg`){let e=r.getBoundingClientRect();r=r.parentElement;let t=r.getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else if(r instanceof SVGGraphicsElement){let{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let i=null,a=r.parentNode;for(;!i;)a.tagName===`svg`&&(i=a),a=r.parentNode;r=i}else break;return n}var k={start:0,center:.5,end:1};function A(e,t,n=0){let r=0;if(e in k&&(e=k[e]),typeof e==`string`){let t=parseFloat(e);e.endsWith(`px`)?r=t:e.endsWith(`%`)?e=t/100:e.endsWith(`vw`)?r=t/100*document.documentElement.clientWidth:e.endsWith(`vh`)?r=t/100*document.documentElement.clientHeight:e=t}return typeof e==`number`&&(r=t*e),n+r}var j=[0,0];function ce(e,t,n,r){let i=Array.isArray(e)?e:j,a=0,o=0;return typeof e==`number`?i=[e,e]:typeof e==`string`&&(e=e.trim(),i=e.includes(` `)?e.split(` `):[e,k[e]?e:`0`]),a=A(i[0],n,r),o=A(i[1],t),a-o}var M={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},le={x:0,y:0};function ue(e){return`getBBox`in e&&e.tagName!==`svg`?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function de(e,t,n){let{offset:r=M.All}=n,{target:i=e,axis:a=`y`}=n,o=a===`y`?`height`:`width`,c=i===e?le:se(i,e),l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:ue(i),u={width:e.clientWidth,height:e.clientHeight};t[a].offset.length=0;let d=!t[a].interpolate,p=r.length;for(let e=0;e<p;e++){let n=ce(r[e],u[o],l[o],c[a]);!d&&n!==t[a].interpolatorOffsets[e]&&(d=!0),t[a].offset[e]=n}d&&(t[a].interpolate=f(t[a].offset,re(r),{clamp:!1}),t[a].interpolatorOffsets=[...t[a].offset]),t[a].progress=s(0,1,t[a].interpolate(t[a].current))}function fe(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function pe(e,t,n,r={}){return{measure:t=>{fe(e,r.target,n),oe(e,n,t),(r.offset||r.target)&&de(e,n,r)},notify:()=>t(n)}}var N=new WeakMap,P=new WeakMap,F=new WeakMap,I=new WeakMap,L=new WeakMap,R=e=>e===document.scrollingElement?window:e;function z(e,{container:t=document.scrollingElement,trackContentSize:n=!1,...r}={}){if(!t)return o;let a=F.get(t);a||(a=new Set,F.set(t,a));let s=pe(t,e,ae(),r);if(a.add(s),!N.has(t)){let e=()=>{for(let e of a)e.measure(i.timestamp);c.preUpdate(n)},n=()=>{for(let e of a)e.notify()},r=()=>c.read(e);N.set(t,r);let o=R(t);window.addEventListener(`resize`,r),t!==document.documentElement&&P.set(t,p(t,r)),o.addEventListener(`scroll`,r),r()}if(n&&!L.has(t)){let e=N.get(t),n={width:t.scrollWidth,height:t.scrollHeight};I.set(t,n);let r=c.read(()=>{let r=t.scrollWidth,i=t.scrollHeight;(n.width!==r||n.height!==i)&&(e(),n.width=r,n.height=i)},!0);L.set(t,r)}let l=N.get(t);return c.read(l,!1,!0),()=>{x(l);let e=F.get(t);if(!e||(e.delete(s),e.size))return;let n=N.get(t);N.delete(t),n&&(R(t).removeEventListener(`scroll`,n),P.get(t)?.(),window.removeEventListener(`resize`,n));let r=L.get(t);r&&(x(r),L.delete(t)),I.delete(t)}}var B=[[M.Enter,`entry`],[M.Exit,`exit`],[M.Any,`cover`],[M.All,`contain`]],V={start:0,end:1};function me(e){let t=e.trim().split(/\s+/);if(t.length!==2)return;let n=V[t[0]],r=V[t[1]];if(n!==void 0&&r!==void 0)return[n,r]}function he(e){if(e.length!==2)return;let t=[];for(let n of e)if(Array.isArray(n))t.push(n);else if(typeof n==`string`){let e=me(n);if(!e)return;t.push(e)}else return;return t}function ge(e,t){let n=he(e);if(!n)return!1;for(let e=0;e<2;e++){let r=n[e],i=t[e];if(r[0]!==i[0]||r[1]!==i[1])return!1}return!0}function H(e){if(!e)return{rangeStart:`contain 0%`,rangeEnd:`contain 100%`};for(let[t,n]of B)if(ge(e,t))return{rangeStart:`${n} 0%`,rangeEnd:`${n} 100%`}}var U=new Map;function W(e){let t={value:0};return{currentTime:t,cancel:z(n=>{t.value=n[e.axis].progress*100},e)}}function G({source:e,container:t,...n}){let{axis:r}=n;e&&(t=e);let i=U.get(t);i||(i=new Map,U.set(t,i));let a=n.target??`self`,o=i.get(a);o||(o={},i.set(a,o));let s=r+(n.offset??[]).join(`,`);return o[s]||(n.target&&w(n.target)?H(n.offset)?o[s]=new ViewTimeline({subject:n.target,axis:r}):o[s]=W({container:t,...n}):w()?o[s]=new ScrollTimeline({source:t,axis:r}):o[s]=W({container:t,...n})),o[s]}function _e(e,t){let n=G(t),r=t.target?H(t.offset):void 0,i=t.target?w(t.target)&&!!r:w();return e.attachTimeline({timeline:i?n:void 0,...r&&i&&{rangeStart:r.rangeStart,rangeEnd:r.rangeEnd},observe:e=>(e.pause(),C(t=>{e.time=e.iterationDuration*t},n))})}function ve(e){return e&&(e.target||e.offset)}function ye(e){return e.length===2}function be(e,t){return ye(e)||ve(t)?z(n=>{e(n[t.axis].progress,n)},t):C(e,G(t))}function K(e,{axis:t=`y`,container:n=document.scrollingElement,...r}={}){if(!n)return o;let i={axis:t,container:n,...r};return typeof e==`function`?be(e,i):_e(e,i)}var q=e(t(),1),xe=()=>({scrollX:g(0),scrollY:g(0),scrollXProgress:g(0),scrollYProgress:g(0)}),J=e=>e?!e.current:!1;function Y(e,t,n,r){return{factory:i=>{let a,o=()=>{if(J(n)||J(r)){b.read(o);return}a=K(i,{...t,axis:e,container:n?.current||void 0,target:r?.current||void 0})};return b.read(o),()=>{v(o),a?.()}},times:[0,1],keyframes:[0,1],ease:e=>e,duration:1}}function Se(e,t){return typeof window>`u`?!1:e?u()&&!!H(t):h()}function Ce({container:e,target:t,...n}={}){let i=_(xe);Se(t,n.offset)&&(i.scrollXProgress.accelerate=Y(`x`,n,e,t),i.scrollYProgress.accelerate=Y(`y`,n,e,t));let o=(0,q.useRef)(null),s=(0,q.useRef)(!1),c=(0,q.useCallback)(()=>(o.current=K((e,{x:t,y:n})=>{i.scrollX.set(t.current),i.scrollXProgress.set(t.progress),i.scrollY.set(n.current),i.scrollYProgress.set(n.progress)},{...n,container:e?.current||void 0,target:t?.current||void 0}),()=>{o.current?.()}),[e,t,JSON.stringify(n.offset)]);return r(()=>{if(s.current=!1,J(e)||J(t)){s.current=!0;return}return c()},[c]),(0,q.useEffect)(()=>{if(!s.current)return;let n,r=()=>{let r=J(e),i=J(t);a(!r,`Container ref is defined but not hydrated`,`use-scroll-ref`),a(!i,`Target ref is defined but not hydrated`,`use-scroll-ref`),!r&&!i&&(n=c())};return b.read(r),()=>{v(r),n?.()}},[c]),i}function we(){!ee.current&&d();let[e]=(0,q.useState)(te.current);return e}var X=n(),Te=`
.qs-slide {
  outline: none;
}
.qs-slide:focus-visible .qs-media {
  box-shadow: 0 0 0 2px #06040b, 0 0 0 4px #4df3ff;
}
.qs-media {
  border-radius: 0.75rem;
  border: 1px solid rgba(238, 247, 246, 0.08);
}
.qs-media video,
.qs-media img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.01);
  transition: filter 0.45s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.qs-slide:nth-child(3n + 2) .cga-duo {
  background: linear-gradient(160deg, #ff4fd8 0%, #7a3bff 55%, #4df3ff 100%);
}
.qs-slide:nth-child(3n) .cga-duo {
  background: linear-gradient(200deg, #4df3ff 0%, #3ddce0 60%, #2a6cf0 100%);
}
.qs-slide:hover .qs-media video,
.qs-slide:focus-visible .qs-media video,
.qs-slide:hover .qs-media img,
.qs-slide:focus-visible .qs-media img {
  transform: scale(1.045);
}
.qs-title {
  position: absolute;
  left: 1.25rem;
  bottom: 0.9rem;
  z-index: 2;
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.02em;
  color: #eef7f6;
  font-size: clamp(1.3rem, 2.3vw, 2.2rem);
  text-shadow: 2px 0 0 rgba(77, 243, 255, 0.85), -2px 0 0 rgba(255, 79, 216, 0.85);
  transition: text-shadow 0.25s ease;
}
.qs-slide:hover .qs-title,
.qs-slide:focus-visible .qs-title {
  animation: qs-jitter 0.3s steps(2) both;
  text-shadow: 1px 0 0 rgba(77, 243, 255, 0.5), -1px 0 0 rgba(255, 79, 216, 0.5);
}
@keyframes qs-jitter {
  0% { transform: translate(0, 0); }
  25% { transform: translate(-3px, 1px); }
  50% { transform: translate(3px, -1px); }
  75% { transform: translate(-1px, 0); }
  100% { transform: translate(0, 0); }
}
.qs-scrim {
  position: absolute;
  inset: auto 0 0 0;
  height: 45%;
  pointer-events: none;
  background: linear-gradient(0deg, rgba(6, 4, 11, 0.8), transparent);
  z-index: 1;
}
.qs-cta {
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.qs-slide:hover .qs-cta,
.qs-slide:focus-visible .qs-cta {
  opacity: 1;
  transform: translateX(0);
}
.qs-corner {
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  border-color: rgba(238, 247, 246, 0.35);
  pointer-events: none;
}
@keyframes qs-flicker {
  0% { opacity: 0; }
  35% { opacity: 1; }
  45% { opacity: 0.4; }
  55% { opacity: 1; }
  70% { opacity: 0.7; }
  100% { opacity: 1; }
}
.qs-boot {
  animation: qs-flicker 0.5s steps(2) both;
}
`;function Z({quest:e}){return(0,X.jsxs)(`div`,{className:`qs-media cga-frame w-full h-full`,style:{aspectRatio:String(e.ratio)},children:[e.video?(0,X.jsx)(`video`,{className:`cga-media`,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:`metadata`,poster:e.thumb,children:(0,X.jsx)(`source`,{src:e.video,type:e.video.endsWith(`.webm`)?`video/webm`:`video/mp4`})}):(0,X.jsx)(`img`,{className:`cga-media`,src:e.thumb,alt:``,loading:`lazy`}),(0,X.jsx)(`div`,{className:`cga-duo`}),(0,X.jsx)(`div`,{className:`cga-dither`}),(0,X.jsx)(`div`,{className:`qs-scrim`}),(0,X.jsx)(`h3`,{className:`qs-title lowercase`,children:e.name})]})}function Q({quest:e,index:t}){return(0,X.jsxs)(`div`,{className:`mt-3 flex items-baseline justify-between font-mono text-xs text-base-400`,children:[(0,X.jsxs)(`span`,{children:[(0,X.jsxs)(`span`,{className:`text-accent-400`,children:[`lv `,String(t+1).padStart(2,`0`)]}),` · `,e.year,e.tags.length>0&&(0,X.jsxs)(`span`,{className:`text-base-500`,children:[` · `,e.tags.join(` / `)]})]}),(0,X.jsx)(`span`,{className:`qs-cta text-accent-400`,children:`view quest →`})]})}var Ee=`min(38vh, 355px)`;function $({quest:e,index:t}){return(0,X.jsxs)(`a`,{href:`/grogger.io/projects/${e.slug}`,className:`qs-slide cga-group group shrink-0`,style:{width:`calc(${Ee} * ${e.ratio})`},children:[(0,X.jsx)(Z,{quest:e}),(0,X.jsx)(Q,{quest:e,index:t})]})}function De({quests:e}){let t=(0,q.useRef)(null),n=(0,q.useRef)(null),r=(0,q.useRef)(null),[i,a]=(0,q.useState)([0,0]),o=e.filter((e,t)=>t%2==0),s=e.filter((e,t)=>t%2==1);(0,q.useLayoutEffect)(()=>{let e=()=>{let e=e=>e?Math.max(0,e.scrollWidth-window.innerWidth):0;a([e(n.current),e(r.current)])};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let c=Math.max(i[0],i[1]),{scrollYProgress:l}=Ce({target:t,offset:[`start start`,`end end`]}),u=ie(l,{stiffness:120,damping:24,mass:.4}),d=e=>Math.min(1,Math.max(0,(e-.04)/(.85-.04))),f=S(u,e=>-(i[0]*d(e))),p=S(u,e=>-(i[1]*d(e))),m=S(l,e=>`${(d(e)*100).toFixed(1)}%`),h=S(l,t=>String(Math.max(1,Math.min(e.length,Math.floor(d(t)*e.length)+1))).padStart(2,`0`));return(0,X.jsx)(`div`,{ref:t,style:{height:`calc(100vh + ${Math.round(c*1.23)}px)`},children:(0,X.jsx)(`div`,{className:`sticky top-0 h-screen overflow-hidden flex flex-col justify-center`,children:(0,X.jsxs)(y.div,{className:`relative flex flex-col justify-center h-full`,initial:{opacity:0,scaleY:.02},whileInView:{opacity:1,scaleY:1},viewport:{once:!0,amount:.2},transition:{duration:.7,ease:[.16,1,.3,1]},children:[(0,X.jsx)(`div`,{className:`qs-corner border-t-2 border-l-2`,style:{top:`4vh`,left:`3vw`}}),(0,X.jsx)(`div`,{className:`qs-corner border-t-2 border-r-2`,style:{top:`4vh`,right:`3vw`}}),(0,X.jsx)(`div`,{className:`qs-corner border-b-2 border-l-2`,style:{bottom:`4vh`,left:`3vw`}}),(0,X.jsx)(`div`,{className:`qs-corner border-b-2 border-r-2`,style:{bottom:`4vh`,right:`3vw`}}),(0,X.jsx)(`div`,{className:`absolute left-[6vw] right-[6vw] flex justify-between font-mono text-xs text-base-400`,style:{top:`4vh`},children:(0,X.jsxs)(`span`,{children:[`> quest.log --scroll ·`,` `,(0,X.jsx)(y.span,{className:`text-accent-400`,children:h}),` / `,String(e.length).padStart(2,`0`)]})}),(0,X.jsxs)(`div`,{className:`flex flex-col justify-center gap-[2vh]`,children:[(0,X.jsx)(y.div,{ref:n,style:{x:f},className:`flex items-end gap-[2.5vw] pl-[10vw] pr-[14vw] will-change-transform`,children:o.map((e,t)=>(0,X.jsx)($,{quest:e,index:t*2},e.slug))}),(0,X.jsx)(y.div,{ref:r,style:{x:p},className:`flex items-start gap-[2.5vw] pl-[16vw] pr-[10vw] will-change-transform`,children:s.map((e,t)=>(0,X.jsx)($,{quest:e,index:t*2+1},e.slug))})]}),(0,X.jsxs)(`div`,{className:`absolute left-[6vw] right-[6vw] flex items-center gap-4`,style:{bottom:`4vh`},children:[(0,X.jsx)(`div`,{className:`h-1 flex-1 rounded-full bg-white/10 overflow-hidden`,children:(0,X.jsx)(y.div,{className:`h-full rounded-full`,style:{width:m,background:`linear-gradient(90deg, #4df3ff, #ff4fd8)`}})}),(0,X.jsx)(`span`,{className:`font-mono text-[10px] text-base-500`,children:`xp`})]})]})})})}function Oe({quests:e}){return(0,X.jsx)(`div`,{className:`mx-auto max-w-5xl px-6 flex flex-col gap-10 py-6`,children:e.map((e,t)=>(0,X.jsxs)(`a`,{href:`/grogger.io/projects/${e.slug}`,className:`qs-slide cga-group group`,children:[(0,X.jsx)(Z,{quest:e}),(0,X.jsx)(Q,{quest:e,index:t})]},e.slug))})}function ke({quests:e}){let[t,n]=(0,q.useState)(null),r=we();return(0,q.useEffect)(()=>{let e=window.matchMedia(`(min-width: 768px)`),t=()=>n(r||!e.matches?`v`:`h`);return t(),e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[r]),(0,X.jsxs)(`div`,{children:[(0,X.jsx)(`style`,{children:Te}),t===`h`&&(0,X.jsx)(De,{quests:e}),t===`v`&&(0,X.jsx)(Oe,{quests:e})]})}export{ke as default};