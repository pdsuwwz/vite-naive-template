import{u as en}from"./useCurrentInstance-b59978c4.js";import{j as U,Q as Ae,aa as nn,bv as tn,bw as on,ba as rn,bp as le,bx as an,bo as de,d as O,m as h,A as ze,D as te,by as Ve,i as R,T as oe,k as ce,Y as sn,n as je,bz as fe,a8 as ln,ai as Ie,bA as dn,bB as cn,bC as un,G as j,I as fn,F as J,K as he,H as I,J as w,R as q,L as Ge,O as be,bD as hn,a0 as re,a9 as M,U as He,bE as pn,bf as Te,bF as vn,M as bn,p as Se,l as Z,bG as Ne,bn as ne,bh as gn,aq as mn,o as X,b as Q,e as W,_ as ge,aj as wn,av as yn,aC as xn,aA as kn,aD as _n,r as ue,c as Sn,w as pe,ac as ee,bH as Nn,b0 as Cn,aE as ae,bI as Pn,az as Rn,a5 as $n,ak as Kn,ax as Le,al as An,am as zn}from"./index-ec37a332.js";import{N as me}from"./Icon-d0f96418.js";import{V as In,d as Bn,e as On,r as Tn,N as Ln,p as Ue}from"./Popover-3e1cc0ac.js";import{u as We}from"./get-b9e56527.js";function De(e,n){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[n]!==void 0)return!0;t=t.parentElement}return!1}function Dn(e){return n=>{n?e.value=n.$el:e.value=null}}function Mn(e,n,t){if(!n)return e;const r=U(e.value);let o=null;return Ae(e,a=>{o!==null&&window.clearTimeout(o),a===!0?t&&!t.value?r.value=!0:o=window.setTimeout(()=>{r.value=!0},n):r.value=!1}),r}function Fn(e={},n){const t=nn({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:o}=e,a=s=>{switch(s.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}r!==void 0&&Object.keys(r).forEach(d=>{if(d!==s.key)return;const c=r[d];if(typeof c=="function")c(s);else{const{stop:u=!1,prevent:v=!1}=c;u&&s.stopPropagation(),v&&s.preventDefault(),c.handler(s)}})},i=s=>{switch(s.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}o!==void 0&&Object.keys(o).forEach(d=>{if(d!==s.key)return;const c=o[d];if(typeof c=="function")c(s);else{const{stop:u=!1,prevent:v=!1}=c;u&&s.stopPropagation(),v&&s.preventDefault(),c.handler(s)}})},l=()=>{(n===void 0||n.value)&&(de("keydown",document,a),de("keyup",document,i)),n!==void 0&&Ae(n,s=>{s?(de("keydown",document,a),de("keyup",document,i)):(le("keydown",document,a),le("keyup",document,i))})};return tn()?(on(l),rn(()=>{(n===void 0||n.value)&&(le("keydown",document,a),le("keyup",document,i))})):l(),an(t)}const En=O({name:"ChevronRight",render(){return h("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}});function Me(e){return Array.isArray(e)?e:[e]}const $e={STOP:"STOP"};function qe(e,n){const t=n(e);e.children!==void 0&&t!==$e.STOP&&e.children.forEach(r=>qe(r,n))}function Vn(e,n={}){const{preserveGroup:t=!1}=n,r=[],o=t?i=>{i.isLeaf||(r.push(i.key),a(i.children))}:i=>{i.isLeaf||(i.isGroup||r.push(i.key),a(i.children))};function a(i){i.forEach(o)}return a(e),r}function jn(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function Gn(e){return e.children}function Hn(e){return e.key}function Un(){return!1}function Wn(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function qn(e){return e.disabled===!0}function Xn(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function Ce(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function Pe(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function Yn(e,n){const t=new Set(e);return n.forEach(r=>{t.has(r)||t.add(r)}),Array.from(t)}function Zn(e,n){const t=new Set(e);return n.forEach(r=>{t.has(r)&&t.delete(r)}),Array.from(t)}function Jn(e){return(e==null?void 0:e.type)==="group"}class Qn extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function et(e,n,t,r){return ve(n.concat(e),t,r,!1)}function nt(e,n){const t=new Set;return e.forEach(r=>{const o=n.treeNodeMap.get(r);if(o!==void 0){let a=o.parent;for(;a!==null&&!(a.disabled||t.has(a.key));)t.add(a.key),a=a.parent}}),t}function tt(e,n,t,r){const o=ve(n,t,r,!1),a=ve(e,t,r,!0),i=nt(e,t),l=[];return o.forEach(s=>{(a.has(s)||i.has(s))&&l.push(s)}),l.forEach(s=>o.delete(s)),o}function Re(e,n){const{checkedKeys:t,keysToCheck:r,keysToUncheck:o,indeterminateKeys:a,cascade:i,leafOnly:l,checkStrategy:s,allowNotLoaded:d}=e;if(!i)return r!==void 0?{checkedKeys:Yn(t,r),indeterminateKeys:Array.from(a)}:o!==void 0?{checkedKeys:Zn(t,o),indeterminateKeys:Array.from(a)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(a)};const{levelTreeNodeMap:c}=n;let u;o!==void 0?u=tt(o,t,n,d):r!==void 0?u=et(r,t,n,d):u=ve(t,n,d,!1);const v=s==="parent",P=s==="child"||l,y=u,L=new Set,z=Math.max.apply(null,Array.from(c.keys()));for(let B=z;B>=0;B-=1){const G=B===0,F=c.get(B);for(const f of F){if(f.isLeaf)continue;const{key:p,shallowLoaded:$}=f;if(P&&$&&f.children.forEach(S=>{!S.disabled&&!S.isLeaf&&S.shallowLoaded&&y.has(S.key)&&y.delete(S.key)}),f.disabled||!$)continue;let A=!0,b=!1,K=!0;for(const S of f.children){const T=S.key;if(!S.disabled){if(K&&(K=!1),y.has(T))b=!0;else if(L.has(T)){b=!0,A=!1;break}else if(A=!1,b)break}}A&&!K?(v&&f.children.forEach(S=>{!S.disabled&&y.has(S.key)&&y.delete(S.key)}),y.add(p)):b&&L.add(p),G&&P&&y.has(p)&&y.delete(p)}}return{checkedKeys:Array.from(y),indeterminateKeys:Array.from(L)}}function ve(e,n,t,r){const{treeNodeMap:o,getChildren:a}=n,i=new Set,l=new Set(e);return e.forEach(s=>{const d=o.get(s);d!==void 0&&qe(d,c=>{if(c.disabled)return $e.STOP;const{key:u}=c;if(!i.has(u)&&(i.add(u),l.add(u),Xn(c.rawNode,a))){if(r)return $e.STOP;if(!t)throw new Qn}})}),l}function ot(e,{includeGroup:n=!1,includeSelf:t=!0},r){var o;const a=r.treeNodeMap;let i=e==null?null:(o=a.get(e))!==null&&o!==void 0?o:null;const l={keyPath:[],treeNodePath:[],treeNode:i};if(i!=null&&i.ignored)return l.treeNode=null,l;for(;i;)!i.ignored&&(n||!i.isGroup)&&l.treeNodePath.push(i),i=i.parent;return l.treeNodePath.reverse(),t||l.treeNodePath.pop(),l.keyPath=l.treeNodePath.map(s=>s.key),l}function rt(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function it(e,n){const t=e.siblings,r=t.length,{index:o}=e;return n?t[(o+1)%r]:o===t.length-1?null:t[o+1]}function Fe(e,n,{loop:t=!1,includeDisabled:r=!1}={}){const o=n==="prev"?at:it,a={reverse:n==="prev"};let i=!1,l=null;function s(d){if(d!==null){if(d===e){if(!i)i=!0;else if(!e.disabled&&!e.isGroup){l=e;return}}else if((!d.disabled||r)&&!d.ignored&&!d.isGroup){l=d;return}if(d.isGroup){const c=Be(d,a);c!==null?l=c:s(o(d,t))}else{const c=o(d,!1);if(c!==null)s(c);else{const u=st(d);u!=null&&u.isGroup?s(o(u,t)):t&&s(o(d,!0))}}}}return s(e),l}function at(e,n){const t=e.siblings,r=t.length,{index:o}=e;return n?t[(o-1+r)%r]:o===0?null:t[o-1]}function st(e){return e.parent}function Be(e,n={}){const{reverse:t=!1}=n,{children:r}=e;if(r){const{length:o}=r,a=t?o-1:0,i=t?-1:o,l=t?-1:1;for(let s=a;s!==i;s+=l){const d=r[s];if(!d.disabled&&!d.ignored)if(d.isGroup){const c=Be(d,n);if(c!==null)return c}else return d}}return null}const lt={getChild(){return this.ignored?null:Be(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Fe(this,"next",e)},getPrev(e={}){return Fe(this,"prev",e)}};function dt(e,n){const t=n?new Set(n):void 0,r=[];function o(a){a.forEach(i=>{r.push(i),!(i.isLeaf||!i.children||i.ignored)&&(i.isGroup||t===void 0||t.has(i.key))&&o(i.children)})}return o(e),r}function ct(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function Xe(e,n,t,r,o,a=null,i=0){const l=[];return e.forEach((s,d)=>{var c;const u=Object.create(r);if(u.rawNode=s,u.siblings=l,u.level=i,u.index=d,u.isFirstChild=d===0,u.isLastChild=d+1===e.length,u.parent=a,!u.ignored){const v=o(s);Array.isArray(v)&&(u.children=Xe(v,n,t,r,o,u,i+1))}l.push(u),n.set(u.key,u),t.has(i)||t.set(i,[]),(c=t.get(i))===null||c===void 0||c.push(u)}),l}function ut(e,n={}){var t;const r=new Map,o=new Map,{getDisabled:a=qn,getIgnored:i=Un,getIsGroup:l=Jn,getKey:s=Hn}=n,d=(t=n.getChildren)!==null&&t!==void 0?t:Gn,c=n.ignoreEmptyChildren?f=>{const p=d(f);return Array.isArray(p)?p.length?p:null:p}:d,u=Object.assign({get key(){return s(this.rawNode)},get disabled(){return a(this.rawNode)},get isGroup(){return l(this.rawNode)},get isLeaf(){return jn(this.rawNode,c)},get shallowLoaded(){return Wn(this.rawNode,c)},get ignored(){return i(this.rawNode)},contains(f){return ct(this,f)}},lt),v=Xe(e,r,o,u,c);function P(f){if(f==null)return null;const p=r.get(f);return p&&!p.isGroup&&!p.ignored?p:null}function y(f){if(f==null)return null;const p=r.get(f);return p&&!p.ignored?p:null}function L(f,p){const $=y(f);return $?$.getPrev(p):null}function z(f,p){const $=y(f);return $?$.getNext(p):null}function B(f){const p=y(f);return p?p.getParent():null}function G(f){const p=y(f);return p?p.getChild():null}const F={treeNodes:v,treeNodeMap:r,levelTreeNodeMap:o,maxLevel:Math.max(...o.keys()),getChildren:c,getFlattenedNodes(f){return dt(v,f)},getNode:P,getPrev:L,getNext:z,getParent:B,getChild:G,getFirstAvailableNode(){return rt(v)},getPath(f,p={}){return ot(f,p,F)},getCheckedKeys(f,p={}){const{cascade:$=!0,leafOnly:A=!1,checkStrategy:b="all",allowNotLoaded:K=!1}=p;return Re({checkedKeys:Ce(f),indeterminateKeys:Pe(f),cascade:$,leafOnly:A,checkStrategy:b,allowNotLoaded:K},F)},check(f,p,$={}){const{cascade:A=!0,leafOnly:b=!1,checkStrategy:K="all",allowNotLoaded:S=!1}=$;return Re({checkedKeys:Ce(p),indeterminateKeys:Pe(p),keysToCheck:f==null?[]:Me(f),cascade:A,leafOnly:b,checkStrategy:K,allowNotLoaded:S},F)},uncheck(f,p,$={}){const{cascade:A=!0,leafOnly:b=!1,checkStrategy:K="all",allowNotLoaded:S=!1}=$;return Re({checkedKeys:Ce(p),indeterminateKeys:Pe(p),keysToUncheck:f==null?[]:Me(f),cascade:A,leafOnly:b,checkStrategy:K,allowNotLoaded:S},F)},getNonLeafKeys(f={}){return Vn(v,f)}};return F}const Ye=O({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return h("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),Oe=ze("n-dropdown-menu"),we=ze("n-dropdown"),Ee=ze("n-dropdown-option");function Ke(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function ft(e){return e.type==="group"}function Ze(e){return e.type==="divider"}function ht(e){return e.type==="render"}const Je=O({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=te(we),{hoverKeyRef:t,keyboardKeyRef:r,lastToggledSubmenuKeyRef:o,pendingKeyPathRef:a,activeKeyPathRef:i,animatedRef:l,mergedShowRef:s,renderLabelRef:d,renderIconRef:c,labelFieldRef:u,childrenFieldRef:v,renderOptionRef:P,nodePropsRef:y,menuPropsRef:L}=n,z=te(Ee,null),B=te(Oe),G=te(Ve),F=R(()=>e.tmNode.rawNode),f=R(()=>{const{value:m}=v;return Ke(e.tmNode.rawNode,m)}),p=R(()=>{const{disabled:m}=e.tmNode;return m}),$=R(()=>{if(!f.value)return!1;const{key:m,disabled:_}=e.tmNode;if(_)return!1;const{value:H}=t,{value:Y}=r,{value:V}=o,{value:E}=a;return H!==null?E.includes(m):Y!==null?E.includes(m)&&E[E.length-1]!==m:V!==null?E.includes(m):!1}),A=R(()=>r.value===null&&!l.value),b=Mn($,300,A),K=R(()=>!!(z!=null&&z.enteringSubmenuRef.value)),S=U(!1);oe(Ee,{enteringSubmenuRef:S});function T(){S.value=!0}function g(){S.value=!1}function C(){const{parentKey:m,tmNode:_}=e;_.disabled||s.value&&(o.value=m,r.value=null,t.value=_.key)}function k(){const{tmNode:m}=e;m.disabled||s.value&&t.value!==m.key&&C()}function x(m){if(e.tmNode.disabled||!s.value)return;const{relatedTarget:_}=m;_&&!De({target:_},"dropdownOption")&&!De({target:_},"scrollbarRail")&&(t.value=null)}function D(){const{value:m}=f,{tmNode:_}=e;s.value&&!m&&!_.disabled&&(n.doSelect(_.key,_.rawNode),n.doUpdateShow(!1))}return{labelField:u,renderLabel:d,renderIcon:c,siblingHasIcon:B.showIconRef,siblingHasSubmenu:B.hasSubmenuRef,menuProps:L,popoverBody:G,animated:l,mergedShowSubmenu:R(()=>b.value&&!K.value),rawNode:F,hasSubmenu:f,pending:ce(()=>{const{value:m}=a,{key:_}=e.tmNode;return m.includes(_)}),childActive:ce(()=>{const{value:m}=i,{key:_}=e.tmNode,H=m.findIndex(Y=>_===Y);return H===-1?!1:H<m.length-1}),active:ce(()=>{const{value:m}=i,{key:_}=e.tmNode,H=m.findIndex(Y=>_===Y);return H===-1?!1:H===m.length-1}),mergedDisabled:p,renderOption:P,nodeProps:y,handleClick:D,handleMouseMove:k,handleMouseEnter:C,handleMouseLeave:x,handleSubmenuBeforeEnter:T,handleSubmenuAfterEnter:g}},render(){var e,n;const{animated:t,rawNode:r,mergedShowSubmenu:o,clsPrefix:a,siblingHasIcon:i,siblingHasSubmenu:l,renderLabel:s,renderIcon:d,renderOption:c,nodeProps:u,props:v,scrollable:P}=this;let y=null;if(o){const G=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);y=h(Qe,Object.assign({},G,{clsPrefix:a,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const L={class:[`${a}-dropdown-option-body`,this.pending&&`${a}-dropdown-option-body--pending`,this.active&&`${a}-dropdown-option-body--active`,this.childActive&&`${a}-dropdown-option-body--child-active`,this.mergedDisabled&&`${a}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},z=u==null?void 0:u(r),B=h("div",Object.assign({class:[`${a}-dropdown-option`,z==null?void 0:z.class],"data-dropdown-option":!0},z),h("div",je(L,v),[h("div",{class:[`${a}-dropdown-option-body__prefix`,i&&`${a}-dropdown-option-body__prefix--show-icon`]},[d?d(r):fe(r.icon)]),h("div",{"data-dropdown-option":!0,class:`${a}-dropdown-option-body__label`},s?s(r):fe((n=r[this.labelField])!==null&&n!==void 0?n:r.title)),h("div",{"data-dropdown-option":!0,class:[`${a}-dropdown-option-body__suffix`,l&&`${a}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?h(me,null,{default:()=>h(En,null)}):null)]),this.hasSubmenu?h(In,null,{default:()=>[h(Bn,null,{default:()=>h("div",{class:`${a}-dropdown-offset-container`},h(On,{show:this.mergedShowSubmenu,placement:this.placement,to:P&&this.popoverBody||void 0,teleportDisabled:!P},{default:()=>h("div",{class:`${a}-dropdown-menu-wrapper`},t?h(sn,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>y}):y)}))})]}):null);return c?c({node:B,option:r}):B}}),pt=O({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=te(Oe),{renderLabelRef:t,labelFieldRef:r,nodePropsRef:o,renderOptionRef:a}=te(we);return{labelField:r,showIcon:e,hasSubmenu:n,renderLabel:t,nodeProps:o,renderOption:a}},render(){var e;const{clsPrefix:n,hasSubmenu:t,showIcon:r,nodeProps:o,renderLabel:a,renderOption:i}=this,{rawNode:l}=this.tmNode,s=h("div",Object.assign({class:`${n}-dropdown-option`},o==null?void 0:o(l)),h("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},h("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,r&&`${n}-dropdown-option-body__prefix--show-icon`]},fe(l.icon)),h("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},a?a(l):fe((e=l.title)!==null&&e!==void 0?e:l[this.labelField])),h("div",{class:[`${n}-dropdown-option-body__suffix`,t&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return i?i({node:s,option:l}):s}}),vt=O({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:t}=this,{children:r}=e;return h(Ie,null,h(pt,{clsPrefix:t,tmNode:e,key:e.key}),r==null?void 0:r.map(o=>{const{rawNode:a}=o;return a.show===!1?null:Ze(a)?h(Ye,{clsPrefix:t,key:o.key}):o.isGroup?(ln("dropdown","`group` node is not allowed to be put in `group` node."),null):h(Je,{clsPrefix:t,tmNode:o,parentKey:n,key:o.key})}))}}),bt=O({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return h("div",n,[e==null?void 0:e()])}}),Qe=O({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:t}=te(we);oe(Oe,{showIconRef:R(()=>{const o=n.value;return e.tmNodes.some(a=>{var i;if(a.isGroup)return(i=a.children)===null||i===void 0?void 0:i.some(({rawNode:s})=>o?o(s):s.icon);const{rawNode:l}=a;return o?o(l):l.icon})}),hasSubmenuRef:R(()=>{const{value:o}=t;return e.tmNodes.some(a=>{var i;if(a.isGroup)return(i=a.children)===null||i===void 0?void 0:i.some(({rawNode:s})=>Ke(s,o));const{rawNode:l}=a;return Ke(l,o)})})});const r=U(null);return oe(dn,null),oe(cn,null),oe(Ve,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:n,scrollable:t}=this,r=this.tmNodes.map(o=>{const{rawNode:a}=o;return a.show===!1?null:ht(a)?h(bt,{tmNode:o,key:o.key}):Ze(a)?h(Ye,{clsPrefix:n,key:o.key}):ft(a)?h(vt,{clsPrefix:n,tmNode:o,parentKey:e,key:o.key}):h(Je,{clsPrefix:n,tmNode:o,parentKey:e,key:o.key,props:a.props,scrollable:t})});return h("div",{class:[`${n}-dropdown-menu`,t&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},t?h(un,{contentClass:`${n}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Tn({clsPrefix:n,arrowStyle:this.arrowStyle}):null)}}),gt=j("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[fn(),j("dropdown-option",`
 position: relative;
 `,[J("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[J("&::before",`
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
 `,[J("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),he("disabled",[I("pending",`
 color: var(--n-option-text-color-hover);
 `,[w("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),J("&::before","background-color: var(--n-option-color-hover);")]),I("active",`
 color: var(--n-option-text-color-active);
 `,[w("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),J("&::before","background-color: var(--n-option-color-active);")]),I("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[w("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),I("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),I("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[w("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[I("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),w("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[I("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),j("icon",`
 font-size: var(--n-option-icon-size);
 `)]),w("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),w("suffix",`
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
 `,[I("has-submenu",`
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
 `),J(">",[j("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),he("scrollable",`
 padding: var(--n-padding);
 `),I("scrollable",[w("content",`
 padding: var(--n-padding);
 `)])]),mt={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},wt=Object.keys(Ue),yt=Object.assign(Object.assign(Object.assign({},Ue),mt),be.props),xt=O({name:"Dropdown",inheritAttrs:!1,props:yt,setup(e){const n=U(!1),t=We(q(e,"show"),n),r=R(()=>{const{keyField:g,childrenField:C}=e;return ut(e.options,{getKey(k){return k[g]},getDisabled(k){return k.disabled===!0},getIgnored(k){return k.type==="divider"||k.type==="render"},getChildren(k){return k[C]}})}),o=R(()=>r.value.treeNodes),a=U(null),i=U(null),l=U(null),s=R(()=>{var g,C,k;return(k=(C=(g=a.value)!==null&&g!==void 0?g:i.value)!==null&&C!==void 0?C:l.value)!==null&&k!==void 0?k:null}),d=R(()=>r.value.getPath(s.value).keyPath),c=R(()=>r.value.getPath(e.value).keyPath),u=ce(()=>e.keyboard&&t.value);Fn({keydown:{ArrowUp:{prevent:!0,handler:p},ArrowRight:{prevent:!0,handler:f},ArrowDown:{prevent:!0,handler:$},ArrowLeft:{prevent:!0,handler:F},Enter:{prevent:!0,handler:A},Escape:G}},u);const{mergedClsPrefixRef:v,inlineThemeDisabled:P}=Ge(e),y=be("Dropdown","-dropdown",gt,hn,e,v);oe(we,{labelFieldRef:q(e,"labelField"),childrenFieldRef:q(e,"childrenField"),renderLabelRef:q(e,"renderLabel"),renderIconRef:q(e,"renderIcon"),hoverKeyRef:a,keyboardKeyRef:i,lastToggledSubmenuKeyRef:l,pendingKeyPathRef:d,activeKeyPathRef:c,animatedRef:q(e,"animated"),mergedShowRef:t,nodePropsRef:q(e,"nodeProps"),renderOptionRef:q(e,"renderOption"),menuPropsRef:q(e,"menuProps"),doSelect:L,doUpdateShow:z}),Ae(t,g=>{!e.animated&&!g&&B()});function L(g,C){const{onSelect:k}=e;k&&re(k,g,C)}function z(g){const{"onUpdate:show":C,onUpdateShow:k}=e;C&&re(C,g),k&&re(k,g),n.value=g}function B(){a.value=null,i.value=null,l.value=null}function G(){z(!1)}function F(){K("left")}function f(){K("right")}function p(){K("up")}function $(){K("down")}function A(){const g=b();g!=null&&g.isLeaf&&t.value&&(L(g.key,g.rawNode),z(!1))}function b(){var g;const{value:C}=r,{value:k}=s;return!C||k===null?null:(g=C.getNode(k))!==null&&g!==void 0?g:null}function K(g){const{value:C}=s,{value:{getFirstAvailableNode:k}}=r;let x=null;if(C===null){const D=k();D!==null&&(x=D.key)}else{const D=b();if(D){let m;switch(g){case"down":m=D.getNext();break;case"up":m=D.getPrev();break;case"right":m=D.getChild();break;case"left":m=D.getParent();break}m&&(x=m.key)}}x!==null&&(a.value=null,i.value=x)}const S=R(()=>{const{size:g,inverted:C}=e,{common:{cubicBezierEaseInOut:k},self:x}=y.value,{padding:D,dividerColor:m,borderRadius:_,optionOpacityDisabled:H,[M("optionIconSuffixWidth",g)]:Y,[M("optionSuffixWidth",g)]:V,[M("optionIconPrefixWidth",g)]:E,[M("optionPrefixWidth",g)]:ye,[M("fontSize",g)]:xe,[M("optionHeight",g)]:ke,[M("optionIconSize",g)]:ie}=x,N={"--n-bezier":k,"--n-font-size":xe,"--n-padding":D,"--n-border-radius":_,"--n-option-height":ke,"--n-option-prefix-width":ye,"--n-option-icon-prefix-width":E,"--n-option-suffix-width":V,"--n-option-icon-suffix-width":Y,"--n-option-icon-size":ie,"--n-divider-color":m,"--n-option-opacity-disabled":H};return C?(N["--n-color"]=x.colorInverted,N["--n-option-color-hover"]=x.optionColorHoverInverted,N["--n-option-color-active"]=x.optionColorActiveInverted,N["--n-option-text-color"]=x.optionTextColorInverted,N["--n-option-text-color-hover"]=x.optionTextColorHoverInverted,N["--n-option-text-color-active"]=x.optionTextColorActiveInverted,N["--n-option-text-color-child-active"]=x.optionTextColorChildActiveInverted,N["--n-prefix-color"]=x.prefixColorInverted,N["--n-suffix-color"]=x.suffixColorInverted,N["--n-group-header-text-color"]=x.groupHeaderTextColorInverted):(N["--n-color"]=x.color,N["--n-option-color-hover"]=x.optionColorHover,N["--n-option-color-active"]=x.optionColorActive,N["--n-option-text-color"]=x.optionTextColor,N["--n-option-text-color-hover"]=x.optionTextColorHover,N["--n-option-text-color-active"]=x.optionTextColorActive,N["--n-option-text-color-child-active"]=x.optionTextColorChildActive,N["--n-prefix-color"]=x.prefixColor,N["--n-suffix-color"]=x.suffixColor,N["--n-group-header-text-color"]=x.groupHeaderTextColor),N}),T=P?He("dropdown",R(()=>`${e.size[0]}${e.inverted?"i":""}`),S,e):void 0;return{mergedClsPrefix:v,mergedTheme:y,tmNodes:o,mergedShow:t,handleAfterLeave:()=>{e.animated&&B()},doUpdateShow:z,cssVars:P?void 0:S,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const e=(r,o,a,i,l)=>{var s;const{mergedClsPrefix:d,menuProps:c}=this;(s=this.onRender)===null||s===void 0||s.call(this);const u=(c==null?void 0:c(void 0,this.tmNodes.map(P=>P.rawNode)))||{},v={ref:Dn(o),class:[r,`${d}-dropdown`,this.themeClass],clsPrefix:d,tmNodes:this.tmNodes,style:[a,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:i,onMouseleave:l};return h(Qe,je(this.$attrs,v,u))},{mergedTheme:n}=this,t={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return h(Ln,Object.assign({},pn(this.$props,wt),t),{trigger:()=>{var r,o;return(o=(r=this.$slots).default)===null||o===void 0?void 0:o.call(r)}})}}),kt=j("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[w("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),w("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),w("button-placeholder",`
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
 `,[Te({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),w("checked, unchecked",`
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
 `),w("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),w("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),J("&:focus",[w("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),I("round",[w("rail","border-radius: calc(var(--n-rail-height) / 2);",[w("button","border-radius: calc(var(--n-button-height) / 2);")])]),he("disabled",[he("icon",[I("rubber-band",[I("pressed",[w("rail",[w("button","max-width: var(--n-button-width-pressed);")])]),w("rail",[J("&:active",[w("button","max-width: var(--n-button-width-pressed);")])]),I("active",[I("pressed",[w("rail",[w("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),w("rail",[J("&:active",[w("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),I("active",[w("rail",[w("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),w("rail",`
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
 `,[w("button-icon",`
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
 `,[Te()]),w("button",`
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
 `)]),I("active",[w("rail","background-color: var(--n-rail-color-active);")]),I("loading",[w("rail",`
 cursor: wait;
 `)]),I("disabled",[w("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),_t=Object.assign(Object.assign({},be.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let se;const St=O({name:"Switch",props:_t,setup(e){se===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?se=CSS.supports("width","max(1px)"):se=!1:se=!0);const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=Ge(e),r=be("Switch","-switch",kt,vn,e,n),o=bn(e),{mergedSizeRef:a,mergedDisabledRef:i}=o,l=U(e.defaultValue),s=q(e,"value"),d=We(s,l),c=R(()=>d.value===e.checkedValue),u=U(!1),v=U(!1),P=R(()=>{const{railStyle:b}=e;if(b)return b({focused:v.value,checked:c.value})});function y(b){const{"onUpdate:value":K,onChange:S,onUpdateValue:T}=e,{nTriggerFormInput:g,nTriggerFormChange:C}=o;K&&re(K,b),T&&re(T,b),S&&re(S,b),l.value=b,g(),C()}function L(){const{nTriggerFormFocus:b}=o;b()}function z(){const{nTriggerFormBlur:b}=o;b()}function B(){e.loading||i.value||(d.value!==e.checkedValue?y(e.checkedValue):y(e.uncheckedValue))}function G(){v.value=!0,L()}function F(){v.value=!1,z(),u.value=!1}function f(b){e.loading||i.value||b.key===" "&&(d.value!==e.checkedValue?y(e.checkedValue):y(e.uncheckedValue),u.value=!1)}function p(b){e.loading||i.value||b.key===" "&&(b.preventDefault(),u.value=!0)}const $=R(()=>{const{value:b}=a,{self:{opacityDisabled:K,railColor:S,railColorActive:T,buttonBoxShadow:g,buttonColor:C,boxShadowFocus:k,loadingColor:x,textColor:D,iconColor:m,[M("buttonHeight",b)]:_,[M("buttonWidth",b)]:H,[M("buttonWidthPressed",b)]:Y,[M("railHeight",b)]:V,[M("railWidth",b)]:E,[M("railBorderRadius",b)]:ye,[M("buttonBorderRadius",b)]:xe},common:{cubicBezierEaseInOut:ke}}=r.value;let ie,N,_e;return se?(ie=`calc((${V} - ${_}) / 2)`,N=`max(${V}, ${_})`,_e=`max(${E}, calc(${E} + ${_} - ${V}))`):(ie=Se((Z(V)-Z(_))/2),N=Se(Math.max(Z(V),Z(_))),_e=Z(V)>Z(_)?E:Se(Z(E)+Z(_)-Z(V))),{"--n-bezier":ke,"--n-button-border-radius":xe,"--n-button-box-shadow":g,"--n-button-color":C,"--n-button-width":H,"--n-button-width-pressed":Y,"--n-button-height":_,"--n-height":N,"--n-offset":ie,"--n-opacity-disabled":K,"--n-rail-border-radius":ye,"--n-rail-color":S,"--n-rail-color-active":T,"--n-rail-height":V,"--n-rail-width":E,"--n-width":_e,"--n-box-shadow-focus":k,"--n-loading-color":x,"--n-text-color":D,"--n-icon-color":m}}),A=t?He("switch",R(()=>a.value[0]),$,e):void 0;return{handleClick:B,handleBlur:F,handleFocus:G,handleKeyup:f,handleKeydown:p,mergedRailStyle:P,pressed:u,mergedClsPrefix:n,mergedValue:d,checked:c,mergedDisabled:i,cssVars:t?void 0:$,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:n,checked:t,mergedRailStyle:r,onRender:o,$slots:a}=this;o==null||o();const{checked:i,unchecked:l,icon:s,"checked-icon":d,"unchecked-icon":c}=a,u=!(Ne(s)&&Ne(d)&&Ne(c));return h("div",{role:"switch","aria-checked":t,class:[`${e}-switch`,this.themeClass,u&&`${e}-switch--icon`,t&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},h("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:r},ne(i,v=>ne(l,P=>v||P?h("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},h("div",{class:`${e}-switch__rail-placeholder`},h("div",{class:`${e}-switch__button-placeholder`}),v),h("div",{class:`${e}-switch__rail-placeholder`},h("div",{class:`${e}-switch__button-placeholder`}),P)):null)),h("div",{class:`${e}-switch__button`},ne(s,v=>ne(d,P=>ne(c,y=>h(gn,null,{default:()=>this.loading?h(mn,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(P||v)?h("div",{class:`${e}-switch__button-icon`,key:P?"checked-icon":"icon"},P||v):!this.checked&&(y||v)?h("div",{class:`${e}-switch__button-icon`,key:y?"unchecked-icon":"icon"},y||v):null})))),ne(i,v=>v&&h("div",{key:"checked",class:`${e}-switch__checked`},v)),ne(l,v=>v&&h("div",{key:"unchecked",class:`${e}-switch__unchecked`},v)))))}}),Nt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Ct=W("path",{d:"M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4c.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7c0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z",fill:"currentColor"},null,-1),Pt=[Ct],Rt=O({name:"DarkModeOutlined",render:function(n,t){return X(),Q("svg",Nt,Pt)}}),$t={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Kt=W("path",{d:"M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3s-3-1.35-3-3s1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z",fill:"currentColor"},null,-1),At=[Kt],zt=O({name:"LightModeOutlined",render:function(n,t){return X(),Q("svg",$t,At)}}),It=O({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:e}=en();function n(){e.$emit("click")}return{title:R(()=>"NaiveUI Template 项目"),handleClick:n}}});const Bt={class:"side-action-container"},Ot={class:"action-list"};function Tt(e,n,t,r,o,a){return X(),Q("div",Bt,[W("ul",Ot,[(X(),Q(Ie,null,wn(3,i=>W("li",{key:i,class:"action-item bg-#eee dark:bg-#555"}," Action "+yn(i),1)),64))])])}const Lt=ge(It,[["render",Tt],["__scopeId","data-v-52119290"]]),Dt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},Mt=W("g",{fill:"none"},[W("path",{d:"M8.5 11.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5zM11 3.5a.5.5 0 0 0-.576-.494l-7 1.07A.5.5 0 0 0 3 4.57v10.86a.5.5 0 0 0 .424.494l7 1.071a.5.5 0 0 0 .576-.494V10h5.172l-.997.874a.5.5 0 0 0 .658.752l1.996-1.75a.5.5 0 0 0 0-.752l-1.996-1.75a.499.499 0 1 0-.658.752l.997.874H11V3.5zm-1 .582V15.92L4 15V4.999l6-.917zM12.5 16H12v-5h1v4.5a.5.5 0 0 1-.5.5zM12 8V4h.5a.5.5 0 0 1 .5.5V8h-1z",fill:"currentColor"})],-1),Ft=[Mt],Et=O({name:"SignOut20Regular",render:function(n,t){return X(),Q("svg",Dt,Ft)}}),Vt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},jt=W("path",{d:"M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3z",fill:"currentColor"},null,-1),Gt=W("path",{d:"M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm-6 24.377V25a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3v1.377a11.899 11.899 0 0 1-12 0zm13.992-1.451A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z",fill:"currentColor"},null,-1),Ht=[jt,Gt],Ut=O({name:"UserAvatar",render:function(n,t){return X(),Q("svg",Vt,Ht)}}),Wt=O({name:"NavigationAvatar",components:{UserAvatar:Ut},setup(){xn(),kn();const e=t=>()=>h(me,null,{default:()=>h(t)});return{commandList:R(()=>[{label:"退出登录",key:"退出按钮",icon:e(Et),props:{onClick:()=>{_n.remove("token"),window.location.reload()}}}])}}});const qt={class:"navigation-avatar"};function Xt(e,n,t,r,o,a){const i=ue("UserAvatar"),l=me,s=xt;return X(),Sn(s,{trigger:"hover",options:e.commandList},{default:pe(()=>[W("div",qt,[ee(l,{size:24},{default:pe(()=>[ee(i)]),_:1})])]),_:1},8,["options"])}const Yt=ge(Wt,[["render",Xt]]),Zt={class:"navigation-change-theme"},Jt=O({name:"NavigationChangeTheme",__name:"ChangeTheme",setup(e){const n=Nn(),{isDark:t}=Cn(),r=U(n.theme),o=({focused:i,checked:l})=>{const s={};return l?(s.background="#313136",s.boxShadow="0 0 0 1px rgb(100 100 100)"):(s.background="#f6f5f7",s.boxShadow="0 0 0 1px rgb(60 60 67 / 40%)"),s},a=i=>{n.setTheme(i)};return(i,l)=>{const s=me,d=St;return X(),Q("div",Zt,[ee(d,{value:ae(r),"onUpdate:value":[l[0]||(l[0]=c=>Pn(r)?r.value=c:null),a],"checked-value":"dark","unchecked-value":"light","rail-style":o,style:Rn({"--n-icon-color":ae(t)?"#fff":"#000","--n-button-color":ae(t)?"#000":"#fff","--n-button-box-shadow":"none"})},{"checked-icon":pe(()=>[ee(s,{component:ae(Rt)},null,8,["component"])]),"unchecked-icon":pe(()=>[ee(s,{component:ae(zt)},null,8,["component"])]),_:1},8,["value","style"])])}}});const Qt=ge(Jt,[["__scopeId","data-v-326b3db0"]]),eo=O({name:"NavigationNavBar",components:{NavigationSideAction:Lt,NavigationAvatar:Yt,NavigationChangeTheme:Qt},props:{auth:{type:Boolean,default:!0},fixed:{type:Boolean,default:!0}}});const no=e=>(An("data-v-dbcdf15e"),e=e(),zn(),e),to=no(()=>W("div",{style:{flex:"1"}},null,-1));function oo(e,n,t,r,o,a){const i=ue("NavigationSideAction"),l=ue("NavigationAvatar"),s=ue("NavigationChangeTheme");return X(),Q("header",{class:Le(["navigation-navbar-header-container",{"fixed-header":e.fixed,"navbar-shadow dark:dark-navbar-shadow":e.auth,"login-navbar-shadow dark:shadow-none":!e.auth}])},[W("div",{class:Le(["navbar-header-box",{"bg-#fff dark:bg-#1e1e20":e.auth,"bg-#8d8b89 bg-opacity-30":!e.auth}])},[$n(e.$slots,"default",{},void 0,!0),to,e.auth?(X(),Q(Ie,{key:0},[ee(i),ee(l)],64)):Kn("",!0),ee(s)],2)],2)}const co=ge(eo,[["render",oo],["__scopeId","data-v-dbcdf15e"]]);export{co as N,De as h,Fn as u};
