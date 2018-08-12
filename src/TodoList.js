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
    console.log('render')
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
  
  // Mounting
  // 组件即将挂载到页面的时刻执行
  componentWillMount() {
    console.log('componentWillMount')
  }
  // render()
  // 组件被挂载到页面之后执行
  componentDidMount() {
    console.log('componentWillMount')
  }

  // Updation
  // 组件被更新之前执行, 你的组件需要被更新吗?
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }
  // 组件被更新之前执行, shouldComponentUpdate return true 才执行
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  // render()
  // 组件更新完成之后执行
  componentDidUpdate() {
    console.log('componentDidUpdate')
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
