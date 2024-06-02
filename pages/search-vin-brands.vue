<script setup>
const BRANDS = [
	{img: 'audi', name: 'Audi'},{img: 'bmw', name: 'BMW'},{img: 'mersedes', name: 'Mersedes-Benz'},{img: 'skoda', name: 'Skoda'},{img: 'audi', name: 'Audi'},{img: 'bmw', name: 'BMW'},{img: 'mersedes', name: 'Mersedes-Benz'},{img: 'skoda', name: 'Skoda'},{img: 'audi', name: 'Audi'},{img: 'bmw', name: 'BMW'},{img: 'mersedes', name: 'Mersedes-Benz'},{img: 'skoda', name: 'Skoda'},
]
const brands = reactive(BRANDS)
</script>
<template>
	<NuxtLayout>
		<ul class="breadcrums">
			<li class="breadcrums__item">
				<NuxtLink to="/" class="breadcrums__link">Главная</NuxtLink>
			</li>
			<li class="breadcrums__item">
				<span class="breadcrums__idle">Оригинальный каталог</span>
			</li>
		</ul>		
		<ThePageTitle class="search-vin-brands__title" title="Оригинальный каталог" />
		<div class="search-vin-brands">
			<form class="search-vin-brands__form" >
				<span class="search-vin-brands__form-title">Поиск по VIN номеру</span>
				<input type="search" placeholder="Введите VIN номер, например, WAUZZZ00121415125">
				<BaseButton text="Найти" />
			</form>
			<div class="brands-output auto-grid">
				<NuxtLink to="/" class="brands-output__item" v-for="brand in brands" :key="brand.name">
					<div class="brands-output__item-img">
						<img :src="`/images/brands/${brand.img}.png`" :alt="`Логотип ${brand.name}`">
					</div>
					<div class="brands-output__item-name">{{ brand.name }}</div>
				</NuxtLink>
			</div>
			<BaseButton class="search-vin-brands__btn" text="Все бренды" />
		</div>
	</NuxtLayout>
</template>