import{_ as n,W as s,X as a,a1 as e}from"./framework-b2028a60.js";const t={},p=e(`<h1 id="新建mainviewmodel文件" tabindex="-1"><a class="header-anchor" href="#新建mainviewmodel文件" aria-hidden="true">#</a> 新建MainViewModel文件</h1><div class="hint-container tip"><p class="hint-container-title">新建MainViewModel.cs文件</p><ul><li>放置位置随意即可</li><li>需要是部分类partial</li><li>类名上进行IoC容器注册 [VampirewalIoCRegister(ViewModelKeys.MainViewModel)]</li></ul><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">///</span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">[</span><span class="token function">VampirewalIoCRegister</span><span class="token punctuation">(</span>ViewModelKeys<span class="token punctuation">.</span>MainViewModel<span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">partial</span> <span class="token keyword">class</span> <span class="token class-name">MainViewModel</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ViewModelBase</span></span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">///</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token function">MainViewModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//构造函数</span>
        <span class="token class-name"><span class="token keyword">var</span></span> AppBaseInfo <span class="token operator">=</span> VampirewalCoreContext<span class="token punctuation">.</span><span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetOptions</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>AppBaseOptions<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        Title <span class="token operator">=</span> AppBaseInfo<span class="token punctuation">.</span>AppChineseName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,2),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","Step4.html.vue"]]);export{d as default};
