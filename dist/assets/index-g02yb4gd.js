import{i as le,p as b,g as z,c as f,a as Y,d as je,b as Ve,e as Lt,f as Pt,h as Et,j as o,F as Ae,u as Ie,m as $,k as R,l as X,n as I,o as K,q as Oe,t as B,r as N,s as Z,v as Bt,w as Me,x as $t,y as J,z as A,A as Nt,B as Tt,C as zt,D as Ge,E as Rt,G as jt,H as ve,I as At,J as x,K as re,L as Q,M as Ot,N as Mt,T as Gt,O as j,S as me,P as Ht,Q as Wt,R as He,U as Dt,V as Le,W as We,X as Ft,Y as Pe,Z as oe,_ as De,$ as ee,a0 as ge,a1 as he,a2 as Ut,a3 as qt,a4 as Yt,a5 as Fe,a6 as Ue,a7 as E,a8 as ne,a9 as ye}from"./index-Sy068LWa.js";const Xt=["top","bottom"],Kt=["start","end","left","right"];function Zt(e,t){let[a,n]=e.split(" ");return n||(n=le(Xt,a)?"start":le(Kt,a)?"top":"center"),{side:Ee(a,t),align:Ee(n,t)}}function Ee(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}const Jt="data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M261.126%20140.65L164.624%20307.732L256.001%20466L377.028%20256.5L498.001%2047H315.192L261.126%20140.65Z'%20fill='%231697F6'/%3e%3cpath%20d='M135.027%20256.5L141.365%20267.518L231.64%20111.178L268.731%2047H256H14L135.027%20256.5Z'%20fill='%23AEDDFF'/%3e%3cpath%20d='M315.191%2047C360.935%20197.446%20256%20466%20256%20466L164.624%20307.732L315.191%2047Z'%20fill='%231867C0'/%3e%3cpath%20d='M268.731%2047C76.0026%2047%20141.366%20267.518%20141.366%20267.518L268.731%2047Z'%20fill='%237BC6FF'/%3e%3c/svg%3e",qe=b({border:[Boolean,Number,String]},"border");function Ye(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return{borderClasses:f(()=>{const n=Y(e)?e.value:e.border,s=[];if(n===!0||n==="")s.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const i of String(n).split(" "))s.push(`border-${i}`);return s})}}const Qt=[null,"default","comfortable","compact"],Xe=b({density:{type:String,default:"default",validator:e=>Qt.includes(e)}},"density");function Ke(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return{densityClasses:f(()=>`${t}--density-${e.density}`)}}const Ze=b({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Je(e){return{elevationClasses:f(()=>{const a=Y(e)?e.value:e.elevation,n=[];return a==null||n.push(`elevation-${a}`),n})}}const Qe=b({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return{roundedClasses:f(()=>{const n=Y(e)?e.value:e.rounded,s=[];if(n===!0||n==="")s.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const i of String(n).split(" "))s.push(`rounded-${i}`);return s})}}function tt(e){return je(()=>{const t=[],a={};if(e.value.background)if(Ve(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text&&Lt(e.value.background)){const n=Pt(e.value.background);if(n.a==null||n.a===1){const s=Et(n);a.color=s,a.caretColor=s}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(Ve(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:a}})}function ue(e,t){const a=f(()=>({text:Y(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:s}=tt(a);return{textColorClasses:n,textColorStyles:s}}const en=["elevated","flat","tonal","outlined","text","plain"];function tn(e,t){return o(Ae,null,[e&&o("span",{key:"overlay",class:`${t}__overlay`},null),o("span",{key:"underlay",class:`${t}__underlay`},null)])}const nt=b({color:String,variant:{type:String,default:"elevated",validator:e=>en.includes(e)}},"variant");function nn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();const a=f(()=>{const{variant:i}=Ie(e);return`${t}--variant-${i}`}),{colorClasses:n,colorStyles:s}=tt(f(()=>{const{variant:i,color:l}=Ie(e);return{[["elevated","flat"].includes(i)?"background":"text"]:l}}));return{colorClasses:n,colorStyles:s,variantClasses:a}}const at=b({divided:Boolean,...qe(),...$(),...Xe(),...Ze(),...Qe(),...R(),...X(),...nt()},"VBtnGroup"),Be=I()({name:"VBtnGroup",props:at(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=K(e),{densityClasses:s}=Ke(e),{borderClasses:i}=Ye(e),{elevationClasses:l}=Je(e),{roundedClasses:r}=et(e);Oe({VBtn:{height:"auto",color:B(e,"color"),density:B(e,"density"),flat:!0,variant:B(e,"variant")}}),N(()=>o(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,i.value,s.value,l.value,r.value,e.class],style:e.style},a))}}),an=b({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),sn=b({value:null,disabled:Boolean,selectedClass:String},"group-item");function ln(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=Z("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=Bt();Me(Symbol.for(`${t.description}:id`),s);const i=$t(t,null);if(!i){if(!a)return i;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const l=B(e,"value"),r=f(()=>!!(i.disabled.value||e.disabled));i.register({id:s,value:l,disabled:r},n),J(()=>{i.unregister(s)});const u=f(()=>i.isSelected(s)),g=f(()=>u.value&&[i.selectedClass.value,e.selectedClass]);return A(u,m=>{n.emit("group:selected",{value:m})}),{id:s,isSelected:u,toggle:()=>i.select(s,!u.value),select:m=>i.select(s,m),selectedClass:g,value:l,disabled:r,group:i}}function rn(e,t){let a=!1;const n=Nt([]),s=Tt(e,"modelValue",[],c=>c==null?[]:st(n,Rt(c)),c=>{const v=un(n,c);return e.multiple?v:v[0]}),i=Z("useGroup");function l(c,v){const C=c,y=Symbol.for(`${t.description}:id`),S=jt(y,i==null?void 0:i.vnode).indexOf(v);S>-1?n.splice(S,0,C):n.push(C)}function r(c){if(a)return;u();const v=n.findIndex(C=>C.id===c);n.splice(v,1)}function u(){const c=n.find(v=>!v.disabled);c&&e.mandatory==="force"&&!s.value.length&&(s.value=[c.id])}zt(()=>{u()}),J(()=>{a=!0});function g(c,v){const C=n.find(y=>y.id===c);if(!(v&&(C!=null&&C.disabled)))if(e.multiple){const y=s.value.slice(),w=y.findIndex(h=>h===c),S=~w;if(v=v??!S,S&&e.mandatory&&y.length<=1||!S&&e.max!=null&&y.length+1>e.max)return;w<0&&v?y.push(c):w>=0&&!v&&y.splice(w,1),s.value=y}else{const y=s.value.includes(c);if(e.mandatory&&y)return;s.value=v??!y?[c]:[]}}function m(c){if(e.multiple,s.value.length){const v=s.value[0],C=n.findIndex(S=>S.id===v);let y=(C+c)%n.length,w=n[y];for(;w.disabled&&y!==C;)y=(y+c)%n.length,w=n[y];if(w.disabled)return;s.value=[n[y].id]}else{const v=n.find(C=>!C.disabled);v&&(s.value=[v.id])}}const _={register:l,unregister:r,selected:s,select:g,disabled:B(e,"disabled"),prev:()=>m(n.length-1),next:()=>m(1),isSelected:c=>s.value.includes(c),selectedClass:f(()=>e.selectedClass),items:f(()=>n),getItemIndex:c=>on(n,c)};return Me(t,_),_}function on(e,t){const a=st(e,[t]);return a.length?e.findIndex(n=>n.id===a[0]):-1}function st(e,t){const a=[];return t.forEach(n=>{const s=e.find(l=>Ge(n,l.value)),i=e[n];(s==null?void 0:s.value)!=null?a.push(s.id):i!=null&&a.push(i.id)}),a}function un(e,t){const a=[];return t.forEach(n=>{const s=e.findIndex(i=>i.id===n);if(~s){const i=e[s];a.push(i.value!=null?i.value:s)}}),a}const it=Symbol.for("vuetify:v-btn-toggle"),cn=b({...at(),...an()},"VBtnToggle");I()({name:"VBtnToggle",props:cn(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{isSelected:n,next:s,prev:i,select:l,selected:r}=rn(e,it);return N(()=>{const u=Be.filterProps(e);return o(Be,ve({class:["v-btn-toggle",e.class]},u,{style:e.style}),{default:()=>{var g;return[(g=a.default)==null?void 0:g.call(a,{isSelected:n,next:s,prev:i,select:l,selected:r})]}})}),{next:s,prev:i,select:l}}});const dn=b({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),ae=I(!1)({name:"VDefaultsProvider",props:dn(),setup(e,t){let{slots:a}=t;const{defaults:n,disabled:s,reset:i,root:l,scoped:r}=At(e);return Oe(n,{reset:i,root:l,scoped:r,disabled:s}),()=>{var u;return(u=a.default)==null?void 0:u.call(a)}}}),fn=["x-small","small","default","large","x-large"],be=b({size:{type:[String,Number],default:"default"}},"size");function _e(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return je(()=>{let a,n;return le(fn,e.size)?a=`${t}--size-${e.size}`:e.size&&(n={width:x(e.size),height:x(e.size)}),{sizeClasses:a,sizeStyles:n}})}const vn=b({color:String,start:Boolean,end:Boolean,icon:re,...$(),...be(),...R({tag:"i"}),...X()},"VIcon"),O=I()({name:"VIcon",props:vn(),setup(e,t){let{attrs:a,slots:n}=t;const s=Q(),{themeClasses:i}=K(e),{iconData:l}=Ot(f(()=>s.value||e.icon)),{sizeClasses:r}=_e(e),{textColorClasses:u,textColorStyles:g}=ue(B(e,"color"));return N(()=>{var _,c;const m=(_=n.default)==null?void 0:_.call(n);return m&&(s.value=(c=Mt(m).filter(v=>v.type===Gt&&v.children&&typeof v.children=="string")[0])==null?void 0:c.children),o(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",i.value,r.value,u.value,{"v-icon--clickable":!!a.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[r.value?void 0:{fontSize:x(e.size),height:x(e.size),width:x(e.size)},g.value,e.style],role:a.onClick?"button":void 0,"aria-hidden":!a.onClick},{default:()=>[m]})}),{}}});function mn(e,t){const a=Q(),n=j(!1);if(me){const s=new IntersectionObserver(i=>{e==null||e(i,s),n.value=!!i.find(l=>l.isIntersecting)},t);J(()=>{s.disconnect()}),A(a,(i,l)=>{l&&(s.unobserve(l),n.value=!1),i&&s.observe(i)},{flush:"post"})}return{intersectionRef:a,isIntersecting:n}}const gn=b({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...$(),...be(),...R({tag:"div"}),...X()},"VProgressCircular"),hn=I()({name:"VProgressCircular",props:gn(),setup(e,t){let{slots:a}=t;const n=20,s=2*Math.PI*n,i=Q(),{themeClasses:l}=K(e),{sizeClasses:r,sizeStyles:u}=_e(e),{textColorClasses:g,textColorStyles:m}=ue(B(e,"color")),{textColorClasses:_,textColorStyles:c}=ue(B(e,"bgColor")),{intersectionRef:v,isIntersecting:C}=mn(),{resizeRef:y,contentRect:w}=Ht(),S=f(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),h=f(()=>Number(e.width)),k=f(()=>u.value?Number(e.size):w.value?w.value.width:Math.max(h.value,32)),T=f(()=>n/(1-h.value/k.value)*2),P=f(()=>h.value/k.value*T.value),M=f(()=>x((100-S.value)/100*s));return Wt(()=>{v.value=i.value,y.value=i.value}),N(()=>o(e.tag,{ref:i,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":C.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},l.value,r.value,g.value,e.class],style:[u.value,m.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[o("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${T.value} ${T.value}`},[o("circle",{class:["v-progress-circular__underlay",_.value],style:c.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":P.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),o("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":P.value,"stroke-dasharray":s,"stroke-dashoffset":M.value},null)]),a.default&&o("div",{class:"v-progress-circular__content"},[a.default({value:S.value})])]})),{}}}),lt=b({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function rt(e){return{dimensionStyles:f(()=>({height:x(e.height),maxHeight:x(e.maxHeight),maxWidth:x(e.maxWidth),minHeight:x(e.minHeight),minWidth:x(e.minWidth),width:x(e.width)}))}}const $e={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},yn=b({location:String},"location");function bn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=He();return{locationStyles:f(()=>{if(!e.location)return{};const{side:i,align:l}=Zt(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function r(g){return a?a(g):0}const u={};return i!=="center"&&(t?u[$e[i]]=`calc(100% - ${r(i)}px)`:u[i]=0),l!=="center"?t?u[$e[l]]=`calc(100% - ${r(l)}px)`:u[l]=0:(i==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),u})}}const _n=b({loading:[Boolean,String]},"loader");function Cn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return{loaderClasses:f(()=>({[`${t}--loading`]:e.loading}))}}const Sn=["static","relative","fixed","absolute","sticky"],pn=b({position:{type:String,validator:e=>Sn.includes(e)}},"position");function wn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return{positionClasses:f(()=>e.position?`${t}--${e.position}`:void 0)}}function kn(){const e=Z("useRoute");return f(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function xn(e,t){const a=Dt("RouterLink"),n=f(()=>!!(e.href||e.to)),s=f(()=>(n==null?void 0:n.value)||Le(t,"click")||Le(e,"click"));if(typeof a=="string")return{isLink:n,isClickable:s,href:B(e,"href")};const i=e.to?a.useLink(e):void 0,l=kn();return{isLink:n,isClickable:s,route:i==null?void 0:i.route,navigate:i==null?void 0:i.navigate,isActive:i&&f(()=>{var r,u,g;return e.exact?l.value?((g=i.isExactActive)==null?void 0:g.value)&&Ge(i.route.value.query,l.value.query):(u=i.isExactActive)==null?void 0:u.value:(r=i.isActive)==null?void 0:r.value}),href:f(()=>e.to?i==null?void 0:i.route.value.href:e.href)}}const Vn=b({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function In(e,t){A(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&t&&We(()=>{t(!0)})},{immediate:!0})}const ce=Symbol("rippleStop"),Ln=80;function Ne(e,t){e.style.transform=t,e.style.webkitTransform=t}function de(e){return e.constructor.name==="TouchEvent"}function ot(e){return e.constructor.name==="KeyboardEvent"}const Pn=function(e,t){var _;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,s=0;if(!ot(e)){const c=t.getBoundingClientRect(),v=de(e)?e.touches[e.touches.length-1]:e;n=v.clientX-c.left,s=v.clientY-c.top}let i=0,l=.3;(_=t._ripple)!=null&&_.circle?(l=.15,i=t.clientWidth/2,i=a.center?i:i+Math.sqrt((n-i)**2+(s-i)**2)/4):i=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const r=`${(t.clientWidth-i*2)/2}px`,u=`${(t.clientHeight-i*2)/2}px`,g=a.center?r:`${n-i}px`,m=a.center?u:`${s-i}px`;return{radius:i,scale:l,x:g,y:m,centerX:r,centerY:u}},q={show(e,t){var v;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((v=t==null?void 0:t._ripple)!=null&&v.enabled))return;const n=document.createElement("span"),s=document.createElement("span");n.appendChild(s),n.className="v-ripple__container",a.class&&(n.className+=` ${a.class}`);const{radius:i,scale:l,x:r,y:u,centerX:g,centerY:m}=Pn(e,t,a),_=`${i*2}px`;s.className="v-ripple__animation",s.style.width=_,s.style.height=_,t.appendChild(n);const c=window.getComputedStyle(t);c&&c.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),Ne(s,`translate(${r}, ${u}) scale3d(${l},${l},${l})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),Ne(s,`translate(${g}, ${m}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const a=t[t.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const n=performance.now()-Number(a.dataset.activated),s=Math.max(250-n,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var r;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((r=a.parentNode)==null?void 0:r.parentNode)===e&&e.removeChild(a.parentNode)},300)},s)}};function ut(e){return typeof e>"u"||!!e}function W(e){const t={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[ce])){if(e[ce]=!0,de(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(t.center=a._ripple.centered||ot(e),a._ripple.class&&(t.class=a._ripple.class),de(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{q.show(e,a,t)},a._ripple.showTimer=window.setTimeout(()=>{var n;(n=a==null?void 0:a._ripple)!=null&&n.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},Ln)}else q.show(e,a,t)}}function Te(e){e[ce]=!0}function V(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{V(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),q.hide(t)}}function ct(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let D=!1;function dt(e){!D&&(e.keyCode===Pe.enter||e.keyCode===Pe.space)&&(D=!0,W(e))}function ft(e){D=!1,V(e)}function vt(e){D&&(D=!1,V(e))}function mt(e,t,a){const{value:n,modifiers:s}=t,i=ut(n);if(i||q.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=i,e._ripple.centered=s.center,e._ripple.circle=s.circle,Ft(n)&&n.class&&(e._ripple.class=n.class),i&&!a){if(s.stop){e.addEventListener("touchstart",Te,{passive:!0}),e.addEventListener("mousedown",Te);return}e.addEventListener("touchstart",W,{passive:!0}),e.addEventListener("touchend",V,{passive:!0}),e.addEventListener("touchmove",ct,{passive:!0}),e.addEventListener("touchcancel",V),e.addEventListener("mousedown",W),e.addEventListener("mouseup",V),e.addEventListener("mouseleave",V),e.addEventListener("keydown",dt),e.addEventListener("keyup",ft),e.addEventListener("blur",vt),e.addEventListener("dragstart",V,{passive:!0})}else!i&&a&&gt(e)}function gt(e){e.removeEventListener("mousedown",W),e.removeEventListener("touchstart",W),e.removeEventListener("touchend",V),e.removeEventListener("touchmove",ct),e.removeEventListener("touchcancel",V),e.removeEventListener("mouseup",V),e.removeEventListener("mouseleave",V),e.removeEventListener("keydown",dt),e.removeEventListener("keyup",ft),e.removeEventListener("dragstart",V),e.removeEventListener("blur",vt)}function En(e,t){mt(e,t,!1)}function Bn(e){delete e._ripple,gt(e)}function $n(e,t){if(t.value===t.oldValue)return;const a=ut(t.oldValue);mt(e,t,a)}const Nn={mounted:En,unmounted:Bn,updated:$n},Tn=b({active:{type:Boolean,default:void 0},symbol:{type:null,default:it},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:re,appendIcon:re,block:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...qe(),...$(),...Xe(),...lt(),...Ze(),...sn(),..._n(),...yn(),...pn(),...Qe(),...Vn(),...be(),...R({tag:"button"}),...X(),...nt({variant:"elevated"})},"VBtn"),se=I()({name:"VBtn",directives:{Ripple:Nn},props:Tn(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:a,slots:n}=t;const{themeClasses:s}=K(e),{borderClasses:i}=Ye(e),{colorClasses:l,colorStyles:r,variantClasses:u}=nn(e),{densityClasses:g}=Ke(e),{dimensionStyles:m}=rt(e),{elevationClasses:_}=Je(e),{loaderClasses:c}=Cn(e),{locationStyles:v}=bn(e),{positionClasses:C}=wn(e),{roundedClasses:y}=et(e),{sizeClasses:w,sizeStyles:S}=_e(e),h=ln(e,e.symbol,!1),k=xn(e,a),T=f(()=>{var d;return e.active!==void 0?e.active:k.isLink.value?(d=k.isActive)==null?void 0:d.value:h==null?void 0:h.isSelected.value}),P=f(()=>(h==null?void 0:h.disabled.value)||e.disabled),M=f(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),te=f(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function F(d){var p;P.value||k.isLink.value&&(d.metaKey||d.ctrlKey||d.shiftKey||d.button!==0||a.target==="_blank")||((p=k.navigate)==null||p.call(k,d),h==null||h.toggle())}return In(k,h==null?void 0:h.select),N(()=>{var pe,we;const d=k.isLink.value?"a":e.tag,p=!!(e.prependIcon||n.prepend),L=!!(e.appendIcon||n.append),G=!!(e.icon&&e.icon!==!0),H=(h==null?void 0:h.isSelected.value)&&(!k.isLink.value||((pe=k.isActive)==null?void 0:pe.value))||!h||((we=k.isActive)==null?void 0:we.value);return oe(o(d,{type:d==="a"?void 0:"button",class:["v-btn",h==null?void 0:h.selectedClass.value,{"v-btn--active":T.value,"v-btn--block":e.block,"v-btn--disabled":P.value,"v-btn--elevated":M.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},s.value,i.value,H?l.value:void 0,g.value,_.value,c.value,C.value,y.value,w.value,u.value,e.class],style:[H?r.value:void 0,m.value,v.value,S.value,e.style],disabled:P.value||void 0,href:k.href.value,onClick:F,value:te.value},{default:()=>{var ke;return[tn(!0,"v-btn"),!e.icon&&p&&o("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?o(ae,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):o(O,{key:"prepend-icon",icon:e.prependIcon},null)]),o("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&G?o(O,{key:"content-icon",icon:e.icon},null):o(ae,{key:"content-defaults",disabled:!G,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var xe;return[((xe=n.default)==null?void 0:xe.call(n))??e.text]}})]),!e.icon&&L&&o("span",{key:"append",class:"v-btn__append"},[n.append?o(ae,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):o(O,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&o("span",{key:"loader",class:"v-btn__loader"},[((ke=n.loader)==null?void 0:ke.call(n))??o(hn,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[De("ripple"),!P.value&&e.ripple,null]])}),{group:h}}}),zn=b({fluid:{type:Boolean,default:!1},...$(),...R()},"VContainer"),Rn=I()({name:"VContainer",props:zn(),setup(e,t){let{slots:a}=t;const{rtlClasses:n}=He();return N(()=>o(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},n.value,e.class],style:e.style},a)),{}}}),ht=ee.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}),yt=ee.reduce((e,t)=>{const a="offset"+ge(t);return e[a]={type:[String,Number],default:null},e},{}),bt=ee.reduce((e,t)=>{const a="order"+ge(t);return e[a]={type:[String,Number],default:null},e},{}),ze={col:Object.keys(ht),offset:Object.keys(yt),order:Object.keys(bt)};function jn(e,t,a){let n=e;if(!(a==null||a===!1)){if(t){const s=t.replace(e,"");n+=`-${s}`}return e==="col"&&(n="v-"+n),e==="col"&&(a===""||a===!0)||(n+=`-${a}`),n.toLowerCase()}}const An=["auto","start","end","center","baseline","stretch"],On=b({cols:{type:[Boolean,String,Number],default:!1},...ht,offset:{type:[String,Number],default:null},...yt,order:{type:[String,Number],default:null},...bt,alignSelf:{type:String,default:null,validator:e=>An.includes(e)},...$(),...R()},"VCol"),ie=I()({name:"VCol",props:On(),setup(e,t){let{slots:a}=t;const n=f(()=>{const s=[];let i;for(i in ze)ze[i].forEach(r=>{const u=e[r],g=jn(i,r,u);g&&s.push(g)});const l=s.some(r=>r.startsWith("v-col-"));return s.push({"v-col":!l||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return he(e.tag,{class:[n.value,e.class],style:e.style},(s=a.default)==null?void 0:s.call(a))}}}),Ce=["start","end","center"],_t=["space-between","space-around","space-evenly"];function Se(e,t){return ee.reduce((a,n)=>{const s=e+ge(n);return a[s]=t(),a},{})}const Mn=[...Ce,"baseline","stretch"],Ct=e=>Mn.includes(e),St=Se("align",()=>({type:String,default:null,validator:Ct})),Gn=[...Ce,..._t],pt=e=>Gn.includes(e),wt=Se("justify",()=>({type:String,default:null,validator:pt})),Hn=[...Ce,..._t,"stretch"],kt=e=>Hn.includes(e),xt=Se("alignContent",()=>({type:String,default:null,validator:kt})),Re={align:Object.keys(St),justify:Object.keys(wt),alignContent:Object.keys(xt)},Wn={align:"align",justify:"justify",alignContent:"align-content"};function Dn(e,t,a){let n=Wn[e];if(a!=null){if(t){const s=t.replace(e,"");n+=`-${s}`}return n+=`-${a}`,n.toLowerCase()}}const Fn=b({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Ct},...St,justify:{type:String,default:null,validator:pt},...wt,alignContent:{type:String,default:null,validator:kt},...xt,...$(),...R()},"VRow"),Un=I()({name:"VRow",props:Fn(),setup(e,t){let{slots:a}=t;const n=f(()=>{const s=[];let i;for(i in Re)Re[i].forEach(l=>{const r=e[l],u=Dn(i,l,r);u&&s.push(u)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>{var s;return he(e.tag,{class:["v-row",n.value,e.class],style:e.style},(s=a.default)==null?void 0:s.call(a))}}});function qn(e){return{aspectStyles:f(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const Vt=b({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...$(),...lt()},"VResponsive"),fe=I()({name:"VResponsive",props:Vt(),setup(e,t){let{slots:a}=t;const{aspectStyles:n}=qn(e),{dimensionStyles:s}=rt(e);return N(()=>{var i;return o("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[o("div",{class:"v-responsive__sizer",style:n.value},null),(i=a.additional)==null?void 0:i.call(a),a.default&&o("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}}),Yn=b({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),U=(e,t)=>{let{slots:a}=t;const{transition:n,disabled:s,...i}=e,{component:l=Ut,...r}=typeof n=="object"?n:{};return he(l,ve(typeof n=="string"?{name:s?"":n}:r,i,{disabled:s}),a)};function Xn(e,t){if(!me)return;const a=t.modifiers||{},n=t.value,{handler:s,options:i}=typeof n=="object"?n:{handler:n,options:{}},l=new IntersectionObserver(function(){var _;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const g=(_=e._observe)==null?void 0:_[t.instance.$.uid];if(!g)return;const m=r.some(c=>c.isIntersecting);s&&(!a.quiet||g.init)&&(!a.once||m||g.init)&&s(m,r,u),m&&a.once?It(e,t):g.init=!0},i);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:l},l.observe(e)}function It(e,t){var n;const a=(n=e._observe)==null?void 0:n[t.instance.$.uid];a&&(a.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const Kn={mounted:Xn,unmounted:It},Zn=Kn,Jn=b({alt:String,cover:Boolean,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Vt(),...$(),...Yn()},"VImg"),Qn=I()({name:"VImg",directives:{intersect:Zn},props:Jn(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:a,slots:n}=t;const s=Z("VImg"),i=j(""),l=Q(),r=j(e.eager?"loading":"idle"),u=j(),g=j(),m=f(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),_=f(()=>m.value.aspect||u.value/g.value||0);A(()=>e.src,()=>{c(r.value!=="idle")}),A(_,(d,p)=>{!d&&p&&l.value&&S(l.value)}),qt(()=>c());function c(d){if(!(e.eager&&d)&&!(me&&!d&&!e.eager)){if(r.value="loading",m.value.lazySrc){const p=new Image;p.src=m.value.lazySrc,S(p,null)}m.value.src&&We(()=>{var p;a("loadstart",((p=l.value)==null?void 0:p.currentSrc)||m.value.src),setTimeout(()=>{var L;if(!s.isUnmounted)if((L=l.value)!=null&&L.complete){if(l.value.naturalWidth||C(),r.value==="error")return;_.value||S(l.value,null),r.value==="loading"&&v()}else _.value||S(l.value),y()})})}}function v(){var d;s.isUnmounted||(y(),S(l.value),r.value="loaded",a("load",((d=l.value)==null?void 0:d.currentSrc)||m.value.src))}function C(){var d;s.isUnmounted||(r.value="error",a("error",((d=l.value)==null?void 0:d.currentSrc)||m.value.src))}function y(){const d=l.value;d&&(i.value=d.currentSrc||d.src)}let w=-1;J(()=>{clearTimeout(w)});function S(d){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const L=()=>{if(clearTimeout(w),s.isUnmounted)return;const{naturalHeight:G,naturalWidth:H}=d;G||H?(u.value=H,g.value=G):!d.complete&&r.value==="loading"&&p!=null?w=window.setTimeout(L,p):(d.currentSrc.endsWith(".svg")||d.currentSrc.startsWith("data:image/svg+xml"))&&(u.value=1,g.value=1)};L()}const h=f(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),k=()=>{var L;if(!m.value.src||r.value==="idle")return null;const d=o("img",{class:["v-img__img",h.value],style:{objectPosition:e.position},src:m.value.src,srcset:m.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:l,onLoad:v,onError:C},null),p=(L=n.sources)==null?void 0:L.call(n);return o(U,{transition:e.transition,appear:!0},{default:()=>[oe(p?o("picture",{class:"v-img__picture"},[p,d]):d,[[Yt,r.value==="loaded"]])]})},T=()=>o(U,{transition:e.transition},{default:()=>[m.value.lazySrc&&r.value!=="loaded"&&o("img",{class:["v-img__img","v-img__img--preload",h.value],style:{objectPosition:e.position},src:m.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),P=()=>n.placeholder?o(U,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!n.error)&&o("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,M=()=>n.error?o(U,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&o("div",{class:"v-img__error"},[n.error()])]}):null,te=()=>e.gradient?o("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,F=j(!1);{const d=A(_,p=>{p&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{F.value=!0})}),d())})}return N(()=>{const d=fe.filterProps(e);return oe(o(fe,ve({class:["v-img",{"v-img--booting":!F.value},e.class],style:[{width:x(e.width==="auto"?u.value:e.width)},e.style]},d,{aspectRatio:_.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>o(Ae,null,[o(k,null,null),o(T,null,null),o(te,null,null),o(P,null,null),o(M,null,null)]),default:n.default}),[[De("intersect"),{handler:c,options:e.options},null,{once:!0}]])}),{currentSrc:i,image:l,state:r,naturalWidth:u,naturalHeight:g}}}),ea=ye("div",{class:"text-body-2 font-weight-light mb-n1"},"Welcome to",-1),ta=ye("h1",{class:"text-h2 font-weight-bold"},"Vuetify",-1),na=ye("div",{class:"py-14"},null,-1),aa={__name:"HelloWorld",setup(e){return(t,a)=>(Fe(),Ue(Rn,{class:"fill-height"},{default:E(()=>[o(fe,{class:"align-center text-center fill-height"},{default:E(()=>[o(Qn,{height:"300",src:Jt}),ea,ta,na,o(Un,{class:"d-flex align-center justify-center"},{default:E(()=>[o(ie,{cols:"auto"},{default:E(()=>[o(se,{href:"https://vuetifyjs.com/components/all/","min-width":"164",rel:"noopener noreferrer",target:"_blank",variant:"text"},{default:E(()=>[o(O,{icon:"mdi-view-dashboard",size:"large",start:""}),ne(" Components ")]),_:1})]),_:1}),o(ie,{cols:"auto"},{default:E(()=>[o(se,{color:"primary",href:"https://vuetifyjs.com/introduction/why-vuetify/#feature-guides","min-width":"228",rel:"noopener noreferrer",size:"x-large",target:"_blank",variant:"flat"},{default:E(()=>[o(O,{icon:"mdi-speedometer",size:"large",start:""}),ne(" Get Started ")]),_:1})]),_:1}),o(ie,{cols:"auto"},{default:E(()=>[o(se,{href:"https://community.vuetifyjs.com/","min-width":"164",rel:"noopener noreferrer",target:"_blank",variant:"text"},{default:E(()=>[o(O,{icon:"mdi-account-group",size:"large",start:""}),ne(" Community ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},ia={__name:"index",setup(e){return(t,a)=>{const n=aa;return Fe(),Ue(n)}}};export{ia as default};
