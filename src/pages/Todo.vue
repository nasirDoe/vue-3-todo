<template>
  <div class="h-screen w-full flex justify-center items-center">
    <div class="max-w-lg w-full shadow rounded p-6">
      <div class="block text-center mb-4">
        <h1 class="text-2xl font-bold text-green-400">Todo with Vue.js 3</h1>
        <p class="text-sm text-gray-400">Manage your todos</p>
      </div>
      <form @submit.prevent="todoPage.createTodo">
        <div class="flex mb-6">
          <div class="flex-grow">
            <input
              type="text"
              v-model="todoPage.form.todoText"
              class="w-full border-1 rounded px-4 py-2 text-lg text-gray-500 outline-none focus:shadow transition-all duration-300 focus:outline-none focus:border-green-200"
            />
          </div>
          <button
            class="px-6 flex items-center text-white bg-blue-400 font-bold text-base rounded ml-4 focus:outline-none hover:bg-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
      <!-- Todo List -->
      <div class="flex flex-col space-y-3">
        <div
          v-for="(todo, index) in todoPage.todoList"
          :key="index"
          :class="{ 'bg-gray-100 cusrsor-default': todo.status }"
          class="flex rounded border-1 p-3"
        >
          <div v-if="todo.id === todoPage.form.editId" class="w-full">
            <input
              type="text"
              v-model="todoPage.form.textEdit"
              class="w-full border-1 rounded px-3 py-2 text-base text-gray-500 outline-none focus:shadow transition-all duration-300 focus:outline-none focus:border-green-200"
              @keydown.enter="todoPage.updateTodo"
            />
            <span class="block py-2 text-sm text-gray-400">Enter to save</span>
          </div>
          <p
            v-else
            class="text-base text-gray-600 flex-grow self-center"
            :class="{ 'line-through text-red-500': todo.status }"
          >{{ todo.todo }}</p>
          <div
            v-if="todo.id !== todoPage.form.editId"
            class="inline-flex space-x-2"
          >
            <button
              v-if="todo.status === false"
              class="btn w-8 h-8 rounded bg-green-400 text-white"
              @click="todoPage.selectTodo(index)"
            >
              <BIconPencilSquare />
            </button>
            <button
              class="btn w-8 h-8 rounded text-white"
              :class="todo.status ? 'bg-gray-400' : 'bg-yellow-400'"
              @click.prevent="todoPage.changeStatus(index)"
            >
              <BIconXLg v-if="todo.status" />
              <BIconCheckLg v-else />
            </button>
            <button
              class="btn w-8 h-8 rounded bg-red-400 text-white"
              @click="todoPage.deleteTodo(index)"
            >
              <BIconTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
// @ts-ignore
import { v4 as idV4 } from 'uuid';

interface ListTodo {
  id: any;
  todo: string;
  status: boolean;
}
type listType = ListTodo[];

export default defineComponent({
  name: 'Todo',
  setup: () => {
    const todoPage = {
      form: reactive({
        todoText: '',
        textEdit: '',
        editId: '',
      }),
      todoList: reactive([] as listType),
      createTodo: () : void => {
        const newTodo: string = todoPage.form.todoText;
        const todos = todoPage.todoList;
        if (newTodo.length > 0) {
          todos.unshift({ id: idV4(), todo: newTodo, status: false });
        }
        todoPage.form.todoText = '';
      },
      deleteTodo: (index: number) : void => {
        const todo = todoPage.todoList;
        todo.splice(index, 1);
      },
      changeStatus: (index: number) : void => {
        const todo = todoPage.todoList;
        todo[index].status = !todo[index].status;
      },
      selectTodo: (index: number) : void =>{
        const todo = todoPage.todoList;
        todoPage.form.editId = todo[index].id;
        todoPage.form.textEdit = todo[index].todo;
      },
      updateTodo: () : void => {
        const index = todoPage.todoList.findIndex((item) => item.id === todoPage.form.editId)
        if (todoPage.form.textEdit.length > 0) {
          todoPage.todoList[index].todo = todoPage.form.textEdit
          todoPage.form.editId = ''
        } else {
          alert('Jangan dikosingin gaes!!')
        }

      }
    };

    return {
      todoPage,
    };
  },
});
</script>
<style lang="scss" scoped>
.btn {
  @apply flex justify-center items-center outline-none;
  &:focus {
    @apply outline-none;
  }
  &:hover {
    @apply opacity-70;
  }
  .unicon {
    margin-top: 0.3125rem;
  }
}
</style>