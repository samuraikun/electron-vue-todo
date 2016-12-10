import { ADD_TASK, TOGGLE_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_ALL_TASK, CLEAR_COMPLETED } from './mutation-types.js'

export const addTask = ({ commit }, text) => {
  if (text) {
    commit(ADD_TASK, {
      text
    })
  }
}

export const toggleTask = ({ commit }, task) => {
  commit(TOGGLE_TASK, {
    task
  })
}

export const deleteTask = ({ commit }, task) => {
  commit(DELETE_TASK, {
    task
  })
}

export const editTask = ({ commit }, task) => {
  commit(EDIT_TASK, {
    task
  })
}

export const toggleAllTask = ({ commit }, task) => {
  commit(TOGGLE_ALL_TASK, {
    task
  })
}

export const clearCompleted = ({ commit }, task) => {
  commit(CLEAR_COMPLETED, {
    task
  })
}
