<template>
  <button
    :disabled="isDisabled"
    class="app-button"
    :class="{ 'app-button--primary': isPrimary }"
  >
    <span class="app-button__content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    isPrimary: {
      type: Boolean,
      required: false,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
.app-button {
  border-radius: 24px;
  border: 2px solid rgba(151, 151, 151, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  font-size: 18px;
}
.app-button__content {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.app-button--primary {
  color: #ffffff;
  background: linear-gradient(270deg, #ffa800 0%, #ff6f00 100%);
  border: none;
  position: relative;
  cursor: pointer;
}
.app-button--primary .app-button__content {
  color: #ffffff;
  z-index: 1;
}
.app-button--primary:after {
  content: "";
  position: absolute;
  z-index: 0;
  width: 90%;
  height: 28px;
  border-radius: 24px;
  background: linear-gradient(270deg, #ffa800 0%, #ff6f00 100%);
  filter: blur(13.591408729553223px);
  left: 50%;
  bottom: -8px;
  transform: translateX(-50%);
}
</style>
