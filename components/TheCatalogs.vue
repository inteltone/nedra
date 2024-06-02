<script setup>
const CATALOGS = [
	{name: 'Запчасти', img: 'spares'},
	{name: 'Запчасти для то', img: 'spares-to'},
	{name: 'аккумуляторы', img: 'batteries'},
	{name: 'масла', img: 'oils'},
	{name: 'ШИНЫ и диски', img: 'tires-wheels'},
	{name: 'автосвет', img: 'autolight'},
	{name: 'аксессуары', img: 'accessories'},
]
const catalogs = ref(CATALOGS)
</script>
<template>
	<div class="catalogs">
			<NuxtLink to="/" class="catalogs__item catalog" v-for="item,index in catalogs" :key="item.name">
				<div class="catalog__num">0{{ index + 1 }}</div>
				<div class="catalog__title h2">{{ item.name }}</div>
				<img class="catalog__img" :src="`/images/catalogs/${item.img}.png`" :alt="item.name">
			</NuxtLink>			
		</div>
</template>