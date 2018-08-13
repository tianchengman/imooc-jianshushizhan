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

class Todo extends Component {
	constructor(props) {
		super(props)
		this.state = store.getState()
		console.log(this.state)
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleStoreChange = this.handleStoreChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		// Store 数据改变, 里面的函数自动执行
		store.subscribe(this.handleStoreChange)
	}

	render() {
		return (
			<div style={{ margin: '10px' }}>
				<div>
					<Input
						placeholder="input"
						style={{ width: '300px', marginRight: '10px' }}
						value={this.state.inputValue}
						onChange={this.handleInputChange}
					/>
					<Button type="primary" onClick={this.handleBtnClick}>
						submit
					</Button>
				</div>
				<List
					style={{ marginTop: '10px', width: '300px' }}
					bordered
					dataSource={this.state.list}
					renderItem={(item, index) => (
						<List.Item onClick={this.handleItemClick.bind(this, index)}>
							{item}
						</List.Item>
					)}
				/>
			</div>
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
