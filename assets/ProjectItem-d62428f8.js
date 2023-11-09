import{d as v,L as I,O as w,an as V,j,i as f,m as l,F as k,G as u,ao as B,H as z,ap as M,p as E,a9 as L,U as W,a6 as D,aq as H,Y as K,D as F,ar as Y,as as O,o as h,b as N,e as i,at as q,au as A,r as G,c as g,w as C,ac as T,av as _,aw as $,ad as U,ak as X,ax as S,ay as y,az as J,ah as Q,_ as Z}from"./index-26f50493.js";import{N as ee,p as te,f as se}from"./Popover-3aa34186.js";import{N as ne}from"./Icon-3687e299.js";import"./get-74f8369e.js";const oe=Object.assign(Object.assign({},te),w.props),ie=v({name:"Tooltip",props:oe,__popover__:!0,setup(e){const{mergedClsPrefixRef:n}=I(e),t=w("Tooltip","-tooltip",void 0,V,e,n),s=j(null);return Object.assign(Object.assign({},{syncPosition(){s.value.syncPosition()},setShow(a){s.value.setShow(a)}}),{popoverRef:s,mergedTheme:t,popoverThemeOverrides:f(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:n}=this;return l(ee,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:n.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),ae=k([k("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),u("spin-container",{position:"relative"},[u("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[B()])]),u("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),u("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[z("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),u("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),u("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[z("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),re={small:20,medium:18,large:16},ce=Object.assign(Object.assign({},w.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),le=v({name:"Spin",props:ce,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=I(e),s=w("Spin","-spin",ae,M,e,n),d=f(()=>{const{size:o}=e,{common:{cubicBezierEaseInOut:c},self:p}=s.value,{opacitySpinning:b,color:x,textColor:P}=p,R=typeof o=="number"?E(o):p[L("size",o)];return{"--n-bezier":c,"--n-opacity-spinning":b,"--n-size":R,"--n-color":x,"--n-text-color":P}}),a=t?W("spin",f(()=>{const{size:o}=e;return typeof o=="number"?String(o):o[0]}),d,e):void 0,m=se(e,["spinning","show"]),r=j(!1);return D(o=>{let c;if(m.value){const{delay:p}=e;if(p){c=window.setTimeout(()=>{r.value=!0},p),o(()=>{clearTimeout(c)});return}}r.value=m.value}),{mergedClsPrefix:n,active:r,mergedStrokeWidth:f(()=>{const{strokeWidth:o}=e;if(o!==void 0)return o;const{size:c}=e;return re[typeof c=="number"?"medium":c]}),cssVars:t?void 0:d,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e,n;const{$slots:t,mergedClsPrefix:s,description:d}=this,a=t.icon&&this.rotate,m=(d||t.description)&&l("div",{class:`${s}-spin-description`},d||((e=t.description)===null||e===void 0?void 0:e.call(t))),r=t.icon?l("div",{class:[`${s}-spin-body`,this.themeClass]},l("div",{class:[`${s}-spin`,a&&`${s}-spin--rotate`],style:t.default?"":this.cssVars},t.icon()),m):l("div",{class:[`${s}-spin-body`,this.themeClass]},l(H,{clsPrefix:s,style:t.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${s}-spin`}),m);return(n=this.onRender)===null||n===void 0||n.call(this),t.default?l("div",{class:[`${s}-spin-container`,this.themeClass],style:this.cssVars},l("div",{class:[`${s}-spin-content`,this.active&&`${s}-spin-content--spinning`]},t),l(K,{name:"fade-in-transition"},{default:()=>this.active?r:null})):r}});function de(){const e=F(Y,null);return f(()=>{if(e===null)return O;const{mergedThemeRef:{value:n},mergedThemeOverridesRef:{value:t}}=e,s=(n==null?void 0:n.common)||O;return t!=null&&t.common?Object.assign({},s,t.common):s})}const me={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},pe=i("path",{d:"M10 16.5l6-4.5l-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z",fill:"currentColor"},null,-1),ue=[pe],he=v({name:"PlayCircleOutlineOutlined",render:function(n,t){return h(),N("svg",me,ue)}}),fe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},_e=i("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm4-4H8V8h8v8z",fill:"currentColor"},null,-1),ve=[_e],ge=v({name:"StopCircleOutlined",render:function(n,t){return h(),N("svg",fe,ve)}}),ye={class:"project-item-container bg-#fff dark:bg-#3c3c3c"},we={style:{flex:"1","min-width":"0"}},be={class:"project-item__name"},xe={class:"project-item__name-left"},Ce={class:"project-item__name-desc"},je={class:"project-item__name-desc__corpname"},Pe={class:"project-item__name-desc__corpname-maintext text_nowrap"},ke={class:"project-item__name-desc__fullname text_nowrap"},ze={style:{width:"18.5%",flex:"initial"},class:"text_nowrap"},Oe={class:"project-item-action__icon"},Te={class:"project-item-action__status"},$e=v({name:"ProjectItem",__name:"ProjectItem",props:{dataset:{type:Object,default(){return{corpName:"",createTime:"",id:"",isPublished:!1,name:"",notes:""}}}},setup(e){q(m=>({d7f0725e:y(t).primaryColor}));const n=e,t=de(),s=j(!1),d=f(()=>n.dataset.isPublished?ge:he);A();async function a(m){s.value||(s.value=!0,await Q(1e3),s.value=!1,n.dataset.isPublished?window.$ModalMessage.info("停止发布"):window.$ModalMessage.success("发布成功"),n.dataset.isPublished=!n.dataset.isPublished)}return(m,r)=>{const o=J,c=ie,p=ne,b=le,x=G("router-link");return h(),g(x,{to:`/result/${e.dataset.id}/overview`},{default:C(()=>[i("ul",ye,[i("li",we,[i("div",be,[i("div",xe,[T(o,{icon:"iconfile"})]),i("div",Ce,[i("div",je,[i("span",Pe,_(e.dataset.corpName),1),i("span",{onClick:r[0]||(r[0]=$(()=>{},["prevent"]))},[e.dataset.notes?(h(),g(c,{key:0},{trigger:C(()=>[T(o,{icon:"iconhelp",class:"corpname-notes"})]),default:C(()=>[U(_(e.dataset.notes)+" ",1)]),_:1})):X("",!0)])]),i("p",ke,_(e.dataset.name),1)])])]),i("li",ze,_(e.dataset.createTime),1),i("li",{class:S(["project-item-action text_nowrap",{active:e.dataset.isPublished,loading:y(s)}]),onClick:r[1]||(r[1]=$(P=>a(e.dataset.id),["prevent"]))},[i("span",Oe,[y(s)?(h(),g(b,{key:1,size:16})):(h(),g(p,{key:0,component:y(d),class:S({"c-#666 dark:c-#eee":!e.dataset.isPublished})},null,8,["component","class"]))]),i("span",Te,_(e.dataset.isPublished?"停止":"发布"),1)],2)])]),_:1},8,["to"])}}});const Ve=Z($e,[["__scopeId","data-v-839a1ef0"]]);export{Ve as default};
