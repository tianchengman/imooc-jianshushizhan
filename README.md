# imooc-jianshu

> React16.4 开发简书项目 从零基础入门到实战

- 运行

```console
npm install
npm run start
```

## 2-2 React开发环境准备

```console
npm install create-react-app -g
create-react-app imooc-jiansh
```

## 2-3 工程目录文件简介

## 2-4 react中的组件

## 3-1 使用React编写TodoList功能

- TodoList.js

## 3-2 React 中的响应式设计思想和事件绑定

- TodoList.js

## 3-3 实现 TodoList 新增删除功能

- TodoList.js

## 3-4 JSX语法细节补充

- TodoList.js

## 3-5 拆分组件与组件之间的传值

- TodoList.js
- TodoItem.js

## 3-6 TodoList 代码优化

- TodoList.js

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
