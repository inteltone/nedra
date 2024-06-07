<script setup>
const counter = ref(0)
function decrement() {
	if (counter.value > 0) counter.value--
}
</script>
<template>
	<div class="counter">
		<button class="decrement" @click="decrement">-</button>
		<input type="number" min="0" v-model="counter">
		<button class="increment" @click="counter++">+</button>
	</div>
</template>