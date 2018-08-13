import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducer'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'

// redux-saga
const sagaMiddleware = createSagaMiddleware()
// redux 浏览器工具配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
const store = createStore(reducer, enhancer)
sagaMiddleware.run(todoSagas)

export default store
