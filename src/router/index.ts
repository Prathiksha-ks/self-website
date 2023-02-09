import type { Component } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: (): Promise<Component> => import("@/views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: (): Promise<Component> => import("@/views/AboutView.vue"),
    },
    {
      path: "/specialization",
      name: "specialization",
      component: (): Promise<Component> =>
        import("@/views/SpecializationView.vue"),
    },
    {
      path: "/experience",
      name: "experience",
      component: (): Promise<Component> => import("@/views/ExperienceView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: (): Promise<Component> => import("@/views/ContactView.vue"),
    },
  ],
});

export default router;
