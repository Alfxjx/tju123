# schnavi

天津大学导航（tju123）页面

[笔记](#如何插入日期选择器)


### deploy

```
npm run build
cd dist
git init
git add -A
git commit -m "dist"
git push -f git@github.com:Alfxjx/tju123.git master:gh-pages

```
---
layout: darft
title: 天大导航开发拾遗
date: 2019-03-27 20:09:35
tags: Js
description: 处理日期，添加到收藏夹，Eslint关闭一行校验，通知栏，主题颜色，i18n，vue-slicksort
---

## 如何插入日期选择器

- [部分引入element ui](https://github.com/ElementUI/vue-cli-plugin-element)vue add element
- `date-picker`的`clearable`属性需要设置为`:clearable="true"`
- 如何计算开学几周了（操作Date）

```javascript
week() {
        let dtStart = new Date('2019-2-25')
        let res = parseInt(this.date - dtStart) / (86400000 * 7)
        if (res > 0 && res < 21) {
          return parseInt(res)
        } else {
          alert('不对的周数')
          // this.date = new Date()
          return 0
        }
}
```

## 如何加入收藏

```javascript
<script>
  function _addFavorite() {
      var url = window.location;
      var title = document.title;
      var ua = navigator.userAgent.toLowerCase();
      if (ua.indexOf("360se") > -1) {
          alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
      }
      else if (ua.indexOf("msie 8") > -1) {
          window.external.AddToFavoritesBar(url, title); //IE8
      }
      else if (document.all) {//IE类浏览器
        try{
         window.external.addFavorite(url, title);
        }catch(e){
         alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
        }
      }
      else if (window.sidebar) {//firfox等浏览器；
          window.sidebar.addPanel(title, url, "");
      }
      else {
          alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
      }
  }    
  </script>
　　<a href="javascript:void(0)" onclick="_addFavorite()">加入收藏</a>
```

但是这个貌似在vue里面无法使用

因此：

```javascript
addFavo() {
        let browser = browser||chrome
        browser.bookmarks.create({
          title: document.title,
          url: document.URL
        }).then(
          console.log('created')
        )
}
```

但是还是会报错

[这个](<https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs#bookmarks>)解释了为啥在Chrome下不能这么用，但是并没有解决我的问题。

[mdn上是这么说的](<https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks>):

> The [WebExtensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions) [`bookmarks`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks) API lets an extension interact with and manipulate the browser's bookmarking system. You can use it to bookmark pages, retrieve existing bookmarks, and edit, remove, and organize bookmarks.
>
> To use this API, an extension must request the "bookmarks" [permission](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in its `manifest.json`file.

[已经提问了](<https://segmentfault.com/q/1010000018679584>)

[解答](<https://stackoverflow.com/questions/22085812/addfavorite-js-doesnt-work-with-chrome>)

> Opera, Google Chrome and Safari do not provide a way to add new elements to the Favorites (Bookmarks) from JavaScript.

## [Eslint 关闭一行的校验](<https://www.cnblogs.com/liyongquan/p/7831717.html>)

\1. 关闭段落校验

```
/* eslint-disable */some code
some code
/* eslint-enable */
```

\2. 关闭当前行校验

```
`some code ``// eslint-disable-line`
```

\3. 关闭下一行校验

```
`// eslint-disable-next-line``some code`
```

## Element 通知栏默认会显示

解决办法就是在created的时候关闭所有窗口

```javascript
import {Notification} from 'element-ui'
export default{
    created() {
      ...
      Notification.closeAll()
    },
    methods: {
        addFavo() {
        Notification({
          title: '收藏本站的方法',
          message: '按Ctrl+D收藏',
          position: 'top-right',
          offset: 60
        })
      }
    }
}
```

## 主题颜色调整

[参考](<https://blog.csdn.net/wang1006008051/article/details/83902236>)这篇文章

- 自定义的全局颜色需要在对应的文件里面引入
- 是不是有更好的[方法](<https://www.imooc.com/article/43664>)
- 清空颜色优化

```javascript
computed: {
      base() {
        return this.$store.state.baseColor ? this.$store.state.baseColor : '#1DC3F5'
      },
          ...
}          
```

## 中英文i18n

[参考1](<https://www.cnblogs.com/rogerwu/p/7744476.html>)

[参考2](<https://www.jianshu.com/p/cc4253745b0f>) 使用了localStorage来保存状态

因为i18n是全局注册的，因此在处理循环渲染的时候，可以这样：

```html
<li v-for="value in $t('sideBar')" :key="value.name">{{value}}</li>
```

此时的`zh.js`是这样的：

```javascript
sideBar: {
    school: '学生教务',
    course: '课程管理',
    office: '行政办公',
    research: '科研',
    exam: '考试',
    party: '党建',
    scholarship: '学生资助',
    daily: '日常生活',
    activity: '学生活动',
    career: '学生就业'
  }
```

## 在data里面使用i18n

原本的i18n的语法是这样的
```
{{$t('blur.blur')}}
```
但是为了能更好的使用，想放在data里面，

但是放在data里面的话，数据不能随时更新。

```
this.$t('main.school.sub')
```

因此选择computed:

```javascript
 computed: {
      list() {
        return [
          this.$t('main.school.sub'),
          this.$t('main.course.sub'),
          this.$t('main.office.sub'),
          this.$t('main.research.sub')
        ]
      }
    },
```

## in Vuex with I18n

[how to use in vuex?](<https://github.com/kazupon/vue-i18n/issues/415>)

就是把i18n注册到store.js里面，成为一个引入的方法，这样就可以解决this中找不到i18n的问题了。

## 图标转换成icon

[之前的文章](<https://alfxjx.github.io/2019/01/10/%E9%A5%BF%E4%BA%86%E4%B9%88App%E7%AC%94%E8%AE%B0/>)里面有，这一次复习了一下

```
//main.js
import './common/stylus/icon.styl'
//xx.vue
<i class="icon-search ex-icon"></i>
// 排布形式
--icon.styl
--/font
```

## vue-slicksort

[demo源码地址](<https://github.com/Jexordexan/vue-slicksort/tree/master/src>)

学习一下嵌套的可拖动组件是怎么组织的。

## 设置窗口全屏

[方法1](<https://segmentfault.com/a/1190000012707337>)

现在你知道了吧，%是一个相对父元素计算得来的高度，要想使他有效，我们需要设置父元素的height;
要特别注意的一点是，在<body>之中的元素的父元素并不仅仅只是<body>，还包括了<html>。
所以我们要同时设置这两者的height，只设置其中一个是不行的：

```
html,body{
    height: 100%;
    margin: 0;
    padding: 0;
}
```

方法2

```
<div id="root" onload="onLoad()">
function onLoad(){
	let target = document.getElementById('root');
	let h = window.screen.height;
	target.style.height = `${h}px`;
}
```

## css3实现的material design

[link](<https://segmentfault.com/a/1190000008510381>)

```css
/*button*/
    button {
      opacity: 0.9;
      line-height: 1rem;
      padding:  0.5rem 1rem;
      border: none;
      outline: none;
      background-color: white;
      text-decoration: none;
      position: relative;
      border-radius:2px;
      box-shadow:0 1px 3px darkgray;
      transition: box-shadow 0.5s ease-out;
    }
 button::before{
      content: '';
      display:block;
      position: absolute;
      left: 50%;
      top: 50%;
      border-radius: 10%/40%;
      -webkit-transform: translate(-50%, -50%) ;
      transform: translate(-50%, -50%) ;
      height: 100%;
      width: 100%;
      z-index: -1;
      -webkit-transition: all 0.5s cubic-bezier(0.23, 0.95, 0.56, 1);
      transition: all 0.5s cubic-bezier(0.23, 0.95, 0.56, 1);
  }
  button:hover{
    box-shadow:0 6px 16px darkgray;
      transition: all 0.8s ease-out;
  }
button:active{
     opacity: 1;
      -webkit-transition: all 0.5s ease-out;
      transition: all 0.3s ease-out;
}
button:active::before{
      width: 0;
      height: 100%;
      border-radius: 0;
      background-color: rgba(0,0,0,.4);
      -webkit-transition: all 0.01s ease-out;
      transition: all 0.01s ease-out;
}
button.link{
    background:none;
    color:#0275d8;
    box-shadow: none;
}
button[disabled]{
    background-color:lightgray;
    color:darkgray;
    cursor:not-allowed;
    box-shadow: none;
}
.circle{
    border-radius: 100%;
}
button.circle{
    padding: 0;
    width: 3rem;height: 3rem;font-size: 1.5rem;
      box-shadow:0 6px 12px darkgray;

}
button.circle:hover{
      box-shadow:0 12px 24px darkgray;
}
 button.circle::before{
      content: '';
    display:block;
      position: absolute;
      left: 50%;
      top: 50%;
      border-radius: 100%;
      -webkit-transform: translate(-50%, -50%) ;
      transform: translate(-50%, -50%) ;
      height: 100%;
      width: 100%;
      z-index: -1;
      -webkit-transition: all 0.5s cubic-bezier(0.23, 0.95, 0.56, 1);
      transition: all 0.5s cubic-bezier(0.23, 0.95, 0.56, 1);
  }
  button.circle:active::before{
      width: 0;
      height: 0;
      border-radius: 100%;
      background-color: rgba(0,0,0,.4);
      -webkit-transition: all 0.01s ease-out;
      transition: all 0.01s ease-out;
  }
```



### 如何给循环列表传参

```html
<li v-for="(uItem,index) in userLink" v-bind:key="index" @click="del(uItem.name)"></li>
```

```javascript
del(uName) {
    this.$store.commit('delEdit', {name: uName})
    console.log('deleted')
}
```

可以理解成，在`v-for`里面是有一个作用域的，调用的方法按照循环渲染的不同`uItem`来寻址。

~~困扰了好久~~

