import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
	constructor(props) {
    super(props)
    // optimize
		this.handleClick = this.handleClick.bind(this)
	}

	render() {
		console.log('child render')
		const { content, test } = this.props
		// JSX -> createElement -> virtual DOM (JS object) -> real DOM
		// return <div><span>hello</span></div>
		// return React.createElement('div', {}, React.createElement('span', {}, 'hello'))
		return (
			<div onClick={this.handleClick}>
				{test}-{content}
			</div>
		)
	}

	// Updation
	// 当组件从父组件接受参数
	// 如果组件第一次存在于父组件中，不会执行
	// 如果组件已经存在于父组件中，会执行
	componentWillReceiveProps() {
		console.log('child componentWillReceiveProps')
	}

  // Performance optimization
	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate')
		if (nextProps.content !== this.props.content) {
			return true
		} else {
			return false
		}
	}

	// 组件即将从页面中剔除执行
	componentWillUnmount() {
		console.log('child componentWillUnmount')
	}

	handleClick() {
		const { deleteItem, index } = this.props
		deleteItem(index)
	}
}

// Incoming parameter check
TodoItem.propTypes = {
	test: PropTypes.string.isRequired,
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
	deleteItem: PropTypes.func,
	index: PropTypes.number
}

// Defaults value
TodoItem.defaultProps = {
	test: 'hello world'
}

export default TodoItem
