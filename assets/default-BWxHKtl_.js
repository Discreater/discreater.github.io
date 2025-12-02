import{i as le,w as K,g as ee,h as oe,j as Le,k as w,l as C,d as I,m as h,n as D,p as Ne,q as P,s as b,v as pe,x as Fe,y as xe,z as Ve,A as Me,B as ye,S as Ce,C as Se,D as We,E as De,F as se,G as y,H as B,I as ce,J as A,K as Ge,L as X,M as qe,N as Ye,O as Ue,P as M,Q as Qe,R as Xe,T as Q,U as Je,V as W,W as Ze,X as Ke,Y as ke,Z as Y,_ as eo,$ as oo,a0 as de,a1 as to,a2 as ro,a3 as Te,u as we,a4 as no,c as ne,o as L,b as E,e as $,a5 as lo,a6 as io,a7 as H,a8 as J,a9 as ue,aa as ao,ab as fe,ac as so,a as U,ad as te,ae as he,t as ge,r as co,af as uo}from"./main-CEnAd8i_.js";import{_ as re,S as fo,a as ho}from"./SpotLight-OEMYdNoz.js";import{N as go}from"./Time-Bwi33KRj.js";function Re(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function vo(e,t,r){const o=le(e,null);o!==null&&(t in o||(o[t]=[]),o[t].push(r.value),K(r,(n,l)=>{const c=o[t],a=c.findIndex(s=>s===l);~a&&c.splice(a,1),c.push(n)}),ee(()=>{const n=o[t],l=n.findIndex(c=>c===r.value);~l&&n.splice(l,1)}))}function bo(e,t,r){const o=le(e,null);o!==null&&(t in o||(o[t]=[]),oe(()=>{const n=r();n&&o[t].push(n)}),ee(()=>{const n=o[t],l=r(),c=n.findIndex(a=>a===l);~c&&n.splice(c,1)}))}let ve=!1;function mo(){if(Le&&window.CSS&&!ve&&(ve=!0,"registerProperty"in window?.CSS))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function po(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}const xo=w("affix",[C("affixed",{position:"fixed"},[C("absolute-positioned",{position:"absolute"})])]);function yo(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function Co(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const ie={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fixed"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},So=pe(ie),ko=I({name:"Affix",props:ie,setup(e){const{mergedClsPrefixRef:t}=D(e);Ne("-affix",xo,t);let r=null;const o=P(!1),n=P(!1),l=P(null),c=P(null),a=b(()=>n.value||o.value),s=b(()=>{var d,u;return(u=(d=e.triggerTop)!==null&&d!==void 0?d:e.offsetTop)!==null&&u!==void 0?u:e.top}),i=b(()=>{var d,u;return(u=(d=e.top)!==null&&d!==void 0?d:e.triggerTop)!==null&&u!==void 0?u:e.offsetTop}),f=b(()=>{var d,u;return(u=(d=e.bottom)!==null&&d!==void 0?d:e.triggerBottom)!==null&&u!==void 0?u:e.offsetBottom}),S=b(()=>{var d,u;return(u=(d=e.triggerBottom)!==null&&d!==void 0?d:e.offsetBottom)!==null&&u!==void 0?u:e.bottom}),R=P(null),_=()=>{const{target:d,listenTo:u}=e;d?r=d():u?r=Re(u):r=document,r&&(r.addEventListener("scroll",k),k())};function k(){Fe(m)}function m(){const{value:d}=R;if(!r||!d)return;const u=yo(r);if(a.value){c.value!==null&&u<c.value&&(o.value=!1,c.value=null),l.value!==null&&u>l.value&&(n.value=!1,l.value=null);return}const T=Co(r),p=d.getBoundingClientRect(),v=p.top-T.top,g=T.bottom-p.bottom,O=s.value,j=S.value;O!==void 0&&v<=O?(o.value=!0,c.value=u-(O-v)):(o.value=!1,c.value=null),j!==void 0&&g<=j?(n.value=!0,l.value=u+j-g):(n.value=!1,l.value=null)}return oe(()=>{_()}),ee(()=>{r&&r.removeEventListener("scroll",k)}),{selfRef:R,affixed:a,mergedClsPrefix:t,mergedstyle:b(()=>{const d={};return o.value&&s.value!==void 0&&i.value!==void 0&&(d.top=`${i.value}px`),n.value&&S.value!==void 0&&f.value!==void 0&&(d.bottom=`${f.value}px`),d})}},render(){const{mergedClsPrefix:e}=this;return h("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),Z=ye("n-anchor"),To={title:String,href:String},wo=I({name:"AnchorLink",props:To,slots:Object,setup(e,{slots:t}){const r=P(null),o=le(Z),n=xe(e,"href"),l=Ve(()=>n.value&&n.value===o.activeHref.value);vo(Z,"collectedLinkHrefs",n),bo(Z,"titleEls",()=>r.value),K(l,a=>{a&&r.value&&o.updateBarPosition(r.value)});function c(){e.href!==void 0&&o.setActiveHref(e.href)}return()=>{var a;const{value:s}=o.mergedClsPrefix;return h("div",{class:[`${s}-anchor-link`,l.value&&`${s}-anchor-link--active`]},h("a",{ref:r,class:[`${s}-anchor-link__title`],href:e.href,title:po(e.title),onClick:c},{default:()=>Me(t.title,()=>[e.title])}),(a=t.default)===null||a===void 0?void 0:a.call(t))}}});function Ro(e,t){const{top:r,height:o}=e.getBoundingClientRect(),n=t instanceof HTMLElement?t.getBoundingClientRect().top:0;return{top:r-n,height:o}}const ae={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},_o=pe(ae),zo=I({name:"BaseAnchor",props:Object.assign(Object.assign({},ae),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const t=[],r=[],o=P(null),n=P(null),l=P(null),c=P(null);let a=!1;const s=b(()=>e.type==="block"),i=b(()=>!s.value&&e.showRail);function f(){const{value:T}=l,{value:p}=n;T&&(T.style.transition="none"),p&&(p.style.transition="none"),r&&r.forEach(v=>{v.style.transition="none"}),De(()=>{const{value:v}=l,{value:g}=n;v&&(v.offsetWidth,v.style.transition=""),g&&(g.offsetWidth,g.style.transition=""),r&&r.forEach(O=>{O.offsetWidth,O.style.transition=""})})}function S(T,p=!0){const{value:v}=l,{value:g}=n,{value:O}=c;if(!O||!v)return;p||(v.style.transition="none",g&&(g.style.transition="none"));const{offsetHeight:j,offsetWidth:G}=T,{top:N,left:z}=T.getBoundingClientRect(),{top:x,left:F}=O.getBoundingClientRect(),V=N-x,q=z-F;v.style.top=`${V}px`,v.style.height=`${j}px`,g&&(g.style.top=`${V}px`,g.style.height=`${j}px`,g.style.maxWidth=`${G+q}px`),v.offsetHeight,g&&g.offsetHeight,p||(v.style.transition="",g&&(g.style.transition=""))}let R,_=!1,k=!1;const m=()=>{if(k)_=!0;else{if(a)return;u(!0),k=!0,clearTimeout(R),R=setTimeout(()=>{k=!1,_&&(_=!1,m())},128)}};function d(T,p=!0){const v=/^#([^#]+)$/.exec(T);if(!v)return;const g=document.getElementById(v[1]);g&&(a=!0,o.value=T,g.scrollIntoView(),p||f(),_=!1,setTimeout(()=>{a=!1},0))}function u(T=!0){var p;const v=[],g=Re((p=e.offsetTarget)!==null&&p!==void 0?p:document);t.forEach(z=>{const x=/#([^#]+)$/.exec(z);if(!x)return;const F=document.getElementById(x[1]);if(F&&g){const{top:V,height:q}=Ro(F,g);v.push({top:V,height:q,href:z})}}),v.sort((z,x)=>z.top>x.top?1:(z.top===x.top&&z.height<x.height,-1));const O=o.value,{bound:j,ignoreGap:G}=e,N=v.reduce((z,x)=>x.top+x.height<0?G?x:z:x.top<=j?z===null?x:x.top===z.top?x.href===O?x:z:x.top>z.top?x:z:z,null);T||f(),N?o.value=N.href:o.value=null}return Se(Z,{activeHref:o,mergedClsPrefix:xe(e,"mergedClsPrefix"),updateBarPosition:S,setActiveHref:d,collectedLinkHrefs:t,titleEls:r}),oe(()=>{document.addEventListener("scroll",m,!0),d(window.location.hash),u(!1)}),We(()=>{d(window.location.hash),u(!1)}),ee(()=>{clearTimeout(R),document.removeEventListener("scroll",m,!0)}),K(o,T=>{if(T===null){const{value:p}=n;p&&!s.value&&(p.style.maxWidth="0")}}),{selfRef:c,barRef:l,slotRef:n,setActiveHref:d,activeHref:o,isBlockType:s,mergedShowRail:i}},render(){var e;const{mergedClsPrefix:t,mergedShowRail:r,isBlockType:o,$slots:n}=this,l=h("div",{class:[`${t}-anchor`,o&&`${t}-anchor--block`,r&&`${t}-anchor--show-rail`],ref:"selfRef"},r&&this.showBackground?h("div",{ref:"slotRef",class:`${t}-anchor-link-background`}):null,r?h("div",{class:`${t}-anchor-rail`},h("div",{ref:"barRef",class:[`${t}-anchor-rail__bar`,this.activeHref!==null&&`${t}-anchor-rail__bar--active`]})):null,(e=n.default)===null||e===void 0?void 0:e.call(n));return this.internalScrollable?h(Ce,null,{default:()=>l}):l}}),Bo=w("anchor",`
 position: relative;
`,[se("block",`
 padding-left: var(--n-rail-width);
 `,[w("anchor-link",[y("+, >",[w("anchor-link",`
 margin-top: .5em;
 `)])]),w("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),se("show-rail",[y(">",[w("anchor-link","padding-left: 0;")])])]),C("block",[w("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[C("active",`
 background-color: var(--n-link-color);
 `)])]),w("anchor-link-background",`
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),w("anchor-rail",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: var(--n-rail-width);
 border-radius: calc(var(--n-rail-width) / 2);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[B("bar",`
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[C("active",{backgroundColor:"var(--n-rail-color-active)"})])]),w("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[C("active",[y(">",[B("title",`
 color: var(--n-link-text-color-active);
 `)])]),B("title",`
 outline: none;
 max-width: 100%;
 text-decoration: none;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 cursor: pointer;
 display: inline-block;
 padding-right: 16px;
 transition: color .3s var(--n-bezier);
 color: var(--n-link-text-color);
 `,[y("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),y("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),$o=Object.assign(Object.assign(Object.assign(Object.assign({},A.props),{affix:Boolean}),ie),ae),Eo=I({name:"Anchor",props:$o,setup(e,{slots:t}){const{mergedClsPrefixRef:r,inlineThemeDisabled:o}=D(e),n=A("Anchor","-anchor",Bo,Ge,e,r),l=P(null),c=b(()=>{const{self:{railColor:s,linkColor:i,railColorActive:f,linkTextColor:S,linkTextColorHover:R,linkTextColorPressed:_,linkTextColorActive:k,linkFontSize:m,railWidth:d,linkPadding:u,borderRadius:T},common:{cubicBezierEaseInOut:p}}=n.value;return{"--n-link-border-radius":T,"--n-link-color":i,"--n-link-font-size":m,"--n-link-text-color":S,"--n-link-text-color-hover":R,"--n-link-text-color-active":k,"--n-link-text-color-pressed":_,"--n-link-padding":u,"--n-bezier":p,"--n-rail-color":s,"--n-rail-color-active":f,"--n-rail-width":d}}),a=o?X("anchor",void 0,c,e):void 0;return{scrollTo(s){var i;(i=l.value)===null||i===void 0||i.setActiveHref(s)},renderAnchor:()=>(a?.onRender(),h(zo,Object.assign({ref:l,style:o?void 0:c.value,class:a?.themeClass.value},ce(e,_o),{mergedClsPrefix:r.value}),t))}},render(){return this.affix?h(ko,Object.assign({},ce(this,So)),{default:this.renderAnchor}):this.renderAnchor()}}),Po=y([w("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Ue({background:"var(--n-color-modal)"}),C("hoverable",[y("&:hover","box-shadow: var(--n-box-shadow);")]),C("content-segmented",[y(">",[B("content",{paddingTop:"var(--n-padding-bottom)"})])]),C("content-soft-segmented",[y(">",[B("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),C("footer-segmented",[y(">",[B("footer",{paddingTop:"var(--n-padding-bottom)"})])]),C("footer-soft-segmented",[y(">",[B("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),y(">",[w("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[B("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),B("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),B("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),B("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),B("content","flex: 1; min-width: 0;"),B("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[y("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),B("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),w("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[y("img",`
 display: block;
 width: 100%;
 `)]),C("bordered",`
 border: 1px solid var(--n-border-color);
 `,[y("&:target","border-color: var(--n-color-target);")]),C("action-segmented",[y(">",[B("action",[y("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),C("content-segmented, content-soft-segmented",[y(">",[B("content",{transition:"border-color 0.3s var(--n-bezier)"},[y("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),C("footer-segmented, footer-soft-segmented",[y(">",[B("footer",{transition:"border-color 0.3s var(--n-bezier)"},[y("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),C("embedded",`
 background-color: var(--n-color-embedded);
 `)]),qe(w("card",`
 background: var(--n-color-modal);
 `,[C("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Ye(w("card",`
 background: var(--n-color-popover);
 `,[C("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),Oo={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function,closeFocusable:Boolean},Io=Object.assign(Object.assign({},A.props),Oo),be=I({name:"Card",props:Io,slots:Object,setup(e){const t=()=>{const{onClose:i}=e;i&&Ke(i)},{inlineThemeDisabled:r,mergedClsPrefixRef:o,mergedRtlRef:n}=D(e),l=A("Card","-card",Po,Qe,e,o),c=Xe("Card",n,o),a=b(()=>{const{size:i}=e,{self:{color:f,colorModal:S,colorTarget:R,textColor:_,titleTextColor:k,titleFontWeight:m,borderColor:d,actionColor:u,borderRadius:T,lineHeight:p,closeIconColor:v,closeIconColorHover:g,closeIconColorPressed:O,closeColorHover:j,closeColorPressed:G,closeBorderRadius:N,closeIconSize:z,closeSize:x,boxShadow:F,colorPopover:V,colorEmbedded:q,colorEmbeddedModal:Be,colorEmbeddedPopover:$e,[Q("padding",i)]:Ee,[Q("fontSize",i)]:Pe,[Q("titleFontSize",i)]:Oe},common:{cubicBezierEaseInOut:Ie}}=l.value,{top:je,left:Ae,bottom:He}=Je(Ee);return{"--n-bezier":Ie,"--n-border-radius":T,"--n-color":f,"--n-color-modal":S,"--n-color-popover":V,"--n-color-embedded":q,"--n-color-embedded-modal":Be,"--n-color-embedded-popover":$e,"--n-color-target":R,"--n-text-color":_,"--n-line-height":p,"--n-action-color":u,"--n-title-text-color":k,"--n-title-font-weight":m,"--n-close-icon-color":v,"--n-close-icon-color-hover":g,"--n-close-icon-color-pressed":O,"--n-close-color-hover":j,"--n-close-color-pressed":G,"--n-border-color":d,"--n-box-shadow":F,"--n-padding-top":je,"--n-padding-bottom":He,"--n-padding-left":Ae,"--n-font-size":Pe,"--n-title-font-size":Oe,"--n-close-size":x,"--n-close-icon-size":z,"--n-close-border-radius":N}}),s=r?X("card",b(()=>e.size[0]),a,e):void 0;return{rtlEnabled:c,mergedClsPrefix:o,mergedTheme:l,handleCloseClick:t,cssVars:r?void 0:a,themeClass:s?.themeClass,onRender:s?.onRender}},render(){const{segmented:e,bordered:t,hoverable:r,mergedClsPrefix:o,rtlEnabled:n,onRender:l,embedded:c,tag:a,$slots:s}=this;return l?.(),h(a,{class:[`${o}-card`,this.themeClass,c&&`${o}-card--embedded`,{[`${o}-card--rtl`]:n,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:t,[`${o}-card--hoverable`]:r}],style:this.cssVars,role:this.role},M(s.cover,i=>{const f=this.cover?W([this.cover()]):i;return f&&h("div",{class:`${o}-card-cover`,role:"none"},f)}),M(s.header,i=>{const{title:f}=this,S=f?W(typeof f=="function"?[f()]:[f]):i;return S||this.closable?h("div",{class:[`${o}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},h("div",{class:`${o}-card-header__main`,role:"heading"},S),M(s["header-extra"],R=>{const _=this.headerExtra?W([this.headerExtra()]):R;return _&&h("div",{class:[`${o}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},_)}),this.closable&&h(Ze,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,focusable:this.closeFocusable,absolute:!0})):null}),M(s.default,i=>{const{content:f}=this,S=f?W(typeof f=="function"?[f()]:[f]):i;return S&&h("div",{class:[`${o}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},S)}),M(s.footer,i=>{const f=this.footer?W([this.footer()]):i;return f&&h("div",{class:[`${o}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},f)}),M(s.action,i=>{const f=this.action?W([this.action()]):i;return f&&h("div",{class:`${o}-card__action`,role:"none"},f)}))}});function jo(e){const{primaryColor:t,successColor:r,warningColor:o,errorColor:n,infoColor:l,fontWeightStrong:c}=e;return{fontWeight:c,rotate:"252deg",colorStartPrimary:Y(t,{alpha:.6}),colorEndPrimary:t,colorStartInfo:Y(l,{alpha:.6}),colorEndInfo:l,colorStartWarning:Y(o,{alpha:.6}),colorEndWarning:o,colorStartError:Y(n,{alpha:.6}),colorEndError:n,colorStartSuccess:Y(r,{alpha:.6}),colorEndSuccess:r}}const Ao={common:ke,self:jo};function Ho(e){const{baseColor:t,textColor2:r,bodyColor:o,cardColor:n,dividerColor:l,actionColor:c,scrollbarColor:a,scrollbarColorHover:s,invertedColor:i}=e;return{textColor:r,textColorInverted:"#FFF",color:o,colorEmbedded:c,headerColor:n,headerColorInverted:i,footerColor:c,footerColorInverted:i,headerBorderColor:l,headerBorderColorInverted:i,footerBorderColor:l,footerBorderColorInverted:i,siderBorderColor:l,siderBorderColorInverted:i,siderColor:n,siderColorInverted:i,siderToggleButtonBorder:`1px solid ${l}`,siderToggleButtonColor:t,siderToggleButtonIconColor:r,siderToggleButtonIconColorInverted:r,siderToggleBarColor:de(o,a),siderToggleBarColorHover:de(o,s),__invertScrollbar:"true"}}const _e=eo({name:"Layout",common:ke,peers:{Scrollbar:oo},self:Ho}),Lo=w("gradient-text",`
 display: inline-block;
 font-weight: var(--n-font-weight);
 -webkit-background-clip: text;
 background-clip: text;
 color: #0000;
 white-space: nowrap;
 background-image: linear-gradient(var(--n-rotate), var(--n-color-start) 0%, var(--n-color-end) 100%);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier);
`),No=Object.assign(Object.assign({},A.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),Fo=I({name:"GradientText",props:No,setup(e){mo();const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=D(e),o=b(()=>{const{type:i}=e;return i==="danger"?"error":i}),n=b(()=>{let i=e.size||e.fontSize;return i&&(i=to(i)),i||void 0}),l=b(()=>{const i=e.color||e.gradient;if(typeof i=="string")return i;if(i){const f=i.deg||0,S=i.from,R=i.to;return`linear-gradient(${f}deg, ${S} 0%, ${R} 100%)`}}),c=A("GradientText","-gradient-text",Lo,Ao,e,t),a=b(()=>{const{value:i}=o,{common:{cubicBezierEaseInOut:f},self:{rotate:S,[Q("colorStart",i)]:R,[Q("colorEnd",i)]:_,fontWeight:k}}=c.value;return{"--n-bezier":f,"--n-rotate":S,"--n-color-start":R,"--n-color-end":_,"--n-font-weight":k}}),s=r?X("gradient-text",b(()=>o.value[0]),a,e):void 0;return{mergedClsPrefix:t,compatibleType:o,styleFontSize:n,styleBgImage:l,cssVars:r?void 0:a,themeClass:s?.themeClass,onRender:s?.onRender}},render(){const{mergedClsPrefix:e,onRender:t}=this;return t?.(),h("span",{class:[`${e}-gradient-text`,`${e}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}}),Vo=w("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[w("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),C("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Mo={embedded:Boolean,position:Te,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Wo=ye("n-layout");function Do(e){return I({name:"Layout",props:Object.assign(Object.assign({},A.props),Mo),setup(t){const r=P(null),o=P(null),{mergedClsPrefixRef:n,inlineThemeDisabled:l}=D(t),c=A("Layout","-layout",Vo,_e,t,n);function a(m,d){if(t.nativeScrollbar){const{value:u}=r;u&&(d===void 0?u.scrollTo(m):u.scrollTo(m,d))}else{const{value:u}=o;u&&u.scrollTo(m,d)}}Se(Wo,t);let s=0,i=0;const f=m=>{var d;const u=m.target;s=u.scrollLeft,i=u.scrollTop,(d=t.onScroll)===null||d===void 0||d.call(t,m)};ro(()=>{if(t.nativeScrollbar){const m=r.value;m&&(m.scrollTop=i,m.scrollLeft=s)}});const S={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},R={scrollTo:a},_=b(()=>{const{common:{cubicBezierEaseInOut:m},self:d}=c.value;return{"--n-bezier":m,"--n-color":t.embedded?d.colorEmbedded:d.color,"--n-text-color":d.textColor}}),k=l?X("layout",b(()=>t.embedded?"e":""),_,t):void 0;return Object.assign({mergedClsPrefix:n,scrollableElRef:r,scrollbarInstRef:o,hasSiderStyle:S,mergedTheme:c,handleNativeElScroll:f,cssVars:l?void 0:_,themeClass:k?.themeClass,onRender:k?.onRender},R)},render(){var t;const{mergedClsPrefix:r,hasSider:o}=this;(t=this.onRender)===null||t===void 0||t.call(this);const n=o?this.hasSiderStyle:void 0,l=[this.themeClass,e,`${r}-layout`,`${r}-layout--${this.position}-positioned`];return h("div",{class:l,style:this.cssVars},this.nativeScrollbar?h("div",{ref:"scrollableElRef",class:[`${r}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,n],onScroll:this.handleNativeElScroll},this.$slots):h(Ce,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,n]}),this.$slots))}})}const Go=Do(!1),qo=w("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[C("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),C("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Yo={position:Te,inverted:Boolean,bordered:{type:Boolean,default:!1}},Uo=I({name:"LayoutHeader",props:Object.assign(Object.assign({},A.props),Yo),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=D(e),o=A("Layout","-layout-header",qo,_e,e,t),n=b(()=>{const{common:{cubicBezierEaseInOut:c},self:a}=o.value,s={"--n-bezier":c};return e.inverted?(s["--n-color"]=a.headerColorInverted,s["--n-text-color"]=a.textColorInverted,s["--n-border-color"]=a.headerBorderColorInverted):(s["--n-color"]=a.headerColor,s["--n-text-color"]=a.textColor,s["--n-border-color"]=a.headerBorderColor),s}),l=r?X("layout-header",b(()=>e.inverted?"a":"b"),n,e):void 0;return{mergedClsPrefix:t,cssVars:r?void 0:n,themeClass:l?.themeClass,onRender:l?.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}});function ze(e){return e.map(t=>h(wo,{key:t.slug,href:`#${t.slug}`,title:t.title},()=>ze(t.children)))}const Qo=I({props:{headers:{type:Array,required:!0}},setup(e){return()=>h(Eo,{ignoreGap:!0},()=>ze(e.headers))}}),Xo={flex:"~",justify:"center",items:"center",space:"x-2",h:"12"},Jo=I({__name:"MyHeader",setup(e){const{t,locale:r}=we(),o=no();function n(l){r.value=l}return(l,c)=>(L(),ne("div",Xo,[E(re,{to:"/",title:$(t)("button.home"),icon:"i-carbon-home",class:"text-3xl"},null,8,["title"]),E(re,{text:"3xl",icon:"i-carbon-moon dark:i-carbon-sun",title:$(t)("button.toggle_dark"),onClick:c[0]||(c[0]=()=>$(lo)())},null,8,["title"]),E($(io),{trigger:"click",options:$(o),onSelect:n},{default:H(()=>[E(re,{icon:"i-carbon-ibm-watson-language-translator",class:"text-3xl",title:$(t)("button.toggle_langs")},null,8,["title"])]),_:1},8,["options"])]))}}),me=I({__name:"QTime",props:{time:{}},setup(e){const t=e,r=b(()=>new Date(t.time)),o=new Date,n=b(()=>{const c=(o.getFullYear()-r.value.getFullYear())*12+o.getMonth()-r.value.getMonth();return c>0&&c<4?"relative":"date"});return(l,c)=>(L(),J($(go),{time:r.value,type:n.value,title:e.time},null,8,["time","type","title"]))}}),Zo={p:"y-6 x-6"},Ko={container:"","max-w":"320",m:"auto",flex:"",space:"x-2"},et={class:"flex gap-2"},ot={sticky:"",top:"4","self-start":"",class:"hidden xl:block","max-w":"70"},lt=I({__name:"default",setup(e){const{t}=we(),r=ao(),o=P(ue.find(c=>c.routePath===r.path.substring(1)));K(()=>r.path,async c=>{o.value=ue.find(a=>a.routePath===c.substring(1))});const n=b(()=>o.value?.attributes),l=`${fe.repoUrl}/commits/${fe.repoBranch}/${o.value?.repoPath}`;return oe(()=>{document.querySelectorAll("figure.code-block button.copy").forEach(a=>{a.addEventListener("click",()=>{if(a.parentNode&&a.parentNode.nextSibling){const i=a.parentNode.nextSibling.textContent;i&&(navigator.clipboard.writeText(i),a.classList.remove("copy"),a.classList.add("copied"),setTimeout(()=>{a.classList.remove("copied"),a.classList.add("copy")},1e3))}})})}),(c,a)=>{const s=co("RouterView");return L(),ne(so,null,[E($(Go),{"scroll-smooth":"",position:"absolute",class:"text-gray-700 dark:text-gray-200","native-scrollbar":!1},{default:H(()=>[E($(Uo),{bordered:""},{default:H(()=>[E(Jo)]),_:1}),U("section",Zo,[U("div",Ko,[E($(be),{embedded:"","flex-grow":"","z-15":""},{default:H(()=>[U("div",et,[n.value&&n.value.createdAt?(L(),J($(Fo),{key:0,class:"block"},{default:H(()=>[he(ge($(t)("article.created_at"))+" ",1),E(me,{time:n.value.createdAt},null,8,["time"])]),_:1})):te("",!0),n.value&&n.value.changedAt?(L(),ne("a",{key:1,class:"text-sky-500 hover:text-green-500 hover:underline primary-clickable cursor-pointer",href:l,target:"_blank"},[he(ge($(t)("article.changed_at"))+" ",1),E(me,{time:n.value.changedAt},null,8,["time"])])):te("",!0)]),E(s,null,{default:H(({Component:i})=>[(L(),J(uo(i)))]),_:1}),U("div",null,[E(ho)])]),_:1}),U("aside",ot,[E($(be),{embedded:"",hoverable:"","content-style":"padding-left: 0.5rem;"},{default:H(()=>[o.value?(L(),J($(Qo),{key:0,text:"left",headers:o.value.headers},null,8,["headers"])):te("",!0)]),_:1})])])])]),_:1}),E(fo)],64)}}});export{lt as default};
