import {
	CHANGE_INPUT_VALUE,
	ADD_TODO_ITEM,
	INIT_LIST_ACTION,
  DELETE_TODO_ITEM,
  GET_INIT_LIST
} from './actionTypes'
// import axios from 'axios'

export const getInputChangeAction = value => ({
	type: CHANGE_INPUT_VALUE,
	value
})

export const getAddItemAction = () => ({
	type: ADD_TODO_ITEM
})

export const getDeleteItemAction = index => ({
	type: DELETE_TODO_ITEM,
	index
})

export const initListAction = data => ({
	type: INIT_LIST_ACTION,
	data
})

/* 使用了 redux-thunk 中间件后能返回函数, async */
// export const getTodoList = () => {
//   return (dispatch) => {
//     axios
// 			.get('/todolist.json')
// 			.then(res => {
//         // console.log(res.data)
//         const data = res.data
//         console.log(data)
//         const action = initListAction(data)
//         dispatch(action)
//         // store.dispatch(action)
// 				// this.setState(() => {
// 				// 	return {
// 				// 		list: [...res.data]
// 				// 	}
// 				// })
// 			})
// 			.catch(() => {
// 				alert('err')
// 			})
//   }
// }

/* redux-saga */
export const getInitList = () => ({
  type: GET_INIT_LIST
})
