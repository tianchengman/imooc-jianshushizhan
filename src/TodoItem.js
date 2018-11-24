import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    // Performance optimization
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    // father component render(), child component render()
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

  // Updation (life circle)
  // when accept param from father component
  // when father render() re-invoked, invoked this lifeCircle
  componentWillReceiveProps() {
    console.log('child componentWillReceiveProps')
  }
  // Performance optimization, avoid afther component render(), child component render()
  shouldComponentUpdate(nextProps, nextState) {
    console.log('child shouldComponentUpdate')
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }
  // componentWillUpdate() {}
  // render()
  // componentDidUpdate() {}

  // Unmounting (life circle)
  // componet delete from page soon
  componentWillUnmount() {
    console.log('child componentWillUnmount')
  }

  handleClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}

// income parameter verify
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
  // content: PropTypes.arrayOfType([PropTypes.string, PropTypes.string]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
  // a: PropTypes.array
  // a: PropTypes.boot
  // a: PropTypes.string
  // a: PropTypes.symbol
  // a: PropTypes.element
  // a: PropTypes.node
}

// default value
TodoItem.defaultProps = {
  test: 'hello world '
}

export default TodoItem
