import{_ as n,o as s,c as e,aR as t}from"./chunks/framework.DI3wswNW.js";const u=JSON.parse('{"title":"fe-handbook","description":"","frontmatter":{},"headers":[],"relativePath":"README.md","filePath":"README.md"}'),p={name:"README.md"};function i(l,a,r,o,c,d){return s(),e("div",null,[...a[0]||(a[0]=[t(`<div align="center"><h1 id="fe-handbook" tabindex="-1">fe-handbook <a class="header-anchor" href="#fe-handbook" aria-label="Permalink to &quot;fe-handbook&quot;">​</a></h1><p><strong>LLM 大模型 · 后端 · 前端 技术知识手册</strong></p><p>基于 <a href="https://vitepress.dev/" target="_blank" rel="noreferrer">VitePress</a> 构建，全部内容使用 Markdown 编写与维护。</p><p><a href="https://fe-hl.github.io/handbook/" target="_blank" rel="noreferrer">📖 在线阅读</a></p></div><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>fe-handbook 是一份长期维护的个人技术笔记站，沉淀日常学习、源码阅读与项目实战中的知识点。 内容偏重&quot;原理 + 可运行示例&quot;，而非 API 字典，适合系统复习与面试准备。</p><p>三个主要方向：</p><table tabindex="0"><thead><tr><th>方向</th><th>覆盖内容</th></tr></thead><tbody><tr><td><strong>LLM 大模型</strong></td><td>Python、NumPy、Pandas、Matplotlib、机器学习、深度学习、PyTorch、Prompt 工程、LangChain、LangGraph、FastAPI</td></tr><tr><td><strong>后端</strong></td><td>Java SE、Spring / SpringBoot / SpringMVC、SpringCloud、MyBatis(Plus)、Redis、数据库、RabbitMQ、Nacos、Seata、Sentinel、网关、Docker、Node.js、Nest.js</td></tr><tr><td><strong>前端</strong></td><td>JavaScript 基础与原理、TypeScript、Vue2/3、Vuex、React、Redux、HTML/CSS、Webpack / Vite、SSR、微前端、浏览器与 HTTP</td></tr></tbody></table><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fe-handbook</span></span>
<span class="line"><span>├── .vitepress/        # VitePress 配置与自定义主题</span></span>
<span class="line"><span>│   ├── config.ts      # 站点配置：导航、Markdown 插件、构建选项</span></span>
<span class="line"><span>│   ├── sidebar.ts     # 侧边栏分组配置</span></span>
<span class="line"><span>│   └── theme/         # 主题扩展、全局组件注册</span></span>
<span class="line"><span>├── pages/             # 全部文档内容（按技术方向分目录）</span></span>
<span class="line"><span>│   ├── html-css/      # HTML / CSS 基础与布局</span></span>
<span class="line"><span>│   ├── javascript/    # JavaScript 语言与运行机制</span></span>
<span class="line"><span>│   ├── vue/ react/    # 前端框架原理</span></span>
<span class="line"><span>│   ├── node/ flutter/ # Node 服务端与跨端</span></span>
<span class="line"><span>│   ├── engineering/   # 工程化：构建、微前端、SSR、Git、调试</span></span>
<span class="line"><span>│   ├── network/       # 网络与安全：HTTP、XSS/CSRF、Nginx、Linux</span></span>
<span class="line"><span>│   ├── algorithm/     # 算法与数据结构（含 challenge 每日打卡）</span></span>
<span class="line"><span>│   ├── backend/       # Java / Spring / 数据库 / 中间件</span></span>
<span class="line"><span>│   ├── ai/            # Python、机器学习、大模型应用</span></span>
<span class="line"><span>│   ├── blockchain/    # 区块链与智能合约</span></span>
<span class="line"><span>│   ├── practice/      # 实战复盘与轮子沉淀</span></span>
<span class="line"><span>│   └── interview/     # 面试专栏（含 plan 30 天计划）</span></span>
<span class="line"><span>├── code/              # 配套源码示例：Vue、React、Redux、Webpack 等手写实现</span></span>
<span class="line"><span>├── examples/          # 文档内嵌的可交互 Vue 演示组件</span></span>
<span class="line"><span>├── components/        # 公共 Vue 组件</span></span>
<span class="line"><span>├── plugins/           # 自定义 markdown-it 插件（代码块、容器等）</span></span>
<span class="line"><span>├── styles/            # 全局样式（SCSS）</span></span>
<span class="line"><span>├── images/ public/    # 图片等静态资源</span></span>
<span class="line"><span>├── document/          # 构建产物</span></span>
<span class="line"><span>└── index.md           # 站点首页</span></span></code></pre></div><h2 id="技术栈" tabindex="-1">技术栈 <a class="header-anchor" href="#技术栈" aria-label="Permalink to &quot;技术栈&quot;">​</a></h2><ul><li><strong>文档框架</strong>：VitePress 1.x + Vite</li><li><strong>渲染增强</strong>：markdown-it、markdown-it-container、Prism.js</li><li><strong>组件与交互</strong>：Vue 3、Element Plus、@vueuse/core</li><li><strong>样式</strong>：SCSS、PostCSS、animate.css</li></ul><h2 id="文档约定" tabindex="-1">文档约定 <a class="header-anchor" href="#文档约定" aria-label="Permalink to &quot;文档约定&quot;">​</a></h2><ul><li>新增文章放入 <code>pages/</code> 对应方向的子目录，并在 <a href=".vitepress/sidebar.ts"><code>.vitepress/sidebar.ts</code></a> 中登记入口</li><li>目录与文件名统一使用小写 kebab-case（如 <code>html-css/box-model.md</code>）</li><li>图表统一使用纯文本 ASCII 绘制，不引入图表渲染插件</li><li>需要交互演示时，在 <code>examples/</code> 下新建 Vue 组件后在 Markdown 中引用</li></ul><h2 id="license" tabindex="-1">License <a class="header-anchor" href="#license" aria-label="Permalink to &quot;License&quot;">​</a></h2><p><a href="./LICENSE.html">MIT</a></p>`,13)])])}const b=n(p,[["render",i]]);export{u as __pageData,b as default};
