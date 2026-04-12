import{$ as e,E as t,F as n,G as r,I as i,M as a,P as o,R as s,U as c,Z as l,_ as u,at as d,bt as f,d as p,f as m,g as h,i as g,j as _,l as v,p as y,u as b,v as x,x as S,xt as C,yt as w,z as T}from"./runtime-core.esm-bundler-3FhRM3zt.js";import{$ as E,Ct as D,Dt as O,Et as k,J as A,Pt as j,Q as M,St as N,Tt as P,Y as F,a as ee,bt as I,d as L,dt as R,et as te,f as ne,gt as re,h as z,i as B,l as ie,m as ae,n as V,ot as oe,q as H,rt as se,s as U,st as ce,t as W,ut as G,v as le,vt as ue,yt as K}from"./meta-BhQzge0W.js";import{a as de}from"./vue-router-CGjm6TRi.js";import{r as fe}from"./logic-BChOnbEl.js";import{n as pe}from"./context-BNk7dgA4.js";import{t as me}from"./Time-CJuppaqS.js";import{a as q,i as he,n as ge,r as _e,t as ve}from"./SpotLight-CQh4QU86.js";var J=!1;function ye(){if(ce&&window.CSS&&!J&&(J=!0,`registerProperty`in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:`--n-color-start`,syntax:`<color>`,inherits:!1,initialValue:`#0000`}),CSS.registerProperty({name:`--n-color-end`,syntax:`<color>`,inherits:!1,initialValue:`#0000`})}catch{}}var Y=I(`card-content`,`
 flex: 1;
 min-width: 0;
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
`),be=K([I(`card`,`
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
 `,[ue({background:`var(--n-color-modal)`}),D(`hoverable`,[K(`&:hover`,`box-shadow: var(--n-box-shadow);`)]),D(`content-segmented`,[K(`>`,[I(`card-content`,`
 padding-top: var(--n-padding-bottom);
 `),N(`content-scrollbar`,[K(`>`,[I(`scrollbar-container`,[K(`>`,[I(`card-content`,`
 padding-top: var(--n-padding-bottom);
 `)])])])])])]),D(`content-soft-segmented`,[K(`>`,[I(`card-content`,`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `),N(`content-scrollbar`,[K(`>`,[I(`scrollbar-container`,[K(`>`,[I(`card-content`,`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])])])])])]),D(`footer-segmented`,[K(`>`,[N(`footer`,`
 padding-top: var(--n-padding-bottom);
 `)])]),D(`footer-soft-segmented`,[K(`>`,[N(`footer`,`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),K(`>`,[I(`card-header`,`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[N(`main`,`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),N(`extra`,`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),N(`close`,`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),N(`action`,`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),Y,I(`card-content`,[K(`&:first-child`,`
 padding-top: var(--n-padding-bottom);
 `)]),N(`content-scrollbar`,`
 display: flex;
 flex-direction: column;
 `,[K(`>`,[I(`scrollbar-container`,[K(`>`,[Y])])]),K(`&:first-child >`,[I(`scrollbar-container`,[K(`>`,[I(`card-content`,`
 padding-top: var(--n-padding-bottom);
 `)])])])]),N(`footer`,`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[K(`&:first-child`,`
 padding-top: var(--n-padding-bottom);
 `)]),N(`action`,`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),I(`card-cover`,`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[K(`img`,`
 display: block;
 width: 100%;
 `)]),D(`bordered`,`
 border: 1px solid var(--n-border-color);
 `,[K(`&:target`,`border-color: var(--n-color-target);`)]),D(`action-segmented`,[K(`>`,[N(`action`,[K(`&:not(:first-child)`,`
 border-top: 1px solid var(--n-border-color);
 `)])])]),D(`content-segmented, content-soft-segmented`,[K(`>`,[I(`card-content`,`
 transition: border-color 0.3s var(--n-bezier);
 `,[K(`&:not(:first-child)`,`
 border-top: 1px solid var(--n-border-color);
 `)]),N(`content-scrollbar`,`
 transition: border-color 0.3s var(--n-bezier);
 `,[K(`&:not(:first-child)`,`
 border-top: 1px solid var(--n-border-color);
 `)])])]),D(`footer-segmented, footer-soft-segmented`,[K(`>`,[N(`footer`,`
 transition: border-color 0.3s var(--n-bezier);
 `,[K(`&:not(:first-child)`,`
 border-top: 1px solid var(--n-border-color);
 `)])])]),D(`embedded`,`
 background-color: var(--n-color-embedded);
 `)]),k(I(`card`,`
 background: var(--n-color-modal);
 `,[D(`embedded`,`
 background-color: var(--n-color-embedded-modal);
 `)])),O(I(`card`,`
 background: var(--n-color-popover);
 `,[D(`embedded`,`
 background-color: var(--n-color-embedded-popover);
 `)]))]),X={title:[String,Function],contentClass:String,contentStyle:[Object,String],contentScrollable:Boolean,headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:String,bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:`div`},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function,closeFocusable:Boolean};E(X);var Z=x({name:`Card`,props:Object.assign(Object.assign({},z.props),X),slots:Object,setup(e){let t=()=>{let{onClose:t}=e;t&&te(t)},{inlineThemeDisabled:n,mergedClsPrefixRef:r,mergedRtlRef:i,mergedComponentPropsRef:a}=A(e),o=z(`Card`,`-card`,be,ee,e,r),s=le(`Card`,i,r),c=v(()=>e.size||a?.value?.Card?.size||`medium`),l=v(()=>{let e=c.value,{self:{color:t,colorModal:n,colorTarget:r,textColor:i,titleTextColor:a,titleFontWeight:s,borderColor:l,actionColor:u,borderRadius:d,lineHeight:f,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,closeColorHover:g,closeColorPressed:_,closeBorderRadius:v,closeIconSize:y,closeSize:b,boxShadow:x,colorPopover:S,colorEmbedded:C,colorEmbeddedModal:w,colorEmbeddedPopover:T,[P(`padding`,e)]:E,[P(`fontSize`,e)]:D,[P(`titleFontSize`,e)]:O},common:{cubicBezierEaseInOut:k}}=o.value,{top:A,left:j,bottom:M}=re(E);return{"--n-bezier":k,"--n-border-radius":d,"--n-color":t,"--n-color-modal":n,"--n-color-popover":S,"--n-color-embedded":C,"--n-color-embedded-modal":w,"--n-color-embedded-popover":T,"--n-color-target":r,"--n-text-color":i,"--n-line-height":f,"--n-action-color":u,"--n-title-text-color":a,"--n-title-font-weight":s,"--n-close-icon-color":p,"--n-close-icon-color-hover":m,"--n-close-icon-color-pressed":h,"--n-close-color-hover":g,"--n-close-color-pressed":_,"--n-border-color":l,"--n-box-shadow":x,"--n-padding-top":A,"--n-padding-bottom":M,"--n-padding-left":j,"--n-font-size":D,"--n-title-font-size":O,"--n-close-size":b,"--n-close-icon-size":y,"--n-close-border-radius":v}}),u=n?H(`card`,v(()=>c.value[0]),l,e):void 0;return{rtlEnabled:s,mergedClsPrefix:r,mergedTheme:o,handleCloseClick:t,cssVars:n?void 0:l,themeClass:u?.themeClass,onRender:u?.onRender}},render(){let{segmented:e,bordered:t,hoverable:n,mergedClsPrefix:r,rtlEnabled:i,onRender:a,embedded:o,tag:s,$slots:c}=this;return a?.(),S(s,{class:[`${r}-card`,this.themeClass,o&&`${r}-card--embedded`,{[`${r}-card--rtl`]:i,[`${r}-card--content-scrollable`]:this.contentScrollable,[`${r}-card--content${typeof e!=`boolean`&&e.content===`soft`?`-soft`:``}-segmented`]:e===!0||e!==!1&&e.content,[`${r}-card--footer${typeof e!=`boolean`&&e.footer===`soft`?`-soft`:``}-segmented`]:e===!0||e!==!1&&e.footer,[`${r}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${r}-card--bordered`]:t,[`${r}-card--hoverable`]:n}],style:this.cssVars,role:this.role},M(c.cover,e=>{let t=this.cover?F([this.cover()]):e;return t&&S(`div`,{class:`${r}-card-cover`,role:`none`},t)}),M(c.header,e=>{let{title:t}=this,n=t?F(typeof t==`function`?[t()]:[t]):e;return n||this.closable?S(`div`,{class:[`${r}-card-header`,this.headerClass],style:this.headerStyle,role:`heading`},S(`div`,{class:`${r}-card-header__main`,role:`heading`},n),M(c[`header-extra`],e=>{let t=this.headerExtra?F([this.headerExtra()]):e;return t&&S(`div`,{class:[`${r}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},t)}),this.closable&&S(ne,{clsPrefix:r,class:`${r}-card-header__close`,onClick:this.handleCloseClick,focusable:this.closeFocusable,absolute:!0})):null}),M(c.default,e=>{let{content:t}=this,n=t?F(typeof t==`function`?[t()]:[t]):e;return n?this.contentScrollable?S(U,{class:`${r}-card__content-scrollbar`,contentClass:[`${r}-card-content`,this.contentClass],contentStyle:this.contentStyle},n):S(`div`,{class:[`${r}-card-content`,this.contentClass],style:this.contentStyle,role:`none`},n):null}),M(c.footer,e=>{let t=this.footer?F([this.footer()]):e;return t&&S(`div`,{class:[`${r}-card__footer`,this.footerClass],style:this.footerStyle,role:`none`},t)}),M(c.action,e=>{let t=this.action?F([this.action()]):e;return t&&S(`div`,{class:`${r}-card__action`,role:`none`},t)}))}});function xe(e){let{primaryColor:t,successColor:n,warningColor:r,errorColor:i,infoColor:a,fontWeightStrong:o}=e;return{fontWeight:o,rotate:`252deg`,colorStartPrimary:G(t,{alpha:.6}),colorEndPrimary:t,colorStartInfo:G(a,{alpha:.6}),colorEndInfo:a,colorStartWarning:G(r,{alpha:.6}),colorEndWarning:r,colorStartError:G(i,{alpha:.6}),colorEndError:i,colorStartSuccess:G(n,{alpha:.6}),colorEndSuccess:n}}var Se={name:`GradientText`,common:L,self:xe};function Ce(e){let{baseColor:t,textColor2:n,bodyColor:r,cardColor:i,dividerColor:a,actionColor:o,scrollbarColor:s,scrollbarColorHover:c,invertedColor:l}=e;return{textColor:n,textColorInverted:`#FFF`,color:r,colorEmbedded:o,headerColor:i,headerColorInverted:l,footerColor:o,footerColorInverted:l,headerBorderColor:a,headerBorderColorInverted:l,footerBorderColor:a,footerBorderColorInverted:l,siderBorderColor:a,siderBorderColorInverted:l,siderColor:i,siderColorInverted:l,siderToggleButtonBorder:`1px solid ${a}`,siderToggleButtonColor:t,siderToggleButtonIconColor:n,siderToggleButtonIconColorInverted:n,siderToggleBarColor:R(r,s),siderToggleBarColorHover:R(r,c),__invertScrollbar:`true`}}var Q=ae({name:`Layout`,common:L,peers:{Scrollbar:ie},self:Ce}),we=I(`gradient-text`,`
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
`),Te=x({name:`GradientText`,props:Object.assign(Object.assign({},z.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:`primary`},color:[Object,String],gradient:[Object,String]}),setup(e){ye();let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=A(e),r=v(()=>{let{type:t}=e;return t===`danger`?`error`:t}),i=v(()=>{let t=e.size||e.fontSize;return t&&=se(t),t||void 0}),a=v(()=>{let t=e.color||e.gradient;if(typeof t==`string`)return t;if(t)return`linear-gradient(${t.deg||0}deg, ${t.from} 0%, ${t.to} 100%)`}),o=z(`GradientText`,`-gradient-text`,we,Se,e,t),s=v(()=>{let{value:e}=r,{common:{cubicBezierEaseInOut:t},self:{rotate:n,[P(`colorStart`,e)]:i,[P(`colorEnd`,e)]:a,fontWeight:s}}=o.value;return{"--n-bezier":t,"--n-rotate":n,"--n-color-start":i,"--n-color-end":a,"--n-font-weight":s}}),c=n?H(`gradient-text`,v(()=>r.value[0]),s,e):void 0;return{mergedClsPrefix:t,compatibleType:r,styleFontSize:i,styleBgImage:a,cssVars:n?void 0:s,themeClass:c?.themeClass,onRender:c?.onRender}},render(){let{mergedClsPrefix:e,onRender:t}=this;return t?.(),S(`span`,{class:[`${e}-gradient-text`,`${e}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}}),Ee=I(`layout`,`
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
`,[I(`layout-scroll-container`,`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),D(`absolute-positioned`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),De={embedded:Boolean,position:B,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:``},hasSider:Boolean,siderPlacement:{type:String,default:`left`}},Oe=pe(`n-layout`);function ke(t){return x({name:t?`LayoutContent`:`Layout`,props:Object.assign(Object.assign({},z.props),De),setup(t){let r=e(null),i=e(null),{mergedClsPrefixRef:a,inlineThemeDisabled:o}=A(t),s=z(`Layout`,`-layout`,Ee,Q,t,a);function c(e,n){if(t.nativeScrollbar){let{value:t}=r;t&&(n===void 0?t.scrollTo(e):t.scrollTo(e,n))}else{let{value:t}=i;t&&t.scrollTo(e,n)}}n(Oe,t);let l=0,u=0,d=e=>{var n;let r=e.target;l=r.scrollLeft,u=r.scrollTop,(n=t.onScroll)==null||n.call(t,e)};oe(()=>{if(t.nativeScrollbar){let e=r.value;e&&(e.scrollTop=u,e.scrollLeft=l)}});let f={display:`flex`,flexWrap:`nowrap`,width:`100%`,flexDirection:`row`},p={scrollTo:c},m=v(()=>{let{common:{cubicBezierEaseInOut:e},self:n}=s.value;return{"--n-bezier":e,"--n-color":t.embedded?n.colorEmbedded:n.color,"--n-text-color":n.textColor}}),h=o?H(`layout`,v(()=>t.embedded?`e`:``),m,t):void 0;return Object.assign({mergedClsPrefix:a,scrollableElRef:r,scrollbarInstRef:i,hasSiderStyle:f,mergedTheme:s,handleNativeElScroll:d,cssVars:o?void 0:m,themeClass:h?.themeClass,onRender:h?.onRender},p)},render(){var e;let{mergedClsPrefix:n,hasSider:r}=this;(e=this.onRender)==null||e.call(this);let i=r?this.hasSiderStyle:void 0;return S(`div`,{class:[this.themeClass,t&&`${n}-layout-content`,`${n}-layout`,`${n}-layout--${this.position}-positioned`],style:this.cssVars},this.nativeScrollbar?S(`div`,{ref:`scrollableElRef`,class:[`${n}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,i],onScroll:this.handleNativeElScroll},this.$slots):S(U,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:`scrollbarInstRef`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,i]}),this.$slots))}})}var Ae=ke(!1),je=I(`layout-header`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[D(`absolute-positioned`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),D(`bordered`,`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Me={position:B,inverted:Boolean,bordered:{type:Boolean,default:!1}},Ne=x({name:`LayoutHeader`,props:Object.assign(Object.assign({},z.props),Me),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=A(e),r=z(`Layout`,`-layout-header`,je,Q,e,t),i=v(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=r.value,i={"--n-bezier":t};return e.inverted?(i[`--n-color`]=n.headerColorInverted,i[`--n-text-color`]=n.textColorInverted,i[`--n-border-color`]=n.headerBorderColorInverted):(i[`--n-color`]=n.headerColor,i[`--n-text-color`]=n.textColor,i[`--n-border-color`]=n.headerBorderColor),i}),a=n?H(`layout-header`,v(()=>e.inverted?`a`:`b`),i,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:i,themeClass:a?.themeClass,onRender:a?.onRender}},render(){var e;let{mergedClsPrefix:t}=this;return(e=this.onRender)==null||e.call(this),S(`div`,{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Pe=x({__name:`MyHeader`,setup(e){return(e,t)=>(o(),p(he,{class:`gap-2 h-12`},{default:r(()=>[u(q,{to:`/`,title:`首页`,icon:`icon-[carbon--home]`,class:`text-3xl`}),u(q,{class:`text-3xl`,icon:`icon-[carbon--moon] dark:icon-[carbon--sun]`,title:`切换到深色模式`,onClick:t[0]||=()=>d(fe)()})]),_:1}))}}),$=x({__name:`QTime`,props:{time:{}},setup(e){let t=e,n=v(()=>new Date(t.time)),r=new Date,i=v(()=>{let e=(r.getFullYear()-n.value.getFullYear())*12+r.getMonth()-n.value.getMonth();return e>0&&e<4?`relative`:`date`});return(t,r)=>(o(),p(d(me),{time:n.value,type:i.value,title:e.time},null,8,[`time`,`type`,`title`]))}}),Fe=[`onClick`],Ie=[`href`],Le=ge(x({__name:`DAnchor`,props:{headers:{}},setup(n){let r=n;function s(e,t=0){let n=[];for(let r of e)n.push({level:t,slug:r.slug,title:r.title}),r.children&&n.push(...s(r.children,t+1));return n}let c=v(()=>s(r.headers)),u=l(new Set),d=e(null),p=new Map,m=l({top:0,height:0,visible:!1}),h=v(()=>{let e=c.value.filter(e=>u.has(e.slug));return{first:e[0]?.slug,last:e[e.length-1]?.slug}}),x=v(()=>({transform:`translateY(${m.top}px)`,height:`${m.height}px`,opacity:m.visible?`1`:`0`}));function S(e,t){let n=t instanceof Element?t:t&&`$el`in t&&t.$el instanceof Element?t.$el:null;n instanceof HTMLElement?p.set(e,n):p.delete(e)}function T(){let e=h.value.first,t=h.value.last;if(!e||!t||!d.value){m.visible=!1,m.height=0;return}let n=p.get(e),r=p.get(t);if(!n||!r){m.visible=!1,m.height=0;return}let i=d.value.getBoundingClientRect(),a=n.getBoundingClientRect(),o=r.getBoundingClientRect();m.top=a.top-i.top,m.height=Math.max(o.bottom-a.top,0),m.visible=!0}function E(){if(c.value.length===0){u.clear(),T();return}let e=new Set,t=window.innerHeight,n=c.value.flatMap(e=>{let t=document.getElementById(e.slug);return t?[{slug:e.slug,top:t.getBoundingClientRect().top}]:[]});for(let r=0;r<n.length;r++){let i=n[r],a=n[r+1],o=i.top;(a?a.top:1/0)>1&&o<t&&e.add(i.slug)}u.clear(),e.forEach(e=>u.add(e)),T()}let D=!1;function O(){D||(D=!0,requestAnimationFrame(()=>{E(),D=!1}))}function k(e){return u.has(e)}function A(e){let t=document.getElementById(e);t&&(t.scrollIntoView({behavior:`smooth`,block:`start`}),history.pushState(null,``,`#${e}`),O())}return _(()=>{t(()=>{E()}),document.addEventListener(`scroll`,O,{capture:!0,passive:!0}),window.addEventListener(`resize`,O)}),a(()=>{document.removeEventListener(`scroll`,O,!0),window.removeEventListener(`resize`,O),p.clear()}),(e,t)=>(o(),y(`div`,{ref_key:`anchorContainerRef`,ref:d,class:`anchor-container`},[b(`span`,{class:w([`anchor-highlight-layer`,m.visible?`bg-foreground-light dark:bg-foreground-dark`:``]),style:f(x.value)},null,6),(o(!0),y(g,null,i(c.value,e=>(o(),y(`div`,{key:e.slug,onClick:j(t=>A(e.slug),[`prevent`]),class:w([[k(e.slug)?`color-link-hover`:``],`anchor-item transition-colors ease-out duration-300 mt-2 pr-2`]),ref_for:!0,ref:t=>S(e.slug,t),style:f({paddingLeft:`${e.level*1.5+.5}rem`})},[b(`a`,{href:`#${e.slug}`,class:`relative z-1 block whitespace-nowrap overflow-hidden text-ellipsis text-sm`},C(e.title),9,Ie)],14,Fe))),128))],512))}}),[[`__scopeId`,`data-v-9e470430`]]),Re={class:`py-6 px-6`},ze={class:`container max-w-7xl m-auto flex space-x-2`},Be={class:`flex gap-2`},Ve={class:`sticky top-4 self-start hidden xl:block max-w-70`},He=x({__name:`default`,setup(t){let n=de(),i=e(V.find(e=>e.routePath===n.path.substring(1)));c(()=>n.path,async e=>{i.value=V.find(t=>t.routePath===e.substring(1))});let a=v(()=>i.value?.attributes),l=`${W.repoUrl}/commits/${W.repoBranch}/${i.value?.repoPath}`;return _(()=>{document.querySelectorAll(`figure.code-block button.copy`).forEach(e=>{e.addEventListener(`click`,()=>{if(e.parentNode&&e.parentNode.nextSibling){let t=e.parentNode.nextSibling.textContent;t&&(navigator.clipboard.writeText(t),e.classList.remove(`copy`),e.classList.add(`copied`),setTimeout(()=>{e.classList.remove(`copied`),e.classList.add(`copy`)},1e3))}})})}),(e,t)=>{let n=s(`RouterView`);return o(),y(g,null,[u(d(Ae),{"scroll-smooth":``,position:`absolute`,class:`text-gray-700 dark:text-gray-200`,"native-scrollbar":!1},{default:r(()=>[u(d(Ne),{bordered:``},{default:r(()=>[u(Pe)]),_:1}),b(`section`,Re,[b(`div`,ze,[u(d(Z),{embedded:``,class:`grow z-15`},{default:r(()=>[b(`div`,Be,[a.value&&a.value.createdAt?(o(),p(d(Te),{key:0,class:`block`},{default:r(()=>[t[0]||=h(` 创建于 `,-1),u($,{time:a.value.createdAt},null,8,[`time`])]),_:1})):m(``,!0),a.value&&a.value.changedAt?(o(),y(`a`,{key:1,class:`text-sky-500 hover:text-green-500 hover:underline primary-clickable cursor-pointer`,href:l,target:`_blank`},[t[1]||=h(` 最后修改于 `,-1),u($,{time:a.value.changedAt},null,8,[`time`])])):m(``,!0)]),u(n,null,{default:r(({Component:e})=>[(o(),p(T(e)))]),_:1}),b(`div`,null,[u(_e)])]),_:1}),b(`aside`,Ve,[u(d(Z),{embedded:``,class:`hoverable`,"content-style":`padding-left: 0.5rem;padding-right: 0.5rem;`},{default:r(()=>[i.value?(o(),p(Le,{key:0,class:`text-left`,headers:i.value.headers},null,8,[`headers`])):m(``,!0)]),_:1})])])])]),_:1}),u(ve)],64)}}});export{He as default};