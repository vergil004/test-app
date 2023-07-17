<template>
  <div class="product-list">
    <product-item v-for="item in products" :product="item" :key="item.id" />
  </div>
</template>

<script>
import productItem from "@/components/product/productItem";
export default {
  components: {
    productItem,
  },
  props: {
    products: {},
  },
};
</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
</style>
