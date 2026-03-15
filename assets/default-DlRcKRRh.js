import{i as Te,g as h,h as v,j as Ie,k as z,l as $,m as Pe,n as Le,d as P,p as w,q as V,s as W,v as I,w as Oe,x as Y,y as m,z as F,S as ce,N as He,A as Ve,B as Fe,C as M,D as je,E as de,F as N,G as Ne,H as Me,I as J,J as De,K as Ae,L as ue,M as A,O as We,P as Ye,u as ge,Q as Ge,o as T,c as j,b as k,e as B,R as Ke,T as Ue,U as L,V as D,W as he,X as qe,Y as Qe,a as O,Z,_ as ee,$ as fe,a0 as Xe,a1 as oe,a2 as Je,t as q,a3 as te,a4 as Ze,a5 as re,a6 as eo,a7 as ne,a8 as K,a9 as oo,r as to}from"./main-CSRDHJgv.js";import{_ as U,a as ro,S as no,b as ao}from"./SpotLight-BJdExmJb.js";import{N as so}from"./Time-Ca87BM7y.js";let ae=!1;function lo(){if(Te&&window.CSS&&!ae&&(ae=!0,"registerProperty"in window?.CSS))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const se=v("card-content",`
 flex: 1;
 min-width: 0;
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
`),io=h([v("card",`
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
 `,[Ie({background:"var(--n-color-modal)"}),z("hoverable",[h("&:hover","box-shadow: var(--n-box-shadow);")]),z("content-segmented",[h(">",[v("card-content",`
 padding-top: var(--n-padding-bottom);
 `),$("content-scrollbar",[h(">",[v("scrollbar-container",[h(">",[v("card-content",`
 padding-top: var(--n-padding-bottom);
 `)])])])])])]),z("content-soft-segmented",[h(">",[v("card-content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `),$("content-scrollbar",[h(">",[v("scrollbar-container",[h(">",[v("card-content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])])])])])]),z("footer-segmented",[h(">",[$("footer",`
 padding-top: var(--n-padding-bottom);
 `)])]),z("footer-soft-segmented",[h(">",[$("footer",`
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
 `),se,v("card-content",[h("&:first-child",`
 padding-top: var(--n-padding-bottom);
 `)]),$("content-scrollbar",`
 display: flex;
 flex-direction: column;
 `,[h(">",[v("scrollbar-container",[h(">",[se])])]),h("&:first-child >",[v("scrollbar-container",[h(">",[v("card-content",`
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
 `)]),z("bordered",`
 border: 1px solid var(--n-border-color);
 `,[h("&:target","border-color: var(--n-color-target);")]),z("action-segmented",[h(">",[$("action",[h("&:not(:first-child)",`
 border-top: 1px solid var(--n-border-color);
 `)])])]),z("content-segmented, content-soft-segmented",[h(">",[v("card-content",`
 transition: border-color 0.3s var(--n-bezier);
 `,[h("&:not(:first-child)",`
 border-top: 1px solid var(--n-border-color);
 `)]),$("content-scrollbar",`
 transition: border-color 0.3s var(--n-bezier);
 `,[h("&:not(:first-child)",`
 border-top: 1px solid var(--n-border-color);
 `)])])]),z("footer-segmented, footer-soft-segmented",[h(">",[$("footer",`
 transition: border-color 0.3s var(--n-bezier);
 `,[h("&:not(:first-child)",`
 border-top: 1px solid var(--n-border-color);
 `)])])]),z("embedded",`
 background-color: var(--n-color-embedded);
 `)]),Pe(v("card",`
 background: var(--n-color-modal);
 `,[z("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Le(v("card",`
 background: var(--n-color-popover);
 `,[z("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),co={title:[String,Function],contentClass:String,contentStyle:[Object,String],contentScrollable:Boolean,headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:String,bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function,closeFocusable:Boolean},uo=Object.assign(Object.assign({},I.props),co),le=P({name:"Card",props:uo,slots:Object,setup(o){const t=()=>{const{onClose:g}=o;g&&Ve(g)},{inlineThemeDisabled:s,mergedClsPrefixRef:e,mergedRtlRef:l,mergedComponentPropsRef:a}=W(o),i=I("Card","-card",io,Fe,o,e),n=Oe("Card",l,e),c=m(()=>{var g,p;return o.size||((p=(g=a?.value)===null||g===void 0?void 0:g.Card)===null||p===void 0?void 0:p.size)||"medium"}),r=m(()=>{const g=c.value,{self:{color:p,colorModal:R,colorTarget:x,textColor:y,titleTextColor:S,titleFontWeight:u,borderColor:f,actionColor:b,borderRadius:C,lineHeight:_,closeIconColor:E,closeIconColorHover:H,closeIconColorPressed:G,closeColorHover:Q,closeColorPressed:X,closeBorderRadius:ve,closeIconSize:me,closeSize:pe,boxShadow:xe,colorPopover:ye,colorEmbedded:Ce,colorEmbeddedModal:Se,colorEmbeddedPopover:_e,[M("padding",g)]:ze,[M("fontSize",g)]:we,[M("titleFontSize",g)]:$e},common:{cubicBezierEaseInOut:ke}}=i.value,{top:Be,left:Re,bottom:Ee}=je(ze);return{"--n-bezier":ke,"--n-border-radius":C,"--n-color":p,"--n-color-modal":R,"--n-color-popover":ye,"--n-color-embedded":Ce,"--n-color-embedded-modal":Se,"--n-color-embedded-popover":_e,"--n-color-target":x,"--n-text-color":y,"--n-line-height":_,"--n-action-color":b,"--n-title-text-color":S,"--n-title-font-weight":u,"--n-close-icon-color":E,"--n-close-icon-color-hover":H,"--n-close-icon-color-pressed":G,"--n-close-color-hover":Q,"--n-close-color-pressed":X,"--n-border-color":f,"--n-box-shadow":xe,"--n-padding-top":Be,"--n-padding-bottom":Ee,"--n-padding-left":Re,"--n-font-size":we,"--n-title-font-size":$e,"--n-close-size":pe,"--n-close-icon-size":me,"--n-close-border-radius":ve}}),d=s?Y("card",m(()=>c.value[0]),r,o):void 0;return{rtlEnabled:n,mergedClsPrefix:e,mergedTheme:i,handleCloseClick:t,cssVars:s?void 0:r,themeClass:d?.themeClass,onRender:d?.onRender}},render(){const{segmented:o,bordered:t,hoverable:s,mergedClsPrefix:e,rtlEnabled:l,onRender:a,embedded:i,tag:n,$slots:c}=this;return a?.(),w(n,{class:[`${e}-card`,this.themeClass,i&&`${e}-card--embedded`,{[`${e}-card--rtl`]:l,[`${e}-card--content-scrollable`]:this.contentScrollable,[`${e}-card--content${typeof o!="boolean"&&o.content==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.content,[`${e}-card--footer${typeof o!="boolean"&&o.footer==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.footer,[`${e}-card--action-segmented`]:o===!0||o!==!1&&o.action,[`${e}-card--bordered`]:t,[`${e}-card--hoverable`]:s}],style:this.cssVars,role:this.role},V(c.cover,r=>{const d=this.cover?F([this.cover()]):r;return d&&w("div",{class:`${e}-card-cover`,role:"none"},d)}),V(c.header,r=>{const{title:d}=this,g=d?F(typeof d=="function"?[d()]:[d]):r;return g||this.closable?w("div",{class:[`${e}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},w("div",{class:`${e}-card-header__main`,role:"heading"},g),V(c["header-extra"],p=>{const R=this.headerExtra?F([this.headerExtra()]):p;return R&&w("div",{class:[`${e}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},R)}),this.closable&&w(He,{clsPrefix:e,class:`${e}-card-header__close`,onClick:this.handleCloseClick,focusable:this.closeFocusable,absolute:!0})):null}),V(c.default,r=>{const{content:d}=this,g=d?F(typeof d=="function"?[d()]:[d]):r;return g?this.contentScrollable?w(ce,{class:`${e}-card__content-scrollbar`,contentClass:[`${e}-card-content`,this.contentClass],contentStyle:this.contentStyle},g):w("div",{class:[`${e}-card-content`,this.contentClass],style:this.contentStyle,role:"none"},g):null}),V(c.footer,r=>{const d=this.footer?F([this.footer()]):r;return d&&w("div",{class:[`${e}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},d)}),V(c.action,r=>{const d=this.action?F([this.action()]):r;return d&&w("div",{class:`${e}-card__action`,role:"none"},d)}))}});function go(o){const{primaryColor:t,successColor:s,warningColor:e,errorColor:l,infoColor:a,fontWeightStrong:i}=o;return{fontWeight:i,rotate:"252deg",colorStartPrimary:N(t,{alpha:.6}),colorEndPrimary:t,colorStartInfo:N(a,{alpha:.6}),colorEndInfo:a,colorStartWarning:N(e,{alpha:.6}),colorEndWarning:e,colorStartError:N(l,{alpha:.6}),colorEndError:l,colorStartSuccess:N(s,{alpha:.6}),colorEndSuccess:s}}const ho={common:de,self:go};function fo(o){const{baseColor:t,textColor2:s,bodyColor:e,cardColor:l,dividerColor:a,actionColor:i,scrollbarColor:n,scrollbarColorHover:c,invertedColor:r}=o;return{textColor:s,textColorInverted:"#FFF",color:e,colorEmbedded:i,headerColor:l,headerColorInverted:r,footerColor:i,footerColorInverted:r,headerBorderColor:a,headerBorderColorInverted:r,footerBorderColor:a,footerBorderColorInverted:r,siderBorderColor:a,siderBorderColorInverted:r,siderColor:l,siderColorInverted:r,siderToggleButtonBorder:`1px solid ${a}`,siderToggleButtonColor:t,siderToggleButtonIconColor:s,siderToggleButtonIconColorInverted:s,siderToggleBarColor:J(e,n),siderToggleBarColorHover:J(e,c),__invertScrollbar:"true"}}const be=Ne({name:"Layout",common:de,peers:{Scrollbar:Me},self:fo}),bo=v("gradient-text",`
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
`),vo=Object.assign(Object.assign({},I.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),mo=P({name:"GradientText",props:vo,setup(o){lo();const{mergedClsPrefixRef:t,inlineThemeDisabled:s}=W(o),e=m(()=>{const{type:r}=o;return r==="danger"?"error":r}),l=m(()=>{let r=o.size||o.fontSize;return r&&(r=De(r)),r||void 0}),a=m(()=>{const r=o.color||o.gradient;if(typeof r=="string")return r;if(r){const d=r.deg||0,g=r.from,p=r.to;return`linear-gradient(${d}deg, ${g} 0%, ${p} 100%)`}}),i=I("GradientText","-gradient-text",bo,ho,o,t),n=m(()=>{const{value:r}=e,{common:{cubicBezierEaseInOut:d},self:{rotate:g,[M("colorStart",r)]:p,[M("colorEnd",r)]:R,fontWeight:x}}=i.value;return{"--n-bezier":d,"--n-rotate":g,"--n-color-start":p,"--n-color-end":R,"--n-font-weight":x}}),c=s?Y("gradient-text",m(()=>e.value[0]),n,o):void 0;return{mergedClsPrefix:t,compatibleType:e,styleFontSize:l,styleBgImage:a,cssVars:s?void 0:n,themeClass:c?.themeClass,onRender:c?.onRender}},render(){const{mergedClsPrefix:o,onRender:t}=this;return t?.(),w("span",{class:[`${o}-gradient-text`,`${o}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}}),po=v("layout",`
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
 `),z("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),xo={embedded:Boolean,position:ue,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},yo=Ye("n-layout");function Co(o){return P({name:"Layout",props:Object.assign(Object.assign({},I.props),xo),setup(t){const s=A(null),e=A(null),{mergedClsPrefixRef:l,inlineThemeDisabled:a}=W(t),i=I("Layout","-layout",po,be,t,l);function n(y,S){if(t.nativeScrollbar){const{value:u}=s;u&&(S===void 0?u.scrollTo(y):u.scrollTo(y,S))}else{const{value:u}=e;u&&u.scrollTo(y,S)}}We(yo,t);let c=0,r=0;const d=y=>{var S;const u=y.target;c=u.scrollLeft,r=u.scrollTop,(S=t.onScroll)===null||S===void 0||S.call(t,y)};Ae(()=>{if(t.nativeScrollbar){const y=s.value;y&&(y.scrollTop=r,y.scrollLeft=c)}});const g={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},p={scrollTo:n},R=m(()=>{const{common:{cubicBezierEaseInOut:y},self:S}=i.value;return{"--n-bezier":y,"--n-color":t.embedded?S.colorEmbedded:S.color,"--n-text-color":S.textColor}}),x=a?Y("layout",m(()=>t.embedded?"e":""),R,t):void 0;return Object.assign({mergedClsPrefix:l,scrollableElRef:s,scrollbarInstRef:e,hasSiderStyle:g,mergedTheme:i,handleNativeElScroll:d,cssVars:a?void 0:R,themeClass:x?.themeClass,onRender:x?.onRender},p)},render(){var t;const{mergedClsPrefix:s,hasSider:e}=this;(t=this.onRender)===null||t===void 0||t.call(this);const l=e?this.hasSiderStyle:void 0,a=[this.themeClass,o,`${s}-layout`,`${s}-layout--${this.position}-positioned`];return w("div",{class:a,style:this.cssVars},this.nativeScrollbar?w("div",{ref:"scrollableElRef",class:[`${s}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,l],onScroll:this.handleNativeElScroll},this.$slots):w(ce,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,l]}),this.$slots))}})}const So=Co(!1),_o=v("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[z("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),z("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),zo={position:ue,inverted:Boolean,bordered:{type:Boolean,default:!1}},wo=P({name:"LayoutHeader",props:Object.assign(Object.assign({},I.props),zo),setup(o){const{mergedClsPrefixRef:t,inlineThemeDisabled:s}=W(o),e=I("Layout","-layout-header",_o,be,o,t),l=m(()=>{const{common:{cubicBezierEaseInOut:i},self:n}=e.value,c={"--n-bezier":i};return o.inverted?(c["--n-color"]=n.headerColorInverted,c["--n-text-color"]=n.textColorInverted,c["--n-border-color"]=n.headerBorderColorInverted):(c["--n-color"]=n.headerColor,c["--n-text-color"]=n.textColor,c["--n-border-color"]=n.headerBorderColor),c}),a=s?Y("layout-header",m(()=>o.inverted?"a":"b"),l,o):void 0;return{mergedClsPrefix:t,cssVars:s?void 0:l,themeClass:a?.themeClass,onRender:a?.onRender}},render(){var o;const{mergedClsPrefix:t}=this;return(o=this.onRender)===null||o===void 0||o.call(this),w("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),$o={class:"flex justify-center items-center space-x-2 h-12"},ko=P({__name:"MyHeader",setup(o){const{t,locale:s}=ge(),e=Ge();function l(a){s.value=a}return(a,i)=>(T(),j("div",$o,[k(U,{to:"/",title:B(t)("button.home"),icon:"icon-[carbon--home]",class:"text-3xl"},null,8,["title"]),k(U,{class:"text-3xl",icon:"icon-[carbon--moon] dark:icon-[carbon--sun]",title:B(t)("button.toggle_dark"),onClick:i[0]||(i[0]=()=>B(Ke)())},null,8,["title"]),k(B(Ue),{trigger:"click",options:B(e),onSelect:l},{default:L(()=>[k(U,{icon:"icon-[carbon--ibm-watson-language-translator]",class:"text-3xl",title:B(t)("button.toggle_langs")},null,8,["title"])]),_:1},8,["options"])]))}}),ie=P({__name:"QTime",props:{time:{}},setup(o){const t=o,s=m(()=>new Date(t.time)),e=new Date,l=m(()=>{const i=(e.getFullYear()-s.value.getFullYear())*12+e.getMonth()-s.value.getMonth();return i>0&&i<4?"relative":"date"});return(a,i)=>(T(),D(B(so),{time:s.value,type:l.value,title:o.time},null,8,["time","type","title"]))}}),Bo=["onClick"],Ro=["href"],Eo=P({__name:"DAnchor",props:{headers:{}},setup(o){const t=o;function s(u,f=0){const b=[];for(const C of u)b.push({level:f,slug:C.slug,title:C.title}),C.children&&b.push(...s(C.children,f+1));return b}const e=m(()=>s(t.headers)),l=oe(new Set),a=A(null),i=new Map,n=oe({top:0,height:0,visible:!1}),c=m(()=>{const u=e.value.filter(f=>l.has(f.slug));return{first:u[0]?.slug,last:u[u.length-1]?.slug}}),r=m(()=>({transform:`translateY(${n.top}px)`,height:`${n.height}px`,opacity:n.visible?"1":"0"}));function d(u,f){const b=f instanceof Element?f:f&&"$el"in f&&f.$el instanceof Element?f.$el:null;b instanceof HTMLElement?i.set(u,b):i.delete(u)}function g(){const u=c.value.first,f=c.value.last;if(!u||!f||!a.value){n.visible=!1,n.height=0;return}const b=i.get(u),C=i.get(f);if(!b||!C){n.visible=!1,n.height=0;return}const _=a.value.getBoundingClientRect(),E=b.getBoundingClientRect(),H=C.getBoundingClientRect();n.top=E.top-_.top,n.height=Math.max(H.bottom-E.top,0),n.visible=!0}function p(){if(e.value.length===0){l.clear(),g();return}const u=new Set,f=0,b=window.innerHeight,C=e.value.map(_=>{const E=document.getElementById(_.slug);return E?{slug:_.slug,top:E.getBoundingClientRect().top}:null}).filter(_=>_!==null);for(let _=0;_<C.length;_++){const E=C[_],H=C[_+1],G=E.top;(H?H.top:Number.POSITIVE_INFINITY)>f&&G<b&&u.add(E.slug)}l.clear(),u.forEach(_=>l.add(_)),g()}let R=!1;function x(){R||(R=!0,requestAnimationFrame(()=>{p(),R=!1}))}function y(u){return l.has(u)}function S(u){const f=document.getElementById(u);f&&(f.scrollIntoView({behavior:"smooth",block:"start"}),history.pushState(null,"",`#${u}`),x())}return he(()=>{qe(()=>{p()}),document.addEventListener("scroll",x,{capture:!0,passive:!0}),window.addEventListener("resize",x)}),Qe(()=>{document.removeEventListener("scroll",x,!0),window.removeEventListener("resize",x),i.clear()}),(u,f)=>(T(),j("div",{ref_key:"anchorContainerRef",ref:a,class:"anchor-container"},[O("span",{class:ee(["anchor-highlight-layer",n.visible?"bg-foreground":""]),style:Z(r.value)},null,6),(T(!0),j(fe,null,Xe(e.value,b=>(T(),j("div",{key:b.slug,onClick:Je(C=>S(b.slug),["prevent"]),class:ee([[y(b.slug)?"color-link-hover":""],"anchor-item transition-colors ease-out duration-300 mt-2 pr-2"]),ref_for:!0,ref:C=>d(b.slug,C),style:Z({paddingLeft:`${b.level*1.5+.5}rem`})},[O("a",{href:`#${b.slug}`,class:"relative z-1 block whitespace-nowrap overflow-hidden text-ellipsis text-sm"},q(b.title),9,Ro)],14,Bo))),128))],512))}}),To=ro(Eo,[["__scopeId","data-v-38de3b7e"]]),Io={class:"py-6 px-6"},Po={class:"container max-w-7xl m-auto flex space-x-2"},Lo={class:"flex gap-2"},Oo={class:"sticky top-4 self-start hidden xl:block max-w-70"},jo=P({__name:"default",setup(o){const{t}=ge(),s=eo(),e=A(te.find(i=>i.routePath===s.path.substring(1)));Ze(()=>s.path,async i=>{e.value=te.find(n=>n.routePath===i.substring(1))});const l=m(()=>e.value?.attributes),a=`${re.repoUrl}/commits/${re.repoBranch}/${e.value?.repoPath}`;return he(()=>{document.querySelectorAll("figure.code-block button.copy").forEach(n=>{n.addEventListener("click",()=>{if(n.parentNode&&n.parentNode.nextSibling){const r=n.parentNode.nextSibling.textContent;r&&(navigator.clipboard.writeText(r),n.classList.remove("copy"),n.classList.add("copied"),setTimeout(()=>{n.classList.remove("copied"),n.classList.add("copy")},1e3))}})})}),(i,n)=>{const c=to("RouterView");return T(),j(fe,null,[k(B(So),{"scroll-smooth":"",position:"absolute",class:"text-gray-700 dark:text-gray-200","native-scrollbar":!1},{default:L(()=>[k(B(wo),{bordered:""},{default:L(()=>[k(ko)]),_:1}),O("section",Io,[O("div",Po,[k(B(le),{embedded:"",class:"grow z-15"},{default:L(()=>[O("div",Lo,[l.value&&l.value.createdAt?(T(),D(B(mo),{key:0,class:"block"},{default:L(()=>[ne(q(B(t)("article.created_at"))+" ",1),k(ie,{time:l.value.createdAt},null,8,["time"])]),_:1})):K("",!0),l.value&&l.value.changedAt?(T(),j("a",{key:1,class:"text-sky-500 hover:text-green-500 hover:underline primary-clickable cursor-pointer",href:a,target:"_blank"},[ne(q(B(t)("article.changed_at"))+" ",1),k(ie,{time:l.value.changedAt},null,8,["time"])])):K("",!0)]),k(c,null,{default:L(({Component:r})=>[(T(),D(oo(r)))]),_:1}),O("div",null,[k(ao)])]),_:1}),O("aside",Oo,[k(B(le),{embedded:"",class:"hoverable","content-style":"padding-left: 0.5rem;padding-right: 0.5rem;"},{default:L(()=>[e.value?(T(),D(To,{key:0,class:"text-left",headers:e.value.headers},null,8,["headers"])):K("",!0)]),_:1})])])])]),_:1}),k(no)],64)}}});export{jo as default};
