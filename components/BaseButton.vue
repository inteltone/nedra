<script setup>
const props = defineProps({
	text: String,
	disabled: Boolean
})
</script>
<template>
	<button class="btn" :disabled="props.disabled">
		<slot />
		<span>{{ props.text }}</span>
	</button>
</template>