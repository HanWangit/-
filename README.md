# ShanGou
这是一个模仿电商的 移动端demo,有一个后台管理pc端界面 页面较少,禁止商业用途,仅供学习者参考（基本代码,插件和页面放在了`ShanGou\public\myds` 目录下）

​	

```
本次项目 前端界面用到了 mui框架 、zepto、fontAwesome字体图标库、artTemplate原生模板引擎(在子目录 assets 中可以找到);

	css都是用less写的,分别在页面中引用的是css;

	用ajax与后台交互;

	数据库sql文件 和 前后端接口在   `ShanGou\docs`  目录;
```



###### 运行方式:

​	1.开启服务器并导入好sql

​	2.打开文件ShanGou目录下控制台(需要nodejs环境)  npm start 命令

​	3.在浏览器中 ,可直接访问   `localhost:3000/wyds` 可进入首页


## 前端页面

- 首页 --index.html完成  
  - 主要都是静态界面,没有做业务逻辑, 轮播图是用mui的轮播图框架完成的

- 分类 --category.html完成 
  - ajax 动态获取数据并用模板引擎渲染 一级分类和二级分类
  - 滑动效果是用 mui 框架实现

- 搜索 --search.html完成
  - 历史记录的渲染 和 删除记录
  - 思路是把记录存到 浏览器存储 localStorage 中 以数组的形式存储 用到了JSON的方法切换字符串

- 搜索结果页面 --search-list.html完成

  - 拿到用户搜索的关键字
  - ajax传到服务器拿到数据,用模板引擎渲染到页面
  - 价格重新排列的功能,mui的下拉刷新功能

- 商品详情页 --detail.html完成

  - 通过商品id,获取商品信息并渲染
  - 有一个bug,我用的mui做的数量的那个,但是发现改变不了它的最大值
  - 没有做购物车,觉得都差不多,没有做

- 会员中心 --user.html完成

  - 进入之前需要登录,会自动跳到登录页面 login.html,没有用正则验证,

    只是随便写了验证, 表单不能为空

    前台登录 http://localhost:3000/mobile/index.html

    - 用户名 itcast
    - 密码 111111

  - 如果没有注册,可以去注册页面register.html (获取的认证码在控制台)注册后会需要登录,再跳到会员中心

  - 会员中心有修改密码 modify.html (获取的认证码在控制台)

  - 收货地址管理,用到了mui的两个功能,三级联动和左滑,管理地址左滑可删除和编辑,,编辑操作和添加收货地址我用的同一个页面addAddress.html,主要用传参来区分两者

  - 退出功能

## 后端页面

- 后端都很简单,很多重复的代码,主要通过接口实现增删改查等操作,就不细作说明`ShanGou\public\admin`,

  主要用到jQuery和bootstrap

  后台登录 http://localhost:3000/admin/login.html

  - 用户名 root
  - 密码 123456

