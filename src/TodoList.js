import React, { Component, Fragment } from 'react'

class TodoList extends Component {
	constructor(props) {
		// invoked father constructor
    super(props)
    // data define
		this.state = {
			inputValue: '',
			list: []
		}
	}
	render() {
		return (
			// Fragment: 占位符
			<Fragment>
				<div>
					<input
						value={this.state.inputValue}
						onChange={this.handleChange.bind(this)}
					/>
					<button onClick={this.handleClick.bind(this)}>submit</button>
				</div>
				<ul>
					{
            this.state.list.map((item, index) => {
						  return <li key={index} onClick={this.handleDelete.bind(this)}>{item}</li>
            })
          }
				</ul>
			</Fragment>
		)
	}

	handleChange(e) {
    // change data
    // state not allow to change
		this.setState({
      // cover origin data
			inputValue: e.target.value
		})
	}

	handleClick() {
		this.setState({
			list: [...this.state.list, this.state.inputValue],
			inputValue: ''
		})
  }
  
  handleDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default TodoList
