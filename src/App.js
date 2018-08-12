import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
// import './style.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			show: true,
			list: []
		}
		this.handleToggle = this.handleToggle.bind(this)
		this.handleAddItem = this.handleAddItem.bind(this)
	}

	render() {
		return (
			<Fragment>
				<CSSTransition
					in={this.state.show}
					timeout={1000}
					classNames="fade"
					// css 隐藏 dom 会被移除
					unmountOnExit
					// 入场动画结束后执行
					onEntered={el => {
						el.style.color = '#00f'
					}}
					// 第一次展示也要动画效果, 增加 .fade-appear
					appear={true}
				>
					<div>hello</div>
				</CSSTransition>
				{/* <div className={this.state.show ? 'show' : 'hide'}>hello</div> */}
				<TransitionGroup>
					{this.state.list.map((item, index) => {
						return (
							<CSSTransition
								key={index}
								timeout={1000}
								classNames="fade"
								// css 隐藏 dom 会被移除
								unmountOnExit
								// 入场动画结束后执行
								onEntered={el => {
									el.style.color = '#00f'
								}}
								// 第一次展示也要动画效果, 增加 .fade-appear
								appear={true}
							>
								<div>item</div>
							</CSSTransition>
						)
					})}
				</TransitionGroup>
				<button onClick={this.handleToggle}>toggle</button>
				<button onClick={this.handleAddItem}>handleAddItem</button>
			</Fragment>
		)
	}

	handleToggle() {
		this.setState({
			show: this.state.show ? false : true
		})
	}

	handleAddItem() {
		this.setState(prevState => {
			return {
				list: [...prevState.list, 'item']
			}
		})
	}
}

export default App
