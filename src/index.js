import React from 'react'
import ReactDOM from 'react-dom'
// import TodoList from './TodoList'
// import App from './App'
// import ReduxList from './ReduxList'
// import './style.js'
// import './App.css'
import TodoReactRedux from './TodoReactRedux'
import { Provider } from 'react-redux'
import store from './store'
// import './style.js'

const App = (
  // Provider put store into compnent
  <Provider store={store}>
    <TodoReactRedux />
  </Provider>
)

// ReactDOM.render(<TodoList />, document.getElementById('root'))
// ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.render(<ReduxList />, document.getElementById('root'))
ReactDOM.render(App, document.getElementById('root'))
