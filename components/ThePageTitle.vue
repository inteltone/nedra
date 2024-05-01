<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		default: true,
	}
})
</script>
<template>
	<h1 class="page-title h2">{{ props.title }}</h1>
</template>
<style lang="scss">
.page-title{
	max-inline-size: 250px;
}
</style>