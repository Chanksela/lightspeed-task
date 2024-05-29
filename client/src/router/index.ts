import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomePage,
		},
		{
			path: "/settings",
			name: "settings",
			component: () => import("../views/Settings.vue"),
		},
	],
});

export default router;
