<template>
  <router-link
    :to="{
      name: 'Category',
      params: {
        slug: category.slug,
      },
    }"
    class="category-item"
    :style="{ backgroundImage: `url(${category.image})` }"
  >
    <div
      class="category-item__name"
      :style="{ color: `${category.text_color}` }"
    >
      {{ category.name }}
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    category: {},
  },
};
</script>

<style scoped>
.category-item {
  width: 271px;
  height: 152px;
  border-radius: 5px;
  display: block;
  text-decoration: none;
  padding: 20px;
}
</style>
