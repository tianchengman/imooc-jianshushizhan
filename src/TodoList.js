import React, { Component, Fragment } from 'react'
import axios from 'axios'
import TodoItem from './TodoItem'

class TodoList extends Component {
  // Initialization (life circle)
  // setup props and state

  // constuctor() simular life circle but not, component init will run
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

  // render() simular life circle but not, component data change will run
  render() {
    console.log('render')
    return (
      // <Fragment>: Placeholder package
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

  // Mounting (life circle) (only invoked once)
  // component soon mount in page
  componentWillMount() {
    console.log('componentWillMount')
  }
  // render()
  // component mount in page after, get ajax data
  componentDidMount() {
    console.log('componentWillMount')
    axios
      .get('/api/todolist')
      .then(res => {
        console.log(res.data)
        this.setState(() => {
          return {
            list: [...res.data]
          }
        })
      })
      .catch(() => {
        alert('err')
      })
  }

  // Updation (life circle)
  // component update before, your component need to update ?
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }
  // component update before, shouldComponentUpdate return true will carried out
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  // render()
  // component update after
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <div key={item}>
          {/*
          // Cursor autofocus
          <label htmlfor="insertArea">输入内容</label>
          <li
            key={index}
            onClick={this.handleItemDelete.bind(this, index)}
            // dangerouslySetInnerHTML: can write `<h1>hello</h1>`
            dangerouslySetInnerHTML={{__html: item}}
          >
            {item}
          </li>
          */}
          <TodoItem content={item} index={index} deleteItem={this.handleItemDelete} />
        </div>
      )
    })
  }

  handleInputChange(e) {
    // target: <input> dom node
    // console.log(e.target.value)
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
    // prevState: data that before modify data
    // setState() it is async func
    this.setState(
      prevState => {
        return {
          // copy origin list, because 'immutable': state not allow to change
          list: [...prevState.list, prevState.inputValue],
          inputValue: ''
        }
      },
      () => {
        // ensure setState() has been invoked
        console.log(this.ul.querySelectorAll('div').length)
      }
    )
  }

  handleItemDelete(index) {
    // const list = [...this.state.list]
    // list.splice(index, 1)
    // this.setState({
    // 	list: list
    // })
    this.setState(prevState => {
      // copy origin list, because 'immutable': state not allow to change
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }
}

export default TodoList
