import _ from 'lodash'

export const addTodo = (todo) => {
  return (dispatch) =>
    dispatch({ type: 'todos/ADD_TODO', payload: todo })
}

export const updateTodoText = (todoText) => {
  return (dispatch) =>
    dispatch({ type: 'todos/UPDATE_TODO_TEXT', payload: todoText })
}

export const completeTodo = (todoId) => {
  return (dispatch) =>
    dispatch({ type: 'todos/COMPLETE_TODO', payload: todoId })
}

export const deleteTodo = (todoId) => {
  return (dispatch) =>
    dispatch({ type: 'todos/DELETE_TODO', payload: todoId })
}
export function CompleteTodo(todoId)(myStore.dispatch) {
	return (dispatch) => {
		dispatch(updateTodoText());
	}
}
export function deleteTodo(todoId)(myStore.dispatch) {
	return (dispatch) => {
		dispatch(updateTodoText());
	}
}
