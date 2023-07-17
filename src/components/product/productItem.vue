<template>
  <div class="product-item">
    <img :src="product.main_image_thumb_300" alt="изображение товара" />
    <div class="product-item__info">
      <div class="product-item__category">
        {{ product.category.name }}
      </div>
      <div class="product-item__name">
        {{ product.present_name }}
      </div>
      <div class="product-item__desc">
        {{ product.comment_name }}
      </div>
      <div class="product-item__price">{{ product.price }}₽</div>
    </div>
    <div class="product-item__button">
      <app-button
        v-if="!product.allowed || !product.available"
        :is-disabled="true"
      >
        <span class="product-item__disabled">Нет в наличии</span>
      </app-button>
      <app-button v-else :is-primary="true"> В корзину </app-button>
    </div>
  </div>
</template>

<script>
import appButton from "@/components/base/appButton";
export default {
  components: {
    appButton,
  },
  props: {
    product: {},
  },
};
</script>

<style scoped>
.product-item {
  width: 276px;
  background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(151, 151, 151, 0.2);
  border-radius: 0 0 5px 5px;
  display: grid;
}
.product-item img {
  width: 100%;
}
.product-item__info {
  padding: 6px 24px 0px;
  text-align: center;
}
.product-item__category {
  font-size: 14px;
  line-height: 14px;
  color: #979797;
  font-weight: 400;
}
.product-item__name {
  margin-top: 4px;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
}
.product-item__desc {
  margin-top: 9px;
  font-size: 16px;
  line-height: 20px;
}
.product-item__price {
  font-size: 26px;
  font-weight: 600;
  line-height: 24px;
  margin-top: 14px;
}
.product-item__button {
  padding: 16px 24px 23px;
  align-self: flex-end;
}
.product-item__disabled {
  color: rgba(39, 39, 39, 0.5);
}
</style>
