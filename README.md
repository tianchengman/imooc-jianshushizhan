# imooc-jianshu

> React16.4 开发简书项目 从零基础入门到实战

- 运行

```console
npm install
npm run start
```

## 2-2 React 开发环境准备

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

## 3-1 使用 React 编写 TodoList 功能

- `<Fragment>`: package component, placeholder

## 3-2 React 中的响应式设计思想和事件绑定

## 3-3 实现 TodoList 新增删除功能

- 'immutable': state not allow to change

## 3-4 JSX 语法细节补充

- class -> className: `<div className="name"></div>`
- for -> htmlFor: `<label htmlFor="insert">input value:</label>`

```js
<li
  // dangerouslySetInnerHTML: can write `<h1>hello</h1>`
  dangerouslySetInnerHTML={{ __html: item }}
>
  {item}
</li>
```

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

- chrome -> react

## 4-2 PropTypes 与 DefaultProps 的应用

## 4-3 props，state 与 render 函数的关系

## 4-4 React 中的虚拟 DOM

- principle:

1. state data
2. JSX template
3. data + template create virtual-DOM (virtual-DOM is JS object，use it desc DOM) `['div',{id:'abc'},['span',{},'hello world']]`
4. virtual-DOM create real DOM `<div id='abc'><span>hello </span></div>`
5. state change
6. new data + template create new virtual-DOM `['div', {id: 'abc'}, ['span', {}, 'bye']]` (performance optimize)
7. compare origin virtual-DOM and new virtual-DOM, find difference, diff algorithm
8. operate DOM, change content

- advantage:

1. performance optimize (JS object)
2. cross-platform React Native

## 4-5 深入了解虚拟 DOM

## 4-6 虚拟 DOM 中的 Diff 算法

- **diff.png**
- **key.png**

## 4-7 React 中 ref 的使用

```js
<ul
  ref={ul => {
    this.ul = ul
  }}
>
```

## 4-8 React 的生命周期函数

- **lifeCircle.png**

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
