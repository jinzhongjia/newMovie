import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  // ...
  {
    path: "/",
    name: "home",
    component: () => import("@components/home/home.vue"),
  },
  {
    path: "/Category/:id",
    name: "category",
    component: () => import("@components/category/category.vue"),
    children: [
      {
        path: ":pageNum",
        name: "category-page",
        component: () => import("@components/category/category.vue"),
      },
    ],
  },
  {
    path: "/Search/:keyword",
    name: "search",
    component: () => import("@components/search/search.vue"),
    children: [
      {
        path: ":pageNum",
        name: "search-page",
        component: () => import("@components/search/search.vue"),
      },
    ],
  },
  {
    path: "/Video/:id",
    name: "video",
    component: () => import("@components/video/video.vue"),
    children: [
      {
        path: ":num",
        name: "video-num",
        component: () => import("@components/video/video.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
