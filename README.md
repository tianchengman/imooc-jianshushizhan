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

## 3-1 使用 React 编写 TodoList 功能

- `<Fragment>`: package component, placeholder

## 3-2 React 中的响应式设计思想和事件绑定

## 3-3 实现 TodoList 新增删除功能

- 'immutable': state not allow to change

## 3-4 JSX语法细节补充

- class -> className: `<div className="name"></div>`
- for -> htmlFor: `<label htmlFor="insert">input value:</label>`

```js
<li
  // dangerouslySetInnerHTML: can write `<h1>hello</h1>`
  dangerouslySetInnerHTML={{__html: item}}
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
