import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  // imutable 对象, 使用 formJS .get() 来获取
	topicList: [],
	articleList: [],
	recommendList: [],
	articlePage: 1,
	showScroll: false
})

const changeHomeData = (state, action) => {
  // merge: 操作多个 immutable 对象
	return state.merge({
    // fromJS: 普通对象转换为 immutable 对象
		topicList: fromJS(action.topicList),
		articleList: fromJS(action.articleList),
		recommendList: fromJS(action.recommendList)
	})
}

const addArticleList = (state, action) => {
	return state.merge({
		'articleList': state.get('articleList').concat(action.list),
		'articlePage': action.nextPage
	})
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.CHANGE_HOME_DATA:
			return changeHomeData(state, action)
		case constants.ADD_ARTICLE_LIST:
			return addArticleList(state, action)
		case constants.TOGGLE_SCROLL_TOP:
			return state.set('showScroll', action.show)
		default:
			return state
	}
}
