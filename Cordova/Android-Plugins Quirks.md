###1. Cordova_weibo 在 Android7.0 版本及以上闪退

> 在main目录下新建jniLibs(有就不要建了)
> 然后将下载的weibo github 包解压后得到的so目录下的所有文件夹和文件都复制进去(需要保留极光推送的文件)

[link](https://github.com/sinaweibosdk/weibo_android_sdk/issues/333)

### 2. Cordova_weibo 微博分享失败, error: 21324 unknot client id

> 通常是因为WEIBO_APP_ID.length >= 10, 转换科学技术法后客户端识别不了
>
> 修改 WeiboSDKPlugin.java 中 APP_KEY 为字符串

```java
APP_KEY = webView.getPreferences().getString(WEBIO_APP_ID, ""); // line 58

APP_KEY = "4281440764";
```

[link](https://github.com/iVanPan/cordova_weibo/issues/58)

