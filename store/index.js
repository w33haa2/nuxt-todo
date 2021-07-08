import { COMPLETED, PENDING } from "../js/constants/status";

export const ADD_TODO_LIST = 'addTodoList'
export const SET_TODO_STATUS = 'setTodoStatus'
export const GET_COMPLETED_TODOS = 'getCompletedTodos'
export const GET_PENDING_TODOS = 'getPendingTodos'

export const state = () => {
  return {
    todoList: [],
  }
}

export const getters = {
  [GET_COMPLETED_TODOS](state) {
    return state.todoList.length ? state.todoList.filter(e => e.status === COMPLETED) : []
  },
  [GET_PENDING_TODOS](state) {
    return state.todoList.length ? state.todoList.filter(e => e.status === PENDING) : []
  }
}

export const mutations = {
  [ADD_TODO_LIST](state, item) {
    state.todoList.push(item)
  },
  [SET_TODO_STATUS](state, id) {
    state.todoList.find(e => e.id === id).status = COMPLETED
  },
}
