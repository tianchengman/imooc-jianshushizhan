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

1. state 数据
2. JSX 模板
3. 数据 + 模板 结合，生成真实 DOM 来显示
4. 生成虚拟 DOM (虚拟 DOM 是 JS 对象，用它来描述真实 DOM) ['div',{id:'abc'},['span',{},'hello world']]
5. state 变化
6. 数据 + 模板 生成新的虚拟 DOM ['div', {id: 'abc'}, ['span', {}, 'bye']]
7. 比较原始虚拟 DOM 和 新的虚拟 DOM 区别，找到区别
8. 操作 DOM，改变区别里的内容

## 4-5 深入了解虚拟DOM
