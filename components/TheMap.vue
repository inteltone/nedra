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
<style lang="scss">
.map{
	position: relative;
	display: grid;
	grid-template-columns: repeat(12,1fr);
	gap: 0 20px;
	margin-block-end: 60px;
	&__title-block{
		position: absolute;
		inset-block-start: 106px;
	}
	&__title{
	}
	&__subtitle{}
	&__img{
		position: relative;
		inset-inline-end: 0;
		grid-column: 1 / -1;
		justify-self: end;
		aspect-ratio: 1.6932;
		max-inline-size: 1314px;
		inline-size: 100%;
		block-size: auto;
		margin-inline-end: 72px;
		margin-block-end: 32px;
		img{
			inline-size: 100%;
			block-size: 100%;
		}
	}
	&__btm{
		grid-column: 3 / -1;
		display: grid;
		grid-template-columns: 270px 464px 1fr;
		gap: 0 46px;
	}
	&__select{
		block-size: 56px;
		.option.active{
			justify-content: unset;			
			[class^="icon-"]:first-of-type{
				font-size: 24px;
			}
			[class="icon-arrow-down"]{
				margin-inline-start: auto;
			}
		}
	}
}

// .location.rostov{
// 	inset-inline-start: 73%;
// 	inset-block-start: 55%;	
// }
// .location.voronezh{
// 	inset-inline-start: 40%;
// 	inset-block-start: 70%;	
// }
</style>