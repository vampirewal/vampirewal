import{_ as r,W as d,X as k,a0 as o,a2 as a,Z as n,$ as s,a1 as i,C as p}from"./framework-b2028a60.js";const m={},v=n("h2",{id:"注入方式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#注入方式","aria-hidden":"true"},"#"),s(" 注入方式")],-1),h=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("p",null,"两种方式任选其一"),n("ul",null,[n("li",null,"第一种适用于非小型系统😜"),n("li",null,"第二种适用于小型系统"),n("li",null,"下文详细的使用方法会进行区分")])],-1),g=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[s("services"),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-method"},[n("span",{class:"token function"},"UseVampirewalCoreSqlSugar"),n("span",{class:"token generic class-name"},[n("span",{class:"token punctuation"},"<"),s("testdc"),n("span",{class:"token punctuation"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
services`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddTransient"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"typeof"),n("span",{class:"token punctuation"},"("),n("span",{class:"token type-expression class-name"},[s("SqlSugarRepository"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[s("services"),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-method"},[n("span",{class:"token function"},"AddSingleton"),n("span",{class:"token generic class-name"},[n("span",{class:"token punctuation"},"<"),s("IVampirewalCoreDataContext"),n("span",{class:"token punctuation"},","),s(" DataContext"),n("span",{class:"token punctuation"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),_=n("h3",{id:"_1、第一种",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1、第一种","aria-hidden":"true"},"#"),s(" 1、第一种")],-1),C=n("h4",{id:"_1-1、准备代码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-1、准备代码","aria-hidden":"true"},"#"),s(" 1.1、准备代码")],-1),w={class:"hint-container tip"},f=n("p",{class:"hint-container-title"},"SqlSugarSetup派生类",-1),y=n("li",null,"需至少override一个CodeFirst()，用于生成表结构",-1),S=n("li",null,"InitData()用于初始化一些数据库内的数据，避免其他地方出现异常",-1),x=n("li",null,"还有较多虚AOP方法可以重写，详细可以在VampirewalCoreSqlSugarSetup上按F12进去围观，均有较详细的注释",-1),D={href:"https://www.donet5.com/Home/Doc?typeId=1204",target:"_blank",rel:"noopener noreferrer"},T=n("li",null,"SqlSugarRepository已由框架封装好，直接注入即可",-1),V=i(`<details class="hint-container details"><summary>SqlSugarSetup派生类示例</summary><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">testdc</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">VampirewalCoreSqlSugarSetup</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">CodeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token generic-method"><span class="token function">CreateTable</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TestModel<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token generic-method"><span class="token function">CreateTable</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TestBillModel<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token generic-method"><span class="token function">CreateTable</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TestDetailModel<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token generic-method"><span class="token function">CreateTable</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TestDetailModel2<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token generic-method"><span class="token function">CreateTable</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Logger<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">InitData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Client<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Queryable</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TestModel<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Any</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),A=i(`<h4 id="_1-2、-如何使用" tabindex="-1"><a class="header-anchor" href="#_1-2、-如何使用" aria-hidden="true">#</a> 1.2、 如何使用</h4><div class="hint-container warning"><p class="hint-container-title">注意</p><p>SqlSugarRepository 的注入方式是用的AddTransient瞬时模式，因为不像AspNetCore那种一个连接有范围的生命周期，在WPF这边如果单机使用，单例模式也可以。</p></div><p>在需要使用的地方：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name">SqlSugarRepository<span class="token punctuation">&lt;</span>TestModel<span class="token punctuation">&gt;</span></span> rep<span class="token operator">=</span> VampirewalCoreContext<span class="token punctuation">.</span><span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetService</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>SqlSugarRepository<span class="token punctuation">&lt;</span>TestModel<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果同样是瞬时启动的类，比如弹窗的ViewModel中，可以直接通过构造函数注入。<br> 然后就可以愉快的操作数据库了</p><h3 id="_2、第二种" tabindex="-1"><a class="header-anchor" href="#_2、第二种" aria-hidden="true">#</a> 2、第二种</h3>`,6),q={class:"hint-container info"},I=n("p",{class:"hint-container-title"},"使用",-1),M=n("ul",null,[n("li",null,"上面已经讲了注入方式")],-1),N=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token return-type class-name"},"IVampirewalCoreDataContext"),s(" DC "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"get"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"set"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token function"},"MainViewModel2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"IVampirewalCoreDataContext"),s(" dc"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    DC`),n("span",{class:"token operator"},"="),s(" dc"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token class-name"},"IVampirewalCoreDataContext"),s(" DC"),n("span",{class:"token operator"},"="),s(" VampirewalCoreContext"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-method"},[n("span",{class:"token function"},"GetService"),n("span",{class:"token generic class-name"},[n("span",{class:"token punctuation"},"<"),s("IVampirewalCoreDataContext"),n("span",{class:"token punctuation"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),B=n("ul",null,[n("li",null,"单库的使用，直接DC.Client.Queryable……原生的SqlSugar写法"),n("li",null,"多库的使用，有2种方式："),n("li",null,"1、在使用非默认库的DC.Client，前面，添加一行代码：DC.Client.ChangeDatabase;"),n("li",null,"2、或者在model上添加一个特性：TenantAttribute，")],-1);function F(G,P){const l=p("Tabs"),u=p("ExternalLinkIcon");return d(),k("div",null,[v,h,o(l,{id:"25",data:[{title:"第一种"},{title:"第二种"}]},{tab0:a(({title:t,value:e,isActive:c})=>[g]),tab1:a(({title:t,value:e,isActive:c})=>[b]),_:1}),_,C,n("div",w,[f,n("ul",null,[y,S,x,n("li",null,[s("AOP可以查看SqlSugar的"),n("a",D,[s("AOP介绍页"),o(u)])]),T]),V]),A,n("div",q,[I,M,o(l,{id:"97",data:[{title:"构造函数注入"},{title:"程序上下文中获取"}]},{tab0:a(({title:t,value:e,isActive:c})=>[N]),tab1:a(({title:t,value:e,isActive:c})=>[R]),_:1})]),B])}const L=r(m,[["render",F],["__file","VampirewalCoreDataContext.html.vue"]]);export{L as default};
