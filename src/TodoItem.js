﻿import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

	render() {
    const {content, test} = this.props
		return (
      <div onClick={this.handleClick}>{test}-{content}</div>
    )
  }
  
  handleClick() {
    const {deleteItem, index} = this.props
    deleteItem(index)
  }
}

// Incoming parameter check
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string, PropTypes.string),
  deleteItem: PropTypes.funcs,
  index: PropTypes.number
}

// Defaults value
TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem
