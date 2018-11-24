import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducer'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'

/* redux Browser tool configuration */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

/* redux-thunk */
// const enhancer = composeEnhancers(applyMiddleware(thunk))
/* redux-saga */
const sagaMiddleware = createSagaMiddleware()
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(reducer, enhancer)

/* redux-saga */
sagaMiddleware.run(todoSagas)

/* react-redux */
// import { createStore } from 'redux'
// import reducer from './reducer'
// const store = createStore(reducer)

export default store
