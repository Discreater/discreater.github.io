import{i as K,w as Q,g as U,h as X,j as Ae,k as y,l as x,d as $,m as V,n as He,p as B,q as b,s as g,v as Ne,x as fe,y as te,z as p,A as k,B as ve,C as Ve,D as ge,E as Fe,F as he,G as Me,N as be,H as We,I as P,J as q,K as re,L as De,M as Ge,O as qe,P as Ye,Q as Qe,R as N,S as Ue,T as Xe,U as G,V as Je,W as Ze,X as me,Y as M,Z as Ke,_ as eo,$ as oo,a0 as ne,a1 as to,a2 as pe,a as xe,a3 as ro,o as j,c as ye,e as z,f as w,a4 as no,a5 as L,a6 as lo,a7 as D,a8 as io,a9 as ao,aa as le,r as so,b as W,ab as ie,t as ae,ac as J,ad as co,ae as uo}from"./main-76MGfDDH.js";import{_ as Z,a as fo,S as vo}from"./SpotLight-B8grkGQk.js";function Ce(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function go(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function ho(e,t,r){const o=K(e,null);o!==null&&(t in o||(o[t]=[]),o[t].push(r.value),Q(r,(l,n)=>{const c=o[t],u=c.findIndex(d=>d===n);~u&&c.splice(u,1),c.push(l)}),U(()=>{const l=o[t],n=l.findIndex(c=>c===r.value);~n&&l.splice(n,1)}))}function bo(e,t,r){const o=K(e,null);o!==null&&(t in o||(o[t]=[]),X(()=>{const l=r();l&&o[t].push(l)}),U(()=>{const l=o[t],n=r(),c=l.findIndex(u=>u===n);~c&&l.splice(c,1)}))}let se=!1;function mo(){if(Ae&&window.CSS&&!se&&(se=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function po(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function xo(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const yo=y("affix",[x("affixed",{position:"fixed"},[x("absolute-positioned",{position:"absolute"})])]),ee={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fix"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},Co=fe(ee),So=$({name:"Affix",props:ee,setup(e){const{mergedClsPrefixRef:t}=V(e);He("-affix",yo,t);let r=null;const o=B(!1),l=B(!1),n=B(null),c=B(null),u=b(()=>l.value||o.value),d=b(()=>{var a,s;return(s=(a=e.triggerTop)!==null&&a!==void 0?a:e.offsetTop)!==null&&s!==void 0?s:e.top}),i=b(()=>{var a,s;return(s=(a=e.top)!==null&&a!==void 0?a:e.triggerTop)!==null&&s!==void 0?s:e.offsetTop}),C=b(()=>{var a,s;return(s=(a=e.bottom)!==null&&a!==void 0?a:e.triggerBottom)!==null&&s!==void 0?s:e.offsetBottom}),S=b(()=>{var a,s;return(s=(a=e.triggerBottom)!==null&&a!==void 0?a:e.offsetBottom)!==null&&s!==void 0?s:e.bottom}),T=B(null),R=()=>{const{target:a,listenTo:s}=e;a?r=a():s?r=Ce(s):r=document,r&&(r.addEventListener("scroll",v),v())};function v(){Ne(f)}function f(){const{value:a}=T;if(!r||!a)return;const s=po(r);if(u.value){s<c.value&&(o.value=!1,c.value=null),s>n.value&&(l.value=!1,n.value=null);return}const _=xo(r),E=a.getBoundingClientRect(),I=E.top-_.top,O=_.bottom-E.bottom,m=d.value,h=S.value;m!==void 0&&I<=m?(o.value=!0,c.value=s-(m-I)):(o.value=!1,c.value=null),h!==void 0&&O<=h?(l.value=!0,n.value=s+h-O):(l.value=!1,n.value=null)}return X(()=>{R()}),U(()=>{r&&r.removeEventListener("scroll",v)}),{selfRef:T,affixed:u,mergedClsPrefix:t,mergedstyle:b(()=>{const a={};return o.value&&d.value!==void 0&&i.value!==void 0&&(a.top=`${i.value}px`),l.value&&S.value!==void 0&&C.value!==void 0&&(a.bottom=`${C.value}px`),a})}},render(){const{mergedClsPrefix:e}=this;return g("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),ko=y("anchor",`
 position: relative;
`,[te("block",`
 padding-left: var(--n-rail-width);
 `,[y("anchor-link",[p("+, >",[y("anchor-link",`
 margin-top: .5em;
 `)])]),y("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),te("show-rail",[p(">",[y("anchor-link","padding-left: 0;")])])]),x("block",[y("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[x("active",`
 background-color: var(--n-link-color);
 `)])]),y("anchor-link-background",`
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),y("anchor-rail",`
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
 `,[x("active",{backgroundColor:"var(--n-rail-color-active)"})])]),y("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[x("active",[p(">",[k("title",`
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
 `,[p("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),p("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),Y=ge("n-anchor"),To={title:String,href:String},wo=$({name:"AnchorLink",props:To,setup(e,{slots:t}){const r=B(null),o=K(Y),l=ve(e,"href"),n=Ve(()=>l.value&&l.value===o.activeHref.value);ho(Y,"collectedLinkHrefs",l),bo(Y,"titleEls",()=>r.value),Q(n,u=>{u&&r.value&&o.updateBarPosition(r.value)});function c(){e.href!==void 0&&o.setActiveHref(e.href)}return()=>{var u;const{value:d}=o.mergedClsPrefix;return g("div",{class:[`${d}-anchor-link`,n.value&&`${d}-anchor-link--active`]},g("a",{ref:r,class:[`${d}-anchor-link__title`],href:e.href,title:go(e.title),onClick:c},e.title),(u=t.default)===null||u===void 0?void 0:u.call(t))}}});function Ro(e,t){const{top:r,height:o}=e.getBoundingClientRect(),l=t instanceof HTMLElement?t.getBoundingClientRect().top:0;return{top:r-l,height:o}}const oe={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},_o=fe(oe),zo=$({name:"BaseAnchor",props:Object.assign(Object.assign({},oe),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const t=[],r=[],o=B(null),l=B(null),n=B(null),c=B(null),u=b(()=>e.type==="block"),d=b(()=>!u.value&&e.showRail);function i(){const{value:v}=n,{value:f}=l;v&&(v.style.transition="none"),f&&(f.style.transition="none"),r&&r.forEach(a=>{a.style.transition="none"}),We(()=>{const{value:a}=n,{value:s}=l;a&&(a.offsetWidth,a.style.transition=""),s&&(s.offsetWidth,s.style.transition=""),r&&r.forEach(_=>{_.offsetWidth,_.style.transition=""})})}function C(v,f=!0){const{value:a}=n,{value:s}=l,{value:_}=c;if(!_||!a)return;f||(a.style.transition="none",s&&(s.style.transition="none"));const{offsetHeight:E,offsetWidth:I}=v,{top:O,left:m}=v.getBoundingClientRect(),{top:h,left:A}=_.getBoundingClientRect(),H=O-h,F=m-A;a.style.top=`${H}px`,a.style.height=`${E}px`,s&&(s.style.top=`${H}px`,s.style.height=`${E}px`,s.style.maxWidth=`${I+F}px`),a.offsetHeight,s&&s.offsetHeight,f||(a.style.transition="",s&&(s.style.transition=""))}function S(v,f=!0){const a=/^#([^#]+)$/.exec(v);if(!a)return;const s=document.getElementById(a[1]);s&&(o.value=v,s.scrollIntoView(),f||i(),T())}const T=Fe(()=>{R(!0)},128);function R(v=!0){var f;const a=[],s=Ce((f=e.offsetTarget)!==null&&f!==void 0?f:document);t.forEach(m=>{const h=/#([^#]+)$/.exec(m);if(!h)return;const A=document.getElementById(h[1]);if(A&&s){const{top:H,height:F}=Ro(A,s);a.push({top:H,height:F,href:m})}}),a.sort((m,h)=>m.top>h.top?1:(m.top===h.top&&m.height<h.height,-1));const _=o.value,{bound:E,ignoreGap:I}=e,O=a.reduce((m,h)=>h.top+h.height<0?I?h:m:h.top<=E?m===null?h:h.top===m.top?h.href===_?h:m:h.top>m.top?h:m:m,null);v||i(),O?o.value=O.href:o.value=null}return he(Y,{activeHref:o,mergedClsPrefix:ve(e,"mergedClsPrefix"),updateBarPosition:C,setActiveHref:S,collectedLinkHrefs:t,titleEls:r}),X(()=>{document.addEventListener("scroll",T,!0),S(window.location.hash),R(!1)}),Me(()=>{S(window.location.hash),R(!1)}),U(()=>{document.removeEventListener("scroll",T,!0)}),Q(o,v=>{if(v===null){const{value:f}=l;f&&!u.value&&(f.style.maxWidth="0")}}),{selfRef:c,barRef:n,slotRef:l,setActiveHref:S,activeHref:o,isBlockType:u,mergedShowRail:d}},render(){var e;const{mergedClsPrefix:t,mergedShowRail:r,isBlockType:o,$slots:l}=this,n=g("div",{class:[`${t}-anchor`,o&&`${t}-anchor--block`,r&&`${t}-anchor--show-rail`],ref:"selfRef"},r&&this.showBackground?g("div",{ref:"slotRef",class:`${t}-anchor-link-background`}):null,r?g("div",{class:`${t}-anchor-rail`},g("div",{ref:"barRef",class:[`${t}-anchor-rail__bar`,this.activeHref!==null&&`${t}-anchor-rail__bar--active`]})):null,(e=l.default)===null||e===void 0?void 0:e.call(l));return this.internalScrollable?g(be,null,{default:()=>n}):n}}),Bo=Object.assign(Object.assign(Object.assign(Object.assign({},P.props),{affix:Boolean}),ee),oe),$o=$({name:"Anchor",props:Bo,setup(e,{slots:t}){const{mergedClsPrefixRef:r,inlineThemeDisabled:o}=V(e),l=P("Anchor","-anchor",ko,De,e,r),n=B(null),c=b(()=>{const{self:{railColor:d,linkColor:i,railColorActive:C,linkTextColor:S,linkTextColorHover:T,linkTextColorPressed:R,linkTextColorActive:v,linkFontSize:f,railWidth:a,linkPadding:s,borderRadius:_},common:{cubicBezierEaseInOut:E}}=l.value;return{"--n-link-border-radius":_,"--n-link-color":i,"--n-link-font-size":f,"--n-link-text-color":S,"--n-link-text-color-hover":T,"--n-link-text-color-active":v,"--n-link-text-color-pressed":R,"--n-link-padding":s,"--n-bezier":E,"--n-rail-color":d,"--n-rail-color-active":C,"--n-rail-width":a}}),u=o?q("anchor",void 0,c,e):void 0;return{scrollTo(d){var i;(i=n.value)===null||i===void 0||i.setActiveHref(d)},renderAnchor:()=>(u==null||u.onRender(),g(zo,Object.assign({ref:n,style:o?void 0:c.value,class:u==null?void 0:u.themeClass.value},re(e,_o),{mergedClsPrefix:r.value}),t))}},render(){return this.affix?g(So,Object.assign({},re(this,Co)),{default:this.renderAnchor}):this.renderAnchor()}}),Eo=p([y("card",`
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
 `,[Ge({background:"var(--n-color-modal)"}),x("hoverable",[p("&:hover","box-shadow: var(--n-box-shadow);")]),x("content-segmented",[p(">",[k("content",{paddingTop:"var(--n-padding-bottom)"})])]),x("content-soft-segmented",[p(">",[k("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),x("footer-segmented",[p(">",[k("footer",{paddingTop:"var(--n-padding-bottom)"})])]),x("footer-soft-segmented",[p(">",[k("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),p(">",[y("card-header",`
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
 `,[p("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),k("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),y("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[p("img",`
 display: block;
 width: 100%;
 `)]),x("bordered",`
 border: 1px solid var(--n-border-color);
 `,[p("&:target","border-color: var(--n-color-target);")]),x("action-segmented",[p(">",[k("action",[p("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),x("content-segmented, content-soft-segmented",[p(">",[k("content",{transition:"border-color 0.3s var(--n-bezier)"},[p("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),x("footer-segmented, footer-soft-segmented",[p(">",[k("footer",{transition:"border-color 0.3s var(--n-bezier)"},[p("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),x("embedded",`
 background-color: var(--n-color-embedded);
 `)]),qe(y("card",`
 background: var(--n-color-modal);
 `,[x("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Ye(y("card",`
 background: var(--n-color-popover);
 `,[x("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),Po={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},Oo=Object.assign(Object.assign({},P.props),Po),ce=$({name:"Card",props:Oo,setup(e){const t=()=>{const{onClose:i}=e;i&&Ue(i)},{inlineThemeDisabled:r,mergedClsPrefixRef:o,mergedRtlRef:l}=V(e),n=P("Card","-card",Eo,Xe,e,o),c=Qe("Card",l,o),u=b(()=>{const{size:i}=e,{self:{color:C,colorModal:S,colorTarget:T,textColor:R,titleTextColor:v,titleFontWeight:f,borderColor:a,actionColor:s,borderRadius:_,lineHeight:E,closeIconColor:I,closeIconColorHover:O,closeIconColorPressed:m,closeColorHover:h,closeColorPressed:A,closeBorderRadius:H,closeIconSize:F,closeSize:Te,boxShadow:we,colorPopover:Re,colorEmbedded:_e,colorEmbeddedModal:ze,colorEmbeddedPopover:Be,[G("padding",i)]:$e,[G("fontSize",i)]:Ee,[G("titleFontSize",i)]:Pe},common:{cubicBezierEaseInOut:Oe}}=n.value,{top:Ie,left:Le,bottom:je}=Je($e);return{"--n-bezier":Oe,"--n-border-radius":_,"--n-color":C,"--n-color-modal":S,"--n-color-popover":Re,"--n-color-embedded":_e,"--n-color-embedded-modal":ze,"--n-color-embedded-popover":Be,"--n-color-target":T,"--n-text-color":R,"--n-line-height":E,"--n-action-color":s,"--n-title-text-color":v,"--n-title-font-weight":f,"--n-close-icon-color":I,"--n-close-icon-color-hover":O,"--n-close-icon-color-pressed":m,"--n-close-color-hover":h,"--n-close-color-pressed":A,"--n-border-color":a,"--n-box-shadow":we,"--n-padding-top":Ie,"--n-padding-bottom":je,"--n-padding-left":Le,"--n-font-size":Ee,"--n-title-font-size":Pe,"--n-close-size":Te,"--n-close-icon-size":F,"--n-close-border-radius":H}}),d=r?q("card",b(()=>e.size[0]),u,e):void 0;return{rtlEnabled:c,mergedClsPrefix:o,mergedTheme:n,handleCloseClick:t,cssVars:r?void 0:u,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{segmented:e,bordered:t,hoverable:r,mergedClsPrefix:o,rtlEnabled:l,onRender:n,embedded:c,tag:u,$slots:d}=this;return n==null||n(),g(u,{class:[`${o}-card`,this.themeClass,c&&`${o}-card--embedded`,{[`${o}-card--rtl`]:l,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:t,[`${o}-card--hoverable`]:r}],style:this.cssVars,role:this.role},N(d.cover,i=>i&&g("div",{class:`${o}-card-cover`,role:"none"},i)),N(d.header,i=>i||this.title||this.closable?g("div",{class:`${o}-card-header`,style:this.headerStyle},g("div",{class:`${o}-card-header__main`,role:"heading"},i||this.title),N(d["header-extra"],C=>C&&g("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},C)),this.closable?g(Ze,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),N(d.default,i=>i&&g("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},i)),N(d.footer,i=>i&&[g("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},i)]),N(d.action,i=>i&&g("div",{class:`${o}-card__action`,role:"none"},i)))}}),Io=e=>{const{primaryColor:t,successColor:r,warningColor:o,errorColor:l,infoColor:n,fontWeightStrong:c}=e;return{fontWeight:c,rotate:"252deg",colorStartPrimary:M(t,{alpha:.6}),colorEndPrimary:t,colorStartInfo:M(n,{alpha:.6}),colorEndInfo:n,colorStartWarning:M(o,{alpha:.6}),colorEndWarning:o,colorStartError:M(l,{alpha:.6}),colorEndError:l,colorStartSuccess:M(r,{alpha:.6}),colorEndSuccess:r}},Lo={name:"GradientText",common:me,self:Io},jo=Lo,Ao=y("gradient-text",`
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
`),Ho=Object.assign(Object.assign({},P.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),de=$({name:"GradientText",props:Ho,setup(e){mo();const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=V(e),o=b(()=>{const{type:i}=e;return i==="danger"?"error":i}),l=b(()=>{let i=e.size||e.fontSize;return i&&(i=Ke(i)),i||void 0}),n=b(()=>{const i=e.color||e.gradient;if(typeof i=="string")return i;if(i){const C=i.deg||0,S=i.from,T=i.to;return`linear-gradient(${C}deg, ${S} 0%, ${T} 100%)`}}),c=P("GradientText","-gradient-text",Ao,jo,e,t),u=b(()=>{const{value:i}=o,{common:{cubicBezierEaseInOut:C},self:{rotate:S,[G("colorStart",i)]:T,[G("colorEnd",i)]:R,fontWeight:v}}=c.value;return{"--n-bezier":C,"--n-rotate":S,"--n-color-start":T,"--n-color-end":R,"--n-font-weight":v}}),d=r?q("gradient-text",b(()=>o.value[0]),u,e):void 0;return{mergedClsPrefix:t,compatibleType:o,styleFontSize:l,styleBgImage:n,cssVars:r?void 0:u,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{mergedClsPrefix:e,onRender:t}=this;return t==null||t(),g("span",{class:[`${e}-gradient-text`,`${e}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}}),No=e=>{const{baseColor:t,textColor2:r,bodyColor:o,cardColor:l,dividerColor:n,actionColor:c,scrollbarColor:u,scrollbarColorHover:d,invertedColor:i}=e;return{textColor:r,textColorInverted:"#FFF",color:o,colorEmbedded:c,headerColor:l,headerColorInverted:i,footerColor:c,footerColorInverted:i,headerBorderColor:n,headerBorderColorInverted:i,footerBorderColor:n,footerBorderColorInverted:i,siderBorderColor:n,siderBorderColorInverted:i,siderColor:l,siderColorInverted:i,siderToggleButtonBorder:`1px solid ${n}`,siderToggleButtonColor:t,siderToggleButtonIconColor:r,siderToggleButtonIconColorInverted:r,siderToggleBarColor:ne(o,u),siderToggleBarColorHover:ne(o,d),__invertScrollbar:"true"}},Vo=eo({name:"Layout",common:me,peers:{Scrollbar:oo},self:No}),Se=Vo,Fo=y("layout",`
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
`,[y("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),x("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Mo={embedded:Boolean,position:pe,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Wo=ge("n-layout");function Do(e){return $({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},P.props),Mo),setup(t){const r=B(null),o=B(null),{mergedClsPrefixRef:l,inlineThemeDisabled:n}=V(t),c=P("Layout","-layout",Fo,Se,t,l);function u(f,a){if(t.nativeScrollbar){const{value:s}=r;s&&(a===void 0?s.scrollTo(f):s.scrollTo(f,a))}else{const{value:s}=o;s&&s.scrollTo(f,a)}}he(Wo,t);let d=0,i=0;const C=f=>{var a;const s=f.target;d=s.scrollLeft,i=s.scrollTop,(a=t.onScroll)===null||a===void 0||a.call(t,f)};to(()=>{if(t.nativeScrollbar){const f=r.value;f&&(f.scrollTop=i,f.scrollLeft=d)}});const S={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},T={scrollTo:u},R=b(()=>{const{common:{cubicBezierEaseInOut:f},self:a}=c.value;return{"--n-bezier":f,"--n-color":t.embedded?a.colorEmbedded:a.color,"--n-text-color":a.textColor}}),v=n?q("layout",b(()=>t.embedded?"e":""),R,t):void 0;return Object.assign({mergedClsPrefix:l,scrollableElRef:r,scrollbarInstRef:o,hasSiderStyle:S,mergedTheme:c,handleNativeElScroll:C,cssVars:n?void 0:R,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender},T)},render(){var t;const{mergedClsPrefix:r,hasSider:o}=this;(t=this.onRender)===null||t===void 0||t.call(this);const l=o?this.hasSiderStyle:void 0,n=[this.themeClass,e&&`${r}-layout-content`,`${r}-layout`,`${r}-layout--${this.position}-positioned`];return g("div",{class:n,style:this.cssVars},this.nativeScrollbar?g("div",{ref:"scrollableElRef",class:`${r}-layout-scroll-container`,style:[this.contentStyle,l],onScroll:this.handleNativeElScroll},this.$slots):g(be,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,l]}),this.$slots))}})}const Go=Do(!1),qo=y("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[x("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),x("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Yo={position:pe,inverted:Boolean,bordered:{type:Boolean,default:!1}},Qo=$({name:"LayoutHeader",props:Object.assign(Object.assign({},P.props),Yo),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=V(e),o=P("Layout","-layout-header",qo,Se,e,t),l=b(()=>{const{common:{cubicBezierEaseInOut:c},self:u}=o.value,d={"--n-bezier":c};return e.inverted?(d["--n-color"]=u.headerColorInverted,d["--n-text-color"]=u.textColorInverted,d["--n-border-color"]=u.headerBorderColorInverted):(d["--n-color"]=u.headerColor,d["--n-text-color"]=u.textColor,d["--n-border-color"]=u.headerBorderColor),d}),n=r?q("layout-header",b(()=>e.inverted?"a":"b"),l,e):void 0;return{mergedClsPrefix:t,cssVars:r?void 0:l,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),g("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Uo={flex:"~",justify:"center",items:"center",space:"x-2",h:"12"},Xo=$({__name:"MyHeader",setup(e){const{t,locale:r}=xe(),o=ro();function l(n){r.value=n}return(n,c)=>(j(),ye("div",Uo,[z(Z,{to:"/",title:w(t)("button.home"),icon:"i-mdi-home",class:"text-3xl"},null,8,["title"]),z(Z,{text:"3xl",icon:"i-ri-moon-fill dark:i-ri-sun-fill",title:w(t)("button.toggle_dark"),onClick:c[0]||(c[0]=()=>w(no)())},null,8,["title"]),z(w(lo),{trigger:"click",options:w(o),onSelect:l},{default:L(()=>[z(Z,{icon:"i-ooui-language",class:"text-3xl",title:w(t)("button.toggle_langs")},null,8,["title"])]),_:1},8,["options"])]))}});function ke(e){return e.map(t=>g(wo,{key:t.slug,href:`#${t.slug}`,title:t.title},()=>ke(t.children)))}const Jo=$({props:{headers:{type:Array,required:!0}},setup(e){return()=>g($o,{ignoreGap:!0},()=>ke(e.headers))}}),ue=$({__name:"QTime",props:{time:{}},setup(e){const t=e,r=b(()=>new Date(t.time)),o=new Date,l=b(()=>{const c=(o.getFullYear()-r.value.getFullYear())*12+o.getMonth()-r.value.getMonth();return c>0&&c<4?"relative":"date"});return(n,c)=>(j(),D(w(io),{time:r.value,type:l.value,title:n.time},null,8,["time","type","title"]))}}),Zo={p:"y-6 x-6"},Ko={container:"","max-w":"320",m:"auto",flex:"",space:"x-2"},et={class:"flex gap-2"},ot={sticky:"",top:"4","self-start":"",class:"hidden xl:block","max-w":"70"},nt=$({__name:"default",setup(e){const{t}=xe(),r=ao(),o=B(le.find(n=>n.path===r.path.substring(1)));Q(()=>r.path,async n=>{o.value=le.find(c=>c.path===n.substring(1))});const l=b(()=>{var n;return(n=o.value)==null?void 0:n.attributes});return X(()=>{document.querySelectorAll("figure.code-block button.copy").forEach(c=>{c.addEventListener("click",()=>{if(c.parentNode&&c.parentNode.nextSibling){const d=c.parentNode.nextSibling.textContent;d&&(navigator.clipboard.writeText(d),c.classList.remove("copy"),c.classList.add("copied"),setTimeout(()=>{c.classList.remove("copied"),c.classList.add("copy")},1e3))}})})}),(n,c)=>{const u=so("RouterView");return j(),ye(uo,null,[z(w(Go),{"scroll-smooth":"",position:"absolute",class:"text-gray-700 dark:text-gray-200","native-scrollbar":!1},{default:L(()=>[z(w(Qo),{bordered:""},{default:L(()=>[z(Xo)]),_:1}),W("section",Zo,[W("div",Ko,[z(w(ce),{embedded:"","flex-grow":"","z-15":""},{default:L(()=>[W("div",et,[l.value&&l.value.createdAt?(j(),D(w(de),{key:0,class:"block"},{default:L(()=>[ie(ae(w(t)("article.created_at"))+" ",1),z(ue,{time:l.value.createdAt},null,8,["time"])]),_:1})):J("",!0),l.value&&l.value.changedAt?(j(),D(w(de),{key:1,class:"block"},{default:L(()=>[ie(ae(w(t)("article.changed_at"))+" ",1),z(ue,{time:l.value.changedAt},null,8,["time"])]),_:1})):J("",!0)]),z(u,null,{default:L(({Component:d})=>[(j(),D(co(d)))]),_:1}),W("div",null,[z(fo)])]),_:1}),W("aside",ot,[z(w(ce),{embedded:"",hoverable:"","content-style":"padding-left: 0.5rem;"},{default:L(()=>[o.value?(j(),D(w(Jo),{key:0,text:"left",headers:o.value.headers},null,8,["headers"])):J("",!0)]),_:1})])])])]),_:1}),z(vo)],64)}}});export{nt as default};
