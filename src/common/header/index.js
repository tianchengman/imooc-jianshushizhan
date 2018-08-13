import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
// import { actionCreators as loginActionCreators } from '../../pages/login/store'
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button
} from './style'

class Header extends Component {
	render() {
		return (
			<HeaderWrapper>
				<Link to="/">
					<Logo />
				</Link>
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载App</NavItem>
					<NavItem className="right">
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<NavSearch className="focused" />
						<i className="focused iconfont zoom">&#xe614;</i>
					</SearchWrapper>
				</Nav>
				<Addition>
					<Link to="/write">
						<Button className="writting">
							<i className="iconfont">&#xe615;</i>
							写文章
						</Button>
					</Link>
					<Button className="reg">注册</Button>
				</Addition>
			</HeaderWrapper>
		)
	}
}

export default Header
