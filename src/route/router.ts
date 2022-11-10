import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  // ...
  {
    path: "/",
    name: "home",
    component: () => import("@views/components/home/home.vue"),
  },
  {
    path: "/Category",
    name: "category",
    component: () => import("@views/components/category/category.vue"),
  },
  {
    path: "/Search",
    name: "search",
    component: () => import("@views/components/search/search.vue"),
  },
  {
    path: "/Video",
    name: "video",
    component: () => import("@views/components/video/video.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
