<template>
  <li :class="{ completed: task.done, editing: editing }" class="task">
    <div class="view">
      <input type="checkbox" :checked="task.done" @change="TOGGLE_TASK({ task: task })" class="toggle"/>
      <label v-text="task.text" @dblclick="editing = true"></label>
      <button @click="DELETE_TASK({ task: task })" class="destroy"></button>
    </div>
    <input v-show="editing" v-focus="editing" :value="task.text" @keyup.enter="doneEdit" @keyup.esc="cancelEdit" @blur="doneEdit" class="edit"/>
  </li>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Task',
  props: ['task'],
  data () {
    return {
      editing: false
    }
  },
  directives: {
    focus (el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => {
          el.focus()
        })
      }
    }
  },
  methods: {
    ...mapMutations([
      'EDIT_TASK',
      'TOGGLE_TASK',
      'DELETE_TASK'
    ]),
    doneEdit (e) {
      const value = e.target.value.trim()
      const { task } = this
      if (value) {
        this.DELETE_TASK({
          task
        })
      } else if (this.editing) {
        this.EDIT_TASK({
          task,
          value
        })
        this.editing = false
      }
    },
    cancelEdit (e) {
      e.target.value = this.task.text
      this.editing = false
    }
  }
}
</script>