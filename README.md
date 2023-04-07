# remove-ads-chrome-extension

![](https://img.shields.io/static/v1?label=version&message=v1.0.0&color=yellow&style=social&logo=appveyor)
![](https://img.shields.io/badge/manifest%E7%89%88%E6%9C%AC-v3-red)
![](https://img.shields.io/badge/%E6%94%AF%E6%8C%81%E6%B5%8F%E8%A7%88%E5%99%A8-chrome-green)

去ys900电影广告插件，使用chrome-extension manifest v3架构


## 架构目录
```javascript
Project
│  main.js
│  manifest.json    // 版本，启动配置
│  README.md    // 说明文档
│  service-worker.js    // backgroundjs
│
├─icons     // 应用图标, 16*16, 32*32, ..., 128*128
│      ad.png   
│      ad1.png  
│      ad2.png
│      ad3.png
│      ad4.png
│
├─lib   // 第三方插件
│      jquery-3.6.4.min.js
│
├─options
│      options.css
│      options.html
│      options.js
│
├─popup     //弹出窗口
│      popup.css
│      popup.html
│      popup.js
│
└─scripts   // content脚本
        ys900.js
```