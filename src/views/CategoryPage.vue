<template>
  <div class="category-page layout">
    <div class="category-page__title">
      <router-link to="/"
        ><img :src="icons.back" alt="кнопка назад"
      /></router-link>
      <h1>{{ currentCategory }}</h1>
    </div>
    <div class="category-page__cont">
      <product-filters :filters="subCategories" @filter="getFilterSlug" />
      <product-list
        v-if="filteredProducts.length"
        :products="filteredProducts"
      />
      {{ categories }}
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { mapActions, mapState, mapGetters } from "vuex";
import productList from "@/components/product/productList";
import productFilters from "@/components/product/productFilters";
import back from "@/assets/img/back.svg";

export default {
  name: "CategoryPage",
  components: {
    productList,
    productFilters,
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
</style>
