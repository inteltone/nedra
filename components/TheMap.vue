<script setup>
const cities = reactive([
	{name: 'Бийск', x: 73, y: 55, address: 'Проспект Михаила Нагибина, д. 155', isActive: false},
	{name: 'Воронеж', x: 40, y: 70, address: 'Улица Ленина, д. 1а', isActive: false},
])
const showCity = (city) => {
	if (city.isActive === true) {
		city.isActive = false
		return
	}
	hideTooltips()
	city.isActive = true
}
const hideTooltips = () => {
	cities.forEach(item => {
		item.isActive = false
	})
}
</script>
<template>
	<section class="map">
		<div class="map__title-block">
			<h1 class="map__title">Мы открыты в 23 регионах</h1>
			<p class="map__subtitle description">Цены ниже, доставка быстрее!</p>
		</div>
		<div class="map__img">
			<img src="/images/misc/map.png" alt="Карта" @click="hideTooltips">

			<div 
				v-for="city in cities" 
				:key="city.name" 
				class="location" 
				:class="{active: city.isActive === true}"
				:style="`inset-inline-start: ${city.x}%;inset-block-start: ${city.y}%;`" 
			>
				<div class="location__line"></div>
				<div class="location__desc" @click="showCity(city)">
					<div class="location__desc-city">{{ city.name }}</div>
					<div class="location__desc-address">
						<i class="icon-near"></i>
						{{ city.address }}
					</div>
				</div>
				<div class="location__dot" @click="showCity(city)">
					<i class="icon-location"></i>
				</div>				
			</div>			
		</div>
		<div class="map__btm">
			<div class="map__select select">
				<div class="option active">
					<i class="icon-location"></i>
					Ростов-на-Дону [4]
					<i class="icon-arrow-down"></i>
				</div>
			</div>
			<div class="map__select select">
				<div class="option active">
					<i class="icon-near"></i>
					проспект Михаила Нагибина, д. 155
					<i class="icon-arrow-down"></i>
				</div>
			</div>
			<NuxtLink to="/" class="btn-ghost">Все города</NuxtLink>
		</div>
	</section>
</template>