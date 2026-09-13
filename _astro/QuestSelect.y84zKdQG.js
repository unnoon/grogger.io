import{o as e,t}from"./react.0T9Avz-T.js";import{t as n}from"./jsx-runtime.Dshd5hIJ.js";import{t as r}from"./react.CV3ICbpF.js";import{n as i,t as a}from"./use-reduced-motion.HA0y0GQb.js";import{n as o,t as s}from"./use-spring.K8OUhxTw.js";var c=e(t(),1),l=n(),u=`
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
`;function d({quest:e}){let t=(0,c.useRef)(null),[n,r]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let e=t.current;if(!e)return;let n=new IntersectionObserver(([e])=>e.isIntersecting&&r(!0),{rootMargin:`100%`}),i=!1,a=()=>{i&&!document.hidden?e.play().catch(()=>{}):e.pause()},o=new IntersectionObserver(([e])=>{i=e.isIntersecting,a()});return n.observe(e),o.observe(e),document.addEventListener(`visibilitychange`,a),()=>{n.disconnect(),o.disconnect(),document.removeEventListener(`visibilitychange`,a)}},[]),(0,l.jsx)(`video`,{ref:t,className:`cga-media`,muted:!0,loop:!0,playsInline:!0,preload:`metadata`,poster:e.thumb,src:n&&e.video?e.video:void 0})}function f({quest:e}){return(0,l.jsxs)(`div`,{className:`qs-media cga-frame w-full h-full`,style:{aspectRatio:String(e.ratio)},children:[e.video?(0,l.jsx)(d,{quest:e}):(0,l.jsx)(`img`,{className:`cga-media`,src:e.thumb,alt:``,loading:`lazy`}),(0,l.jsx)(`div`,{className:`cga-duo`}),(0,l.jsx)(`div`,{className:`cga-dither`}),(0,l.jsx)(`div`,{className:`qs-scrim`}),(0,l.jsx)(`h3`,{className:`qs-title lowercase`,children:e.name})]})}function p({quest:e,index:t}){return(0,l.jsxs)(`div`,{className:`mt-3 flex items-baseline justify-between font-mono text-xs text-base-400`,children:[(0,l.jsxs)(`span`,{children:[(0,l.jsxs)(`span`,{className:`text-accent-400`,children:[`lv `,String(t+1).padStart(2,`0`)]}),` · `,e.year,e.tags.length>0&&(0,l.jsxs)(`span`,{className:`text-base-500`,children:[` · `,e.tags.join(` / `)]})]}),(0,l.jsx)(`span`,{className:`qs-cta text-accent-400`,children:`view quest →`})]})}var m=`min(38vh, 355px)`;function h({quest:e,index:t}){return(0,l.jsxs)(`a`,{href:`/grogger.io/projects/${e.slug}`,className:`qs-slide cga-group group shrink-0`,style:{width:`calc(${m} * ${e.ratio})`},children:[(0,l.jsx)(f,{quest:e}),(0,l.jsx)(p,{quest:e,index:t})]})}function g({quests:e}){let t=(0,c.useRef)(null),n=(0,c.useRef)(null),a=(0,c.useRef)(null),[u,d]=(0,c.useState)([0,0]),f=e.filter((e,t)=>t%2==0),p=e.filter((e,t)=>t%2==1);(0,c.useLayoutEffect)(()=>{let e=()=>{let e=e=>e?Math.max(0,e.scrollWidth-window.innerWidth):0;d([e(n.current),e(a.current)])};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let m=Math.max(u[0],u[1]),{scrollYProgress:g}=i({target:t,offset:[`start start`,`end end`]}),_=s(g,{stiffness:120,damping:24,mass:.4}),v=e=>Math.min(1,Math.max(0,(e-.04)/(.85-.04))),y=o(_,e=>-(u[0]*v(e))),b=o(_,e=>-(u[1]*v(e))),x=o(g,e=>`${(v(e)*100).toFixed(1)}%`),S=o(g,t=>String(Math.max(1,Math.min(e.length,Math.floor(v(t)*e.length)+1))).padStart(2,`0`));return(0,l.jsx)(`div`,{ref:t,style:{height:`calc(100vh + ${Math.round(m*1.23)}px)`},children:(0,l.jsx)(`div`,{className:`sticky top-0 h-screen overflow-hidden flex flex-col justify-center`,children:(0,l.jsxs)(r.div,{className:`relative flex flex-col justify-center h-full`,initial:{opacity:0,scaleY:.02},whileInView:{opacity:1,scaleY:1},viewport:{once:!0,amount:.2},transition:{duration:.7,ease:[.16,1,.3,1]},children:[(0,l.jsx)(`div`,{className:`qs-corner border-t-2 border-l-2`,style:{top:`4vh`,left:`3vw`}}),(0,l.jsx)(`div`,{className:`qs-corner border-t-2 border-r-2`,style:{top:`4vh`,right:`3vw`}}),(0,l.jsx)(`div`,{className:`qs-corner border-b-2 border-l-2`,style:{bottom:`4vh`,left:`3vw`}}),(0,l.jsx)(`div`,{className:`qs-corner border-b-2 border-r-2`,style:{bottom:`4vh`,right:`3vw`}}),(0,l.jsx)(`div`,{className:`absolute left-[6vw] right-[6vw] flex justify-between font-mono text-xs text-base-400`,style:{top:`4vh`},children:(0,l.jsxs)(`span`,{children:[`> quest.log --scroll ·`,` `,(0,l.jsx)(r.span,{className:`text-accent-400`,children:S}),` / `,String(e.length).padStart(2,`0`)]})}),(0,l.jsxs)(`div`,{className:`flex flex-col justify-center gap-[2vh]`,children:[(0,l.jsx)(r.div,{ref:n,style:{x:y},className:`flex items-end gap-[2.5vw] pl-[10vw] pr-[14vw] will-change-transform`,children:f.map((e,t)=>(0,l.jsx)(h,{quest:e,index:t*2},e.slug))}),(0,l.jsx)(r.div,{ref:a,style:{x:b},className:`flex items-start gap-[2.5vw] pl-[16vw] pr-[10vw] will-change-transform`,children:p.map((e,t)=>(0,l.jsx)(h,{quest:e,index:t*2+1},e.slug))})]}),(0,l.jsxs)(`div`,{className:`absolute left-[6vw] right-[6vw] flex items-center gap-4`,style:{bottom:`4vh`},children:[(0,l.jsx)(`div`,{className:`h-1 flex-1 rounded-full bg-white/10 overflow-hidden`,children:(0,l.jsx)(r.div,{className:`h-full rounded-full`,style:{width:x,background:`linear-gradient(90deg, #4df3ff, #ff4fd8)`}})}),(0,l.jsx)(`span`,{className:`font-mono text-[10px] text-base-500`,children:`xp`})]})]})})})}function _({quests:e}){return(0,l.jsx)(`div`,{className:`mx-auto max-w-5xl px-6 flex flex-col gap-10 py-6`,children:e.map((e,t)=>(0,l.jsxs)(`a`,{href:`/grogger.io/projects/${e.slug}`,className:`qs-slide cga-group group`,children:[(0,l.jsx)(f,{quest:e}),(0,l.jsx)(p,{quest:e,index:t})]},e.slug))})}function v({quests:e}){let[t,n]=(0,c.useState)(null),r=a();return(0,c.useEffect)(()=>{let e=window.matchMedia(`(min-width: 768px)`),t=()=>n(r||!e.matches?`v`:`h`);return t(),e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[r]),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`style`,{children:u}),t===`h`&&(0,l.jsx)(g,{quests:e}),t===`v`&&(0,l.jsx)(_,{quests:e})]})}export{v as default};