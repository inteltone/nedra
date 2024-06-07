<script setup>
const isBasketCounter = useBasketCounter()
onMounted(() => {
	let basket = document.querySelector('.basket-counter')
	window.addEventListener('click', (e) => {
		const dialogDimensions = basket.getBoundingClientRect()
		if (
			e.clientX < dialogDimensions.left ||
			e.clientX > dialogDimensions.right ||
			e.clientY < dialogDimensions.top ||
			e.clientY > dialogDimensions.bottom
		) {
			isBasketCounter.value = false
		}
	})
})
</script>
<template>
	<div class="basket-counter" :class="{active: isBasketCounter}">
		В корзине 3 позиции на сумму 8 160 &#x20BD;
		<BaseButton class="basket-counter__btn" text="Оформить" />
	</div>
</template>