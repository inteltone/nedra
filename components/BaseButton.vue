<script setup>
defineProps({
	text: String
})
</script>
<template>
	<button class="btn">{{ text }}</button>
</template>
<style lang="scss">
.btn{
	display: grid;
	place-items: center;
	block-size: 57px;
	padding-inline: 50px;
	color: var(--clr-white);
	background-color: var(--clr-black);
	text-transform: uppercase;
	border: none;
	border-radius: 8px;
}
</style>