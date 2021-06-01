<template>
  <Todo></Todo>
  <button @click.prevent="showModal">Show Modal</button>
  <teleport to="#modal-app">
    <Modal :visible="isVisible" @on-show="onShowModal" @on-close="onCloseModal">
      <template #body>
        <div class="p-4 bg-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          magnam similique commodi, dolorem neque voluptate quae velit modi, eum
          cupiditate nihil quam placeat, blanditiis nemo repudiandae aperiam
          necessitatibus soluta facere. <br /><br />
          <button class="px-3 py-2 bg-yellow-600" @click.prevent="closeModal">
            Close Modal
          </button>
        </div>
      </template>
    </Modal>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Todo from "./pages/Todo.vue";
import Modal from "./components/Modal.vue";
export default defineComponent({
  name: "App",
  components: {
    Todo,
    Modal,
  },
  setup: () => {
    const isVisible = ref(false);
    const showModal = (): void => {
      isVisible.value = true;
    };
    const closeModal = (): void => {
      isVisible.value = false;
    };
    const onShowModal = (): void => {
      console.log("Modal is show");
    };
    const onCloseModal = (): void => {
      console.log("Modal is hide");
    };
    onMounted((): void => {
      document.title = "Todo App";
    });
    return {
      isVisible,
      showModal,
      closeModal,
      onShowModal,
      onCloseModal,
    };
  },
});
</script>