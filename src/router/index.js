import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import FavoritePage from "../views/FavoritePage.vue";
import BookDetails from "../views/BookDetails.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainPage,
  },
  {
    path: "/favorite",
    name: "favorite",
    component: FavoritePage,
  },
  {
    path: "/details",
    name: "details",
    component: BookDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
