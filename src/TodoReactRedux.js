﻿// import React, { Component } from 'react'
import React from 'react'
import { connect } from 'react-redux'
import {
  getInputChangeAction,
  getAddItemAction,
	getDeleteItemAction
} from './store/actionCreators'
import store from './store'

// stateless component
const TodoReactRedux = props => {
	const {
		inputValue,
		changeInputValue,
		handleClick,
		handleDelete,
		list
	} = props
	return (
		<div>
			<div>
				<input value={inputValue} onChange={changeInputValue} />
				<button onClick={handleClick}>submit</button>
			</div>
			<ul>
				{list.map((item, index) => {
					return (
						<li
							key={index}
							onClick={() => {
								handleDelete(index)
							}}
						>
							{item}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

// Store data Mapping to props
const mapStateToProps = state => {
	return {
		inputValue: state.inputValue,
		list: state.list
	}
}

// Store.dispatch Mapping to props
const mapDispatchToProps = dispatch => {
	return {
		changeInputValue(e) {
			// const action = {
			// 	type: CHANGE_INPUT_VALUE,
			// 	value: e.target.value
			// }
			/* return to Store */
			// dispatch(action)
			const action = getInputChangeAction(e.target.value)
			store.dispatch(action)
		},
		handleClick() {
			// const action = {
			// 	type: ADD_TODO_ITEM
			// }
			// dispatch(action)
			const action = getAddItemAction()
			store.dispatch(action)
		},
		handleDelete(index) {
			// const action = {
			// 	type: DELETE_TODO_ITEM,
			// 	index: index
			// }
			// dispatch(action)
			const action = getDeleteItemAction(index)
			store.dispatch(action)
		}
	}
}

// connect: TodoReactRedux and Store connect
// return container component(connect() return result)
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoReactRedux)
