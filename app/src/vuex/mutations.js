import { ADD_TASK, TOGGLE_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_ALL_TASK, CLEAR_COMPLETED } from './mutation-types'

export default {
  [ADD_TASK] (state, { text }) {
    state.tasks.push({
      text,
      done: false
    })
  },
  [TOGGLE_TASK] (state, { task }) {
    task.done = !task.done
  },
  [DELETE_TASK] (state, { task }) {
    state.tasks.splice(state.tasks.indexOf(task), 1)
  },
  [EDIT_TASK] (state, { task, value }) {
    task.text = value
  },
  [TOGGLE_ALL_TASK] (state, { done }) {
    state.tasks.forEach((task) => {
      task.done = done
    })
  },
  [CLEAR_COMPLETED] (state) {
    state.tasks = state.tasks.filter(task => !task.done)
  }
}
