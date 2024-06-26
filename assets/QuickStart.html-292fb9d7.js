import{_ as o,W as l,X as i,Z as n,$ as s,a0 as a,a2 as t,a1 as u,C as p}from"./framework-b2028a60.js";const k="/assets/XiangMuJieGou-54da01a2.png",r={},d={class:"hint-container tip"},m=n("p",{class:"hint-container-title"},"项目模板",-1),v={href:"https://gitee.com/vampirewal/vampirewal/raw/master/src/.vuepress/dist/static/VampirewalCoreTemplate.zip",target:"_blank",rel:"noopener noreferrer"},b=n("li",null,"之后再打开VS就会在新增项目的时候，出现项目模板了",-1),g=n("li",null,"基本项目模板打开，直接运行就能看到大概的样子",-1),y=n("figure",null,[n("img",{src:k,alt:"项目模板结构",tabindex:"0",loading:"lazy"}),n("figcaption",null,"项目模板结构")],-1),w=n("details",{class:"hint-container details"},[n("summary",null,"BootStartup解读"),n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs"},[n("pre",{cs:"",class:"language-csharp"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s("/// "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("summary")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"token doc-comment comment"},"/// 启动引导"),s(`
`),n("span",{class:"token doc-comment comment"},[s("/// "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("summary")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"partial"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"BootStatup"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"VampirewalBootStartUp")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"protected"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(" FirstViewKey "),n("span",{class:"token operator"},"=>"),s(" ViewKeys"),n("span",{class:"token punctuation"},"."),s("MainView"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"protected"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"RegisterService"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"IServiceCollection"),s(" services"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"//将系统配置模块注册进IServiceCollection"),s(`
        services`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddVampirewalCoreConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$"'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},[s("AppDomain"),n("span",{class:"token punctuation"},"."),s("CurrentDomain"),n("span",{class:"token punctuation"},"."),s("BaseDirectory")]),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'AppConfig.json"')]),n("span",{class:"token punctuation"},","),s(" options "),n("span",{class:"token operator"},"=>"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            options`),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-method"},[n("span",{class:"token function"},"RegisterOptions"),n("span",{class:"token generic class-name"},[n("span",{class:"token punctuation"},"<"),s("EnvironmentOptions"),n("span",{class:"token punctuation"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//此处在项目中找到Common的Options内查看各项配置项"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        services`),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-method"},[n("span",{class:"token function"},"AddSingleton"),n("span",{class:"token generic class-name"},[n("span",{class:"token punctuation"},"<"),s("IVampirewalCoreDialogMessage"),n("span",{class:"token punctuation"},","),s(" VampirewalCoreDialogService"),n("span",{class:"token punctuation"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//注册窗体弹窗服务"),s(`
        services`),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-method"},[n("span",{class:"token function"},"UseVampirewalCoreSqlSugar"),n("span",{class:"token generic class-name"},[n("span",{class:"token punctuation"},"<"),s("SqlSugarSetup"),n("span",{class:"token punctuation"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//注册Sqlsugar并配置SqlSugar启动项"),s(`
        services`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddScoped"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"typeof"),n("span",{class:"token punctuation"},"("),n("span",{class:"token type-expression class-name"},[s("SqlSugarRepository"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//注册SqlSugar仓储"),s(`
        services`),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-method"},[n("span",{class:"token function"},"AddSingleton"),n("span",{class:"token generic class-name"},[n("span",{class:"token punctuation"},"<"),s("IVampirewalCoreLogService"),n("span",{class:"token punctuation"},","),s(" VampirewalCoreLogService"),n("span",{class:"token punctuation"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//注册框架自带的简单日志服务"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])],-1),h=u(`<details class="hint-container details"><summary>MainView和MainViewModel</summary><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">VampirewalIoCRegister</span><span class="token attribute-arguments"><span class="token punctuation">(</span>ViewKeys<span class="token punctuation">.</span>MainView<span class="token punctuation">)</span></span></span><span class="token punctuation">]</span><span class="token comment">//将窗体以这个Token注册进IServiceCollection</span>
<span class="token keyword">public</span> <span class="token keyword">partial</span> <span class="token keyword">class</span> <span class="token class-name">MainView</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">MainWindowBase</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">MainView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">InitializeComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> ViewModelKey <span class="token operator">=&gt;</span> ViewModelKeys<span class="token punctuation">.</span>MainViewModel<span class="token punctuation">;</span><span class="token comment">//当前窗体的ViewModel对应的Token</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>SqlSugarSetup</summary><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// 详细查看代码中，每个方法都有相对应的注释</span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token keyword">public</span> <span class="token keyword">partial</span> <span class="token keyword">class</span> <span class="token class-name">SqlSugarSetup</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">VampirewalCoreSqlSugarSetup</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">CodeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnLogExecuting</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> sql<span class="token punctuation">,</span> <span class="token class-name">SugarParameter<span class="token punctuation">[</span><span class="token punctuation">]</span></span> para<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">base</span><span class="token punctuation">.</span><span class="token function">OnLogExecuting</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> para<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">DataExecuted</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> <span class="token keyword">value</span><span class="token punctuation">,</span> <span class="token class-name">DataAfterModel</span> entity<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">DataExecuting</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> OldValue<span class="token punctuation">,</span> <span class="token class-name">DataFilterModel</span> entityInfo<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">base</span><span class="token punctuation">.</span><span class="token function">DataExecuting</span><span class="token punctuation">(</span>OldValue<span class="token punctuation">,</span> entityInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">ConnectionConfig</span> <span class="token function">GetDbConnectionConfig</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> DbName<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> ConnStr<span class="token punctuation">,</span> <span class="token class-name">DBTypeEnum<span class="token punctuation">?</span></span> dbType<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">base</span><span class="token punctuation">.</span><span class="token function">GetDbConnectionConfig</span><span class="token punctuation">(</span>DbName<span class="token punctuation">,</span> ConnStr<span class="token punctuation">,</span> dbType<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">GetSqlExecuteTimeMoreOnceSecond</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">base</span><span class="token punctuation">.</span><span class="token function">GetSqlExecuteTimeMoreOnceSecond</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnError</span><span class="token punctuation">(</span><span class="token class-name">SqlSugarException</span> exp<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">KeyValuePair<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> SugarParameter<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">&gt;</span></span> <span class="token function">OnExecutingChangeSql</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> sql<span class="token punctuation">,</span> <span class="token class-name">SugarParameter<span class="token punctuation">[</span><span class="token punctuation">]</span></span> pars<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">base</span><span class="token punctuation">.</span><span class="token function">OnExecutingChangeSql</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> pars<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnLogExecuted</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> sql<span class="token punctuation">,</span> <span class="token class-name">SugarParameter<span class="token punctuation">[</span><span class="token punctuation">]</span></span> para<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,2);function f(S,V){const c=p("ExternalLinkIcon"),e=p("font");return l(),i("div",null,[n("div",d,[m,n("p",null,[n("a",v,[s("点击下载"),a(c)])]),n("ul",null,[n("li",null,[s("下载之后，存放到 "),a(e,{color:"red"},{default:t(()=>[s("C:\\Users\\Administrator\\Documents\\Visual Studio 2022\\My Exported Templates\\这个目录下")]),_:1})]),n("li",null,[s("以及这个目录 "),a(e,{color:"red"},{default:t(()=>[s("C:\\Users\\Administrator\\Documents\\Visual Studio 2022\\Templates\\ProjectTemplates")]),_:1})]),b,g,n("li",null,[s("模板使用的Vampirewal.Core包可能是"),a(e,{color:"red"},{default:t(()=>[s("较之前的版本，上手之后，请自行升级即可")]),_:1})])]),y]),w,h])}const _=o(r,[["render",f],["__file","QuickStart.html.vue"]]);export{_ as default};
