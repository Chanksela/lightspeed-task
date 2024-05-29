<template>
	<header>
		<Navigation />
	</header>
	<RouterView />
</template>

<script setup lang="ts">
	import { RouterView } from "vue-router";
	import { createApp, onMounted, onUnmounted, onUpdated, ref } from "vue";

	import Navigation from "@/components/Navigation.vue";
	import CustomEcwidWidget from "@/components/CustomEcwidWidget.vue";

	const addedDiv = ref(false);

	const ecwidCheckoutLoaded = () => {
		const orderDivElement = document.querySelector(
			".ec-cart-next__step--order-confirmation"
		);
		if (orderDivElement && !addedDiv.value) {
			const newDivElement = document.createElement("div");
			orderDivElement.insertAdjacentElement("beforeend", newDivElement);
			createApp(CustomEcwidWidget).mount(newDivElement);
			addedDiv.value = true;
		}
	};
	onMounted(() => {
		ecwidCheckoutLoaded();
		const observer = new MutationObserver(ecwidCheckoutLoaded);
		observer.observe(document.body, { childList: true, subtree: true });
		onUnmounted(() => {
			observer.disconnect();
		});
	});
	onUpdated(() => {
		ecwidCheckoutLoaded();
	});
</script>

<style scoped>
	header {
		margin-bottom: 1.2rem;
	}
</style>
