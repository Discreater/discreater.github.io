import{S as e,b as t,et as n,k as r,w as i}from"./vue.runtime.esm-bundler-B-Vk_T7K.js";import{C as a,S as o}from"./logic-BIbWlkfE.js";import{C as s,U as c,at as l,ct as u,h as d,lt as f,ot as p,v as m,x as h}from"./locale-DOfhx0T6.js";var g=typeof document<`u`&&typeof window<`u`;function _(e){return Object.keys(e)}function v(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(i);++r<i;)a[r]=e[r+t];return a}function y(e,t,n){var r=e.length;return n=n===void 0?r:n,!t&&n>=r?e:v(e,t,n)}var b=RegExp(`[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]`);function x(e){return b.test(e)}function S(e){return e.split(``)}var C=`\\ud800-\\udfff`,w=`\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff`,T=`\\ufe0e\\ufe0f`,E=`[`+C+`]`,D=`[`+w+`]`,O=`\\ud83c[\\udffb-\\udfff]`,k=`(?:`+D+`|`+O+`)`,A=`[^`+C+`]`,j=`(?:\\ud83c[\\udde6-\\uddff]){2}`,M=`[\\ud800-\\udbff][\\udc00-\\udfff]`,N=`\\u200d`,P=k+`?`,F=`[`+T+`]?`,I=`(?:`+N+`(?:`+[A,j,M].join(`|`)+`)`+F+P+`)*`,L=F+P+I,R=`(?:`+[A+D+`?`,D,j,M,E].join(`|`)+`)`,z=RegExp(O+`(?=`+O+`)|`+R+L,`g`);function B(e){return e.match(z)||[]}function V(e){return x(e)?B(e):S(e)}function H(e){return function(t){t=s(t);var n=x(t)?V(t):void 0,r=n?n[0]:t.charAt(0),i=n?y(n,1).join(``):t.slice(1);return r[e]()+i}}var U=H(`toUpperCase`);function W(e,t,n){if(!t)return;let a=c(),s=i(o,null),l=()=>{let r=n.value;t.mount({id:r===void 0?e:r+e,head:!0,anchorMetaName:h,props:{bPrefix:r?`.${r}-`:void 0},ssr:a,parent:s?.styleMountTarget}),s?.preflightStyleDisabled||m.mount({id:`n-global`,head:!0,anchorMetaName:h,ssr:a,parent:s?.styleMountTarget})};a?l():r(l)}var G=p(`base-icon`,`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[l(`svg`,`
 height: 1em;
 width: 1em;
 `)]),K=t({name:`BaseIcon`,props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){W(`-base-icon`,G,n(e,`clsPrefix`))},render(){return e(`i`,{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}});function q(n,r){let a=t({render(){return r()}});return t({name:U(n),setup(){let t=i(o,null)?.mergedIconsRef;return()=>{let r=t?.value?.[n];return r?r():e(a,null)}}})}var J=q(`close`,()=>e(`svg`,{viewBox:`0 0 12 12`,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0},e(`g`,{stroke:`none`,"stroke-width":`1`,fill:`none`,"fill-rule":`evenodd`},e(`g`,{fill:`currentColor`,"fill-rule":`nonzero`},e(`path`,{d:`M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z`}))))),Y=p(`base-close`,`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[u(`absolute`,`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),l(`&::before`,`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),f(`disabled`,[l(`&:hover`,`
 color: var(--n-close-icon-color-hover);
 `),l(`&:hover::before`,`
 background-color: var(--n-close-color-hover);
 `),l(`&:focus::before`,`
 background-color: var(--n-close-color-hover);
 `),l(`&:active`,`
 color: var(--n-close-icon-color-pressed);
 `),l(`&:active::before`,`
 background-color: var(--n-close-color-pressed);
 `)]),u(`disabled`,`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),u(`round`,[l(`&::before`,`
 border-radius: 50%;
 `)])]),X=t({name:`BaseClose`,props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(t){return W(`-base-close`,Y,n(t,`clsPrefix`)),()=>{let{clsPrefix:n,disabled:r,absolute:i,round:a,isButtonTag:o}=t;return e(o?`button`:`div`,{type:o?`button`:void 0,tabindex:r||!t.focusable?-1:0,"aria-disabled":r,"aria-label":`close`,role:o?void 0:`button`,disabled:r,class:[`${n}-base-close`,i&&`${n}-base-close--absolute`,r&&`${n}-base-close--disabled`,a&&`${n}-base-close--round`],onMousedown:e=>{t.focusable||e.preventDefault()},onClick:t.onClick},e(K,{clsPrefix:n},{default:()=>e(J,null)}))}}}),Z={paddingSmall:`12px 16px 12px`,paddingMedium:`19px 24px 20px`,paddingLarge:`23px 32px 24px`,paddingHuge:`27px 40px 28px`,titleFontSizeSmall:`16px`,titleFontSizeMedium:`18px`,titleFontSizeLarge:`18px`,titleFontSizeHuge:`18px`,closeIconSize:`18px`,closeSize:`22px`};function Q(e){let{primaryColor:t,borderRadius:n,lineHeight:r,fontSize:i,cardColor:a,textColor2:o,textColor1:s,dividerColor:c,fontWeightStrong:l,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:f,closeColorHover:p,closeColorPressed:m,modalColor:h,boxShadow1:g,popoverColor:_,actionColor:v}=e;return Object.assign(Object.assign({},Z),{lineHeight:r,color:a,colorModal:h,colorPopover:_,colorTarget:t,colorEmbedded:v,colorEmbeddedModal:v,colorEmbeddedPopover:v,textColor:o,titleTextColor:s,borderColor:c,actionColor:v,titleFontWeight:l,closeColorHover:p,closeColorPressed:m,closeBorderRadius:n,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:f,fontSizeSmall:i,fontSizeMedium:i,fontSizeLarge:i,fontSizeHuge:i,boxShadow:g,borderRadius:n})}var $={name:`Card`,common:d,self:Q},ee=a(`n-layout-sider`),te={type:String,default:`static`},ne=[{attributes:{title:`Computer Arithmetic`,tags:`WIP`,createdAt:`2023-01-06`,changedAt:`2026-03-13T01:52:48+08:00`},headers:[{title:`Computer Arithmetic`,slug:`computer-arithmetic`,children:[]},{title:`Numbers and Arithmetic`,slug:`numbers-and-arithmetic`,children:[{title:`1.3 NUMBERS AND THEIR ENCODINGS`,slug:`1.3-numbers-and-their-encodings`,children:[]},{title:`1.4 FIXED-RADIX POSITIONAL NUMBER SYSTEMS`,slug:`1.4-fixed-radix-positional-number-systems`,children:[]},{title:`Credits`,slug:`credits`,children:[]}]}],routePath:`blogs/elec`,repoPath:`src/pages/blogs/elec/index.md`},{attributes:{title:`Montgomery Modular Multiplication`,tags:`crypto,WIP`,createdAt:`2022-10-17 19:15`,changedAt:`2026-03-13T01:52:48+08:00`},headers:[{title:`Montgomery Modular Multiplication [WIP]`,slug:`montgomery-modular-multiplication-%5Bwip%5D`,children:[{title:`蒙哥马利域 Montgomery Domain`,slug:`%E8%92%99%E5%93%A5%E9%A9%AC%E5%88%A9%E5%9F%9F-montgomery-domain`,children:[]},{title:`Basic Algorithm`,slug:`basic-algorithm`,children:[]},{title:`Basic Optimized Algorithm`,slug:`basic-optimized-algorithm`,children:[]},{title:`Advanced Optimized Algorithm`,slug:`advanced-optimized-algorithm`,children:[{title:`Compress1`,slug:`compress1`,children:[]},{title:`Compress2`,slug:`compress2`,children:[]}]}]}],routePath:`blogs/montgomery-modular-multiplication`,repoPath:`src/pages/blogs/montgomery-modular-multiplication/index.md`},{attributes:{title:`Git Submodules 总结`,tags:`git`,createdAt:`2021-08-6`,changedAt:`2026-03-13T01:52:48+08:00`},headers:[{title:`Git Submodules 总结`,slug:`git-submodules-%E6%80%BB%E7%BB%93`,children:[{title:`基础命令`,slug:`%E5%9F%BA%E7%A1%80%E5%91%BD%E4%BB%A4`,children:[{title:`添加`,slug:`%E6%B7%BB%E5%8A%A0`,children:[]},{title:`clone`,slug:`clone`,children:[]},{title:`移除`,slug:`%E7%A7%BB%E9%99%A4`,children:[]}]},{title:`使用场景`,slug:`%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF`,children:[{title:`1. 只使用子模块而不修改`,slug:`1.-%E5%8F%AA%E4%BD%BF%E7%94%A8%E5%AD%90%E6%A8%A1%E5%9D%97%E8%80%8C%E4%B8%8D%E4%BF%AE%E6%94%B9`,children:[{title:`若子模块仓库上游有更新`,slug:`%E8%8B%A5%E5%AD%90%E6%A8%A1%E5%9D%97%E4%BB%93%E5%BA%93%E4%B8%8A%E6%B8%B8%E6%9C%89%E6%9B%B4%E6%96%B0`,children:[]},{title:`若主仓库中更新了子模块`,slug:`%E8%8B%A5%E4%B8%BB%E4%BB%93%E5%BA%93%E4%B8%AD%E6%9B%B4%E6%96%B0%E4%BA%86%E5%AD%90%E6%A8%A1%E5%9D%97`,children:[]}]},{title:`2.在主项目中修改子模块`,slug:`2.%E5%9C%A8%E4%B8%BB%E9%A1%B9%E7%9B%AE%E4%B8%AD%E4%BF%AE%E6%94%B9%E5%AD%90%E6%A8%A1%E5%9D%97`,children:[]}]}]}],routePath:`blogs/git-submodules`,repoPath:`src/pages/blogs/git-submodules/index.md`},{attributes:{title:`在WSL2中启用GUI`,tags:`WSL`,createdAt:`2020-03-22`,changedAt:`2026-03-13T01:52:48+08:00`},headers:[{title:`在WSL2中启用GUI`,slug:`%E5%9C%A8wsl2%E4%B8%AD%E5%90%AF%E7%94%A8gui`,children:[{title:`参考`,slug:`%E5%8F%82%E8%80%83`,children:[]},{title:`准备`,slug:`%E5%87%86%E5%A4%87`,children:[]},{title:`确定主机IP`,slug:`%E7%A1%AE%E5%AE%9A%E4%B8%BB%E6%9C%BAip`,children:[]},{title:`安装VcXsrv`,slug:`%E5%AE%89%E8%A3%85vcxsrv`,children:[]},{title:`启动`,slug:`%E5%90%AF%E5%8A%A8`,children:[]},{title:`防火墙配置`,slug:`%E9%98%B2%E7%81%AB%E5%A2%99%E9%85%8D%E7%BD%AE`,children:[]},{title:`保存为脚本`,slug:`%E4%BF%9D%E5%AD%98%E4%B8%BA%E8%84%9A%E6%9C%AC`,children:[]},{title:`HiDPI的设置`,slug:`hidpi%E7%9A%84%E8%AE%BE%E7%BD%AE`,children:[]},{title:`由于代理出现的异常`,slug:`%E7%94%B1%E4%BA%8E%E4%BB%A3%E7%90%86%E5%87%BA%E7%8E%B0%E7%9A%84%E5%BC%82%E5%B8%B8`,children:[]}]}],routePath:`blogs/WSL2-gui-hi-dpi`,repoPath:`src/pages/blogs/WSL2-gui-hi-dpi/index.md`},{attributes:{title:`JS 按位操作符溢出问题`,tags:`javascript`,createdAt:`2020-03-14`,changedAt:`2023-10-20T15:54:11+08:00`},headers:[{title:`JS 按位操作符溢出问题`,slug:`js-%E6%8C%89%E4%BD%8D%E6%93%8D%E4%BD%9C%E7%AC%A6%E6%BA%A2%E5%87%BA%E9%97%AE%E9%A2%98`,children:[]}],routePath:`blogs/JS-bit-operator`,repoPath:`src/pages/blogs/JS-bit-operator/index.md`}],re={name:`Discreater`,homeUrl:`https://github.com/Discreater`,repoUrl:`https://github.com/Discreater/discreater.github.io`,repoBranch:`main`};export{$ as a,K as c,g as d,te as i,W as l,ne as n,Q as o,ee as r,X as s,re as t,_ as u};