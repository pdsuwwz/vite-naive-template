import{d as _,L as T,O as v,an as N,j as V,i as m,m as l,F as j,G as d,ao as R,H as x,ap as M,p as E,a9 as L,U as D,aq as W,Y as H,D as K,ar as A,as as P,o as p,b as B,e as i,at as F,au as Y,ah as q,_ as G,r as U,c as f,w as y,ac as k,av as u,aw as z,ad as X,ak as J,ax as O,ay as Q}from"./index-fb10a317.js";import{N as Z,p as ee,f as te}from"./Popover-8d02dd90.js";import{N as se}from"./Icon-58e81bad.js";import"./get-32a02e71.js";const ne=Object.assign(Object.assign({},ee),v.props),oe=_({name:"Tooltip",props:ne,__popover__:!0,setup(e){const{mergedClsPrefixRef:s}=T(e),t=v("Tooltip","-tooltip",void 0,N,e,s),n=V(null);return Object.assign(Object.assign({},{syncPosition(){n.value.syncPosition()},setShow(a){n.value.setShow(a)}}),{popoverRef:n,mergedTheme:t,popoverThemeOverrides:m(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:s}=this;return l(Z,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:s.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),ie=j([j("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),d("spin-container",{position:"relative"},[d("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[R()])]),d("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),d("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[x("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),d("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),d("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[x("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),ae={small:20,medium:18,large:16},re=Object.assign(Object.assign({},v.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),ce=_({name:"Spin",props:re,setup(e){const{mergedClsPrefixRef:s,inlineThemeDisabled:t}=T(e),n=v("Spin","-spin",ie,M,e,s),r=m(()=>{const{size:o}=e,{common:{cubicBezierEaseInOut:c},self:h}=n.value,{opacitySpinning:g,color:b,textColor:C}=h,I=typeof o=="number"?E(o):h[L("size",o)];return{"--n-bezier":c,"--n-opacity-spinning":g,"--n-size":I,"--n-color":b,"--n-text-color":C}}),a=t?D("spin",m(()=>{const{size:o}=e;return typeof o=="number"?String(o):o[0]}),r,e):void 0;return{mergedClsPrefix:s,compitableShow:te(e,["spinning","show"]),mergedStrokeWidth:m(()=>{const{strokeWidth:o}=e;if(o!==void 0)return o;const{size:c}=e;return ae[typeof c=="number"?"medium":c]}),cssVars:t?void 0:r,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e,s;const{$slots:t,mergedClsPrefix:n,description:r}=this,a=t.icon&&this.rotate,o=(r||t.description)&&l("div",{class:`${n}-spin-description`},r||((e=t.description)===null||e===void 0?void 0:e.call(t))),c=t.icon?l("div",{class:[`${n}-spin-body`,this.themeClass]},l("div",{class:[`${n}-spin`,a&&`${n}-spin--rotate`],style:t.default?"":this.cssVars},t.icon()),o):l("div",{class:[`${n}-spin-body`,this.themeClass]},l(W,{clsPrefix:n,style:t.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${n}-spin`}),o);return(s=this.onRender)===null||s===void 0||s.call(this),t.default?l("div",{class:[`${n}-spin-container`,this.themeClass],style:this.cssVars},l("div",{class:[`${n}-spin-content`,this.compitableShow&&`${n}-spin-content--spinning`]},t),l(H,{name:"fade-in-transition"},{default:()=>this.compitableShow?c:null})):c}});function le(){const e=K(A,null);return m(()=>{if(e===null)return P;const{mergedThemeRef:{value:s},mergedThemeOverridesRef:{value:t}}=e,n=(s==null?void 0:s.common)||P;return t!=null&&t.common?Object.assign({},n,t.common):n})}const de={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},pe=i("path",{d:"M10 16.5l6-4.5l-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z",fill:"currentColor"},null,-1),me=[pe],ue=_({name:"PlayCircleOutlineOutlined",render:function(s,t){return p(),B("svg",de,me)}}),_e={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},he=i("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm4-4H8V8h8v8z",fill:"currentColor"},null,-1),fe=[he],ve=_({name:"StopCircleOutlined",render:function(s,t){return p(),B("svg",_e,fe)}}),w=_({name:"ProjectItem",components:{},props:{dataset:{type:Object,default(){return{}}}},setup(e){const s=le(),t=V(!1),n=m(()=>e.dataset.isPublished?ve:ue);F();async function r(a){t.value||(t.value=!0,await q(1e3),t.value=!1,e.dataset.isPublished?window.$ModalMessage.info("停止发布"):window.$ModalMessage.success("发布成功"),e.dataset.isPublished=!e.dataset.isPublished)}return{themeVars:s,isLoading:t,getActionIcon:n,handlePublish:r}}}),$=()=>{Y(e=>({"943a1342":e.themeVars.primaryColor}))},S=w.setup;w.setup=S?(e,s)=>($(),S(e,s)):$;const ge=w;const be={class:"project-item-container bg-#fff dark:bg-#3c3c3c"},ye={style:{flex:"1","min-width":"0"}},we={class:"project-item__name"},Ce={class:"project-item__name-left"},je={class:"project-item__name-desc"},xe={class:"project-item__name-desc__corpname"},Pe={class:"project-item__name-desc__corpname-maintext text_nowrap"},ke={class:"project-item__name-desc__fullname text_nowrap"},ze={style:{width:"18.5%",flex:"initial"},class:"text_nowrap"},Oe={class:"project-item-action__icon"},$e={class:"project-item-action__status"};function Se(e,s,t,n,r,a){const o=Q,c=oe,h=se,g=ce,b=U("router-link");return p(),f(b,{to:`/result/${e.dataset.id}/overview`},{default:y(()=>[i("ul",be,[i("li",ye,[i("div",we,[i("div",Ce,[k(o,{icon:"iconfile"})]),i("div",je,[i("div",xe,[i("span",Pe,u(e.dataset.corpName),1),i("span",{onClick:s[0]||(s[0]=z(()=>{},["prevent"]))},[e.dataset.notes?(p(),f(c,{key:0},{trigger:y(()=>[k(o,{icon:"iconhelp",class:"corpname-notes"})]),default:y(()=>[X(u(e.dataset.notes)+" ",1)]),_:1})):J("",!0)])]),i("p",ke,u(e.dataset.name),1)])])]),i("li",ze,u(e.dataset.createTime),1),i("li",{class:O(["project-item-action text_nowrap",{active:e.dataset.isPublished,loading:e.isLoading}]),onClick:s[1]||(s[1]=z(C=>e.handlePublish(e.dataset.id),["prevent"]))},[i("span",Oe,[e.isLoading?(p(),f(g,{key:1,size:16})):(p(),f(h,{key:0,component:e.getActionIcon,class:O({"c-#666 dark:c-#eee":!e.dataset.isPublished})},null,8,["component","class"]))]),i("span",$e,u(e.dataset.isPublished?"停止":"发布"),1)],2)])]),_:1},8,["to"])}const Ne=G(ge,[["render",Se],["__scopeId","data-v-cc0b8ee5"]]);export{Ne as default};
