import{L as G,e as Fe,d as O,a1 as c,a4 as Ke,a5 as ee,a6 as De,a0 as P,a7 as oe,a8 as le,a9 as en,R as Ee,aa as ce,ab as nn,N as $e,ac as tn,ad as on,ae as rn,af as j,ag as an,ah as Y,ai as ue,aj as L,ak as m,al as he,am as Ve,an as q,ao as Me,ap as sn,aq as re,ar as D,as as je,at as ln,au as Le,av as dn,aw as cn,ax as xe,ay as X,az as ke,aA as te,aB as un,aC as fn,aD as hn,aE as pn,o as ne,c as ie,b as J,w as Q,a as W,u as de,aF as vn,aG as gn,Z as bn,Y as yn,a2 as mn,f as Ge,aH as wn,aI as xn,T as kn,aJ as Sn,O as _n,t as Ue,i as Nn,g as Rn,n as Re,r as Cn}from"./index-DsSXM_y-.js";import{B as Pn,V as Kn,h as $n,N as pe,i as Be,r as An,p as He,u as In,j as Ln,l as Bn}from"./index-HZMGu5-j.js";import{_ as ve}from"./_plugin-vue_export-helper-DlAUqK2U.js";function Tn(e){return n=>{n?e.value=n.$el:e.value=null}}function On(e,n,t){const o=G(e.value);let r=null;return Fe(e,a=>{r!==null&&window.clearTimeout(r),a===!0?t&&!t.value?o.value=!0:r=window.setTimeout(()=>{o.value=!0},n):o.value=!1}),o}const zn=O({name:"ChevronRight",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}});function Te(e){return Array.isArray(e)?e:[e]}const Ce={STOP:"STOP"};function We(e,n){const t=n(e);e.children!==void 0&&t!==Ce.STOP&&e.children.forEach(o=>We(o,n))}function Fn(e,n={}){const{preserveGroup:t=!1}=n,o=[],r=t?i=>{i.isLeaf||(o.push(i.key),a(i.children))}:i=>{i.isLeaf||(i.isGroup||o.push(i.key),a(i.children))};function a(i){i.forEach(r)}return a(e),o}function Dn(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function En(e){return e.children}function Vn(e){return e.key}function Mn(){return!1}function jn(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function Gn(e){return e.disabled===!0}function Un(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function Se(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function _e(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function Hn(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)||t.add(o)}),Array.from(t)}function Wn(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)&&t.delete(o)}),Array.from(t)}function qn(e){return(e==null?void 0:e.type)==="group"}class Zn extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Xn(e,n,t,o){return fe(n.concat(e),t,o,!1)}function Yn(e,n){const t=new Set;return e.forEach(o=>{const r=n.treeNodeMap.get(o);if(r!==void 0){let a=r.parent;for(;a!==null&&!(a.disabled||t.has(a.key));)t.add(a.key),a=a.parent}}),t}function Jn(e,n,t,o){const r=fe(n,t,o,!1),a=fe(e,t,o,!0),i=Yn(e,t),s=[];return r.forEach(l=>{(a.has(l)||i.has(l))&&s.push(l)}),s.forEach(l=>r.delete(l)),r}function Ne(e,n){const{checkedKeys:t,keysToCheck:o,keysToUncheck:r,indeterminateKeys:a,cascade:i,leafOnly:s,checkStrategy:l,allowNotLoaded:d}=e;if(!i)return o!==void 0?{checkedKeys:Hn(t,o),indeterminateKeys:Array.from(a)}:r!==void 0?{checkedKeys:Wn(t,r),indeterminateKeys:Array.from(a)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(a)};const{levelTreeNodeMap:p}=n;let f;r!==void 0?f=Jn(r,t,n,d):o!==void 0?f=Xn(o,t,n,d):f=fe(t,n,d,!1);const b=l==="parent",C=l==="child"||s,w=f,z=new Set,I=Math.max.apply(null,Array.from(p.keys()));for(let B=I;B>=0;B-=1){const U=B===0,E=p.get(B);for(const u of E){if(u.isLeaf)continue;const{key:h,shallowLoaded:K}=u;if(C&&K&&u.children.forEach(_=>{!_.disabled&&!_.isLeaf&&_.shallowLoaded&&w.has(_.key)&&w.delete(_.key)}),u.disabled||!K)continue;let A=!0,v=!1,$=!0;for(const _ of u.children){const T=_.key;if(!_.disabled){if($&&($=!1),w.has(T))v=!0;else if(z.has(T)){v=!0,A=!1;break}else if(A=!1,v)break}}A&&!$?(b&&u.children.forEach(_=>{!_.disabled&&w.has(_.key)&&w.delete(_.key)}),w.add(h)):v&&z.add(h),U&&C&&w.has(h)&&w.delete(h)}}return{checkedKeys:Array.from(w),indeterminateKeys:Array.from(z)}}function fe(e,n,t,o){const{treeNodeMap:r,getChildren:a}=n,i=new Set,s=new Set(e);return e.forEach(l=>{const d=r.get(l);d!==void 0&&We(d,p=>{if(p.disabled)return Ce.STOP;const{key:f}=p;if(!i.has(f)&&(i.add(f),s.add(f),Un(p.rawNode,a))){if(o)return Ce.STOP;if(!t)throw new Zn}})}),s}function Qn(e,{includeGroup:n=!1,includeSelf:t=!0},o){var r;const a=o.treeNodeMap;let i=e==null?null:(r=a.get(e))!==null&&r!==void 0?r:null;const s={keyPath:[],treeNodePath:[],treeNode:i};if(i!=null&&i.ignored)return s.treeNode=null,s;for(;i;)!i.ignored&&(n||!i.isGroup)&&s.treeNodePath.push(i),i=i.parent;return s.treeNodePath.reverse(),t||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(l=>l.key),s}function et(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function nt(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r+1)%o]:r===t.length-1?null:t[r+1]}function Oe(e,n,{loop:t=!1,includeDisabled:o=!1}={}){const r=n==="prev"?tt:nt,a={reverse:n==="prev"};let i=!1,s=null;function l(d){if(d!==null){if(d===e){if(!i)i=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!d.disabled||o)&&!d.ignored&&!d.isGroup){s=d;return}if(d.isGroup){const p=Ae(d,a);p!==null?s=p:l(r(d,t))}else{const p=r(d,!1);if(p!==null)l(p);else{const f=ot(d);f!=null&&f.isGroup?l(r(f,t)):t&&l(r(d,!0))}}}}return l(e),s}function tt(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r-1+o)%o]:r===0?null:t[r-1]}function ot(e){return e.parent}function Ae(e,n={}){const{reverse:t=!1}=n,{children:o}=e;if(o){const{length:r}=o,a=t?r-1:0,i=t?-1:r,s=t?-1:1;for(let l=a;l!==i;l+=s){const d=o[l];if(!d.disabled&&!d.ignored)if(d.isGroup){const p=Ae(d,n);if(p!==null)return p}else return d}}return null}const rt={getChild(){return this.ignored?null:Ae(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Oe(this,"next",e)},getPrev(e={}){return Oe(this,"prev",e)}};function it(e,n){const t=n?new Set(n):void 0,o=[];function r(a){a.forEach(i=>{o.push(i),!(i.isLeaf||!i.children||i.ignored)&&(i.isGroup||t===void 0||t.has(i.key))&&r(i.children)})}return r(e),o}function at(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function qe(e,n,t,o,r,a=null,i=0){const s=[];return e.forEach((l,d)=>{var p;const f=Object.create(o);if(f.rawNode=l,f.siblings=s,f.level=i,f.index=d,f.isFirstChild=d===0,f.isLastChild=d+1===e.length,f.parent=a,!f.ignored){const b=r(l);Array.isArray(b)&&(f.children=qe(b,n,t,o,r,f,i+1))}s.push(f),n.set(f.key,f),t.has(i)||t.set(i,[]),(p=t.get(i))===null||p===void 0||p.push(f)}),s}function st(e,n={}){var t;const o=new Map,r=new Map,{getDisabled:a=Gn,getIgnored:i=Mn,getIsGroup:s=qn,getKey:l=Vn}=n,d=(t=n.getChildren)!==null&&t!==void 0?t:En,p=n.ignoreEmptyChildren?u=>{const h=d(u);return Array.isArray(h)?h.length?h:null:h}:d,f=Object.assign({get key(){return l(this.rawNode)},get disabled(){return a(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return Dn(this.rawNode,p)},get shallowLoaded(){return jn(this.rawNode,p)},get ignored(){return i(this.rawNode)},contains(u){return at(this,u)}},rt),b=qe(e,o,r,f,p);function C(u){if(u==null)return null;const h=o.get(u);return h&&!h.isGroup&&!h.ignored?h:null}function w(u){if(u==null)return null;const h=o.get(u);return h&&!h.ignored?h:null}function z(u,h){const K=w(u);return K?K.getPrev(h):null}function I(u,h){const K=w(u);return K?K.getNext(h):null}function B(u){const h=w(u);return h?h.getParent():null}function U(u){const h=w(u);return h?h.getChild():null}const E={treeNodes:b,treeNodeMap:o,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:p,getFlattenedNodes(u){return it(b,u)},getNode:C,getPrev:z,getNext:I,getParent:B,getChild:U,getFirstAvailableNode(){return et(b)},getPath(u,h={}){return Qn(u,h,E)},getCheckedKeys(u,h={}){const{cascade:K=!0,leafOnly:A=!1,checkStrategy:v="all",allowNotLoaded:$=!1}=h;return Ne({checkedKeys:Se(u),indeterminateKeys:_e(u),cascade:K,leafOnly:A,checkStrategy:v,allowNotLoaded:$},E)},check(u,h,K={}){const{cascade:A=!0,leafOnly:v=!1,checkStrategy:$="all",allowNotLoaded:_=!1}=K;return Ne({checkedKeys:Se(h),indeterminateKeys:_e(h),keysToCheck:u==null?[]:Te(u),cascade:A,leafOnly:v,checkStrategy:$,allowNotLoaded:_},E)},uncheck(u,h,K={}){const{cascade:A=!0,leafOnly:v=!1,checkStrategy:$="all",allowNotLoaded:_=!1}=K;return Ne({checkedKeys:Se(h),indeterminateKeys:_e(h),keysToUncheck:u==null?[]:Te(u),cascade:A,leafOnly:v,checkStrategy:$,allowNotLoaded:_},E)},getNonLeafKeys(u={}){return Fn(b,u)}};return E}const Ze=O({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return c("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),Ie=Ke("n-dropdown-menu"),ge=Ke("n-dropdown"),ze=Ke("n-dropdown-option");function Pe(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function lt(e){return e.type==="group"}function Xe(e){return e.type==="divider"}function dt(e){return e.type==="render"}const Ye=O({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=ee(ge),{hoverKeyRef:t,keyboardKeyRef:o,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:a,activeKeyPathRef:i,animatedRef:s,mergedShowRef:l,renderLabelRef:d,renderIconRef:p,labelFieldRef:f,childrenFieldRef:b,renderOptionRef:C,nodePropsRef:w,menuPropsRef:z}=n,I=ee(ze,null),B=ee(Ie),U=ee(De),E=P(()=>e.tmNode.rawNode),u=P(()=>{const{value:y}=b;return Pe(e.tmNode.rawNode,y)}),h=P(()=>{const{disabled:y}=e.tmNode;return y}),K=P(()=>{if(!u.value)return!1;const{key:y,disabled:S}=e.tmNode;if(S)return!1;const{value:H}=t,{value:Z}=o,{value:M}=r,{value:V}=a;return H!==null?V.includes(y):Z!==null?V.includes(y)&&V[V.length-1]!==y:M!==null?V.includes(y):!1}),A=P(()=>o.value===null&&!s.value),v=On(K,300,A),$=P(()=>!!(I!=null&&I.enteringSubmenuRef.value)),_=G(!1);oe(ze,{enteringSubmenuRef:_});function T(){_.value=!0}function g(){_.value=!1}function R(){const{parentKey:y,tmNode:S}=e;S.disabled||l.value&&(r.value=y,o.value=null,t.value=S.key)}function k(){const{tmNode:y}=e;y.disabled||l.value&&t.value!==y.key&&R()}function x(y){if(e.tmNode.disabled||!l.value)return;const{relatedTarget:S}=y;S&&!Be({target:S},"dropdownOption")&&!Be({target:S},"scrollbarRail")&&(t.value=null)}function F(){const{value:y}=u,{tmNode:S}=e;l.value&&!y&&!S.disabled&&(n.doSelect(S.key,S.rawNode),n.doUpdateShow(!1))}return{labelField:f,renderLabel:d,renderIcon:p,siblingHasIcon:B.showIconRef,siblingHasSubmenu:B.hasSubmenuRef,menuProps:z,popoverBody:U,animated:s,mergedShowSubmenu:P(()=>v.value&&!$.value),rawNode:E,hasSubmenu:u,pending:le(()=>{const{value:y}=a,{key:S}=e.tmNode;return y.includes(S)}),childActive:le(()=>{const{value:y}=i,{key:S}=e.tmNode,H=y.findIndex(Z=>S===Z);return H===-1?!1:H<y.length-1}),active:le(()=>{const{value:y}=i,{key:S}=e.tmNode,H=y.findIndex(Z=>S===Z);return H===-1?!1:H===y.length-1}),mergedDisabled:h,renderOption:C,nodeProps:w,handleClick:F,handleMouseMove:k,handleMouseEnter:R,handleMouseLeave:x,handleSubmenuBeforeEnter:T,handleSubmenuAfterEnter:g}},render(){var e,n;const{animated:t,rawNode:o,mergedShowSubmenu:r,clsPrefix:a,siblingHasIcon:i,siblingHasSubmenu:s,renderLabel:l,renderIcon:d,renderOption:p,nodeProps:f,props:b,scrollable:C}=this;let w=null;if(r){const U=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,o,o.children);w=c(Je,Object.assign({},U,{clsPrefix:a,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const z={class:[`${a}-dropdown-option-body`,this.pending&&`${a}-dropdown-option-body--pending`,this.active&&`${a}-dropdown-option-body--active`,this.childActive&&`${a}-dropdown-option-body--child-active`,this.mergedDisabled&&`${a}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},I=f==null?void 0:f(o),B=c("div",Object.assign({class:[`${a}-dropdown-option`,I==null?void 0:I.class],"data-dropdown-option":!0},I),c("div",Ee(z,b),[c("div",{class:[`${a}-dropdown-option-body__prefix`,i&&`${a}-dropdown-option-body__prefix--show-icon`]},[d?d(o):ce(o.icon)]),c("div",{"data-dropdown-option":!0,class:`${a}-dropdown-option-body__label`},l?l(o):ce((n=o[this.labelField])!==null&&n!==void 0?n:o.title)),c("div",{"data-dropdown-option":!0,class:[`${a}-dropdown-option-body__suffix`,s&&`${a}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?c(pe,null,{default:()=>c(zn,null)}):null)]),this.hasSubmenu?c(Pn,null,{default:()=>[c(Kn,null,{default:()=>c("div",{class:`${a}-dropdown-offset-container`},c($n,{show:this.mergedShowSubmenu,placement:this.placement,to:C&&this.popoverBody||void 0,teleportDisabled:!C},{default:()=>c("div",{class:`${a}-dropdown-menu-wrapper`},t?c(en,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>w}):w)}))})]}):null);return p?p({node:B,option:o}):B}}),ct=O({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=ee(Ie),{renderLabelRef:t,labelFieldRef:o,nodePropsRef:r,renderOptionRef:a}=ee(ge);return{labelField:o,showIcon:e,hasSubmenu:n,renderLabel:t,nodeProps:r,renderOption:a}},render(){var e;const{clsPrefix:n,hasSubmenu:t,showIcon:o,nodeProps:r,renderLabel:a,renderOption:i}=this,{rawNode:s}=this.tmNode,l=c("div",Object.assign({class:`${n}-dropdown-option`},r==null?void 0:r(s)),c("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},c("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,o&&`${n}-dropdown-option-body__prefix--show-icon`]},ce(s.icon)),c("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},a?a(s):ce((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),c("div",{class:[`${n}-dropdown-option-body__suffix`,t&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return i?i({node:l,option:s}):l}}),ut=O({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:t}=this,{children:o}=e;return c($e,null,c(ct,{clsPrefix:t,tmNode:e,key:e.key}),o==null?void 0:o.map(r=>{const{rawNode:a}=r;return a.show===!1?null:Xe(a)?c(Ze,{clsPrefix:t,key:r.key}):r.isGroup?(nn("dropdown","`group` node is not allowed to be put in `group` node."),null):c(Ye,{clsPrefix:t,tmNode:r,parentKey:n,key:r.key})}))}}),ft=O({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return c("div",n,[e==null?void 0:e()])}}),Je=O({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:t}=ee(ge);oe(Ie,{showIconRef:P(()=>{const r=n.value;return e.tmNodes.some(a=>{var i;if(a.isGroup)return(i=a.children)===null||i===void 0?void 0:i.some(({rawNode:l})=>r?r(l):l.icon);const{rawNode:s}=a;return r?r(s):s.icon})}),hasSubmenuRef:P(()=>{const{value:r}=t;return e.tmNodes.some(a=>{var i;if(a.isGroup)return(i=a.children)===null||i===void 0?void 0:i.some(({rawNode:l})=>Pe(l,r));const{rawNode:s}=a;return Pe(s,r)})})});const o=G(null);return oe(tn,null),oe(on,null),oe(De,o),{bodyRef:o}},render(){const{parentKey:e,clsPrefix:n,scrollable:t}=this,o=this.tmNodes.map(r=>{const{rawNode:a}=r;return a.show===!1?null:dt(a)?c(ft,{tmNode:r,key:r.key}):Xe(a)?c(Ze,{clsPrefix:n,key:r.key}):lt(a)?c(ut,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key}):c(Ye,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key,props:a.props,scrollable:t})});return c("div",{class:[`${n}-dropdown-menu`,t&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},t?c(rn,{contentClass:`${n}-dropdown-menu__content`},{default:()=>o}):o,this.showArrow?An({clsPrefix:n,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),ht=j("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[an(),j("dropdown-option",`
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
 `)])]),pt={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},vt=Object.keys(He),gt=Object.assign(Object.assign(Object.assign({},He),pt),he.props),bt=O({name:"Dropdown",inheritAttrs:!1,props:gt,setup(e){const n=G(!1),t=Ve(q(e,"show"),n),o=P(()=>{const{keyField:g,childrenField:R}=e;return st(e.options,{getKey(k){return k[g]},getDisabled(k){return k.disabled===!0},getIgnored(k){return k.type==="divider"||k.type==="render"},getChildren(k){return k[R]}})}),r=P(()=>o.value.treeNodes),a=G(null),i=G(null),s=G(null),l=P(()=>{var g,R,k;return(k=(R=(g=a.value)!==null&&g!==void 0?g:i.value)!==null&&R!==void 0?R:s.value)!==null&&k!==void 0?k:null}),d=P(()=>o.value.getPath(l.value).keyPath),p=P(()=>o.value.getPath(e.value).keyPath),f=le(()=>e.keyboard&&t.value);In({keydown:{ArrowUp:{prevent:!0,handler:h},ArrowRight:{prevent:!0,handler:u},ArrowDown:{prevent:!0,handler:K},ArrowLeft:{prevent:!0,handler:E},Enter:{prevent:!0,handler:A},Escape:U}},f);const{mergedClsPrefixRef:b,inlineThemeDisabled:C}=Me(e),w=he("Dropdown","-dropdown",ht,sn,e,b);oe(ge,{labelFieldRef:q(e,"labelField"),childrenFieldRef:q(e,"childrenField"),renderLabelRef:q(e,"renderLabel"),renderIconRef:q(e,"renderIcon"),hoverKeyRef:a,keyboardKeyRef:i,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:d,activeKeyPathRef:p,animatedRef:q(e,"animated"),mergedShowRef:t,nodePropsRef:q(e,"nodeProps"),renderOptionRef:q(e,"renderOption"),menuPropsRef:q(e,"menuProps"),doSelect:z,doUpdateShow:I}),Fe(t,g=>{!e.animated&&!g&&B()});function z(g,R){const{onSelect:k}=e;k&&re(k,g,R)}function I(g){const{"onUpdate:show":R,onUpdateShow:k}=e;R&&re(R,g),k&&re(k,g),n.value=g}function B(){a.value=null,i.value=null,s.value=null}function U(){I(!1)}function E(){$("left")}function u(){$("right")}function h(){$("up")}function K(){$("down")}function A(){const g=v();g!=null&&g.isLeaf&&t.value&&(z(g.key,g.rawNode),I(!1))}function v(){var g;const{value:R}=o,{value:k}=l;return!R||k===null?null:(g=R.getNode(k))!==null&&g!==void 0?g:null}function $(g){const{value:R}=l,{value:{getFirstAvailableNode:k}}=o;let x=null;if(R===null){const F=k();F!==null&&(x=F.key)}else{const F=v();if(F){let y;switch(g){case"down":y=F.getNext();break;case"up":y=F.getPrev();break;case"right":y=F.getChild();break;case"left":y=F.getParent();break}y&&(x=y.key)}}x!==null&&(a.value=null,i.value=x)}const _=P(()=>{const{size:g,inverted:R}=e,{common:{cubicBezierEaseInOut:k},self:x}=w.value,{padding:F,dividerColor:y,borderRadius:S,optionOpacityDisabled:H,[D("optionIconSuffixWidth",g)]:Z,[D("optionSuffixWidth",g)]:M,[D("optionIconPrefixWidth",g)]:V,[D("optionPrefixWidth",g)]:be,[D("fontSize",g)]:ye,[D("optionHeight",g)]:me,[D("optionIconSize",g)]:ae}=x,N={"--n-bezier":k,"--n-font-size":ye,"--n-padding":F,"--n-border-radius":S,"--n-option-height":me,"--n-option-prefix-width":be,"--n-option-icon-prefix-width":V,"--n-option-suffix-width":M,"--n-option-icon-suffix-width":Z,"--n-option-icon-size":ae,"--n-divider-color":y,"--n-option-opacity-disabled":H};return R?(N["--n-color"]=x.colorInverted,N["--n-option-color-hover"]=x.optionColorHoverInverted,N["--n-option-color-active"]=x.optionColorActiveInverted,N["--n-option-text-color"]=x.optionTextColorInverted,N["--n-option-text-color-hover"]=x.optionTextColorHoverInverted,N["--n-option-text-color-active"]=x.optionTextColorActiveInverted,N["--n-option-text-color-child-active"]=x.optionTextColorChildActiveInverted,N["--n-prefix-color"]=x.prefixColorInverted,N["--n-suffix-color"]=x.suffixColorInverted,N["--n-group-header-text-color"]=x.groupHeaderTextColorInverted):(N["--n-color"]=x.color,N["--n-option-color-hover"]=x.optionColorHover,N["--n-option-color-active"]=x.optionColorActive,N["--n-option-text-color"]=x.optionTextColor,N["--n-option-text-color-hover"]=x.optionTextColorHover,N["--n-option-text-color-active"]=x.optionTextColorActive,N["--n-option-text-color-child-active"]=x.optionTextColorChildActive,N["--n-prefix-color"]=x.prefixColor,N["--n-suffix-color"]=x.suffixColor,N["--n-group-header-text-color"]=x.groupHeaderTextColor),N}),T=C?je("dropdown",P(()=>`${e.size[0]}${e.inverted?"i":""}`),_,e):void 0;return{mergedClsPrefix:b,mergedTheme:w,tmNodes:r,mergedShow:t,handleAfterLeave:()=>{e.animated&&B()},doUpdateShow:I,cssVars:C?void 0:_,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const e=(o,r,a,i,s)=>{var l;const{mergedClsPrefix:d,menuProps:p}=this;(l=this.onRender)===null||l===void 0||l.call(this);const f=(p==null?void 0:p(void 0,this.tmNodes.map(C=>C.rawNode)))||{},b={ref:Tn(r),class:[o,`${d}-dropdown`,this.themeClass],clsPrefix:d,tmNodes:this.tmNodes,style:[...a,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:i,onMouseleave:s};return c(Je,Ee(this.$attrs,b,f))},{mergedTheme:n}=this,t={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return c(Ln,Object.assign({},ln(this.$props,vt),t),{trigger:()=>{var o,r;return(r=(o=this.$slots).default)===null||r===void 0?void 0:r.call(o)}})}}),yt=j("switch",`
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
 `)])]),mt=Object.assign(Object.assign({},he.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let se;const wt=O({name:"Switch",props:mt,setup(e){se===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?se=CSS.supports("width","max(1px)"):se=!1:se=!0);const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=Me(e),o=he("Switch","-switch",yt,dn,e,n),r=cn(e),{mergedSizeRef:a,mergedDisabledRef:i}=r,s=G(e.defaultValue),l=q(e,"value"),d=Ve(l,s),p=P(()=>d.value===e.checkedValue),f=G(!1),b=G(!1),C=P(()=>{const{railStyle:v}=e;if(v)return v({focused:b.value,checked:p.value})});function w(v){const{"onUpdate:value":$,onChange:_,onUpdateValue:T}=e,{nTriggerFormInput:g,nTriggerFormChange:R}=r;$&&re($,v),T&&re(T,v),_&&re(_,v),s.value=v,g(),R()}function z(){const{nTriggerFormFocus:v}=r;v()}function I(){const{nTriggerFormBlur:v}=r;v()}function B(){e.loading||i.value||(d.value!==e.checkedValue?w(e.checkedValue):w(e.uncheckedValue))}function U(){b.value=!0,z()}function E(){b.value=!1,I(),f.value=!1}function u(v){e.loading||i.value||v.key===" "&&(d.value!==e.checkedValue?w(e.checkedValue):w(e.uncheckedValue),f.value=!1)}function h(v){e.loading||i.value||v.key===" "&&(v.preventDefault(),f.value=!0)}const K=P(()=>{const{value:v}=a,{self:{opacityDisabled:$,railColor:_,railColorActive:T,buttonBoxShadow:g,buttonColor:R,boxShadowFocus:k,loadingColor:x,textColor:F,iconColor:y,[D("buttonHeight",v)]:S,[D("buttonWidth",v)]:H,[D("buttonWidthPressed",v)]:Z,[D("railHeight",v)]:M,[D("railWidth",v)]:V,[D("railBorderRadius",v)]:be,[D("buttonBorderRadius",v)]:ye},common:{cubicBezierEaseInOut:me}}=o.value;let ae,N,we;return se?(ae=`calc((${M} - ${S}) / 2)`,N=`max(${M}, ${S})`,we=`max(${V}, calc(${V} + ${S} - ${M}))`):(ae=xe((X(M)-X(S))/2),N=xe(Math.max(X(M),X(S))),we=X(M)>X(S)?V:xe(X(V)+X(S)-X(M))),{"--n-bezier":me,"--n-button-border-radius":ye,"--n-button-box-shadow":g,"--n-button-color":R,"--n-button-width":H,"--n-button-width-pressed":Z,"--n-button-height":S,"--n-height":N,"--n-offset":ae,"--n-opacity-disabled":$,"--n-rail-border-radius":be,"--n-rail-color":_,"--n-rail-color-active":T,"--n-rail-height":M,"--n-rail-width":V,"--n-width":we,"--n-box-shadow-focus":k,"--n-loading-color":x,"--n-text-color":F,"--n-icon-color":y}}),A=t?je("switch",P(()=>a.value[0]),K,e):void 0;return{handleClick:B,handleBlur:E,handleFocus:U,handleKeyup:u,handleKeydown:h,mergedRailStyle:C,pressed:f,mergedClsPrefix:n,mergedValue:d,checked:p,mergedDisabled:i,cssVars:t?void 0:K,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:n,checked:t,mergedRailStyle:o,onRender:r,$slots:a}=this;r==null||r();const{checked:i,unchecked:s,icon:l,"checked-icon":d,"unchecked-icon":p}=a,f=!(ke(l)&&ke(d)&&ke(p));return c("div",{role:"switch","aria-checked":t,class:[`${e}-switch`,this.themeClass,f&&`${e}-switch--icon`,t&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},c("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:o},te(i,b=>te(s,C=>b||C?c("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},c("div",{class:`${e}-switch__rail-placeholder`},c("div",{class:`${e}-switch__button-placeholder`}),b),c("div",{class:`${e}-switch__rail-placeholder`},c("div",{class:`${e}-switch__button-placeholder`}),C)):null)),c("div",{class:`${e}-switch__button`},te(l,b=>te(d,C=>te(p,w=>c(un,null,{default:()=>this.loading?c(fn,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(C||b)?c("div",{class:`${e}-switch__button-icon`,key:C?"checked-icon":"icon"},C||b):!this.checked&&(w||b)?c("div",{class:`${e}-switch__button-icon`,key:w?"unchecked-icon":"icon"},w||b):null})))),te(i,b=>b&&c("div",{key:"checked",class:`${e}-switch__checked`},b)),te(s,b=>b&&c("div",{key:"unchecked",class:`${e}-switch__unchecked`},b)))))}}),xt={class:"navigation-change-theme"},kt=O({__name:"ChangeTheme",setup(e){const n=hn(),{isDark:t}=pn(),o=G(n.theme),r=({focused:i,checked:s})=>{const l={};return s?(l.background="#313136",l.boxShadow="0 0 0 1px rgb(100 100 100)"):(l.background="#f6f5f7",l.boxShadow="0 0 0 1px rgb(60 60 67 / 40%)"),l},a=i=>{n.setTheme(i)};return(i,s)=>{const l=pe,d=wt;return ne(),ie("div",xt,[J(d,{value:de(o),"onUpdate:value":[s[0]||(s[0]=p=>vn(o)?o.value=p:null),a],"checked-value":"dark","unchecked-value":"light","rail-style":r,style:gn({"--n-icon-color":de(t)?"#fff":"#000","--n-button-color":de(t)?"#000":"#fff","--n-button-box-shadow":"none"})},{"checked-icon":Q(()=>[J(l,null,{default:Q(()=>s[1]||(s[1]=[W("div",{class:"i-tdesign:mode-dark"},null,-1)])),_:1})]),"unchecked-icon":Q(()=>[J(l,null,{default:Q(()=>s[2]||(s[2]=[W("div",{class:"i-solar:sun-2-outline"},null,-1)])),_:1})]),_:1},8,["value","style"])])}}}),St=O({name:"NavigationAvatar",setup(){bn(),yn();const e=t=>()=>c(pe,null,{default:()=>c(t)});return{commandList:P(()=>[{label:"退出登录",key:"退出按钮",icon:e(c("div",{class:"text-16px i-fluent:sign-out-20-regular"})),props:{onClick:()=>{mn.remove("token"),window.location.reload()}}}])}}}),_t={class:"navigation-avatar"};function Nt(e,n,t,o,r,a){const i=pe,s=bt;return ne(),Ge(s,{trigger:"hover",options:e.commandList},{default:Q(()=>[W("div",_t,[J(i,{size:24},{default:Q(()=>n[0]||(n[0]=[W("div",{class:"i-carbon:user-avatar"},null,-1)])),_:1})])]),_:1},8,["options"])}const Rt=ve(St,[["render",Nt]]),Qe=Symbol(),jt=()=>{const e=G(!0),{changeNotifyPlacement:n}=wn(),t=()=>{e.value=!1,xn(()=>{n("bottom-right"),window.$ModalNotification.destroyAll(),window.$ModalNotification.success({title:"页面刷新成功",duration:800,closable:!0}),e.value=!0})};return oe(Qe,t),{isRouterAlive:e,reloadRouterView:t}},Ct=()=>({reloadRouterView:ee(Qe)}),Pt=O({__name:"Refresh",setup(e){const{reloadRouterView:n}=Ct();return(t,o)=>{const r=Bn;return ne(),Ge(r,null,{trigger:Q(()=>[W("div",{class:"h-full text-1.5em i-material-symbols:refresh",flex:"~ items-center","cursor-pointer":"",onClick:o[0]||(o[0]=a=>de(n)())})]),default:Q(()=>[o[1]||(o[1]=kn(" 强制刷新路由 "))]),_:1})}}});function Kt(){const{proxy:e}=Sn();return{proxy:e}}const $t=O({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:e}=Kt();function n(){e.$emit("click")}return{title:P(()=>"NaiveUI Template 项目"),handleClick:n}}}),At={class:"side-action-container"},It={class:"action-list"};function Lt(e,n,t,o,r,a){return ne(),ie("div",At,[W("ul",It,[(ne(),ie($e,null,_n(3,i=>W("li",{key:i,class:"action-item bg-#eee dark:bg-#555"}," Action "+Ue(i),1)),64))])])}const Bt=ve($t,[["render",Lt],["__scopeId","data-v-e1c7de5e"]]),Tt=O({__name:"NavBar",props:{auth:{type:Boolean,default:!0},fixed:{type:Boolean,default:!0}},setup(e){return(n,t)=>{const o=Bt,r=Pt,a=Rt,i=kt;return ne(),ie("header",{class:Re(["navigation-navbar-header-container",{"fixed-header":e.fixed,"navbar-shadow dark:dark-navbar-shadow":e.auth,"login-navbar-shadow dark:shadow-none":!e.auth}])},[W("div",{class:Re(["navbar-header-box",{"bg-#fff dark:bg-#1e1e20":e.auth,"bg-#8d8b89 bg-opacity-30":!e.auth}])},[Nn(n.$slots,"default",{},void 0,!0),t[0]||(t[0]=W("div",{style:{flex:"1"}},null,-1)),e.auth?(ne(),ie($e,{key:0},[J(o),J(r),J(a)],64)):Rn("",!0),J(i)],2)],2)}}}),Gt=ve(Tt,[["__scopeId","data-v-0b4ec54b"]]),Ot=O({name:"NavigationSideLogo",props:{auth:{type:Boolean,default:!0}},setup(){return{title:P(()=>"NaiveUI Template 项目")}}}),zt="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20207.74%20252.58'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2393ceaa;}.cls-2{fill:%234c9717;}.cls-3{fill:%235fbc21;}.cls-4{fill:%23e8ceaa;opacity:0.6;}%3c/style%3e%3c/defs%3e%3ctitle%3eNaive%20UI%20-%20LOGO%3c/title%3e%3cg%20id='Layer_2'%20data-name='Layer%202'%3e%3cg%20id='Layer_1-2'%20data-name='Layer%201'%3e%3cpath%20class='cls-1'%20d='M60.37,205.2c0,2.5,0,5,.05,7.5,0,.54,0,1.07-.05,1.58Z'/%3e%3cpath%20class='cls-1'%20d='M147.29,37.68v85.2c-.06-27.24-.19-54.49-.22-81.73A29,29,0,0,1,147.29,37.68Z'/%3e%3cpath%20class='cls-2'%20d='M147.06,125.43a16.9,16.9,0,0,0,.23-2.55v79.66l-41.74-38.17-21-19.15L71.91,133.6l-5.62-5.13-2.07-1.89-.15-.13c-.51-.41-1-.84-1.47-1.23s-.88-.73-1.44-.56a1.25,1.25,0,0,0-.79.9v-75l.43.39,8.57,7.75c4.51,4,9.06,8,13.56,12Q92.53,79.3,102.07,88q7.55,6.86,15.08,13.74c6,5.47,11.92,11,17.92,16.43,2.7,2.44,5.42,4.83,8.15,7.23.58.51,1.15,1,1.74,1.52a1.47,1.47,0,0,0,1.4.18,1.16,1.16,0,0,0,.56-.72C147,126,147,125.74,147.06,125.43Z'/%3e%3cpath%20class='cls-3'%20d='M60.28,126a15.67,15.67,0,0,0-.1,2.74c0,25.5,0,51,.19,76.49v9.08a14.85,14.85,0,0,1-5.87,11.09c-6.81,5.69-13.16,11.91-19.73,17.89-2.75,2.5-5.48,5-8.31,7.44s-10.11,2.74-14.14-.63a78.48,78.48,0,0,1-8.54-8.66,12.76,12.76,0,0,1-3.73-8.69c0-.72-.06-1.51,0-2.38,0-1.5,0-3,.05-4.51.05-4.3,0-8.61,0-12.91V72.71a12.64,12.64,0,0,1,.38-3.18,18.42,18.42,0,0,1,1-2.64A22.16,22.16,0,0,1,3.5,63.31l16-16L29.69,37.13a7.84,7.84,0,0,1,1.84-1.38,8.05,8.05,0,0,1,3.21-1h0a13.85,13.85,0,0,1,9.71,1.79h0a13.59,13.59,0,0,1,2.09,1.57L60.37,50.53v75A3.38,3.38,0,0,0,60.28,126Z'/%3e%3cpath%20class='cls-4'%20d='M60.28,126a3.38,3.38,0,0,1,.09-.41V205.2c-.15-25.5-.14-51-.19-76.49A15.67,15.67,0,0,1,60.28,126Z'/%3e%3cpath%20class='cls-3'%20d='M205.59,187.21l-29.39,27a3.75,3.75,0,0,1-.36.24l-.11.08-.2.12A14,14,0,0,1,158.77,213L157,211.45l-9.75-8.91V37.68c.16-1.39.4-2.78.67-4.14.7-3.55,3.82-5.31,6.2-7.53,5.17-4.8,10.5-9.42,15.77-14.12,3.63-3.24,7.25-6.49,10.91-9.71,3.19-2.81,9.37-2.67,12.37-.93a10.11,10.11,0,0,1,2.08,1.61l3.38,3.26,2.73,2.61,2.49,2.41a11.45,11.45,0,0,1,1.78,2.09,11.73,11.73,0,0,1,1.7,6.46c-.05,14.66.06,29.32.09,44q.09,37.35.16,74.7,0,19.14.07,38.27c0,.59,0,1.17,0,1.75C207.8,182.21,207.72,184.72,205.59,187.21Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Ft={class:"side-logo-container"};function Dt(e,n,t,o,r,a){const i=Cn("router-link");return ne(),ie("div",Ft,[J(i,{to:"/"},{default:Q(()=>[n[0]||(n[0]=W("img",{class:"side-logo-img",src:zt,alt:"商标"},null,-1)),W("h1",{class:Re(["side-logo-title c-#303133 dark:c-#fff",{"c-#303133 dark:c-#fff":e.auth,"c-#fff dark:c-#303133":!e.auth}])},Ue(e.title),3)]),_:1})])}const Ut=ve(Ot,[["render",Dt],["__scopeId","data-v-8767ff33"]]);export{Ut as N,Gt as a,Kt as b,jt as u};
