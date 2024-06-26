import{_ as e,W as o,X as c,Z as n,a0 as t,a2 as p,$ as s,a1 as i,C as l}from"./framework-b2028a60.js";const u={},r={class:"hint-container warning"},k=n("p",{class:"hint-container-title"},"注意",-1),d=n("li",null,"如果系统采用分层架构开发，建议将该启动类放置于ViewModel层",-1),v=n("li",null,"如果不分层开发，则放哪无所谓",-1),m=n("li",null,"主要是下文中的VampirewalApplication中需要获取该类的Type，避免在BootStartUp中需要反射获取到的程序集，加载不了",-1),b=n("li",null,"基本上使用和AspNetCore一样",-1),g=i(`<div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestBootStartUp</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">VampirewalMiniApiBootStartup</span></span>
<span class="token punctuation">{</span>
    <span class="token comment">//初始窗体的ViewKey</span>
    <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> FirstViewKey <span class="token operator">=&gt;</span> <span class="token string">&quot;MainView&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">IApplicationBuilder</span> app<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//启用静态文件</span>
        app<span class="token punctuation">.</span><span class="token function">UseStaticFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//使用文件目录，类似FTP</span>
        app<span class="token punctuation">.</span><span class="token function">UseDirectoryBrowser</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">DirectoryBrowserOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            FileProvider<span class="token operator">=</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">PhysicalFileProvider</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">AppDomain<span class="token punctuation">.</span>CurrentDomain<span class="token punctuation">.</span>BaseDirectory</span><span class="token punctuation">}</span></span><span class="token string">Files&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            RequestPath<span class="token operator">=</span><span class="token string">&quot;/Upload&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       
        <span class="token comment">//启用内置全局异常捕获中间件</span>
        app<span class="token punctuation">.</span><span class="token function">UseVampirewalMiniApiExceptionHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        app<span class="token punctuation">.</span><span class="token function">UseSwagger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        app<span class="token punctuation">.</span><span class="token function">UseSwaggerUI</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span>
        <span class="token punctuation">{</span>
            c<span class="token punctuation">.</span><span class="token function">SwaggerEndpoint</span><span class="token punctuation">(</span><span class="token string">&quot;/swagger/v1/swagger.json&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;MiniApi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            c<span class="token punctuation">.</span><span class="token function">EnablePersistAuthorization</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">RegisterService</span><span class="token punctuation">(</span><span class="token class-name">IServiceCollection</span> services<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//第一步，需先加载配置项，避免后续需要使用的地方，获取不了配置信息</span>
        services<span class="token punctuation">.</span><span class="token function">AddVampirewalCoreConfig</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">AppDomain<span class="token punctuation">.</span>CurrentDomain<span class="token punctuation">.</span>BaseDirectory</span><span class="token punctuation">}</span></span><span class="token string">AppConfig.json&quot;</span></span><span class="token punctuation">,</span> options <span class="token operator">=&gt;</span>
        <span class="token punctuation">{</span>
            <span class="token comment">//options.RegisterOptions&lt;AppBaseOptions&gt;();//此处仅做案例写在这里</span>
            options<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">RegisterOptions</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>VampirewalMiniApiOptions<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//需要这个配置</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//小型程序的话，建议使用这种方式将数据库操作注册进IOC，使用原生SqlSugar的方式</span>
        services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddSingleton</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IVampirewalCoreDataContext<span class="token punctuation">,</span> DataContext<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//非小型项目建议使用这种方式将SqlSugar注册进IOC，以及下面的仓储。</span>
        services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">UseVampirewalCoreSqlSugar</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>testdc<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        services<span class="token punctuation">.</span><span class="token function">AddTransient</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">SqlSugarRepository<span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//自带的日志服务，可有可无，暂时没时间去完善</span>
        services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddSingleton</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IVampirewalCoreLogService<span class="token punctuation">,</span> VampirewalCoreLogService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//弹窗通知服务</span>
        services<span class="token punctuation">.</span><span class="token function">AddVampirewalCoreDialogMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//事件工厂总线服务</span>
        services<span class="token punctuation">.</span><span class="token function">AddVampirewalCoreEventBusFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//这个不是很好用，但是还是保留</span>
        services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddSingleton</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IProblemDetailsWriter<span class="token punctuation">,</span> VampirewalMiniApiResultProblemDetailsWriter<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//最重要的是这里</span>
        services<span class="token punctuation">.</span><span class="token function">AddEndpointsApiExplorer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        services<span class="token punctuation">.</span><span class="token function">AddSwaggerGen</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span>
        <span class="token punctuation">{</span>
            c<span class="token punctuation">.</span><span class="token function">SwaggerDoc</span><span class="token punctuation">(</span><span class="token string">&quot;v1&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OpenApiInfo</span>
            <span class="token punctuation">{</span>
                Title <span class="token operator">=</span> <span class="token string">&quot;测试MiniApi-V1&quot;</span><span class="token punctuation">,</span>
                Version <span class="token operator">=</span> <span class="token string">&quot;v1&quot;</span><span class="token punctuation">,</span>
                Description <span class="token operator">=</span> <span class="token string">&quot;haha&quot;</span>
            <span class="token punctuation">}</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//设置xml引用</span>
            <span class="token class-name"><span class="token keyword">var</span></span> filePath <span class="token operator">=</span> Path<span class="token punctuation">.</span><span class="token function">Combine</span><span class="token punctuation">(</span>System<span class="token punctuation">.</span>AppContext<span class="token punctuation">.</span>BaseDirectory<span class="token punctuation">,</span> <span class="token string">&quot;test.ViewModel.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            c<span class="token punctuation">.</span><span class="token function">IncludeXmlComments</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//添加授权</span>
            <span class="token class-name"><span class="token keyword">var</span></span> schemeName <span class="token operator">=</span> <span class="token string">&quot;Bearer&quot;</span><span class="token punctuation">;</span>
            c<span class="token punctuation">.</span><span class="token function">AddSecurityDefinition</span><span class="token punctuation">(</span>schemeName<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OpenApiSecurityScheme</span>
            <span class="token punctuation">{</span>
                In <span class="token operator">=</span> ParameterLocation<span class="token punctuation">.</span>Header<span class="token punctuation">,</span>
                Description <span class="token operator">=</span> <span class="token string">&quot;请输入不带有Bearer的Token&quot;</span><span class="token punctuation">,</span>
                Name <span class="token operator">=</span> <span class="token string">&quot;Authorization&quot;</span><span class="token punctuation">,</span>
                Type <span class="token operator">=</span> SecuritySchemeType<span class="token punctuation">.</span>Http<span class="token punctuation">,</span>
                Scheme <span class="token operator">=</span> schemeName<span class="token punctuation">.</span><span class="token function">ToLowerInvariant</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                BearerFormat <span class="token operator">=</span> <span class="token string">&quot;JWT&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            c<span class="token punctuation">.</span><span class="token function">AddSecurityRequirement</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">OpenApiSecurityRequirement</span> <span class="token punctuation">{</span>
                    <span class="token punctuation">{</span>
                        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OpenApiSecurityScheme</span>
                        <span class="token punctuation">{</span>
                            Reference <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OpenApiReference</span>
                            <span class="token punctuation">{</span>
                                Type <span class="token operator">=</span> ReferenceType<span class="token punctuation">.</span>SecurityScheme<span class="token punctuation">,</span>
                                Id <span class="token operator">=</span> schemeName<span class="token punctuation">,</span>

                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">string</span></span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//此处的OnAppExit和OnAppRun在VampirewalWebApiBootStartup中被使用，如需自定义内容，请保留base</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnAppExit</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">bool</span></span> IsRun<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//当程序退出时触发</span>
        <span class="token keyword">base</span><span class="token punctuation">.</span><span class="token function">OnAppExit</span><span class="token punctuation">(</span>IsRun<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnAppRun</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">bool</span></span> IsRun<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//当程序启动时触发</span>
        <span class="token keyword">base</span><span class="token punctuation">.</span><span class="token function">OnAppRun</span><span class="token punctuation">(</span>IsRun<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function w(y,f){const a=l("font");return o(),c("div",null,[n("div",r,[k,n("ul",null,[n("li",null,[t(a,{color:"red"},{default:p(()=>[s("★使用该启动器，需加载Nuget:NuGet\\Install-Package Vampirewal.Core.MiniApi -Version 1.0.0.2")]),_:1})]),d,v,m,n("li",null,[s("该WebApi的实现方式是使用的"),t(a,{color:"red"},{default:p(()=>[s(" Swashbuckle.AspNetCore")]),_:1}),s("来实现")]),b])]),g])}const h=e(u,[["render",w],["__file","VampirewalMiniApiBootStartup.html.vue"]]);export{h as default};
