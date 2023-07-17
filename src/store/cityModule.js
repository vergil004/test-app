// import axios from "axios";

import axios from "axios";

export const cityModule = {
  state: () => ({
    city: 1,
    cityList: [],
    cityName: "Новосибирск",
  }),
  mutations: {
    setCityList(state, list) {
      state.cityList = list;
    },
    setCity(state, id) {
      state.city = id;
    },
    setCityName(state, name) {
      state.cityName = name;
    },
  },
  actions: {
    async getCityList({ commit }, inputValue) {
      try {
        const response = await axios.get(
          "https://nlstar.com/api/catalog3/v1/city/",
          {
            params: {
              term: inputValue,
              country: "ru",
            },
          }
        );
        commit("setCityList", response.data.data);
      } catch (error) {
        commit("setCityList", []);
      }
    },
  },
};
