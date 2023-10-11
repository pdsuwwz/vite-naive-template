import{d as v,L as V,O as y,an as M,j as w,i as h,m as l,F as x,G as m,ao as E,H as P,ap as L,p as D,a9 as W,U as H,a6 as K,aq as A,Y as F,D as Y,ar as q,as as k,o as _,b as I,e as o,at as G,au as U,ah as X,_ as J,r as Q,c as g,w as b,ac as z,av as f,aw as O,ad as Z,ak as ee,ax as $,ay as te}from"./index-a88ff201.js";import{N as se,p as ne,f as oe}from"./Popover-b5e86151.js";import{N as ie}from"./Icon-58cfbb8d.js";import"./get-772e0117.js";const ae=Object.assign(Object.assign({},ne),y.props),re=v({name:"Tooltip",props:ae,__popover__:!0,setup(e){const{mergedClsPrefixRef:s}=V(e),t=y("Tooltip","-tooltip",void 0,M,e,s),n=w(null);return Object.assign(Object.assign({},{syncPosition(){n.value.syncPosition()},setShow(a){n.value.setShow(a)}}),{popoverRef:n,mergedTheme:t,popoverThemeOverrides:h(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:s}=this;return l(se,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:s.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),ce=x([x("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),m("spin-container",{position:"relative"},[m("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[E()])]),m("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),m("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[P("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),m("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),m("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[P("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),le={small:20,medium:18,large:16},de=Object.assign(Object.assign({},y.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),pe=v({name:"Spin",props:de,setup(e){const{mergedClsPrefixRef:s,inlineThemeDisabled:t}=V(e),n=y("Spin","-spin",ce,L,e,s),r=h(()=>{const{size:i}=e,{common:{cubicBezierEaseInOut:c},self:u}=n.value,{opacitySpinning:j,color:B,textColor:N}=u,R=typeof i=="number"?D(i):u[W("size",i)];return{"--n-bezier":c,"--n-opacity-spinning":j,"--n-size":R,"--n-color":B,"--n-text-color":N}}),a=t?H("spin",h(()=>{const{size:i}=e;return typeof i=="number"?String(i):i[0]}),r,e):void 0,d=oe(e,["spinning","show"]),p=w(!1);return K(i=>{let c;if(d.value){const{delay:u}=e;if(u){c=window.setTimeout(()=>{p.value=!0},u),i(()=>{clearTimeout(c)});return}}p.value=d.value}),{mergedClsPrefix:s,active:p,mergedStrokeWidth:h(()=>{const{strokeWidth:i}=e;if(i!==void 0)return i;const{size:c}=e;return le[typeof c=="number"?"medium":c]}),cssVars:t?void 0:r,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e,s;const{$slots:t,mergedClsPrefix:n,description:r}=this,a=t.icon&&this.rotate,d=(r||t.description)&&l("div",{class:`${n}-spin-description`},r||((e=t.description)===null||e===void 0?void 0:e.call(t))),p=t.icon?l("div",{class:[`${n}-spin-body`,this.themeClass]},l("div",{class:[`${n}-spin`,a&&`${n}-spin--rotate`],style:t.default?"":this.cssVars},t.icon()),d):l("div",{class:[`${n}-spin-body`,this.themeClass]},l(A,{clsPrefix:n,style:t.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${n}-spin`}),d);return(s=this.onRender)===null||s===void 0||s.call(this),t.default?l("div",{class:[`${n}-spin-container`,this.themeClass],style:this.cssVars},l("div",{class:[`${n}-spin-content`,this.active&&`${n}-spin-content--spinning`]},t),l(F,{name:"fade-in-transition"},{default:()=>this.active?p:null})):p}});function ue(){const e=Y(q,null);return h(()=>{if(e===null)return k;const{mergedThemeRef:{value:s},mergedThemeOverridesRef:{value:t}}=e,n=(s==null?void 0:s.common)||k;return t!=null&&t.common?Object.assign({},n,t.common):n})}const me={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},_e=o("path",{d:"M10 16.5l6-4.5l-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z",fill:"currentColor"},null,-1),he=[_e],fe=v({name:"PlayCircleOutlineOutlined",render:function(s,t){return _(),I("svg",me,he)}}),ve={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},ge=o("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm4-4H8V8h8v8z",fill:"currentColor"},null,-1),ye=[ge],be=v({name:"StopCircleOutlined",render:function(s,t){return _(),I("svg",ve,ye)}}),C=v({name:"ProjectItem",components:{},props:{dataset:{type:Object,default(){return{}}}},setup(e){const s=ue(),t=w(!1),n=h(()=>e.dataset.isPublished?be:fe);G();async function r(a){t.value||(t.value=!0,await X(1e3),t.value=!1,e.dataset.isPublished?window.$ModalMessage.info("停止发布"):window.$ModalMessage.success("发布成功"),e.dataset.isPublished=!e.dataset.isPublished)}return{themeVars:s,isLoading:t,getActionIcon:n,handlePublish:r}}}),T=()=>{U(e=>({"943a1342":e.themeVars.primaryColor}))},S=C.setup;C.setup=S?(e,s)=>(T(),S(e,s)):T;const we=C;const Ce={class:"project-item-container bg-#fff dark:bg-#3c3c3c"},je={style:{flex:"1","min-width":"0"}},xe={class:"project-item__name"},Pe={class:"project-item__name-left"},ke={class:"project-item__name-desc"},ze={class:"project-item__name-desc__corpname"},Oe={class:"project-item__name-desc__corpname-maintext text_nowrap"},$e={class:"project-item__name-desc__fullname text_nowrap"},Te={style:{width:"18.5%",flex:"initial"},class:"text_nowrap"},Se={class:"project-item-action__icon"},Ve={class:"project-item-action__status"};function Ie(e,s,t,n,r,a){const d=te,p=re,i=ie,c=pe,u=Q("router-link");return _(),g(u,{to:`/result/${e.dataset.id}/overview`},{default:b(()=>[o("ul",Ce,[o("li",je,[o("div",xe,[o("div",Pe,[z(d,{icon:"iconfile"})]),o("div",ke,[o("div",ze,[o("span",Oe,f(e.dataset.corpName),1),o("span",{onClick:s[0]||(s[0]=O(()=>{},["prevent"]))},[e.dataset.notes?(_(),g(p,{key:0},{trigger:b(()=>[z(d,{icon:"iconhelp",class:"corpname-notes"})]),default:b(()=>[Z(f(e.dataset.notes)+" ",1)]),_:1})):ee("",!0)])]),o("p",$e,f(e.dataset.name),1)])])]),o("li",Te,f(e.dataset.createTime),1),o("li",{class:$(["project-item-action text_nowrap",{active:e.dataset.isPublished,loading:e.isLoading}]),onClick:s[1]||(s[1]=O(j=>e.handlePublish(e.dataset.id),["prevent"]))},[o("span",Se,[e.isLoading?(_(),g(c,{key:1,size:16})):(_(),g(i,{key:0,component:e.getActionIcon,class:$({"c-#666 dark:c-#eee":!e.dataset.isPublished})},null,8,["component","class"]))]),o("span",Ve,f(e.dataset.isPublished?"停止":"发布"),1)],2)])]),_:1},8,["to"])}const Ee=J(we,[["render",Ie],["__scopeId","data-v-cc0b8ee5"]]);export{Ee as default};
