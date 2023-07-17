import axios from "axios";

export const categoriesModule = {
  state: () => ({
    categories: [],
    isLoading: true,
  }),
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
  actions: {
    async getCategories({ commit, rootState }) {
      const city = JSON.parse(JSON.stringify(rootState.city.city));
      try {
        commit("setLoading", true);
        const response = await axios.get(
          "https://nlstar.com/ru/api/catalog3/v1/menutags/",
          {
            params: {
              city_id: city,
            },
          }
        );
        commit("setCategories", response.data.tags);
      } catch (error) {
        console.log("Город не найден");
      } finally {
        commit("setLoading", false);
      }
    },
  },
  getters: {},
};
