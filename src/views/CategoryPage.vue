<template>
  <div>
    <header-block></header-block>
    <div class="category-page layout">
      <div class="main__title">
        <router-link to="/"
          ><img :src="icons.back" alt="кнопка назад"
        /></router-link>
        <h1>{{ currentCategory }}</h1>
      </div>
      <div class="category-page__cont">
        <product-filters :filters="subCategories" />
        <div v-if="isLoading" class="category-page__loader">
          <loader-block></loader-block>
        </div>
        <div v-else>
          <product-list
            v-if="filteredProducts.length"
            :products="filteredProducts"
          />
          <div v-else class="category-page__empty">
            В данной категории ничего нет.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { mapActions, mapState, mapGetters } from "vuex";
import productList from "@/components/product/productList";
import productFilters from "@/components/product/productFilters";
import headerBlock from "@/components/header/headerBlock";
import loaderBlock from "@/components/base/loaderBlock";
import back from "@/assets/img/back.svg";

export default {
  name: "CategoryPage",
  components: {
    productList,
    productFilters,
    headerBlock,
    loaderBlock,
  },
  data: () => ({
    icons: {
      back,
    },
  }),
  computed: {
    ...mapState({
      subCategories: (state) => state.products.subCategories,
      currentCategory: (state) => state.products.currentCategory,
      isLoading: (state) => state.products.isLoading,
    }),
    ...mapGetters({
      filteredProducts: "filteredProducts",
    }),
  },
  mounted() {
    const currentSlug = useRoute().params.slug;
    this.getProducts(currentSlug);
    this.getCurrentCategory(currentSlug, this.categories);
  },
  methods: {
    ...mapActions({
      getProducts: "getProducts",
      getCurrentCategory: "getCurrentCategory",
    }),
  },
};
</script>

<style scoped>
.category-page__cont {
  display: grid;
  grid-template-columns: 1fr 876px;
  gap: 34px;
}
.category-page__empty {
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
}
</style>
