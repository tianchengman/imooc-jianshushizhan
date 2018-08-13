import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import {
	// getInputChangeAction,
	// getAddItemAction,
	initListAction
	// getTodoList,
	// getInitList,
	// getDeleteItemAction
} from './actionCreators'
import axios from 'axios'

function* getInitList() {
	try {
		const res = yield axios.get('/todolist.json')
		const action = initListAction(res.data)
		yield put(action)
	} catch (e) {
    console.log('todolist.json request err!!')
  }
}

// generator func
function* mySaga() {
	yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga
