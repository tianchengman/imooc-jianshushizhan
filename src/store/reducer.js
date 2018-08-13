/*
import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store'
import { reducer as loginReducer } from '../pages/login/store'

const reducer = combineReducers({
	header: headerReducer,
	home: homeReducer,
	detail: detailReducer,
	login: loginReducer
})

export default reducer
*/

const defaultState = {
	inputValue: '123',
	list: [1, 2]
}

// reducer 可以接受 state, 但是不能修改 state
// state: previsouState
export default (state = defaultState, action) => {
	if (action.type === 'change_input_value') {
		// copy
		const newState = JSON.parse(JSON.stringify(state))
		newState.inputValue = action.value
		// return to Store
		return newState
	}
	if (action.type === 'add_todo_item') {
		const newState = JSON.parse(JSON.stringify(state))
		newState.list.push(newState.inputValue)
		newState.inputValue = ''
		console.log(newState)
		return newState
	}
	if (action.type === 'delete_todo_item') {
		const newState = JSON.parse(JSON.stringify(state))
		newState.list.splice(action.index, 1)
		return newState
	}
	return state
}
