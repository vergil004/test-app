<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "App",
  beforeMount() {
    if (localStorage.cityName) {
      this.setCityName(localStorage.cityName);
    }
    if (localStorage.cityID) {
      this.setCity(localStorage.cityID);
    }
  },
  methods: {
    ...mapMutations({
      setCity: "setCity",
      setCityName: "setCityName",
    }),
  },
};
</script>

<style>
@font-face {
  font-family: "Futura-PT";
  src: url("assets/fonts/futura-pt.ttf") format("truetype");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "Futura-PT";
  src: url("assets/fonts/futura-pt-medium.ttf") format("truetype");
  font-style: normal;
  font-weight: 600;
  font-display: swap;
}
body {
  margin: 0;
}
#app {
  font-family: "Futura-PT";
}
* {
  box-sizing: border-box;
  color: #272727;
}
body {
  background-color: #f7f7f7;
}
.layout {
  width: 1150px;
  margin: 0 auto;
}
.main__title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 44px;
  line-height: 44px;
  font-weight: 600;
  margin-bottom: 20px;
}
.main__title h1 {
  font-size: 44px;
  line-height: 44px;
  margin: 0;
}
</style>
