import{_ as n,W as s,X as a,a1 as e}from"./framework-b2028a60.js";const t={},p=e(`<div class="hint-container tip"><p class="hint-container-title">介绍</p><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>DetailItemChangeBaseModel</td><td>明细变更基类</td></tr><tr><td>ListenDetailChangeAttribute</td><td>在VO类的属性上标记，代表需要监控数据变更</td></tr><tr><td>ChangeType</td><td>变更状态</td></tr></tbody></table><ul><li>DetailItemChangeBaseModel基类是一个抽象类，使用需继承在VO类上</li><li>类型参数是一个DTO(从数据库获取的源数据或从接口获取的源数据)</li></ul></div><h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h2><h3 id="_1、新建一个dto类" tabindex="-1"><a class="header-anchor" href="#_1、新建一个dto类" aria-hidden="true">#</a> 1、新建一个DTO类</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">testDetailModelDTO</span>
<span class="token punctuation">{</span>        
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> DName <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> IsDelete <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、新增一个vo类并继承detailitemchangebasemodel" tabindex="-1"><a class="header-anchor" href="#_2、新增一个vo类并继承detailitemchangebasemodel" aria-hidden="true">#</a> 2、新增一个VO类并继承DetailItemChangeBaseModel</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestDetailModel</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">DetailItemChangeBaseModel<span class="token punctuation">&lt;</span>testDetailModelDTO<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token function">TestDetailModel2</span><span class="token punctuation">(</span><span class="token class-name">testDetailModel2DTO</span> dto<span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token keyword">base</span><span class="token punctuation">(</span>dto<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">string</span></span> _DName<span class="token punctuation">;</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ListenDetailChange</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> DName
    <span class="token punctuation">{</span>
        <span class="token keyword">get</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> _DName<span class="token punctuation">;</span> <span class="token punctuation">}</span>
        <span class="token keyword">set</span> <span class="token punctuation">{</span> _DName <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span> <span class="token function">OnPropertyChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">bool</span></span> _IsDelete<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> IsDelete <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token operator">=&gt;</span> _IsDelete<span class="token punctuation">;</span> <span class="token keyword">set</span> <span class="token punctuation">{</span> _IsDelete<span class="token operator">=</span><span class="token keyword">value</span><span class="token punctuation">;</span> <span class="token function">OnPropertyChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>

    <span class="token comment">//此处会依次赋值</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">LoadDTO</span><span class="token punctuation">(</span><span class="token class-name">testDetailModel2DTO</span> dto<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>DName <span class="token operator">=</span> dto<span class="token punctuation">.</span>DName<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>IsDelete<span class="token operator">=</span> dto<span class="token punctuation">.</span>IsDelete<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、使用" tabindex="-1"><a class="header-anchor" href="#_3、使用" aria-hidden="true">#</a> 3、使用</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token function">MainViewModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//New一个DTO代表假装从某个数据源获取到的数据</span>
    <span class="token class-name">testDetailModelDTO</span> dto <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">testDetailModelDTO</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        DName <span class="token operator">=</span> <span class="token string">&quot;Test1&quot;</span><span class="token punctuation">,</span>
        IsDelete <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">//将这个DTO传入VO中</span>
    <span class="token class-name">TestDetailModel</span> VO <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TestDetailModel</span><span class="token punctuation">(</span>dto<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//将VO中的DName值修改</span>
    VO<span class="token punctuation">.</span>DName <span class="token operator">=</span> <span class="token string">&quot;Test2&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">//比较原始值看是否有变化</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>VO<span class="token punctuation">.</span><span class="token function">CompareSourceValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//有变化</span>
        <span class="token comment">//执行Update操作</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//无变化</span>
        <span class="token comment">//排除后无需操作，节约程序性能</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[p];function o(c,i){return s(),a("div",null,l)}const d=n(t,[["render",o],["__file","DetailItemChangeBase.html.vue"]]);export{d as default};
