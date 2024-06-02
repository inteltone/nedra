<script setup>
const props = defineProps({
	text: String
 })
</script>
<template>
	<button class="btn-period">{{ props.text }}</button>
</template>