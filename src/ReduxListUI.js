﻿import React from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const ReduxListUI = props => {
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

export default ReduxListUI
