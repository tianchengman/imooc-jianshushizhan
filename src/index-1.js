import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
// import TodoList from './TodoList'
// antd desigin
// import Todo from './Todo'
import TodoRedux from './TodoRedux'
import { Provider } from 'react-redux'
import store from './store'

const App = (
  // Provider 将 store 提供给里面的子组件
	<Provider store={store}>
		<TodoRedux />
	</Provider>
)
/* PWA: No network cache interface */
// import registerServiceWorker from './registerServiceWorker'

// React provide jsx: <App />
// ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.render(<TodoList />, document.getElementById('root'))
// ReactDOM.render(<Todo />, document.getElementById('root'))
ReactDOM.render(App, document.getElementById('root'))
