import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
	focused: false,
  mouseIn: false,
  // 变成 imutable 数组
	list: [],
	page: 1,
	totalPage: 1
})

export default (state = defaultState, action) => {
	switch (action.type) {
    case constants.SEARCH_FOCUS:
      // immutable set 方法, 返回一个新数据
			return state.set('focused', true)
		case constants.SEARCH_BLUR:
			return state.set('focused', false)
    case constants.CHANGE_LIST:
      // immutable merge 方法, 同时改变多个内容
			return state.merge({
				list: action.data,
				totalPage: action.totalPage
			})
		case constants.MOUSE_ENTER:
			return state.set('mouseIn', true)
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn', false)
		case constants.CHANGE_PAGE:
			return state.set('page', action.page)
		default:
			return state
	}
}
