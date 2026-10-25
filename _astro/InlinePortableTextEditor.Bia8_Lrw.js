import{a as e,n as t,t as n}from"./react-dom.BiCKJBoT.js";import{c as r}from"./html-block.ClFHzl_P.js";import{$a as i,$i as a,$r as o,$t as s,Aa as c,An as l,At as u,Ca as d,Ct as f,Dn as p,Dt as m,Ea as h,Et as g,Fn as _,Gi as v,Ha as y,Hi as b,In as x,Ji as S,K as C,Ki as w,La as T,Ma as E,Nr as D,Ot as O,Pa as k,Pr as A,Qa as j,Qi as M,Qr as N,Ra as P,Rn as F,Sa as I,Sr as ee,St as te,Ua as ne,Ui as L,Ur as R,Wa as z,Wi as re,Wn as ie,Xi as ae,Y as oe,Yi as se,Za as ce,Zi as B,_a as le,_o as ue,_t as de,a as fe,aa as pe,ao as me,ba as he,bt as ge,c as _e,ca as ve,co as ye,d as be,da as xe,do as Se,ea as Ce,eo as we,f as Te,fa as Ee,fo as De,ga as Oe,gr as ke,gt as Ae,ha as je,hi as Me,ht as Ne,i as Pe,ia as Fe,ii as Ie,io as Le,ki as Re,kn as ze,kt as Be,l as Ve,la as He,ma as Ue,mo as We,mt as Ge,n as Ke,na as qe,ni as Je,no as Ye,o as Xe,oa as Ze,oi as Qe,oo as $e,pt as et,qi as tt,r as nt,ra as rt,ro as it,s as at,sa as ot,sn as st,so as ct,t as lt,ta as ut,to as dt,u as ft,ua as pt,uo as mt,ut as ht,va as gt,vt as _t,wn as vt,wt as yt,xt as bt,ya as xt,yn as St,yt as Ct}from"./lib.CHEkgF-p.js";function wt(e){let{char:t,allowSpaces:n,allowToIncludeChar:r,allowedPrefixes:i,startOfLine:a,$position:o}=e,s=n&&!r,c=k(t),l=RegExp(`\\s${c}$`),u=a?`^`:``,d=r?``:c,f=RegExp(s?`${u}${c}.*?(?=\\s${d}|$)`:`${u}(?:^)?${c}[^\\s${d}]*`,`gm`),p=o.nodeBefore?.isText&&o.nodeBefore.text;if(!p)return null;let m=o.pos-p.length,h=Array.from(p.matchAll(f)).pop();if(!h||h.input===void 0||h.index===void 0)return null;let g=h.input.slice(Math.max(0,h.index-1),h.index),_=RegExp(`^[${i?.join(``)}\0]?$`).test(g);if(i!==null&&!_)return null;let v=m+h.index,y=v+h[0].length;return s&&l.test(p.slice(y-1,y+1))&&(h[0]+=` `,y+=1),v<o.pos&&y>=o.pos?{range:{from:v,to:y},query:h[0].slice(t.length),text:h[0]}:null}function Tt(e){return e.docChanged?e.steps.some(e=>{let t=e.slice;if(!t?.content)return!1;let n=t.content.textBetween(0,t.content.size,`
`);return/\s/.test(n)}):!1}function Et(e){return()=>{let t=e.state.selection.$anchor.pos,{top:n,right:r,bottom:i,left:a}=e.view.coordsAtPos(t);try{return new DOMRect(a,n,r-a,i-n)}catch{return null}}}function Dt(e,t,n,r){return n?()=>{let n=r.getState(e.state)?.decorationId;return t.dom.querySelector(`[data-decoration-id="${n}"]`)?.getBoundingClientRect()||null}:Et(e)}function Ot({match:e,dismissedRange:t,state:n,transaction:r,editor:i,shouldResetDismissed:a,effectiveAllowSpaces:o}){return a?.({editor:i,state:n,range:t,match:e,transaction:r,allowSpaces:o})?!1:o?e.range.from===t.from:e.range.from===t.from&&!Tt(r)}function kt({view:e,pluginKeyRef:t}){let n=e.state.tr.setMeta(t,{exit:!0});e.dispatch(n)}function At({pluginKey:e,decorationTag:t,decorationClass:n,decorationContent:r,decorationEmptyClass:i,renderer:a,dispatchExit:o}){return{handleKeyDown(t,n){var r;let i=e.getState(t.state);if(!i.active)return!1;if(n.key===`Escape`||n.key===`Esc`){var s;return a==null||(s=a.onKeyDown)==null||s.call(a,{view:t,event:n,range:i.range}),o(t),!0}return(a==null||(r=a.onKeyDown)==null?void 0:r.call(a,{view:t,event:n,range:i.range}))||!1},decorations(a){let{active:o,range:s,decorationId:c,query:l}=e.getState(a);if(!o)return null;let u=!l?.length,d=[n];return u&&d.push(i),j.create(a.doc,[ce.inline(s.from,s.to,{nodeName:t,class:d.join(` `),"data-decoration-id":c||void 0,"data-decoration-content":r})])}}}function jt({editor:e,char:t,effectiveAllowSpaces:n,allowToIncludeChar:r,allowedPrefixes:i,startOfLine:a,findSuggestionMatch:o,allow:s,shouldShow:c,shouldKeepDismissed:l,pluginKey:u}){return{init(){return{active:!1,range:{from:0,to:0},query:null,text:null,composing:!1,dismissedRange:null}},apply(d,f,p,m){let{isEditable:h}=e,{composing:g}=e.view,{selection:_}=d,{empty:v,from:y}=_,b={...f},x=d.getMeta(u);if(x&&x.exit)return b.active=!1,b.decorationId=null,b.range={from:0,to:0},b.query=null,b.text=null,b.dismissedRange=f.active?{...f.range}:f.dismissedRange,b;if(b.composing=g,d.docChanged&&b.dismissedRange!==null&&(b.dismissedRange={from:d.mapping.map(b.dismissedRange.from),to:d.mapping.map(b.dismissedRange.to)}),h&&(v||e.view.composing)){(y<f.range.from||y>f.range.to)&&!g&&!f.composing&&(b.active=!1);let u=o({char:t,allowSpaces:n,allowToIncludeChar:r,allowedPrefixes:i,startOfLine:a,$position:_.$from}),p=`id_${Math.floor(Math.random()*4294967295)}`;u&&s({editor:e,state:m,range:u.range,isActive:f.active})&&(!c||c({editor:e,range:u.range,query:u.query,text:u.text,transaction:d}))?(b.dismissedRange!==null&&!l({match:u,dismissedRange:b.dismissedRange,state:m,transaction:d})&&(b.dismissedRange=null),b.dismissedRange===null?(b.active=!0,b.decorationId=f.decorationId||p,b.range=u.range,b.query=u.query,b.text=u.text):b.active=!1):(u||(b.dismissedRange=null),b.active=!1)}else b.active=!1;return b.active||(b.decorationId=null,b.range={from:0,to:0},b.query=null,b.text=null),b}}}function Mt({editor:e,items:t}){let n=null,r=null,i=null,a=()=>{r!==null&&(clearTimeout(r),r=null),i?.(),i=null},o=e=>new Promise(t=>{i=t,r=setTimeout(()=>{r=null;let e=i;i=null,e?.()},e)}),s=()=>{n?.abort(),a(),n=null};return{abort:s,fetch:async(r,i)=>{s(),n=new AbortController;let a=n;if(i>0&&await o(i),n!==a||a.signal.aborted)return{status:`aborted`};try{let i=await t({editor:e,query:r,signal:a.signal});return n!==a||a.signal.aborted?{status:`aborted`}:{status:`resolved`,items:i}}catch{return n!==a||a.signal.aborted?{status:`aborted`}:{status:`error`}}}}}function Nt({placement:e,offset:t,flip:n,floatingUi:r}){var i;let a=[v({mainAxis:t.mainAxis??4,crossAxis:t.crossAxis??0})];return n&&a.push(re()),r!=null&&(i=r.middleware)!=null&&i.length&&a.push(...r.middleware),{placement:e,strategy:r?.strategy??`absolute`,middleware:a}}function Pt(e){if(e instanceof HTMLElement)return e;if(typeof e==`string`)try{let t=document.querySelector(e);if(t)return t}catch{return document.body}return document.body}function Ft({getReferenceRect:e,contextElement:t,config:n,container:r,dismissOnOutsideClick:i,dismiss:a}){return(o,s={})=>{let c={getBoundingClientRect:()=>e()??new DOMRect,contextElement:t},l=!1,u=!o.isConnected;u&&Pt(r).appendChild(o),s.onPosition||(o.style.visibility=`hidden`,o.style.width=`max-content`);let d=b(c,o,()=>{L(c,o,{placement:n.placement,strategy:n.strategy,middleware:n.middleware}).then(({x:e,y:t,placement:n,strategy:r})=>{s.onPosition?s.onPosition({x:e,y:t,placement:n,strategy:r}):(Object.assign(o.style,{position:r,left:`${e}px`,top:`${t}px`}),l||(l=!0,o.style.visibility=``))})},s.autoUpdate),f;return i&&(f=e=>{let n=e.target;!(n instanceof Node)||o.contains(n)||t.contains(n)||a()},document.addEventListener(`pointerdown`,f,!0)),()=>{d(),f&&document.removeEventListener(`pointerdown`,f,!0),u&&o.remove()}}}function It({editor:e,pluginKey:t,items:n,renderer:r,minQueryLength:i,debounce:a,initialItems:o,placement:s,offset:c,container:l,flip:u,floatingUi:d,dismissOnOutsideClick:f,command:p,clientRectFor:m,dispatchExit:h}){let g,_=Mt({editor:e,items:n}),v=Nt({placement:s,offset:c,flip:u,floatingUi:d});function y(e,t){switch(e){case`started`:var n;r==null||(n=r.onStart)==null||n.call(r,t);break;case`updated`:var i;r==null||(i=r.onUpdate)==null||i.call(r,t);break;case`stopped`:var a;r==null||(a=r.onExit)==null||a.call(r,t)}}return{update:async(n,d)=>{let b=t.getState(d),x=t.getState(n.state);if(!b||!x)return;let S=null,C=b.query!==x.query,w=b.text!==x.text,T=b.range.from!==x.range.from||b.range.to!==x.range.to,E=C||w||T;if(!b.active&&x.active)S=`started`;else if(b.active&&!x.active)S=`stopped`;else if(x.active&&E)S=`updated`;else return;let D=S===`stopped`?b:x,O=n.dom.querySelector(`[data-decoration-id="${D.decorationId}"]`),k=m(n,O),A=i===0||(D.query?D.query.length>=i:!1),j=(S===`started`||S===`updated`)&&A;if(g={editor:e,range:D.range,query:D.query||``,text:D.text||``,items:o??[],command:t=>p({editor:e,range:D.range,props:t}),decorationNode:O,clientRect:k,loading:j,placement:s,offset:{mainAxis:c.mainAxis??4,crossAxis:c.crossAxis??0},container:l,flip:u,floatingUi:v,mount:Ft({getReferenceRect:k,contextElement:n.dom,config:v,container:l,dismissOnOutsideClick:f,dismiss:()=>h(e.view)})},S===`started`){var M;r==null||(M=r.onBeforeStart)==null||M.call(r,g)}if(S===`updated`){var N;r==null||(N=r.onBeforeUpdate)==null||N.call(r,g)}if(S===`started`&&y(S,g),S===`started`||S===`updated`){if(!j)_.abort(),g={...g,items:o??[],loading:!1};else{g={...g,items:o??[],loading:!0},S=`updated`,y(S,g);let e=await _.fetch(D.query||``,a);if(e.status===`aborted`)return;if(!t.getState(n.state)?.active){_.abort();return}g=e.status===`resolved`?{...g,items:e.items,loading:!1}:{...g,loading:!1}}}S===`stopped`?(_.abort(),y(S,g),g=void 0):S===`updated`&&y(S,g)},destroy:()=>{var e;_.abort(),g&&(r==null||(e=r.onExit)==null||e.call(r,g))}}}var Lt=new ct(`suggestion`);function Rt({pluginKey:e=Lt,editor:t,char:n=`@`,allowSpaces:r=!1,allowToIncludeChar:i=!1,allowedPrefixes:a=[` `],startOfLine:o=!1,decorationTag:s=`span`,decorationClass:c=`suggestion`,decorationContent:l=``,decorationEmptyClass:u=`is-empty`,command:d=()=>null,items:f=()=>[],minQueryLength:p=0,debounce:m=0,initialItems:h,placement:g=`bottom-start`,offset:_={},container:v,flip:y=!0,floatingUi:b,dismissOnOutsideClick:x=!0,render:S=()=>({}),allow:C=()=>!0,findSuggestionMatch:w=wt,shouldShow:T,shouldResetDismissed:E}){let D=S?.(),O=r&&!i,k=(n,r)=>Dt(t,n,r,e);function A(e){return Ot({...e,editor:t,shouldResetDismissed:E,effectiveAllowSpaces:O})}let j=t=>kt({view:t,pluginKeyRef:e});return new $e({key:e,view:()=>It({editor:t,pluginKey:e,items:f,renderer:D,minQueryLength:p,debounce:m,initialItems:h,placement:g,offset:_,container:v,flip:y,floatingUi:b,dismissOnOutsideClick:x,command:d,clientRectFor:k,dispatchExit:j}),state:jt({editor:t,char:n,effectiveAllowSpaces:O,allowToIncludeChar:i,allowedPrefixes:a,startOfLine:o,findSuggestionMatch:w,allow:C,shouldShow:T,shouldKeepDismissed:A,pluginKey:e}),props:At({pluginKey:e,decorationTag:s,decorationClass:c,decorationContent:l,decorationEmptyClass:u,renderer:D,dispatchExit:j})})}function zt(e,t=Lt){let n=e.state.tr.setMeta(t,{exit:!0});e.dispatch(n)}var Bt=Rt,V=e(t(),1),Vt=`/_emdash/api/media/file/`;function Ht(e){let t=e.split(`/`);return t.some(e=>e===``||e===`.`||e===`..`)?`${Vt}${encodeURIComponent(e)}`:`${Vt}${t.map(encodeURIComponent).join(`/`)}`}function Ut(e){let t=Gt(e)?e:{},n=Gt(t.asset)?t.asset:{},r=Gt(n.meta)?Wt(n.meta.storageKey):void 0,i=Wt(n.url)??Wt(n.src)??(r?Ht(r):void 0),a=Wt(n.provider),o=Wt(t.alt)??Wt(n.alt),s=typeof t.width==`number`?t.width:n.width,c=typeof t.height==`number`?t.height:n.height,l={asset:{_type:`reference`,_ref:Wt(n._ref)??Wt(n.id)??``,...i?{url:i}:{},...a?{provider:a}:{}}};return o&&(l.alt=o),typeof s==`number`&&(l.width=s),typeof c==`number`&&(l.height=c),l}function Wt(e){return typeof e==`string`&&e?e:void 0}function Gt(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function Kt(e){if(typeof e==`string`){let t=e.trim();return t?{href:t}:null}if(typeof e!=`object`||!e)return null;let{href:t,blank:n}=e;if(typeof t!=`string`)return null;let r=t.trim();return r?n===!0?{href:r,blank:!0}:{href:r}:null}var qt=new Set([`strong`,`em`,`underline`,`strike-through`,`subscript`,`superscript`,`code`]),Jt=new Set([`bold`,`strong`,`italic`,`em`,`underline`,`strike`,`strikethrough`,`subscript`,`superscript`,`code`,`link`,`emdashPortableTextSpan`]);function Yt(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function Xt(e,t,n){if(Array.isArray(e)){for(let r of e)Xt(r,t,n);return}if(!Yt(e))return;let r=t;if(Array.isArray(e.markDefs)){let n=new Map(t);for(let t of e.markDefs)Yt(t)&&typeof t._key==`string`&&n.set(t._key,t);r=n}if(e._type===`span`&&Array.isArray(e.marks))for(let t of e.marks){if(typeof t!=`string`||qt.has(t))continue;let e=r.get(t);e?._type!==`link`&&n.add(typeof e?._type==`string`?e._type:t)}for(let[t,i]of Object.entries(e))t!==`markDefs`&&Xt(i,r,n)}function Zt(e,t){for(let n of e.marks??[])Jt.has(n.type)||t.add(n.type);for(let n of e.content??[])Zt(n,t)}var Qt=class extends Error{marks;constructor(e){let t=[...new Set(e)].toSorted();super(`Unsupported Portable Text marks: ${t.join(`, `)}`),this.name=`UnsupportedPortableTextMarksError`,this.marks=t}};function $t(e){let t=new Set;for(let n of e)(n._type===`block`||n._type===`table`)&&Xt(n,new Map,t);return[...t].toSorted()}function en(e){let t=$t(e);if(t.length>0)throw new Qt(t)}function tn(e){let t=new Set;for(let n of e.content)Zt(n,t);if(t.size>0)throw new Qt(t)}function H(e){if(typeof e!=`string`)return;let t=e.trim();return t.length>0&&t.length<=128?t:void 0}function U(e){return typeof e==`number`&&Number.isInteger(e)&&e>=1&&e<=2147483647?e:void 0}function nn(e){let t=`legacy:${e}`;if(t.length<=128)return t;let n=2166136261;for(let t=0;t<e.length;t++)n^=e.charCodeAt(t),n=Math.imul(n,16777619);return`legacy:${e.slice(0,96)}:${(n>>>0).toString(36)}:${e.length.toString(36)}`}function rn(e,t){return{listId:H(e?.listId)??nn(t),listStart:U(e?.listStart)??U(e?.start)??1}}function an(e){let t=[],n=(e,r,i,a)=>{e.type===`orderedList`&&t.push({node:e,path:r,depth:i,context:a});for(let[t,o]of(e.content??[]).entries()){let e=`${r}:${t}`;n(o,e,i+1,o.type===`listItem`?`listItem:${e}`:a)}};for(let[t,r]of e.content.entries())n(r,`root:${t}`,0,`root`);return t}function on(e){return{...e,attrs:e.attrs?{...e.attrs}:void 0,content:e.content?.map(on),marks:e.marks?.map(e=>({...e,attrs:e.attrs?{...e.attrs}:void 0}))}}function sn(e,t,n){let r=nn(`repair:${e}:${t}`),i=`:${n.toString(36)}`;return`${r.slice(0,128-i.length)}${i}`}function cn(e){let t={...e,content:e.content.map(on)},n=new Map,r=new Set,i=an(t).map(e=>{let t=H(e.node.attrs?.listId)??nn(`pm-json:${e.path}:${e.depth}:${e.context}`),i=JSON.stringify([e.depth,e.context]),a=JSON.stringify([t,i]),o=n.get(a);if(!o){if(!r.has(t))o=t;else{let e=0;do o=sn(t,i,e++);while(r.has(o))}n.set(a,o),r.add(o)}return{...e,listId:o,scopeKey:JSON.stringify([o,e.depth,e.context])}}),a=new Map;for(let e of i){let t=U(e.node.attrs?.listStart);t!==void 0&&!a.has(e.scopeKey)&&a.set(e.scopeKey,t)}for(let e of i)a.has(e.scopeKey)||a.set(e.scopeKey,U(e.node.attrs?.start)??1);let o=new Map;for(let e of i){let t=a.get(e.scopeKey),n=o.get(e.scopeKey)??0,r=U(t+n)??1,i=e.node.content?.filter(e=>e.type===`listItem`).length??0;o.set(e.scopeKey,n+i),e.node.attrs={...e.node.attrs,listId:e.listId,listStart:t,start:r}}return t}var ln=Ze.extend({excludes:``}),un=[[`heading1`,1],[`heading2`,2],[`heading3`,3],[`heading4`,4],[`heading5`,5],[`heading6`,6]],dn=[{id:`paragraph`,label:`Paragraph`,icon:Ge},{id:`heading1`,label:`Heading 1`,icon:te,markdown:`#`},{id:`heading2`,label:`Heading 2`,icon:Ct,markdown:`##`},{id:`heading3`,label:`Heading 3`,icon:ge,markdown:`###`},{id:`heading4`,label:`Heading 4`,icon:f,markdown:`####`},{id:`heading5`,label:`Heading 5`,icon:yt,markdown:`#####`},{id:`heading6`,label:`Heading 6`,icon:bt,markdown:`######`},{id:`bulletList`,label:`Bullet List`,icon:p,markdown:`-`},{id:`orderedList`,label:`Numbered List`,icon:vt,markdown:`1.`},{id:`blockquote`,label:`Quote`,icon:s,markdown:`>`},{id:`codeBlock`,label:`Code Block`,icon:A,markdown:"```"}];function fn(e){return dn.filter(t=>![`heading4`,`heading5`,`heading6`].includes(t.id)||t.id===e)}function pn(e){return e===`bulletList`||e===`orderedList`}function mn(e){let{selection:t}=e.state;if(t instanceof me){let{name:e}=t.node.type;if(e===`bulletList`||e===`orderedList`)return e}let{$from:n,$to:r}=t;for(let e=n.sharedDepth(r.pos);e>0;e--){let{name:t}=n.node(e).type;if(t===`bulletList`||t===`orderedList`)return t}}function hn(e){if(e.isActive(`codeBlock`))return`codeBlock`;let t=mn(e);if(t)return t;if(e.isActive(`blockquote`))return`blockquote`;for(let[t,n]of un)if(e.isActive(`heading`,{level:n}))return t;return e.isActive(`paragraph`)?`paragraph`:void 0}function gn(e){let{state:t}=e;if(!e.isEditable)return!1;let n=!1,r=!1;return t.doc.nodesBetween(t.selection.from,t.selection.to,e=>(e.isTextblock?n=!0:e.isAtom&&(r=!0),!e.isTextblock)),n&&!r}function _n(e){for(let t=e.depth-1;t>0;t--){let{name:n}=e.node(t).type;if(n===`listItem`||n===`blockquote`)return t}return null}function vn(e,t,n){let r=e.resolve(t);for(let e=r.sharedDepth(n);e>0;e--){let{name:t}=r.node(e).type;if(t===`bulletList`||t===`orderedList`)return r.before(e)}return null}function yn(e,t,n){return n(Le.create({doc:e.doc,selection:t}),t=>{for(let n of t.steps)e.step(n)})}function bn(e,t,n,r,i={}){e.setBlockType(t,n,r,e=>r.spec.attrs?.textAlign&&e.attrs.textAlign!==void 0?{...i,textAlign:e.attrs.textAlign}:i)}function xn(e,t,n){let r=e.doc.resolve(t);for(let t=r.depth;t>0;t--){if(r.node(t).type!==n)continue;let i=r.after(t),a=e.doc.resolve(i).nodeAfter,o=typeof a?.attrs.start==`number`&&a.attrs.start!==1;a?.type===n&&!o&&Se(e.doc,i)&&e.join(i);let s=r.before(t);e.doc.resolve(s).nodeBefore?.type===n&&Se(e.doc,s)&&e.join(s);return}}function Sn(e,t){let{selection:n}=e,{schema:r}=e.doc.type,a=[];e.doc.nodesBetween(n.from,n.to,(e,t)=>!e.isTextblock||(a.push(t+1),!1));let o=a[0],s=a.at(-1);if(o===void 0||s===void 0)return!1;let c=e.steps.length,l=t=>e.mapping.slice(c).map(t),u=pn(t)?r.nodes[t]:void 0,d=u?vn(e.doc,o,s):null;if(u&&d!==null)e.setNodeMarkup(d,u);else{for(let t of a)for(let n=0;n<32;n++){let n=e.doc.resolve(l(t)),a=_n(n);if(a===null)break;let o=n.node(a).type.name===`listItem`?i(r.nodes.listItem):dt;if(!yn(e,mt.create(e.doc,n.pos),o))break}let n=l(o),c=l(s),d=un.find(([e])=>e===t)?.[1],f=a.some(t=>_n(e.doc.resolve(l(t)))!==null);if((d!==void 0||t===`codeBlock`)&&f)return!0;d===void 0?t===`codeBlock`?e.setBlockType(n,c,r.nodes.codeBlock):t===`paragraph`?bn(e,n,c,r.nodes.paragraph):(e.setBlockType(n,c,r.nodes.paragraph),yn(e,mt.create(e.doc,l(o),e.doc.resolve(l(s)).end()),u?we(u):Ye(r.nodes.blockquote))):bn(e,n,c,r.nodes.heading,{level:d})}return u&&xn(e,l(o),u),e.setSelection(mt.between(e.doc.resolve(l(n.anchor)),e.doc.resolve(l(n.head)))),!0}function Cn(e,t,n){if(!e.isEditable)return;let r=hn(e)===t,i=e.chain().focus();n&&i.deleteRange(n),r||i.command(({tr:e})=>Sn(e,t)),i.run()}var wn=[`input:not([inert]):not([inert] *)`,`select:not([inert]):not([inert] *)`,`textarea:not([inert]):not([inert] *)`,`a[href]:not([inert]):not([inert] *)`,`area[href]:not([inert]):not([inert] *)`,`button:not([inert]):not([inert] *)`,`[tabindex]:not(slot):not([inert]):not([inert] *)`,`audio[controls]:not([inert]):not([inert] *)`,`video[controls]:not([inert]):not([inert] *)`,`[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)`,`details>summary:first-of-type:not([inert]):not([inert] *)`,`details:not([inert]):not([inert] *)`].join(`,`),Tn=typeof Element>`u`,En=Tn?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Dn=!Tn&&Element.prototype.getRootNode?function(e){return e?.getRootNode?.call(e)}:function(e){return e?.ownerDocument},On=function(e,t){t===void 0&&(t=!0);var n=e?.getAttribute?.call(e,`inert`);return n===``||n===`true`||t&&e&&(typeof e.closest==`function`?e.closest(`[inert]`):On(e.parentNode))},kn=function(e){var t=e?.getAttribute?.call(e,`contenteditable`);return t===``||t===`true`},An=function(e,t,n){if(On(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(wn));return t&&En.call(e,wn)&&r.unshift(e),r=r.filter(n),r},jn=function(e,t,n){for(var r=[],i=Array.from(e);i.length;){var a=i.shift();if(!On(a,!1)){if(a.tagName===`SLOT`){var o=a.assignedElements(),s=jn(o.length?o:a.children,!0,n);n.flatten?r.push.apply(r,s):r.push({scopeParent:a,candidates:s})}else{En.call(a,wn)&&n.filter(a)&&(t||!e.includes(a))&&r.push(a);var c=a.shadowRoot||typeof n.getShadowRoot==`function`&&n.getShadowRoot(a),l=!On(c,!1)&&(!n.shadowRootFilter||n.shadowRootFilter(a));if(c&&l){var u=jn(c===!0?a.children:c.children,!0,n);n.flatten?r.push.apply(r,u):r.push({scopeParent:a,candidates:u})}else i.unshift.apply(i,a.children)}}}return r},Mn=function(e){return!isNaN(parseInt(e.getAttribute(`tabindex`),10))},Nn=function(e){if(!e)throw Error(`No node provided`);return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||kn(e))&&!Mn(e)?0:e.tabIndex},Pn=function(e,t){var n=Nn(e);return n<0&&t&&!Mn(e)?0:n},Fn=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},In=function(e){return e.tagName===`INPUT`},Ln=function(e){return In(e)&&e.type===`hidden`},Rn=function(e){return e.tagName===`DETAILS`&&Array.prototype.slice.apply(e.children).some(function(e){return e.tagName===`SUMMARY`})},zn=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]},Bn=function(e){if(!e.name)return!0;var t=e.form||Dn(e),n=function(e){return t.querySelectorAll(`input[type="radio"][name="`+e+`"]`)},r;if(typeof window<`u`&&window.CSS!==void 0&&typeof window.CSS.escape==`function`)r=n(window.CSS.escape(e.name));else try{r=n(e.name)}catch(e){return console.error(`Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s`,e.message),!1}var i=zn(r,e.form);return!i||i===e},Vn=function(e){return In(e)&&e.type===`radio`},Hn=function(e){return Vn(e)&&!Bn(e)},Un=function(e){var t=e&&Dn(e),n=t?.host,r=!1;if(t&&t!==e){var i,a,o;for(r=!!((i=n)!=null&&(a=i.ownerDocument)!=null&&a.contains(n)||e!=null&&(o=e.ownerDocument)!=null&&o.contains(e));!r&&n;){var s,c;t=Dn(n),n=t?.host,r=!!((s=n)!=null&&(c=s.ownerDocument)!=null&&c.contains(n))}}return r},Wn=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return n===0&&r===0},Gn=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if(n===`full-native`&&`checkVisibility`in e)return!e.checkVisibility({checkOpacity:!1,opacityProperty:!1,contentVisibilityAuto:!0,visibilityProperty:!0,checkVisibilityCSS:!0});var i=getComputedStyle(e).visibility;if(i===`hidden`||i===`collapse`)return!0;var a=En.call(e,`details>summary:first-of-type`)?e.parentElement:e;if(En.call(a,`details:not([open]) *`))return!0;if(!n||n===`full`||n===`full-native`||n===`legacy-full`){if(typeof r==`function`){for(var o=e;e;){var s=e.parentElement,c=Dn(e);if(s&&!s.shadowRoot&&r(s)===!0)return Wn(e);e=e.assignedSlot?e.assignedSlot:!s&&c!==e.ownerDocument?c.host:s}e=o}if(Un(e))return!e.getClientRects().length;if(n!==`legacy-full`)return!0}else if(n===`non-zero-area`)return Wn(e);return!1},Kn=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName===`FIELDSET`&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if(r.tagName===`LEGEND`)return En.call(t,`fieldset[disabled] *`)?!0:!r.contains(e)}return!0}t=t.parentElement}return!1},qn=function(e,t){return!(t.disabled||Ln(t)||Gn(t,e)||Rn(t)||Kn(t))},Jn=function(e,t){return!(Hn(t)||Nn(t)<0||!qn(e,t))},Yn=function(e){var t=parseInt(e.getAttribute(`tabindex`),10);return!!(isNaN(t)||t>=0)},Xn=function(e){var t=[],n=[];return e.forEach(function(e,r){var i=!!e.scopeParent,a=i?e.scopeParent:e,o=Pn(a,i),s=i?Xn(e.candidates):a;o===0?i?t.push.apply(t,s):t.push(a):n.push({documentOrder:r,tabIndex:o,item:e,isScope:i,content:s})}),n.sort(Fn).reduce(function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e},[]).concat(t)},Zn=function(e,t){return t||={},Xn(t.getShadowRoot?jn([e],t.includeContainer,{filter:Jn.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Yn}):An(e,t.includeContainer,Jn.bind(null,t)))},Qn=function(e,t){return t||={},t.getShadowRoot?jn([e],t.includeContainer,{filter:qn.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):An(e,t.includeContainer,qn.bind(null,t))},$n=function(e,t){if(t||={},!e)throw Error(`No node provided`);return En.call(e,wn)!==!1&&Jn(t,e)};function er(){let e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function tr(){let e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(e=>{let{brand:t,version:n}=e;return t+`/`+n}).join(` `):navigator.userAgent}function nr(){return/apple/i.test(navigator.vendor)}function rr(){let e=/android/i;return e.test(er())||e.test(tr())}function ir(){return er().toLowerCase().startsWith(`mac`)&&!navigator.maxTouchPoints}function ar(){return tr().includes(`jsdom/`)}var or=`data-floating-ui-focusable`,sr=`input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])`,cr=`ArrowLeft`,lr=`ArrowRight`,ur=`ArrowUp`,dr=`ArrowDown`;function fr(e){let t=e.activeElement;for(;((n=t)==null||(n=n.shadowRoot)==null?void 0:n.activeElement)!=null;){var n;t=t.shadowRoot.activeElement}return t}function W(e,t){if(!e||!t)return!1;let n=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&ut(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function pr(e){return`composedPath`in e?e.composedPath()[0]:e.target}function mr(e,t){if(t==null)return!1;if(`composedPath`in e)return e.composedPath().includes(t);let n=e;return n.target!=null&&t.contains(n.target)}function hr(e){return e.matches(`html,body`)}function G(e){return e?.ownerDocument||document}function gr(e){return M(e)&&e.matches(sr)}function _r(e){return e?e.getAttribute(`role`)===`combobox`&&gr(e):!1}function vr(e){if(!e||ar())return!0;try{return e.matches(`:focus-visible`)}catch{return!0}}function yr(e){return e?e.hasAttribute(or)?e:e.querySelector(`[`+or+`]`)||e:null}function br(e,t,n){return n===void 0&&(n=!0),e.filter(e=>e.parentId===t&&(!n||e.context?.open)).flatMap(t=>[t,...br(e,t.id,n)])}function xr(e,t){let n,r=-1;function i(t,a){a>r&&(n=t,r=a),br(e,t).forEach(e=>{i(e.id,a+1)})}return i(t,0),e.find(e=>e.id===n)}function Sr(e,t){let n=[],r=e.find(e=>e.id===t)?.parentId;for(;r;){let t=e.find(e=>e.id===r);r=t?.parentId,t&&(n=n.concat(t))}return n}function K(e){e.preventDefault(),e.stopPropagation()}function Cr(e){return`nativeEvent`in e}function wr(e){return e.mozInputSource===0&&e.isTrusted?!0:rr()&&e.pointerType?e.type===`click`&&e.buttons===1:e.detail===0&&!e.pointerType}function Tr(e){return ar()?!1:!rr()&&e.width===0&&e.height===0||rr()&&e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType===`mouse`||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0&&e.pointerType===`touch`}function Er(e,t){let n=[`mouse`,`pen`];return t||n.push(``,void 0),n.includes(e)}var q=typeof document<`u`?V.useLayoutEffect:function(){},Dr={...V};function J(e){let t=V.useRef(e);return q(()=>{t.current=e}),t}var Or=Dr.useInsertionEffect||(e=>e());function Y(e){let t=V.useRef(()=>{});return Or(()=>{t.current=e}),V.useCallback(function(){var e=[...arguments];return t.current==null?void 0:t.current(...e)},[])}function kr(e,t,n){return Math.floor(e/t)!==n}function Ar(e,t){return t<0||t>=e.current.length}function jr(e,t){return X(e,{disabledIndices:t})}function Mr(e,t){return X(e,{decrement:!0,startingIndex:e.current.length,disabledIndices:t})}function X(e,t){let{startingIndex:n=-1,decrement:r=!1,disabledIndices:i,amount:a=1}=t===void 0?{}:t,o=n;do o+=r?-a:a;while(o>=0&&o<=e.current.length-1&&Lr(e,o,i));return o}function Nr(e,t){let{event:n,orientation:r,loop:i,rtl:a,cols:o,disabledIndices:s,minIndex:c,maxIndex:l,prevIndex:u,stopEvent:d=!1}=t,f=u;if(n.key===ur){if(d&&K(n),u===-1)f=l;else if(f=X(e,{startingIndex:f,amount:o,decrement:!0,disabledIndices:s}),i&&(u-o<c||f<0)){let e=u%o,t=l%o,n=l-(t-e);f=t===e?l:t>e?n:n-o}Ar(e,f)&&(f=u)}if(n.key===dr&&(d&&K(n),u===-1?f=c:(f=X(e,{startingIndex:u,amount:o,disabledIndices:s}),i&&u+o>l&&(f=X(e,{startingIndex:u%o-o,amount:o,disabledIndices:s}))),Ar(e,f)&&(f=u)),r===`both`){let t=rt(u/o);n.key===(a?cr:lr)&&(d&&K(n),u%o===o-1?i&&(f=X(e,{startingIndex:u-u%o-1,disabledIndices:s})):(f=X(e,{startingIndex:u,disabledIndices:s}),i&&kr(f,o,t)&&(f=X(e,{startingIndex:u-u%o-1,disabledIndices:s}))),kr(f,o,t)&&(f=u)),n.key===(a?lr:cr)&&(d&&K(n),u%o===0?i&&(f=X(e,{startingIndex:u+(o-u%o),decrement:!0,disabledIndices:s})):(f=X(e,{startingIndex:u,decrement:!0,disabledIndices:s}),i&&kr(f,o,t)&&(f=X(e,{startingIndex:u+(o-u%o),decrement:!0,disabledIndices:s}))),kr(f,o,t)&&(f=u));let r=rt(l/o)===t;Ar(e,f)&&(f=i&&r?n.key===(a?lr:cr)?l:X(e,{startingIndex:u-u%o-1,disabledIndices:s}):u)}return f}function Pr(e,t,n){let r=[],i=0;return e.forEach((e,a)=>{let{width:o,height:s}=e,c=!1;for(n&&(i=0);!c;){let e=[];for(let n=0;n<o;n++)for(let r=0;r<s;r++)e.push(i+n+r*t);i%t+o<=t&&e.every(e=>r[e]==null)?(e.forEach(e=>{r[e]=a}),c=!0):i++}}),[...r]}function Fr(e,t,n,r,i){if(e===-1)return-1;let a=n.indexOf(e),o=t[e];switch(i){case`tl`:return a;case`tr`:return o?a+o.width-1:a;case`bl`:return o?a+(o.height-1)*r:a;case`br`:return n.lastIndexOf(e)}}function Ir(e,t){return t.flatMap((t,n)=>e.includes(t)?[n]:[])}function Lr(e,t,n){if(typeof n==`function`)return n(t);if(n)return n.includes(t);let r=e.current[t];return r==null||r.hasAttribute(`disabled`)||r.getAttribute(`aria-disabled`)===`true`}var Rr=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver==`function`&&ResizeObserver.toString().includes(`[native code]`)?`full`:`none`});function zr(e,t){let n=Zn(e,Rr()),r=n.length;if(r===0)return;let i=fr(G(e)),a=n.indexOf(i);return n[a===-1?t===1?0:r-1:a+t]}function Br(e){return zr(G(e).body,1)||e}function Vr(e){return zr(G(e).body,-1)||e}function Hr(e,t){let n=t||e.currentTarget,r=e.relatedTarget;return!r||!W(n,r)}function Ur(e){Zn(e,Rr()).forEach(e=>{e.dataset.tabindex=e.getAttribute(`tabindex`)||``,e.setAttribute(`tabindex`,`-1`)})}function Wr(e){e.querySelectorAll(`[data-tabindex]`).forEach(e=>{let t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute(`tabindex`,t):e.removeAttribute(`tabindex`)})}var Z=Ue(),Gr=e(n(),1);function Kr(e){let t=V.useRef(void 0),n=V.useCallback(t=>{let n=e.map(e=>{if(e!=null){if(typeof e==`function`){let n=e,r=n(t);return typeof r==`function`?r:()=>{n(null)}}return e.current=t,()=>{e.current=null}}});return()=>{n.forEach(e=>e?.())}},e);return V.useMemo(()=>e.every(e=>e==null)?null:e=>{t.current&&=(t.current(),void 0),e!=null&&(t.current=n(e))},e)}var qr=`data-floating-ui-focusable`,Jr=`active`,Yr=`selected`,Xr=`ArrowLeft`,Zr=`ArrowRight`,Qr=`ArrowUp`,$r=`ArrowDown`,ei=[Xr,Zr],ti=[Qr,$r];[...ei,...ti];var ni={...V},ri=!1,ii=0,ai=()=>`floating-ui-`+Math.random().toString(36).slice(2,6)+ii++;function oi(){let[e,t]=V.useState(()=>ri?ai():void 0);return q(()=>{e??t(ai())},[]),V.useEffect(()=>{ri=!0},[]),e}var si=ni.useId||oi;function ci(){let e=new Map;return{emit(t,n){var r;(r=e.get(t))==null||r.forEach(e=>e(n))},on(t,n){e.has(t)||e.set(t,new Set),e.get(t).add(n)},off(t,n){var r;(r=e.get(t))==null||r.delete(n)}}}var li=V.createContext(null),ui=V.createContext(null),di=()=>V.useContext(li)?.id||null,fi=()=>V.useContext(ui);function pi(e){return`data-floating-ui-`+e}function Q(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}var mi=pi(`safe-polygon`);function hi(e,t,n){if(n&&!Er(n))return 0;if(typeof e==`number`)return e;if(typeof e==`function`){let n=e();return typeof n==`number`?n:n?.[t]}return e?.[t]}function gi(e){return typeof e==`function`?e():e}function _i(e,t){t===void 0&&(t={});let{open:n,onOpenChange:r,dataRef:i,events:a,elements:o}=e,{enabled:s=!0,delay:c=0,handleClose:l=null,mouseOnly:u=!1,restMs:d=0,move:f=!0}=t,p=fi(),m=di(),h=J(l),g=J(c),_=J(n),v=J(d),y=V.useRef(),b=V.useRef(-1),x=V.useRef(),S=V.useRef(-1),C=V.useRef(!0),w=V.useRef(!1),T=V.useRef(()=>{}),E=V.useRef(!1),D=Y(()=>{let e=i.current.openEvent?.type;return e?.includes(`mouse`)&&e!==`mousedown`});V.useEffect(()=>{if(!s)return;function e(e){let{open:t}=e;t||(Q(b),Q(S),C.current=!0,E.current=!1)}return a.on(`openchange`,e),()=>{a.off(`openchange`,e)}},[s,a]),V.useEffect(()=>{if(!s||!h.current||!n)return;function e(e){D()&&r(!1,e,`hover`)}let t=G(o.floating).documentElement;return t.addEventListener(`mouseleave`,e),()=>{t.removeEventListener(`mouseleave`,e)}},[o.floating,n,r,s,h,D]);let O=V.useCallback(function(e,t,n){t===void 0&&(t=!0),n===void 0&&(n=`hover`);let i=hi(g.current,`close`,y.current);i&&!x.current?(Q(b),b.current=window.setTimeout(()=>r(!1,e,n),i)):t&&(Q(b),r(!1,e,n))},[g,r]),k=Y(()=>{T.current(),x.current=void 0}),A=Y(()=>{if(w.current){let e=G(o.floating).body;e.style.pointerEvents=``,e.removeAttribute(mi),w.current=!1}}),j=Y(()=>i.current.openEvent?[`click`,`mousedown`].includes(i.current.openEvent.type):!1);V.useEffect(()=>{if(!s)return;function e(e){if(Q(b),C.current=!1,u&&!Er(y.current)||gi(v.current)>0&&!hi(g.current,`open`))return;let t=hi(g.current,`open`,y.current);t?b.current=window.setTimeout(()=>{_.current||r(!0,e,`hover`)},t):n||r(!0,e,`hover`)}function t(e){if(j()){A();return}T.current();let t=G(o.floating);if(Q(S),E.current=!1,h.current&&i.current.floatingContext){n||Q(b),x.current=h.current({...i.current.floatingContext,tree:p,x:e.clientX,y:e.clientY,onClose(){A(),k(),j()||O(e,!0,`safe-polygon`)}});let r=x.current;t.addEventListener(`mousemove`,r),T.current=()=>{t.removeEventListener(`mousemove`,r)}}else(y.current!==`touch`||!W(o.floating,e.relatedTarget))&&O(e)}function a(e){j()||i.current.floatingContext&&(h.current==null||h.current({...i.current.floatingContext,tree:p,x:e.clientX,y:e.clientY,onClose(){A(),k(),j()||O(e)}})(e))}function c(){Q(b)}function l(e){j()||O(e,!1)}if(B(o.domReference)){let r=o.domReference,i=o.floating;return n&&r.addEventListener(`mouseleave`,a),f&&r.addEventListener(`mousemove`,e,{once:!0}),r.addEventListener(`mouseenter`,e),r.addEventListener(`mouseleave`,t),i&&(i.addEventListener(`mouseleave`,a),i.addEventListener(`mouseenter`,c),i.addEventListener(`mouseleave`,l)),()=>{n&&r.removeEventListener(`mouseleave`,a),f&&r.removeEventListener(`mousemove`,e),r.removeEventListener(`mouseenter`,e),r.removeEventListener(`mouseleave`,t),i&&(i.removeEventListener(`mouseleave`,a),i.removeEventListener(`mouseenter`,c),i.removeEventListener(`mouseleave`,l))}}},[o,s,e,u,f,O,k,A,r,n,_,p,g,h,i,j,v]),q(()=>{var e;if(s&&n&&(e=h.current)!=null&&(e=e.__options)!=null&&e.blockPointerEvents&&D()){w.current=!0;let e=o.floating;if(B(o.domReference)&&e){var t;let n=G(o.floating).body;n.setAttribute(mi,``);let r=o.domReference,i=p==null||(t=p.nodesRef.current.find(e=>e.id===m))==null||(t=t.context)==null?void 0:t.elements.floating;return i&&(i.style.pointerEvents=``),n.style.pointerEvents=`none`,r.style.pointerEvents=`auto`,e.style.pointerEvents=`auto`,()=>{n.style.pointerEvents=``,r.style.pointerEvents=``,e.style.pointerEvents=``}}}},[s,n,m,o,p,h,D]),q(()=>{n||(y.current=void 0,E.current=!1,k(),A())},[n,k,A]),V.useEffect(()=>()=>{k(),Q(b),Q(S),A()},[s,o.domReference,k,A]);let M=V.useMemo(()=>{function e(e){y.current=e.pointerType}return{onPointerDown:e,onPointerEnter:e,onMouseMove(e){let{nativeEvent:t}=e;function i(){!C.current&&!_.current&&r(!0,t,`hover`)}(!u||Er(y.current))&&(n||gi(v.current)===0||E.current&&e.movementX**2+e.movementY**2<2||(Q(S),y.current===`touch`?i():(E.current=!0,S.current=window.setTimeout(i,gi(v.current)))))}}},[u,r,n,_,v]);return V.useMemo(()=>s?{reference:M}:{},[s,M])}var vi=V.createContext({hasProvider:!1,timeoutMs:0,delayRef:{current:0},initialDelayRef:{current:0},timeoutIdRef:{current:-1},currentIdRef:{current:null},currentContextRef:{current:null}});function yi(e){let{children:t,delay:n,timeoutMs:r=0}=e,i=V.useRef(n),a=V.useRef(n),o=V.useRef(null),s=V.useRef(null),c=V.useRef(-1);return(0,Z.jsx)(vi.Provider,{value:V.useMemo(()=>({hasProvider:!0,delayRef:i,initialDelayRef:a,currentIdRef:o,timeoutMs:r,currentContextRef:s,timeoutIdRef:c}),[r]),children:t})}function bi(e,t){t===void 0&&(t={});let{open:n,onOpenChange:r,floatingId:i}=e,{enabled:a=!0}=t,{currentIdRef:o,delayRef:s,timeoutMs:c,initialDelayRef:l,currentContextRef:u,hasProvider:d,timeoutIdRef:f}=V.useContext(vi),[p,m]=V.useState(!1);return q(()=>{function e(){var e;m(!1),(e=u.current)==null||e.setIsInstantPhase(!1),o.current=null,u.current=null,s.current=l.current}if(a&&o.current&&!n&&o.current===i){if(m(!1),c)return f.current=window.setTimeout(e,c),()=>{clearTimeout(f.current)};e()}},[a,n,i,o,s,c,l,u,f]),q(()=>{if(!a||!n)return;let e=u.current,t=o.current;u.current={onOpenChange:r,setIsInstantPhase:m},o.current=i,s.current={open:0,close:hi(l.current,`close`)},t!==null&&t!==i?(Q(f),m(!0),e?.setIsInstantPhase(!0),e?.onOpenChange(!1)):(m(!1),e?.setIsInstantPhase(!1))},[a,n,i,r,o,s,c,l,u,f]),q(()=>()=>{u.current=null},[u]),V.useMemo(()=>({hasProvider:d,delayRef:s,isInstantPhase:p}),[d,s,p])}var xi=0;function Si(e,t){t===void 0&&(t={});let{preventScroll:n=!1,cancelPrevious:r=!0,sync:i=!1}=t;r&&cancelAnimationFrame(xi);let a=()=>e?.focus({preventScroll:n});i?a():xi=requestAnimationFrame(a)}function Ci(e){return e?.ownerDocument||document}var wi={inert:new WeakMap,"aria-hidden":new WeakMap,none:new WeakMap};function Ti(e){return e===`inert`?wi.inert:e===`aria-hidden`?wi[`aria-hidden`]:wi.none}var Ei=new WeakSet,Di={},Oi=0,ki=()=>typeof HTMLElement<`u`&&`inert`in HTMLElement.prototype;function Ai(e){return e?ut(e)?e.host:Ai(e.parentNode):null}var ji=(e,t)=>t.map(t=>{if(e.contains(t))return t;let n=Ai(t);return e.contains(n)?n:null}).filter(e=>e!=null);function Mi(e,t,n,r){let i=`data-floating-ui-inert`,a=r?`inert`:n?`aria-hidden`:null,o=ji(t,e),s=new Set,c=new Set(o),l=[];Di[i]||(Di[i]=new WeakMap);let u=Di[i];o.forEach(d),f(t),s.clear();function d(e){e&&!s.has(e)&&(s.add(e),e.parentNode&&d(e.parentNode))}function f(e){e&&!c.has(e)&&[].forEach.call(e.children,e=>{if(tt(e)!==`script`){if(s.has(e))f(e);else{let t=a?e.getAttribute(a):null,n=t!==null&&t!==`false`,r=Ti(a),o=(r.get(e)||0)+1,s=(u.get(e)||0)+1;r.set(e,o),u.set(e,s),l.push(e),o===1&&n&&Ei.add(e),s===1&&e.setAttribute(i,``),!n&&a&&e.setAttribute(a,a===`inert`?``:`true`)}}})}return Oi++,()=>{l.forEach(e=>{let t=Ti(a),n=(t.get(e)||0)-1,r=(u.get(e)||0)-1;t.set(e,n),u.set(e,r),n||(!Ei.has(e)&&a&&e.removeAttribute(a),Ei.delete(e)),r||e.removeAttribute(i)}),Oi--,Oi||(wi.inert=new WeakMap,wi[`aria-hidden`]=new WeakMap,wi.none=new WeakMap,Ei=new WeakSet,Di={})}}function Ni(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);let r=Ci(e[0]).body;return Mi(e.concat(Array.from(r.querySelectorAll(`[aria-live],[role="status"],output`))),r,t,n)}var Pi={border:0,clip:`rect(0 0 0 0)`,height:`1px`,margin:`-1px`,overflow:`hidden`,padding:0,position:`fixed`,whiteSpace:`nowrap`,width:`1px`,top:0,left:0},Fi=V.forwardRef(function(e,t){let[n,r]=V.useState();q(()=>{nr()&&r(`button`)},[]);let i={ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,[pi(`focus-guard`)]:``,style:Pi};return(0,Z.jsx)(`span`,{...e,...i})}),Ii={clipPath:`inset(50%)`,position:`fixed`,top:0,left:0},Li=V.createContext(null),Ri=pi(`portal`);function zi(e){e===void 0&&(e={});let{id:t,root:n}=e,r=si(),i=Vi(),[a,o]=V.useState(null),s=V.useRef(null);return q(()=>()=>{a?.remove(),queueMicrotask(()=>{s.current=null})},[a]),q(()=>{if(!r||s.current)return;let e=t?document.getElementById(t):null;if(!e)return;let n=document.createElement(`div`);n.id=r,n.setAttribute(Ri,``),e.appendChild(n),s.current=n,o(n)},[t,r]),q(()=>{if(n===null||!r||s.current)return;let e=n||i?.portalNode;e&&!Ce(e)&&(e=e.current),e||=document.body;let a=null;t&&(a=document.createElement(`div`),a.id=t,e.appendChild(a));let c=document.createElement(`div`);c.id=r,c.setAttribute(Ri,``),e=a||e,e.appendChild(c),s.current=c,o(c)},[t,n,r,i]),a}function Bi(e){let{children:t,id:n,root:r,preserveTabOrder:i=!0}=e,a=zi({id:n,root:r}),[o,s]=V.useState(null),c=V.useRef(null),l=V.useRef(null),u=V.useRef(null),d=V.useRef(null),f=o?.modal,p=o?.open,m=!!o&&!o.modal&&o.open&&i&&!!(r||a);return V.useEffect(()=>{if(!a||!i||f)return;function e(e){a&&Hr(e)&&(e.type===`focusin`?Wr:Ur)(a)}return a.addEventListener(`focusin`,e,!0),a.addEventListener(`focusout`,e,!0),()=>{a.removeEventListener(`focusin`,e,!0),a.removeEventListener(`focusout`,e,!0)}},[a,i,f]),V.useEffect(()=>{a&&(p||Wr(a))},[p,a]),(0,Z.jsxs)(Li.Provider,{value:V.useMemo(()=>({preserveTabOrder:i,beforeOutsideRef:c,afterOutsideRef:l,beforeInsideRef:u,afterInsideRef:d,portalNode:a,setFocusManagerState:s}),[i,a]),children:[m&&a&&(0,Z.jsx)(Fi,{"data-type":`outside`,ref:c,onFocus:e=>{if(Hr(e,a)){var t;(t=u.current)==null||t.focus()}else Vr(o?o.domReference:null)?.focus()}}),m&&a&&(0,Z.jsx)(`span`,{"aria-owns":a.id,style:Ii}),a&&Gr.createPortal(t,a),m&&a&&(0,Z.jsx)(Fi,{"data-type":`outside`,ref:l,onFocus:e=>{if(Hr(e,a)){var t;(t=d.current)==null||t.focus()}else Br(o?o.domReference:null)?.focus(),o!=null&&o.closeOnFocusOut&&o?.onOpenChange(!1,e.nativeEvent,`focus-out`)}})]})}var Vi=()=>V.useContext(Li);function Hi(e){return V.useMemo(()=>t=>{e.forEach(e=>{e&&(e.current=t)})},e)}var Ui=20,Wi=[];function Gi(){Wi=Wi.filter(e=>e.deref()?.isConnected)}function Ki(e){Gi(),e&&tt(e)!==`body`&&(Wi.push(new WeakRef(e)),Wi.length>Ui&&(Wi=Wi.slice(-20)))}function qi(){return Gi(),Wi[Wi.length-1]?.deref()}function Ji(e){let t=Rr();return $n(e,t)?e:Zn(e,t)[0]||e}function Yi(e,t){var n;if(!t.current.includes(`floating`)&&!((n=e.getAttribute(`role`))!=null&&n.includes(`dialog`)))return;let r=Rr(),i=Qn(e,r).filter(e=>{let t=e.getAttribute(`data-tabindex`)||``;return $n(e,r)||e.hasAttribute(`data-tabindex`)&&!t.startsWith(`-`)}),a=e.getAttribute(`tabindex`);t.current.includes(`floating`)||i.length===0?a!==`0`&&e.setAttribute(`tabindex`,`0`):(a!==`-1`||e.hasAttribute(`data-tabindex`)&&e.getAttribute(`data-tabindex`)!==`-1`)&&(e.setAttribute(`tabindex`,`-1`),e.setAttribute(`data-tabindex`,`-1`))}var Xi=V.forwardRef(function(e,t){return(0,Z.jsx)(`button`,{...e,type:`button`,ref:t,tabIndex:-1,style:Pi})});function Zi(e){let{context:t,children:n,disabled:r=!1,order:i=[`content`],guards:a=!0,initialFocus:o=0,returnFocus:s=!0,restoreFocus:c=!1,modal:l=!0,visuallyHiddenDismiss:u=!1,closeOnFocusOut:d=!0,outsideElementsInert:f=!1,getInsideElements:p=()=>[]}=e,{open:m,onOpenChange:h,events:g,dataRef:_,elements:{domReference:v,floating:y}}=t,b=Y(()=>_.current.floatingContext?.nodeId),x=Y(p),S=typeof o==`number`&&o<0,C=_r(v)&&S,w=ki(),T=!w||a,E=!T||w&&f,D=J(i),O=J(o),k=J(s),A=fi(),j=Vi(),N=V.useRef(null),P=V.useRef(null),F=V.useRef(!1),I=V.useRef(!1),ee=V.useRef(-1),te=V.useRef(-1),ne=j!=null,L=yr(y),R=Y(function(e){return e===void 0&&(e=L),e?Zn(e,Rr()):[]}),z=Y(e=>{let t=R(e);return D.current.map(e=>v&&e===`reference`?v:L&&e===`floating`?L:t).filter(Boolean).flat()});V.useEffect(()=>{if(r||!l)return;function e(e){if(e.key===`Tab`){W(L,fr(G(L)))&&R().length===0&&!C&&K(e);let t=z(),n=pr(e);D.current[0]===`reference`&&n===v&&(K(e),e.shiftKey?Si(t[t.length-1]):Si(t[1])),D.current[1]===`floating`&&n===L&&e.shiftKey&&(K(e),Si(t[0]))}}let t=G(L);return t.addEventListener(`keydown`,e),()=>{t.removeEventListener(`keydown`,e)}},[r,v,L,l,D,C,R,z]),V.useEffect(()=>{if(r||!y)return;function e(e){let t=pr(e),n=R().indexOf(t);n!==-1&&(ee.current=n)}return y.addEventListener(`focusin`,e),()=>{y.removeEventListener(`focusin`,e)}},[r,y,R]),V.useEffect(()=>{if(r||!d)return;function e(){I.current=!0,setTimeout(()=>{I.current=!1})}function t(e){let t=e.relatedTarget,n=e.currentTarget,r=pr(e);queueMicrotask(()=>{let i=b(),a=!(W(v,t)||W(y,t)||W(t,y)||W(j?.portalNode,t)||t!=null&&t.hasAttribute(pi(`focus-guard`))||A&&(br(A.nodesRef.current,i).find(e=>W(e.context?.elements.floating,t)||W(e.context?.elements.domReference,t))||Sr(A.nodesRef.current,i).find(e=>[e.context?.elements.floating,yr(e.context?.elements.floating)].includes(t)||e.context?.elements.domReference===t)));if(n===v&&L&&Yi(L,D),c&&n!==v&&!(r!=null&&r.isConnected)&&fr(G(L))===G(L).body){M(L)&&L.focus();let e=ee.current,t=R(),n=t[e]||t[t.length-1]||L;M(n)&&n.focus()}_.current.insideReactTree?_.current.insideReactTree=!1:(C||!l)&&t&&a&&!I.current&&t!==qi()&&(F.current=!0,h(!1,e,`focus-out`))})}let n=!(A||!j);function i(){Q(te),_.current.insideReactTree=!0,te.current=window.setTimeout(()=>{_.current.insideReactTree=!1})}if(y&&M(v))return v.addEventListener(`focusout`,t),v.addEventListener(`pointerdown`,e),y.addEventListener(`focusout`,t),n&&y.addEventListener(`focusout`,i,!0),()=>{v.removeEventListener(`focusout`,t),v.removeEventListener(`pointerdown`,e),y.removeEventListener(`focusout`,t),n&&y.removeEventListener(`focusout`,i,!0)}},[r,v,y,L,l,A,j,h,d,c,R,C,b,D,_]);let re=V.useRef(null),ie=V.useRef(null),ae=Hi([re,j?.beforeInsideRef]),oe=Hi([ie,j?.afterInsideRef]);V.useEffect(()=>{var e,t;if(r||!y)return;let n=Array.from((j==null||(e=j.portalNode)==null?void 0:e.querySelectorAll(`[`+pi(`portal`)+`]`))||[]),i=(t=(A?Sr(A.nodesRef.current,b()):[]).find(e=>_r(e.context?.elements.domReference||null)))==null||(t=t.context)==null?void 0:t.elements.domReference,a=[y,i,...n,...x(),N.current,P.current,re.current,ie.current,j?.beforeOutsideRef.current,j?.afterOutsideRef.current,D.current.includes(`reference`)||C?v:null].filter(e=>e!=null),o=l||C?Ni(a,!E,E):Ni(a);return()=>{o()}},[r,v,y,l,D,j,C,T,E,A,b,x]),q(()=>{if(r||!M(L))return;let e=fr(G(L));queueMicrotask(()=>{let t=z(L),n=O.current,r=(typeof n==`number`?t[n]:n.current)||L,i=W(L,e);!S&&!i&&m&&Si(r,{preventScroll:r===L})})},[r,m,L,S,z,O]),q(()=>{if(r||!L)return;let e=G(L);Ki(fr(e));function t(e){let{reason:t,event:n,nested:r}=e;if([`hover`,`safe-polygon`].includes(t)&&n.type===`mouseleave`&&(F.current=!0),t===`outside-press`){if(r)F.current=!1;else if(wr(n)||Tr(n))F.current=!1;else{let e=!1;document.createElement(`div`).focus({get preventScroll(){return e=!0,!1}}),e?F.current=!1:F.current=!0}}}g.on(`openchange`,t);let n=e.createElement(`span`);n.setAttribute(`tabindex`,`-1`),n.setAttribute(`aria-hidden`,`true`),Object.assign(n.style,Pi),ne&&v&&v.insertAdjacentElement(`afterend`,n);function i(){if(typeof k.current==`boolean`){let e=v||qi();return e&&e.isConnected?e:n}return k.current.current||n}return()=>{g.off(`openchange`,t);let r=fr(e),a=W(y,r)||A&&br(A.nodesRef.current,b(),!1).some(e=>W(e.context?.elements.floating,r)),o=i();queueMicrotask(()=>{let t=Ji(o);k.current&&!F.current&&M(t)&&(t===r||r===e.body||a)&&t.focus({preventScroll:!0}),n.remove()})}},[r,y,L,k,_,g,A,ne,v,b]),V.useEffect(()=>(queueMicrotask(()=>{F.current=!1}),()=>{queueMicrotask(Gi)}),[r]),q(()=>{if(!r&&j)return j.setFocusManagerState({modal:l,closeOnFocusOut:d,open:m,onOpenChange:h,domReference:v}),()=>{j.setFocusManagerState(null)}},[r,j,l,m,h,d,v]),q(()=>{r||L&&Yi(L,D)},[r,L,D]);function se(e){return r||!u||!l?null:(0,Z.jsx)(Xi,{ref:e===`start`?N:P,onClick:e=>h(!1,e.nativeEvent),children:typeof u==`string`?u:`Dismiss`})}let ce=!r&&T&&(!l||!C)&&(ne||l);return(0,Z.jsxs)(Z.Fragment,{children:[ce&&(0,Z.jsx)(Fi,{"data-type":`inside`,ref:ae,onFocus:e=>{if(l){let e=z();Si(i[0]===`reference`?e[0]:e[e.length-1])}else if(j!=null&&j.preserveTabOrder&&j.portalNode){if(F.current=!1,Hr(e,j.portalNode))Br(v)?.focus();else{var t;(t=j.beforeOutsideRef.current)==null||t.focus()}}}}),!C&&se(`start`),n,se(`end`),ce&&(0,Z.jsx)(Fi,{"data-type":`inside`,ref:oe,onFocus:e=>{if(l)Si(z()[0]);else if(j!=null&&j.preserveTabOrder&&j.portalNode){if(d&&(F.current=!0),Hr(e,j.portalNode))Vr(v)?.focus();else{var t;(t=j.afterOutsideRef.current)==null||t.focus()}}}})]})}function Qi(e){return M(e.target)&&e.target.tagName===`BUTTON`}function $i(e){return M(e.target)&&e.target.tagName===`A`}function ea(e){return gr(e)}function ta(e,t){t===void 0&&(t={});let{open:n,onOpenChange:r,dataRef:i,elements:{domReference:a}}=e,{enabled:o=!0,event:s=`click`,toggle:c=!0,ignoreMouse:l=!1,keyboardHandlers:u=!0,stickIfOpen:d=!0}=t,f=V.useRef(),p=V.useRef(!1),m=V.useMemo(()=>({onPointerDown(e){f.current=e.pointerType},onMouseDown(e){let t=f.current;e.button===0&&s!==`click`&&(Er(t,!0)&&l||(n&&c&&(!(i.current.openEvent&&d)||i.current.openEvent.type===`mousedown`)?r(!1,e.nativeEvent,`click`):(e.preventDefault(),r(!0,e.nativeEvent,`click`))))},onClick(e){let t=f.current;s===`mousedown`&&f.current?f.current=void 0:Er(t,!0)&&l||(n&&c&&(!(i.current.openEvent&&d)||i.current.openEvent.type===`click`)?r(!1,e.nativeEvent,`click`):r(!0,e.nativeEvent,`click`))},onKeyDown(e){f.current=void 0,!(e.defaultPrevented||!u||Qi(e))&&(e.key===` `&&!ea(a)&&(e.preventDefault(),p.current=!0),!$i(e)&&e.key===`Enter`&&r(!(n&&c),e.nativeEvent,`click`))},onKeyUp(e){e.defaultPrevented||!u||Qi(e)||ea(a)||e.key===` `&&p.current&&(p.current=!1,r(!(n&&c),e.nativeEvent,`click`))}}),[i,a,s,l,u,r,n,d,c]);return V.useMemo(()=>o?{reference:m}:{},[o,m])}var na={pointerdown:`onPointerDown`,mousedown:`onMouseDown`,click:`onClick`},ra={pointerdown:`onPointerDownCapture`,mousedown:`onMouseDownCapture`,click:`onClickCapture`},ia=e=>({escapeKey:typeof e==`boolean`?e:e?.escapeKey??!1,outsidePress:typeof e==`boolean`?e:e?.outsidePress??!0});function aa(e,t){t===void 0&&(t={});let{open:n,onOpenChange:r,elements:i,dataRef:o}=e,{enabled:s=!0,escapeKey:c=!0,outsidePress:l=!0,outsidePressEvent:u=`pointerdown`,referencePress:d=!1,referencePressEvent:f=`pointerdown`,ancestorScroll:p=!1,bubbles:m,capture:h}=t,g=fi(),_=Y(typeof l==`function`?l:()=>!1),v=typeof l==`function`?_:l,y=V.useRef(!1),{escapeKey:b,outsidePress:x}=ia(m),{escapeKey:C,outsidePress:T}=ia(h),E=V.useRef(!1),D=Y(e=>{if(!n||!s||!c||e.key!==`Escape`||E.current)return;let t=o.current.floatingContext?.nodeId,i=g?br(g.nodesRef.current,t):[];if(!b&&(e.stopPropagation(),i.length>0)){let e=!0;if(i.forEach(t=>{var n;(n=t.context)!=null&&n.open&&!t.context.dataRef.current.__escapeKeyBubbles&&(e=!1)}),!e)return}r(!1,Cr(e)?e.nativeEvent:e,`escape-key`)}),O=Y(e=>{var t;let n=()=>{var t;D(e),(t=pr(e))==null||t.removeEventListener(`keydown`,n)};(t=pr(e))==null||t.addEventListener(`keydown`,n)}),k=Y(e=>{let t=o.current.insideReactTree;o.current.insideReactTree=!1;let n=y.current;if(y.current=!1,u===`click`&&n||t||typeof v==`function`&&!v(e))return;let s=pr(e),c=`[`+pi(`inert`)+`]`,l=G(i.floating).querySelectorAll(c),d=B(s)?s:null;for(;d&&!a(d);){let e=se(d);if(a(e)||!B(e))break;d=e}if(l.length&&B(s)&&!hr(s)&&!W(s,i.floating)&&Array.from(l).every(e=>!W(d,e)))return;if(M(s)&&N){let t=a(s),n=w(s),r=/auto|scroll/,i=t||r.test(n.overflowX),o=t||r.test(n.overflowY),c=i&&s.clientWidth>0&&s.scrollWidth>s.clientWidth,l=o&&s.clientHeight>0&&s.scrollHeight>s.clientHeight,u=n.direction===`rtl`,d=l&&(u?e.offsetX<=s.offsetWidth-s.clientWidth:e.offsetX>s.clientWidth),f=c&&e.offsetY>s.clientHeight;if(d||f)return}let f=o.current.floatingContext?.nodeId,p=g&&br(g.nodesRef.current,f).some(t=>mr(e,t.context?.elements.floating));if(mr(e,i.floating)||mr(e,i.domReference)||p)return;let m=g?br(g.nodesRef.current,f):[];if(m.length>0){let e=!0;if(m.forEach(t=>{var n;(n=t.context)!=null&&n.open&&!t.context.dataRef.current.__outsidePressBubbles&&(e=!1)}),!e)return}r(!1,e,`outside-press`)}),A=Y(e=>{var t;let n=()=>{var t;k(e),(t=pr(e))==null||t.removeEventListener(u,n)};(t=pr(e))==null||t.addEventListener(u,n)});V.useEffect(()=>{if(!n||!s)return;o.current.__escapeKeyBubbles=b,o.current.__outsidePressBubbles=x;let e=-1;function t(e){r(!1,e,`ancestor-scroll`)}function a(){window.clearTimeout(e),E.current=!0}function l(){e=window.setTimeout(()=>{E.current=!1},qe()?5:0)}let d=G(i.floating);c&&(d.addEventListener(`keydown`,C?O:D,C),d.addEventListener(`compositionstart`,a),d.addEventListener(`compositionend`,l)),v&&d.addEventListener(u,T?A:k,T);let f=[];return p&&(B(i.domReference)&&(f=S(i.domReference)),B(i.floating)&&(f=f.concat(S(i.floating))),!B(i.reference)&&i.reference&&i.reference.contextElement&&(f=f.concat(S(i.reference.contextElement)))),f=f.filter(e=>e!==d.defaultView?.visualViewport),f.forEach(e=>{e.addEventListener(`scroll`,t)}),()=>{c&&(d.removeEventListener(`keydown`,C?O:D,C),d.removeEventListener(`compositionstart`,a),d.removeEventListener(`compositionend`,l)),v&&d.removeEventListener(u,T?A:k,T),f.forEach(e=>{e.removeEventListener(`scroll`,t)}),window.clearTimeout(e)}},[o,i,c,v,u,n,r,p,s,b,x,D,C,O,k,T,A]),V.useEffect(()=>{o.current.insideReactTree=!1},[o,v,u]);let j=V.useMemo(()=>({onKeyDown:D,...d&&{[na[f]]:e=>{r(!1,e.nativeEvent,`reference-press`)},...f!==`click`&&{onClick(e){r(!1,e.nativeEvent,`reference-press`)}}}}),[D,r,d,f]),N=V.useMemo(()=>{function e(e){e.button===0&&(y.current=!0)}return{onKeyDown:D,onMouseDown:e,onMouseUp:e,[ra[u]]:()=>{o.current.insideReactTree=!0}}},[D,u,o]);return V.useMemo(()=>s?{reference:j,floating:N}:{},[s,j,N])}function oa(e){let{open:t=!1,onOpenChange:n,elements:r}=e,i=si(),a=V.useRef({}),[o]=V.useState(()=>ci()),s=di()!=null,[c,l]=V.useState(r.reference),u=Y((e,t,r)=>{a.current.openEvent=e?t:void 0,o.emit(`openchange`,{open:e,event:t,reason:r,nested:s}),n?.(e,t,r)}),d=V.useMemo(()=>({setPositionReference:l}),[]),f=V.useMemo(()=>({reference:c||r.reference||null,floating:r.floating||null,domReference:r.reference}),[c,r.reference,r.floating]);return V.useMemo(()=>({dataRef:a,open:t,onOpenChange:u,elements:f,events:o,floatingId:i,refs:d}),[t,u,f,o,i,d])}function sa(e){let{elements:t,...n}=e===void 0?{}:e,{nodeId:r}=n,i=oa({...n,elements:{reference:t?.reference??null,floating:t?.floating??null}}),a=n.rootContext||i,o=a.elements,[s,c]=V.useState(null),[l,u]=V.useState(null),d=o?.domReference||s,f=V.useRef(null),p=fi();q(()=>{d&&(f.current=d)},[d]);let m=be({...n,elements:{...o,...l&&{reference:l}}}),h=V.useCallback(e=>{let t=B(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),getClientRects:()=>e.getClientRects(),contextElement:e}:e;u(t),m.refs.setReference(t)},[m.refs]),g=V.useCallback(e=>{(B(e)||e===null)&&(f.current=e,c(e)),(B(m.refs.reference.current)||m.refs.reference.current===null||e!==null&&!B(e))&&m.refs.setReference(e)},[m.refs]),_=V.useMemo(()=>({...m.refs,setReference:g,setPositionReference:h,domReference:f}),[m.refs,g,h]),v=V.useMemo(()=>({...m.elements,domReference:d}),[m.elements,d]),y=V.useMemo(()=>({...m,...a,refs:_,elements:v,nodeId:r}),[m,_,v,r,a]);return q(()=>{a.dataRef.current.floatingContext=y;let e=p?.nodesRef.current.find(e=>e.id===r);e&&(e.context=y)}),V.useMemo(()=>({...m,context:y,refs:_,elements:v}),[m,_,v,y])}function ca(){return ir()&&nr()}function la(e,t){t===void 0&&(t={});let{open:n,onOpenChange:r,events:i,dataRef:a,elements:o}=e,{enabled:s=!0,visibleOnly:c=!0}=t,l=V.useRef(!1),u=V.useRef(-1),d=V.useRef(!0);V.useEffect(()=>{if(!s)return;let e=ae(o.domReference);function t(){!n&&M(o.domReference)&&o.domReference===fr(G(o.domReference))&&(l.current=!0)}function r(){d.current=!0}function i(){d.current=!1}return e.addEventListener(`blur`,t),ca()&&(e.addEventListener(`keydown`,r,!0),e.addEventListener(`pointerdown`,i,!0)),()=>{e.removeEventListener(`blur`,t),ca()&&(e.removeEventListener(`keydown`,r,!0),e.removeEventListener(`pointerdown`,i,!0))}},[o.domReference,n,s]),V.useEffect(()=>{if(!s)return;function e(e){let{reason:t}=e;(t===`reference-press`||t===`escape-key`)&&(l.current=!0)}return i.on(`openchange`,e),()=>{i.off(`openchange`,e)}},[i,s]),V.useEffect(()=>()=>{Q(u)},[]);let f=V.useMemo(()=>({onMouseLeave(){l.current=!1},onFocus(e){if(l.current)return;let t=pr(e.nativeEvent);if(c&&B(t)){if(ca()&&!e.relatedTarget){if(!d.current&&!gr(t))return}else if(!vr(t))return}r(!0,e.nativeEvent,`focus`)},onBlur(e){l.current=!1;let t=e.relatedTarget,n=e.nativeEvent,i=B(t)&&t.hasAttribute(pi(`focus-guard`))&&t.getAttribute(`data-type`)===`outside`;u.current=window.setTimeout(()=>{let e=fr(o.domReference?o.domReference.ownerDocument:document);(t||e!==o.domReference)&&(W(a.current.floatingContext?.refs.floating.current,e)||W(o.domReference,e)||i||r(!1,n,`focus`))})}}),[a,o.domReference,r,c]);return V.useMemo(()=>s?{reference:f}:{},[s,f])}function ua(e,t,n){let r=new Map,i=n===`item`,a=e;if(i&&e){let{[Jr]:t,[Yr]:n,...r}=e;a=r}return{...n===`floating`&&{tabIndex:-1,[qr]:``},...a,...t.map(t=>{let r=t?t[n]:null;return typeof r==`function`?e?r(e):null:r}).concat(e).reduce((e,t)=>(t&&Object.entries(t).forEach(t=>{let[n,a]=t;if(!(i&&[Jr,Yr].includes(n))){if(n.indexOf(`on`)===0){if(r.has(n)||r.set(n,[]),typeof a==`function`){var o;(o=r.get(n))==null||o.push(a),e[n]=function(){var e=[...arguments];return r.get(n)?.map(t=>t(...e)).find(e=>e!==void 0)}}}else e[n]=a}}),e),{})}}function da(e){e===void 0&&(e=[]);let t=e.map(e=>e?.reference),n=e.map(e=>e?.floating),r=e.map(e=>e?.item),i=V.useCallback(t=>ua(t,e,`reference`),t),a=V.useCallback(t=>ua(t,e,`floating`),n),o=V.useCallback(t=>ua(t,e,`item`),r);return V.useMemo(()=>({getReferenceProps:i,getFloatingProps:a,getItemProps:o}),[i,a,o])}var fa=`Escape`;function pa(e,t,n){switch(e){case`vertical`:return t;case`horizontal`:return n;default:return t||n}}function ma(e,t){return pa(t,e===Qr||e===$r,e===Xr||e===Zr)}function ha(e,t,n){return pa(t,e===$r,n?e===Xr:e===Zr)||e===`Enter`||e===` `||e===``}function ga(e,t,n){return pa(t,n?e===Xr:e===Zr,e===$r)}function _a(e,t,n,r){return t===`both`||t===`horizontal`&&r&&r>1?e===fa:pa(t,n?e===Zr:e===Xr,e===Qr)}function va(e,t){let{open:n,onOpenChange:r,elements:i,floatingId:a}=e,{listRef:o,activeIndex:s,onNavigate:c=()=>{},enabled:l=!0,selectedIndex:u=null,allowEscape:d=!1,loop:f=!1,nested:p=!1,rtl:m=!1,virtual:h=!1,focusItemOnOpen:g=`auto`,focusItemOnHover:_=!0,openOnArrowKeyDown:v=!0,disabledIndices:y=void 0,orientation:b=`vertical`,parentOrientation:x,cols:S=1,scrollItemIntoView:C=!0,virtualItemRef:w,itemSizes:T,dense:E=!1}=t,D=J(yr(i.floating)),O=di(),k=fi();q(()=>{e.dataRef.current.orientation=b},[e,b]);let A=Y(()=>{c(P.current===-1?null:P.current)}),j=_r(i.domReference),N=V.useRef(g),P=V.useRef(u??-1),F=V.useRef(null),I=V.useRef(!0),ee=V.useRef(A),te=V.useRef(!!i.floating),ne=V.useRef(n),L=V.useRef(!1),R=V.useRef(!1),z=J(y),re=J(n),ie=J(C),ae=J(u),[oe,se]=V.useState(),[ce,B]=V.useState(),le=Y(()=>{function e(e){if(h){var t;(t=e.id)!=null&&t.endsWith(`-fui-option`)&&(e.id=a+`-`+Math.random().toString(16).slice(2,10)),se(e.id),k?.events.emit(`virtualfocus`,e),w&&(w.current=e)}else Si(e,{sync:L.current,preventScroll:!0})}let t=o.current[P.current],n=R.current;t&&e(t),(L.current?e=>e():requestAnimationFrame)(()=>{let r=o.current[P.current]||t;if(!r)return;t||e(r);let i=ie.current;i&&de&&(n||!I.current)&&(r.scrollIntoView==null||r.scrollIntoView(typeof i==`boolean`?{block:`nearest`,inline:`nearest`}:i))})});q(()=>{l&&(n&&i.floating?N.current&&u!=null&&(R.current=!0,P.current=u,A()):te.current&&(P.current=-1,ee.current()))},[l,n,i.floating,u,A]),q(()=>{if(l&&n&&i.floating){if(s==null){if(L.current=!1,ae.current!=null)return;if(te.current&&(P.current=-1,le()),(!ne.current||!te.current)&&N.current&&(F.current!=null||N.current===!0&&F.current==null)){let e=0,t=()=>{o.current[0]==null?(e<2&&(e?requestAnimationFrame:queueMicrotask)(t),e++):(P.current=F.current==null||ha(F.current,b,m)||p?jr(o,z.current):Mr(o,z.current),F.current=null,A())};t()}}else Ar(o,s)||(P.current=s,le(),R.current=!1)}},[l,n,i.floating,s,ae,p,o,b,m,A,le,z]),q(()=>{var e;if(!l||i.floating||!k||h||!te.current)return;let t=k.nodesRef.current,n=(e=t.find(e=>e.id===O))==null||(e=e.context)==null?void 0:e.elements.floating,r=fr(G(i.floating)),a=t.some(e=>e.context&&W(e.context.elements.floating,r));n&&!a&&I.current&&n.focus({preventScroll:!0})},[l,i.floating,k,O,h]),q(()=>{if(!l||!k||!h||O)return;function e(e){B(e.id),w&&(w.current=e)}return k.events.on(`virtualfocus`,e),()=>{k.events.off(`virtualfocus`,e)}},[l,k,h,O,w]),q(()=>{ee.current=A,ne.current=n,te.current=!!i.floating}),q(()=>{n||(F.current=null,N.current=g)},[n,g]);let ue=s!=null,de=V.useMemo(()=>{function e(e){if(!re.current)return;let t=o.current.indexOf(e);t!==-1&&P.current!==t&&(P.current=t,A())}return{onFocus(t){let{currentTarget:n}=t;L.current=!0,e(n)},onClick:e=>{let{currentTarget:t}=e;return t.focus({preventScroll:!0})},onMouseMove(t){let{currentTarget:n}=t;L.current=!0,R.current=!1,_&&e(n)},onPointerLeave(e){let{pointerType:t}=e;if(I.current&&t!==`touch`&&(L.current=!0,_&&(P.current=-1,A(),!h))){var n;(n=D.current)==null||n.focus({preventScroll:!0})}}}},[re,D,_,o,A,h]),fe=V.useCallback(()=>{var e;return x??(k==null||(e=k.nodesRef.current.find(e=>e.id===O))==null||(e=e.context)==null||(e=e.dataRef)==null?void 0:e.current.orientation)},[O,k,x]),pe=Y(e=>{if(I.current=!1,L.current=!0,e.which===229||!re.current&&e.currentTarget===D.current)return;if(p&&_a(e.key,b,m,S)){ma(e.key,fe())||K(e),r(!1,e.nativeEvent,`list-navigation`),M(i.domReference)&&(h?k?.events.emit(`virtualfocus`,i.domReference):i.domReference.focus());return}let t=P.current,a=jr(o,y),s=Mr(o,y);if(j||(e.key===`Home`&&(K(e),P.current=a,A()),e.key===`End`&&(K(e),P.current=s,A())),S>1){let t=T||Array.from({length:o.current.length},()=>({width:1,height:1})),n=Pr(t,S,E),r=n.findIndex(e=>e!=null&&!Lr(o,e,y)),i=n.reduce((e,t,n)=>t!=null&&!Lr(o,t,y)?n:e,-1),c=n[Nr({current:n.map(e=>e==null?null:o.current[e])},{event:e,orientation:b,loop:f,rtl:m,cols:S,disabledIndices:Ir([...(typeof y==`function`?null:y)||o.current.map((e,t)=>Lr(o,t,y)?t:void 0),void 0],n),minIndex:r,maxIndex:i,prevIndex:Fr(P.current>s?a:P.current,t,n,S,e.key===$r?`bl`:e.key===(m?Xr:Zr)?`tr`:`tl`),stopEvent:!0})];if(c!=null&&(P.current=c,A()),b===`both`)return}if(ma(e.key,b)){if(K(e),n&&!h&&fr(e.currentTarget.ownerDocument)===e.currentTarget){P.current=ha(e.key,b,m)?a:s,A();return}ha(e.key,b,m)?f?P.current=t>=s?d&&t!==o.current.length?-1:a:X(o,{startingIndex:t,disabledIndices:y}):P.current=Math.min(s,X(o,{startingIndex:t,disabledIndices:y})):f?P.current=t<=a?d&&t!==-1?o.current.length:s:X(o,{startingIndex:t,decrement:!0,disabledIndices:y}):P.current=Math.max(a,X(o,{startingIndex:t,decrement:!0,disabledIndices:y})),Ar(o,P.current)&&(P.current=-1),A()}}),me=V.useMemo(()=>h&&n&&ue&&{"aria-activedescendant":ce||oe},[h,n,ue,ce,oe]),he=V.useMemo(()=>({"aria-orientation":b===`both`?void 0:b,...j?{}:me,onKeyDown:pe,onPointerMove(){I.current=!0}}),[me,pe,b,j]),ge=V.useMemo(()=>{function e(e){g===`auto`&&wr(e.nativeEvent)&&(N.current=!0)}function t(e){N.current=g,g===`auto`&&Tr(e.nativeEvent)&&(N.current=!0)}return{...me,onKeyDown(e){I.current=!1;let t=e.key.startsWith(`Arrow`),i=[`Home`,`End`].includes(e.key),a=t||i,s=ga(e.key,b,m),c=_a(e.key,b,m,S),l=ga(e.key,fe(),m),d=ma(e.key,b),f=(p?l:d)||e.key===`Enter`||e.key.trim()===``;if(h&&n){let t=k?.nodesRef.current.find(e=>e.parentId==null),n=k&&t?xr(k.nodesRef.current,t.id):null;if(a&&n&&w){let t=new KeyboardEvent(`keydown`,{key:e.key,bubbles:!0});if(s||c){let r=n.context?.elements.domReference===e.currentTarget,i=c&&!r?n.context?.elements.domReference:s?o.current.find(e=>e?.id===oe):null;i&&(K(e),i.dispatchEvent(t),B(void 0))}if((d||i)&&n.context&&n.context.open&&n.parentId&&e.currentTarget!==n.context.elements.domReference){var g;K(e),(g=n.context.elements.domReference)==null||g.dispatchEvent(t);return}}return pe(e)}if(n||v||!t){if(f){let t=ma(e.key,fe());F.current=p&&t?null:e.key}p?l&&(K(e),n?(P.current=jr(o,z.current),A()):r(!0,e.nativeEvent,`list-navigation`)):d&&(u!=null&&(P.current=u),K(e),!n&&v?r(!0,e.nativeEvent,`list-navigation`):pe(e),n&&A())}},onFocus(){n&&!h&&(P.current=-1,A())},onPointerDown:t,onPointerEnter:t,onMouseDown:e,onClick:e}},[oe,me,S,pe,z,g,o,p,A,r,n,v,b,fe,m,u,k,h,w]);return V.useMemo(()=>l?{reference:ge,floating:he,item:de}:{},[l,ge,he,de])}var ya=new Map([[`select`,`listbox`],[`combobox`,`listbox`],[`label`,!1]]);function ba(e,t){t===void 0&&(t={});let{open:n,elements:r,floatingId:i}=e,{enabled:a=!0,role:o=`dialog`}=t,s=si(),c=r.domReference?.id||s,l=V.useMemo(()=>yr(r.floating)?.id||i,[r.floating,i]),u=ya.get(o)??o,d=di()!=null,f=V.useMemo(()=>u===`tooltip`||o===`label`?{[`aria-`+(o===`label`?`labelledby`:`describedby`)]:n?l:void 0}:{"aria-expanded":n?`true`:`false`,"aria-haspopup":u===`alertdialog`?`dialog`:u,"aria-controls":n?l:void 0,...u===`listbox`&&{role:`combobox`},...u===`menu`&&{id:c},...u===`menu`&&d&&{role:`menuitem`},...o===`select`&&{"aria-autocomplete":`none`},...o===`combobox`&&{"aria-autocomplete":`list`}},[u,l,d,n,c,o]),p=V.useMemo(()=>{let e={id:l,...u&&{role:u}};return u===`tooltip`||o===`label`?e:{...e,...u===`menu`&&{"aria-labelledby":c}}},[u,l,c,o]),m=V.useCallback(e=>{let{active:t,selected:n}=e,r={role:`option`,...t&&{id:l+`-fui-option`}};switch(o){case`select`:case`combobox`:return{...r,"aria-selected":n}}return{}},[l,o]);return V.useMemo(()=>a?{reference:f,floating:p,item:m}:{},[a,f,p,m])}function xa(e,t){let[n,r]=V.useState(e);return e&&!n&&r(!0),V.useEffect(()=>{if(!e&&n){let e=setTimeout(()=>r(!1),t);return()=>clearTimeout(e)}},[e,n,t]),n}function Sa(e,t){t===void 0&&(t={});let{open:n,elements:{floating:r}}=e,{duration:i=250}=t,a=(typeof i==`number`?i:i.close)||0,[o,s]=V.useState(`unmounted`),c=xa(n,a);return!c&&o===`close`&&s(`unmounted`),q(()=>{if(r){if(n){s(`initial`);let e=requestAnimationFrame(()=>{Gr.flushSync(()=>{s(`open`)})});return()=>{cancelAnimationFrame(e)}}s(`close`)}},[n,r]),{isMounted:c,status:o}}function Ca(e,t){let{open:n,dataRef:r}=e,{listRef:i,activeIndex:a,onMatch:o,onTypingChange:s,enabled:c=!0,findMatch:l=null,resetMs:u=750,ignoreKeys:d=[],selectedIndex:f=null}=t,p=V.useRef(-1),m=V.useRef(``),h=V.useRef(f??a??-1),g=V.useRef(null),_=Y(o),v=Y(s),y=J(l),b=J(d);q(()=>{n&&(Q(p),g.current=null,m.current=``)},[n]),q(()=>{n&&m.current===``&&(h.current=f??a??-1)},[n,f,a]);let x=Y(e=>{e?r.current.typing||(r.current.typing=e,v(e)):r.current.typing&&(r.current.typing=e,v(e))}),S=Y(e=>{function t(e,t,n){let r=y.current?y.current(t,n):t.find(e=>e?.toLocaleLowerCase().indexOf(n.toLocaleLowerCase())===0);return r?e.indexOf(r):-1}let r=i.current;if(m.current.length>0&&m.current[0]!==` `&&(t(r,r,m.current)===-1?x(!1):e.key===` `&&K(e)),r==null||b.current.includes(e.key)||e.key.length!==1||e.ctrlKey||e.metaKey||e.altKey)return;n&&e.key!==` `&&(K(e),x(!0)),r.every(e=>!e||e[0]?.toLocaleLowerCase()!==e[1]?.toLocaleLowerCase())&&m.current===e.key&&(m.current=``,h.current=g.current),m.current+=e.key,Q(p),p.current=window.setTimeout(()=>{m.current=``,h.current=g.current,x(!1)},u);let a=h.current,o=t(r,[...r.slice((a||0)+1),...r.slice(0,(a||0)+1)],m.current);o===-1?e.key!==` `&&(m.current=``,x(!1)):(_(o),g.current=o)}),C=V.useMemo(()=>({onKeyDown:S}),[S]),w=V.useMemo(()=>({onKeyDown:S,onKeyUp(e){e.key===` `&&x(!1)}}),[S,x]);return V.useMemo(()=>c?{reference:C,floating:w}:{},[c,C,w])}var wa=`data-emdash-bubble-popup`,Ta=V.createContext(null),Ea=V.createContext(!0);function Da(){let[e]=V.useState(()=>{if(typeof document>`u`)return null;let e=document.createElement(`div`);return e.className=`emdash-inline-ui`,e});return V.useLayoutEffect(()=>{if(e)return document.body.append(e),()=>e.remove()},[e]),e}function Oa(e,t){e.isConnected||(t.append(e),queueMicrotask(()=>{e.style.visibility===`hidden`&&e.remove()}))}function ka(e){return{name:`transformOrigin`,fn:({x:t,y:n,placement:r,rects:i,elements:a})=>{let o=a.reference.getBoundingClientRect(),s=e?.()??o,c=r.startsWith(`top`)?s.top:s.bottom;return{data:{x:i.reference.x+s.left+s.width/2-o.left-t,y:i.reference.y+c-o.top-n}}}}}function Aa(e){return e?{transformOrigin:`${e.x}px ${e.y}px`}:{}}function ja(e,t){V.useLayoutEffect(()=>{e&&t()},[e,t])}var Ma={open:400,close:0};function Na({children:e}){return(0,Z.jsx)(yi,{delay:Ma,timeoutMs:400,children:e})}function Pa(e){let t=V.useContext(Ta),n=V.useContext(Ea),[r,i]=V.useState(!1),a=r&&n;V.useEffect(()=>{n||i(!1)},[n]);let o=V.useRef(null),{refs:s,floatingStyles:c,context:l,placement:u,middlewareData:d,isPositioned:f,update:p}=sa({open:a,onOpenChange:i,placement:`top`,strategy:`fixed`,transform:!1,middleware:[_e(10),Xe({padding:8}),Ve({padding:8}),fe({element:o}),ka()],whileElementsMounted:b});ja(a,p);let{delayRef:m,isInstantPhase:h,hasProvider:g}=bi(l),{getReferenceProps:_,getFloatingProps:v}=da([_i(l,{delay:()=>g?m.current:Ma,mouseOnly:!0}),la(l,{visibleOnly:!0}),aa(l,{referencePress:!0})]),{isMounted:y,status:x}=Sa(l,{duration:h||!n?0:150}),S=y?(0,Z.jsx)(Bi,{root:t,children:(0,Z.jsxs)(`div`,{ref:s.setFloating,style:{...c,...Aa(d.transformOrigin),visibility:f||x===`close`?void 0:`hidden`},className:`emdash-inline-ui-tooltip`,"data-status":x,"data-instant":h?``:void 0,dir:`auto`,"aria-hidden":`true`,...v(),children:[e,(0,Z.jsxs)(`svg`,{ref:o,width:`20`,height:`10`,viewBox:`0 0 20 10`,className:`emdash-inline-ui-tooltip-arrow`,"data-side":u.startsWith(`bottom`)?`bottom`:`top`,style:{left:d.arrow?.x},children:[(0,Z.jsx)(`path`,{className:`emdash-inline-ui-tooltip-arrow-fill`,d:`M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z`}),(0,Z.jsx)(`path`,{className:`emdash-inline-ui-tooltip-arrow-shadow`,d:`M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z`}),(0,Z.jsx)(`path`,{className:`emdash-inline-ui-tooltip-arrow-stroke`,d:`M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z`})]})]})}):null;return{setReference:s.setReference,getReferenceProps:_,tooltip:S}}function Fa({label:e,active:t,onClick:n,children:r}){let{setReference:i,getReferenceProps:a,tooltip:o}=Pa(e);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`button`,{ref:i,type:`button`,className:`emdash-inline-ui-button`,"aria-label":e,"aria-pressed":t,...a({onMouseDown:e=>e.preventDefault(),onClick:n}),children:r}),o]})}function Ia({label:e,icon:t,tooltip:n,pressed:r,expanded:i,buttonRef:a,onClick:o}){let{setReference:s,getReferenceProps:c,tooltip:l}=Pa(n??e),u=Kr([s,a]),d=V.useId();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(`button`,{ref:u,type:`button`,className:`emdash-inline-ui-trigger emdash-inline-ui-text-button`,"aria-pressed":r,"aria-haspopup":i===void 0?void 0:`dialog`,"aria-expanded":i,"aria-describedby":n===void 0?void 0:d,"data-open":i?``:void 0,...c({onMouseDown:e=>e.preventDefault(),onClick:o}),children:[t,(0,Z.jsx)(`span`,{className:`emdash-inline-ui-text-button-label`,children:e}),n!==void 0&&(0,Z.jsx)(`span`,{id:d,"aria-hidden":`true`,className:`emdash-inline-ui-sr-only`,children:n})]}),n===void 0?null:l]})}function La(){return(0,Z.jsx)(`div`,{"aria-hidden":`true`,className:`emdash-inline-ui-separator`})}function Ra({editor:e,label:t,open:n,onOpenChange:r,placement:i,iconOnly:a,trigger:o,groups:s}){let c=V.useContext(Ta),l=V.useRef([]),u=V.useRef([]),[d,f]=V.useState(null),p=V.useRef(null),m=()=>{e.isDestroyed||e.view.focus()},{refs:h,floatingStyles:g,context:_,middlewareData:v,isPositioned:y,update:x}=sa({open:n,onOpenChange:(e,t,n)=>{r(e),!e&&n===`escape-key`&&m()},placement:i,strategy:`fixed`,transform:!1,middleware:[_e(4),Xe({padding:8}),Ve({padding:8}),ft({padding:8,apply:({availableHeight:e,elements:t})=>{t.floating.style.maxHeight=`${Math.min(416,Math.max(0,e))}px`}}),ka(()=>p.current?.getBoundingClientRect()??new DOMRect)],whileElementsMounted:b});V.useLayoutEffect(()=>{let e=p.current?.closest(`[role="toolbar"]`)?.parentElement;if(!e)return;let t=new DOMRect;h.setPositionReference({contextElement:e,getBoundingClientRect:()=>(e.isConnected&&(t=e.getBoundingClientRect()),t)})},[h]),ja(n,x);let S=Kr([h.setReference,p]),{isMounted:C,status:w}=Sa(_,{duration:{open:100,close:75}}),{getReferenceProps:T,getFloatingProps:E,getItemProps:D}=da([ta(_),aa(_),ba(_,{role:`menu`}),va(_,{listRef:l,activeIndex:d,onNavigate:f,loop:!0}),Ca(_,{listRef:u,activeIndex:d,onMatch:n?f:void 0})]),O=0;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`button`,{ref:S,type:`button`,className:`emdash-inline-ui-trigger`,"aria-label":t,"data-icon-only":a?``:void 0,"data-open":n?``:void 0,...T({onMouseDown:e=>e.preventDefault()}),children:o}),C&&(0,Z.jsx)(Bi,{root:c,children:(0,Z.jsx)(Zi,{context:_,modal:!1,returnFocus:!1,disabled:w===`close`,children:(0,Z.jsx)(`div`,{ref:h.setFloating,style:{...g,...Aa(v.transformOrigin),visibility:y||w===`close`?void 0:`hidden`},className:`emdash-inline-ui-menu`,"data-status":w,"data-emdash-bubble-popup":``,...E({onKeyDown:e=>{e.key===`Tab`&&(e.preventDefault(),r(!1),m())}}),children:s.map((e,t)=>(0,Z.jsxs)(V.Fragment,{children:[t>0&&(0,Z.jsx)(`div`,{role:`separator`,className:`emdash-inline-ui-menu-separator`}),(0,Z.jsxs)(`div`,{role:`group`,"aria-label":e.label,children:[e.label&&(0,Z.jsx)(`div`,{"aria-hidden":`true`,className:`emdash-inline-ui-menu-label`,children:e.label}),e.items.map(e=>{let t=O++;return(0,Z.jsxs)(`button`,{ref:n=>{l.current[t]=n,u.current[t]=e.label},type:`button`,role:e.role??`menuitem`,"aria-checked":e.role?e.checked===!0:void 0,disabled:e.disabled,tabIndex:d===t?0:-1,className:`emdash-inline-ui-menu-item`,"data-highlighted":d===t?``:void 0,...D({onClick:()=>{r(!1),e.onSelect()}}),children:[(0,Z.jsx)(e.icon,{className:`emdash-inline-ui-menu-icon`,"aria-hidden":`true`}),(0,Z.jsx)(`span`,{className:`emdash-inline-ui-menu-text`,children:e.label}),e.checked&&(0,Z.jsx)(R,{className:`emdash-inline-ui-menu-check`,"aria-hidden":`true`})]},e.label)})]})]},e.label??t))})})})]})}var za=`button:not([disabled]), a[href], input`;function Ba(e,t){V.useEffect(()=>{let n=e.view.dom,r=e=>{if(e.key!==`Tab`||e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||e.defaultPrevented||e.isComposing)return;let n=t.querySelector(`[role="toolbar"]`)?.querySelector(za);n&&(e.preventDefault(),n.focus())};return n.addEventListener(`keydown`,r),()=>n.removeEventListener(`keydown`,r)},[e,t])}var Va=`a[href], button, input, select, textarea, [tabindex], [contenteditable="true"]`;function Ha(e){let t=e.view.dom;for(let e of document.querySelectorAll(Va))if(!(e.tabIndex<0||t.contains(e)||e.closest(`.emdash-inline-ui`))&&t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING&&(e.focus(),document.activeElement===e))return!0;return!1}function Ua(e,t){if(e.nativeEvent.isComposing||e.defaultPrevented)return;let n=e.currentTarget,r=[...n.querySelectorAll(za)];if(e.key===`Escape`||e.key===`Tab`&&e.shiftKey&&document.activeElement===r[0]){e.preventDefault(),t.isDestroyed||t.view.focus();return}if(e.key===`Tab`&&!e.shiftKey&&document.activeElement===r.at(-1)&&Ha(t)){e.preventDefault();return}let i=[...n.querySelectorAll(`button:not([disabled]), a[href]`)].filter(e=>e.getClientRects().length>0),a=i.findIndex(e=>e===document.activeElement);if(a===-1)return;let o=getComputedStyle(n).direction===`rtl`?-1:1,s;switch(e.key){case`ArrowRight`:s=a+o;break;case`ArrowLeft`:s=a-o;break;case`Home`:s=0;break;case`End`:s=i.length-1;break;default:return}e.preventDefault(),i[(s+i.length)%i.length]?.focus()}function Wa(e){if(!(e instanceof HTMLElement)||typeof e.animate!=`function`)return;let t=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;e.animate(t?[{opacity:0},{opacity:1}]:[{opacity:0,transform:`translateY(2px) scale(0.98)`},{opacity:1,transform:`none`}],{duration:120,easing:`cubic-bezier(0.23, 1, 0.32, 1)`})}var Ga=`
	@property --emdash-inline-ui-fade-start {
		syntax: "<length>";
		inherits: false;
		initial-value: 0px;
	}
	@property --emdash-inline-ui-fade-end {
		syntax: "<length>";
		inherits: false;
		initial-value: 0px;
	}
	@keyframes emdash-inline-ui-scroll-fade {
		0% { --emdash-inline-ui-fade-start: 0px; }
		10%, 100% { --emdash-inline-ui-fade-start: 24px; }
		0%, 90% { --emdash-inline-ui-fade-end: 24px; }
		100% { --emdash-inline-ui-fade-end: 0px; }
	}
	@keyframes emdash-inline-ui-menu-in {
		from { opacity: 0; scale: 0.97; }
	}
	@keyframes emdash-inline-ui-tooltip-in {
		from { opacity: 0; scale: 0.9; }
	}
	.emdash-inline-ui {
		position: absolute;
		inset-block-start: 0;
		inset-inline-start: 0;
		z-index: 1000000;
		color-scheme: light dark;
		--emdash-ui-surface: light-dark(#fff, oklch(20.5% 0 0));
		--emdash-ui-raised: light-dark(#fff, oklch(17% 0 0));
		--emdash-ui-text: light-dark(#1d2327, oklch(97% 0 0));
		--emdash-ui-subtle: light-dark(#646970, oklch(70.8% 0 0));
		--emdash-ui-placeholder: light-dark(oklch(70.8% 0 0), oklch(55.6% 0 0));
		--emdash-ui-tint: light-dark(#f0f0f1, oklch(26.9% 0 0));
		--emdash-ui-line: light-dark(oklch(14.5% 0 0 / 0.1), oklch(32% 0 0));
		--emdash-ui-hairline: light-dark(oklch(93.5% 0 0), oklch(26.9% 0 0));
		--emdash-ui-fill: light-dark(#dcdcde, oklch(26.9% 0 0));
		--emdash-ui-link: light-dark(oklch(42.4% 0.199 265.638), oklch(70.7% 0.165 254.624));
		--emdash-ui-danger: light-dark(oklch(50.5% 0.213 27.518), oklch(70.4% 0.191 22.216));
		--emdash-ui-danger-ring: light-dark(oklch(63.7% 0.237 25.331), oklch(57.7% 0.245 27.325));
		--emdash-ui-focus: light-dark(oklch(15% 0 0), oklch(93.5% 0 0));
		--emdash-ui-brand: light-dark(oklch(57.72% 0.2324 260), oklch(51.948% 0.2324 260));
		--emdash-ui-tip-shadow: light-dark(oklch(92.8% 0.006 264.531), transparent);
		--emdash-ui-tip-stroke: light-dark(transparent, oklch(26.9% 0 0));
		--emdash-ui-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
		color: var(--emdash-ui-text);
		font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
			"Segoe UI Symbol", "Noto Color Emoji";
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 20px;
		letter-spacing: normal;
		text-align: start;
		text-transform: none;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	.emdash-inline-ui :where(*, *::before, *::after) {
		box-sizing: border-box;
	}
	.emdash-inline-ui :where(button, input, a) {
		min-width: 0;
		min-height: 0;
		margin: 0;
		font: inherit;
		color: inherit;
		letter-spacing: inherit;
		text-decoration: none;
		text-shadow: none;
		text-transform: none;
	}
	.emdash-inline-ui :where(svg) {
		display: block;
		flex: none;
	}
	.emdash-inline-ui-bar,
	.emdash-inline-ui-menu,
	.emdash-inline-ui .emdash-slash-menu {
		border-radius: 10px;
		background: var(--emdash-ui-surface);
		box-shadow: 0 0 0 1px var(--emdash-ui-line), var(--emdash-ui-shadow);
	}
	.emdash-inline-ui-bar {
		display: flex;
		max-width: 100%;
		align-items: center;
		gap: 2px;
		padding: 4px;
	}
	.emdash-inline-ui-toolbar {
		display: flex;
		min-width: 0;
		align-items: center;
		gap: 2px;
		margin: -4px;
		padding: 4px;
		overflow-x: auto;
		scroll-padding-inline: 4px;
		border-radius: inherit;
		scrollbar-width: none;
		animation: emdash-inline-ui-scroll-fade linear;
		animation-timeline: scroll(self inline);
		mask-image: linear-gradient(
			to var(--emdash-inline-ui-fade-direction, right),
			transparent,
			black var(--emdash-inline-ui-fade-start),
			black calc(100% - var(--emdash-inline-ui-fade-end)),
			transparent
		);
	}
	.emdash-inline-ui-toolbar:dir(rtl) {
		--emdash-inline-ui-fade-direction: left;
	}
	.emdash-inline-ui-toolbar::-webkit-scrollbar {
		display: none;
	}
	.emdash-inline-ui-button,
	.emdash-inline-ui-trigger {
		display: inline-flex;
		flex: none;
		height: 32px;
		align-items: center;
		justify-content: center;
		gap: 4px;
		padding: 0;
		border: 0;
		border-radius: 6px;
		background: transparent;
		color: var(--emdash-ui-text);
		cursor: pointer;
		outline: none;
		box-shadow: none;
		font-size: 14px;
		line-height: 20px;
		-webkit-tap-highlight-color: transparent;
	}
	.emdash-inline-ui-button {
		width: 32px;
	}
	.emdash-inline-ui-trigger {
		padding-inline: 8px;
		cursor: default;
	}
	.emdash-inline-ui-trigger[data-icon-only] {
		width: 32px;
		padding-inline: 0;
	}
	.emdash-inline-ui-button:hover,
	.emdash-inline-ui-trigger:hover,
	.emdash-inline-ui-trigger[data-open] {
		background: var(--emdash-ui-tint);
	}
	.emdash-inline-ui-button[aria-pressed="true"],
	.emdash-inline-ui-trigger[aria-pressed="true"] {
		background: var(--emdash-ui-tint);
		color: var(--emdash-ui-link);
	}
	.emdash-inline-ui-text-button {
		gap: 6px;
		cursor: pointer;
	}
	.emdash-inline-ui-text-button > svg {
		width: 16px;
		height: 16px;
	}
	.emdash-inline-ui-button:focus-visible {
		box-shadow: 0 0 0 2px var(--emdash-ui-brand);
	}
	.emdash-inline-ui-trigger:focus-visible,
	.emdash-inline-ui-link-url:focus-visible {
		box-shadow: 0 0 0 2px color-mix(in oklch, var(--emdash-ui-focus) 50%, transparent);
	}
	.emdash-inline-ui-button svg,
	.emdash-inline-ui-trigger > svg:only-child {
		width: 16px;
		height: 16px;
	}
	.emdash-inline-ui-trigger-label {
		max-width: 128px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.emdash-inline-ui-caret {
		width: 12px;
		height: 12px;
		color: var(--emdash-ui-subtle);
	}
	.emdash-inline-ui-separator {
		flex: none;
		width: 1px;
		height: 20px;
		margin-inline: 2px;
		background: var(--emdash-ui-hairline);
	}
	.emdash-inline-ui-link-edit {
		display: flex;
		min-width: 0;
		align-items: flex-start;
		gap: 4px;
	}
	.emdash-inline-ui-field {
		display: flex;
		min-width: 0;
		flex-direction: column;
		gap: 4px;
	}
	.emdash-inline-ui-field-row {
		display: flex;
		min-width: 0;
		align-items: center;
		gap: 4px;
	}
	.emdash-inline-ui-input {
		width: 288px;
		min-width: 0;
		max-width: 100%;
		height: 32px;
		padding: 0 12px;
		border: 0;
		border-radius: 8px;
		background: var(--emdash-ui-surface);
		box-shadow: 0 0 0 1px var(--emdash-ui-line);
		color: var(--emdash-ui-text);
		font-size: 14px;
		line-height: 20px;
		outline: none;
	}
	.emdash-inline-ui-input::placeholder {
		color: var(--emdash-ui-placeholder);
		opacity: 1;
	}
	.emdash-inline-ui-input:focus {
		box-shadow: 0 0 0 1.5px color-mix(in oklch, var(--emdash-ui-focus) 50%, transparent);
	}
	.emdash-inline-ui-input[aria-invalid="true"] {
		box-shadow: 0 0 0 1px var(--emdash-ui-danger-ring);
	}
	.emdash-inline-ui-input[aria-invalid="true"]:focus {
		box-shadow: 0 0 0 1.5px color-mix(in oklch, var(--emdash-ui-danger-ring) 50%, transparent);
	}
	.emdash-inline-ui-field-error {
		max-width: 288px;
		margin: 0;
		padding: 4px 8px;
		color: var(--emdash-ui-danger);
		font-size: 12px;
		line-height: 16px;
	}
	.emdash-inline-ui-link-preview {
		max-width: min(448px, calc(100vw - 16px));
	}
	.emdash-inline-ui-link-globe {
		width: 16px;
		height: 16px;
		margin-inline-start: 6px;
		color: var(--emdash-ui-subtle);
	}
	.emdash-inline-ui-link-url {
		min-width: 0;
		overflow: hidden;
		padding-inline: 6px;
		border-radius: 4px;
		color: var(--emdash-ui-link);
		font-size: 14px;
		outline: none;
		text-decoration: none;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.emdash-inline-ui-link-url:hover {
		text-decoration: underline;
	}
	span.emdash-inline-ui-link-url {
		color: var(--emdash-ui-subtle);
	}
	.emdash-inline-ui-menu {
		min-width: 224px;
		overflow-y: auto;
		overscroll-behavior: contain;
		padding: 4px;
		outline: none;
	}
	/*
	 * Entrances are animations: floating-ui leaves its opening status before
	 * the first paint, so a transition from it would never run. Exits are
	 * transitions, as the closing status keeps the element on the page.
	 */
	.emdash-inline-ui-menu,
	.emdash-inline-ui .emdash-slash-menu {
		animation: emdash-inline-ui-menu-in 100ms cubic-bezier(0, 0, 0.2, 1);
		transition: opacity 75ms cubic-bezier(0, 0, 0.2, 1);
	}
	.emdash-inline-ui-menu[data-status="close"],
	.emdash-inline-ui .emdash-slash-menu[data-status="close"] {
		opacity: 0;
		pointer-events: none;
	}
	.emdash-inline-ui-menu-label {
		padding: 6px 8px 2px;
		color: var(--emdash-ui-subtle);
		font-size: 12px;
		font-weight: 500;
		line-height: 16px;
		user-select: none;
	}
	.emdash-inline-ui-menu-separator {
		height: 1px;
		margin: 4px -4px;
		background: var(--emdash-ui-hairline);
	}
	.emdash-inline-ui-menu-item {
		display: flex;
		width: 100%;
		height: 32px;
		align-items: center;
		gap: 8px;
		padding: 0 8px;
		border: 0;
		border-radius: 6px;
		background: transparent;
		color: var(--emdash-ui-text);
		cursor: default;
		outline: none;
		text-align: start;
		user-select: none;
	}
	.emdash-inline-ui-menu-item[data-highlighted] {
		background: var(--emdash-ui-tint);
	}
	.emdash-inline-ui-menu-item:disabled {
		opacity: 0.5;
		pointer-events: none;
	}
	.emdash-inline-ui-menu-icon {
		width: 16px;
		height: 16px;
		color: var(--emdash-ui-subtle);
	}
	.emdash-inline-ui-menu-check {
		width: 16px;
		height: 16px;
	}
	.emdash-inline-ui-menu-text {
		min-width: 0;
		flex: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.emdash-inline-ui-tooltip {
		padding: 6px 10px;
		border-radius: 6px;
		background: var(--emdash-ui-raised);
		box-shadow: 0 10px 15px -3px var(--emdash-ui-tip-shadow), 0 4px 6px -4px var(--emdash-ui-tip-shadow);
		color: var(--emdash-ui-text);
		font-size: 13px;
		line-height: calc(1 / 0.85);
		outline: 1px solid var(--emdash-ui-fill);
		pointer-events: none;
		width: max-content;
		max-width: min(288px, calc(100vw - 16px));
		overflow-wrap: break-word;
		animation: emdash-inline-ui-tooltip-in 150ms cubic-bezier(0.4, 0, 0.2, 1);
		transition-property: scale, opacity;
		transition-duration: 150ms;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}
	.emdash-inline-ui-tooltip[data-status="close"] {
		scale: 0.9;
		opacity: 0;
	}
	.emdash-inline-ui-tooltip[data-instant] {
		animation: none;
		transition-duration: 0ms;
	}
	.emdash-inline-ui-tooltip-arrow {
		position: absolute;
		display: block;
	}
	.emdash-inline-ui-tooltip-arrow[data-side="top"] {
		bottom: -8px;
		rotate: 180deg;
	}
	.emdash-inline-ui-tooltip-arrow[data-side="bottom"] {
		top: -8px;
	}
	.emdash-inline-ui-tooltip-arrow-fill {
		fill: var(--emdash-ui-raised);
	}
	.emdash-inline-ui-tooltip-arrow-shadow {
		fill: var(--emdash-ui-tip-shadow);
	}
	.emdash-inline-ui-tooltip-arrow-stroke {
		fill: var(--emdash-ui-tip-stroke);
	}
	.emdash-inline-ui .emdash-slash-menu {
		display: flex;
		width: 320px;
		max-width: calc(100vw - 16px);
		flex-direction: column;
		overflow: hidden;
	}
	.emdash-slash-menu-viewport {
		min-height: 0;
		flex: 1;
		overflow-y: auto;
		overscroll-behavior: contain;
		padding: 4px;
		scroll-padding-block: 4px;
	}
	.emdash-slash-menu-group-label {
		padding: 6px 8px 2px;
		color: var(--emdash-ui-subtle);
		font-size: 12px;
		font-weight: 500;
		line-height: 16px;
		user-select: none;
	}
	[role="group"] + [role="group"] > .emdash-slash-menu-group-label {
		padding-block-start: 12px;
	}
	.emdash-slash-menu-item {
		display: flex;
		width: 100%;
		height: 32px;
		align-items: center;
		gap: 10px;
		padding: 0 8px;
		border: 0;
		border-radius: 6px;
		background: transparent;
		color: var(--emdash-ui-text);
		cursor: default;
		outline: none;
		text-align: start;
	}
	.emdash-slash-menu-item[aria-current="true"] {
		background: var(--emdash-ui-tint);
	}
	.emdash-slash-menu-icon {
		width: 18px;
		height: 18px;
		color: var(--emdash-ui-subtle);
	}
	.emdash-slash-menu-title {
		min-width: 0;
		flex: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.emdash-slash-menu-markdown {
		flex: none;
		padding-inline-start: 12px;
		color: var(--emdash-ui-subtle);
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
		font-size: 12px;
		line-height: 16px;
	}
	.emdash-slash-menu-empty {
		margin: 0;
		padding: 6px 8px;
		color: var(--emdash-ui-subtle);
	}
	.emdash-slash-menu-footer {
		display: flex;
		flex: none;
		align-items: center;
		gap: 12px;
		padding: 8px 12px;
		border-block-start: 1px solid var(--emdash-ui-hairline);
		color: var(--emdash-ui-subtle);
		font-size: 12px;
		line-height: 16px;
	}
	.emdash-slash-menu-footer-text {
		min-width: 0;
		flex: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.emdash-inline-ui-sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip-path: inset(50%);
		white-space: nowrap;
	}
	@media (max-width: 639px) {
		.emdash-inline-ui-text-button {
			width: 32px;
			padding-inline: 0;
		}
		.emdash-inline-ui-text-button-label {
			position: absolute;
			width: 1px;
			height: 1px;
			overflow: hidden;
			clip-path: inset(50%);
			white-space: nowrap;
		}
	}
	@media (pointer: coarse) {
		.emdash-inline-ui-button,
		.emdash-inline-ui-trigger,
		.emdash-inline-ui-input {
			height: 44px;
		}
		/* iOS zooms the page into a field with smaller text. */
		.emdash-inline-ui-input {
			font-size: 16px;
		}
		.emdash-inline-ui-button,
		.emdash-inline-ui-trigger[data-icon-only] {
			width: 44px;
		}
		.emdash-inline-ui-menu-item,
		.emdash-slash-menu-item {
			height: 44px;
		}
		.emdash-slash-menu-esc {
			display: none;
		}
	}
	@media (max-width: 639px) and (pointer: coarse) {
		.emdash-inline-ui-text-button {
			width: 44px;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.emdash-inline-ui-menu,
		.emdash-inline-ui-tooltip,
		.emdash-inline-ui .emdash-slash-menu {
			animation: none;
			transition: none;
		}
	}
`,Ka=/(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/,qa=c.create({name:`image`,addOptions(){return{inline:!1,allowBase64:!1,HTMLAttributes:{},resize:!1}},inline(){return this.options.inline},group(){return this.options.inline?`inline`:`block`},draggable:!0,addAttributes(){return{src:{default:null},alt:{default:null},title:{default:null},width:{default:null},height:{default:null}}},parseHTML(){return[{tag:this.options.allowBase64?`img[src]`:`img[src]:not([src^="data:"])`}]},renderHTML({HTMLAttributes:e}){return[`img`,y(this.options.HTMLAttributes,e)]},parseMarkdown:(e,t)=>t.createNode(`image`,{src:e.href,title:e.title,alt:e.text}),renderMarkdown:e=>{let t=e.attrs?.src??``,n=e.attrs?.alt??``,r=e.attrs?.title??``;return r?`![${n}](${t} "${r}")`:`![${n}](${t})`},addNodeView(){if(!this.options.resize||!this.options.resize.enabled||typeof document>`u`)return null;let{directions:e,minWidth:t,minHeight:n,alwaysPreserveAspectRatio:r}=this.options.resize,i=new Set([`src`,`width`,`height`]);return({node:a,getPos:o,HTMLAttributes:s,editor:c})=>{let l=document.createElement(`img`);l.draggable=!1;let u=y(this.options.HTMLAttributes,s);Object.entries(u).forEach(([e,t])=>{if(t!=null)switch(e){case`src`:case`width`:case`height`:break;default:l.setAttribute(e,t)}}),u.src!==null&&(l.src=u.src);let d={...s},f=e=>{typeof e==`string`&&e!==``?l.getAttribute(`src`)!==e&&(l.src=e):(l.hasAttribute(`src`)&&l.removeAttribute(`src`),l.src!==``&&(l.src=``))};f(s.src);let p=new E({element:l,editor:c,node:a,getPos:o,onResize:(e,t)=>{l.style.width=`${e}px`,l.style.height=`${t}px`},onCommit:(e,t)=>{let n=o();n!==void 0&&this.editor.chain().setNodeSelection(n).updateAttributes(this.name,{width:e,height:t}).run()},onUpdate:e=>{if(e.type!==a.type)return!1;let t=c.extensionManager.attributes.filter(t=>t.type===e.type.name),n=P(e,t);return Object.keys(d).forEach(e=>{!i.has(e)&&!(e in n)&&l.removeAttribute(e)}),Object.entries(n).forEach(([e,t])=>{i.has(e)||(t==null?l.removeAttribute(e):l.setAttribute(e,t))}),f(n.src),d=n,!0},options:{directions:e,min:{width:t,height:n},preserveAspectRatio:r===!0}}),m=p.dom,h=()=>{m.style.visibility=``,m.style.pointerEvents=``};return m.style.visibility=`hidden`,m.style.pointerEvents=`none`,l.complete&&l.naturalWidth>0?h():(l.onload=h,l.onerror=h),p}},addCommands(){return{setImage:e=>({commands:t})=>t.insertContent({type:this.name,attrs:e})}},addInputRules(){return[ne({find:Ka,type:this.type,getAttributes:e=>{let[,,t,n,r]=e;return{src:n,alt:t,title:r}}})]}}),Ja=`/_emdash/api`,Ya=`/_emdash/admin/media`,Xa=9,Za=3,Qa=50,$a=240,eo=8,to=600,no=/auto|scroll|overlay/,ro=new Set([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`PageUp`,`PageDown`,`Home`,`End`,` `]),io={id:`local`,name:`Library`};function ao(e){return typeof e==`object`&&!!e}function $(e){return typeof e==`string`&&e.trim()?e:void 0}function oo(e){return typeof e==`number`&&Number.isFinite(e)&&e>0?e:null}async function so(e,t){let n=await fetch(e,{credentials:`same-origin`,headers:{"X-EmDash-Request":`1`},signal:t});if(!n.ok)throw Error(`Media request failed with status ${n.status}`);let r=await n.json();if(!ao(r)||!ao(r.data))throw Error(`Unexpected media response`);return r.data}function co(e,t){return!e.startsWith(`/_emdash/api/media/file/`)||t===`image/svg+xml`?e:`/_image?${new URLSearchParams({href:new URL(e,window.location.origin).href,w:String($a),f:`webp`})}`}function lo(e,t){e.dataset.original===void 0&&t&&(e.dataset.original=``,e.src=t)}function uo(e,t){if(!ao(e))return null;let n=$(e.id);if(!n)return null;let r=ao(e.meta)?e.meta:{},i=t.id===io.id,a=$(e.storageKey),o=(i?$(e.url)??(a&&`/_emdash/api/media/file/${a}`):$(e.previewUrl))??``;return{id:n,name:$(e.filename)??``,thumbnail:i?co(o,$(e.mimeType)??``):o,original:o,chosen:{src:o,alt:$(e.alt)?.trim()??null,mediaId:n,provider:i?`local`:t.id===`external-url`?`external`:t.id,width:oo(e.width),height:oo(e.height),blurhash:$(e.blurhash)??$(r.blurhash)??null,dominantColor:$(e.dominantColor)??$(r.dominantColor)??null}}}async function fo(e,t,n){let r=e.id===io.id,i=new URLSearchParams({mimeType:`image/`}),a;r?(i.set(`page`,String(t)),i.set(`limit`,String(Xa)),a=`${Ja}/media?${i}`):(i.set(`limit`,String(Qa)),a=`${Ja}/media/providers/${encodeURIComponent(e.id)}?${i}`);let o=await so(a,n),s=(Array.isArray(o.items)?o.items:[]).flatMap(t=>uo(t,e)??[]);return{sourceId:e.id,page:r?t:1,images:s,total:r&&typeof o.totalCount==`number`?o.totalCount:s.length,more:!r&&$(o.nextCursor)!==void 0}}function po(){let[e,t]=V.useState([io]);return V.useEffect(()=>{let e=new AbortController;return(async()=>{try{let n=await so(`${Ja}/media/providers`,e.signal),r=(Array.isArray(n.items)?n.items:[]).flatMap(e=>{if(!ao(e))return[];let t=$(e.id),n=ao(e.capabilities)?e.capabilities:{};return!t||t===io.id||n.browse===!1?[]:[{id:t,name:$(e.name)??t}]});!e.signal.aborted&&r.length>0&&t([io,...r])}catch{}})(),()=>e.abort()},[]),e}function mo(e,t){let[n,r]=V.useState(0),[i,a]=V.useState(null),o=e.id===io.id,s=[e.id,o?t:1,n].join(`
`);V.useEffect(()=>{let n=new AbortController;return(async()=>{try{let r=await fo(e,t,n.signal);n.signal.aborted||a({key:s,listing:r})}catch{if(n.signal.aborted)return;a(e=>({key:s,listing:e?.listing,failed:!0}))}})(),()=>n.abort()},[s]);let c=i?.listing?.sourceId===e.id?i.listing:void 0,l=c!==void 0&&(!o||c.page===t);return{listing:c,loading:i?.key!==s,failed:i?.key===s&&i.failed===!0&&!l,retry:()=>r(e=>e+1)}}function ho(e,t,n,r){let i=Math.abs(r)>=Math.abs(n);for(let n=e instanceof Element?e:null;n&&n!==t;n=n.parentElement){let e=getComputedStyle(n);if(i?no.test(e.overflowY)&&n.scrollHeight>n.clientHeight:no.test(e.overflowX)&&n.scrollWidth>n.clientWidth)return!0}return!1}function go({icon:e,title:t,detail:n,children:r}){return(0,Z.jsxs)(`div`,{className:`emdash-inline-ui-picker-message`,children:[(0,Z.jsx)(e,{"aria-hidden":`true`}),(0,Z.jsx)(`strong`,{children:t}),n&&(0,Z.jsx)(`span`,{children:n}),r]})}function _o({uiRoot:e,reference:t,origin:n,gap:r,label:i,current:a,fromToolbar:s=!1,onChoose:c,onClose:l}){let u=V.useRef(null),d=V.useRef(!1),f=V.useRef(null),p=V.useRef(l);p.current=l;let m=V.useId(),h=po(),[g,v]=V.useState(io.id),y=h.find(e=>e.id===g)??io,x=y.id===io.id,S=y.id,[C,w]=V.useState({view:S,page:1}),T=C.view===S?C.page:1,{listing:E,loading:D,failed:O,retry:k}=mo(y,T),A=V.useRef(k);A.current=k,V.useEffect(()=>{let e=()=>{document.visibilityState===`visible`&&A.current()};return document.addEventListener(`visibilitychange`,e),()=>document.removeEventListener(`visibilitychange`,e)},[]);let j=E?.total??0,M=Math.max(1,Math.ceil(j/Xa)),P=Math.min(T,M),F=x?E?.page??P:P,I=E?x?E.images:E.images.slice((F-1)*Xa,F*Xa):[],ee=(F-1)*Xa,te=!E||I.length===0&&j>0,ne=!O&&!te&&j>0;V.useEffect(()=>{x&&E&&!D&&E.page>M&&w({view:S,page:M})},[x,E,D,M,S]);let L=`${S}\n${F}`,[z,re]=V.useState({view:L,index:-1}),ie=z.view===L&&z.index<I.length?z.index:-1,ae=e=>re({view:L,index:e}),[se,ce]=V.useState(null),{refs:B,elements:le,floatingStyles:ue,middlewareData:de,isPositioned:fe}=sa({open:!0,placement:`bottom-start`,strategy:`fixed`,transform:!1,middleware:[_e(r),Xe({padding:8}),Ve({padding:8}),ft({padding:8,apply:({availableHeight:e,elements:{floating:t}})=>{t.style.maxHeight=`${Math.max(0,e)}px`}}),ka(n)],whileElementsMounted:b});V.useLayoutEffect(()=>B.setPositionReference(t),[t,B]);let pe=V.useRef(!1);V.useEffect(()=>{let e=u.current;fe&&e&&((!pe.current||document.activeElement===document.body)&&(pe.current=!0,e.focus({preventScroll:!0})),ne&&!D&&document.activeElement===e&&e.querySelector(`[data-index="0"]`)?.focus({preventScroll:!0}))},[fe,ne,D,L]),V.useEffect(()=>{let e=t.getBoundingClientRect(),n=0,r=window.matchMedia?.(`(pointer: coarse)`).matches===!0,i=0,a=()=>{r&&(i=performance.now()+to)};a();let o=()=>{n=0;let r=t.getBoundingClientRect();if(performance.now()<i)e=r;else if(Math.abs(r.top-e.top)>eo||Math.abs(r.left-e.left)>eo){let e=document.activeElement,t=e===document.body||u.current?.contains(e);p.current(t?`scroll`:`blur`)}},s=e=>{e.target instanceof Node&&u.current?.contains(e.target)||(n||=requestAnimationFrame(o))},c=()=>{performance.now()<i&&a()},l=e=>{e.target instanceof HTMLInputElement&&u.current?.contains(e.target)&&a()};return document.addEventListener(`scroll`,s,{capture:!0,passive:!0}),document.addEventListener(`focusin`,l),document.addEventListener(`focusout`,l),window.addEventListener(`resize`,c),window.visualViewport?.addEventListener(`resize`,c),()=>{document.removeEventListener(`scroll`,s,{capture:!0}),document.removeEventListener(`focusin`,l),document.removeEventListener(`focusout`,l),window.removeEventListener(`resize`,c),window.visualViewport?.removeEventListener(`resize`,c),cancelAnimationFrame(n)}},[t]),V.useEffect(()=>{let e=le.floating;if(!e)return;let t=null,n=t=>{t.ctrlKey||ho(t.target,e,t.deltaX,t.deltaY)||t.preventDefault()},r=e=>{let n=e.touches[0];t=n?{x:n.clientX,y:n.clientY}:null},i=n=>{let r=n.touches[0];if(!r||!t||n.touches.length>1)return;let i=r.clientX-t.x,a=r.clientY-t.y;ho(n.target,e,i,a)||n.preventDefault()};return e.addEventListener(`wheel`,n,{passive:!1}),e.addEventListener(`touchstart`,r,{passive:!0}),e.addEventListener(`touchmove`,i,{passive:!1}),()=>{e.removeEventListener(`wheel`,n),e.removeEventListener(`touchstart`,r),e.removeEventListener(`touchmove`,i)}},[le.floating]),V.useEffect(()=>{let t=!1,n=n=>{let r=u.current,i=n.target instanceof Node?n.target:null,a=!(i&&r?.contains(i));d.current=a,t=n.pointerType!==`mouse`&&!(i&&e.contains(i)),a&&!r?.contains(document.activeElement)&&p.current(`blur`)},r=()=>{let e=document.activeElement;t&&e instanceof HTMLElement&&u.current?.contains(e)&&e.blur()};return document.addEventListener(`pointerdown`,n,!0),document.addEventListener(`pointerup`,r,!0),()=>{document.removeEventListener(`pointerdown`,n,!0),document.removeEventListener(`pointerup`,r,!0)}},[e]);let me=e=>{let t=e.relatedTarget;t instanceof Node&&e.currentTarget.contains(t)||(t instanceof Node||d.current?l(`blur`):document.hasFocus()&&queueMicrotask(()=>{let e=u.current,t=document.activeElement;e?.isConnected&&!e.contains(t)&&(t&&t!==document.body?p.current(`blur`):e.focus({preventScroll:!0}))}))},he=e=>{ae(e),u.current?.querySelector(`[data-index="${e}"]`)?.focus()},ge=e=>{ce(null);let t=Math.min(Math.max(1,Math.round(e)),M);if(!Number.isFinite(t)||t===P)return;let n=document.activeElement;n instanceof HTMLElement&&(n.dataset.index!==void 0||n.tagName===`BUTTON`&&n.closest(`.emdash-inline-ui-pagination`)&&(t===1||t===M))&&u.current?.focus({preventScroll:!0}),w({view:S,page:t})},ve=(e,t)=>{e.id!==y.id&&(t.focus(),v(e.id))},ye=()=>{u.current?.focus({preventScroll:!0}),k()},be=e=>{if(e.nativeEvent.isComposing)return;if(e.repeat&&e.key===`Enter`&&e.target instanceof HTMLElement&&e.target.dataset.index!==void 0){e.preventDefault();return}if(e.key===`Escape`){e.preventDefault(),l(`escape`);return}if(e.key===`Tab`){let t=[...e.currentTarget.querySelectorAll(`input, button, a[href]`)].filter(e=>e.tabIndex>=0&&!e.matches(`:disabled`));e.preventDefault();let n=t.findIndex(e=>e===document.activeElement);t[e.shiftKey?n<=0?t.length-1:n-1:(n+1)%t.length]?.focus();return}if(e.altKey||e.ctrlKey||e.metaKey)return;let t=e.target;if((t instanceof HTMLInputElement?e.key===`PageUp`||e.key===`PageDown`:ro.has(e.key)&&!(e.key===` `&&t instanceof HTMLButtonElement))&&e.preventDefault(),t===e.currentTarget){e.key.startsWith(`Arrow`)&&ne&&!D&&he(0);return}if(!(t instanceof HTMLElement)||t.dataset.index===void 0)return;let n=Number(t.dataset.index),r=I.length-1,i=getComputedStyle(e.currentTarget).direction===`rtl`?-1:1,a;switch(e.key){case`ArrowDown`:a=n+Za,a>r&&(a=Math.floor(n/Za)<Math.floor(r/Za)?r:n);break;case`ArrowUp`:a=n-Za;break;case`ArrowRight`:a=Math.min(r,Math.max(0,n+i));break;case`ArrowLeft`:a=Math.min(r,Math.max(0,n-i));break;case`Home`:a=0;break;case`End`:a=r;break;default:return}a>=0&&he(a)},xe=e=>{let t=getComputedStyle(e.currentTarget).direction===`rtl`?-1:1,n=h.findIndex(e=>e.id===y.id),r;switch(e.key){case`ArrowRight`:r=n+t;break;case`ArrowLeft`:r=n-t;break;case`Home`:r=0;break;case`End`:r=h.length-1;break;default:return}e.preventDefault(),r=(r+h.length)%h.length;let i=e.currentTarget.querySelectorAll(`[role="tab"]`)[r],a=h[r];i&&a&&(ve(a,i),i.focus())},Se=`Showing ${ee+1}–${ee+I.length} of ${j}${E?.more?`+`:``}`,Ce,we;return O?(Ce=`Images couldn't load`,we=(0,Z.jsx)(go,{icon:oe,title:Ce,children:(0,Z.jsx)(`button`,{type:`button`,className:`emdash-inline-ui-picker-action`,onClick:ye,children:`Try again`})})):te?(Ce=`Loading images`,we=(0,Z.jsx)(`div`,{"aria-hidden":`true`,className:`emdash-inline-ui-picker-grid`,children:Array.from({length:Xa},(e,t)=>(0,Z.jsx)(`span`,{className:`emdash-inline-ui-picker-tile`},t))})):j===0?(Ce=`No images yet`,we=x?(0,Z.jsx)(go,{icon:_,title:Ce,detail:`Images added to the media library show up here.`,children:(0,Z.jsxs)(`a`,{href:Ya,target:`_blank`,rel:`noopener noreferrer`,className:`emdash-inline-ui-picker-action`,children:[`Open media library`,(0,Z.jsx)(Re,{"aria-hidden":`true`}),(0,Z.jsx)(`span`,{className:`emdash-inline-ui-sr-only`,children:` (opens in a new tab)`})]})}):(0,Z.jsx)(go,{icon:_,title:Ce,detail:`Images added to ${y.name} show up here.`})):(Ce=Se,we=(0,Z.jsxs)(`div`,{id:m,role:`listbox`,"aria-label":`Images`,"aria-busy":D||void 0,className:`emdash-inline-ui-picker-grid`,children:[I.map((e,t)=>{let n=e.name||`Image`,r=a?.mediaId===e.id&&a.provider===e.chosen.provider;return(0,Z.jsxs)(`button`,{type:`button`,role:`option`,"aria-selected":t===ie,"aria-label":r?`${n} (current image)`:n,tabIndex:t===Math.max(ie,0)?0:-1,"data-index":t,"data-highlighted":t===ie?``:void 0,className:`emdash-inline-ui-picker-tile`,onPointerMove:e=>{if(t===ie)return;let n=document.activeElement;n instanceof HTMLElement&&n.dataset.index!==void 0?e.currentTarget.focus({preventScroll:!0}):ae(t)},onFocus:()=>{t!==ie&&ae(t)},onPointerDown:()=>{f.current=e.id},onClick:t=>{let n=f.current;f.current=null,!(t.detail>0&&n!==null&&n!==e.id)&&c(e.chosen)},children:[e.thumbnail&&(0,Z.jsx)(`img`,{src:e.thumbnail,alt:``,loading:`lazy`,decoding:`async`,draggable:!1,onError:t=>lo(t.currentTarget,e.original)},e.id),r&&(0,Z.jsx)(`span`,{className:`emdash-inline-ui-picker-badge`,children:(0,Z.jsx)(R,{weight:`bold`,"aria-hidden":`true`})})]},t)}),M>1&&Array.from({length:Xa-I.length},(e,t)=>(0,Z.jsx)(`span`,{"aria-hidden":`true`,className:`emdash-inline-ui-picker-filler`},`filler-${t}`))]})),(0,Z.jsx)(Bi,{root:e,children:(0,Z.jsxs)(`div`,{ref:e=>{u.current=e,B.setFloating(e)},role:`dialog`,"aria-label":i,tabIndex:-1,className:`emdash-inline-ui-picker`,style:{...ue,...Aa(de.transformOrigin),visibility:fe?void 0:`hidden`},...s?{[wa]:``}:{},onKeyDown:be,onMouseDown:e=>{e.target instanceof HTMLInputElement||e.preventDefault()},onBlur:me,children:[(0,Z.jsx)(`span`,{className:`emdash-inline-ui-sr-only`,role:`status`,children:Ce}),h.length>1&&(0,Z.jsx)(`div`,{role:`tablist`,"aria-label":`Image source`,className:`emdash-inline-ui-picker-tabs`,onKeyDown:xe,children:h.map(e=>(0,Z.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":e.id===y.id,"aria-controls":ne?m:void 0,tabIndex:e.id===y.id?0:-1,className:`emdash-inline-ui-picker-tab`,onClick:t=>ve(e,t.currentTarget),children:e.name},e.id))}),we,ne&&(0,Z.jsxs)(`div`,{className:`emdash-inline-ui-picker-foot`,children:[(0,Z.jsx)(`span`,{className:`emdash-inline-ui-picker-count`,"aria-hidden":`true`,children:Se}),(0,Z.jsxs)(`nav`,{className:`emdash-inline-ui-pagination`,"aria-label":`Image pages`,children:[(0,Z.jsx)(`button`,{type:`button`,"aria-label":`First page`,disabled:P<=1,onClick:()=>ge(1),children:(0,Z.jsx)(Qe,{"aria-hidden":`true`})}),(0,Z.jsx)(`button`,{type:`button`,"aria-label":`Previous page`,disabled:P<=1,onClick:()=>ge(P-1),children:(0,Z.jsx)(o,{"aria-hidden":`true`})}),(0,Z.jsx)(`input`,{"aria-label":`Page number`,inputMode:`numeric`,autoComplete:`off`,value:se??String(P),onChange:e=>ce(e.target.value),onKeyDown:e=>{e.key!==`Enter`||e.nativeEvent.isComposing||(e.preventDefault(),se!==null&&ge(Number(se)))},onBlur:()=>{se!==null&&ge(Number(se))}}),(0,Z.jsx)(`button`,{type:`button`,"aria-label":`Next page`,disabled:P>=M,onClick:()=>ge(P+1),children:(0,Z.jsx)(N,{"aria-hidden":`true`})}),(0,Z.jsx)(`button`,{type:`button`,"aria-label":`Last page`,disabled:P>=M,onClick:()=>ge(M),children:(0,Z.jsx)(Ie,{"aria-hidden":`true`})})]})]})]})})}var vo=`
	.emdash-inline-ui-picker {
		display: flex;
		width: 360px;
		max-width: calc(100vw - 16px);
		flex-direction: column;
		overflow: hidden;
		border-radius: 10px;
		background: var(--emdash-ui-surface);
		box-shadow: 0 0 0 1px var(--emdash-ui-line), var(--emdash-ui-shadow);
		outline: none;
		animation: emdash-inline-ui-menu-in 100ms cubic-bezier(0, 0, 0.2, 1);
	}
	.emdash-inline-ui-picker-tabs {
		display: flex;
		flex: none;
		gap: 2px;
		padding: 4px;
		overflow-x: auto;
		overscroll-behavior-x: contain;
		border-block-end: 1px solid var(--emdash-ui-hairline);
		scrollbar-width: none;
	}
	.emdash-inline-ui-picker-tab {
		flex: none;
		height: 28px;
		padding: 0 10px;
		border: 0;
		border-radius: 6px;
		background: transparent;
		color: var(--emdash-ui-subtle);
		cursor: pointer;
		font-size: 13px;
		outline: none;
	}
	.emdash-inline-ui-picker-tab:hover {
		color: var(--emdash-ui-text);
	}
	.emdash-inline-ui-picker-tab[aria-selected="true"] {
		background: var(--emdash-ui-tint);
		color: var(--emdash-ui-text);
		font-weight: 500;
	}
	.emdash-inline-ui-picker-tab:focus-visible {
		box-shadow: 0 0 0 2px var(--emdash-ui-brand);
	}
	/* Rows keep their tiles' height and the grid scrolls, rather than squeezing them. */
	.emdash-inline-ui-picker-grid {
		display: grid;
		min-height: 0;
		flex: 0 1 auto;
		grid-template-columns: repeat(${Za}, minmax(0, 1fr));
		grid-auto-rows: max-content;
		gap: 4px;
		padding: 4px;
		overflow-y: auto;
		overscroll-behavior: contain;
		scroll-padding-block: 4px;
	}
	.emdash-inline-ui-picker-tile {
		position: relative;
		aspect-ratio: 1;
		padding: 0;
		overflow: hidden;
		border: 0;
		border-radius: 6px;
		background: var(--emdash-ui-tint);
		cursor: pointer;
		outline: none;
	}
	.emdash-inline-ui-picker-tile img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.emdash-inline-ui-picker-tile::after {
		content: "";
		position: absolute;
		inset: 0;
		border-radius: inherit;
		box-shadow: inset 0 0 0 1px light-dark(rgb(0 0 0 / 0.06), rgb(255 255 255 / 0.07));
		pointer-events: none;
	}
	.emdash-inline-ui-picker-tile[data-highlighted]::after {
		box-shadow: inset 0 0 0 2px var(--emdash-ui-brand), inset 0 0 0 4px var(--emdash-ui-surface);
	}
	.emdash-inline-ui-picker-filler {
		aspect-ratio: 1;
		visibility: hidden;
	}
	.emdash-inline-ui-picker-badge {
		position: absolute;
		inset-block-start: 6px;
		inset-inline-end: 6px;
		display: grid;
		width: 20px;
		height: 20px;
		place-items: center;
		border-radius: 999px;
		background: var(--emdash-ui-brand);
		box-shadow: 0 0 0 2px var(--emdash-ui-surface);
		color: #fff;
	}
	.emdash-inline-ui-picker-badge svg {
		width: 12px;
		height: 12px;
	}
	.emdash-inline-ui-picker-message {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2px;
		padding: 28px 16px;
		color: var(--emdash-ui-subtle);
		text-align: center;
	}
	.emdash-inline-ui-picker-message > svg {
		width: 28px;
		height: 28px;
		margin-block-end: 6px;
	}
	.emdash-inline-ui-picker-message strong {
		max-width: 100%;
		color: var(--emdash-ui-text);
		font-weight: 500;
		overflow-wrap: anywhere;
	}
	.emdash-inline-ui-picker-action {
		display: inline-flex;
		height: 32px;
		align-items: center;
		gap: 6px;
		margin-block-start: 12px;
		padding: 0 10px;
		border: 0;
		border-radius: 6px;
		background: transparent;
		box-shadow: 0 0 0 1px var(--emdash-ui-line);
		color: var(--emdash-ui-text);
		cursor: pointer;
		outline: none;
	}
	.emdash-inline-ui-picker-action:hover {
		background: var(--emdash-ui-tint);
	}
	.emdash-inline-ui-picker-action:focus-visible {
		box-shadow: 0 0 0 2px var(--emdash-ui-brand);
	}
	.emdash-inline-ui-picker-action > svg {
		width: 14px;
		height: 14px;
		color: var(--emdash-ui-subtle);
	}
	.emdash-inline-ui-picker-foot {
		display: flex;
		flex: none;
		align-items: center;
		gap: 12px;
		padding-block: 6px;
		padding-inline: 12px 6px;
		border-block-start: 1px solid var(--emdash-ui-hairline);
		color: var(--emdash-ui-subtle);
		font-size: 12px;
		line-height: 16px;
	}
	.emdash-inline-ui-picker-count {
		min-width: 0;
		flex: 1;
		overflow: hidden;
		font-variant-numeric: tabular-nums;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.emdash-inline-ui-pagination {
		display: flex;
		flex: none;
		overflow: hidden;
		border-radius: 8px;
		box-shadow: 0 0 0 1px var(--emdash-ui-line);
	}
	.emdash-inline-ui-pagination > button,
	.emdash-inline-ui-pagination > input {
		width: 28px;
		height: 28px;
		padding: 0;
		border: 0;
		background: var(--emdash-ui-surface);
		color: var(--emdash-ui-text);
		outline: none;
	}
	.emdash-inline-ui-pagination > :not(:first-child) {
		border-inline-start: 1px solid var(--emdash-ui-line);
	}
	.emdash-inline-ui-pagination > button {
		display: grid;
		place-items: center;
		cursor: pointer;
	}
	.emdash-inline-ui-pagination > button:hover:not(:disabled) {
		background: var(--emdash-ui-tint);
	}
	.emdash-inline-ui-pagination > button:disabled {
		color: var(--emdash-ui-placeholder);
		cursor: default;
	}
	.emdash-inline-ui-pagination > :focus-visible {
		box-shadow: inset 0 0 0 2px var(--emdash-ui-brand);
	}
	.emdash-inline-ui-pagination svg {
		width: 14px;
		height: 14px;
	}
	.emdash-inline-ui-pagination:dir(rtl) svg {
		scale: -1 1;
	}
	.emdash-inline-ui-pagination > input {
		width: 36px;
		font-size: 12px;
		font-variant-numeric: tabular-nums;
		text-align: center;
	}
	@media (pointer: coarse) {
		.emdash-inline-ui-pagination > button,
		.emdash-inline-ui-pagination > input {
			width: 40px;
			height: 40px;
		}
		/* iOS zooms the page into a field with smaller text. */
		.emdash-inline-ui-pagination > input {
			font-size: 16px;
		}
		.emdash-inline-ui-picker-tab,
		.emdash-inline-ui-picker-action {
			height: 44px;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.emdash-inline-ui-picker {
			animation: none;
		}
	}
`,yo=`emdashInlineImageToolbar`,bo=`button:not([disabled]), a[href], input`,xo=100,So=`Add a caption`;function Co(e){return e===`left`||e===`center`||e===`right`||e===`wide`||e===`full`?e:void 0}function wo(e){return typeof e==`number`&&Number.isFinite(e)&&e>0?e:void 0}function To(e){let t=wo(e.width),n=wo(e.height),r=wo(e.displayWidth),i=wo(e.displayHeight),a=t&&n?t/n:void 0;return r&&i?{width:r,height:i}:r&&a?{width:r,height:Math.round(r/a)}:i&&a?{width:Math.round(i*a),height:i}:{width:t,height:n}}function Eo(e){let{selection:t}=e;return t instanceof me&&t.node.type.name===`image`?t:null}function Do(e,t){let n=e.view.nodeDOM(t);return n instanceof HTMLElement?n.querySelector(`figcaption textarea`):null}function Oo(e){e.view.dispatch(e.state.tr.setMeta(`focus`,{event:void 0}).setMeta(`addToHistory`,!1))}function ko(e,t,n){e.commands.command(({tr:e,state:r})=>{let i=r.schema.nodes.image;if(!i)return!1;let a=e.doc.resolve(Math.min(t,e.doc.content.size)),o=i.create(n),s=a.parent.isTextblock&&a.parent.childCount===0,c=a.depth;for(;c>1&&a.node(c-1).childCount===1;)c--;let l;if(a.depth===0)l=a.pos,e.insert(l,o);else if(s&&c===1)l=a.before(1),e.replaceWith(l,a.after(1),o);else if(a.depth===1&&a.parentOffset===0)l=a.before(1),e.insert(l,o);else{let t=a.after(1);s&&e.deleteRange(a.before(),a.after()),l=e.mapping.map(t),e.insert(l,o)}return e.setSelection(me.create(e.doc,l)).scrollIntoView(),!0})}function Ao(e,t){let n=wo(e.width),r=wo(e.height),i=wo(t.width),a=wo(t.height);return!n||!r||!i||!a?!1:Math.abs(n*a-r*i)<=Math.max(i,a)}function jo(e,t,n){e.commands.command(({tr:e})=>{let r=e.doc.nodeAt(t);if(r?.type.name!==`image`)return!1;let i=r.attrs,a={width:i.displayWidth,height:i.displayHeight},o=Ao(a,i)&&!Ao(a,n);return e.setNodeMarkup(t,void 0,{...i,...n,title:null,...o?{displayHeight:null}:{}}),e.setSelection(me.create(e.doc,t)),!0})}function Mo(e,t){if(e.pointerType!==`mouse`)return;let n=e.currentTarget.closest(`[draggable]`);n&&(n.draggable=t)}function No(e){e.dataTransfer.types.includes(`Files`)&&e.preventDefault()}function Po({node:e,editor:t,getPos:n,updateAttributes:r}){let i=e.attrs,a=typeof i.src==`string`?i.src:``,o=typeof i.alt==`string`?i.alt:``,s=typeof i.title==`string`&&i.title?i.title:void 0,c=typeof i.caption==`string`?i.caption:``,l=Co(i.alignment),{width:u,height:d}=To(i),f=V.useRef(null);V.useEffect(()=>{let e=f.current;if(!e)return;let t=e=>{e.dataTransfer?.types.includes(`Files`)||e.stopPropagation()};return e.addEventListener(`dragover`,t),e.addEventListener(`drop`,t),()=>{e.removeEventListener(`dragover`,t),e.removeEventListener(`drop`,t)}},[]);let p=()=>{let e=n();typeof e==`number`&&t.commands.setNodeSelection(e)},m=e=>{e.target instanceof Element&&e.target.closest(`figcaption`)||p()};return(0,Z.jsxs)(He,{as:`figure`,className:l?`emdash-image emdash-image--align-${l}`:`emdash-image`,onPointerDown:e=>{e.pointerType===`mouse`&&e.isPrimary&&e.button===0&&m(e)},onClick:m,onDragEnter:No,onDragOver:No,children:[(0,Z.jsx)(`img`,{src:a,alt:o,title:s,width:u,height:d,draggable:!1,"data-drag-handle":``}),(0,Z.jsx)(`figcaption`,{"data-value":c||So,children:(0,Z.jsx)(`textarea`,{ref:f,rows:1,tabIndex:-1,dir:`auto`,value:c,placeholder:So,"aria-label":`Caption`,onChange:e=>r({caption:e.target.value}),onFocus:()=>{p(),Oo(t)},onKeyDown:r=>{if(r.nativeEvent.isComposing||r.keyCode===229)return;let i=n();if(typeof i==`number`){if(r.key===`Enter`){r.preventDefault();let n=i+e.nodeSize;t.chain().insertContentAt(n,{type:`paragraph`}).focus(n+1).run()}else(r.key===`Escape`||r.key===`Tab`&&r.shiftKey)&&(r.preventDefault(),t.commands.setNodeSelection(i),t.view.focus())}},onPointerEnter:e=>Mo(e,!1),onPointerLeave:e=>Mo(e,!0)})})]})}var Fo=qa.extend({addAttributes(){return{...this.parent?.(),mediaId:{default:null},provider:{default:null},width:{default:null},height:{default:null},displayWidth:{default:null},displayHeight:{default:null},caption:{default:null},blurhash:{default:null},dominantColor:{default:null},alignment:{default:null,rendered:!1},link:{default:null,rendered:!1}}},addNodeView(){return pt(Po)},addKeyboardShortcuts(){return{Tab:({editor:e})=>{let t=Eo(e.state),n=t&&Do(e,t.from);return n?(n.focus(),!0):!1}}}});function Io({value:e,onChange:t,onSave:n,onCancel:r}){let i=V.useRef(null);return V.useEffect(()=>{i.current?.focus(),i.current?.select()},[]),(0,Z.jsxs)(`div`,{className:`emdash-inline-ui-field-row`,children:[(0,Z.jsx)(`input`,{ref:i,type:`text`,dir:`auto`,autoComplete:`off`,className:`emdash-inline-ui-input`,value:e,placeholder:`Describe the image`,"aria-label":`Alt text`,onChange:e=>t(e.target.value),onKeyDown:e=>{e.nativeEvent.isComposing||e.keyCode===229||(e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r()))}}),(0,Z.jsx)(Fa,{label:`Cancel`,onClick:r,children:(0,Z.jsx)(C,{})}),(0,Z.jsx)(Fa,{label:`Save alt text`,onClick:n,children:(0,Z.jsx)(R,{})})]})}function Lo({editor:e,uiRoot:t,scrollTarget:n,onReplaced:r}){let[i,a]=V.useState(`controls`),[o,s]=V.useState(!1),[c,l]=V.useState(!1),[d,f]=V.useState(``),p=V.useRef(null),m=V.useRef(null),h=V.useRef(-1/0),g=Ee({editor:e,selector:({editor:e})=>{let t=Eo(e.state),n=t?.node.attrs;return{position:t?.from??null,alt:typeof n?.alt==`string`?n.alt:``,mediaId:typeof n?.mediaId==`string`?n.mediaId:``,provider:typeof n?.provider==`string`&&n.provider?n.provider:`local`}}}),_=g.alt.trim()!==``;V.useEffect(()=>{a(`controls`),s(!1)},[g.position]),V.useEffect(()=>{c&&!e.isDestroyed&&e.view.dispatch(e.state.tr.setMeta(yo,`updatePosition`))},[e,i,c]);let v=V.useCallback(()=>t,[t]),y=V.useMemo(()=>({strategy:`absolute`,placement:`top`,offset:10,flip:{padding:8},shift:{padding:8},size:{padding:8,apply:({availableWidth:e,elements:t})=>{t.floating.style.maxWidth=`${Math.max(0,e)}px`}},scrollTarget:n,onShow:()=>{l(!0),performance.now()-h.current>xo&&Wa(p.current?.firstElementChild)},onHide:()=>{h.current=performance.now(),l(!1),a(`controls`),s(!1)}}),[n]),b=V.useCallback(({editor:e,element:n,state:r,view:i})=>{let a=Eo(r);if(!e.isEditable||!a)return!1;let o=n.ownerDocument.activeElement,s=i.hasFocus()||n.contains(o)||!!o?.closest(`[data-emdash-bubble-popup]`)||!!i.nodeDOM(a.from)?.contains(o);return s&&Oa(n,t),s},[t]),S=V.useMemo(()=>({getBoundingClientRect:()=>p.current?.getBoundingClientRect()??new DOMRect,get contextElement(){return p.current??void 0}}),[]),C=V.useCallback(()=>m.current?.getBoundingClientRect()??new DOMRect,[]),w=()=>{m.current?.focus({preventScroll:!0}),s(!1)},T=t=>{t.mediaId===g.mediaId&&t.provider===g.provider?w():(g.position!==null&&jo(e,g.position,t),w(),r())},E=()=>{let e=document.activeElement;(p.current?.contains(e)||e?.closest(`[data-emdash-bubble-popup]`))&&p.current?.focus({preventScroll:!0}),s(!1),f(g.alt),a(`alt`)},D=()=>{e.view.focus(),a(`controls`)};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Te,{ref:p,editor:e,pluginKey:yo,appendTo:v,updateDelay:0,options:y,shouldShow:b,role:`toolbar`,"aria-label":`Image controls`,className:`emdash-inline-ui-bar emdash-image-bubble-menu`,onMouseDown:()=>{e.view.hasFocus()||e.view.dispatch(e.state.tr.setMeta(`blur`,{event:{relatedTarget:p.current}}))},onKeyDown:t=>{if(t.key===`Tab`&&t.shiftKey&&g.position!==null){let n=Do(e,g.position),r=t.currentTarget.querySelector(bo);if(n&&document.activeElement===r){t.preventDefault(),n.focus();return}}Ua(t,e)},children:(0,Z.jsx)(Ea.Provider,{value:c,children:(0,Z.jsx)(Na,{children:i===`alt`?(0,Z.jsx)(Io,{value:d,onChange:f,onSave:()=>{let t=d.trim();t!==g.alt.trim()&&e.commands.updateAttributes(`image`,{alt:t||null}),D()},onCancel:D}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ia,{label:`Replace`,icon:(0,Z.jsx)(x,{"aria-hidden":`true`}),expanded:o,buttonRef:m,onClick:()=>o?w():s(!0)}),(0,Z.jsx)(Ia,{label:`Alt text`,icon:(0,Z.jsx)(u,{"aria-hidden":`true`}),pressed:_,tooltip:_?g.alt.trim():`No description yet`,onClick:E}),(0,Z.jsx)(La,{}),(0,Z.jsx)(Fa,{label:`Delete image`,onClick:()=>{e.view.focus(),e.commands.deleteSelection()},children:(0,Z.jsx)(ht,{})})]})})})}),o&&g.position!==null&&(0,Z.jsx)(_o,{uiRoot:t,reference:S,origin:C,gap:4,label:`Replace image`,current:{provider:g.provider,mediaId:g.mediaId},fromToolbar:!0,onChoose:T,onClose:e=>e===`blur`?s(!1):w()})]})}var Ro=`
	.emdash-inline-editor .emdash-image {
		margin: 1.5rem 0;
	}
	.emdash-inline-editor .emdash-image img {
		max-width: 100%;
		height: auto;
	}
	.emdash-inline-editor .ProseMirror-selectednode > .emdash-image > img {
		outline: 2px solid oklch(57.72% 0.2324 260);
		outline-offset: 3px;
	}
	.emdash-inline-editor .emdash-image figcaption {
		display: grid;
		margin-top: 0.5rem;
		color: var(--emdash-caption-color, var(--color-muted, #666));
		font-size: 0.875rem;
		text-align: center;
	}
	/* An invisible copy of the text sizes the cell the field fills, so the field grows as it wraps. */
	.emdash-inline-editor .emdash-image figcaption::after,
	.emdash-inline-editor .emdash-image figcaption textarea {
		grid-area: 1 / 1;
		min-width: 0;
		margin: 0;
		padding: 0;
		border: 0;
		font: inherit;
		letter-spacing: inherit;
		line-height: inherit;
		text-align: inherit;
		white-space: pre-wrap;
		overflow-wrap: anywhere;
	}
	.emdash-inline-editor .emdash-image figcaption::after {
		content: attr(data-value) " ";
		visibility: hidden;
	}
	.emdash-inline-editor .emdash-image figcaption textarea {
		display: block;
		width: 100%;
		height: 100%;
		overflow: hidden;
		resize: none;
		background: transparent;
		color: inherit;
		outline: none;
	}
	.emdash-inline-editor .emdash-image figcaption textarea::placeholder {
		color: inherit;
		opacity: 0.6;
	}
	.emdash-inline-editor .emdash-image figcaption textarea:focus-visible {
		border-radius: 2px;
		outline: 2px solid color-mix(in srgb, currentColor 35%, transparent);
		outline-offset: 2px;
	}
	.emdash-inline-editor .emdash-image--align-left,
	.emdash-inline-editor .emdash-image--align-right {
		width: fit-content;
		max-width: 50%;
	}
	.emdash-inline-editor .emdash-image--align-left {
		float: left;
		margin: 0 1.5rem 1rem 0;
	}
	.emdash-inline-editor .emdash-image--align-right {
		float: right;
		margin: 0 0 1rem 1.5rem;
	}
	.emdash-inline-editor .emdash-image--align-center {
		width: fit-content;
		margin-inline: auto;
	}
	.emdash-inline-editor .emdash-image--align-wide,
	.emdash-inline-editor .emdash-image--align-full {
		width: 100%;
	}
	@media (max-width: 640px) {
		.emdash-inline-editor .emdash-image--align-left,
		.emdash-inline-editor .emdash-image--align-right {
			float: none;
			width: 100%;
			max-width: 100%;
			margin-inline: 0;
		}
	}
`,zo=`emdashInlineTextToolbar`,Bo=`emdashInlineLinkToolbar`,Vo=/auto|scroll|overlay/;function Ho(e){for(let t=e.parentElement;t&&t!==document.body;t=t.parentElement){let e=getComputedStyle(t);if(Vo.test(e.overflowY+e.overflowX))return t}}function Uo(e){let[t,n]=V.useState(null);return V.useEffect(()=>n(Ho(e.view.dom)),[e]),t}var Wo=[{mark:`bold`,label:`Bold`,icon:g},{mark:`italic`,label:`Italic`,icon:_t},{mark:`underline`,label:`Underline`,icon:et},{mark:`strike`,label:`Strikethrough`,icon:de},{mark:`code`,label:`Inline Code`,icon:D}],Go=[`bold`,`italic`,`underline`,`strike`,`code`,`subscript`,`superscript`],Ko=[{value:`left`,label:`Left`,icon:O},{value:`center`,label:`Center`,icon:Be},{value:`right`,label:`Right`,icon:m}],qo=/\S/,Jo=/^(?:https?:|mailto:|tel:|\/|#)/i,Yo=/^https?:\/\/(?:www\.)?/i,Xo=/^([a-z][a-z0-9+.-]*:|[/#?])/i,Zo=/^\S+\.\S{2,}$/,Qo=/^[^\s@/:]+@[^\s@/]+\.[^\s@/]{2,}$/,$o=/^(?:localhost|[a-z0-9-]+(?:\.[a-z0-9-]+)+):\d+(?:[/?#]|$)/i,es=/^(?:\.{1,2}\/|[^./]+\/)/;function ts(e){let t=e.trim();return $o.test(t)?`https://${t}`:Xo.test(t)||es.test(t)?t:Qo.test(t)?`mailto:${t}`:Zo.test(t)?`https://${t}`:t}function ns(e){let t=e.schema.marks.link;if(!t)return;let{$from:n,empty:r}=e.selection,i=t.isInSet(n.nodeAfter?.marks??[]);return r?i??t.isInSet(n.nodeBefore?.marks??[]):i}function rs(e,t){let n=ts(t);if(!e.can().setLink({href:n}))return!1;let r=e.chain().focus().extendMarkRange(`link`,ns(e.state)?.attrs).setLink({href:n});return e.state.selection.empty&&!e.isActive(`link`)?r.run():r.command(({tr:e,state:t})=>{let n=t.schema.marks.link;return n?(e.setSelection(mt.near(e.doc.resolve(e.selection.to),-1)),e.removeStoredMark(n),!0):!1}).run()}function is(e){e.chain().focus().extendMarkRange(`link`,ns(e.state)?.attrs).unsetLink().run()}function as(e){if(e.isDestroyed||!e.view.dom.isConnected)return null;let{state:t,view:n}=e,r=ns(t),i=r&&T(t.selection.$from,r.type,r.attrs);if(!i)return null;let a=n.domAtPos(i.from),o=n.domAtPos(i.to),s=document.createRange();s.setStart(a.node,a.offset),s.setEnd(o.node,o.offset);let c=n.coordsAtPos(t.selection.from),l=(c.top+c.bottom)/2,u=[...s.getClientRects()].filter(e=>e.width>0&&e.top<=l&&e.bottom>=l);if(u.length===0)return null;let d=Math.min(...u.map(e=>e.left)),f=Math.min(...u.map(e=>e.top)),p=Math.max(...u.map(e=>e.right)),m=Math.max(...u.map(e=>e.bottom));return new DOMRect(d,f,p-d,m-f)}function os(e){let t=getComputedStyle(e.view.dom).direction===`rtl`?`right`:`left`,n=new Set,r=!1,{from:i,to:a}=e.state.selection;e.state.doc.nodesBetween(i,a,(e,i,a)=>{if(e.type.name!==`paragraph`&&e.type.name!==`heading`)return!0;a?.type.name!==`doc`&&(r=!0);let o=e.attrs.textAlign;return n.add(o===`left`||o===`center`||o===`right`||o===`justify`?o:t),!1});let o=r||n.size===0;return{value:!o&&n.size===1?[...n][0]:void 0,unavailable:o}}function ss({editor:e,appendTo:t,scrollTarget:n,onEdit:r}){let i=Ee({editor:e,selector:({editor:e})=>{let t=ns(e.state)?.attrs.href;return typeof t==`string`?t:``}}),[a,o]=V.useState(!1),s=V.useRef(null),c=V.useCallback(()=>{let t=as(e);return t&&{getBoundingClientRect:()=>t,getClientRects:()=>[t]}},[e]);V.useLayoutEffect(()=>{a&&!e.isDestroyed&&e.view.dispatch(e.state.tr.setMeta(Bo,`updatePosition`))},[e,i,a]);let l=V.useMemo(()=>({strategy:`absolute`,placement:`bottom-start`,offset:6,flip:{padding:8},shift:{padding:8},scrollTarget:n,onShow:()=>{o(!0),Wa(s.current?.firstElementChild)},onHide:()=>o(!1)}),[n]),u=V.useCallback(({editor:e,element:n,state:r,oldState:i,view:a})=>{let o=e.isEditable&&r.selection instanceof mt&&r.selection.empty&&ns(r)!==void 0&&(e.isActive(`link`)||!i||i.doc.eq(r.doc))&&(a.hasFocus()||n.contains(n.ownerDocument.activeElement));return o&&Oa(n,t()),o},[t]);return(0,Z.jsx)(Te,{ref:s,editor:e,pluginKey:Bo,appendTo:t,getReferencedVirtualElement:c,updateDelay:0,options:l,shouldShow:u,role:`toolbar`,"aria-label":`Link options`,className:`emdash-inline-ui-bar emdash-inline-ui-link-preview emdash-link-bubble-menu`,onKeyDown:t=>Ua(t,e),children:(0,Z.jsx)(Ea.Provider,{value:a,children:(0,Z.jsxs)(Na,{children:[(0,Z.jsx)(ie,{className:`emdash-inline-ui-link-globe`,"aria-hidden":`true`}),Jo.test(i)?(0,Z.jsx)(`a`,{href:i,target:`_blank`,rel:`noopener noreferrer`,dir:`auto`,className:`emdash-inline-ui-link-url`,children:i.replace(Yo,``)}):(0,Z.jsx)(`span`,{dir:`auto`,className:`emdash-inline-ui-link-url`,children:i}),(0,Z.jsx)(La,{}),(0,Z.jsx)(Fa,{label:`Edit link`,onClick:r,children:(0,Z.jsx)(st,{})}),(0,Z.jsx)(Fa,{label:`Remove link`,onClick:()=>is(e),children:(0,Z.jsx)(ze,{})})]})})})}function cs({editor:e,linked:t,onDone:n}){let[r,i]=V.useState(()=>{let t=e.getAttributes(`link`).href;return typeof t==`string`?t:``}),[a,o]=V.useState(!1),s=V.useRef(null),c=V.useId();V.useEffect(()=>{s.current?.focus()},[]),V.useEffect(()=>{e.isDestroyed||e.view.dispatch(e.state.tr.setMeta(zo,`updatePosition`))},[e,a]);let l=()=>{is(e),n()},u=()=>{r.trim()===``?l():rs(e,r)?n():o(!0)};return(0,Z.jsxs)(`div`,{className:`emdash-inline-ui-link-edit`,children:[(0,Z.jsxs)(`div`,{className:`emdash-inline-ui-field`,children:[(0,Z.jsx)(`input`,{ref:s,type:`text`,inputMode:`url`,autoComplete:`off`,spellCheck:!1,className:`emdash-inline-ui-input`,value:r,placeholder:`Type or paste a URL`,"aria-label":`Link URL`,"aria-invalid":a||void 0,"aria-describedby":a?c:void 0,onChange:e=>{i(e.target.value),o(!1)},onKeyDown:t=>{t.nativeEvent.isComposing||(t.key===`Enter`?(t.preventDefault(),u()):t.key===`Escape`&&(t.preventDefault(),n(),e.commands.focus()))}}),a&&(0,Z.jsx)(`p`,{id:c,role:`alert`,className:`emdash-inline-ui-field-error`,children:`This link can't be used. Enter a web address, such as https://example.com.`})]}),(0,Z.jsx)(Fa,{label:`Apply link`,onClick:u,children:(0,Z.jsx)(R,{})}),t&&(0,Z.jsx)(Fa,{label:`Remove link`,onClick:l,children:(0,Z.jsx)(ze,{})})]})}var ls={unavailable:!0};function us({editor:e,uiRoot:t,onImageReplaced:n}){let[r,i]=V.useState(!1),[a,o]=V.useState(null),s=(e,t)=>o(n=>t?e:n===e?null:n),[c,u]=V.useState(!1),d=V.useRef(null),f=V.useRef(r);f.current=r,Ba(e,t);let p=Uo(e),m=Ee({editor:e,selector:({editor:e})=>({bold:e.isActive(`bold`),italic:e.isActive(`italic`),underline:e.isActive(`underline`),strike:e.isActive(`strike`),code:e.isActive(`code`),subscript:e.isActive(`subscript`),superscript:e.isActive(`superscript`),link:e.isActive(`link`),canTurnInto:gn(e),blockType:hn(e)})}),h=V.useCallback(()=>t,[t]),g=V.useMemo(()=>({strategy:`absolute`,placement:`top-start`,offset:8,flip:{padding:8},shift:{padding:8},size:{padding:8,apply:({availableWidth:e,elements:t})=>{t.floating.style.maxWidth=`${Math.max(0,e)}px`}},scrollTarget:p??void 0,onShow:()=>{let e=d.current?.firstElementChild;u(!0),Wa(e),f.current&&e?.querySelector(`input`)?.focus()},onHide:()=>{u(!1),i(!1),o(null)}}),[p]),_=V.useCallback(({editor:e,element:n,state:r,view:i})=>{let{selection:a}=r,o=n.ownerDocument.activeElement,s=n.contains(o)||!!o?.closest(`[data-emdash-bubble-popup]`),c=e.isEditable&&(a instanceof mt||a instanceof it)&&qo.test(r.doc.textBetween(a.from,a.to,` `))&&!e.isActive(`codeBlock`)&&(i.hasFocus()||s);return c&&Oa(n,t),c},[t]),v=dn.find(e=>e.id===m.blockType),y=[{label:`Turn into`,items:fn(m.blockType).map(t=>({label:t.label,icon:t.icon,role:`menuitemradio`,checked:t.id===m.blockType,onSelect:()=>Cn(e,t.id)}))}],b=a===`more`?os(e):ls,x=[{items:[{label:`Subscript`,icon:Ae,role:`menuitemcheckbox`,checked:m.subscript,onSelect:()=>e.chain().focus().toggleSubscript().run()},{label:`Superscript`,icon:Ne,role:`menuitemcheckbox`,checked:m.superscript,onSelect:()=>e.chain().focus().toggleSuperscript().run()}]},{label:`Align`,items:Ko.map(({value:t,label:n,icon:r})=>({label:n,icon:r,role:`menuitemradio`,checked:b.value===t,disabled:b.unavailable,onSelect:()=>e.chain().focus().setTextAlign(t).run()}))},{items:[{label:`Clear formatting`,icon:ke,onSelect:()=>{let t=e.chain().focus();for(let e of Go)t.unsetMark(e);t.run()}}]}];return p===null?null:(0,Z.jsxs)(Ta.Provider,{value:t,children:[(0,Z.jsx)(ss,{editor:e,appendTo:h,scrollTarget:p,onEdit:()=>{e.chain().focus().extendMarkRange(`link`,ns(e.state)?.attrs).run(),i(!0)}}),(0,Z.jsx)(Te,{ref:d,editor:e,pluginKey:zo,appendTo:h,updateDelay:120,options:g,shouldShow:_,role:`toolbar`,"aria-label":`Format selection`,className:`emdash-inline-ui-bar emdash-bubble-menu`,onKeyDown:t=>Ua(t,e),children:(0,Z.jsx)(Ea.Provider,{value:c,children:(0,Z.jsx)(Na,{children:r?(0,Z.jsx)(cs,{editor:e,linked:m.link,onDone:()=>i(!1)}):(0,Z.jsxs)(`div`,{className:`emdash-inline-ui-toolbar`,children:[m.canTurnInto&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ra,{editor:e,label:`Turn into`,placement:`bottom-start`,open:a===`turnInto`,onOpenChange:e=>s(`turnInto`,e),trigger:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`span`,{className:`emdash-inline-ui-trigger-label`,children:v?.label??`Turn into`}),(0,Z.jsx)(Je,{className:`emdash-inline-ui-caret`,"aria-hidden":`true`})]}),groups:y}),(0,Z.jsx)(La,{})]}),(0,Z.jsx)(Fa,{label:m.link?`Edit link`:`Add link`,active:m.link,onClick:()=>i(!0),children:(0,Z.jsx)(l,{})}),(0,Z.jsx)(La,{}),Wo.map(({mark:t,label:n,icon:r})=>(0,Z.jsx)(Fa,{label:n,active:m[t],onClick:()=>e.chain().focus().toggleMark(t).run(),children:(0,Z.jsx)(r,{})},t)),(0,Z.jsx)(La,{}),(0,Z.jsx)(Ra,{editor:e,label:`More formatting`,placement:`bottom-end`,iconOnly:!0,open:a===`more`,onOpenChange:e=>s(`more`,e),trigger:(0,Z.jsx)(ee,{weight:`bold`,"aria-hidden":`true`}),groups:x})]})})})}),(0,Z.jsx)(Lo,{editor:e,uiRoot:t,scrollTarget:p,onReplaced:n})]})}var ds=Symbol.for(`emdash:inline-code-block-lowlight`),fs=globalThis,ps=fs[ds]??(()=>{let e=lt(Ke);return e.register({dockerfile:nt}),fs[ds]=e,e})(),ms={highlight(e,t){return ps.highlight(ps.registered(e)?e:`plaintext`,t)},highlightAuto(e){return ps.highlight(`plaintext`,e)},listLanguages(){return ps.listLanguages()},registered(e){return ps.registered(e)}},hs=[{id:`plaintext`,label:`Plain text`,aliases:[`text`,`plain`,`txt`]},{id:`astro`,label:`Astro`},{id:`bash`,label:`Bash`,aliases:[`sh`,`shell`,`zsh`]},{id:`c`,label:`C`},{id:`cpp`,label:`C++`,aliases:[`c++`]},{id:`csharp`,label:`C#`,aliases:[`cs`,`c#`]},{id:`css`,label:`CSS`},{id:`diff`,label:`Diff`,aliases:[`patch`]},{id:`dockerfile`,label:`Dockerfile`,aliases:[`docker`]},{id:`go`,label:`Go`,aliases:[`golang`]},{id:`graphql`,label:`GraphQL`,aliases:[`gql`]},{id:`html`,label:`HTML`},{id:`java`,label:`Java`},{id:`javascript`,label:`JavaScript`,aliases:[`js`]},{id:`json`,label:`JSON`},{id:`jsx`,label:`JSX`},{id:`kotlin`,label:`Kotlin`,aliases:[`kt`]},{id:`lua`,label:`Lua`},{id:`markdown`,label:`Markdown`,aliases:[`md`]},{id:`mdx`,label:`MDX`},{id:`php`,label:`PHP`},{id:`python`,label:`Python`,aliases:[`py`]},{id:`ruby`,label:`Ruby`,aliases:[`rb`]},{id:`rust`,label:`Rust`,aliases:[`rs`]},{id:`scss`,label:`SCSS`,aliases:[`sass`]},{id:`sql`,label:`SQL`},{id:`svelte`,label:`Svelte`},{id:`swift`,label:`Swift`},{id:`toml`,label:`TOML`},{id:`tsx`,label:`TSX`},{id:`typescript`,label:`TypeScript`,aliases:[`ts`]},{id:`vue`,label:`Vue`},{id:`xml`,label:`XML`},{id:`yaml`,label:`YAML`,aliases:[`yml`]},{id:`zig`,label:`Zig`}];function gs(e){if(!e)return null;let t=e.trim().toLowerCase();if(!t)return null;for(let e of hs)if(e.id===t||e.aliases?.includes(t))return e;return null}var _s=/[^a-z0-9_-]+/g,vs=/^-+|-+$/g;function ys(e){if(!e)return;let t=e.trim();if(!t)return;let n=gs(t);return n?n.id:t.toLowerCase().replace(_s,`-`).replace(vs,``)||void 0}function bs(e){if(!e)return`Plain text`;let t=gs(e);return t?t.label:e}async function xs(e,t){if(navigator.clipboard?.writeText)try{await navigator.clipboard.writeText(e);return}catch{}if(!t())return;let n=document.activeElement,r=document.getSelection(),i=r?.rangeCount?r.getRangeAt(0).cloneRange():null,a=document.createElement(`textarea`);a.value=e,a.readOnly=!0,a.dataset.emdashClipboardFallback=``,a.style.position=`fixed`,a.style.opacity=`0`,document.body.append(a),a.select();try{if(!document.execCommand(`copy`))throw Error(`Clipboard copy failed`)}finally{a.remove(),n instanceof HTMLElement&&n.isConnected&&n.focus(),i&&(r?.removeAllRanges(),r?.addRange(i))}}function Ss({id:e}){return(0,Z.jsx)(`datalist`,{id:e,children:hs.map(e=>(0,Z.jsx)(`option`,{value:e.id,label:e.label},e.id))})}var Cs={height:`1.75rem`,width:`1.75rem`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,border:`none`,background:`transparent`,cursor:`pointer`,color:`inherit`,borderRadius:`0.25rem`};function ws(){return(0,Z.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,Z.jsx)(`polyline`,{points:`20 6 9 17 4 12`})})}function Ts(){return(0,Z.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,Z.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,Z.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]})}function Es({node:e,updateAttributes:t}){let[n,r]=V.useState(!1),[i,a]=V.useState(`idle`),o=typeof e.attrs.language==`string`?e.attrs.language:``,[s,c]=V.useState(o),l=V.useRef(null),u=V.useRef(null),d=V.useRef(null),f=V.useRef(0),p=V.useId();V.useEffect(()=>{n||c(o)},[o,n]);let m=V.useCallback(()=>{c(o),r(!0),setTimeout(()=>l.current?.focus(),0)},[o]),h=V.useCallback(()=>{r(!1),c(o)},[o]),g=V.useCallback(()=>{t({language:ys(s)??null}),r(!1)},[s,t]),_=e=>{e.key===`Enter`?(e.preventDefault(),g()):e.key===`Escape`&&(e.preventDefault(),h())};V.useEffect(()=>{if(!n)return;let e=e=>{let t=e.target instanceof Node?e.target:null;u.current&&t&&!u.current.contains(t)&&h()};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[n,h]),V.useEffect(()=>()=>{f.current+=1,d.current&&clearTimeout(d.current)},[]);let v=V.useCallback(async()=>{let t=++f.current;a(`idle`);try{if(await xs(e.textContent,()=>t===f.current),t!==f.current)return;a(`copied`),d.current&&clearTimeout(d.current),d.current=setTimeout(a,1500,`idle`)}catch{if(t!==f.current)return;d.current&&clearTimeout(d.current),a(`failed`)}},[e.textContent]),y=bs(o),b=i===`copied`,x=i===`failed`;return(0,Z.jsxs)(He,{className:`emdash-inline-code-block`,"data-language":o||void 0,children:[(0,Z.jsx)(Ss,{id:p}),(0,Z.jsx)(`pre`,{className:`emdash-code-block`,children:(0,Z.jsx)(ve,{as:`code`})}),(0,Z.jsxs)(`div`,{className:`emdash-inline-code-block-controls-wrap`,"data-persistent":n||i!==`idle`?`true`:`false`,contentEditable:!1,children:[n?(0,Z.jsxs)(`div`,{ref:u,className:`emdash-inline-code-block-popover`,style:{display:`flex`,alignItems:`center`,gap:`0.25rem`,padding:`0.25rem`,borderRadius:`0.375rem`,boxShadow:`0 4px 12px rgba(0,0,0,0.1)`},children:[(0,Z.jsx)(`input`,{ref:l,type:`text`,list:p,value:s,onChange:e=>c(e.target.value),onKeyDown:_,className:`emdash-inline-code-block-language-input`,placeholder:`Language`,"aria-label":`Language`,style:{height:`1.75rem`,fontSize:`0.75rem`,padding:`0 0.5rem`,borderRadius:`0.25rem`}}),(0,Z.jsx)(`button`,{type:`button`,onMouseDown:e=>e.preventDefault(),onClick:g,title:`Apply language`,"aria-label":`Apply language`,style:Cs,children:(0,Z.jsx)(ws,{})}),(0,Z.jsx)(`button`,{type:`button`,onMouseDown:e=>e.preventDefault(),onClick:h,title:`Cancel`,"aria-label":`Cancel`,style:Cs,children:(0,Z.jsx)(Ts,{})})]}):(0,Z.jsxs)(`div`,{className:`emdash-inline-code-block-chip`,style:{display:`inline-flex`,maxWidth:`min(100%, calc(100vw - 1rem))`,height:`26px`,fontSize:`13px`},children:[(0,Z.jsxs)(`button`,{type:`button`,onMouseDown:e=>e.preventDefault(),onClick:m,title:`Set language`,"aria-label":`Set language (current: ${y})`,style:{minWidth:0,flexShrink:1,display:`inline-flex`,alignItems:`center`,gap:`0.25rem`,padding:`0 0.5rem`,border:0,background:`transparent`,color:`inherit`,font:`inherit`},children:[(0,Z.jsx)(`span`,{style:{overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:o?y:`Set language`}),(0,Z.jsx)(`span`,{style:{flexShrink:0},"aria-hidden":`true`,children:`⌄`})]}),(0,Z.jsx)(`button`,{type:`button`,onMouseDown:e=>e.preventDefault(),onClick:v,title:x?`Retry copy`:b?`Copied`:`Copy code`,"aria-label":x?`Retry copy`:`Copy code`,style:{...Cs,height:`26px`,width:`26px`,flexShrink:0,borderInlineStart:`1px solid var(--emdash-code-border)`},children:(0,Z.jsx)(`span`,{"aria-hidden":`true`,children:b?(0,Z.jsx)(ws,{}):x?(0,Z.jsx)(Ts,{}):`⧉`})})]}),(0,Z.jsx)(`span`,{role:`status`,"aria-live":`polite`,style:{position:`absolute`,width:1,height:1,overflow:`hidden`,clipPath:`inset(50%)`},children:x?`Copy failed`:b?`Copied`:``})]})]})}var Ds=Pe.extend({addKeyboardShortcuts(){let e=this.parent?.()??{},t=()=>{let{$from:e,$to:t}=this.editor.state.selection;return e.parent.type===this.type&&e.sameParent(t)};return{...e,"Mod-a":()=>{if(!t())return!1;let{$from:e}=this.editor.state.selection;return this.editor.commands.setTextSelection({from:e.start(),to:e.end()})},Tab:n=>t()?e.Tab?.(n)??!1:!1,"Shift-Tab":n=>t()?e[`Shift-Tab`]?.(n)??!1:!1}},addNodeView(){return pt(Es)}}).configure({lowlight:ms,defaultLanguage:`plaintext`,enableTabIndentation:!0,tabSize:4}),Os=`Basic blocks`,ks=/\s+/,As=/^\s/;function js(e,t){let n=dn.find(t=>t.id===e);if(!n)throw Error(`Unknown block type: ${e}`);return{...t,title:n.label,icon:n.icon,markdown:n.markdown,category:Os,command:({editor:t,range:n})=>Cn(t,e,n)}}var Ms=[js(`paragraph`,{id:`paragraph`,description:`Start writing with plain text`,aliases:[`text`,`plain`,`p`]}),js(`heading1`,{id:`heading1`,description:`Large section heading`,aliases:[`h1`,`title`]}),js(`heading2`,{id:`heading2`,description:`Medium section heading`,aliases:[`h2`,`subtitle`]}),js(`heading3`,{id:`heading3`,description:`Small section heading`,aliases:[`h3`]}),js(`bulletList`,{id:`bulletList`,description:`Create a bullet list`,aliases:[`ul`,`unordered`,`bulleted`]}),js(`orderedList`,{id:`numberedList`,description:`Create a numbered list`,aliases:[`ol`,`ordered`]}),js(`blockquote`,{id:`quote`,description:`Insert a blockquote`,aliases:[`blockquote`,`cite`]}),js(`codeBlock`,{id:`codeBlock`,description:`Insert a code block`,aliases:[`pre`,`snippet`,"```"]}),{id:`divider`,title:`Divider`,description:`Insert a horizontal rule`,icon:St,aliases:[`hr`,`---`,`—-`,`separator`,`line`],markdown:`---`,category:Os,command:({editor:e,range:t})=>{e.chain().focus().deleteRange(t).setHorizontalRule().run()}},js(`heading4`,{id:`heading4`,description:`Smaller section heading`,aliases:[`h4`],searchOnly:!0}),js(`heading5`,{id:`heading5`,description:`Minor section heading`,aliases:[`h5`],searchOnly:!0}),js(`heading6`,{id:`heading6`,description:`Smallest section heading`,aliases:[`h6`],searchOnly:!0}),{id:`image`,title:`Image`,description:`Insert an image`,icon:F,aliases:[`img`,`photo`,`picture`],category:`Media`,command:({editor:e,range:t,openImagePicker:n})=>{e.chain().deleteRange(t).run(),n()}},{id:`htmlBlock`,title:`HTML`,description:`Insert raw HTML`,icon:Me,aliases:[`html`,`raw`,`markup`],category:`Advanced`,command:({editor:e,range:t})=>{e.chain().focus().deleteRange(t).insertContent({type:`htmlBlock`,attrs:{html:``,isolated:!0}}).run()}}];function Ns(e,t,n,r=[]){let i=e.toLowerCase().trim();if(!i)return 1;let a=t.toLowerCase(),o=r.map(e=>e.toLowerCase());if(o.includes(i))return 100;if(a===i)return 95;if(a.startsWith(i))return 90;let s=a.split(ks);if(i.length>1&&s.map(e=>e[0]).join(``).startsWith(i))return 85;if(s.some(e=>e.startsWith(i)))return 80;if(o.some(e=>e.startsWith(i)))return 70;if(i.length<3)return 0;if(a.includes(i))return 60;if(n.toLowerCase().includes(i))return 40;let c=0;for(let e of a)if(e===i[c]&&c++,c===i.length)return 20;return 0}function Ps(e){if(!e.trim()){let e=Ms.filter(e=>!e.searchOnly),t=[...new Set(e.map(e=>e.category))];return e.toSorted((e,n)=>t.indexOf(e.category)-t.indexOf(n.category))}return Ms.map((t,n)=>({item:t,order:n,score:Ns(e,t.title,t.description,[...t.aliases??[],...t.markdown?[t.markdown]:[]])})).filter(e=>e.score>0).toSorted((e,t)=>t.score-e.score||e.order-t.order).map(e=>e.item)}var Fs={isOpen:!1,items:[],selectedIndex:0,clientRect:null,range:null,query:``,dismissedSlashFrom:null};function Is(e){let{onStateChange:t,getState:n,onCommand:r,onDismiss:i}=e;return h.create({name:`slashCommands`,onTransaction(){let e=n();if(e.dismissedSlashFrom===null)return;let r=Math.min(e.dismissedSlashFrom+1,this.editor.state.doc.content.size);this.editor.state.doc.textBetween(e.dismissedSlashFrom,r)!==`/`&&t(e=>({...e,dismissedSlashFrom:null}))},addProseMirrorPlugins(){return[Bt({editor:this.editor,char:`/`,startOfLine:!0,decorationClass:`emdash-slash-query`,command:({props:e})=>r(e),items:({query:e})=>Ps(e),allowSpaces:!0,allow:({state:e,range:t})=>{if(n().dismissedSlashFrom===t.from)return!1;let r=e.doc.textBetween(t.from+1,t.to);return!As.test(r)&&(!ks.test(r)||Ps(r).length>0)},render:()=>({onStart:e=>{t({isOpen:!0,items:e.items,selectedIndex:0,clientRect:e.clientRect??null,range:e.range,query:e.query,dismissedSlashFrom:null})},onUpdate:e=>{t(t=>({...t,items:e.items,selectedIndex:0,clientRect:e.clientRect??null,range:e.range,query:e.query,dismissedSlashFrom:null}))},onKeyDown:({event:e})=>{if(e.key===`Escape`||e.key===`Tab`)return i(),e.key===`Escape`;let{items:a,selectedIndex:o}=n();if(e.key===`ArrowUp`||e.key===`ArrowDown`){if(a.length===0)return!0;let n=e.key===`ArrowUp`?-1:1;return t(e=>({...e,selectedIndex:(e.selectedIndex+n+a.length)%a.length})),!0}if(e.key===`Enter`){let e=a[o];return e?(r(e),!0):!1}return!1},onExit:()=>{t(e=>({...e,isOpen:!1}))}})})]}})}function Ls({editor:e,uiRoot:t,state:n,onCommand:r,onClose:i,setSelectedIndex:a}){let o=V.useRef(null),s=V.useRef(null),{refs:c,floatingStyles:l,context:u,isPositioned:d,middlewareData:f}=sa({open:n.isOpen,placement:`bottom-start`,strategy:`fixed`,transform:!1,middleware:[_e(6),Xe({padding:8,fallbackAxisSideDirection:`none`}),Ve({padding:8}),ft({padding:8,apply:({availableHeight:e,elements:t})=>{t.floating.style.maxHeight=`${Math.min(336,Math.max(0,e))}px`}}),at(),ka()],whileElementsMounted:b}),{isMounted:p,status:m}=Sa(u,{duration:{open:100,close:75}}),{clientRect:h}=n,g=V.useRef(null);V.useLayoutEffect(()=>{c.setPositionReference(h?{getBoundingClientRect:()=>(g.current=h()??g.current,g.current??new DOMRect),contextElement:e.view.dom}:null)},[h,e,c]);let _=V.useRef(null);V.useEffect(()=>{if(!n.isOpen)return;let e=_.current===n.selectedIndex;if(_.current=null,e)return;let t=o.current,r=t?.querySelector(`[data-index="${n.selectedIndex}"]`);if(!t||!r)return;if(n.selectedIndex===0){t.scrollTop=0;return}let i=r.previousElementSibling,a=(i?.classList.contains(`emdash-slash-menu-group-label`)?i:r).getBoundingClientRect().top,{bottom:s}=r.getBoundingClientRect(),c=t.getBoundingClientRect(),l=Number.parseFloat(getComputedStyle(t).scrollPaddingTop)||0;a<c.top+l?t.scrollTop-=c.top+l-a:s>c.bottom-l&&(t.scrollTop+=s-(c.bottom-l))},[n.selectedIndex,n.isOpen]);let v=V.useRef(!1);if(V.useEffect(()=>{n.isOpen||(v.current=!1)},[n.isOpen]),V.useEffect(()=>{if(!n.isOpen)return;let e=e=>{e.target instanceof Node&&s.current?.contains(e.target)||i()};return document.addEventListener(`pointerdown`,e,!0),()=>document.removeEventListener(`pointerdown`,e,!0)},[i,n.isOpen]),!p||!h)return null;let y=n.items[n.selectedIndex],x=[];return n.items.forEach((e,t)=>{let r=n.query?`results`:e.category,i=x.find(e=>e.key===r);i?i.entries.push({item:e,index:t}):x.push({key:r,label:e.category,entries:[{item:e,index:t}]})}),(0,Gr.createPortal)((0,Z.jsxs)(`div`,{ref:e=>{s.current=e,c.setFloating(e)},style:{...l,...Aa(f.transformOrigin),visibility:(d||m===`close`)&&!f.hide?.referenceHidden?`visible`:`hidden`},role:`dialog`,className:`emdash-slash-menu`,"data-status":m,"aria-label":`Insert block`,onPointerMove:()=>{v.current=!0},children:[y&&(0,Z.jsxs)(`span`,{className:`emdash-inline-ui-sr-only`,role:`status`,children:[`Selected `,y.title]}),(0,Z.jsx)(`div`,{ref:o,className:`emdash-slash-menu-viewport`,children:n.items.length===0?(0,Z.jsx)(`p`,{className:`emdash-slash-menu-empty`,children:`No results`}):x.map(e=>(0,Z.jsxs)(`div`,{role:`group`,"aria-label":n.query?void 0:e.label,children:[!n.query&&(0,Z.jsx)(`div`,{"aria-hidden":`true`,className:`emdash-slash-menu-group-label`,children:e.label}),e.entries.map(({item:e,index:t})=>(0,Z.jsxs)(`button`,{type:`button`,tabIndex:-1,"data-index":t,"aria-current":t===n.selectedIndex?`true`:void 0,className:`emdash-slash-menu-item`,onPointerDown:e=>e.preventDefault(),onClick:()=>r(e),onMouseEnter:()=>{v.current&&t!==n.selectedIndex&&(_.current=t,a(t))},children:[(0,Z.jsx)(e.icon,{className:`emdash-slash-menu-icon`,"aria-hidden":`true`}),(0,Z.jsx)(`span`,{className:`emdash-slash-menu-title`,children:e.title}),e.markdown&&(0,Z.jsx)(`span`,{"aria-hidden":`true`,className:`emdash-slash-menu-markdown`,children:(0,Z.jsx)(`bdi`,{dir:`ltr`,children:e.markdown})})]},e.id))]},e.key))}),(0,Z.jsxs)(`div`,{className:`emdash-slash-menu-footer`,children:[(0,Z.jsx)(`span`,{className:`emdash-slash-menu-footer-text`,"aria-hidden":`true`,children:y?y.description:`Type to filter`}),(0,Z.jsx)(`span`,{className:`emdash-slash-menu-esc`,"aria-hidden":`true`,children:(0,Z.jsx)(`bdi`,{dir:`ltr`,children:`esc`})})]})]}),t)}var Rs=/^(\d+)\.\s$/;function zs(){return globalThis.crypto?.randomUUID?.()??`list-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function Bs(e,t,n){let r=nn(`repair:${e}:${t}`),i=`:${n.toString(36)}`;return`${r.slice(0,128-i.length)}${i}`}function Vs(e){let t=[];return e.descendants((n,r)=>{if(n.type.name!==`orderedList`)return;let i=e.resolve(r),a=`root`,o=null;for(let e=i.depth;e>0;e--)if(i.node(e).type.name===`listItem`){o=i.before(e),a=`listItem:${o}`;break}o===null&&i.depth>0&&(o=i.before(i.depth),a=`${i.node(i.depth).type.name}:${o}`),t.push({node:n,pos:r,depth:i.depth,context:a,contextPos:o})}),t}function Hs(e){let t=Vs(e),n=new Map,r=new Set,i=t.map(e=>{let t=H(e.node.attrs.listId)??nn(`pm:${e.pos}:${e.depth}:${e.context}`),i=JSON.stringify([e.depth,e.context]),a=JSON.stringify([t,i]),o=n.get(a);if(!o){if(!r.has(t))o=t;else{let e=0;do o=Bs(t,i,e++);while(r.has(o))}n.set(a,o),r.add(o)}return{...e,listId:o,scopeKey:JSON.stringify([o,e.depth,e.context])}}),a=new Map;for(let e of i){let t=U(e.node.attrs.listStart);t!==void 0&&!a.has(e.scopeKey)&&a.set(e.scopeKey,t)}for(let e of i)a.has(e.scopeKey)||a.set(e.scopeKey,U(e.node.attrs.start)??1);let o=new Map,s=[];for(let e of i){let t=a.get(e.scopeKey),n=o.get(e.scopeKey)??0,r=U(t+n)??1;o.set(e.scopeKey,n+e.node.childCount),(e.node.attrs.listId!==e.listId||e.node.attrs.listStart!==t||e.node.attrs.start!==r)&&s.push({pos:e.pos,attrs:{...e.node.attrs,listId:e.listId,listStart:t,start:r}})}return s}function Us(e){let t=Hs(e.doc);if(t.length===0){let t=Vs(e.doc);if(!t.some((e,n)=>{let r=t[n+1];return r!==void 0&&r.pos===e.pos+e.node.nodeSize&&r.depth===e.depth&&r.context===e.context&&H(r.node.attrs.listId)===H(e.node.attrs.listId)&&U(r.node.attrs.listStart)===U(e.node.attrs.listStart)}))return null}let n=e.tr;for(let e of t)n.setNodeMarkup(e.pos,void 0,e.attrs);let r=Vs(n.doc),i=r.flatMap((e,t)=>{let n=r[t+1];return n!==void 0&&n.pos===e.pos+e.node.nodeSize&&n.depth===e.depth&&n.context===e.context&&H(n.node.attrs.listId)===H(e.node.attrs.listId)&&U(n.node.attrs.listStart)===U(e.node.attrs.listStart)?[n.pos]:[]});for(let e of i.toReversed())Se(n.doc,e)&&n.join(e);return n.docChanged?n:null}function Ws(e){let t=new Map,n=0,r=(e,i,a)=>{let o=[];return e.forEach((e,s,c)=>{let l=e.type.name===`listItem`?`${a}/listItem:${c}`:a,u=r(e.content,i+1,l);if(e.type.name!==`orderedList`){o.push(e.copy(u));return}let d=H(e.attrs.listId)??`missing:${n++}`,f=JSON.stringify([d,i,a]),p=t.get(f);p||(p={listId:zs(),listStart:U(e.attrs.start)??U(e.attrs.listStart)??1},t.set(f,p)),o.push(e.type.create({...e.attrs,...p,start:p.listStart},u,e.marks))}),We.fromArray(o)};return new ue(r(e.content,0,`root`),e.openStart,e.openEnd)}function Gs(e){let t=!1;return e.content.descendants(e=>e.type.name!==`orderedList`||(t=!0,!1)),t}function Ks(e){let t=Vs(e.doc).findLast(t=>e.selection.from>=t.pos&&e.selection.from<=t.pos+t.node.nodeSize);if(!t)return null;let n=H(t.node.attrs.listId),r=U(t.node.attrs.start);if(!n||r===void 0)return null;let i=0;return t.node.forEach((n,r)=>{t.pos+1+r+n.nodeSize<=e.selection.from&&i++}),{listId:n,listStart:U(r+i)??1}}function qs(e,t,n,r){let i=e=>{let a=[];return e.forEach(e=>{let o=i(e.content);a.push(e.type.name===`orderedList`&&H(e.attrs.listId)===t?e.type.create({...e.attrs,listId:n,listStart:r,start:r},o,e.marks):e.copy(o))}),We.fromArray(a)};return new ue(i(e.content),e.openStart,e.openEnd)}function Js(e,t){let n=Ks(t);if(!n)return e;let r=!1,i=e=>{let t=[];return e.forEach(e=>{let a=!r&&e.type.name===`orderedList`&&H(e.attrs.listId)===n.listId;a&&(r=!0);let o=i(e.content);a?t.push(e.type.create({...e.attrs,start:n.listStart},o,e.marks)):t.push(e.copy(o))}),We.fromArray(t)};return new ue(i(e.content),e.openStart,e.openEnd)}function Ys(e,t){let n=Ks(t);return n?qs(e,n.listId,zs(),n.listStart):e}function Xs(e){let t=Vs(e.doc),n=t.findLast(t=>e.selection.from>=t.pos&&e.selection.to<=t.pos+t.node.nodeSize);return n&&t.filter(t=>t.depth===n.depth&&t.context===n.context&&e.selection.from<t.pos+t.node.nodeSize&&e.selection.to>t.pos).length===1?{current:n,lists:t}:null}function Zs(e,t,n){let r=Xs(e);if(!r)return!1;let{current:i,lists:a}=r,o=H(i.node.attrs.listId);if(!o)return!1;let s=a.filter(e=>e.depth===i.depth&&e.context===i.context),c=s.findLast(e=>e.pos<i.pos),l=c?H(c.node.attrs.listId):void 0;if(n===`continue`&&(!l||l===o))return!1;if(!t)return!0;let u=n===`continue`?l:zs(),d=n===`continue`?U(c.node.attrs.listStart)??1:1,f=e.tr;for(let e of s)e.pos<i.pos||H(e.node.attrs.listId)!==o||f.setNodeMarkup(e.pos,void 0,{...e.node.attrs,listId:u,listStart:d});return t(f),!0}function Qs(e,t,n,r){let i=e.tr;r&&i.deleteSelection();let a=i.mapping.map(n),o=i.doc;if(i.replaceRange(a,a,t),i.doc.eq(o))return null;let s=a;return i.mapping.maps.at(-1)?.forEach((e,t,n,r)=>{s=Math.max(s,r)}),{transaction:i,from:a,to:s}}function $s(e,t,n,r){if(!Gs(n))return!1;let i=e.posAtCoords({left:t.clientX,top:t.clientY});if(!i)return!1;let a=De(e.state.doc,i.pos,n)??i.pos;if(!r){let t=Qs(e.state,Ws(n),a,!1);if(!t)return!1;let r=Math.min(t.to,t.transaction.doc.content.size);return t.transaction.setSelection(ye.near(t.transaction.doc.resolve(r),-1)),e.focus(),e.dispatch(t.transaction.setMeta(`uiEvent`,`drop`).scrollIntoView()),!0}let o=Xs(e.state);if(!o)return!1;let s=Qs(e.state,n,a,!0);if(!s)return!1;let c=o.current.contextPos,l=c===null?null:s.transaction.mapping.map(c,1);if(Vs(s.transaction.doc).some(e=>e.pos<s.to&&e.pos+e.node.nodeSize>s.from&&e.depth===o.current.depth&&e.contextPos===l))return!1;let u=Ys(n,e.state);if(u===n)return!1;let d=Qs(e.state,u,a,!0);if(!d)return!1;let f=Math.min(d.to,d.transaction.doc.content.size);return d.transaction.setSelection(ye.near(d.transaction.doc.resolve(f),-1)),e.focus(),e.dispatch(d.transaction.setMeta(`uiEvent`,`drop`).scrollIntoView()),!0}var ec=pe.extend({addAttributes(){let e=this.parent?.()??{};return{...e,start:{...e.start,parseHTML:e=>U(Number(e.dataset.emdashListFirst))??U(Number(e.getAttribute(`start`)))??1},listId:{default:null,parseHTML:e=>H(e.dataset.emdashListId)??null,rendered:!1},listStart:{default:null,parseHTML:e=>U(Number(e.dataset.emdashListStart))??null,rendered:!1}}},renderHTML({HTMLAttributes:e,node:t}){let{start:n,...r}=e,i=U(t.attrs.start)??1,a={"data-emdash-list-id":H(t.attrs.listId),"data-emdash-list-start":U(t.attrs.listStart),"data-emdash-list-first":i};return i===1?[`ol`,y(this.options.HTMLAttributes,r,a),0]:[`ol`,y(this.options.HTMLAttributes,{...r,start:i},a),0]},addCommands(){return{toggleOrderedList:()=>({commands:e,chain:t})=>this.editor.isActive(this.name)?e.toggleList(this.name,this.options.itemTypeName,this.options.keepMarks):t().toggleList(this.name,this.options.itemTypeName,this.options.keepMarks).updateAttributes(this.name,{listId:zs(),listStart:1}).run(),continueOrderedList:()=>({state:e,dispatch:t})=>Zs(e,t,`continue`),restartOrderedList:()=>({state:e,dispatch:t})=>Zs(e,t,`restart`)}},addInputRules(){return[z({find:Rs,type:this.type,getAttributes:e=>{let t=U(Number(e[1]))??1;return{start:t,listStart:t,listId:zs()}},joinPredicate:()=>!1})]},addProseMirrorPlugins(){return[new $e({appendTransaction:(e,t,n)=>Us(n),props:{transformCopied:(e,t)=>Js(e,t.state),handleDrop:$s,handlePaste(e,t,n){return Gs(n)?(e.dispatch(e.state.tr.replaceSelection(Ws(n)).setMeta(`paste`,!0).setMeta(`uiEvent`,`paste`).scrollIntoView()),!0):!1}}})]}}),tc=/<[^>]+\bdata-emdash-table-block(?:\s|=|>)/i;function nc(e){return e._type===`block`}function rc(e){return typeof e==`object`&&!!e&&`_type`in e&&e._type===`table`}function ic(e){return typeof e==`object`&&!!e&&`type`in e&&e.type===`doc`&&`content`in e&&Array.isArray(e.content)}function ac(){return Math.random().toString(36).substring(2,11)}function oc(e){return e.toLowerCase().startsWith(`ar`)?`لا يمكن إفلات الملفات أو لصقها هنا. اكتب /image لاختيار صورة من مكتبة الوسائط.`:`Files can’t be dropped or pasted here. Type /image to choose an image from the media library.`}function sc(e){if(!e)return!1;if(e.files.length>0)return!0;for(let t=0;t<e.items.length;t++)if(e.items[t]?.kind===`file`)return!0;return!1}function cc(e){let t=(e,t)=>sc(t.dataTransfer)?(t.preventDefault(),!0):!1;return{handleDOMEvents:{dragenter:t,dragover:t,drop:(t,n)=>sc(n.dataTransfer)?(n.preventDefault(),e(),!0):!1,paste:(t,n)=>sc(n.clipboardData)?(n.preventDefault(),e(),!0):!1}}}function lc(e,t){let n=e?.[t];return typeof n==`string`?n:``}function uc(e,t){let n=e?.[t];return typeof n==`string`&&n?n:void 0}function dc(e,t){let n=e?.[t];return typeof n==`number`?n:void 0}function fc(e,t){let n=dc(e,t);return n!==void 0&&Number.isFinite(n)&&n>0?n:void 0}function pc(e){return e===`left`||e===`center`||e===`right`||e===`wide`||e===`full`?e:void 0}function mc(e){return e===`external-url`?`external`:e}function hc(e){if(!e||e.type!==`doc`||!e.content)return[];let t=[];for(let n=0;n<e.content.length;n++){let r=gc(e.content[n],`root:${n}`);r&&(Array.isArray(r)?t.push(...r):t.push(r))}return t}function gc(e,t){switch(e.type){case`paragraph`:{let{children:t,markDefs:n}=vc(e.content||[]);if(t.length===0)return null;let r=e.attrs?.textAlign,i=r===`center`||r===`right`||r===`justify`?r:void 0;return{_type:`block`,_key:ac(),style:`normal`,children:t,markDefs:n.length>0?n:void 0,...i?{textAlign:i}:{}}}case`heading`:{let{children:t,markDefs:n}=vc(e.content||[]),r=dc(e.attrs,`level`)??1;if(t.length===0)return null;let i={1:`h1`,2:`h2`,3:`h3`,4:`h4`,5:`h5`,6:`h6`}[r]??`h1`,a=e.attrs?.textAlign,o=a===`center`||a===`right`||a===`justify`?a:void 0;return{_type:`block`,_key:ac(),style:i,children:t,markDefs:n.length>0?n:void 0,...o?{textAlign:o}:{}}}case`bulletList`:return _c(e.content||[],`bullet`,1,e.attrs,t);case`orderedList`:return _c(e.content||[],`number`,1,e.attrs,t);case`blockquote`:{let t=[];for(let n of e.content||[])if(n.type===`paragraph`){let{children:e,markDefs:r}=vc(n.content||[]);e.length>0&&t.push({_type:`block`,_key:ac(),style:`blockquote`,children:e,markDefs:r.length>0?r:void 0})}return t.length===1?t[0]??null:t.length>0?t:null}case`codeBlock`:{let t=(e.content||[]).map(e=>e.text||``).join(``);return{_type:`code`,_key:ac(),code:t,language:uc(e.attrs,`language`)}}case`htmlBlock`:return{_type:`htmlBlock`,_key:ac(),...r(e.attrs??{})};case`image`:{let t=uc(e.attrs,`provider`),n=uc(e.attrs,`blurhash`),r=uc(e.attrs,`dominantColor`),i=uc(e.attrs,`title`),a=Object.hasOwn(e.attrs??{},`caption`)?uc(e.attrs,`caption`)??(i?``:void 0):i;return{_type:`image`,_key:ac(),asset:{_ref:lc(e.attrs,`mediaId`),url:lc(e.attrs,`src`),provider:t&&t!==`local`?t:void 0},alt:uc(e.attrs,`alt`),caption:a,title:i,width:fc(e.attrs,`width`),height:fc(e.attrs,`height`),...n?{blurhash:n}:{},...r?{dominantColor:r}:{},displayWidth:fc(e.attrs,`displayWidth`),displayHeight:fc(e.attrs,`displayHeight`),alignment:pc(e.attrs?.alignment),link:Kt(e.attrs?.link)??void 0}}case`horizontalRule`:return{_type:`break`,_key:ac(),style:`lineBreak`};case`table`:{let t=e.attrs?.rawTable;return rc(t)?t:null}case`pluginBlock`:{let{blockType:t,id:n,identityField:r,data:i}=e.attrs??{},a=r===`url`||r===``?r:`id`;return{...i&&typeof i==`object`?i:{},_type:typeof t==`string`?t:`embed`,_key:ac(),...a?{[a]:typeof n==`string`?n:``}:{}}}default:return null}}function _c(e,t,n,r,i){let a=[],o=t===`number`?rn(r,i):void 0;for(let r=0;r<e.length;r++){let s=e[r];if(s.type===`listItem`)for(let e=0;e<(s.content?.length??0);e++){let c=s.content[e];if(c.type===`paragraph`){let{children:e,markDefs:r}=vc(c.content||[]);e.length>0&&a.push({_type:`block`,_key:ac(),style:`normal`,listItem:t,level:n,...o,children:e,markDefs:r.length>0?r:void 0})}else if(c.type===`bulletList`||c.type===`orderedList`){let t=c.type===`bulletList`?`bullet`:`number`;a.push(..._c(c.content||[],t,n+1,c.attrs,`${i}:${r}:${e}`))}}}return a}function vc(e){let t=[],n=[],r=new Map;for(let i of e)if(i.type===`text`&&i.text){let e=[];for(let t of i.marks||[]){let i=yc(t,n,r);i&&e.push(i)}t.push({_type:`span`,_key:ac(),text:i.text,marks:e.length>0?e:void 0})}else if(i.type===`hardBreak`){if(t.length>0){let e=t.at(-1);e&&(e.text+=`
`)}else t.push({_type:`span`,_key:ac(),text:`
`})}return t.length===0&&t.push({_type:`span`,_key:ac(),text:``}),{children:t,markDefs:n}}function yc(e,t,n){switch(e.type){case`bold`:case`strong`:return`strong`;case`italic`:case`em`:return`em`;case`underline`:return`underline`;case`strike`:case`strikethrough`:return`strike-through`;case`code`:return`code`;case`link`:{let r=lc(e.attrs,`href`);if(n.has(r))return n.get(r);let i=ac();return t.push({_type:`link`,_key:i,href:r,blank:e.attrs?.target===`_blank`}),n.set(r,i),i}default:return e.type}}function bc(e){if(!e||e.length===0)return{type:`doc`,content:[{type:`paragraph`}]};en(e);let t=[],n=0;for(;n<e.length;){let r=e[n];if(!r)n++;else if(nc(r)&&r.listItem){let i=[],a=r.listItem,o=n,s=a===`number`?H(r.listId):void 0;for(;n<e.length;){let t=e[n];if(!t||!nc(t)||!t.listItem)break;let r=t.level||1,o=t.listItem===`number`?H(t.listId):void 0,c=a!==`number`||r>1||(s?o===s:o===void 0);if(r>1||t.listItem===a&&c)i.push(t),n++;else break}t.push(Sc(i,a,`root:${o}`))}else if(nc(r)&&r.style===`blockquote`&&r.listItem===void 0){let r=[];for(;n<e.length;){let t=e[n];if(!t||!nc(t)||t.style!==`blockquote`||t.listItem!==void 0)break;r.push(t),n++}t.push({type:`blockquote`,content:r.map(e=>{let t=Tc(e.children,e.markDefs||[]);return{type:`paragraph`,content:t.length>0?t:void 0}})})}else{let e=xc(r);e&&t.push(e),n++}}return cn({type:`doc`,content:t.length>0?t:[{type:`paragraph`}]})}function xc(e){if(nc(e)){let{style:t=`normal`,children:n,markDefs:r=[],textAlign:i}=e,a=Tc(n,r);return t===`blockquote`?{type:`blockquote`,content:[{type:`paragraph`,content:a.length>0?a:void 0}]}:t?.startsWith(`h`)?{type:`heading`,attrs:{level:parseInt(t.substring(1),10),...i?{textAlign:i}:{}},content:a.length>0?a:void 0}:{type:`paragraph`,attrs:i?{textAlign:i}:void 0,content:a.length>0?a:void 0}}if(e._type===`code`){let t=e;return{type:`codeBlock`,attrs:{language:typeof t.language==`string`&&t.language.length>0?t.language:null},content:t.code?[{type:`text`,text:t.code}]:void 0}}if(e._type===`break`)return{type:`horizontalRule`};if(e._type===`htmlBlock`)return{type:`htmlBlock`,attrs:{...r(e)}};if(e._type===`image`){let t=e,n=t.asset?.meta,{asset:r,alt:i,width:a,height:o}=Ut(t),s=typeof t.blurhash==`string`?t.blurhash:typeof n?.blurhash==`string`?n.blurhash:null,c=typeof t.dominantColor==`string`?t.dominantColor:typeof n?.dominantColor==`string`?n.dominantColor:null;return{type:`image`,attrs:{src:r.url||t.url||(r._ref?`/_emdash/api/media/file/${r._ref}`:``),alt:i||``,title:t.title||``,caption:Object.hasOwn(t,`caption`)?t.caption||``:t.title||``,mediaId:r._ref||void 0,provider:mc(r.provider),width:a,height:o,blurhash:s,dominantColor:c,displayWidth:t.displayWidth,displayHeight:t.displayHeight,alignment:pc(t.alignment)??null,link:Kt(t.link)}}}if(e._type===`table`)return{type:`table`,attrs:{rawTable:e}};let t=typeof e.id==`string`?`id`:typeof e.url==`string`?`url`:``,n=t?e[t]:void 0,i=Object.fromEntries(Object.entries(e).filter(([e])=>!e.startsWith(`_`)&&e!==t));return{type:`pluginBlock`,attrs:{blockType:typeof e._type==`string`?e._type:`embed`,id:typeof n==`string`?n:``,identityField:t,data:i}}}function Sc(e,t,n){let r=[],i=0;for(;i<e.length;){let a=e[i];if((a.level||1)===1){let o=[];for(i++;i<e.length&&(e[i].level||1)>1;)o.push(e[i]),i++;r.push(wc(a,o,t,`${n}:${r.length}`))}else r.push(wc(a,[],t,`${n}:${r.length}`)),i++}let a=e[0],o=H(a.listId)??nn(`${n}:${a._key}`),s=U(a.listStart),c=t===`number`?{listId:o,...s===void 0?{}:{listStart:s}}:void 0;return{type:t===`bullet`?`bulletList`:`orderedList`,attrs:c?{...c,start:c.listStart??1}:void 0,content:r}}function Cc(e,t,n,r,i){if((e.level||2)>t)return!0;if((e.listItem||n)!==r)return!1;if(r!==`number`)return!0;let a=H(e.listId);return i?a===i:a===void 0}function wc(e,t,n,r){let i=[{type:`paragraph`,content:Tc(e.children,e.markDefs||[])}];if(t.length>0){let e=1/0;for(let n of t){let t=n.level||2;t<e&&(e=t)}let a=0;for(;a<t.length;){let o=a,s=t[a].listItem||n,c=s===`number`?H(t[a].listId):void 0,l=[];do l.push(t[a]),a++;while(a<t.length&&Cc(t[a],e,n,s,c));i.push(Sc(l.map(e=>({...e,level:(e.level||2)-1})),s,`${r}:nested:${o}`))}}return{type:`listItem`,content:i}}function Tc(e,t){let n=[],r=new Map(t.map(e=>[e._key,e]));for(let t of e){if(t._type!==`span`)continue;let e=t.text.split(`
`);for(let i=0;i<e.length;i++){let a=e[i];if(a&&a.length>0){let e=Ec(t.marks||[],r),i={type:`text`,text:a};e.length>0&&(i.marks=e),n.push(i)}i<e.length-1&&n.push({type:`hardBreak`})}}return n}function Ec(e,t){let n=[];for(let r of e)switch(r){case`strong`:n.push({type:`bold`});break;case`em`:n.push({type:`italic`});break;case`underline`:n.push({type:`underline`});break;case`strike-through`:n.push({type:`strike`});break;case`code`:n.push({type:`code`});break;case`superscript`:n.push({type:`superscript`});break;case`subscript`:n.push({type:`subscript`});break;default:{let e=t.get(r);e&&e._type===`link`&&n.push({type:`link`,attrs:{href:e.href,target:e.blank?`_blank`:null}});break}}return n}var Dc=c.create({name:`htmlBlock`,group:`block`,atom:!0,selectable:!0,draggable:!0,addAttributes(){let e={rendered:!1,parseHTML:()=>null};return{html:{default:``,...e},css:{default:``,...e},js:{default:``,...e},isolated:{default:!1,...e}}},parseHTML(){return[{tag:`div[data-emdash-html-block="true"]`}]},renderHTML({HTMLAttributes:e}){return[`div`,y(e,{"data-emdash-html-block":`true`,class:`emdash-plugin-block-placeholder`,contenteditable:`false`}),`HTML block (edit in admin)`]}}),Oc=c.create({name:`table`,group:`block`,atom:!0,selectable:!0,draggable:!0,addOptions(){return{placeholder:`Table (edit in admin)`}},addAttributes(){return{rawTable:{default:null,rendered:!1,parseHTML:()=>null}}},parseHTML(){return[{tag:`div[data-emdash-table-block="true"]`}]},addProseMirrorPlugins(){return[new $e({props:{handleDOMEvents:{cut:(e,t)=>{let n=!1;return e.state.selection.content().content.descendants(e=>{n||=e.type.name===`table`}),n?(t.preventDefault(),!0):!1}},handlePaste:(e,t,n)=>{let r=t.clipboardData?.getData(`text/html`)??``;if(!tc.test(r))return!1;let i=!1,a=!1;return n.content.descendants(e=>{e.type.name===`table`&&(i=!0,rc(e.attrs.rawTable)||(a=!0))}),i&&!a?!1:(t.preventDefault(),!0)}}})]},renderHTML({HTMLAttributes:e}){return[`div`,y(e,{"data-emdash-table-block":`true`,class:`emdash-plugin-block-placeholder`,contenteditable:`false`}),this.options.placeholder]}}),kc=c.create({name:`pluginBlock`,group:`block`,atom:!0,selectable:!0,draggable:!0,addAttributes(){let e={rendered:!1,parseHTML:()=>null};return{blockType:{default:``,...e},id:{default:``,...e},identityField:{default:`id`,...e},data:{default:{},...e}}},parseHTML(){return[{tag:`div[data-emdash-plugin-block="true"]`}]},renderHTML({HTMLAttributes:e,node:t}){let n=typeof t.attrs.blockType==`string`?t.attrs.blockType:``,r=n||`Block`;return[`div`,y(e,{"data-emdash-plugin-block":`true`,"data-block-type":n,class:`emdash-plugin-block-placeholder`,contenteditable:`false`}),`Plugin block: ${r} (edit in admin)`]}});function Ac({value:e,collection:t,entryId:n,field:r,tablePlaceholder:i=Oc.options.placeholder}){let a=V.useRef(e),o=V.useRef(null),s=V.useRef(!1),c=V.useRef(null),[l,u]=V.useState(null),[f,p]=V.useState(null),m=V.useCallback(()=>{let e=document.documentElement.lang||navigator.language;p(t=>({message:oc(e),version:(t?.version??0)+1}))},[]),h=V.useMemo(()=>cc(m),[m]),g=Da(),[_,v]=V.useState(Fs),y=V.useRef(_),b=V.useCallback(e=>{let t=typeof e==`function`?e(y.current):e;y.current=t,v(t)},[]),x=V.useRef({run:e=>{},dismiss:()=>{}}),[S]=V.useState(()=>{try{return{content:bc(e||[]),error:null}}catch(e){if(e instanceof Qt)return{content:{type:`doc`,content:[{type:`paragraph`}]},error:e};throw e}}),C=S.content,w=S.error,[T,E]=V.useState(null),D=V.useCallback(()=>{let e=c.current;if(!e)return a.current;let t=e.getJSON();return ic(t)?(tn(t),hc(t)):a.current},[]),O=V.useCallback(async e=>{if(w||s.current&&!e?.keepalive)return;let i=c.current?.state.doc;if(!i||!o.current||i.eq(o.current))return;s.current=!0;let l=()=>{},u=new Promise(e=>{l=()=>e()});document.dispatchEvent(new CustomEvent(`emdash:save-pending`,{detail:{done:u}}));try{let s=D(),c=await fetch(`/_emdash/api/content/${encodeURIComponent(t)}/${encodeURIComponent(n)}`,{method:`PUT`,credentials:`same-origin`,headers:{"Content-Type":`application/json`,"X-EmDash-Request":`1`},body:JSON.stringify({data:{[r]:s},skipRevision:!0}),keepalive:e?.keepalive??!1});c.ok?(E(null),a.current=s,o.current=i,document.dispatchEvent(new CustomEvent(`emdash:save`,{detail:{state:`saved`}})),document.dispatchEvent(new CustomEvent(`emdash:content-changed`,{detail:{collection:t,id:n}}))):(E(`Save failed: ${c.status}`),document.dispatchEvent(new CustomEvent(`emdash:save`,{detail:{state:`error`}})),console.error(`Save failed:`,c.status))}catch(e){E(e instanceof Qt?`Save failed: unsupported formatting (${e.marks.join(`, `)}).`:`Save failed. Please try again.`),document.dispatchEvent(new CustomEvent(`emdash:save`,{detail:{state:`error`}})),console.error(`Save failed:`,e)}finally{s.current=!1,l()}},[t,n,r,D,w]);V.useEffect(()=>{let e=()=>void O({keepalive:!0});return window.addEventListener(`pagehide`,e),()=>window.removeEventListener(`pagehide`,e)},[O]);let k=V.useMemo(()=>Is({onStateChange:b,getState:()=>y.current,onCommand:e=>x.current.run(e),onDismiss:()=>x.current.dismiss()}),[b]),A=xe({extensions:[Fe.configure({dropcursor:{color:`#3b82f6`,width:2},codeBlock:!1,code:!1,orderedList:!1,link:!1,underline:!1}),ec,ln,Ds,Fo,je,xt,gt,I.configure({openOnClick:!1,HTMLAttributes:{target:null,class:`underline text-blue-600 dark:text-blue-400`}}),he.configure({includeChildren:!0,placeholder:({node:e})=>e.type.name===`paragraph`?`Type / for commands...`:``}),le.configure({types:[`heading`,`paragraph`]}),d.configure({className:`has-focus`,mode:`all`}),Oe,Dc,Oc.configure({placeholder:i}),kc,k],content:C,immediatelyRender:!1,editorProps:{attributes:{class:`prose prose-sm sm:prose-base dark:prose-invert max-w-none emdash-inline-editor`,dir:`auto`},...h},onUpdate:()=>{document.dispatchEvent(new CustomEvent(`emdash:save`,{detail:{state:`unsaved`}}))}});V.useEffect(()=>{c.current=A,A&&!o.current&&(o.current=A.state.doc)},[A]);let j=V.useCallback(e=>{let{range:t}=y.current;A&&t&&(e.command({editor:A,range:t,openImagePicker:()=>u(A.state.selection.from)}),b(e=>({...e,isOpen:!1})))},[A,b]),M=V.useCallback(()=>{let{range:e}=y.current;b(t=>({...t,isOpen:!1,dismissedSlashFrom:e?e.from:t.dismissedSlashFrom})),A&&e&&zt(A.view)},[A,b]);x.current={run:j,dismiss:M};let N=l!==null;V.useEffect(()=>{if(!A||!N)return;let e=({transaction:e})=>{e.docChanged&&u(t=>t===null?t:e.mapping.map(t))};return A.on(`transaction`,e),()=>{A.off(`transaction`,e)}},[A,N]);let P=V.useMemo(()=>A&&l!==null?{getBoundingClientRect:()=>{if(A.isDestroyed)return new DOMRect;let{view:e}=A,t=e.coordsAtPos(Math.min(l,e.state.doc.content.size));return new DOMRect(t.left,t.top,0,t.bottom-t.top)},contextElement:A.view.dom}:null,[A,l]),F=V.useCallback(e=>{let t=e.relatedTarget instanceof HTMLElement?e.relatedTarget:null;if(t&&e.currentTarget.contains(t)||t?.hasAttribute(`data-emdash-clipboard-fallback`)||t&&g?.contains(t))return;let n=e.nativeEvent;queueMicrotask(()=>{!A||A.isDestroyed||A.view.hasFocus()||g?.contains(document.activeElement)||A.view.dispatch(A.state.tr.setMeta(`blur`,{event:n}))}),O()},[A,O,g]);return!A||!g?null:(0,Z.jsxs)(`div`,{onBlur:F,children:[w?(0,Z.jsxs)(`div`,{className:`emdash-inline-editor-error`,role:`alert`,dir:`auto`,children:[`This field can’t be edited here because it contains unsupported Portable Text marks:`,` `,w.marks.join(`, `),`.`]}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(us,{editor:A,uiRoot:g,onImageReplaced:()=>void O()}),(0,Z.jsx)(ot,{editor:A})]}),T?(0,Z.jsx)(`div`,{className:`emdash-inline-editor-error`,role:`alert`,dir:`auto`,children:T}):null,f?(0,Z.jsx)(`div`,{className:`emdash-inline-editor-guidance`,role:`status`,"aria-live":`polite`,dir:`auto`,children:f.message},f.version):null,(0,Z.jsx)(Ls,{editor:A,uiRoot:g,state:_,onCommand:j,onClose:M,setSelectedIndex:e=>b(t=>({...t,selectedIndex:e}))}),l!==null&&P&&(0,Z.jsx)(_o,{uiRoot:g,reference:P,gap:6,label:`Insert image`,onChoose:e=>{ko(A,l,e),A.view.focus(),u(null),O()},onClose:e=>{e!==`blur`&&A.view.focus(),u(null)}}),(0,Z.jsx)(`style`,{children:`
				.emdash-inline-code-block {
					position: relative;
					margin-block: 1rem;
					--emdash-code-background: var(--emdash-inline-code-background, #f7f7f5);
					--emdash-code-foreground: var(--emdash-inline-code-foreground, #24292f);
					--emdash-code-muted: var(--emdash-inline-code-muted, #57606a);
					--emdash-code-keyword: var(--emdash-inline-code-keyword, #b8172a);
					--emdash-code-string: var(--emdash-inline-code-string, #0a3069);
					--emdash-code-number: var(--emdash-inline-code-number, #0550ae);
					--emdash-code-title: var(--emdash-inline-code-title, #7545c7);
					--emdash-code-border: var(--emdash-inline-code-border, #7d8590);
					--emdash-code-control-background: var(
						--emdash-inline-code-control-background,
						var(--emdash-inline-bg, #ffffff)
					);
					--emdash-code-control-foreground: var(
						--emdash-inline-code-control-foreground,
						#24292f
					);
					--emdash-code-focus: var(--emdash-inline-code-focus, #0550ae);
				}
				.emdash-inline-code-block .emdash-code-block {
					margin: 0;
					padding: 1rem;
					padding-block: 30px !important;
					border: 0 !important;
					border-radius: 0.5rem;
					background: var(--emdash-code-background) !important;
					color: var(--emdash-code-foreground) !important;
					caret-color: var(--emdash-code-foreground) !important;
					overflow-x: auto;
				}
				.emdash-inline-code-block .emdash-code-block code {
					background: transparent !important;
					color: inherit !important;
					font-size: 13px !important;
				}
				.emdash-inline-code-block :is(.hljs-comment, .hljs-quote) {
					color: var(--emdash-code-muted);
				}
				.emdash-inline-code-block
					:is(.hljs-keyword, .hljs-literal, .hljs-selector-tag, .hljs-section, .hljs-link, .hljs-deletion) {
					color: var(--emdash-code-keyword);
				}
				.emdash-inline-code-block
					:is(.hljs-string, .hljs-attr, .hljs-attribute, .hljs-symbol, .hljs-bullet, .hljs-addition) {
					color: var(--emdash-code-string);
				}
				.emdash-inline-code-block :is(.hljs-number, .hljs-meta) {
					color: var(--emdash-code-number);
				}
				.emdash-inline-code-block
					:is(.hljs-title, .hljs-name, .hljs-type, .hljs-built_in, .hljs-selector-id, .hljs-selector-class) {
					color: var(--emdash-code-title);
				}
				.emdash-inline-code-block-popover,
				.emdash-inline-code-block-chip {
					box-sizing: border-box;
					border: 1px solid var(--emdash-code-border);
					background: var(--emdash-code-control-background);
					color: var(--emdash-code-control-foreground);
				}
				.emdash-inline-code-block-controls-wrap {
					position: absolute;
					inset-block-start: 0;
					inset-inline-end: 0.25rem;
					z-index: 100;
					max-inline-size: min(calc(100% - 0.25rem), calc(100vw - 1rem));
					opacity: 0;
					pointer-events: none;
					user-select: none;
					transition: opacity 120ms ease-out;
				}
				.emdash-inline-code-block:hover .emdash-inline-code-block-controls-wrap,
				.emdash-inline-code-block:focus-within .emdash-inline-code-block-controls-wrap,
				.emdash-inline-code-block-controls-wrap[data-persistent="true"] {
					opacity: 1;
					pointer-events: auto;
				}
				.emdash-inline-code-block-popover {
					inline-size: min(14rem, 100%, calc(100vw - 1rem));
				}
				.emdash-inline-code-block-language-input {
					min-inline-size: 0;
					flex: 1;
					border: 1px solid var(--emdash-code-border);
					background: transparent;
					color: inherit;
				}
				.emdash-inline-code-block-controls-wrap button:focus-visible,
				.emdash-inline-code-block-language-input:focus-visible {
					outline: 2px solid var(--emdash-code-focus);
					outline-offset: 2px;
				}
				@media (hover: none), (pointer: coarse) {
					.emdash-inline-code-block-controls-wrap {
						opacity: 1;
						pointer-events: auto;
					}
				}
				@media (prefers-reduced-motion: reduce) {
					.emdash-inline-code-block-controls-wrap {
						transition: none;
					}
				}
				@media (prefers-color-scheme: dark) {
					.emdash-inline-code-block {
						--emdash-code-background: var(--emdash-inline-code-background, #202020);
						--emdash-code-foreground: var(--emdash-inline-code-foreground, #f0f3f6);
						--emdash-code-muted: var(--emdash-inline-code-muted, #c9d1d9);
						--emdash-code-keyword: var(--emdash-inline-code-keyword, #ffc1bb);
						--emdash-code-string: var(--emdash-inline-code-string, #b9ddff);
						--emdash-code-number: var(--emdash-inline-code-number, #a8d5ff);
						--emdash-code-title: var(--emdash-inline-code-title, #e5ccff);
						--emdash-code-border: var(--emdash-inline-code-border, #6e7681);
						--emdash-code-control-background: var(
							--emdash-inline-code-control-background,
							var(--emdash-inline-bg, #161b22)
						);
						--emdash-code-control-foreground: var(
							--emdash-inline-code-control-foreground,
							#f0f3f6
						);
						--emdash-code-focus: var(--emdash-inline-code-focus, #a8d5ff);
					}
				}
				.emdash-inline-editor .emdash-slash-query {
					margin-inline: -0.25em;
					padding: 0.125em 0.25em;
					border-radius: 0.375rem;
					background: color-mix(in srgb, currentColor 8%, transparent);
				}
				.emdash-inline-editor .emdash-slash-query.is-empty::after {
					content: "Type to search";
					color: color-mix(in srgb, currentColor 45%, transparent);
					pointer-events: none;
				}
				${Ga}
				${vo}
				${Ro}
				.emdash-inline-editor:focus {
					outline: none;
				}
				.emdash-inline-editor:focus p.is-editor-empty {
					display: flow-root;
				}
				.emdash-inline-editor:focus p.is-editor-empty::before {
					content: attr(data-placeholder);
					float: inline-start;
					width: 100%;
					margin-inline-end: -100%;
					opacity: 0.5;
					pointer-events: none;
				}
				.emdash-inline-editor-guidance {
					margin-block-start: 0.75rem;
					padding-block: 0.625rem;
					padding-inline: 0.875rem;
					border: 1px solid #bfdbfe;
					border-radius: 0.5rem;
					background: #eff6ff;
					color: #1e3a8a;
					font-size: 0.875rem;
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
					line-height: 1.4;
					text-align: start;
				}
				.emdash-inline-editor-error {
					margin-block-start: 0.75rem;
					padding-block: 0.625rem;
					padding-inline: 0.875rem;
					border: 1px solid #fecaca;
					border-radius: 0.5rem;
					background: #fef2f2;
					color: #991b1b;
					font-size: 0.875rem;
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
					line-height: 1.4;
					text-align: start;
				}
				.emdash-plugin-block-placeholder {
					margin: 0.75rem 0;
					padding: 0.625rem 0.875rem;
					border: 1px dashed #d1d5db;
					border-radius: 0.5rem;
					background: #f9fafb;
					color: #4b5563;
					font-size: 0.875rem;
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
					user-select: none;
				}
				@media (prefers-color-scheme: dark) {
					.emdash-inline-editor-guidance {
						border-color: #1e40af;
						background: #172554;
						color: #dbeafe;
					}
					.emdash-inline-editor-error {
						border-color: #991b1b;
						background: #450a0a;
						color: #fee2e2;
					}
					.emdash-plugin-block-placeholder {
						border-color: #374151;
						background: #111827;
						color: #9ca3af;
					}
				}
			`})]})}export{Ac as InlinePortableTextEditor,Oc as _InlineTableBlockNode,cc as _createUnsupportedFileHandlers,hc as _pmToPortableText,bc as _portableTextToPM};