<template>
  <div>
    <header-block />
    <div class="layout">
      <category-list v-if="categories" :categories="categories" />
    </div>
  </div>
</template>

<script>
import categoryList from "@/components/category/categoryList";
import headerBlock from "@/components/header/headerBlock";
import { mapActions, mapState } from "vuex";
export default {
  name: "MainPage",
  components: {
    categoryList,
    headerBlock,
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

<style scoped></style>
