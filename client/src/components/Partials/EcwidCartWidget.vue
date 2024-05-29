<template>
	<div class="ec-cart-widget"></div>
</template>
<script setup lang="ts">
	import { defineProps, onMounted } from "vue";

	const props = defineProps({
		storeId: {
			type: Number,
			default: 101560752,
		},
	});

	const loadScript = (src: string, callback: () => void) => {
		const script = document.createElement("script");
		script.type = "text/javascript";
		script.charset = "utf-8";
		script.setAttribute("data-cfasync", "false");
		script.src = src;
		script.onload = callback;
		document.head.appendChild(script);
	};

	const initializeEcwid = () => {
		const ecwidInitScript = document.createElement("script");
		ecwidInitScript.type = "text/javascript";
		ecwidInitScript.text = "Ecwid.init();";
		document.head.appendChild(ecwidInitScript);
	};

	onMounted(() => {
		loadScript(
			`https://app.ecwid.com/script.js?${props.storeId}&data_platform=code`,
			() => {
				initializeEcwid();
			}
		);
	});
</script>
