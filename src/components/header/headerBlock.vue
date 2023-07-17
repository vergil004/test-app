<template>
  <header class="header">
    <div class="header__cont layout">
      <button class="header__city" @click="showDialog">
        <img :src="icons.pin" />{{ cityName }}
      </button>
    </div>
    <app-modal v-model:show="dialogVisible">
      <city-select v-model:show="dialogVisible"></city-select>
    </app-modal>
  </header>
</template>

<script>
import { mapState } from "vuex";
import appModal from "@/components/base/appModal";
import citySelect from "@/components/city/citySelect";
import pin from "@/assets/img/pin.svg";
export default {
  data: () => ({
    icons: {
      pin,
    },
    dialogVisible: false,
  }),
  components: {
    appModal,
    citySelect,
  },
  computed: {
    ...mapState({
      cityName: (state) => state.city.cityName,
    }),
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    },
  },
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
  cursor: pointer;
}
.header__city img {
  width: 11px;
}
</style>
