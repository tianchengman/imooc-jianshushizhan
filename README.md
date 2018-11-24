# imooc-jianshu

> React16.4 开发简书项目 从零基础入门到实战

- 运行

```console
npm install
npm run start
```

## 分支

- master: imooc-jianshu
- basic: 第 3 章 React 基础精讲
- basic-advance: 第 4 章 React 高级内容
- redux: 第 5 章 Redux 入门

## 2-2 React 开发环境准备

```console
npm install create-react-app -g
create-react-app imooc-jiansh
```

## 2-3 工程目录文件简介

## 2-4 react 中的组件

## 3-1 使用 React 编写 TodoList 功能

- Fragment: Placeholder, 'return' only one tag

## 3-2 React 中的响应式设计思想和事件绑定

## 3-3 实现 TodoList 新增删除功能

- immutable: state not allow to change

## 3-4 JSX 语法细节补充

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

## 4-3 props，state 与 render 函数的关系

## 4-4 React 中的虚拟 DOM

- 原理:

1. state 数据
2. JSX 模板
3. 数据 + 模板 生成虚拟 DOM (虚拟 DOM 是 JS 对象，用它来描述真实 DOM) `['div',{id:'abc'},['span',{},'hello world']]`
4. 用虚拟 DOM 生成真实 DOM 来显示 `<div id='abc'><span>hello </span></div>`
5. state 变化
6. 数据 + 模板 生成新的虚拟 DOM `['div', {id: 'abc'}, ['span', {}, 'bye']]` (提升性能)
7. 比较原始虚拟 DOM 和 新的虚拟 DOM 区别，找到区别, diff 算法
8. 操作 DOM，改变区别里的内容

- 优点:

1. 性能提升 (JS 对象)
2. 跨平台 React Native

## 4-5 深入了解虚拟 DOM

## 4-6 虚拟 DOM 中的 Diff 算法

- **同层比对.png**
- **key.png**
- 同层比对, 有一层不同就从新渲染, 比对算法简单速度快
- kye={index} 不合适, key={item} 合适, 提高循环能力

## 4-7 React 中 ref 的使用

## 4-8 React 的生命周期函数

## 4-9 React 生命周期函数的使用场景

```console
npm install axios -S
```

## 4-10 使用 Charles 实现本地数据 mock

- Charles 无法抓取数据 bug!

## 4-11 React 中实现 CSS 过渡动画

- App.js

## 4-12 React 中使用 CSS 动画效果

- style.css

## 4-13, 4-14 使用 react-transition-group 实现动画

- App.js
- style.css

```console
cnpm install react-transition-group -S
```

## 5-1 Redux 概念简述

- **redux.png**

## 5-2 Redux 的工作流程

- **reduxflow.png**

## 5-3 使用 Antd 实现 TodoList 页面布局

```console
cnpm install antd -S
```

## 5-4 创建 redux 中的 store

```console
cnpm i redux -S
```

## 5-5 Action 和 Reducer 的编写

## 5-6 使用 Redux 完成 TodoList 删除功能

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

- TodoListUI.js

## 6-2 无状态组件

- TodoListUI.js
- 当一个组件只有 render() 的时候，可以使用无状态组件替换, 性能高

## 6-3 Redux 中发送异步请求获取数据

- Charles bug!

## 6-4 使用 Redux-thunk 中间件实现 ajax 数据请求

- Redux-thunk 的中间件能使 async request 放到 actionCreator.js 里面处理
- Redux-thunk 中间件能返回函数, dispatch 接收函数

```console
cnpm install redux-thunk -S
```

## 6-5 什么是 Redux 的中间件

- **中间件.png**
- 中间件 对 dispatch() 封装和升级

## 6-6, 6-7 Redux-saga 中间件使用入门

- **sagas.js** 处理异步数据 -> Store -> Reducer

```console
cnpm install redux-saga -S
```

## 6-8, 6-9, 6-10 如何使用 React-redux

- TodoRedux.js
- index.js

```console
cnpm install react-redux -S
```

## 装饰器配置

- Re-01-Redux+Router+Node全栈开发(imooc)/4-7 Redux状态管理7-使用 React-redux（Connect 可以用装饰器的方法来书写）

```console
npm run eject
npm install babel-plugin-transform-decorators-legacy -D
```