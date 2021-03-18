---
title: Webpack 基础篇
date: 2021-03-18
tags:
  - HTML
categories:
  - HTML
---

### 图片中 title 和 alt 区别？

    通常当鼠标滑动到元素上的时候显示
    alt 是 的特有属性，是图片内容的等价描述，用于图片无法加载时显示、读屏器阅读图片。
    可提图片高可访问性，除了纯装饰图片外都必须设置有意义的值，搜索引擎会重点分析。

### Html5 有哪些新特性、移除了哪些元素？

    新增元素：
        绘画canvas
        用于媒介回放的video 和 audio 元素
        本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失
        sessionStorage 的数据在浏览器关闭后自动删除
        语义化更好的内容元素，比如 article 、footer、header、nav、section
        表单控件 ，calendar 、 date 、 time 、 email 、 url 、 search
        新的技术 webworker 、 websocket 、 Geolocation
    移除的元素：
        纯表现的元素：basefont 、 big 、 center 、 font 、 s 、 strike 、 tt 、 u
        对可用性产生负面影响的元素：frame 、 frameset 、 noframes
    支持 HTML5 新标签：
        IE8/IE7/IE6 支持通过 document.createElement 方法产生的标签
        可以利用这一特性让这些浏览器支持 HTML5 新标签
        浏览器支持新标签后，还需要添加标签默认的样式

### 浏览器是怎么对 Html5 的离线储存资源进行管理和加载的呢？

    如何使用：
        页面头部像下面一样加入一个 manifest 的属性；在 cache.manifest 文件的编写离线存储的资源在离线状态时，操作 window.applicationCache 进行需求实现在线的情况下，浏览器发现 html 头部有 manifest 属性，它会请求 manifest 文件，如果是第一次访问 app ，那么浏览器就会根据manifest文件的内容下载相应的资源并且进行离线存储。
    如果已经访问过 app 并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的manifest 文件与旧的 manifest 文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。

### iframe 有那些缺点？

    iframe 会阻塞主页面的 Onload 事件搜索引擎的检索程序无法解读这种页面，不利于 SEO
    iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载
    使用 iframe 之前需要考虑这两个缺点。如果需要使用 iframe ，最好是通过javascript 动态给 iframe 添加 src 属性值，这样可以绕开以上两个问题

### HTML W3C 的标准

    标签闭合、标签小写、不乱嵌套、使用外链 css 和 js 、结构行为表现的分离

### Doctype 作用? 严格模式与混杂模式如何区分？它们有何意义?

    <!DOCTYPE> 声明位于文档中的最前面，处于 html 标签之前。告知浏览器的解析器， 用什么文档类型、规范来解析这个文档
    严格模式的排版和 JS 运作模式是 以该浏览器支持的最高标准运行
    在混杂模式中，页面以宽松的向后兼容的方式显示。
    模拟老式浏览器的行为以防止站点无法工作DOCTYPE 不存在或格式不正确会导致文档以混杂模式呈现

### HTML 全局属性(global attribute)有哪些

    class :为元素设置类标识
    data-* : 为元素增加自定义属性
    draggable : 设置元素是否可拖拽
    id : 元素 id ，文档内唯一
    lang : 元素内容的的语言
    style : 行内 css 样式
    title : 元素相关的建议信息

### viewport 的 content 属性作用

    width viewport的宽度[device-width | pixel_value]width如果直接设置pixel_value数值，大部分的安卓手机不支持，但是ios支持；
      height – viewport 的高度 （范围从 223 到 10,000 ）
     user-scalable [yes | no]是否允许缩放
      initial-scale [数值] 初始化比例（范围从 > 0 到 10）
    minimum-scale [数值] 允许缩放的最小比例
     maximum-scale [数值] 允许缩放的最大比例
    target-densitydpi 值有以下（一般推荐设置中等响度密度或者低像素密度，后者设置具体的值dpi_value，另外webkit内核已不准备再支持此属性）
    -- dpi_value 一般是70-400//没英寸像素点的个数
     -- device-dpi设备默认像素密度
     -- high-dpi 高像素密度
     -- medium-dpi 中等像素密度
    -- low-dpi 低像素密度

