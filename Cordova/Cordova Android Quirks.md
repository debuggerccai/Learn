### 1、启动前黑屏

**1)创建styles.xml文件——注意：文件名固定不能变，因为是android特有文件名**

`platforms\android\app\src\main\res\values\styles.xml`

```xml
<resources>
    <style name="WelcomeStyle" parent="@android:style/Theme.DeviceDefault.NoActionBar">
        <item name="android:windowBackground">@drawable/screen</item>
        <item name="android:windowFullscreen">false</item>
    </style>
    <style name="Appwelcome" parent="android:Theme.Translucent.NoTitleBar.Fullscreen">
    </style>
</resources>
```

> a. 创建一个主题，修改其背景为透明，或者和启动屏图片一致
>
> b. AndroidManifest.xml文件，把主题改为上述主题。

**2) 打开config.xml，添加配置项：**

```xml
<platform name="android">
     <edit-config file="AndroidManifest.xml" mode="merge" target="/manifest/application/activity[@android:name='MainActivity']">
            <activity android:theme="@style/WelcomeStyle" />
     </edit-config>
</platform>
```

在widget标签中添加`xmlns:android="http://schemas.android.com/apk/res/android"`

```xml
<widget xmlns:android="http://schemas.android.com/apk/res/android"> 
```

运行`ionic cordova build android`，没有错误，能正常生成。此时打开`platforms\android\app\src\main\AndroidManifest.xml`

[详细](https://www.jianshu.com/p/87efc5e396c3)

---

### 3、启动页结束短暂白屏

**在config.xml中添加配置项**

```xml
<preference name="SplashScreenDelay" value="10000" />
<preference name="ShowSplashScreenSpinner" value="false" />
<preference name="SplashMaintainAspectRatio" value="false" />
<preference name="SplashShowOnlyFirstTime" value="false" />
<preference name="SplashScreenHide" value="true" />
<preference name="AutoHideSplashScreen" value="false" />
<preference name="FadeSplashScreen" value="false" />
```

**vue项目 main.js 添加 **`navigator.splashscreen.hide()`

```javascript
// 延时关闭启动页, 避免短暂白屏
setTimeout(() => {
	navigator.splashscreen.hide()
}, 1000)
```



