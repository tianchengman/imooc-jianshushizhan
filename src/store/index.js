// import { createStore, compose, applyMiddleware } from 'redux'
// import reducer from './reducer'
// /* redux-thunk */
// // import thunk from 'redux-thunk'
// /* redux-saga */
// import createSagaMiddleware from 'redux-saga'
// import todoSagas from './sagas'

// /* redux 浏览器工具配置 */
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// /* redux-thunk */
// // const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
// /* redux-saga */
// const sagaMiddleware = createSagaMiddleware()
// const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

// const store = createStore(reducer, enhancer)
// /* redux-saga */
// sagaMiddleware.run(todoSagas)

/* react-redux */
import { createStore } from 'redux'
import reducer from './reducer'
const store = createStore(reducer)
export default store
