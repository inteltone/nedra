<script setup>
const isBasketItem = useBasketItem()
const isTextarea = ref(false)
const counter = ref(0)
function decrement() {
	if (counter.value > 0) {
		counter.value--
	}
}
</script>
<template>
	<div class="basket-item" :class="{active: isBasketItem}">
		<p class="basket-item__top h3">
			<span class="brand">DOLZ</span>
			<span class="vin">C110</span>
		</p>
		<p class="name">Водяная помпа</p>
		<div class="basket-item__mid">
			<div class="price">2720  ₽</div>
			<div class="deliv">
				<i class="icon-lorry"></i>
				3 дня
			</div>
		</div>
		<div class="basket-item__form">
			<BaseButton class="basket-item__form-btn" text="Оформить заказ" />
			<div class="basket-item__form-inputs">
				<button class="minus decrement" @click="decrement">-</button>
				<input type="number" min="0" v-model="counter">
				<button class="plus increment" @click="counter++">+</button>
			</div>
		</div>
		<div class="basket-item__comment">
			<div 
				class="basket-item__comment-title" 
				@click="isTextarea = !isTextarea"
			>
				<i class="icon-edit"></i>
				<span :class="{active: isTextarea}">Добавить комментарий</span>
			</div>
			<div class="textarea-wrap" :class="{expanded: isTextarea}">
				<textarea placeholder="Упаковать покрепче"></textarea>
			</div>
		</div>
	</div>
</template>