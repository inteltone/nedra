<script setup>
const headItems = ref(['Марка','Модель','Модификация','Год','Рынок','Двигатель','Номер двигателя','КПП','Цвет кузова'])
const rowItems = ref(['AUDI','A6','2.4 AVANT','2001','Европа','ALF V6 / 193 hp','105724','EZZ (5A)','4Z4Z'])
</script>
<template>
	<NuxtLayout>
		<TheBreadcrum />	
		<ThePageTitle class="search-vin-brands__title" title="Оригинальный каталог" />
		<div class="search-vin">
			<TheSearchVinForm class="mbe-47 bg-orange" />
			<div class="search-vin-table">
				<div class="search-vin-table__head">
					<span v-for="item in headItems">{{item}}</span>					
				</div>
				<NuxtLink to="/" class="search-vin-table__row">
					<span v-for="item in rowItems">{{item}}</span>
				</NuxtLink>
			</div>
		</div>
	</NuxtLayout>
</template>