import React, { Component, Fragment } from 'react'

class TodoList extends Component {
	constructor(props) {
    // invoked father constructor
    super(props)
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
					<button>submit</button>
				</div>
				<ul>
					<li>learn english</li>
					<li>learn japan</li>
				</ul>
			</Fragment>
		)
  }
  
  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
}

export default TodoList