### 附带问题：怎样处理 移动端 1px 被 渲染成 2px 问题?局部处理：

    mate 标签中的 viewport 属性 ， initial-scale 设置为 1
    rem 按照设计稿标准走，外加利用transfrome 的 scale(0.5) 缩小一倍即可；
    全局处理：
        mate 标签中的 viewport 属性 ， initial-scale 设置为 0.5
        rem 按照设计稿标准走即可

### meta 相关

    <meta charset=’utf-8′> <!--声明文档使用的字符编码-->
    <meta http-equiv=”X-UA-Compatible” content=”IE=edge,chrome=1″/> <!--优先使用指定浏览器使用特定的文档模式-->
    <meta name=”description” content=”不超过150个字符”/> <!--页面描述-->
    <meta name=”keywords” content=””/> <!-- 页面关键词-->
    <meta name=”author” content=”name, email@gmail.com”/> <!--网页作者-->
    <meta name=”robots” content=”index,follow”/> <!--搜索引擎抓取-->
    <meta name=”viewport” content=”initial-scale=1, maximum-scale=3, minimum-sc<meta name=”apple-mobile-web-app-title” content=”标题”> <!--iOS 设备 begin-->
    <meta name=”apple-mobile-web-app-capable” content=”yes”/> <!--添加到主屏后的标是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏-->
    <meta name=”apple-mobile-web-app-status-bar-style” content=”black”/>
    <meta name=”renderer” content=”webkit”> <!-- 启用360浏览器的极速模式(webkit)-->
    <meta http-equiv=”X-UA-Compatible” content=”IE=edge”> <!--避免IE使用兼容模式-->
    <meta http-equiv=”Cache-Control” content=”no-siteapp” /> <!--不让百度转码-->
    <meta name=”HandheldFriendly” content=”true”> <!--针对手持设备优化，主要是针对一些老的不识别viewport的浏览器-->
    <meta name=”MobileOptimized” content=”320″> <!--微软的老式浏览器-->
    <meta name=”screen-orientation” content=”portrait”> <!--uc强制竖屏-->
    <meta name=”x5-orientation” content=”portrait”> <!--QQ强制竖屏-->
    <meta name=”full-screen” content=”yes”> <!--UC强制全屏-->
    <meta name=”x5-fullscreen” content=”true”> <!--QQ强制全屏-->
    <meta name=”browsermode” content=”application”> <!--UC应用模式-->
    <meta name=”x5-page-mode” content=”app”> <!-- QQ应用模式-->
    <meta name=”msapplication-tap-highlight” content=”no”> <!--windows phone设置页面不缓存-->
    <meta http-equiv=”pragma” content=”no-cache”>
    <meta http-equiv=”cache-control” content=”no-cache”>
    <meta http-equiv=”expires” content=”0″>

### div+css 的布局较 table 布局有什么优点

    改版的时候更方便 只要改 css 文件。
    页面加载速度更快、结构化清晰、页面显示简洁。
    表现与结构相分离。
    易于优化（ seo ）搜索引擎更友好，排名更容易靠

### src 与 href 的区别

    src 用于替换当前元素，href用于在当前文档和引用资源之间确立联系。
    src 是 source 的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src 资源时会将其指向的资源下载并应用到文档内，例如 js 脚本，img 图片和 frame 等元素

### 如何实现浏览器内多个标签页之间的通信?

    WebSocket、SharedWorker；  也可以调用localstorge、cookies等本地存储方式；
    localstorge另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，  我们通过监听事件，控制它的值来进行页面信息通信；
    注意quirks：Safari 在无痕模式下设置localstorge值时会抛出 QuotaExceededError 的异常；
