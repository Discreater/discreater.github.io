import{u as e,o as s,c as t,d as n}from"./index-6d52e175.js";const a={class:"prose prose-sm m-auto text-left"},c=n(`<h1 id="git-submodules-%E6%80%BB%E7%BB%93-%5Bwip%5D" tabindex="-1">Git Submodules 总结 [WIP]</h1><p>ref: <a href="https://git-scm.com/book/en/v2/Git-Tools-Submodules" target="_blank" rel="noopener">https://git-scm.com/book/en/v2/Git-Tools-Submodules</a></p><h2 id="%E5%9F%BA%E7%A1%80%E5%91%BD%E4%BB%A4" tabindex="-1">基础命令</h2><h3 id="%E6%B7%BB%E5%8A%A0" tabindex="-1">添加</h3><figure class="code-block"><input id="collapse-code-12" class="toggle" type="checkbox" checked> <figcaption><div><label for="collapse-code-12" class="lbl-toggle"></label> <span>bash</span></div> <button class="copy" title="click to copy"></button></figcaption><pre class="collapsible-content"><code class="hljs language-bash"><span class="single-line-code">git submodule add [&lt;options&gt;] [--] &lt;repository&gt; [&lt;path&gt;]
</span></code></pre></figure><p>若 <code>path</code> 为空，默认添加至项目根目录中与子模块同名的文件夹。</p><p>执行该命令后，会新建或增加新的记录到 <code>.gitmodules</code> 文件中。</p><h3 id="clone" tabindex="-1">clone</h3><ol><li><p>clone 时拉取所有子模块</p><figure class="code-block"><input id="collapse-code-27" class="toggle" type="checkbox" checked> <figcaption><div><label for="collapse-code-27" class="lbl-toggle"></label> <span>bash</span></div> <button class="copy" title="click to copy"></button></figcaption><pre class="collapsible-content"><code class="hljs language-bash"><span class="single-line-code">git <span class="hljs-built_in">clone</span> --recurse-submodules &lt;repository&gt;
</span></code></pre></figure></li><li><p>clone 后拉取子模块</p><figure class="code-block"><input id="collapse-code-33" class="toggle" type="checkbox" checked> <figcaption><div><label for="collapse-code-33" class="lbl-toggle"></label> <span>bash</span></div> <button class="copy" title="click to copy"></button></figcaption><pre class="collapsible-content"><code class="hljs language-bash"><span class="single-line-code">git submodule update --init --recursive
</span></code></pre></figure></li><li><p><code>update</code> 命令拉取所有数据并 checkout 到正确的 commit。</p></li><li><p><code>--init</code> 初始化本地配置文件。</p></li><li><p><code>--recursive</code> 递归执行</p></li></ol><h3 id="%E7%A7%BB%E9%99%A4" tabindex="-1">移除</h3><ul><li><p>只移除本地的子模块文件, 不改变 git 记录，<code>init</code> 命令的反命令。若对文件有更改，则需要 <code>-f</code> 选项。</p><figure class="code-block"><input id="collapse-code-59" class="toggle" type="checkbox" checked> <figcaption><div><label for="collapse-code-59" class="lbl-toggle"></label> <span>bash</span></div> <button class="copy" title="click to copy"></button></figcaption><pre class="collapsible-content"><code class="hljs language-bash"><span class="single-line-code">git submodule deinit [-f] -- [&lt;path&gt;]
</span></code></pre></figure></li><li><p>完全移除</p><figure class="code-block"><input id="collapse-code-65" class="toggle" type="checkbox" checked> <figcaption><div><label for="collapse-code-65" class="lbl-toggle"></label> <span>bash</span></div> <button class="copy" title="click to copy"></button></figcaption><pre class="collapsible-content"><code class="hljs language-bash"><table class="hljs-ln"><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="1"><div class="hljs-ln-n" data-line-number="1"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="1">git submodule deinit -f -- [&lt;path&gt;]
</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="2"><div class="hljs-ln-n" data-line-number="2"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="2">git <span class="hljs-built_in">rm</span> -f &lt;path&gt;
</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="3"><div class="hljs-ln-n" data-line-number="3"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="3"><span class="hljs-comment"># sh</span>
</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="4"><div class="hljs-ln-n" data-line-number="4"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="4"><span class="hljs-built_in">rm</span> -rf .git/modules/&lt;path&gt;
</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="5"><div class="hljs-ln-n" data-line-number="5"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="5"><span class="hljs-comment"># powershell</span>
</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="6"><div class="hljs-ln-n" data-line-number="6"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="6"><span class="hljs-built_in">rm</span> -Force .git\\modules\\&lt;path&gt;
</td></tr></table></code></pre></figure></li></ul><h2 id="%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF" tabindex="-1">使用场景</h2><h3 id="1.-%E5%8F%AA%E4%BD%BF%E7%94%A8%E5%AD%90%E6%A8%A1%E5%9D%97%E8%80%8C%E4%B8%8D%E4%BF%AE%E6%94%B9" tabindex="-1">1. 只使用子模块而不修改</h3><h4 id="%E8%8B%A5%E5%AD%90%E6%A8%A1%E5%9D%97%E4%BB%93%E5%BA%93%E4%B8%8A%E6%B8%B8%E6%9C%89%E6%9B%B4%E6%96%B0" tabindex="-1">若子模块仓库上游有更新</h4><ul><li><p>在子模块目录中</p><figure class="code-block"><input id="collapse-code-82" class="toggle" type="checkbox" checked> <figcaption><div><label for="collapse-code-82" class="lbl-toggle"></label> <span>bash</span></div> <button class="copy" title="click to copy"></button></figcaption><pre class="collapsible-content"><code class="hljs language-bash"><table class="hljs-ln"><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="1"><div class="hljs-ln-n" data-line-number="1"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="1">git fetch
</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="2"><div class="hljs-ln-n" data-line-number="2"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="2">git merge &lt;branch&gt;
</td></tr></table></code></pre></figure></li><li><p>在主目录（默认更新 master， 省略 path 将会更新所有子模块）</p><figure class="code-block"><input id="collapse-code-88" class="toggle" type="checkbox" checked> <figcaption><div><label for="collapse-code-88" class="lbl-toggle"></label> <span>bash</span></div> <button class="copy" title="click to copy"></button></figcaption><pre class="collapsible-content"><code class="hljs language-bash"><span class="single-line-code">git submodule update --remote &lt;path&gt;
</span></code></pre></figure></li></ul><p>此时会在主目录留下子模块更新的记录。</p><h4 id="%E8%8B%A5%E4%B8%BB%E4%BB%93%E5%BA%93%E4%B8%AD%E6%9B%B4%E6%96%B0%E4%BA%86%E5%AD%90%E6%A8%A1%E5%9D%97" tabindex="-1">若主仓库中更新了子模块</h4><figure class="code-block"><input id="collapse-code-97" class="toggle" type="checkbox" checked> <figcaption><div><label for="collapse-code-97" class="lbl-toggle"></label> <span>bash</span></div> <button class="copy" title="click to copy"></button></figcaption><pre class="collapsible-content"><code class="hljs language-bash"><table class="hljs-ln"><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="1"><div class="hljs-ln-n" data-line-number="1"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="1">git pull
</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="2"><div class="hljs-ln-n" data-line-number="2"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="2">git submodule update --init --recursive
</td></tr></table></code></pre></figure><p>或（Git 2.14后）</p><figure class="code-block"><input id="collapse-code-101" class="toggle" type="checkbox" checked> <figcaption><div><label for="collapse-code-101" class="lbl-toggle"></label> <span>bash</span></div> <button class="copy" title="click to copy"></button></figcaption><pre class="collapsible-content"><code class="hljs language-bash"><span class="single-line-code">git pull --recurse-submodules
</span></code></pre></figure><blockquote><p>注意：若 <code>.gitmodules</code> 中的 URL 变化，则 <code>git pull --recurse-submodules</code> 会失败。 此时需要执行</p></blockquote><figure class="code-block"><input id="collapse-code-107" class="toggle" type="checkbox" checked> <figcaption><div><label for="collapse-code-107" class="lbl-toggle"></label> <span>bash</span></div> <button class="copy" title="click to copy"></button></figcaption><pre class="collapsible-content"><code class="hljs language-bash"><table class="hljs-ln"><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="1"><div class="hljs-ln-n" data-line-number="1"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="1">git submodule <span class="hljs-built_in">sync</span> --recursive
</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="2"><div class="hljs-ln-n" data-line-number="2"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="2">git submodule update --init --recursive
</td></tr></table></code></pre></figure><h3 id="2.%E5%9C%A8%E4%B8%BB%E9%A1%B9%E7%9B%AE%E4%B8%AD%E4%BF%AE%E6%94%B9%E5%AD%90%E6%A8%A1%E5%9D%97" tabindex="-1">2.在主项目中修改子模块</h3><p>拉取远程主项目的更改</p><figure class="code-block"><input id="collapse-code-114" class="toggle" type="checkbox" checked> <figcaption><div><label for="collapse-code-114" class="lbl-toggle"></label> <span>bash</span></div> <button class="copy" title="click to copy"></button></figcaption><pre class="collapsible-content"><code class="hljs language-bash"><table class="hljs-ln"><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="1"><div class="hljs-ln-n" data-line-number="1"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="1">git submodule update --remote --rebase
</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="2"><div class="hljs-ln-n" data-line-number="2"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="2"><span class="hljs-comment"># or </span>
</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="3"><div class="hljs-ln-n" data-line-number="3"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="3">git submodule update --remote --merge
</td></tr></table></code></pre></figure><p>本地修改</p><figure class="code-block"><input id="collapse-code-118" class="toggle" type="checkbox" checked> <figcaption><div><label for="collapse-code-118" class="lbl-toggle"></label> <span>bash</span></div> <button class="copy" title="click to copy"></button></figcaption><pre class="collapsible-content"><code class="hljs language-bash"><table class="hljs-ln"><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="1"><div class="hljs-ln-n" data-line-number="1"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="1"><span class="hljs-built_in">cd</span> &lt;submodule&gt;
</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="2"><div class="hljs-ln-n" data-line-number="2"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="2">vim somefile <span class="hljs-comment"># 修改 submodule</span>
</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="3"><div class="hljs-ln-n" data-line-number="3"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="3">git commit
</td></tr></table></code></pre></figure><blockquote><p>TODO…</p></blockquote><p>发布子模块的修改</p><figure class="code-block"><input id="collapse-code-127" class="toggle" type="checkbox" checked> <figcaption><div><label for="collapse-code-127" class="lbl-toggle"></label> <span>bash</span></div> <button class="copy" title="click to copy"></button></figcaption><pre class="collapsible-content"><code class="hljs language-bash"><span class="single-line-code">
</span></code></pre></figure>`,30),i=[c],h="Git Submodules 总结",g="git,WIP",m="2021-08-6",j=[{property:"og:title",content:"Git Submodules 总结"},{name:"twitter:title",content:"Git Submodules 总结"}],f={__name:"index",setup(o,{expose:l}){return l({frontmatter:{title:"Git Submodules 总结",tags:"git,WIP",date:"2021-08-6",meta:[{property:"og:title",content:"Git Submodules 总结"},{name:"twitter:title",content:"Git Submodules 总结"}]}}),e({title:"Git Submodules 总结",meta:[{property:"og:title",content:"Git Submodules 总结"},{name:"twitter:title",content:"Git Submodules 总结"}]}),(b,u)=>(s(),t("div",a,i))}};export{m as date,f as default,j as meta,g as tags,h as title};
