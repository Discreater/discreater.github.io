import{i as oe,w as Q,g as X,h as J,j as He,k,l as C,d as $,m as v,n as V,p as Ne,q as B,s as m,v as ge,x as Fe,y as ve,z as Ve,A as be,S as me,B as Me,C as pe,D as We,E as De,F as ne,G as y,H as w,I as le,J as P,K as Ge,L as q,M as qe,N as Ye,O as Ue,P as N,Q as Qe,R as Xe,T as G,U as Je,V as F,W as Ze,X as Ke,Y as xe,Z as W,_ as eo,$ as oo,a0 as ie,a1 as to,a2 as ro,a3 as ye,u as Ce,a4 as no,c as ee,o as A,b as z,e as R,a5 as lo,a6 as io,a7 as j,a8 as Y,a9 as ae,aa as ao,ab as se,ac as so,a as D,ad as Z,ae as ce,t as de,r as co,af as uo}from"./main-C3GYrh12.js";import{_ as K,S as fo,a as ho}from"./SpotLight-D5vHFg7T.js";import{N as go}from"./Time-57BG43Pc.js";function Se(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function vo(e,t,r){const o=oe(e,null);o!==null&&(t in o||(o[t]=[]),o[t].push(r.value),Q(r,(n,l)=>{const u=o[t],d=u.findIndex(a=>a===l);~d&&u.splice(d,1),u.push(n)}),X(()=>{const n=o[t],l=n.findIndex(u=>u===r.value);~l&&n.splice(l,1)}))}function bo(e,t,r){const o=oe(e,null);o!==null&&(t in o||(o[t]=[]),J(()=>{const n=r();n&&o[t].push(n)}),X(()=>{const n=o[t],l=r(),u=n.findIndex(d=>d===l);~u&&n.splice(u,1)}))}let ue=!1;function mo(){if(He&&window.CSS&&!ue&&(ue=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function po(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}const xo=k("affix",[C("affixed",{position:"fixed"},[C("absolute-positioned",{position:"absolute"})])]);function yo(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function Co(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const te={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fixed"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},So=ge(te),ko=$({name:"Affix",props:te,setup(e){const{mergedClsPrefixRef:t}=V(e);Ne("-affix",xo,t);let r=null;const o=B(!1),n=B(!1),l=B(null),u=B(null),d=m(()=>n.value||o.value),a=m(()=>{var i,c;return(c=(i=e.triggerTop)!==null&&i!==void 0?i:e.offsetTop)!==null&&c!==void 0?c:e.top}),s=m(()=>{var i,c;return(c=(i=e.top)!==null&&i!==void 0?i:e.triggerTop)!==null&&c!==void 0?c:e.offsetTop}),f=m(()=>{var i,c;return(c=(i=e.bottom)!==null&&i!==void 0?i:e.triggerBottom)!==null&&c!==void 0?c:e.offsetBottom}),p=m(()=>{var i,c;return(c=(i=e.triggerBottom)!==null&&i!==void 0?i:e.offsetBottom)!==null&&c!==void 0?c:e.bottom}),S=B(null),T=()=>{const{target:i,listenTo:c}=e;i?r=i():c?r=Se(c):r=document,r&&(r.addEventListener("scroll",g),g())};function g(){Fe(h)}function h(){const{value:i}=S;if(!r||!i)return;const c=yo(r);if(d.value){u.value!==null&&c<u.value&&(o.value=!1,u.value=null),l.value!==null&&c>l.value&&(n.value=!1,l.value=null);return}const _=Co(r),E=i.getBoundingClientRect(),I=E.top-_.top,O=_.bottom-E.bottom,x=a.value,b=p.value;x!==void 0&&I<=x?(o.value=!0,u.value=c-(x-I)):(o.value=!1,u.value=null),b!==void 0&&O<=b?(n.value=!0,l.value=c+b-O):(n.value=!1,l.value=null)}return J(()=>{T()}),X(()=>{r&&r.removeEventListener("scroll",g)}),{selfRef:S,affixed:d,mergedClsPrefix:t,mergedstyle:m(()=>{const i={};return o.value&&a.value!==void 0&&s.value!==void 0&&(i.top=`${s.value}px`),n.value&&p.value!==void 0&&f.value!==void 0&&(i.bottom=`${f.value}px`),i})}},render(){const{mergedClsPrefix:e}=this;return v("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),U=be("n-anchor"),To={title:String,href:String},wo=$({name:"AnchorLink",props:To,setup(e,{slots:t}){const r=B(null),o=oe(U),n=ve(e,"href"),l=Ve(()=>n.value&&n.value===o.activeHref.value);vo(U,"collectedLinkHrefs",n),bo(U,"titleEls",()=>r.value),Q(l,d=>{d&&r.value&&o.updateBarPosition(r.value)});function u(){e.href!==void 0&&o.setActiveHref(e.href)}return()=>{var d;const{value:a}=o.mergedClsPrefix;return v("div",{class:[`${a}-anchor-link`,l.value&&`${a}-anchor-link--active`]},v("a",{ref:r,class:[`${a}-anchor-link__title`],href:e.href,title:po(e.title),onClick:u},e.title),(d=t.default)===null||d===void 0?void 0:d.call(t))}}});function Ro(e,t){const{top:r,height:o}=e.getBoundingClientRect(),n=t instanceof HTMLElement?t.getBoundingClientRect().top:0;return{top:r-n,height:o}}const re={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},_o=ge(re),zo=$({name:"BaseAnchor",props:Object.assign(Object.assign({},re),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const t=[],r=[],o=B(null),n=B(null),l=B(null),u=B(null),d=m(()=>e.type==="block"),a=m(()=>!d.value&&e.showRail);function s(){const{value:g}=l,{value:h}=n;g&&(g.style.transition="none"),h&&(h.style.transition="none"),r&&r.forEach(i=>{i.style.transition="none"}),De(()=>{const{value:i}=l,{value:c}=n;i&&(i.offsetWidth,i.style.transition=""),c&&(c.offsetWidth,c.style.transition=""),r&&r.forEach(_=>{_.offsetWidth,_.style.transition=""})})}function f(g,h=!0){const{value:i}=l,{value:c}=n,{value:_}=u;if(!_||!i)return;h||(i.style.transition="none",c&&(c.style.transition="none"));const{offsetHeight:E,offsetWidth:I}=g,{top:O,left:x}=g.getBoundingClientRect(),{top:b,left:L}=_.getBoundingClientRect(),H=O-b,M=x-L;i.style.top=`${H}px`,i.style.height=`${E}px`,c&&(c.style.top=`${H}px`,c.style.height=`${E}px`,c.style.maxWidth=`${I+M}px`),i.offsetHeight,c&&c.offsetHeight,h||(i.style.transition="",c&&(c.style.transition=""))}const p=Me(()=>{T(!0)},128);function S(g,h=!0){const i=/^#([^#]+)$/.exec(g);if(!i)return;const c=document.getElementById(i[1]);c&&(o.value=g,c.scrollIntoView(),h||s(),p())}function T(g=!0){var h;const i=[],c=Se((h=e.offsetTarget)!==null&&h!==void 0?h:document);t.forEach(x=>{const b=/#([^#]+)$/.exec(x);if(!b)return;const L=document.getElementById(b[1]);if(L&&c){const{top:H,height:M}=Ro(L,c);i.push({top:H,height:M,href:x})}}),i.sort((x,b)=>x.top>b.top?1:(x.top===b.top&&x.height<b.height,-1));const _=o.value,{bound:E,ignoreGap:I}=e,O=i.reduce((x,b)=>b.top+b.height<0?I?b:x:b.top<=E?x===null?b:b.top===x.top?b.href===_?b:x:b.top>x.top?b:x:x,null);g||s(),O?o.value=O.href:o.value=null}return pe(U,{activeHref:o,mergedClsPrefix:ve(e,"mergedClsPrefix"),updateBarPosition:f,setActiveHref:S,collectedLinkHrefs:t,titleEls:r}),J(()=>{document.addEventListener("scroll",p,!0),S(window.location.hash),T(!1)}),We(()=>{S(window.location.hash),T(!1)}),X(()=>{document.removeEventListener("scroll",p,!0)}),Q(o,g=>{if(g===null){const{value:h}=n;h&&!d.value&&(h.style.maxWidth="0")}}),{selfRef:u,barRef:l,slotRef:n,setActiveHref:S,activeHref:o,isBlockType:d,mergedShowRail:a}},render(){var e;const{mergedClsPrefix:t,mergedShowRail:r,isBlockType:o,$slots:n}=this,l=v("div",{class:[`${t}-anchor`,o&&`${t}-anchor--block`,r&&`${t}-anchor--show-rail`],ref:"selfRef"},r&&this.showBackground?v("div",{ref:"slotRef",class:`${t}-anchor-link-background`}):null,r?v("div",{class:`${t}-anchor-rail`},v("div",{ref:"barRef",class:[`${t}-anchor-rail__bar`,this.activeHref!==null&&`${t}-anchor-rail__bar--active`]})):null,(e=n.default)===null||e===void 0?void 0:e.call(n));return this.internalScrollable?v(me,null,{default:()=>l}):l}}),Bo=k("anchor",`
 position: relative;
`,[ne("block",`
 padding-left: var(--n-rail-width);
 `,[k("anchor-link",[y("+, >",[k("anchor-link",`
 margin-top: .5em;
 `)])]),k("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),ne("show-rail",[y(">",[k("anchor-link","padding-left: 0;")])])]),C("block",[k("anchor-link",`
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
 `,[w("bar",`
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
 `,[C("active",[y(">",[w("title",`
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
 `,[y("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),y("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),$o=Object.assign(Object.assign(Object.assign(Object.assign({},P.props),{affix:Boolean}),te),re),Eo=$({name:"Anchor",props:$o,setup(e,{slots:t}){const{mergedClsPrefixRef:r,inlineThemeDisabled:o}=V(e),n=P("Anchor","-anchor",Bo,Ge,e,r),l=B(null),u=m(()=>{const{self:{railColor:a,linkColor:s,railColorActive:f,linkTextColor:p,linkTextColorHover:S,linkTextColorPressed:T,linkTextColorActive:g,linkFontSize:h,railWidth:i,linkPadding:c,borderRadius:_},common:{cubicBezierEaseInOut:E}}=n.value;return{"--n-link-border-radius":_,"--n-link-color":s,"--n-link-font-size":h,"--n-link-text-color":p,"--n-link-text-color-hover":S,"--n-link-text-color-active":g,"--n-link-text-color-pressed":T,"--n-link-padding":c,"--n-bezier":E,"--n-rail-color":a,"--n-rail-color-active":f,"--n-rail-width":i}}),d=o?q("anchor",void 0,u,e):void 0;return{scrollTo(a){var s;(s=l.value)===null||s===void 0||s.setActiveHref(a)},renderAnchor:()=>(d==null||d.onRender(),v(zo,Object.assign({ref:l,style:o?void 0:u.value,class:d==null?void 0:d.themeClass.value},le(e,_o),{mergedClsPrefix:r.value}),t))}},render(){return this.affix?v(ko,Object.assign({},le(this,So)),{default:this.renderAnchor}):this.renderAnchor()}}),Po=y([k("card",`
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
 `,[Ue({background:"var(--n-color-modal)"}),C("hoverable",[y("&:hover","box-shadow: var(--n-box-shadow);")]),C("content-segmented",[y(">",[w("content",{paddingTop:"var(--n-padding-bottom)"})])]),C("content-soft-segmented",[y(">",[w("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),C("footer-segmented",[y(">",[w("footer",{paddingTop:"var(--n-padding-bottom)"})])]),C("footer-soft-segmented",[y(">",[w("footer",`
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
 `,[y("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),w("action",`
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
 `,[y("&:target","border-color: var(--n-color-target);")]),C("action-segmented",[y(">",[w("action",[y("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),C("content-segmented, content-soft-segmented",[y(">",[w("content",{transition:"border-color 0.3s var(--n-bezier)"},[y("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),C("footer-segmented, footer-soft-segmented",[y(">",[w("footer",{transition:"border-color 0.3s var(--n-bezier)"},[y("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),C("embedded",`
 background-color: var(--n-color-embedded);
 `)]),qe(k("card",`
 background: var(--n-color-modal);
 `,[C("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Ye(k("card",`
 background: var(--n-color-popover);
 `,[C("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),Oo={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},Io=Object.assign(Object.assign({},P.props),Oo),fe=$({name:"Card",props:Io,slots:Object,setup(e){const t=()=>{const{onClose:s}=e;s&&Ke(s)},{inlineThemeDisabled:r,mergedClsPrefixRef:o,mergedRtlRef:n}=V(e),l=P("Card","-card",Po,Qe,e,o),u=Xe("Card",n,o),d=m(()=>{const{size:s}=e,{self:{color:f,colorModal:p,colorTarget:S,textColor:T,titleTextColor:g,titleFontWeight:h,borderColor:i,actionColor:c,borderRadius:_,lineHeight:E,closeIconColor:I,closeIconColorHover:O,closeIconColorPressed:x,closeColorHover:b,closeColorPressed:L,closeBorderRadius:H,closeIconSize:M,closeSize:we,boxShadow:Re,colorPopover:_e,colorEmbedded:ze,colorEmbeddedModal:Be,colorEmbeddedPopover:$e,[G("padding",s)]:Ee,[G("fontSize",s)]:Pe,[G("titleFontSize",s)]:Oe},common:{cubicBezierEaseInOut:Ie}}=l.value,{top:je,left:Ae,bottom:Le}=Je(Ee);return{"--n-bezier":Ie,"--n-border-radius":_,"--n-color":f,"--n-color-modal":p,"--n-color-popover":_e,"--n-color-embedded":ze,"--n-color-embedded-modal":Be,"--n-color-embedded-popover":$e,"--n-color-target":S,"--n-text-color":T,"--n-line-height":E,"--n-action-color":c,"--n-title-text-color":g,"--n-title-font-weight":h,"--n-close-icon-color":I,"--n-close-icon-color-hover":O,"--n-close-icon-color-pressed":x,"--n-close-color-hover":b,"--n-close-color-pressed":L,"--n-border-color":i,"--n-box-shadow":Re,"--n-padding-top":je,"--n-padding-bottom":Le,"--n-padding-left":Ae,"--n-font-size":Pe,"--n-title-font-size":Oe,"--n-close-size":we,"--n-close-icon-size":M,"--n-close-border-radius":H}}),a=r?q("card",m(()=>e.size[0]),d,e):void 0;return{rtlEnabled:u,mergedClsPrefix:o,mergedTheme:l,handleCloseClick:t,cssVars:r?void 0:d,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{segmented:e,bordered:t,hoverable:r,mergedClsPrefix:o,rtlEnabled:n,onRender:l,embedded:u,tag:d,$slots:a}=this;return l==null||l(),v(d,{class:[`${o}-card`,this.themeClass,u&&`${o}-card--embedded`,{[`${o}-card--rtl`]:n,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:t,[`${o}-card--hoverable`]:r}],style:this.cssVars,role:this.role},N(a.cover,s=>{const f=this.cover?F([this.cover()]):s;return f&&v("div",{class:`${o}-card-cover`,role:"none"},f)}),N(a.header,s=>{const{title:f}=this,p=f?F(typeof f=="function"?[f()]:[f]):s;return p||this.closable?v("div",{class:[`${o}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},v("div",{class:`${o}-card-header__main`,role:"heading"},p),N(a["header-extra"],S=>{const T=this.headerExtra?F([this.headerExtra()]):S;return T&&v("div",{class:[`${o}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},T)}),this.closable&&v(Ze,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),N(a.default,s=>{const{content:f}=this,p=f?F(typeof f=="function"?[f()]:[f]):s;return p&&v("div",{class:[`${o}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},p)}),N(a.footer,s=>{const f=this.footer?F([this.footer()]):s;return f&&v("div",{class:[`${o}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},f)}),N(a.action,s=>{const f=this.action?F([this.action()]):s;return f&&v("div",{class:`${o}-card__action`,role:"none"},f)}))}});function jo(e){const{primaryColor:t,successColor:r,warningColor:o,errorColor:n,infoColor:l,fontWeightStrong:u}=e;return{fontWeight:u,rotate:"252deg",colorStartPrimary:W(t,{alpha:.6}),colorEndPrimary:t,colorStartInfo:W(l,{alpha:.6}),colorEndInfo:l,colorStartWarning:W(o,{alpha:.6}),colorEndWarning:o,colorStartError:W(n,{alpha:.6}),colorEndError:n,colorStartSuccess:W(r,{alpha:.6}),colorEndSuccess:r}}const Ao={common:xe,self:jo};function Lo(e){const{baseColor:t,textColor2:r,bodyColor:o,cardColor:n,dividerColor:l,actionColor:u,scrollbarColor:d,scrollbarColorHover:a,invertedColor:s}=e;return{textColor:r,textColorInverted:"#FFF",color:o,colorEmbedded:u,headerColor:n,headerColorInverted:s,footerColor:u,footerColorInverted:s,headerBorderColor:l,headerBorderColorInverted:s,footerBorderColor:l,footerBorderColorInverted:s,siderBorderColor:l,siderBorderColorInverted:s,siderColor:n,siderColorInverted:s,siderToggleButtonBorder:`1px solid ${l}`,siderToggleButtonColor:t,siderToggleButtonIconColor:r,siderToggleButtonIconColorInverted:r,siderToggleBarColor:ie(o,d),siderToggleBarColorHover:ie(o,a),__invertScrollbar:"true"}}const ke=eo({name:"Layout",common:xe,peers:{Scrollbar:oo},self:Lo}),Ho=k("gradient-text",`
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
`),No=Object.assign(Object.assign({},P.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),Fo=$({name:"GradientText",props:No,setup(e){mo();const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=V(e),o=m(()=>{const{type:s}=e;return s==="danger"?"error":s}),n=m(()=>{let s=e.size||e.fontSize;return s&&(s=to(s)),s||void 0}),l=m(()=>{const s=e.color||e.gradient;if(typeof s=="string")return s;if(s){const f=s.deg||0,p=s.from,S=s.to;return`linear-gradient(${f}deg, ${p} 0%, ${S} 100%)`}}),u=P("GradientText","-gradient-text",Ho,Ao,e,t),d=m(()=>{const{value:s}=o,{common:{cubicBezierEaseInOut:f},self:{rotate:p,[G("colorStart",s)]:S,[G("colorEnd",s)]:T,fontWeight:g}}=u.value;return{"--n-bezier":f,"--n-rotate":p,"--n-color-start":S,"--n-color-end":T,"--n-font-weight":g}}),a=r?q("gradient-text",m(()=>o.value[0]),d,e):void 0;return{mergedClsPrefix:t,compatibleType:o,styleFontSize:n,styleBgImage:l,cssVars:r?void 0:d,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{mergedClsPrefix:e,onRender:t}=this;return t==null||t(),v("span",{class:[`${e}-gradient-text`,`${e}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}}),Vo=k("layout",`
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
 `)]),Mo={embedded:Boolean,position:ye,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Wo=be("n-layout");function Do(e){return $({name:"Layout",props:Object.assign(Object.assign({},P.props),Mo),setup(t){const r=B(null),o=B(null),{mergedClsPrefixRef:n,inlineThemeDisabled:l}=V(t),u=P("Layout","-layout",Vo,ke,t,n);function d(h,i){if(t.nativeScrollbar){const{value:c}=r;c&&(i===void 0?c.scrollTo(h):c.scrollTo(h,i))}else{const{value:c}=o;c&&c.scrollTo(h,i)}}pe(Wo,t);let a=0,s=0;const f=h=>{var i;const c=h.target;a=c.scrollLeft,s=c.scrollTop,(i=t.onScroll)===null||i===void 0||i.call(t,h)};ro(()=>{if(t.nativeScrollbar){const h=r.value;h&&(h.scrollTop=s,h.scrollLeft=a)}});const p={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},S={scrollTo:d},T=m(()=>{const{common:{cubicBezierEaseInOut:h},self:i}=u.value;return{"--n-bezier":h,"--n-color":t.embedded?i.colorEmbedded:i.color,"--n-text-color":i.textColor}}),g=l?q("layout",m(()=>t.embedded?"e":""),T,t):void 0;return Object.assign({mergedClsPrefix:n,scrollableElRef:r,scrollbarInstRef:o,hasSiderStyle:p,mergedTheme:u,handleNativeElScroll:f,cssVars:l?void 0:T,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender},S)},render(){var t;const{mergedClsPrefix:r,hasSider:o}=this;(t=this.onRender)===null||t===void 0||t.call(this);const n=o?this.hasSiderStyle:void 0,l=[this.themeClass,e,`${r}-layout`,`${r}-layout--${this.position}-positioned`];return v("div",{class:l,style:this.cssVars},this.nativeScrollbar?v("div",{ref:"scrollableElRef",class:[`${r}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,n],onScroll:this.handleNativeElScroll},this.$slots):v(me,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,n]}),this.$slots))}})}const Go=Do(!1),qo=k("layout-header",`
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
 `)]),Yo={position:ye,inverted:Boolean,bordered:{type:Boolean,default:!1}},Uo=$({name:"LayoutHeader",props:Object.assign(Object.assign({},P.props),Yo),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=V(e),o=P("Layout","-layout-header",qo,ke,e,t),n=m(()=>{const{common:{cubicBezierEaseInOut:u},self:d}=o.value,a={"--n-bezier":u};return e.inverted?(a["--n-color"]=d.headerColorInverted,a["--n-text-color"]=d.textColorInverted,a["--n-border-color"]=d.headerBorderColorInverted):(a["--n-color"]=d.headerColor,a["--n-text-color"]=d.textColor,a["--n-border-color"]=d.headerBorderColor),a}),l=r?q("layout-header",m(()=>e.inverted?"a":"b"),n,e):void 0;return{mergedClsPrefix:t,cssVars:r?void 0:n,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}});function Te(e){return e.map(t=>v(wo,{key:t.slug,href:`#${t.slug}`,title:t.title},()=>Te(t.children)))}const Qo=$({props:{headers:{type:Array,required:!0}},setup(e){return()=>v(Eo,{ignoreGap:!0},()=>Te(e.headers))}}),Xo={flex:"~",justify:"center",items:"center",space:"x-2",h:"12"},Jo=$({__name:"MyHeader",setup(e){const{t,locale:r}=Ce(),o=no();function n(l){r.value=l}return(l,u)=>(A(),ee("div",Xo,[z(K,{to:"/",title:R(t)("button.home"),icon:"i-mdi-home",class:"text-3xl"},null,8,["title"]),z(K,{text:"3xl",icon:"i-ri-moon-fill dark:i-ri-sun-fill",title:R(t)("button.toggle_dark"),onClick:u[0]||(u[0]=()=>R(lo)())},null,8,["title"]),z(R(io),{trigger:"click",options:R(o),onSelect:n},{default:j(()=>[z(K,{icon:"i-ooui-language",class:"text-3xl",title:R(t)("button.toggle_langs")},null,8,["title"])]),_:1},8,["options"])]))}}),he=$({__name:"QTime",props:{time:{}},setup(e){const t=e,r=m(()=>new Date(t.time)),o=new Date,n=m(()=>{const u=(o.getFullYear()-r.value.getFullYear())*12+o.getMonth()-r.value.getMonth();return u>0&&u<4?"relative":"date"});return(l,u)=>(A(),Y(R(go),{time:r.value,type:n.value,title:l.time},null,8,["time","type","title"]))}}),Zo={p:"y-6 x-6"},Ko={container:"","max-w":"320",m:"auto",flex:"",space:"x-2"},et={class:"flex gap-2"},ot={sticky:"",top:"4","self-start":"",class:"hidden xl:block","max-w":"70"},lt=$({__name:"default",setup(e){var u;const{t}=Ce(),r=ao(),o=B(ae.find(d=>d.routePath===r.path.substring(1)));Q(()=>r.path,async d=>{o.value=ae.find(a=>a.routePath===d.substring(1))});const n=m(()=>{var d;return(d=o.value)==null?void 0:d.attributes}),l=`${se.repoUrl}/commits/${se.repoBranch}/${(u=o.value)==null?void 0:u.repoPath}`;return J(()=>{document.querySelectorAll("figure.code-block button.copy").forEach(a=>{a.addEventListener("click",()=>{if(a.parentNode&&a.parentNode.nextSibling){const f=a.parentNode.nextSibling.textContent;f&&(navigator.clipboard.writeText(f),a.classList.remove("copy"),a.classList.add("copied"),setTimeout(()=>{a.classList.remove("copied"),a.classList.add("copy")},1e3))}})})}),(d,a)=>{const s=co("RouterView");return A(),ee(so,null,[z(R(Go),{"scroll-smooth":"",position:"absolute",class:"text-gray-700 dark:text-gray-200","native-scrollbar":!1},{default:j(()=>[z(R(Uo),{bordered:""},{default:j(()=>[z(Jo)]),_:1}),D("section",Zo,[D("div",Ko,[z(R(fe),{embedded:"","flex-grow":"","z-15":""},{default:j(()=>[D("div",et,[n.value&&n.value.createdAt?(A(),Y(R(Fo),{key:0,class:"block"},{default:j(()=>[ce(de(R(t)("article.created_at"))+" ",1),z(he,{time:n.value.createdAt},null,8,["time"])]),_:1})):Z("",!0),n.value&&n.value.changedAt?(A(),ee("a",{key:1,class:"text-sky-500 hover:text-green-500 hover:underline primary-clickable cursor-pointer",href:l,target:"_blank"},[ce(de(R(t)("article.changed_at"))+" ",1),z(he,{time:n.value.changedAt},null,8,["time"])])):Z("",!0)]),z(s,null,{default:j(({Component:f})=>[(A(),Y(uo(f)))]),_:1}),D("div",null,[z(ho)])]),_:1}),D("aside",ot,[z(R(fe),{embedded:"",hoverable:"","content-style":"padding-left: 0.5rem;"},{default:j(()=>[o.value?(A(),Y(R(Qo),{key:0,text:"left",headers:o.value.headers},null,8,["headers"])):Z("",!0)]),_:1})])])])]),_:1}),z(fo)],64)}}});export{lt as default};
