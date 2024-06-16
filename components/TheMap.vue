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
// выпадающие списки с городами и улицами
const selectCities = ref([
	{
		city: 'Ростов-на-Дону', num: 4,
		addresses: ['проспект Михаила Нагибина, д. 155', 'ул. Ленина, д. 1', 'ул. Маркса, д. 2', 'ул. Энгельса, д. 3']
	},
	{
		city: 'Воронеж', num: 2,
		addresses: ['ул. Лермонтова, д. 13', 'Ленинский проспект, д. 109']
	},
	{
		city: 'Бийск', num: 1,
		addresses: ['ул. Верстальщиков, д. 777']
	},
	{
		city: 'Липецк', num: 3,
		addresses: ['ул. Солнечная, д. 48', 'Московский проспект, д. 67', 'ул. Баррикадная, д. 35']
	},	
])
const isCityOptions = ref(false)
const selectCityIndex = ref(0)
function optionCityClicked(index) {
	selectCityIndex.value = index
	isCityOptions.value = false
	isAddressOptions.value = false
}
const isAddressOptions = ref(false)
const selectAddressIndex = ref(0)
function optionAddressClicked(index) {
	selectAddressIndex.value = index
	isAddressOptions.value = false
	isCityOptions.value = false
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
				<button class="option active"
					@click="isCityOptions = !isCityOptions"
				>
					<i class="icon-location"></i>
					<span class="selected">{{selectCities[selectCityIndex].city}} [{{selectCities[selectCityIndex].num}}]</span>
					<i class="icon-arrow-down" :class="{rotate: isCityOptions}"></i>
				</button>
				<div class="options" :class="{show: isCityOptions}">
					<button class="option"
						v-for="item,index in selectCities"
						@click="optionCityClicked(index)"
						:class="{hide: selectCityIndex === index}"
					>
						{{item.city}} [{{item.num}}]
					</button>					
				</div>
			</div>
			<div class="map__select select">
				<button class="option active"
				@click="isAddressOptions = !isAddressOptions"
				>
					<i class="icon-near"></i>
					<span class="selected">{{selectCities[selectCityIndex].addresses[selectAddressIndex]}}</span>
					<i class="icon-arrow-down"></i>
				</button>
				<div class="options" :class="{show: isAddressOptions && selectCities[selectCityIndex].addresses.length > 1}">
					<button class="option"
						v-for="item,index in selectCities[selectCityIndex].addresses"
						@click="optionAddressClicked(index)"
						:class="{hide: selectAddressIndex === index}"						
					>{{item}}</button>					
				</div>
			</div>
			<NuxtLink to="/" class="btn-ghost">Все города</NuxtLink>
		</div>
	</section>
</template>