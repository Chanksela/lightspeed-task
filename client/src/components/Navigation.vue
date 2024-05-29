<template>
	<nav>
		<div class="nav-links">
			<a href="/">Home</a>
			<RouterLink to="/about">Settings</RouterLink>
		</div>
		<EcwidCartWidget v-if="isRoot" />
	</nav>
</template>
<script setup lang="ts">
	import { computed } from "vue";
	import { RouterLink, useRoute } from "vue-router";
	import EcwidCartWidget from "@/components/Partials/EcwidCartWidget.vue";
	const currentRoute = useRoute();
	const isRoot = computed(() => currentRoute.path === "/");
</script>
<style scoped>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background-color: #f0f0f0;
	}
	nav a {
		text-decoration: none;
		color: #333;
		font-size: 1.1rem;
	}
	nav a:hover {
		color: #007bff;
		text-decoration: underline;
	}
	.nav-links {
		display: flex;
		gap: 2rem;
	}
</style>
