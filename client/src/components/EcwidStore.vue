<template>
	<div :id="`my-store-${storeId}`"></div>
</template>
<script setup lang="ts">
	import { onMounted, defineProps } from "vue";

	const props = defineProps({
		storeId: {
			type: Number,
			default: 101560752,
		},
	});

	const injectEcwidScript = (storeId: number) => {
		const ecwidScript = document.createElement("script");
		ecwidScript.setAttribute("type", "text/javascript");
		ecwidScript.setAttribute("charset", "utf-8");
		ecwidScript.setAttribute("data-cfasync", "false");
		ecwidScript.setAttribute(
			"src",
			`https://app.ecwid.com/script.js?${storeId}&data_platform=code&data`
		);
		ecwidScript.onload = () => injectEcwidProductBrowser(storeId);
		document.head.appendChild(ecwidScript);
	};

	const injectEcwidProductBrowser = (storeId: number) => {
		const ecwidBrowserScript = document.createElement("script");
		ecwidBrowserScript.setAttribute("type", "text/javascript");
		ecwidBrowserScript.setAttribute("charset", "utf-8");
		ecwidBrowserScript.text = `xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-${storeId}");`;
		document.head.appendChild(ecwidBrowserScript);
	};

	onMounted(() => {
		injectEcwidScript(props.storeId);
	});
</script>
