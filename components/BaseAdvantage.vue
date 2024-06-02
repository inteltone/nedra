<script setup>
defineProps({
	icon: String,
	title: String	
})
</script>
<template>
	<li class="advantage">
		<i :class="`icon-${icon}`"></i>
		<div class="advantage__text">
			<p class="advantage__title h2">{{ title }}</p>
			<slot></slot>
		</div>
	</li>
</template>