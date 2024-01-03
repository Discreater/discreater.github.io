import{ai as s,c as l,o,at as c}from"./main-nxtMyNHE.js";const t={class:"prose prose-sm m-auto text-left"},a=c(`<h2 id="12.31" tabindex="-1">12.31</h2><p>23 年最后一天。</p><h3 id="tools" tabindex="-1">Tools</h3><p>SSH 端口转发，本地设备为A、D，远程设备为B、C。</p><p>SSH 路径：A -&gt; B</p><ul><li><p>通过本地端口访问远程端口（A访问C）</p><figure class="code-block"><input id="collapse-code-20" class="toggle" type="checkbox" checked> <figcaption><div><label for="collapse-code-20" class="lbl-toggle"></label> <span>shell</span></div> <button class="copy" title="click to copy"></button></figcaption><pre class="collapsible-content"><code class="hljs language-shell"><span class="single-line-code">ssh -L addr_A:port_A:addr_C:port_C
</span></code></pre></figure></li><li><p>通过远程端口访问本地端口（B访问D）</p><figure class="code-block"><input id="collapse-code-26" class="toggle" type="checkbox" checked> <figcaption><div><label for="collapse-code-26" class="lbl-toggle"></label> <span>shell</span></div> <button class="copy" title="click to copy"></button></figcaption><pre class="collapsible-content"><code class="hljs language-shell"><span class="single-line-code">ssh -R addr_B:port_B:addr_D:port_D
</span></code></pre></figure></li></ul>`,6),p=[a],_=[],u={__name:"12",setup(n,{expose:e}){return e({frontmatter:{meta:[]}}),s({meta:[]}),(r,g)=>(o(),l("div",t,p))}};export{u as default,_ as meta};