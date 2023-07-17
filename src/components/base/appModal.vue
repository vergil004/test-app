<template>
  <div class="modal__overlay" v-if="show">
    <div class="modal">
      <button class="modal__close"></button>
      <div class="modal__cont"></div>
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
};
</script>

<style scoped>
.modal {
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(151, 151, 151, 0.2);
  padding: 28px 18px 32px;
}
.modal__overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(53, 54, 71, 0.7);
}
</style>
