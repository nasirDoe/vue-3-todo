<template>
  <div v-if="visible" class="modal__overlay">
    <div class="modal">
      <div class="modal__header"></div>
      <div class="modal__body">
        <slot name="body"></slot>
      </div>
      <div class="modal__footer"></div>
    </div>
  </div>
</template>
<script>
import { defineComponent, watch } from 'vue'
export default defineComponent ({
  props: {
    visible: {
      default: false,
      type: Boolean,
      required: true,
    },
  },
  setup: (props, { emit }) => {
    watch(
      () => props.visible,
      (visible) => {
        if (visible === true) {
          emit('on-show')
        } else {
          emit('on-close')
        }
      }
    )
  },
})
</script>