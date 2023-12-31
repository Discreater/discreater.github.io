import{i as K,w as Q,g as U,h as X,j as Ae,k,l as C,d as $,m as V,n as Ne,p as B,q as p,s as h,v as He,x as fe,y as te,z as y,A as T,B as ge,C as Ve,D as ve,E as Fe,F as he,G as Me,N as be,H as We,I as P,J as q,K as re,L as De,M as Ge,O as qe,P as Ye,Q as Qe,R as H,S as Ue,T as Xe,U as G,V as Je,W as Ze,X as me,Y as M,Z as Ke,_ as eo,$ as oo,a0 as ne,a1 as to,a2 as pe,a as xe,a3 as ro,o as j,c as ye,e as z,f as R,a4 as no,a5 as L,a6 as lo,a7 as D,a8 as io,a9 as le,r as ao,b as W,aa as ie,t as ae,ab as J,ac as so,ad as co}from"./main-gcya5LAj.js";import{_ as Z,a as uo,S as fo}from"./SpotLight-RJ0wWN6n.js";import{N as go}from"./Time-J8E5WgH0.js";function Ce(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function vo(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function ho(e,o,r){const n=K(e,null);n!==null&&(o in n||(n[o]=[]),n[o].push(r.value),Q(r,(t,l)=>{const c=n[o],i=c.findIndex(u=>u===l);~i&&c.splice(i,1),c.push(t)}),U(()=>{const t=n[o],l=t.findIndex(c=>c===r.value);~l&&t.splice(l,1)}))}function bo(e,o,r){const n=K(e,null);n!==null&&(o in n||(n[o]=[]),X(()=>{const t=r();t&&n[o].push(t)}),U(()=>{const t=n[o],l=r(),c=t.findIndex(i=>i===l);~c&&t.splice(c,1)}))}let se=!1;function mo(){if(Ae&&window.CSS&&!se&&(se=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function po(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function xo(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const yo=k("affix",[C("affixed",{position:"fixed"},[C("absolute-positioned",{position:"absolute"})])]),ee={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fix"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},Co=fe(ee),So=$({name:"Affix",props:ee,setup(e){const{mergedClsPrefixRef:o}=V(e);Ne("-affix",yo,o);let r=null;const n=B(!1),t=B(!1),l=B(null),c=B(null),i=p(()=>t.value||n.value),u=p(()=>{var a,s;return(s=(a=e.triggerTop)!==null&&a!==void 0?a:e.offsetTop)!==null&&s!==void 0?s:e.top}),d=p(()=>{var a,s;return(s=(a=e.top)!==null&&a!==void 0?a:e.triggerTop)!==null&&s!==void 0?s:e.offsetTop}),w=p(()=>{var a,s;return(s=(a=e.bottom)!==null&&a!==void 0?a:e.triggerBottom)!==null&&s!==void 0?s:e.offsetBottom}),S=p(()=>{var a,s;return(s=(a=e.triggerBottom)!==null&&a!==void 0?a:e.offsetBottom)!==null&&s!==void 0?s:e.bottom}),m=B(null),v=()=>{const{target:a,listenTo:s}=e;a?r=a():s?r=Ce(s):r=document,r&&(r.addEventListener("scroll",g),g())};function g(){He(f)}function f(){const{value:a}=m;if(!r||!a)return;const s=po(r);if(i.value){c.value!==null&&s<c.value&&(n.value=!1,c.value=null),l.value!==null&&s>l.value&&(t.value=!1,l.value=null);return}const _=xo(r),E=a.getBoundingClientRect(),I=E.top-_.top,O=_.bottom-E.bottom,x=u.value,b=S.value;x!==void 0&&I<=x?(n.value=!0,c.value=s-(x-I)):(n.value=!1,c.value=null),b!==void 0&&O<=b?(t.value=!0,l.value=s+b-O):(t.value=!1,l.value=null)}return X(()=>{v()}),U(()=>{r&&r.removeEventListener("scroll",g)}),{selfRef:m,affixed:i,mergedClsPrefix:o,mergedstyle:p(()=>{const a={};return n.value&&u.value!==void 0&&d.value!==void 0&&(a.top=`${d.value}px`),t.value&&S.value!==void 0&&w.value!==void 0&&(a.bottom=`${w.value}px`),a})}},render(){const{mergedClsPrefix:e}=this;return h("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),ko=k("anchor",`
 position: relative;
`,[te("block",`
 padding-left: var(--n-rail-width);
 `,[k("anchor-link",[y("+, >",[k("anchor-link",`
 margin-top: .5em;
 `)])]),k("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),te("show-rail",[y(">",[k("anchor-link","padding-left: 0;")])])]),C("block",[k("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[C("active",`
 background-color: var(--n-link-color);
 `)])]),k("anchor-link-background",`
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),k("anchor-rail",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: var(--n-rail-width);
 border-radius: calc(var(--n-rail-width) / 2);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[T("bar",`
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[C("active",{backgroundColor:"var(--n-rail-color-active)"})])]),k("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[C("active",[y(">",[T("title",`
 color: var(--n-link-text-color-active);
 `)])]),T("title",`
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
 `)])])]),Y=ve("n-anchor"),To={title:String,href:String},wo=$({name:"AnchorLink",props:To,setup(e,{slots:o}){const r=B(null),n=K(Y),t=ge(e,"href"),l=Ve(()=>t.value&&t.value===n.activeHref.value);ho(Y,"collectedLinkHrefs",t),bo(Y,"titleEls",()=>r.value),Q(l,i=>{i&&r.value&&n.updateBarPosition(r.value)});function c(){e.href!==void 0&&n.setActiveHref(e.href)}return()=>{var i;const{value:u}=n.mergedClsPrefix;return h("div",{class:[`${u}-anchor-link`,l.value&&`${u}-anchor-link--active`]},h("a",{ref:r,class:[`${u}-anchor-link__title`],href:e.href,title:vo(e.title),onClick:c},e.title),(i=o.default)===null||i===void 0?void 0:i.call(o))}}});function Ro(e,o){const{top:r,height:n}=e.getBoundingClientRect(),t=o instanceof HTMLElement?o.getBoundingClientRect().top:0;return{top:r-t,height:n}}const oe={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},_o=fe(oe),zo=$({name:"BaseAnchor",props:Object.assign(Object.assign({},oe),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const o=[],r=[],n=B(null),t=B(null),l=B(null),c=B(null),i=p(()=>e.type==="block"),u=p(()=>!i.value&&e.showRail);function d(){const{value:g}=l,{value:f}=t;g&&(g.style.transition="none"),f&&(f.style.transition="none"),r&&r.forEach(a=>{a.style.transition="none"}),We(()=>{const{value:a}=l,{value:s}=t;a&&(a.offsetWidth,a.style.transition=""),s&&(s.offsetWidth,s.style.transition=""),r&&r.forEach(_=>{_.offsetWidth,_.style.transition=""})})}function w(g,f=!0){const{value:a}=l,{value:s}=t,{value:_}=c;if(!_||!a)return;f||(a.style.transition="none",s&&(s.style.transition="none"));const{offsetHeight:E,offsetWidth:I}=g,{top:O,left:x}=g.getBoundingClientRect(),{top:b,left:A}=_.getBoundingClientRect(),N=O-b,F=x-A;a.style.top=`${N}px`,a.style.height=`${E}px`,s&&(s.style.top=`${N}px`,s.style.height=`${E}px`,s.style.maxWidth=`${I+F}px`),a.offsetHeight,s&&s.offsetHeight,f||(a.style.transition="",s&&(s.style.transition=""))}function S(g,f=!0){const a=/^#([^#]+)$/.exec(g);if(!a)return;const s=document.getElementById(a[1]);s&&(n.value=g,s.scrollIntoView(),f||d(),m())}const m=Fe(()=>{v(!0)},128);function v(g=!0){var f;const a=[],s=Ce((f=e.offsetTarget)!==null&&f!==void 0?f:document);o.forEach(x=>{const b=/#([^#]+)$/.exec(x);if(!b)return;const A=document.getElementById(b[1]);if(A&&s){const{top:N,height:F}=Ro(A,s);a.push({top:N,height:F,href:x})}}),a.sort((x,b)=>x.top>b.top?1:(x.top===b.top&&x.height<b.height,-1));const _=n.value,{bound:E,ignoreGap:I}=e,O=a.reduce((x,b)=>b.top+b.height<0?I?b:x:b.top<=E?x===null?b:b.top===x.top?b.href===_?b:x:b.top>x.top?b:x:x,null);g||d(),O?n.value=O.href:n.value=null}return he(Y,{activeHref:n,mergedClsPrefix:ge(e,"mergedClsPrefix"),updateBarPosition:w,setActiveHref:S,collectedLinkHrefs:o,titleEls:r}),X(()=>{document.addEventListener("scroll",m,!0),S(window.location.hash),v(!1)}),Me(()=>{S(window.location.hash),v(!1)}),U(()=>{document.removeEventListener("scroll",m,!0)}),Q(n,g=>{if(g===null){const{value:f}=t;f&&!i.value&&(f.style.maxWidth="0")}}),{selfRef:c,barRef:l,slotRef:t,setActiveHref:S,activeHref:n,isBlockType:i,mergedShowRail:u}},render(){var e;const{mergedClsPrefix:o,mergedShowRail:r,isBlockType:n,$slots:t}=this,l=h("div",{class:[`${o}-anchor`,n&&`${o}-anchor--block`,r&&`${o}-anchor--show-rail`],ref:"selfRef"},r&&this.showBackground?h("div",{ref:"slotRef",class:`${o}-anchor-link-background`}):null,r?h("div",{class:`${o}-anchor-rail`},h("div",{ref:"barRef",class:[`${o}-anchor-rail__bar`,this.activeHref!==null&&`${o}-anchor-rail__bar--active`]})):null,(e=t.default)===null||e===void 0?void 0:e.call(t));return this.internalScrollable?h(be,null,{default:()=>l}):l}}),Bo=Object.assign(Object.assign(Object.assign(Object.assign({},P.props),{affix:Boolean}),ee),oe),$o=$({name:"Anchor",props:Bo,setup(e,{slots:o}){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=V(e),t=P("Anchor","-anchor",ko,De,e,r),l=B(null),c=p(()=>{const{self:{railColor:u,linkColor:d,railColorActive:w,linkTextColor:S,linkTextColorHover:m,linkTextColorPressed:v,linkTextColorActive:g,linkFontSize:f,railWidth:a,linkPadding:s,borderRadius:_},common:{cubicBezierEaseInOut:E}}=t.value;return{"--n-link-border-radius":_,"--n-link-color":d,"--n-link-font-size":f,"--n-link-text-color":S,"--n-link-text-color-hover":m,"--n-link-text-color-active":g,"--n-link-text-color-pressed":v,"--n-link-padding":s,"--n-bezier":E,"--n-rail-color":u,"--n-rail-color-active":w,"--n-rail-width":a}}),i=n?q("anchor",void 0,c,e):void 0;return{scrollTo(u){var d;(d=l.value)===null||d===void 0||d.setActiveHref(u)},renderAnchor:()=>(i==null||i.onRender(),h(zo,Object.assign({ref:l,style:n?void 0:c.value,class:i==null?void 0:i.themeClass.value},re(e,_o),{mergedClsPrefix:r.value}),o))}},render(){return this.affix?h(So,Object.assign({},re(this,Co)),{default:this.renderAnchor}):this.renderAnchor()}}),Eo=y([k("card",`
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
 `,[Ge({background:"var(--n-color-modal)"}),C("hoverable",[y("&:hover","box-shadow: var(--n-box-shadow);")]),C("content-segmented",[y(">",[T("content",{paddingTop:"var(--n-padding-bottom)"})])]),C("content-soft-segmented",[y(">",[T("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),C("footer-segmented",[y(">",[T("footer",{paddingTop:"var(--n-padding-bottom)"})])]),C("footer-soft-segmented",[y(">",[T("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),y(">",[k("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[T("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),T("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),T("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),T("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),T("content","flex: 1; min-width: 0;"),T("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[y("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),T("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),k("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[y("img",`
 display: block;
 width: 100%;
 `)]),C("bordered",`
 border: 1px solid var(--n-border-color);
 `,[y("&:target","border-color: var(--n-color-target);")]),C("action-segmented",[y(">",[T("action",[y("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),C("content-segmented, content-soft-segmented",[y(">",[T("content",{transition:"border-color 0.3s var(--n-bezier)"},[y("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),C("footer-segmented, footer-soft-segmented",[y(">",[T("footer",{transition:"border-color 0.3s var(--n-bezier)"},[y("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),C("embedded",`
 background-color: var(--n-color-embedded);
 `)]),qe(k("card",`
 background: var(--n-color-modal);
 `,[C("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Ye(k("card",`
 background: var(--n-color-popover);
 `,[C("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),Po={title:String,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},Oo=Object.assign(Object.assign({},P.props),Po),ce=$({name:"Card",props:Oo,setup(e){const o=()=>{const{onClose:d}=e;d&&Ue(d)},{inlineThemeDisabled:r,mergedClsPrefixRef:n,mergedRtlRef:t}=V(e),l=P("Card","-card",Eo,Xe,e,n),c=Qe("Card",t,n),i=p(()=>{const{size:d}=e,{self:{color:w,colorModal:S,colorTarget:m,textColor:v,titleTextColor:g,titleFontWeight:f,borderColor:a,actionColor:s,borderRadius:_,lineHeight:E,closeIconColor:I,closeIconColorHover:O,closeIconColorPressed:x,closeColorHover:b,closeColorPressed:A,closeBorderRadius:N,closeIconSize:F,closeSize:Te,boxShadow:we,colorPopover:Re,colorEmbedded:_e,colorEmbeddedModal:ze,colorEmbeddedPopover:Be,[G("padding",d)]:$e,[G("fontSize",d)]:Ee,[G("titleFontSize",d)]:Pe},common:{cubicBezierEaseInOut:Oe}}=l.value,{top:Ie,left:Le,bottom:je}=Je($e);return{"--n-bezier":Oe,"--n-border-radius":_,"--n-color":w,"--n-color-modal":S,"--n-color-popover":Re,"--n-color-embedded":_e,"--n-color-embedded-modal":ze,"--n-color-embedded-popover":Be,"--n-color-target":m,"--n-text-color":v,"--n-line-height":E,"--n-action-color":s,"--n-title-text-color":g,"--n-title-font-weight":f,"--n-close-icon-color":I,"--n-close-icon-color-hover":O,"--n-close-icon-color-pressed":x,"--n-close-color-hover":b,"--n-close-color-pressed":A,"--n-border-color":a,"--n-box-shadow":we,"--n-padding-top":Ie,"--n-padding-bottom":je,"--n-padding-left":Le,"--n-font-size":Ee,"--n-title-font-size":Pe,"--n-close-size":Te,"--n-close-icon-size":F,"--n-close-border-radius":N}}),u=r?q("card",p(()=>e.size[0]),i,e):void 0;return{rtlEnabled:c,mergedClsPrefix:n,mergedTheme:l,handleCloseClick:o,cssVars:r?void 0:i,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){const{footerStyle:e,headerExtraClass:o,headerClass:r,contentClass:n,segmented:t,bordered:l,hoverable:c,mergedClsPrefix:i,rtlEnabled:u,onRender:d,embedded:w,tag:S,$slots:m}=this;return d==null||d(),h(S,{class:[`${i}-card`,this.themeClass,w&&`${i}-card--embedded`,{[`${i}-card--rtl`]:u,[`${i}-card--content${typeof t!="boolean"&&t.content==="soft"?"-soft":""}-segmented`]:t===!0||t!==!1&&t.content,[`${i}-card--footer${typeof t!="boolean"&&t.footer==="soft"?"-soft":""}-segmented`]:t===!0||t!==!1&&t.footer,[`${i}-card--action-segmented`]:t===!0||t!==!1&&t.action,[`${i}-card--bordered`]:l,[`${i}-card--hoverable`]:c}],style:this.cssVars,role:this.role},H(m.cover,v=>v&&h("div",{class:`${i}-card-cover`,role:"none"},v)),H(m.header,v=>v||this.title||this.closable?h("div",{class:[`${i}-card-header`,r],style:this.headerStyle},h("div",{class:`${i}-card-header__main`,role:"heading"},v||this.title),H(m["header-extra"],g=>g&&h("div",{class:[`${i}-card-header__extra`,o],style:this.headerExtraStyle},g)),this.closable?h(Ze,{clsPrefix:i,class:`${i}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),H(m.default,v=>v&&h("div",{class:[`${i}-card__content`,n],style:this.contentStyle,role:"none"},v)),H(m.footer,v=>v&&[h("div",{class:[`${i}-card__footer`,e],style:this.footerStyle,role:"none"},v)]),H(m.action,v=>v&&h("div",{class:`${i}-card__action`,role:"none"},v)))}}),Io=e=>{const{primaryColor:o,successColor:r,warningColor:n,errorColor:t,infoColor:l,fontWeightStrong:c}=e;return{fontWeight:c,rotate:"252deg",colorStartPrimary:M(o,{alpha:.6}),colorEndPrimary:o,colorStartInfo:M(l,{alpha:.6}),colorEndInfo:l,colorStartWarning:M(n,{alpha:.6}),colorEndWarning:n,colorStartError:M(t,{alpha:.6}),colorEndError:t,colorStartSuccess:M(r,{alpha:.6}),colorEndSuccess:r}},Lo={name:"GradientText",common:me,self:Io},jo=Lo,Ao=k("gradient-text",`
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
`),No=Object.assign(Object.assign({},P.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),de=$({name:"GradientText",props:No,setup(e){mo();const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=V(e),n=p(()=>{const{type:d}=e;return d==="danger"?"error":d}),t=p(()=>{let d=e.size||e.fontSize;return d&&(d=Ke(d)),d||void 0}),l=p(()=>{const d=e.color||e.gradient;if(typeof d=="string")return d;if(d){const w=d.deg||0,S=d.from,m=d.to;return`linear-gradient(${w}deg, ${S} 0%, ${m} 100%)`}}),c=P("GradientText","-gradient-text",Ao,jo,e,o),i=p(()=>{const{value:d}=n,{common:{cubicBezierEaseInOut:w},self:{rotate:S,[G("colorStart",d)]:m,[G("colorEnd",d)]:v,fontWeight:g}}=c.value;return{"--n-bezier":w,"--n-rotate":S,"--n-color-start":m,"--n-color-end":v,"--n-font-weight":g}}),u=r?q("gradient-text",p(()=>n.value[0]),i,e):void 0;return{mergedClsPrefix:o,compatibleType:n,styleFontSize:t,styleBgImage:l,cssVars:r?void 0:i,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){const{mergedClsPrefix:e,onRender:o}=this;return o==null||o(),h("span",{class:[`${e}-gradient-text`,`${e}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}}),Ho=e=>{const{baseColor:o,textColor2:r,bodyColor:n,cardColor:t,dividerColor:l,actionColor:c,scrollbarColor:i,scrollbarColorHover:u,invertedColor:d}=e;return{textColor:r,textColorInverted:"#FFF",color:n,colorEmbedded:c,headerColor:t,headerColorInverted:d,footerColor:c,footerColorInverted:d,headerBorderColor:l,headerBorderColorInverted:d,footerBorderColor:l,footerBorderColorInverted:d,siderBorderColor:l,siderBorderColorInverted:d,siderColor:t,siderColorInverted:d,siderToggleButtonBorder:`1px solid ${l}`,siderToggleButtonColor:o,siderToggleButtonIconColor:r,siderToggleButtonIconColorInverted:r,siderToggleBarColor:ne(n,i),siderToggleBarColorHover:ne(n,u),__invertScrollbar:"true"}},Vo=eo({name:"Layout",common:me,peers:{Scrollbar:oo},self:Ho}),Se=Vo,Fo=k("layout",`
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
`,[k("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),C("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Mo={embedded:Boolean,position:pe,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Wo=ve("n-layout");function Do(e){return $({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},P.props),Mo),setup(o){const r=B(null),n=B(null),{mergedClsPrefixRef:t,inlineThemeDisabled:l}=V(o),c=P("Layout","-layout",Fo,Se,o,t);function i(f,a){if(o.nativeScrollbar){const{value:s}=r;s&&(a===void 0?s.scrollTo(f):s.scrollTo(f,a))}else{const{value:s}=n;s&&s.scrollTo(f,a)}}he(Wo,o);let u=0,d=0;const w=f=>{var a;const s=f.target;u=s.scrollLeft,d=s.scrollTop,(a=o.onScroll)===null||a===void 0||a.call(o,f)};to(()=>{if(o.nativeScrollbar){const f=r.value;f&&(f.scrollTop=d,f.scrollLeft=u)}});const S={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},m={scrollTo:i},v=p(()=>{const{common:{cubicBezierEaseInOut:f},self:a}=c.value;return{"--n-bezier":f,"--n-color":o.embedded?a.colorEmbedded:a.color,"--n-text-color":a.textColor}}),g=l?q("layout",p(()=>o.embedded?"e":""),v,o):void 0;return Object.assign({mergedClsPrefix:t,scrollableElRef:r,scrollbarInstRef:n,hasSiderStyle:S,mergedTheme:c,handleNativeElScroll:w,cssVars:l?void 0:v,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender},m)},render(){var o;const{mergedClsPrefix:r,hasSider:n}=this;(o=this.onRender)===null||o===void 0||o.call(this);const t=n?this.hasSiderStyle:void 0,l=[this.themeClass,e&&`${r}-layout-content`,`${r}-layout`,`${r}-layout--${this.position}-positioned`];return h("div",{class:l,style:this.cssVars},this.nativeScrollbar?h("div",{ref:"scrollableElRef",class:[`${r}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,t],onScroll:this.handleNativeElScroll},this.$slots):h(be,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,t]}),this.$slots))}})}const Go=Do(!1),qo=k("layout-header",`
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
 `)]),Yo={position:pe,inverted:Boolean,bordered:{type:Boolean,default:!1}},Qo=$({name:"LayoutHeader",props:Object.assign(Object.assign({},P.props),Yo),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=V(e),n=P("Layout","-layout-header",qo,Se,e,o),t=p(()=>{const{common:{cubicBezierEaseInOut:c},self:i}=n.value,u={"--n-bezier":c};return e.inverted?(u["--n-color"]=i.headerColorInverted,u["--n-text-color"]=i.textColorInverted,u["--n-border-color"]=i.headerBorderColorInverted):(u["--n-color"]=i.headerColor,u["--n-text-color"]=i.textColor,u["--n-border-color"]=i.headerBorderColor),u}),l=r?q("layout-header",p(()=>e.inverted?"a":"b"),t,e):void 0;return{mergedClsPrefix:o,cssVars:r?void 0:t,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Uo={flex:"~",justify:"center",items:"center",space:"x-2",h:"12"},Xo=$({__name:"MyHeader",setup(e){const{t:o,locale:r}=xe(),n=ro();function t(l){r.value=l}return(l,c)=>(j(),ye("div",Uo,[z(Z,{to:"/",title:R(o)("button.home"),icon:"i-mdi-home",class:"text-3xl"},null,8,["title"]),z(Z,{text:"3xl",icon:"i-ri-moon-fill dark:i-ri-sun-fill",title:R(o)("button.toggle_dark"),onClick:c[0]||(c[0]=()=>R(no)())},null,8,["title"]),z(R(lo),{trigger:"click",options:R(n),onSelect:t},{default:L(()=>[z(Z,{icon:"i-ooui-language",class:"text-3xl",title:R(o)("button.toggle_langs")},null,8,["title"])]),_:1},8,["options"])]))}});function ke(e){return e.map(o=>h(wo,{key:o.slug,href:`#${o.slug}`,title:o.title},()=>ke(o.children)))}const Jo=$({props:{headers:{type:Array,required:!0}},setup(e){return()=>h($o,{ignoreGap:!0},()=>ke(e.headers))}}),ue=$({__name:"QTime",props:{time:{}},setup(e){const o=e,r=p(()=>new Date(o.time)),n=new Date,t=p(()=>{const c=(n.getFullYear()-r.value.getFullYear())*12+n.getMonth()-r.value.getMonth();return c>0&&c<4?"relative":"date"});return(l,c)=>(j(),D(R(go),{time:r.value,type:t.value,title:l.time},null,8,["time","type","title"]))}}),Zo={p:"y-6 x-6"},Ko={container:"","max-w":"320",m:"auto",flex:"",space:"x-2"},et={class:"flex gap-2"},ot={sticky:"",top:"4","self-start":"",class:"hidden xl:block","max-w":"70"},lt=$({__name:"default",setup(e){const{t:o}=xe(),r=io(),n=B(le.find(l=>l.path===r.path.substring(1)));Q(()=>r.path,async l=>{n.value=le.find(c=>c.path===l.substring(1))});const t=p(()=>{var l;return(l=n.value)==null?void 0:l.attributes});return X(()=>{document.querySelectorAll("figure.code-block button.copy").forEach(c=>{c.addEventListener("click",()=>{if(c.parentNode&&c.parentNode.nextSibling){const u=c.parentNode.nextSibling.textContent;u&&(navigator.clipboard.writeText(u),c.classList.remove("copy"),c.classList.add("copied"),setTimeout(()=>{c.classList.remove("copied"),c.classList.add("copy")},1e3))}})})}),(l,c)=>{const i=ao("RouterView");return j(),ye(co,null,[z(R(Go),{"scroll-smooth":"",position:"absolute",class:"text-gray-700 dark:text-gray-200","native-scrollbar":!1},{default:L(()=>[z(R(Qo),{bordered:""},{default:L(()=>[z(Xo)]),_:1}),W("section",Zo,[W("div",Ko,[z(R(ce),{embedded:"","flex-grow":"","z-15":""},{default:L(()=>[W("div",et,[t.value&&t.value.createdAt?(j(),D(R(de),{key:0,class:"block"},{default:L(()=>[ie(ae(R(o)("article.created_at"))+" ",1),z(ue,{time:t.value.createdAt},null,8,["time"])]),_:1})):J("",!0),t.value&&t.value.changedAt?(j(),D(R(de),{key:1,class:"block"},{default:L(()=>[ie(ae(R(o)("article.changed_at"))+" ",1),z(ue,{time:t.value.changedAt},null,8,["time"])]),_:1})):J("",!0)]),z(i,null,{default:L(({Component:u})=>[(j(),D(so(u)))]),_:1}),W("div",null,[z(uo)])]),_:1}),W("aside",ot,[z(R(ce),{embedded:"",hoverable:"","content-style":"padding-left: 0.5rem;"},{default:L(()=>[n.value?(j(),D(R(Jo),{key:0,text:"left",headers:n.value.headers},null,8,["headers"])):J("",!0)]),_:1})])])])]),_:1}),z(fo)],64)}}});export{lt as default};
