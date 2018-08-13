// import React, { Component } from 'react'
import React from 'react'
// import store from './store'
import { connect } from 'react-redux'

// 无状态组件
const TodoRedux = props => {
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

// class TodoRedux extends Component {
// 	render() {
// 		const {
// 			inputValue,
// 			changeInputValue,
// 			handleClick,
// 			handleDelete,
// 			list
// 		} = this.props
// 		return (
// 			<div>
// 				<div>
// 					<input value={inputValue} onChange={changeInputValue} />
// 					<button onClick={handleClick}>submit</button>
// 				</div>
// 				<ul>
// 					{list.map((item, index) => {
// 						return (
// 							<li key={index} onClick={handleDelete}>
// 								{item}
// 							</li>
// 						)
// 					})}
// 				</ul>
// 			</div>
// 		)
// 	}
// }

// store 里面的数据映射到 props 里面
const mapStateToProps = state => {
	return {
		inputValue: state.inputValue,
		list: state.list
	}
}

// store.dispatch 映射到 props 里面
const mapDispatchToProps = dispatch => {
	return {
		changeInputValue(e) {
			const action = {
				type: 'change_input_value',
				value: e.target.value
			}
			// 发给 store
			dispatch(action)
		},
		handleClick() {
			const action = {
				type: 'add_item'
			}
			dispatch(action)
		},
		handleDelete(index) {
			const action = {
				type: 'delete_item',
				index: index
			}
			dispatch(action)
		}
	}
}

// connect: TodoRedux 和 store 做连接
// return 容器组件(connect 方法返回的结果)
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoRedux)
