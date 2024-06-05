import{_ as o,c as a,o as e,O as t}from"./chunks/framework.a45091be.js";const m=JSON.parse('{"title":"cookie&local","description":"","frontmatter":{},"headers":[],"relativePath":"pages/jsBase/cookieLocal.md","lastUpdated":1708422651000}'),l={name:"pages/jsBase/cookieLocal.md"},s=t(`<h1 id="cookie-local" tabindex="-1">cookie&amp;local <a class="header-anchor" href="#cookie-local" aria-label="Permalink to &quot;cookie&amp;local&quot;">​</a></h1><h2 id="cookie的介绍" tabindex="-1">cookie的介绍 <a class="header-anchor" href="#cookie的介绍" aria-label="Permalink to &quot;cookie的介绍&quot;">​</a></h2><ul><li>cookie最初的设计是来弥补http设计的不足，因为http是无状态的协议，同一用户2次访问一个页面，服务器无法识别，所以才引入cookie</li><li>cookie是存储在客户端中，每次访问,就会自动携带上cookie信息</li><li>cookie是不可以跨域的，每个cookie都会绑定单一的域名（绑定域名下的子域都是有效的），无法在别的域名下获取使用，同域名不同端口也是允许共享使用的。</li></ul><h2 id="cookie访问限制" tabindex="-1">cookie访问限制 <a class="header-anchor" href="#cookie访问限制" aria-label="Permalink to &quot;cookie访问限制&quot;">​</a></h2><ul><li>domain<code>域</code>:在默认情况下domain是当前域名</li><li>path：默认情况下的是根<code>/</code></li><li>过期时间：默认情况下是会话级别的，浏览器关闭后就删除了</li><li>cookie大小4kb</li></ul><h2 id="cookie-domain" tabindex="-1">cookie-domain <a class="header-anchor" href="#cookie-domain" aria-label="Permalink to &quot;cookie-domain&quot;">​</a></h2><ul><li>比如在<code>www.baidu.com/hulei/applyfor</code> 设置cookie 默认在<code>domain=www.baidu.com</code>域下，<code>aa.baidu.com</code>域下是无法访问的</li><li>如果domain设置为<code>.baidu.com</code> ,<code>aa.baidu.com</code>域可以访问</li></ul><h2 id="cookie-path" tabindex="-1">cookie-path <a class="header-anchor" href="#cookie-path" aria-label="Permalink to &quot;cookie-path&quot;">​</a></h2><ul><li>比如在<code>www.baidu.com/hulei/applyfor</code> 设置cookie 默认在<code>path=/</code>,<code>www.baidu.com</code>域下都可以访问</li><li>如果path设置为<code>/applyfor</code>,只有在<code>applyfor以及applyfor/xx</code>后的才能访问</li></ul><h2 id="cookie-属性" tabindex="-1">cookie-属性 <a class="header-anchor" href="#cookie-属性" aria-label="Permalink to &quot;cookie-属性&quot;">​</a></h2><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td>name=value</td><td>设置值</td></tr><tr><td>domain</td><td>指定 cookie 所属域名，默认是当前域名</td></tr><tr><td>path</td><td>指定 cookie 在哪个路径（路由）下生效，默认是 &#39;/&#39;。如果设置为 /abc，则只有 /abc 下的路由可以访问到该 cookie，如：/abc/read。</td></tr><tr><td>expires</td><td>过期时间，默认不设置关闭浏览器删除</td></tr><tr><td>max-age</td><td>cookie 有效期，单位秒，优先级高于 expires</td></tr><tr><td>HttpOnly</td><td>如果给某个 cookie 设置了 httpOnly 属性，则无法通过 JS 脚本 读写该 cookie 的信息，但还是能通过 Application 中手动修 cookie，所以只是在一定程度上可以防止 CSRF 攻击，不是绝对的安全</td></tr><tr><td>secure</td><td>该 cookie 是否仅被使用安全协议传输。安全协议有 HTTPS，SSL等，在网络上传输数据之前先将数据加密。默认为false。当 secure 值为 true 时，cookie 在 HTTP 中是无效的。</td></tr></tbody></table><h2 id="localstorage、sessionstorage" tabindex="-1">localStorage、sessionStorage <a class="header-anchor" href="#localstorage、sessionstorage" aria-label="Permalink to &quot;localStorage、sessionStorage&quot;">​</a></h2><ul><li>localStorage 只要在相同的协议、相同的主机名、相同的端口下，就能读取/修改到同一份 localStorage 数据。5M(不需要在同一个窗口)</li><li>sessionStorage 比 localStorage 更严苛一点，除了协议、主机名、端口外，还要求在同一窗口（也就是浏览器的标签页）5M</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 打开一个新tab标签，加上opener可以复制sessionStorage，修改不会共享</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./other.html</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">target</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">_blank</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">opener</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  打开新页面</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,14),c=[s];function i(n,r,d,p,h,k){return e(),a("div",null,c)}const y=o(l,[["render",i]]);export{m as __pageData,y as default};
