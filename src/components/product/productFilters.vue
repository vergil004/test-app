<template>
  <ul class="product-filters">
    <li>
      <router-link
        :to="`/${slugCurrent}`"
        @click="setFilterSlug('')"
        class="product-filters__link"
        >Все продукты</router-link
      >
    </li>
    <li v-for="item in filters" :key="item.id">
      <router-link
        @click="setFilterSlug(item.slug)"
        :to="`/${slugCurrent}/${item.slug}`"
        class="product-filters__link"
        >{{ item.name }}</router-link
      >
    </li>
  </ul>
</template>

<script>
import { useRoute } from "vue-router";
import { mapMutations } from "vuex";

export default {
  props: {
    filters: {},
  },
  data: () => ({
    slugCurrent: "",
  }),
  mounted() {
    this.slugCurrent = useRoute().params.slug;
    if (useRoute().params.subSlug) {
      this.setFilterSlug(useRoute().params.subSlug);
    }
  },
  methods: {
    ...mapMutations({
      setFilterSlug: "setFilterSlug",
    }),
  },
};
</script>

<style scoped>
.product-filters {
  margin: 0;
  padding: 0;
}
.product-filters li {
  list-style-type: none;
}
.product-filters__link {
  color: #000;
  font-size: 16px;
  display: block;
  padding: 8px 10px;
  border-bottom: 1px solid #e9eef3;
  text-decoration: none;
}
.product-filters__link.router-link-exact-active {
  background-color: #e9eef3;
}
</style>
