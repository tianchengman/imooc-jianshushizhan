import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { RecommendWrapper, RecommendItem } from '../style'

class Recommend extends PureComponent {
	render() {
		return (
			<RecommendWrapper>
				{this.props.list.map(item => {
					return (
            // 手动打开 http://localhost:3000/api/home.json 里面的两张图片
						<RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')} />
					)
				})}
			</RecommendWrapper>
		)
	}
}

const mapState = state => ({
	list: state.getIn(['home', 'recommendList'])
})

export default connect(
	mapState,
	null
)(Recommend)
