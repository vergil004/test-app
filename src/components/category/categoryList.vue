<template>
  <div class="category-list">
    <category-item
      v-for="category in categories"
      :category="category"
      :key="category.id"
    ></category-item>
  </div>
</template>

<script>
import categoryItem from "@/components/category/categoryItem";
export default {
  props: {
    categories: {},
  },
  components: {
    categoryItem,
  },
};
</script>

<style scoped>
.category-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}
</style>
