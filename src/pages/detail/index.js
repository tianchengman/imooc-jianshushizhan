import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// 有能力获取 router 里面所有内容
import { withRouter } from 'react-router-dom'
import { DetailWrapper, Header, Content } from './style'
import { actionCreators } from './store'

class Detail extends PureComponent {
	render() {
		// console.log(this.props.match.params.id)
		return (
			<DetailWrapper>
				<Header>{this.props.title}</Header>
				{/* 不会被转义 */}
				<Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
			</DetailWrapper>
		)
	}

	componentDidMount() {
		this.props.getDetail(this.props.match.params.id)
	}
}

const mapState = state => ({
	title: state.getIn(['detail', 'title']),
	content: state.getIn(['detail', 'content'])
})

const mapDispatch = dispatch => ({
	getDetail(id) {
		dispatch(actionCreators.getDetail(id))
	}
})

export default connect(
	mapState,
	mapDispatch
)(withRouter(Detail))
