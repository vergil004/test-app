<template>
  <div class="loader">
    <img :src="loader" alt="loader" />
  </div>
</template>

<script>
import loader from "@/assets/img/loader.gif";
export default {
  data: () => ({
    loader,
  }),
};
</script>

<style scoped>
.loader {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
