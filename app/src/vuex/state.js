export const STORAGE_KEY = 'tasks-vuejs'

export default {
  tasks: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}
