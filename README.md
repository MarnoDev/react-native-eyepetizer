>**版权声明：本文为Marno原创，转载必须在明确位置注明出处！**
>**转载地址：<https://gold.xitu.io/post/589e8580b123db16a3d0dd3a>**
>**注：原创不易，欢迎【赞赏】和【点赞】**

******

**不想看我废话的直接github看代码 ，仓库地址：[react-native-eyepetizer](https://github.com/MarnoDev/react-native-eyepetizer)**

## 一、前言
> 前段时间写了一篇关于React Native入门的教程[《给所有开发者的React Native详细入门指南（第一阶段）》](http://www.jianshu.com/p/fa0874be0827)，总结了一下我在学习React Native过程中的一些心得，短短几天全网阅读量超过3W+（多个阅读渠道粗略总计），很多人加我微信问我还有没有后续的教程，肯定是有的！而且名字我都想好了，不出意外的应该会叫**《给所有开发者的React Native详细入门指南（第二阶段）》**（额.....），目前基本大纲已经完成了。因为入门还是比较简单的，越往后学可能要掌握的东西就越多。再第二阶段的学习中，我真是没少踩坑，我也都记录了下来，后面的文章中会更新的。

## 二、回答一些问题
**1.教程到底分了几个阶段！**
> 很多人微信问我这个，目前只分为四个阶段，可以看我github上HelloRN工程里的思维导图，那个就是基本大纲。教程结构还在不断调整，因为我也处于学习的过程中。在建立完善知识体系的路上肯定是少不了反复调整的。也借鉴了很多前辈的经验！再次说声谢谢！（献上膝盖好了！）

**2. React Native和Weex怎么选？**
> 这个是被很多人问及的第二个问题！我简单说下我的看法，两个都是用JS实现Native功能的，RN来自Facebook，Weex来自阿里巴巴。嗯，那就选RN好了！为啥？！翻q出去看下medium，twitter有就知道了！因为那里几乎没有Weex的身影。可能是Weex还没有推到国外去？不过技术没有对错，学好哪一样都是本事！

**3.为什么单独编写一个项目，和《第一阶段》文中的demo一样吗？**
> 教程中的demo揉和了很多学习过程中编写的小的demo，虽然进行的了分包管理，但是看起来还是比较乱。所以单独编写一个工程进行维护，该demo目前仅实现了开眼3.1.2的大约30%的功能（你问我其余的70%呢？我这不是还没学会的嘛）！

**4. 加你好友聊天为什么不回我**
> 从最开始公布我的个人微信号，我只是觉得搞技术需要多交流，太闭塞了感觉技术进步有局限。但是很多人加了我之后就直接问我问题。实在不好意思，我不是什么客服。技术交流可以，遇到我感兴趣的技术点我会和你一起讨论一下，但是我也有很多不会的东西，我虚心承认，所以也请各位大神不必加了我以后就好像来面试我一样，直接抛一个问题来为难我。

## 三、前面都是废话，看下面↓↓↓


## 四、截图预览

|精选|个人中心|
|:--:|:--:|
|![](http://upload-images.jianshu.io/upload_images/960283-583c7792d46cc6ab.gif?imageMogr2/auto-orient/strip)|![](http://upload-images.jianshu.io/upload_images/960283-36ece9d8eef26323.gif?imageMogr2/auto-orient/strip)|

## 五、主要技术框架
**目前用到的**
- **"native-base": "^2.0.5"**（综合框架）
- **"react-native-banner": "^0.1.0"**（banner广告，基于react-native-swiper）
- **"react-native-parallax-scroll-view": "^0.19.0"** (带视差的ScrollView)
- **"react-native-tab-navigator": "^0.3.3"**（底部导航）
- **"react-native-vector-icons": "^4.0.0"**（图标，其实没怎么用到）
- **"react-native-video": "^1.0.0"**（播放视频）

**以后会用到的**
- **"react-native-storage": "^0.1.5"**（数据存储）
- **"react-native-swiper": "^1.5.4"**（引导页）
- **"react-native-easy-toast": "^1.0.5"**(界面弱提示)

## 六、仓库地址：[react-native-eyepetizer](https://github.com/MarnoDev/react-native-eyepetizer)
> 如何运行本项目？</br>第一步：【npm install】</br>第二步：【react-native-link】</br>第三步：【react-native run-android】</br>**如果有什么问题可以github直接提issue给我，或者留言给我**

## 七、项目心得
> 其实编写这个demo的过程中还是总结了一些经验的，后续也会写成文章和大家一起分享。比如说图片的使用，最好用一个入口类进行统一管理；还比如样式变量的命名，最好所有的地方都使用**styles**命名......当然还有一些其他的心得，后续文章中见。也希望如果你有好的心得，可以评论回复我一下！谢谢！

## 八、声明
-  所用到接口均来自网络，请不要乱用！尊重原创版权

******
>## 关于我
> **1.邮箱：**<marnodev@163.com></br>**2.简书：**<http://www.jianshu.com/u/174a09ba6c25></br>**3.掘金：**<https://gold.xitu.io/user/56c1c513c24aa800534e85f3></br>**4.CSDN：**<http://blog.csdn.net/marno__></br>**5.Github：**<https://github.com/MarnoDev></br> **6.微信号：** marno666，交流交友都可以，但千万不要直接抛问题（因为...锅太重，我一人接不住！）。加好友时希望可以备注下真名和技术领域，谢谢！也可以直接扫码↓↓↓</br>
>![](http://upload-images.jianshu.io/upload_images/960283-e0c4fc1db35593f6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1080/q/50)