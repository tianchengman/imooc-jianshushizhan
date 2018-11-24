import React, { Component } from 'react'
import store from './store/index'
import {
  getInputChangeAction,
  getDeleteItemAction,
  getAddItemAction,
  // getTodoList,
  getInitList
} from './store/actionCreators'
import ReduxListUI from './ReduxListUI'

class ReduxList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
    // Store data change, func run
    store.subscribe(this.handleStoreChange)
  } 

  render() {
    return (
      <ReduxListUI
        list={this.state.list}
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemClick={this.handleItemClick}
      />
    )
  }

  // 组件被挂载到页面之后执行, get ajax data
  componentDidMount() {
    /* redux-thunk */
    // const action = getTodoList()
    // store.dispatch(action)
    
    /* redux-saga */
    const action = getInitList()
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleInputChange(e) {
    // const action = {
    // 	type: CHANGE_INPUT_VALUE,
    // 	value: e.target.value
    // }
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleBtnClick() {
    // const action = {
    // 	type: ADD_TODO_ITEM
    // }
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleItemClick(index) {
    // const action = {
    // 	type: DELETE_TODO_ITEM,
    // 	index
    // }
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default ReduxList
