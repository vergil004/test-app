<template>
  <div>
    <header-block />
    <div class="layout">
      <h1 class="main__title">Категории товаров</h1>
      <div v-if="isLoading && !categories.length" class="main-page__loader">
        <loader-block></loader-block>
      </div>
      <category-list v-else :categories="categories" />
    </div>
  </div>
</template>

<script>
import categoryList from "@/components/category/categoryList";
import headerBlock from "@/components/header/headerBlock";
import loaderBlock from "@/components/base/loaderBlock";
import { mapActions, mapState } from "vuex";
export default {
  name: "MainPage",
  components: {
    categoryList,
    headerBlock,
    loaderBlock,
  },
  computed: {
    ...mapState({
      categories: (state) => state.categories.categories,
      isLoading: (state) => state.categories.isLoading,
    }),
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    ...mapActions({
      getCategories: "getCategories",
    }),
  },
};
</script>

<style scoped>
.main-page__loader {
  height: calc(100vh - 200px);
}
</style>
