import{i as ee,w as U,g as Q,h as X,j as Ae,k as C,l as y,d as $,m as V,n as He,p as B,q as b,s as g,v as Ne,x as he,y as re,z as x,A as k,B as ge,C as Ve,D as ve,E as Fe,F as be,G as Me,N as me,H as We,I as P,J as G,K as ne,L as De,M as Ge,O as qe,P as Ye,Q as Ue,R as N,S as Qe,T as Xe,U as D,V as Je,W as Ze,X as pe,Y as M,Z as Ke,_ as eo,$ as oo,a0 as le,a1 as to,a2 as xe,a as ye,a3 as ro,o as j,c as K,e as z,f as w,a4 as no,a5 as L,a6 as lo,a7 as q,a8 as io,a9 as ie,aa as ae,r as ao,b as W,ab as se,t as ce,ac as J,ad as so,ae as co}from"./main-2phR2NMm.js";import{_ as Z,a as uo,S as fo}from"./SpotLight-7GMriYew.js";import{N as ho}from"./Time-8BjW6AP0.js";function Ce(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function go(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function vo(e,t,r){const o=ee(e,null);o!==null&&(t in o||(o[t]=[]),o[t].push(r.value),U(r,(n,i)=>{const u=o[t],d=u.findIndex(s=>s===i);~d&&u.splice(d,1),u.push(n)}),Q(()=>{const n=o[t],i=n.findIndex(u=>u===r.value);~i&&n.splice(i,1)}))}function bo(e,t,r){const o=ee(e,null);o!==null&&(t in o||(o[t]=[]),X(()=>{const n=r();n&&o[t].push(n)}),Q(()=>{const n=o[t],i=r(),u=n.findIndex(d=>d===i);~u&&n.splice(u,1)}))}let de=!1;function mo(){if(Ae&&window.CSS&&!de&&(de=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function po(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function xo(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const yo=C("affix",[y("affixed",{position:"fixed"},[y("absolute-positioned",{position:"absolute"})])]),oe={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fixed"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},Co=he(oe),So=$({name:"Affix",props:oe,setup(e){const{mergedClsPrefixRef:t}=V(e);He("-affix",yo,t);let r=null;const o=B(!1),n=B(!1),i=B(null),u=B(null),d=b(()=>n.value||o.value),s=b(()=>{var a,c;return(c=(a=e.triggerTop)!==null&&a!==void 0?a:e.offsetTop)!==null&&c!==void 0?c:e.top}),l=b(()=>{var a,c;return(c=(a=e.top)!==null&&a!==void 0?a:e.triggerTop)!==null&&c!==void 0?c:e.offsetTop}),m=b(()=>{var a,c;return(c=(a=e.bottom)!==null&&a!==void 0?a:e.triggerBottom)!==null&&c!==void 0?c:e.offsetBottom}),S=b(()=>{var a,c;return(c=(a=e.triggerBottom)!==null&&a!==void 0?a:e.offsetBottom)!==null&&c!==void 0?c:e.bottom}),T=B(null),R=()=>{const{target:a,listenTo:c}=e;a?r=a():c?r=Ce(c):r=document,r&&(r.addEventListener("scroll",h),h())};function h(){Ne(f)}function f(){const{value:a}=T;if(!r||!a)return;const c=po(r);if(d.value){u.value!==null&&c<u.value&&(o.value=!1,u.value=null),i.value!==null&&c>i.value&&(n.value=!1,i.value=null);return}const _=xo(r),E=a.getBoundingClientRect(),I=E.top-_.top,O=_.bottom-E.bottom,p=s.value,v=S.value;p!==void 0&&I<=p?(o.value=!0,u.value=c-(p-I)):(o.value=!1,u.value=null),v!==void 0&&O<=v?(n.value=!0,i.value=c+v-O):(n.value=!1,i.value=null)}return X(()=>{R()}),Q(()=>{r&&r.removeEventListener("scroll",h)}),{selfRef:T,affixed:d,mergedClsPrefix:t,mergedstyle:b(()=>{const a={};return o.value&&s.value!==void 0&&l.value!==void 0&&(a.top=`${l.value}px`),n.value&&S.value!==void 0&&m.value!==void 0&&(a.bottom=`${m.value}px`),a})}},render(){const{mergedClsPrefix:e}=this;return g("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),ko=C("anchor",`
 position: relative;
`,[re("block",`
 padding-left: var(--n-rail-width);
 `,[C("anchor-link",[x("+, >",[C("anchor-link",`
 margin-top: .5em;
 `)])]),C("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),re("show-rail",[x(">",[C("anchor-link","padding-left: 0;")])])]),y("block",[C("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[y("active",`
 background-color: var(--n-link-color);
 `)])]),C("anchor-link-background",`
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),C("anchor-rail",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: var(--n-rail-width);
 border-radius: calc(var(--n-rail-width) / 2);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[k("bar",`
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[y("active",{backgroundColor:"var(--n-rail-color-active)"})])]),C("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[y("active",[x(">",[k("title",`
 color: var(--n-link-text-color-active);
 `)])]),k("title",`
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
 `,[x("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),x("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),Y=ve("n-anchor"),To={title:String,href:String},wo=$({name:"AnchorLink",props:To,setup(e,{slots:t}){const r=B(null),o=ee(Y),n=ge(e,"href"),i=Ve(()=>n.value&&n.value===o.activeHref.value);vo(Y,"collectedLinkHrefs",n),bo(Y,"titleEls",()=>r.value),U(i,d=>{d&&r.value&&o.updateBarPosition(r.value)});function u(){e.href!==void 0&&o.setActiveHref(e.href)}return()=>{var d;const{value:s}=o.mergedClsPrefix;return g("div",{class:[`${s}-anchor-link`,i.value&&`${s}-anchor-link--active`]},g("a",{ref:r,class:[`${s}-anchor-link__title`],href:e.href,title:go(e.title),onClick:u},e.title),(d=t.default)===null||d===void 0?void 0:d.call(t))}}});function Ro(e,t){const{top:r,height:o}=e.getBoundingClientRect(),n=t instanceof HTMLElement?t.getBoundingClientRect().top:0;return{top:r-n,height:o}}const te={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},_o=he(te),zo=$({name:"BaseAnchor",props:Object.assign(Object.assign({},te),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const t=[],r=[],o=B(null),n=B(null),i=B(null),u=B(null),d=b(()=>e.type==="block"),s=b(()=>!d.value&&e.showRail);function l(){const{value:h}=i,{value:f}=n;h&&(h.style.transition="none"),f&&(f.style.transition="none"),r&&r.forEach(a=>{a.style.transition="none"}),We(()=>{const{value:a}=i,{value:c}=n;a&&(a.offsetWidth,a.style.transition=""),c&&(c.offsetWidth,c.style.transition=""),r&&r.forEach(_=>{_.offsetWidth,_.style.transition=""})})}function m(h,f=!0){const{value:a}=i,{value:c}=n,{value:_}=u;if(!_||!a)return;f||(a.style.transition="none",c&&(c.style.transition="none"));const{offsetHeight:E,offsetWidth:I}=h,{top:O,left:p}=h.getBoundingClientRect(),{top:v,left:A}=_.getBoundingClientRect(),H=O-v,F=p-A;a.style.top=`${H}px`,a.style.height=`${E}px`,c&&(c.style.top=`${H}px`,c.style.height=`${E}px`,c.style.maxWidth=`${I+F}px`),a.offsetHeight,c&&c.offsetHeight,f||(a.style.transition="",c&&(c.style.transition=""))}function S(h,f=!0){const a=/^#([^#]+)$/.exec(h);if(!a)return;const c=document.getElementById(a[1]);c&&(o.value=h,c.scrollIntoView(),f||l(),T())}const T=Fe(()=>{R(!0)},128);function R(h=!0){var f;const a=[],c=Ce((f=e.offsetTarget)!==null&&f!==void 0?f:document);t.forEach(p=>{const v=/#([^#]+)$/.exec(p);if(!v)return;const A=document.getElementById(v[1]);if(A&&c){const{top:H,height:F}=Ro(A,c);a.push({top:H,height:F,href:p})}}),a.sort((p,v)=>p.top>v.top?1:(p.top===v.top&&p.height<v.height,-1));const _=o.value,{bound:E,ignoreGap:I}=e,O=a.reduce((p,v)=>v.top+v.height<0?I?v:p:v.top<=E?p===null?v:v.top===p.top?v.href===_?v:p:v.top>p.top?v:p:p,null);h||l(),O?o.value=O.href:o.value=null}return be(Y,{activeHref:o,mergedClsPrefix:ge(e,"mergedClsPrefix"),updateBarPosition:m,setActiveHref:S,collectedLinkHrefs:t,titleEls:r}),X(()=>{document.addEventListener("scroll",T,!0),S(window.location.hash),R(!1)}),Me(()=>{S(window.location.hash),R(!1)}),Q(()=>{document.removeEventListener("scroll",T,!0)}),U(o,h=>{if(h===null){const{value:f}=n;f&&!d.value&&(f.style.maxWidth="0")}}),{selfRef:u,barRef:i,slotRef:n,setActiveHref:S,activeHref:o,isBlockType:d,mergedShowRail:s}},render(){var e;const{mergedClsPrefix:t,mergedShowRail:r,isBlockType:o,$slots:n}=this,i=g("div",{class:[`${t}-anchor`,o&&`${t}-anchor--block`,r&&`${t}-anchor--show-rail`],ref:"selfRef"},r&&this.showBackground?g("div",{ref:"slotRef",class:`${t}-anchor-link-background`}):null,r?g("div",{class:`${t}-anchor-rail`},g("div",{ref:"barRef",class:[`${t}-anchor-rail__bar`,this.activeHref!==null&&`${t}-anchor-rail__bar--active`]})):null,(e=n.default)===null||e===void 0?void 0:e.call(n));return this.internalScrollable?g(me,null,{default:()=>i}):i}}),Bo=Object.assign(Object.assign(Object.assign(Object.assign({},P.props),{affix:Boolean}),oe),te),$o=$({name:"Anchor",props:Bo,setup(e,{slots:t}){const{mergedClsPrefixRef:r,inlineThemeDisabled:o}=V(e),n=P("Anchor","-anchor",ko,De,e,r),i=B(null),u=b(()=>{const{self:{railColor:s,linkColor:l,railColorActive:m,linkTextColor:S,linkTextColorHover:T,linkTextColorPressed:R,linkTextColorActive:h,linkFontSize:f,railWidth:a,linkPadding:c,borderRadius:_},common:{cubicBezierEaseInOut:E}}=n.value;return{"--n-link-border-radius":_,"--n-link-color":l,"--n-link-font-size":f,"--n-link-text-color":S,"--n-link-text-color-hover":T,"--n-link-text-color-active":h,"--n-link-text-color-pressed":R,"--n-link-padding":c,"--n-bezier":E,"--n-rail-color":s,"--n-rail-color-active":m,"--n-rail-width":a}}),d=o?G("anchor",void 0,u,e):void 0;return{scrollTo(s){var l;(l=i.value)===null||l===void 0||l.setActiveHref(s)},renderAnchor:()=>(d==null||d.onRender(),g(zo,Object.assign({ref:i,style:o?void 0:u.value,class:d==null?void 0:d.themeClass.value},ne(e,_o),{mergedClsPrefix:r.value}),t))}},render(){return this.affix?g(So,Object.assign({},ne(this,Co)),{default:this.renderAnchor}):this.renderAnchor()}}),Eo=x([C("card",`
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
 `,[Ge({background:"var(--n-color-modal)"}),y("hoverable",[x("&:hover","box-shadow: var(--n-box-shadow);")]),y("content-segmented",[x(">",[k("content",{paddingTop:"var(--n-padding-bottom)"})])]),y("content-soft-segmented",[x(">",[k("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),y("footer-segmented",[x(">",[k("footer",{paddingTop:"var(--n-padding-bottom)"})])]),y("footer-soft-segmented",[x(">",[k("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),x(">",[C("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[k("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),k("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),k("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),k("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),k("content","flex: 1; min-width: 0;"),k("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[x("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),k("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),C("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[x("img",`
 display: block;
 width: 100%;
 `)]),y("bordered",`
 border: 1px solid var(--n-border-color);
 `,[x("&:target","border-color: var(--n-color-target);")]),y("action-segmented",[x(">",[k("action",[x("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),y("content-segmented, content-soft-segmented",[x(">",[k("content",{transition:"border-color 0.3s var(--n-bezier)"},[x("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),y("footer-segmented, footer-soft-segmented",[x(">",[k("footer",{transition:"border-color 0.3s var(--n-bezier)"},[x("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),y("embedded",`
 background-color: var(--n-color-embedded);
 `)]),qe(C("card",`
 background: var(--n-color-modal);
 `,[y("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Ye(C("card",`
 background: var(--n-color-popover);
 `,[y("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),Po={title:String,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},Oo=Object.assign(Object.assign({},P.props),Po),ue=$({name:"Card",props:Oo,setup(e){const t=()=>{const{onClose:l}=e;l&&Qe(l)},{inlineThemeDisabled:r,mergedClsPrefixRef:o,mergedRtlRef:n}=V(e),i=P("Card","-card",Eo,Xe,e,o),u=Ue("Card",n,o),d=b(()=>{const{size:l}=e,{self:{color:m,colorModal:S,colorTarget:T,textColor:R,titleTextColor:h,titleFontWeight:f,borderColor:a,actionColor:c,borderRadius:_,lineHeight:E,closeIconColor:I,closeIconColorHover:O,closeIconColorPressed:p,closeColorHover:v,closeColorPressed:A,closeBorderRadius:H,closeIconSize:F,closeSize:Te,boxShadow:we,colorPopover:Re,colorEmbedded:_e,colorEmbeddedModal:ze,colorEmbeddedPopover:Be,[D("padding",l)]:$e,[D("fontSize",l)]:Ee,[D("titleFontSize",l)]:Pe},common:{cubicBezierEaseInOut:Oe}}=i.value,{top:Ie,left:Le,bottom:je}=Je($e);return{"--n-bezier":Oe,"--n-border-radius":_,"--n-color":m,"--n-color-modal":S,"--n-color-popover":Re,"--n-color-embedded":_e,"--n-color-embedded-modal":ze,"--n-color-embedded-popover":Be,"--n-color-target":T,"--n-text-color":R,"--n-line-height":E,"--n-action-color":c,"--n-title-text-color":h,"--n-title-font-weight":f,"--n-close-icon-color":I,"--n-close-icon-color-hover":O,"--n-close-icon-color-pressed":p,"--n-close-color-hover":v,"--n-close-color-pressed":A,"--n-border-color":a,"--n-box-shadow":we,"--n-padding-top":Ie,"--n-padding-bottom":je,"--n-padding-left":Le,"--n-font-size":Ee,"--n-title-font-size":Pe,"--n-close-size":Te,"--n-close-icon-size":F,"--n-close-border-radius":H}}),s=r?G("card",b(()=>e.size[0]),d,e):void 0;return{rtlEnabled:u,mergedClsPrefix:o,mergedTheme:i,handleCloseClick:t,cssVars:r?void 0:d,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){const{segmented:e,bordered:t,hoverable:r,mergedClsPrefix:o,rtlEnabled:n,onRender:i,embedded:u,tag:d,$slots:s}=this;return i==null||i(),g(d,{class:[`${o}-card`,this.themeClass,u&&`${o}-card--embedded`,{[`${o}-card--rtl`]:n,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:t,[`${o}-card--hoverable`]:r}],style:this.cssVars,role:this.role},N(s.cover,l=>l&&g("div",{class:`${o}-card-cover`,role:"none"},l)),N(s.header,l=>l||this.title||this.closable?g("div",{class:[`${o}-card-header`,this.headerClass],style:this.headerStyle},g("div",{class:`${o}-card-header__main`,role:"heading"},l||this.title),N(s["header-extra"],m=>m&&g("div",{class:[`${o}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},m)),this.closable?g(Ze,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),N(s.default,l=>l&&g("div",{class:[`${o}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},l)),N(s.footer,l=>l&&[g("div",{class:[`${o}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},l)]),N(s.action,l=>l&&g("div",{class:`${o}-card__action`,role:"none"},l)))}}),Io=e=>{const{primaryColor:t,successColor:r,warningColor:o,errorColor:n,infoColor:i,fontWeightStrong:u}=e;return{fontWeight:u,rotate:"252deg",colorStartPrimary:M(t,{alpha:.6}),colorEndPrimary:t,colorStartInfo:M(i,{alpha:.6}),colorEndInfo:i,colorStartWarning:M(o,{alpha:.6}),colorEndWarning:o,colorStartError:M(n,{alpha:.6}),colorEndError:n,colorStartSuccess:M(r,{alpha:.6}),colorEndSuccess:r}},Lo={name:"GradientText",common:pe,self:Io},jo=Lo,Ao=C("gradient-text",`
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
`),Ho=Object.assign(Object.assign({},P.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),No=$({name:"GradientText",props:Ho,setup(e){mo();const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=V(e),o=b(()=>{const{type:l}=e;return l==="danger"?"error":l}),n=b(()=>{let l=e.size||e.fontSize;return l&&(l=Ke(l)),l||void 0}),i=b(()=>{const l=e.color||e.gradient;if(typeof l=="string")return l;if(l){const m=l.deg||0,S=l.from,T=l.to;return`linear-gradient(${m}deg, ${S} 0%, ${T} 100%)`}}),u=P("GradientText","-gradient-text",Ao,jo,e,t),d=b(()=>{const{value:l}=o,{common:{cubicBezierEaseInOut:m},self:{rotate:S,[D("colorStart",l)]:T,[D("colorEnd",l)]:R,fontWeight:h}}=u.value;return{"--n-bezier":m,"--n-rotate":S,"--n-color-start":T,"--n-color-end":R,"--n-font-weight":h}}),s=r?G("gradient-text",b(()=>o.value[0]),d,e):void 0;return{mergedClsPrefix:t,compatibleType:o,styleFontSize:n,styleBgImage:i,cssVars:r?void 0:d,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){const{mergedClsPrefix:e,onRender:t}=this;return t==null||t(),g("span",{class:[`${e}-gradient-text`,`${e}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}}),Vo=e=>{const{baseColor:t,textColor2:r,bodyColor:o,cardColor:n,dividerColor:i,actionColor:u,scrollbarColor:d,scrollbarColorHover:s,invertedColor:l}=e;return{textColor:r,textColorInverted:"#FFF",color:o,colorEmbedded:u,headerColor:n,headerColorInverted:l,footerColor:u,footerColorInverted:l,headerBorderColor:i,headerBorderColorInverted:l,footerBorderColor:i,footerBorderColorInverted:l,siderBorderColor:i,siderBorderColorInverted:l,siderColor:n,siderColorInverted:l,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:t,siderToggleButtonIconColor:r,siderToggleButtonIconColorInverted:r,siderToggleBarColor:le(o,d),siderToggleBarColorHover:le(o,s),__invertScrollbar:"true"}},Fo=eo({name:"Layout",common:pe,peers:{Scrollbar:oo},self:Vo}),Se=Fo,Mo=C("layout",`
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
`,[C("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),y("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Wo={embedded:Boolean,position:xe,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Do=ve("n-layout");function Go(e){return $({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},P.props),Wo),setup(t){const r=B(null),o=B(null),{mergedClsPrefixRef:n,inlineThemeDisabled:i}=V(t),u=P("Layout","-layout",Mo,Se,t,n);function d(f,a){if(t.nativeScrollbar){const{value:c}=r;c&&(a===void 0?c.scrollTo(f):c.scrollTo(f,a))}else{const{value:c}=o;c&&c.scrollTo(f,a)}}be(Do,t);let s=0,l=0;const m=f=>{var a;const c=f.target;s=c.scrollLeft,l=c.scrollTop,(a=t.onScroll)===null||a===void 0||a.call(t,f)};to(()=>{if(t.nativeScrollbar){const f=r.value;f&&(f.scrollTop=l,f.scrollLeft=s)}});const S={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},T={scrollTo:d},R=b(()=>{const{common:{cubicBezierEaseInOut:f},self:a}=u.value;return{"--n-bezier":f,"--n-color":t.embedded?a.colorEmbedded:a.color,"--n-text-color":a.textColor}}),h=i?G("layout",b(()=>t.embedded?"e":""),R,t):void 0;return Object.assign({mergedClsPrefix:n,scrollableElRef:r,scrollbarInstRef:o,hasSiderStyle:S,mergedTheme:u,handleNativeElScroll:m,cssVars:i?void 0:R,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender},T)},render(){var t;const{mergedClsPrefix:r,hasSider:o}=this;(t=this.onRender)===null||t===void 0||t.call(this);const n=o?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${r}-layout-content`,`${r}-layout`,`${r}-layout--${this.position}-positioned`];return g("div",{class:i,style:this.cssVars},this.nativeScrollbar?g("div",{ref:"scrollableElRef",class:[`${r}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,n],onScroll:this.handleNativeElScroll},this.$slots):g(me,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,n]}),this.$slots))}})}const qo=Go(!1),Yo=C("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[y("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),y("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Uo={position:xe,inverted:Boolean,bordered:{type:Boolean,default:!1}},Qo=$({name:"LayoutHeader",props:Object.assign(Object.assign({},P.props),Uo),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=V(e),o=P("Layout","-layout-header",Yo,Se,e,t),n=b(()=>{const{common:{cubicBezierEaseInOut:u},self:d}=o.value,s={"--n-bezier":u};return e.inverted?(s["--n-color"]=d.headerColorInverted,s["--n-text-color"]=d.textColorInverted,s["--n-border-color"]=d.headerBorderColorInverted):(s["--n-color"]=d.headerColor,s["--n-text-color"]=d.textColor,s["--n-border-color"]=d.headerBorderColor),s}),i=r?G("layout-header",b(()=>e.inverted?"a":"b"),n,e):void 0;return{mergedClsPrefix:t,cssVars:r?void 0:n,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),g("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Xo={flex:"~",justify:"center",items:"center",space:"x-2",h:"12"},Jo=$({__name:"MyHeader",setup(e){const{t,locale:r}=ye(),o=ro();function n(i){r.value=i}return(i,u)=>(j(),K("div",Xo,[z(Z,{to:"/",title:w(t)("button.home"),icon:"i-mdi-home",class:"text-3xl"},null,8,["title"]),z(Z,{text:"3xl",icon:"i-ri-moon-fill dark:i-ri-sun-fill",title:w(t)("button.toggle_dark"),onClick:u[0]||(u[0]=()=>w(no)())},null,8,["title"]),z(w(lo),{trigger:"click",options:w(o),onSelect:n},{default:L(()=>[z(Z,{icon:"i-ooui-language",class:"text-3xl",title:w(t)("button.toggle_langs")},null,8,["title"])]),_:1},8,["options"])]))}});function ke(e){return e.map(t=>g(wo,{key:t.slug,href:`#${t.slug}`,title:t.title},()=>ke(t.children)))}const Zo=$({props:{headers:{type:Array,required:!0}},setup(e){return()=>g($o,{ignoreGap:!0},()=>ke(e.headers))}}),fe=$({__name:"QTime",props:{time:{}},setup(e){const t=e,r=b(()=>new Date(t.time)),o=new Date,n=b(()=>{const u=(o.getFullYear()-r.value.getFullYear())*12+o.getMonth()-r.value.getMonth();return u>0&&u<4?"relative":"date"});return(i,u)=>(j(),q(w(ho),{time:r.value,type:n.value,title:i.time},null,8,["time","type","title"]))}}),Ko={p:"y-6 x-6"},et={container:"","max-w":"320",m:"auto",flex:"",space:"x-2"},ot={class:"flex gap-2"},tt={sticky:"",top:"4","self-start":"",class:"hidden xl:block","max-w":"70"},it=$({__name:"default",setup(e){var u;const{t}=ye(),r=io(),o=B(ie.find(d=>d.routePath===r.path.substring(1)));U(()=>r.path,async d=>{o.value=ie.find(s=>s.routePath===d.substring(1))});const n=b(()=>{var d;return(d=o.value)==null?void 0:d.attributes}),i=`${ae.repoUrl}/commits/${ae.repoBranch}/${(u=o.value)==null?void 0:u.repoPath}`;return X(()=>{document.querySelectorAll("figure.code-block button.copy").forEach(s=>{s.addEventListener("click",()=>{if(s.parentNode&&s.parentNode.nextSibling){const m=s.parentNode.nextSibling.textContent;m&&(navigator.clipboard.writeText(m),s.classList.remove("copy"),s.classList.add("copied"),setTimeout(()=>{s.classList.remove("copied"),s.classList.add("copy")},1e3))}})})}),(d,s)=>{const l=ao("RouterView");return j(),K(co,null,[z(w(qo),{"scroll-smooth":"",position:"absolute",class:"text-gray-700 dark:text-gray-200","native-scrollbar":!1},{default:L(()=>[z(w(Qo),{bordered:""},{default:L(()=>[z(Jo)]),_:1}),W("section",Ko,[W("div",et,[z(w(ue),{embedded:"","flex-grow":"","z-15":""},{default:L(()=>[W("div",ot,[n.value&&n.value.createdAt?(j(),q(w(No),{key:0,class:"block"},{default:L(()=>[se(ce(w(t)("article.created_at"))+" ",1),z(fe,{time:n.value.createdAt},null,8,["time"])]),_:1})):J("",!0),n.value&&n.value.changedAt?(j(),K("a",{key:1,class:"text-sky-500 hover:text-green-500 hover:underline primary-clickable cursor-pointer",href:i,target:"_blank"},[se(ce(w(t)("article.changed_at"))+" ",1),z(fe,{time:n.value.changedAt},null,8,["time"])])):J("",!0)]),z(l,null,{default:L(({Component:m})=>[(j(),q(so(m)))]),_:1}),W("div",null,[z(uo)])]),_:1}),W("aside",tt,[z(w(ue),{embedded:"",hoverable:"","content-style":"padding-left: 0.5rem;"},{default:L(()=>[o.value?(j(),q(w(Zo),{key:0,text:"left",headers:o.value.headers},null,8,["headers"])):J("",!0)]),_:1})])])])]),_:1}),z(fo)],64)}}});export{it as default};
