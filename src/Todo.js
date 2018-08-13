import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store/index'
// import {
// 	CHANGE_INPUT_VALUE,
// 	ADD_TODO_ITEM,
// 	DELETE_TODO_ITEM
// } from './store/actionTypes'
import {
	getInputChangeAction,
	getAddItemAction,
	getDeleteItemAction
} from './store/actionCreators'
import TodoUI from './TodoUI'

class Todo extends Component {
	constructor(props) {
		super(props)
		this.state = store.getState()
		console.log(this.state)
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleStoreChange = this.handleStoreChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		this.handleItemClick = this.handleItemClick.bind(this)
		// Store 数据改变, 里面的函数自动执行
		store.subscribe(this.handleStoreChange)
	}

	render() {
		return (
			<TodoUI
        list={this.state.list}
				inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemClick={this.handleItemClick}
			/>
		)
	}

	handleInputChange(e) {
		// const action = {
		// 	type: CHANGE_INPUT_VALUE,
		// 	value: e.target.value
		// }
		const action = getInputChangeAction(e.target.value)
		store.dispatch(action)
	}

	handleStoreChange() {
		this.setState(store.getState())
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

export default Todo
