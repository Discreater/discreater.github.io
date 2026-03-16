import{i as Te,g as h,h as v,j as Ie,k as S,l as $,m as Pe,n as Le,d as L,p as _,q as V,s as Y,v as P,w as Oe,x as G,y as He,z as m,A as F,S as de,N as Ve,B as Fe,C as j,D as Ne,E as ue,F as N,G as je,H as Me,I as Z,J as De,K as Ae,L as ge,M as W,O as We,P as Ye,u as he,Q as Ge,o as E,R as M,T as I,b as k,e as B,U as Ke,V as Ue,W as fe,X as qe,Y as Qe,c as D,a as H,Z as ee,_ as oe,$ as be,a0 as Xe,a1 as te,a2 as Je,t as Q,a3 as re,a4 as Ze,a5 as ne,a6 as eo,a7 as ae,a8 as U,a9 as oo,r as to}from"./main-BSsj5kUj.js";import{_ as q,a as ro,b as no,S as ao,c as so}from"./SpotLight-DrDQV9Wv.js";import{N as lo}from"./Time-D7261_nf.js";let se=!1;function io(){if(Te&&window.CSS&&!se&&(se=!0,"registerProperty"in window?.CSS))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const le=v("card-content",`
 flex: 1;
 min-width: 0;
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
`),co=h([v("card",`
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
 `,[Ie({background:"var(--n-color-modal)"}),S("hoverable",[h("&:hover","box-shadow: var(--n-box-shadow);")]),S("content-segmented",[h(">",[v("card-content",`
 padding-top: var(--n-padding-bottom);
 `),$("content-scrollbar",[h(">",[v("scrollbar-container",[h(">",[v("card-content",`
 padding-top: var(--n-padding-bottom);
 `)])])])])])]),S("content-soft-segmented",[h(">",[v("card-content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `),$("content-scrollbar",[h(">",[v("scrollbar-container",[h(">",[v("card-content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])])])])])]),S("footer-segmented",[h(">",[$("footer",`
 padding-top: var(--n-padding-bottom);
 `)])]),S("footer-soft-segmented",[h(">",[$("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),h(">",[v("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[$("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),$("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),$("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),$("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),le,v("card-content",[h("&:first-child",`
 padding-top: var(--n-padding-bottom);
 `)]),$("content-scrollbar",`
 display: flex;
 flex-direction: column;
 `,[h(">",[v("scrollbar-container",[h(">",[le])])]),h("&:first-child >",[v("scrollbar-container",[h(">",[v("card-content",`
 padding-top: var(--n-padding-bottom);
 `)])])])]),$("footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[h("&:first-child",`
 padding-top: var(--n-padding-bottom);
 `)]),$("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),v("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[h("img",`
 display: block;
 width: 100%;
 `)]),S("bordered",`
 border: 1px solid var(--n-border-color);
 `,[h("&:target","border-color: var(--n-color-target);")]),S("action-segmented",[h(">",[$("action",[h("&:not(:first-child)",`
 border-top: 1px solid var(--n-border-color);
 `)])])]),S("content-segmented, content-soft-segmented",[h(">",[v("card-content",`
 transition: border-color 0.3s var(--n-bezier);
 `,[h("&:not(:first-child)",`
 border-top: 1px solid var(--n-border-color);
 `)]),$("content-scrollbar",`
 transition: border-color 0.3s var(--n-bezier);
 `,[h("&:not(:first-child)",`
 border-top: 1px solid var(--n-border-color);
 `)])])]),S("footer-segmented, footer-soft-segmented",[h(">",[$("footer",`
 transition: border-color 0.3s var(--n-bezier);
 `,[h("&:not(:first-child)",`
 border-top: 1px solid var(--n-border-color);
 `)])])]),S("embedded",`
 background-color: var(--n-color-embedded);
 `)]),Pe(v("card",`
 background: var(--n-color-modal);
 `,[S("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Le(v("card",`
 background: var(--n-color-popover);
 `,[S("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),uo={title:[String,Function],contentClass:String,contentStyle:[Object,String],contentScrollable:Boolean,headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:String,bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function,closeFocusable:Boolean},go=Object.assign(Object.assign({},P.props),uo),ie=L({name:"Card",props:go,slots:Object,setup(o){const t=()=>{const{onClose:g}=o;g&&He(g)},{inlineThemeDisabled:s,mergedClsPrefixRef:e,mergedRtlRef:l,mergedComponentPropsRef:a}=Y(o),i=P("Card","-card",co,Fe,o,e),n=Oe("Card",l,e),c=m(()=>{var g,p;return o.size||((p=(g=a?.value)===null||g===void 0?void 0:g.Card)===null||p===void 0?void 0:p.size)||"medium"}),r=m(()=>{const g=c.value,{self:{color:p,colorModal:R,colorTarget:x,textColor:y,titleTextColor:C,titleFontWeight:u,borderColor:f,actionColor:b,borderRadius:z,lineHeight:O,closeIconColor:w,closeIconColorHover:T,closeIconColorPressed:A,closeColorHover:K,closeColorPressed:X,closeBorderRadius:J,closeIconSize:me,closeSize:pe,boxShadow:xe,colorPopover:ye,colorEmbedded:Ce,colorEmbeddedModal:Se,colorEmbeddedPopover:_e,[j("padding",g)]:ze,[j("fontSize",g)]:we,[j("titleFontSize",g)]:$e},common:{cubicBezierEaseInOut:ke}}=i.value,{top:Be,left:Re,bottom:Ee}=Ne(ze);return{"--n-bezier":ke,"--n-border-radius":z,"--n-color":p,"--n-color-modal":R,"--n-color-popover":ye,"--n-color-embedded":Ce,"--n-color-embedded-modal":Se,"--n-color-embedded-popover":_e,"--n-color-target":x,"--n-text-color":y,"--n-line-height":O,"--n-action-color":b,"--n-title-text-color":C,"--n-title-font-weight":u,"--n-close-icon-color":w,"--n-close-icon-color-hover":T,"--n-close-icon-color-pressed":A,"--n-close-color-hover":K,"--n-close-color-pressed":X,"--n-border-color":f,"--n-box-shadow":xe,"--n-padding-top":Be,"--n-padding-bottom":Ee,"--n-padding-left":Re,"--n-font-size":we,"--n-title-font-size":$e,"--n-close-size":pe,"--n-close-icon-size":me,"--n-close-border-radius":J}}),d=s?G("card",m(()=>c.value[0]),r,o):void 0;return{rtlEnabled:n,mergedClsPrefix:e,mergedTheme:i,handleCloseClick:t,cssVars:s?void 0:r,themeClass:d?.themeClass,onRender:d?.onRender}},render(){const{segmented:o,bordered:t,hoverable:s,mergedClsPrefix:e,rtlEnabled:l,onRender:a,embedded:i,tag:n,$slots:c}=this;return a?.(),_(n,{class:[`${e}-card`,this.themeClass,i&&`${e}-card--embedded`,{[`${e}-card--rtl`]:l,[`${e}-card--content-scrollable`]:this.contentScrollable,[`${e}-card--content${typeof o!="boolean"&&o.content==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.content,[`${e}-card--footer${typeof o!="boolean"&&o.footer==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.footer,[`${e}-card--action-segmented`]:o===!0||o!==!1&&o.action,[`${e}-card--bordered`]:t,[`${e}-card--hoverable`]:s}],style:this.cssVars,role:this.role},V(c.cover,r=>{const d=this.cover?F([this.cover()]):r;return d&&_("div",{class:`${e}-card-cover`,role:"none"},d)}),V(c.header,r=>{const{title:d}=this,g=d?F(typeof d=="function"?[d()]:[d]):r;return g||this.closable?_("div",{class:[`${e}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},_("div",{class:`${e}-card-header__main`,role:"heading"},g),V(c["header-extra"],p=>{const R=this.headerExtra?F([this.headerExtra()]):p;return R&&_("div",{class:[`${e}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},R)}),this.closable&&_(Ve,{clsPrefix:e,class:`${e}-card-header__close`,onClick:this.handleCloseClick,focusable:this.closeFocusable,absolute:!0})):null}),V(c.default,r=>{const{content:d}=this,g=d?F(typeof d=="function"?[d()]:[d]):r;return g?this.contentScrollable?_(de,{class:`${e}-card__content-scrollbar`,contentClass:[`${e}-card-content`,this.contentClass],contentStyle:this.contentStyle},g):_("div",{class:[`${e}-card-content`,this.contentClass],style:this.contentStyle,role:"none"},g):null}),V(c.footer,r=>{const d=this.footer?F([this.footer()]):r;return d&&_("div",{class:[`${e}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},d)}),V(c.action,r=>{const d=this.action?F([this.action()]):r;return d&&_("div",{class:`${e}-card__action`,role:"none"},d)}))}});function ho(o){const{primaryColor:t,successColor:s,warningColor:e,errorColor:l,infoColor:a,fontWeightStrong:i}=o;return{fontWeight:i,rotate:"252deg",colorStartPrimary:N(t,{alpha:.6}),colorEndPrimary:t,colorStartInfo:N(a,{alpha:.6}),colorEndInfo:a,colorStartWarning:N(e,{alpha:.6}),colorEndWarning:e,colorStartError:N(l,{alpha:.6}),colorEndError:l,colorStartSuccess:N(s,{alpha:.6}),colorEndSuccess:s}}const fo={common:ue,self:ho};function bo(o){const{baseColor:t,textColor2:s,bodyColor:e,cardColor:l,dividerColor:a,actionColor:i,scrollbarColor:n,scrollbarColorHover:c,invertedColor:r}=o;return{textColor:s,textColorInverted:"#FFF",color:e,colorEmbedded:i,headerColor:l,headerColorInverted:r,footerColor:i,footerColorInverted:r,headerBorderColor:a,headerBorderColorInverted:r,footerBorderColor:a,footerBorderColorInverted:r,siderBorderColor:a,siderBorderColorInverted:r,siderColor:l,siderColorInverted:r,siderToggleButtonBorder:`1px solid ${a}`,siderToggleButtonColor:t,siderToggleButtonIconColor:s,siderToggleButtonIconColorInverted:s,siderToggleBarColor:Z(e,n),siderToggleBarColorHover:Z(e,c),__invertScrollbar:"true"}}const ve=je({name:"Layout",common:ue,peers:{Scrollbar:Me},self:bo}),vo=v("gradient-text",`
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
`),mo=Object.assign(Object.assign({},P.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),po=L({name:"GradientText",props:mo,setup(o){io();const{mergedClsPrefixRef:t,inlineThemeDisabled:s}=Y(o),e=m(()=>{const{type:r}=o;return r==="danger"?"error":r}),l=m(()=>{let r=o.size||o.fontSize;return r&&(r=De(r)),r||void 0}),a=m(()=>{const r=o.color||o.gradient;if(typeof r=="string")return r;if(r){const d=r.deg||0,g=r.from,p=r.to;return`linear-gradient(${d}deg, ${g} 0%, ${p} 100%)`}}),i=P("GradientText","-gradient-text",vo,fo,o,t),n=m(()=>{const{value:r}=e,{common:{cubicBezierEaseInOut:d},self:{rotate:g,[j("colorStart",r)]:p,[j("colorEnd",r)]:R,fontWeight:x}}=i.value;return{"--n-bezier":d,"--n-rotate":g,"--n-color-start":p,"--n-color-end":R,"--n-font-weight":x}}),c=s?G("gradient-text",m(()=>e.value[0]),n,o):void 0;return{mergedClsPrefix:t,compatibleType:e,styleFontSize:l,styleBgImage:a,cssVars:s?void 0:n,themeClass:c?.themeClass,onRender:c?.onRender}},render(){const{mergedClsPrefix:o,onRender:t}=this;return t?.(),_("span",{class:[`${o}-gradient-text`,`${o}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}}),xo=v("layout",`
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
`,[v("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),S("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),yo={embedded:Boolean,position:ge,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Co=Ye("n-layout");function So(o){return L({name:"Layout",props:Object.assign(Object.assign({},P.props),yo),setup(t){const s=W(null),e=W(null),{mergedClsPrefixRef:l,inlineThemeDisabled:a}=Y(t),i=P("Layout","-layout",xo,ve,t,l);function n(y,C){if(t.nativeScrollbar){const{value:u}=s;u&&(C===void 0?u.scrollTo(y):u.scrollTo(y,C))}else{const{value:u}=e;u&&u.scrollTo(y,C)}}We(Co,t);let c=0,r=0;const d=y=>{var C;const u=y.target;c=u.scrollLeft,r=u.scrollTop,(C=t.onScroll)===null||C===void 0||C.call(t,y)};Ae(()=>{if(t.nativeScrollbar){const y=s.value;y&&(y.scrollTop=r,y.scrollLeft=c)}});const g={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},p={scrollTo:n},R=m(()=>{const{common:{cubicBezierEaseInOut:y},self:C}=i.value;return{"--n-bezier":y,"--n-color":t.embedded?C.colorEmbedded:C.color,"--n-text-color":C.textColor}}),x=a?G("layout",m(()=>t.embedded?"e":""),R,t):void 0;return Object.assign({mergedClsPrefix:l,scrollableElRef:s,scrollbarInstRef:e,hasSiderStyle:g,mergedTheme:i,handleNativeElScroll:d,cssVars:a?void 0:R,themeClass:x?.themeClass,onRender:x?.onRender},p)},render(){var t;const{mergedClsPrefix:s,hasSider:e}=this;(t=this.onRender)===null||t===void 0||t.call(this);const l=e?this.hasSiderStyle:void 0,a=[this.themeClass,o,`${s}-layout`,`${s}-layout--${this.position}-positioned`];return _("div",{class:a,style:this.cssVars},this.nativeScrollbar?_("div",{ref:"scrollableElRef",class:[`${s}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,l],onScroll:this.handleNativeElScroll},this.$slots):_(de,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,l]}),this.$slots))}})}const _o=So(!1),zo=v("layout-header",`
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
 `)]),wo={position:ge,inverted:Boolean,bordered:{type:Boolean,default:!1}},$o=L({name:"LayoutHeader",props:Object.assign(Object.assign({},P.props),wo),setup(o){const{mergedClsPrefixRef:t,inlineThemeDisabled:s}=Y(o),e=P("Layout","-layout-header",zo,ve,o,t),l=m(()=>{const{common:{cubicBezierEaseInOut:i},self:n}=e.value,c={"--n-bezier":i};return o.inverted?(c["--n-color"]=n.headerColorInverted,c["--n-text-color"]=n.textColorInverted,c["--n-border-color"]=n.headerBorderColorInverted):(c["--n-color"]=n.headerColor,c["--n-text-color"]=n.textColor,c["--n-border-color"]=n.headerBorderColor),c}),a=s?G("layout-header",m(()=>o.inverted?"a":"b"),l,o):void 0;return{mergedClsPrefix:t,cssVars:s?void 0:l,themeClass:a?.themeClass,onRender:a?.onRender}},render(){var o;const{mergedClsPrefix:t}=this;return(o=this.onRender)===null||o===void 0||o.call(this),_("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),ko=L({__name:"MyHeader",setup(o){const{t,locale:s}=he(),e=Ge();function l(a){s.value=a}return(a,i)=>(E(),M(ro,{class:"gap-2 h-12"},{default:I(()=>[k(q,{to:"/",title:B(t)("button.home"),icon:"icon-[carbon--home]",class:"text-3xl"},null,8,["title"]),k(q,{class:"text-3xl",icon:"icon-[carbon--moon] dark:icon-[carbon--sun]",title:B(t)("button.toggle_dark"),onClick:i[0]||(i[0]=()=>B(Ke)())},null,8,["title"]),k(B(Ue),{trigger:"click",options:B(e),onSelect:l},{default:I(()=>[k(q,{icon:"icon-[carbon--ibm-watson-language-translator]",class:"text-3xl",title:B(t)("button.toggle_langs")},null,8,["title"])]),_:1},8,["options"])]),_:1}))}}),ce=L({__name:"QTime",props:{time:{}},setup(o){const t=o,s=m(()=>new Date(t.time)),e=new Date,l=m(()=>{const i=(e.getFullYear()-s.value.getFullYear())*12+e.getMonth()-s.value.getMonth();return i>0&&i<4?"relative":"date"});return(a,i)=>(E(),M(B(lo),{time:s.value,type:l.value,title:o.time},null,8,["time","type","title"]))}}),Bo=["onClick"],Ro=["href"],Eo=L({__name:"DAnchor",props:{headers:{}},setup(o){const t=o;function s(u,f=0){const b=[];for(const z of u)b.push({level:f,slug:z.slug,title:z.title}),z.children&&b.push(...s(z.children,f+1));return b}const e=m(()=>s(t.headers)),l=te(new Set),a=W(null),i=new Map,n=te({top:0,height:0,visible:!1}),c=m(()=>{const u=e.value.filter(f=>l.has(f.slug));return{first:u[0]?.slug,last:u[u.length-1]?.slug}}),r=m(()=>({transform:`translateY(${n.top}px)`,height:`${n.height}px`,opacity:n.visible?"1":"0"}));function d(u,f){const b=f instanceof Element?f:f&&"$el"in f&&f.$el instanceof Element?f.$el:null;b instanceof HTMLElement?i.set(u,b):i.delete(u)}function g(){const u=c.value.first,f=c.value.last;if(!u||!f||!a.value){n.visible=!1,n.height=0;return}const b=i.get(u),z=i.get(f);if(!b||!z){n.visible=!1,n.height=0;return}const O=a.value.getBoundingClientRect(),w=b.getBoundingClientRect(),T=z.getBoundingClientRect();n.top=w.top-O.top,n.height=Math.max(T.bottom-w.top,0),n.visible=!0}function p(){if(e.value.length===0){l.clear(),g();return}const u=new Set,f=0,b=window.innerHeight,z=1,O=e.value.flatMap(w=>{const T=document.getElementById(w.slug);return T?[{slug:w.slug,top:T.getBoundingClientRect().top}]:[]});for(let w=0;w<O.length;w++){const T=O[w],A=O[w+1],K=T.top;(A?A.top:Number.POSITIVE_INFINITY)>f+z&&K<b&&u.add(T.slug)}l.clear(),u.forEach(w=>l.add(w)),g()}let R=!1;function x(){R||(R=!0,requestAnimationFrame(()=>{p(),R=!1}))}function y(u){return l.has(u)}function C(u){const f=document.getElementById(u);f&&(f.scrollIntoView({behavior:"smooth",block:"start"}),history.pushState(null,"",`#${u}`),x())}return fe(()=>{qe(()=>{p()}),document.addEventListener("scroll",x,{capture:!0,passive:!0}),window.addEventListener("resize",x)}),Qe(()=>{document.removeEventListener("scroll",x,!0),window.removeEventListener("resize",x),i.clear()}),(u,f)=>(E(),D("div",{ref_key:"anchorContainerRef",ref:a,class:"anchor-container"},[H("span",{class:oe(["anchor-highlight-layer",n.visible?"bg-foreground-light dark:bg-foreground-dark":""]),style:ee(r.value)},null,6),(E(!0),D(be,null,Xe(e.value,b=>(E(),D("div",{key:b.slug,onClick:Je(z=>C(b.slug),["prevent"]),class:oe([[y(b.slug)?"color-link-hover":""],"anchor-item transition-colors ease-out duration-300 mt-2 pr-2"]),ref_for:!0,ref:z=>d(b.slug,z),style:ee({paddingLeft:`${b.level*1.5+.5}rem`})},[H("a",{href:`#${b.slug}`,class:"relative z-1 block whitespace-nowrap overflow-hidden text-ellipsis text-sm"},Q(b.title),9,Ro)],14,Bo))),128))],512))}}),To=no(Eo,[["__scopeId","data-v-9e470430"]]),Io={class:"py-6 px-6"},Po={class:"container max-w-7xl m-auto flex space-x-2"},Lo={class:"flex gap-2"},Oo={class:"sticky top-4 self-start hidden xl:block max-w-70"},No=L({__name:"default",setup(o){const{t}=he(),s=eo(),e=W(re.find(i=>i.routePath===s.path.substring(1)));Ze(()=>s.path,async i=>{e.value=re.find(n=>n.routePath===i.substring(1))});const l=m(()=>e.value?.attributes),a=`${ne.repoUrl}/commits/${ne.repoBranch}/${e.value?.repoPath}`;return fe(()=>{document.querySelectorAll("figure.code-block button.copy").forEach(n=>{n.addEventListener("click",()=>{if(n.parentNode&&n.parentNode.nextSibling){const r=n.parentNode.nextSibling.textContent;r&&(navigator.clipboard.writeText(r),n.classList.remove("copy"),n.classList.add("copied"),setTimeout(()=>{n.classList.remove("copied"),n.classList.add("copy")},1e3))}})})}),(i,n)=>{const c=to("RouterView");return E(),D(be,null,[k(B(_o),{"scroll-smooth":"",position:"absolute",class:"text-gray-700 dark:text-gray-200","native-scrollbar":!1},{default:I(()=>[k(B($o),{bordered:""},{default:I(()=>[k(ko)]),_:1}),H("section",Io,[H("div",Po,[k(B(ie),{embedded:"",class:"grow z-15"},{default:I(()=>[H("div",Lo,[l.value&&l.value.createdAt?(E(),M(B(po),{key:0,class:"block"},{default:I(()=>[ae(Q(B(t)("article.created_at"))+" ",1),k(ce,{time:l.value.createdAt},null,8,["time"])]),_:1})):U("",!0),l.value&&l.value.changedAt?(E(),D("a",{key:1,class:"text-sky-500 hover:text-green-500 hover:underline primary-clickable cursor-pointer",href:a,target:"_blank"},[ae(Q(B(t)("article.changed_at"))+" ",1),k(ce,{time:l.value.changedAt},null,8,["time"])])):U("",!0)]),k(c,null,{default:I(({Component:r})=>[(E(),M(oo(r)))]),_:1}),H("div",null,[k(so)])]),_:1}),H("aside",Oo,[k(B(ie),{embedded:"",class:"hoverable","content-style":"padding-left: 0.5rem;padding-right: 0.5rem;"},{default:I(()=>[e.value?(E(),M(To,{key:0,class:"text-left",headers:e.value.headers},null,8,["headers"])):U("",!0)]),_:1})])])])]),_:1}),k(ao)],64)}}});export{No as default};
