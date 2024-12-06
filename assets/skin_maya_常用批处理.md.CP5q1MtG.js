import{_ as i,c as a,a3 as h,o as n}from"./chunks/framework.DgyBiAMx.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"skin/maya/常用批处理.md","filePath":"skin/maya/常用批处理.md","lastUpdated":1733458247000}'),k={name:"skin/maya/常用批处理.md"};function t(l,s,p,e,E,r){return n(),a("div",null,s[0]||(s[0]=[h(`<h3 id="工具架复制" tabindex="-1">工具架复制 <a class="header-anchor" href="#工具架复制" aria-label="Permalink to &quot;工具架复制&quot;">​</a></h3><div class="language-bat vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@echo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> off</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> source_version</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2020</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /p source_version</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请输入源Maya版本号（如2020）[默认值为2020]：&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> source_version</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2020</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> target_versions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2018,2019,2022</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /p target_versions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请输入目标Maya版本号（如2018,2019,2022，多个版本用逗号分隔）[默认值为2018,2019,2022]：&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> target_versions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2018,2019,2022</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">echo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> %%v</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (%target_versions%) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">copy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /y </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%USERPROFILE%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\Documents\\maya\\</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%source_version%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\prefs\\shelves\\shelf_Custom.mel&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%USERPROFILE%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\Documents\\maya\\</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%%v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\prefs\\shelves&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">copy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /y </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%USERPROFILE%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\Documents\\maya\\</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%source_version%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\prefs\\shelves\\shelf_dptools.mel&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%USERPROFILE%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\Documents\\maya\\</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%%v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\prefs\\shelves&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">copy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /y </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%USERPROFILE%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\Documents\\maya\\</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%source_version%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\prefs\\shelves\\shelf_RigMel.mel&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%USERPROFILE%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\Documents\\maya\\</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%%v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\prefs\\shelves&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">copy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /y </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%USERPROFILE%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\Documents\\maya\\</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%source_version%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\prefs\\shelves\\shelf_bb.mel&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%USERPROFILE%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\Documents\\maya\\</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%%v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\prefs\\shelves&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">copy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /y </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%USERPROFILE%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\Documents\\maya\\</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%source_version%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\prefs\\shelves\\shelf_H74.mel&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%USERPROFILE%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\Documents\\maya\\</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%%v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\prefs\\shelves&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">copy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /y </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%USERPROFILE%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\Documents\\maya\\</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%source_version%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\prefs\\shelves\\shelf_Adv6.mel&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%USERPROFILE%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\Documents\\maya\\</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%%v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\prefs\\shelves&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">echo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 复制完成。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pause</span></span></code></pre></div>`,2)]))}const d=i(k,[["render",t]]);export{y as __pageData,d as default};
