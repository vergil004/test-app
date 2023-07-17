<template>
  <div @click="closeDialog" class="modal__overlay" v-if="show">
    <div @click.stop class="modal">
      <button @click="closeDialog" class="modal__close">
        <img :src="icons.close" alt="закрыть окно" />
      </button>
      <div class="modal__cont">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import close from "@/assets/img/close.svg";
export default {
  name: "app-dialog",
  data: () => ({
    icons: {
      close,
    },
  }),
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style scoped>
.modal {
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(151, 151, 151, 0.2);
  padding: 28px 18px 32px;
  position: relative;
}
.modal__overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(53, 54, 71, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
}
.modal__close {
  position: absolute;
  top: 18px;
  right: 18px;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
