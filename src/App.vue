<template>
  <Todo></Todo>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import Todo from './pages/Todo.vue'

export default defineComponent({
  name: 'App',
  components: {
    Todo
  },
  setup: () => {
    onMounted(() :void => {
      document.title = 'Todo App'
    })
  }
})
</script>