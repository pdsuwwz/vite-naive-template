import{L as G,e as Fe,d as O,a2 as c,a7 as $e,a8 as ee,a9 as De,a1 as P,aa as oe,ab as le,ac as tn,R as Ee,ad as ce,ae as on,N as Ke,af as rn,ag as an,ah as sn,ai as j,aj as ln,ak as Y,al as ue,am as L,an as m,ao as Ve,ap as q,aq as Me,ar as he,as as dn,at as re,au as D,av as je,aw as cn,ax as Le,ay as un,az as fn,aA as xe,aB as X,aC as ke,aD as te,aE as hn,aF as pn,aG as vn,aH as gn,o as ne,c as ie,b as J,w as Q,u as de,aI as bn,aJ as yn,a as W,$ as mn,Z as wn,a3 as xn,f as Ge,aK as kn,aL as _n,T as Sn,aM as Nn,O as Rn,t as Ue,i as Cn,g as Pn,n as Re,a5 as He,a6 as We,r as $n}from"./index-BUwcuW1Q.js";import{B as Kn,V as An,h as In,N as pe,i as Be,r as Ln,u as Bn,j as Tn,p as qe,l as On}from"./index-Dog_n63Y.js";import{_ as ve}from"./_plugin-vue_export-helper-DlAUqK2U.js";function zn(e){return n=>{n?e.value=n.$el:e.value=null}}function Fn(e,n,t){const r=G(e.value);let o=null;return Fe(e,a=>{o!==null&&window.clearTimeout(o),a===!0?t&&!t.value?r.value=!0:o=window.setTimeout(()=>{r.value=!0},n):r.value=!1}),r}const Dn=O({name:"ChevronRight",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}});function Te(e){return Array.isArray(e)?e:[e]}const Ce={STOP:"STOP"};function Ze(e,n){const t=n(e);e.children!==void 0&&t!==Ce.STOP&&e.children.forEach(r=>Ze(r,n))}function En(e,n={}){const{preserveGroup:t=!1}=n,r=[],o=t?i=>{i.isLeaf||(r.push(i.key),a(i.children))}:i=>{i.isLeaf||(i.isGroup||r.push(i.key),a(i.children))};function a(i){i.forEach(o)}return a(e),r}function Vn(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function Mn(e){return e.children}function jn(e){return e.key}function Gn(){return!1}function Un(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function Hn(e){return e.disabled===!0}function Wn(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function _e(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function Se(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function qn(e,n){const t=new Set(e);return n.forEach(r=>{t.has(r)||t.add(r)}),Array.from(t)}function Zn(e,n){const t=new Set(e);return n.forEach(r=>{t.has(r)&&t.delete(r)}),Array.from(t)}function Xn(e){return(e==null?void 0:e.type)==="group"}class Yn extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Jn(e,n,t,r){return fe(n.concat(e),t,r,!1)}function Qn(e,n){const t=new Set;return e.forEach(r=>{const o=n.treeNodeMap.get(r);if(o!==void 0){let a=o.parent;for(;a!==null&&!(a.disabled||t.has(a.key));)t.add(a.key),a=a.parent}}),t}function et(e,n,t,r){const o=fe(n,t,r,!1),a=fe(e,t,r,!0),i=Qn(e,t),s=[];return o.forEach(l=>{(a.has(l)||i.has(l))&&s.push(l)}),s.forEach(l=>o.delete(l)),o}function Ne(e,n){const{checkedKeys:t,keysToCheck:r,keysToUncheck:o,indeterminateKeys:a,cascade:i,leafOnly:s,checkStrategy:l,allowNotLoaded:d}=e;if(!i)return r!==void 0?{checkedKeys:qn(t,r),indeterminateKeys:Array.from(a)}:o!==void 0?{checkedKeys:Zn(t,o),indeterminateKeys:Array.from(a)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(a)};const{levelTreeNodeMap:p}=n;let f;o!==void 0?f=et(o,t,n,d):r!==void 0?f=Jn(r,t,n,d):f=fe(t,n,d,!1);const b=l==="parent",C=l==="child"||s,w=f,z=new Set,I=Math.max.apply(null,Array.from(p.keys()));for(let B=I;B>=0;B-=1){const U=B===0,E=p.get(B);for(const u of E){if(u.isLeaf)continue;const{key:h,shallowLoaded:$}=u;if(C&&$&&u.children.forEach(S=>{!S.disabled&&!S.isLeaf&&S.shallowLoaded&&w.has(S.key)&&w.delete(S.key)}),u.disabled||!$)continue;let A=!0,v=!1,K=!0;for(const S of u.children){const T=S.key;if(!S.disabled){if(K&&(K=!1),w.has(T))v=!0;else if(z.has(T)){v=!0,A=!1;break}else if(A=!1,v)break}}A&&!K?(b&&u.children.forEach(S=>{!S.disabled&&w.has(S.key)&&w.delete(S.key)}),w.add(h)):v&&z.add(h),U&&C&&w.has(h)&&w.delete(h)}}return{checkedKeys:Array.from(w),indeterminateKeys:Array.from(z)}}function fe(e,n,t,r){const{treeNodeMap:o,getChildren:a}=n,i=new Set,s=new Set(e);return e.forEach(l=>{const d=o.get(l);d!==void 0&&Ze(d,p=>{if(p.disabled)return Ce.STOP;const{key:f}=p;if(!i.has(f)&&(i.add(f),s.add(f),Wn(p.rawNode,a))){if(r)return Ce.STOP;if(!t)throw new Yn}})}),s}function nt(e,{includeGroup:n=!1,includeSelf:t=!0},r){var o;const a=r.treeNodeMap;let i=e==null?null:(o=a.get(e))!==null&&o!==void 0?o:null;const s={keyPath:[],treeNodePath:[],treeNode:i};if(i!=null&&i.ignored)return s.treeNode=null,s;for(;i;)!i.ignored&&(n||!i.isGroup)&&s.treeNodePath.push(i),i=i.parent;return s.treeNodePath.reverse(),t||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(l=>l.key),s}function tt(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function ot(e,n){const t=e.siblings,r=t.length,{index:o}=e;return n?t[(o+1)%r]:o===t.length-1?null:t[o+1]}function Oe(e,n,{loop:t=!1,includeDisabled:r=!1}={}){const o=n==="prev"?rt:ot,a={reverse:n==="prev"};let i=!1,s=null;function l(d){if(d!==null){if(d===e){if(!i)i=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!d.disabled||r)&&!d.ignored&&!d.isGroup){s=d;return}if(d.isGroup){const p=Ae(d,a);p!==null?s=p:l(o(d,t))}else{const p=o(d,!1);if(p!==null)l(p);else{const f=it(d);f!=null&&f.isGroup?l(o(f,t)):t&&l(o(d,!0))}}}}return l(e),s}function rt(e,n){const t=e.siblings,r=t.length,{index:o}=e;return n?t[(o-1+r)%r]:o===0?null:t[o-1]}function it(e){return e.parent}function Ae(e,n={}){const{reverse:t=!1}=n,{children:r}=e;if(r){const{length:o}=r,a=t?o-1:0,i=t?-1:o,s=t?-1:1;for(let l=a;l!==i;l+=s){const d=r[l];if(!d.disabled&&!d.ignored)if(d.isGroup){const p=Ae(d,n);if(p!==null)return p}else return d}}return null}const at={getChild(){return this.ignored?null:Ae(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Oe(this,"next",e)},getPrev(e={}){return Oe(this,"prev",e)}};function st(e,n){const t=n?new Set(n):void 0,r=[];function o(a){a.forEach(i=>{r.push(i),!(i.isLeaf||!i.children||i.ignored)&&(i.isGroup||t===void 0||t.has(i.key))&&o(i.children)})}return o(e),r}function lt(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function Xe(e,n,t,r,o,a=null,i=0){const s=[];return e.forEach((l,d)=>{var p;const f=Object.create(r);if(f.rawNode=l,f.siblings=s,f.level=i,f.index=d,f.isFirstChild=d===0,f.isLastChild=d+1===e.length,f.parent=a,!f.ignored){const b=o(l);Array.isArray(b)&&(f.children=Xe(b,n,t,r,o,f,i+1))}s.push(f),n.set(f.key,f),t.has(i)||t.set(i,[]),(p=t.get(i))===null||p===void 0||p.push(f)}),s}function dt(e,n={}){var t;const r=new Map,o=new Map,{getDisabled:a=Hn,getIgnored:i=Gn,getIsGroup:s=Xn,getKey:l=jn}=n,d=(t=n.getChildren)!==null&&t!==void 0?t:Mn,p=n.ignoreEmptyChildren?u=>{const h=d(u);return Array.isArray(h)?h.length?h:null:h}:d,f=Object.assign({get key(){return l(this.rawNode)},get disabled(){return a(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return Vn(this.rawNode,p)},get shallowLoaded(){return Un(this.rawNode,p)},get ignored(){return i(this.rawNode)},contains(u){return lt(this,u)}},at),b=Xe(e,r,o,f,p);function C(u){if(u==null)return null;const h=r.get(u);return h&&!h.isGroup&&!h.ignored?h:null}function w(u){if(u==null)return null;const h=r.get(u);return h&&!h.ignored?h:null}function z(u,h){const $=w(u);return $?$.getPrev(h):null}function I(u,h){const $=w(u);return $?$.getNext(h):null}function B(u){const h=w(u);return h?h.getParent():null}function U(u){const h=w(u);return h?h.getChild():null}const E={treeNodes:b,treeNodeMap:r,levelTreeNodeMap:o,maxLevel:Math.max(...o.keys()),getChildren:p,getFlattenedNodes(u){return st(b,u)},getNode:C,getPrev:z,getNext:I,getParent:B,getChild:U,getFirstAvailableNode(){return tt(b)},getPath(u,h={}){return nt(u,h,E)},getCheckedKeys(u,h={}){const{cascade:$=!0,leafOnly:A=!1,checkStrategy:v="all",allowNotLoaded:K=!1}=h;return Ne({checkedKeys:_e(u),indeterminateKeys:Se(u),cascade:$,leafOnly:A,checkStrategy:v,allowNotLoaded:K},E)},check(u,h,$={}){const{cascade:A=!0,leafOnly:v=!1,checkStrategy:K="all",allowNotLoaded:S=!1}=$;return Ne({checkedKeys:_e(h),indeterminateKeys:Se(h),keysToCheck:u==null?[]:Te(u),cascade:A,leafOnly:v,checkStrategy:K,allowNotLoaded:S},E)},uncheck(u,h,$={}){const{cascade:A=!0,leafOnly:v=!1,checkStrategy:K="all",allowNotLoaded:S=!1}=$;return Ne({checkedKeys:_e(h),indeterminateKeys:Se(h),keysToUncheck:u==null?[]:Te(u),cascade:A,leafOnly:v,checkStrategy:K,allowNotLoaded:S},E)},getNonLeafKeys(u={}){return En(b,u)}};return E}const Ye=O({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return c("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),Ie=$e("n-dropdown-menu"),ge=$e("n-dropdown"),ze=$e("n-dropdown-option");function Pe(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function ct(e){return e.type==="group"}function Je(e){return e.type==="divider"}function ut(e){return e.type==="render"}const Qe=O({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=ee(ge),{hoverKeyRef:t,keyboardKeyRef:r,lastToggledSubmenuKeyRef:o,pendingKeyPathRef:a,activeKeyPathRef:i,animatedRef:s,mergedShowRef:l,renderLabelRef:d,renderIconRef:p,labelFieldRef:f,childrenFieldRef:b,renderOptionRef:C,nodePropsRef:w,menuPropsRef:z}=n,I=ee(ze,null),B=ee(Ie),U=ee(De),E=P(()=>e.tmNode.rawNode),u=P(()=>{const{value:y}=b;return Pe(e.tmNode.rawNode,y)}),h=P(()=>{const{disabled:y}=e.tmNode;return y}),$=P(()=>{if(!u.value)return!1;const{key:y,disabled:_}=e.tmNode;if(_)return!1;const{value:H}=t,{value:Z}=r,{value:M}=o,{value:V}=a;return H!==null?V.includes(y):Z!==null?V.includes(y)&&V[V.length-1]!==y:M!==null?V.includes(y):!1}),A=P(()=>r.value===null&&!s.value),v=Fn($,300,A),K=P(()=>!!(I!=null&&I.enteringSubmenuRef.value)),S=G(!1);oe(ze,{enteringSubmenuRef:S});function T(){S.value=!0}function g(){S.value=!1}function R(){const{parentKey:y,tmNode:_}=e;_.disabled||l.value&&(o.value=y,r.value=null,t.value=_.key)}function k(){const{tmNode:y}=e;y.disabled||l.value&&t.value!==y.key&&R()}function x(y){if(e.tmNode.disabled||!l.value)return;const{relatedTarget:_}=y;_&&!Be({target:_},"dropdownOption")&&!Be({target:_},"scrollbarRail")&&(t.value=null)}function F(){const{value:y}=u,{tmNode:_}=e;l.value&&!y&&!_.disabled&&(n.doSelect(_.key,_.rawNode),n.doUpdateShow(!1))}return{labelField:f,renderLabel:d,renderIcon:p,siblingHasIcon:B.showIconRef,siblingHasSubmenu:B.hasSubmenuRef,menuProps:z,popoverBody:U,animated:s,mergedShowSubmenu:P(()=>v.value&&!K.value),rawNode:E,hasSubmenu:u,pending:le(()=>{const{value:y}=a,{key:_}=e.tmNode;return y.includes(_)}),childActive:le(()=>{const{value:y}=i,{key:_}=e.tmNode,H=y.findIndex(Z=>_===Z);return H===-1?!1:H<y.length-1}),active:le(()=>{const{value:y}=i,{key:_}=e.tmNode,H=y.findIndex(Z=>_===Z);return H===-1?!1:H===y.length-1}),mergedDisabled:h,renderOption:C,nodeProps:w,handleClick:F,handleMouseMove:k,handleMouseEnter:R,handleMouseLeave:x,handleSubmenuBeforeEnter:T,handleSubmenuAfterEnter:g}},render(){var e,n;const{animated:t,rawNode:r,mergedShowSubmenu:o,clsPrefix:a,siblingHasIcon:i,siblingHasSubmenu:s,renderLabel:l,renderIcon:d,renderOption:p,nodeProps:f,props:b,scrollable:C}=this;let w=null;if(o){const U=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);w=c(en,Object.assign({},U,{clsPrefix:a,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const z={class:[`${a}-dropdown-option-body`,this.pending&&`${a}-dropdown-option-body--pending`,this.active&&`${a}-dropdown-option-body--active`,this.childActive&&`${a}-dropdown-option-body--child-active`,this.mergedDisabled&&`${a}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},I=f==null?void 0:f(r),B=c("div",Object.assign({class:[`${a}-dropdown-option`,I==null?void 0:I.class],"data-dropdown-option":!0},I),c("div",Ee(z,b),[c("div",{class:[`${a}-dropdown-option-body__prefix`,i&&`${a}-dropdown-option-body__prefix--show-icon`]},[d?d(r):ce(r.icon)]),c("div",{"data-dropdown-option":!0,class:`${a}-dropdown-option-body__label`},l?l(r):ce((n=r[this.labelField])!==null&&n!==void 0?n:r.title)),c("div",{"data-dropdown-option":!0,class:[`${a}-dropdown-option-body__suffix`,s&&`${a}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?c(pe,null,{default:()=>c(Dn,null)}):null)]),this.hasSubmenu?c(Kn,null,{default:()=>[c(An,null,{default:()=>c("div",{class:`${a}-dropdown-offset-container`},c(In,{show:this.mergedShowSubmenu,placement:this.placement,to:C&&this.popoverBody||void 0,teleportDisabled:!C},{default:()=>c("div",{class:`${a}-dropdown-menu-wrapper`},t?c(tn,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>w}):w)}))})]}):null);return p?p({node:B,option:r}):B}}),ft=O({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=ee(Ie),{renderLabelRef:t,labelFieldRef:r,nodePropsRef:o,renderOptionRef:a}=ee(ge);return{labelField:r,showIcon:e,hasSubmenu:n,renderLabel:t,nodeProps:o,renderOption:a}},render(){var e;const{clsPrefix:n,hasSubmenu:t,showIcon:r,nodeProps:o,renderLabel:a,renderOption:i}=this,{rawNode:s}=this.tmNode,l=c("div",Object.assign({class:`${n}-dropdown-option`},o==null?void 0:o(s)),c("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},c("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,r&&`${n}-dropdown-option-body__prefix--show-icon`]},ce(s.icon)),c("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},a?a(s):ce((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),c("div",{class:[`${n}-dropdown-option-body__suffix`,t&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return i?i({node:l,option:s}):l}}),ht=O({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:t}=this,{children:r}=e;return c(Ke,null,c(ft,{clsPrefix:t,tmNode:e,key:e.key}),r==null?void 0:r.map(o=>{const{rawNode:a}=o;return a.show===!1?null:Je(a)?c(Ye,{clsPrefix:t,key:o.key}):o.isGroup?(on("dropdown","`group` node is not allowed to be put in `group` node."),null):c(Qe,{clsPrefix:t,tmNode:o,parentKey:n,key:o.key})}))}}),pt=O({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return c("div",n,[e==null?void 0:e()])}}),en=O({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:t}=ee(ge);oe(Ie,{showIconRef:P(()=>{const o=n.value;return e.tmNodes.some(a=>{var i;if(a.isGroup)return(i=a.children)===null||i===void 0?void 0:i.some(({rawNode:l})=>o?o(l):l.icon);const{rawNode:s}=a;return o?o(s):s.icon})}),hasSubmenuRef:P(()=>{const{value:o}=t;return e.tmNodes.some(a=>{var i;if(a.isGroup)return(i=a.children)===null||i===void 0?void 0:i.some(({rawNode:l})=>Pe(l,o));const{rawNode:s}=a;return Pe(s,o)})})});const r=G(null);return oe(rn,null),oe(an,null),oe(De,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:n,scrollable:t}=this,r=this.tmNodes.map(o=>{const{rawNode:a}=o;return a.show===!1?null:ut(a)?c(pt,{tmNode:o,key:o.key}):Je(a)?c(Ye,{clsPrefix:n,key:o.key}):ct(a)?c(ht,{clsPrefix:n,tmNode:o,parentKey:e,key:o.key}):c(Qe,{clsPrefix:n,tmNode:o,parentKey:e,key:o.key,props:a.props,scrollable:t})});return c("div",{class:[`${n}-dropdown-menu`,t&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},t?c(sn,{contentClass:`${n}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Ln({clsPrefix:n,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),vt=j("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[ln(),j("dropdown-option",`
 position: relative;
 `,[Y("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[Y("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),j("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[Y("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ue("disabled",[L("pending",`
 color: var(--n-option-text-color-hover);
 `,[m("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),Y("&::before","background-color: var(--n-option-color-hover);")]),L("active",`
 color: var(--n-option-text-color-active);
 `,[m("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),Y("&::before","background-color: var(--n-option-color-active);")]),L("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[m("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),L("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),L("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[m("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[L("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),m("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[L("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),j("icon",`
 font-size: var(--n-option-icon-size);
 `)]),m("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),m("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[L("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),j("icon",`
 font-size: var(--n-option-icon-size);
 `)]),j("dropdown-menu","pointer-events: all;")]),j("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),j("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),j("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),Y(">",[j("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ue("scrollable",`
 padding: var(--n-padding);
 `),L("scrollable",[m("content",`
 padding: var(--n-padding);
 `)])]),gt={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},bt=Object.keys(qe),yt=Object.assign(Object.assign(Object.assign({},qe),gt),he.props),mt=O({name:"Dropdown",inheritAttrs:!1,props:yt,setup(e){const n=G(!1),t=Ve(q(e,"show"),n),r=P(()=>{const{keyField:g,childrenField:R}=e;return dt(e.options,{getKey(k){return k[g]},getDisabled(k){return k.disabled===!0},getIgnored(k){return k.type==="divider"||k.type==="render"},getChildren(k){return k[R]}})}),o=P(()=>r.value.treeNodes),a=G(null),i=G(null),s=G(null),l=P(()=>{var g,R,k;return(k=(R=(g=a.value)!==null&&g!==void 0?g:i.value)!==null&&R!==void 0?R:s.value)!==null&&k!==void 0?k:null}),d=P(()=>r.value.getPath(l.value).keyPath),p=P(()=>r.value.getPath(e.value).keyPath),f=le(()=>e.keyboard&&t.value);Bn({keydown:{ArrowUp:{prevent:!0,handler:h},ArrowRight:{prevent:!0,handler:u},ArrowDown:{prevent:!0,handler:$},ArrowLeft:{prevent:!0,handler:E},Enter:{prevent:!0,handler:A},Escape:U}},f);const{mergedClsPrefixRef:b,inlineThemeDisabled:C}=Me(e),w=he("Dropdown","-dropdown",vt,dn,e,b);oe(ge,{labelFieldRef:q(e,"labelField"),childrenFieldRef:q(e,"childrenField"),renderLabelRef:q(e,"renderLabel"),renderIconRef:q(e,"renderIcon"),hoverKeyRef:a,keyboardKeyRef:i,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:d,activeKeyPathRef:p,animatedRef:q(e,"animated"),mergedShowRef:t,nodePropsRef:q(e,"nodeProps"),renderOptionRef:q(e,"renderOption"),menuPropsRef:q(e,"menuProps"),doSelect:z,doUpdateShow:I}),Fe(t,g=>{!e.animated&&!g&&B()});function z(g,R){const{onSelect:k}=e;k&&re(k,g,R)}function I(g){const{"onUpdate:show":R,onUpdateShow:k}=e;R&&re(R,g),k&&re(k,g),n.value=g}function B(){a.value=null,i.value=null,s.value=null}function U(){I(!1)}function E(){K("left")}function u(){K("right")}function h(){K("up")}function $(){K("down")}function A(){const g=v();g!=null&&g.isLeaf&&t.value&&(z(g.key,g.rawNode),I(!1))}function v(){var g;const{value:R}=r,{value:k}=l;return!R||k===null?null:(g=R.getNode(k))!==null&&g!==void 0?g:null}function K(g){const{value:R}=l,{value:{getFirstAvailableNode:k}}=r;let x=null;if(R===null){const F=k();F!==null&&(x=F.key)}else{const F=v();if(F){let y;switch(g){case"down":y=F.getNext();break;case"up":y=F.getPrev();break;case"right":y=F.getChild();break;case"left":y=F.getParent();break}y&&(x=y.key)}}x!==null&&(a.value=null,i.value=x)}const S=P(()=>{const{size:g,inverted:R}=e,{common:{cubicBezierEaseInOut:k},self:x}=w.value,{padding:F,dividerColor:y,borderRadius:_,optionOpacityDisabled:H,[D("optionIconSuffixWidth",g)]:Z,[D("optionSuffixWidth",g)]:M,[D("optionIconPrefixWidth",g)]:V,[D("optionPrefixWidth",g)]:be,[D("fontSize",g)]:ye,[D("optionHeight",g)]:me,[D("optionIconSize",g)]:ae}=x,N={"--n-bezier":k,"--n-font-size":ye,"--n-padding":F,"--n-border-radius":_,"--n-option-height":me,"--n-option-prefix-width":be,"--n-option-icon-prefix-width":V,"--n-option-suffix-width":M,"--n-option-icon-suffix-width":Z,"--n-option-icon-size":ae,"--n-divider-color":y,"--n-option-opacity-disabled":H};return R?(N["--n-color"]=x.colorInverted,N["--n-option-color-hover"]=x.optionColorHoverInverted,N["--n-option-color-active"]=x.optionColorActiveInverted,N["--n-option-text-color"]=x.optionTextColorInverted,N["--n-option-text-color-hover"]=x.optionTextColorHoverInverted,N["--n-option-text-color-active"]=x.optionTextColorActiveInverted,N["--n-option-text-color-child-active"]=x.optionTextColorChildActiveInverted,N["--n-prefix-color"]=x.prefixColorInverted,N["--n-suffix-color"]=x.suffixColorInverted,N["--n-group-header-text-color"]=x.groupHeaderTextColorInverted):(N["--n-color"]=x.color,N["--n-option-color-hover"]=x.optionColorHover,N["--n-option-color-active"]=x.optionColorActive,N["--n-option-text-color"]=x.optionTextColor,N["--n-option-text-color-hover"]=x.optionTextColorHover,N["--n-option-text-color-active"]=x.optionTextColorActive,N["--n-option-text-color-child-active"]=x.optionTextColorChildActive,N["--n-prefix-color"]=x.prefixColor,N["--n-suffix-color"]=x.suffixColor,N["--n-group-header-text-color"]=x.groupHeaderTextColor),N}),T=C?je("dropdown",P(()=>`${e.size[0]}${e.inverted?"i":""}`),S,e):void 0;return{mergedClsPrefix:b,mergedTheme:w,tmNodes:o,mergedShow:t,handleAfterLeave:()=>{e.animated&&B()},doUpdateShow:I,cssVars:C?void 0:S,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const e=(r,o,a,i,s)=>{var l;const{mergedClsPrefix:d,menuProps:p}=this;(l=this.onRender)===null||l===void 0||l.call(this);const f=(p==null?void 0:p(void 0,this.tmNodes.map(C=>C.rawNode)))||{},b={ref:zn(o),class:[r,`${d}-dropdown`,this.themeClass],clsPrefix:d,tmNodes:this.tmNodes,style:[...a,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:i,onMouseleave:s};return c(en,Ee(this.$attrs,b,f))},{mergedTheme:n}=this,t={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return c(Tn,Object.assign({},cn(this.$props,bt),t),{trigger:()=>{var r,o;return(o=(r=this.$slots).default)===null||o===void 0?void 0:o.call(r)}})}}),wt=j("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[m("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),m("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),m("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),j("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Le({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),m("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),m("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),m("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),Y("&:focus",[m("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),L("round",[m("rail","border-radius: calc(var(--n-rail-height) / 2);",[m("button","border-radius: calc(var(--n-button-height) / 2);")])]),ue("disabled",[ue("icon",[L("rubber-band",[L("pressed",[m("rail",[m("button","max-width: var(--n-button-width-pressed);")])]),m("rail",[Y("&:active",[m("button","max-width: var(--n-button-width-pressed);")])]),L("active",[L("pressed",[m("rail",[m("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),m("rail",[Y("&:active",[m("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),L("active",[m("rail",[m("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),m("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[m("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[Le()]),m("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),L("active",[m("rail","background-color: var(--n-rail-color-active);")]),L("loading",[m("rail",`
 cursor: wait;
 `)]),L("disabled",[m("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),xt=Object.assign(Object.assign({},he.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let se;const kt=O({name:"Switch",props:xt,setup(e){se===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?se=CSS.supports("width","max(1px)"):se=!1:se=!0);const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=Me(e),r=he("Switch","-switch",wt,un,e,n),o=fn(e),{mergedSizeRef:a,mergedDisabledRef:i}=o,s=G(e.defaultValue),l=q(e,"value"),d=Ve(l,s),p=P(()=>d.value===e.checkedValue),f=G(!1),b=G(!1),C=P(()=>{const{railStyle:v}=e;if(v)return v({focused:b.value,checked:p.value})});function w(v){const{"onUpdate:value":K,onChange:S,onUpdateValue:T}=e,{nTriggerFormInput:g,nTriggerFormChange:R}=o;K&&re(K,v),T&&re(T,v),S&&re(S,v),s.value=v,g(),R()}function z(){const{nTriggerFormFocus:v}=o;v()}function I(){const{nTriggerFormBlur:v}=o;v()}function B(){e.loading||i.value||(d.value!==e.checkedValue?w(e.checkedValue):w(e.uncheckedValue))}function U(){b.value=!0,z()}function E(){b.value=!1,I(),f.value=!1}function u(v){e.loading||i.value||v.key===" "&&(d.value!==e.checkedValue?w(e.checkedValue):w(e.uncheckedValue),f.value=!1)}function h(v){e.loading||i.value||v.key===" "&&(v.preventDefault(),f.value=!0)}const $=P(()=>{const{value:v}=a,{self:{opacityDisabled:K,railColor:S,railColorActive:T,buttonBoxShadow:g,buttonColor:R,boxShadowFocus:k,loadingColor:x,textColor:F,iconColor:y,[D("buttonHeight",v)]:_,[D("buttonWidth",v)]:H,[D("buttonWidthPressed",v)]:Z,[D("railHeight",v)]:M,[D("railWidth",v)]:V,[D("railBorderRadius",v)]:be,[D("buttonBorderRadius",v)]:ye},common:{cubicBezierEaseInOut:me}}=r.value;let ae,N,we;return se?(ae=`calc((${M} - ${_}) / 2)`,N=`max(${M}, ${_})`,we=`max(${V}, calc(${V} + ${_} - ${M}))`):(ae=xe((X(M)-X(_))/2),N=xe(Math.max(X(M),X(_))),we=X(M)>X(_)?V:xe(X(V)+X(_)-X(M))),{"--n-bezier":me,"--n-button-border-radius":ye,"--n-button-box-shadow":g,"--n-button-color":R,"--n-button-width":H,"--n-button-width-pressed":Z,"--n-button-height":_,"--n-height":N,"--n-offset":ae,"--n-opacity-disabled":K,"--n-rail-border-radius":be,"--n-rail-color":S,"--n-rail-color-active":T,"--n-rail-height":M,"--n-rail-width":V,"--n-width":we,"--n-box-shadow-focus":k,"--n-loading-color":x,"--n-text-color":F,"--n-icon-color":y}}),A=t?je("switch",P(()=>a.value[0]),$,e):void 0;return{handleClick:B,handleBlur:E,handleFocus:U,handleKeyup:u,handleKeydown:h,mergedRailStyle:C,pressed:f,mergedClsPrefix:n,mergedValue:d,checked:p,mergedDisabled:i,cssVars:t?void 0:$,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:n,checked:t,mergedRailStyle:r,onRender:o,$slots:a}=this;o==null||o();const{checked:i,unchecked:s,icon:l,"checked-icon":d,"unchecked-icon":p}=a,f=!(ke(l)&&ke(d)&&ke(p));return c("div",{role:"switch","aria-checked":t,class:[`${e}-switch`,this.themeClass,f&&`${e}-switch--icon`,t&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},c("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:r},te(i,b=>te(s,C=>b||C?c("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},c("div",{class:`${e}-switch__rail-placeholder`},c("div",{class:`${e}-switch__button-placeholder`}),b),c("div",{class:`${e}-switch__rail-placeholder`},c("div",{class:`${e}-switch__button-placeholder`}),C)):null)),c("div",{class:`${e}-switch__button`},te(l,b=>te(d,C=>te(p,w=>c(hn,null,{default:()=>this.loading?c(pn,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(C||b)?c("div",{class:`${e}-switch__button-icon`,key:C?"checked-icon":"icon"},C||b):!this.checked&&(w||b)?c("div",{class:`${e}-switch__button-icon`,key:w?"unchecked-icon":"icon"},w||b):null})))),te(i,b=>b&&c("div",{key:"checked",class:`${e}-switch__checked`},b)),te(s,b=>b&&c("div",{key:"unchecked",class:`${e}-switch__unchecked`},b)))))}}),_t={class:"navigation-change-theme"},St=W("div",{class:"i-tdesign:mode-dark"},null,-1),Nt=W("div",{class:"i-solar:sun-2-outline"},null,-1),Rt=O({__name:"ChangeTheme",setup(e){const n=vn(),{isDark:t}=gn(),r=G(n.theme),o=({focused:i,checked:s})=>{const l={};return s?(l.background="#313136",l.boxShadow="0 0 0 1px rgb(100 100 100)"):(l.background="#f6f5f7",l.boxShadow="0 0 0 1px rgb(60 60 67 / 40%)"),l},a=i=>{n.setTheme(i)};return(i,s)=>{const l=pe,d=kt;return ne(),ie("div",_t,[J(d,{value:de(r),"onUpdate:value":[s[0]||(s[0]=p=>bn(r)?r.value=p:null),a],"checked-value":"dark","unchecked-value":"light","rail-style":o,style:yn({"--n-icon-color":de(t)?"#fff":"#000","--n-button-color":de(t)?"#000":"#fff","--n-button-box-shadow":"none"})},{"checked-icon":Q(()=>[J(l,null,{default:Q(()=>[St]),_:1})]),"unchecked-icon":Q(()=>[J(l,null,{default:Q(()=>[Nt]),_:1})]),_:1},8,["value","style"])])}}}),Ct=O({name:"NavigationAvatar",setup(){mn(),wn();const e=t=>()=>c(pe,null,{default:()=>c(t)});return{commandList:P(()=>[{label:"退出登录",key:"退出按钮",icon:e(c("div",{class:"text-16px i-fluent:sign-out-20-regular"})),props:{onClick:()=>{xn.remove("token"),window.location.reload()}}}])}}}),Pt={class:"navigation-avatar"},$t=W("div",{class:"i-carbon:user-avatar"},null,-1);function Kt(e,n,t,r,o,a){const i=pe,s=mt;return ne(),Ge(s,{trigger:"hover",options:e.commandList},{default:Q(()=>[W("div",Pt,[J(i,{size:24},{default:Q(()=>[$t]),_:1})])]),_:1},8,["options"])}const At=ve(Ct,[["render",Kt]]),nn=Symbol(),Jt=()=>{const e=G(!0),{changeNotifyPlacement:n}=kn(),t=()=>{e.value=!1,_n(()=>{n("bottom-right"),window.$ModalNotification.destroyAll(),window.$ModalNotification.success({title:"页面刷新成功",duration:800,closable:!0}),e.value=!0})};return oe(nn,t),{isRouterAlive:e,reloadRouterView:t}},It=()=>({reloadRouterView:ee(nn)}),Lt=O({__name:"Refresh",setup(e){const{reloadRouterView:n}=It();return(t,r)=>{const o=On;return ne(),Ge(o,null,{trigger:Q(()=>[W("div",{class:"h-full text-1.5em i-material-symbols:refresh",flex:"~ items-center","cursor-pointer":"",onClick:r[0]||(r[0]=a=>de(n)())})]),default:Q(()=>[Sn(" 强制刷新路由 ")]),_:1})}}});function Bt(){const{proxy:e}=Nn();return{proxy:e}}const Tt=O({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:e}=Bt();function n(){e.$emit("click")}return{title:P(()=>"NaiveUI Template 项目"),handleClick:n}}}),Ot={class:"side-action-container"},zt={class:"action-list"};function Ft(e,n,t,r,o,a){return ne(),ie("div",Ot,[W("ul",zt,[(ne(),ie(Ke,null,Rn(3,i=>W("li",{key:i,class:"action-item bg-#eee dark:bg-#555"}," Action "+Ue(i),1)),64))])])}const Dt=ve(Tt,[["render",Ft],["__scopeId","data-v-52119290"]]),Et=e=>(He("data-v-0b4ec54b"),e=e(),We(),e),Vt=Et(()=>W("div",{style:{flex:"1"}},null,-1)),Mt=O({__name:"NavBar",props:{auth:{type:Boolean,default:!0},fixed:{type:Boolean,default:!0}},setup(e){return(n,t)=>{const r=Dt,o=Lt,a=At,i=Rt;return ne(),ie("header",{class:Re(["navigation-navbar-header-container",{"fixed-header":e.fixed,"navbar-shadow dark:dark-navbar-shadow":e.auth,"login-navbar-shadow dark:shadow-none":!e.auth}])},[W("div",{class:Re(["navbar-header-box",{"bg-#fff dark:bg-#1e1e20":e.auth,"bg-#8d8b89 bg-opacity-30":!e.auth}])},[Cn(n.$slots,"default",{},void 0,!0),Vt,e.auth?(ne(),ie(Ke,{key:0},[J(r),J(o),J(a)],64)):Pn("",!0),J(i)],2)],2)}}}),Qt=ve(Mt,[["__scopeId","data-v-0b4ec54b"]]),jt=O({name:"NavigationSideLogo",props:{auth:{type:Boolean,default:!0}},setup(){return{title:P(()=>"NaiveUI Template 项目")}}}),Gt="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20207.74%20252.58'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2393ceaa;}.cls-2{fill:%234c9717;}.cls-3{fill:%235fbc21;}.cls-4{fill:%23e8ceaa;opacity:0.6;}%3c/style%3e%3c/defs%3e%3ctitle%3eNaive%20UI%20-%20LOGO%3c/title%3e%3cg%20id='Layer_2'%20data-name='Layer%202'%3e%3cg%20id='Layer_1-2'%20data-name='Layer%201'%3e%3cpath%20class='cls-1'%20d='M60.37,205.2c0,2.5,0,5,.05,7.5,0,.54,0,1.07-.05,1.58Z'/%3e%3cpath%20class='cls-1'%20d='M147.29,37.68v85.2c-.06-27.24-.19-54.49-.22-81.73A29,29,0,0,1,147.29,37.68Z'/%3e%3cpath%20class='cls-2'%20d='M147.06,125.43a16.9,16.9,0,0,0,.23-2.55v79.66l-41.74-38.17-21-19.15L71.91,133.6l-5.62-5.13-2.07-1.89-.15-.13c-.51-.41-1-.84-1.47-1.23s-.88-.73-1.44-.56a1.25,1.25,0,0,0-.79.9v-75l.43.39,8.57,7.75c4.51,4,9.06,8,13.56,12Q92.53,79.3,102.07,88q7.55,6.86,15.08,13.74c6,5.47,11.92,11,17.92,16.43,2.7,2.44,5.42,4.83,8.15,7.23.58.51,1.15,1,1.74,1.52a1.47,1.47,0,0,0,1.4.18,1.16,1.16,0,0,0,.56-.72C147,126,147,125.74,147.06,125.43Z'/%3e%3cpath%20class='cls-3'%20d='M60.28,126a15.67,15.67,0,0,0-.1,2.74c0,25.5,0,51,.19,76.49v9.08a14.85,14.85,0,0,1-5.87,11.09c-6.81,5.69-13.16,11.91-19.73,17.89-2.75,2.5-5.48,5-8.31,7.44s-10.11,2.74-14.14-.63a78.48,78.48,0,0,1-8.54-8.66,12.76,12.76,0,0,1-3.73-8.69c0-.72-.06-1.51,0-2.38,0-1.5,0-3,.05-4.51.05-4.3,0-8.61,0-12.91V72.71a12.64,12.64,0,0,1,.38-3.18,18.42,18.42,0,0,1,1-2.64A22.16,22.16,0,0,1,3.5,63.31l16-16L29.69,37.13a7.84,7.84,0,0,1,1.84-1.38,8.05,8.05,0,0,1,3.21-1h0a13.85,13.85,0,0,1,9.71,1.79h0a13.59,13.59,0,0,1,2.09,1.57L60.37,50.53v75A3.38,3.38,0,0,0,60.28,126Z'/%3e%3cpath%20class='cls-4'%20d='M60.28,126a3.38,3.38,0,0,1,.09-.41V205.2c-.15-25.5-.14-51-.19-76.49A15.67,15.67,0,0,1,60.28,126Z'/%3e%3cpath%20class='cls-3'%20d='M205.59,187.21l-29.39,27a3.75,3.75,0,0,1-.36.24l-.11.08-.2.12A14,14,0,0,1,158.77,213L157,211.45l-9.75-8.91V37.68c.16-1.39.4-2.78.67-4.14.7-3.55,3.82-5.31,6.2-7.53,5.17-4.8,10.5-9.42,15.77-14.12,3.63-3.24,7.25-6.49,10.91-9.71,3.19-2.81,9.37-2.67,12.37-.93a10.11,10.11,0,0,1,2.08,1.61l3.38,3.26,2.73,2.61,2.49,2.41a11.45,11.45,0,0,1,1.78,2.09,11.73,11.73,0,0,1,1.7,6.46c-.05,14.66.06,29.32.09,44q.09,37.35.16,74.7,0,19.14.07,38.27c0,.59,0,1.17,0,1.75C207.8,182.21,207.72,184.72,205.59,187.21Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Ut=e=>(He("data-v-a934b5c0"),e=e(),We(),e),Ht={class:"side-logo-container"},Wt=Ut(()=>W("img",{class:"side-logo-img",src:Gt,alt:"商标"},null,-1));function qt(e,n,t,r,o,a){const i=$n("router-link");return ne(),ie("div",Ht,[J(i,{to:"/"},{default:Q(()=>[Wt,W("h1",{class:Re(["side-logo-title c-#303133 dark:c-#fff",{"c-#303133 dark:c-#fff":e.auth,"c-#fff dark:c-#303133":!e.auth}])},Ue(e.title),3)]),_:1})])}const eo=ve(jt,[["render",qt],["__scopeId","data-v-a934b5c0"]]);export{eo as N,Qt as a,Bt as b,Jt as u};
