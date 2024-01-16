import{i as ee,w as U,g as Q,h as X,j as Ae,k as T,l as S,d as $,m as V,n as He,p as B,q as p,s as v,v as Ne,x as ge,y as re,z as C,A as w,B as he,C as Ve,D as ve,E as Fe,F as be,G as Me,N as me,H as We,I as P,J as G,K as ne,L as De,M as Ge,O as qe,P as Ye,Q as Ue,R as N,S as Qe,T as Xe,U as D,V as Je,W as Ze,X as pe,Y as M,Z as Ke,_ as eo,$ as oo,a0 as le,a1 as to,a2 as xe,a as ye,a3 as ro,o as j,c as K,e as z,f as R,a4 as no,a5 as L,a6 as lo,a7 as q,a8 as io,a9 as ie,aa as ae,r as ao,b as W,ab as se,t as ce,ac as J,ad as so,ae as co}from"./main-AqoingG1.js";import{_ as Z,a as uo,S as fo}from"./SpotLight-Snm6tH55.js";import{N as go}from"./Time-Ox7gw-Oy.js";function Ce(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function ho(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function vo(e,o,r){const n=ee(e,null);n!==null&&(o in n||(n[o]=[]),n[o].push(r.value),U(r,(t,i)=>{const u=n[o],l=u.findIndex(c=>c===i);~l&&u.splice(l,1),u.push(t)}),Q(()=>{const t=n[o],i=t.findIndex(u=>u===r.value);~i&&t.splice(i,1)}))}function bo(e,o,r){const n=ee(e,null);n!==null&&(o in n||(n[o]=[]),X(()=>{const t=r();t&&n[o].push(t)}),Q(()=>{const t=n[o],i=r(),u=t.findIndex(l=>l===i);~u&&t.splice(u,1)}))}let de=!1;function mo(){if(Ae&&window.CSS&&!de&&(de=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function po(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function xo(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const yo=T("affix",[S("affixed",{position:"fixed"},[S("absolute-positioned",{position:"absolute"})])]),oe={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fix"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},Co=ge(oe),So=$({name:"Affix",props:oe,setup(e){const{mergedClsPrefixRef:o}=V(e);He("-affix",yo,o);let r=null;const n=B(!1),t=B(!1),i=B(null),u=B(null),l=p(()=>t.value||n.value),c=p(()=>{var a,s;return(s=(a=e.triggerTop)!==null&&a!==void 0?a:e.offsetTop)!==null&&s!==void 0?s:e.top}),d=p(()=>{var a,s;return(s=(a=e.top)!==null&&a!==void 0?a:e.triggerTop)!==null&&s!==void 0?s:e.offsetTop}),y=p(()=>{var a,s;return(s=(a=e.bottom)!==null&&a!==void 0?a:e.triggerBottom)!==null&&s!==void 0?s:e.offsetBottom}),k=p(()=>{var a,s;return(s=(a=e.triggerBottom)!==null&&a!==void 0?a:e.offsetBottom)!==null&&s!==void 0?s:e.bottom}),m=B(null),h=()=>{const{target:a,listenTo:s}=e;a?r=a():s?r=Ce(s):r=document,r&&(r.addEventListener("scroll",g),g())};function g(){Ne(f)}function f(){const{value:a}=m;if(!r||!a)return;const s=po(r);if(l.value){u.value!==null&&s<u.value&&(n.value=!1,u.value=null),i.value!==null&&s>i.value&&(t.value=!1,i.value=null);return}const _=xo(r),E=a.getBoundingClientRect(),I=E.top-_.top,O=_.bottom-E.bottom,x=c.value,b=k.value;x!==void 0&&I<=x?(n.value=!0,u.value=s-(x-I)):(n.value=!1,u.value=null),b!==void 0&&O<=b?(t.value=!0,i.value=s+b-O):(t.value=!1,i.value=null)}return X(()=>{h()}),Q(()=>{r&&r.removeEventListener("scroll",g)}),{selfRef:m,affixed:l,mergedClsPrefix:o,mergedstyle:p(()=>{const a={};return n.value&&c.value!==void 0&&d.value!==void 0&&(a.top=`${d.value}px`),t.value&&k.value!==void 0&&y.value!==void 0&&(a.bottom=`${y.value}px`),a})}},render(){const{mergedClsPrefix:e}=this;return v("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),ko=T("anchor",`
 position: relative;
`,[re("block",`
 padding-left: var(--n-rail-width);
 `,[T("anchor-link",[C("+, >",[T("anchor-link",`
 margin-top: .5em;
 `)])]),T("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),re("show-rail",[C(">",[T("anchor-link","padding-left: 0;")])])]),S("block",[T("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[S("active",`
 background-color: var(--n-link-color);
 `)])]),T("anchor-link-background",`
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),T("anchor-rail",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: var(--n-rail-width);
 border-radius: calc(var(--n-rail-width) / 2);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[w("bar",`
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[S("active",{backgroundColor:"var(--n-rail-color-active)"})])]),T("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[S("active",[C(">",[w("title",`
 color: var(--n-link-text-color-active);
 `)])]),w("title",`
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
 `,[C("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),C("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),Y=ve("n-anchor"),To={title:String,href:String},wo=$({name:"AnchorLink",props:To,setup(e,{slots:o}){const r=B(null),n=ee(Y),t=he(e,"href"),i=Ve(()=>t.value&&t.value===n.activeHref.value);vo(Y,"collectedLinkHrefs",t),bo(Y,"titleEls",()=>r.value),U(i,l=>{l&&r.value&&n.updateBarPosition(r.value)});function u(){e.href!==void 0&&n.setActiveHref(e.href)}return()=>{var l;const{value:c}=n.mergedClsPrefix;return v("div",{class:[`${c}-anchor-link`,i.value&&`${c}-anchor-link--active`]},v("a",{ref:r,class:[`${c}-anchor-link__title`],href:e.href,title:ho(e.title),onClick:u},e.title),(l=o.default)===null||l===void 0?void 0:l.call(o))}}});function Ro(e,o){const{top:r,height:n}=e.getBoundingClientRect(),t=o instanceof HTMLElement?o.getBoundingClientRect().top:0;return{top:r-t,height:n}}const te={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},_o=ge(te),zo=$({name:"BaseAnchor",props:Object.assign(Object.assign({},te),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const o=[],r=[],n=B(null),t=B(null),i=B(null),u=B(null),l=p(()=>e.type==="block"),c=p(()=>!l.value&&e.showRail);function d(){const{value:g}=i,{value:f}=t;g&&(g.style.transition="none"),f&&(f.style.transition="none"),r&&r.forEach(a=>{a.style.transition="none"}),We(()=>{const{value:a}=i,{value:s}=t;a&&(a.offsetWidth,a.style.transition=""),s&&(s.offsetWidth,s.style.transition=""),r&&r.forEach(_=>{_.offsetWidth,_.style.transition=""})})}function y(g,f=!0){const{value:a}=i,{value:s}=t,{value:_}=u;if(!_||!a)return;f||(a.style.transition="none",s&&(s.style.transition="none"));const{offsetHeight:E,offsetWidth:I}=g,{top:O,left:x}=g.getBoundingClientRect(),{top:b,left:A}=_.getBoundingClientRect(),H=O-b,F=x-A;a.style.top=`${H}px`,a.style.height=`${E}px`,s&&(s.style.top=`${H}px`,s.style.height=`${E}px`,s.style.maxWidth=`${I+F}px`),a.offsetHeight,s&&s.offsetHeight,f||(a.style.transition="",s&&(s.style.transition=""))}function k(g,f=!0){const a=/^#([^#]+)$/.exec(g);if(!a)return;const s=document.getElementById(a[1]);s&&(n.value=g,s.scrollIntoView(),f||d(),m())}const m=Fe(()=>{h(!0)},128);function h(g=!0){var f;const a=[],s=Ce((f=e.offsetTarget)!==null&&f!==void 0?f:document);o.forEach(x=>{const b=/#([^#]+)$/.exec(x);if(!b)return;const A=document.getElementById(b[1]);if(A&&s){const{top:H,height:F}=Ro(A,s);a.push({top:H,height:F,href:x})}}),a.sort((x,b)=>x.top>b.top?1:(x.top===b.top&&x.height<b.height,-1));const _=n.value,{bound:E,ignoreGap:I}=e,O=a.reduce((x,b)=>b.top+b.height<0?I?b:x:b.top<=E?x===null?b:b.top===x.top?b.href===_?b:x:b.top>x.top?b:x:x,null);g||d(),O?n.value=O.href:n.value=null}return be(Y,{activeHref:n,mergedClsPrefix:he(e,"mergedClsPrefix"),updateBarPosition:y,setActiveHref:k,collectedLinkHrefs:o,titleEls:r}),X(()=>{document.addEventListener("scroll",m,!0),k(window.location.hash),h(!1)}),Me(()=>{k(window.location.hash),h(!1)}),Q(()=>{document.removeEventListener("scroll",m,!0)}),U(n,g=>{if(g===null){const{value:f}=t;f&&!l.value&&(f.style.maxWidth="0")}}),{selfRef:u,barRef:i,slotRef:t,setActiveHref:k,activeHref:n,isBlockType:l,mergedShowRail:c}},render(){var e;const{mergedClsPrefix:o,mergedShowRail:r,isBlockType:n,$slots:t}=this,i=v("div",{class:[`${o}-anchor`,n&&`${o}-anchor--block`,r&&`${o}-anchor--show-rail`],ref:"selfRef"},r&&this.showBackground?v("div",{ref:"slotRef",class:`${o}-anchor-link-background`}):null,r?v("div",{class:`${o}-anchor-rail`},v("div",{ref:"barRef",class:[`${o}-anchor-rail__bar`,this.activeHref!==null&&`${o}-anchor-rail__bar--active`]})):null,(e=t.default)===null||e===void 0?void 0:e.call(t));return this.internalScrollable?v(me,null,{default:()=>i}):i}}),Bo=Object.assign(Object.assign(Object.assign(Object.assign({},P.props),{affix:Boolean}),oe),te),$o=$({name:"Anchor",props:Bo,setup(e,{slots:o}){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=V(e),t=P("Anchor","-anchor",ko,De,e,r),i=B(null),u=p(()=>{const{self:{railColor:c,linkColor:d,railColorActive:y,linkTextColor:k,linkTextColorHover:m,linkTextColorPressed:h,linkTextColorActive:g,linkFontSize:f,railWidth:a,linkPadding:s,borderRadius:_},common:{cubicBezierEaseInOut:E}}=t.value;return{"--n-link-border-radius":_,"--n-link-color":d,"--n-link-font-size":f,"--n-link-text-color":k,"--n-link-text-color-hover":m,"--n-link-text-color-active":g,"--n-link-text-color-pressed":h,"--n-link-padding":s,"--n-bezier":E,"--n-rail-color":c,"--n-rail-color-active":y,"--n-rail-width":a}}),l=n?G("anchor",void 0,u,e):void 0;return{scrollTo(c){var d;(d=i.value)===null||d===void 0||d.setActiveHref(c)},renderAnchor:()=>(l==null||l.onRender(),v(zo,Object.assign({ref:i,style:n?void 0:u.value,class:l==null?void 0:l.themeClass.value},ne(e,_o),{mergedClsPrefix:r.value}),o))}},render(){return this.affix?v(So,Object.assign({},ne(this,Co)),{default:this.renderAnchor}):this.renderAnchor()}}),Eo=C([T("card",`
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
 `,[Ge({background:"var(--n-color-modal)"}),S("hoverable",[C("&:hover","box-shadow: var(--n-box-shadow);")]),S("content-segmented",[C(">",[w("content",{paddingTop:"var(--n-padding-bottom)"})])]),S("content-soft-segmented",[C(">",[w("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),S("footer-segmented",[C(">",[w("footer",{paddingTop:"var(--n-padding-bottom)"})])]),S("footer-soft-segmented",[C(">",[w("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),C(">",[T("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[w("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),w("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),w("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),w("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),w("content","flex: 1; min-width: 0;"),w("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[C("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),w("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),T("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[C("img",`
 display: block;
 width: 100%;
 `)]),S("bordered",`
 border: 1px solid var(--n-border-color);
 `,[C("&:target","border-color: var(--n-color-target);")]),S("action-segmented",[C(">",[w("action",[C("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),S("content-segmented, content-soft-segmented",[C(">",[w("content",{transition:"border-color 0.3s var(--n-bezier)"},[C("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),S("footer-segmented, footer-soft-segmented",[C(">",[w("footer",{transition:"border-color 0.3s var(--n-bezier)"},[C("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),S("embedded",`
 background-color: var(--n-color-embedded);
 `)]),qe(T("card",`
 background: var(--n-color-modal);
 `,[S("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Ye(T("card",`
 background: var(--n-color-popover);
 `,[S("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),Po={title:String,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},Oo=Object.assign(Object.assign({},P.props),Po),ue=$({name:"Card",props:Oo,setup(e){const o=()=>{const{onClose:d}=e;d&&Qe(d)},{inlineThemeDisabled:r,mergedClsPrefixRef:n,mergedRtlRef:t}=V(e),i=P("Card","-card",Eo,Xe,e,n),u=Ue("Card",t,n),l=p(()=>{const{size:d}=e,{self:{color:y,colorModal:k,colorTarget:m,textColor:h,titleTextColor:g,titleFontWeight:f,borderColor:a,actionColor:s,borderRadius:_,lineHeight:E,closeIconColor:I,closeIconColorHover:O,closeIconColorPressed:x,closeColorHover:b,closeColorPressed:A,closeBorderRadius:H,closeIconSize:F,closeSize:Te,boxShadow:we,colorPopover:Re,colorEmbedded:_e,colorEmbeddedModal:ze,colorEmbeddedPopover:Be,[D("padding",d)]:$e,[D("fontSize",d)]:Ee,[D("titleFontSize",d)]:Pe},common:{cubicBezierEaseInOut:Oe}}=i.value,{top:Ie,left:Le,bottom:je}=Je($e);return{"--n-bezier":Oe,"--n-border-radius":_,"--n-color":y,"--n-color-modal":k,"--n-color-popover":Re,"--n-color-embedded":_e,"--n-color-embedded-modal":ze,"--n-color-embedded-popover":Be,"--n-color-target":m,"--n-text-color":h,"--n-line-height":E,"--n-action-color":s,"--n-title-text-color":g,"--n-title-font-weight":f,"--n-close-icon-color":I,"--n-close-icon-color-hover":O,"--n-close-icon-color-pressed":x,"--n-close-color-hover":b,"--n-close-color-pressed":A,"--n-border-color":a,"--n-box-shadow":we,"--n-padding-top":Ie,"--n-padding-bottom":je,"--n-padding-left":Le,"--n-font-size":Ee,"--n-title-font-size":Pe,"--n-close-size":Te,"--n-close-icon-size":F,"--n-close-border-radius":H}}),c=r?G("card",p(()=>e.size[0]),l,e):void 0;return{rtlEnabled:u,mergedClsPrefix:n,mergedTheme:i,handleCloseClick:o,cssVars:r?void 0:l,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{footerStyle:e,headerExtraClass:o,headerClass:r,contentClass:n,segmented:t,bordered:i,hoverable:u,mergedClsPrefix:l,rtlEnabled:c,onRender:d,embedded:y,tag:k,$slots:m}=this;return d==null||d(),v(k,{class:[`${l}-card`,this.themeClass,y&&`${l}-card--embedded`,{[`${l}-card--rtl`]:c,[`${l}-card--content${typeof t!="boolean"&&t.content==="soft"?"-soft":""}-segmented`]:t===!0||t!==!1&&t.content,[`${l}-card--footer${typeof t!="boolean"&&t.footer==="soft"?"-soft":""}-segmented`]:t===!0||t!==!1&&t.footer,[`${l}-card--action-segmented`]:t===!0||t!==!1&&t.action,[`${l}-card--bordered`]:i,[`${l}-card--hoverable`]:u}],style:this.cssVars,role:this.role},N(m.cover,h=>h&&v("div",{class:`${l}-card-cover`,role:"none"},h)),N(m.header,h=>h||this.title||this.closable?v("div",{class:[`${l}-card-header`,r],style:this.headerStyle},v("div",{class:`${l}-card-header__main`,role:"heading"},h||this.title),N(m["header-extra"],g=>g&&v("div",{class:[`${l}-card-header__extra`,o],style:this.headerExtraStyle},g)),this.closable?v(Ze,{clsPrefix:l,class:`${l}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),N(m.default,h=>h&&v("div",{class:[`${l}-card__content`,n],style:this.contentStyle,role:"none"},h)),N(m.footer,h=>h&&[v("div",{class:[`${l}-card__footer`,e],style:this.footerStyle,role:"none"},h)]),N(m.action,h=>h&&v("div",{class:`${l}-card__action`,role:"none"},h)))}}),Io=e=>{const{primaryColor:o,successColor:r,warningColor:n,errorColor:t,infoColor:i,fontWeightStrong:u}=e;return{fontWeight:u,rotate:"252deg",colorStartPrimary:M(o,{alpha:.6}),colorEndPrimary:o,colorStartInfo:M(i,{alpha:.6}),colorEndInfo:i,colorStartWarning:M(n,{alpha:.6}),colorEndWarning:n,colorStartError:M(t,{alpha:.6}),colorEndError:t,colorStartSuccess:M(r,{alpha:.6}),colorEndSuccess:r}},Lo={name:"GradientText",common:pe,self:Io},jo=Lo,Ao=T("gradient-text",`
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
`),Ho=Object.assign(Object.assign({},P.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),No=$({name:"GradientText",props:Ho,setup(e){mo();const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=V(e),n=p(()=>{const{type:d}=e;return d==="danger"?"error":d}),t=p(()=>{let d=e.size||e.fontSize;return d&&(d=Ke(d)),d||void 0}),i=p(()=>{const d=e.color||e.gradient;if(typeof d=="string")return d;if(d){const y=d.deg||0,k=d.from,m=d.to;return`linear-gradient(${y}deg, ${k} 0%, ${m} 100%)`}}),u=P("GradientText","-gradient-text",Ao,jo,e,o),l=p(()=>{const{value:d}=n,{common:{cubicBezierEaseInOut:y},self:{rotate:k,[D("colorStart",d)]:m,[D("colorEnd",d)]:h,fontWeight:g}}=u.value;return{"--n-bezier":y,"--n-rotate":k,"--n-color-start":m,"--n-color-end":h,"--n-font-weight":g}}),c=r?G("gradient-text",p(()=>n.value[0]),l,e):void 0;return{mergedClsPrefix:o,compatibleType:n,styleFontSize:t,styleBgImage:i,cssVars:r?void 0:l,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{mergedClsPrefix:e,onRender:o}=this;return o==null||o(),v("span",{class:[`${e}-gradient-text`,`${e}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}}),Vo=e=>{const{baseColor:o,textColor2:r,bodyColor:n,cardColor:t,dividerColor:i,actionColor:u,scrollbarColor:l,scrollbarColorHover:c,invertedColor:d}=e;return{textColor:r,textColorInverted:"#FFF",color:n,colorEmbedded:u,headerColor:t,headerColorInverted:d,footerColor:u,footerColorInverted:d,headerBorderColor:i,headerBorderColorInverted:d,footerBorderColor:i,footerBorderColorInverted:d,siderBorderColor:i,siderBorderColorInverted:d,siderColor:t,siderColorInverted:d,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:o,siderToggleButtonIconColor:r,siderToggleButtonIconColorInverted:r,siderToggleBarColor:le(n,l),siderToggleBarColorHover:le(n,c),__invertScrollbar:"true"}},Fo=eo({name:"Layout",common:pe,peers:{Scrollbar:oo},self:Vo}),Se=Fo,Mo=T("layout",`
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
`,[T("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),S("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Wo={embedded:Boolean,position:xe,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Do=ve("n-layout");function Go(e){return $({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},P.props),Wo),setup(o){const r=B(null),n=B(null),{mergedClsPrefixRef:t,inlineThemeDisabled:i}=V(o),u=P("Layout","-layout",Mo,Se,o,t);function l(f,a){if(o.nativeScrollbar){const{value:s}=r;s&&(a===void 0?s.scrollTo(f):s.scrollTo(f,a))}else{const{value:s}=n;s&&s.scrollTo(f,a)}}be(Do,o);let c=0,d=0;const y=f=>{var a;const s=f.target;c=s.scrollLeft,d=s.scrollTop,(a=o.onScroll)===null||a===void 0||a.call(o,f)};to(()=>{if(o.nativeScrollbar){const f=r.value;f&&(f.scrollTop=d,f.scrollLeft=c)}});const k={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},m={scrollTo:l},h=p(()=>{const{common:{cubicBezierEaseInOut:f},self:a}=u.value;return{"--n-bezier":f,"--n-color":o.embedded?a.colorEmbedded:a.color,"--n-text-color":a.textColor}}),g=i?G("layout",p(()=>o.embedded?"e":""),h,o):void 0;return Object.assign({mergedClsPrefix:t,scrollableElRef:r,scrollbarInstRef:n,hasSiderStyle:k,mergedTheme:u,handleNativeElScroll:y,cssVars:i?void 0:h,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender},m)},render(){var o;const{mergedClsPrefix:r,hasSider:n}=this;(o=this.onRender)===null||o===void 0||o.call(this);const t=n?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${r}-layout-content`,`${r}-layout`,`${r}-layout--${this.position}-positioned`];return v("div",{class:i,style:this.cssVars},this.nativeScrollbar?v("div",{ref:"scrollableElRef",class:[`${r}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,t],onScroll:this.handleNativeElScroll},this.$slots):v(me,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,t]}),this.$slots))}})}const qo=Go(!1),Yo=T("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[S("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),S("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Uo={position:xe,inverted:Boolean,bordered:{type:Boolean,default:!1}},Qo=$({name:"LayoutHeader",props:Object.assign(Object.assign({},P.props),Uo),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=V(e),n=P("Layout","-layout-header",Yo,Se,e,o),t=p(()=>{const{common:{cubicBezierEaseInOut:u},self:l}=n.value,c={"--n-bezier":u};return e.inverted?(c["--n-color"]=l.headerColorInverted,c["--n-text-color"]=l.textColorInverted,c["--n-border-color"]=l.headerBorderColorInverted):(c["--n-color"]=l.headerColor,c["--n-text-color"]=l.textColor,c["--n-border-color"]=l.headerBorderColor),c}),i=r?G("layout-header",p(()=>e.inverted?"a":"b"),t,e):void 0;return{mergedClsPrefix:o,cssVars:r?void 0:t,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Xo={flex:"~",justify:"center",items:"center",space:"x-2",h:"12"},Jo=$({__name:"MyHeader",setup(e){const{t:o,locale:r}=ye(),n=ro();function t(i){r.value=i}return(i,u)=>(j(),K("div",Xo,[z(Z,{to:"/",title:R(o)("button.home"),icon:"i-mdi-home",class:"text-3xl"},null,8,["title"]),z(Z,{text:"3xl",icon:"i-ri-moon-fill dark:i-ri-sun-fill",title:R(o)("button.toggle_dark"),onClick:u[0]||(u[0]=()=>R(no)())},null,8,["title"]),z(R(lo),{trigger:"click",options:R(n),onSelect:t},{default:L(()=>[z(Z,{icon:"i-ooui-language",class:"text-3xl",title:R(o)("button.toggle_langs")},null,8,["title"])]),_:1},8,["options"])]))}});function ke(e){return e.map(o=>v(wo,{key:o.slug,href:`#${o.slug}`,title:o.title},()=>ke(o.children)))}const Zo=$({props:{headers:{type:Array,required:!0}},setup(e){return()=>v($o,{ignoreGap:!0},()=>ke(e.headers))}}),fe=$({__name:"QTime",props:{time:{}},setup(e){const o=e,r=p(()=>new Date(o.time)),n=new Date,t=p(()=>{const u=(n.getFullYear()-r.value.getFullYear())*12+n.getMonth()-r.value.getMonth();return u>0&&u<4?"relative":"date"});return(i,u)=>(j(),q(R(go),{time:r.value,type:t.value,title:i.time},null,8,["time","type","title"]))}}),Ko={p:"y-6 x-6"},et={container:"","max-w":"320",m:"auto",flex:"",space:"x-2"},ot={class:"flex gap-2"},tt={sticky:"",top:"4","self-start":"",class:"hidden xl:block","max-w":"70"},it=$({__name:"default",setup(e){var u;const{t:o}=ye(),r=io(),n=B(ie.find(l=>l.routePath===r.path.substring(1)));U(()=>r.path,async l=>{n.value=ie.find(c=>c.routePath===l.substring(1))});const t=p(()=>{var l;return(l=n.value)==null?void 0:l.attributes}),i=`${ae.repoUrl}/commits/${ae.repoBranch}/${(u=n.value)==null?void 0:u.repoPath}`;return X(()=>{document.querySelectorAll("figure.code-block button.copy").forEach(c=>{c.addEventListener("click",()=>{if(c.parentNode&&c.parentNode.nextSibling){const y=c.parentNode.nextSibling.textContent;y&&(navigator.clipboard.writeText(y),c.classList.remove("copy"),c.classList.add("copied"),setTimeout(()=>{c.classList.remove("copied"),c.classList.add("copy")},1e3))}})})}),(l,c)=>{const d=ao("RouterView");return j(),K(co,null,[z(R(qo),{"scroll-smooth":"",position:"absolute",class:"text-gray-700 dark:text-gray-200","native-scrollbar":!1},{default:L(()=>[z(R(Qo),{bordered:""},{default:L(()=>[z(Jo)]),_:1}),W("section",Ko,[W("div",et,[z(R(ue),{embedded:"","flex-grow":"","z-15":""},{default:L(()=>[W("div",ot,[t.value&&t.value.createdAt?(j(),q(R(No),{key:0,class:"block"},{default:L(()=>[se(ce(R(o)("article.created_at"))+" ",1),z(fe,{time:t.value.createdAt},null,8,["time"])]),_:1})):J("",!0),t.value&&t.value.changedAt?(j(),K("a",{key:1,class:"text-sky-500 hover:text-green-500 hover:underline primary-clickable cursor-pointer",href:i,target:"_blank"},[se(ce(R(o)("article.changed_at"))+" ",1),z(fe,{time:t.value.changedAt},null,8,["time"])])):J("",!0)]),z(d,null,{default:L(({Component:y})=>[(j(),q(so(y)))]),_:1}),W("div",null,[z(uo)])]),_:1}),W("aside",tt,[z(R(ue),{embedded:"",hoverable:"","content-style":"padding-left: 0.5rem;"},{default:L(()=>[n.value?(j(),q(R(Zo),{key:0,text:"left",headers:n.value.headers},null,8,["headers"])):J("",!0)]),_:1})])])])]),_:1}),z(fo)],64)}}});export{it as default};
