// import React, { Component } from 'react'
import React from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const TodoUI = props => {
	return (
		<div style={{ margin: '10px' }}>
			<div>
				<Input
					placeholder="input"
					style={{ width: '300px', marginRight: '10px' }}
					value={props.inputValue}
					onChange={props.handleInputChange}
				/>
				<Button type="primary" onClick={props.handleBtnClick}>
					submit
				</Button>
			</div>
			<List
				style={{ marginTop: '10px', width: '300px' }}
				bordered
				dataSource={props.list}
				renderItem={(item, index) => (
					<List.Item
						onClick={() => {
							props.handleItemClick(index)
						}}
					>
						{item}
					</List.Item>
				)}
			/>
		</div>
	)
}

// class TodoUI extends Component {
// 	render() {
// 		return (
// 			<div style={{ margin: '10px' }}>
// 				<div>
// 					<Input
// 						placeholder="input"
// 						style={{ width: '300px', marginRight: '10px' }}
// 						value={this.props.inputValue}
// 						onChange={this.props.handleInputChange}
// 					/>
// 					<Button type="primary" onClick={this.props.handleBtnClick}>
// 						submit
// 					</Button>
// 				</div>
// 				<List
// 					style={{ marginTop: '10px', width: '300px' }}
// 					bordered
// 					dataSource={this.props.list}
// 					renderItem={(item, index) => (
// 						<List.Item
// 							onClick={index => {
// 								this.props.handleItemClick(index)
// 							}}
// 						>
// 							{item}
// 						</List.Item>
// 					)}
// 				/>
// 			</div>
// 		)
// 	}
// }

export default TodoUI
