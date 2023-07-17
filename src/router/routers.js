import MainPage from "@/views/MainPage";
import { createRouter, createWebHistory } from "vue-router";
import CategoryPage from "@/views/CategoryPage";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/:slug",
    name: "Category",
    component: CategoryPage,
  },
  {
    path: "/:slug/:subSlug",
    component: CategoryPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
