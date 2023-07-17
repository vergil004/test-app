import { createStore } from "vuex";
import { categoriesModule } from "@/store/categoriesModule";
import { productsModule } from "@/store/productsModule";
import { cityModule } from "@/store/cityModule";

export default createStore({
  modules: {
    categories: categoriesModule,
    products: productsModule,
    city: cityModule,
  },
});
