import axios from "axios";
import { filterTag } from "@/helpers";

export const productsModule = {
  state: () => ({
    products: [],
    subCategories: [],
    currentCategory: "",
    filterSlug: "",
    isLoading: true,
  }),
  mutations: {
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setSubCategories(state, subCategories) {
      state.subCategories = subCategories;
    },
    setCurrentCategoryName(state, currentCategory) {
      state.currentCategory = currentCategory;
    },
    setFilterSlug(state, filterSlug) {
      state.filterSlug = filterSlug;
    },
  },
  actions: {
    async getProducts({ commit }, slug) {
      commit("setLoading", true);
      try {
        const response = await axios.get(
          `https://nlstar.com/ru/api/catalog3/v1/menutags/${slug}`,
          {
            params: {
              city_id: 1,
            },
          }
        );
        commit("setProducts", response.data.products);
      } catch (error) {
        console.log(error);
      } finally {
        commit("setLoading", false);
      }
    },

    async getCurrentCategory({ commit, rootState }, slug) {
      commit("setLoading", true);
      if (rootState.categories.categories.length) {
        const categories = JSON.parse(
          JSON.stringify(rootState.categories.categories)
        );
        const currentCategory = categories.filter((item) => item.slug === slug);
        const subCategories =
          currentCategory[0].children.length > 2
            ? currentCategory[0].children
            : [];
        commit("setSubCategories", subCategories);
        commit("setCurrentCategoryName", currentCategory[0].name);
        commit("setLoading", false);
      } else {
        try {
          const response = await axios.get(
            "https://nlstar.com/ru/api/catalog3/v1/menutags/",
            {
              params: {
                city_id: 1,
              },
            }
          );
          const currentCategory = response.data.tags.filter(
            (item) => item.slug === slug
          );
          const subCategories =
            currentCategory[0].children.length > 2
              ? currentCategory[0].children
              : [];
          commit("setSubCategories", subCategories);
          commit("setCurrentCategoryName", currentCategory[0].name);
        } catch (error) {
          console.log(error);
        } finally {
          commit("setLoading", false);
        }
      }
    },
  },
  getters: {
    filteredProducts: (state) => {
      if (!state.products.length) {
        return [];
      }
      if (!state.filterSlug.length) {
        return state.products;
      }
      return state.products.filter(
        (item) => filterTag(item.tags, state.filterSlug).length
      );
    },
  },
};
