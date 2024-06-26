import{_ as n,W as s,X as a,a1 as e}from"./framework-b2028a60.js";const t={},i=e(`<div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>针对属性上添加了ValidationAttribute特性的进行数据验证</li><li>使用方式：</li></ul><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">//直接注入</span>
services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddSingleton</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IVampirewalCoreValidationService<span class="token punctuation">,</span> VampirewalCoreValidationService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">private</span> <span class="token return-type class-name">IVampirewalCoreValidationService</span> ValidationService <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token function">MainViewModel</span><span class="token punctuation">(</span><span class="token class-name">IVampirewalCoreValidationService</span> _ValidationService<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    ValidationService <span class="token operator">=</span> _ValidationService<span class="token punctuation">;</span>

    <span class="token class-name">TestModel</span> model <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TestModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>ValidationService<span class="token punctuation">.</span><span class="token function">IsValidation</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//验证通过</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//验证失败</span>
        <span class="token comment">//获取到错误信息列表,进行输出</span>
        <span class="token class-name"><span class="token keyword">var</span></span> ErrorList<span class="token operator">=</span> ValidationService<span class="token punctuation">.</span>ErrorList<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,1),c=[i];function p(o,l){return s(),a("div",null,c)}const r=n(t,[["render",p],["__file","VampirewalCoreValidationService.html.vue"]]);export{r as default};
