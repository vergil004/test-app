<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
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
</style>
