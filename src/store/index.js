import { createStore } from "vuex";
import { categoriesModule } from "@/store/categoriesModule";
import { productsModule } from "@/store/productsModule";

export default createStore({
  modules: {
    categories: categoriesModule,
    products: productsModule,
  },
});
