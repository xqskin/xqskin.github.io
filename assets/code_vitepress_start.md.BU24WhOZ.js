import{_ as s,c as n,a3 as p,o as e}from"./chunks/framework.DtMx7FFi.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"code/vitepress/start.md","filePath":"code/vitepress/start.md","lastUpdated":1734517183000}'),t={name:"code/vitepress/start.md"};function i(l,a,o,c,d,r){return e(),n("div",null,a[0]||(a[0]=[p(`<h2 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-label="Permalink to &quot;准备&quot;">​</a></h2><ul><li>nodejs 18.14+</li></ul><h2 id="安装-pnpm" tabindex="-1">安装 pnpm <a class="header-anchor" href="#安装-pnpm" aria-label="Permalink to &quot;安装 pnpm&quot;">​</a></h2><p><code>npm install -g pnpm</code></p><h3 id="查询-pnpm源" tabindex="-1">查询 pnpm源 <a class="header-anchor" href="#查询-pnpm源" aria-label="Permalink to &quot;查询 pnpm源&quot;">​</a></h3><p><code>pnpm get registry</code></p><h3 id="设置pnpm淘宝源" tabindex="-1">设置pnpm淘宝源 <a class="header-anchor" href="#设置pnpm淘宝源" aria-label="Permalink to &quot;设置pnpm淘宝源&quot;">​</a></h3><p><code>pnpm config set registry https://registry.npmmirror.com/</code></p><h2 id="下载vitepress" tabindex="-1">下载vitepress <a class="header-anchor" href="#下载vitepress" aria-label="Permalink to &quot;下载vitepress&quot;">​</a></h2><p><code>pnpm add -D vitepress</code></p><h2 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to &quot;初始化&quot;">​</a></h2><p><code>pnpm vitepress init</code></p><p><img src="http://bed.wpshe.vip/202408271637359.png" alt="image-20240827163725324"></p><h3 id="文件目录" tabindex="-1">文件目录 <a class="header-anchor" href="#文件目录" aria-label="Permalink to &quot;文件目录&quot;">​</a></h3><p><img src="http://bed.wpshe.vip/202408271642061.png" alt="image-20240827164217034"></p><h2 id="启动项目" tabindex="-1">启动项目 <a class="header-anchor" href="#启动项目" aria-label="Permalink to &quot;启动项目&quot;">​</a></h2><p><code>pnpm run docs:dev</code></p><p><img src="http://bed.wpshe.vip/202408271640000.png" alt="image-20240827164022975"></p><h3 id="前端预览" tabindex="-1">前端预览 <a class="header-anchor" href="#前端预览" aria-label="Permalink to &quot;前端预览&quot;">​</a></h3><p><img src="http://bed.wpshe.vip/202408271640825.png" alt="image-20240827164051771"></p><h2 id="首页装饰" tabindex="-1">首页装饰 <a class="header-anchor" href="#首页装饰" aria-label="Permalink to &quot;首页装饰&quot;">​</a></h2><h3 id="定义favcion" tabindex="-1">定义favcion() <a class="header-anchor" href="#定义favcion" aria-label="Permalink to &quot;定义favcion()&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  head: [[&quot;link&quot;, { rel: &quot;icon&quot;, href: &quot;/logo.svg&quot; }]],</span></span></code></pre></div><h3 id="增加footer" tabindex="-1">增加footer <a class="header-anchor" href="#增加footer" aria-label="Permalink to &quot;增加footer&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> footer:{copyright:&quot;Copyright@ 2024 xqskin.com&quot;},</span></span></code></pre></div><h3 id="定义logo" tabindex="-1">定义logo <a class="header-anchor" href="#定义logo" aria-label="Permalink to &quot;定义logo&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> logo: &#39;/logo.svg&#39;,</span></span></code></pre></div><h3 id="定义首页大图-index-md" tabindex="-1">定义首页大图（index.md） <a class="header-anchor" href="#定义首页大图-index-md" aria-label="Permalink to &quot;定义首页大图（index.md）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>image:</span></span>
<span class="line"><span>    src: /background.svg</span></span>
<span class="line"><span>    alt: 背景图</span></span></code></pre></div><h3 id="增加二级菜单" tabindex="-1">增加二级菜单 <a class="header-anchor" href="#增加二级菜单" aria-label="Permalink to &quot;增加二级菜单&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  nav: [</span></span>
<span class="line"><span>      { text: &#39;Home&#39;, link: &#39;/&#39; },  </span></span>
<span class="line"><span>      { text: &#39;Test&#39;, </span></span>
<span class="line"><span>          items:[ </span></span>
<span class="line"><span>            { text: &#39;front-end&#39;, link: &#39;/front-end/vitepress/vitepress-start.md&#39; },</span></span>
<span class="line"><span>            { text: &#39;backend&#39;, link: &#39;/backend/api&#39; }</span></span>
<span class="line"><span>          ]</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      ],</span></span></code></pre></div><h3 id="增加搜索" tabindex="-1">增加搜索 <a class="header-anchor" href="#增加搜索" aria-label="Permalink to &quot;增加搜索&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 设置搜索框的样式</span></span>
<span class="line"><span>search: {</span></span>
<span class="line"><span>    provider: &quot;local&quot;,</span></span>
<span class="line"><span>    options: {</span></span>
<span class="line"><span>    translations: {</span></span>
<span class="line"><span>        button: {</span></span>
<span class="line"><span>        buttonText: &quot;搜索文档&quot;,</span></span>
<span class="line"><span>        buttonAriaLabel: &quot;搜索文档&quot;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        modal: {</span></span>
<span class="line"><span>            noResultsText: &quot;无法找到相关结果&quot;,</span></span>
<span class="line"><span>            resetButtonTitle: &quot;清除查询条件&quot;,</span></span>
<span class="line"><span>            footer: {</span></span>
<span class="line"><span>                selectText: &quot;选择&quot;,</span></span>
<span class="line"><span>                navigateText: &quot;切换&quot;,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>},</span></span></code></pre></div><h2 id="内页两栏布局" tabindex="-1">内页两栏布局 <a class="header-anchor" href="#内页两栏布局" aria-label="Permalink to &quot;内页两栏布局&quot;">​</a></h2><h3 id="增加themeconfig设置" tabindex="-1">增加themeConfig设置 <a class="header-anchor" href="#增加themeconfig设置" aria-label="Permalink to &quot;增加themeConfig设置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sidebar: false, // 关闭侧边栏</span></span>
<span class="line"><span>aside: &quot;left&quot;, // 设置右侧侧边栏在左侧显示</span></span></code></pre></div><h3 id="增加css" tabindex="-1">增加css <a class="header-anchor" href="#增加css" aria-label="Permalink to &quot;增加css&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* 自定义侧边栏在最左边，右边撑满宽度 */</span></span>
<span class="line"><span>.VPDoc .container {</span></span>
<span class="line"><span>  margin: 0 !important;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>@media (min-width: 960px) {</span></span>
<span class="line"><span>  .VPDoc:not(.has-sidebar) .content {</span></span>
<span class="line"><span>    max-width: 1552px !important;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.VPDoc.has-aside .content-container {</span></span>
<span class="line"><span>  max-width: 1488px !important;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>@media (min-width: 960px) {</span></span>
<span class="line"><span>  .VPDoc:not(.has-sidebar) .container {</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    justify-content: center;</span></span>
<span class="line"><span>    max-width: 1562px !important;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.aside-container {</span></span>
<span class="line"><span>  position: fixed;</span></span>
<span class="line"><span>  top: 0;</span></span>
<span class="line"><span>  padding-top: calc(</span></span>
<span class="line"><span>    var(--vp-nav-height) + var(--vp-layout-top-height, 0px) +</span></span>
<span class="line"><span>      var(--vp-doc-top-height, 0px) + 10px</span></span>
<span class="line"><span>  ) !important;</span></span>
<span class="line"><span>  width: 224px;</span></span>
<span class="line"><span>  height: 100vh;</span></span>
<span class="line"><span>  overflow-x: hidden;</span></span>
<span class="line"><span>  overflow-y: auto;</span></span>
<span class="line"><span>  scrollbar-width: none;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 自定义h2的间距 */</span></span>
<span class="line"><span>.vp-doc h2 {</span></span>
<span class="line"><span>  margin: 0px 0 16px;</span></span>
<span class="line"><span>  padding-top: 24px;</span></span>
<span class="line"><span>  border: none;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="修改内页目录文字" tabindex="-1">修改内页目录文字 <a class="header-anchor" href="#修改内页目录文字" aria-label="Permalink to &quot;修改内页目录文字&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>outlineTitle: &quot;文章目录&quot;,</span></span>
<span class="line"><span>outline: [2,6],</span></span></code></pre></div><h2 id="生成静态网站" tabindex="-1">生成静态网站 <a class="header-anchor" href="#生成静态网站" aria-label="Permalink to &quot;生成静态网站&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm run docs:build</span></span></code></pre></div><h2 id="部署到二级目录" tabindex="-1">部署到二级目录 <a class="header-anchor" href="#部署到二级目录" aria-label="Permalink to &quot;部署到二级目录&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  base:&#39;/blog/&#39;,//仓库名字或二级目录名</span></span></code></pre></div>`,44)]))}const b=s(t,[["render",i]]);export{u as __pageData,b as default};
