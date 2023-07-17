<template>
  <div class="city-select">
    <div class="city-select__title">Выбор населённого пункта:</div>
    <div class="city__form">
      <div class="city__item">
        <input
          :value="city"
          @input="changeInput"
          type="text"
          class="city__input"
          :class="{ 'city__input--open': cityList.length }"
          placeholder="Например, Санкт-петербург"
        />
        <div class="city__selection" v-if="cityList.length && !isSelected">
          <ul>
            <li v-for="city in cityList" :key="city.id">
              <span @click="choiceCity(city.city, city.label, city.id)">{{
                city.label
              }}</span>
            </li>
          </ul>
        </div>
      </div>
      <app-button
        :is-disabled="!isSelected"
        :is-primary="isSelected"
        @click="sendForm"
        ><span class="city__button">Подтвердить</span></app-button
      >
    </div>
  </div>
</template>

<script>
import appButton from "@/components/base/appButton";
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    city: "",
    isSelected: false,
    id: 1,
    cityName: "",
  }),
  components: {
    appButton,
  },
  computed: {
    ...mapState({
      cityList: (state) => state.city.cityList,
    }),
  },
  methods: {
    ...mapActions({
      getCityList: "getCityList",
      getCategories: "getCategories",
    }),
    changeInput(e) {
      this.city = e.target.value;
      if (e.target.value.length > 2) {
        this.getCityList(e.target.value);
      }
      this.isSelected = false;
    },
    choiceCity(city, label, id) {
      this.city = label;
      this.id = id;
      this.cityName = city;
      this.isSelected = true;
    },
    ...mapMutations({
      setCity: "setCity",
      setCityName: "setCityName",
      setCityList: "setCityList",
    }),
    sendForm() {
      this.setCityName(this.cityName);
      this.setCity(this.id);
      localStorage.cityID = this.id;
      localStorage.cityName = this.cityName;
      this.setCityList([]);
      this.$emit("update:show", false);
      this.getCategories();
    },
  },
};
</script>

<style scoped>
.city-select__title {
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
}
.city__button {
  text-transform: uppercase;
  color: #acacac;
}
.city__form {
  display: grid;
  grid-template-columns: 540px 174px;
  gap: 18px;
}
.city__input {
  width: 540px;
  border-radius: 5px;
  border: 1px solid rgba(151, 151, 151, 0.5);
  background: #fff;
  padding-left: 16px;
  font-size: 18px;
  line-height: 23px;
  height: 48px;
}
.city__form .app-button {
  height: 48px;
}
.app-button--primary .city__button {
  color: #ffffff;
}
.city__item {
  position: relative;
}
.city__selection {
  overflow-y: scroll;
  max-height: 300px;
  position: absolute;
  top: 44px;
  border: 1px solid #272727;
  border-top: none;
  background-color: #fff;
  padding: 0 12px;
}
.city__selection ul {
  margin: 0;
  padding: 12px 0 0;
  border-top: 2px solid rgba(151, 151, 151, 0.3);
}
.city__selection li {
  list-style-type: none;
  margin-bottom: 7px;
}
.city__selection li span {
  color: #979797;
  display: inline-block;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;
}
.city__selection li span:hover {
  color: #272727;
}
.city__input--open {
  border-color: #272727;
}
</style>
