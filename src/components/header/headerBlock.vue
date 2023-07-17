<template>
  <header class="header">
    <div class="header__cont layout">
      <button class="header__city"><img :src="icons.pin" />Новосибирск</button>
    </div>
  </header>
</template>

<script>
import pin from "@/assets/img/pin.svg";
export default {
  data: () => ({
    icons: {
      pin,
    },
  }),
};
</script>

<style scoped>
.header {
  background-color: #fff;
  display: flex;
  align-items: center;
  height: 72px;
  margin-bottom: 35px;
}
.header__city {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 15px;
  color: #272727;
  font-weight: 600;
  line-height: 24px;
}
.header__city img {
  width: 11px;
}
</style>
