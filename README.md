# imooc-jianshu

> React16.4 开发简书项目 从零基础入门到实战

- 运行

```console
npm install
npm run start
```

## 2-2 React开发环境准备

```console
npm i nvm
nvm ls
nvm install 8.9.1
nvm use 8.9.1
npm install create-react-app -g
create-react-app imooc-jiansh
npm install
npm run start
```

## 2-3 工程目录文件简介

- **yarn.lock**: project require package, version num
- PWA: **registerServiceWorker.js**, in https server, if phone broken internet, cache before interface
- **mainifest.json**: website use as App, store in computer as shortcut, define the shortcut content

## 2-4 react 中的组件

## 3-1 使用 React 编写TodoList功能

- `<Fragment>`: package component, placeholder

## 3-2 React 中的响应式设计思想和事件绑定

## 3-3 实现 TodoList 新增删除功能

- immutable: state not allow to change

## 3-4 JSX语法细节补充

- class -> className: `<div className="name"></div>`
- dangerouslySetInnerHTML: can write `<h1>hello</h1>`
- `dangerouslySetInnerHTML={{__html: item}}`

## 3-5 拆分组件与组件之间的传值

- **TodoList.js**
- **TodoItem.js**

## 3-6 TodoList 代码优化

## 3-7 围绕 React 衍生出的思考

- 声明式开发
- 可以和其它框架并存
- 组件化
- 单向数据流
- 视图层框架
- 函数式编程

## 4-1 React developer tools 安装及使用

## 4-2 PropTypes 与 DefaultProps 的应用

- TodoItem.js

## 4-3 props，state 与 render 函数的关系

## 4-4 React 中的虚拟DOM

- 原理:
1. state 数据
2. JSX 模板
3. 数据 + 模板 生成虚拟 DOM (虚拟 DOM 是 JS 对象，用它来描述真实 DOM) `['div',{id:'abc'},['span',{},'hello world']]`
4. 用虚拟 DOM 生成真实 DOM 来显示 `<div id='abc'><span>hello </span></div>`
5. state 变化
6. 数据 + 模板 生成新的虚拟 DOM `['div', {id: 'abc'}, ['span', {}, 'bye']]`
7. 比较原始虚拟 DOM 和 新的虚拟 DOM 区别，找到区别, diff 算法
8. 操作 DOM，改变区别里的内容

- 优点:
1. 性能提升 (JS 对象)
2. 跨平台 React Native

## 4-5 深入了解虚拟DOM

## 4-6 虚拟 DOM 中的 Diff 算法

- 同层比对
- kye={index} 不合适, key={item} 合适, 提高循环能力

## 4-7 React 中 ref 的使用

## 4-8 React的生命周期函数

## 4-9 React 生命周期函数的使用场景

## 4-10 使用Charles实现本地数据mock

- TodoList.js
- TodoItem.js

```console
npm install axios -S
```

## 4-11 React 中实现 CSS 过渡动画

- App.js

## 4-12 React 中使用 CSS 动画效果

- style.css

## 4-13, 4-14 使用 react-transition-group 实现动画

- App.js

```console
cnpm install react-transition-group -S
```

## 5-1 Redux 概念简述

## 5-2 Redux 的工作流程

## 5-3 使用 Antd 实现 TodoList 页面布局

```console
cnpm install antd -S
```

## 5-4 创建 redux 中的 store_x264

## 5-5 Action 和 Reducer 的编写

- Todo.js

## 5-6 使用 Redux 完成 TodoList 删除功能_x264

## 5-7 ActionTypes 的拆分

## 5-8 使用 actionCreator 统一创建 action

## 5-9 Redux 知识点复习补充

- store 唯一
- 只有 store 才能改变 state 内容
- Reducer 必须是纯函数(固定输入固定输出)
- createStore
- store.dispatch
- store.getState
- store.subscribe

## 6-1 UI组件和容器组件

- TodoUI.js
- Todo.js

## 6-2 无状态组件

- TodoUI.js
- 当一个组件只有 render() 的时候，可以使用无状态组件替换
- 无状态组件性能高

## 6-3 Redux 中发送异步请求获取数据

- 不会使用 charles

## 6-4 使用Redux-thunk 中间件实现ajax数据请求

```console
cnpm install redux-thunk -S
```

## 6-5 什么是Redux的中间件

## 6-6, 6-7 Redux-saga 中间件使用入门

```console
cnpm install redux-saga -S
```

## 6-8, 6-9, 6-10 如何使用 React-redux

- TodoRedux.js
- index.js

```console
cnpm install react-redux -S
```

## 7-1 项目目录搭建，Styled-Components 与 Reset.css 的结合使用

- style.js

```console
cnpm install styled-components -S
```

## 7-2, 7-3 使用 styled-components 完成 Header 组件布局

- header/index.js

## 7-4 使用 iconfont 嵌入头部图标

## 7-5 搜索框动画效果实现

## 7-6 使用 React-Redux 进行应用数据的管理

## 7-7 使用 combineReducers 完成对数据的拆分管理

## 7-8 actionCreators 与 constants 的拆分

## 7-9 使用 Immutable.js 来管理store中的数据

- immutable 不可被变更

```console
cnpm install immutable -S
```

## 7-10 使用 redux-immutable 统一数据格式

```console
cnpm install redux-immutable -S
```

## 7-11 热门搜索样式布局

## 7-12 Ajax获取推荐数据

- header/store/actionCreator.js

## 7-13 代码优化微调

## 7-14 热门搜索换页功能实现

- header/store/actionCreator.js
- header/store/reducer.js
- index.js

## 7-15 换页旋转动画效果的实现

## 7-16 避免无意义的请求发送，提升组件性能

## 8-1 什么是路由，如何在React中使用路由功能

```console
cnpm install react-router-dom -S
```

- App.js

## 8-2 首页组件的拆分

## 8-3 首页专题区域布局及reducer的设计

## 8-4 首页文章列表制作

## 8-5 首页推荐部分代码编写

## 8-6 首页异步数据获取

## 8-7 异步操作代码拆分优化

## 8-8 实现加载更多功能

## 8-9 返回顶部功能实现

## 8-10 首页性能优化及路由跳转

## 9-1 详情页面布局

## 9-2 使用redux管理详情页面数据

## 9-3 异步获取数据

## 9-4 页面路由参数的传递

## 9-5 登陆页面布局

## 9-6 登陆功能实现

## 9-7 登陆鉴权及代码优化

## 9-8 异步组件及withRouter路由方法的使用

```console
cnpm install react-loadable -S
```

- loadable.js

## 10-1 项目上线流程

## 10-2 React 版本升级说明

## 10-3 课程总结
