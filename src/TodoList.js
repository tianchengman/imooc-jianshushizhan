import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
	constructor(props) {
		// invoked father constructor
		super(props)
		// data define
		// render() re-render when state and props change
		this.state = {
			inputValue: '',
			list: []
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		this.handleItemDelete = this.handleItemDelete.bind(this)
	}

	render() {
		console.log('render')
		return (
			// Fragment: Placeholder, 'return' only one tag
			<Fragment>
				<div>
					{/* htmlFor: like 'for', focus cursor */}
					<label htmlFor="insert">input value:</label>
					<input
						id="insert"
						className="input"
						value={this.state.inputValue}
						onChange={this.handleInputChange}
						ref={input => {
							this.input = input
						}}
					/>
					<button onClick={this.handleBtnClick}>submit</button>
				</div>
				<ul
					ref={ul => {
						this.ul = ul
					}}
				>
					{this.getTodoItem()}
				</ul>
			</Fragment>
		)
	}

	getTodoItem() {
		return this.state.list.map((item, index) => {
			return (
				<div key={item}>
					{/*
          <li
            key={index}
            onClick={this.handleItemDelete.bind(this, index)}
            // dangerouslySetInnerHTML: can write `<h1>hello</h1>`
            dangerouslySetInnerHTML={{__html: item}}
          >
            {item}
          </li>
          */}
					<TodoItem
						content={item}
						index={index}
						deleteItem={this.handleItemDelete}
					/>
				</div>
			)
		})
	}

	handleInputChange(e) {
		// const value = e.target.value
		const value = this.input.value
		// Can be omitted 'return', async Performance optimization
		// this.setState(() => ({
		// 	inputValue: value
		// }))
		this.setState(() => {
			return {
				inputValue: value
			}
		})
		// this.setState({
		// 	inputValue: e.target.value
		// })
	}

	handleBtnClick() {
		// this.setState({
		// 	list: [...this.state.list, this.state.inputValue],
		// 	inputValue: ''
    // })
    // prevState: What is the data before modifying the data?
		this.setState(
			prevState => {
				return {
					list: [...prevState.list, prevState.inputValue],
					inputValue: ''
				}
			},
			() => {
				// ensure async setState() has been invoked
				console.log(this.ul.querySelectorAll('div').length)
			}
		)
	}

	handleItemDelete(index) {
    // copy origin list, because 'immutable': state not allow to change
		// const list = [...this.state.list]
		// list.splice(index, 1)
		// this.setState({
		// 	list: list
		// })
		this.setState(prevState => {
			const list = [...prevState.list]
			list.splice(index, 1)
			return { list }
		})
	}
}

export default TodoList
