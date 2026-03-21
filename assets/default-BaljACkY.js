import{B as e,D as t,F as n,H as r,I as i,M as a,N as o,P as s,R as c,S as l,Y as u,Z as d,at as f,b as p,c as m,f as h,g,h as _,it as v,m as y,nt as b,o as x,p as S,rt as C,v as w,y as T,z as E}from"./vue.runtime.esm-bundler-B-Vk_T7K.js";import{a as D,c as O}from"./vue-router-1QDGktKw.js";import{C as k,r as A}from"./logic-Bshcwkq8.js";import{D as j,I as M,M as N,O as P,Q as F,W as ee,Z as I,_ as L,at as R,b as te,ct as z,dt as ne,f as B,ft as re,g as ie,h as V,it as ae,k as H,n as oe,ot as U,p as se,r as ce,rt as le,st as W,ut as G,z as ue}from"./locale-CtZKBI86.js";import{a as de,d as fe,i as K,n as q,s as pe,t as J,u as me}from"./meta-DUXYh5wY.js";import{t as he}from"./Time-CfN_Qw9R.js";import{a as Y,i as ge,n as _e,r as ve,t as ye}from"./SpotLight-B35gTzUl.js";var X=!1;function be(){if(fe&&window.CSS&&!X&&(X=!0,`registerProperty`in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:`--n-color-start`,syntax:`<color>`,inherits:!1,initialValue:`#0000`}),CSS.registerProperty({name:`--n-color-end`,syntax:`<color>`,inherits:!1,initialValue:`#0000`})}catch{}}var Z=U(`card-content`,`
 flex: 1;
 min-width: 0;
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
`),xe=R([U(`card`,`
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
 `,[ae({background:`var(--n-color-modal)`}),z(`hoverable`,[R(`&:hover`,`box-shadow: var(--n-box-shadow);`)]),z(`content-segmented`,[R(`>`,[U(`card-content`,`
 padding-top: var(--n-padding-bottom);
 `),W(`content-scrollbar`,[R(`>`,[U(`scrollbar-container`,[R(`>`,[U(`card-content`,`
 padding-top: var(--n-padding-bottom);
 `)])])])])])]),z(`content-soft-segmented`,[R(`>`,[U(`card-content`,`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `),W(`content-scrollbar`,[R(`>`,[U(`scrollbar-container`,[R(`>`,[U(`card-content`,`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])])])])])]),z(`footer-segmented`,[R(`>`,[W(`footer`,`
 padding-top: var(--n-padding-bottom);
 `)])]),z(`footer-soft-segmented`,[R(`>`,[W(`footer`,`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),R(`>`,[U(`card-header`,`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[W(`main`,`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),W(`extra`,`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),W(`close`,`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),W(`action`,`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),Z,U(`card-content`,[R(`&:first-child`,`
 padding-top: var(--n-padding-bottom);
 `)]),W(`content-scrollbar`,`
 display: flex;
 flex-direction: column;
 `,[R(`>`,[U(`scrollbar-container`,[R(`>`,[Z])])]),R(`&:first-child >`,[U(`scrollbar-container`,[R(`>`,[U(`card-content`,`
 padding-top: var(--n-padding-bottom);
 `)])])])]),W(`footer`,`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[R(`&:first-child`,`
 padding-top: var(--n-padding-bottom);
 `)]),W(`action`,`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),U(`card-cover`,`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[R(`img`,`
 display: block;
 width: 100%;
 `)]),z(`bordered`,`
 border: 1px solid var(--n-border-color);
 `,[R(`&:target`,`border-color: var(--n-color-target);`)]),z(`action-segmented`,[R(`>`,[W(`action`,[R(`&:not(:first-child)`,`
 border-top: 1px solid var(--n-border-color);
 `)])])]),z(`content-segmented, content-soft-segmented`,[R(`>`,[U(`card-content`,`
 transition: border-color 0.3s var(--n-bezier);
 `,[R(`&:not(:first-child)`,`
 border-top: 1px solid var(--n-border-color);
 `)]),W(`content-scrollbar`,`
 transition: border-color 0.3s var(--n-bezier);
 `,[R(`&:not(:first-child)`,`
 border-top: 1px solid var(--n-border-color);
 `)])])]),z(`footer-segmented, footer-soft-segmented`,[R(`>`,[W(`footer`,`
 transition: border-color 0.3s var(--n-bezier);
 `,[R(`&:not(:first-child)`,`
 border-top: 1px solid var(--n-border-color);
 `)])])]),z(`embedded`,`
 background-color: var(--n-color-embedded);
 `)]),ne(U(`card`,`
 background: var(--n-color-modal);
 `,[z(`embedded`,`
 background-color: var(--n-color-embedded-modal);
 `)])),re(U(`card`,`
 background: var(--n-color-popover);
 `,[z(`embedded`,`
 background-color: var(--n-color-embedded-popover);
 `)]))]),Q={title:[String,Function],contentClass:String,contentStyle:[Object,String],contentScrollable:Boolean,headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:String,bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:`div`},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function,closeFocusable:Boolean};me(Q);var $=p({name:`Card`,props:Object.assign(Object.assign({},L.props),Q),slots:Object,setup(e){let t=()=>{let{onClose:t}=e;t&&M(t)},{inlineThemeDisabled:n,mergedClsPrefixRef:r,mergedRtlRef:i,mergedComponentPropsRef:a}=P(e),o=L(`Card`,`-card`,xe,de,e,r),s=te(`Card`,i,r),c=h(()=>e.size||a?.value?.Card?.size||`medium`),l=h(()=>{let e=c.value,{self:{color:t,colorModal:n,colorTarget:r,textColor:i,titleTextColor:a,titleFontWeight:s,borderColor:l,actionColor:u,borderRadius:d,lineHeight:f,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,closeColorHover:g,closeColorPressed:_,closeBorderRadius:v,closeIconSize:y,closeSize:b,boxShadow:x,colorPopover:S,colorEmbedded:C,colorEmbeddedModal:w,colorEmbeddedPopover:T,[G(`padding`,e)]:E,[G(`fontSize`,e)]:D,[G(`titleFontSize`,e)]:O},common:{cubicBezierEaseInOut:k}}=o.value,{top:A,left:j,bottom:M}=le(E);return{"--n-bezier":k,"--n-border-radius":d,"--n-color":t,"--n-color-modal":n,"--n-color-popover":S,"--n-color-embedded":C,"--n-color-embedded-modal":w,"--n-color-embedded-popover":T,"--n-color-target":r,"--n-text-color":i,"--n-line-height":f,"--n-action-color":u,"--n-title-text-color":a,"--n-title-font-weight":s,"--n-close-icon-color":p,"--n-close-icon-color-hover":m,"--n-close-icon-color-pressed":h,"--n-close-color-hover":g,"--n-close-color-pressed":_,"--n-border-color":l,"--n-box-shadow":x,"--n-padding-top":A,"--n-padding-bottom":M,"--n-padding-left":j,"--n-font-size":D,"--n-title-font-size":O,"--n-close-size":b,"--n-close-icon-size":y,"--n-close-border-radius":v}}),u=n?j(`card`,h(()=>c.value[0]),l,e):void 0;return{rtlEnabled:s,mergedClsPrefix:r,mergedTheme:o,handleCloseClick:t,cssVars:n?void 0:l,themeClass:u?.themeClass,onRender:u?.onRender}},render(){let{segmented:e,bordered:t,hoverable:n,mergedClsPrefix:r,rtlEnabled:i,onRender:a,embedded:o,tag:s,$slots:c}=this;return a?.(),l(s,{class:[`${r}-card`,this.themeClass,o&&`${r}-card--embedded`,{[`${r}-card--rtl`]:i,[`${r}-card--content-scrollable`]:this.contentScrollable,[`${r}-card--content${typeof e!=`boolean`&&e.content===`soft`?`-soft`:``}-segmented`]:e===!0||e!==!1&&e.content,[`${r}-card--footer${typeof e!=`boolean`&&e.footer===`soft`?`-soft`:``}-segmented`]:e===!0||e!==!1&&e.footer,[`${r}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${r}-card--bordered`]:t,[`${r}-card--hoverable`]:n}],style:this.cssVars,role:this.role},N(c.cover,e=>{let t=this.cover?H([this.cover()]):e;return t&&l(`div`,{class:`${r}-card-cover`,role:`none`},t)}),N(c.header,e=>{let{title:t}=this,n=t?H(typeof t==`function`?[t()]:[t]):e;return n||this.closable?l(`div`,{class:[`${r}-card-header`,this.headerClass],style:this.headerStyle,role:`heading`},l(`div`,{class:`${r}-card-header__main`,role:`heading`},n),N(c[`header-extra`],e=>{let t=this.headerExtra?H([this.headerExtra()]):e;return t&&l(`div`,{class:[`${r}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},t)}),this.closable&&l(pe,{clsPrefix:r,class:`${r}-card-header__close`,onClick:this.handleCloseClick,focusable:this.closeFocusable,absolute:!0})):null}),N(c.default,e=>{let{content:t}=this,n=t?H(typeof t==`function`?[t()]:[t]):e;return n?this.contentScrollable?l(B,{class:`${r}-card__content-scrollbar`,contentClass:[`${r}-card-content`,this.contentClass],contentStyle:this.contentStyle},n):l(`div`,{class:[`${r}-card-content`,this.contentClass],style:this.contentStyle,role:`none`},n):null}),N(c.footer,e=>{let t=this.footer?H([this.footer()]):e;return t&&l(`div`,{class:[`${r}-card__footer`,this.footerClass],style:this.footerStyle,role:`none`},t)}),N(c.action,e=>{let t=this.action?H([this.action()]):e;return t&&l(`div`,{class:`${r}-card__action`,role:`none`},t)}))}});function Se(e){let{primaryColor:t,successColor:n,warningColor:r,errorColor:i,infoColor:a,fontWeightStrong:o}=e;return{fontWeight:o,rotate:`252deg`,colorStartPrimary:I(t,{alpha:.6}),colorEndPrimary:t,colorStartInfo:I(a,{alpha:.6}),colorEndInfo:a,colorStartWarning:I(r,{alpha:.6}),colorEndWarning:r,colorStartError:I(i,{alpha:.6}),colorEndError:i,colorStartSuccess:I(n,{alpha:.6}),colorEndSuccess:n}}var Ce={name:`GradientText`,common:V,self:Se};function we(e){let{baseColor:t,textColor2:n,bodyColor:r,cardColor:i,dividerColor:a,actionColor:o,scrollbarColor:s,scrollbarColorHover:c,invertedColor:l}=e;return{textColor:n,textColorInverted:`#FFF`,color:r,colorEmbedded:o,headerColor:i,headerColorInverted:l,footerColor:o,footerColorInverted:l,headerBorderColor:a,headerBorderColorInverted:l,footerBorderColor:a,footerBorderColorInverted:l,siderBorderColor:a,siderBorderColorInverted:l,siderColor:i,siderColorInverted:l,siderToggleButtonBorder:`1px solid ${a}`,siderToggleButtonColor:t,siderToggleButtonIconColor:n,siderToggleButtonIconColorInverted:n,siderToggleBarColor:F(r,s),siderToggleBarColorHover:F(r,c),__invertScrollbar:`true`}}var Te=ie({name:`Layout`,common:V,peers:{Scrollbar:se},self:we}),Ee=U(`gradient-text`,`
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
`),De=p({name:`GradientText`,props:Object.assign(Object.assign({},L.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:`primary`},color:[Object,String],gradient:[Object,String]}),setup(e){be();let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=P(e),r=h(()=>{let{type:t}=e;return t===`danger`?`error`:t}),i=h(()=>{let t=e.size||e.fontSize;return t&&=ue(t),t||void 0}),a=h(()=>{let t=e.color||e.gradient;if(typeof t==`string`)return t;if(t)return`linear-gradient(${t.deg||0}deg, ${t.from} 0%, ${t.to} 100%)`}),o=L(`GradientText`,`-gradient-text`,Ee,Ce,e,t),s=h(()=>{let{value:e}=r,{common:{cubicBezierEaseInOut:t},self:{rotate:n,[G(`colorStart`,e)]:i,[G(`colorEnd`,e)]:a,fontWeight:s}}=o.value;return{"--n-bezier":t,"--n-rotate":n,"--n-color-start":i,"--n-color-end":a,"--n-font-weight":s}}),c=n?j(`gradient-text`,h(()=>r.value[0]),s,e):void 0;return{mergedClsPrefix:t,compatibleType:r,styleFontSize:i,styleBgImage:a,cssVars:n?void 0:s,themeClass:c?.themeClass,onRender:c?.onRender}},render(){let{mergedClsPrefix:e,onRender:t}=this;return t?.(),l(`span`,{class:[`${e}-gradient-text`,`${e}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}}),Oe=U(`layout`,`
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
`,[U(`layout-scroll-container`,`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),z(`absolute-positioned`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),ke={embedded:Boolean,position:K,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:``},hasSider:Boolean,siderPlacement:{type:String,default:`left`}},Ae=k(`n-layout`);function je(e){return p({name:e?`LayoutContent`:`Layout`,props:Object.assign(Object.assign({},L.props),ke),setup(e){let t=d(null),r=d(null),{mergedClsPrefixRef:i,inlineThemeDisabled:a}=P(e),o=L(`Layout`,`-layout`,Oe,Te,e,i);function s(n,i){if(e.nativeScrollbar){let{value:e}=t;e&&(i===void 0?e.scrollTo(n):e.scrollTo(n,i))}else{let{value:e}=r;e&&e.scrollTo(n,i)}}n(Ae,e);let c=0,l=0,u=t=>{var n;let r=t.target;c=r.scrollLeft,l=r.scrollTop,(n=e.onScroll)==null||n.call(e,t)};ee(()=>{if(e.nativeScrollbar){let e=t.value;e&&(e.scrollTop=l,e.scrollLeft=c)}});let f={display:`flex`,flexWrap:`nowrap`,width:`100%`,flexDirection:`row`},p={scrollTo:s},m=h(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=o.value;return{"--n-bezier":t,"--n-color":e.embedded?n.colorEmbedded:n.color,"--n-text-color":n.textColor}}),g=a?j(`layout`,h(()=>e.embedded?`e`:``),m,e):void 0;return Object.assign({mergedClsPrefix:i,scrollableElRef:t,scrollbarInstRef:r,hasSiderStyle:f,mergedTheme:o,handleNativeElScroll:u,cssVars:a?void 0:m,themeClass:g?.themeClass,onRender:g?.onRender},p)},render(){var t;let{mergedClsPrefix:n,hasSider:r}=this;(t=this.onRender)==null||t.call(this);let i=r?this.hasSiderStyle:void 0;return l(`div`,{class:[this.themeClass,e&&`${n}-layout-content`,`${n}-layout`,`${n}-layout--${this.position}-positioned`],style:this.cssVars},this.nativeScrollbar?l(`div`,{ref:`scrollableElRef`,class:[`${n}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,i],onScroll:this.handleNativeElScroll},this.$slots):l(B,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:`scrollbarInstRef`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,i]}),this.$slots))}})}var Me=je(!1),Ne=U(`layout-header`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[z(`absolute-positioned`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),z(`bordered`,`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Pe={position:K,inverted:Boolean,bordered:{type:Boolean,default:!1}},Fe=p({name:`LayoutHeader`,props:Object.assign(Object.assign({},L.props),Pe),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=P(e),r=L(`Layout`,`-layout-header`,Ne,Te,e,t),i=h(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=r.value,i={"--n-bezier":t};return e.inverted?(i[`--n-color`]=n.headerColorInverted,i[`--n-text-color`]=n.textColorInverted,i[`--n-border-color`]=n.headerBorderColorInverted):(i[`--n-color`]=n.headerColor,i[`--n-text-color`]=n.textColor,i[`--n-border-color`]=n.headerBorderColor),i}),a=n?j(`layout-header`,h(()=>e.inverted?`a`:`b`),i,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:i,themeClass:a?.themeClass,onRender:a?.onRender}},render(){var e;let{mergedClsPrefix:t}=this;return(e=this.onRender)==null||e.call(this),l(`div`,{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Ie=p({__name:`MyHeader`,setup(e){let{t,locale:n}=O(),i=oe();function a(e){n.value=e}return(e,n)=>(s(),y(ge,{class:`gap-2 h-12`},{default:r(()=>[T(Y,{to:`/`,title:b(t)(`button.home`),icon:`icon-[carbon--home]`,class:`text-3xl`},null,8,[`title`]),T(Y,{class:`text-3xl`,icon:`icon-[carbon--moon] dark:icon-[carbon--sun]`,title:b(t)(`button.toggle_dark`),onClick:n[0]||=()=>b(A)()},null,8,[`title`]),T(b(ce),{trigger:`click`,options:b(i),onSelect:a},{default:r(()=>[T(Y,{icon:`icon-[carbon--ibm-watson-language-translator]`,class:`text-3xl`,title:b(t)(`button.toggle_langs`)},null,8,[`title`])]),_:1},8,[`options`])]),_:1}))}}),Le=p({__name:`QTime`,props:{time:{}},setup(e){let t=e,n=h(()=>new Date(t.time)),r=new Date,i=h(()=>{let e=(r.getFullYear()-n.value.getFullYear())*12+r.getMonth()-n.value.getMonth();return e>0&&e<4?`relative`:`date`});return(t,r)=>(s(),y(b(he),{time:n.value,type:i.value,title:e.time},null,8,[`time`,`type`,`title`]))}}),Re=[`onClick`],ze=[`href`],Be=_e(p({__name:`DAnchor`,props:{headers:{}},setup(e){let n=e;function r(e,t=0){let n=[];for(let i of e)n.push({level:t,slug:i.slug,title:i.title}),i.children&&n.push(...r(i.children,t+1));return n}let c=h(()=>r(n.headers)),l=u(new Set),p=d(null),_=new Map,y=u({top:0,height:0,visible:!1}),b=h(()=>{let e=c.value.filter(e=>l.has(e.slug));return{first:e[0]?.slug,last:e[e.length-1]?.slug}}),w=h(()=>({transform:`translateY(${y.top}px)`,height:`${y.height}px`,opacity:y.visible?`1`:`0`}));function T(e,t){let n=t instanceof Element?t:t&&`$el`in t&&t.$el instanceof Element?t.$el:null;n instanceof HTMLElement?_.set(e,n):_.delete(e)}function E(){let e=b.value.first,t=b.value.last;if(!e||!t||!p.value){y.visible=!1,y.height=0;return}let n=_.get(e),r=_.get(t);if(!n||!r){y.visible=!1,y.height=0;return}let i=p.value.getBoundingClientRect(),a=n.getBoundingClientRect(),o=r.getBoundingClientRect();y.top=a.top-i.top,y.height=Math.max(o.bottom-a.top,0),y.visible=!0}function D(){if(c.value.length===0){l.clear(),E();return}let e=new Set,t=window.innerHeight,n=c.value.flatMap(e=>{let t=document.getElementById(e.slug);return t?[{slug:e.slug,top:t.getBoundingClientRect().top}]:[]});for(let r=0;r<n.length;r++){let i=n[r],a=n[r+1],o=i.top;(a?a.top:1/0)>1&&o<t&&e.add(i.slug)}l.clear(),e.forEach(e=>l.add(e)),E()}let O=!1;function k(){O||(O=!0,requestAnimationFrame(()=>{D(),O=!1}))}function A(e){return l.has(e)}function j(e){let t=document.getElementById(e);t&&(t.scrollIntoView({behavior:`smooth`,block:`start`}),history.pushState(null,``,`#${e}`),k())}return a(()=>{t(()=>{D()}),document.addEventListener(`scroll`,k,{capture:!0,passive:!0}),window.addEventListener(`resize`,k)}),o(()=>{document.removeEventListener(`scroll`,k,!0),window.removeEventListener(`resize`,k),_.clear()}),(e,t)=>(s(),g(`div`,{ref_key:`anchorContainerRef`,ref:p,class:`anchor-container`},[S(`span`,{class:C([`anchor-highlight-layer`,y.visible?`bg-foreground-light dark:bg-foreground-dark`:``]),style:v(w.value)},null,6),(s(!0),g(m,null,i(c.value,e=>(s(),g(`div`,{key:e.slug,onClick:x(t=>j(e.slug),[`prevent`]),class:C([[A(e.slug)?`color-link-hover`:``],`anchor-item transition-colors ease-out duration-300 mt-2 pr-2`]),ref_for:!0,ref:t=>T(e.slug,t),style:v({paddingLeft:`${e.level*1.5+.5}rem`})},[S(`a`,{href:`#${e.slug}`,class:`relative z-1 block whitespace-nowrap overflow-hidden text-ellipsis text-sm`},f(e.title),9,ze)],14,Re))),128))],512))}}),[[`__scopeId`,`data-v-9e470430`]]),Ve={class:`py-6 px-6`},He={class:`container max-w-7xl m-auto flex space-x-2`},Ue={class:`flex gap-2`},We={class:`sticky top-4 self-start hidden xl:block max-w-70`},Ge=p({__name:`default`,setup(t){let{t:n}=O(),i=D(),o=d(q.find(e=>e.routePath===i.path.substring(1)));e(()=>i.path,async e=>{o.value=q.find(t=>t.routePath===e.substring(1))});let l=h(()=>o.value?.attributes),u=`${J.repoUrl}/commits/${J.repoBranch}/${o.value?.repoPath}`;return a(()=>{document.querySelectorAll(`figure.code-block button.copy`).forEach(e=>{e.addEventListener(`click`,()=>{if(e.parentNode&&e.parentNode.nextSibling){let t=e.parentNode.nextSibling.textContent;t&&(navigator.clipboard.writeText(t),e.classList.remove(`copy`),e.classList.add(`copied`),setTimeout(()=>{e.classList.remove(`copied`),e.classList.add(`copy`)},1e3))}})})}),(e,t)=>{let i=c(`RouterView`);return s(),g(m,null,[T(b(Me),{"scroll-smooth":``,position:`absolute`,class:`text-gray-700 dark:text-gray-200`,"native-scrollbar":!1},{default:r(()=>[T(b(Fe),{bordered:``},{default:r(()=>[T(Ie)]),_:1}),S(`section`,Ve,[S(`div`,He,[T(b($),{embedded:``,class:`grow z-15`},{default:r(()=>[S(`div`,Ue,[l.value&&l.value.createdAt?(s(),y(b(De),{key:0,class:`block`},{default:r(()=>[w(f(b(n)(`article.created_at`))+` `,1),T(Le,{time:l.value.createdAt},null,8,[`time`])]),_:1})):_(``,!0),l.value&&l.value.changedAt?(s(),g(`a`,{key:1,class:`text-sky-500 hover:text-green-500 hover:underline primary-clickable cursor-pointer`,href:u,target:`_blank`},[w(f(b(n)(`article.changed_at`))+` `,1),T(Le,{time:l.value.changedAt},null,8,[`time`])])):_(``,!0)]),T(i,null,{default:r(({Component:e})=>[(s(),y(E(e)))]),_:1}),S(`div`,null,[T(ve)])]),_:1}),S(`aside`,We,[T(b($),{embedded:``,class:`hoverable`,"content-style":`padding-left: 0.5rem;padding-right: 0.5rem;`},{default:r(()=>[o.value?(s(),y(Be,{key:0,class:`text-left`,headers:o.value.headers},null,8,[`headers`])):_(``,!0)]),_:1})])])])]),_:1}),T(ye)],64)}}});export{Ge as default};