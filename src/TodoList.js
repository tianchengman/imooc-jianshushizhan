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
		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
	}
	render() {
		return (
			// Fragment: Placeholder
			<Fragment>
				<div>
					{/* htmlFor: like 'for', focus */}
					<label htmlFor="insert">input value:</label>
					<input
						id="insert"
						className="input"
						value={this.state.inputValue}
            onChange={this.handleChange}
            ref={(input) => {this.input = input}}
					/>
					<button onClick={this.handleClick}>submit</button>
				</div>
				<ul ref={(ul) => {this.ul = ul}}>{this.getTodoItem()}</ul>
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
            onClick={this.handleDelete.bind(this)}
            // can write <h1>hello</h1>
            dangerouslySetInnerHTML={{__html: item}}
          >
            {item}
          </li>
          */}
					<TodoItem
						content={item}
						index={index}
						deleteItem={this.handleDelete}
					/>
				</div>
			)
		})
	}

	handleChange(e) {
    // const value = e.target.value
    const value = this.input.value
    // Can be omitted 'return', async
    // this.setState(() => ({
		// 	inputValue: value
		// }))
		this.setState(() => {
			return {
				inputValue: value
			}
    })
		// change data
		// immutable: state not allow to change
		// this.setState({
		// 	// cover origin data
		// 	inputValue: e.target.value
		// })
	}

	handleClick() {
		// this.setState({
		// 	list: [...this.state.list, this.state.inputValue],
		// 	inputValue: ''
		// })
		this.setState(prevState => {
			return {
				list: [...prevState.list, prevState.inputValue],
				inputValue: ''
			}
    }, () => {
      // ensure async setState() has been invoked
      console.log(this.ul.querySelectorAll('div').length)  
    })
	}

	handleDelete(index) {
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
